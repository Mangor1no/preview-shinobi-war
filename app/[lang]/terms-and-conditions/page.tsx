import Image from "next/image";
import { Trans } from "@lingui/react/macro";
import { initLingui, PageLangParam } from "@/app/initLingui";

export default async function TermsAndConditionsPage(props: PageLangParam) {
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
            <Trans>Terms & Conditions</Trans>
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
        <div className="prose prose-invert max-w-none prose-h2:mt-16 prose-h2:text-zinc-100 prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-zinc-100">
          <h2>
            <Trans>1. Acceptance of Terms</Trans>
          </h2>
          <p>
            <Trans>
              By accessing, installing, downloading, registering, or playing{" "}
              <strong> Shinobi War </strong> (the “Game”), you acknowledge that
              you have read, understood, and agree to be legally bound by these
              Terms & Conditions (“Terms”). If you do not agree to these Terms,
              you must immediately discontinue all use of the Game.
            </Trans>
          </p>

          <h2>
            <Trans>2. Developer & Ownership</Trans>
          </h2>
          <p>
            <Trans>
              Shinobi War is developed, owned, and operated by
              <strong> 32BitZ Studio </strong> (“we”, “us”, “our”). All rights
              not expressly granted to you are reserved by 32BitZ Studio.
            </Trans>
          </p>

          <h2>
            <Trans>3. Eligibility & Legal Capacity</Trans>
          </h2>
          <ul>
            <li>
              <Trans>
                You must meet the minimum age requirement in your jurisdiction.
              </Trans>
            </li>
            <li>
              <Trans>
                You must have full legal capacity to enter into a binding
                agreement.
              </Trans>
            </li>
            <li>
              <Trans>
                You are solely responsible for compliance with local laws.
              </Trans>
            </li>
          </ul>

          <h2>
            <Trans>4. User Accounts</Trans>
          </h2>
          <ul>
            <li>
              <Trans>
                Each user may create only one account unless expressly
                permitted.
              </Trans>
            </li>
            <li>
              <Trans>
                You are responsible for all activity under your account.
              </Trans>
            </li>
            <li>
              <Trans>
                Account sharing, selling, or transferring is strictly
                prohibited.
              </Trans>
            </li>
            <li>
              <Trans>
                We may suspend or terminate accounts without prior notice.
              </Trans>
            </li>
          </ul>

          <h2>
            <Trans>5. License Grant & Restrictions</Trans>
          </h2>
          <p>
            <Trans>
              We grant you a limited, revocable, non-exclusive, non-transferable
              license to use the Game solely for personal, non-commercial
              purposes.
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>
                Cheats, bots, exploits, or automation tools are forbidden.
              </Trans>
            </li>
            <li>
              <Trans>Reverse engineering or data mining is prohibited.</Trans>
            </li>
            <li>
              <Trans>
                Unauthorized modifications will result in permanent bans.
              </Trans>
            </li>
          </ul>

          <h2>
            <Trans>6. Virtual Currency & Items</Trans>
          </h2>
          <p>
            <Trans>
              All virtual currency, items, characters, and rewards remain the
              sole property of 32BitZ Studio and have no real-world value.
            </Trans>
          </p>
          <ul>
            <li>
              <Trans>No refunds for lost or modified virtual items.</Trans>
            </li>
            <li>
              <Trans>
                Balances may be adjusted for balancing or security reasons.
              </Trans>
            </li>
            <li>
              <Trans>
                Virtual assets are non-transferable and non-refundable.
              </Trans>
            </li>
          </ul>

          <h2>
            <Trans>7. Events & Limited-Time Content</Trans>
          </h2>
          <ul>
            <li>
              <Trans>
                Event content is temporary and may be removed at any time.
              </Trans>
            </li>
            <li>
              <Trans>
                Rewards not claimed within event periods are forfeited.
              </Trans>
            </li>
            <li>
              <Trans>Event rules may change without notice.</Trans>
            </li>
          </ul>

          <h2>
            <Trans>8. User Conduct</Trans>
          </h2>
          <ul>
            <li>
              <Trans>
                Harassment, hate speech, or abusive behavior is prohibited.
              </Trans>
            </li>
            <li>
              <Trans>Exploiting bugs must be reported immediately.</Trans>
            </li>
            <li>
              <Trans>
                Attempts to disrupt servers will result in permanent bans.
              </Trans>
            </li>
          </ul>

          <h2>
            <Trans>9. Data, Progress & Loss</Trans>
          </h2>
          <p>
            <Trans>
              We do not guarantee preservation of progress, data, rankings, or
              virtual assets. Data loss may occur due to updates, resets, or
              security actions.
            </Trans>
          </p>

          <h2>
            <Trans>10. Updates & Modifications</Trans>
          </h2>
          <p>
            <Trans>
              We reserve the right to modify, update, suspend, or discontinue
              any part of the Game at any time without liability.
            </Trans>
          </p>

          <h2>
            <Trans>11. Termination</Trans>
          </h2>
          <ul>
            <li>
              <Trans>Accounts may be terminated at our sole discretion.</Trans>
            </li>
            <li>
              <Trans>
                No compensation will be provided for terminated accounts.
              </Trans>
            </li>
          </ul>

          <h2>
            <Trans>12. Disclaimer of Warranties</Trans>
          </h2>
          <p>
            <Trans>
              The Game is provided “AS IS” and “AS AVAILABLE” without warranties
              of any kind.
            </Trans>
          </p>

          <h2>
            <Trans>13. Limitation of Liability</Trans>
          </h2>
          <p>
            <Trans>
              To the fullest extent permitted by law, 32BitZ Studio shall not be
              liable for indirect, incidental, or consequential damages.
            </Trans>
          </p>

          <h2>
            <Trans>14. Governing Law</Trans>
          </h2>
          <p>
            <Trans>
              These Terms are governed by the laws applicable in the
              jurisdiction where 32BitZ Studio operates.
            </Trans>
          </p>

          <h2>
            <Trans>15. Contact</Trans>
          </h2>
          <p>
            <Trans>For legal inquiries, contact:</Trans>
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
