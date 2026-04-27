import { Share2, UserCheck, FileText, ShoppingCart } from "lucide-react";
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "interview-minds",
    title: "InterviewMinds",
    tagline: "AI-Powered Mock Interview Platform",
    description:
      "A production-grade SaaS for simulating technical interviews with AI. Features real-time proctoring, resume parsing, and voice-to-voice interaction.",
    icon: UserCheck,
    tags: ["React", "TurboRepo", "Groq (Llama-3)", "TensorFlow.js", "MongoDB"],
    github: "https://github.com/theunstopabble/InterviewMinds",
    demo: "https://interviewminds.vercel.app/",
    image: "/projects/InterviewMinds.png",
    featured: true,
    color: "from-purple-500 to-indigo-600",
    stats: {
      personas: "3 AI",
      proctoring: "Real-time",
      latency: "<500ms",
    },
    deepDive: {
      problem:
        "Traditional mock interviews are expensive and hard to schedule. Existing AI tools lack the depth of real-world technical interviews and often fail to provide actionable feedback.",
      solution:
        "Built a monorepo architecture (TurboRepo) connecting a React frontend with a Node.js/Express backend. Integrated Groq for ultra-low latency AI responses and TensorFlow.js for browser-based proctoring (face detection) without compromising privacy.",
      challenges: [
        "Reducing AI response latency to under 500ms for natural conversation.",
        "Implementing real-time face detection in the browser using TensorFlow.js with minimal CPU usage.",
        "Synchronizing audio playback with text chunks for a seamless voice experience.",
      ],
      techStack: [
        { name: "Frontend", tools: "React, Vite, Shadcn UI, Tailwind CSS" },
        { name: "Backend", tools: "Node.js, Express, MongoDB, WebSocket" },
        { name: "AI/ML", tools: "Groq (Llama-3), Gemini, TensorFlow.js" },
        { name: "Infrastructure", tools: "TurboRepo, Vercel, Render" },
      ],
    },
  },
  {
    id: "satark-ai",
    title: "Satark-AI",
    tagline: "Multi-Modal Deepfake Detection Platform",
    description:
      "A production-grade, full-stack deepfake detection platform built as a Turborepo monorepo. Detects synthetic audio (Wav2Vec2 + MFCC forensics), deepfake images (NVIDIA NIM Llama 3.2-90B Vision via Cloudflare Worker), and verifies speaker identity in real-time via voice biometrics (ECAPA-TDNN). Ships as a PWA with multilingual support and PDF report exports.",
    icon: Share2,
    tags: [
      "React 18",
      "TypeScript",
      "FastAPI",
      "PyTorch",
      "Hono",
      "PostgreSQL",
      "NVIDIA NIM",
      "Cloudflare",
      "TurboRepo",
    ],
    github: "https://github.com/theunstopabble/Satark-AI",
    demo: "https://satark-deepfake.vercel.app/",
    image: "/projects/Satark-AI.png",
    featured: true,
    color: "from-red-500 to-rose-600",
    stats: {
      accuracy: "94%",
      models: "3 AI Models",
      pipeline: "Multi-Modal",
    },
    deepDive: {
      problem:
        "Generative AI has made it trivially easy to clone voices, fabricate images, and spread synthetic media. Existing detection tools are siloed — they handle either audio or images, never both — and often require expensive infrastructure or remain offline.",
      solution:
        "Architected a scalable Turborepo monorepo with three independent microservices: a React 18 PWA frontend, a Hono (Node.js) API gateway backed by PostgreSQL via Drizzle ORM with Clerk JWT auth, and a Python 3.11 FastAPI AI engine for audio deepfake detection and speaker biometrics. Image deepfake detection runs on a fully serverless Cloudflare Worker proxy that forwards requests to NVIDIA NIM (Llama 3.2-90B Vision), completely independent of the Python engine. A GitHub Actions cron job pings both Render services every 14 minutes to prevent free-tier cold starts.",
      challenges: [
        "Designing a serverless image detection pipeline via Cloudflare Workers with strict CORS whitelisting, 5MB double-layer size enforcement, and 30s AbortController timeout against NVIDIA NIM — all without touching the Python engine.",
        "Implementing lazy model loading and thread executor offloading in FastAPI to prevent OOM crashes and keep the async event loop non-blocking on free-tier Render instances.",
        "Building per-user scoped speaker isolation — users can only verify against their own enrolled voice prints — with 192-dim ECAPA-TDNN embeddings stored in PostgreSQL and cosine similarity computed server-side.",
      ],
      techStack: [
        {
          name: "Frontend",
          tools:
            "React 18, Vite, TypeScript, Tailwind CSS, Framer Motion, Recharts, Wavesurfer.js, PWA (Workbox)",
        },
        {
          name: "API Gateway",
          tools: "Hono (Node.js), PostgreSQL, Drizzle ORM, Clerk JWT Auth",
        },
        {
          name: "AI Engine",
          tools:
            "Python 3.11, FastAPI, PyTorch, Librosa, Wav2Vec2, SpeechBrain",
        },
        {
          name: "Vision Pipeline",
          tools: "NVIDIA NIM (Llama 3.2-90B Vision), Cloudflare Workers",
        },
        {
          name: "Infrastructure",
          tools: "Turborepo, Docker Compose, Vercel, Render, GitHub Actions",
        },
      ],
    },
  },
  {
    id: "texfolio",
    title: "TexFolio",
    tagline: "Latex Resume Builder SaaS",
    description:
      "An intelligent resume builder that combines the precision of LaTeX with the ease of a drag-and-drop editor. Generates ATS-friendly PDFs.",
    icon: FileText,
    tags: ["React 19", "Hono", "LaTeX", "Docker", "Cloudinary"],
    github: "https://github.com/theunstopabble/TexFolio",
    demo: "https://texfolio.vercel.app/",
    image: "/projects/TexFolio.png",
    featured: true,
    color: "from-blue-500 to-cyan-600",
    stats: {
      templates: "FAANG-Ready",
      score: "ATS-Optimized",
      render: "Native LaTeX",
    },
    deepDive: {
      problem:
        "Most resume builders generate messy HTML-to-PDF exports that fail ATS parsers. LaTeX is powerful but has a steep learning curve.",
      solution:
        'Created a "No-Code LaTeX" editor. The frontend captures user data, while the backend (Hono) injects it into `.tex` templates and compiles them using a Dockerized LaTeX environment, returning a pristine PDF.',
      challenges: [
        "Sandboxing the LaTeX compilation process for security (preventing shell injection).",
        "Managing the synchronous nature of PDF generation with user expectations for speed.",
        "Building a live preview system that approximates the LaTeX output.",
      ],
      techStack: [
        { name: "Frontend", tools: "React 19, Zustand, Headless UI" },
        { name: "Backend", tools: "Hono, Node.js, Docker" },
        { name: "Core", tools: "pdfLaTeX, Mustache Templating" },
      ],
    },
  },
  {
    id: "swadkart-pro",
    title: "SwadKart",
    tagline: "Multi-Vendor Food Delivery Ecosystem",
    description:
      "A comprehensive food delivery platform with role-based access for Admins, Restaurants, and Riders. Features biometric auth and live tracking.",
    icon: ShoppingCart,
    tags: ["MERN Stack", "Firebase", "Socket.io", "Redux Toolkit"],
    github: "https://github.com/theunstopabble/SwadKart-pro",
    demo: "https://swadkart.vercel.app/",
    image: "/projects/SwadKart.png",
    featured: true,
    color: "from-orange-500 to-amber-600",
    stats: {
      roles: "4",
      security: "Biometric Auth",
      updates: "Live WebSocket",
    },
    deepDive: {
      problem:
        "Local restaurant aggregators often lack real-time transparency and secure delivery verification.",
      solution:
        "Built a full-scale micro-marketplace. Implemented WebAuthn for biometric login, Socket.io for live order tracking on maps, and an algorithm for efficient rider assignment.",
      challenges: [
        "Orchestrating state across 4 different user personas (Admin, Vendor, User, Rider).",
        "Implementing secure OTP-based delivery verification.",
        "Visualizing delivery zones using Leaflet heatmaps.",
      ],
      techStack: [
        { name: "Frontend", tools: "React, Redux Toolkit, Leaflet.js" },
        { name: "Backend", tools: "Express, MongoDB, Firebase Admin" },
        { name: "Security", tools: "WebAuthn, JWT, BCrypt" },
      ],
    },
  },
];
