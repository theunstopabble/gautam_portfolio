"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function Education() {
  return (
    <section
      id="education"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      <div className="container relative mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <GraduationCap className="h-4 w-4" />
            Education
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Academic <span className="gradient-text">Background</span>
          </motion.h2>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="group glass rounded-2xl p-8 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.04]">
            {/* Gradient accent top */}
            <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-2xl shadow-lg">
                🎓
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Jagannath University
                </h3>
                <p className="mt-1 text-base font-medium text-primary">
                  Bachelor of Technology (B.Tech) in Computer Science
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    Jul 2023 – Expected Jul 2027
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    Jaipur, Rajasthan, India
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Pursuing B.Tech with a focus on software development, AI/ML,
                  and building production-grade SaaS applications. Completed 3
                  industry internships while maintaining academic excellence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
