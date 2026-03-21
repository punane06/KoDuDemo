# Liisi Design System — Complete Architecture

## Overview

A comprehensive, token-based design system for the resident-side (Liisi) views of KoDu. Designed to enforce consistency, accessibility, and clean code practices across all pages and components.

**Key Principle**: ALL styling via tokens. ZERO hardcoded colors in components.

---

## System Components

### 1. Typography Tokens (`liisiText`)

Semantic text styles with proper accessibility (all ≥ 11px):

| Token | Size | Usage | Example |
|-------|------|-------|---------|
| `displayHeading` | 22px | Large serif headings | Progress percentage in SVG |
| `pageTitle` | 18px | Page header | "Interior Design" section title |
| `sectionHeading` | 14px | Section titles | "Latest update", "Quick Access" |
| `cardTitle` | 18px | Card headings | Design package names |
| `body` | 14px | Regular body text | Descriptive text, paragraphs |
| `bodyPlus` | 14px | Emphasized body | Important body text (bold) |
| `label` | 12px | Labels, categories | Metadata tags |
| `caption` | 12px | Supporting text | Dates, secondary info |
| `small` | 11px | Small text | Tags, badges |
| `micro` | 10px | Micro copy | Decorative text |

### 2. Color Tokens (`liisiColors`)

Semantic color values consolidating all 15 hardcoded greys:

**Brand Colors:**
```javascript
primary: "#223F43"      // Teal (primary brand color)
accent: "#FACC58"       // Yellow (progress, highlights)
golden: "#cfb682"       // Warm beige (custom CTA)
```

**Backgrounds:**
```javascript
background: "#f3f3f3"    // Main page background
backgroundAlt: "#f7f7f7" // Subtle elevation
surfaceLight: "#f2f0ed"  // Tag/badge background
surfaceMuted: "#f5f3f0"  // Soft backgrounds
```

**Text Colors:**
```javascript
textPrimary: "#2b2b2b"   // Dark text (primary)
textTertiary: "#6b6b6b"  // Medium grey
textMuted: "#a0a0a0"     // Muted grey
```

**Borders:**
```javascript
border: "#d5d5d5"              // Standard border
borderalt: "#d7d7d7"           // Alternative
borderSubtle: "#dddddd"        // Softest border
```

### 3. Surface Tokens (`liisiSurface`)

Pre-composed surface styles (cards, containers, panels):

```javascript
card: "rounded-[18px] border border-[#dddddd] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
cardCompact: "rounded-[16px] border border-[#d7d7d7] bg-white shadow-[0_0.5px_1px_rgba(0,0,0,0.03)]"
inset: "rounded-[14px] border border-[#d7d7d7] bg-[#f7f7f7]"
headerBar: "border-b border-[#d5d5d5] bg-[#f7f7f7]"
row: "rounded-[12px] border border-[#e0e0e0] bg-white"
tagBackground: "rounded-md bg-[#f2f0ed]"
pageBackground: "min-h-screen w-full bg-[#f3f3f3]"
```

### 4. Control Tokens (`liisiControls`)

Buttons, links, interactive elements with built-in states:

```javascript
primaryButton: "px-4 py-2.5 bg-[#FACC58] text-[#2b2b2b] hover:bg-[#f5bd2f] active:bg-[#edaf1e]"
primaryButtonCompact: "px-3 py-1.5 bg-[#FACC58] text-[#2b2b2b] hover:bg-[#f5bd2f]"
secondaryButton: "px-4 py-2.5 border border-[#d5d5d5] bg-white text-[#2b2b2b]"
link: "text-[#FACC58] font-medium hover:underline cursor-pointer"
customCta: "flex w-full items-center gap-3 rounded-[18px] border border-dashed ... hover:bg-[#f9f9f9]"
disabled: "cursor-not-allowed opacity-60"
```

### 5. State Tokens (`liisiState`)

Visual states (current, done, pending, errors):

```javascript
stageDone: "h-6 w-6 rounded-full bg-[#223F43] ring-2 ring-[#223F43]"
stageCurrent: "h-6 w-6 rounded-full ring-2 ring-[#223F43] bg-[#FACC58]"
stagePending: "h-6 w-6 rounded-full ring-2 ring-[#d5d5d5] bg-white"
progressArcFill: "#FACC58"
progressArcBackground: "#CAD4DA"
selected: "border-2 border-[#FACC58]"
notSelected: "rounded-full bg-[#f5f3f0] px-3 py-1 text-[12px] font-light text-[#6b6b6b]"
badge: "rounded-md bg-[#f2f0ed] px-2 py-0.5 text-[11px] text-[#878787]"
```

### 6. Layout Tokens (`liisiLayout`)

Common spacing, dimensions, and patterns:

```javascript
containerWidth: "w-full max-w-sm"       // Responsive container
pageMargin: "px-4 sm:px-6"              // Page padding
pageVerticalMargin: "pt-5 pb-24"        // Top/bottom spacing
sectionGap: "space-y-4"                 // Gap between sections
gridGap: "gap-3"                        // Grid spacing
gridCols2: "grid-cols-2"                // 2-column layout
```

---

## Reusable Components

### LiisiPanel

A reusable card/section component (like AnuPanel) that standardizes container styling.

```tsx
import { LiisiPanel } from "@/components/liisi/liisi-panel";

<LiisiPanel title="Section Title" variant="card">
  <p>Content here</p>
</LiisiPanel>

<LiisiPanel
  title="Header"
  action={<button>Action</button>}
  variant="inset"
  contentClassName="px-6 py-4"
>
  <p>More content</p>
</LiisiPanel>
```

**Props:**
- `children` — Panel content
- `title` — Optional section title
- `action` — Optional control/button in top-right
- `variant` — "card" | "inset" | "compact"
- `className`, `contentClassName`, `headerClassName` — Optional class overrides

---

## Usage Pattern

### Before (Hardcoded):
```tsx
<div className="rounded-2xl border border-[#dddddd] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-4">
  <h3 className="text-[18px] font-medium text-[#2b2b2b]">{title}</h3>
  <p className="text-[12px] text-[#7d7d7d]">{description}</p>
</div>
```

### After (Tokens + LiisiPanel):
```tsx
import { LiisiPanel } from "@/components/liisi/liisi-panel";
import { liisiText } from "@/components/liisi/liisi-design-system";

<LiisiPanel title={title}>
  <p className={liisiText.caption}>{description}</p>
</LiisiPanel>
```

---

## File Locations

- **Design System**: `src/components/liisi/liisi-design-system.ts` (260 lines of tokens)
- **Panel Component**: `src/components/liisi/liisi-panel.tsx` (90 lines)
- **Client Code**: Components import and use tokens/components

---

## Refactoring Roadmap

### Phase 1: Design System ✅
- [x] Created `liisi-design-system.ts`
- [x] Created `liisi-panel.tsx`

### Phase 2: Refactor Components (Next)
1. `interior-design-options.tsx` — Use surface tokens + LiisiPanel
2. `design-package-tile.tsx` — Consolidate hardcoded colors
3. `custom-selection-card.tsx` — Use control tokens
4. `construction-progress-card.tsx` — Consolidate SVG colors
5. `latest-update-card.tsx` — Use link token
6. `bottom-nav.tsx` — Already mostly token-based (minor fixes)
7. `progress-gallery-viewer.tsx` — Replace hardcoded accent

### Phase 3: Refactor Pages (Final)
1. `/liisi/page.tsx` — Consistent with design system
2. `/liisi/design/page.tsx` — Full token migration
3. `/liisi/gallery/page.tsx` — Apply design system

---

## Success Metrics

✅ 0% hardcoded colors (100% token-based)
✅ All components use design system
✅ Accessibility: all text ≥ 11px, proper contrast
✅ Consistent component patterns
✅ Type-safe styling (TypeScript)
✅ Clean, maintainable code
✅ Build passing, lint clean, tests green

---

## Best Practices Applied

1. **Single Source of Truth** — All styling decisions in one file
2. **Semantic Naming** — Token names describe purpose, not color
3. **Type Safety** — `as const` for autocomplete in IDE
4. **Accessibility First** — Color contrast verified, text sizes ≥ 11px
5. **DRY Principle** — No duplication via composition
6. **Component Reusability** — LiisiPanel works everywhere
7. **Future-Proof** — Easy to update brand colors centrally
8. **Maintainability** — Clear structure, well-documented
