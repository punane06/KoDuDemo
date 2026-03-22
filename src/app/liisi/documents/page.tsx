import { CalendarDays, Download, FileText, Plus } from "lucide-react";

import { documents } from "@/lib/mockData";
import { LiisiHeader } from "@/components/liisi/liisi-header";
import { LiisiChatFab } from "@/components/liisi/liisi-chat-fab";
import { liisiSurface, liisiLayout } from "@/components/liisi/liisi-design-system";

const fileSizesById: Record<string, string> = {
  "doc-001": "2.4 MB",
  "doc-002": "156 KB",
  "doc-003": "1.1 MB",
};

function formatDocumentDate(isoDate: string) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function LiisiDocumentsPage() {
  return (
    <main className={liisiSurface.pageBackground}>
      <LiisiHeader
        title="Documents"
        subtitle="Contracts & legal files"
        backHref="/liisi"
        variant="inner"
        rightSlot={
          <button
            type="button"
            aria-label="Add document"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FACC58] text-[#20464b]"
          >
            <Plus size={20} />
          </button>
        }
      />

      <section className={`mx-auto w-full ${liisiLayout.containerWidth} ${liisiLayout.pageMargin} py-4`}>
        <div className="space-y-3">
          {documents.map((doc) => (
            <article key={doc.id} className={`${liisiSurface.cardCompact} px-4 py-3`}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ecebea] text-[#2d2d2d]">
                    <FileText size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[16px] font-medium text-[#2d2d2d]">{doc.title}</p>
                    <p className="mt-1 flex items-center gap-2 text-[11px] text-[#7b7b7b]">
                      <CalendarDays size={12} />
                      <span>{formatDocumentDate(doc.uploadedAt)}</span>
                      <span>•</span>
                      <span>{fileSizesById[doc.id] ?? "PDF"}</span>
                      <span>•</span>
                      <span>{doc.fileType.toUpperCase()}</span>
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label={`Download ${doc.title}`}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ecebea] text-[#2d2d2d]"
                >
                  <Download size={18} />
                </button>
              </div>
            </article>
          ))}

          <div className={`${liisiSurface.cardCompact} px-4 py-4 text-[12px] leading-relaxed text-[#8a8a8a]`}>
            All documents are digitally signed and legally binding. Keep them safe for your records.
          </div>
        </div>
      </section>

      <LiisiChatFab />
    </main>
  );
}
