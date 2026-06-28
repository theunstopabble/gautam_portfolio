import { NextResponse } from "next/server";

const INDEXNOW_KEY = "ba4f5665b216c947e572f1846cfc2f11";
const HOST = "gautam-kr.vercel.app";

const ALL_URLS = [
  `https://${HOST}`,
  `https://${HOST}/projects/interviewminds`,
  `https://${HOST}/projects/satark-ai`,
  `https://${HOST}/projects/texfolio`,
  `https://${HOST}/projects/swadkart`,
];

export async function GET() {
  try {
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: ALL_URLS,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: true,
      status: response.status,
      message: `Submitted ${ALL_URLS.length} URLs to IndexNow (Bing, Yandex, Seznam)`,
      urls: ALL_URLS,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}
