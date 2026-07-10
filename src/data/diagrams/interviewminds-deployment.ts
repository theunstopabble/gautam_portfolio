import type { DiagramData } from "./index";

export const interviewmindsDeployment: DiagramData = {
  nodeDefs: [
    { id: "PROD", data: { label: "Production" }, isSubgraph: true },
    { id: "VERCEL", data: { label: "Vercel", sublabel: "Frontend SPA, CDN Edge" }, parentId: "PROD" },
    { id: "RENDER", data: { label: "Render", sublabel: "Backend API, Docker / Node 20" }, parentId: "PROD" },
    { id: "MONGO", data: { label: "MongoDB Atlas", sublabel: "M10+ Cluster, Replica Set" }, parentId: "PROD" },
    { id: "REDIS_C", data: { label: "Redis Cloud", sublabel: "Sessions, BullMQ Queue" }, parentId: "PROD" },
    { id: "CI", data: { label: "CI/CD" }, isSubgraph: true },
    { id: "GH", data: { label: "GitHub Actions" }, parentId: "CI" },
    { id: "TC", data: { label: "Typecheck" }, parentId: "CI" },
    { id: "TEST", data: { label: "Test (39 tests)" }, parentId: "CI" },
    { id: "BUILD", data: { label: "Build" }, parentId: "CI" },
  ],
  edgeDefs: [
    { source: "GH", target: "TC" },
    { source: "TC", target: "TEST" },
    { source: "TEST", target: "BUILD" },
    { source: "BUILD", target: "VERCEL" },
    { source: "BUILD", target: "RENDER" },
    { source: "RENDER", target: "MONGO" },
    { source: "RENDER", target: "REDIS_C" },
    { source: "VERCEL", target: "RENDER" },
  ],
};
