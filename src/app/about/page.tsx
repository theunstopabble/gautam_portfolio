import type { Metadata } from "next";
import { About } from "@/components/home/About";

export const metadata: Metadata = {
  title: "About | Gautam Kumar",
  description:
    "Full-Stack Developer and B.Tech CSE student at Jagannath University, Jaipur. Solo-shipped 4 production SaaS products with AI integration. Microsoft Elevate Intern.",
  openGraph: {
    title: "About — Gautam Kumar",
    description:
      "Full-Stack Developer who solo-shipped 4 production SaaS products with AI integration. Microsoft Elevate Intern.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <About />
    </main>
  );
}
