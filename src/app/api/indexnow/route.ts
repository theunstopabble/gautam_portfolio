import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_KEY = "ba4f5665b216c947e572f1846cfc2f11";
const PORTFOLIO_HOST = "gautam-kr.vercel.app";

const PROJECT_SITES: { host: string; urls: string[] }[] = [
  {
    host: PORTFOLIO_HOST,
    urls: [
      `https://${PORTFOLIO_HOST}`,
      `https://${PORTFOLIO_HOST}/projects/interviewminds`,
      `https://${PORTFOLIO_HOST}/projects/satark-ai`,
      `https://${PORTFOLIO_HOST}/projects/texfolio`,
      `https://${PORTFOLIO_HOST}/projects/swadkart`,
      `https://${PORTFOLIO_HOST}/experience`,
      `https://${PORTFOLIO_HOST}/skills`,
      `https://${PORTFOLIO_HOST}/education`,
      `https://${PORTFOLIO_HOST}/about`,
      `https://${PORTFOLIO_HOST}/faq`,
      `https://${PORTFOLIO_HOST}/contact`,
    ],
  },
  {
    host: "interviewminds.vercel.app",
    urls: ["https://interviewminds.vercel.app"],
  },
  {
    host: "satark-deepfake.vercel.app",
    urls: ["https://satark-deepfake.vercel.app"],
  },
  {
    host: "texfolio.vercel.app",
    urls: ["https://texfolio.vercel.app"],
  },
  {
    host: "swadkart.vercel.app",
    urls: ["https://swadkart.vercel.app"],
  },
];

async function submitBatch(host: string, urls: string[]) {
  const payload = {
    host,
    key: INDEXNOW_KEY,
    urlList: urls,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return { host, status: res.status, ok: res.ok, urls: urls };
}

export async function GET(req: NextRequest) {
  try {
    const manualUrls = req.nextUrl.searchParams.get("urls");

    // Manual trigger: submit specific URLs under portfolio host
    if (manualUrls) {
      const urls = manualUrls.split(",").map((u) => u.trim());
      const result = await submitBatch(PORTFOLIO_HOST, urls);
      return NextResponse.json({
        success: result.ok,
        status: result.status,
        message: result.ok
          ? `Submitted ${urls.length} URL(s) to IndexNow`
          : `IndexNow returned status ${result.status}`,
        urls,
      });
    }

    // Cron trigger: submit all project sites
    const results = await Promise.allSettled(
      PROJECT_SITES.map((site) => submitBatch(site.host, site.urls)),
    );

    const summary = results.map((r) =>
      r.status === "fulfilled"
        ? { host: r.value.host, status: r.value.status, ok: r.value.ok, urls: r.value.urls.length }
        : { host: "unknown", status: "error", ok: false, error: r.reason?.message },
    );

    const allOk = summary.every((s) => s.ok);
    const totalUrls = PROJECT_SITES.reduce((sum, s) => sum + s.urls.length, 0);

    return NextResponse.json({
      success: allOk,
      results: summary,
      message: allOk
        ? `All ${PROJECT_SITES.length} sites submitted (${totalUrls} URLs) to IndexNow`
        : `Some sites failed — check results for details`,
      totalUrls,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}
