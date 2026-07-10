import dagre from "dagre";

export type LayoutDirection = "TB" | "LR";

const NODE_W = 150;
const NODE_H = 120;
const SUB_PAD = 20;
const SUB_BOTTOM = 4;
const SUB_TITLE_H = 36;

export interface LayoutNodeDef {
  id: string;
  parentId?: string;
}

export interface LayoutEdgeDef {
  source: string;
  target: string;
}

interface Pos {
  x: number;
  y: number;
  w: number;
  h: number;
}

export function computeLayout(
  nodeDefs: LayoutNodeDef[],
  edgeDefs: LayoutEdgeDef[],
  direction: LayoutDirection = "TB",
  nodeW = NODE_W,
  nodeH = NODE_H,
  subPad = SUB_PAD,
  subTitleH = SUB_TITLE_H,
  rankSep = 36
): Map<string, Pos> {
  const g = new dagre.graphlib.Graph();
  g.setGraph({ rankdir: direction, nodesep: nodeW < 120 ? 8 : 14, ranksep: rankSep, marginx: 10, marginy: 10 });
  g.setDefaultEdgeLabel(() => ({}));

  for (const n of nodeDefs) {
    g.setNode(n.id, { width: nodeW, height: nodeH });
  }
  for (const e of edgeDefs) {
    g.setEdge(e.source, e.target);
  }
  dagre.layout(g);

  const out = new Map<string, Pos>();
  for (const n of nodeDefs) {
    const dn = g.node(n.id);
    if (!dn) continue;
    out.set(n.id, { x: dn.x - nodeW / 2, y: dn.y - nodeH / 2, w: nodeW, h: nodeH });
  }

  const subChildren = new Map<string, string[]>();
  const parentMap = new Map<string, string | null>();
  for (const n of nodeDefs) {
    parentMap.set(n.id, n.parentId ?? null);
    if (n.parentId) {
      if (!subChildren.has(n.parentId)) subChildren.set(n.parentId, []);
      subChildren.get(n.parentId)!.push(n.id);
    }
  }

  // Compute subgraph bounds in depth order (deepest first) so parent bounds use updated child sizes
  function getDepth(id: string, cache: Map<string, number>): number {
    if (cache.has(id)) return cache.get(id)!;
    const p = parentMap.get(id) ?? null;
    if (!p) { cache.set(id, 0); return 0; }
    const d = getDepth(p, cache) + 1;
    cache.set(id, d);
    return d;
  }
  const depthCache = new Map<string, number>();
  const sortedSub = [...subChildren.entries()].sort(
    (a, b) => getDepth(b[0], depthCache) - getDepth(a[0], depthCache)
  );

  for (const [subId, childIds] of sortedSub) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const cId of childIds) {
      const p = out.get(cId);
      if (!p) continue;
      minX = Math.min(minX, p.x);
      minY = Math.min(minY, p.y);
      maxX = Math.max(maxX, p.x + p.w);
      maxY = Math.max(maxY, p.y + p.h);
    }
    if (minX === Infinity) continue;

    const sx = minX - subPad;
    const sy = minY - subPad - subTitleH;
    const sw = maxX - minX + subPad * 2;
    const sh = maxY - minY + subPad + SUB_BOTTOM + subTitleH;

    out.set(subId, { x: sx, y: sy, w: sw, h: sh });
  }

  // Resolve subgraph overlap — only compare subgraphs at the same parent level
  const isLR = direction === "LR";
  const byParent = new Map<string | null, { id: string; children: string[] }[]>();
  for (const [subId, children] of subChildren) {
    const p = parentMap.get(subId) ?? null;
    if (!byParent.has(p)) byParent.set(p, []);
    byParent.get(p)!.push({ id: subId, children });
  }

  for (const [, group] of byParent) {
    if (group.length < 2) continue;
    if (!isLR) {
      group.sort((a, b) => out.get(a.id)!.y - out.get(b.id)!.y);
      for (let i = 1; i < group.length; i++) {
        const prev = out.get(group[i - 1].id)!;
        const curr = out.get(group[i].id)!;
        const prevEdge = prev.y + prev.h;
        if (curr.y >= prevEdge) continue;
        const shift = prevEdge - curr.y + 8;
        curr.y += shift;
        for (const cId of group[i].children) {
          const p = out.get(cId);
          if (p) p.y += shift;
        }
      }
    } else {
      group.sort((a, b) => out.get(a.id)!.x - out.get(b.id)!.x);
      for (let i = 1; i < group.length; i++) {
        const prev = out.get(group[i - 1].id)!;
        const curr = out.get(group[i].id)!;
        const prevEdge = prev.x + prev.w;
        if (curr.x >= prevEdge) continue;
        const shift = prevEdge - curr.x + 8;
        curr.x += shift;
        for (const cId of group[i].children) {
          const p = out.get(cId);
          if (p) p.x += shift;
        }
      }
    }
  }

  // Offset children relative to their parent subgraph
  for (const [subId, childIds] of subChildren) {
    const sp = out.get(subId);
    if (!sp) continue;
    for (const cId of childIds) {
      const p = out.get(cId);
      if (!p) continue;
      p.x -= sp.x;
      p.y -= sp.y;
    }
  }

  return out;
}
