export const interviewmindsArchitecture = `graph TB
  subgraph CLIENTS["Clients"]
    B["Browser"]
    M["Mobile"]
    W["Webhook"]
  end
  subgraph EDGE["CDN / Edge"]
    LB["Vercel Edge / Cloudflare"]
  end
  subgraph BACKEND["Backend Services"]
    FE["Frontend<br/><small>React 18 + Vite, Tailwind</small>"]
    API["API Server<br/><small>Express + GraphQL, 81 Services</small>"]
    WS["WebSocket<br/><small>Socket.IO, Collaboration</small>"]
  end
  subgraph DATA["Data Layer"]
    MG[("MongoDB Atlas<br/><small>60+ Models, Pool: 20</small>")]
    RD[("Redis Cloud<br/><small>Sessions · BullMQ · Rate Limits</small>")]
    EXT[("External APIs<br/><small>Groq · Piston · Cloudinary · Azure</small>")]
  end
  B --> LB
  M --> LB
  W --> LB
  LB --> FE
  LB --> API
  LB --> WS
  API --> MG
  API --> RD
  WS --> RD
  API --> EXT`;

export const interviewmindsWorkflow = `graph TB
  subgraph SETUP["Setup"]
    A["Clone Repo"]
    B["npm install"]
    C["cp .env"]
    D["npm run dev"]
  end
  E["Backend :8000"]
  F["Frontend :5173"]
  G["Auth (Clerk JWT)"]
  H["Rate Limiting"]
  I["RBAC Check"]
  J["Route Handler"]
  K["Service Layer"]
  L[("MongoDB / Redis")]
  M["BullMQ Workers"]
  N["Async PDF / Video"]
  A --> B
  B --> C
  C --> D
  D --> E
  D --> F
  E --> G
  G --> H
  H --> I
  I --> J
  J --> K
  K --> L
  K --> M
  M --> N`;

export const interviewmindsDeployment = `graph TB
  subgraph CI["CI/CD Pipeline"]
    GH["GitHub Actions"]
    TC["Typecheck"]
    TEST["Test (39 tests)"]
    BUILD["Build"]
  end
  subgraph PROD["Production Services"]
    V["Vercel<br/><small>Frontend SPA, CDN Edge</small>"]
    R["Render<br/><small>Backend API, Docker / Node 20</small>"]
    MA[("MongoDB Atlas<br/><small>M10+ Cluster, Replica Set</small>")]
    RD[("Redis Cloud<br/><small>Sessions, BullMQ Queue</small>")]
  end
  GH --> TC
  TC --> TEST
  TEST --> BUILD
  BUILD --> V
  BUILD --> R
  V --> R
  R --> MA
  R --> RD`;

export const interviewmindsDbSchema = `graph TB
  CORE["Core Engine<br/><small>Interviews · Questions · Resumes</small>"]
  USER["Identity & Access<br/><small>Profiles · Tenants · Roles</small>"]
  SYS["Enterprise Infra<br/><small>AuditLogs · Traces · Uptime</small>"]
  COMM["Comm & State<br/><small>Messages · Notifications · Webhooks</small>"]
  subgraph REDIS["Redis Layer"]
    S["Sessions"]
    RL["Rate Limits"]
    Q["BullMQ Jobs"]
  end
  CORE --> COMM
  USER --> CORE
  CORE --> SYS
  Q --> CORE
  S --> USER`;
