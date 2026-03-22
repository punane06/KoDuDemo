import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft, X } from "lucide-react";

import { KoduLogo } from "@/components/brand/KoduLogo";
import { liisiControls, liisiSurface, liisiText } from "@/components/liisi/liisi-design-system";

interface LiisiHeaderProps {
  title: string;
  subtitle?: string;
  backHref?: string;
  closeHref?: string;
  rightSlot?: ReactNode;
  variant?: "home" | "inner" | "inner-viewer";
}

export function LiisiHeader({
  title,
  subtitle,
  backHref,
  closeHref,
  rightSlot,
  variant = "home",
}: LiisiHeaderProps) {
  const isHome = variant === "home";
  const isViewer = variant === "inner-viewer";
  const hasLeadingBack = !isHome && Boolean(backHref);
  const headerClassName = isHome
    ? "w-full bg-[#223F43] shadow-none border-none"
    : liisiSurface.appHeader;
  const backClassName = isViewer ? `${liisiControls.backButton} text-[#f0f0f0]` : `${liisiControls.backButton} text-[#FACC58]`;
  const titleClassName = isHome
    ? "font-inter font-normal text-[18px] text-[#FACC58] leading-tight"
    : isViewer
    ? `${liisiText.appHeaderTitleCompact} text-[#f2f2f2]`
    : liisiText.appHeaderTitleCompact;
  const subtitleClassName = isHome
    ? "font-inter font-light text-[12px] text-[#FACC58] mb-0"
    : isViewer
    ? "text-[13px] text-[#9aa3a6]"
    : liisiText.appHeaderSubtitle;

  return (
    <header className={headerClassName}>
      {isHome ? (
        <div className="mx-auto flex w-full max-w-sm items-center justify-between gap-3 px-4 pt-6 pb-4 sm:px-6">
          <div className="min-w-0 flex flex-col items-start">
            {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}
            <h1 className={titleClassName}>{title}</h1>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {rightSlot}
            <div style={{ filter: 'brightness(0) saturate(100%) invert(81%) sepia(77%) saturate(749%) hue-rotate(1deg) brightness(101%) contrast(101%)' }}>
              <KoduLogo variant="default" className="w-[58px] h-auto" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-sm px-4 py-4 sm:px-6">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              {hasLeadingBack ? (
                <Link href={backHref!} aria-label="Back to home" className={backClassName}>
                  <ChevronLeft size={20} />
                </Link>
              ) : null}
              <h1 className={titleClassName}>{title}</h1>
            </div>
            <div className="shrink-0">
              {closeHref ? (
                <Link href={closeHref} aria-label="Close gallery" className={liisiControls.closeButton}>
                  <X size={18} />
                </Link>
              ) : (
                rightSlot
              )}
            </div>
          </div>
          {subtitle ? (
            <p className={`${hasLeadingBack ? "pl-8" : "pl-0"} ${subtitleClassName}`}>{subtitle}</p>
          ) : null}
        </div>
      )}
    </header>
  );
}
