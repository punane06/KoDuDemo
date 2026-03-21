import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { KoduLogo } from "@/components/brand/KoduLogo";
import { liisiControls, liisiSurface, liisiText } from "@/components/liisi/liisi-design-system";

interface LiisiHeaderProps {
  title: string;
  subtitle?: string;
  backHref?: string;
  rightSlot?: ReactNode;
  variant?: "home" | "inner";
}

export function LiisiHeader({
  title,
  subtitle,
  backHref,
  rightSlot,
  variant = "home",
}: LiisiHeaderProps) {
  const isHome = variant === "home";

  return (
    <header className={liisiSurface.appHeader}>
      <div
        className={[
          "mx-auto flex w-full max-w-sm items-center justify-between gap-3 px-4 sm:px-6",
          isHome ? "py-6" : "py-4",
        ].join(" ")}
      >
        <div className="flex min-w-0 items-start gap-2">
          {backHref ? (
            <Link href={backHref} aria-label="Back to home" className={`${liisiControls.backButton} text-[#FACC58]`}>
              <ArrowLeft size={18} />
            </Link>
          ) : null}

          <div className="min-w-0">
            {subtitle ? <p className={liisiText.appHeaderEyebrow}>{subtitle}</p> : null}
            <h1 className={isHome ? liisiText.appHeaderTitle : liisiText.appHeaderTitleCompact}>{title}</h1>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {rightSlot}
          <KoduLogo variant="default" className={isHome ? "h-10 w-auto" : "h-8 w-auto"} />
        </div>
      </div>
    </header>
  );
}
