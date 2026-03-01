import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  github: string;
  demo: string;
  image?: string;
  featured?: boolean;
  color: string;
  stats: Record<string, string>;
  deepDive: {
    problem: string;
    solution: string;
    challenges: string[];
    techStack: { name: string; tools: string }[];
  };
}
