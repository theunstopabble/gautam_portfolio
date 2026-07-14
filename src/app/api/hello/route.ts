import { NextRequest } from "next/server";

const PIXEL = new Uint8Array([
  0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00,
  0x80, 0x00, 0x00, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x2c,
  0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02,
  0x02, 0x44, 0x01, 0x00, 0x3f,
]);

const GATE: Map<string, number> = new Map();

async function relay(path: string, ref: string) {
  const key = process.env.NOTIFY_KEY;
  const chat = process.env.DEST_ID;
  if (!key || !chat) return;

  const src = ref ? `\n🔗 ${ref.replace(/https?:\/\//, "")}` : "";
  const text = encodeURIComponent(
    `👤 Signal\n📍 ${path}\n🕐 ${new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}\n${src}`
  );

  try {
    await fetch(
      `https://api.telegram.org/bot${key}/sendMessage?chat_id=${chat}&text=${text}&disable_web_page_preview=1`,
      { signal: AbortSignal.timeout(4000) },
    );
  } catch {}
}

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("ref") || "/";
  const ref = req.headers.get("referer") || "";
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "";

  const now = Date.now();
  const tag = path + ip;
  const last = GATE.get(tag);
  if (!last || now - last > 30000) {
    GATE.set(tag, now);
    relay(path, ref);
  }

  return new Response(PIXEL, {
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Content-Length": "35",
    },
  });
}
