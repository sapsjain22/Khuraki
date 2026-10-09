import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

export const metadata: Metadata = {
  title: "Cinematic Experience — Khuraki",
  description:
    "An interactive 3D cinematic exploration of Khuraki's deterministic nutrition engine.",
};

export default function CinematicPage() {
  return (
    <div className="relative min-h-screen w-full bg-white text-zinc-950">
      {/* Floating Back Navigation Pill */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/90 px-4 py-2 text-xs font-semibold text-zinc-800 shadow-md backdrop-blur-md transition-all hover:bg-zinc-100 hover:text-zinc-950 active:scale-95"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Khuraki</span>
        </Link>
      </div>

      {/* Cinematic Hero Component */}
      <CinematicHero />
    </div>
  );
}
