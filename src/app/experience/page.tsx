import type { Metadata } from "next";
import { Experience } from "@/components/home/Experience";

export const metadata: Metadata = {
  title: "Experience | Gautam Kumar",
  description:
    "Full-Stack Developer with 3 production internships: Microsoft Elevate × AICTE (Emerging Technologies), Edunet × IBM SkillsBuild (Frontend Web), and YHills (Full-Stack Web).",
  openGraph: {
    title: "Experience — Gautam Kumar",
    description:
      "Full-Stack Developer with 3 production internships: Microsoft Elevate × AICTE, Edunet × IBM SkillsBuild, and YHills.",
  },
};

export default function ExperiencePage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <Experience />
    </main>
  );
}
