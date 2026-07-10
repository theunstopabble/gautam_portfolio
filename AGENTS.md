# AGENTS.md — Gautam Portfolio

## Repository Overview
Personal portfolio built with Next.js 16, Tailwind CSS v4, and Mermaid.js for project diagrams.

## Project Structure
- `src/app/` — Next.js pages and layouts
- `src/components/` — React components

- `src/data/` — Project data and diagram chart strings

- `skills/` — AI agent skills (from addyosmani/agent-skills)
- `references/` — Design/accessibility checklists

## Core Rules
1. ALWAYS check `skills/` for a matching skill before implementing UI/design changes
2. Follow the `frontend-ui-engineering` skill for all UI component work
3. Never use hardcoded pixel values — use Tailwind spacing scale
4. Mobile-first responsive design
5. All interactive elements must be keyboard accessible
6. Use semantic HTML elements


## Verification
After any UI change:
- [ ] No console errors
- [ ] Responsive at 320px / 768px / 1024px
- [ ] Design tokens used (no raw colors)
- [ ] All interactive elements keyboard accessible
- [ ] TypeScript compiles clean (`npx tsc --noEmit`)
- [ ] Production build passes (`npm run build`)
