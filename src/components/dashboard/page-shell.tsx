import * as React from "react";

import { cn } from "@/lib/utils";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function PageShell({
  eyebrow,
  title,
  description,
  actions,
  children,
  className,
}: PageShellProps) {
  return (
    <main className={cn("mx-auto w-full flex-1 px-4 py-6 sm:px-6", className)}>
      <header className="mb-5 flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5">
        <div>
          {eyebrow ? (
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">{eyebrow}</p>
          ) : null}
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">{title}</h1>
          {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </header>
      {children}
    </main>
  );
}