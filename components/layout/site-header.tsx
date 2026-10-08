"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Menu, X, ExternalLink } from "lucide-react";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-14 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand & Main Navigation */}
        <div className="flex items-center gap-6">
          {/* Brand Logo (Official Khuraki K in Black & Transparent) & Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
            aria-label="Khuraki Home"
          >
            {/* Khuraki K Mark (Black on transparent) */}
            <svg
              className="h-7 w-7 shrink-0"
              viewBox="0 0 108 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Stem */}
              <path
                fill="#000000"
                d="M 33.51,20.17 C 33.77,20.13 34.09,20.14 34.36,20.13 C 39.90,19.88 44.99,23.26 45.70,28.98 C 45.91,30.60 45.86,32.22 45.80,33.85 C 45.74,35.67 45.69,37.55 45.30,39.34 C 44.93,40.74 44.40,42.33 43.91,43.67 C 41.02,51.57 40.80,58.35 44.55,66.01 C 46.75,70.50 47.32,78.13 45.44,82.85 C 44.23,85.88 41.93,88.02 38.88,89.31 C 35.26,90.87 29.98,90.28 26.94,87.76 C 24.45,85.70 22.90,82.63 22.57,79.42 C 22.45,78.33 22.50,77.06 22.50,75.95 L 22.50,70.27 L 22.51,52.09 L 22.50,37.56 L 22.50,33.36 C 22.50,32.40 22.48,31.24 22.61,30.31 C 22.93,28.18 23.82,26.18 25.18,24.51 C 27.26,21.98 30.27,20.49 33.51,20.17 z"
              />
              {/* Lower Arm */}
              <path
                fill="#000000"
                d="M 57.41,54.81 C 63.35,54.53 69.35,57.44 73.59,61.41 C 75.40,63.12 77.21,64.95 78.89,66.81 C 82.57,70.91 86.76,75.10 87.06,80.95 C 87.37,86.98 83.12,90.17 77.45,90.38 C 70.56,90.45 66.45,86.08 62.07,81.51 C 60.24,79.60 58.43,77.69 56.63,75.76 L 52.80,71.65 C 51.48,70.24 50.26,68.94 49.18,67.32 C 47.24,64.38 46.88,60.74 49.41,58.00 C 51.46,55.78 54.46,54.97 57.41,54.81 z"
              />
              {/* Upper Arm */}
              <path
                fill="#000000"
                d="M 84.42,17.79 C 85.29,17.85 85.93,18.32 86.10,19.18 C 87.11,24.38 85.21,30.88 82.77,35.31 C 79.11,41.96 73.10,46.99 65.92,49.42 C 63.12,50.36 60.08,50.87 57.25,51.72 C 52.65,53.09 48.17,54.99 45.74,59.40 L 45.39,60.07 C 44.81,58.53 44.44,56.93 44.29,55.29 C 43.32,44.99 51.50,36.52 59.22,30.99 C 61.07,29.68 62.99,28.46 64.97,27.34 C 68.59,25.28 72.49,23.40 76.23,21.52 L 80.72,19.29 C 81.76,18.78 83.30,17.90 84.42,17.79 z"
              />
            </svg>
            <span className="text-base font-semibold tracking-tight text-zinc-950">
              khuraki.com
            </span>
          </Link>

          {/* Desktop Navigation Links (Features, Science, Architecture, Blog, Affiliate) */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            <Link
              href="/#features"
              className="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Features
            </Link>
            <Link
              href="/#features"
              className="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Science
            </Link>
            <Link
              href="/#features"
              className="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Architecture
            </Link>
            <Link
              href="/#blog"
              className="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Blog
            </Link>
            <Link
              href="/#affiliate"
              className="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Affiliate
            </Link>
          </nav>
        </div>

        {/* Right: Get App Button + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Primary Action Button (Solid Black Rounded Pill) */}
          <a
            href={siteConfig.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-4 py-1.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
          >
            Get App
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-100"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {isMobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            <Link
              href="/#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Features
            </Link>
            <Link
              href="/#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Science
            </Link>
            <Link
              href="/#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Architecture
            </Link>
            <Link
              href="/#blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Blog
            </Link>
            <Link
              href="/#affiliate"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Affiliate
            </Link>
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-between rounded-lg bg-zinc-950 px-3 py-2 text-sm font-semibold text-white"
            >
              <span>Download on Google Play</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
