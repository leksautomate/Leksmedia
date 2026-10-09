"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Eye,
  Database,
  CheckCircle2,
  FileText,
  ExternalLink,
  AlertCircle,
  UserCheck,
  Globe,
  Scale,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#08080a] text-[#f5f5f4] flex flex-col justify-between selection:bg-[#b8965a]/30 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 px-6 flex-1">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Breadcrumb / Back button */}
          <Link
            href="/"
            className="text-xs font-mono text-white/50 hover:text-white inline-flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#b8965a]" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="border-b border-white/10 pb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#b8965a]/30 bg-[#b8965a]/10 text-xs font-mono text-[#b8965a]">
              <Lock className="w-3.5 h-3.5" />
              Data Privacy & Security
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-white/40">
              Effective Date: October 9, 2026 • Version 2.4
            </p>
          </div>

          {/* Summary Box */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-white font-serif text-lg">
              <ShieldCheck className="w-5 h-5 text-[#b8965a]" />
              Executive Privacy Commitment
            </div>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              At Leksmedia (&ldquo;Platform&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we take creator data sovereignty seriously. We never sell your personal information, we never share proprietary scripts with advertisers, and we strictly enforce a <strong>Zero Public AI Model Training Guarantee</strong>: your Ikigai blueprints, avatar strategies, and video drafts are never utilized to train public foundation models.
            </p>
          </div>

          {/* Legal Sections */}
          <div className="space-y-10 text-sm text-zinc-300 font-light leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">01.</span>
                Data Controller & Scope
              </h2>
              <p>
                This Privacy Policy explains how Leksmedia processes, secures, and safeguards your personal data when you visit our website, register for an account, access the YouTube Personal Brand Studio, or communicate with our support personnel.
              </p>
              <p>
                For the purposes of the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA/CPRA), Leksmedia operates as the <strong>Data Controller</strong> for your account registration data and telemetry, and as a <strong>Data Processor</strong> regarding the strategic creative inputs and YouTube video scripts you draft within the platform.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">02.</span>
                Information We Collect
              </h2>
              <p>
                We only collect data strictly necessary to provide high-velocity YouTube outlier intelligence and strategic brand blueprint generation:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                  <div className="flex items-center gap-2 text-white text-xs font-mono font-medium">
                    <UserCheck className="w-3.5 h-3.5 text-[#b8965a]" />
                    Account & Authentication
                  </div>
                  <p className="text-xs text-zinc-400">
                    Email address, full name, encrypted password hashes, OAuth identifier tokens, and workspace membership roles.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                  <div className="flex items-center gap-2 text-white text-xs font-mono font-medium">
                    <Eye className="w-3.5 h-3.5 text-[#b8965a]" />
                    Creator Strategy Inputs
                  </div>
                  <p className="text-xs text-zinc-400">
                    Self-reported Ikigai answers, target audience avatar descriptions, niche topics, custom hook preferences, and brand tone guidelines.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                  <div className="flex items-center gap-2 text-white text-xs font-mono font-medium">
                    <Database className="w-3.5 h-3.5 text-[#b8965a]" />
                    Billing & Stripe Metadata
                  </div>
                  <p className="text-xs text-zinc-400">
                    Tokenized Stripe customer IDs, payment status, VAT/tax jurisdiction, and billing history. We never store raw credit card numbers.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                  <div className="flex items-center gap-2 text-white text-xs font-mono font-medium">
                    <Globe className="w-3.5 h-3.5 text-[#b8965a]" />
                    Telemetry & Diagnostics
                  </div>
                  <p className="text-xs text-zinc-400">
                    Browser type, operating system, IP address (hashed for fraud prevention), request latencies, and platform navigation events.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">03.</span>
                YouTube API Services & Google User Data Disclosures
              </h2>
              <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5 space-y-3">
                <div className="flex items-center gap-2 text-red-200 text-xs font-mono uppercase tracking-wider font-semibold">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  Compliance Notice for YouTube Data API v3
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Leksmedia utilizes YouTube API Services to power the 48-Hour Outlier Velocity Scanner and channel diagnostics. By utilizing these features, you acknowledge and agree to be bound by the{" "}
                  <a
                    href="https://www.youtube.com/t/terms"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#b8965a] underline hover:text-white inline-flex items-center gap-0.5"
                  >
                    YouTube Terms of Service
                    <ExternalLink className="w-3 h-3 ml-0.5 inline" />
                  </a>{" "}
                  and Google Privacy Policy.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <p>
                  Our integration strictly conforms to the Google API Services User Data Policy, adhering to the following boundaries:
                </p>
                <ul className="space-y-2 pl-4 border-l border-white/10 text-xs font-mono text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Read-Only Public Analytics:</strong> We exclusively fetch publicly accessible metrics (video view velocities, public publish timestamps, video titles, thumbnail URLs, and public subscriber tier benchmarks).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Zero Management or Upload Privileges:</strong> Leksmedia never requests write, upload, modify, comment, or channel administration permissions. We cannot alter or delete anything on your YouTube channel.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>No Private Data Harvesting:</strong> We do not store unlisted or private videos, YouTube studio earnings data, Google account passwords, or personal YouTube viewing history.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Permission Revocation:</strong> You can disconnect and revoke Leksmedia&apos;s access to your Google account at any time via the{" "}
                      <a
                        href="https://myaccount.google.com/permissions"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#b8965a] underline hover:text-white"
                      >
                        Google Security Settings page
                      </a>.
                    </span>
                  </li>
                </ul>
                <p className="text-xs text-zinc-400">
                  For comprehensive information on how Google manages information, consult the{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#b8965a] underline hover:text-white"
                  >
                    Google Privacy Policy
                  </a>.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">04.</span>
                Zero Public Model Training Guarantee (Content Sovereignty)
              </h2>
              <p>
                Unlike generalized consumer AI platforms, Leksmedia maintains strict isolation between your proprietary brand positioning and underlying machine learning infrastructure:
              </p>
              <div className="p-4 rounded-xl border border-[#b8965a]/30 bg-[#b8965a]/5 space-y-2">
                <div className="text-white text-xs font-mono font-medium flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[#b8965a]" />
                  Contractual Non-Training Clause
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Your inputs (including confidential Ikigai answers, private brand positioning statements, unpublished YouTube video scripts, and custom hook formulas) are <strong>never used to train, re-train, or fine-tune public foundation models</strong>. All API transmissions with our inference engines are governed by zero-retention enterprise agreements.
                </p>
              </div>
              <p>
                Your competitive edge remains exclusively yours. Another creator searching for outliers in your exact niche will never receive your generated scripts, hooks, or proprietary formulations.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">05.</span>
                Legal Bases for Data Processing (GDPR Article 6)
              </h2>
              <p>
                We only process your personal data when an established legal ground exists under applicable law:
              </p>
              <ul className="space-y-2 pl-4 border-l border-white/10 text-xs font-mono text-zinc-400">
                <li>
                  <strong className="text-white">Performance of Contract:</strong> To generate your brand deliverables, authenticate your login session, and execute requested script generations.
                </li>
                <li>
                  <strong className="text-white">Legitimate Interests:</strong> To protect platform integrity against abuse, prevent fraudulent signups, and monitor infrastructure latency.
                </li>
                <li>
                  <strong className="text-white">Legal & Regulatory Compliance:</strong> To maintain required accounting records, process tax documentation, and comply with binding court subpoenas.
                </li>
                <li>
                  <strong className="text-white">Explicit Consent:</strong> Where you voluntarily opt into optional feature betas, email newsletters, or direct creator interviews.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">06.</span>
                Sub-processors & Third-Party Service Providers
              </h2>
              <p>
                We do not sell, rent, or monetize your personal data to ad brokers or third parties. We only share data with vetted sub-processors under strict Data Processing Agreements (DPAs):
              </p>
              <div className="overflow-x-auto border border-white/10 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/[0.03] border-b border-white/10 text-zinc-400 font-mono">
                    <tr>
                      <th className="p-3">Entity</th>
                      <th className="p-3">Purpose</th>
                      <th className="p-3">Data Location</th>
                      <th className="p-3">Safeguard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono text-zinc-300">
                    <tr>
                      <td className="p-3 text-white font-medium">Stripe, Inc.</td>
                      <td className="p-3">Payment processing & subscription billing</td>
                      <td className="p-3">United States / Global</td>
                      <td className="p-3">PCI-DSS Level 1, Standard Contractual Clauses</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-white font-medium">Vercel, Inc.</td>
                      <td className="p-3">Edge hosting & platform frontend execution</td>
                      <td className="p-3">United States / Global Edge</td>
                      <td className="p-3">SOC 2 Type II, ISO 27001, GDPR DPA</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-white font-medium">Google LLC</td>
                      <td className="p-3">YouTube API Services public metric retrieval</td>
                      <td className="p-3">United States</td>
                      <td className="p-3">Google API Services User Data Policy</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-white font-medium">Cloud Database Infrastructure</td>
                      <td className="p-3">Encrypted user storage & session caching</td>
                      <td className="p-3">United States / EU Regions</td>
                      <td className="p-3">AES-256 at rest, TLS 1.3 in transit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">07.</span>
                Cookies & Local Storage
              </h2>
              <p>
                Leksmedia adheres to a clean, non-intrusive tracking approach. We utilize essential session tokens stored via secure HTTP-only cookies and local storage items (such as <code className="text-[#b8965a] bg-white/5 px-1.5 py-0.5 rounded text-xs">creator_os_auth</code> and onboarding draft keys) strictly for:
              </p>
              <ul className="space-y-1.5 pl-4 border-l border-white/10 text-xs text-zinc-400 font-mono">
                <li>• Maintaining your authenticated creator session across dashboard tabs.</li>
                <li>• Preserving incomplete onboarding progress to prevent accidental work loss.</li>
                <li>• Remembering interface settings (dark mode contrast, script font sizing).</li>
              </ul>
              <p>
                We do not deploy cross-site tracking cookies, behavioral ad-targeting pixels, or third-party fingerprinting scripts.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">08.</span>
                Data Retention & Account Purge
              </h2>
              <p>
                We retain your personal information only for as long as your account remains active or as required to fulfill legal, taxation, and accounting obligations:
              </p>
              <ul className="space-y-2 pl-4 border-l border-white/10 text-xs font-mono text-zinc-400">
                <li>
                  <strong className="text-white">Active Subscriptions:</strong> Your Ikigai blueprints, generated video scripts, and custom creator profiles remain securely archived for instant access in your dashboard.
                </li>
                <li>
                  <strong className="text-white">Account Termination:</strong> When you delete your account, your personal data, strategy inputs, and generated scripts are hard-deleted from production databases within thirty (30) days.
                </li>
                <li>
                  <strong className="text-white">Billing Records:</strong> Transaction receipts and invoices are preserved for seven (7) years in accordance with statutory financial auditing regulations.
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">09.</span>
                Your Privacy Rights (GDPR & CCPA/CPRA)
              </h2>
              <p>
                Regardless of your country of residence, Leksmedia affords all creators comprehensive rights regarding their personal data:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-mono">
                <div className="p-3 rounded-lg border border-white/10 bg-white/[0.02]">
                  <strong className="text-white block mb-1">Right to Access & Portability</strong>
                  Request a complete export of your account data, Ikigai blueprints, and scripts in JSON or Markdown format.
                </div>
                <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                  <strong className="text-white block mb-1">Right to Erasure (&ldquo;To Be Forgotten&rdquo;)</strong>
                  Request the complete permanent purge of your creator identity and associated files from our servers.
                </div>
                <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                  <strong className="text-white block mb-1">Right to Rectification</strong>
                  Correct, update, or amend outdated account details and workspace attributes at any time.
                </div>
                <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                  <strong className="text-white block mb-1">Right to Non-Discrimination</strong>
                  We will never deny service, adjust pricing, or degrade features if you exercise your lawful privacy rights.
                </div>
              </div>
              <p className="text-xs text-zinc-400 pt-1">
                To exercise any of these rights, submit a written request to{" "}
                <a href="mailto:privacy@leksmedia.com" className="text-[#b8965a] underline hover:text-white">
                  privacy@leksmedia.com
                </a>
                . We respond to all verified inquiries within thirty (30) days.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">10.</span>
                Data Security Measures
              </h2>
              <p>
                We employ defense-in-depth security architecture to safeguard your personal brand blueprints from unauthorized access, breach, alteration, or disclosure:
              </p>
              <ul className="space-y-2 pl-4 border-l border-white/10 text-xs font-mono text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>End-to-End Transit Encryption:</strong> Enforced TLS 1.3 protocol on all API endpoints and web client sessions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Cryptographic Storage:</strong> Database volumes encrypted at rest with industry-standard AES-256 keys.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Role-Based Access Control (RBAC):</strong> Strict internal least-privilege security policies; no employee has direct access to production script databases without audited oversight.</span>
                </li>
              </ul>
            </section>

            {/* Section 11 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">11.</span>
                Updates to this Privacy Policy
              </h2>
              <p>
                We may periodically update this Privacy Policy to reflect modifications to our platform features, YouTube API guidelines, or international data protection mandates. Any material changes will be communicated via your registered email or highlighted prominently through an in-app banner prior to taking effect.
              </p>
            </section>

            {/* Section 12 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">12.</span>
                Contact & Data Protection Officer
              </h2>
              <p>
                For questions, data portability requests, or concerns regarding our privacy architecture, please contact our Data Protection Officer:
              </p>
              <div className="p-5 rounded-xl border border-white/10 bg-[#0d0d10] text-xs font-mono text-zinc-300 space-y-1.5">
                <p className="text-white font-medium">Leksmedia Privacy & Legal Department</p>
                <p>Attention: Data Protection Officer</p>
                <p>
                  Email:{" "}
                  <a href="mailto:privacy@leksmedia.com" className="text-[#b8965a] hover:underline">
                    privacy@leksmedia.com
                  </a>
                </p>
                <p>Corporate Helpdesk: support@leksmedia.com</p>
                <p>Response SLA: 24–48 Business Hours</p>
              </div>
            </section>
          </div>

          {/* Quick links to other legal documents */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-white/50">
            <span>Related Legal Policies:</span>
            <Link href="/terms" className="text-[#b8965a] hover:underline">
              Terms of Service →
            </Link>
            <Link href="/refund" className="text-[#b8965a] hover:underline">
              Refund Policy →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
