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
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs transition-all duration-200 hover:border-zinc-300 hover:shadow-xs ${className}`}
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50">
            {icon}
          </div>
          <span className="rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-600">
            {tag}
          </span>
        </div>

        <h3 className="text-lg font-bold tracking-tight text-zinc-950">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {description}
        </p>
      </div>

      {footerContent && <div className="mt-6 border-t border-zinc-100 pt-4">{footerContent}</div>}
    </article>
  );
}
