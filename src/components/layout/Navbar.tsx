"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, Eye } from "lucide-react";
import { trackResumeClick } from "@/components/Analytics";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

const RESUME_LINK =
  "https://drive.google.com/file/d/12F5GfuBqgwUaTbbWNnx7YHUIHJ5L1NxF/view?usp=sharing";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Fix 1: useMotionValueEvent instead of deprecated scrollY.onChange
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const links = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Education", href: "/#education" },
    { name: "About", href: "/#about" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
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
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-foreground"
        >
          Gautam Kumar<span className="gradient-text">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
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
            className="rounded-full bg-linear-to-r from-primary to-accent text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:brightness-110 -ml-1.5"
            asChild
            onClick={trackResumeClick}
          >
            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
              Resume
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
            className="bg-background/95 border-l border-white/5 backdrop-blur-xl w-[60%] sm:max-w-70 min-w-64"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col items-center gap-6 mt-10">
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
    className="mt-4 w-full gap-2 rounded-full bg-linear-to-r from-primary to-accent text-white"
    onClick={() => {
      trackResumeClick();
      window.open(RESUME_LINK, "_blank", "noopener,noreferrer");
    }}
  >
                <Eye className="h-4 w-4" /> View Resume
  </Button>
</SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
