"use client";

import React, { useState } from "react";
import { NICHE_SCRIPTS, NicheScript } from "@/lib/creatorData";
import { Sparkles, CheckCircle2, Copy, FileText, Clapperboard, Layers, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export function NicheScriptStudio() {
  const [selectedScript, setSelectedScript] = useState<NicheScript>(NICHE_SCRIPTS[0]);
  const [copied, setCopied] = useState(false);
  const [showCustomCreator, setShowCustomCreator] = useState(false);
  const [customTitleInput, setCustomTitleInput] = useState("");
  const [customNicheInput, setCustomNicheInput] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCreateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const title = customTitleInput.trim() || "The Untold Blueprint of High-Retention Content";
    const niche = customNicheInput.trim() || "Autonomous Creative Systems";

    const customScript: NicheScript = {
      id: "custom-" + Date.now(),
      niche,
      title,
      hookType: "Pattern Interrupt + High Stakes Reveal",
      productionScript: {
        hook: `[VISUAL: Cinematic high-contrast workspace, slow tracking shot]\n[SOUND: Subtle low sub-bass pulse]\nMost people in ${niche} are still doing this completely backwards.\n[TEXT ON SCREEN: Stop Wasting 40 Hours]\nIn the next few minutes, everything you thought you knew about ${title} is going to change.`,
        brollCues: [
          `[VISUAL: Analytics graph showing abnormal growth spike]`,
          `[B-ROLL: Studio microphone and audio waveform display]`,
          `[CLIP: Deconstructed workflow blueprint]`
        ],
        timestamps: "0:00 - 0:45 (Hook) | 0:45 - 2:30 (The Core Shift) | 2:30 - 5:00 (Execution)",
        body: `When you look at the creators dominating ${niche} right now, they aren't working harder. They are leveraging asymmetric outlier data and structured delivery to capture audience attention.\n\nHere is the exact 3-step breakdown they use to hold viewer retention past the 8-minute mark:\n\nFirst, they eliminate dead air and repetitive introductions. You have exactly 5 seconds to establish high stakes before a viewer swipes away.\n\nSecond, they embed visual resets every 45 seconds. Whether that's an on-screen kinetic graphic, a sound design cue, or a sudden perspective change, keeping the visual rhythm dynamic is non-negotiable.\n\nThird, they lead with an open loop that resolves only in the final third of the video. When your audience feels that the biggest insight is still ahead, your average percentage viewed skyrockets.`
      },
      antiSlopAudit: {
        passed: true,
        colonsRemoved: 2,
        spokenCoffeeShopScore: 99,
        feedback: `Clean spoken rhythm tailored to ${niche}. Zero synthetic buzzwords.`
      }
    };

    setSelectedScript(customScript);
    setShowCustomCreator(false);
  };

  const scriptData = selectedScript.productionScript || selectedScript.traditionalMode!;
  const fullScriptText = `${scriptData.hook}\n\n// B-ROLL & VISUAL ASSETS:\n${scriptData.brollCues.join("\n")}\n\n// FULL SCRIPT BODY (${scriptData.timestamps}):\n${scriptData.body}`;

  return (
    <section id="scripts" className="py-24 px-6 border-b border-white/10 bg-[#08080a] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#b8965a]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#b8965a]/30 bg-[#b8965a]/10 text-[#b8965a] font-mono text-xs uppercase tracking-widest">
            <Clapperboard className="w-3.5 h-3.5" />
            Included in Your Leksmedia Membership
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl text-white tracking-tight leading-[1.08]">
            Full Long-Form{" "}
            <em className="text-[#b8965a] italic">Production Scripts</em>
          </h2>
          <p className="text-base text-white/60 leading-relaxed font-light">
            Ready-to-record video scripts modeled on verified viral outliers. Every script includes scene directions, B-roll cues, timestamps, and full conversational dialogue structured for maximum retention.
          </p>
        </div>

        {/* Niche selector buttons + Custom Topic Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
          <span className="font-mono text-xs text-white/40 uppercase tracking-wider">
            Explore Production Script Samples:
          </span>
          <button
            onClick={() => setShowCustomCreator(!showCustomCreator)}
            className="btn-gold px-4 py-1.5 text-xs font-semibold inline-flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {showCustomCreator ? "Close Custom Form" : "+ Model My Own Topic"}
          </button>
        </div>

        {showCustomCreator && (
          <form
            onSubmit={handleCreateCustom}
            className="mb-8 p-6 rounded-2xl bg-[#141418] border border-[#b8965a]/40 space-y-4 animate-fade-in shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#b8965a]" />
                Generate Long-Form Script for Your Topic
              </h4>
              <span className="font-mono text-[10px] text-[#b8965a] bg-[#b8965a]/10 px-2 py-0.5 rounded">
                Full Production Format
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-white/60 mb-1">
                  Your Industry / Niche:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. B2B SaaS, Health & Longevity, Real Estate, Wealth..."
                  value={customNicheInput}
                  onChange={(e) => setCustomNicheInput(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#b8965a]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-white/60 mb-1">
                  Video Concept / Title:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. How Solo Operators Outperform 10-Person Teams..."
                  value={customTitleInput}
                  onChange={(e) => setCustomTitleInput(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#b8965a]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowCustomCreator(false)}
                className="btn-secondary px-4 py-2 text-xs font-mono"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-gold px-6 py-2 text-xs font-semibold cursor-pointer shadow-[0_0_20px_rgba(184,150,90,0.4)]"
              >
                Generate Script Output →
              </button>
            </div>
          </form>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {NICHE_SCRIPTS.map((script) => (
            <button
              key={script.id}
              onClick={() => setSelectedScript(script)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                selectedScript.id === script.id
                  ? "bg-[#141418] border-[#b8965a] shadow-[0_0_25px_rgba(184,150,90,0.15)]"
                  : "bg-[#0d0d10] border-white/5 hover:border-white/20 text-white/60 hover:text-white"
              }`}
            >
              <div className="font-mono text-[10px] text-[#b8965a] uppercase tracking-wider mb-1">
                {script.hookType}
              </div>
              <div className="text-sm font-semibold text-white truncate">
                {script.niche}
              </div>
              <p className="text-xs text-white/40 truncate mt-1">
                {script.title}
              </p>
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Script Preview Column */}
          <div className="lg:col-span-8 bg-[#0d0d10] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* Title & Metadata Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="font-mono text-xs text-[#b8965a] uppercase tracking-wider">
                  Niche: {selectedScript.niche}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-white font-normal mt-1">
                  {selectedScript.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  Full Production Script
                </span>
              </div>
            </div>

            {/* Script Text Display */}
            <div className="space-y-4">
              {/* Hook & Directions */}
              <div className="bg-[#141418] border border-white/5 rounded-xl p-5 font-mono text-xs leading-relaxed text-white/80 whitespace-pre-wrap">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                  <span className="text-[#b8965a] font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Opening Hook & Scene Directions ({scriptData.timestamps.split("|")[0].trim()})
                  </span>
                  <span className="text-[10px] text-white/40">Visual + Pacing Cues</span>
                </div>
                {scriptData.hook}
              </div>

              {/* B-Roll and Assets */}
              <div className="bg-[#141418] border border-white/5 rounded-xl p-5 font-mono text-xs leading-relaxed text-white/70">
                <span className="text-[#b8965a] block mb-2 font-bold uppercase tracking-wider text-[11px]">
                  // B-Roll & Visual Assets For Editor:
                </span>
                <ul className="space-y-1.5 text-white/70">
                  {scriptData.brollCues.map((cue, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span> {cue}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Body */}
              <div className="bg-[#141418] border border-white/5 rounded-xl p-5 font-mono text-xs leading-relaxed text-white/80 whitespace-pre-wrap">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                  <span className="text-[#b8965a] font-bold uppercase tracking-wider text-[11px]">
                    // Narrative Progression & Retention Resets:
                  </span>
                  <span className="text-[10px] text-white/40">Chapters 01 – 03</span>
                </div>
                {scriptData.body}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <button
                onClick={() => handleCopy(fullScriptText)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-[#b8965a] text-xs font-mono text-white/90 hover:text-white bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5 text-[#b8965a]" />
                {copied ? "Copied Full Script!" : "Copy Full Production Script"}
              </button>

              <span className="text-xs font-mono text-white/40">
                100% Ready for Recording & Video Editing
              </span>
            </div>
          </div>

          {/* Right Script Specifications & Intelligence Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Script Intelligence Card */}
            <div className="bg-[#0d0d10] border border-white/10 rounded-2xl p-6 space-y-5">
              <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                <Layers className="w-5 h-5 text-[#b8965a]" />
                <h4 className="text-sm font-semibold text-white">
                  Script Production Specs
                </h4>
              </div>

              <div className="space-y-3.5 text-xs font-mono">
                <div className="p-3 rounded-lg bg-[#141418] border border-white/5 flex items-center justify-between">
                  <span className="text-white/40">Target Run Time</span>
                  <span className="text-white font-semibold">8 – 12 Minutes</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141418] border border-white/5 flex items-center justify-between">
                  <span className="text-white/40">Hook Framework</span>
                  <span className="text-[#b8965a] font-semibold">7-Step Retention</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141418] border border-white/5 flex items-center justify-between">
                  <span className="text-white/40">B-Roll Asset Directions</span>
                  <span className="text-emerald-400 font-semibold">Included in Cue</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141418] border border-white/5 flex items-center justify-between">
                  <span className="text-white/40">Retention Reset Interval</span>
                  <span className="text-white font-semibold">Every 45 Seconds</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 space-y-2">
                <span className="text-[11px] font-mono text-white/40 uppercase block">
                  Quality & Flow Verification:
                </span>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Structured with conversational spoken cadence. Reads naturally on camera with zero robotic phrasing, corporate jargon, or awkward formatting.
                </p>
              </div>
            </div>

            {/* Turnkey Service Callout */}
            <div className="bg-[#0f0f12] border border-[#b8965a]/30 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#b8965a] uppercase tracking-wider font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Part of Your Leksmedia Subscription
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                No separate add-ons or hidden software charges. Every month, you receive high-velocity scripts mapped directly to your category positioning.
              </p>
              <Link
                href="/onboarding"
                className="btn-gold w-full py-2.5 text-xs font-semibold text-center flex items-center justify-center gap-1.5"
              >
                Get Scripts in Your Niche
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
