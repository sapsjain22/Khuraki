import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/legal-page-shell";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Comprehensive Privacy Policy for Khuraki disclosing data collection, local storage, transient AI processing, 30-day deletion grace windows, and legal compliance.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      effectiveDate="October 2026"
    >
      {/* 1. Overview & Data Controller */}
      <section>
        <h2>1. Overview &amp; Data Controller Identity</h2>
        <p>
          Khuraki (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the App&rdquo;) is a personal nutrition and fitness tracking application developed and published by <strong>{siteConfig.publisher}</strong> as an independent developer and sole proprietorship. We believe privacy is an architectural invariant, not an afterthought.
        </p>
        <p>
          This Privacy Policy describes how personal, nutritional, biometric, and operational data is collected, processed, stored, and purged across the Khuraki Android mobile application and the companion website (<Link href="/">{siteConfig.url}</Link>).
        </p>
        <p>
          For any legal, privacy, or data protection inquiries, you may contact our dedicated privacy desk directly at{" "}
          <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a> or general support at{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
      </section>

      {/* 2. Age Restrictions & Children's Privacy */}
      <section>
        <h2>2. Age Restrictions &amp; Children&rsquo;s Privacy</h2>
        <p>
          Khuraki is designed and intended for general adult health, fitness, and nutritional awareness. We enforce age thresholds according to applicable regional legislation:
        </p>
        <ul>
          <li>
            <strong>India (DPDP Act 2023):</strong> Under the Digital Personal Data Protection Act, 2023, an individual under 18 years of age is classified as a child. Khuraki is intended for independent use by individuals aged 18 and older. Individuals aged 13 to 17 may use Khuraki only under the verifiable consent, guidance, and active supervision of a lawful parent or legal guardian.
          </li>
          <li>
            <strong>United States (COPPA):</strong> Khuraki strictly complies with the Children&rsquo;s Online Privacy Protection Act. We do not knowingly collect, solicit, or maintain personal information from children under 13 years of age.
          </li>
          <li>
            <strong>European Economic Area &amp; United Kingdom (GDPR Art. 8):</strong> Users must be at least 16 years of age, or the applicable statutory age of digital consent established by their EU member state (between 13 and 16 years).
          </li>
        </ul>
        <p>
          If we discover that personal data of an individual below these age requirements has been collected without verified parental authorization, we will immediately delete that information from our cloud and local databases.
        </p>
      </section>

      {/* 3. Categories of Data Collected */}
      <section>
        <h2>3. Categories of Personal &amp; Fitness Data We Collect</h2>
        <p>
          Khuraki collects information that you provide directly to fulfill your personalized nutrition and workout tracking:
        </p>
        <ul>
          <li>
            <strong>Account Credentials:</strong> When you sign in using Google, Firebase Authentication processes your verified Google identity (Firebase UID, verified email address, display name, and profile picture URL). Khuraki never accesses, handles, or stores your Google account password.
          </li>
          <li>
            <strong>Physical &amp; Metabolic Baseline:</strong> Chronological age, biological sex, height (cm), scale weight (kg), target weight, estimated body fat percentage, daily activity baseline, and primary fitness goal (Weight Loss / Maintenance / Muscle Gain).
          </li>
          <li>
            <strong>Nutritional Diary Logs:</strong> Logged meal titles, constituent food items, portion quantities, calculated macronutrients (calories, protein, carbohydrates, fat), dietary preferences (e.g., Vegetarian, Vegan, Halal), and daily water intake (ml).
          </li>
          <li>
            <strong>Exercise &amp; Workout History:</strong> Logged training sessions, targeted muscle groups, exercise movements, completed sets, repetitions, lifted load (kg), and estimated workout energy expenditure.
          </li>
          <li>
            <strong>Daily Points Allowance &amp; Referral Codes:</strong> Your daily AI quota allowance (10 base points per day) and generated 8-character referral associations stored in our Cloudflare D1 ledger to calculate quota resets.
          </li>
        </ul>
      </section>

      {/* 4. Local Storage & Device Security */}
      <section>
        <h2>4. Local Storage &amp; Android Sandbox Security</h2>
        <p>
          Khuraki operates on an offline-first architecture. When you log meals, weights, or workouts, your records are saved immediately to your physical Android device using Android&rsquo;s Room SQLite database and application SharedPreferences.
        </p>
        <p>
          <strong>Security Boundary:</strong> On-device database contents are isolated from other applications by Android&rsquo;s operating system application sandbox. Access is protected by your device&rsquo;s hardware-backed operating system security mechanisms, including lock screen authentication and Android File-Based Encryption (FBE) when your device is locked. Khuraki does not implement separate application-layer SQLCipher encryption on the local SQLite file.
        </p>
      </section>

      {/* 5. Cloud Synchronization */}
      <section>
        <h2>5. Cloud Synchronization (Google Cloud Firestore)</h2>
        <p>
          For authenticated users, your profile biometrics, daily calorie targets, meal records, scale weights, and workout histories synchronize to Google Cloud Firestore over encrypted TLS connections.
        </p>
        <p>
          Cloud synchronization enables cross-device continuity and protects against data loss if your mobile device is replaced. If you use Khuraki in an unauthenticated guest state, your data resides exclusively on your local device and is never transmitted to cloud storage until you choose to link a Google account.
        </p>
      </section>

      {/* 6. AI Processing & Food Photo Privacy */}
      <section>
        <h2>6. Artificial Intelligence Processing &amp; Food Photo Privacy</h2>
        <p>
          Khuraki integrates artificial intelligence to parse natural language food descriptions, extract meal nutrition from camera photos, generate custom workout routines, and provide concise metabolic trend insights.
        </p>
        <h3>A. Transient Food Photo Processing Journey</h3>
        <p>
          When you use the AI Food Scanner, image data follows a strictly bounded path:
        </p>
        <ol>
          <li>A temporary camera image file is created in your Android device&rsquo;s internal application cache directory.</li>
          <li>The image is compressed into memory on-device, and the temporary local camera file is deleted immediately.</li>
          <li>The compressed image payload is forwarded over encrypted TLS through Khuraki&rsquo;s Cloudflare Edge proxy directly to OpenAI (&ldquo;gpt-4o-mini&rdquo;) solely for nutrient estimation.</li>
          <li><strong>Zero Persistent Storage Guarantee:</strong> Khuraki does not intentionally retain, store, or archive food photos in application databases, file systems, or persistent cloud buckets. The image is discarded immediately upon completing the nutritional inference.</li>
        </ol>

        <h3>B. OpenAI API Retention &amp; Model Training Policies</h3>
        <p>
          Khuraki connects to OpenAI via their standard commercial API endpoints. In strict accordance with OpenAI&rsquo;s official Commercial API Data Usage Policy:
        </p>
        <ul>
          <li><strong>No Model Training:</strong> OpenAI does not use customer data submitted via its commercial API to train or improve its foundational machine learning models.</li>
          <li><strong>30-Day Abuse Monitoring Retention:</strong> OpenAI retains API inputs and outputs for up to thirty (30) days solely for identifying abuse, fraud, and security violations, after which it is deleted, unless legally required otherwise. Khuraki does not claim custom Zero Data Retention (ZDR) or enterprise-tier configurations.</li>
        </ul>

        <h3>C. Text Prompts, Daily Overview &amp; Weight Trend Insights</h3>
        <p>
          When you request text-based meal parsing, workout generation, weight trend insights, or the evening Daily Overview, only relevant user prompts or pre-calculated mathematical stats (such as calorie variance, hydration status, and workout logged status) are forwarded. Khuraki never sends your full longitudinal biometric history or sensitive identity information to the AI provider.
        </p>
      </section>

      {/* 7. Local Notifications & Device Permissions */}
      <section>
        <h2>7. Local Notifications &amp; Device Permissions</h2>
        <p>
          The Khuraki Android app requests only the minimum permissions necessary to deliver core functionality:
        </p>
        <ul>
          <li>
            <strong>Camera (<code>android.permission.CAMERA</code>):</strong> Required solely when you tap the camera icon to capture a food photo for nutritional estimation. Camera access is never invoked in the background.
          </li>
          <li>
            <strong>Notifications (<code>android.permission.POST_NOTIFICATIONS</code>):</strong> Used to deliver optional hydration reminder alerts.
          </li>
          <li>
            <strong>Internet &amp; Network State:</strong> Used to synchronize diary records to Cloud Firestore and transmit AI requests over TLS.
          </li>
        </ul>
        <p>
          <strong>100% On-Device Reminders:</strong> Hydration reminders are scheduled locally on your device using Android&rsquo;s <code>AlarmManager</code>. Khuraki does not operate remote push notification servers and does not collect or transmit device push tokens (FCM tokens).
        </p>
      </section>

      {/* 8. Operational Telemetry & 90-Day Retention */}
      <section>
        <h2>8. Operational Telemetry &amp; 90-Day Retention</h2>
        <p>
          To maintain API reliability, prevent rate-limit abuse, and enforce daily quota rules, Khuraki records technical request metadata in a secure Cloudflare D1 database.
        </p>
        <p>
          These records contain <em>only</em> technical attributes: Firebase UID, timestamp, token usage counts, model identifier, response latency (ms), and HTTP status code. <strong>Operational logs never contain user food photos, meal descriptions, prompt text, or AI response copy.</strong>
        </p>
        <p>
          Telemetry records are maintained on a rolling 90-day window for operational security and fraud prevention, after which they are permanently deleted.
        </p>
      </section>

      {/* 9. Self-Serve Data Portability */}
      <section>
        <h2>9. Self-Serve Data Portability (&ldquo;Download My Data&rdquo;)</h2>
        <p>
          In accordance with GDPR Article 20 and India&rsquo;s DPDP Act 2023, you maintain complete ownership of your fitness and nutritional data. Signed-in users can export their complete health archive at any time directly within the app:
        </p>
        <p>
          <em>Open Khuraki &rarr; Profile &rarr; Settings &rarr; Account Settings &rarr; Download My Data &rarr; Tap &ldquo;Download Data Archive (JSON)&rdquo;</em>
        </p>
        <p>
          The generated export contains your complete biometrics, daily calorie targets, meal logs with food constituent breakdowns, workout routines with sets and reps, scale weight history, and metabolic calibration history.
        </p>
        <p>
          <strong>Security Notice Regarding Unencrypted Exports:</strong> The archive is compiled on-device as an unencrypted, standardized JSON file and dispatched via the Android system Share Sheet. Because this file contains sensitive personal health metrics in plain text, you are solely responsible for securely storing or transferring it to trusted storage destinations.
        </p>
      </section>

      {/* 10. Account Deletion & 30-Day Recovery Grace Window */}
      <section>
        <h2>10. Account Deletion &amp; 30-Day Recovery Grace Period</h2>
        <p>
          Khuraki complies with Google Play Store data deletion mandates by providing two distinct pathways to delete your account:
        </p>
        <ul>
          <li>
            <strong>In-App Self-Serve Deletion:</strong> Within the Android app, navigate to <em>Profile &rarr; Settings &rarr; Account &rarr; Delete Account &amp; Data</em>. To prevent accidental or unauthorized loss, you must verify your identity via fresh Google Credential Manager re-authentication. Upon confirmation, an immediate local wipe is executed on that device (purging Room database tables, cached session data, and SharedPreferences), and your cloud profile is flagged for deletion.
          </li>
          <li>
            <strong>External Deletion Request Portal:</strong> If you no longer have access to your Android device, you can submit an email-authenticated deletion request via our public <Link href="/delete-account/">Account Deletion Portal</Link> or by emailing <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> from your registered Google email address.
          </li>
        </ul>
        <p>
          <strong>The 30-Day Recovery Window:</strong> Following a deletion request, your cloud Firestore records enter a dormant 30-day grace period. If you sign back into Khuraki on Android within this 30-day window, you will be presented with an explicit prompt to either select <strong>&ldquo;Restore Account&rdquo;</strong> to resume your profile or remain scheduled for deletion. Signing in alone does not automatically cancel scheduled deletion.
        </p>
        <p>
          <strong>Permanent Cloud Purge:</strong> If no restoration is executed within 30 days, automated backend routines permanently delete your Cloud Firestore user documents, diary subcollections, and Firebase Authentication identity forever.
        </p>
      </section>

      {/* 11. Third-Party Service Providers & Legal Bases */}
      <section>
        <h2>11. Legal Bases &amp; Third-Party Service Providers</h2>
        <p>
          Under the General Data Protection Regulation (GDPR) and international privacy frameworks, we process your data under the following lawful bases:
        </p>
        <ul>
          <li><strong>Contractual Necessity (GDPR Art. 6(1)(b)):</strong> Delivering core metabolic calculations, maintaining your daily diary, and computing macro targets.</li>
          <li><strong>Explicit Consent (GDPR Art. 6(1)(a) &amp; Art. 9(2)(a)):</strong> Accessing the camera for optional meal scanning and processing health-related biometrics.</li>
          <li><strong>Legitimate Interests (GDPR Art. 6(1)(f)):</strong> Enforcing API rate limits, monitoring technical errors, and safeguarding backend infrastructure against abuse.</li>
        </ul>
        <p>Khuraki shares data strictly with essential infrastructure processors over encrypted channels:</p>
        <ul>
          <li><strong>Google Firebase (Alphabet Inc.):</strong> Cloud database synchronization and user authentication (United States &amp; global data centers).</li>
          <li><strong>Cloudflare, Inc.:</strong> Global edge network proxy, DDoS protection, static hosting, and D1 operational telemetry database.</li>
          <li><strong>OpenAI, LLC:</strong> Nutritional and workout text inference and transient meal photo analysis (United States).</li>
        </ul>
        <p>
          <strong>Ecosystem Isolation &amp; Zero Ad Networks:</strong> Khuraki contains zero third-party advertisement SDKs, zero tracking pixels, and zero analytics trackers. Khuraki does not sell, rent, or trade your health data to data brokers or insurance providers. We do not read from, share to, or synchronize data with Google Health Connect, Apple Health, or external wellness platforms without your affirmative consent.
        </p>
      </section>

      {/* 12. Legal Rights, Grievance Officer & Non-Medical Disclaimer */}
      <section>
        <h2>12. Your Legal Rights, Grievance Redressal &amp; Health Disclaimer</h2>
        <p>
          Depending on your jurisdiction (including India, the European Union, the United Kingdom, and California), you possess the right to:
        </p>
        <ul>
          <li>Access and review personal information we hold about you.</li>
          <li>Request correction or rectification of inaccurate biometric or profile records.</li>
          <li>Request the erasure of your personal records (&ldquo;Right to be Forgotten&rdquo;).</li>
          <li>Export your data in a portable, structured JSON format (&ldquo;Right to Data Portability&rdquo;).</li>
          <li>Withdraw previously granted consent at any time without penalty.</li>
        </ul>

        <h3>Grievance Redressal Officer (India DPDP Act 2023 &amp; IT Rules)</h3>
        <p>
          In accordance with the Information Technology Rules, 2021 and the Digital Personal Data Protection Act, 2023, the designated Grievance Officer for Khuraki is:
        </p>
        <p>
          <strong>Officer Name:</strong> {siteConfig.grievanceOfficer}<br />
          <strong>Entity / Publisher:</strong> {siteConfig.publisher} ({siteConfig.publisherBrand})<br />
          <strong>Grievance &amp; Privacy Desk:</strong> <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a><br />
          <strong>Support Desk:</strong> <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
        </p>
        <p>
          Grievances and rights requests are acknowledged within 48 hours and resolved within 30 days of receipt.
        </p>

        <h3>Non-Medical Fitness &amp; Metabolic Disclaimer</h3>
        <p>
          Khuraki is an informational and educational lifestyle application. Caloric calculations, BMR/TDEE estimates, adaptive adjustments, and AI nutritional estimates are generated using scientific equations (such as the Mifflin-St Jeor formula) and machine-learning heuristics.
        </p>
        <p>
          <strong>Khuraki is not a medical device</strong> and its outputs do not constitute medical, clinical, dietary, or healthcare advice, diagnosis, or treatment. Always consult a qualified physician or registered dietitian before undertaking any significant dietary changes or strenuous exercise regimens.
        </p>
      </section>
    </LegalPageShell>
  );
}
