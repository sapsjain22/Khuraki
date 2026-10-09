# Khuraki Frontend Living Memory (`MEMORY.md`)

> **LIVING DOCUMENT CONTRACT:**  
> This file is the chronological engineering log and architectural record for the Khuraki decoupled web frontend (`Frontend/`). Whenever pages, components, tokens, or deployment configs are added, modified, or refactored, record the milestone here with exact technical rationale.

---

## 1. Project Overview & Architecture Philosophy

- **Application:** Khuraki Public Web Portal & Compliance Suite (`khuraki.com`)
- **Framework:** Next.js 16 (App Router, Turbopack, React 19)
- **Deployment Target:** Cloudflare Pages (100% Static Export via `output: 'export'`)
- **Styling:** Tailwind CSS v4 with modern CSS theme variables
- **Icons & Motion:** `lucide-react`, `motion`
- **Standalone Repository:** `https://github.com/sapsjain22/-Khuraki.git` (branch `main`)
- **Primary Domain:** `https://khuraki.com` (Decoupled from `api.khuraki.com` mobile worker and `ops.khuraki.com` console)

### Core Architectural Principles
1. **Deployment Isolation:** Landing page, marketing copy, and legal compliance policies deploy independently to Cloudflare Pages edge network without touching or risking downtime on the mobile API (`api.khuraki.com`).
2. **Blast Radius Protection:** Surges in web traffic from Google Play listings or marketing campaigns hit Cloudflare edge caches and never exhaust API quotas or affect meal logging latency for active Android app users.
3. **Clean White Minimalist Aesthetic:** High-contrast, clean light design inspired by `shadcn.io` featuring pure white canvas (`#FFFFFF`), neutral zinc borders (`#E4E4E7`), high-contrast black typography (`#09090B`), and vibrant macro accents.
4. **Google Play Compliance:** Fully accessible `/privacy` (zero photo storage & transient image processing notice), `/terms` (metabolic estimates & medical disclaimer), and `/delete-account` (30-day scheduled grace period portal).

---

## 2. Chronological Milestones & Engineering Updates

- **2026-10-08 (Update 1 - Architecture Decision: Decoupled Frontend on Cloudflare Pages):**
  - **Verdict:** Formally decoupled the marketing and compliance website from the Cloudflare Worker API backend (`backend/`).
  - **Topology:**
    - `https://khuraki.com`: Static Cloudflare Pages site serving landing page, marketing copy, and legal docs.
    - `https://api.khuraki.com`: Dedicated serverless Worker handling mobile app API mutations (`/parse-meal`, `/parse-meal-vision`, etc.).
    - `https://ops.khuraki.com`: Internal operations console guarded by Cloudflare Zero Trust Access.

- **2026-10-08 (Update 2 - Clean-Slate Scaffold with Next.js 16 & Tailwind CSS v4):**
  - Scaffolded `Frontend/` from scratch using Next.js 16 with static output configuration (`output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`).
  - Configured `@tailwindcss/postcss` and Tailwind CSS v4 (`@import "tailwindcss"`).
  - Added dependencies: `lucide-react` (bespoke SVG icons) and `motion` (performant UI animations).
  - Configured `tsconfig.json` with strict TypeScript typing.

- **2026-10-08 (Update 3 - Android Macro Token Alignment & 10-Second Calorie Demonstrator):**
  - Established initial color token mapping matching Khuraki's metabolic definitions:
    - Protein: Emerald Green (`#10B981`)
    - Carbs: Royal / Electric Blue (`#3B82F6`)
    - Fat: Warm Amber (`#F59E0B`)
  - Built interactive single-slider calorie demonstrator (`interactive-demo.tsx` & `macro-ring.tsx`):
    - Single slider ranging from 1,400 to 3,200 kcal.
    - SVG concentric progress arc with dynamic stroke dashoffset math.
    - Dynamic macro chips computing deterministic 30% Protein, 45% Carbs, 25% Fat distributions in real-time.

- **2026-10-08 (Update 4 - Architectural Bento Grid & Compliance Suite):**
  - **Bento Grid (`bento-grid.tsx` & `bento-card.tsx`):**
    - 5 architectural invariant cards: Snap & Log (Vision AI), Deterministic Nutrition Math (Mifflin-St Jeor & Katch-McArdle), 100% Offline-First SQLite, Adaptive Metabolic Calibration ($\pm 15\%$ limits), and Privacy by Design.
    - Replaced all emojis with bespoke Lucide icons (`Camera`, `Cpu`, `WifiOff`, `Scale`, `ShieldCheck`).
  - **Legal Compliance Pages:**
    - `/privacy`: Updated for Google Play requirements documenting zero photo storage, transient vision tokens, and 30-day account deletion grace window.
    - `/terms`: Informational health disclaimer clarifying estimates are not individualized medical prescriptions.
    - `/delete-account`: In-app step-by-step instructions plus web-based fallback email request form.

- **2026-10-08 (Update 5 - Standalone Git Repository Setup & Push):**
  - Initialized dedicated Git repository in `Frontend/`.
  - Configured remote `origin` to `https://github.com/sapsjain22/-Khuraki.git`.
  - Clean initial commit pushed to branch `main`.

- **2026-10-09 (Update 6 - Transition to Clean White shadcn.io Design System):**
  - Transformed the entire site from dark AMOLED to a clean white, high-contrast light theme matching the `shadcn.io` aesthetic:
    - Background: Pure White (`#FFFFFF`), subtle fills (`#F4F4F5` / `#FAFAFA`).
    - Borders: Zinc-200 (`#E4E4E7`).
    - Typography: High-contrast black (`#09090B`) with slate/zinc secondary text (`#52525B`).
    - Updated `BentoCard`, `InteractiveDemo`, `MacroRing`, `LegalPageShell`, and `SiteFooter` to clean light mode.
    - Light custom range slider styling with zinc track and amber thumb.

- **2026-10-09 (Update 7 - Interactive Command Search Modal):**
  - Built client-side `CommandSearch` component (`components/ui/command-search.tsx`):
    - Triggered via global keyboard shortcut (`Ctrl+K` or `⌘+K`).
    - Live fuzzy search filtering across navigation, mathematical features, legal docs, and Google Play download.
    - Keyboard navigation (Arrow keys + Enter to navigate, Escape to dismiss).

- **2026-10-09 (Update 8 - Official Wordmark Logotype, Google Play Badge & Navigation Polish):**
  - **Top Announcement Ribbon Removed:** Stripped top banner from `layout.tsx` so header sits cleanly at the top of the viewport.
  - **Official Khuraki Wordmark:** Integrated official bold, rounded **Khuraki** wordmark logo on transparent background (`/khuraki-logo.png`) in both `SiteHeader` and `SiteFooter`.
  - **"GET IT ON Google Play" Header Badge:** Replaced plain "Get App" pill with official Google Play Store badge featuring multi-color Google Play logo and white typography on black card (`rounded-lg bg-black border border-zinc-800`).
  - **Streamlined Header Navigation:** Removed `Download` and `Legal` from header bar; added placeholder `Blog` (`/#blog`) and `Affiliate` (`/#affiliate`) links:
    - Active links: `Features` · `Science` · `Architecture` · `Blog` · `Affiliate`
  - **Pure White Favicon:** Updated `public/icon.svg` with pure white (`#FFFFFF`) Khuraki "K" mark on transparent background for crisp visibility on dark browser tabs.
  - **Build Verification:** Next.js static export compiled cleanly in 0.8s (`Frontend/out/`).

- **2026-10-09 (Update 9 - Floating Island Dock Header, Animated CTA & Logo Update):**
  - **Centered Floating Dock Island (`site-header.tsx` - 137 lines):**
    - Refactored full-width header to a centered floating dock: `fixed top-4 inset-x-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-4xl`.
    - Translucent glass shell: `rounded-full border border-zinc-200/80 bg-white/85 px-4 py-2.5 shadow-sm backdrop-blur-md`.
    - 3-Zone Flex alignment: Left (Brand wordmark), Center (Desktop nav links: Features, Science, Architecture, Blog, Affiliate), Right (CommandSearch pill, AnimatedCtaButton, mobile hamburger toggle).
  - **Animated CTA Button (`animated-cta-button.tsx` - 39 lines):**
    - High-contrast black pill (`bg-zinc-950 text-white rounded-full px-4 py-1.5 text-xs font-semibold`).
    - Shimmer keyframe border sweep (`@keyframes header-shimmer` in `globals.css`) + subtle emerald live pulse beacon.
    - Lucide `Download` icon + "Get Khuraki" label linking to `siteConfig.links.googlePlay`.
  - **Attached Logo Updated (`public/khuraki-logo.png`):**
    - Updated to the official user-provided logo with orange squircle butterfly-K icon and Khuraki wordmark on transparent background.
  - **Strict Line Constraints:** Maintained `site-header.tsx` < 180 lines, `animated-cta-button.tsx` < 90 lines, and `globals.css` < 25 added lines.

- **2026-10-09 (Update 10 - Streamlined Floating Header: Search & CTA Removed):**
  - **Minimal Floating Dock (`site-header.tsx` - 85 lines):**
    - Cleaned up the floating navigation dock down to essential core elements:
      - Left: Official Khuraki wordmark logo (`/khuraki-logo.png`).
      - Desktop Nav: Clean text links (`Features`, `Science`, `Architecture`, `Blog`, `Affiliate`).
      - Mobile: Hamburger toggle button opening responsive navigation drawer.
    - Completely purged `CommandSearch` trigger pill, search modal, `Ctrl+K` key listeners, and `AnimatedCtaButton` ("Get Khuraki" / "Get app").
    - Production static export builds in < 900ms with 0 type errors.

- **2026-10-09 (Update 11 - Phone Mockup Carousel & shadcn Button Integration):**
  - **Dependencies Installed:** Added `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge`.
  - **Utility Helper (`lib/utils.ts`):** Standard `cn` utility function combining `clsx` and `twMerge`.
  - **UI Primitives:**
    - `components/ui/button.tsx`: Full shadcn Button with CVA variants and Slot support.
    - `components/ui/phone-mockups-1-utils/use-mobile.ts`: Responsive mobile breakpoint detector.
    - `components/ui/phone-mockups-1-utils/phone-carousel.tsx`: iPhone 15 Pro SVG frame mockup with carousel controls, autoplay, and pause states.
    - `components/ui/phone-mockups-1.tsx`: `PhoneMockupBasic` component configured with placeholder app screens.
    - `components/ui/phone-mockup-demo.tsx`: Standalone preview wrapper.
  - **Homepage Integration (`app/page.tsx`):**
    - Mounted the interactive Phone Mockup carousel inside a dedicated "Interactive Preview" section between the Hero and Bento Grid.
  - **Build Verification:** Production static export compiled cleanly in 882ms with zero errors.

- **2026-10-09 (Update 12 - Centered Editorial Hero, Dual Ambient Mesh & Multi-Device Phone Stage):**
  - **Editorial Canvas (`app/page.tsx` - 127 lines):**
    - Enclosed rounded card hero container (`rounded-[36px] border border-zinc-200/70 bg-white`).
    - Ambient dual-tone radial gradient mesh (soft violet left, soft amber right in `globals.css`).
    - Centered typography lockup: capsule badge ("Deterministic Nutrition Engine"), 2-line display headline ("Manage Your Health Anytime, Anywhere."), and side-by-side store CTA pills.
  - **Multi-Device Phone Stage (`components/hero/hero-phone-stage.tsx` - 90 lines):**
    - 3-device staggered smartphone showcase.
    - Dominant center device runs the interactive auto-rotating `PhoneCarousel`.
    - Left/right devices angled in 3D perspective with realistic bezels, hidden on mobile for clean responsiveness.
  - **Floating Glass Badges (`components/hero/floating-badge.tsx` - 58 lines):**
    - Left: `AvatarReviewBadge` (User avatars + 4.9/5 stars + "4k+ Active Users With Top Reviews").
    - Right: `FeatureChipsBadge` (Violet "100% Offline First" + Emerald "Zero Photo Storage").
  - **SiteHeader Refinement (`components/layout/site-header.tsx` - 117 lines):**
    - 3-zone layout with active dot indicator on primary nav link and dark "Download App" pill with trailing circle arrow.
  - **Strict Line Limit Compliance:** All 5 target files strictly within configured limits.

- **2026-10-09 (Update 13 - Khuraki Cinematic Landing Hero & Showcase Route):**
  - **Dependencies Installed:** `gsap` and `@types/gsap` for ScrollTrigger scrub animations.
  - **Component (`components/ui/cinematic-landing-hero.tsx`):**
    - 3D physical skeuomorphic materials with dynamic mouse tilt lighting (`requestAnimationFrame`).
    - 7,000px GSAP ScrollTrigger timeline: reveals headline lockups, elevates 3D Midnight Sapphire card, animates concentric circular progress dial up to 2,450 kcal, pops floating glass badges (`🔥 14-Day Calibrated`, `⚡ 100% Offline SQLite`), scales card back, and surfaces tactile store buttons.
    - Tailored completely to Khuraki's metabolic nutrition engine, deterministic math, and Google Play Store link.
  - **Demo & Route:**
    - `components/ui/cinematic-hero-demo.tsx`: Isolated wrapper demo component.
    - `app/cinematic/page.tsx`: Dedicated full-screen showcase route with floating back navigation.
  - **Static Build:** Next.js static export compiled cleanly in 875ms with 0 type errors.

- **2026-10-09 (Update 14 - Full Homepage Replacement: 3D Cinematic Hero, Dark Header & Footer):**
  - **Full Replacement on Homepage (`app/page.tsx`):**
    - Replaced the prior static editorial hero completely with the GSAP-powered 3D `CinematicHero`.
    - Optimized scroll scrub length from `+=7000` down to a snappy `+=1600` (`scrub: 0.6`), providing responsive card rise, dial spin, badge pop, and card pullback in ~2 wheel turns without scroll fatigue.
    - Eliminated horizontal viewport expansion by enforcing `w-full max-w-full overflow-x-hidden`.
  - **Matching Dark 3D Floating Header (`components/layout/site-header.tsx` - 129 lines):**
    - Pinned floating dock island styled with dark translucent glass: `bg-[#050914]/85 border-white/10 backdrop-blur-xl shadow-2xl`.
    - Integrated high-contrast white logo (`public/khuraki-logo-white.png`) with orange squircle icon.
    - Styled desktop nav links with muted zinc to active white contrast (`text-zinc-400 hover:text-white`) and warm amber active indicator dot.
    - Tactile high-contrast white CTA pill: "Download App" with trailing arrow icon linking directly to Google Play.
  - **Matching Dark 3D Footer (`components/layout/site-footer.tsx` - 82 lines):**
    - Deep obsidian background (`bg-[#050914] border-t border-white/10`) with subtle blue ambient underglow.
    - White Khuraki wordmark, legal compliance routes (`/privacy/`, `/terms/`, `/delete-account/`), `3D Experience` route link, and Google Play-compliant medical disclaimer.
  - **Unified Dark 3D Aesthetic Across Whole Portal:**
    - Updated `BentoGrid` and `BentoCard` to dark glassmorphic styling (`bg-[#0A101D]/80 border-white/10 backdrop-blur-md hover:border-white/20 hover:bg-[#0E1729]`).
    - Configured `app/layout.tsx` with `bg-[#050914] text-white` body styling for a seamless midnight obsidian aesthetic throughout.
    - Validated in browser via automated E2E inspection: zero horizontal scrollbars, 0 visual overlaps, snappy scroll transitions.
    - Static production export builds cleanly in < 900ms (`Frontend/out/`).




