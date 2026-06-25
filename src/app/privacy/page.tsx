import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Gautam Kumar",
  description: "Privacy policy for Gautam Kumar's portfolio website.",
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-zinc-500">Last updated: June 2026</p>

        <div className="mt-10 space-y-8 text-zinc-400 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white">Information I Collect</h2>
            <p className="mt-2">
              This portfolio site does not collect personal information directly. It uses Vercel Analytics to collect anonymized page view data — no personally identifiable information (PII) is stored.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Third-Party Services</h2>
            <p className="mt-2">
              Links to third-party services (GitHub, LinkedIn, email, Google Drive) are provided for your convenience. I am not responsible for the privacy practices of these services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Cookies</h2>
            <p className="mt-2">
              This site does not use tracking cookies. Vercel Analytics uses anonymized data collection without cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="mt-2">
              If you have questions about this policy, reach out at{" "}
              <a href="mailto:gautamkumar43421@gmail.com" className="text-primary hover:underline">
                gautamkumar43421@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
