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
    <header className="fixed top-4 inset-x-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-3xl">
      <div className="flex items-center justify-between rounded-full border border-zinc-200/80 bg-white/85 px-5 py-2.5 shadow-sm backdrop-blur-md transition-all">
        {/* Left: Brand Wordmark Logo */}
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

        {/* Desktop Navigation Links */}
        <nav
          className="hidden items-center gap-7 md:flex"
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
