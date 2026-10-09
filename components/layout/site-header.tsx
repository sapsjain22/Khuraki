"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const NAV_LINKS = [
  { label: "Features", href: "/#features", active: true },
  { label: "Science", href: "/#features", active: false },
  { label: "Architecture", href: "/#features", active: false },
  { label: "Blog", href: "/#blog", active: false },
  { label: "Affiliate", href: "/#affiliate", active: false },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const downloadUrl = siteConfig.links?.googlePlay || siteConfig.playStoreUrl;

  return (
    <header className="fixed top-4 inset-x-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-4xl">
      <div className="flex items-center justify-between rounded-full border border-zinc-200/80 bg-white/85 px-4 sm:px-5 py-2.5 shadow-sm backdrop-blur-md transition-all">
        {/* Zone 1: Left (Brand Wordmark Logo) */}
        <Link
          href="/"
          className="flex items-center shrink-0 transition-opacity hover:opacity-90"
          aria-label="Khuraki Home"
        >
          <Image
            src="/khuraki-logo.png"
            alt="Khuraki"
            width={112}
            height={26}
            priority
            className="h-6 w-auto object-contain"
          />
        </Link>

        {/* Zone 2: Center (Nav Capsule with Active Dot - hidden on mobile) */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-7"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                link.active
                  ? "text-zinc-950 font-bold"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              {link.active && (
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-950" />
              )}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Zone 3: Right (Download Action Pill + Mobile Hamburger) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Download App Action Pill */}
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Download App on Google Play"
          >
            <span>Download App</span>
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20">
              <ArrowUpRight className="h-2.5 w-2.5 text-white" />
            </div>
          </a>

          {/* Mobile Hamburger Toggle (md:hidden) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-4.5 w-4.5" />
            ) : (
              <Menu className="h-4.5 w-4.5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="mt-2 w-full rounded-2xl border border-zinc-200/80 bg-white/95 p-4 shadow-lg backdrop-blur-md md:hidden animate-in fade-in-50 slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
              >
                {link.active && (
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-950" />
                )}
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
