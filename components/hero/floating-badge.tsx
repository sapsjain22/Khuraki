"use client";

import React from "react";
import { Star, WifiOff, ShieldCheck } from "lucide-react";

export function AvatarReviewBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-2xl border border-zinc-200/90 bg-white/95 p-3 shadow-lg backdrop-blur-md transition-transform hover:scale-[1.03] ${className}`}
    >
      {/* Overlapping User Avatars */}
      <div className="flex -space-x-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-amber-500 text-[10px] font-bold text-white shadow-2xs">
          A
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-indigo-500 text-[10px] font-bold text-white shadow-2xs">
          R
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-[10px] font-bold text-white shadow-2xs">
          S
        </div>
      </div>

      {/* Review Copy & Stars */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span className="text-[11px] font-bold text-zinc-900">4.9/5</span>
        </div>
        <span className="text-[10px] font-medium text-zinc-600">
          4k+ Active Users With Top Reviews
        </span>
      </div>
    </div>
  );
}

export function FeatureChipsBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Offline First Chip */}
      <div className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-md transition-transform hover:scale-[1.02]">
        <WifiOff className="h-3.5 w-3.5 text-violet-200" />
        <span>100% Offline First</span>
      </div>

      {/* Privacy Chip */}
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-zinc-900 shadow-md backdrop-blur-md transition-transform hover:scale-[1.02]">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
        <span>Zero Photo Storage</span>
      </div>
    </div>
  );
}
