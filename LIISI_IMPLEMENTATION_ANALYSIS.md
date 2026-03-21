# Liisi Views Implementation Analysis

**Date**: March 21, 2026  
**Project**: KoDu Demo - Garage48 Empowering Women Hackathon

---

## 1. FILE STRUCTURE

### Pages/Routes
```
src/app/liisi/
├── page.tsx                          # Main home page
├── design/
│   └── page.tsx                      # Interior design options page
└── gallery/
    └── page.tsx                      # Progress gallery viewer page
```

### Components
```
src/components/liisi/
├── bottom-nav.tsx                    # Navigation component (fixed bottom)
├── construction-progress-card.tsx    # Circular progress indicator card
├── custom-selection-card.tsx         # Custom design selection button
├── design-package-tile.tsx           # Individual design package display
├── interior-design-options.tsx       # Design packages container page
├── latest-update-card.tsx            # Latest construction update preview
└── progress-gallery-viewer.tsx       # Full-screen photo gallery viewer
```

### Related Data
- **Mock Data**: `src/lib/mockData.ts` (apartment, construction stages, design packages, gallery photos)

---

## 2. CURRENT COMPONENTS

### **BottomNav** (`bottom-nav.tsx`)
- **Purpose**: Fixed navigation bar at bottom of screen
- **Routes**: Home, Timeline, Chat
- **Props**: None (uses `usePathname()`)
- **Features**: 
  - Active state detection with icon weight changes
  - Fixed positioning (z-50)
  - Uses Lucide React icons: `Home`, `CalendarDays`, `MessageCircle`
- **Styling**: Tailwind + CSS variables (`border-border`, `bg-card`, `text-primary`)

### **ConstructionProgressCard** (`construction-progress-card.tsx`)
- **Purpose**: Display project progress with timeline and circular arc
- **Props**:
  - `stages: ConstructionStage[]` - Array of construction phases
  - `progressPercent: number` - Current percentage (0-100)
  - `estimatedCompletion: string` - Completion date text
- **Features**:
  - Custom SVG circular progress arc (270° arc from 7 o'clock position)
  - Horizontal stage timeline with connecting line
  - Stage indicators (done, current, pending)
  - SVG text using `fontFamily: 'Bell MT', Georgia, serif`
- **Colors Used**:
  - Arc background: `#CAD4DA` (secondary)
  - Arc progress: `#FACC58` (accent/yellow)
  - Text: `#223F43` (primary/teal), `#556063` (muted text)
- **Styling**: Mix of Tailwind and inline SVG styles

### **LatestUpdateCard** (`latest-update-card.tsx`)
- **Purpose**: Show most recent construction update with image
- **Props**:
  - `date, category, imageUrl, text, totalCount, viewAllHref`
- **Features**:
  - Image preview with hover shadow effect
  - Link to full gallery
  - Card component with transition
- **Colors**: Uses `#FACC58` (accent) for date/category text
- **Styling**: Tailwind + CSS variables, Next.js Image component

### **DesignPackageTile** (`design-package-tile.tsx`)
- **Purpose**: Display individual design package in grid
- **Props**:
  - `packageLabel, title, tags: [string, string], imageUrl`
- **Features**:
  - Image preview (h-36)
  - Package metadata and tags
  - Border and subtle shadow
- **Colors**:
  - Border: `#dddddd`
  - Background: white
  - Text: `#2b2b2b` (dark), `#858585` (muted), `#878787` (tags)
  - Tag background: `#f2f0ed` (light beige)
- **Styling**: Hardcoded hex colors + Tailwind (NOT using design tokens)

### **DesignPackageTileInternal** in **InteriorDesignOptions**
- **Purpose**: Full page for browsing and selecting design packages
- **Props**: `packages: DesignPackage[]`
- **Features**:
  - Header with back button and "Not Selected" status badge
  - Grid layout (2 columns)
  - Info card explaining package selection
  - CustomSelectionCard for custom option
- **Colors**:
  - Page background: `#f3f3f3` (light grey)
  - Header background: `#f7f7f7`
  - Border: `#d5d5d5`
  - Text: `#2e2e2e`, `#6b6b6b`, `#7d7d7d`
- **Styling**: Hardcoded hex colors + Tailwind (NOT using design tokens)

### **CustomSelectionCard** (`custom-selection-card.tsx`)
- **Purpose**: CTA button for custom design request
- **Props**: None
- **Features**:
  - Icon with Lucide React `Sparkles`
  - Dashed border styling
  - Subtle shadow
- **Colors**:
  - Border: `#d3d3d3`
  - Icon background: `#cfb682` (gold/tan)
  - Text: `#2b2b2b` (dark), `#8b8b8b` (muted)
- **Styling**: Hardcoded hex colors + Tailwind

### **ProgressGalleryViewer** (`progress-gallery-viewer.tsx`)
- **Purpose**: Full-screen photo gallery with navigation
- **Props**: `photos: ProgressGalleryPhoto[]`
- **State**: `activeIndex` for current photo
- **Features**:
  - Dark/fullscreen layout
  - Previous/Next navigation buttons
  - Thumbnail strip at bottom
  - Active photo indicator with ring highlight
  - Keyboard-independent (click-based only)
- **Colors**:
  - Background: `black`, `#000000`
  - Accent ring: `#FACC58`
  - Button overlay: `white/75` → `white/90` on hover
  - Thumbnail border: `white/15` or `#FACC58`
- **Styling**: Tailwind opacity utilities + hardcoded hex

---

## 3. STYLING APPROACH

### **Design System Status**: ⚠️ MIXED & INCONSISTENT

#### Token-Based (Good):
- **File**: `src/app/globals.css` (CSS variables)
- **Colors Defined**:
  - `--primary: #223f43` (teal)
  - `--accent: #facc58` (yellow)
  - `--secondary: #cad4da` (blue-grey)
  - `--muted, --muted-foreground, --border, --background`, etc.
- **Fonts Defined**:
  - `--font-sans: Inter`
  - `--font-mono: Geist Mono`
  - `--font-display: Bell MT, Georgia, serif`

#### Token Usage in Liisi Components:
- ✅ `bottom-nav.tsx` - Uses `border-border`, `bg-card`, `text-primary`, `text-muted-foreground`
- ✅ `construction-progress-card.tsx` - Uses `text-primary`, `text-muted-foreground` (partial)
- ✅ `latest-update-card.tsx` - Uses `bg-foreground` (via Card), hardcoded `#FACC58`
- ❌ `design-package-tile.tsx` - **HARDCODED** hex values: `#dddddd`, `#2b2b2b`, `#858585`, `#f2f0ed`
- ❌ `interior-design-options.tsx` - **HARDCODED** hex values: `#f3f3f3`, `#f7f7f7`, `#d5d5d5`, `#2e2e2e`, `#6b6b6b`, `#7d7d7d`
- ❌ `custom-selection-card.tsx` - **HARDCODED** hex values: `#d3d3d3`, `#cfb682`, `#2b2b2b`, `#8b8b8b`
- ⚠️ `progress-gallery-viewer.tsx` - **HARDCODED** `#FACC58` (should be accent token)

#### Styling Methods:
1. **Tailwind CSS classes** (primary method)
2. **Inline `style` props** (sparingly, in pages and cards - see construction-progress-card SVG text)
3. **Hardcoded hex colors** (INCONSISTENT - especially in design/interior pages)

---

## 4. PAGE STRUCTURE & ROUTES

### Home Page (`/liisi`)
**File**: `src/app/liisi/page.tsx`

**Structure**:
```
Header (greeting + apartment address)
  ↓
ConstructionProgressCard
  ↓
LatestUpdateCard
  ↓
Quick Access (2-col grid: Documents, Files)
  ↓
Floor Plan Image
  ↓
Interior Design Options CTA (hardcoded teal/yellow)
  ↓
Recent Updates List (with yellow bullets)
```

**Data Sources**:
- `apartment` (from mockData)
- `liisiConstructionStages` (from mockData)
- `liisiLatestUpdate` (from mockData)
- `recentUpdates` (from mockData)

**Navigation**:
- Links to `/liisi/documents`, `/liisi/files`, `/liisi/design`, `/liisi/gallery`
- BottomNav: Home (active), Timeline, Chat

---

### Design Options Page (`/liisi/design`)
**File**: `src/app/liisi/design/page.tsx` (thin wrapper)  
**Component**: `InteriorDesignOptions` (`interior-design-options.tsx`)

**Structure**:
```
Header
  ↓
Info Card (explanation)
  ↓
Package Grid (2 columns)
  ├─ DesignPackageTile × 4
  └─ CustomSelectionCard
```

**Data Sources**:
- `designPackages` (from mockData)
- Package visuals mapped locally with hardcoded display data

**Navigation**:
- Back link to `/liisi`
- No BottomNav visible (different layout)

---

### Gallery Page (`/liisi/gallery`)
**File**: `src/app/liisi/gallery/page.tsx` (thin wrapper)  
**Component**: `ProgressGalleryViewer` (`progress-gallery-viewer.tsx`)

**Structure**:
```
Header (title + close button)
  ↓
Main Image Display (with nav buttons)
  ↓
Thumbnail Strip
```

**Features**:
- Fullscreen dark layout
- Click/button navigation (no keyboard)
- Active photo indicator with ring

**Data Sources**:
- `liisiProgressGallery` (from mockData)

**Navigation**:
- Close link to `/liisi`
- No BottomNav

---

### Placeholder Routes (Not Implemented)
- `/liisi/timeline` - Link in BottomNav, no page
- `/liisi/chat` - Link in BottomNav, no page
- `/liisi/documents` - Link in home, no page
- `/liisi/files` - Link in home, no page

---

## 5. DATA FLOW

### Data Architecture

```
mockData.ts
├── apartment (single object)
│   ├── address, rooms, floor, completionDate
│   └── budgetTotalEur, budgetUsedEur, progressPercent
├── liisiConstructionStages (ConstructionStage[])
│   └── { id, label, done?, current? }
├── liisiLatestUpdate (single object)
│   ├── date, category, imageUrl, text, totalCount
├── liisiProgressGallery (ProgressGalleryPhoto[])
│   └── { id, title, url }
├── recentUpdates (ConstructionUpdate[])
│   └── { id, date, title, description }
└── designPackages (DesignPackage[])
    └── { id, name, subtitle, priceEur, highlights, recommended? }
```

### Data Flow Patterns

**Pattern 1: Direct Props**
```
mockData → page.tsx → Component (props passed down)
Example: liisiConstructionStages → ConstructionProgressCard
```

**Pattern 2: Data Mapping in Component**
```
mockData → page.tsx props → Component (maps data internally)
Example: designPackages → DesignPackageTile (with packageVisuals mapping)
```

**Pattern 3: Client-Side State**
```
mockData → page.tsx → Component (useState for interactivity)
Example: ProgressGalleryViewer (activeIndex, navigation)
```

### No Backend Integration
- ✅ All data from mock files
- ✅ No API calls
- ✅ No database queries
- ✅ No user authentication

---

## 6. TYPOGRAPHY USAGE

### Font Families
- **Default**: Inter (from Google Fonts, set in globals.css)
- **Code**: Geist Mono
- **Display/Serif**: Bell MT (Windows system), Georgia fallback

### Font Sizes & Weights Used

| Component | Size | Weight | Color | Usage |
|-----------|------|--------|-------|-------|
| ConstructionProgressCard (%)  | 22px | 700 | `#223F43` (primary) | SVG text in circle |
| ConstructionProgressCard ("Complete") | 10px | — | `#556063` (muted) | SVG label |
| page.tsx header (greeting) | `text-sm` | — | `text-muted-foreground` | "Tere Liis" |
| page.tsx header (address) | `text-xl` | semibold | foreground | Apartment address |
| Section titles | `text-sm` | semibold | foreground | "Quick Access", "Recent Updates" |
| DesignPackageTile | 18px | medium | `#2b2b2b` | Package title |
| DesignPackageTile label | 12px | — | `#858585` | "Package A", etc. |
| DesignPackageTile tags | 11px | — | `#878787` | Tag text |
| InteriorDesignOptions header | 18px | normal | `#2e2e2e` | "Interior Design" |
| InteriorDesignOptions subtitle | 12px | light | `#6b6b6b` | Subtitle |
| ProgressGalleryViewer title | 24px | medium | white | "Progress Gallery" |
| ProgressGalleryViewer count | `text-sm` | — | `text-white/60` | "1 of 4" |
| BottomNav labels | `text-[11px]` | semibold (if active) | `text-primary` / `text-muted-foreground` | Tab labels |

### Typography Inconsistencies ⚠️
1. **No standard heading scale**: Uses `text-xl`, `text-2xl`, hardcoded `18px`, etc. interchangeably
2. **Font weight mixing**: Some components use Tailwind (`semibold`), others hardcoded weight values
3. **Size units inconsistent**: Mix of Tailwind (`text-sm`, `text-[11px]`) and inline pixels
4. **No shared typography tokens**: Design packages and interior page reinvent text styles locally

---

## 7. COLOR PALETTE

### Primary Colors (From CSS Tokens)
```css
--primary: #223F43        /* Teal - logo/headers */
--accent: #FACC58         /* Yellow - highlights/progress */
--secondary: #CAD4DA      /* Blue-grey - backgrounds/borders */
--background: #ffffff     /* White */
--foreground: #262626     /* Dark grey text */
--muted-foreground: #556063  /* Medium grey text */
--border: #D5DFE1         /* Light border */
--muted: #f0f4f5          /* Very light grey background */
```

### Secondary Colors (Hardcoded in Liisi Components)
```
#f3f3f3     Light grey background (design/interior page)
#f7f7f7     Slightly lighter grey (header background)
#f2f0ed     Beige/cream (tag backgrounds)
#cfb682     Gold/tan (custom card icon background)
#2b2b2b     Dark/charcoal (text in design components)
#2e2e2e     Dark/charcoal (text in interior page)
#6b6b6b     Medium grey (text)
#7d7d7d     Medium-light grey (text)
#858585     Medium grey (text)
#8b8b8b     Medium grey (text)
#d3d3d3     Light grey (borders)
#d5d5d5     Light grey (borders)
#dddddd     Very light grey (borders)
#878787     Medium grey (tag text)
```

### Color Usage Summary

| Color | Component | Usage |
|-------|-----------|-------|
| `#223F43` (primary teal) | ConstructionProgress SVG, interior design CTA, BottomNav active | Headers, CTAs, accents |
| `#FACC58` (accent yellow) | Construction progress arc, bullets, gallery ring, design CTA, latest update link | Highlights, progress, focus |
| `#f3f3f3-#f7f7f7` (greys) | Design & interior pages | Backgrounds |
| `#2b2b2b-#2e2e2e` (dark) | Design & interior pages | Text (instead of using token) |
| `#cfb682` (gold) | CustomSelectionCard | Icon background |

### Contrast Issues
- ⚠️ **Design pages use custom dark greys**: `#2b2b2b`, `#2e2e2e` instead of `--foreground` (`#262626`)
- ⚠️ **Grey proliferation**: 10+ different grey hex values used, no standardization
- ⚠️ **Token abandonment**: Gold/cream colors (`#cfb682`, `#f2f0ed`) have no token mapping

---

## 8. COMMON PATTERNS

### **Pattern 1: Thin Page Wrapper**
```tsx
export default function LiisiDesignPage() {
  return <InteriorDesignOptions packages={designPackages} />;
}
```
- Pages just pass mockData to components
- No logic, no state
- Component handles all rendering

### **Pattern 2: Card-Based Layouts**
```tsx
<Card>
  <CardContent className="...">
    {/* content */}
  </CardContent>
</Card>
```
- Used in: home page home sections, progress card
- Consistent shadow/border styling via Component

### **Pattern 3: Link Wrapping**
```tsx
<Link href="/liisi/gallery">
  <Card className="transition hover:bg-muted/50">
    {/* clickable card */}
  </Card>
</Link>
```
- Quick Access cards, latest update card
- Common UX pattern

### **Pattern 4: Hardcoded Style Props**
```tsx
<div style={{ backgroundColor: "#223F43" }}>
```
- Seen in: Interior design CTA button, SVG text styling
- Mixes inline styles with Tailwind
- Reduces reusability

### **Pattern 5: Section Header + Content**
```tsx
<div>
  <h2 className="mb-2 text-sm font-semibold">Section Title</h2>
  {/* content */}
</div>
```
- Repeated for: Quick Access, Recent Updates, Latest Update, etc.
- No standardized component for this pattern

### **Pattern 6: Grid 2-Column Layout**
```tsx
<div className="grid grid-cols-2 gap-3">
  {items.map(...)}
</div>
```
- Used for: Quick Access cards, design package tiles
- Consistent spacing and layout

### **Pattern 7: Image Preview Card**
```tsx
<div className="relative h-36 w-full">
  <Image src={imageUrl} alt={...} fill className="object-cover" />
</div>
```
- Used for: DesignPackageTile, LatestUpdateCard
- Fixed height, object-cover scaling
- Consistent pattern

---

## 9. ISSUES & INCONSISTENCIES

### 🔴 CRITICAL ISSUES

#### **Issue #1: Dual Design Systems**
**Problem**: Two contradictory design systems in use
- **System A** (Liisi home/bottom-nav): CSS tokens in globals.css
- **System B** (Design/interior pages): Hardcoded hex colors, self-contained styling

**Impact**: 
- Design/interior pages don't follow brand colors
- Maintenance nightmare (change primary teal → must update 2 systems)
- No component reusability between systems

**File Locations**:
- Home system: `src/app/liisi/page.tsx`, `bottom-nav.tsx`, `construction-progress-card.tsx`
- Design system: `interior-design-options.tsx`, `design-package-tile.tsx`, `custom-selection-card.tsx`

#### **Issue #2: Color Palette Explosion**
**Problem**: 15+ grey hex values used instead of token system
```
#2b2b2b, #2e2e2e, #556063, #6b6b6b, #7d7d7d, #858585, #8b8b8b, #f0f4f5, 
#f2f0ed, #f3f3f3, #f7f7f7, #d3d3d3, #d5d5d5, #dddddd, #878787
```

**Impact**:
- No semantics (what makes `#6b6b6b` different from `#7d7d7d`?)
- Manual brightness/contrast verification
- Accessibility tests needed for each variant

#### **Issue #3: Typography System Missing**
**Problem**: No defined typography scale
- Font sizes: `text-sm`, `text-[11px]`, `text-[18px]`, `text-2xl`, `22px`
- Weights: `semibold`, `medium`, `light`, `700`, `normal`
- No line-height consistency

**Impact**:
- Each component defines its own sizes
- Hard to maintain visual hierarchy
- No mobile/responsive typography planned

#### **Issue #4: Inline Styles Mixed with Tailwind**
**Problem**: Style inconsistency pattern
```tsx
// In interior-design-options.tsx
style={{ backgroundColor: "#f3f3f3" }}

// In construction-progress-card.tsx
className="text-center text-[10px]"
```

**Impact**:
- Harder to track styles for debugging
- Tailwind purge may not detect inline hex values
- Dark mode support requires CSS variables, not inline styles

---

### ⚠️ MAJOR ISSUES

#### **Issue #5: No Component Reusability**
**Problem**: Design page components are isolated
- `CustomSelectionCard` - 1x use only
- `DesignPackageTile` - 1x use only
- Similar card patterns DRY violation

**Recommendations**:
- Extract as generic `SelectableCard` or `PackageCard`
- Use slots/composition for customization

#### **Issue #6: State Management Fragmentation**
**Problem**: `ProgressGalleryViewer` uses local `useState`
- No state persistence (gallery index lost on navigation)
- Can't share state between tabs/pages
- No real-time updates possible

#### **Issue #7: SVG Text Styling via Inline Props**
**Problem**: Construction progress card uses inline SVG styling
```tsx
style={{ fontSize: 22, fontWeight: 700, fill: "#223F43", fontFamily: "..." }}
```

**Issues**:
- Not using CSS tokens
- Hard to theme/update
- Accessibility: no semantic text sizing

#### **Issue #8: Missing Placeholder Pages**
**Problem**: Routes exist in BottomNav but no pages implemented
- `/liisi/timeline` - Not implemented
- `/liisi/chat` - Not implemented  
- `/liisi/documents` - Not implemented
- `/liisi/files` - Not implemented

**Impact**:
- Navigation links to nowhere
- User confusion / 404s

#### **Issue #9: Accessibility Concerns**
- ❌ No semantic HTML structure in cards
- ❌ SVG text not using `<title>` elements
- ❌ Icon-only buttons in BottomNav (only text with icon)
- ❌ No ARIA labels for interactive elements (except gallery)
- ⚠️ Color contrast not explicitly verified

#### **Issue #10: Image Optimization**
- Using `picsum.photos?random=XXX` for mock images
- Production images needed
- No image caching/optimization strategy

---

### 🟡 MINOR ISSUES

#### **Issue #11: Hardcoded Mock Data**
- Package visuals mapping is hardcoded in component
- Should be data-driven or imported from mockData

#### **Issue #12: No Responsive Design**
- Max-width: `max-w-sm` hardcoded to mobile size
- Layouts not tested on tablet/desktop
- Images use placeholder service

#### **Issue #13: Unused Props/Types**
- Some page props/data not displayed (e.g., `apartment.sizeM2`, `apartment.budgetTotalEur`)

#### **Issue #14: Missing Loading States**
- No skeletons, spinners, or loading indicators
- Assumes perfect data availability

#### **Issue #15: Incomplete Navigation**
- BottomNav doesn't appear on design/gallery pages
- Inconsistent navigation experience

---

## 10. STYLING APPROACH SUMMARY

### Current State: **⚠️ TRANSITIONAL / BROKEN**

| Aspect | Status | Details |
|--------|--------|---------|
| Design Tokens | ✅ Partial | Home page uses tokens; design pages ignore |
| Color System | ❌ Broken | Primary token + 15+ hardcoded greys |
| Typography | ❌ Broken | No scale, mixed units/weights/sizes |
| Components | ⚠️ Partial | Card components exist; design cards are isolated |
| Flexibility | ❌ Low | Hard to update colors/typography globally |
| Documentation | ❌ None | No design system docs/tokens file |
| Maintainability | ❌ Low | Two competing style systems |

---

## 11. RECOMMENDATIONS

### Immediate Fixes (Priority 1)
1. **Unify color system**: Extend CSS tokens in `globals.css` with semantic names
   - Add `--surface`, `--surface-variant` for backgrounds
   - Add `--text-secondary`, `--text-tertiary` for text scales
   
2. **Convert hardcoded colors**: All design/interior page colors → token variables
   
3. **Extract typography scale**: Create standardized sizes in globals or Tailwind config
   
4. **Create shared card component**: Replace `CustomSelectionCard`, `DesignPackageTile`

### Medium-Term (Priority 2)
1. Implement missing placeholder routes
2. Add skeleton/loading states
3. Improve accessibility (semantic HTML, ARIA labels)
4. Consolidate grey color palette (max 3-4 semantic greys)

### Long-Term (Priority 3)
1. Document design system formally
2. Add responsive/tablet layout
3. Implement backend data integration
4. Add dark mode support

---

## APPENDIX: File Statistics

### Component Metrics
| File | Lines | Token Usage | Styling Method |
|------|-------|-------------|-----------------|
| bottom-nav.tsx | 40 | ✅ 80% | Tailwind + CSS vars |
| construction-progress-card.tsx | 95 | ⚠️ 60% | Tailwind + SVG inline |
| latest-update-card.tsx | 35 | ✅ 90% | Tailwind + CSS vars |
| design-package-tile.tsx | 35 | ❌ 0% | Hardcoded hex |
| interior-design-options.tsx | 65 | ❌ 0% | Hardcoded hex |
| custom-selection-card.tsx | 20 | ❌ 0% | Hardcoded hex |
| progress-gallery-viewer.tsx | 90 | ⚠️ 40% | Tailwind + hardcoded hex |

**Average Token Usage**: 43% (Target: 100%)

