import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/legal-page-shell";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service and medical/metabolic disclaimers for Khuraki.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalPageShell
      title="Terms of Service"
      effectiveDate="October 2026"
    >
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, or accessing the Khuraki Android application or the website at{" "}
          <Link href="/">{siteConfig.url}</Link>, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the application.
        </p>
      </section>

      <section>
        <h2>2. Medical &amp; Nutritional Disclaimers</h2>
        <p>
          <strong>Khuraki is not a medical organization or clinical healthcare provider.</strong> The calculations, caloric targets, macro recommendations, and workout routines provided within Khuraki are educational estimates calculated using standard formulas (including Mifflin-St Jeor and Katch-McArdle) and artificial intelligence models.
        </p>
        <p>
          These estimates are not intended to diagnose, treat, prevent, or cure any medical disease or eating disorder. You should always consult with a licensed physician, clinical dietitian, or healthcare professional before making substantial changes to your diet, fasting regimen, or exercise routine.
        </p>
      </section>

      <section>
        <h2>3. Accuracy of Nutritional Estimates</h2>
        <p>
          Nutritional figures for parsed meals and AI camera food scans are approximations. Food preparation methods, oil absorption, portion volumes, and brand variations can cause actual nutritional values to differ from calculated estimates. Khuraki does not guarantee absolute mathematical accuracy of food caloric values.
        </p>
      </section>

      <section>
        <h2>4. Account Responsibilities &amp; Termination</h2>
        <p>
          You are responsible for maintaining the confidentiality of your Google Authentication credentials. You may terminate your account at any time via the in-app deletion settings or through our{" "}
          <Link href="/delete-account/">Account Deletion Portal</Link>, which initiates our 30-day scheduled grace period as described in our{" "}
          <Link href="/privacy/">Privacy Policy</Link>.
        </p>
      </section>

      <section>
        <h2>5. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, {siteConfig.publisher} and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of, or inability to use, the application.
        </p>
      </section>
    </LegalPageShell>
  );
}
