"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Science", href: "/#features" },
  { label: "Architecture", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Privacy", href: "/privacy/" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const downloadUrl = siteConfig.links?.googlePlay || siteConfig.playStoreUrl;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Wordmark Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 transition-opacity hover:opacity-90"
          aria-label="Khuraki Home"
        >
          <Image
            src="/khuraki-logo.png"
            alt="Khuraki"
            width={118}
            height={28}
            priority
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-zinc-600 transition-colors duration-200 ease-out hover:text-zinc-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Download Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 active:scale-[0.98]"
            aria-label="Download Khuraki on Google Play"
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
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white/95 px-4 py-3 shadow-md md:hidden animate-in fade-in-50 slide-in-from-top-1 duration-150">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
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
