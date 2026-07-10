import type { DiagramData } from "./index";

export const texfolioArchitecture: DiagramData = {
  nodeDefs: [
    { id: "ROOT", data: { label: " " }, isSubgraph: true },
    { id: "CLIENTS", data: { label: "Client" }, parentId: "ROOT", isSubgraph: true },
    { id: "BR", data: { label: "Browser", sublabel: "React 19 + Vite, Zustand + React Query" }, parentId: "CLIENTS" },
    { id: "SERVER", data: { label: "Hono v4 API Server" }, parentId: "ROOT", isSubgraph: true },
    { id: "MW", data: { label: "Middleware", sublabel: "CORS | Logger | Rate Limit" }, parentId: "SERVER" },
    { id: "AUTH", data: { label: "Auth Layer", sublabel: "Clerk JWT | RBAC | API Key" }, parentId: "SERVER" },
    { id: "ROUTES", data: { label: "Route Handlers", sublabel: "/resumes /ai /agents /payments" }, parentId: "SERVER" },
    { id: "SVC", data: { label: "Services", sublabel: "Resume | PDF | AI | Audit" }, parentId: "SERVER" },
    { id: "DATA_L", data: { label: "Data & Queue Layer" }, parentId: "ROOT", isSubgraph: true },
    { id: "MG", data: { label: "MongoDB Atlas", sublabel: "6 Collections" }, parentId: "DATA_L" },
    { id: "RD", data: { label: "Redis", sublabel: "Rate Limits | BullMQ" }, parentId: "DATA_L" },
    { id: "EXT", data: { label: "LLM Providers", sublabel: "NVIDIA NIM → Gemini → Groq" }, parentId: "DATA_L" },
    { id: "PDF", data: { label: "PDF Engine" }, parentId: "ROOT", isSubgraph: true },
    { id: "BULL", data: { label: "BullMQ Worker", sublabel: "Async PDF Gen" }, parentId: "PDF" },
    { id: "LATEX", data: { label: "pdflatex", sublabel: "Docker Container" }, parentId: "PDF" },
  ],
  edgeDefs: [
    { source: "BR", target: "MW" },
    { source: "MW", target: "AUTH" },
    { source: "AUTH", target: "ROUTES" },
    { source: "ROUTES", target: "SVC" },
    { source: "SVC", target: "MG" },
    { source: "SVC", target: "RD" },
    { source: "SVC", target: "EXT" },
    { source: "SVC", target: "BULL" },
    { source: "BULL", target: "LATEX" },
  ],
};
