import React from "react";

interface BentoCardProps {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  className?: string;
  footerContent?: React.ReactNode;
}

export function BentoCard({
  icon,
  tag,
  title,
  description,
  className = "",
  footerContent,
}: BentoCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0D10] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#121216] ${className}`}
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-[#16171B]">
            {icon}
          </div>
          <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#A1A1AA]">
            {tag}
          </span>
        </div>

        <h3 className="text-lg font-bold tracking-tight text-[#F5F5F5] group-hover:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
          {description}
        </p>
      </div>

      {footerContent && <div className="mt-6 border-t border-white/5 pt-4">{footerContent}</div>}
    </article>
  );
}
