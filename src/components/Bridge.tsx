"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Bridge() {
  const pathname = usePathname();

  useEffect(() => {
    const img = new Image();
    img.src = `/api/hello?ref=${encodeURIComponent(pathname)}`;
  }, [pathname]);

  return null;
}
