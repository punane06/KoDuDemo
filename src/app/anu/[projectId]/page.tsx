import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/dashboard/page-shell";
import { SectionCard } from "@/components/dashboard/section-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  developerProjects,
  getDeveloperProjectById,
  getDeveloperProjectDetailById,
} from "@/lib/mockData";
import { cn } from "@/lib/utils";

type ProjectDetailPageProps = {
  params: Promise<{
    projectId: string;
  }>;
};

export function generateStaticParams() {
  return developerProjects.map((project) => ({
    projectId: project.id,
  }));
}

function statusVariant(status: string) {
  switch (status) {
    case "Sold":
      return "secondary" as const;
    case "Reserved":
      return "outline" as const;
    default:
      return "ghost" as const;
  }
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { projectId } = await params;
  const project = getDeveloperProjectById(projectId);
  const detail = getDeveloperProjectDetailById(projectId);

  if (!project || !detail) {
    notFound();
  }

  return (
    <PageShell
      className="max-w-5xl"
      eyebrow="Anu View"
      title={project.name}
      description="Project management overview with construction updates, visual progress, and unit status."
      actions={
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">{project.unitCount} units</Button>
          <Button variant="outline" size="sm">Statistics</Button>
        </div>
      }
    >
      <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <SectionCard
          title={detail.stageSummary}
          action={<Button variant="outline" size="sm">Update Progress</Button>}
          contentClassName="space-y-5"
        >
          <div>
            <p className="text-xs text-muted-foreground">Current stage</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {detail.constructionStages.map((stage) => (
                <div
                  key={stage.id}
                  className={cn(
                    "flex min-w-20 items-center justify-center rounded-full border px-3 py-2 text-xs",
                    stage.done && "border-primary/20 bg-primary text-primary-foreground",
                    stage.current && "border-amber-400 bg-amber-100 text-amber-900",
                    !stage.done && !stage.current && "border-border bg-background text-muted-foreground"
                  )}
                >
                  {stage.label}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-xs text-muted-foreground">Next stage</p>
              <p className="mt-1 text-sm font-medium">{detail.nextStage}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Est. completion</p>
              <p className="mt-1 text-sm font-medium">{detail.stageDate}</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Construction Photos"
          action={<Button variant="outline" size="sm">Upload Photos</Button>}
          contentClassName="grid grid-cols-2 gap-3"
        >
          {detail.photoUrls.map((photoUrl) => (
            <figure key={photoUrl} className="overflow-hidden rounded-lg border border-border/80 bg-background">
              <Image src={photoUrl} alt="Construction progress photo" width={320} height={220} className="h-32 w-full object-cover" />
            </figure>
          ))}
        </SectionCard>
      </div>

      <SectionCard
        className="mt-4"
        title={`Units (${project.unitCount})`}
        action={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Send Message</Button>
            <Button variant="outline" size="sm" render={<Link href="/anu" />}>
              Back to overview
            </Button>
          </div>
        }
        contentClassName="space-y-2"
      >
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <Badge variant="outline">All units</Badge>
          <Badge variant="outline">Sold</Badge>
          <Badge variant="outline">Reserved</Badge>
          <Badge variant="outline">Available</Badge>
        </div>

        {detail.units.map((unit) => (
          <Link
            key={unit.id}
            href={`/anu/${project.id}/${unit.id}`}
            className="flex flex-col gap-3 rounded-xl border border-border/90 bg-background p-3 transition hover:border-primary/40 hover:shadow-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-medium">{unit.name}</p>
              <p className="text-xs text-muted-foreground">
                {unit.progressPercent ? `${unit.progressPercent}% · ` : ""}
                {unit.designStage} · {unit.packageName}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={statusVariant(unit.status)}>{unit.status}</Badge>
              <Badge variant="outline">{unit.designStage}</Badge>
              <Badge variant="secondary">{unit.packageName}</Badge>
            </div>
          </Link>
        ))}
      </SectionCard>
    </PageShell>
  );
}