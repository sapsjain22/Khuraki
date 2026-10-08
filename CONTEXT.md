# Khuraki Frontend System Architecture & Context (`CONTEXT.md`)

> **MANDATORY CONTEXT PROTOCOL FOR FRONTEND WORKSPACE:**  
> This file is the primary ground-truth state document for the Khuraki public web portal (`Frontend/`). Any AI agent or developer modifying, adding, deleting, or refactoring frontend code, styles, or deployment configurations **MUST** update this file alongside [`MEMORY.md`](file:///f:/App%20Dev/Fitness%20App/Frontend/MEMORY.md).

---

## 1. System Identity & Technical Invariants

### 1.1 Identity & Domains
- **Project Name:** Khuraki Web Portal (`khuraki.com`)
- **Framework:** Next.js 16.4+ (App Router, Turbopack, React 19)
- **Deployment Platform:** Cloudflare Pages
- **Export Mode:** 100% Static HTML/CSS/JS export (`output: 'export'`)
- **Styling Architecture:** Tailwind CSS v4 with CSS theme variables
- **Standalone Git Repo:** `https://github.com/sapsjain22/-Khuraki.git` (`main` branch)
- **Domain Topology:**
  - `https://khuraki.com`: Public marketing site & legal compliance suite.
  - `https://api.khuraki.com`: Dedicated mobile API proxy gateway (Cloudflare Worker).
  - `https://ops.khuraki.com`: Operations console behind Cloudflare Access.

### 1.2 Core Architectural Invariants
1. **Zero Server Runtime / Pure Static Export:** The frontend requires no Node.js server or Cloudflare Worker binding. It compiles down to static HTML, CSS, client JS, and assets in `out/`.
2. **Clean White Minimalist Design:** Follows `shadcn.io` visual principles with a clean white canvas (`#FFFFFF`), subtle zinc fills (`#F4F4F5`), neutral zinc borders (`#E4E4E7`), and high-contrast dark typography (`#09090B`).
3. **Privacy by Design:** Zero tracking scripts, zero operational telemetry cookies, and zero external ad scripts.
4. **Google Play Compliance:** Must maintain accessible static pages for `/privacy/`, `/terms/`, and `/delete-account/` satisfying Google Play Store guidelines.

---

## 2. Comprehensive File Structure & File Responsibilities

### 2.1 Workspace Root Files
| File Path | Description & Exact Responsibility |
| :--- | :--- |
| [`next.config.ts`](file:///f:/App%20Dev/Fitness%20App/Frontend/next.config.ts) | Next.js configuration enabling `output: 'export'`, `trailingSlash: true`, and unoptimized static images for Cloudflare Pages. |
| [`package.json`](file:///f:/App%20Dev/Fitness%20App/Frontend/package.json) | NPM scripts (`dev`, `build`, `typecheck`), Next.js 16, React 19, `lucide-react`, and `motion` dependencies. |
| [`tsconfig.json`](file:///f:/App%20Dev/Fitness%20App/Frontend/tsconfig.json) | TypeScript configuration with `@/*` path aliases mapped to the root directory. |
| [`postcss.config.mjs`](file:///f:/App%20Dev/Fitness%20App/Frontend/postcss.config.mjs) | PostCSS configuration binding `@tailwindcss/postcss`. |
| [`.gitignore`](file:///f:/App%20Dev/Fitness%20App/Frontend/.gitignore) | Excludes `.next/`, `node_modules/`, `out/`, and environment files. |
| [`MEMORY.md`](file:///f:/App%20Dev/Fitness%20App/Frontend/MEMORY.md) | Chronological development history and milestone updates. |
| [`CONTEXT.md`](file:///f:/App%20Dev/Fitness%20App/Frontend/CONTEXT.md) | This document: Living snapshot of frontend architecture and file responsibilities. |

---

### 2.2 Application Routes (`app/`)
| File Path | Description & Exact Responsibility |
| :--- | :--- |
| [`app/layout.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/app/layout.tsx) | Root HTML layout. Injects OpenGraph/Twitter metadata, `SoftwareApplication` JSON-LD structured data, clean light body background, `SiteHeader`, and `SiteFooter`. |
| [`app/globals.css`](file:///f:/App%20Dev/Fitness%20App/Frontend/app/globals.css) | Core design system tokens (`--canvas`, `--surface`, `--border-subtle`, `--text-primary`), custom light range slider rules, and ambient hero glow. |
| [`app/page.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/app/page.tsx) | Main landing page: Clean white hero with editorial headline, interactive 10s calorie slider, architectural bento grid, and transparent workflow step cards. Contained within `max-w-[1400px]` dashed border frame. |
| [`app/privacy/page.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/app/privacy/page.tsx) | Privacy Policy: Google Play compliant documentation of zero photo storage, transient vision tokens, and 30-day account deletion grace window. |
| [`app/terms/page.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/app/terms/page.tsx) | Terms of Service: Metabolic math transparency, informational fitness disclaimer, and user agreements. |
| [`app/delete-account/page.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/app/delete-account/page.tsx) | Account Deletion Portal: In-app step-by-step guidance and fallback web deletion request email form. |
| [`app/robots.ts`](file:///f:/App%20Dev/Fitness%20App/Frontend/app/robots.ts) | Static `robots.txt` generator allowing all search engines and referencing the sitemap. |
| [`app/sitemap.ts`](file:///f:/App%20Dev/Fitness%20App/Frontend/app/sitemap.ts) | Static `sitemap.xml` generator mapping `/`, `/privacy/`, `/terms/`, and `/delete-account/`. |

---

### 2.3 Component Suites (`components/`)

#### Layout Components (`components/layout/`)
- [`SiteHeader.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/components/layout/site-header.tsx): Centered floating dock island (`fixed top-4 inset-x-0 mx-auto max-w-4xl rounded-full bg-white/85 backdrop-blur-md border border-zinc-200/80 shadow-sm`). 3-Zone Flex architecture housing the official Khuraki wordmark (`/khuraki-logo.png`), desktop navigation links (`Features`, `Science`, `Architecture`, `Blog`, `Affiliate`), `CommandSearch` (`⌘K`) trigger pill, `AnimatedCtaButton`, and responsive mobile drawer.
- [`SiteFooter.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/components/layout/site-footer.tsx): Clean light footer on `bg-zinc-50/80 border-t border-zinc-200` with official Khuraki wordmark, legal navigation links, copyright, and informational medical disclaimer.
- [`LegalPageShell.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/components/layout/legal-page-shell.tsx): Shared wrapper for legal documents with back navigation button, metadata timestamps, and high-contrast typography.
- [`AnnouncementBanner.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/components/layout/announcement-banner.tsx): Top announcement ribbon component (available on demand).

#### Interactive UI Components (`components/ui/`)
- [`AnimatedCtaButton.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/components/ui/animated-cta-button.tsx): High-contrast black pill CTA button (`bg-zinc-950 text-white rounded-full px-4 py-1.5`) featuring `@keyframes header-shimmer` border sweep, live emerald status pulse, Lucide `Download` icon, and smooth micro-interactions.
- [`InteractiveDemo.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/components/ui/interactive-demo.tsx): 10-second calorie demonstrator card. Features a single slider (1,400 to 3,200 kcal), dynamic concentric calorie ring, and real-time deterministic macro chips.
- [`MacroRing.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/components/ui/macro-ring.tsx): Concentric SVG arc calculating progress percentage and stroke dashoffset dynamically.
- [`GooglePlayBadge.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/components/ui/google-play-badge.tsx): Reusable Google Play badge component with official multi-color vector mark.
- [`CommandSearch.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/components/ui/command-search.tsx): Accessible modal search palette listening for `Ctrl+K` with fuzzy destination filtering.


#### Bento Grid Components (`components/bento/`)
- [`BentoGrid.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/components/bento/bento-grid.tsx): 3-column responsive grid showcasing 5 core architectural pillars (Snap & Log, Deterministic Math, Offline-First, Adaptive Calibration, Privacy by Design).
- [`BentoCard.tsx`](file:///f:/App%20Dev/Fitness%20App/Frontend/components/bento/bento-card.tsx): Clean white bento card with subtle zinc borders, pill badges, and icon badges.

---

### 2.4 Configuration & Public Assets (`lib/`, `public/`)
- [`lib/site-config.ts`](file:///f:/App%20Dev/Fitness%20App/Frontend/lib/site-config.ts): Single source of truth for site name, URLs, Google Play listing, support email, and legal routes.
- [`public/khuraki-logo.png`](file:///f:/App%20Dev/Fitness%20App/Frontend/public/khuraki-logo.png): Official Khuraki wordmark logotype in solid black on transparent background.
- [`public/icon.svg`](file:///f:/App%20Dev/Fitness%20App/Frontend/public/icon.svg): Official white Khuraki "K" mark on transparent background for crisp favicon visibility.
- [`public/google-play-badge.png`](file:///f:/App%20Dev/Fitness%20App/Frontend/public/google-play-badge.png): Official Google Play Store badge image.
- [`public/_headers`](file:///f:/App%20Dev/Fitness%20App/Frontend/public/_headers): Cloudflare Pages edge security headers (CSP, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`).

---

## 3. Design System Tokens & Color Palette

```css
:root {
  --canvas: #ffffff;
  --surface: #ffffff;
  --surface-muted: #f4f4f5;
  --surface-elevated: #ffffff;
  --border-subtle: #e4e4e7;
  --border-high: #d4d4d8;
  --brand-amber: #d97706;
  --text-primary: #09090b;
  --text-secondary: #52525b;
  --text-muted: #71717a;
  --macro-protein: #059669;   /* Emerald Green */
  --macro-carbs: #2563eb;     /* Royal Blue */
  --macro-fat: #d97706;       /* Warm Amber */
}
```

---

## 4. Development & Build Commands

```bash
# Start local development server with Turbopack (http://localhost:3000)
npm run dev

# Compile full production static export (generated in out/)
npm run build

# Run strict TypeScript typecheck
npm run typecheck

# Preview the static production build locally
npx serve out
```

---

## 5. Future Technical Roadmap

1. **MDX Blog Implementation (`app/blog/`):**
   - High-performance, statically generated nutrition and training articles powered by `@next/mdx`.
2. **Affiliate Partner Page (`app/affiliate/`):**
   - Clean application form and partner program guidelines for trainers, dietitians, and gym creators.
3. **Automated Cloudflare Pages Git Deployments:**
   - Connect `https://github.com/sapsjain22/-Khuraki.git` (`main` branch) to Cloudflare Pages for instant zero-downtime edge deployments upon push.
