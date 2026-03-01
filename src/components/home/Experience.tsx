"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Microsoft Elevate × AICTE",
    role: "Emerging Technologies Intern",
    period: "Jan 2026 – Feb 2026",
    location: "Remote",
    color: "from-blue-500 to-cyan-500",
    logo: "M",
    highlights: [
      "Built Satark-AI, a deepfake detection platform using Microsoft Azure, FastAPI, PyTorch, and SpeechBrain as the capstone project.",
      "Designed a 3-tier microservice architecture and deployed an AI-powered audio forensics engine processing MFCC/Spectral analysis for real-time threat detection.",
    ],
  },
  {
    company: "Edunet Foundation (AICTE × IBM SkillsBuild)",
    role: "Frontend Web Development Intern",
    period: "Aug 2025 – Sep 2025",
    location: "Remote",
    color: "from-indigo-500 to-purple-500",
    logo: "E",
    highlights: [
      "Engineered responsive UIs using HTML5, CSS3, JavaScript, achieving a 95+ Lighthouse score and 100% cross-browser compatibility.",
      "Optimized frontend asset loading, resulting in a 30% reduction in initial page load time.",
    ],
  },
  {
    company: "YHills",
    role: "Full-Stack Web Development Intern",
    period: "Mar 2024 – Jun 2024",
    location: "Remote",
    color: "from-violet-500 to-pink-500",
    logo: "Y",
    highlights: [
      "Developed a scalable full-stack application using the MERN Stack, architecting RESTful APIs for seamless client-server data flow.",
      "Built dynamic frontend components using React.js, improving user engagement by 25%.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute top-1/4 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <Briefcase className="h-4 w-4" />
            Work Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Where I&apos;ve <span className="gradient-text">Worked</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground"
          >
            3 production internships building real-world products.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative mb-12 last:mb-0 flex items-start gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 top-6 z-10 md:left-1/2 md:-translate-x-1/2">
                <div
                  className={`h-4 w-4 rounded-full bg-gradient-to-br ${exp.color} shadow-lg`}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div
                className={`ml-16 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="group glass rounded-xl p-6 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.04]">
                  {/* Company logo + name */}
                  <div className="mb-4 flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${exp.color} text-lg font-bold text-white shadow-lg`}
                    >
                      {exp.logo}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {exp.company}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-primary">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
