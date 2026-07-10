import type { DiagramData } from "./index";

export const swadkartDeployment: DiagramData = {
  nodeDefs: [
    { id: "PROD", data: { label: "Production" }, isSubgraph: true },
    { id: "V", data: { label: "Vercel", sublabel: "React 19 PWA + CDN" }, parentId: "PROD" },
    { id: "R", data: { label: "Render", sublabel: "Express 5 + Socket.io" }, parentId: "PROD" },
    { id: "MA", data: { label: "MongoDB Atlas", sublabel: "14 Collections + GeoJSON" }, parentId: "PROD" },
    { id: "RC", data: { label: "Redis Cloud", sublabel: "Cache + Rate Limits" }, parentId: "PROD" },
    { id: "CL", data: { label: "Cloudinary", sublabel: "Image CDN" }, parentId: "PROD" },
    { id: "RZ", data: { label: "Razorpay", sublabel: "UPI / Cards / COD" }, parentId: "PROD" },
    { id: "BR", data: { label: "Brevo", sublabel: "Transactional Email" }, parentId: "PROD" },
    { id: "CICD", data: { label: "CI/CD" }, isSubgraph: true },
    { id: "GH", data: { label: "Git Push main" }, parentId: "CICD" },
    { id: "CHK", data: { label: "Lint + Syntax + Build" }, parentId: "CICD" },
    { id: "AD", data: { label: "Auto Deploy" }, parentId: "CICD" },
  ],
  edgeDefs: [
    { source: "GH", target: "CHK" },
    { source: "CHK", target: "AD" },
    { source: "AD", target: "V" },
    { source: "AD", target: "R" },
    { source: "V", target: "R" },
    { source: "R", target: "MA" },
    { source: "R", target: "RC" },
    { source: "R", target: "CL" },
    { source: "R", target: "BR" },
    { source: "V", target: "RZ" },
  ],
};

export const swadkartDeploymentMobile: DiagramData = {
  nodeDefs: [
    { id: "GH", data: { label: "Git Push main" } },
    { id: "AD", data: { label: "Auto Deploy" } },
    { id: "V", data: { label: "Vercel PWA" } },
    { id: "R", data: { label: "Render API" } },
    { id: "RZ", data: { label: "Razorpay" } },
    { id: "DB", data: { label: "MongoDB Atlas" } },
    { id: "RC", data: { label: "Redis Cloud" } },
    { id: "SX", data: { label: "Cloud Brevo" } },
    { id: "CL", data: { label: "Cloudinary" } },
    { id: "BR", data: { label: "Brevo Email" } },
  ],
  edgeDefs: [
    { source: "GH", target: "AD" },
    { source: "AD", target: "V" },
    { source: "AD", target: "R" },
    { source: "V", target: "RZ" },
    { source: "R", target: "DB" },
    { source: "DB", target: "RC" },
    { source: "R", target: "SX" },
    { source: "SX", target: "CL" },
    { source: "SX", target: "BR" },
  ],
};
