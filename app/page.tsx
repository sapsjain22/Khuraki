import React from "react";
import { siteConfig } from "@/lib/site-config";
import { BentoGrid } from "@/components/bento/bento-grid";
import { WorkflowSection } from "@/components/workflow/workflow-section";
import { ArrowRight, WifiOff, ShieldCheck, Calculator, Activity } from "lucide-react";

export default function HomePage() {
  const playStoreUrl = siteConfig.links?.googlePlay || siteConfig.playStoreUrl;

  return (
    <main className="px-3 sm:px-6 lg:px-8 pt-6 pb-20">
      {/* Editorial Hero Frame: Enclosed card container with rounded edges */}
      <section className="relative mx-auto max-w-[1360px] overflow-hidden rounded-[36px] border border-zinc-200/80 bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 shadow-2xs">
        {/* Hero Content Stack (Centered Flex Column) */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Top Tag: Semantic Engine Version Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-zinc-50 px-3.5 py-1 text-xs font-semibold text-zinc-700 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Deterministic Nutrition Engine · v1.0</span>
          </div>

          {/* Main Headline: Bold Display Lockup */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl leading-[1.08]">
            Manage Your Health{" "}
            <span className="text-zinc-950">Anytime, Anywhere.</span>
          </h1>

          {/* Subtitle: Factual Narrative */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            A thoughtful nutrition companion built around your routine. Deterministic metabolic math, offline-first SQLite reliability, AI-assisted meal logging, and zero-clutter tracking.
          </p>

          {/* App Store Action Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            {/* Dark Google Play Store Pill */}
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-zinc-950 px-6 py-3 text-xs font-semibold text-white shadow-xs transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
              aria-label="Download on Google Play"
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
              <span>Download on Google Play</span>
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20">
                <ArrowRight className="h-2.5 w-2.5 text-white" />
              </div>
            </a>

            {/* Explore Architecture / Features Pill */}
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-xs font-semibold text-zinc-900 shadow-2xs transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:border-zinc-300 hover:bg-zinc-50 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 active:scale-[0.98]"
            >
              <span>See the Architecture</span>
              <ArrowRight className="h-3.5 w-3.5 text-zinc-500" />
            </a>
          </div>

          {/* Architectural Invariants Trust Strip */}
          <div className="mt-12 pt-10 border-t border-zinc-100 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-zinc-600 font-medium">
            <div className="flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-50/70 px-3.5 py-1.5 shadow-2xs transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5">
              <WifiOff className="h-3.5 w-3.5 text-zinc-700" />
              <span>100% Offline SQLite</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-50/70 px-3.5 py-1.5 shadow-2xs transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5">
              <ShieldCheck className="h-3.5 w-3.5 text-zinc-700" />
              <span>Zero Cloud Photo Storage</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-50/70 px-3.5 py-1.5 shadow-2xs transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5">
              <Calculator className="h-3.5 w-3.5 text-zinc-700" />
              <span>Mifflin-St Jeor Math</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-50/70 px-3.5 py-1.5 shadow-2xs transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5">
              <Activity className="h-3.5 w-3.5 text-zinc-700" />
              <span>Adaptive ±15% Bounds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: 5 Core Architectural Invariants */}
      <div className="mt-16">
        <BentoGrid />
      </div>

      {/* How It Works / Step-by-Step Workflow Section */}
      <WorkflowSection />
    </main>
  );
}
