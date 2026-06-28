import type { Metadata } from "next";
import { Contact } from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Contact | Gautam Kumar",
  description:
    "Get in touch with Gautam Kumar — Full-Stack Developer and AI SaaS builder. Email, LinkedIn, GitHub, Twitter, or portfolio contact form.",
  openGraph: {
    title: "Contact — Gautam Kumar",
    description:
      "Get in touch with Gautam Kumar — Full-Stack Developer and AI SaaS builder.",
  },
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <Contact />
    </main>
  );
}
