import type { DiagramData } from "./index";

export const satarkAiDeployment: DiagramData = {
  nodeDefs: [
    { id: "SERVICES", data: { label: "Services" }, isSubgraph: true },
    { id: "WEB", data: { label: "Vercel", sublabel: "satark-deepfake.vercel.app" }, parentId: "SERVICES" },
    { id: "API_G", data: { label: "Render", sublabel: "API Gateway, Hono / Node.js" }, parentId: "SERVICES" },
    { id: "ENG", data: { label: "Render", sublabel: "AI Engine, FastAPI / Docker" }, parentId: "SERVICES" },
    { id: "CF_W", data: { label: "Cloudflare Workers", sublabel: "Image Proxy" }, parentId: "SERVICES" },
    { id: "DB_PG", data: { label: "Supabase / Neon", sublabel: "PostgreSQL 14+, SSL" }, parentId: "SERVICES" },
    { id: "CI_CD", data: { label: "Automation" }, isSubgraph: true },
    { id: "CRON", data: { label: "Keep-Alive Cron", sublabel: "Every 14 min" }, parentId: "CI_CD" },
  ],
  edgeDefs: [
    { source: "WEB", target: "API_G" },
    { source: "WEB", target: "CF_W" },
    { source: "API_G", target: "DB_PG" },
    { source: "API_G", target: "ENG" },
    { source: "CRON", target: "API_G" },
    { source: "CRON", target: "ENG" },
  ],
};
