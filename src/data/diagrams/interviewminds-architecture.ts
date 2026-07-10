import type { DiagramData } from "./index";

export const interviewmindsArchitecture: DiagramData = {
  nodeDefs: [
    { id: "ROOT", data: { label: " " }, isSubgraph: true },
    { id: "CLIENTS", data: { label: "Clients" }, parentId: "ROOT", isSubgraph: true },
    { id: "B", data: { label: "Browser" }, parentId: "CLIENTS" },
    { id: "M", data: { label: "Mobile" }, parentId: "CLIENTS" },
    { id: "W", data: { label: "Webhook" }, parentId: "CLIENTS" },
    { id: "GATEWAY", data: { label: "CDN / Edge" }, parentId: "ROOT", isSubgraph: true },
    { id: "LB", data: { label: "Vercel Edge / Cloudflare" }, parentId: "GATEWAY" },
    { id: "SERVICES", data: { label: "Backend" }, parentId: "ROOT", isSubgraph: true },
    { id: "FE", data: { label: "Frontend", sublabel: "React 18 + Vite, Tailwind" }, parentId: "SERVICES" },
    { id: "API", data: { label: "API Server", sublabel: "Express + GraphQL, 81 Services" }, parentId: "SERVICES" },
    { id: "WS", data: { label: "WebSocket", sublabel: "Socket.IO, Collaboration" }, parentId: "SERVICES" },
    { id: "DATA", data: { label: "Data Layer" }, parentId: "ROOT", isSubgraph: true },
    { id: "MG", data: { label: "MongoDB Atlas", sublabel: "60+ Models, Pool: 20" }, parentId: "DATA" },
    { id: "RD", data: { label: "Redis Cloud", sublabel: "Sessions | BullMQ, Rate Limits" }, parentId: "DATA" },
    { id: "EXT", data: { label: "External APIs", sublabel: "Groq LLM | Piston, Cloudinary | Azure" }, parentId: "DATA" },
  ],
  edgeDefs: [
    { source: "B", target: "LB" },
    { source: "M", target: "LB" },
    { source: "W", target: "LB" },
    { source: "LB", target: "FE" },
    { source: "LB", target: "API" },
    { source: "LB", target: "WS" },
    { source: "API", target: "MG" },
    { source: "API", target: "RD" },
    { source: "WS", target: "RD" },
    { source: "API", target: "EXT" },
  ],
};
