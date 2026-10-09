import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#050914] py-14 text-xs text-zinc-400 overflow-hidden">
      {/* Subtle bottom ambient lighting */}
      <div
        className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-40 w-[600px] rounded-full bg-blue-600/10 blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand & Tagline */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <Image
                src="/khuraki-logo-white.png"
                alt="Khuraki"
                width={105}
                height={23}
                className="h-5 w-auto object-contain"
              />
            </div>
            <p className="text-[11px] text-zinc-500">{siteConfig.tagline}</p>
          </div>

          {/* Legal & App Links */}
          <nav className="flex flex-wrap gap-6" aria-label="Legal & Support">
            <Link
              href="/privacy/"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms/"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="/delete-account/"
              className="transition-colors hover:text-white"
            >
              Account Deletion
            </Link>
            <Link
              href="/cinematic/"
              className="transition-colors hover:text-white text-blue-400"
            >
              3D Experience
            </Link>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="transition-colors hover:text-white"
            >
              Support
            </a>
          </nav>
        </div>

        {/* Health Disclaimer */}
        <div className="mt-8 border-t border-white/10 pt-6 text-[11px] leading-relaxed text-zinc-500">
          <p>
            Disclaimer: Khuraki is an informational nutrition and fitness tracking application designed to support personal wellness routines. Khuraki does not provide clinical medical diagnosis, healthcare treatment, or individualized medical prescriptions. Always consult a qualified physician or healthcare provider before undertaking significant dietary or athletic changes.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-600">
            <p>© {currentYear} {siteConfig.publisher}. All rights reserved.</p>
            <p className="mt-2 sm:mt-0 font-mono text-[10px] text-zinc-500">Deterministic Engine v2.4 · Offline SQLite</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
