import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, Layers, Code2 } from "lucide-react";
import { Project } from "@/types";

interface DeepDiveModalProps {
  project: Project;
  children: React.ReactNode;
}

export function DeepDiveModal({ project, children }: DeepDiveModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            {project.title} <Badge variant="outline">Deep Dive</Badge>
          </DialogTitle>
          <DialogDescription>
            Technical breakdown and case study.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-8 py-4">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(project.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-lg border bg-muted/50 p-3 text-center"
                >
                  <div className="text-xs font-semibold uppercase text-muted-foreground">
                    {key}
                  </div>
                  <div className="mt-1 text-lg font-bold">
                    {value as string}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                <AlertTriangle className="h-5 w-5 text-amber-500" /> The Problem
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.deepDive.problem}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                <CheckCircle2 className="h-5 w-5 text-green-500" /> The Solution
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.deepDive.solution}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                <Code2 className="h-5 w-5 text-indigo-500" /> Tech Stack
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.deepDive.techStack.map(
                  (stack: { name: string; tools: string }) => (
                    <div key={stack.name} className="rounded-md border p-3">
                      <div className="font-medium text-sm">{stack.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {stack.tools}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                <Layers className="h-5 w-5 text-purple-500" /> Key Challenges
              </h3>
              <ul className="list-none space-y-2">
                {project.deepDive.challenges.map(
                  (challenge: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                      {challenge}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
