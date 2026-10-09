"use client";

import React, { useRef, useState } from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

export const bentoCardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 24,
      stiffness: 180,
    },
  },
};

interface BentoCardProps {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  className?: string;
  visualContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  children?: React.ReactNode;
}

export function BentoCard({
  icon,
  tag,
  title,
  description,
  className = "",
  visualContent,
  footerContent,
  children,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  return (
    <motion.article
      ref={cardRef}
      variants={bentoCardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/85 bg-white p-6 sm:p-7 shadow-2xs smooth-hover-card",
        className
      )}
    >
      {/* Interactive Pointer-Tracking Spotlight Radial Overlay */}
      {mousePosition && (
        <div
          className="pointer-events-none absolute inset-0 -z-0 transition-opacity duration-500 ease-out opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.05), rgba(224, 231, 255, 0.04), transparent 80%)`,
          }}
        />
      )}

      {/* Top Header Row */}
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 shadow-2xs transition-colors duration-500 ease-out group-hover:border-zinc-300 group-hover:bg-white">
            {icon}
          </div>
          <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-600 transition-colors duration-500 ease-out group-hover:border-zinc-300 group-hover:bg-zinc-100">
            {tag}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950">
          {title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600">
          {description}
        </p>

        {/* Custom Rich Visual Content Widget */}
        {visualContent && <div className="mt-5">{visualContent}</div>}
        {children}
      </div>

      {/* Footer Content */}
      {footerContent && (
        <div className="relative z-10 mt-6 border-t border-zinc-100 pt-4">
          {footerContent}
        </div>
      )}
    </motion.article>
  );
}
