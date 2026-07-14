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
  if (!key || !chat) {
    console.error("relay: missing env vars", { hasKey: !!key, hasChat: !!chat });
    return;
  }

  const src = ref ? `\n🔗 ${ref.replace(/https?:\/\//, "")}` : "";
  const text = encodeURIComponent(
    `👤 Signal\n📍 ${path}\n🕐 ${new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}\n${src}`
  );

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${key}/sendMessage?chat_id=${chat}&text=${text}&disable_web_page_preview=1`,
      { signal: AbortSignal.timeout(4000) },
    );
    if (!res.ok) console.error("relay: telegram error", await res.text());
  } catch (e) {
    console.error("relay: fetch failed", e);
  }
}

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("ref") || "/";
  const ref = req.headers.get("referer") || "";

  if (path === "/status") {
    return Response.json({
      ok: true,
      hasKey: !!process.env.NOTIFY_KEY,
      hasChat: !!process.env.DEST_ID,
    });
  }

  if (path === "/debug") {
    const key = process.env.NOTIFY_KEY;
    const chat = process.env.DEST_ID;
    try {
      const text = encodeURIComponent("🔍 debug test from relay");
      const res = await fetch(
        `https://api.telegram.org/bot${key}/sendMessage?chat_id=${chat}&text=${text}&disable_web_page_preview=1`,
        { signal: AbortSignal.timeout(8000) },
      );
      const body = await res.text();
      return Response.json({ ok: res.ok, status: res.status, body });
    } catch (e: any) {
      return Response.json({ ok: false, error: e?.message || String(e), stack: e?.stack });
    }
  }

  const now = Date.now();
  const tag = path;
  const last = GATE.get(tag);
  if (!last || now - last > 5000) {
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
