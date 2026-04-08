"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, Download } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const RESUME_LINK =
  "https://drive.google.com/file/d/13cBfBlMeeyioUnzJWQa2iACWIj5UmQM-/view?usp=drivesdk";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Fix 1: useMotionValueEvent instead of deprecated scrollY.onChange
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const links = [
    { name: "Home", href: "#" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <a
          href="#"
          className="text-xl font-bold tracking-tighter text-foreground"
        >
          Gautam Kumar<span className="gradient-text">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <Button
            size="sm"
            className="gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 text-white shadow-lg shadow-primary/20 hover:brightness-110"
            asChild
          >
            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
              <Download className="h-3.5 w-3.5" /> Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-background/95 border-l border-white/5 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-6 mt-10">
              {/* ✅ Fix 2: SheetClose wraps each link so sheet auto-closes on tap */}
              {links.map((link) => (
                <SheetClose asChild key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
  <Button
    className="mt-4 w-full gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-white"
    onClick={() => window.open(RESUME_LINK, "_blank", "noopener,noreferrer")}
  >
    <Download className="h-4 w-4" /> View Resume
  </Button>
</SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
