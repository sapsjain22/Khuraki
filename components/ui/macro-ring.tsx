"use client";

import React from "react";

interface MacroRingProps {
  calories: number;
  maxCalories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  size?: number;
}

export function MacroRing({
  calories,
  maxCalories,
  proteinGrams,
  carbsGrams,
  fatGrams,
  size = 200,
}: MacroRingProps) {
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(calories / maxCalories, 1);
  const strokeDashoffset = circumference - percentage * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1F1F24"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Active Calorie Progress Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#F59E0B"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-300 ease-out"
        />
      </svg>

      {/* Center Label (Calories) */}
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-extrabold tracking-tight text-[#F5F5F5]">
          {calories}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wider text-[#A1A1AA]">
          kcal target
        </span>
      </div>
    </div>
  );
}
