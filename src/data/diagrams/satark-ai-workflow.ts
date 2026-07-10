import type { DiagramData } from "./index";

export const satarkAiWorkflow: DiagramData = {
  nodeDefs: [
    { id: "A", data: { label: "User Uploads Audio" } },
    { id: "B", data: { label: "POST /scan-upload" } },
    { id: "C", data: { label: "Verify Clerk JWT" } },
    { id: "D", data: { label: "SHA-256 File Hash", sublabel: "Dedup Check" } },
    { id: "E", data: { label: "Cache Hit?" } },
    { id: "F", data: { label: "Return Cached Result" } },
    { id: "G", data: { label: "Forward to Engine", sublabel: "POST /scan-upload" } },
    { id: "H", data: { label: "Load Wav2Vec2 Model" } },
    { id: "I", data: { label: "Extract MFCC Features" } },
    { id: "J", data: { label: "ML + Heuristic Scoring" } },
    { id: "K", data: { label: "Save to PostgreSQL" } },
    { id: "L", data: { label: "Return JSON Response" } },
    { id: "M", data: { label: "Display Result", sublabel: "Confidence Meter, Feature Chart" } },
  ],
  edgeDefs: [
    { source: "A", target: "B" },
    { source: "B", target: "C" },
    { source: "C", target: "D" },
    { source: "D", target: "E" },
    { source: "E", target: "F" },
    { source: "E", target: "G" },
    { source: "G", target: "H" },
    { source: "H", target: "I" },
    { source: "I", target: "J" },
    { source: "J", target: "K" },
    { source: "K", target: "L" },
    { source: "F", target: "M" },
    { source: "L", target: "M" },
  ],
};
