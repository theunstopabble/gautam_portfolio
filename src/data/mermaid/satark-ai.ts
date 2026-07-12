export const satarkAiArchitecture = `graph TB
  subgraph CLIENT["Client"]
    FE["React 18 + Vite<br/><small>Tailwind CSS, Wavesurfer.js</small>"]
  end
  subgraph EDGE["Edge Layer"]
    CF["Cloudflare Worker<br/><small>Image Proxy / HF Proxy</small>"]
  end
  subgraph API_G["API Gateway"]
    GW["Hono Server<br/><small>JWT · Rate Limit · SHA-256 Dedup</small>"]
    DB[("PostgreSQL<br/><small>Drizzle ORM</small>")]
  end
  subgraph ENGINE["AI Engine (Python)"]
    WV["Wav2Vec2<br/><small>Audio Detection</small>"]
    EC["ECAPA-TDNN<br/><small>Speaker Embeddings</small>"]
    SA["Spectral Analysis<br/><small>Librosa</small>"]
  end
  subgraph HF["Hugging Face API"]
    NV["Deepfake Detection Models<br/><small>prithivMLmods + umm-maybe</small>"]
  end
  FE --> GW
  GW --> DB
  GW --> ENGINE
  FE --> CF
  CF --> HF`;

export const satarkAiWorkflow = `graph TB
  A["User Uploads Audio"]
  B["POST /scan-upload"]
  C["Verify Clerk JWT"]
  D["SHA-256 File Hash<br/><small>Dedup Check</small>"]
  E{"Cache Hit?"}
  F["Return Cached Result"]
  G["Forward to Engine"]
  H["Load Wav2Vec2 Model"]
  I["Extract MFCC Features"]
  J["ML + Heuristic Scoring"]
  K["Save to PostgreSQL"]
  L["Return JSON Response"]
  M["Display Result<br/><small>Confidence Meter</small>"]
  A --> B
  B --> C
  C --> D
  D --> E
  E -->|Yes| F
  E -->|No| G
  G --> H
  H --> I
  I --> J
  J --> K
  K --> L
  F --> M
  L --> M`;

export const satarkAiDeployment = `graph TB
  subgraph SERVICES["Services"]
    WEB["Vercel<br/><small>satark-deepfake.vercel.app</small>"]
    API_G["Render<br/><small>API Gateway, Hono / Node.js</small>"]
    ENG["Render<br/><small>AI Engine, FastAPI / Docker</small>"]
    CF_W["Cloudflare Workers<br/><small>Image Proxy</small>"]
    DB_PG[("Supabase / Neon<br/><small>PostgreSQL 14+</small>")]
  end
  subgraph CI_CD["Automation"]
    CRON["Keep-Alive Cron<br/><small>Every 14 min</small>"]
  end
  WEB --> API_G
  WEB --> CF_W
  API_G --> DB_PG
  API_G --> ENG
  CRON --> API_G
  CRON --> ENG`;

export const satarkAiDbSchema = `graph TB
  SC["scans<br/><small>id, user_id, is_deepfake,<br/>confidence, file_hash</small>"]
  SP["speakers<br/><small>id, user_id, name,<br/>embedding, created_at</small>"]
  SC --> SP`;
