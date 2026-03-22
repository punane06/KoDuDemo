import { CalendarDays, Download, FileText } from "lucide-react";
import Link from "next/link";

import { LiisiHeader } from "@/components/liisi/liisi-header";
import { LiisiChatFab } from "@/components/liisi/liisi-chat-fab";
import { liisiLayout, liisiSurface } from "@/components/liisi/liisi-design-system";

type TechnicalFile = {
  id: string;
  title: string;
  dateLabel: string;
  sizeLabel: string;
  fileType: "PDF";
  interactive?: boolean;
};

const technicalFiles: TechnicalFile[] = [
  {
    id: "tech-001",
    title: "Apartment Floor Plan",
    dateLabel: "Aug 15, 2025",
    sizeLabel: "3.2 MB",
    fileType: "PDF",
    interactive: true,
  },
  {
    id: "tech-002",
    title: "Electrical Plan",
    dateLabel: "Sep 1, 2025",
    sizeLabel: "1.8 MB",
    fileType: "PDF",
  },
  {
    id: "tech-003",
    title: "Plumbing Plan",
    dateLabel: "Sep 1, 2025",
    sizeLabel: "1.5 MB",
    fileType: "PDF",
  },
  {
    id: "tech-004",
    title: "Technical Specifications",
    dateLabel: "Aug 20, 2025",
    sizeLabel: "2.7 MB",
    fileType: "PDF",
  },
];

export default function LiisiFilesPage() {
  return (
    <main className={liisiSurface.pageBackground}>
      <LiisiHeader title="Technical Files" subtitle="Plans & drawings" backHref="/liisi" variant="inner" />

      <section className={`mx-auto w-full ${liisiLayout.containerWidth} px-4 py-4 sm:px-6`}>
        <div className="space-y-3">
          {technicalFiles.map((file) => (
            <article key={file.id} className={`${liisiSurface.cardCompact} px-4 py-3`}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ecebea] text-[#2d2d2d]">
                    <FileText size={18} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="truncate text-[16px] font-medium text-[#2d2d2d]">{file.title}</p>
                      {file.interactive ? (
                        <Link
                          href="/liisi/files/floor-plan"
                          aria-label="Open interactive floor plan"
                          className="inline-flex items-center rounded-full border border-[#d3a95a] bg-[#f6efe3] px-2 py-0.5 text-[11px] text-[#c08a2b]"
                        >
                          Interactive
                        </Link>
                      ) : null}
                    </div>

                    <p className="mt-1 flex items-center gap-2 text-[11px] text-[#7b7b7b]">
                      <CalendarDays size={12} />
                      <span>{file.dateLabel}</span>
                      <span>•</span>
                      <span>{file.sizeLabel}</span>
                      <span>•</span>
                      <span>{file.fileType}</span>
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label={`Download ${file.title}`}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ecebea] text-[#2d2d2d]"
                >
                  <Download size={18} />
                </button>
              </div>
            </article>
          ))}

          <div className={`${liisiSurface.cardCompact} px-4 py-4 text-[12px] leading-relaxed text-[#787878]`}>
            <span className="font-medium text-[#4b4b4b]">Interactive plans:</span> Tap on floor plans to view them in full detail with zoomable, layered views of electrical, plumbing, and other systems.
          </div>
        </div>
      </section>

      <LiisiChatFab />
    </main>
  );
}
