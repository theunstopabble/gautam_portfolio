import type { DiagramData } from "./index";

export const interviewmindsDbSchema: DiagramData = {
  nodeDefs: [
    { id: "CORE", data: { label: "Core Engine", sublabel: "Interviews | Questions | Resumes" } },
    { id: "USER", data: { label: "Identity & Access", sublabel: "Profiles | Tenants | Roles" } },
    { id: "SYS", data: { label: "Enterprise Infra", sublabel: "AuditLogs | Traces | Uptime" } },
    { id: "COMM", data: { label: "Comm & State", sublabel: "Messages | Notifications | Webhooks" } },
    { id: "REDIS", data: { label: "Redis Layer" }, isSubgraph: true },
    { id: "S", data: { label: "Sessions" }, parentId: "REDIS" },
    { id: "RL", data: { label: "Rate Limits" }, parentId: "REDIS" },
    { id: "Q", data: { label: "BullMQ Jobs" }, parentId: "REDIS" },
  ],
  edgeDefs: [
    { source: "CORE", target: "COMM" },
    { source: "USER", target: "CORE" },
    { source: "CORE", target: "SYS" },
    { source: "Q", target: "CORE" },
    { source: "S", target: "USER" },
  ],
};
