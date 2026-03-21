import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AnuPanelProps = {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function AnuPanel({ title, action, children, className, contentClassName }: AnuPanelProps) {
  return (
    <section className={cn("rounded-[10px] border border-[#d2d2d2] bg-[#f7f7f7]", className)}>
      <header className="flex items-center justify-between gap-3 border-b border-[#dbdbdb] px-3 py-2">
        <h2 className="text-[12px] font-medium text-[#393939]">{title}</h2>
        {action ? <div>{action}</div> : null}
      </header>
      <div className={cn("px-3 py-3", contentClassName)}>{children}</div>
    </section>
  );
}
