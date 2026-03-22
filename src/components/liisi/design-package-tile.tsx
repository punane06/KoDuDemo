import Image from "next/image";
import Link from "next/link";
import { liisiText, liisiSurface, liisiState } from "@/components/liisi/liisi-design-system";

interface DesignPackageTileProps {
  packageLabel: string;
  title: string;
  tags: [string, string];
  imageUrl: string;
  href?: string;
  selected?: boolean;
}

export function DesignPackageTile({
  packageLabel,
  title,
  tags,
  imageUrl,
  href,
  selected = false,
}: DesignPackageTileProps) {
  const cardMedia = (
    <>
      <div className="relative h-[136px] w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 50vw, 180px"
          className="object-cover"
        />
      </div>

      <div className="space-y-1 px-3 py-2">
        <p className={liisiText.labelSoft}>{packageLabel}</p>
        <h3 className={liisiText.bodyPlus}>{title}</h3>
        <div className="space-y-0.5 pt-0.5">
          <p className={`${liisiState.badge}`}>
            {tags[0]}
          </p>
          <p className={`${liisiState.badge}`}>
            {tags[1]}
          </p>
        </div>
      </div>
    </>
  );

  return (
    <article className={`${liisiSurface.cardCompact} relative overflow-hidden ${selected ? "ring-2 ring-[#FACC58]" : ""}`}>
      {selected ? (
        <span className="absolute right-2 top-2 z-10 rounded-full bg-[#20464b] px-2 py-1 text-[10px] font-medium text-[#f3f3f2]">
          Selected
        </span>
      ) : null}
      {href ? <Link href={href}>{cardMedia}</Link> : cardMedia}

      <div className="flex items-center justify-between gap-2 border-t border-[#ece7df] px-3 py-3">
        {href ? (
          <Link href={href} className="text-[11px] font-medium text-[#7f7b74] hover:text-[#4d4a45]">
            View details
          </Link>
        ) : (
          <span className="text-[11px] text-[#9b9790]">Package overview</span>
        )}

        {selected ? (
          <span className="rounded-full bg-[#dfe6df] px-3 py-1.5 text-[11px] font-medium text-[#56705b]">
            Selected
          </span>
        ) : (
          <span className="text-[11px] text-[#9b9790]">Review package</span>
        )}
      </div>
    </article>
  );
}
