export const personSchema = {
  "@type": "Person" as const,
  "@id": "https://gautam-kr.vercel.app/#person",
  "name": "Gautam Kumar",
  "url": "https://gautam-kr.vercel.app",
  "jobTitle": "Full-Stack Developer & AI Engineer",
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Jagannath University, Jaipur",
  },
  "sameAs": [
    "https://github.com/theunstopabble",
    "https://www.linkedin.com/in/gautamkr62",
    "https://x.com/_unstopabble",
  ],
};

export function buildProjectSchema(project: {
  title: string;
  description: string;
  demo: string;
  github: string;
  tags: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "url": project.demo,
    "codeRepository": project.github,
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web",
    "author": { "@id": "https://gautam-kr.vercel.app/#person" },
    "keywords": project.tags.join(", "),
  };
}
