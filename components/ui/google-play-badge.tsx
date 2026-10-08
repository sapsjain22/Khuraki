"use client";

import React from "react";
import { siteConfig } from "@/lib/site-config";

interface GooglePlayBadgeProps {
  className?: string;
  size?: "md" | "lg";
}

export function GooglePlayBadge({ className = "", size = "md" }: GooglePlayBadgeProps) {
  const isLarge = size === "lg";

  return (
    <a
      href={siteConfig.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Khuraki on Google Play"
      className={`inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#0D0D10] px-4.5 py-2.5 text-left transition-all duration-200 hover:border-amber-500/40 hover:bg-[#141418] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
        isLarge ? "py-3 px-5" : ""
      } ${className}`}
    >
      {/* Official Google Play Logo Mark SVG */}
      <svg
        className={isLarge ? "h-6 w-6" : "h-5 w-5"}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M325.3 234.3L104.6 13l280.8 161.9-60.1 59.4z"
          fill="#00F076"
        />
        <path
          d="M47 30.1c-5.8 9.9-9 21.6-9 34.3v383.2c0 12.7 3.2 24.4 9 34.3l236.4-236.4L47 30.1z"
          fill="#00D2FF"
        />
        <path
          d="M325.3 277.7l60.1 59.4L104.6 499l220.7-221.3z"
          fill="#FF3A44"
        />
        <path
          d="M428.2 233.8l-42.8-24.7-60.1 59.4 60.1 59.4 42.8-24.7c15.2-8.8 24.6-24.9 24.6-44.7s-9.4-35.9-24.6-44.7z"
          fill="#FFC400"
        />
      </svg>
      <div>
        <p className="text-[10px] font-medium uppercase tracking-wider text-[#A1A1AA] leading-none">
          Get it on
        </p>
        <p className="mt-0.5 text-sm font-semibold tracking-tight text-[#F5F5F5] leading-tight">
          Google Play
        </p>
      </div>
    </a>
  );
}
