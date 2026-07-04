"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  GitFork,
  LinkedinIcon,
  Mail,
  TwitterIcon,
  ChevronDown,
  Eye,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { trackResumeClick, trackContactClick } from "@/components/Analytics";

const stats = [
  { label: "Projects Built", value: "4+" },
  { label: "Internships", value: "3" },
  { label: "SaaS Shipped", value: "4" },
  { label: "Tech Stack", value: "30+" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/theunstopabble",
    icon: GitFork,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/gautamkr62",
    icon: LinkedinIcon,
  },
  {
    name: "Twitter",
    href: "https://x.com/_unstopabble",
    icon: TwitterIcon,
  },
  {
    name: "Email",
    href: "mailto:gautamkumar43421@gmail.com",
    icon: Mail,
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[80dvh] flex-col items-center justify-center overflow-hidden px-4 pt-16 pb-8 md:py-24">
      {/* Animated background orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-100 w-100 rounded-full bg-primary/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-1/4 top-1/4 h-62.5 w-62.5 rounded-full bg-accent/10 blur-[100px] animate-float-slow" />
        <div className="absolute left-1/4 bottom-1/3 h-50 w-50 rounded-full bg-blue-500/10 blur-[100px] animate-float" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/profile.webp"
            alt="Gautam Kumar"
            width={120}
            height={120}
            priority
            className="mb-3 h-20 w-20 rounded-full border-2 border-primary/30 object-cover shadow-xl shadow-primary/20 md:h-32 md:w-32"
          />
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 md:mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
        >
          <span className="block text-foreground">Hi, I&apos;m</span>
          <span className="gradient-text mt-2 block">Gautam Kumar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 md:mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Full Stack Developer with a{" "}
          <span className="font-semibold text-foreground">
            Microsoft Elevate
          </span>{" "}
          internship. I build{" "}
          <span className="font-semibold text-foreground">
            AI-integrated SaaS products
          </span>{" "}
          using React, Node.js, Python & LLMs — from deepfake detectors to LaTeX
          resume builders.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 md:mt-10 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
        >
          {/* Mobile: Resume | Desktop: View My Work */}
          <Button
            size="lg"
            className="sm:hidden h-13 gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
            asChild
            onClick={trackResumeClick}
          >
            <a
              href="https://drive.google.com/file/d/12F5GfuBqgwUaTbbWNnx7YHUIHJ5L1NxF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Eye className="h-4 w-4" /> View Resume
            </a>
          </Button>
          <Button
            size="lg"
            className="hidden sm:inline-flex h-13 gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
            asChild
          >
            <Link href="/projects">
              <Sparkles className="h-4 w-4" /> View My Work
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-13 rounded-xl border-white/10 px-8 text-base backdrop-blur-sm hover:bg-white/5"
            asChild
            onClick={trackContactClick}
          >
            <a href="/contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 md:mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-extrabold text-foreground md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 md:mt-14 flex gap-3"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={link.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-scroll-indicator" />
      </motion.a>
    </section>
  );
}
