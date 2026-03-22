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
      {/* Header: solid dark green, yellow serif, logo right */}
      <LiisiHeader title={apartment.address} subtitle="Tere Liis" variant="home" />

      <main className={`mx-auto w-full ${liisiLayout.containerWidth} flex-1 ${liisiLayout.sectionGap} ${liisiLayout.pageMargin} pt-0 pb-8`}>  
        {/* Construction Progress Card */}
        <div className="my-4 mb-6">
          <ConstructionProgressCard
            stages={liisiConstructionStages}
            progressPercent={apartment.progressPercent}
            estimatedCompletion={apartment.completionDate}
            timelineHref="/liisi/timeline"
          />
        </div>

        {/* Latest Update */}
        <div className="pl-2 pr-2">
          <LatestUpdateCard
            date={liisiLatestUpdate.date}
            category={liisiLatestUpdate.category}
            imageUrl={liisiLatestUpdate.imageUrl}
            text={liisiLatestUpdate.text}
            totalCount={liisiLatestUpdate.totalCount}
            viewAllHref="/liisi/gallery"
          />
        </div>

        {/* Quick Access */}
        <div className="mb-5 mt-6">
          <h2 className="font-inter font-normal text-[15px] text-[#223F43] mb-2">Quick Access</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/liisi/documents">
              <div className="flex items-center gap-3 rounded-xl bg-white border border-[#ececec] p-4 cursor-pointer transition hover:bg-[#f7f7f7]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#223F43]">
                  <FileText size={18} className="text-[#FACC58]" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#223F43]">Documents</p>
                  <p className="text-[12px] text-[#8b8b8b]">Legal files</p>
                </div>
              </div>
            </Link>
            <Link href="/liisi/files">
              <div className="flex items-center gap-3 rounded-xl bg-white border border-[#ececec] p-4 cursor-pointer transition hover:bg-[#f7f7f7]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#223F43]">
                  <Folder size={18} className="text-[#FACC58]" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#223F43]">Files</p>
                  <p className="text-[12px] text-[#8b8b8b]">Plans</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Floor Plan */}
        <div className=" mb-5">
          <h2 className="font-inter font-normal text-[15px] text-[#223F43] mb-2">Floor Plan</h2>

          <Image
            src="https://picsum.photos/600/280?random=202"
            alt="Floor plan"
            width={600}
            height={280}
            className="h-44 w-full object-cover"
          />
        </div>

        {/* Interior Design Options CTA */}
        <Link
          href="/liisi/design"
          className="flex items-center gap-3 rounded-xl px-4 py-4 text-white mb-5"
          style={{ backgroundColor: liisiColors.primary }}
        >
          <div
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: liisiColors.accent }}
          >
            <Image
              src="/IconInterior.svg"
              alt="Interior Icon"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="flex-1">
            <p className="font-semibold leading-tight">Interior Design Options</p>
            <p className="text-xs opacity-75">Select your preferred package</p>
          </div>
          <span className="text-xl opacity-60">›</span>
        </Link>

        {/* Recent Updates */}
        <div>
          <h2 className="font-inter font-normal text-[15px] text-[#223F43] mb-2">Recent Updates</h2>
          <ul className="space-y-2">
            {recentUpdates.map((update) => (
              <li key={update.id} className="flex gap-3 items-start">
                <span
                  className="inline-block align-middle"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: 16,
                    color: '#e0e0e0',
                    padding: '0 4px 3px 4px',
                    lineHeight: 1,
                    verticalAlign: 'middle',
                  }}
                >
                  &bull;
                </span>
                <div>
                  <p className="font-inter font-light text-[12px] text-[#6b6b6b]">{update.date}</p>
                  <p className="font-inter font-light text-[12px] text-[#6b6b6b]">{update.title}</p>
                  <p className="font-inter font-light text-[12px] text-[#6b6b6b]">{update.description}</p>
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