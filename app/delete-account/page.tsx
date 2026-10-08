"use client";

import React, { useState } from "react";
import { LegalPageShell } from "@/components/layout/legal-page-shell";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle2, AlertTriangle, Send } from "lucide-react";
import Link from "next/link";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Build mailto fallback to initiate formal remote deletion ticket
    const subject = encodeURIComponent(`Khuraki Account Deletion Request: ${email}`);
    const body = encodeURIComponent(
      `Hello Khuraki Support,\n\nPlease schedule permanent deletion of my Khuraki account associated with:\nGoogle Account Email: ${email}\nReason: ${
        reason || "Not specified"
      }\n\nI understand that upon confirmation, my account enters the 30-day scheduled grace period and will be permanently purged after 30 days.\n\nThank you.`
    );
    window.location.href = `mailto:${siteConfig.supportEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <LegalPageShell
      title="Request Account & Data Deletion"
      effectiveDate="October 2026"
    >
      <section>
        <h2>Google Play Compliance &amp; Deletion Process</h2>
        <p>
          In accordance with Google Play Store data safety requirements, you have the right to delete your Khuraki account and all associated fitness, nutrition, and telemetry data.
        </p>
      </section>

      {/* Option 1: Fast In-App Self-Serve Flow */}
      <section className="rounded-2xl border border-white/10 bg-[#0D0D10] p-6 not-prose">
        <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
          <span>Recommended Method</span>
          <span className="text-zinc-600">·</span>
          <span className="text-xs text-zinc-400 font-normal">Instant Self-Serve</span>
        </div>
        <h3 className="mt-2 text-lg font-bold text-[#F5F5F5]">
          Delete Directly Within the Khuraki App
        </h3>
        <p className="mt-1 text-xs text-[#A1A1AA] leading-relaxed">
          The fastest and safest way to delete your account is through the Android app:
        </p>
        <ol className="mt-3 list-decimal list-inside space-y-1 text-xs text-[#A1A1AA]">
          <li>Open the Khuraki app on your Android device.</li>
          <li>Navigate to <strong className="text-zinc-200">Profile &rarr; Settings</strong>.</li>
          <li>Tap your Profile Card to open <strong className="text-zinc-200">Account Settings</strong>.</li>
          <li>Select <strong className="text-rose-400">Delete Account &amp; Data</strong>.</li>
          <li>Verify your Google identity and confirm deletion.</li>
        </ol>
      </section>

      {/* Option 2: Web Deletion Request Form */}
      <section className="mt-8 not-prose">
        <h3 className="text-lg font-bold text-[#F5F5F5]">
          Web-Based Deletion Request Form
        </h3>
        <p className="mt-1 text-xs text-[#A1A1AA]">
          If you have uninstalled the app or lost access to your device, submit your registered Google account email below to dispatch a deletion request to our support team:
        </p>

        {submitted ? (
          <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6 text-center">
            <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-400" />
            <h4 className="mt-3 text-base font-bold text-emerald-400">
              Request Email Dispatched
            </h4>
            <p className="mt-1 text-xs text-zinc-400">
              Your default email client has been opened with your pre-formatted deletion request. Once sent, our team will verify your ownership and initiate the 30-day deletion schedule.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-zinc-400 uppercase tracking-wider"
              >
                Registered Google Account Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@gmail.com"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#16171B] px-4 py-3 text-sm text-[#F5F5F5] placeholder-zinc-600 focus:border-amber-500/60 focus:outline-none focus:ring-1 focus:ring-amber-500/60"
              />
            </div>

            <div>
              <label
                htmlFor="reason"
                className="block text-xs font-medium text-zinc-400 uppercase tracking-wider"
              >
                Reason for Leaving (Optional)
              </label>
              <textarea
                id="reason"
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Help us understand how we could improve..."
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#16171B] px-4 py-3 text-sm text-[#F5F5F5] placeholder-zinc-600 focus:border-amber-500/60 focus:outline-none focus:ring-1 focus:ring-amber-500/60"
              />
            </div>

            {/* Grace Window Notice */}
            <div className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-950/20 p-4 text-xs text-amber-300">
              <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
              <p>
                <strong>30-Day Recovery Notice:</strong> Upon request verification, your account enters a 30-day scheduled grace period. You may cancel deletion simply by logging back in within 30 days. If you do not log in, your cloud records and Firebase account will be permanently purged on day 31.
              </p>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/40 bg-red-950/30 px-5 py-3 text-sm font-bold text-red-300 transition-colors hover:bg-red-900/40 focus:outline-none focus:ring-2 focus:ring-red-500/50"
            >
              <Send className="h-4 w-4" />
              <span>Submit Account Deletion Request</span>
            </button>
          </form>
        )}
      </section>

      <section className="mt-8 border-t border-white/5 pt-6 text-xs text-zinc-500">
        <p>
          For more details on data retention and operational telemetry cleanup, review our full{" "}
          <Link href="/privacy/">Privacy Policy</Link>.
        </p>
      </section>
    </LegalPageShell>
  );
}
