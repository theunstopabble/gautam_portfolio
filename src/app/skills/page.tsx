import type { Metadata } from "next";
import { Skills } from "@/components/home/Skills";

export const metadata: Metadata = {
  title: "Skills & Technologies | Gautam Kumar",
  description:
    "30+ technologies including React, Next.js, TypeScript, Node.js, Python, FastAPI, MongoDB, PostgreSQL, Redis, Docker, LangChain, PyTorch, TensorFlow.js, and more.",
  openGraph: {
    title: "Skills & Technologies — Gautam Kumar",
    description:
      "30+ technologies including React, Next.js, TypeScript, Node.js, Python, FastAPI, MongoDB, Redis, Docker, LangChain, PyTorch.",
  },
};

export default function SkillsPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <Skills />
    </main>
  );
}
