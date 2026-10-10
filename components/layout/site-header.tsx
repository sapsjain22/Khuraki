"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import { siteConfig } from "@/lib/site-config";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  UtensilsCrossed,
  LineChart,
  Dumbbell,
  Sparkles,
  ShieldCheck,
  FileText,
  UserX,
  ArrowUpRight,
  Calculator,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureItem = {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

const FEATURE_LINKS: FeatureItem[] = [
  {
    title: "Macro & Nutrition Tracking",
    href: "/#features",
    description: "Deterministic metabolic math with zero AI hallucinations",
    icon: UtensilsCrossed,
  },
  {
    title: "Weight Trend Analytics",
    href: "/#features",
    description: "Adaptive smoothing filter to separate noise from true fat loss",
    icon: LineChart,
  },
  {
    title: "Workout Progression",
    href: "/#features",
    description: "Log sets, reps, and overload progression with zero friction",
    icon: Dumbbell,
  },
  {
    title: "AI Daily Overview",
    href: "/#features",
    description: "Evening metabolic review unlocking at 7:00 PM",
    icon: Sparkles,
  },
];

const TRUST_LINKS: FeatureItem[] = [
  {
    title: "Science & Equations",
    href: "/#features",
    description: "Mifflin-St Jeor & verified thermodynamic principles",
    icon: Calculator,
  },
  {
    title: "Privacy Policy",
    href: "/privacy/",
    description: "Statutory DPDP, COPPA, and GDPR compliance",
    icon: ShieldCheck,
  },
  {
    title: "Terms of Service",
    href: "/terms/",
    description: "Fair terms with zero hidden telemetry or sale of data",
    icon: FileText,
  },
  {
    title: "Account Deletion Portal",
    href: "/delete-account/",
    description: "Self-serve Google verified deletion with 30-day grace period",
    icon: UserX,
  },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const prevOpenRef = useRef(isMobileMenuOpen);

  const downloadUrl = siteConfig.links?.googlePlay || siteConfig.playStoreUrl;

  // Scroll detection for dynamic frosted glass navbar
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Accessible Body Scroll Lock & Escape Listener
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isMobileMenuOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          setIsMobileMenuOpen(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isMobileMenuOpen]);

  // Focus Restoration to Trigger on Close
  useEffect(() => {
    if (prevOpenRef.current && !isMobileMenuOpen) {
      triggerRef.current?.focus();
    }
    prevOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b border-transparent bg-white/75 backdrop-blur-md",
        {
          "bg-white/90 supports-[backdrop-filter]:bg-white/85 border-zinc-200/90 shadow-2xs":
            scrolled,
        }
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo & Wordmark */}
        <div className="flex items-center gap-7">
          <Link
            href="/"
            className="flex items-center shrink-0 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 rounded-lg p-1"
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

          {/* Desktop & Large Tablet Megamenu (lg:flex) */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {/* Features Trigger */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-zinc-100 text-xs font-semibold text-zinc-700 hover:text-zinc-950">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-1">
                  <div className="w-[520px] rounded-xl border border-zinc-200 bg-white p-3 shadow-xl">
                    <ul className="grid grid-cols-2 gap-2">
                      {FEATURE_LINKS.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="flex flex-row items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
                            >
                              <div className="flex aspect-square size-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50">
                                <item.icon className="h-4 w-4 text-zinc-900" />
                              </div>
                              <div>
                                <span className="block font-semibold text-xs text-zinc-950">
                                  {item.title}
                                </span>
                                <span className="block text-[11px] text-zinc-500 line-clamp-2 mt-0.5 leading-snug">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Trust & Compliance Trigger */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-zinc-100 text-xs font-semibold text-zinc-700 hover:text-zinc-950">
                  Trust &amp; Privacy
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-1">
                  <div className="w-[520px] rounded-xl border border-zinc-200 bg-white p-3 shadow-xl">
                    <ul className="grid grid-cols-2 gap-2">
                      {TRUST_LINKS.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="flex flex-row items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
                            >
                              <div className="flex aspect-square size-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50">
                                <item.icon className="h-4 w-4 text-zinc-900" />
                              </div>
                              <div>
                                <span className="block font-semibold text-xs text-zinc-950">
                                  {item.title}
                                </span>
                                <span className="block text-[11px] text-zinc-500 line-clamp-2 mt-0.5 leading-snug">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Direct Link: How It Works */}
              <NavigationMenuLink asChild>
                <Link
                  href="/#how-it-works"
                  className="rounded-lg px-3 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
                >
                  How It Works
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: CTA Button & Mobile/Tablet Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-xs font-semibold text-white shadow-xs smooth-hover-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
            aria-label="Download Khuraki on Google Play"
          >
            <span>Download App</span>
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20">
              <ArrowUpRight className="h-2.5 w-2.5 text-white" />
            </div>
          </a>

          {/* Hamburger / Close Icon (lg:hidden for seamless mobile and tablet experience) */}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex lg:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-2xs hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <MenuToggleIcon open={isMobileMenuOpen} className="size-5" duration={250} />
          </button>
        </div>
      </div>

      {/* Accessible Mobile & Tablet Portal Drawer */}
      <SiteMobileDrawer
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

interface SiteMobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

function SiteMobileDrawer({ open, onClose }: SiteMobileDrawerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted || typeof window === "undefined") return null;

  return createPortal(
    <div
      id="mobile-navigation-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 top-16 z-40 flex flex-col bg-white/95 backdrop-blur-xl border-t border-zinc-200 lg:hidden overflow-hidden"
    >
      {/* Clickable backdrop */}
      <div
        className="fixed inset-0 -z-10 bg-black/10 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="size-full p-4 sm:p-6 overflow-y-auto max-w-lg mx-auto flex flex-col justify-between gap-6">
        <div className="space-y-5">
          {/* Section: Features */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 px-2 block mb-2">
              Features &amp; Tracking
            </span>
            <div className="space-y-1">
              {FEATURE_LINKS.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onClose}
                  className="flex min-h-[44px] items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
                >
                  <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white">
                    <item.icon className="h-4 w-4 text-zinc-900" />
                  </div>
                  <div>
                    <span className="block font-semibold text-xs text-zinc-950">
                      {item.title}
                    </span>
                    <span className="block text-[11px] text-zinc-500 line-clamp-1">
                      {item.description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Section: Trust & Legal */}
          <div className="border-t border-zinc-100 pt-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 px-2 block mb-2">
              Trust &amp; Privacy
            </span>
            <div className="space-y-1">
              {TRUST_LINKS.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onClose}
                  className="flex min-h-[44px] items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
                >
                  <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white">
                    <item.icon className="h-4 w-4 text-zinc-900" />
                  </div>
                  <div>
                    <span className="block font-semibold text-xs text-zinc-950">
                      {item.title}
                    </span>
                    <span className="block text-[11px] text-zinc-500 line-clamp-1">
                      {item.description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA in Drawer */}
        <div className="border-t border-zinc-100 pt-4">
          <a
            href={siteConfig.links?.googlePlay || siteConfig.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 text-xs font-semibold text-white shadow-xs hover:bg-zinc-800 transition-colors"
          >
            <span>Download on Google Play</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
