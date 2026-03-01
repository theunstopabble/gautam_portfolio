"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Send,
  MapPin,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/theunstopabble",
    icon: Github,
    label: "theunstopabble",
    color: "hover:border-zinc-500/50",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/gautamkr62",
    icon: Linkedin,
    label: "gautamkr62",
    color: "hover:border-blue-500/50",
  },
  {
    name: "Twitter / X",
    href: "https://x.com/_unstopabble",
    icon: Twitter,
    label: "@_unstopabble",
    color: "hover:border-sky-500/50",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="container relative mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <Send className="h-4 w-4" />
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground"
          >
            I&apos;m actively looking for opportunities. Whether you have a
            question or just want to say hi, my inbox is always open!
          </motion.p>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl">
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8 md:p-10"
          >
            {/* Contact Info */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:gautamkumar43421@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-primary/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground">
                    Email
                  </p>
                  <p className="truncate text-sm font-semibold text-foreground">
                    gautamkumar43421@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+916207793196"
                className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-primary/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground">
                    Phone
                  </p>
                  <p className="truncate text-sm font-semibold text-foreground">
                    +91-6207793196
                  </p>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="mb-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Jaipur, Rajasthan, India
            </div>

            {/* Social Links */}
            <div className="mb-8 grid gap-3 sm:grid-cols-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.05] ${link.color}`}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {link.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {link.label}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Main CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="h-13 gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
                asChild
              >
                <a href="mailto:gautamkumar43421@gmail.com">
                  Say Hello <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
