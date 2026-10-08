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
          className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-950"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12 border-b border-zinc-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
          Legal &amp; Compliance
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-xs text-zinc-500 font-mono">
          Last updated: {effectiveDate}
        </p>
      </header>

      {/* Legal Prose Content */}
      <article className="max-w-none space-y-8 text-sm leading-relaxed text-zinc-600 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-zinc-950 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-zinc-950 [&_strong]:text-zinc-900 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-amber-600 [&_a]:underline hover:[&_a]:text-amber-700">
        {children}
      </article>
    </main>
  );
}
