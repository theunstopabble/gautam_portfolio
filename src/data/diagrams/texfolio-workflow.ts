import type { DiagramData } from "./index";

export const texfolioWorkflow: DiagramData = {
  nodeDefs: [
    { id: "AUTH", data: { label: "Auth Flow" }, isSubgraph: true },
    { id: "CL", data: { label: "Clerk JWT" }, parentId: "AUTH" },
    { id: "AU", data: { label: "authMiddleware" }, parentId: "AUTH" },
    { id: "ORG", data: { label: "RBAC Check", sublabel: "owner | admin | editor | viewer" }, parentId: "AUTH" },
    { id: "RESUME", data: { label: "Resume Management" }, isSubgraph: true },
    { id: "CR", data: { label: "Create Resume" }, parentId: "RESUME" },
    { id: "ED", data: { label: "Edit (drag-drop)" }, parentId: "RESUME" },
    { id: "CO", data: { label: "AI Coach", sublabel: "LangGraph 4-Stage" }, parentId: "RESUME" },
    { id: "PDF", data: { label: "PDF Generation" }, parentId: "RESUME" },
    { id: "AICOACH", data: { label: "AI Coach Pipeline" }, isSubgraph: true },
    { id: "C", data: { label: "1. Content Analysis" }, parentId: "AICOACH" },
    { id: "ATS", data: { label: "2. ATS Analysis" }, parentId: "AICOACH" },
    { id: "F", data: { label: "3. Format Analysis" }, parentId: "AICOACH" },
    { id: "I", data: { label: "4. Impact Analysis" }, parentId: "AICOACH" },
    { id: "S", data: { label: "5. Synthesize", sublabel: "Final Score + Recs" }, parentId: "AICOACH" },
  ],
  edgeDefs: [
    { source: "CL", target: "AU" },
    { source: "AU", target: "ORG" },
    { source: "CR", target: "ED" },
    { source: "ED", target: "CO" },
    { source: "CO", target: "PDF" },
    { source: "C", target: "ATS" },
    { source: "ATS", target: "F" },
    { source: "F", target: "I" },
    { source: "I", target: "S" },
    { source: "AUTH", target: "RESUME" },
    { source: "RESUME", target: "AICOACH" },
  ],
};
