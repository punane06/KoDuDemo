import { Card, CardContent } from "@/components/ui/card";
import type { ConstructionStage } from "@/lib/mockData";

// SVG arc math
const R = 46;
const CX = 60;
const CY = 60;
const CIRC = 2 * Math.PI * R;   // ≈ 289.03
const ARC_LEN = CIRC * 0.75;    // 270° arc ≈ 216.77
const GAP = CIRC - ARC_LEN;     // remaining ≈ 72.26
const ROTATE_DEG = 135;         // rotates start point to ~7 o'clock

interface Props {
  stages: ConstructionStage[];
  progressPercent: number;
  estimatedCompletion: string;
}

export function ConstructionProgressCard({ stages, progressPercent, estimatedCompletion }: Props) {
  const progressLen = ARC_LEN * (progressPercent / 100);
  const progressGap = CIRC - progressLen;
  const currentStage = stages.find((s) => s.current);

  return (
    <Card>
      <CardContent className="px-4 pt-4 pb-5">
        {/* Title */}
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-4">
          ✦ Construction Progress ✦
        </p>

        {/* Stage timeline */}
        <div className="relative flex items-start justify-between px-1 mb-2">
          {/* connecting line behind dots */}
          <div className="absolute top-3 left-7 right-7 h-px bg-border" />
          {stages.map((stage) => {
            const filled = stage.done || !!stage.current;
            return (
              <div key={stage.id} className="relative flex flex-col items-center gap-1.5 w-11">
                <div
                  className={[
                    "z-10 h-6 w-6 rounded-full flex items-center justify-center ring-2",
                    filled
                      ? "bg-primary ring-primary"
                      : "bg-background ring-border",
                  ].join(" ")}
                >
                  {filled && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <polyline
                        points="1.5,5 3.8,7.5 8.5,2.5"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={[
                    "text-[9px] text-center leading-tight",
                    stage.current
                      ? "font-semibold text-primary"
                      : filled
                      ? "text-muted-foreground"
                      : "text-muted-foreground/60",
                  ].join(" ")}
                >
                  {stage.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Circular arc progress */}
        <div className="flex justify-center my-1">
          <svg
            width="130"
            height="115"
            viewBox="0 0 120 120"
            aria-label={`${progressPercent}% complete`}
          >
            {/* Background arc */}
            <circle
              cx={CX}
              cy={CY}
              r={R}
              fill="none"
              stroke="#CAD4DA"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${ARC_LEN} ${GAP}`}
              transform={`rotate(${ROTATE_DEG} ${CX} ${CY})`}
            />
            {/* Progress arc */}
            <circle
              cx={CX}
              cy={CY}
              r={R}
              fill="none"
              stroke="#FACC58"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${progressLen} ${progressGap}`}
              transform={`rotate(${ROTATE_DEG} ${CX} ${CY})`}
            />
            {/* Percentage */}
            <text
              x={CX}
              y={CY - 4}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontSize: 22,
                fontWeight: 700,
                fill: "#223F43",
                fontFamily: "'Bell MT', Georgia, serif",
              }}
            >
              {progressPercent}%
            </text>
            {/* "Complete" label */}
            <text
              x={CX}
              y={CY + 16}
              textAnchor="middle"
              style={{ fontSize: 10, fill: "#556063" }}
            >
              Complete
            </text>
          </svg>
        </div>

        {/* Stage label + estimated completion */}
        <div className="text-center space-y-1 -mt-1">
          {currentStage && (
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-primary">{currentStage.label}</span> stage in progress
            </p>
          )}
          <p className="text-xs text-muted-foreground">
            Estimated completion {estimatedCompletion}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
