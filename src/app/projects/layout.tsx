import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Gautam Kumar — Full-Stack Developer | Solo-shipped 4 SaaS products | AI integration",
  description:
    "Explore 4 production SaaS products built by Gautam Kumar: InterviewMinds (AI mock interviews), SwadKart (food delivery), Satark-AI (deepfake detection), and TexFolio (LaTeX resume builder).",
  openGraph: {
    title: "Projects | Gautam Kumar — Full-Stack Developer | Solo-shipped 4 SaaS products | AI integration",
    description:
      "InterviewMinds, SwadKart, Satark-AI, and TexFolio — 4 production SaaS products with AI integration.",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
