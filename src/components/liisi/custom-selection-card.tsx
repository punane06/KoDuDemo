import { Sparkles } from "lucide-react";
import { liisiText, liisiControls } from "@/components/liisi/liisi-design-system";

export function CustomSelectionCard() {
  return (
    <button
      type="button"
      className={liisiControls.customCta}
    >
      <span className={liisiControls.customCtaIcon}>
        <Sparkles size={18} />
      </span>
      <span>
        <span className={`block ${liisiText.ctaTitleSmall}`}>Custom Selection</span>
        <span className={`block ${liisiText.ctaSubtitle}`}>Request a unique design</span>
      </span>
    </button>
  );
}
