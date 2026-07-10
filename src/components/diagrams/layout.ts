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
  for (const n of nodeDefs) {
    if (n.parentId) {
      if (!subChildren.has(n.parentId)) subChildren.set(n.parentId, []);
      subChildren.get(n.parentId)!.push(n.id);
    }
  }

  for (const [subId, childIds] of subChildren) {
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

  // Resolve vertical overlap — shift subgraph + its children together
  const subEntries = [...subChildren.entries()].filter(
    ([id]) => out.has(id)
  );
  subEntries.sort((a, b) => out.get(a[0])!.y - out.get(b[0])!.y);
  for (let i = 1; i < subEntries.length; i++) {
    const prev = out.get(subEntries[i - 1][0])!;
    const [currId] = subEntries[i];
    const curr = out.get(currId)!;
    const prevBottom = prev.y + prev.h;
    if (curr.y >= prevBottom) continue;
    const shift = prevBottom - curr.y + 8;
    curr.y += shift;
    for (const cId of subChildren.get(currId)!) {
      const p = out.get(cId);
      if (p) p.y += shift;
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
