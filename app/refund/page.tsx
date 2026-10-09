"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  ShieldCheck,
  RefreshCcw,
  CreditCard,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Mail,
  Scale,
  Sparkles,
} from "lucide-react";

export default function RefundPage() {
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
              <RefreshCcw className="w-3.5 h-3.5" />
              Transparent Billing & Assurance
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-white tracking-tight">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xs font-mono text-white/40">
              Effective Date: October 9, 2026 • Version 2.2
            </p>
          </div>

          {/* Summary Box */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-white font-serif text-lg">
              <ShieldCheck className="w-5 h-5 text-[#b8965a]" />
              The 14-Day Creator Guarantee
            </div>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              We built Leksmedia to give creators and founders an unfair advantage on YouTube. If our Ikigai category blueprint, 48-Hour Outlier Velocity engine, and Long-Form Script Studio do not deliver transformative clarity for your YouTube channel within your first 14 days, email us for a <strong>100% full, prompt refund</strong>. No hidden traps, no phone calls required.
            </p>
          </div>

          {/* Guarantee Highlights Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
              <div className="flex items-center gap-2 text-white text-xs font-mono font-medium">
                <Clock className="w-4 h-4 text-[#b8965a]" />
                14-Day Window
              </div>
              <p className="text-xs text-zinc-400">
                Full refund eligibility applies to all first-time subscribers for 14 calendar days from initial checkout.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
              <div className="flex items-center gap-2 text-white text-xs font-mono font-medium">
                <CreditCard className="w-4 h-4 text-[#b8965a]" />
                1-Click Cancel
              </div>
              <p className="text-xs text-zinc-400">
                Cancel recurring billing anytime with a single click inside your Stripe billing dashboard.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
              <div className="flex items-center gap-2 text-white text-xs font-mono font-medium">
                <Sparkles className="w-4 h-4 text-[#b8965a]" />
                Retain Your Assets
              </div>
              <p className="text-xs text-zinc-400">
                Even if you cancel or request a refund, you keep full intellectual ownership of all generated scripts.
              </p>
            </div>
          </div>

          {/* Legal Sections */}
          <div className="space-y-10 text-sm text-zinc-300 font-light leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">01.</span>
                Scope of the 14-Day Money-Back Guarantee
              </h2>
              <p>
                Our 14-Day Satisfaction Guarantee is designed to eliminate risk for new creators joining Leksmedia. This policy applies to:
              </p>
              <ul className="space-y-2 pl-4 border-l border-white/10 text-xs font-mono text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Eligible Subscriptions:</strong> First-time subscriptions to the Starter ($97/mo) and Pro Studio ($297/mo) tiers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Coverage Period:</strong> Fourteen (14) calendar days commencing precisely at the timestamp of initial subscription purchase through Stripe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Full Reversal:</strong> 100% of the subscription fee paid will be reversed back to your original payment card. No administrative handling deductions are withheld.</span>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">02.</span>
                How to Submit a Refund Claim (Step-by-Step)
              </h2>
              <p>
                To claim your guarantee refund, follow these simple steps:
              </p>
              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-xl border border-white/5 bg-[#0d0d10] space-y-1">
                  <span className="font-mono text-xs text-[#b8965a]">Step 1: Contact Concierge Billing</span>
                  <p className="text-xs text-zinc-300">
                    Send an email from your registered account address to{" "}
                    <a href="mailto:billing@leksmedia.com" className="text-[#b8965a] underline hover:text-white">
                      billing@leksmedia.com
                    </a>{" "}
                    with the subject line: <code className="bg-white/5 text-[#b8965a] px-1 py-0.5 rounded">Refund Request - [Your Registered Email]</code>.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-[#0d0d10] space-y-1">
                  <span className="font-mono text-xs text-[#b8965a]">Step 2: Provide Transaction Reference</span>
                  <p className="text-xs text-zinc-300">
                    Include your Stripe invoice number (formatted as <code className="text-zinc-400">in_xxxx</code>) or the date of checkout. Feedback on why Leksmedia did not match your goals is welcome, but is never required as a condition for receiving your refund.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-[#0d0d10] space-y-1">
                  <span className="font-mono text-xs text-[#b8965a]">Step 3: Processing & Funds Release</span>
                  <p className="text-xs text-zinc-300">
                    Our billing team issues the refund via Stripe within 24–48 hours. Depending on your financial institution, funds appear on your card statement within 3 to 5 business days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">03.</span>
                Self-Serve 1-Click Subscription Cancellation
              </h2>
              <p>
                You maintain complete autonomous control over your subscription. You can cancel recurring renewals at any time without having to contact customer support or speak to a representative:
              </p>
              <ul className="space-y-2 pl-4 border-l border-white/10 text-xs font-mono text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Friction:</strong> Navigate to <code>Dashboard → Settings → Billing</code> and click <em>Manage Subscription</em> to open your Stripe Customer Portal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Confirmation:</strong> Click <em>Cancel Plan</em>. Your cancellation is confirmed instantaneously with an email receipt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Grace Access:</strong> Your account retains full access to all studio features, script generators, and outlier data until the final second of your paid billing period.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Unexpected Charges:</strong> No further monthly renewals will ever be initiated once cancellation is registered.</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">04.</span>
                Recurring Billing Cycles & Renewal Terms
              </h2>
              <p>
                Leksmedia subscriptions are billed automatically on a recurring monthly cycle on the calendar date corresponding to your initial registration:
              </p>
              <p>
                Subsequent recurring monthly renewals that take place <strong>after the initial 14-day guarantee window are non-refundable</strong>. It is the creator&apos;s responsibility to cancel their subscription prior to their upcoming renewal date if they do not wish to continue. An itemized invoice receipt from Stripe is emailed directly to your registered address upon every successful charge.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">05.</span>
                Plan Upgrades, Downgrades & Prorations
              </h2>
              <p>
                You can adjust your plan tier as your YouTube publishing frequency scales:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                  <span className="font-mono text-xs text-[#b8965a] uppercase font-semibold">Tier Upgrades (e.g., Starter → Pro)</span>
                  <p className="text-xs text-zinc-400">
                    Upgrades take effect immediately. Stripe automatically calculates a prorated credit for the unused days of your previous plan, applying it against the upgraded subscription cost.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                  <span className="font-mono text-xs text-[#b8965a] uppercase font-semibold">Tier Downgrades</span>
                  <p className="text-xs text-zinc-400">
                    Downgrades take effect at the conclusion of your current prepaid billing cycle, allowing you to use your existing tier deliverables through the remainder of the month.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">06.</span>
                Chargebacks & Dispute Resolution Protocol
              </h2>
              <div className="p-5 rounded-xl border border-amber-500/20 bg-amber-500/5 space-y-3">
                <div className="flex items-center gap-2 text-amber-200 text-xs font-mono uppercase tracking-wider font-semibold">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  Please Contact Billing Before Filing a Bank Dispute
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  We kindly ask all creators to contact{" "}
                  <a href="mailto:billing@leksmedia.com" className="text-[#b8965a] underline hover:text-white">
                    billing@leksmedia.com
                  </a>{" "}
                  directly before initiating a dispute or chargeback with your credit card issuer.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Bank disputes take 60–90 days to settle and incur substantial merchant penalties, whereas our concierge billing team can review and process an authorized refund in under 24 hours. Filing an unwarranted chargeback will result in immediate and permanent account suspension and blacklisting from all future Leksmedia services.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">07.</span>
                Fair Use, Anti-Abuse & Exclusions
              </h2>
              <p>
                To protect our high-compute infrastructure and prevent bad-faith exploitation, the 14-Day Guarantee is subject to standard fair use guidelines:
              </p>
              <ul className="space-y-2 pl-4 border-l border-white/10 text-xs font-mono text-zinc-400">
                <li>
                  <strong className="text-white">Repeat Account Cycling:</strong> The 14-day refund guarantee is strictly limited to one (1) refund per individual creator or organization. Creating disposable accounts to repeatedly claim refunds is prohibited.
                </li>
                <li>
                  <strong className="text-white">Terms of Service Violations:</strong> Accounts suspended for deploying automated scraping bots, harassing creators, or violating the YouTube API Developer Terms are not eligible for refunds.
                </li>
                <li>
                  <strong className="text-white">Custom Done-For-You Agency Contracts:</strong> Any custom enterprise contracts or tailored bespoke studio consulting retainers are governed by their respective individual Master Services Agreements (MSAs).
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-serif text-white flex items-center gap-2">
                <span className="font-mono text-xs text-[#b8965a]">08.</span>
                Direct Billing Concierge & Inquiries
              </h2>
              <p>
                If you have questions about an upcoming invoice, need to update your corporate VAT/tax ID, or wish to clarify billing options, our dedicated billing desk is here to assist:
              </p>
              <div className="p-5 rounded-xl border border-white/10 bg-[#0d0d10] text-xs font-mono text-zinc-300 space-y-1.5">
                <p className="text-white font-medium">Leksmedia Billing & Accounts Department</p>
                <p>
                  Direct Billing Inquiries:{" "}
                  <a href="mailto:billing@leksmedia.com" className="text-[#b8965a] hover:underline">
                    billing@leksmedia.com
                  </a>
                </p>
                <p>Support Desk: support@leksmedia.com</p>
                <p>Operating Hours: Monday – Friday, 09:00 – 18:00 UTC</p>
                <p>Response SLA: 24 Business Hours</p>
              </div>
            </section>
          </div>

          {/* Quick links to other legal documents */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-white/50">
            <span>Related Legal Policies:</span>
            <Link href="/terms" className="text-[#b8965a] hover:underline">
              Terms of Service →
            </Link>
            <Link href="/privacy" className="text-[#b8965a] hover:underline">
              Privacy Policy →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
