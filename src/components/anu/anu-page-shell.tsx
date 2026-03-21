import Link from "next/link";
import { KoduLogo } from "@/components/brand/KoduLogo";
import { anuSurface, anuText } from "@/components/anu/anu-design-system";

type AnuPageShellProps = {
  projectCount: number;
  children: React.ReactNode;
};

export function AnuPageShell({ projectCount, children }: AnuPageShellProps) {
  return (
    <main className={`min-h-screen w-full ${anuSurface.appBackground}`}>
      <div className={`h-[60px] w-full ${anuSurface.headerBar}`}>
        <div className="mx-auto flex h-full w-full max-w-[1180px] items-center px-4 sm:px-6">
          <Link href="/anu">
            <KoduLogo variant="developer" className="h-11 w-auto" />
          </Link>
        </div>
      </div>

      <section className="mx-auto w-full max-w-[1180px] px-4 py-5 sm:px-6 sm:py-6">
        <h1 className={anuText.bodyStrong}>{projectCount} Projects</h1>
        <div className="mt-4 space-y-0">{children}</div>
      </section>
    </main>
  );
}