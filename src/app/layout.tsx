import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

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
              "@type": "Person",
              "name": "Gautam Kumar",
              "url": "https://gautam-kr.vercel.app",
              "jobTitle": "Full-Stack Developer & AI Engineer",
              "description": "Full-Stack Developer and AI Engineer specializing in enterprise-grade web applications. Creator of InterviewMinds, SwadKart, Satark-AI, and TexFolio. Microsoft Elevate Intern. Expert in React, Node.js, TypeScript, Python, MongoDB, and LLM integration.",
              "email": "gautamkumar43421@gmail.com",
              "image": "https://gautam-kr.vercel.app/profile.jpg",
              "sameAs": [
                "https://github.com/theunstopabble",
                "https://www.linkedin.com/in/gautamkr62",
                "https://x.com/_unstopabble",
                "https://interviewminds.vercel.app",
                "https://swadkart.vercel.app",
                "https://satark-deepfake.vercel.app",
                "https://texfolio.vercel.app"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Jagannath University, Jaipur"
              },
              "knowsAbout": ["React", "Node.js", "TypeScript", "Python", "MongoDB", "PostgreSQL", "Redis", "Docker", "AI/ML", "LLM", "Groq", "TensorFlow.js", "FastAPI", "WebRTC", "Socket.IO"],
              "makesOffer": [
                {
                  "@type": "CreativeWork",
                  "name": "InterviewMinds",
                  "url": "https://interviewminds.vercel.app",
                  "description": "Enterprise AI Mock Interview Platform with ML proctoring and CRDT collaboration"
                },
                {
                  "@type": "CreativeWork",
                  "name": "SwadKart",
                  "url": "https://swadkart.vercel.app",
                  "description": "Multi-vendor food delivery platform with AI chatbot and biometric auth"
                },
                {
                  "@type": "CreativeWork",
                  "name": "Satark-AI",
                  "url": "https://satark-deepfake.vercel.app",
                  "description": "Deepfake detection and speaker verification platform with Wav2Vec2 and NVIDIA NIM"
                },
                {
                  "@type": "CreativeWork",
                  "name": "TexFolio",
                  "url": "https://texfolio.vercel.app",
                  "description": "AI-powered LaTeX resume builder with LangGraph coach and RBAC organizations"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${outfit.variable} font-sans antialiased text-foreground bg-background`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
