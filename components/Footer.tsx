import React from "react";
import Link from "next/link";
import { Sparkles, Terminal } from "lucide-react";
import { YoutubeIcon, TwitterXIcon } from "@/components/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080a] pt-16 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-14 border-b border-white/5">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="font-serif italic text-2xl tracking-tight text-white">
                Leksmedia
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#b8965a] px-2 py-0.5 rounded-full border border-[#b8965a]/30 bg-[#b8965a]/10">
                Brand Studio
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              The complete YouTube personal brand system for creators and founders. Build your Ikigai brand blueprint, detect viral 48h YouTube outliers, and generate full-length production scripts.
            </p>
            <div className="flex items-center gap-3 pt-2 text-white/50">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-white/10 hover:border-[#b8965a] hover:text-[#b8965a] transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-white/10 hover:border-[#b8965a] hover:text-[#b8965a] transition-all"
                aria-label="Twitter / X"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Routes */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-white/40 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/onboarding" className="hover:text-white transition-colors">
                  Get Brand Blueprint
                </Link>
              </li>
              <li>
                <Link href="/brand" className="hover:text-white transition-colors">
                  Brand Strategy Deliverables
                </Link>
              </li>
              <li>
                <Link href="/#scripts" className="hover:text-white transition-colors">
                  Production Scripts
                </Link>
              </li>
              <li>
                <Link href="/dashboard?tab=youtube" className="hover:text-white transition-colors">
                  YouTube Outlier Hub
                </Link>
              </li>
              <li>
                <Link href="/admin/whitelist" className="hover:text-[#b8965a] text-[#b8965a]/80 transition-colors flex items-center gap-1 font-mono text-xs">
                  <Terminal className="w-3 h-3" />
                  Admin Whitelist
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Docs */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-white/40 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#scripts" className="hover:text-white transition-colors">
                  Production Scripts
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / User requested footer links */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-white/40 mb-4">
              Legal & Policy
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <p>© {new Date().getFullYear()} Leksmedia. All rights reserved. Built for creators and founders.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              Terms of Service
            </Link>
            <Link href="/refund" className="hover:text-white/70">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
