"use client";

import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/theunstopabble",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/gautamkr62",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://x.com/_unstopabble",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:gautamkumar43421@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/30">
      <div className="container mx-auto px-4 py-12 md:px-8">
        {/* Top row */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-xl font-bold tracking-tighter text-foreground"
            >
              Gautam Kumar<span className="gradient-text">.</span>
            </a>
            <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground md:mx-0">
              Full Stack Developer crafting production-grade SaaS products with
              AI integration.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/5" />

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with{" "}
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> by
            Gautam Kumar
            <span className="mx-1">•</span>© {new Date().getFullYear()}
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
