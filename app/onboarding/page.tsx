"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Compass,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Heart,
  Award,
  Globe,
  DollarSign,
  Loader2,
  Video,
  FileCheck
} from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4>(1);

  // Unified Service Intake state
  const [passion, setPassion] = useState("High-retention video storytelling, media systems architecture, aesthetic minimalism");
  const [skills, setSkills] = useState("Scriptwriting, viral hook design, high-ticket inbound conversion");
  const [mission, setMission] = useState("Freeing creators and founders from manual 40-hour burnout and low-converting generic content");
  const [channelUrl, setChannelUrl] = useState("https://youtube.com/@mychannel");
  const [vocation, setVocation] = useState("High-ticket advisory, productized media services, private mastermind programs, scalable digital systems");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBuildBlueprint = () => {
    setIsSubmitting(true);
    if (typeof window !== "undefined") {
      const blueprintData = {
        passion,
        skills,
        mission,
        vocation,
        channelUrl
      };
      localStorage.setItem("creator_os_blueprint", JSON.stringify(blueprintData));

      if (channelUrl && channelUrl.trim() !== "") {
        const strategyData = {
          youtubeUrl: channelUrl,
          nicheDescription: passion,
          path: "Service"
        };
        localStorage.setItem("creator_os_strategy", JSON.stringify(strategyData));
      }
    }

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/brand");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f5f5f4] flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 flex-1 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto space-y-8 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#b8965a]/30 bg-[#b8965a]/10 text-[#b8965a] font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Service Intake · Personal Brand Architecture
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-white">
              Calibrate Your Brand System
            </h1>
            <p className="text-sm text-white/60 font-light max-w-lg mx-auto leading-relaxed">
              Enter your domain, unfair strengths, ideal clients, and monetization offer to synthesize your Category Blueprint and Content Studio.
            </p>
          </div>

          {/* Service Intake Container */}
          <div className="bg-[#0d0d10] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl space-y-8 relative">
            {/* Step Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#b8965a] font-semibold uppercase tracking-wider">
                  Step {activeStep} of 4 · {
                    activeStep === 1 ? "Domain & Passion" :
                    activeStep === 2 ? "Unfair Advantages" :
                    activeStep === 3 ? "Ideal Client & Mission" :
                    "Offer & Monetization"
                  }
                </span>
                <span className="text-white/40">{activeStep * 25}% Complete</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#b8965a] to-[#d4b076] transition-all duration-300"
                  style={{ width: `${activeStep * 25}%` }}
                />
              </div>
            </div>

            {/* STEP 1: PASSION & TOPICS */}
            {activeStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white">
                      1. Passion — What do you love discussing?
                    </h2>
                    <p className="text-xs text-white/50">
                      Topics and problems in your industry you can talk about endlessly without burnout.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/60 mb-2">
                    Your Core Topics & Niche Focus:
                  </label>
                  <textarea
                    rows={4}
                    value={passion}
                    onChange={(e) => setPassion(e.target.value)}
                    placeholder="e.g. AI automation workflows, high-retention video production, aesthetic minimalism..."
                    className="w-full bg-[#141418] border border-white/10 rounded-xl p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#b8965a] transition-all"
                  />
                </div>

                {/* Quick Topic Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
                  <span className="text-white/40 text-[11px]">Quick Samples:</span>
                  {[
                    "AI Engineering & Workflows",
                    "B2B Retainer Acquisition",
                    "Executive Media Strategy",
                    "Solopreneur High Margins"
                  ].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setPassion(chip)}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-[#b8965a]/20 border border-white/10 hover:border-[#b8965a]/40 text-white/70 hover:text-white text-[10px] cursor-pointer"
                    >
                      + {chip}
                    </button>
                  ))}
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="btn-gold px-6 py-2.5 text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(184,150,90,0.3)]"
                  >
                    Next: Unfair Advantages →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: SKILLS & ADVANTAGE */}
            {activeStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white">
                      2. Skills — What is your unfair edge?
                    </h2>
                    <p className="text-xs text-white/50">
                      Natural strengths, unique methodologies, or systems colleagues consult you for.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/60 mb-2">
                    Your Unfair Strengths & Execution Capabilities:
                  </label>
                  <textarea
                    rows={4}
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="e.g. Breaking down complex systems into simple frameworks, writing crisp direct-response copy, deep data analysis..."
                    className="w-full bg-[#141418] border border-white/10 rounded-xl p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#b8965a] transition-all"
                  />
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={() => setActiveStep(1)}
                    className="text-xs font-mono text-white/40 hover:text-white cursor-pointer"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setActiveStep(3)}
                    className="btn-gold px-6 py-2.5 text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(184,150,90,0.3)]"
                  >
                    Next: Ideal Client & Mission →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: MISSION & AUDIENCE */}
            {activeStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white">
                      3. Audience & Market Frustrations
                    </h2>
                    <p className="text-xs text-white/50">
                      The specific problems in your industry you solve and who you want to reach.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/60 mb-2">
                      Audience Pain Points & What Annoying Industry Advice You Combat:
                    </label>
                    <textarea
                      rows={3}
                      value={mission}
                      onChange={(e) => setMission(e.target.value)}
                      placeholder="e.g. Founders wasting 30 hours a week creating low-converting social posts; repetitive superficial advice flooding feeds..."
                      className="w-full bg-[#141418] border border-white/10 rounded-xl p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#b8965a] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-white/60 mb-2">
                      YouTube Channel / Reference Handle (Optional):
                    </label>
                    <input
                      type="text"
                      value={channelUrl}
                      onChange={(e) => setChannelUrl(e.target.value)}
                      placeholder="https://youtube.com/@mychannel or @competitor"
                      className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-sky-400 font-mono"
                    />
                    <span className="text-[10px] font-mono text-white/40 block mt-1">
                      Used to calibrate your Outlier Detector and competitor diagnostic tab.
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="text-xs font-mono text-white/40 hover:text-white cursor-pointer"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setActiveStep(4)}
                    className="btn-gold px-6 py-2.5 text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(184,150,90,0.3)]"
                  >
                    Next: Offer & Monetization →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: VOCATION & OFFERS */}
            {activeStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white">
                      4. Offer — What is your high-ticket deliverable?
                    </h2>
                    <p className="text-xs text-white/50">
                      The core service, product, retainer, or outcomes that clients pay you for.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/60 mb-2">
                    Your High-Ticket Services & Deliverables:
                  </label>
                  <textarea
                    rows={4}
                    value={vocation}
                    onChange={(e) => setVocation(e.target.value)}
                    placeholder="e.g. End-to-end AI automation retainers ($5k-$15k/mo), private strategic advisory, digital product ecosystem..."
                    className="w-full bg-[#141418] border border-white/10 rounded-xl p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#b8965a] transition-all"
                  />
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={() => setActiveStep(3)}
                    className="text-xs font-mono text-white/40 hover:text-white cursor-pointer"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={handleBuildBlueprint}
                    disabled={isSubmitting}
                    className="btn-gold px-7 py-3 text-xs font-semibold flex items-center gap-2 shadow-[0_0_25px_rgba(184,150,90,0.4)] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Synthesizing Category Blueprint...
                      </>
                    ) : (
                      <>
                        <FileCheck className="w-4 h-4" />
                        Synthesize My Brand Blueprint →
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
