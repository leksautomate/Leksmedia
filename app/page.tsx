"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BeamsCanvas } from "@/components/BeamsCanvas";
import { NicheScriptStudio } from "@/components/NicheScriptStudio";
import {
  Sparkles,
  ArrowRight,
  Zap,
  TrendingUp,
  Share2,
  BarChart3,
  Compass,
  CheckCircle2,
  ChevronDown,
  Layers,
  HelpCircle,
  Film,
  FileText,
  Target,
  Flame,
  Award,
  Video,
  Play,
  Volume2,
  Terminal,
  Code2,
  Copy,
  Cpu,
  Boxes
} from "lucide-react";

export default function LandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeMcpTab, setActiveMcpTab] = useState<"claude" | "codex" | "host">("claude");
  const [copiedMcp, setCopiedMcp] = useState<string | null>(null);

  const copySnippet = (text: string, id: string) => {
    if (typeof window !== "undefined" && navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedMcp(id);
      setTimeout(() => setCopiedMcp(null), 2000);
    }
  };

  const faqs = [
    {
      q: "What makes Leksmedia different from generic content generators?",
      a: "Generic tools churn out robotic bullet lists with predictable cliches. Leksmedia is a dedicated personal brand and viral content system built by deconstructing 4,000+ real viral outlier videos across 40 niches. It uses verified 48-hour YouTube velocity and rigorous human-cadence calibration so your content feels authoritative, conversational, and binge-worthy."
    },
    {
      q: "How does the Outlier Score calculation work?",
      a: "Outlier Score = (Views in 48h ÷ Channel Average Views in 48h) × 100. A score of 200+ indicates strong abnormal demand. A score of 500+ indicates an organic algorithmic breakout. We specifically highlight smaller creators (<50k subscribers) who produce 500+ outliers, because that proves high topic demand regardless of existing audience size."
    },
    {
      q: "How does the 7-Step Hook Remixer structure viral video introductions?",
      a: "Viewer retention is won or lost in the first 30 seconds. Our 7-Step Hook Remixer analyzes outlier videos to engineer: (1) Visual Pattern Interrupt, (2) Problem Identification, (3) High-Stakes Agitation, (4) Invalidation of Common Wisdom, (5) New Paradigm Reveal, (6) Concrete Proof Metric, and (7) Video Roadmap. This structure prevents drop-off and maximizes average percentage viewed."
    },
    {
      q: "What format are the YouTube video scripts delivered in?",
      a: "Every script is delivered as a complete, full-length production script (8–12 minutes) ready for you or your editor. It includes precise scene directions, B-roll cues, screen text, timestamps, and full conversational dialogue structured around proven viral retention curves."
    },
    {
      q: "How does the Ikigai flow discover my monetizable niche?",
      a: "Our guided onboarding takes you through the 4 fundamental Ikigai quadrants: Passion (what you love), Skills (what you're naturally great at), Mission (the problems you feel called to solve), and Vocation (what high-ticket clients pay for). The intersection pinpoints your high-margin category positioning, Ideal Customer Avatar (ICA), and 3-5 core content pillars."
    },
    {
      q: "Do I need to connect any APIs or configure technical tools?",
      a: "Zero technical setup required. All algorithmic YouTube data feeds, outlier tracking, and script engines are connected and powered directly by Leksmedia in the backend. All you do is complete your intake, receive your blueprints and production scripts, and publish."
    }
  ];

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f5f5f4] selection:bg-[#b8965a]/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] pt-32 pb-20 px-6 border-b border-white/10 overflow-hidden flex items-center justify-center">
        {/* Animated Beams background */}
        <BeamsCanvas />
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

        <div className="max-w-4xl mx-auto w-full relative z-10 text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#0f0f12] text-white/70 text-xs font-mono tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#b8965a] animate-ping" />
            Leksmedia · YouTube Personal Brand Engine
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.06] text-white tracking-tight">
            Build your brand.{" "}
            <em className="text-[#b8965a] font-serif-italic block sm:inline">
              Dominate your niche.
            </em>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
            The complete self-serve YouTube personal brand system. Build your own Ikigai blueprint, track verified 48h YouTube viral outliers, and generate ready-to-record full-length production scripts with 7-step retention hooks—all on your own.
          </p>

          {/* Dual CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/onboarding"
              className="btn-gold px-8 py-4 text-sm font-semibold tracking-wide flex items-center gap-2 shadow-[0_0_35px_rgba(184,150,90,0.4)] hover:scale-[1.02] transition-transform"
            >
              Get My Blueprint
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#how-it-works"
              className="btn-secondary px-7 py-4 text-sm font-medium"
            >
              Explore How It Works
            </Link>
          </div>

          {/* Integrated Leksmedia Pillars */}
          <div className="pt-8 border-t border-white/5 max-w-3xl mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3.5 text-center">
              Integrated YouTube Pillars →
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-xl border border-white/5 bg-[#0f0f12]/80 backdrop-blur-sm flex flex-col gap-1 hover:border-white/15 transition-colors">
                <Compass className="w-4 h-4 text-[#b8965a]" />
                <span className="text-xs font-semibold text-white">Ikigai Blueprint</span>
                <span className="text-[10px] text-white/40">Category Design</span>
              </div>
              <div className="p-3.5 rounded-xl border border-white/5 bg-[#0f0f12]/80 backdrop-blur-sm flex flex-col gap-1 hover:border-white/15 transition-colors">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-white">Outlier Feed</span>
                <span className="text-[10px] text-white/40">Real 48h Data</span>
              </div>
              <div className="p-3.5 rounded-xl border border-white/5 bg-[#0f0f12]/80 backdrop-blur-sm flex flex-col gap-1 hover:border-white/15 transition-colors">
                <Flame className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-white">7-Step Hooks</span>
                <span className="text-[10px] text-white/40">Retention Curves</span>
              </div>
              <div className="p-3.5 rounded-xl border border-white/5 bg-[#0f0f12]/80 backdrop-blur-sm flex flex-col gap-1 hover:border-white/15 transition-colors">
                <FileText className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-white">Long-Form Scripts</span>
                <span className="text-[10px] text-white/40">Full Production Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE SECTION — 3 Core Pillars */}
      <section className="py-24 px-6 border-b border-white/10 bg-[#0b0b0e]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="text-left space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#b8965a] font-semibold">
                Personal Brand Software Architecture
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-white">
                The 3 core system pillars
              </h2>
              <p className="text-sm text-zinc-300 font-normal max-w-xl leading-relaxed">
                Synthesize your high-ticket positioning, detect 48-hour viral demand signals, and generate ready-to-record production scripts with 7-step retention hooks on demand.
              </p>
            </div>

            <Link
              href="/onboarding"
              className="btn-gold px-6 py-3 text-xs font-semibold tracking-wide inline-flex items-center gap-2 shadow-[0_0_20px_rgba(184,150,90,0.35)] flex-shrink-0"
            >
              Get Your Brand Blueprint
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service Pillar 1 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#08080a] flex flex-col justify-between space-y-6 shadow-xl hover:border-[#b8965a]/50 transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#b8965a]/10 border border-[#b8965a]/30 flex items-center justify-center text-[#b8965a] group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#b8965a] font-medium block">
                    Pillar 01 · Positioning
                  </span>
                  <h3 className="font-serif text-2xl text-white mt-1">
                    Brand & Category Architecture
                  </h3>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  Synthesis of your unfair advantages and market mission into a defensible category positioning statement, Ideal Customer Avatar (ICA), and 4 high-margin monetization pillars.
                </p>

                <div className="bg-white/[0.04] p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-mono text-[10px] text-[#b8965a] uppercase tracking-wider block font-semibold">
                    Core Specifications:
                  </span>
                  <ul className="space-y-2 text-xs font-medium text-zinc-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      Ikigai Quadrant Synthesis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      Psychographic ICA Persona
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      Signature Brand Voice & Tone Rules
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
                <span className="text-[#b8965a]">Phase 01</span>
                <span>Immediate Generation</span>
              </div>
            </div>

            {/* Service Pillar 2 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#08080a] flex flex-col justify-between space-y-6 shadow-xl hover:border-emerald-500/50 transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-emerald-400 font-medium block">
                    Pillar 02 · YouTube Outliers
                  </span>
                  <h3 className="font-serif text-2xl text-white mt-1">
                    Viral Strategy & 7-Step Scripts
                  </h3>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  Real 48-hour view velocity analytics detecting unexploited category outliers. Remodeled into high-retention 7-step hook sequences and complete long-form video scripts.
                </p>

                <div className="bg-white/[0.04] p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block font-semibold">
                    Core Specifications:
                  </span>
                  <ul className="space-y-2 text-xs font-medium text-zinc-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      Real 48h Outlier Velocity Feed
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      7-Step Hook Sequence Remixer
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      Full Long-Form Production Scripts
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
                <span className="text-emerald-400">Phase 02</span>
                <span>Automated Backend Tracking</span>
              </div>
            </div>

            {/* Service Pillar 3 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#08080a] flex flex-col justify-between space-y-6 shadow-xl hover:border-amber-400/50 transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <Film className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-amber-400 font-medium block">
                    Pillar 03 · Production Studio
                  </span>
                  <h3 className="font-serif text-2xl text-white mt-1">
                    Long-Form Scripts & Packaging
                  </h3>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  Turn outlier concepts into 8–12 minute full-length YouTube production scripts complete with scene-by-scene B-roll direction, sound cues, and high-CTR title packaging.
                </p>

                <div className="bg-white/[0.04] p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="font-mono text-[10px] text-amber-400 uppercase tracking-wider block font-semibold">
                    Core Specifications:
                  </span>
                  <ul className="space-y-2 text-xs font-medium text-zinc-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      8–12 Min Scene-by-Scene Scripts
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      Visual B-Roll & Pacing Directions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      High-CTR Thumbnail & Title Briefs
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
                <span className="text-amber-400">Phase 03</span>
                <span>Production Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION (#how-it-works) */}
      <section id="how-it-works" className="py-24 px-6 border-b border-white/10 bg-[#08080a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#b8965a]">
              Self-Serve Creator Workflow
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl text-white mt-2">
              Build your engine. <em className="text-[#b8965a] italic">Run it on your own terms.</em>
            </h2>
            <p className="text-sm text-white/60 mt-3 font-light leading-relaxed max-w-xl">
              We aren&apos;t an agency holding you back. You use the Leksmedia system to build, calibrate, and execute your entire YouTube brand on your own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-2xl overflow-hidden bg-[#0d0d10]">
            {/* Step 1 */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 space-y-4">
              <span className="font-mono text-xs text-[#b8965a] uppercase font-bold tracking-wider">
                Step 01
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                Define Your Category
              </h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Run the Ikigai diagnostic to generate your exact one-line positioning, Ideal Customer Avatar (pain points & mindset), and brand voice rules.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 space-y-4">
              <span className="font-mono text-xs text-[#b8965a] uppercase font-bold tracking-wider">
                Step 02
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                Detect 48h Outliers
              </h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Scan YouTube daily for abnormal velocity spikes (200+ and 500+ Outlier Scores). Stop guessing what the algorithm wants; follow verified demand signals.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 space-y-4">
              <span className="font-mono text-xs text-[#b8965a] uppercase font-bold tracking-wider">
                Step 03
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                Produce Full Scripts & Hooks
              </h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Generate ready-to-record 8–12 minute full-length YouTube scripts complete with 7-step retention hooks, scene pacing, B-roll cues, and title angles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS / USE CASES SECTION (#use-cases) */}
      <section id="use-cases" className="py-24 px-6 border-b border-white/10 bg-[#0a0a0d]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-left max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#b8965a]">
              Four Core Engines
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl text-white mt-2">
              The complete YouTube brand <em className="text-[#b8965a] italic">operating system.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Personal Brand Blueprint */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0f0f14] hover:border-[#b8965a]/50 transition-all space-y-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#b8965a]/10 border border-[#b8965a]/30 flex items-center justify-center text-[#b8965a]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-[#b8965a]">
                    <span className="px-2 py-0.5 rounded bg-[#b8965a]/10 border border-[#b8965a]/20">Ikigai</span>
                    <span className="px-2 py-0.5 rounded bg-[#b8965a]/10 border border-[#b8965a]/20">Brand Voice</span>
                    <span className="px-2 py-0.5 rounded bg-[#b8965a]/10 border border-[#b8965a]/20">Content Pillars</span>
                  </div>
                </div>

                <h3 className="font-serif text-3xl text-white group-hover:text-[#b8965a] transition-colors">
                  📖 Personal Brand Blueprint
                </h3>

                <ul className="space-y-2 text-sm text-white/70 font-light">
                  <li>• Ikigai framework + data-backed category positioning analysis</li>
                  <li>• One-line brand identity: who + who you serve + differentiation</li>
                  <li>• Ideal Customer Avatar (ICA) with pain points, goals & mindset</li>
                  <li>• 3–5 monetization content pillars with 15+ proven viral topic ideas</li>
                </ul>
              </div>

              <Link
                href="/onboarding"
                className="btn-gold py-2.5 text-xs font-semibold text-center"
              >
                Build My Brand →
              </Link>
            </div>

            {/* Card 2: Content Studio */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0f0f14] hover:border-[#b8965a]/50 transition-all space-y-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-emerald-400">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">Live Data</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">Outliers</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">Script Gen</span>
                  </div>
                </div>

                <h3 className="font-serif text-3xl text-white group-hover:text-emerald-400 transition-colors">
                  🎬 Outlier Velocity Studio
                </h3>

                <ul className="space-y-2 text-sm text-white/70 font-light">
                  <li>• Real-time viral outlier detection powered by YouTube v3 metrics</li>
                  <li>• Automated Outlier Score calculation (Views in 48h ÷ Avg in 48h)</li>
                  <li>• 7-Step Hook Formula remixer tailored to your niche</li>
                  <li>• Thumbnail creative briefs & visual storytelling frameworks</li>
                </ul>
              </div>

              <Link
                href="/#scripts"
                className="btn-secondary py-2.5 text-xs font-semibold text-center"
              >
                Explore Scripts →
              </Link>
            </div>

            {/* Card 3: Long-Form Script Studio */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0f0f14] hover:border-[#b8965a]/50 transition-all space-y-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Film className="w-5 h-5" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-amber-400">
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">8–12 Mins</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">B-Roll Cues</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">7-Step Hooks</span>
                  </div>
                </div>

                <h3 className="font-serif text-3xl text-white group-hover:text-amber-400 transition-colors">
                  🎬 Long-Form Script Studio
                </h3>

                <ul className="space-y-2 text-sm text-white/70 font-light">
                  <li>• Complete full-length YouTube production scripts with scene-by-scene timing</li>
                  <li>• 7-Step retention hook formulas engineered to retain viewers past 30 seconds</li>
                  <li>• Precise B-roll cues, sound effects directions, and on-screen graphics prompts</li>
                  <li>• Spoken coffee-shop cadence audit ensuring natural conversational delivery</li>
                </ul>
              </div>

              <Link
                href="/#scripts"
                className="btn-gold py-2.5 text-xs font-semibold text-center"
              >
                Launch Script Studio →
              </Link>
            </div>

            {/* Card 4: Content Analysis */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0f0f14] hover:border-[#b8965a]/50 transition-all space-y-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-amber-400">
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">Performance</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">Insights</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">Lessons</span>
                  </div>
                </div>

                <h3 className="font-serif text-3xl text-white group-hover:text-amber-400 transition-colors">
                  📊 Content Analysis
                </h3>

                <ul className="space-y-2 text-sm text-white/70 font-light">
                  <li>• Audit your channel across 3 tiers: Top 10% Winners, Average, and Flops</li>
                  <li>• Understand the specific retention drop-offs and hook weaknesses</li>
                  <li>• Retention lessons extracted from each video to continuously elevate watch-time</li>
                  <li>• Systematic pattern recognition to replicate winning retention loops</li>
                </ul>
              </div>

              <Link
                href="/onboarding"
                className="btn-secondary py-2.5 text-xs font-semibold text-center"
              >
                Analyze My Channel →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FULL LONG-FORM PRODUCTION SCRIPT STUDIO */}
      <NicheScriptStudio />

      {/* KEY CONCEPTS BREAKDOWN SECTION */}
      <section className="py-24 px-6 border-b border-white/10 bg-[#08080a]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#b8965a]">
              The Core Engine Principles
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl text-white mt-2">
              Engineered for algorithmic leverage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Concept 1: Outlier Score */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#b8965a] uppercase tracking-wider">
                <Flame className="w-4 h-4" />
                ⚡ Outlier Score
              </div>
              <h3 className="font-serif text-2xl text-white">
                Find Real Demand Signals
              </h3>
              <div className="bg-black/50 p-3 rounded-lg font-mono text-[11px] text-white/80 border border-white/5">
                Score = (Views in 48h ÷ Avg in 48h) × 100
              </div>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Prioritizes smaller creators over massive vanity brands. When an 8,000 subscriber channel hits 350,000 views, the topic is gold.
              </p>
              <div className="pt-2 text-xs font-mono text-white/50 space-y-1">
                <p className="text-emerald-400">• 200+ → Strong Demand</p>
                <p className="text-[#b8965a] font-semibold">• 500+ → Algorithmic Viral Breakout</p>
              </div>
            </div>

            {/* Concept 2: Ikigai Framework */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                🧩 Ikigai Framework
              </div>
              <h3 className="font-serif text-2xl text-white">
                Monetizable Niche Intersection
              </h3>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-white/80">
                <div className="p-2 bg-black/40 rounded border border-white/5">1. ❤️ Passion</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">2. ⭐ Skills</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">3. 🌐 Mission</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">4. 💰 Vocation</div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                The exact center of all four circles is your sustainable, high-margin category of one where you cannot be commoditized.
              </p>
            </div>

            {/* Concept 3: 7-Step Hook Formula */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider">
                <Target className="w-4 h-4" />
                🎬 7-Step Hook Formula
              </div>
              <h3 className="font-serif text-2xl text-white">
                Eliminate Early Drop-offs
              </h3>
              <ol className="text-xs font-mono text-white/70 space-y-1 list-decimal pl-4">
                <li>Pattern Interrupt</li>
                <li>Mirror Viewer</li>
                <li>Opportunity</li>
                <li>The Gap</li>
                <li>Transformation</li>
                <li>Authority</li>
                <li>The Transition</li>
              </ol>
              <p className="text-xs text-white/50 leading-relaxed pt-1">
                Extracted from 4,000 real viral outlier scripts to maintain 70%+ retention through the critical first 60 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODEL CONTEXT PROTOCOL (MCP) — CLAUDE CODE, CODEX & MCP HOST SECTION */}
      <section id="developer-mcp" className="py-24 px-6 border-b border-white/10 bg-[#070709] relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#b8965a]/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto space-y-14 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#b8965a]/30 bg-[#b8965a]/10 text-xs font-mono text-[#b8965a]">
                <Terminal className="w-3.5 h-3.5" />
                Model Context Protocol (MCP) · Agent Ecosystem
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight">
                Build on your own. Hook into{" "}
                <em className="text-[#b8965a] font-serif-italic block sm:inline">Claude Code, Codex &amp; any MCP Host.</em>
              </h2>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                You aren&apos;t dependent on an agency or third-party contractors. You use Leksmedia&apos;s self-serve intelligence to build your own engine on your own terms. Use our visual web studio or plug our live YouTube outlier velocity, hook remixer, and script generator directly into your AI agent stack.
              </p>
            </div>

            <Link
              href="/docs/mcp"
              className="btn-secondary px-6 py-3 text-xs font-mono font-medium inline-flex items-center gap-2 self-start md:self-auto hover:border-[#b8965a]/50 hover:text-white transition-all"
            >
              <Code2 className="w-3.5 h-3.5 text-[#b8965a]" />
              Full MCP Documentation →
            </Link>
          </div>

          {/* Interactive Environment Tabs */}
          <div className="border border-white/10 rounded-2xl bg-[#0c0c10] overflow-hidden shadow-2xl">
            {/* Tab Selector Bar */}
            <div className="flex flex-wrap items-center border-b border-white/10 bg-white/[0.02] p-2 gap-2">
              <button
                type="button"
                onClick={() => setActiveMcpTab("claude")}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs transition-all flex items-center gap-2 ${
                  activeMcpTab === "claude"
                    ? "bg-[#b8965a] text-black font-semibold shadow-lg shadow-[#b8965a]/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                Claude Code CLI
              </button>
              <button
                type="button"
                onClick={() => setActiveMcpTab("codex")}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs transition-all flex items-center gap-2 ${
                  activeMcpTab === "codex"
                    ? "bg-[#b8965a] text-black font-semibold shadow-lg shadow-[#b8965a]/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                Codex &amp; IDE (Cursor / VS Code)
              </button>
              <button
                type="button"
                onClick={() => setActiveMcpTab("host")}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs transition-all flex items-center gap-2 ${
                  activeMcpTab === "host"
                    ? "bg-[#b8965a] text-black font-semibold shadow-lg shadow-[#b8965a]/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Boxes className="w-3.5 h-3.5" />
                Universal MCP Host (Desktop / Agents)
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-8 space-y-6">
              {activeMcpTab === "claude" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-2xl text-white flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-[#b8965a]" />
                        Connect Claude Code in 1 Terminal Line
                      </h3>
                      <p className="text-xs text-zinc-400 font-light mt-1">
                        Run this in your local terminal. Claude Code immediately gains direct access to 48-hour YouTube outlier scores, 7-step hook formulas, and Ikigai positioning queries.
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full self-start">
                      HTTP SSE Transport
                    </span>
                  </div>

                  {/* Terminal Code Mockup */}
                  <div className="relative rounded-xl bg-black/80 border border-white/10 p-5 font-mono text-xs">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-[11px] text-zinc-500">
                      <span>Terminal / Bash / PowerShell</span>
                      <span className="text-[#b8965a]">leksmedia-mcp-v1</span>
                    </div>
                    <pre className="text-zinc-200 overflow-x-auto whitespace-pre-wrap break-all pr-14 leading-relaxed">
                      claude mcp add --transport http leksmedia https://leksmedia.com/api/v1/mcp --header &quot;Authorization: Bearer leks_live_YOUR_API_KEY&quot;
                    </pre>
                    <button
                      type="button"
                      onClick={() =>
                        copySnippet(
                          'claude mcp add --transport http leksmedia https://leksmedia.com/api/v1/mcp --header "Authorization: Bearer leks_live_YOUR_API_KEY"',
                          "claude"
                        )
                      }
                      className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all border border-white/10"
                      title="Copy command"
                    >
                      {copiedMcp === "claude" ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Example Agent Prompt */}
                  <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                    <span className="font-mono text-[11px] text-[#b8965a] uppercase tracking-wider font-semibold">
                      Example Agent Command in Claude Code:
                    </span>
                    <p className="text-xs text-zinc-300 font-mono italic">
                      &gt; &ldquo;Query Leksmedia for 500+ outlier videos published in the last 48 hours for &apos;AI Automation Agencies&apos;, break down the best hook, and generate a 10-minute production script into ./scripts/video-01.md&rdquo;
                    </p>
                  </div>
                </div>
              )}

              {activeMcpTab === "codex" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-2xl text-white flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-[#b8965a]" />
                        Codex, Cursor &amp; VS Code Configuration
                      </h3>
                      <p className="text-xs text-zinc-400 font-light mt-1">
                        Add this JSON configuration into your project&apos;s <code className="text-[#b8965a]">.cursor/mcp.json</code> or IDE MCP settings to allow your coding agent to scaffold scripts autonomously.
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-[#b8965a] bg-[#b8965a]/10 border border-[#b8965a]/20 px-2.5 py-1 rounded-full self-start">
                      mcp.json format
                    </span>
                  </div>

                  {/* JSON Code Mockup */}
                  <div className="relative rounded-xl bg-black/80 border border-white/10 p-5 font-mono text-xs">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-[11px] text-zinc-500">
                      <span>.cursor/mcp.json</span>
                      <span className="text-[#b8965a]">JSON-RPC 2.0</span>
                    </div>
                    <pre className="text-zinc-200 overflow-x-auto whitespace-pre leading-relaxed">
{`{
  "mcpServers": {
    "leksmedia": {
      "url": "https://leksmedia.com/api/v1/mcp",
      "headers": {
        "Authorization": "Bearer leks_live_YOUR_API_KEY"
      }
    }
  }
}`}
                    </pre>
                    <button
                      type="button"
                      onClick={() =>
                        copySnippet(
`{
  "mcpServers": {
    "leksmedia": {
      "url": "https://leksmedia.com/api/v1/mcp",
      "headers": {
        "Authorization": "Bearer leks_live_YOUR_API_KEY"
      }
    }
  }
}`,
                          "codex"
                        )
                      }
                      className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all border border-white/10"
                      title="Copy JSON config"
                    >
                      {copiedMcp === "codex" ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Capabilities List */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-zinc-300">
                    <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                      <span className="text-[#b8965a] block mb-1">01. Autonomous Scouting</span>
                      Scout competitors and viral spikes while writing code.
                    </div>
                    <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                      <span className="text-[#b8965a] block mb-1">02. Hook Remix Engine</span>
                      Remix 7-step retention curves directly into your workspace.
                    </div>
                    <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                      <span className="text-[#b8965a] block mb-1">03. Full-Length Output</span>
                      Scaffold complete 8–12 min YouTube scripts into git.
                    </div>
                  </div>
                </div>
              )}

              {activeMcpTab === "host" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-2xl text-white flex items-center gap-2">
                        <Boxes className="w-5 h-5 text-[#b8965a]" />
                        Universal MCP Host Integration
                      </h3>
                      <p className="text-xs text-zinc-400 font-light mt-1">
                        Connect Claude Desktop, Goose, or your custom agent loops directly to Leksmedia via standard Model Context Protocol endpoints.
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full self-start">
                      Standard MCP Spec
                    </span>
                  </div>

                  {/* Tools Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-2">
                      <div className="font-mono text-xs text-[#b8965a] font-semibold">
                        tool: leksmedia_get_outliers
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        Fetches videos in the last 48 hours exceeding 200+ and 500+ Outlier Scores across your specified niche or competitor list.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-2">
                      <div className="font-mono text-xs text-[#b8965a] font-semibold">
                        tool: leksmedia_generate_hook
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        Generates high-retention 7-step hook sequences (Pattern Interrupt, Stake Agitation, New Paradigm) calibrated for high watch-time.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-2">
                      <div className="font-mono text-xs text-[#b8965a] font-semibold">
                        tool: leksmedia_write_script
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        Drafts complete 8–12 minute full-length YouTube scripts with scene-by-scene B-roll direction, spoken cadence, and title packaging.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-2">
                      <div className="font-mono text-xs text-[#b8965a] font-semibold">
                        tool: leksmedia_ikigai_audit
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        Synthesizes Passion, Skills, Mission, and Vocation to extract defensible brand positioning and 4 monetization pillars.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-[#b8965a]/20 bg-[#b8965a]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs text-zinc-300">
                      <strong>Host Endpoint:</strong> <code className="text-[#b8965a] ml-1">https://leksmedia.com/api/v1/mcp</code>
                    </div>
                    <Link
                      href="/docs/mcp"
                      className="text-xs font-mono text-[#b8965a] hover:underline flex items-center gap-1"
                    >
                      Read MCP Server Documentation →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Disclaimer Banner */}
            <div className="p-4 border-t border-white/10 bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                100% Self-Serve Architecture: We provide the engine, you build and own your YouTube machine on your own.
              </span>
              <Link href="/onboarding" className="text-[#b8965a] hover:underline">
                Get API Keys via Onboarding →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION (#pricing) — 100% SELF-SERVE SAAS SOFTWARE */}
      <section id="pricing" className="py-24 px-6 border-b border-white/10 bg-[#0b0b0e]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#b8965a]">
              Self-Serve Software Pricing
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl text-white mt-2">
              Simple software plans. <em className="text-[#b8965a] italic">Instant access.</em>
            </h2>
            <p className="text-sm text-white/60 mt-3 font-light leading-relaxed">
              100% self-serve. No coaching calls, no agency retainers, no waiting. Log into your dashboard and run the entire content machine yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 1: Starter */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0d0d10] flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs text-white/40 uppercase tracking-wider">
                  Self-Serve Software
                </span>
                <h3 className="font-serif text-2xl text-white">Starter Creator</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif italic text-4xl text-white font-bold">$29</span>
                  <span className="font-mono text-xs text-white/40">/ month</span>
                </div>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Everything you need to discover your Ikigai, monitor viral outliers, and generate converting content on your own.
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/5 text-xs text-white/70 font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    Full Ikigai Blueprint Engine
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    Daily YouTube Outlier Feed (48h velocity)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    50 Production Scripts per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    7-Step Retention Hook Generator
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    Complete Long-Form Production Scripts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    1-Click Copy & Markdown Exporters
                  </li>
                </ul>
              </div>

              <Link
                href="/onboarding"
                className="btn-secondary py-3 text-xs font-semibold text-center"
              >
                Start with Starter →
              </Link>
            </div>

            {/* Plan 2: Pro Studio (Featured) */}
            <div className="p-8 rounded-2xl border-2 border-[#b8965a] bg-gradient-to-b from-[#141418] to-[#0d0d10] flex flex-col justify-between space-y-8 shadow-[0_0_50px_rgba(184,150,90,0.2)] relative">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#b8965a] text-[#08080a] font-mono text-[10px] font-bold uppercase tracking-widest">
                Most Popular
              </div>

              <div className="space-y-4">
                <span className="font-mono text-xs text-[#b8965a] uppercase tracking-wider">
                  Full System Power
                </span>
                <h3 className="font-serif text-2xl text-white">Pro Studio</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif italic text-4xl text-[#b8965a] font-bold">$79</span>
                  <span className="font-mono text-xs text-white/40">/ month</span>
                </div>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Unlimited production script generations, 7-step hook remixes, and automated backend outlier tracking.
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/5 text-xs text-white/80 font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    Everything in Starter included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    Unlimited Outlier Searches & Metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    Unlimited 7-Step Script Generations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    Unlimited 8–12 Min Production Scripts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    High-CTR Thumbnail & Title Briefs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    Personal Voice Calibration Model
                  </li>
                </ul>
              </div>

              <Link
                href="/onboarding"
                className="btn-gold py-3 text-xs font-semibold text-center shadow-[0_0_25px_rgba(184,150,90,0.4)]"
              >
                Launch Pro Studio →
              </Link>
            </div>

            {/* Plan 3: Agency / Scale */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0d0d10] flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs text-white/40 uppercase tracking-wider">
                  Multi-Channel & Teams
                </span>
                <h3 className="font-serif text-2xl text-white">Scale & Agency</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif italic text-4xl text-white font-bold">$199</span>
                  <span className="font-mono text-xs text-white/40">/ month</span>
                </div>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  For power operators running multiple channels and brands with automated webhooks and bulk workflows.
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/5 text-xs text-white/70 font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    Everything in Pro Studio included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    Track up to 10 YouTube Channels
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    5 Multi-User Team Workspace Seats
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    Bulk Script & Post Batch Generator
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    Custom Webhook Automations & Sync
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b8965a] flex-shrink-0" />
                    Priority High-Speed Generation Queue
                  </li>
                </ul>
              </div>

              <Link
                href="/onboarding"
                className="btn-secondary py-3 text-xs font-semibold text-center"
              >
                Get Scale Plan →
              </Link>
            </div>
          </div>

          {/* FEATURE COMPARISON MATRIX */}
          <div className="pt-8">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#b8965a]">
                Side-by-side Matrix
              </span>
              <h3 className="font-serif text-3xl text-white mt-1">
                Compare Plan Capabilities
              </h3>
              <p className="text-xs text-white/60 font-light mt-1">
                Transparent software capabilities designed to scale with your volume.
              </p>
            </div>

            <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#0d0d10] shadow-2xl">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-white/10 bg-[#141418] text-white/50 text-[11px] uppercase tracking-wider">
                    <th className="p-4 font-semibold text-white">Capabilities</th>
                    <th className="p-4 font-semibold text-white/80">Starter ($29/mo)</th>
                    <th className="p-4 font-semibold text-[#b8965a]">Pro Studio ($79/mo)</th>
                    <th className="p-4 font-semibold text-white/80">Scale & Agency ($199/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-4 text-white font-medium">Ikigai Brand Blueprint & ICA Dossier</td>
                    <td className="p-4 text-emerald-400">Included</td>
                    <td className="p-4 text-emerald-400">Included</td>
                    <td className="p-4 text-emerald-400">Included</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-4 text-white font-medium">YouTube 48h Outlier Velocity Feed</td>
                    <td className="p-4">Daily Snapshot</td>
                    <td className="p-4 text-[#b8965a] font-semibold">Live 24/7 Continuous</td>
                    <td className="p-4 text-[#b8965a] font-semibold">Live 24/7 Continuous</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-4 text-white font-medium">Full Long-Form Production Scripts</td>
                    <td className="p-4">50 Scripts / mo</td>
                    <td className="p-4 text-emerald-400 font-semibold">Unlimited</td>
                    <td className="p-4 text-emerald-400 font-semibold">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-4 text-white font-medium">7-Step Retention Hook Remixer</td>
                    <td className="p-4 text-emerald-400">Included</td>
                    <td className="p-4 text-emerald-400 font-semibold">Unlimited</td>
                    <td className="p-4 text-emerald-400 font-semibold">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-4 text-white font-medium">Viral Title & Thumbnail Packaging</td>
                    <td className="p-4 text-emerald-400">Included</td>
                    <td className="p-4 text-emerald-400 font-semibold">Unlimited</td>
                    <td className="p-4 text-emerald-400 font-semibold">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-4 text-white font-medium">Bespoke Editorial & B-Roll Briefs</td>
                    <td className="p-4">Standard</td>
                    <td className="p-4 text-[#b8965a]">Advanced Bespoke</td>
                    <td className="p-4 text-[#b8965a]">Advanced Bespoke</td>
                  </tr>

                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-4 text-white font-medium">Monitored YouTube Channels</td>
                    <td className="p-4">1 Channel</td>
                    <td className="p-4 text-white font-semibold">3 Channels</td>
                    <td className="p-4 text-[#b8965a] font-semibold">10 Channels</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-4 text-white font-medium">Workspace Seats</td>
                    <td className="p-4">1 User</td>
                    <td className="p-4 text-white font-semibold">2 Seats</td>
                    <td className="p-4 text-[#b8965a] font-semibold">5 Seats</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-4 text-white font-medium">Support & Sync</td>
                    <td className="p-4">Community</td>
                    <td className="p-4 text-white font-semibold">Priority Support</td>
                    <td className="p-4 text-[#b8965a] font-semibold">Dedicated Strategy Sync</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION (#faq) */}
      <section id="faq" className="py-24 px-6 border-b border-white/10 bg-[#08080a]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#b8965a]">
              Common Inquiries
            </span>
            <h2 className="font-serif text-5xl text-white mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-6">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-medium text-white group-hover:text-[#b8965a] transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-[#b8965a] text-xl flex-shrink-0 transition-transform duration-200">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER — as requested in user prompt */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0e0e12] to-[#08080a] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex p-3 rounded-2xl bg-[#b8965a]/10 border border-[#b8965a]/30 text-[#b8965a] mb-2">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight">
            Ready to build your{" "}
            <em className="text-[#b8965a] italic">content machine?</em>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto font-normal leading-relaxed">
            Engineered from 4,000+ verified viral outlier scripts across 40 specialized niches, tracking 250,000+ YouTube data points daily.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/onboarding"
              className="btn-gold px-8 py-4 text-sm font-semibold tracking-wide shadow-[0_0_35px_rgba(184,150,90,0.45)]"
            >
              Start Free — Get My Blueprint →
            </Link>
            <Link
              href="/#pricing"
              className="btn-secondary px-8 py-4 text-sm font-medium"
            >
              Explore Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
