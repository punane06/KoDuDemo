import type { DesignPackage } from "@/lib/mockData";
import { DesignPackageTile } from "@/components/liisi/design-package-tile";
import { CustomSelectionCard } from "@/components/liisi/custom-selection-card";
import { liisiText, liisiSurface, liisiState, liisiLayout } from "@/components/liisi/liisi-design-system";
import { LiisiHeader } from "@/components/liisi/liisi-header";
import { LiisiChatFab } from "@/components/liisi/liisi-chat-fab";

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
  }
> = {
  "pkg-essential": {
    label: "Package A",
    title: "Light & Modern",
    imageUrl: "https://picsum.photos/600/420?random=451",
    tags: ["Oak flooring", "White quartz"],
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
  return (
    <main className={liisiSurface.pageBackground}>
      <LiisiHeader
        title="Interior Design"
        subtitle="Choose your preferred package"
        backHref="/liisi"
        rightSlot={<span className={liisiState.notSelected}>Not Selected</span>}
        variant="inner"
      />

      <section className={`mx-auto w-full ${liisiLayout.containerWidth} ${liisiLayout.sectionGap} px-5 pt-4`}>
        <div className={`${liisiSurface.cardCompact} px-4 py-3 ${liisiText.subtext}`}>
          Select one of our curated packages or request a custom design tailored to your preferences.
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
