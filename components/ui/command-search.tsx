"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, X, FileText, ArrowUpRight, Shield, Zap, Sparkles, Scale, Lock, HeartPulse } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface SearchItem {
  id: string;
  category: "Navigation" | "Science & Architecture" | "Legal" | "Download";
  title: string;
  subtitle: string;
  href: string;
  isExternal?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const SEARCH_ITEMS: SearchItem[] = [
  {
    id: "features",
    category: "Navigation",
    title: "Core Features",
    subtitle: "Voice logging, camera scan, macro rings and zero hallucinations",
    href: "/#features",
    icon: Sparkles,
  },
  {
    id: "science",
    category: "Science & Architecture",
    title: "Deterministic Math Engine",
    subtitle: "Mifflin-St Jeor & Katch-McArdle metabolic calculations without AI math errors",
    href: "/#features",
    icon: HeartPulse,
  },
  {
    id: "offline",
    category: "Science & Architecture",
    title: "100% Offline-First SQLite",
    subtitle: "Room database local truth with background Cloud Firestore sync",
    href: "/#features",
    icon: Zap,
  },
  {
    id: "calibration",
    category: "Science & Architecture",
    title: "Adaptive Metabolic Calibration",
    subtitle: "14-day rolling expenditure calibration clamped to safe bounds",
    href: "/#features",
    icon: Scale,
  },
  {
    id: "privacy-policy",
    category: "Legal",
    title: "Privacy Policy",
    subtitle: "Zero photo storage, transient vision tokens & 30-day recovery grace period",
    href: "/privacy/",
    icon: Shield,
  },
  {
    id: "terms",
    category: "Legal",
    title: "Terms of Service",
    subtitle: "Service agreements, informational disclaimers and usage terms",
    href: "/terms/",
    icon: FileText,
  },
  {
    id: "delete-account",
    category: "Legal",
    title: "Delete Account Portal",
    subtitle: "In-app and web account deletion request procedures with 30-day grace",
    href: "/delete-account/",
    icon: Lock,
  },
  {
    id: "play-store",
    category: "Download",
    title: "Download on Google Play",
    subtitle: "Official Khuraki Android App on the Google Play Store",
    href: siteConfig.playStoreUrl,
    isExternal: true,
    icon: ArrowUpRight,
  },
];

interface CommandSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandSearch({ isOpen, onClose }: CommandSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  // Filter items
  const filteredItems = useMemo(() => {
    if (!query.trim()) return SEARCH_ITEMS;
    const lower = query.toLowerCase();
    return SEARCH_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        item.subtitle.toLowerCase().includes(lower) ||
        item.category.toLowerCase().includes(lower)
    );
  }, [query]);

  // Reset index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard events inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev <= 0 ? (filteredItems.length || 1) - 1 : prev - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          const item = filteredItems[selectedIndex];
          onClose();
          if (item.isExternal) {
            window.open(item.href, "_blank", "noopener,noreferrer");
          } else {
            router.push(item.href);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose, router]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-zinc-950/40 p-4 pt-20 backdrop-blur-xs sm:p-6 sm:pt-28"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-zinc-100 px-4 py-3">
          <Search className="h-4 w-4 text-zinc-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search features, science, architecture, or legal..."
            className="ml-3 flex-1 bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="rounded p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          <kbd className="ml-2 rounded border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 text-[10px] font-mono text-zinc-500">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-sm text-zinc-500">
              No results found for &ldquo;<span className="font-medium text-zinc-900">{query}</span>&rdquo;
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onClose();
                      if (item.isExternal) {
                        window.open(item.href, "_blank", "noopener,noreferrer");
                      } else {
                        router.push(item.href);
                      }
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                      isSelected
                        ? "bg-zinc-100 text-zinc-900"
                        : "text-zinc-700 hover:bg-zinc-50"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                        isSelected
                          ? "border-amber-500/30 bg-amber-50 text-amber-600"
                          : "border-zinc-200 bg-zinc-50 text-zinc-500"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-zinc-900">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <p className="truncate text-xs text-zinc-500">
                        {item.subtitle}
                      </p>
                    </div>
                    {isSelected && (
                      <span className="text-[11px] font-mono text-zinc-400">
                        ↵
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/70 px-4 py-2 text-[11px] text-zinc-500">
          <div className="flex items-center gap-2">
            <span>Navigate:</span>
            <kbd className="rounded border border-zinc-200 bg-white px-1 font-mono text-[10px]">↑</kbd>
            <kbd className="rounded border border-zinc-200 bg-white px-1 font-mono text-[10px]">↓</kbd>
          </div>
          <div className="flex items-center gap-2">
            <span>Select:</span>
            <kbd className="rounded border border-zinc-200 bg-white px-1.5 font-mono text-[10px]">↵</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
