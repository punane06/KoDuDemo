import type { ReactNode } from "react";
import { liisiSurface } from "@/components/liisi/liisi-design-system";

interface LiisiPanelProps {
  /**
   * Panel content
   */
  children: ReactNode;

  /**
   * Optional title (displays above children inside the panel)
   */
  title?: ReactNode;

  /**
   * Optional action/control (displays in top-right of panel if title exists)
   */
  action?: ReactNode;

  /**
   * Optional wrapper className (applied to the panel container)
   */
  className?: string;

  /**
   * Optional className for the content area
   */
  contentClassName?: string;

  /**
   * Optional className for header (when title/action present)
   */
  headerClassName?: string;

  /**
   * Optional className for title text
   */
  titleClassName?: string;

  /**
   * Optional className for action area
   */
  actionClassName?: string;

  /**
   * Optional variant (card, inset, compact)
   */
  variant?: "card" | "inset" | "compact";
}

/**
 * LiisiPanel — reusable card/section component for Liisi resident views.
 *
 * Usage:
 * ```tsx
 * <LiisiPanel title="Overview" variant="card">
 *   <p>Content here</p>
 * </LiisiPanel>
 * ```
 */
export function LiisiPanel({
  children,
  title,
  action,
  className,
  contentClassName,
  headerClassName,
  titleClassName,
  actionClassName,
  variant = "card",
}: LiisiPanelProps) {
  const variantClass = {
    card: liisiSurface.card,
    inset: liisiSurface.inset,
    compact: liisiSurface.cardCompact,
  }[variant];

  const finalClass = [variantClass, className].filter(Boolean).join(" ");

  return (
    <div className={finalClass}>
      {title && (
        <div className={`flex items-center justify-between gap-3 py-3 px-4 ${headerClassName || ""}`}>
          <div className={titleClassName}>{title}</div>
          {action && <div className={actionClassName}>{action}</div>}
        </div>
      )}

      <div
        className={`${title ? "border-t border-[#e0e0e0] px-4 py-3" : "p-4"} ${
          contentClassName || ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
