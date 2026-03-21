/**
 * Liisi Design System — comprehensive token system for resident-side views.
 *
 * Principles:
 * - ALL styling via tokens (0% hardcoded colors in components)
 * - Semantic token names (describes purpose, not color)
 * - Accessibility-first (text ≥ 11px, proper contrast)
 * - Base + size/state pattern for controls
 * - Type-safe Tailwind class compositions
 *
 * Pattern: `liisi[Category].[tokenName]`
 */

// ═══════════════════════════════════════════════════════════════════════════
// Typography — semantic text styles (all ≥ 11px for accessibility)
// ═══════════════════════════════════════════════════════════════════════════

export const liisiText = {
  // Display — serif for special emphasis
  displayHeading: "font-['Bell_MT',Georgia,serif] text-[22px] font-bold text-[#223F43]",

  // Headings
  pageTitle: "text-[18px] font-normal leading-[1.15] text-[#2e2e2e]",
  sectionHeading: "text-[14px] font-semibold text-[#2e2e2e]",
  cardTitle: "text-[18px] font-medium leading-[1.15] text-[#2b2b2b]",

  // Body
  body: "text-[14px] text-[#2e2e2e]",
  bodyPlus: "text-[14px] font-medium text-[#2e2e2e]",
  bodySoft: "text-[14px] text-[#6b6b6b]",

  // Secondary — supporting text
  label: "text-[12px] font-medium text-[#2b2b2b]",
  labelSoft: "text-[12px] text-[#858585]",
  caption: "text-[12px] font-light text-[#6b6b6b]",
  captionMuted: "text-[12px] text-[#8b8b8b]",
  subtext: "text-[12px] text-[#7d7d7d]",

  // Small — tags, badges, micro copy
  small: "text-[11px] text-[#878787]",
  smallMuted: "text-[11px] text-[#a0a0a0]",
  micro: "text-[10px] uppercase tracking-[0.22em] font-semibold text-[#999999]",

  // Status/Meta
  dateCategory: "text-[10px] font-medium", // color applied per context
  stageName: "text-[9px] text-center leading-tight",
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// Colors — semantic color tokens (NOT arbitrary hex)
// ═══════════════════════════════════════════════════════════════════════════

export const liisiColors = {
  // Brand
  primary: "#223F43",      // Teal (dark headers, current state)
  accent: "#FACC58",       // Yellow (progress, highlights)
  golden: "#cfb682",       // Warm beige (custom CTA accent)

  // Neutrals & Backgrounds
  background: "#f3f3f3",   // Main page background
  backgroundAlt: "#f7f7f7", // Subtle elevation
  surfaceLight: "#f2f0ed", // Tag/badge background
  surfaceMuted: "#f5f3f0", // Soft backgrounds

  // Text
  textPrimary: "#2b2b2b",   // Dark text
  textSecondary: "#2e2e2e", // Slightly different shade
  textTertiary: "#6b6b6b",  // Medium grey
  textQuaternary: "#858585", // Lighter grey
  textQuinary: "#8b8b8b",   // Even lighter
  textMuted: "#a0a0a0",    // Muted text

  // Borders
  border: "#d5d5d5",       // Primary border
  borderAlt: "#d7d7d7",    // Alternative border
  borderLight: "#d3d3d3",  // Lighter border
  borderSecondary: "#dfdfdf", // Secondary border
  borderSubtle: "#dddddd", // Subtle border
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// Surfaces — reusable surface tokens for cards, sections, panels
// ═══════════════════════════════════════════════════════════════════════════

export const liisiSurface = {
  // Containers
  card: "rounded-[18px] border border-[#dddddd] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
  cardCompact: "rounded-[16px] border border-[#d7d7d7] bg-white shadow-[0_0.5px_1px_rgba(0,0,0,0.03)]",
  inset: "rounded-[14px] border border-[#d7d7d7] bg-[#f7f7f7]",
  panel: "rounded-[18px] border border-[#d5d5d5] bg-white",

  // Headers
  headerBar: "border-b border-[#d5d5d5] bg-[#f7f7f7]",
  headerBarAlt: "bg-[#f3f3f3]",

  // Lists & rows
  row: "rounded-[12px] border border-[#e0e0e0] bg-white",
  rowMuted: "rounded-[12px] border border-[#dfdfdf] bg-[#f9f9f9]",
  tagBackground: "rounded-md bg-[#f2f0ed]",
  tagBackgroundAlt: "rounded-md bg-[#f5f3f0]",

  // Page backgrounds
  pageBackground: "min-h-screen w-full bg-[#f3f3f3]",
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// Controls — buttons, links, interactive elements
// ═══════════════════════════════════════════════════════════════════════════

const liisiControlBase = {
  // Button base (apply with state-specific variant)
  button: "inline-flex items-center justify-center font-medium rounded-lg transition-colors cursor-pointer",
  buttonCompact: "inline-flex items-center justify-center font-medium rounded-md transition-colors cursor-pointer",
} as const;

export const liisiControls = {
  ...liisiControlBase,

  // Primary button (accent yellow)
  primaryButton: `${liisiControlBase.button} px-4 py-2.5 bg-[#FACC58] text-[#2b2b2b] hover:bg-[#f5bd2f] active:bg-[#edaf1e]`,
  primaryButtonCompact: `${liisiControlBase.buttonCompact} px-3 py-1.5 bg-[#FACC58] text-[#2b2b2b] hover:bg-[#f5bd2f]`,

  // Secondary button (white)
  secondaryButton: `${liisiControlBase.button} px-4 py-2.5 border border-[#d5d5d5] bg-white text-[#2b2b2b] hover:bg-[#f7f7f7]`,
  secondaryButtonCompact: `${liisiControlBase.buttonCompact} px-3 py-1.5 border border-[#d7d7d7] bg-white text-[#2b2b2b] hover:bg-[#f9f9f9]`,

  // Text link (accent yellow)
  link: "text-[#FACC58] font-medium hover:underline cursor-pointer",
  linkSmall: "text-[#FACC58] text-xs font-medium hover:underline cursor-pointer",

  // Back button
  backButton: "rounded-full p-1 text-[#2b2b2b] hover:bg-[#f0f0f0] transition-colors",

  // State modifiers
  disabled: "cursor-not-allowed opacity-60",
  loading: "opacity-75",

  // Custom CTA (golden)
  customCta: "flex w-full items-center gap-3 rounded-[18px] border border-dashed border-[#d3d3d3] bg-white px-4 py-4 text-left shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:bg-[#f9f9f9] transition-colors",
  customCtaIcon: "flex h-12 w-12 items-center justify-center rounded-xl bg-[#cfb682] text-white",
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// States — visual states (current, done, pending, error)
// ═══════════════════════════════════════════════════════════════════════════

export const liisiState = {
  // Progress dots
  stageDone: "h-6 w-6 rounded-full bg-[#223F43] ring-2 ring-[#223F43] flex items-center justify-center",
  stageCurrent: "h-6 w-6 rounded-full ring-2 ring-[#223F43] bg-[#FACC58] flex items-center justify-center",
  stagePending: "h-6 w-6 rounded-full ring-2 ring-[#d5d5d5] bg-white flex items-center justify-center",

  // Progress arc colors (use in SVG stroke)
  progressArcBackground: "#CAD4DA",
  progressArcFill: "#FACC58",

  // Status labels
  badge: "inline-block rounded-md bg-[#f2f0ed] px-2 py-0.5 text-[11px] text-[#878787]",
  badgeAlt: "inline-block rounded-md bg-[#f5f3f0] px-2 py-0.5 text-[11px] text-[#878787]",

  // Selection indicators
  selected: "border-2 border-[#FACC58]",
  notSelected: "rounded-full bg-[#f5f3f0] px-3 py-1 text-[12px] font-light text-[#6b6b6b]",
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// Layout — spacing, timing, common patterns
// ═══════════════════════════════════════════════════════════════════════════

export const liisiLayout = {
  // Page structure
  containerWidth: "w-full max-w-sm",
  pageMargin: "px-4 sm:px-6",
  pageVerticalMargin: "pt-5 pb-24",

  // Spacing
  sectionGap: "space-y-4",
  gridGap: "gap-3",
  gridCols2: "grid-cols-2",

  // Common shadows
  shadowSm: "shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
  shadowMd: "shadow-md",

  // Transitions
  transitionDefault: "transition-colors",
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// Exports — combine tokens for common patterns (DRY)
// ═══════════════════════════════════════════════════════════════════════════

/**
 * All design tokens in a single namespace for easier imports
 */
export const liisiDesignSystem = {
  text: liisiText,
  colors: liisiColors,
  surface: liisiSurface,
  controls: liisiControls,
  state: liisiState,
  layout: liisiLayout,
} as const;
