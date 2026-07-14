import { NextRequest, NextResponse } from "next/server";

const known: Record<string, string> = {
  "linkedin.com": "LinkedIn",
  "lnkd.in": "LinkedIn",
  "twitter.com": "𝕏",
  "x.com": "𝕏",
  "github.com": "GitHub",
  "facebook.com": "Facebook",
  "instagram.com": "Instagram",
  "reddit.com": "Reddit",
  "youtube.com": "YouTube",
  "t.me": "Telegram",
  "wa.me": "WhatsApp",
  "discord.com": "Discord",
  "medium.com": "Medium",
  "dev.to": "Dev.to",
  "hashnode.com": "Hashnode",
};

function getRef(req: NextRequest) {
  const ref = req.headers.get("referer") || "";
  const domain = ref.match(/https?:\/\/([^/]+)/)?.[1] || "";
  if (!domain || domain.includes("gautam-kr.vercel.app")) return null;
  return known[Object.keys(known).find((k) => domain.includes(k)) || ""] || domain.replace(/^www\./, "");
}

export function middleware(req: NextRequest) {
  const brand = getRef(req);
  if (!brand) return NextResponse.next();

  const key = process.env.NOTIFY_KEY;
  const chat = process.env.DEST_ID;
  if (!key || !chat) return NextResponse.next();

  const text = encodeURIComponent(
    `👤 via ${brand}\n📍 ${req.nextUrl.pathname}\n🕐 ${new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" })}`
  );

  const p = fetch(
    `https://api.telegram.org/bot${key}/sendMessage?chat_id=${chat}&text=${text}&disable_web_page_preview=1`,
    { signal: AbortSignal.timeout(4000) }
  ).catch(() => {});

  if (typeof (globalThis as any).waitUntil === "function") (globalThis as any).waitUntil(p);

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon|.*\\..*).*)"],
};
