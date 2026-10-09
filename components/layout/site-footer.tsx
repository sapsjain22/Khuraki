import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const playStoreUrl = siteConfig.links?.googlePlay || siteConfig.playStoreUrl;

  return (
    <div className="mx-auto max-w-[1360px] px-3 sm:px-6 lg:px-8 pb-12 pt-4">
      <footer className="relative overflow-hidden rounded-[32px] sm:rounded-[36px] border border-zinc-800/90 bg-zinc-950 p-8 sm:p-12 lg:p-14 text-zinc-400 shadow-xl">
        {/* Top Zone: Split Flex (Brand & Nav on Left, Store Badges on Right) */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Left Column: Brand Lockup, Description & Nav Links */}
          <div className="flex-1 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-90"
              aria-label="Khuraki Home"
            >
              <Image
                src="/khuraki-logo-white.png"
                alt="Khuraki"
                width={120}
                height={28}
                className="h-7 w-auto object-contain"
              />
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-zinc-400">
              Eat with awareness. Train with intent. Built with deterministic metabolic math, offline-first reliability, and zero marketing fluff.
            </p>

            {/* Horizontal Nav Links Row */}
            <nav
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm font-medium text-zinc-300"
              aria-label="Footer navigation"
            >
              <Link href="/#" className="transition-colors hover:text-white">
                Overview
              </Link>
              <Link href="/#features" className="transition-colors hover:text-white">
                Features
              </Link>
              <Link href="/#features" className="transition-colors hover:text-white">
                Science
              </Link>
              <Link href="/#features" className="transition-colors hover:text-white">
                Architecture
              </Link>
              <Link href="/privacy/" className="transition-colors hover:text-white">
                Privacy
              </Link>
              <Link href="/terms/" className="transition-colors hover:text-white">
                Terms
              </Link>
              <Link href="/delete-account/" className="transition-colors hover:text-white">
                Delete Account
              </Link>
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="transition-colors hover:text-white"
              >
                Support
              </a>
            </nav>
          </div>

          {/* Right Column: "Get the app" + Store Badges */}
          <div className="flex flex-col gap-3.5 sm:min-w-[220px]">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Get the app
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              {/* App Store (Coming Soon Pill) */}
              <div
                className="relative inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-left text-zinc-400 shadow-xs"
                title="iOS version coming soon"
              >
                <svg
                  className="h-6 w-6 shrink-0 fill-current text-zinc-300"
                  viewBox="0 0 170 170"
                  aria-hidden="true"
                >
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.85-11.94-14.42-6.53-9.98-11.66-21.72-15.39-35.21-3.73-13.49-5.6-26.06-5.6-37.7 0-14.73 3.65-26.78 10.96-36.14 7.3-9.37 16.48-14.12 27.52-14.26 4.35 0 9.22 1.25 14.61 3.75 5.39 2.5 9.17 3.82 11.36 3.96 1.74-.26 5.66-1.68 11.78-4.24 6.12-2.57 11.36-3.74 15.71-3.52 14.93.89 26.27 6.46 34.02 16.7-13.06 7.9-19.46 18.73-19.18 32.5.28 10.74 4.34 19.64 12.18 26.7 4.13 3.8 8.92 6.64 14.38 8.52-3.15 9.12-7.1 18.25-11.84 27.38zM119.22 33.15c0-7.39 2.66-14.31 7.99-20.77 5.33-6.46 11.83-10.77 19.51-12.93 1.09 5.87.69 11.83-1.2 17.88-1.89 6.06-5.06 11.39-9.52 16-4.58 4.71-9.91 7.74-15.99 9.09-.26-3.04-.79-6.13-.79-9.27z" />
                </svg>
                <div className="pr-2">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 leading-none">
                    Download on the
                  </p>
                  <p className="text-xs font-bold text-zinc-300 leading-tight mt-0.5">
                    App Store
                  </p>
                </div>
                <span className="ml-auto rounded-md bg-zinc-800 px-2 py-0.5 text-[10px] font-semibold text-zinc-400">
                  Soon
                </span>
              </div>

              {/* Google Play Store Badge (Active Link) */}
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-zinc-700/80 bg-zinc-900/90 px-4 py-2.5 text-left text-white shadow-xs transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98]"
                aria-label="Get it on Google Play"
              >
                <svg
                  className="h-6 w-6 shrink-0"
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.9-60.1 59.4z" fill="#00F076" />
                  <path d="M47 30.1c-5.8 9.9-9 21.6-9 34.3v383.2c0 12.7 3.2 24.4 9 34.3l236.4-236.4L47 30.1z" fill="#00D2FF" />
                  <path d="M325.3 277.7l60.1 59.4L104.6 499l220.7-221.3z" fill="#FF3A44" />
                  <path d="M428.2 233.8l-42.8-24.7-60.1 59.4 60.1 59.4 42.8-24.7c15.2-8.8 24.6-24.9 24.6-44.7s-9.4-35.9-24.6-44.7z" fill="#FFC400" />
                </svg>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-400 leading-none">
                    GET IT ON
                  </p>
                  <p className="text-xs font-bold text-white leading-tight mt-0.5">
                    Google Play
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="my-8 sm:my-10 border-t border-zinc-800/80" />

        {/* Bottom Zone: Legal Disclaimer, Copyright & Social Row */}
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1.5 text-xs text-zinc-400">
            <p>&copy; {currentYear} {siteConfig.publisher}. All rights reserved.</p>
            <p className="max-w-2xl text-[11px] leading-relaxed text-zinc-400">
              Disclaimer: Khuraki is an informational nutrition and fitness tracking application designed to support personal wellness routines. Khuraki does not provide clinical medical diagnosis or prescriptions.
            </p>
          </div>

          {/* Social Links Row (Clean vector SVGs with 44px min touch targets) */}
          <div className="flex items-center gap-1.5">
            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
              aria-label="Khuraki on X"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
              aria-label="Khuraki on LinkedIn"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sapsjain22/-Khuraki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
              aria-label="Khuraki GitHub Repository"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* Email / Support */}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
              aria-label="Contact Support"
            >
              <Mail className="h-4 w-4 text-zinc-400" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
