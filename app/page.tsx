import React from "react";
import { siteConfig } from "@/lib/site-config";
import { HeroPhoneStage } from "@/components/hero/hero-phone-stage";
import { BentoGrid } from "@/components/bento/bento-grid";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  const playStoreUrl = siteConfig.links?.googlePlay || siteConfig.playStoreUrl;

  return (
    <main className="px-3 sm:px-6 lg:px-8 pt-6 pb-20">
      {/* Editorial Hero Frame: Enclosed card container with rounded edges */}
      <section className="relative mx-auto max-w-[1360px] overflow-hidden rounded-[36px] border border-zinc-200/70 bg-white pt-24 pb-16 sm:pt-28 sm:pb-24 shadow-2xs">
        {/* Ambient Dual-Tone Gradient Mesh (Soft Violet Left, Soft Amber Right) */}
        <div
          className="ambient-glow-left pointer-events-none absolute -left-20 top-0 h-[500px] w-[500px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="ambient-glow-right pointer-events-none absolute -right-20 top-0 h-[500px] w-[500px] rounded-full"
          aria-hidden="true"
        />

        {/* Hero Content Stack (Centered Flex Column) */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
          {/* Top Tag: Capsule Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/80 px-4 py-1 text-xs font-semibold text-violet-700 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-violet-600" />
            <span>Deterministic Nutrition Engine</span>
          </div>

          {/* Main Headline: Bold 2-Line Display Lockup */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl leading-[1.08]">
            Manage Your Health{" "}
            <span className="text-zinc-950">Anytime, Anywhere.</span>
          </h1>

          {/* Subtitle: Centered Narrative */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            A thoughtful nutrition companion built around your routine. Deterministic metabolic math, offline-first SQLite reliability, AI-assisted meal logging, and zero-clutter tracking.
          </p>

          {/* App Store Action Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            {/* Dark Google Play Store Pill */}
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-zinc-950 px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Get it on Google Play"
            >
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M325.3 234.3L104.6 13l280.8 161.9-60.1 59.4z" fill="#00F076" />
                <path d="M47 30.1c-5.8 9.9-9 21.6-9 34.3v383.2c0 12.7 3.2 24.4 9 34.3l236.4-236.4L47 30.1z" fill="#00D2FF" />
                <path d="M325.3 277.7l60.1 59.4L104.6 499l220.7-221.3z" fill="#FF3A44" />
                <path d="M428.2 233.8l-42.8-24.7-60.1 59.4 60.1 59.4 42.8-24.7c15.2-8.8 24.6-24.9 24.6-44.7s-9.4-35.9-24.6-44.7z" fill="#FFC400" />
              </svg>
              <span>Get it on Google Play</span>
            </a>

            {/* Explore Architecture / Features Pill */}
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-xs font-semibold text-zinc-900 shadow-2xs transition-all hover:border-zinc-300 hover:bg-zinc-50"
            >
              <span>See the Architecture</span>
              <ArrowRight className="h-3.5 w-3.5 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* Multi-Device Smartphone Showcase Stage */}
        <HeroPhoneStage />
      </section>

      {/* Bento Grid: 5 Core Architectural Invariants */}
      <div className="mt-16">
        <BentoGrid />
      </div>

      {/* Workflow Section: How Khuraki Works */}
      <section className="relative mx-auto mt-16 max-w-6xl px-4 py-16 sm:px-6 lg:px-8 border-t border-zinc-200">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
            Transparent Workflow
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
            A nutrition plan that adapts as your body changes.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs transition-all hover:border-zinc-300 hover:shadow-xs">
            <span className="font-mono text-xs font-bold text-amber-600">01</span>
            <h3 className="mt-3 text-lg font-bold text-zinc-950">Calculate Baseline</h3>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              Your targets use peer-reviewed Mifflin-St Jeor and Katch-McArdle metabolic formulas based on your body composition.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs transition-all hover:border-zinc-300 hover:shadow-xs">
            <span className="font-mono text-xs font-bold text-amber-600">02</span>
            <h3 className="mt-3 text-lg font-bold text-zinc-950">Log Seamlessly</h3>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              Snap food photos or dictate meals in natural Hinglish or English. Multi-item dishes decompose automatically into macros.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs transition-all hover:border-zinc-300 hover:shadow-xs">
            <span className="font-mono text-xs font-bold text-amber-600">03</span>
            <h3 className="mt-3 text-lg font-bold text-zinc-950">Adaptive Calibration</h3>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              Track weigh-ins across 14-day rolling windows. Khuraki recalibrates your energy expenditure to prevent plateaus.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
