import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { ConstructionStage } from "@/lib/mockData";
import { liisiText, liisiColors } from "@/components/liisi/liisi-design-system";
import { ProgressArcImage } from "@/components/liisi/ProgressArcImage";
import { ProgressTitleIcon } from "@/components/liisi/ProgressTitleIcon";

interface Props {
  stages: ConstructionStage[];
  progressPercent: number;
  estimatedCompletion: string;
  timelineHref?: string;
}

export function ConstructionProgressCard({ stages, progressPercent, estimatedCompletion, timelineHref }: Props) {
  const currentStage = stages.find((s) => s.current);
  return (
    <div
      className="rounded-2xl bg-white px-4 pt-4 pb-5 mb-5 border border-[#ececec]"
      style={{
        boxShadow:
          "0px 20px 25px -5px rgba(0,0,0,0.10), 0px 8px 10px -6px rgba(0,0,0,0.10)",
      }}
    >
      {/* Title with icons */}
      <div className="flex items-center justify-center mb-4 gap-1">
        <ProgressTitleIcon />
        <span className="font-inter font-light text-[12px] text-[#6b6b6b]">Construction Progress</span>
        <ProgressTitleIcon />
      </div>
      {/* Progress arc as static SVG image */}
      <ProgressArcImage percent={progressPercent} />

      {/* Stage label + estimated completion */}
      <div className="text-center space-y-1 -mt-1">
        {/* {currentStage && (
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-primary">{currentStage.label}</span> stage in progress
          </p>
        )} */}
        <p className="text-xs text-muted-foreground mt-2">
          Estimated completion {estimatedCompletion}
        </p>

        {timelineHref ? (
          <p className="pt-1">
            <Link href={timelineHref} className="text-xs font-medium text-[#223F43] underline-offset-2 hover:underline">
              View full timeline
            </Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}
