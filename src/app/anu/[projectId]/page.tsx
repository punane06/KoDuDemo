import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BarChart3, Clock3, PenLine, Plus } from "lucide-react";

import { AnuPanel } from "@/components/anu/anu-panel";
import { anuControls, anuState, anuSurface, anuText } from "@/components/anu/anu-design-system";
import { AnuViewFrame } from "@/components/anu/anu-view-frame";
import {
  developerProjects,
  getDeveloperProjectById,
  getDeveloperProjectDetailById,
  recentUpdates,
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

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { projectId } = await params;
  const project = getDeveloperProjectById(projectId);
  const detail = getDeveloperProjectDetailById(projectId);

  if (!project || !detail) {
    notFound();
  }

  const fallbackUpdateImageUrl = "/kodu-developer-svg-03.svg";

  return (
    <AnuViewFrame
      title={project.name}
      backHref="/anu"
      actions={
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1 ${anuControls.subtlePillCompact}`}>
            <Clock3 size={11} />
            {project.lastUpdated}
          </span>
          <button type="button" className={`${anuControls.primaryButtonCompact} ${anuControls.disabled}`} disabled title="Coming soon">
            <BarChart3 size={10} />
            Statistics
          </button>
        </div>
      }
    >
      <div className="space-y-2.5">
        <AnuPanel
          title={detail.stageSummary}
          titleClassName={anuText.panelHeading}
          action={
            <button
              type="button"
              className={`inline-flex items-center gap-1 ${anuControls.subtleButtonCompact} ${anuControls.disabled}`}
              disabled
              title="Coming soon"
            >
              <PenLine size={10} />
              Update Progress
            </button>
          }
          contentClassName="space-y-3"
        >
          <div>
            <p className={anuText.micro}>Current Stage</p>
            <div className="mt-1.5 flex flex-wrap gap-2">
              {detail.constructionStages.map((stage) => (
                <div key={stage.id} className="flex flex-col items-center gap-1">
                  <span
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full border text-[11px]",
                      stage.done && anuState.stageDone,
                      stage.current && anuState.stageCurrent,
                      !stage.done && !stage.current && anuState.stageTodo
                    )}
                  >
                    {stage.label.slice(0, 1)}
                  </span>
                  <p className={anuText.tiny}>{stage.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-2 ${anuSurface.insetCard} px-3 py-2.5`}>
            <div>
              <p className={anuText.body}>Next Stage:</p>
              <p className={`${anuText.bodyStrong} mt-1`}>{detail.nextStage}</p>
            </div>
            <div className="text-right">
              <p className={anuText.body}>Est. Completion:</p>
              <p className={`${anuText.bodyStrong} mt-1`}>{detail.stageDate}</p>
            </div>
          </div>
        </AnuPanel>

        <div className="grid gap-3 xl:grid-cols-[1.1fr_0.9fr]">
          <AnuPanel title="Project Updates" contentClassName="space-y-2">
            {recentUpdates.map((update, index) => (
              <article key={update.id} className={`grid grid-cols-[44px_1fr_auto] items-start gap-2 ${anuSurface.panelInset} p-1.5`}>
                <Image
                  src={detail.photoUrls.length > 0 ? detail.photoUrls[index % detail.photoUrls.length] : fallbackUpdateImageUrl}
                  alt={update.title}
                  width={44}
                  height={34}
                  className="h-[34px] w-[44px] rounded-[6px] object-cover"
                />
                <div>
                  <p className={anuText.itemTitle}>{update.title}</p>
                  <p className={`mt-0.5 ${anuText.itemBody}`}>{update.description}</p>
                </div>
                <p className={anuText.tiny}>{update.date}</p>
              </article>
            ))}
          </AnuPanel>

          <AnuPanel
            title={`Units (${project.unitCount})`}
            action={
              <button type="button" className={`${anuControls.primaryButtonCompact} ${anuControls.disabled}`} disabled title="Coming soon">
                <Plus size={10} />
                Send Message
              </button>
            }
            contentClassName="space-y-1.5"
          >
            <div className={`grid grid-cols-[1.4fr_0.9fr_0.8fr_0.9fr] ${anuSurface.mutedRow} px-2 py-1 ${anuText.tableHeading}`}>
              <p>Unit ID</p>
              <p>Status</p>
              <p>Design</p>
              <p>Package</p>
            </div>

            {detail.units.map((unit) => (
              <Link
                key={unit.id}
                href={`/anu/${project.id}/${unit.id}`}
                className={`grid grid-cols-[1.4fr_0.9fr_0.8fr_0.9fr] items-center ${anuSurface.softRow} px-2 py-1 ${anuText.tableCell} transition-colors hover:bg-[#f2f2f2]`}
              >
                <p>{unit.name}</p>
                <p className="text-[#6a6a6a]">{unit.status}</p>
                <p className="text-[#6a6a6a]">{unit.designStage}</p>
                <p className="truncate text-[#6a6a6a]">{unit.packageName}</p>
              </Link>
            ))}
          </AnuPanel>
        </div>

        <div className="flex justify-end">
          <Link
            href="/anu"
            className={`inline-flex items-center ${anuControls.subtleButton}`}
          >
            Back to overview
          </Link>
        </div>
      </div>
    </AnuViewFrame>
  );
}