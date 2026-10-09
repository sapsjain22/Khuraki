"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import { Camera, Cpu, WifiOff, Scale, ShieldCheck, CheckCircle2, Lock, Zap, Sparkles } from "lucide-react";
import { BentoCard } from "./bento-card";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export function BentoGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-14 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 mb-3">
          <Sparkles className="h-3.5 w-3.5 text-amber-600" />
          <span className="text-xs font-semibold tracking-wide text-amber-800">
            Core Architecture
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
          Engineered for consistency. Not guesswork.
        </h2>
        <p className="mt-3 text-base text-zinc-600 leading-relaxed">
          Khuraki pairs local device speed with scientific nutritional precision. Every metric has a reason.
        </p>
      </div>

      {/* Motion Staggered Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* Card 1: Snap & Log (Vision AI) - Span 2 Columns */}
        <BentoCard
          icon={<Camera className="h-5 w-5 text-indigo-600" aria-hidden="true" />}
          tag="Vision AI"
          title="Snap & Log"
          description="Scan a meal and convert it into structured nutritional logs with zero manual typing."
          className="lg:col-span-2"
          visualContent={
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-50/70 p-4 shadow-2xs">
              {/* Simulated Meal Scanning Area */}
              <div className="relative flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
                    </span>
                    <span className="font-semibold text-zinc-700">Real-Time Plate Decomposition</span>
                  </div>
                  <span className="rounded-md border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[10px] text-zinc-500">
                    AI VISION 4.0
                  </span>
                </div>

                {/* Simulated Plate with Scanning Beam */}
                <div className="relative h-24 overflow-hidden rounded-xl border border-indigo-100 bg-gradient-to-r from-indigo-50/40 via-white to-amber-50/40 p-3 flex items-center justify-between">
                  {/* Animated Vertical Laser Sweep Line */}
                  <motion.div
                    animate={{ x: ["-10%", "110%", "-10%"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="pointer-events-none absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent blur-xs"
                  />

                  {/* Detected Dish Item Pill */}
                  <div className="relative z-10 flex flex-col gap-1">
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1 shadow-2xs border border-zinc-200/80">
                      <span className="text-xs font-bold text-zinc-900">Mediterranean Grain Bowl</span>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">98% match</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-zinc-600 pl-1 font-medium">
                      <span>420 kcal</span>
                      <span>·</span>
                      <span className="text-emerald-700 font-semibold">P: 32g</span>
                      <span>·</span>
                      <span className="text-blue-700 font-semibold">C: 44g</span>
                      <span>·</span>
                      <span className="text-amber-700 font-semibold">F: 12g</span>
                    </div>
                  </div>

                  {/* Bounding Box Indicator */}
                  <div className="relative z-10 rounded-lg border-2 border-dashed border-indigo-400/60 bg-indigo-50/30 px-3 py-2 text-right">
                    <span className="font-mono text-[10px] font-bold text-indigo-700">PORTION ~340g</span>
                  </div>
                </div>
              </div>
            </div>
          }
          footerContent={
            <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
              <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" />
              <span>Multi-item plate parsing with transient memory tokens</span>
            </div>
          }
        />

        {/* Card 2: Deterministic Nutrition Math - Span 1 Column */}
        <BentoCard
          icon={<Cpu className="h-5 w-5 text-amber-600" aria-hidden="true" />}
          tag="Metabolic Math"
          title="Deterministic Math"
          description="Your targets calculate from verified equations—never from generative hallucinations."
          visualContent={
            <div className="space-y-2 rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-3.5">
              <div className="flex items-center justify-between rounded-xl bg-white p-2 border border-zinc-200/70 shadow-2xs">
                <span className="font-mono text-[11px] font-semibold text-zinc-800">Mifflin-St Jeor</span>
                <span className="font-mono text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-bold">BMR Formula</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white p-2 border border-zinc-200/70 shadow-2xs">
                <span className="font-mono text-[11px] font-semibold text-zinc-800">Katch-McArdle</span>
                <span className="font-mono text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-bold">LBM Adjusted</span>
              </div>
            </div>
          }
          footerContent={
            <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Zero LLM arithmetic errors</span>
            </div>
          }
        />

        {/* Card 3: 100% Offline-First SQLite - Span 1 Column */}
        <BentoCard
          icon={<WifiOff className="h-5 w-5 text-emerald-600" aria-hidden="true" />}
          tag="Reliability"
          title="100% Offline-First"
          description="Your logs and daily metrics live securely in local SQLite storage, syncing seamlessly when online."
          visualContent={
            <div className="flex flex-col gap-2 rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-zinc-800">Room SQLite DB</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">LOCAL FIRST</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-[11px] text-zinc-500">
                <Zap className="h-3.5 w-3.5 text-amber-500" />
                <span>Instant 0ms read/write latency</span>
              </div>
            </div>
          }
          footerContent={
            <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium">
              <span>Encrypted on-device Android database</span>
            </div>
          }
        />

        {/* Card 4: Adaptive Metabolic Calibration - Span 1 Column */}
        <BentoCard
          icon={<Scale className="h-5 w-5 text-sky-600" aria-hidden="true" />}
          tag="Adaptation"
          title="Adaptive Calibration"
          description="14-day rolling expenditure trends recalibrate intake safely to avoid metabolic plateaus."
          visualContent={
            <div className="flex flex-col gap-2 rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-3.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold text-zinc-700">14-Day Rolling TDEE</span>
                <span className="font-mono font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded">±15% Bound</span>
              </div>
              {/* Mini SVG Trend Line */}
              <div className="h-9 w-full flex items-center">
                <svg className="w-full h-8" viewBox="0 0 200 40" fill="none">
                  <path
                    d="M 5 28 Q 50 12, 100 22 T 195 10"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="195" cy="10" r="3.5" fill="#0284c7" />
                </svg>
              </div>
            </div>
          }
          footerContent={
            <div className="flex items-center gap-2 text-xs text-sky-700 font-medium">
              <span>Clamped safely to physiological bounds</span>
            </div>
          }
        />

        {/* Card 5: Privacy by Design - Span 1 Column */}
        <BentoCard
          icon={<ShieldCheck className="h-5 w-5 text-emerald-600" aria-hidden="true" />}
          tag="Privacy"
          title="Privacy by Design"
          description="Meal images process transiently. Zero photo storage and clean 30-day account deletion grace."
          visualContent={
            <div className="flex flex-col gap-2 rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-3.5">
              <div className="flex items-center gap-2">
                <Lock className="h-3.5 w-3.5 text-zinc-700" />
                <span className="font-mono text-xs font-semibold text-zinc-800">Transient Vision Tokens</span>
              </div>
              <p className="text-[11px] text-zinc-500">
                Photos are never persisted to long-term telemetry disks.
              </p>
            </div>
          }
          footerContent={
            <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
              <span>Google Play compliant 30-day grace period</span>
            </div>
          }
        />
      </motion.div>
    </section>
  );
}
