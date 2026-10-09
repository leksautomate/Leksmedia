"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ShieldCheck, FileText, Lock, AlertCircle, Scale, CheckCircle2 } from "lucide-react";

export default function TermsPage() {
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
              <Scale className="w-3.5 h-3.5" />
              Legal Agreement
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-white tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs font-mono text-white/40">
              Effective Date: October 9, 2026 • Version 2.4
            </p>
          </div>

          {/* Summary Box */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-white font-serif text-lg">
              <ShieldCheck className="w-5 h-5 text-[#b8965a]" />
              Executive Summary
            </div>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              These Terms of Service govern your access to and use of Leksmedia (&ldquo;Platform&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By creating an account, browsing our website, or subscribing to our YouTube Personal Brand Operating System, you enter into a binding agreement. You retain 100% intellectual property ownership of your scripts, blueprints, and generated creative assets.
            </p>
          </div>

          {/* Legal Sections */}
          <div className="space-y-10 text-sm text-zinc-300 font-light leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">01.</span>
                Acceptance of Terms & Eligibility
              </h2>
              <p>
                By accessing or using Leksmedia, you affirm that you are at least 18 years of age (or the legal age of majority in your jurisdiction) and possess the full legal authority to enter into these terms. If you are registering on behalf of a corporation, partnership, or other legal entity, you represent and warrant that you are authorized to bind that entity to these Terms of Service.
              </p>
              <p>
                If you do not agree with any provision set forth in this document, you must immediately terminate your use of the Platform and discontinue access to all associated systems, software feeds, and deliverables.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">02.</span>
                Platform Scope & Services Provided
              </h2>
              <p>
                Leksmedia provides an integrated software suite for YouTube creator strategy, personal brand positioning, and production automation. Services include, but are not limited to:
              </p>
              <ul className="space-y-2 pl-4 border-l border-white/10 text-xs font-mono text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Ikigai Category Blueprint:</strong> Structured psychographic avatar generation, differentiation statements, and monetization pillars.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>YouTube Outlier Velocity Intelligence:</strong> Real-time and snapshot 48-hour algorithmic demand tracking and outlier scoring metrics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Long-Form Script Studio:</strong> 8–12 minute full-length YouTube video scripts, 7-step retention hook sequences, and editor B-roll cues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Channel Content Analysis:</strong> 3-tier catalog diagnostics identifying abnormal winners, break-evens, and algorithmic drop-offs.</span>
                </li>
              </ul>
              <p>
                We reserve the right to modify, enhance, update, or temporarily suspend specific features of the Platform to reflect evolving YouTube algorithmic standards, technological improvements, or operational requirements.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">03.</span>
                Account Security & Multi-Seat Governance
              </h2>
              <p>
                To utilize the full capabilities of Leksmedia, you must register and authenticate an account. You agree to provide accurate, current, and complete information during intake. You are exclusively responsible for maintaining the confidentiality of your credentials and for all activities conducted under your authenticated session.
              </p>
              <p>
                Starter and Pro Studio plans are licensed for individual creator and executive use. Multi-user access is explicitly reserved for Scale & Agency tier subscribers who hold designated team seats. Sharing account credentials outside authorized license seats is strictly prohibited and constitutes grounds for immediate account suspension without refund.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">04.</span>
                Intellectual Property & Content Sovereignty
              </h2>
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
                <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider block">
                  Creator Ownership Guarantee
                </span>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  You retain 100% full, exclusive, and unencumbered intellectual property rights to all output generated by Leksmedia for your account, including custom video scripts, Ikigai blueprints, avatar dossiers, 7-step hooks, and thumbnail concepts. You are free to publish, monetize, commercialize, or assign these deliverables worldwide without royalties or platform attribution.
                </p>
              </div>
              <p>
                Conversely, all software code, proprietary algorithms, Outlier Velocity scoring mathematics, database schemas, trademarks, UI designs, and brand collateral associated with Leksmedia remain the sole and exclusive intellectual property of Leksmedia and its licensors. You may not reverse-engineer, decompile, scrape, copy, or redistribute platform code.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">05.</span>
                Acceptable Use Policy & Community Compliance
              </h2>
              <p>
                You agree to use Leksmedia in strict compliance with all applicable local, national, and international laws, as well as YouTube Community Guidelines. You agree not to:
              </p>
              <ul className="space-y-1.5 pl-4 border-l border-white/10 text-xs font-mono text-zinc-400">
                <li>• Generate deceptive, fraudulent, defamatory, or maliciously misleading video scripts.</li>
                <li>• Automate requests to our endpoints using unauthorized scrapers, crawlers, or bots.</li>
                <li>• Attempt to probe, scan, or breach platform security vulnerabilities or rate limits.</li>
                <li>• Use platform data to build a competing software product or data resale service.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">06.</span>
                Third-Party Integrations & YouTube API Services
              </h2>
              <p>
                Leksmedia utilizes YouTube API Services to retrieve public channel metrics, video timestamps, and velocity signals. By utilizing features powered by YouTube data, you acknowledge and agree to be bound by the{" "}
                <a
                  href="https://www.youtube.com/t/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#b8965a] hover:underline"
                >
                  YouTube Terms of Service
                </a>{" "}
                and the{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#b8965a] hover:underline"
                >
                  Google Privacy Policy
                </a>.
              </p>
              <p>
                Leksmedia acts strictly as an analytics and workflow tool. We do not manage, alter, upload to, or delete content from your external YouTube accounts without explicit manual authorization.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">07.</span>
                Billing, Subscriptions & Price Modifications
              </h2>
              <p>
                Subscriptions are billed on a recurring monthly or annual basis via our secure payment processor (Stripe). By purchasing a plan, you authorize automatic renewal charges until you cancel your membership.
              </p>
              <p>
                Prices are subject to change with at least 30 days advance notice to active subscribers. Price changes will only take effect on your subsequent billing cycle following the notice period.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">08.</span>
                Cancellation & Refund Rights
              </h2>
              <p>
                You may cancel your subscription at any time directly through your account dashboard. Cancellation stops future recurring billings; your access to current features continues unimpeded through the end of your active billing period.
              </p>
              <p>
                New first-time subscribers are protected by our 14-Day Satisfaction Guarantee. For detailed instructions on submitting a refund claim, please consult our official{" "}
                <Link href="/refund" className="text-[#b8965a] hover:underline">
                  Refund Policy
                </Link>.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">09.</span>
                Disclaimers & Limitation of Liability
              </h2>
              <p>
                Leksmedia is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied. While our Outlier Velocity models identify abnormal algorithmic demand patterns with high statistical confidence, we do not guarantee specific viewer counts, subscriber growth numbers, or financial earnings, as content performance depends on creative execution, editing, and external platform factors.
              </p>
              <p>
                To the maximum extent permitted by applicable law, Leksmedia and its directors, employees, or partners shall not be liable for any indirect, incidental, punitive, or consequential damages arising from your use of the platform. In all events, our aggregate liability shall not exceed the total fees paid by you to Leksmedia during the twelve (12) months preceding the claim.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">10.</span>
                Governing Law & Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Leksmedia operates, without regard to its conflict of law principles. Any dispute, controversy, or claim arising out of or relating to these terms shall be settled via binding individual arbitration, waiving class action rights.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">11.</span>
                Contact & Legal Inquiries
              </h2>
              <p>
                If you have questions, notices, or formal legal inquiries regarding these Terms of Service, please reach out to our legal department:
              </p>
              <div className="p-4 rounded-xl bg-[#121216] border border-white/5 font-mono text-xs space-y-1">
                <p className="text-white">Leksmedia Legal Affairs</p>
                <p className="text-white/60">Email: legal@leksmedia.com</p>
                <p className="text-white/60">Support Desk: support@leksmedia.com</p>
              </div>
            </section>
          </div>

          {/* Bottom Policy Nav */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/50">
            <span>Related Legal Documents:</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-[#b8965a] hover:underline">
                Privacy Policy →
              </Link>
              <Link href="/refund" className="text-[#b8965a] hover:underline">
                Refund Policy →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
