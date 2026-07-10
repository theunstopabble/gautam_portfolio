import type { DiagramData } from "./index";

export const satarkAiDbSchema: DiagramData = {
  nodeDefs: [
    { id: "SC", data: { label: "scans", sublabel: "PK: id, user_id, is_deepfake, confidence, file_hash, audio_data, analysis_details" } },
    { id: "SP", data: { label: "speakers", sublabel: "PK: id, user_id, name, embedding, created_at" } },
  ],
  edgeDefs: [
    { source: "SC", target: "SP" },
  ],
};
