"use client";

import { useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { DeepDiveModal } from "@/components/home/DeepDiveModal";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = project.icon;
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]"
    >
      {/* Cursor glow effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139,92,246,0.08), transparent 40%)`,
        }}
      />

      {/* Gradient top accent */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

      <div className="relative h-full">
        <Card className="h-full border-0 bg-transparent flex flex-col">
          <CardHeader className="pb-4 p-0">
            {project.image ? (
              <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/90 to-transparent" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute right-4 top-4 z-20 flex gap-2">
                  {project.featured && (
                    <Badge
                      variant="secondary"
                      className="bg-amber-500/90 text-amber-50 border-0 text-xs backdrop-blur-md"
                    >
                      ★ Featured
                    </Badge>
                  )}
                </div>
                <div
                  className={`absolute left-4 top-4 z-20 rounded-xl bg-gradient-to-br ${project.color} p-2 text-white shadow-lg`}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between p-6 pb-2">
                <div
                  className={`rounded-xl bg-gradient-to-br ${project.color} p-3 text-white shadow-lg`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex gap-2">
                  {project.featured && (
                    <Badge
                      variant="secondary"
                      className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs"
                    >
                      ★ Featured
                    </Badge>
                  )}
                </div>
              </div>
            )}
            <CardTitle className="mt-5 px-6 text-2xl font-bold tracking-tight text-white">
              {project.title}
            </CardTitle>
            <p className="text-base font-medium text-zinc-300 mt-1">
              {project.tagline}
            </p>
          </CardHeader>

          <CardContent className="flex-grow pt-0">
            <p className="mb-6 line-clamp-3 text-sm text-zinc-400 leading-relaxed">
              {project.description}
            </p>

            {/* Stats row */}
            <div className="mb-5 grid grid-cols-3 gap-2">
              {Object.entries(project.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-lg border border-white/5 bg-white/[0.02] px-2 py-2 text-center"
                >
                  <div className="text-xs font-bold text-foreground">
                    {value as string}
                  </div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {key}
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-white/5 bg-white/[0.03] text-zinc-400 text-xs py-0.5 px-2 hover:bg-white/[0.06]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex flex-wrap justify-between gap-2 border-t border-white/5 p-4 sm:p-5 mt-auto">
            <Button
              variant="ghost"
              size="sm"
              className="min-w-[80px] flex-1 gap-2 text-zinc-300 hover:text-white hover:bg-white/5"
              asChild
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            </Button>
            <DeepDiveModal project={project}>
              <Button
                size="sm"
                variant="secondary"
                className="min-w-[100px] flex-1 gap-2 bg-white/5 text-zinc-200 hover:bg-white/10 border border-white/10"
              >
                Case Study <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </DeepDiveModal>
            <Button
              size="sm"
              className="min-w-[80px] flex-1 gap-2 bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 font-medium hover:brightness-110"
              asChild
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
}
