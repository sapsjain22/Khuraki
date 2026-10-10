"use client";

import React, { useState, useEffect } from "react";
import { LegalPageShell } from "@/components/layout/legal-page-shell";
import { siteConfig } from "@/lib/site-config";
import { auth, db, googleProvider } from "@/lib/firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  deleteField
} from "firebase/firestore";
import {
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  LogOut,
  RefreshCw,
  Send,
  Smartphone,
  ExternalLink,
  Trash2,
  Undo2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface AccountStatusData {
  status: string;
  deletionScheduledAt: number | null;
  deletionRequestedAt: number | null;
  deletionReason?: string | null;
}

export default function DeleteAccountPage() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  const [accountStatus, setAccountStatus] = useState<AccountStatusData | null>(null);
  const [statusLoading, setStatusLoading] = useState(false);

  const [reason, setReason] = useState("");
  const [confirmedCheck, setConfirmedCheck] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [actionSuccessMessage, setActionSuccessMessage] = useState<string | null>(null);

  // Manual fallback form state
  const [manualEmail, setManualEmail] = useState("");
  const [manualReason, setManualReason] = useState("");
  const [manualSubmitted, setManualSubmitted] = useState(false);

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setAuthLoading(false);
      setAuthError(null);
      setActionSuccessMessage(null);

      if (user) {
        await fetchAccountStatus(user.uid);
      } else {
        setAccountStatus(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchAccountStatus = async (uid: string) => {
    setStatusLoading(true);
    try {
      const userDocRef = doc(db, "users", uid);
      const snapshot = await getDoc(userDocRef);

      if (snapshot.exists()) {
        const data = snapshot.data();
        setAccountStatus({
          status: data.accountStatus || "ACTIVE",
          deletionScheduledAt: typeof data.deletionScheduledAt === "number" ? data.deletionScheduledAt : null,
          deletionRequestedAt: typeof data.deletionRequestedAt === "number" ? data.deletionRequestedAt : null,
          deletionReason: data.deletionReason || null
        });
      } else {
        setAccountStatus({
          status: "ACTIVE",
          deletionScheduledAt: null,
          deletionRequestedAt: null
        });
      }
    } catch (err: unknown) {
      console.error("Error reading account status:", err);
      // Non-fatal: if doc doesn't exist yet, consider ACTIVE
      setAccountStatus({
        status: "ACTIVE",
        deletionScheduledAt: null,
        deletionRequestedAt: null
      });
    } finally {
      setStatusLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setAuthLoading(true);
    setAuthError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: unknown) {
      const errorObj = err as { code?: string; message?: string };
      console.error("Google sign-in error:", errorObj);
      if (errorObj.code === "auth/popup-closed-by-user") {
        setAuthError("Sign-in window closed before verification was complete.");
      } else if (errorObj.code === "auth/popup-blocked") {
        setAuthError("Popup blocked by browser. Please allow popups for khuraki.com to verify your account.");
      } else {
        setAuthError(errorObj.message || "Failed to sign in with Google. Please retry.");
      }
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    setActionLoading(true);
    try {
      await signOut(auth);
      setCurrentUser(null);
      setAccountStatus(null);
      setConfirmedCheck(false);
      setReason("");
      setActionSuccessMessage(null);
    } catch (err) {
      console.error("Sign-out error:", err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleScheduleDeletion = async () => {
    if (!currentUser || !confirmedCheck) return;
    setActionLoading(true);
    setAuthError(null);

    try {
      const now = Date.now();
      const GRACE_PERIOD_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
      const scheduledAt = now + GRACE_PERIOD_MS;

      const userDocRef = doc(db, "users", currentUser.uid);
      await setDoc(
        userDocRef,
        {
          accountStatus: "PENDING_DELETION",
          deletionRequestedAt: serverTimestamp(),
          deletionScheduledAt: scheduledAt,
          deletionReason: reason.trim() || null
        },
        { merge: true }
      );

      setAccountStatus({
        status: "PENDING_DELETION",
        deletionScheduledAt: scheduledAt,
        deletionRequestedAt: now,
        deletionReason: reason.trim() || null
      });

      setActionSuccessMessage(
        "Your account deletion request has been verified and scheduled. Your 30-day recovery grace period is now active."
      );
    } catch (err: unknown) {
      const errorObj = err as { message?: string };
      console.error("Failed to schedule deletion:", errorObj);
      setAuthError(errorObj.message || "Failed to schedule account deletion. Please try again or contact support.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleCancelDeletion = async () => {
    if (!currentUser) return;
    setActionLoading(true);
    setAuthError(null);

    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(userDocRef, {
        accountStatus: "ACTIVE",
        deletionScheduledAt: deleteField(),
        deletionRequestedAt: deleteField(),
        deletionReason: deleteField(),
        restoredAt: serverTimestamp()
      });

      setAccountStatus({
        status: "ACTIVE",
        deletionScheduledAt: null,
        deletionRequestedAt: null
      });

      setActionSuccessMessage(
        "Account deletion cancelled. Your Khuraki account and all cloud data have been restored to ACTIVE status."
      );
    } catch (err: unknown) {
      const errorObj = err as { message?: string };
      console.error("Failed to cancel deletion:", errorObj);
      setAuthError(errorObj.message || "Failed to restore account. Please try again or contact support.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualEmail.trim()) return;

    const subject = encodeURIComponent(`Khuraki Manual Deletion Request: ${manualEmail.trim()}`);
    const body = encodeURIComponent(
      `Hello Khuraki Support,\n\nI am requesting permanent deletion of my Khuraki account and associated data.\n\nRegistered Google Email: ${manualEmail.trim()}\nReason: ${
        manualReason.trim() || "Not specified"
      }\n\nI am submitting this manual request because I am unable to authenticate through the automated portal or mobile app. Please verify my ownership and schedule deletion under the 30-day policy.\n\nThank you.`
    );
    window.location.href = `mailto:${siteConfig.supportEmail}?subject=${subject}&body=${body}`;
    setManualSubmitted(true);
  };

  const getDaysRemaining = (scheduledAt: number | null): number => {
    if (!scheduledAt) return 30;
    const diff = scheduledAt - Date.now();
    if (diff <= 0) return 0;
    return Math.ceil(diff / (24 * 60 * 60 * 1000));
  };

  return (
    <LegalPageShell
      title="Request Account & Data Deletion"
      effectiveDate="October 2026"
    >
      <section>
        <h2>Google Play Compliance &amp; Account Control</h2>
        <p>
          In accordance with Google Play Store User Data policies and statutory privacy regulations (including India DPDP Act 2023, EU GDPR, and US COPPA), you have full autonomy to request the permanent deletion of your Khuraki account and all associated personal records.
        </p>
        <p>
          To safeguard your records against unauthorized tampering or malicious deletion requests, web-initiated deletions require Google identity verification.
        </p>
      </section>

      {/* Primary Method: Verified Web Self-Serve Portal */}
      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs not-prose">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-base font-bold text-zinc-950">
              Verified Web Deletion Portal
            </h3>
          </div>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold text-zinc-600">
            Instant Google Verification
          </span>
        </div>

        {authError && (
          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-800">
            <AlertTriangle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
            <div>
              <p className="font-semibold">Verification Error</p>
              <p className="mt-0.5 text-red-700">{authError}</p>
            </div>
          </div>
        )}

        {actionSuccessMessage && (
          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs text-emerald-900">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
            <div>
              <p className="font-semibold">Action Confirmed</p>
              <p className="mt-0.5 text-emerald-800">{actionSuccessMessage}</p>
            </div>
          </div>
        )}

        {/* State 1: Unauthenticated */}
        {!currentUser && !authLoading && (
          <div className="mt-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600">
              <ShieldAlert className="h-6 w-6 text-zinc-800" />
            </div>
            <h4 className="mt-3 text-base font-bold text-zinc-950">
              Verify Account Ownership
            </h4>
            <p className="mx-auto mt-1 max-w-md text-xs text-zinc-600 leading-relaxed">
              Sign in with your registered Google account to securely verify your identity before scheduling account deletion.
            </p>

            <button
              onClick={handleGoogleSignIn}
              className="mt-5 inline-flex items-center gap-3 rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 shadow-2xs hover:bg-zinc-50 hover:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Verify with Google</span>
            </button>
          </div>
        )}

        {/* State 2: Authenticated Loading */}
        {currentUser && statusLoading && (
          <div className="mt-6 flex flex-col items-center justify-center py-8">
            <RefreshCw className="h-6 w-6 text-zinc-500 animate-spin" />
            <p className="mt-2 text-xs text-zinc-500 font-medium">Checking cloud account status...</p>
          </div>
        )}

        {/* State 3: Authenticated and Ready */}
        {currentUser && !statusLoading && accountStatus && (
          <div className="mt-6 space-y-6">
            {/* User Identity Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-zinc-50/70 p-4">
              <div className="flex items-center gap-3">
                {currentUser.photoURL ? (
                  <Image
                    src={currentUser.photoURL}
                    alt={currentUser.displayName || "User"}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border border-zinc-200"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-sm font-bold text-white">
                    {(currentUser.displayName || currentUser.email || "U")[0].toUpperCase()}
                  </div>
                )}
                <div>
                  <p className="text-sm font-bold text-zinc-900">
                    {currentUser.displayName || "Khuraki User"}
                  </p>
                  <p className="text-xs text-zinc-500 font-mono">
                    {currentUser.email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleSignOut}
                disabled={actionLoading}
                className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Switch Account / Sign Out</span>
              </button>
            </div>

            {/* Sub-State A: Account already in PENDING_DELETION */}
            {accountStatus.status === "PENDING_DELETION" ? (
              <div className="rounded-xl border border-amber-300 bg-amber-50/60 p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-amber-950">
                      Account Deletion Scheduled (Grace Period Active)
                    </h4>
                    <p className="mt-1 text-xs text-amber-900 leading-relaxed">
                      This account is currently in the 30-day recovery grace period. Cloud data is safely dormant and scheduled for permanent purge.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white/80 rounded-lg p-3 border border-amber-200">
                  <div>
                    <span className="text-zinc-500 block">Days Remaining:</span>
                    <strong className="text-zinc-950 text-base">
                      {getDaysRemaining(accountStatus.deletionScheduledAt)} days
                    </strong>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Scheduled Purge Date:</span>
                    <strong className="text-zinc-950">
                      {accountStatus.deletionScheduledAt
                        ? new Date(accountStatus.deletionScheduledAt).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })
                        : "Within 30 days"}
                    </strong>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleCancelDeletion}
                    disabled={actionLoading}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-2xs hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                  >
                    <Undo2 className="h-4 w-4" />
                    <span>Cancel Deletion &amp; Restore Account</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Sub-State B: Account is ACTIVE - Show Deletion Form */
              <div className="space-y-4">
                <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 text-xs text-red-900">
                  <div className="flex items-start gap-2.5">
                    <Trash2 className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-bold text-red-950">
                        What will be deleted:
                      </p>
                      <ul className="mt-1 list-disc list-inside space-y-0.5 text-red-800">
                        <li>Your user profile, biometrics, and adaptive calorie targets.</li>
                        <li>All logged meals, custom food items, and nutrition history.</li>
                        <li>Daily weight log history and smoothed trend calibrations.</li>
                        <li>Workout templates, logged sets, repetitions, and weights.</li>
                        <li>Cloudflare D1 daily point allowances and referral links.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Reason (Optional) */}
                <div>
                  <label
                    htmlFor="web-reason"
                    className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider"
                  >
                    Reason for Deletion (Optional)
                  </label>
                  <textarea
                    id="web-reason"
                    rows={2}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Tell us what didn't work for you or how we could improve..."
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs text-zinc-950 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 shadow-2xs"
                  />
                </div>

                {/* Confirmation Checkbox */}
                <div className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3.5">
                  <input
                    id="confirm-delete-check"
                    type="checkbox"
                    checked={confirmedCheck}
                    onChange={(e) => setConfirmedCheck(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-red-600 focus:ring-red-500"
                  />
                  <label
                    htmlFor="confirm-delete-check"
                    className="text-xs text-zinc-700 leading-relaxed cursor-pointer"
                  >
                    I understand that scheduling account deletion initiates a <strong>30-day recovery grace period</strong>. During these 30 days, my account is dormant and restorable. If not restored, all cloud data and my Google authentication record will be permanently purged on day 31.
                  </label>
                </div>

                {/* Submit Deletion Action */}
                <button
                  onClick={handleScheduleDeletion}
                  disabled={!confirmedCheck || actionLoading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {actionLoading ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span>Scheduling Deletion...</span>
                    </>
                  ) : (
                    <>
                      <Trash2 className="h-4 w-4" />
                      <span>Confirm &amp; Schedule Account Deletion</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Alternative Method 1: In-App Deletion */}
      <section className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 not-prose">
        <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
          <Smartphone className="h-4 w-4" />
          <span>Alternative Method</span>
          <span className="text-zinc-400">·</span>
          <span className="text-xs text-zinc-500 font-normal">Fastest on Android Device</span>
        </div>
        <h3 className="mt-2 text-lg font-bold text-zinc-950">
          Delete Directly Within the Khuraki App
        </h3>
        <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
          If you currently have the Khuraki app installed, you can schedule account deletion directly on your device with biometric or Google confirmation:
        </p>
        <ol className="mt-3 list-decimal list-inside space-y-1.5 text-xs text-zinc-600">
          <li>Open the Khuraki app on your Android device.</li>
          <li>Navigate to <strong className="text-zinc-900">Profile &rarr; Settings</strong>.</li>
          <li>Tap your Profile Card to open <strong className="text-zinc-900">Account Settings</strong>.</li>
          <li>Select <strong className="text-red-600">Delete Account &amp; Data</strong>.</li>
          <li>Confirm with Google account authentication.</li>
        </ol>
        <div className="mt-4 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500">
          <span>Need to export your records first?</span>
          <span className="font-semibold text-zinc-700">App: Profile &rarr; Settings &rarr; Download My Data</span>
        </div>
      </section>

      {/* Alternative Method 2: Manual Support Ticket Fallback */}
      <section className="mt-8 not-prose">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs">
          <h3 className="text-base font-bold text-zinc-950">
            Manual Support Deletion Request (Offline Fallback)
          </h3>
          <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
            If you have uninstalled the app and are unable to authenticate with Google via the web portal above, you may submit a manual deletion ticket. Our privacy desk will verify ownership before scheduling deletion:
          </p>

          {manualSubmitted ? (
            <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center">
              <CheckCircle2 className="mx-auto h-7 w-7 text-emerald-600" />
              <h4 className="mt-2 text-sm font-bold text-emerald-900">
                Support Email Dispatched
              </h4>
              <p className="mt-1 text-xs text-zinc-600">
                Your email client was opened with your pre-formatted deletion ticket. Once sent, our team will verify your ownership and schedule the deletion under our 30-day policy.
              </p>
            </div>
          ) : (
            <form onSubmit={handleManualSubmit} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="manual-email"
                  className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider"
                >
                  Registered Google Account Email
                </label>
                <input
                  id="manual-email"
                  type="email"
                  required
                  value={manualEmail}
                  onChange={(e) => setManualEmail(e.target.value)}
                  placeholder="you@gmail.com"
                  className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs text-zinc-950 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 shadow-2xs"
                />
              </div>

              <div>
                <label
                  htmlFor="manual-reason"
                  className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider"
                >
                  Reason for Leaving (Optional)
                </label>
                <textarea
                  id="manual-reason"
                  rows={2}
                  value={manualReason}
                  onChange={(e) => setManualReason(e.target.value)}
                  placeholder="Tell us what didn't work for you..."
                  className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs text-zinc-950 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 shadow-2xs"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold text-zinc-800 shadow-2xs hover:bg-zinc-50 transition-colors"
              >
                <Send className="h-3.5 w-3.5 text-zinc-600" />
                <span>Open Email Ticket with Support</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Policy References */}
      <section className="mt-8 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
        <p>
          For comprehensive details on automated 30-day cloud purges, operational D1 telemetry limits, and your statutory privacy rights, review our full{" "}
          <Link href="/privacy/" className="text-amber-700 font-medium underline inline-flex items-center gap-1">
            Privacy Policy <ExternalLink className="h-3 w-3 inline" />
          </Link>{" "}
          and{" "}
          <Link href="/terms/" className="text-amber-700 font-medium underline inline-flex items-center gap-1">
            Terms of Service <ExternalLink className="h-3 w-3 inline" />
          </Link>.
        </p>
      </section>
    </LegalPageShell>
  );
}
