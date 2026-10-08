"use client";

import React from "react";
import { Download } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface AnimatedCtaButtonProps {
  className?: string;
  onClick?: () => void;
}

export function AnimatedCtaButton({ className = "", onClick }: AnimatedCtaButtonProps) {
  const targetUrl = siteConfig.links?.googlePlay || siteConfig.playStoreUrl;

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-zinc-950 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-zinc-900 hover:shadow-md active:scale-[0.98] ${className}`}
      aria-label="Get Khuraki on Google Play"
    >
      {/* Animated shimmer border ring */}
      <span
        className="pointer-events-none absolute inset-0 -z-10 rounded-full p-[1px] bg-gradient-to-r from-zinc-700 via-white/50 to-zinc-700 animate-header-shimmer opacity-40 transition-opacity group-hover:opacity-75"
        aria-hidden="true"
      />
      {/* Subtle emerald live pulse indicator */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      {/* Download Icon + Label */}
      <Download className="h-3.5 w-3.5 text-zinc-300 transition-transform group-hover:-translate-y-0.5 group-hover:text-white" />
      <span className="tracking-tight">Get Khuraki</span>
    </a>
  );
}
