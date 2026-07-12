export const texfolioArchitecture = `graph TB
  subgraph CLIENT["Client"]
    BR["Browser<br/><small>React 19 + Vite, Zustand + React Query</small>"]
  end
  subgraph SERVER["Hono v4 API Server"]
    MW["Middleware<br/><small>CORS · Logger · Rate Limit</small>"]
    AUTH["Auth Layer<br/><small>Clerk JWT · RBAC · API Key</small>"]
    ROUTES["Route Handlers<br/><small>/resumes /ai /agents /payments</small>"]
    SVC["Services<br/><small>Resume · PDF · AI · Audit</small>"]
  end
  subgraph DATA_L["Data & Queue Layer"]
    MG[("MongoDB Atlas<br/><small>6 Collections</small>")]
    RD[("Redis<br/><small>Rate Limits · BullMQ</small>")]
    EXT[("LLM Providers<br/><small>Gemini · Groq</small>")]
  end
  subgraph PDF["PDF Engine"]
    BULL["BullMQ Worker<br/><small>Async PDF Gen</small>"]
    LATEX["pdflatex<br/><small>Docker Container</small>"]
  end
  BR --> MW
  MW --> AUTH
  AUTH --> ROUTES
  ROUTES --> SVC
  SVC --> MG
  SVC --> RD
  SVC --> EXT
  SVC --> BULL
  BULL --> LATEX`;

export const texfolioWorkflow = `graph TB
  subgraph AUTH["Auth Flow"]
    CL["Clerk JWT"]
    AU["authMiddleware"]
    ORG["RBAC Check<br/><small>owner · admin · editor · viewer</small>"]
  end
  subgraph RESUME["Resume Management"]
    CR["Create Resume"]
    ED["Edit (drag-drop)"]
    CO["AI Coach<br/><small>LangGraph 4-Stage</small>"]
    PDF["PDF Generation"]
  end
  subgraph AICOACH["AI Coach Pipeline"]
    C["1. Content Analysis"]
    ATS["2. ATS Analysis"]
    F["3. Format Analysis"]
    I["4. Impact Analysis"]
    S["5. Synthesize<br/><small>Final Score + Recs</small>"]
  end
  CL --> AU
  AU --> ORG
  CR --> ED
  ED --> CO
  CO --> PDF
  C --> ATS
  ATS --> F
  F --> I
  I --> S
  ORG --> CR
  PDF --> C`;

export const texfolioDeployment = `graph TB
  subgraph CI_CD["CI/CD Pipeline"]
    GH["GitHub Actions"]
    LINT["Lint"]
    BUILD_D["Build:<br/>deploy"]
  end
  subgraph PROD["Production Services"]
    V["Vercel<br/><small>texfolio.vercel.app, React SPA</small>"]
    R["Render<br/><small>texfolio-api.onrender.com, Hono + Docker</small>"]
    MA[("MongoDB Atlas<br/><small>M0+ Cluster, auto-indexing</small>")]
    RD[("Redis Cloud<br/><small>Rate Limits · BullMQ</small>")]
    LC["LaTeX Renderer<br/><small>Docker Sidecar, pdflatex</small>"]
  end
  GH --> LINT
  LINT --> BUILD_D
  BUILD_D --> V
  BUILD_D --> R
  R --> MA
  R --> RD
  R --> LC`;

export const texfolioDbSchema = `graph TB
  U["users<br/><small>email, clerkId, isPro, subscriptionId</small>"]
  R["resumes<br/><small>userId, personalInfo,<br/>experience, education, skills</small>"]
  O["organizations<br/><small>slug, ownerId, branding, settings</small>"]
  OM["members<br/><small>orgId + userId, role</small>"]
  AL["auditlogs<br/><small>actorId, action, resourceType</small>"]
  AK["apikeys<br/><small>keyHash, scopes, expiresAt</small>"]
  U --> R
  U --> O
  O --> OM
  OM --> R
  U --> AL
  U --> AK
  O --> AK`;
