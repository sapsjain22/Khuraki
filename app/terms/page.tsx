import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/legal-page-shell";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Comprehensive Terms of Service for Khuraki setting forth non-medical disclaimers, usage allowances, data ownership, account lifecycle, and legal rights.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalPageShell
      title="Terms of Service"
      effectiveDate="October 2026"
    >
      {/* 1. Acceptance of Terms */}
      <section>
        <h2>1. Agreement to Terms &amp; Contracting Identity</h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you and <strong>{siteConfig.publisher}</strong>, an independent software developer publishing under the brand name <strong>{siteConfig.publisherBrand}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
        </p>
        <p>
          These Terms govern your access to and use of the Khuraki Android mobile application and the companion website at <Link href="/">{siteConfig.url}</Link> (collectively, the &ldquo;Service&rdquo;). By downloading, installing, accessing, or using the Service, you signify that you have read, understood, and agreed to be bound by these Terms and our companion <Link href="/privacy/">Privacy Policy</Link>. If you do not agree with these Terms, you must discontinue using the Service immediately.
        </p>
      </section>

      {/* 2. Eligibility & Age Requirements */}
      <section>
        <h2>2. Eligibility &amp; Statutory Age Requirements</h2>
        <p>
          Khuraki is designed and provided for adult fitness, nutrition tracking, and metabolic awareness.
        </p>
        <ul>
          <li>
            <strong>Adult Baseline (18+):</strong> You represent and warrant that you are at least 18 years of age (the age of majority under Indian law and standard civil frameworks).
          </li>
          <li>
            <strong>Permissible Minors (Ages 13 to 17):</strong> In jurisdictions where applicable law permits digital service access between ages 13 and 17 with parental consent, you may access the Service only if your lawful parent or legal guardian has reviewed and agreed to these Terms on your behalf prior to use.
          </li>
          <li>
            <strong>Under 13 Prohibition:</strong> The Service is not intended for, marketed to, or permitted for use by individuals under the age of 13 under any circumstances.
          </li>
        </ul>
      </section>

      {/* 3. Non-Medical Fitness & Health Disclaimers */}
      <section>
        <h2>3. Non-Medical Fitness &amp; Metabolic Disclaimers</h2>
        <p>
          <strong>Khuraki is not a healthcare organization, hospital, clinical practice, or medical device.</strong> The Service does not provide medical advice, clinical diagnoses, medical nutrition therapy, or treatment for any physical or psychological condition.
        </p>
        <ul>
          <li>
            <strong>Heuristic Approximations:</strong> All calculations—including Basal Metabolic Rate (BMR), Total Daily Energy Expenditure (TDEE), macronutrient breakdowns, and metabolic calibration adjustments—are statistical estimates derived from scientific formulas (such as the Mifflin-St Jeor equation) and computational heuristics. They are not clinical prescriptions.
          </li>
          <li>
            <strong>User Duty of Care:</strong> You are responsible for your own physical health and safety. Always consult a licensed medical doctor, clinical dietitian, or certified fitness professional before beginning any restrictive caloric deficit, significant dietary alteration, or strenuous resistance training program.
          </li>
          <li>
            <strong>Immediate Cessation for Adverse Symptoms:</strong> If you experience dizziness, lightheadedness, faintness, chest pain, nausea, shortness of breath, joint pain, or any physical distress while exercising or following dietary targets, you must immediately cease physical activity and consult qualified emergency healthcare providers.
          </li>
          <li>
            <strong>Pre-Existing Conditions:</strong> If you are pregnant, nursing, have a history of eating disorders, or manage chronic health conditions (including cardiovascular disorders, diabetes, or renal disease), you must not rely on Khuraki without explicit supervision from your treating physician.
          </li>
        </ul>
      </section>

      {/* 4. AI-Generated Features & Estimation Limitations */}
      <section>
        <h2>4. Artificial Intelligence Features &amp; Estimation Accuracy</h2>
        <p>
          Khuraki incorporates artificial intelligence features (powered by commercial OpenAI models, such as <code>gpt-4o-mini</code>, accessed via encrypted Cloudflare Edge proxies) to parse food descriptions, estimate nutrition from photos, structure workout routines, and summarize metabolic trends.
        </p>
        <ul>
          <li>
            <strong>Culinary Approximations:</strong> Food preparation methods, culinary oil absorption, restaurant recipes, and portion volume variances make mathematical perfection impossible. All nutritional outputs (calories, carbs, protein, fat) are approximations. You must exercise reasonable judgment before consuming food based on AI estimates.
          </li>
          <li>
            <strong>Workout Movement Suggestions:</strong> AI-generated workout routines and suggested weights/reps are automated suggestions. You are solely responsible for evaluating your own physical capacity, warming up properly, using correct lifting biomechanics, and choosing safe loads.
          </li>
        </ul>
      </section>

      {/* 5. Daily AI Usage Allowance & Quota System */}
      <section>
        <h2>5. Daily AI Usage Allowance &amp; Quota System</h2>
        <p>
          Khuraki provides users with an operational daily AI usage allowance measured in points to manage edge computational resources:
        </p>
        <ul>
          <li>
            <strong>Allowance &amp; Reset:</strong> Users receive a standard base allowance of 10 daily AI points, which resets server-authoritatively at <strong>00:00 UTC</strong> (05:30 AM IST).
          </li>
          <li>
            <strong>Non-Monetary Classification:</strong> Daily points and referral bonus points are strictly non-monetary virtual usage counters. They have zero cash value, do not constitute currency, property, or stored monetary value, are non-transferable, and cannot be redeemed, sold, or exchanged for fiat currency, gift cards, or financial assets.
          </li>
          <li>
            <strong>Transparent Refunding:</strong> If an AI generation attempt fails due to upstream service interruptions, network timeouts, or malformed provider output, the reserved point is automatically refunded to your daily balance.
          </li>
          <li>
            <strong>Anti-Abuse Revocation:</strong> We reserve the right to revoke bonus points or restrict access if points are accumulated through automated referral farming, emulation abuse, script tampering, or fraudulent activity.
          </li>
        </ul>
      </section>

      {/* 6. User Accounts & Google Authentication */}
      <section>
        <h2>6. User Accounts &amp; Authentication Security</h2>
        <p>
          Account creation and cloud synchronization are authenticated through Google Sign-In via Firebase Authentication.
        </p>
        <ul>
          <li>You are responsible for maintaining the security of your mobile device and Google account credentials.</li>
          <li>You agree not to share your account, impersonate another person, or create accounts through automated means.</li>
          <li>You agree to notify us immediately at <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> if you detect unauthorized access to your account.</li>
        </ul>
      </section>

      {/* 7. User Content & Limited Operational License */}
      <section>
        <h2>7. User Content, Health Records &amp; Limited Operational License</h2>
        <p>
          We respect your personal records and creative authorship:
        </p>
        <ul>
          <li>
            <strong>Your Rights:</strong> You retain any intellectual property rights that you hold in original text, notes, or descriptions you enter into the Service (&ldquo;User Content&rdquo;). Objective factual measurements (such as scale weights, logged food quantities, and reps) are factual data governed by our Privacy Policy.
          </li>
          <li>
            <strong>Limited Operational License:</strong> You grant Khuraki a limited, non-exclusive, revocable, royalty-free, worldwide license solely to store, process, synchronize, and format your content as strictly necessary to deliver, display, and maintain the Service for your personal benefit.
          </li>
          <li>
            <strong>No Commercial Resale:</strong> Khuraki will never sell, license, or transfer your personal health logs or diary records to third-party data brokers or marketing agencies.
          </li>
        </ul>
      </section>

      {/* 8. Acceptable Use & Prohibited Activities */}
      <section>
        <h2>8. Acceptable Use &amp; Prohibited Conduct</h2>
        <p>You agree to use Khuraki only for lawful, personal, non-commercial purposes. You agree not to:</p>
        <ul>
          <li>Engage in automated scraping, data extraction, bot querying, or denial-of-service attacks against Khuraki&rsquo;s APIs or Cloudflare edge endpoints.</li>
          <li>Bypass, tamper with, or circumvent rate-limiting mechanisms or daily point allowances.</li>
          <li>Submit unlawful, harassing, defamatory, or abusive imagery or text prompts through the AI camera or text inputs.</li>
          <li>Decompile, reverse-engineer, or disassemble any portion of the Khuraki mobile application or backend services, except to the extent that such restriction is expressly prohibited by non-waivable statutory law.</li>
        </ul>
      </section>

      {/* 9. Data Portability & Account Deletion */}
      <section>
        <h2>9. Data Portability, Account Deletion &amp; 30-Day Recovery Period</h2>
        <p>
          You maintain full autonomy over your data and account relationship:
        </p>
        <ul>
          <li>
            <strong>Self-Serve Data Portability:</strong> You may export a complete, machine-readable JSON archive of your biometrics, meal diaries, weight history, and workouts at any time within the app under <em>Profile &rarr; Settings &rarr; Account &rarr; Download My Data</em>. Because the exported JSON archive is unencrypted, you assume full responsibility for safeguarding and securely storing the file.
          </li>
          <li>
            <strong>In-App Deletion Workflow:</strong> You may initiate permanent account deletion directly in the app under <em>Profile &rarr; Settings &rarr; Account &rarr; Delete Account &amp; Data</em> (requiring Google re-authentication), or externally via our <Link href="/delete-account/">Account Deletion Portal</Link>.
          </li>
          <li>
            <strong>Immediate Local Wipe:</strong> Initiating in-app deletion immediately purges all local SQLite database records and application preferences from the physical device executing the action.
          </li>
          <li>
            <strong>30-Day Recovery Window &amp; Explicit Restoration:</strong> Cloud records remain dormant in a pending-deletion state for exactly thirty (30) days. If you log back into Khuraki on Android during this window, you must explicitly tap <strong>&ldquo;Restore Account&rdquo;</strong> to cancel scheduled deletion. Signing in alone does not automatically cancel deletion.
          </li>
          <li>
            <strong>Permanent Cloud Purge:</strong> After 30 days without restoration, cloud Firestore documents, subcollections, and Firebase Authentication accounts are permanently deleted by automated routines, subject only to technical operational logs (such as pseudonymous Cloudflare D1 telemetry) that age out under their standard rolling 90-day retention schedule.
          </li>
        </ul>
      </section>

      {/* 10. Intellectual Property Rights of Khuraki */}
      <section>
        <h2>10. Intellectual Property Rights of Khuraki</h2>
        <p>
          The Service, including its underlying software code, deterministic nutrition engine, visual user interface, icons, branding, animations, and documentation, is the exclusive intellectual property of <strong>{siteConfig.publisher}</strong> and is protected by copyright, trademark, and applicable intellectual property laws.
        </p>
        <p>
          Subject to your ongoing compliance with these Terms, we grant you a limited, personal, revocable, non-exclusive, non-transferable, and non-sublicensable license to install and use the Khuraki mobile application on your personal Android device solely for your personal wellness tracking.
        </p>
      </section>

      {/* 11. Limitation of Liability & Warranty Disclaimers */}
      <section>
        <h2>11. Limitation of Liability &amp; Warranty Disclaimers</h2>
        <p>
          <strong>Services Provided &ldquo;AS IS&rdquo;:</strong> To the maximum extent permitted by applicable law, the Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis, without warranties of any kind, whether express, implied, statutory, or otherwise (including implied warranties of merchantability, fitness for a particular purpose, and non-infringement). We do not warrant that the Service will be uninterrupted, error-free, mathematically infallible, or free from operational defects.
        </p>
        <p>
          <strong>Exclusion of Consequential Damages:</strong> To the maximum extent permitted by applicable law, in no event shall {siteConfig.publisher}, Khuraki, or its contributors be liable for any indirect, incidental, special, consequential, or punitive damages—including loss of profits, data, goodwill, or personal injury resulting from your use of or inability to use the Service.
        </p>
        <p>
          <strong>Liability Cap:</strong> To the maximum extent permitted by applicable law, our total aggregate liability arising out of or related to these Terms or the Service shall be limited to the total fees actually paid by you to Khuraki during the twelve (12) months preceding the event giving rise to liability (or zero if the Service was provided free of charge).
        </p>
        <p>
          <strong>Non-Excludable Statutory Rights:</strong> Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, statutory right, or legal remedy conferred by mandatory consumer protection legislation (including the Consumer Protection Act, 2019 under Indian law, or applicable mandatory consumer protections in other jurisdictions) that cannot lawfully be excluded or limited by contract.
        </p>
      </section>

      {/* 12. Governing Law, Grievance Redressal & Modifications */}
      <section>
        <h2>12. Governing Law, Grievance Redressal &amp; Modifications</h2>
        <p>
          <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the <strong>Republic of India</strong>, without regard to conflict of law principles.
        </p>
        <p>
          <strong>Dispute Resolution:</strong> Any dispute, controversy, or claim arising out of or relating to these Terms or the Service shall be subject to the jurisdiction of the competent civil courts located in India, without prejudice to any non-waivable statutory dispute resolution forums available to consumers under applicable law.
        </p>
        <p>
          <strong>Grievance Redressal Desk:</strong> In accordance with the Information Technology Act, 2000 and consumer governance rules, for any grievances, notices, or formal correspondence, you may contact:
        </p>
        <p>
          <strong>Grievance Officer:</strong> {siteConfig.grievanceOfficer}<br />
          <strong>Entity:</strong> {siteConfig.publisher} ({siteConfig.publisherBrand})<br />
          <strong>Support Desk:</strong> <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a><br />
          <strong>Privacy &amp; Legal Desk:</strong> <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>
        </p>
        <p>
          <strong>Modifications:</strong> We reserve the right to update these Terms periodically to reflect product evolutions, statutory changes, or operational requirements. We will update the &ldquo;Last updated&rdquo; date at the top of this page. Your continued use of the Service following the posting of updated Terms constitutes your binding acceptance of the changes.
        </p>
      </section>
    </LegalPageShell>
  );
}
