import React from "react";
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";
import { BentoGrid } from "@/components/bento/bento-grid";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Flagship 3D Cinematic Landing Hero */}
      <CinematicHero />

      {/* Core Architectural Invariants: Bento Grid */}
      <div className="relative z-10 bg-[#050914] border-t border-white/10">
        <div className="pt-16">
          <BentoGrid />
        </div>

        {/* Workflow Section: How Khuraki Works */}
        <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Transparent Workflow
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A nutrition plan that adapts as your body changes.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0A101D]/80 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#0E1729]">
              <span className="font-mono text-xs font-bold text-amber-400">01</span>
              <h3 className="mt-3 text-lg font-bold text-white">Calculate Baseline</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Your targets use peer-reviewed Mifflin-St Jeor and Katch-McArdle metabolic formulas based on your body composition.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0A101D]/80 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#0E1729]">
              <span className="font-mono text-xs font-bold text-amber-400">02</span>
              <h3 className="mt-3 text-lg font-bold text-white">Log Seamlessly</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Snap food photos or dictate meals in natural Hinglish or English. Multi-item dishes decompose automatically into macros.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0A101D]/80 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#0E1729]">
              <span className="font-mono text-xs font-bold text-amber-400">03</span>
              <h3 className="mt-3 text-lg font-bold text-white">Adaptive Calibration</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Track weigh-ins across 14-day rolling windows. Khuraki recalibrates your energy expenditure to prevent plateaus.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
