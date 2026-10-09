import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50/80 py-12 text-xs text-zinc-600">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand & Tagline */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Image
                src="/khuraki-logo.png"
                alt="Khuraki"
                width={105}
                height={23}
                className="h-5 w-auto object-contain"
              />
            </div>
            <p className="text-[11px] text-zinc-500">{siteConfig.tagline}</p>
          </div>

          {/* Legal Navigation Links */}
          <nav className="flex flex-wrap gap-6" aria-label="Legal & Support">
            <Link
              href="/privacy/"
              className="transition-colors hover:text-zinc-950"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms/"
              className="transition-colors hover:text-zinc-950"
            >
              Terms of Service
            </Link>
            <Link
              href="/delete-account/"
              className="transition-colors hover:text-zinc-950"
            >
              Account Deletion
            </Link>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="transition-colors hover:text-zinc-950"
            >
              Support
            </a>
          </nav>
        </div>

        {/* Metabolic & Health Disclaimer */}
        <div className="mt-8 border-t border-zinc-200 pt-6 text-[11px] leading-relaxed text-zinc-500">
          <p>
            Disclaimer: Khuraki is an informational nutrition and fitness tracking application designed to support personal wellness routines. Khuraki does not provide clinical medical diagnosis, healthcare treatment, or individualized medical prescriptions. Always consult a qualified physician or healthcare provider before undertaking significant dietary or athletic changes.
          </p>
          <p className="mt-3">
            &copy; {currentYear} {siteConfig.publisher}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
