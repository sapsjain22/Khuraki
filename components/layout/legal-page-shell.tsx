import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalPageShellProps {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}

export function LegalPageShell({
  title,
  effectiveDate,
  children,
}: LegalPageShellProps) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12 border-b border-white/[0.08] pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
          Legal &amp; Compliance
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#F5F5F5] sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-xs text-zinc-500 font-mono">
          Last updated: {effectiveDate}
        </p>
      </header>

      {/* Legal Prose Content */}
      <article className="prose prose-invert max-w-none space-y-8 text-sm leading-relaxed text-[#A1A1AA] [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[#F5F5F5] [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[#F5F5F5] [&_strong]:text-[#F5F5F5] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-amber-400 [&_a]:underline hover:[&_a]:text-amber-300">
        {children}
      </article>
    </main>
  );
}
