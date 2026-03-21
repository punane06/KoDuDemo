import Image from "next/image";
import Link from "next/link";
import { FileText, Folder } from "lucide-react";

import { Card } from "@/components/ui/card";
import {
  apartment,
  liisiConstructionStages,
  liisiLatestUpdate,
  recentUpdates,
} from "@/lib/mockData";
import { ConstructionProgressCard } from "@/components/liisi/construction-progress-card";
import { LatestUpdateCard } from "@/components/liisi/latest-update-card";
import { liisiText, liisiColors, liisiLayout } from "@/components/liisi/liisi-design-system";
import { LiisiHeader } from "@/components/liisi/liisi-header";
import { LiisiChatFab } from "@/components/liisi/liisi-chat-fab";

export default function LiisiPage() {
  return (
    <>
      <LiisiHeader title={apartment.address} subtitle="Tere Liis" variant="home" />

      <main className={`mx-auto w-full ${liisiLayout.containerWidth} flex-1 ${liisiLayout.sectionGap} ${liisiLayout.pageMargin} pt-4 pb-10`}>

        {/* ── Construction progress ───────────────────── */}
        <ConstructionProgressCard
          stages={liisiConstructionStages}
          progressPercent={apartment.progressPercent}
          estimatedCompletion={apartment.completionDate}
        />

        {/* ── Latest update ──────────────────────────── */}
        <LatestUpdateCard
          date={liisiLatestUpdate.date}
          category={liisiLatestUpdate.category}
          imageUrl={liisiLatestUpdate.imageUrl}
          text={liisiLatestUpdate.text}
          totalCount={liisiLatestUpdate.totalCount}
          viewAllHref="/liisi/gallery"
        />

        {/* ── Quick Access ───────────────────────────── */}
        <div>
          <h2 className={liisiText.sectionHeading}>Quick Access</h2>
          <div className={`grid ${liisiLayout.gridCols2} ${liisiLayout.gridGap} mt-2`}>
            <Link href="/liisi/documents">
              <Card className="flex cursor-pointer items-start gap-3 p-4 transition-colors hover:bg-muted/50">
                <FileText size={18} className="mt-0.5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Documents</p>
                  <p className="text-xs text-muted-foreground">Legal files</p>
                </div>
              </Card>
            </Link>
            <Link href="/liisi/files">
              <Card className="flex cursor-pointer items-start gap-3 p-4 transition-colors hover:bg-muted/50">
                <Folder size={18} className="mt-0.5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Files</p>
                  <p className="text-xs text-muted-foreground">Plans</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* ── Floor plan image ───────────────────────── */}
        <div className="overflow-hidden rounded-xl border border-border">
          <Image
            src="https://picsum.photos/600/280?random=202"
            alt="Floor plan"
            width={600}
            height={280}
            className="h-44 w-full object-cover"
          />
        </div>

        {/* ── Interior Design Options CTA ────────────── */}
        <Link
          href="/liisi/design"
          className="flex items-center gap-3 rounded-xl px-4 py-4 text-white"
          style={{ backgroundColor: liisiColors.primary }}
        >
          <div
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: liisiColors.accent }}
          >
            <span className="text-lg">🖌️</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold leading-tight">Interior Design Options</p>
            <p className="text-xs opacity-75">Select your preferred package</p>
          </div>
          <span className="text-xl opacity-60">›</span>
        </Link>

        {/* ── Recent Updates ─────────────────────────── */}
        <div>
          <h2 className={liisiText.sectionHeading}>Recent Updates</h2>
          <ul className={`${liisiLayout.sectionGap} mt-3`}>
            {recentUpdates.map((update) => (
              <li key={update.id} className="flex gap-3">
                <div
                  className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: liisiColors.accent }}
                />
                <div>
                  <p className={liisiText.captionMuted}>{update.date}</p>
                  <p className={liisiText.label}>{update.title}</p>
                  <p className={liisiText.captionMuted}>{update.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <LiisiChatFab />
    </>
  );
}