import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AnuPanelProps = {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  actionClassName?: string;
};

export function AnuPanel({
  title,
  action,
  children,
  className,
  contentClassName,
  headerClassName,
  titleClassName,
  actionClassName,
}: AnuPanelProps) {
  return (
    <section className={cn("rounded-[10px] border border-[#d2d2d2] bg-[#f7f7f7]", className)}>
      <header className={cn("flex items-center justify-between gap-3 border-b border-[#dbdbdb] px-3 py-1.5", headerClassName)}>
        <h2 className={cn("text-[11px] font-medium text-[#393939]", titleClassName)}>{title}</h2>
        {action ? <div className={actionClassName}>{action}</div> : null}
      </header>
      <div className={cn("px-3 py-2.5", contentClassName)}>{children}</div>
    </section>
  );
}
