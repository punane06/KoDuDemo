

# KoDuDemo

Live demo: [https://kodu-demo.vercel.app/](https://kodu-demo.vercel.app/)

**Unified home-buyer and developer experience for real estate projects.**
KoDuDemo is a working prototype built at the Garage48 Empowering Women Hackathon, demonstrating a seamless, mobile-first customer journey and a developer dashboard for project management.

Event:
- Garage48 Empowering Women Hackathon
- https://garage48.org/events/empoweringwomen

## Team KoDu

- Patricia Malm - Team Lead
- Diana Michelson - Designer
- Ethel Laul - Designer
- Kadi Kerner - Developer
- Sille Laas - Marketing

## Problem And Vision

Home-buyers and real estate developers often manage design choices, documents, and progress updates across fragmented channels.

KoDu aims to unify that experience into one product with two connected sides:
- Customer side (home-buyer view)
- Real estate developer side

Important:
- This is a working code prototype, not a Figma-only concept.

## Hackathon Goal

Deliver, within hackathon time, a functional prototype that demonstrates:
- Liisi customer experience (mobile-first)
- Anu developer experience (tablet-first)
- design package comparison and selection flow
- project progress visibility
- document and gallery management
- activity and status timeline

Delivery target:
- Demo-ready working prototype by March 22, 14:00


## Current Scope

**Customer side (Liisi, mobile-first):**
- Home / apartment overview (implemented)
- Design package comparison & selection (implemented)
- Documents (implemented)
- Gallery (implemented)
- Progress status (implemented)
- Activity feed / timeline (implemented)

**Developer side (Anu, tablet-first):**
- Project dashboard overview (basic structure, WIP)
- Customer progress snapshot (WIP)
- Design package and decision status (WIP)
- Documents and media management (WIP)
- Timeline / activity status (WIP)

**Data:**
- Mock data only (see src/lib/mockData.ts)


## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Development Rules

- Commit often
- Keep code, code comments, and commit messages in English
- Follow clean code and good engineering practices
- Prefer feature branches and merge to main only when stable

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

Windows PowerShell note:
- If script policy blocks npm/npx, use `npm.cmd` and `npx.cmd`.


## Project Structure

- `src/app` — app routing and pages
	- `liisi/` — customer (mobile) views: home, design, documents, gallery, timeline, chat
	- `anu/` — developer (tablet) views: dashboard, project, unit
- `src/components` — UI components
	- `liisi/` — Liisi-specific components
	- `anu/` — Anu-specific components
	- `brand/` — shared branding (e.g. KoduLogo)
	- `ui/` — shared UI primitives (button, card, badge, etc)
- `src/lib/mockData.ts` — mock data for all flows
## Design System & Icons

- All colors, typography, and spacing are defined in `src/components/liisi/liisi-design-system.ts` and `src/components/anu/anu-design-system.ts`.
- Use semantic color tokens (e.g. `liisiColors.lightGrey`) for consistency.
- Icons: Lucide icons, custom SVG/PNG in `/public` (e.g. IconInterior, IconStar, progress-arc.svg).
## Testing

- Tests are colocated as `.test.tsx` files next to their components/pages.
- Run all tests:

```bash
npm test
```

## Deployment

Target platform:
- Vercel

Recommended deploy flow:
1. Push feature branch
2. Verify preview build
3. Merge to main when demo flow is stable

## Design Screenshots (WIP)

Liisi view (work in progress):
- Add screenshot file to `docs/images/liisi-wip.png`
- The image will be shown here once the file is added

![Liisi mobile view WIP](docs/images/liisi-wip.png)


## Next Steps

- Add screenshots or GIFs from the working prototype
- Document API/backend integration if started
- List known limitations and next milestones
