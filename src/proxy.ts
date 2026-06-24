import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept") || "";
  if (accept.includes("text/markdown")) {
    return NextResponse.rewrite(new URL("/llms.txt", request.url));
  }
}

export const config = {
  matcher: "/",
};
