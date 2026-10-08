"use client";

import React, { useState } from "react";
import { MacroRing } from "./macro-ring";

export function InteractiveDemo() {
  const [calories, setCalories] = useState(2150);

  // Deterministic nutrition distribution (30% Protein, 45% Carbs, 25% Fat)
  const proteinGrams = Math.round((calories * 0.3) / 4);
  const carbsGrams = Math.round((calories * 0.45) / 4);
  const fatGrams = Math.round((calories * 0.25) / 9);

  return (
    <div className="relative mx-auto w-full max-w-sm rounded-[32px] border border-white/10 bg-[#0D0D10] p-6 shadow-2xl transition-all duration-300">
      {/* Top Phone Chrome / Subtitle */}
      <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-medium uppercase tracking-wider text-[#A1A1AA]">
            Live Metabolic Engine
          </span>
        </div>
        <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-zinc-400">
          Offline Room DB
        </span>
      </div>

      {/* SVG Central Ring */}
      <div className="my-4 flex justify-center">
        <MacroRing
          calories={calories}
          maxCalories={3200}
          proteinGrams={proteinGrams}
          carbsGrams={carbsGrams}
          fatGrams={fatGrams}
          size={190}
        />
      </div>

      {/* Macro Breakdown Chips (1:1 Android Color Alignment) */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {/* Protein (Emerald Green #10B981) */}
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-2.5 text-center">
          <span className="block text-[11px] font-semibold text-emerald-400 uppercase tracking-wide">
            Protein
          </span>
          <span className="mt-0.5 block text-base font-bold text-[#F5F5F5]">
            {proteinGrams}g
          </span>
          <span className="text-[10px] text-zinc-500">30% target</span>
        </div>

        {/* Carbs (Electric Sky Blue #3B82F6) */}
        <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 p-2.5 text-center">
          <span className="block text-[11px] font-semibold text-blue-400 uppercase tracking-wide">
            Carbs
          </span>
          <span className="mt-0.5 block text-base font-bold text-[#F5F5F5]">
            {carbsGrams}g
          </span>
          <span className="text-[10px] text-zinc-500">45% target</span>
        </div>

        {/* Fat (Warm Amber #F59E0B) */}
        <div className="rounded-xl border border-amber-500/20 bg-amber-950/20 p-2.5 text-center">
          <span className="block text-[11px] font-semibold text-amber-400 uppercase tracking-wide">
            Fat
          </span>
          <span className="mt-0.5 block text-base font-bold text-[#F5F5F5]">
            {fatGrams}g
          </span>
          <span className="text-[10px] text-zinc-500">25% target</span>
        </div>
      </div>

      {/* The Single Obvious Control */}
      <div className="mt-6 rounded-2xl border border-white/5 bg-[#16171B] p-4">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="text-[#A1A1AA] font-medium">Daily Energy Target</span>
          <span className="font-mono font-bold text-amber-400">{calories} kcal</span>
        </div>
        <input
          type="range"
          min="1400"
          max="3200"
          step="50"
          value={calories}
          onChange={(e) => setCalories(Number(e.target.value))}
          className="khuraki-slider"
          aria-label="Adjust daily calorie target"
        />
        <div className="mt-2 flex justify-between text-[10px] text-zinc-500 font-mono">
          <span>1,400 kcal</span>
          <span>Slide to test math</span>
          <span>3,200 kcal</span>
        </div>
      </div>
    </div>
  );
}
