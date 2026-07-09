"use client";

import { useEffect, useRef, useId } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    primaryColor: "#8B5CF6",
    primaryBorderColor: "#7C3AED",
    secondaryColor: "#3B82F6",
    tertiaryColor: "#1E1B4B",
    primaryTextColor: "#E4E4E7",
    secondaryTextColor: "#A1A1AA",
    lineColor: "#52525B",
    fontSize: "20px",
    fontFamily: "ui-monospace, monospace",
    mainBkg: "#18181B",
    nodeBorder: "#27272A",
    clusterBkg: "#18181B",
    clusterBorder: "#27272A",
    titleColor: "#E4E4E7",
    edgeLabelBackground: "#18181B",
    nodeTextColor: "#E4E4E7",
  },
  flowchart: { useMaxWidth: false, htmlLabels: true, curve: "basis" },
  sequence: { useMaxWidth: false },
  gantt: { useMaxWidth: false },
});

interface MermaidDiagramProps {
  chart: string;
  title?: string;
}

export function MermaidDiagram({ chart, title }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const uid = useId();
  const id = `mermaid-${uid}`;

  useEffect(() => {
    if (!ref.current) return;
    const render = async () => {
      ref.current!.innerHTML = "";
      const { svg } = await mermaid.render(id, chart);
      ref.current!.innerHTML = svg;
    };
    render();
  }, [chart, id]);

  return (
    <div className="rounded-xl border border-white/5 bg-white/2 p-4 md:p-6">
      {title && (
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
          {title}
        </h3>
      )}
      <div
        ref={ref}
        className="overflow-x-auto overflow-y-auto [&_svg]:block [&_svg]:mx-auto"
      />
    </div>
  );
}
