"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function Bridge() {
  const pathname = usePathname();
  const prev = useRef("");

  useEffect(() => {
    if (pathname === prev.current) return;
    prev.current = pathname;

    const src = document.referrer || "";
    const img = new Image();
    img.src = `/api/hello?ref=${encodeURIComponent(pathname)}&src=${encodeURIComponent(src)}`;
  }, [pathname]);

  return null;
}
