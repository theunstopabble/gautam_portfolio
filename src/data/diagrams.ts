export interface ProjectDiagrams {
  architecture: string;
  workflow: string;
  dbSchema: string;
  deployment: string;
}

export const projectDiagrams: Record<string, ProjectDiagrams> = {
  interviewminds: {
    architecture: `graph TB
      subgraph ROOT[" "]
        direction TB
        subgraph CLIENTS["Clients"]
          direction TB
          B["Browser"]
          M["Mobile"]
          W["Webhook"]
        end
        subgraph GATEWAY["CDN / Edge"]
          direction TB
          LB["Vercel Edge / Cloudflare"]
        end
        subgraph SERVICES["Backend"]
          direction TB
          FE["Frontend<br/>React 18 + Vite<br/>Tailwind"]
          API["API Server<br/>Express + GraphQL<br/>81 Services"]
          WS["WebSocket<br/>Socket.IO<br/>Collaboration"]
        end
        subgraph DATA["Data Layer"]
          direction TB
          MG["MongoDB Atlas<br/>60+ Models<br/>Pool: 20"]
          RD["Redis Cloud<br/>Sessions | BullMQ<br/>Rate Limits"]
          EXT["External APIs<br/>Groq LLM | Piston<br/>Cloudinary | Azure"]
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
        API --> EXT
      end`,

    workflow: `graph TB
      subgraph SETUP["Setup"]
        direction TB
        A["Clone Repo"] --> B["npm install"]
        B --> C["cp .env"]
        C --> D["npm run dev"]
      end
      D --> E["Backend :8000"]
      D --> F["Frontend :5173"]
      E --> G["Auth (Clerk JWT)"]
      G --> H["Rate Limiting"]
      H --> I["RBAC Check"]
      I --> J["Route Handler"]
      J --> K["Service Layer"]
      K --> L["MongoDB / Redis"]
      K --> M["BullMQ Workers"]
      M --> N["Async PDF / Video"]`,

    deployment: `graph TB
      subgraph PROD["Production"]
        direction TB
        VERCEL["Vercel<br/>Frontend SPA<br/>CDN Edge"]
        RENDER["Render<br/>Backend API<br/>Docker / Node 20"]
        MONGO["MongoDB Atlas<br/>M10+ Cluster<br/>Replica Set"]
        REDIS_C["Redis Cloud<br/>Sessions<br/>BullMQ Queue"]
      end
      subgraph CI["CI/CD"]
        direction TB
        GH["GitHub Actions"]
        TC["Typecheck"]
        TEST["Test (39 tests)"]
        BUILD["Build"]
      end
      GH --> TC --> TEST --> BUILD
      BUILD --> VERCEL
      BUILD --> RENDER
      RENDER --> MONGO
      RENDER --> REDIS_C
      VERCEL --> RENDER`,

    dbSchema: `graph TB
      CORE["Core Engine<br/>Interviews | Questions | Resumes"]
      USER["Identity & Access<br/>Profiles | Tenants | Roles"]
      SYS["Enterprise Infra<br/>AuditLogs | Traces | Uptime"]
      COMM["Comm & State<br/>Messages | Notifications | Webhooks"]
      subgraph REDIS["Redis Layer"]
        direction TB
        S["Sessions"]
        RL["Rate Limits"]
        Q["BullMQ Jobs"]
      end
      CORE --> COMM
      USER --> CORE
      CORE --> SYS
      Q --> CORE
      S --> USER`,

    },

  "satark-ai": {
    architecture: `graph TB
      subgraph ROOT[" "]
        direction TB
        subgraph CLIENT["Client (Browser / PWA)"]
          direction TB
          FE["React 18 + Vite<br/>Tailwind CSS<br/>Wavesurfer.js"]
        end
        subgraph EDGE["Edge Layer"]
          direction TB
          CF["Cloudflare Worker<br/>Image Proxy / NIM Proxy"]
        end
        subgraph API_G["API Gateway (Node.js)"]
          direction TB
          GW["Hono Server<br/>JWT Verify | Rate Limit<br/>SHA-256 Dedup"]
          DB["PostgreSQL<br/>Drizzle ORM"]
        end
        subgraph ENGINE["AI Engine (Python)"]
          direction TB
          WV["Wav2Vec2<br/>Audio Detection"]
          EC["ECAPA-TDNN<br/>Speaker Embeddings"]
          SA["Spectral Analysis<br/>Librosa"]
        end
        subgraph NIM["NVIDIA NIM"]
          direction TB
          NV["Llama 3.2-90B Vision<br/>Deepfake Detection"]
        end
        FE --> GW
        GW --> DB
        GW --> ENGINE
        FE --> CF
        CF --> NIM
      end`,

    workflow: `graph TD
      A["User Uploads Audio"] --> B["POST /scan-upload"]
      B --> C["Verify Clerk JWT"]
      C --> D["SHA-256 File Hash<br/>Dedup Check"]
      D --> E{"Cache Hit?"}
      E -->|Yes| F["Return Cached Result"]
      E -->|No| G["Forward to Engine<br/>POST /scan-upload"]
      G --> H["Load Wav2Vec2 Model"]
      H --> I["Extract MFCC Features"]
      I --> J["ML + Heuristic Scoring"]
      J --> K["Save to PostgreSQL"]
      K --> L["Return JSON Response"]
      F --> M["Display Result<br/>Confidence Meter<br/>Feature Chart"]
      L --> M`,

    deployment: `graph TB
      subgraph SERVICES["Services"]
        direction TB
        WEB["Vercel<br/>satark-deepfake.vercel.app"]
        API_G["Render<br/>API Gateway<br/>Hono / Node.js"]
        ENG["Render<br/>AI Engine<br/>FastAPI / Docker"]
        CF_W["Cloudflare Workers<br/>Image Proxy"]
        DB_PG["Supabase / Neon<br/>PostgreSQL 14+<br/>SSL"]
      end
      subgraph CI_CD["Automation"]
        direction TB
        CRON["Keep-Alive Cron<br/>Every 14 min"]
      end
      WEB --> API_G
      WEB --> CF_W
      API_G --> DB_PG
      API_G --> ENG
      CRON --> API_G
      CRON --> ENG`,

    dbSchema: `graph TB
      SC["<b>scans</b><br/>PK: id, user_id<br/>is_deepfake, confidence<br/>file_hash, audio_data<br/>analysis_details"]
      SP["<b>speakers</b><br/>PK: id, user_id<br/>name, embedding<br/>created_at"]
      SC -->|user_id| SP`,
    },

  texfolio: {
    architecture: `graph TB
      subgraph ROOT[" "]
        direction TB
        subgraph CLIENTS["Client"]
          direction TB
          BR["Browser<br/>React 19 + Vite<br/>Zustand + React Query"]
        end
        subgraph SERVER["Hono v4 API Server"]
          direction TB
          MW["Middleware<br/>CORS | Logger | Rate Limit"]
          AUTH["Auth Layer<br/>Clerk JWT | RBAC | API Key"]
          ROUTES["Route Handlers<br/>/resumes /ai /agents /payments"]
          SVC["Services<br/>Resume | PDF | AI | Audit"]
        end
        subgraph DATA_L["Data & Queue Layer"]
          direction TB
          MG["MongoDB Atlas<br/>6 Collections"]
          RD["Redis<br/>Rate Limits | BullMQ"]
          EXT["LLM Providers<br/>NVIDIA NIM → Gemini → Groq"]
        end
        subgraph PDF["PDF Engine"]
          direction TB
          BULL["BullMQ Worker<br/>Async PDF Gen"]
          LATEX["pdflatex<br/>Docker Container"]
        end
        BR --> MW --> AUTH --> ROUTES --> SVC
        SVC --> MG
        SVC --> RD
        SVC --> EXT
        SVC --> BULL --> LATEX
      end`,

    workflow: `graph TD
      subgraph AUTH["Auth Flow"]
        direction TB
        CL["Clerk JWT"] --> AU["authMiddleware"]
        AU --> ORG["RBAC Check<br/>owner | admin | editor | viewer"]
      end
      subgraph RESUME["Resume Management"]
        direction TB
        CR["Create Resume"] --> ED["Edit (drag-drop)"]
        ED --> CO["AI Coach<br/>LangGraph 4-Stage"]
        CO --> PDF["PDF Generation"]
      end
      subgraph AICOACH["AI Coach Pipeline"]
        direction TB
        C["1. Content Analysis"] --> ATS["2. ATS Analysis"]
        ATS --> F["3. Format Analysis"]
        F --> I["4. Impact Analysis"]
        I --> S["5. Synthesize<br/>Final Score + Recs"]
      end
      AUTH --> RESUME
      RESUME --> AICOACH`,

    deployment: `graph TB
      subgraph PROD["Production"]
        direction TB
        VERCEL["Vercel<br/>texfolio.vercel.app<br/>React SPA / CDN"]
        RENDER["Render<br/>texfolio-api.onrender.com<br/>Hono + Node.js / Docker"]
        ATLAS["MongoDB Atlas<br/>M0+ Cluster<br/>auto-indexing"]
        REDIS_C["Redis Cloud<br/>Rate Limits | BullMQ"]
        LATEX_C["LaTeX Renderer<br/>Docker Sidecar<br/>pdflatex"]
      end
      subgraph CI_CD["CI/CD Pipeline"]
        direction TB
        GH["GitHub Actions"]
        LINT["Lint"]
        BUILD_D["Build:deploy"]
      end
      GH --> LINT --> BUILD_D
      BUILD_D --> VERCEL
      BUILD_D --> RENDER
      RENDER --> ATLAS
      RENDER --> REDIS_C
      RENDER --> LATEX_C`,

    dbSchema: `graph TB
      U["<b>users</b><br/>email, clerkId<br/>isPro, subscriptionId"]
      R["<b>resumes</b><br/>userId, personalInfo<br/>experience, education<br/>skills, visibility"]
      O["<b>organizations</b><br/>slug, ownerId<br/>branding, settings"]
      OM["<b>members</b><br/>orgId + userId<br/>role: owner|editor"]
      AL["<b>auditlogs</b><br/>actorId, action<br/>resourceType, TTL"]
      AK["<b>apikeys</b><br/>keyHash, scopes<br/>expiresAt, revokedAt"]
      U --> R
      U --> O
      O --> OM
      OM --> R
      U --> AL
      U --> AK
      O --> AK`,
    },

  swadkart: {
    architecture: `graph TB
      subgraph ROOT[" "]
        direction TB
        subgraph FRONTEND["Frontend (React 19 PWA)"]
          direction TB
          PWA["<b>PWA Shell</b><br/>Service Worker"]
          REDUX["<b>Redux Toolkit</b><br/>userSlice + cartSlice"]
          UI["<b>UI Layer</b><br/>Tailwind + Leaflet + Recharts"]
        end
        subgraph BACKEND["Backend (Node.js 22 + Express 5)"]
          direction TB
          MW["<b>Middleware</b><br/>Helmet | CORS | Rate Limit"]
          CTRL["<b>Controllers</b><br/>Auth | Order | Payment | Delivery"]
          AI_C["<b>AI Pipeline</b><br/>Groq LLM + Tools"]
          SOCK["<b>WebSocket</b><br/>Socket.IO Tracking"]
        end
        subgraph DATA["Data Layer"]
          direction TB
          MG["<b>MongoDB Atlas</b><br/>Users | Orders | Restaurants"]
          RD["<b>Redis</b><br/>Cache | Rate Limits"]
          EXT["<b>External APIs</b><br/>Razorpay | Cloudinary | Brevo"]
        end
        FRONTEND --> BACKEND
        BACKEND --> MG
        BACKEND --> RD
        BACKEND --> EXT
      end`,

    workflow: `graph TD
      A["Open App / PWA Install"] --> B{"Account?"}
      B -->|No| C["Register / OTP / Biometric"]
      B -->|Yes| D["Login / JWT Cookie"]
      C --> D
      D --> E["Home - Browse Restaurants<br/>(cached 5min)"]
      E --> F["Browse Menu + AI Recommendations"]
      F --> G["Add to Cart (Redux)"]
      G --> H{"Coupon?"}
      H -->|Yes| I["Apply Coupon / Validate"]
      H -->|No| J["Shipping Address"]
      I --> J
      J --> K["Payment<br/>Razorpay / COD / Wallet"]
      K --> L["Order Created"]
      L --> M["Restaurant Accepts"]
      M --> N["Driver Assigned + OTP"]
      N --> O["Live Tracking"]
      O --> P["Delivered + OTP Verify"]
      P --> Q["Rate & Review<br/>Earn SwadCoins"]`,

    deployment: `graph TB
      subgraph PROD["Production"]
        direction TB
        V["Vercel<br/>swadkart.vercel.app<br/>PWA / CDN Edge"]
        R["Render<br/>swadkart-backend.onrender.com<br/>Express + Socket.IO"]
        MA["MongoDB Atlas<br/>Replica Set<br/>10+ Collections"]
        RC["Redis Cloud<br/>Cache / Rate Limits<br/>(optional - in-memory fallback)"]
        CL["Cloudinary<br/>Image CDN"]
        RZ["Razorpay<br/>Payments"]
      end
      subgraph CI["CI/CD"]
        direction TB
        GH["Git Push → main"]
        AD["Auto Deploy"]
      end
      GH --> AD
      AD --> V
      AD --> R
      R --> MA
      R --> RC
      R --> CL
      V --> R
      V --> RZ`,

    dbSchema: `graph TB
      USR["<b>users</b><br/>name, email, phone<br/>walletBalance, biometricCreds"]
      RST["<b>restaurants</b><br/>GeoJSON location<br/>status, isOpen"]
      PRD["<b>products</b><br/>restaurantId, price<br/>variants, countInStock"]
      ORD["<b>orders</b><br/>status lifecycle<br/>deliveryOTP, paymentInfo"]
      CPN["<b>coupons</b><br/>code (unique)<br/>discountType, minOrderValue"]
      SUB["<b>subscriptions</b><br/>plan, start/endDate<br/>autoRenew"]
      NOT["<b>notifications</b><br/>type, title<br/>message, read"]
      PAY["<b>payouts</b><br/>restaurantId, amount<br/>status, bankDetails"]
      REV["<b>reviews</b><br/>rating, comment<br/>createdAt"]
      USR --> ORD
      USR --> SUB
      RST --> PRD
      RST --> ORD
      ORD --> REV
      ORD --> CPN`,
    },
};
