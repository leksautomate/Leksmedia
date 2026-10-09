"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, TrendingUp, Play, CheckCircle2, Copy, ArrowRight, Zap, RefreshCw } from "lucide-react";
import { OUTLIER_VIDEOS } from "@/lib/creatorData";

export function HeroMockup() {
  const [activeTab, setActiveTab] = useState<"outlier" | "remix" | "linkedin">("outlier");
  const [views48h, setViews48h] = useState<number>(248000);
  const [avg48h, setAvg48h] = useState<number>(18400);
  const [copied, setCopied] = useState(false);

  const calculatedScore = Math.round((views48h / Math.max(1, avg48h)) * 100);

  const sampleVideo = OUTLIER_VIDEOS[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#b8965a]/30 via-[#b8965a]/10 to-transparent blur-xl opacity-70 animate-pulse-slow" />

      {/* Main Container */}
      <div className="relative bg-[#0d0d10] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(184,150,90,0.12)]">
        {/* Terminal / Device Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#08080a] border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="font-mono text-[11px] text-white/40 ml-2">creator_os_v4.live</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Live Outlier Feed
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center border-b border-white/5 bg-[#0a0a0c] px-3 pt-2">
          <button
            onClick={() => setActiveTab("outlier")}
            className={`px-3 py-1.5 font-mono text-xs font-medium rounded-t-lg transition-all ${
              activeTab === "outlier"
                ? "bg-[#141418] text-[#b8965a] border-t-2 border-[#b8965a]"
                : "text-white/40 hover:text-white"
            }`}
          >
            ⚡ Outlier Velocity
          </button>
          <button
            onClick={() => setActiveTab("remix")}
            className={`px-3 py-1.5 font-mono text-xs font-medium rounded-t-lg transition-all ${
              activeTab === "remix"
                ? "bg-[#141418] text-[#b8965a] border-t-2 border-[#b8965a]"
                : "text-white/40 hover:text-white"
            }`}
          >
            🎬 7-Step Hook
          </button>
          <button
            onClick={() => setActiveTab("linkedin")}
            className={`px-3 py-1.5 font-mono text-xs font-medium rounded-t-lg transition-all ${
              activeTab === "linkedin"
                ? "bg-[#141418] text-[#b8965a] border-t-2 border-[#b8965a]"
                : "text-white/40 hover:text-white"
            }`}
          >
            💼 LinkedIn Engine
          </button>
        </div>

        {/* Tab 1: Outlier Velocity & Live Formula */}
        {activeTab === "outlier" && (
          <div className="p-5 space-y-4">
            {/* Outlier Video Card Preview */}
            <div className="bg-[#141418] border border-white/10 rounded-xl p-3.5 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#b8965a] bg-[#b8965a]/10 px-2 py-0.5 rounded border border-[#b8965a]/20">
                    Asymmetric Age Paradox
                  </span>
                  <h4 className="text-sm font-semibold text-white/95 mt-1.5 line-clamp-2">
                    {sampleVideo.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-1 text-xs text-white/40 font-mono">
                    <span>{sampleVideo.channelName} ({sampleVideo.channelSubs})</span>
                    <span>• 48h ago</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="inline-flex flex-col items-end">
                    <span className="font-serif italic text-2xl text-[#b8965a] font-bold">
                      {calculatedScore}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                      {calculatedScore >= 500 ? "VIRAL 500+" : "STRONG 200+"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Formula & Sandbox Inputs */}
              <div className="bg-[#08080a] border border-white/5 rounded-xl p-3.5 space-y-3 font-mono">
                <div className="flex items-center justify-between text-white/40 text-[10px] uppercase">
                  <span>Interactive Outlier Sandbox</span>
                  <span className="text-[#b8965a] font-semibold">Score = (48h ÷ Avg) × 100</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="text-[10px] text-white/50 block mb-1">
                      Recent 48h Views
                    </label>
                    <input
                      type="number"
                      value={views48h}
                      onChange={(e) => setViews48h(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-[#141418] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#b8965a]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-white/50 block mb-1">
                      Channel Baseline Avg
                    </label>
                    <input
                      type="number"
                      value={avg48h}
                      onChange={(e) => setAvg48h(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-[#141418] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#b8965a]"
                    />
                  </div>
                </div>

                {/* Score Status Indicator */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px]">
                  <span className="text-white/60">Live Signal:</span>
                  <span
                    className={`font-semibold ${
                      calculatedScore >= 1000
                        ? "text-amber-400"
                        : calculatedScore >= 500
                        ? "text-emerald-400"
                        : calculatedScore >= 200
                        ? "text-sky-400"
                        : "text-zinc-400"
                    }`}
                  >
                    {calculatedScore >= 1000
                      ? "1,000+ Algorithmic Breakout"
                      : calculatedScore >= 500
                      ? "500+ Viral Outlier Spike"
                      : calculatedScore >= 200
                      ? "200+ Validated Market Signal"
                      : "Baseline (Ready for Hook Optimization)"}
                  </span>
                </div>

                {/* Quick Presets */}
                <div className="flex items-center gap-1.5 pt-1 border-t border-white/5">
                  <span className="text-[10px] font-mono text-white/40">Presets:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setViews48h(248000);
                      setAvg48h(18400);
                    }}
                    className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[10px] font-mono text-white/70 hover:text-white transition-colors"
                  >
                    13x Spike
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setViews48h(75000);
                      setAvg48h(12000);
                    }}
                    className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[10px] font-mono text-white/70 hover:text-white transition-colors"
                  >
                    6x Breakout
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setViews48h(32000);
                      setAvg48h(15000);
                    }}
                    className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[10px] font-mono text-white/70 hover:text-white transition-colors"
                  >
                    2x Lift
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-white/40 font-mono flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Demand Signal Verified
              </span>
              <button
                onClick={() => setActiveTab("remix")}
                className="text-xs font-medium text-[#b8965a] hover:text-[#d4b076] inline-flex items-center gap-1 font-mono"
              >
                Remix Hook →
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: 7-Step Hook Remix */}
        {activeTab === "remix" && (
          <div className="p-5 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase text-[#b8965a] tracking-wider">
                7-Step Retention Architecture
              </span>
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                High-Retention Certified
              </span>
            </div>

            <div className="space-y-2 bg-[#141418] border border-white/5 rounded-xl p-3 text-xs max-h-[220px] overflow-y-auto">
              <div className="pb-2 border-b border-white/5">
                <span className="text-[10px] font-mono text-[#b8965a] uppercase font-bold">
                  01 Pattern Interrupt
                </span>
                <p className="text-white/80 mt-0.5">
                  &ldquo;{sampleVideo.remixHook7Step.patternInterrupt}&rdquo;
                </p>
              </div>
              <div className="pb-2 border-b border-white/5">
                <span className="text-[10px] font-mono text-[#b8965a] uppercase font-bold">
                  02 Mirror Viewer
                </span>
                <p className="text-white/80 mt-0.5">
                  &ldquo;{sampleVideo.remixHook7Step.mirrorViewer}&rdquo;
                </p>
              </div>
              <div className="pb-2 border-b border-white/5">
                <span className="text-[10px] font-mono text-[#b8965a] uppercase font-bold">
                  03 The Opportunity
                </span>
                <p className="text-white/80 mt-0.5">
                  &ldquo;{sampleVideo.remixHook7Step.opportunity}&rdquo;
                </p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#b8965a] uppercase font-bold">
                  07 Transition
                </span>
                <p className="text-white/80 mt-0.5">
                  &ldquo;{sampleVideo.remixHook7Step.transition}&rdquo;
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => handleCopy(sampleVideo.remixHook7Step.patternInterrupt + " " + sampleVideo.remixHook7Step.mirrorViewer)}
                className="text-xs font-mono text-white/70 hover:text-white inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied ? "Copied Hook!" : "Copy Hook Script"}
              </button>
              <Link
                href="/#scripts"
                className="text-xs font-mono text-[#b8965a] hover:underline flex items-center gap-1"
              >
                Full Script Studio →
              </Link>
            </div>
          </div>
        )}

        {/* Tab 3: LinkedIn 6-Format Post Engine */}
        {activeTab === "linkedin" && (
          <div className="p-5 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase text-[#b8965a] tracking-wider">
                Output Format: ⚡ Contrarian (1 of 6)
              </span>
              <span className="font-mono text-[10px] text-white/50">
                650 characters • Ready
              </span>
            </div>

            <div className="bg-[#141418] border border-white/5 rounded-xl p-3.5 space-y-2 text-xs">
              <p className="font-semibold text-white">
                Unpopular opinion: Posting 5 times a day on social media is the fastest way to kill your personal brand.
              </p>
              <p className="text-white/70 leading-relaxed text-[11px]">
                High-net-worth clients and serious partners don&apos;t remember frequency. They remember depth. One masterclass video backed by real outlier research will bring you more inbound deals than 90 superficial posts.
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                <span>🎯 Inbound CTA Included</span>
                <span className="text-[#b8965a]">Visual Direction Included</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <Link
                href="/brand"
                className="btn-gold px-3.5 py-1.5 text-xs font-semibold"
              >
                See Full Blueprint →
              </Link>
              <Link
                href="/#scripts"
                className="text-xs font-mono text-white/40 hover:text-white"
              >
                Explore Scripts
              </Link>
            </div>
          </div>
        )}

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-[#08080a] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
          <span className="flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-[#b8965a]" />
            Leksmedia · Outlier Intelligence & Production
          </span>
          <span className="text-white/60">4,000+ Outlier Scripts Analyzed</span>
        </div>
      </div>
    </div>
  );
}
