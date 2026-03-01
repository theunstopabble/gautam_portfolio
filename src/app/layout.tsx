import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Gautam Kumar | Full Stack Developer & AI Engineer",
  description:
    "Portfolio of Gautam Kumar — Full Stack Developer with Microsoft Elevate internship. Built 4 AI-integrated SaaS products using React, Node.js, Python & LLMs. Specialized in microservice architecture, real-time systems, and DevOps.",
  keywords: [
    "Gautam Kumar",
    "Full Stack Developer",
    "AI Engineer",
    "React",
    "Node.js",
    "Python",
    "LLM",
    "Portfolio",
    "Microsoft Intern",
  ],
  authors: [{ name: "Gautam Kumar" }],
  openGraph: {
    title: "Gautam Kumar | Full Stack Developer & AI Engineer",
    description:
      "Built 4 AI-integrated SaaS products. Microsoft Elevate Intern. React, Node.js, Python & LLMs specialist.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${outfit.variable} font-sans antialiased text-foreground bg-background`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
