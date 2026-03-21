import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { DeveloperProject } from "@/lib/mockData";

type ProjectOverviewCardProps = {
  project: DeveloperProject;
  className?: string;
};

export function ProjectOverviewCard({ project, className }: ProjectOverviewCardProps) {
  return (
    <Link
      href={`/anu/${project.id}`}
      className={cn(
        "block rounded-xl border border-border/90 bg-background p-4 transition hover:border-primary/40 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium">{project.name}</h3>
          <p className="text-xs text-muted-foreground">{project.unitCount} apartments · {project.currentStage}</p>
        </div>
        <p className="text-sm font-semibold">{project.progressPercent}%</p>
      </div>

      <div className="mt-3">
        <Progress value={project.progressPercent} className="gap-0" />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Badge variant="outline">{project.pendingDesigns} pending designs</Badge>
        <Badge variant="secondary">{project.clientUpdates} client updates</Badge>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
        <div>
          <p>Last update</p>
          <p className="mt-1 text-foreground">{project.lastUpdated}</p>
        </div>
        <div>
          <p>Est. completion</p>
          <p className="mt-1 text-foreground">{project.estimatedCompletion}</p>
        </div>
      </div>
    </Link>
  );
}