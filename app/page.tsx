import React from "react";
import { GooglePlayBadge } from "@/components/ui/google-play-badge";
import { InteractiveDemo } from "@/components/ui/interactive-demo";
import { BentoGrid } from "@/components/bento/bento-grid";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative mx-auto max-w-[1400px] min-[1400px]:border-x border-dashed border-zinc-200">
      {/* Ambient Warm Hero Glow */}
      <div className="ambient-hero-glow" aria-hidden="true" />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Editorial Headline & Value Prop */}
          <div className="max-w-xl lg:col-span-7">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
              <span className="text-xs font-semibold tracking-wide text-amber-800">
                A steadier way to track nutrition
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Eat with awareness.{" "}
              <span className="text-amber-600">Train with intent.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
              A thoughtful nutrition and movement companion built around your routine. Deterministic metabolic math, offline-first reliability, AI-assisted meal logging, and zero-clutter tracking.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <GooglePlayBadge size="lg" />
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-2xs transition-all hover:border-zinc-300 hover:bg-zinc-50"
              >
                <span>See the Architecture</span>
                <ArrowRight className="h-4 w-4 text-zinc-500" />
              </a>
            </div>

            {/* Quick Feature Bullet Points */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-zinc-100 pt-6 text-xs text-zinc-600 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero Hallucinations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>100% Offline First</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero Photo Storage</span>
              </div>
            </div>
          </div>

          {/* Right Column: 10-Second Interactive Calorie Demonstrator */}
          <div className="lg:col-span-5">
            <InteractiveDemo />
          </div>
        </div>
      </section>

      {/* Bento Grid: 5 Core Architectural Invariants */}
      <BentoGrid />

      {/* Workflow Section: How Khuraki Works */}
      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 border-t border-zinc-200">
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
