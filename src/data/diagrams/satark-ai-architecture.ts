import type { DiagramData } from "./index";

export const satarkAiArchitecture: DiagramData = {
  nodeDefs: [
    { id: "ROOT", data: { label: " " }, isSubgraph: true },
    { id: "CLIENT", data: { label: "Client (Browser / PWA)" }, parentId: "ROOT", isSubgraph: true },
    { id: "FE", data: { label: "React 18 + Vite", sublabel: "Tailwind CSS, Wavesurfer.js" }, parentId: "CLIENT" },
    { id: "EDGE", data: { label: "Edge Layer" }, parentId: "ROOT", isSubgraph: true },
    { id: "CF", data: { label: "Cloudflare Worker", sublabel: "Image Proxy / NIM Proxy" }, parentId: "EDGE" },
    { id: "API_G", data: { label: "API Gateway (Node.js)" }, parentId: "ROOT", isSubgraph: true },
    { id: "GW", data: { label: "Hono Server", sublabel: "JWT Verify | Rate Limit, SHA-256 Dedup" }, parentId: "API_G" },
    { id: "DB", data: { label: "PostgreSQL", sublabel: "Drizzle ORM" }, parentId: "API_G" },
    { id: "ENGINE", data: { label: "AI Engine (Python)" }, parentId: "ROOT", isSubgraph: true },
    { id: "WV", data: { label: "Wav2Vec2", sublabel: "Audio Detection" }, parentId: "ENGINE" },
    { id: "EC", data: { label: "ECAPA-TDNN", sublabel: "Speaker Embeddings" }, parentId: "ENGINE" },
    { id: "SA", data: { label: "Spectral Analysis", sublabel: "Librosa" }, parentId: "ENGINE" },
    { id: "NIM", data: { label: "NVIDIA NIM" }, parentId: "ROOT", isSubgraph: true },
    { id: "NV", data: { label: "Llama 3.2-90B Vision", sublabel: "Deepfake Detection" }, parentId: "NIM" },
  ],
  edgeDefs: [
    { source: "FE", target: "GW" },
    { source: "GW", target: "DB" },
    { source: "GW", target: "ENGINE" },
    { source: "FE", target: "CF" },
    { source: "CF", target: "NIM" },
  ],
};
