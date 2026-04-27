"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Brain, Wrench, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "Java (DSA)", "SQL"],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "from-violet-500 to-purple-500",
    skills: [
      "React 19",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
      "Shadcn UI",
      "TanStack Query",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    skills: [
      "Node.js",
      "Express",
      "Hono",
      "FastAPI",
      "Socket.io",
      "REST APIs",
      "Mongoose",
      "Drizzle ORM",
      "Clerk",
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    color: "from-amber-500 to-orange-500",
    skills: [
      "Groq (Llama 3)",
      "LangChain",
      "LangGraph",
      "TensorFlow.js",
      "PyTorch",
      "SpeechBrain",
      "Wav2Vec2",
      "NVIDIA NIM",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    color: "from-pink-500 to-rose-500",
    skills: [
      "Docker",
      "TurboRepo",
      "Git",
      "Vercel",
      "Render",
      "Cloudflare Workers",
      "MongoDB Atlas",
      "PostgreSQL",
      "Cloudinary",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/5 blur-[150px]" />

      <div className="container relative mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <Sparkles className="h-4 w-4" />
            Tech Arsenal
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Tools and technologies I use to bring ideas to life.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass rounded-xl p-6 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.04]"
              >
                {/* Header */}
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} shadow-lg`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="border border-white/5 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/[0.08] hover:text-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
