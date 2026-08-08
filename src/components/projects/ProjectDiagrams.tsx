"use client"

import { useState } from "react"

const DIAGRAM_TYPES = [
  { id: "architecture", label: "Architecture" },
  { id: "workflow", label: "Workflow" },
  { id: "deployment", label: "Deployment" },
  { id: "db-schema", label: "DB Schema" },
] as const

export function ProjectDiagrams({ projectId }: { projectId: string }) {
  const [active, setActive] = useState("architecture")

  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">System Diagrams</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {DIAGRAM_TYPES.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`cursor-pointer rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
              active === t.id
                ? "bg-white/10 text-white border-white/20"
                : "border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {DIAGRAM_TYPES.map((t) => (
        <div
          key={t.id}
          className={`rounded-lg border border-white/10 bg-zinc-950 overflow-auto ${
            active === t.id ? "block" : "hidden"
          }`}
        >
          <img
            src={`/diagrams/${projectId}-${t.id}.svg`}
            alt={`${projectId} ${t.label}`}
            className="block h-auto mx-auto"
            style={{ maxWidth: "100%", width: "auto", height: "auto" }}
          />
        </div>
      ))}
    </div>
  )
}
