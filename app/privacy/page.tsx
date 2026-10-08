import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/legal-page-shell";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Khuraki handles account, nutrition, training, telemetry, and 30-day account deletion grace windows.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      effectiveDate="October 2026"
    >
      <section>
        <h2>1. Overview &amp; Publisher Identity</h2>
        <p>
          Khuraki is published by {siteConfig.publisher}. We believe privacy is an architectural invariant, not an afterthought. This Privacy Policy discloses how data is collected, handled, and purged across the Khuraki Android application and the {siteConfig.name} website (<Link href="/">{siteConfig.url}</Link>).
        </p>
        <p>
          For any privacy questions or rights requests, contact our dedicated privacy officer at{" "}
          <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>.
        </p>
      </section>

      <section>
        <h2>2. Information You Provide &amp; Storage Locations</h2>
        <ul>
          <li>
            <strong>Account Details:</strong> When you sign in with Google, Firebase Authentication receives your verified Google credential to authenticate your identity. We do not store or manage your Google password.
          </li>
          <li>
            <strong>Health &amp; Nutritional Baseline:</strong> Age, biological sex, height, weight, activity level, dietary preferences, and fitness goals entered during onboarding.
          </li>
          <li>
            <strong>Diary Records:</strong> Logged meals, macro distributions, hydration entries, workout completions, and daily weigh-in records.
          </li>
          <li>
            <strong>Storage Architecture:</strong> Your diary lives first on your physical device in an encrypted Room SQLite database. If signed in, records synchronize to Cloud Firestore for cross-device consistency and backup.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Transient AI Food Photo Scanning &amp; Image Privacy</h2>
        <p>
          When you use the AI photo scanner, the image is compressed on-device and forwarded over an encrypted TLS connection through Khuraki’s Cloudflare API to OpenAI solely to return estimated nutritional constituents.
        </p>
        <p>
          <strong>Khuraki never stores your meal photos</strong> in application databases, diaries, or server storage. Images are processed transiently and discarded immediately after inference. Khuraki does not use your food images to train machine learning models.
        </p>
      </section>

      <section>
        <h2>4. Operational Telemetry &amp; Cost Safeguards</h2>
        <p>
          To prevent service abuse, enforce daily rate limits, and maintain API reliability, Khuraki logs anonymized request metadata in a secure Cloudflare D1 database.
        </p>
        <p>
          These logs contain <em>only</em> technical attributes: Firebase UID, timestamp, token counts, model name, response latency, and HTTP status code. <strong>Operational logs never contain meal text prompts, model response text, or user imagery.</strong> Telemetry records are automatically deleted after 90 days.
        </p>
      </section>

      <section>
        <h2>5. 30-Day Account Deletion Grace Window</h2>
        <p>
          Khuraki provides a complete, self-serve account deletion pipeline with a protective 30-day recovery window:
        </p>
        <ul>
          <li>
            <strong>Initiating Deletion:</strong> You can schedule deletion directly within the Android app under <em>Profile &rarr; Settings &rarr; Account &rarr; Delete Account &amp; Data</em> (requiring fresh Google re-authentication), or externally via our <Link href="/delete-account/">Account Deletion Portal</Link>.
          </li>
          <li>
            <strong>Immediate Local Wipe:</strong> Upon confirmation, all local Room database tables, cached session data, and SharedPreferences on your Android device are purged immediately.
          </li>
          <li>
            <strong>30-Day Grace Period:</strong> Cloud records in Firestore are marked <code>PENDING_DELETION</code> for exactly 30 days. If you sign back into Khuraki within this 30-day window, you can restore your account with one tap and sync back your cloud data.
          </li>
          <li>
            <strong>Automated Nightly Purge:</strong> If no login occurs within 30 days, an automated nightly worker permanently deletes your Firestore documents, subcollections, and Firebase Authentication user record forever.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Third-Party Services</h2>
        <p>Khuraki uses the following trusted infrastructure providers:</p>
        <ul>
          <li><strong>Google Firebase:</strong> User authentication and cloud database sync.</li>
          <li><strong>Cloudflare:</strong> Static edge hosting, API proxy routing, and DDoS protection.</li>
          <li><strong>OpenAI:</strong> Transient nutritional inference for camera and text food logs.</li>
        </ul>
      </section>
    </LegalPageShell>
  );
}
