"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ReactFlow,
  Background,
  useReactFlow,
  ReactFlowProvider,
  type Node,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { DefaultNode, SubgraphNode } from "./nodes";
import { computeLayout, type LayoutDirection } from "./layout";

const RF_NODE_TYPES = {
  default: DefaultNode,
  subgraph: SubgraphNode,
};

export interface DiagramNodeDef {
  id: string;
  data: { label: string; sublabel?: string };
  parentId?: string;
  isSubgraph?: boolean;
}

export interface DiagramEdgeDef {
  source: string;
  target: string;
}

interface FlowInnerProps {
  nodeDefs: DiagramNodeDef[];
  edgeDefs: DiagramEdgeDef[];
  direction: LayoutDirection;
  fitViewPadding?: number;
  nodeWidth?: number;
  nodeHeight?: number;
  subPad?: number;
  subTitleH?: number;
  rankSep?: number;
  containerW?: number;
  containerH?: number;
  onContentHeight?: (h: number) => void;
  isMobile?: boolean;
}

function FlowInner({ nodeDefs, edgeDefs, direction, fitViewPadding = 0.08, nodeWidth, nodeHeight, subPad, subTitleH, rankSep, containerW = 300, containerH = 500, onContentHeight, isMobile = false }: FlowInnerProps) {
  const { setViewport } = useReactFlow();

  const layoutNodeDefs = useMemo(
    () => nodeDefs.map((n) => ({ id: n.id, parentId: n.parentId })),
    [nodeDefs]
  );

  const posMap = useMemo(
    () => computeLayout(layoutNodeDefs, edgeDefs, direction, nodeWidth, nodeHeight, subPad, subTitleH, rankSep),
    [layoutNodeDefs, edgeDefs, direction, nodeWidth, nodeHeight, subPad, subTitleH, rankSep]
  );

  const rfNodes: Node[] = useMemo(
    () =>
      nodeDefs.map((n) => {
        const p = posMap.get(n.id);
        const node: Node = {
          id: n.id,
          type: (n.isSubgraph ? "subgraph" : "default") as string,
          position: p ? { x: p.x, y: p.y } : { x: 0, y: 0 },
          data: { ...n.data, direction },
          draggable: false,
          selectable: false,
          focusable: false,
        };
        if (n.parentId) {
          node.parentId = n.parentId;
          (node as Record<string, unknown>).extent = "parent";
        }
        if (p) node.style = { width: p.w, height: p.h };
        return node;
      }),
    [nodeDefs, posMap, direction]
  );

  const rfEdges: Edge[] = useMemo(
    () =>
      edgeDefs.map((e, i) => ({
        id: `e-${i}`,
        source: e.source,
        target: e.target,
        type: "smoothstep",
        style: { stroke: "#52525B", strokeWidth: 1.5 },
      })),
    [edgeDefs]
  );

  // Build parent chain map for accurate absolute position computation
  const parentMap = useMemo(() => {
    const m = new Map<string, string | null>();
    for (const n of nodeDefs) m.set(n.id, n.parentId ?? null);
    return m;
  }, [nodeDefs]);

  const flowBounds = useMemo(() => {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const n of nodeDefs) {
      const p = posMap.get(n.id);
      if (!p) continue;
      let ax = p.x, ay = p.y;
      // Walk full parent chain for deeply nested subgraphs
      let pid = parentMap.get(n.id) ?? null;
      while (pid) {
        const pp = posMap.get(pid);
        if (pp) { ax += pp.x; ay += pp.y; }
        pid = parentMap.get(pid) ?? null;
      }
      minX = Math.min(minX, ax);
      minY = Math.min(minY, ay);
      maxX = Math.max(maxX, ax + p.w);
      maxY = Math.max(maxY, ay + p.h);
    }
    return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
  }, [nodeDefs, posMap, parentMap]);

  useEffect(() => {
    if (flowBounds.w === 0 || flowBounds.h === 0) return;
    const pad = fitViewPadding;
    let zoom = Math.min(
      containerW / (flowBounds.w * (1 + 2 * pad)),
      containerH / (flowBounds.h * (1 + 2 * pad))
    );
    zoom = Math.max(0.3, Math.min(2.0, zoom));
    setViewport({
      x: -flowBounds.x * zoom + containerW * pad,
      y: -flowBounds.y * zoom + containerH * pad,
      zoom,
    });
    const needed = Math.ceil(flowBounds.h * zoom + flowBounds.y * zoom + containerW * pad * 2);
    onContentHeight?.(Math.min(Math.max(needed, 200), 2000));
  }, [flowBounds, fitViewPadding, setViewport, containerW, containerH, onContentHeight]);

  return (
    <ReactFlow
      nodes={rfNodes}
      edges={rfEdges}
      nodeTypes={RF_NODE_TYPES}
      fitView={false}
      minZoom={0.3}
      maxZoom={2.0}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      panOnDrag={!isMobile}
      zoomOnScroll={!isMobile}
      zoomOnPinch={true}
      preventScrolling={!isMobile}
      proOptions={{ hideAttribution: true }}
      colorMode="dark"
    >
      <Background color="#27272A" gap={20} size={1} />
    </ReactFlow>
  );
}

interface ReactFlowBaseProps {
  nodeDefs: DiagramNodeDef[];
  edgeDefs: DiagramEdgeDef[];
  direction?: LayoutDirection;
  title?: string;
  minHeight?: number;
  fitViewPadding?: number;
  nodeWidth?: number;
  nodeHeight?: number;
  subPad?: number;
  subTitleH?: number;
  rankSep?: number;
}

export function ReactFlowBase({ nodeDefs, edgeDefs, direction = "TB", title, minHeight = 500, fitViewPadding, nodeWidth, nodeHeight, subPad, subTitleH, rankSep }: ReactFlowBaseProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 300, h: minHeight });
  const [contentH, setContentH] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setDims({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    ro.observe(el);
    setDims({ w: el.clientWidth, h: el.clientHeight });
    return () => ro.disconnect();
  }, []);

  return (
    <div className="rounded-xl border border-white/5 bg-white/2 px-4 pt-4 pb-4 md:px-6 md:pt-6 md:pb-5">
      {title && (
        <h3 className="mb-1 md:mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-300">
          {title}
        </h3>
      )}
      <div
        ref={wrapperRef}
        className="w-full overflow-hidden"
        style={{ height: contentH ?? minHeight }}
      >
        <ReactFlowProvider>
          <FlowInner
            nodeDefs={nodeDefs}
            edgeDefs={edgeDefs}
            direction={direction}
            fitViewPadding={fitViewPadding}
            nodeWidth={nodeWidth}
            nodeHeight={nodeHeight}
            subPad={subPad}
            subTitleH={subTitleH}
            rankSep={rankSep}
            containerW={dims.w}
            onContentHeight={setContentH}
            containerH={dims.h}
            isMobile={isMobile}
          />
        </ReactFlowProvider>
      </div>
    </div>
  );
}
