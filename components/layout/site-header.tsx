import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { GooglePlayBadge } from "@/components/ui/google-play-badge";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#000000]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-amber-500/30 bg-[#0D0D10]">
            <span className="font-bold text-amber-500 text-sm tracking-tighter">ख</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-[#F5F5F5]">
            {siteConfig.name}
          </span>
        </Link>

        {/* Navigation & CTA */}
        <nav className="flex items-center gap-6">
          <Link
            href="/#features"
            className="text-xs font-medium text-[#A1A1AA] transition-colors hover:text-[#F5F5F5] hidden sm:inline-block"
          >
            Science &amp; Architecture
          </Link>
          <Link
            href="/privacy/"
            className="text-xs font-medium text-[#A1A1AA] transition-colors hover:text-[#F5F5F5] hidden sm:inline-block"
          >
            Privacy
          </Link>
          <GooglePlayBadge size="md" />
        </nav>
      </div>
    </header>
  );
}
