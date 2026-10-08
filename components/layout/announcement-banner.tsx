import React from "react";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight } from "lucide-react";

export function AnnouncementBanner() {
  return (
    <div
      id="announcement-banner"
      className="border-b border-zinc-200 bg-zinc-50/90 text-zinc-700 transition-colors hover:bg-zinc-100"
    >
      <a
        href={siteConfig.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto flex h-10 max-w-6xl items-center justify-center gap-2 px-4 text-xs font-medium text-zinc-700 hover:text-zinc-950"
      >
        <span>
          <strong className="font-semibold text-zinc-900">Khuraki v1.0 is live</strong> — Deterministic metabolic math &amp; offline nutrition tracking on Google Play
        </span>
        <ArrowRight className="h-3.5 w-3.5 text-zinc-500" aria-hidden="true" />
      </a>
    </div>
  );
}
