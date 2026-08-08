import { NextRequest } from "next/server";

const PIXEL = new Uint8Array([
  0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00,
  0x80, 0x00, 0x00, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x2c,
  0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02,
  0x02, 0x44, 0x01, 0x00, 0x3f,
]);

const GATE: Map<string, number> = new Map();

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

function getBrand(src: string): string {
  if (!src) return "Direct";
  const domain = src.match(/https?:\/\/([^/]+)/)?.[1] || "";
  if (!domain || domain.includes("gautam-kr.vercel.app")) return "Direct";
  return known[Object.keys(known).find((k) => domain.includes(k)) || ""] || domain.replace(/^www\./, "");
}

async function relay(path: string, src: string) {
  const key = process.env.NOTIFY_KEY;
  const chat = process.env.DEST_ID;
  if (!key || !chat) return;

  const brand = getBrand(src);

  const text = encodeURIComponent(
    `👤 via ${brand}\n📍 ${path}\n🕐 ${new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" })}`
  );

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${key}/sendMessage?chat_id=${chat}&text=${text}&disable_web_page_preview=1`,
      { signal: AbortSignal.timeout(8000) },
    );
  } catch {}
}

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("ref") || "/";
  const src = req.nextUrl.searchParams.get("src") || "";

  const now = Date.now();
  const tag = path;
  const last = GATE.get(tag);
  if (!last || now - last > 5000) {
    GATE.set(tag, now);
    await relay(path, src);
  }

  return new Response(PIXEL, {
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Content-Length": "35",
    },
  });
}
