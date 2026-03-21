import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { DesignPackage } from "@/lib/mockData";
import { DesignPackageTile } from "@/components/liisi/design-package-tile";
import { CustomSelectionCard } from "@/components/liisi/custom-selection-card";

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
    <main className="min-h-screen w-full bg-[#f3f3f3] pb-8">
      <header className="border-b border-[#d5d5d5] bg-[#f7f7f7] px-5 py-4">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <Link
                href="/liisi"
                aria-label="Back to home"
                className="mt-0.5 rounded-full p-1 text-[#2b2b2b]"
              >
                <ArrowLeft size={18} />
              </Link>
              <div>
                <h1 className="text-[33px] font-medium leading-[1.05] text-[#2e2e2e]">Interior Design</h1>
                <p className="text-[14px] text-[#8a8a8a]">Choose your preferred package</p>
              </div>
            </div>
            <span className="rounded-full bg-[#ececec] px-3 py-1 text-[12px] text-[#8c8c8c]">
              Not Selected
            </span>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-sm space-y-4 px-5 pt-4">
        <div className="rounded-2xl border border-[#d7d7d7] bg-white px-4 py-3 text-[14px] text-[#7d7d7d] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          Select one of our curated packages or request a custom design tailored to your preferences.
        </div>

        <div className="grid grid-cols-2 gap-3">
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
    </main>
  );
}
