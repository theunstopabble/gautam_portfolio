import type { DiagramData } from "./index";

export const texfolioDbSchema: DiagramData = {
  nodeDefs: [
    { id: "U", data: { label: "users", sublabel: "email, clerkId, isPro, subscriptionId" } },
    { id: "R", data: { label: "resumes", sublabel: "userId, personalInfo, experience, education, skills, visibility" } },
    { id: "O", data: { label: "organizations", sublabel: "slug, ownerId, branding, settings" } },
    { id: "OM", data: { label: "members", sublabel: "orgId + userId, role: owner|editor" } },
    { id: "AL", data: { label: "auditlogs", sublabel: "actorId, action, resourceType, TTL" } },
    { id: "AK", data: { label: "apikeys", sublabel: "keyHash, scopes, expiresAt, revokedAt" } },
  ],
  edgeDefs: [
    { source: "U", target: "R" },
    { source: "U", target: "O" },
    { source: "O", target: "OM" },
    { source: "OM", target: "R" },
    { source: "U", target: "AL" },
    { source: "U", target: "AK" },
    { source: "O", target: "AK" },
  ],
};
