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
      <section className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 not-prose">
        <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
          <span>Recommended Method</span>
          <span className="text-zinc-400">·</span>
          <span className="text-xs text-zinc-500 font-normal">Instant Self-Serve</span>
        </div>
        <h3 className="mt-2 text-lg font-bold text-zinc-950">
          Delete Directly Within the Khuraki App
        </h3>
        <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
          The fastest and safest way to delete your account is through the Android app:
        </p>
        <ol className="mt-3 list-decimal list-inside space-y-1.5 text-xs text-zinc-600">
          <li>Open the Khuraki app on your Android device.</li>
          <li>Navigate to <strong className="text-zinc-900">Profile &rarr; Settings</strong>.</li>
          <li>Tap your Profile Card to open <strong className="text-zinc-900">Account Settings</strong>.</li>
          <li>Select <strong className="text-red-600">Delete Account &amp; Data</strong>.</li>
          <li>Verify your Google identity and confirm deletion.</li>
        </ol>
      </section>

      {/* Option 2: Web Deletion Request Form */}
      <section className="mt-8 not-prose">
        <h3 className="text-lg font-bold text-zinc-950">
          Web-Based Deletion Request Form
        </h3>
        <p className="mt-1 text-xs text-zinc-600">
          If you have uninstalled the app or lost access to your device, submit your registered Google account email below to dispatch a deletion request to our support team:
        </p>

        {submitted ? (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
            <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" />
            <h4 className="mt-3 text-base font-bold text-emerald-800">
              Request Email Dispatched
            </h4>
            <p className="mt-1 text-xs text-zinc-600">
              Your default email client has been opened with your pre-formatted deletion request. Once sent, our team will verify your ownership and initiate the 30-day deletion schedule.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider"
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
                className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-950 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 shadow-2xs"
              />
            </div>

            <div>
              <label
                htmlFor="reason"
                className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider"
              >
                Reason for Leaving (Optional)
              </label>
              <textarea
                id="reason"
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Help us understand how we could improve..."
                className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-950 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 shadow-2xs"
              />
            </div>

            {/* Grace Window Notice */}
            <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
              <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
              <p>
                <strong>30-Day Recovery Notice:</strong> Upon request verification, your account enters a 30-day scheduled grace period. You may cancel deletion simply by logging back in within 30 days. If you do not log in, your cloud records and Firebase account will be permanently purged on day 31.
              </p>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <Send className="h-4 w-4" />
              <span>Submit Account Deletion Request</span>
            </button>
          </form>
        )}
      </section>

      <section className="mt-8 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
        <p>
          For more details on data retention and operational telemetry cleanup, review our full{" "}
          <Link href="/privacy/" className="text-amber-700 font-medium underline">
            Privacy Policy
          </Link>.
        </p>
      </section>
    </LegalPageShell>
  );
}
