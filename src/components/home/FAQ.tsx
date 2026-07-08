"use client";

import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "Who is Gautam Kumar?",
    answer:
      <>Gautam Kumar is a Full-Stack Developer who has solo-shipped SaaS applications with AI integration, based in Jaipur, India. He is a student at{' '}
        <a href="https://www.jagannathuniversity.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Jagannath University</a>
        {' '}and a Microsoft Elevate Intern. He specializes in building SaaS products with React, Node.js, TypeScript, Python, and LLM integration.</>,
  },
  {
    question: "What projects has Gautam Kumar built?",
    answer:
      <>Gautam Kumar has built SaaS products: InterviewMinds (AI mock interview platform at{' '}<a href="https://interviewminds.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">interviewminds.vercel.app</a>), SwadKart (multi-vendor food delivery platform at{' '}<a href="https://swadkart.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">swadkart.vercel.app</a>), Satark-AI (deepfake detection platform at{' '}<a href="https://satark-deepfake.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">satark-deepfake.vercel.app</a>), and TexFolio (AI-powered LaTeX resume builder at{' '}<a href="https://texfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">texfolio.vercel.app</a>).</>,
  },
  {
    question: "What is Gautam Kumar's tech stack?",
    answer:
      "Gautam Kumar's tech stack includes React, Next.js, Node.js, TypeScript, Python, MongoDB, PostgreSQL, Redis, Docker, Tailwind CSS, Socket.IO, GraphQL, FastAPI, Hono, and AI/ML tools like Groq LLM, NVIDIA NIM, LangChain, LangGraph, TensorFlow.js, and PyTorch.",
  },
  {
    question: "Where does Gautam Kumar study?",
    answer:
      <>Gautam Kumar studies at{' '}
        <a href="https://www.jagannathuniversity.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Jagannath University</a>
        {' '}in Jaipur, Rajasthan, India. He is also a Microsoft Elevate Intern through the AICTE program.</>,
  },
  {
    question: "How to contact Gautam Kumar?",
    answer:
      <>You can contact Gautam Kumar via email at{' '}<a href="mailto:gautamkumar43421@gmail.com" className="text-primary hover:underline">gautamkumar43421@gmail.com</a>, on LinkedIn at{' '}<a href="https://linkedin.com/in/gautamkr62" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/gautamkr62</a>, on GitHub at{' '}<a href="https://github.com/theunstopabble" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/theunstopabble</a>, or on Twitter/X at{' '}<a href="https://x.com/_unstopabble" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">x.com/_unstopabble</a>. His portfolio is at{' '}<a href="https://gautam-kr.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gautam-kr.vercel.app</a>.</>,
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-accent/5 blur-[120px]" />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <HelpCircle className="h-4 w-4" />
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group glass rounded-xl overflow-hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-foreground hover:text-primary transition-colors [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground border-t border-white/5 pt-4">
                {faq.answer}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
