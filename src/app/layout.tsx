import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Gautam Kumar | Full Stack Developer & AI Engineer — Portfolio",
  description:
    "Portfolio of Gautam Kumar — Full Stack Developer & AI Engineer with Microsoft Elevate internship experience. Creator of InterviewMinds (AI interview platform) and SwadKart (food delivery). Expert in React, Node.js, TypeScript, Python, MongoDB, and LLM integration. Building enterprise-grade SaaS products with real-time systems, ML pipelines, and microservice architecture.",
  keywords: [
    "Gautam Kumar",
    "Gautam Kumar developer",
    "Gautam Kumar portfolio",
    "Full Stack Developer",
    "AI Engineer",
    "InterviewMinds developer",
    "SwadKart developer",
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
      "Built 4+ AI-integrated SaaS products including InterviewMinds and SwadKart. Microsoft Elevate Intern. React, Node.js, TypeScript, Python & LLMs specialist.",
    type: "website",
    locale: "en_US",
    url: "https://gautam-kr.vercel.app",
    siteName: "Gautam Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gautam Kumar | Full Stack Developer & AI Engineer",
    description:
      "Creator of InterviewMinds & SwadKart. Microsoft Elevate Intern. Building enterprise AI products.",
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
