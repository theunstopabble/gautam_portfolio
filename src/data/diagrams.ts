export interface ProjectDiagrams {
  architecture: string;
  workflow: string;
  dbSchema: string;
  deployment: string;
}

export const projectDiagrams: Record<string, ProjectDiagrams> = {
  interviewminds: {
    architecture: `graph TB
      subgraph CLIENTS["Clients"]
        B["Browser"]
        M["Mobile"]
        W["Webhook"]
      end
      subgraph CDN["CDN / Load Balancer"]
        LB["Vercel Edge / Cloudflare"]
      end
      subgraph BACKEND["Backend"]
        FE["Frontend<br/>React 18 + Vite<br/>Tailwind"]
        API["API Server<br/>Express + GraphQL<br/>81 Services"]
        WS["WebSocket<br/>Socket.IO<br/>Collaboration"]
      end
      subgraph DATA["Data Layer"]
        MG["MongoDB Atlas<br/>7 Models<br/>Pool: 20"]
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
      API --> EXT`,

    workflow: `graph LR
      A["Clone Repo"] --> B["npm install"]
      B --> C["cp .env.example .env"]
      C --> D["npm run dev"]
      D --> E["Backend :8000"]
      D --> F["Frontend :5173"]
      E --> G["Middleware Pipeline"]
      G --> H["Auth (Clerk JWT)"]
      G --> I["Rate Limiting"]
      G --> J["RBAC"]
      H --> K["Route Handler"]
      I --> K
      J --> K
      K --> L["Service Layer"]
      L --> M["MongoDB / Redis"]
      K --> N["BullMQ Workers"]
      N --> O["Async PDF / Video"]`,

    deployment: `graph TB
      subgraph PROD["Production"]
        VERCEL["Vercel<br/>Frontend SPA<br/>CDN Edge"]
        RENDER["Render<br/>Backend API<br/>Docker / Node 20"]
        MONGO["MongoDB Atlas<br/>M10+ Cluster<br/>Replica Set"]
        REDIS_C["Redis Cloud<br/>Sessions<br/>BullMQ Queue"]
      end
      subgraph CI["CI/CD"]
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
      subgraph MONGO["MongoDB Atlas - 7 Collections"]
        I["Interviews<br/>userId, status, score<br/>messages, feedback"]
        R["Resumes<br/>userId, content<br/>chunks[embedding]"]
        U["UserRoles<br/>userId (unique)<br/>candidate|interviewer|admin"]
        A["AuditLogs<br/>userId, action<br/>resource, status"]
        M["Messages<br/>roomId, senderId<br/>content, type"]
        P["PracticeInterviews<br/>userId, role<br/>difficulty, questions"]
        H["Webhooks<br/>userId, url<br/>events, secret"]
      end
      subgraph REDIS["Redis"]
        S["Sessions (24h TTL)"]
        RL["Rate Limits (Window)"]
        C["Cache (Varies)"]
        Q["BullMQ Job Data"]
      end
      U --> I
      U --> R
      U --> A
      U --> P
      U --> H
      I --> M`,

  },

  "satark-ai": {
    architecture: `graph TB
      subgraph CLIENT["Client (Browser / PWA)"]
        FE["React 18 + Vite<br/>Tailwind CSS<br/>Wavesurfer.js"]
      end
      subgraph API["Hono API Gateway (Node.js)"]
        GW["JWT Verify<br/>Rate Limiting<br/>SHA-256 Dedup"]
        DB["PostgreSQL<br/>Drizzle ORM"]
      end
      subgraph ENGINE["FastAPI AI Engine (Python 3.11)"]
        WV["Wav2Vec2<br/>Audio Detection"]
        EC["ECAPA-TDNN<br/>Speaker Embeddings<br/>192-dim"]
        SA["Spectral Analysis<br/>Librosa"]
      end
      subgraph EDGE["Cloudflare Worker"]
        CF["Image Proxy<br/>NVIDIA NIM Proxy"]
      end
      subgraph NIM["NVIDIA NIM API"]
        NV["Llama 3.2-90B Vision<br/>Deepfake Detection"]
      end
      FE --> GW
      GW --> DB
      GW --> ENGINE
      FE --> EDGE
      EDGE --> NIM`,

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
        WEB["Vercel<br/>satark-deepfake.vercel.app"]
        API_G["Render<br/>API Gateway<br/>Hono / Node.js"]
        ENG["Render<br/>AI Engine<br/>FastAPI / Docker"]
        CF_W["Cloudflare Workers<br/>Image Proxy"]
        DB_PG["Supabase / Neon<br/>PostgreSQL 14+<br/>SSL"]
      end
      subgraph CI_CD["Automation"]
        CRON["Keep-Alive Cron<br/>Every 14 min"]
      end
      WEB --> API_G
      WEB --> CF_W
      API_G --> DB_PG
      API_G --> ENG
      CRON --> API_G
      CRON --> ENG`,

    dbSchema: `graph TB
      subgraph PG["PostgreSQL"]
        SC["scans<br/>id (serial PK)<br/>user_id (text, indexed)<br/>scan_type (indexed)<br/>is_deepfake (boolean)<br/>confidence_score (float)<br/>file_hash (indexed, dedup)<br/>audio_data (base64 text)<br/>analysis_details (XAI)<br/>created_at (indexed)<br/>feedback (text)"]
        SP["speakers<br/>id (uuid PK)<br/>user_id (text, indexed)<br/>name (text)<br/>embedding (json - 192dim)<br/>created_at (timestamp)"]
      end
      SC -->|user_id| SP
      style SC fill:#1a1a2e,stroke:#8B5CF6
      style SP fill:#1a1a2e,stroke:#06B6D4`,
  },

  texfolio: {
    architecture: `graph TB
      subgraph CLIENTS["Client"]
        BR["Browser<br/>React 19 + Vite<br/>Zustand + React Query"]
      end
      subgraph API_SERVER["Hono v4 API Server"]
        MW["Middleware Pipeline<br/>CORS | Logger | Rate Limit<br/>Input Sanitizer"]
        AUTH["Auth Layer<br/>Clerk JWT | RBAC<br/>API Key (HMAC)"]
        ROUTES["Route Handlers<br/>/resumes /ai /agents<br/>/organizations /payments"]
        SVC["Services<br/>Resume | PDF | AI<br/>Organization | Audit"]
      end
      subgraph DATA_L["Data Layer"]
        MG["MongoDB Atlas<br/>6 Collections<br/>Users | Resumes | Orgs<br/>AuditLogs | ApiKeys"]
        RD["Redis<br/>Rate Limits<br/>BullMQ Queue"]
        EXT["LLM Providers<br/>NVIDIA NIM → Gemini → Groq"]
      end
      subgraph PDF["PDF Engine"]
        LATEX["pdflatex<br/>Docker Container"]
        BULL["BullMQ Worker<br/>Async PDF Gen<br/>Concurrency: 2"]
      end
      BR --> MW --> AUTH --> ROUTES --> SVC
      SVC --> MG
      SVC --> RD
      SVC --> EXT
      SVC --> BULL --> LATEX`,

    workflow: `graph LR
      subgraph AUTH["Auth Flow"]
        CL["Clerk JWT"] --> AU["authMiddleware"]
        AU --> ORG["RBAC: owner / admin<br/>editor / viewer"]
      end
      subgraph RESUME["Resume Management"]
        CR["Create"] --> ED["Edit (drag-drop)"]
        ED --> CO["AI Coach<br/>LangGraph 4-Stage"]
        CO --> PDF["PDF Generation<br/>Synchronous / Async"]
      end
      subgraph AI["AI Coach Pipeline"]
        C["1. Content Analysis<br/>(30%)"] --> ATS["2. ATS Analysis<br/>(25%)"]
        ATS --> F["3. Format Analysis<br/>(20%)"]
        F --> I["4. Impact Analysis<br/>(25%)"]
        I --> S["5. Synthesize<br/>Final Score + Recs"]
      end
      subgraph ORG["Organizations"]
        TM["Team Management"] --> RB["Role-Based Access"]
        RB --> BRAND["Branding<br/>Templates | Colors"]
      end
      CR --> ED
      ORG --> RB`,

    deployment: `graph TB
      subgraph PROD["Production"]
        VERCEL["Vercel<br/>texfolio.vercel.app<br/>React SPA / CDN"]
        RENDER["Render<br/>texfolio-api.onrender.com<br/>Hono + Node.js / Docker"]
        ATLAS["MongoDB Atlas<br/>M0+ Cluster<br/>auto-indexing"]
        REDIS_C["Redis Cloud<br/>Rate Limits | BullMQ"]
        LATEX_C["LaTeX Renderer<br/>Docker Sidecar<br/>pdflatex"]
      end
      subgraph CI_CD["CI/CD Pipeline"]
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
      subgraph MONGO["MongoDB Atlas - 6 Collections"]
        U["users<br/>email (unique)<br/>clerkId (sparse)<br/>isPro, subscriptionId"]
        R["resumes<br/>userId (indexed)<br/>personalInfo, experience<br/>education, skills<br/>shareId (sparse)<br/>organizationId (sparse)<br/>visibility"]
        O["organizations<br/>slug (unique)<br/>ownerId<br/>branding, settings"]
        OM["organizationmembers<br/>(orgId+userId) unique<br/>role: owner|admin|editor|viewer"]
        AL["auditlogs<br/>actorId (indexed)<br/>action, resourceType<br/>TTL: 90 days"]
        AK["apikeys<br/>keyHash (indexed)<br/>userId, scopes<br/>expiresAt, revokedAt"]
      end
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
      subgraph FRONTEND["Frontend (React 19 PWA)"]
        PWA["PWA Shell<br/>Service Worker"]
        REDUX["Redux Toolkit<br/>userSlice + cartSlice"]
        UI["Tailwind CSS v3<br/>Leaflet Maps<br/>Recharts"]
      end
      subgraph BACKEND["Backend (Node.js 22 + Express 5)"]
        MW["Middleware Pipeline<br/>Helmet | CORS | Rate Limit<br/>NoSQL Sanitizer"]
        CTRL["Controllers (30+)<br/>Auth | Order | Payment<br/>Restaurant | Delivery"]
        AI_C["AI Chat Pipeline<br/>Groq LLM<br/>Multi-Tool Registry"]
        SOCK["Socket.IO<br/>Real-time Tracking<br/>Order Updates"]
      end
      subgraph DATA["Data Layer"]
        MG["MongoDB Atlas<br/>Users | Restaurants (GeoJSON)<br/>Products | Orders | Coupons<br/>Subscriptions | Payouts"]
        RD["Redis / In-Memory<br/>Cache | Rate Limits"]
        EXT_S["External<br/>Razorpay | Cloudinary<br/>Firebase | Brevo"]
      end
      FRONTEND --> BACKEND
      BACKEND --> MG
      BACKEND --> RD
      BACKEND --> EXT_S
      BACKEND --> SOCK`,

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
        V["Vercel<br/>swadkart.vercel.app<br/>PWA / CDN Edge"]
        R["Render<br/>swadkart-backend.onrender.com<br/>Express + Socket.IO"]
        MA["MongoDB Atlas<br/>Replica Set<br/>10+ Collections"]
        RC["Redis Cloud<br/>Cache / Rate Limits<br/>(optional - in-memory fallback)"]
        CL["Cloudinary<br/>Image CDN"]
        RZ["Razorpay<br/>Payments"]
      end
      subgraph CI["CI/CD"]
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
      subgraph MONGO["MongoDB Atlas - 10+ Collections"]
        USR["users<br/>name, email, phone<br/>password (hashed)<br/>walletBalance<br/>biometricCreds"]
        RST["restaurants<br/>name, address<br/>GeoJSON location<br/>status, isOpen"]
        PRD["products<br/>restaurantId<br/>name, price, variants<br/>countInStock, schedule<br/>category"]
        ORD["orders<br/>userId, restaurantId<br/>status lifecycle<br/>deliveryOTP, surgePrice<br/>paymentInfo"]
        CPN["coupons<br/>code (unique)<br/>discountType, value<br/>minOrderValue<br/>usedBy[]"]
        SUB["subscriptions (SwadPass)<br/>userId, plan<br/>startDate, endDate<br/>autoRenew"]
        NOT["notifications<br/>userId, type<br/>title, message<br/>read, createdAt"]
        GRP["grouporders<br/>hostId, shareLink<br/>participants[]<br/>items[]"]
        PAY["payouts<br/>restaurantId<br/>amount, status<br/>bankDetails"]
        REV["reviews<br/>userId, orderId<br/>rating, comment<br/>createdAt"]
      end
      USR --> ORD
      USR --> SUB
      USR --> GRP
      RST --> PRD
      RST --> ORD
      ORD --> REV
      ORD --> CPN`,
  },
};
