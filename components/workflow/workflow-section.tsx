"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import { Calculator, Camera, TrendingUp, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 24,
      stiffness: 180,
    },
  },
};

const STEPS = [
  {
    step: "01",
    title: "Calculate Baseline",
    description:
      "Input your physical baseline. Khuraki computes verified BMR and TDEE targets using Mifflin-St Jeor and Katch-McArdle equations with zero math hallucinations.",
    icon: Calculator,
  },
  {
    step: "02",
    title: "Log In Seconds",
    description:
      "Photograph your meal or dictate in natural language. Multi-item dishes decompose instantly into verified macro targets directly on your device in real time.",
    icon: Camera,
  },
  {
    step: "03",
    title: "Adaptive Recalibration",
    description:
      "Log regular weigh-ins. A 14-day rolling expenditure algorithm automatically recalibrates caloric targets to avoid plateaus, clamped to safe ±15% bounds.",
    icon: TrendingUp,
  },
];

export function WorkflowSection() {
  const downloadUrl = siteConfig.links?.googlePlay || siteConfig.playStoreUrl;

  return (
    <section id="how-it-works" className="relative mx-auto mt-20 max-w-6xl px-4 py-16 sm:px-6 lg:px-8 border-t border-zinc-200/80">
      {/* Centered Editorial Header Lockup */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          How It Works
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl leading-[1.12]">
          From baseline to calibrated routine in three steps
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
          No guesswork, no tedious manual logging — just deterministic metabolic math and adaptive recalibration on your device.
        </p>
      </div>

      {/* Motion Staggered 3-Card Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {STEPS.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200/85 bg-white p-7 sm:p-8 shadow-2xs transition-all duration-300 hover:border-zinc-300 hover:shadow-md"
            >
              <div>
                {/* Top Row: Squircle Icon + Step Number */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 shadow-2xs transition-colors group-hover:border-zinc-300 group-hover:bg-white">
                    <Icon className="h-5 w-5 text-zinc-900" />
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-400 transition-colors group-hover:text-zinc-900">
                    {item.step}
                  </span>
                </div>

                {/* Step Title & Factual Description */}
                <h3 className="mt-6 text-lg font-bold tracking-tight text-zinc-950 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom High-Intent Action Button */}
      <div className="mt-12 flex justify-center">
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-zinc-950 px-6 py-3 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98]"
          aria-label="Download on Google Play"
        >
          {/* Google Play Multi-Color Vector Mark */}
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
            <ArrowUpRight className="h-2.5 w-2.5 text-white" />
          </div>
        </a>
      </div>
    </section>
  );
}
