"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-14 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Wordmark & Main Navigation */}
        <div className="flex items-center gap-7">
          {/* Brand Wordmark (Official Khuraki Logotype) */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-90"
            aria-label="Khuraki Home"
          >
            <Image
              src="/khuraki-logo.png"
              alt="Khuraki"
              width={124}
              height={27}
              priority
              className="h-6.5 w-auto object-contain"
            />
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

        {/* Right: "Get it on Google Play" Badge + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* "Get it on Google Play" Badge Button */}
          <a
            href={siteConfig.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-black px-3 py-1.5 text-left transition-all hover:bg-zinc-900 hover:border-zinc-700 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
          >
            {/* Google Play Multi-Color Triangle Logo SVG */}
            <svg
              className="h-4.5 w-4.5 shrink-0"
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
            <div className="flex flex-col text-left leading-none">
              <span className="text-[7.5px] font-medium uppercase tracking-wider text-zinc-300">
                GET IT ON
              </span>
              <span className="mt-0.5 text-[11px] font-bold tracking-tight text-white">
                Google Play
              </span>
            </div>
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
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-2.5 text-xs font-semibold text-white"
            >
              <span>Get it on Google Play</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
