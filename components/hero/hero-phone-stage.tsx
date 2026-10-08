"use client";

import React from "react";
import Image from "next/image";
import { PhoneCarousel } from "@/components/ui/phone-mockups-1-utils/phone-carousel";
import { AvatarReviewBadge, FeatureChipsBadge } from "@/components/hero/floating-badge";

const HERO_CAROUSEL_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop&q=80",
    alt: "Macro & Calorie Dashboard",
  },
  {
    src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80",
    alt: "Quick AI Vision Meal Scan",
  },
  {
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    alt: "Deterministic Metabolic Engine",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80",
    alt: "Adaptive Energy Expenditure",
  },
];

export function HeroPhoneStage() {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-5xl px-4 sm:px-6">
      {/* 3-Device Staggered Perspective Container */}
      <div className="relative flex items-center justify-center">
        {/* Left Flanking Device (Angled -3 deg, hidden on mobile) */}
        <div className="relative -mr-16 hidden translate-y-12 -rotate-3 scale-95 opacity-85 transition-transform duration-500 hover:rotate-0 hover:scale-100 hover:opacity-100 sm:block lg:-mr-20">
          <div className="relative h-[480px] w-[240px] md:h-[530px] md:w-[260px] overflow-hidden rounded-[38px] border-[5px] border-zinc-900 bg-zinc-950 phone-device-shadow">
            {/* Screen Content Preview */}
            <Image
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80"
              alt="AI Meal Logging Preview"
              fill
              className="object-cover"
              sizes="260px"
              unoptimized
            />
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute bottom-4 left-3 right-3 rounded-xl bg-white/90 p-2.5 backdrop-blur-md">
              <p className="text-[10px] font-bold text-zinc-900">AI Meal Recognition</p>
              <p className="text-[9px] text-zinc-600">Transient vision token parsing</p>
            </div>
          </div>

          {/* Floating Left Stat Badge */}
          <AvatarReviewBadge className="absolute -left-6 top-1/3 z-30 sm:-left-10" />
        </div>

        {/* Center Dominant Device (Interactive Rotating Carousel) */}
        <div className="z-20 w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px]">
          <PhoneCarousel
            images={HERO_CAROUSEL_IMAGES}
            className="py-0"
          />
        </div>

        {/* Right Flanking Device (Angled +3 deg, hidden on mobile) */}
        <div className="relative -ml-16 hidden translate-y-12 rotate-3 scale-95 opacity-85 transition-transform duration-500 hover:rotate-0 hover:scale-100 hover:opacity-100 sm:block lg:-ml-20">
          <div className="relative h-[480px] w-[240px] md:h-[530px] md:w-[260px] overflow-hidden rounded-[38px] border-[5px] border-zinc-900 bg-zinc-950 phone-device-shadow">
            {/* Screen Content Preview */}
            <Image
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80"
              alt="Metabolic Calibration Preview"
              fill
              className="object-cover"
              sizes="260px"
              unoptimized
            />
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute bottom-4 left-3 right-3 rounded-xl bg-white/90 p-2.5 backdrop-blur-md">
              <p className="text-[10px] font-bold text-zinc-900">Adaptive TDEE</p>
              <p className="text-[9px] text-zinc-600">14-day rolling energy calibration</p>
            </div>
          </div>

          {/* Floating Right Feature Chips Badge */}
          <FeatureChipsBadge className="absolute -right-6 top-1/3 z-30 sm:-right-10" />
        </div>
      </div>
    </div>
  );
}
