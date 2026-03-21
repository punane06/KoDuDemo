import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BarChart3, Clock3, PenLine, Plus } from "lucide-react";

import { AnuPanel } from "@/components/anu/anu-panel";
import { anuSurface, anuText } from "@/components/anu/anu-design-system";
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

  return (
    <AnuViewFrame
      title={project.name}
      backHref="/anu"
      actions={
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-[4px] border border-[#cfcfcf] bg-[#f5f5f5] px-2 py-0.5 text-[11px] text-[#5f5f5f]">
            <Clock3 size={11} />
            {project.lastUpdated}
          </span>
          <button className="inline-flex items-center gap-1 rounded-[4px] border border-[#252525] bg-[#252525] px-2.5 py-1 text-[11px] text-white">
            <BarChart3 size={11} />
            Statistics
          </button>
        </div>
      }
    >
      <div className="space-y-3">
        <AnuPanel
          title={detail.stageSummary}
          action={
            <button className="inline-flex items-center gap-1 rounded-[4px] border border-[#d0d0d0] bg-[#f2f2f2] px-2 py-1 text-[11px] text-[#4e4e4e]">
              <PenLine size={11} />
              Update Progress
            </button>
          }
          contentClassName="space-y-4"
        >
          <div>
            <p className={anuText.micro}>Current Stage</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {detail.constructionStages.map((stage) => (
                <div key={stage.id} className="flex flex-col items-center gap-1.5">
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full border text-[10px]",
                      stage.done && "border-[#35595f] bg-[#35595f] text-white",
                      stage.current && "border-[#e2bc50] bg-[#e2bc50] text-[#2f2f2f]",
                      !stage.done && !stage.current && "border-[#d4d4d4] bg-[#ececec] text-[#8a8a8a]"
                    )}
                  >
                    {stage.label.slice(0, 1)}
                  </span>
                  <p className="text-[10px] text-[#7b7b7b]">{stage.label}</p>
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
              <article key={update.id} className="grid grid-cols-[50px_1fr_auto] items-start gap-2 rounded-[8px] border border-[#dfdfdf] bg-[#f9f9f9] p-2">
                <Image
                  src={detail.photoUrls[index % detail.photoUrls.length]}
                  alt={update.title}
                  width={50}
                  height={40}
                  className="h-10 w-[50px] rounded-[6px] object-cover"
                />
                <div>
                  <p className="text-[12px] font-medium leading-tight text-[#3a3a3a]">{update.title}</p>
                  <p className="mt-0.5 text-[11px] leading-tight text-[#777777]">{update.description}</p>
                </div>
                <p className="text-[10px] text-[#7e7e7e]">{update.date}</p>
              </article>
            ))}
          </AnuPanel>

          <AnuPanel
            title={`Units (${project.unitCount})`}
            action={
              <button className="inline-flex items-center gap-1 rounded-[4px] border border-[#252525] bg-[#252525] px-2.5 py-1 text-[11px] text-white">
                <Plus size={11} />
                Send Message
              </button>
            }
            contentClassName="space-y-2"
          >
            <div className="grid grid-cols-[1.4fr_0.9fr_0.8fr_0.9fr] rounded-[6px] border border-[#dfdfdf] bg-[#f3f3f3] px-2 py-1 text-[10px] uppercase tracking-[0.06em] text-[#727272]">
              <p>Unit ID</p>
              <p>Status</p>
              <p>Design</p>
              <p>Package</p>
            </div>

            {detail.units.map((unit) => (
              <Link
                key={unit.id}
                href={`/anu/${project.id}/${unit.id}`}
                className="grid grid-cols-[1.4fr_0.9fr_0.8fr_0.9fr] items-center rounded-[6px] border border-[#e0e0e0] bg-[#fafafa] px-2 py-1.5 text-[11px] text-[#383838] transition-colors hover:bg-[#f2f2f2]"
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
            className="inline-flex items-center rounded-[4px] border border-[#d0d0d0] bg-[#f2f2f2] px-2.5 py-1 text-[11px] text-[#4e4e4e]"
          >
            Back to overview
          </Link>
        </div>
      </div>
    </AnuViewFrame>
  );
}