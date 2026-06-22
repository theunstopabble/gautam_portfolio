import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Gautam Kumar | Full Stack Developer & AI Engineer — Portfolio",
  description:
    "Portfolio of Gautam Kumar — Full Stack Developer & AI Engineer with Microsoft Elevate internship experience. Creator of InterviewMinds (AI interview platform), SwadKart (food delivery), Satark AI (AI safety/security), and TexFolio (resume/portfolio builder). Expert in React, Node.js, TypeScript, Python, MongoDB, and LLM integration. Building enterprise-grade SaaS products with real-time systems, ML pipelines, and microservice architecture.",
  keywords: [
    "Gautam Kumar",
    "Gautam Kumar developer",
    "Gautam Kumar portfolio",
    "Full Stack Developer",
    "AI Engineer",
    "InterviewMinds developer",
    "SwadKart developer",
    "Satark AI developer",
    "TexFolio developer",
    "React developer",
    "Node.js developer",
    "TypeScript",
    "Python",
    "LLM",
    "MongoDB",
    "Microsoft Intern",
    "Jagannath University",
    "Jaipur developer",
    "MERN stack developer",
    "AI SaaS developer",
    "gautam-kr.vercel.app",
    "Satark AI",
    "TexFolio",
    "InterviewMinds",
    "SwadKart",
  ],
  authors: [{ name: "Gautam Kumar", url: "https://gautam-kr.vercel.app" }],
  creator: "Gautam Kumar",
  publisher: "Gautam Kumar",
  metadataBase: new URL("https://gautam-kr.vercel.app"),
  alternates: {
    canonical: "https://gautam-kr.vercel.app",
  },
  openGraph: {
    title: "Gautam Kumar | Full Stack Developer & AI Engineer",
    description:
      "Built 4+ AI-integrated SaaS products including InterviewMinds, SwadKart, Satark AI, and TexFolio. Microsoft Elevate Intern. React, Node.js, TypeScript, Python & LLMs specialist.",
    type: "website",
    locale: "en_US",
    url: "https://gautam-kr.vercel.app",
    siteName: "Gautam Kumar Portfolio",
    images: [
      {
        url: "https://gautam-kr.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gautam Kumar — Full Stack Developer & AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gautam Kumar | Full Stack Developer & AI Engineer",
    description:
      "Creator of InterviewMinds, SwadKart, Satark AI & TexFolio. Microsoft Elevate Intern. Building enterprise AI products.",
    creator: "@_unstopabble",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "N7Wz1Ta9dmB6G5JGUTIwCvHKG-7Lpf-EuF3zVkdGxKw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://gautam-kr.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Who is Gautam Kumar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Gautam Kumar is a Full-Stack Developer and AI Engineer based in Jaipur, India. He is a student at Jagannath University and a Microsoft Elevate Intern. He specializes in building enterprise-grade SaaS products with React, Node.js, TypeScript, Python, and LLM integration.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What projects has Gautam Kumar built?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Gautam Kumar has built 4 major production SaaS products: InterviewMinds (AI mock interview platform at interviewminds.vercel.app), SwadKart (multi-vendor food delivery platform at swadkart.vercel.app), Satark-AI (deepfake detection platform at satark-deepfake.vercel.app), and TexFolio (AI-powered LaTeX resume builder at texfolio.vercel.app).",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is Gautam Kumar's tech stack?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Gautam Kumar's tech stack includes React, Next.js, Node.js, TypeScript, Python, MongoDB, PostgreSQL, Redis, Docker, Tailwind CSS, Socket.IO, GraphQL, FastAPI, Hono, and AI/ML tools like Groq LLM, NVIDIA NIM, LangChain, LangGraph, TensorFlow.js, and PyTorch.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where does Gautam Kumar study?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Gautam Kumar studies at Jagannath University in Jaipur, Rajasthan, India. He is also a Microsoft Elevate Intern through the AICTE program.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to contact Gautam Kumar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can contact Gautam Kumar via email at gautamkumar43421@gmail.com, on LinkedIn at linkedin.com/in/gautamkr62, on GitHub at github.com/theunstopabble, or on Twitter/X at x.com/_unstopabble. His portfolio is at gautam-kr.vercel.app.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://gautam-kr.vercel.app" },
                { "@type": "ListItem", position: 2, name: "Projects", item: "https://gautam-kr.vercel.app/#projects" },
                { "@type": "ListItem", position: 3, name: "Contact", item: "https://gautam-kr.vercel.app/#contact" },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Gautam Kumar",
              description: "Full-Stack Developer & AI Engineer",
              url: "https://gautam-kr.vercel.app",
              email: "gautamkumar43421@gmail.com",
              telephone: "+91-6207793196",
              image: "https://gautam-kr.vercel.app/profile.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jaipur",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              founder: {
                "@type": "Person",
                name: "Gautam Kumar",
                url: "https://gautam-kr.vercel.app",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://gautam-kr.vercel.app/#person",
                  name: "Gautam Kumar",
                  url: "https://gautam-kr.vercel.app",
                  jobTitle: "Full-Stack Developer & AI Engineer",
                  description:
                    "Full-Stack Developer and AI Engineer specializing in enterprise-grade web applications and AI systems. Creator of InterviewMinds, SwadKart, Satark-AI, and TexFolio. Microsoft Elevate × AICTE Intern. B.Tech Computer Science student at Jagannath University, Jaipur (2023–2027).",
                  email: "gautamkumar43421@gmail.com",
                  image: "https://gautam-kr.vercel.app/profile.png",
                  alumniOf: {
                    "@type": "EducationalOrganization",
                    name: "Jagannath University, Jaipur",
                  },
                  sameAs: [
                    "https://github.com/theunstopabble",
                    "https://www.linkedin.com/in/gautamkr62",
                    "https://x.com/_unstopabble",
                  ],
                  knowsAbout: [
                    "React",
                    "Node.js",
                    "TypeScript",
                    "Python",
                    "FastAPI",
                    "MongoDB",
                    "PostgreSQL",
                    "Redis",
                    "Docker",
                    "LangChain",
                    "LangGraph",
                    "NVIDIA NIM",
                    "PyTorch",
                    "TensorFlow.js",
                    "Deepfake Detection",
                    "AI Safety",
                    "Full-Stack Development",
                    "WebRTC",
                    "Socket.IO",
                    "Turborepo",
                    "Vercel",
                  ],
                },
                {
                  "@type": "SoftwareApplication",
                  name: "InterviewMinds",
                  url: "https://interviewminds.vercel.app",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  description:
                    "Enterprise AI mock interview platform with real-time ML video proctoring (TensorFlow.js), CRDT collaborative code editor, WebRTC video calls, and Groq Llama 3.3-70b AI interviewer. Built as a Turborepo monorepo with 81 service modules.",
                  author: { "@id": "https://gautam-kr.vercel.app/#person" },
                  programmingLanguage: ["TypeScript", "JavaScript"],
                  codeRepository:
                    "https://github.com/theunstopabble/InterviewMinds",
                  keywords:
                    "AI interview, mock interview, ML proctoring, collaborative coding, WebRTC",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Satark-AI",
                  url: "https://satark-deepfake.vercel.app",
                  applicationCategory: "SecurityApplication",
                  operatingSystem: "Web",
                  description:
                    "Multi-model deepfake detection platform. Detects synthetic audio via Wav2Vec2, deepfake images via NVIDIA NIM (Llama 3.2-90B Vision) through Cloudflare Worker proxy, and verifies speaker identity using ECAPA-TDNN biometrics with 192-dim embeddings.",
                  author: { "@id": "https://gautam-kr.vercel.app/#person" },
                  programmingLanguage: ["TypeScript", "Python"],
                  codeRepository: "https://github.com/theunstopabble/Satark-AI",
                  keywords:
                    "deepfake detection, speaker verification, NVIDIA NIM, Wav2Vec2, AI safety, voice biometrics",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "TexFolio",
                  url: "https://texfolio.vercel.app",
                  applicationCategory: "ProductivityApplication",
                  operatingSystem: "Web",
                  description:
                    "AI-powered LaTeX resume builder SaaS with LangGraph multi-agent resume coach (4-stage ATS scoring), LinkedIn PDF import via Llama 3.3, FAANG-ready templates, drag-and-drop editor, Organizations with RBAC, BullMQ async PDF generation, and Razorpay payments.",
                  author: { "@id": "https://gautam-kr.vercel.app/#person" },
                  programmingLanguage: ["TypeScript", "JavaScript"],
                  codeRepository: "https://github.com/theunstopabble/TexFolio",
                  keywords:
                    "LaTeX resume builder, AI resume, LangGraph, ATS optimizer, resume SaaS, RBAC",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "SwadKart",
                  url: "https://swadkart.vercel.app",
                  applicationCategory: "FoodApplication",
                  operatingSystem: "Web",
                  description:
                    "Production-grade multi-vendor food delivery platform with 4-role ecosystem. Features AI chatbot (Groq LLM), voice search in English and Hindi, biometric auth (WebAuthn), real-time GPS delivery tracking via Socket.io, Razorpay payments, gamification with SwadCoins, and PWA with offline support.",
                  author: { "@id": "https://gautam-kr.vercel.app/#person" },
                  programmingLanguage: ["TypeScript", "JavaScript"],
                  codeRepository: "https://github.com/theunstopabble/swadkart",
                  keywords:
                    "food delivery app, multi-vendor platform, WebAuthn biometric, real-time tracking, voice search",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.variable} font-sans antialiased text-foreground bg-background`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
