import Image from "next/image";
import { Trans } from "@lingui/react/macro";
import { initLingui, PageLangParam } from "@/app/initLingui";

export default async function PrivacyPolicyPage(props: PageLangParam) {
  const lang = (await props.params).lang;
  initLingui(lang);

  return (
    <main className="bg-zinc-950 text-zinc-200 relative">
      <Image
        src="/images/visual/decor.png"
        alt="Decor"
        width={400}
        height={400}
        className="object-cover absolute top-1/12 left-0"
      />
      <Image
        src="/images/visual/decor.png"
        alt="Decor"
        width={400}
        height={400}
        className="object-cover absolute bottom-1/12 right-0"
      />
      <section className="mx-auto max-w-4xl px-6 py-16 relative">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight">
            <Trans>Privacy Policy</Trans>
          </h1>
          <p className="text-sm text-zinc-400">
            <Trans>Shinobi War - Developed by 32BitZ Studio</Trans>
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            <Trans>
              Last updated: {new Date().toISOString().split("T")[0]}
            </Trans>
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none prose-h2:mt-12 prose-h2:text-zinc-100 prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-zinc-100">
          <h2>
            <Trans>1. Introduction</Trans>
          </h2>
          <p>
            <Trans>
              This Privacy Policy explains how <strong>32BitZ Studio</strong>
              (“we”, “us”, “our”) collects, uses, stores, and protects personal
              data when you access or play <strong>Shinobi War</strong> (the
              “Game”). By using the Game, you consent to the practices described
              in this Privacy Policy.
            </Trans>
          </p>

          <h2>
            <Trans>2. Information We Collect</Trans>
          </h2>
          <p>
            <Trans>
              We may collect the following categories of information:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>Account identifiers (username, user ID)</Trans>
            </li>
            <li>
              <Trans>
                Device and technical data (IP address, device type, OS)
              </Trans>
            </li>
            <li>
              <Trans>Gameplay data (progress, stats, achievements, logs)</Trans>
            </li>
            <li>
              <Trans>
                Purchase and transaction metadata (non-payment credentials)
              </Trans>
            </li>
            <li>
              <Trans>Support communications and reports</Trans>
            </li>
          </ul>

          <h2>
            <Trans>3. Information We Do NOT Collect</Trans>
          </h2>
          <ul>
            <li>
              <Trans>Real-world identity documents</Trans>
            </li>
            <li>
              <Trans>
                Bank account or credit card numbers (handled by third parties)
              </Trans>
            </li>
            <li>
              <Trans>Biometric or sensitive personal data</Trans>
            </li>
          </ul>

          <h2>
            <Trans>4. How We Use Your Data</Trans>
          </h2>
          <ul>
            <li>
              <Trans>Operate and maintain the Game</Trans>
            </li>
            <li>
              <Trans>Provide customer support</Trans>
            </li>
            <li>
              <Trans>Detect cheating, fraud, or abuse</Trans>
            </li>
            <li>
              <Trans>Improve gameplay balance and performance</Trans>
            </li>
            <li>
              <Trans>Comply with legal obligations</Trans>
            </li>
          </ul>

          <h2>
            <Trans>5. Legal Basis for Processing</Trans>
          </h2>
          <p>
            <Trans>
              We process personal data based on one or more of the following:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>Your consent</Trans>
            </li>
            <li>
              <Trans>Performance of a contract (providing the Game)</Trans>
            </li>
            <li>
              <Trans>
                Legitimate interests (security, analytics, fraud prevention)
              </Trans>
            </li>
            <li>
              <Trans>Legal obligations</Trans>
            </li>
          </ul>

          <h2>
            <Trans>6. Data Sharing & Third Parties</Trans>
          </h2>
          <p>
            <Trans>
              We may share limited data with trusted third-party service
              providers strictly for operational purposes, such as:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>Cloud hosting and server infrastructure</Trans>
            </li>
            <li>
              <Trans>Analytics and crash reporting</Trans>
            </li>
            <li>
              <Trans>Payment processors (transaction references only)</Trans>
            </li>
          </ul>
          <p>
            <Trans>
              We do <strong>not</strong> sell or rent your personal data.
            </Trans>
          </p>

          <h2>
            <Trans>7. Data Retention</Trans>
          </h2>
          <p>
            <Trans>
              We retain personal data only for as long as necessary to fulfill
              the purposes outlined in this Policy, unless a longer retention
              period is required by law.
            </Trans>
          </p>

          <h2>
            <Trans>8. Data Security</Trans>
          </h2>
          <p>
            <Trans>
              We implement reasonable technical and organizational measures to
              protect your data. However, no system is 100% secure, and we
              cannot guarantee absolute security.
            </Trans>
          </p>

          <h2>
            <Trans>9. Account Termination & Data Deletion</Trans>
          </h2>
          <ul>
            <li>
              <Trans>
                Account data may be deleted upon termination or inactivity
              </Trans>
            </li>
            <li>
              <Trans>
                Some data may be retained for legal or security reasons
              </Trans>
            </li>
            <li>
              <Trans>Deleted data may not be recoverable</Trans>
            </li>
          </ul>

          <h2>
            <Trans>10. Children’s Privacy</Trans>
          </h2>
          <p>
            <Trans>
              Shinobi War is not intended for children under the minimum legal
              age required in your jurisdiction. We do not knowingly collect
              personal data from children.
            </Trans>
          </p>

          <h2>
            <Trans>11. International Data Transfers</Trans>
          </h2>
          <p>
            <Trans>
              Your data may be processed or stored on servers located outside
              your country. By using the Game, you consent to such transfers.
            </Trans>
          </p>

          <h2>
            <Trans>12. Your Rights</Trans>
          </h2>
          <p>
            <Trans>
              Depending on your jurisdiction, you may have the right to:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>Access your personal data</Trans>
            </li>
            <li>
              <Trans>Request correction or deletion</Trans>
            </li>
            <li>
              <Trans>Object to certain processing activities</Trans>
            </li>
            <li>
              <Trans>Withdraw consent where applicable</Trans>
            </li>
          </ul>

          <h2>
            <Trans>13. Changes to This Policy</Trans>
          </h2>
          <p>
            <Trans>
              We may update this Privacy Policy at any time. Continued use of
              the Game constitutes acceptance of the updated Policy.
            </Trans>
          </p>

          <h2>
            <Trans>14. Contact Information</Trans>
          </h2>
          <p>
            <Trans>
              If you have questions regarding this Privacy Policy, contact:
            </Trans>
            <br />
            <strong>32BitZ Studio</strong>
            <br />
            <Trans>Email:</Trans> support@32bitz.com
          </p>
        </div>
      </section>
    </main>
  );
}
