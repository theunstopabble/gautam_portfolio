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
    tagline: "Deepfake Detection & Defense System",
    description:
      "Advanced multimedia forensics platform capable of detecting deepfake audio and verifying speaker identity in real-time.",
    icon: Share2,
    tags: ["Python", "FastAPI", "PyTorch", "React", "SpeechBrain"],
    github: "https://github.com/theunstopabble/Satark-AI",
    demo: "https://satark-deepfake.vercel.app/",
    image: "/projects/Satark-AI.png",
    featured: true,
    color: "from-red-500 to-rose-600",
    stats: {
      accuracy: "94%",
      models: "ECAPA-TDNN",
      processing: "Real-time",
    },
    deepDive: {
      problem:
        "The rise of generative AI has made it easy to clone voices and spread misinformation. Existing detection tools are often offline or require expensive hardware.",
      solution:
        "Developed a hybrid system with a lightweight React frontend and a powerful Python (FastAPI) backend. Utilized SpeechBrain and PyTorch for spectral analysis and deep learning models to detect synthetic audio signatures.",
      challenges: [
        "Optimizing heavy PyTorch models to run efficiently on standard cloud instances.",
        "Handling real-time audio streams via WebSockets for live monitoring.",
        "Reducing false positives in noisy environments.",
      ],
      techStack: [
        { name: "Frontend", tools: "React, Vite, Framer Motion" },
        { name: "AI Engine", tools: "Python, FastAPI, PyTorch, Librosa" },
        { name: "Models", tools: "SpeechBrain, ECAPA-TDNN, Wav2Vec" },
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
