import { memo, type ReactNode } from "react";
import { type NodeProps, type Node } from "@xyflow/react";

export type SubgraphNodeType = Node<{
  label: string;
  children?: ReactNode;
}>;

function SubgraphNode({ data }: NodeProps<SubgraphNodeType>) {
  return (
    <div className="h-full w-full rounded-xl border border-[#27272A] bg-[#18181B]/80">
      <div className="flex h-full flex-col">
        <div className="flex-shrink-0 border-b border-[#27272A]/60 px-4 py-2.5">
          <span className="text-base font-semibold uppercase tracking-wider text-[#A1A1AA]">
            {data.label}
          </span>
        </div>
        <div className="flex-1" />
      </div>
    </div>
  );
}

export default memo(SubgraphNode);
