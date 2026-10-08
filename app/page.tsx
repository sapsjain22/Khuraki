import React from "react";
import Link from "next/link";
import { GooglePlayBadge } from "@/components/ui/google-play-badge";
import { InteractiveDemo } from "@/components/ui/interactive-demo";
import { BentoGrid } from "@/components/bento/bento-grid";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Ambient 4% Amber Glow (Strictly behind Hero) */}
      <div className="ambient-hero-glow" aria-hidden="true" />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Editorial Headline & Value Prop */}
          <div className="max-w-xl lg:col-span-7">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-[#0D0D10] px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span className="text-xs font-medium tracking-wide text-amber-400">
                A steadier way to track nutrition
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl">
              Eat with awareness.{" "}
              <span className="text-amber-500">Train with intent.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
              A thoughtful nutrition and movement companion built around your routine. Deterministic metabolic math, offline-first reliability, AI-assisted meal logging, and zero-clutter tracking.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <GooglePlayBadge size="lg" />
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0D0D10] px-5 py-3 text-sm font-semibold text-[#F5F5F5] transition-colors hover:border-white/20 hover:bg-[#141418]"
              >
                <span>See the Architecture</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Quick Feature Bullet Points */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/5 pt-6 text-xs text-zinc-400 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Zero Hallucinations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>100% Offline First</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
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
      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            Transparent Workflow
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#F5F5F5] sm:text-4xl">
            A nutrition plan that adapts as your body changes.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0D0D10] p-6">
            <span className="font-mono text-xs font-bold text-amber-500">01</span>
            <h3 className="mt-3 text-lg font-bold text-[#F5F5F5]">Calculate Baseline</h3>
            <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
              Your targets use peer-reviewed Mifflin-St Jeor and Katch-McArdle metabolic formulas based on your body composition.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#0D0D10] p-6">
            <span className="font-mono text-xs font-bold text-amber-500">02</span>
            <h3 className="mt-3 text-lg font-bold text-[#F5F5F5]">Log Seamlessly</h3>
            <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
              Log via camera scan, quick natural language, or manual entry. Everything saves instantly to local SQLite—no internet required.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#0D0D10] p-6">
            <span className="font-mono text-xs font-bold text-amber-500">03</span>
            <h3 className="mt-3 text-lg font-bold text-[#F5F5F5]">Calibrate Over Time</h3>
            <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
              14-day weigh-in trends detect metabolic shifts, offering safe caloric adjustments so your goals stay connected to reality.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-b from-[#16171B] to-[#0D0D10] p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#F5F5F5] sm:text-4xl">
            Ready to track with clarity?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-[#A1A1AA]">
            Get the Khuraki Android companion on Google Play. Start with deterministic formulas, offline-first diary, and transparent privacy.
          </p>
          <div className="mt-8 flex justify-center">
            <GooglePlayBadge size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
