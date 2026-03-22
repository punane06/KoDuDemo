import Image from "next/image";
import { ArrowRight, CalendarDays, Circle } from "lucide-react";

import { LiisiHeader } from "@/components/liisi/liisi-header";
import { liisiLayout, liisiSurface } from "@/components/liisi/liisi-design-system";

type TimelineStage = {
  id: string;
  title: string;
  description: string;
  from: string;
  to: string;
  status: "completed" | "in-progress" | "upcoming";
  imageUrl?: string;
};

const timelineStages: TimelineStage[] = [
  {
    id: "timeline-foundation",
    title: "Foundation",
    description: "Ground preparation and foundation laying. This includes excavation, drainage and base concrete works.",
    from: "Sep 1",
    to: "Oct 15",
    status: "completed",
    imageUrl: "https://picsum.photos/seed/kodu-timeline-foundation/200/140",
  },
  {
    id: "timeline-walls",
    title: "Walls",
    description: "Building the structural walls and framework. This phase includes core construction and reinforcement.",
    from: "Oct 16",
    to: "Dec 10",
    status: "completed",
    imageUrl: "https://picsum.photos/seed/kodu-timeline-walls/200/140",
  },
  {
    id: "timeline-roof",
    title: "Roof",
    description: "Roof construction and waterproofing. Installing the roof structure and weatherproof layers.",
    from: "Dec 11",
    to: "Jan 20",
    status: "completed",
  },
  {
    id: "timeline-interior",
    title: "Interior Works",
    description: "Installing interior systems including plumbing, electrical, and insulation across the apartment.",
    from: "Jan 21",
    to: "Mar 30",
    status: "in-progress",
    imageUrl: "https://picsum.photos/seed/kodu-timeline-interior/200/140",
  },
  {
    id: "timeline-finishing",
    title: "Finishing",
    description: "Final touches including painting, flooring, fixtures, and fittings across all main areas.",
    from: "Apr 1",
    to: "May 15",
    status: "upcoming",
  },
  {
    id: "timeline-handover",
    title: "Handover",
    description: "Final inspection, quality checks, and keys handover. This is the exciting final step.",
    from: "May 16",
    to: "May 30",
    status: "upcoming",
  },
];

const statusBadgeClassByStatus: Record<TimelineStage["status"], string> = {
  completed: "bg-[#2c2c2f] text-white",
  "in-progress": "border border-[#cfb682] bg-[#faf4e9] text-[#c09a5c]",
  upcoming: "bg-[#ececeb] text-[#8a8a87]",
};

const statusLabelByStatus: Record<TimelineStage["status"], string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  upcoming: "Upcoming",
};

const markerClassByStatus: Record<TimelineStage["status"], string> = {
  completed: "bg-[#222326] border-[#222326] text-white",
  "in-progress": "bg-[#f5f0e6] border-[#cfb682] text-[#c09a5c]",
  upcoming: "bg-white border-[#d7d7d7] text-[#d0d0cf]",
};

export default function LiisiTimelinePage() {
  return (
    <main className={liisiSurface.pageBackground}>
      <LiisiHeader
        title="Timeline"
        subtitle="Track every stage"
        backHref="/liisi"
        variant="inner"
      />

      <section className={`mx-auto w-full ${liisiLayout.containerWidth} ${liisiLayout.pageMargin} pt-4 ${liisiLayout.contentBottomPadding}`}>
        <div className="relative pl-14">
          <div className="absolute bottom-8 left-5 top-3 w-px bg-[#d4d4d4]" />

          <ul className="space-y-4">
            {timelineStages.map((stage) => (
              <li key={stage.id} className="relative min-h-10">
                <span
                  aria-hidden="true"
                  className={`absolute -left-14 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border text-[16px] ${markerClassByStatus[stage.status]}`}
                >
                  <Circle size={16} />
                </span>

                <article className="rounded-3xl border border-[#d1d1d1] bg-[#f9f9f9] px-4 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="max-w-[70%] text-[30px] font-normal leading-[1.12] text-[#2c2c2c]">{stage.title}</h2>
                    <span
                      className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-[12px] font-medium ${statusBadgeClassByStatus[stage.status]}`}
                    >
                      {statusLabelByStatus[stage.status]}
                    </span>
                  </div>

                  <p className="mt-2 text-[14px] leading-relaxed text-[#7a7a7a]">{stage.description}</p>

                  <div className="mt-3 flex items-center gap-2 text-[13px] text-[#8a8a8a]">
                    <CalendarDays size={13} />
                    <span>{stage.from}</span>
                    <ArrowRight size={13} />
                    <CalendarDays size={13} />
                    <span>{stage.to}</span>
                  </div>

                  {stage.imageUrl ? (
                    <div className="mt-3 h-[62px] w-[62px] overflow-hidden rounded-xl">
                      <Image
                        src={stage.imageUrl}
                        alt={`${stage.title} stage image`}
                        width={62}
                        height={62}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : null}
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
