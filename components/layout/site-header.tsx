"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { CommandSearch } from "@/components/ui/command-search";
import { AnimatedCtaButton } from "@/components/ui/animated-cta-button";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Science", href: "/#features" },
  { label: "Architecture", href: "/#features" },
  { label: "Blog", href: "/#blog" },
  { label: "Affiliate", href: "/#affiliate" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global Ctrl+K / Cmd+K listener to open CommandSearch
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-4xl">
        <div className="flex items-center justify-between rounded-full border border-zinc-200/80 bg-white/85 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all">
          {/* Zone 1: Left (Brand Wordmark) */}
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

          {/* Zone 2: Center (Nav Links - hidden on mobile) */}
          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Right (Actions: CommandSearch + CTA + Mobile Toggle) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Command Search Trigger Pill */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-zinc-50/80 px-2.5 py-1 text-xs text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900"
              aria-label="Search site (Ctrl+K)"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden sm:inline text-[11px] font-medium">Search</span>
              <kbd className="hidden sm:inline-flex items-center rounded border border-zinc-200 bg-white px-1 font-mono text-[9px] text-zinc-400">
                ⌘K
              </kbd>
            </button>

            {/* High-Contrast Animated CTA Button */}
            <AnimatedCtaButton />

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
                  className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-zinc-100 flex flex-col gap-2">
                <AnimatedCtaButton
                  className="w-full justify-center py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Command Search Modal Component */}
      <CommandSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
