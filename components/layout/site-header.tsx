"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CommandSearch } from "@/components/ui/command-search";
import {
  Search,
  Sun,
  Moon,
  ChevronDown,
  Menu,
  X,
  Shield,
  FileText,
  UserX,
  ExternalLink,
} from "lucide-react";

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLegalDropdownOpen, setIsLegalDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const legalDropdownRef = useRef<HTMLDivElement>(null);

  // Global keyboard shortcut listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close legal dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        legalDropdownRef.current &&
        !legalDropdownRef.current.contains(e.target as Node)
      ) {
        setIsLegalDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 h-14 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Brand & Main Navigation */}
          <div className="flex items-center gap-6">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
            >
              <div
                aria-label="Khuraki logo"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950"
              >
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
              <span className="text-base font-semibold tracking-tight text-zinc-950">
                khuraki.com
              </span>
            </Link>

            {/* Desktop Navigation Links */}
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

              {/* Legal Dropdown (Browse-style) */}
              <div className="relative" ref={legalDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsLegalDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950"
                  aria-expanded={isLegalDropdownOpen}
                >
                  <span>Legal</span>
                  <ChevronDown
                    className={`h-3 w-3 text-zinc-400 transition-transform ${
                      isLegalDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isLegalDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1.5 w-52 overflow-hidden rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg">
                    <Link
                      href="/privacy/"
                      onClick={() => setIsLegalDropdownOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950"
                    >
                      <Shield className="h-3.5 w-3.5 text-zinc-500" />
                      <span>Privacy Policy</span>
                    </Link>
                    <Link
                      href="/terms/"
                      onClick={() => setIsLegalDropdownOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950"
                    >
                      <FileText className="h-3.5 w-3.5 text-zinc-500" />
                      <span>Terms of Service</span>
                    </Link>
                    <Link
                      href="/delete-account/"
                      onClick={() => setIsLegalDropdownOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950"
                    >
                      <UserX className="h-3.5 w-3.5 text-zinc-500" />
                      <span>Account Deletion</span>
                    </Link>
                  </div>
                )}
              </div>

              <a
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950"
              >
                Download
              </a>
            </nav>
          </div>

          {/* Right: Search Pill, Theme Capsule, GitHub, Discord, Sign in / Get App */}
          <div className="flex items-center gap-2">
            {/* Search Pill Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100/80 px-2.5 py-1 text-xs text-zinc-500 transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-800"
              aria-label="Open search dialog"
            >
              <Search className="h-3.5 w-3.5 text-zinc-400" />
              <span className="text-xs">Search</span>
              <div className="ml-1.5 flex items-center gap-0.5">
                <kbd className="rounded border border-zinc-200 bg-white px-1 text-[10px] font-mono text-zinc-400 shadow-2xs">
                  Ctrl
                </kbd>
                <kbd className="rounded border border-zinc-200 bg-white px-1 text-[10px] font-mono text-zinc-400 shadow-2xs">
                  K
                </kbd>
              </div>
            </button>

            {/* Mobile Search Icon Trigger */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex sm:hidden h-8 w-8 items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-100"
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Theme Toggle Capsule (Light / Clean Aesthetic Capsule) */}
            <div
              className="flex items-center rounded-full border border-zinc-200 bg-zinc-50 p-0.5"
              title="Light theme active"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-zinc-900 shadow-2xs">
                <Sun className="h-3.5 w-3.5" />
              </div>
              <div className="flex h-6 w-6 items-center justify-center text-zinc-400">
                <Moon className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* GitHub Icon Link */}
            <a
              href="https://github.com/sapsjain22/-Khuraki"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
              aria-label="GitHub Repository"
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            {/* Discord / Support Community Link */}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
              aria-label="Contact Support"
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>

            {/* Primary Action Button (Solid Black Rounded Pill) */}
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
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
                Science &amp; Architecture
              </Link>
              <Link
                href="/privacy/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
              >
                Terms of Service
              </Link>
              <Link
                href="/delete-account/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
              >
                Account Deletion
              </Link>
              <a
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg bg-zinc-950 px-3 py-2 text-sm font-semibold text-white"
              >
                <span>Download on Google Play</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Global Command Search Palette */}
      <CommandSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
