export const anuText = {
  h1: "text-[18px] font-medium leading-tight text-[#2f2f2f]",
  h2: "text-[15px] font-medium leading-tight text-[#323232]",
  value: "text-[38px] font-normal leading-none text-[#2a2a2a]",
  body: "text-[12px] text-[#6f6f6f]",
  bodyStrong: "text-[12px] font-medium text-[#2a2a2a]",
  label: "text-[11px] text-[#737373]",
  micro: "text-[11px] text-[#6f6f6f]",
  tiny: "text-[11px] text-[#737373]",
  panelHeading: "text-[11px] uppercase tracking-[0.05em] text-[#666666]",
  itemTitle: "text-[11px] font-medium text-[#343434]",
  itemBody: "text-[11px] leading-tight text-[#717171]",
  fieldValue: "text-[11px] font-medium text-[#2f2f2f]",
  tableHeading: "text-[11px] uppercase tracking-[0.04em] text-[#6f6f6f]",
  tableCell: "text-[11px] text-[#4a4a4a]",
} as const;

export const anuSurface = {
  appBackground: "bg-[#efefef]",
  headerBar: "bg-[#c4d1d8]",
  card: "rounded-[14px] border border-[#d2d2d2] bg-[#f4f4f4]",
  insetCard: "rounded-[10px] border border-[#d0d0d0] bg-[#f1f1f1]",
  panelInset: "rounded-[8px] border border-[#dddddd] bg-[#fbfbfb]",
  softRow: "rounded-[6px] border border-[#e0e0e0] bg-[#fafafa]",
  mutedRow: "rounded-[6px] border border-[#dfdfdf] bg-[#f3f3f3]",
  progressTrack: "h-[8px] rounded-full bg-[#d8dde0]",
  progressFill: "h-full rounded-full bg-[#efc24a]",
  chip: "inline-flex items-center gap-1.5 rounded-[8px] px-2.5 py-1 text-[12px]",
} as const;

const controlBase = {
  subtle: "rounded-[4px] border border-[#d0d0d0] bg-[#f2f2f2] text-[#4e4e4e]",
  primary: "inline-flex items-center gap-1 rounded-[4px] border border-[#252525] bg-[#252525] text-white",
  pill: "rounded-[4px] border border-[#cfcfcf] bg-[#f5f5f5] text-[#5f5f5f]",
};

const controlSize = {
  regularButton: "px-2 py-1 text-[11px]",
  compactButton: "px-1.5 py-0.5 text-[11px]",
  regularPrimary: "px-2.5 py-1 text-[11px]",
  compactPrimary: "px-2 py-0.5 text-[11px]",
  regularPill: "px-2 py-0.5 text-[11px]",
  compactPill: "px-1.5 py-0.5 text-[11px]",
};

export const anuControls = {
  subtleButton: `${controlBase.subtle} ${controlSize.regularButton}`,
  primaryButton: `${controlBase.primary} ${controlSize.regularPrimary}`,
  subtlePill: `${controlBase.pill} ${controlSize.regularPill}`,
  subtleButtonCompact: `${controlBase.subtle} ${controlSize.compactButton}`,
  primaryButtonCompact: `${controlBase.primary} ${controlSize.compactPrimary}`,
  subtlePillCompact: `${controlBase.pill} ${controlSize.compactPill}`,
  disabled: "cursor-not-allowed opacity-60",
} as const;

export const anuState = {
  stageDone: "border-[#35595f] bg-[#35595f] text-white",
  stageCurrent: "border-[#e2bc50] bg-[#e2bc50] text-[#2f2f2f]",
  stageTodo: "border-[#d4d4d4] bg-[#ececec] text-[#8a8a8a]",
} as const;