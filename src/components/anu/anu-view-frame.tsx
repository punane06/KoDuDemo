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
  return (
    <main className={`min-h-screen w-full ${anuSurface.appBackground}`}>
      <header className={`w-full border-b border-[#c8d1d6] ${anuSurface.headerBar}`}>
        <div className="mx-auto grid h-[42px] w-full max-w-[1180px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6">
          <div className="justify-self-start">
            {backHref ? (
              <Link href={backHref} className="inline-flex items-center gap-1.5 text-[12px] text-[#2e2e2e]">
                <ArrowLeft size={12} />
                <span className="truncate">{title}</span>
              </Link>
            ) : (
              <p className="truncate text-[12px] text-[#2e2e2e]">{title}</p>
            )}
          </div>

          <div className="justify-self-center">
            <KoduLogo variant="developer" className="h-5 w-auto" />
          </div>

          <div className="justify-self-end">{actions}</div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1180px] px-4 py-4 sm:px-6 sm:py-5">{children}</section>
    </main>
  );
}
