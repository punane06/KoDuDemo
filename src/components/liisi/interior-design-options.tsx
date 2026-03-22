"use client";

import type { DesignPackage } from "@/lib/mockData";
import { DesignPackageTile } from "@/components/liisi/design-package-tile";
import { CustomSelectionCard } from "@/components/liisi/custom-selection-card";
import { liisiText, liisiSurface, liisiLayout } from "@/components/liisi/liisi-design-system";
import { LiisiHeader } from "@/components/liisi/liisi-header";
import { LiisiChatFab } from "@/components/liisi/liisi-chat-fab";
import {
  INTERIOR_DESIGN_SELECTION_DEADLINE,
  clearInteriorDesignSelection,
  useInteriorDesignSelection,
} from "@/components/liisi/interior-design-selection";

interface InteriorDesignOptionsProps {
  packages: DesignPackage[];
}

const packageVisuals: Record<
  string,
  {
    label: string;
    title: string;
    imageUrl: string;
    tags: [string, string];
    href?: string;
  }
> = {
  "pkg-essential": {
    label: "Package A",
    title: "Light & Modern",
    imageUrl: "https://picsum.photos/600/420?random=451",
    tags: ["Oak flooring", "White quartz"],
    href: "/liisi/design/light-modern",
  },
  "pkg-balanced": {
    label: "Package B",
    title: "Dark & Premium",
    imageUrl: "https://picsum.photos/600/420?random=452",
    tags: ["Walnut flooring", "Black granite"],
  },
  "pkg-signature": {
    label: "Package C",
    title: "Classic & Neutral",
    imageUrl: "https://picsum.photos/600/420?random=453",
    tags: ["Ash flooring", "Beige marble"],
  },
  "pkg-bespoke": {
    label: "Package D",
    title: "Nordic Warmth",
    imageUrl: "https://picsum.photos/600/420?random=454",
    tags: ["Pine flooring", "Warm stone"],
  },
};

export function InteriorDesignOptions({ packages }: InteriorDesignOptionsProps) {
  const selectedPackageId = useInteriorDesignSelection();
  const selectedPackage = selectedPackageId ? packageVisuals[selectedPackageId] : null;

  return (
    <main className={liisiSurface.pageBackground}>
      <LiisiHeader
        title="Interior Design"
        subtitle="Choose your preferred package"
        backHref="/liisi"
        rightSlot={
          selectedPackage ? (
            <span className="rounded-full bg-[#20464b] px-3 py-1 text-[11px] font-medium text-[#f3f3f2]">
              Selected: {selectedPackage.title}
            </span>
          ) : (
            <span className="rounded-full bg-[#efe8db] px-3 py-1 text-[11px] font-medium text-[#9c7f4c]">
              {INTERIOR_DESIGN_SELECTION_DEADLINE}
            </span>
          )
        }
        variant="inner"
      />

      <section className={`mx-auto w-full ${liisiLayout.containerWidth} ${liisiLayout.sectionGap} px-5 pt-4 ${liisiLayout.contentBottomPadding}`}>
        <div className={`${liisiSurface.cardCompact} px-4 py-3`}>
          <p className={liisiText.subtext}>
            {selectedPackage
              ? `Your current selection is ${selectedPackage.title}. If you want to choose another package, first cancel your current selection before ${INTERIOR_DESIGN_SELECTION_DEADLINE.replace("Deadline ", "")}.`
              : `Please confirm your preferred package by May 12. Select one of our curated packages or request a custom design tailored to your preferences.`}
          </p>

          {selectedPackage ? (
            <div className="mt-3">
              <button
                type="button"
                onClick={clearInteriorDesignSelection}
                className="rounded-full border border-[#d7d0c5] bg-[#f7f2ea] px-3 py-1.5 text-[11px] font-medium text-[#6f6557] transition-colors hover:bg-[#f1e9dd]"
              >
                Cancel selection
              </button>
            </div>
          ) : null}
        </div>

        <div className={`grid ${liisiLayout.gridCols2} ${liisiLayout.gridGap}`}>
          {packages.map((pkg) => {
            const visual = packageVisuals[pkg.id];

            if (!visual) {
              return null;
            }

            return (
              <DesignPackageTile
                key={pkg.id}
                packageLabel={visual.label}
                title={visual.title}
                imageUrl={visual.imageUrl}
                tags={visual.tags}
                href={visual.href}
                selected={selectedPackageId === pkg.id}
              />
            );
          })}
        </div>

        <CustomSelectionCard />
      </section>

      <LiisiChatFab />
    </main>
  );
}
