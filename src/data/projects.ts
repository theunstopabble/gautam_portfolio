import { Share2, UserCheck, FileText, ShoppingCart } from "lucide-react";
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "interviewminds",
    title: "InterviewMinds",
    tagline: "AI-Powered Mock Interview Platform",
    seoTitle: "InterviewMinds - AI-Powered Mock Interview Platform",
    seoDescription:
      "A production-grade AI mock interview platform featuring a custom automated proctoring system and a live built-in code compiler to replace generic chatbots with realistic tech assessments.",
    description:
      "A Production-grade AI Mock Interview Platform with 91 features across 18 phases. Features AI-powered interviews via Groq Llama 3.3-70b, real-time ML video proctoring (face-api.js with TensorFlow.js), CRDT collaborative code editor with three-way merge, WebRTC video calls with STUN/TURN + SFU, sandboxed code execution via Piston API, and multimodal voice tone analysis. Built as a Turborepo monorepo with 81 service modules, 38 route files, and 7 MongoDB models.",
    icon: UserCheck,
    tags: [
      "React 18",
      "TypeScript",
      "Node.js 20",
      "Express",
      "MongoDB",
      "Redis",
      "Groq LLM",
      "face-api.js",
      "WebRTC",
      "Socket.IO",
      "GraphQL",
      "BullMQ",
      "Turborepo",
    ],
    github: "https://github.com/theunstopabble/InterviewMinds",
    demo: "https://interviewminds.vercel.app/",
    image: "/projects/InterviewMinds.webp",
    featured: true,
    color: "from-purple-500 to-indigo-600",
    stats: {
      services: "81 Modules",
      features: "91 Enterprise",
      latency: "<500ms AI",
      phases: "18 Phases",
    },
    deepDive: {
      problem:
        "Traditional mock interviews are expensive, hard to schedule, and existing AI tools lack depth. Enterprise organizations need secure, scalable candidate evaluation with real-time proctoring, collaborative coding, and comprehensive analytics — but building this requires integrating ML models, real-time systems, and production-grade infrastructure.",
      solution:
        "Built a Turborepo monorepo with 81 backend service modules implementing 18 feature phases. Integrated Groq Llama 3.3-70b for sub-500ms AI responses, face-api.js with TensorFlow.js for real-time ML proctoring (face detection, eye tracking, expression analysis), a custom CRDT three-way merge algorithm for collaborative editing, WebRTC with STUN/TURN + optional SFU for video calls, and Piston API for sandboxed code execution in 20+ languages.",
      challenges: [
        "Implementing a CRDT three-way merge algorithm that preserves concurrent edits from multiple users without data loss — handling overlapping, non-overlapping, and append-type changes.",
        "Building an ML proctoring pipeline with graceful degradation — face-api.js for real inference when models load, content-derived analysis (never static values) as fallback.",
        "Preventing Redis quota exhaustion from BullMQ worker retry loops — implemented pause-on-error with exponential backoff.",
        "Designing a circuit breaker pattern for 5+ external services (Groq, Piston, Azure, Cloudinary) to prevent cascading failures.",
      ],
      techStack: [
        {
          name: "Frontend",
          tools:
            "React 18, Vite 7.3, TypeScript, Tailwind CSS, Shadcn UI, Monaco Editor, Clerk Auth, Socket.IO Client, face-api.js",
        },
        {
          name: "Backend",
          tools:
            "Node.js 20, Express 4.21, TypeScript, Apollo Server 4 (GraphQL), Socket.IO 4.8, BullMQ, Pino, Prometheus",
        },
        {
          name: "AI/ML",
          tools:
            "Groq (Llama 3.3-70b), face-api.js + TensorFlow.js, Azure Speech SDK, Piston API, Xenova Transformers",
        },
        {
          name: "Data",
          tools: "MongoDB (Mongoose 8), Redis (ioredis + BullMQ), Cloudinary",
        },
        {
          name: "Infrastructure",
          tools:
            "Turborepo, Vercel, Render (Docker), GitHub Actions CI/CD, Sentry, WebRTC (STUN/TURN)",
        },
      ],
    },
  },
  {
    id: "satark-ai",
    title: "Satark-AI",
    tagline: "Deepfake Audio Detection & Voice Verification",
    seoTitle: "Satark-AI - Deepfake Audio Detection & Voice Verification",
    seoDescription:
      "A comprehensive AI-driven security platform built with Python, FastAPI, and Supabase for real-time deepfake audio detection, synthetic voice identification, and secure voice verification.",
    description:
      "A production-grade deepfake detection platform built as a Turborepo microservices monorepo. Detects synthetic audio via Wav2Vec2 + MFCC spectral forensics, deepfake images via NVIDIA NIM (Llama 3.2-90B Vision) through a Cloudflare Worker proxy, and verifies speaker identity using ECAPA-TDNN voice biometrics with 192-dim embeddings and cosine similarity matching. Ships as a PWA with real-time microphone monitoring, analytics dashboard, and PDF report exports.",
    icon: Share2,
    tags: [
      "React 18",
      "TypeScript",
      "FastAPI",
      "PyTorch",
      "Hono",
      "PostgreSQL",
      "NVIDIA NIM",
      "Cloudflare Workers",
      "Turborepo",
      "SpeechBrain",
    ],
    github: "https://github.com/theunstopabble/Satark-AI",
    demo: "https://satark-deepfake.vercel.app/",
    image: "/projects/Satark-AI.webp",
    featured: true,
    color: "from-red-500 to-rose-600",
    stats: {
      models: "3 AI Models",
      pipeline: "Multi-Modal",
      vision: "90B Params",
      biometrics: "192-dim",
    },
    deepDive: {
      problem:
        "Generative AI has made it trivially easy to clone voices, fabricate images, and spread synthetic media. Existing detection tools are siloed — they handle either audio or images, never both — and often require expensive infrastructure or remain offline-only.",
      solution:
        "Architected a scalable Turborepo monorepo with three independent microservices: a React 18 PWA frontend, a Hono (Node.js) API gateway backed by PostgreSQL via Drizzle ORM with Clerk JWT auth, and a Python 3.11 FastAPI AI engine for audio deepfake detection (Wav2Vec2) and speaker biometrics (ECAPA-TDNN). Image deepfake detection runs on a fully serverless Cloudflare Worker proxy that forwards requests to NVIDIA NIM (Llama 3.2-90B Vision), completely independent of the Python engine. A GitHub Actions cron job pings both Render services every 14 minutes to prevent free-tier cold starts.",
      challenges: [
        "Designing a serverless image detection pipeline via Cloudflare Workers with strict CORS whitelisting, 5MB double-layer size enforcement, and 30s AbortController timeout against NVIDIA NIM — all without touching the Python engine.",
        "Implementing lazy model loading and thread executor offloading in FastAPI to prevent OOM crashes and keep the async event loop non-blocking on free-tier Render instances.",
        "Building per-user scoped speaker isolation — users can only verify against their own enrolled voice prints — with 192-dim ECAPA-TDNN embeddings stored in PostgreSQL and cosine similarity computed server-side (threshold: 0.75).",
      ],
      techStack: [
        {
          name: "Frontend",
          tools:
            "React 18, Vite, TypeScript, Tailwind CSS, Framer Motion, Recharts, Wavesurfer.js, Clerk Auth, PWA (Workbox)",
        },
        {
          name: "API Gateway",
          tools:
            "Hono (Node.js), PostgreSQL, Drizzle ORM, Clerk JWT Auth, pg connection pool",
        },
        {
          name: "AI Engine",
          tools:
            "Python 3.11, FastAPI, PyTorch, Wav2Vec2, SpeechBrain (ECAPA-TDNN), Librosa",
        },
        {
          name: "Vision Pipeline",
          tools:
            "NVIDIA NIM (Llama 3.2-90B Vision Instruct), Cloudflare Workers (serverless proxy)",
        },
        {
          name: "Infrastructure",
          tools:
            "Turborepo, Docker Compose, Vercel, Render, GitHub Actions (keep-alive cron)",
        },
      ],
    },
  },
  {
    id: "texfolio",
    title: "TexFolio",
    tagline: "Premium AI-Powered LaTeX Resume Builder",
    seoTitle: "TexFolio - Premium AI-Powered LaTeX Resume Builder",
    seoDescription:
      "Craft industry-standard, ATS-friendly resumes effortlessly. TexFolio is an AI-driven SaaS application that natively renders beautiful, professional resumes in pure LaTeX format.",
    description:
      "A modern SaaS that combines real LaTeX PDF rendering with LLM intelligence. Features a LangGraph multi-agent resume coach (ATS scoring), LinkedIn PDF import via Llama 3.3, FAANG-ready templates, drag-and-drop editor, Organizations with RBAC (Owner → Admin → Editor → Viewer), BullMQ async PDF generation with progress tracking, distributed Redis rate limiting, Razorpay payments, and GDPR compliance (data export + PII anonymization).",
    icon: FileText,
    tags: [
      "React 19",
      "TypeScript",
      "Hono",
      "MongoDB",
      "LangGraph",
      "NVIDIA NIM",
      "Groq",
      "BullMQ",
      "Redis",
      "LaTeX",
      "Docker",
      "Razorpay",
    ],
    github: "https://github.com/theunstopabble/TexFolio",
    demo: "https://texfolio.vercel.app/",
    image: "/projects/TexFolio.webp",
    featured: true,
    color: "from-blue-500 to-cyan-600",
    stats: {
      templates: "FAANG-Ready",
      ai: "LangGraph Coach",
      pdf: "Native LaTeX",
      rbac: "4-Role Orgs",
    },
    deepDive: {
      problem:
        "Most resume builders generate messy HTML-to-PDF exports that fail ATS parsers. LaTeX produces perfect typography but has a steep learning curve. Existing tools lack AI feedback, team collaboration, and enterprise features like RBAC and GDPR compliance.",
      solution:
        'Created a "No-Code LaTeX" SaaS with a Hono backend that injects user data into .tex templates via Mustache and compiles them using a Dockerized pdflatex environment. Integrated a LangGraph multi-agent pipeline (4 stages: Content, Impact, Format, ATS) for intelligent resume coaching. Added Organizations with full RBAC hierarchy, BullMQ async PDF generation with progress tracking, distributed Redis rate limiting, and GDPR-compliant data export/deletion.',
      challenges: [
        "Building a LangGraph multi-agent pipeline with circuit breaker failover (NVIDIA NIM → Groq) that scores resumes across 4 dimensions and provides actionable feedback.",
        "Implementing Organizations with RBAC — ownership transfer, org-scoped resume visibility, branding overrides (locked templates, company fonts, colors) applied during PDF generation.",
        "Designing BullMQ async PDF generation with progress tracking (10% → 30% → 100%), automatic retries with exponential backoff, and rate-limited worker concurrency.",
        "Sandboxing LaTeX compilation using spawn (not exec) to prevent shell injection while supporting custom templates.",
      ],
      techStack: [
        {
          name: "Frontend",
          tools:
            "React 19, Vite (Rolldown), TypeScript, Tailwind CSS v4, Zustand, React Query, React Hook Form, dnd-kit, Clerk Auth",
        },
        {
          name: "Backend",
          tools:
            "Hono v4 (Node.js), MongoDB (Mongoose), BullMQ + Redis, Razorpay, Brevo (email), Clerk JWT",
        },
        {
          name: "AI",
          tools:
            "LangChain + LangGraph (multi-agent), NVIDIA NIM, Google Gemini, Groq (failover chain)",
        },
        {
          name: "PDF Engine",
          tools:
            "pdflatex (Docker container), Mustache templating, spawn-based compilation",
        },
        {
          name: "Infrastructure",
          tools:
            "npm workspaces monorepo, Docker Compose, Vercel, Render, GitHub Actions CI/CD",
        },
      ],
    },
  },
  {
    id: "swadkart",
    title: "SwadKart",
    tagline: "Hyper-Local Food Delivery PWA",
    seoTitle: "SwadKart - Hyper-Local Food Delivery PWA",
    seoDescription:
      "A highly responsive, hyper-local food delivery progressive web application developed using the MERN stack, offering real-time tracking, slick animations, and seamless user experience.",
    description:
      "A production-grade multi-vendor food delivery platform with 4-role ecosystem (Admin, Restaurant, Delivery, Customer). Features AI chatbot (Groq LLM) for food recommendations, voice search in English & Hindi, biometric auth (WebAuthn fingerprint/FaceID), real-time GPS delivery tracking via Socket.io, Razorpay payments (UPI/Cards/Wallets/COD), gamification (streaks, SwadCoins, badges), group ordering with bill splitting, and PWA with offline support. Built with 30+ API routes, 14 Mongoose schemas, and enterprise security (fraud detection, rate limiting, GDPR).",
    icon: ShoppingCart,
    tags: [
      "React 19",
      "Node.js 22",
      "Express 5",
      "MongoDB",
      "Redux Toolkit",
      "Socket.IO",
      "Razorpay",
      "Firebase",
      "WebAuthn",
      "Groq LLM",
      "PWA",
      "i18next",
    ],
    github: "https://github.com/theunstopabble/swadkart",
    demo: "https://swadkart.vercel.app/",
    image: "/projects/SwadKart.webp",
    featured: true,
    color: "from-orange-500 to-amber-600",
    stats: {
      roles: "4 Personas",
      routes: "30+ APIs",
      schemas: "14 Models",
      features: "PWA + i18n",
    },
    deepDive: {
      problem:
        "Local restaurant aggregators lack real-time transparency, secure delivery verification, and intelligent discovery. Users want voice search, biometric security, and gamification — but existing platforms are either too simple (no real-time) or too complex (enterprise-only pricing).",
      solution:
        "Built a full-scale micro-marketplace with 4 user personas. Implemented WebAuthn for biometric login (fingerprint/FaceID), Socket.io for live GPS order tracking on Leaflet maps, Groq LLM chatbot for natural language food recommendations, voice search via Web Speech API (English + Hindi), Razorpay for payments, and a gamification engine with order streaks, SwadCoins, achievement badges, and referral rewards.",
      challenges: [
        "Orchestrating state across 4 different user personas (Admin, Vendor, Customer, Rider) with role-based route guards and Redux Toolkit slices.",
        "Implementing WebAuthn biometric authentication with @simplewebauthn — enrollment, verification, and graceful fallback to JWT when biometrics unavailable.",
        "Building a real-time delivery tracking system with Socket.io room-based authorization and OTP-verified delivery handoff.",
        "Designing a fraud detection heuristics engine that flags suspicious orders, repeat addresses, and coupon abuse without blocking legitimate users.",
      ],
      techStack: [
        {
          name: "Frontend",
          tools:
            "React 19, Vite 7, Redux Toolkit 2, Tailwind CSS, React Router 7, Socket.io-client, Leaflet.js, Recharts, Groq SDK, i18next, PWA (Workbox)",
        },
        {
          name: "Backend",
          tools:
            "Node.js 22, Express 5, MongoDB (Mongoose 9), Redis (ioredis), BullMQ, Socket.io 4, Helmet 8, express-rate-limit",
        },
        {
          name: "Auth & Payments",
          tools:
            "JWT + Firebase Admin + WebAuthn (@simplewebauthn), Razorpay (UPI/Card/Wallet/COD)",
        },
        {
          name: "AI & Media",
          tools:
            "Groq SDK (Llama 3 chatbot), Web Speech API (voice search), Cloudinary (sharp image processing), Brevo + Nodemailer",
        },
        {
          name: "Infrastructure",
          tools:
            "Vercel (frontend), Render (backend), MongoDB Atlas, GitHub Actions CI/CD, Firebase Cloud Messaging (push)",
        },
      ],
    },
  },
];
