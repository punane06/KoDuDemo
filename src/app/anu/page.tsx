import Link from "next/link";

import { PageShell } from "@/components/dashboard/page-shell";
import { ProjectOverviewCard } from "@/components/dashboard/project-overview-card";
import { SectionCard } from "@/components/dashboard/section-card";
import { Button } from "@/components/ui/button";
import { developerProjects } from "@/lib/mockData";

export default function AnuPage() {
  return (
    <PageShell
      className="max-w-3xl"
      eyebrow="Anu View"
      title="Developer Dashboard"
      description="Tablet-first project overview for tracking progress, pending decisions, and customer updates."
      actions={
        <Button variant="outline" size="sm" render={<Link href="/liisi" />}>
          Open Liisi view
        </Button>
      }
    >
      <SectionCard
        title="Developer Dashboard"
        action={<span className="text-xs text-muted-foreground">{developerProjects.length} projects</span>}
        contentClassName="space-y-3"
      >
        {developerProjects.map((project) => (
          <ProjectOverviewCard key={project.id} project={project} />
        ))}
      </SectionCard>
    </PageShell>
  );
}