import { Sparkles } from "lucide-react";

export function CustomSelectionCard() {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 rounded-2xl border border-dashed border-[#d3d3d3] bg-white px-4 py-4 text-left shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#cfb682] text-white">
        <Sparkles size={18} />
      </span>
      <span>
        <span className="block text-lg font-medium text-[#2b2b2b]">Custom Selection</span>
        <span className="block text-sm text-[#8b8b8b]">Request a unique design</span>
      </span>
    </button>
  );
}
