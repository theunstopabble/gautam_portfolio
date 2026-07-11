export const swadkartArchitecture = `%%{init: {"flowchart": {"subGraphTitleMargin": {"top": 10, "bottom": 40}, "rankSpacing": 80}, "themeVariables": {"fontSize": "26px"}} }%%
graph TB
  subgraph FRONTEND["Frontend — React 19 PWA"]
    UI["UI Layer<br/><small>Tailwind CSS + Lucide</small>"]
    ST["State Mgmt<br/><small>Redux Toolkit + RTK Query</small>"]
    RT["Realtime Client<br/><small>Socket.io + Auto-reconnect</small>"]
    PW["PWA Engine<br/><small>Service Worker + Cache API</small>"]
    AU["Auth Layer<br/><small>JWT + Firebase + WebAuthn</small>"]
    GW["API Gateway<br/><small>Helmet · CORS · Rate Limit · CSRF</small>"]
  end
  subgraph BACKEND["Backend — Node.js 22 + Express 5"]
    CT["Controllers<br/><small>Auth · Order · Payment · Restaurant</small>"]
    SK["Socket.io Server<br/><small>Redis Adapter + Rooms</small>"]
    AI["AI Service<br/><small>Groq LLM + Function Calling</small>"]
    BJ["Background Jobs<br/><small>BullMQ + Redis Worker</small>"]
    MG[("MongoDB Atlas<br/><small>14 Collections + Geo Indexes</small>")]
    RD[("Redis Cloud<br/><small>Session · Cache · Rate Limits</small>")]
    CL[("Cloudinary<br/><small>Image Upload + CDN</small>")]
  end
  UI --> GW
  ST --> GW
  RT --> GW
  AU --> GW
  GW --> CT
  GW --> SK
  GW --> AI
  GW --> BJ
  CT --> MG
  CT --> CL
  SK --> RD
  AI --> MG
  BJ --> MG
  BJ --> RD
  FRONTEND ~~~ BACKEND`;

export const swadkartWorkflow = `graph TB
  subgraph AUTH["Auth"]
    A1["Open App<br/><small>Install PWA</small>"]
    A2["Account Check<br/><small>Verify JWT</small>"]
    A3["Register<br/><small>OTP + Biometric</small>"]
    A4["Login<br/><small>JWT + Socket.io</small>"]
  end
  subgraph BROWSE["Browse"]
    B1["Browse Restaurants<br/><small>Cached Results</small>"]
    B2["View Menu<br/><small>AI Recommendations</small>"]
    B3["Manage Cart<br/><small>Add Items + Persist</small>"]
  end
  subgraph CHECKOUT["Checkout"]
    C1["Apply Coupon<br/><small>Validate + Expiry</small>"]
    C2["Enter Shipping<br/><small>Address + Geo-Fill</small>"]
    C3["Make Payment<br/><small>Razorpay / Wallet</small>"]
  end
  subgraph DELIVERY["Delivery"]
    D1["Fraud Check<br/><small>Rule Engine Push</small>"]
    D2["Restaurant Accepts<br/><small>Prepares Order</small>"]
    D3["Driver Assigned<br/><small>OTP Verification</small>"]
    D4["Live Tracking<br/><small>GPS Broadcast</small>"]
    D5["Delivered<br/><small>OTP Confirmation</small>"]
    D6["Review<br/><small>Rate + SwadCoins</small>"]
  end
  A1 --> A2
  A2 --> A3
  A2 --> A4
  A4 --> B1
  B1 --> B2
  B2 --> B3
  B3 --> C1
  C1 --> C2
  C2 --> C3
  C3 --> D1
  D1 --> D2
  D2 --> D3
  D3 --> D4
  D4 --> D5
  D5 --> D6`;

export const swadkartDeployment = `graph TB
  subgraph CICD["CI/CD Pipeline"]
    GH["Git Push main"]
    CHK["Lint + Syntax + Build"]
    AD["Auto Deploy"]
  end
  subgraph PROD["Production Services"]
    V["Vercel<br/><small>React 19 PWA + CDN</small>"]
    R["Render<br/><small>Express 5 + Socket.io</small>"]
    MA[("MongoDB Atlas<br/><small>14 Collections + GeoJSON</small>")]
    RC[("Redis Cloud<br/><small>Cache + Rate Limits</small>")]
    CL[("Cloudinary<br/><small>Image CDN</small>")]
    RZ[("Razorpay<br/><small>UPI / Cards / COD</small>")]
    BR[("Brevo<br/><small>Transactional Email</small>")]
  end
  GH --> CHK
  CHK --> AD
  AD --> V
  AD --> R
  V --> R
  V --> RZ
  R --> MA
  R --> RC
  R --> CL
  R --> BR`;

export const swadkartDbSchema = `graph TB
  USR["users<br/><small>name, email, phone, role</small>"]
  RST["restaurants<br/><small>GeoJSON, rating, isOpen</small>"]
  PRD["products<br/><small>price, variants, stock</small>"]
  ORD["orders<br/><small>status, deliveryOTP</small>"]
  CPN["coupons<br/><small>code, discount%, usedBy</small>"]
  NOT["notifications<br/><small>type, message, read</small>"]
  SUB["subscriptions<br/><small>plan, start/endDate</small>"]
  PAY["payouts<br/><small>amount, status</small>"]
  REV["reviews<br/><small>rating, comment</small>"]
  COI["coinTransactions<br/><small>amount, type</small>"]
  USR --> ORD
  USR --> RST
  USR --> SUB
  USR --> COI
  RST --> PRD
  RST --> PAY
  RST --> REV
  ORD --> CPN
  ORD --> REV`;
