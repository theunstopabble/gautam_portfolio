"use client";

import { motion } from "framer-motion";
import { User, Rocket, Code2, Coffee } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    label: "4 SaaS Products",
    desc: "Deployed to production",
  },
  {
    icon: Code2,
    label: "3 Internships",
    desc: "Microsoft, IBM, YHills",
  },
  {
    icon: Coffee,
    label: "AI-First Builder",
    desc: "LLMs, PyTorch, TF.js",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-accent/5 blur-[120px]" />

      <div className="container relative mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <User className="h-4 w-4" />
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Who I <span className="gradient-text">Am</span>
          </motion.h2>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-10"
          >
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I&apos;m a{" "}
                <span className="font-semibold text-foreground">
                  Computer Science student
                </span>{" "}
                at Jagannath University, Jaipur, and a{" "}
                <span className="font-semibold text-foreground">
                  Full Stack Developer
                </span>{" "}
                passionate about building products that make a real impact.
              </p>
              <p>
                With a{" "}
                <span className="font-semibold text-foreground">
                  Microsoft Elevate internship
                </span>{" "}
                and 3 production internships under my belt, I&apos;ve built and
                deployed{" "}
                <span className="font-semibold text-foreground">
                  4 AI-integrated SaaS products
                </span>{" "}
                — from deepfake detection systems to AI-powered mock interview
                platforms.
              </p>
              <p>
                I thrive at the intersection of{" "}
                <span className="font-semibold text-foreground">
                  AI/ML and Full Stack Development
                </span>
                , using technologies like React, Node.js, Python, LLMs (Llama 3,
                LangGraph), and DevOps tools (Docker, TurboRepo) to build
                scalable, real-time systems.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {item.label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
