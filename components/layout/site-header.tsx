"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Science", href: "/#features" },
  { label: "Architecture", href: "/#features" },
  { label: "Blog", href: "/#blog" },
  { label: "Affiliate", href: "/#affiliate" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-5xl">
      <div className="flex items-center justify-between rounded-full border border-zinc-200/80 bg-white/85 px-6 py-3 sm:py-3.5 shadow-sm backdrop-blur-md transition-all">
        {/* Left: Brand Logo (Bigger) */}
        <Link
          href="/"
          className="flex items-center shrink-0 transition-opacity hover:opacity-90"
          aria-label="Khuraki Home"
        >
          <Image
            src="/khuraki-logo.png"
            alt="Khuraki"
            width={160}
            height={38}
            priority
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </Link>

        {/* Right: Desktop Navigation Menu */}
        <nav
          className="hidden items-center gap-7 lg:gap-8 md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle (md:hidden) */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex md:hidden h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
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
          </nav>
        </div>
      )}
    </header>
  );
}
