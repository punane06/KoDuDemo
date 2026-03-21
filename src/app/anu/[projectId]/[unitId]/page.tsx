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
  getProjectUnit,
  getUnitDetailOrFallback,
} from "@/lib/mockData";

type UnitDetailPageProps = {
  params: Promise<{
    projectId: string;
    unitId: string;
  }>;
};

export function generateStaticParams() {
  return developerProjects.flatMap((project) => {
    const details = getDeveloperProjectDetailById(project.id);
    const units = details?.units ?? [];

    return units.map((unit) => ({
      projectId: project.id,
      unitId: unit.id,
    }));
  });
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

export default async function UnitDetailPage({ params }: UnitDetailPageProps) {
  const { projectId, unitId } = await params;
  const project = getDeveloperProjectById(projectId);
  const unit = getProjectUnit(projectId, unitId);
  const detail = getUnitDetailOrFallback(projectId, unitId);

  if (!project || !unit || !detail) {
    notFound();
  }

  return (
    <PageShell
      className="max-w-5xl"
      eyebrow="Anu View"
      title={unit.name}
      description="Unit management view for client communication, interior selections, and file handling."
      actions={
        <div className="flex items-center gap-2">
          <Badge variant={statusVariant(unit.status)}>{unit.status}</Badge>
          <Button variant="outline" size="sm">Send Message</Button>
        </div>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <SectionCard title="Client" contentClassName="space-y-3">
          <div className="flex items-center gap-2">
            <p className="font-medium">{detail.clientName}</p>
            <Badge variant="outline">{unit.status}</Badge>
          </div>
          <div className="rounded-xl border border-border/80 bg-background p-3 text-sm">
            <p>Owner: {detail.ownerName}</p>
            <p className="text-muted-foreground">Email: {detail.ownerEmail}</p>
            <p className="text-muted-foreground">Phone: {detail.ownerPhone}</p>
          </div>

          <div className="rounded-xl border border-border/80 bg-background p-3">
            <p className="mb-2 text-sm font-medium">Recent Messages</p>
            <div className="space-y-2">
              {detail.recentMessages.length > 0 ? detail.recentMessages.map((message) => (
                <article key={message.id} className="rounded-lg bg-muted p-2 text-sm">
                  <p className="font-medium">{message.author}</p>
                  <p className="text-muted-foreground">{message.text}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{message.time}</p>
                </article>
              )) : <p className="text-sm text-muted-foreground">No recent messages.</p>}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Interior Design"
          action={<Button variant="outline" size="sm">Edit Selection</Button>}
          contentClassName="space-y-3"
        >
          <div className="rounded-xl border border-border/80 bg-background p-3 text-sm">
            <p className="text-muted-foreground">Style</p>
            <p className="font-medium">{detail.style}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border/80 bg-background p-3 text-sm">
              <p className="text-muted-foreground">Flooring</p>
              <p className="font-medium">{detail.flooring}</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-background p-3 text-sm">
              <p className="text-muted-foreground">Bathroom</p>
              <p className="font-medium">{detail.bathroom}</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-background p-3 text-sm">
              <p className="text-muted-foreground">Kitchen</p>
              <p className="font-medium">{detail.kitchen}</p>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionCard
          title="Files & Plans"
          action={<Button variant="outline" size="sm">Upload File</Button>}
          contentClassName="space-y-3"
        >
          {detail.files.map((file) => (
            <article key={file.id} className="flex items-center justify-between rounded-xl border border-border/80 bg-background p-3 text-sm">
              <div>
                <p className="font-medium">{file.title}</p>
                <p className="text-xs text-muted-foreground">{file.date}</p>
              </div>
              <Button variant="ghost" size="sm">Download</Button>
            </article>
          ))}

          <div className="grid gap-2 sm:grid-cols-3">
            {detail.quickUploads.map((item) => (
              <Button key={item} variant="outline" size="sm">{item}</Button>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Unit Notes" contentClassName="space-y-3">
          <div className="rounded-xl border border-border/80 bg-background p-3 text-sm text-muted-foreground">
            {detail.notes}
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm" render={<Link href={`/anu/${projectId}`} />}>
              Back to project
            </Button>
            <Button size="sm">Save Notes</Button>
          </div>
        </SectionCard>
      </div>
    </PageShell>
  );
}