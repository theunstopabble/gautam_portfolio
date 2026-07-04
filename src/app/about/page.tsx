import type { Metadata } from "next";
import { About } from "@/components/home/About";

export const metadata: Metadata = {
  title: "About | Gautam Kumar",
  description:
    "Full-Stack Developer | Solo-shipped 4 SaaS products | AI integration. B.Tech CSE student at Jagannath University, Jaipur. Microsoft Elevate Intern.",
  openGraph: {
    title: "About — Gautam Kumar",
    description:
      "Full-Stack Developer | Solo-shipped 4 SaaS products | AI integration. Microsoft Elevate Intern.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <About />
    </main>
  );
}
