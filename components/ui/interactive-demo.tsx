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
    <div className="relative mx-auto w-full max-w-sm rounded-[28px] border border-zinc-200 bg-white p-6 shadow-md transition-all duration-300">
      {/* Top Phone Chrome / Subtitle */}
      <div className="mb-4 flex items-center justify-between border-b border-zinc-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
            Live Metabolic Engine
          </span>
        </div>
        <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[10px] font-mono text-zinc-600 border border-zinc-200">
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

      {/* Macro Breakdown Chips */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {/* Protein (Emerald Green) */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-2.5 text-center">
          <span className="block text-[11px] font-semibold text-emerald-700 uppercase tracking-wide">
            Protein
          </span>
          <span className="mt-0.5 block text-base font-bold text-zinc-950">
            {proteinGrams}g
          </span>
          <span className="text-[10px] text-zinc-500">30% target</span>
        </div>

        {/* Carbs (Royal Blue) */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/80 p-2.5 text-center">
          <span className="block text-[11px] font-semibold text-blue-700 uppercase tracking-wide">
            Carbs
          </span>
          <span className="mt-0.5 block text-base font-bold text-zinc-950">
            {carbsGrams}g
          </span>
          <span className="text-[10px] text-zinc-500">45% target</span>
        </div>

        {/* Fat (Warm Amber) */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-2.5 text-center">
          <span className="block text-[11px] font-semibold text-amber-700 uppercase tracking-wide">
            Fat
          </span>
          <span className="mt-0.5 block text-base font-bold text-zinc-950">
            {fatGrams}g
          </span>
          <span className="text-[10px] text-zinc-500">25% target</span>
        </div>
      </div>

      {/* The Single Obvious Control */}
      <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="text-zinc-600 font-medium">Daily Energy Target</span>
          <span className="font-mono font-bold text-amber-600">{calories} kcal</span>
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
