import React from "react";
import { Camera, Cpu, WifiOff, Scale, ShieldCheck } from "lucide-react";
import { BentoCard } from "./bento-card";

export function BentoGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
          Core Architecture
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
          Engineered for consistency. Not guesswork.
        </h2>
        <p className="mt-3 text-base text-zinc-600">
          Khuraki pairs local device speed with scientific nutritional precision. Every metric has a reason.
        </p>
      </div>

      {/* Grid: 3 columns layout with responsive bento spans */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* 1. Snap & Log (Vision AI) */}
        <BentoCard
          icon={<Camera className="h-5 w-5 text-indigo-600" aria-hidden="true" />}
          tag="Vision AI"
          title="Snap & Log"
          description="Scan a meal and turn it into a log with AI-assisted food recognition."
          className="lg:col-span-2"
          footerContent={
            <div className="flex items-center gap-3 text-xs text-zinc-500">
              <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" />
              <span>Multi-item plate decomposition &amp; portion weight estimation</span>
            </div>
          }
        />

        {/* 2. Deterministic Math */}
        <BentoCard
          icon={<Cpu className="h-5 w-5 text-amber-600" aria-hidden="true" />}
          tag="Metabolic Math"
          title="Deterministic Nutrition Math"
          description="Your calorie and macro targets come from transparent metabolic formulas—not an LLM guessing your numbers."
          footerContent={
            <div className="flex items-center gap-2 font-mono text-[11px] text-amber-700 font-semibold">
              <span>Mifflin-St Jeor</span>
              <span>·</span>
              <span>Katch-McArdle</span>
            </div>
          }
        />

        {/* 3. Offline First */}
        <BentoCard
          icon={<WifiOff className="h-5 w-5 text-emerald-600" aria-hidden="true" />}
          tag="Reliability"
          title="Offline-first"
          description="Your core tracking experience stays on-device, with cloud sync when you're connected."
          footerContent={
            <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium">
              <span>Encrypted Room SQLite on Android</span>
            </div>
          }
        />

        {/* 4. Adaptive Calibration */}
        <BentoCard
          icon={<Scale className="h-5 w-5 text-sky-600" aria-hidden="true" />}
          tag="Adaptation"
          title="Adaptive Metabolic Calibration"
          description="14-day weight trends fine-tune your caloric expenditure safely and automatically over time."
          footerContent={
            <div className="flex items-center gap-2 text-xs text-sky-700 font-medium">
              <span>Bounded auto-adjustments (±15% safety limit)</span>
            </div>
          }
        />

        {/* 5. Privacy by Design */}
        <BentoCard
          icon={<ShieldCheck className="h-5 w-5 text-emerald-600" aria-hidden="true" />}
          tag="Zero Telemetry Imagery"
          title="Privacy by Design"
          description="Food images are processed transiently. Images and meal prompts are not stored in operational telemetry."
          footerContent={
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span>30-day automated account deletion grace period</span>
            </div>
          }
        />
      </div>
    </section>
  );
}
