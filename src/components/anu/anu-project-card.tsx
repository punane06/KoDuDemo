import Link from "next/link";
import { AlertCircle, Clock3, MessageSquare } from "lucide-react";

import { anuSurface, anuText } from "@/components/anu/anu-design-system";
import type { DeveloperProject } from "@/lib/mockData";

type AnuProjectCardProps = {
  project: DeveloperProject;
};

export function AnuProjectCard({ project }: AnuProjectCardProps) {
  return (
    <Link
      href={`/anu/${project.id}`}
      className={`block ${anuSurface.card} px-4 py-4 transition-colors hover:border-[#bfc8cc] sm:px-5`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[34px] font-normal leading-none text-[#262626]">{project.name}</h2>
          <p className="mt-1 text-[28px] font-light leading-none text-[#7a7a7a]">
            {project.unitCount} apartments
            <span className="mx-2 text-[#9b9b9b]">•</span>
            {project.currentStage}
          </p>
        </div>
        <p className="text-[45px] font-normal leading-none text-[#262626]">{project.progressPercent}%</p>
      </div>

      <div className={`mt-3 ${anuSurface.progressTrack}`}>
        <div className={anuSurface.progressFill} style={{ width: `${project.progressPercent}%` }} />
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <p className={`${anuText.body} inline-flex items-center gap-1.5`}>
            <AlertCircle size={14} />
            {project.pendingDesigns} pending design
          </p>
          <span className={`${anuSurface.chip} bg-[#20494f] text-[#f3f7f8]`}>
            <MessageSquare size={12} />
            {project.clientUpdates} clients
          </span>
        </div>

        <p className={`${anuText.body} inline-flex items-center gap-1.5`}>
          <Clock3 size={14} />
          {project.lastUpdated}
        </p>
      </div>

      <div className={`mt-3 grid grid-cols-2 gap-2 ${anuSurface.insetCard} px-3 py-2.5`}>
        <div>
          <p className={anuText.body}>Next Stage:</p>
          <p className={`${anuText.bodyStrong} mt-1`}>{project.currentStage}</p>
        </div>
        <div className="text-right">
          <p className={anuText.body}>Est. Completion:</p>
          <p className={`${anuText.bodyStrong} mt-1`}>{project.estimatedCompletion}</p>
        </div>
      </div>
    </Link>
  );
}