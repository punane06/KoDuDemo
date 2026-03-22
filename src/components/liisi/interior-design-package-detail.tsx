"use client";

import Image from "next/image";

import { LiisiHeader } from "@/components/liisi/liisi-header";
import { liisiLayout } from "@/components/liisi/liisi-design-system";
import {
  INTERIOR_DESIGN_SELECTION_DEADLINE,
  clearInteriorDesignSelection,
  setInteriorDesignSelection,
  useInteriorDesignSelection,
} from "@/components/liisi/interior-design-selection";

type DetailItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  chip?: string;
  imageUrl?: string;
};

type DetailSection = {
  id: string;
  title: string;
  description: string;
  items: DetailItem[];
};

const packageSections: DetailSection[] = [
  {
    id: "flooring",
    title: "Flooring",
    description: "Natural engineered oak with a matte finish throughout living areas",
    items: [
      {
        id: "parquet",
        title: "Parkett",
        subtitle: "Natural engineered oak flooring",
        description: "Kahrs Life Whole Grain",
        chip: "Whole Grain finish, 4 planks, matte, dimensions 118 x 1225 mm",
        imageUrl: "https://picsum.photos/seed/kodu-design-parquet/140/140",
      },
    ],
  },
  {
    id: "doors",
    title: "Doors & Details",
    description: "Premium door finishes with coordinated hardware",
    items: [
      {
        id: "doors-main",
        title: "Doors",
        description: "Natural matte lacquered oak veneer doors, similar to Boen Transparent TAMM 5",
        chip: "Matte lacquered finish, 2.3m height",
      },
      {
        id: "hinges",
        title: "Door Hinges",
        description: "Matte aluminum hinges by Hoppe Stockholm",
        chip: "Matte aluminum",
      },
      {
        id: "skirting",
        title: "Skirting Boards",
        description: "Natural lacquered oak skirting in Cream tone, 5.8 cm height",
        chip: "Cream finish",
        imageUrl: "https://picsum.photos/seed/kodu-design-skirting/140/140",
      },
    ],
  },
  {
    id: "walls",
    title: "Walls & Ceiling",
    description: "Clean, bright painted surfaces",
    items: [
      {
        id: "ceiling",
        title: "Ceiling Finish",
        description: "White matte ceiling paint RAL9010 with elegant detailing",
        chip: "RAL9010 White",
      },
      {
        id: "wall-finish",
        title: "Wall Finish (Entire Apartment)",
        description: "White painted walls RAL 9010",
        chip: "RAL9010 White",
        imageUrl: "https://picsum.photos/seed/kodu-design-wall-finish/140/140",
      },
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom",
    description: "Modern bathroom featuring quality tiles and premium Grohe fixtures",
    items: [
      {
        id: "wall-tiles",
        title: "Wall Tiles",
        description: "Matt ceramic tiles Pursue Greige 60×60 cm",
        chip: "Matt finish",
        imageUrl: "https://picsum.photos/seed/kodu-design-wall-tile/140/140",
      },
      {
        id: "decorative-tiles",
        title: "Decorative Tiles",
        description: "Rebels Moss 5 × 15 cm",
        chip: "Matt finish",
        imageUrl: "https://picsum.photos/seed/kodu-design-decor-tile/140/140",
      },
      {
        id: "floor-tiles",
        title: "Floor Tiles",
        description: "Matt ceramic tiles Pursue Greige 60×60 cm",
        chip: "Matt finish",
        imageUrl: "https://picsum.photos/seed/kodu-design-floor-tile/140/140",
      },
      {
        id: "sink-faucet",
        title: "Sink Faucet",
        description: "Grohe Essence M brushed graphite finish faucet",
        chip: "Brushed Hard Graphite",
        imageUrl: "https://picsum.photos/seed/kodu-design-faucet/140/140",
      },
      {
        id: "shower-set",
        title: "Shower Set",
        description: "Grohe Essence brushed graphite shower system with Rainshower SmartActive 900mm head and 130mm hand shower",
        chip: "Brushed Hard Graphite",
      },
      {
        id: "toilet",
        title: "Toilet",
        description: "Villeroy & Boch Architectura white wall-mounted toilet with soft-close seat",
        chip: "White",
      },
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen",
    description: "Modern kitchen elements (Note: Cabinet selection made separately)",
    items: [
      {
        id: "kitchen-wall",
        title: "Wall Finish",
        description: "White painted walls or optional tile backsplash",
        chip: "Choose your preferred finish",
      },
    ],
  },
];

function DetailRow({ item, first }: { item: DetailItem; first: boolean }) {
  return (
    <div className={first ? "pt-0" : "border-t border-[#ece7df] pt-4"}>
      <div className="flex items-start gap-3">
        {item.imageUrl ? (
          <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-[12px] bg-[#e7e2da]">
            <Image src={item.imageUrl} alt={item.title} fill sizes="56px" className="object-cover" />
          </div>
        ) : null}

        <div className="min-w-0">
          <p className="text-[13px] font-medium text-[#2f2f2f]">{item.title}</p>
          {item.subtitle ? <p className="mt-0.5 text-[11px] text-[#9a968f]">{item.subtitle}</p> : null}
          <p className="mt-0.5 text-[11px] leading-[1.45] text-[#8a8680]">{item.description}</p>
          {item.chip ? (
            <span className="mt-2 inline-flex rounded-full bg-[#efede9] px-3 py-1 text-[10px] text-[#8d8a84]">
              {item.chip}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function DetailSectionCard({ section }: { section: DetailSection }) {
  return (
    <article className="rounded-[20px] border border-[#dfdbd4] bg-[#fcfbf8] px-4 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.09)]">
      <h2 className="text-[14px] font-medium text-[#343434]">{section.title}</h2>
      <p className="mt-2 text-[11px] leading-[1.45] text-[#9a968f]">{section.description}</p>

      <div className="mt-4 space-y-4">
        {section.items.map((item, index) => (
          <DetailRow key={item.id} item={item} first={index === 0} />
        ))}
      </div>
    </article>
  );
}

export function InteriorDesignPackageDetail() {
  const selectedPackageId = useInteriorDesignSelection();
  const isSelected = selectedPackageId === "pkg-essential";
  const hasAnotherSelection = Boolean(selectedPackageId) && !isSelected;

  return (
    <main className="min-h-screen w-full bg-[#f6f4f0]">
      <LiisiHeader
        title="Light & Modern"
        subtitle="Interior Design Package"
        backHref="/liisi/design"
        rightSlot={
          isSelected ? (
            <span className="rounded-full bg-[#20464b] px-3 py-1 text-[10px] font-medium text-[#f3f3f2]">Selected</span>
          ) : (
            <span className="rounded-full bg-[#efe8db] px-3 py-1 text-[10px] font-medium text-[#9c7f4c]">{INTERIOR_DESIGN_SELECTION_DEADLINE}</span>
          )
        }
        variant="inner"
      />

      <div className="relative h-[168px] w-full overflow-hidden">
        <Image
          src="https://picsum.photos/seed/kodu-design-light-modern-hero/900/560"
          alt="Light & Modern interior hero"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <section className={`mx-auto w-full ${liisiLayout.containerWidth} ${liisiLayout.contentBottomPadding}`}>
        <div className="px-3 pb-6">
          <article className="relative -mt-8 rounded-[24px] border border-[#e2ddd5] bg-[#fbfaf7] px-4 py-4 shadow-[0_16px_28px_rgba(0,0,0,0.12)]">
            <h2 className="text-[14px] font-medium text-[#343434]">Package Overview</h2>
            <p className="mt-3 text-[13px] leading-[1.65] text-[#87837d]">
              A fresh, contemporary aesthetic with natural oak flooring, clean white surfaces, and premium fixtures. Perfect for those who appreciate timeless Scandinavian design with bright, airy spaces.
            </p>

            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-[12px] text-[#8a8680]">
                {isSelected
                  ? "This package is currently selected for your apartment."
                  : hasAnotherSelection
                    ? "Another package is currently selected. Cancel that selection first if you want to choose this one."
                    : "Review the package details and confirm your selection before May 12."}
              </p>

              {isSelected ? (
                <button
                  type="button"
                  onClick={clearInteriorDesignSelection}
                  className="shrink-0 rounded-full border border-[#d7d0c5] bg-[#f7f2ea] px-4 py-2 text-[12px] font-medium text-[#6f6557] transition-colors hover:bg-[#f1e9dd]"
                >
                  Cancel selection
                </button>
              ) : hasAnotherSelection ? (
                <button
                  type="button"
                  onClick={clearInteriorDesignSelection}
                  className="shrink-0 rounded-full border border-[#d7d0c5] bg-[#f7f2ea] px-4 py-2 text-[12px] font-medium text-[#6f6557] transition-colors hover:bg-[#f1e9dd]"
                >
                  Cancel current selection
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setInteriorDesignSelection("pkg-essential")}
                  className="shrink-0 rounded-full bg-[#20464b] px-4 py-2 text-[12px] font-medium text-[#f4f4f3] transition-colors hover:bg-[#1b3b3f]"
                >
                  Select this package
                </button>
              )}
            </div>
          </article>

          <div className="mt-5 space-y-4">
            {packageSections.map((section) => (
              <DetailSectionCard key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}