/**
 * KoduLogo — two variants extracted from the official SVG files:
 *   variant="developer"  →  "kodu developer" (teal #223f43) — used in Anu
 *   variant="default"    →  "kodu" plain (white)            — used in Liisi dark header
 *
 * Pass className to control sizing (e.g. className="h-6 w-auto").
 */

interface KoduLogoProps {
  variant?: "developer" | "default";
  className?: string;
}

export function KoduLogo({ variant = "default", className = "h-7 w-auto" }: KoduLogoProps) {
  if (variant === "developer") {
    return (
      <img
        src="/kodu-developer-svg-03.svg"
        alt="kodu developer"
        className={className}
      />
    );
  }

  return (
    <img
      src="/kodu-logo-02.svg"
      alt="kodu"
      className={className}
    />
  );
}
