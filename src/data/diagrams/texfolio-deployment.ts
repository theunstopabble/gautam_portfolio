import type { DiagramData } from "./index";

export const texfolioDeployment: DiagramData = {
  nodeDefs: [
    { id: "PROD", data: { label: "Production" }, isSubgraph: true },
    { id: "VERCEL", data: { label: "Vercel", sublabel: "texfolio.vercel.app, React SPA / CDN" }, parentId: "PROD" },
    { id: "RENDER", data: { label: "Render", sublabel: "texfolio-api.onrender.com, Hono + Node.js / Docker" }, parentId: "PROD" },
    { id: "ATLAS", data: { label: "MongoDB Atlas", sublabel: "M0+ Cluster, auto-indexing" }, parentId: "PROD" },
    { id: "REDIS_C", data: { label: "Redis Cloud", sublabel: "Rate Limits | BullMQ" }, parentId: "PROD" },
    { id: "LATEX_C", data: { label: "LaTeX Renderer", sublabel: "Docker Sidecar, pdflatex" }, parentId: "PROD" },
    { id: "CI_CD", data: { label: "CI/CD Pipeline" }, isSubgraph: true },
    { id: "GH", data: { label: "GitHub Actions" }, parentId: "CI_CD" },
    { id: "LINT", data: { label: "Lint" }, parentId: "CI_CD" },
    { id: "BUILD_D", data: { label: "Build:deploy" }, parentId: "CI_CD" },
  ],
  edgeDefs: [
    { source: "GH", target: "LINT" },
    { source: "LINT", target: "BUILD_D" },
    { source: "BUILD_D", target: "VERCEL" },
    { source: "BUILD_D", target: "RENDER" },
    { source: "RENDER", target: "ATLAS" },
    { source: "RENDER", target: "REDIS_C" },
    { source: "RENDER", target: "LATEX_C" },
  ],
};
