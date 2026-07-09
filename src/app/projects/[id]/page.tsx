import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { buildProjectSchema } from "@/lib/structured-data";
import { projectDiagrams } from "@/data/diagrams";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};

  return {
    title: project.seoTitle || `${project.title} — ${project.tagline} | Gautam Kumar`,
    description: project.seoDescription || project.description,
    keywords: project.tags,
    openGraph: {
      title: project.seoTitle || `${project.title} — ${project.tagline}`,
      description: project.seoDescription || project.description,
      url: `https://gautam-kr.vercel.app/projects/${project.id}`,
      images: project.image
        ? [
            {
              url: `https://gautam-kr.vercel.app${project.image}`,
              width: 1200,
              height: 630,
              alt: `${project.title} — ${project.tagline}`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.tagline}`,
      description: project.description,
    },
    alternates: {
      canonical: `https://gautam-kr.vercel.app/projects/${project.id}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const schema = buildProjectSchema(project);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://gautam-kr.vercel.app" },
              { "@type": "ListItem", position: 2, name: "Projects", item: "https://gautam-kr.vercel.app/projects" },
              { "@type": "ListItem", position: 3, name: project.title, item: `https://gautam-kr.vercel.app/projects/${project.id}` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        {/* Back to portfolio */}
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          ← Back to Portfolio
        </Link>

        {/* Header */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-zinc-300">{project.tagline}</p>
        <p className="mt-4 text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {/* Links */}
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-primary/20 hover:brightness-110 transition"
          >
            Live Demo ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/10 transition"
          >
            Source Code ↗
          </a>
        </div>

        {/* Deep Dive */}
        <div className="mt-16 space-y-12">
          {/* Problem */}
          <div>
            <h2 className="text-2xl font-semibold text-white">The Problem</h2>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              {project.deepDive.problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-semibold text-white">The Solution</h2>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              {project.deepDive.solution}
            </p>
          </div>

          {/* Challenges */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Key Challenges
            </h2>
            <ul className="mt-4 space-y-3">
              {project.deepDive.challenges.map((challenge, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-zinc-400 leading-relaxed"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
            <div className="mt-4 space-y-4">
              {project.deepDive.techStack.map((layer) => (
                <div
                  key={layer.name}
                  className="rounded-lg border border-white/5 bg-white/2 p-4"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                    {layer.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">{layer.tools}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Architecture Diagrams */}
          {projectDiagrams[id] && (
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Visual Architecture
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                System architecture, data flow, deployment topology, and database schema
                visualized for quick understanding.
              </p>
              <div className="mt-6 grid gap-6">
                <MermaidDiagram
                  chart={projectDiagrams[id].architecture}
                  title="System Architecture"
                />
                <MermaidDiagram
                  chart={projectDiagrams[id].workflow}
                  title="Data Flow / Workflow"
                />
                <MermaidDiagram
                  chart={projectDiagrams[id].deployment}
                  title="Deployment Topology"
                />
                <MermaidDiagram
                  chart={projectDiagrams[id].dbSchema}
                  title="Database Schema"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
