import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { KoduLogo } from "@/components/brand/KoduLogo";
import { anuSurface } from "@/components/anu/anu-design-system";

type AnuViewFrameProps = {
  title: string;
  backHref?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function AnuViewFrame({ title, backHref, actions, children }: AnuViewFrameProps) {
  // Example: these values should come from props or context in a real app
  const unitCount = 24;
  return (
    <main className={`min-h-screen w-full ${anuSurface.appBackground}`}>
      <header className="w-full border-b border-[#c8d1d6] bg-[#e6ebee]">
        <div className="mx-auto flex h-[56px] w-full max-w-[1180px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 min-w-0">
            {backHref ? (
              <Link href={backHref} className="inline-flex items-center gap-1.5 text-[15px] text-[#2e2e2e]">
                <ArrowLeft size={18} />
                <span className="truncate font-medium">{title}</span>
              </Link>
            ) : (
              <p className="truncate text-[15px] text-[#2e2e2e] font-medium">{title}</p>
            )}
          </div>
          <div className="flex flex-col items-center flex-1">
            <KoduLogo variant="developer" className="h-7 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded bg-white border border-[#d2d2d2] px-2 py-0.5 text-[12px] text-[#223f43] font-medium">{unitCount} units</span>
            <button className="flex items-center gap-1 rounded bg-white border border-[#d2d2d2] px-2 py-0.5 text-[12px] text-[#223f43] font-medium">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v18h18" /></svg>
              Statistics
            </button>
            {actions}
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1180px] px-4 py-4 sm:px-6 sm:py-5">{children}</section>
    </main>
  );
}
