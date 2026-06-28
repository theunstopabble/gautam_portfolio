import type { Metadata } from "next";
import { Education } from "@/components/home/Education";

export const metadata: Metadata = {
  title: "Education | Gautam Kumar",
  description:
    "B.Tech in Computer Science at Jagannath University, Jaipur (2023–2027). Coursework in AI/ML, full-stack development, and data structures & algorithms.",
  openGraph: {
    title: "Education — Gautam Kumar",
    description:
      "B.Tech in Computer Science at Jagannath University, Jaipur (2023–2027).",
  },
};

export default function EducationPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <Education />
    </main>
  );
}
