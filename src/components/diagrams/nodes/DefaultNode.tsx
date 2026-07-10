import { memo } from "react";
import { Handle, Position, type NodeProps, type Node } from "@xyflow/react";

export type DefaultNodeType = Node<{
  label: string;
  sublabel?: string;
}>;

function DefaultNode({ data }: NodeProps<DefaultNodeType>) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-lg border border-[#27272A] bg-[#18181B] px-3 py-2 shadow-sm">
      <Handle type="target" position={Position.Top} className="!border-[#27272A] !bg-[#52525B]" />
        <div className="text-center leading-tight overflow-hidden">
          <div className="text-base md:text-xl font-semibold text-[#E4E4E7] leading-tight break-words">
            {data.label}
          </div>
          {data.sublabel && (
            <div className="mt-0.5 md:mt-1 text-sm md:text-base text-[#71717A] leading-tight break-words">
              {data.sublabel}
            </div>
          )}
        </div>
      <Handle type="source" position={Position.Bottom} className="!border-[#27272A] !bg-[#52525B]" />
    </div>
  );
}

export default memo(DefaultNode);
