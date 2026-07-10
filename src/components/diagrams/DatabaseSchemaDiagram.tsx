"use client";

import { useState, useEffect } from "react";
import { ReactFlowBase } from "./ReactFlowBase";
import type { DiagramData } from "@/data/diagrams";

interface Props {
  data: DiagramData;
  mobileData?: DiagramData;
  title?: string;
}

export function DatabaseSchemaDiagram({ data, mobileData, title }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const active = isMobile && mobileData ? mobileData : data;
  return (
    <ReactFlowBase
      key={isMobile ? "mobile" : "desktop"}
      nodeDefs={active.nodeDefs}
      edgeDefs={active.edgeDefs}
      direction={active.direction ?? "TB"}
      title={title}
      minHeight={isMobile ? 250 : 320}
      fitViewPadding={isMobile ? 0.01 : 0.02}
      nodeWidth={isMobile ? 130 : undefined}
      nodeHeight={isMobile ? 70 : undefined}
      rankSep={isMobile ? 24 : undefined}
    />
  );
}
