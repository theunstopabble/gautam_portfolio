import { NextRequest } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { resolveReferral } from "@/lib/referral";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const GATE: Map<string, number> = new Map();

async function relay(brand: string) {
  const key = process.env.NOTIFY_KEY;
  const chat = process.env.DEST_ID;
  if (!key || !chat) return;

  const text = encodeURIComponent(
    `👤 via ${brand}\n📍 /resume\n🕐 ${new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" })}`
  );

  try {
    await fetch(
      `https://api.telegram.org/bot${key}/sendMessage?chat_id=${chat}&text=${text}&disable_web_page_preview=1`,
      { signal: AbortSignal.timeout(8000) },
    );
  } catch {}
}

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "local";
  const now = Date.now();
  const last = GATE.get(ip);
  if (!last || now - last > 5000) {
    GATE.set(ip, now);
    await relay(
      resolveReferral(req.headers.get("referer") || "", {
        selfHost: req.headers.get("host") || "",
        selfLabel: "Site",
      }),
    );
  }

  try {
    const pdf = await readFile(
      path.join(process.cwd(), "public", "resume", "Gautam_Kumar_Resume.pdf"),
    );
    return new Response(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new Response("Resume not found", { status: 404 });
  }
}
