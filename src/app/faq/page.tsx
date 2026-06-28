import type { Metadata } from "next";
import { FAQ } from "@/components/home/FAQ";

export const metadata: Metadata = {
  title: "FAQ | Gautam Kumar",
  description:
    "Frequently asked questions about Gautam Kumar — his projects, tech stack, experience, education, and how to get in touch.",
  openGraph: {
    title: "FAQ — Gautam Kumar",
    description:
      "Frequently asked questions about Gautam Kumar — his projects, tech stack, experience, education, and how to get in touch.",
  },
};

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <FAQ />
    </main>
  );
}
