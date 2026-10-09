"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OUTLIER_VIDEOS, OutlierVideo, NICHE_SCRIPTS, NicheScript } from "@/lib/creatorData";
import {
  BarChart3,
  TrendingUp,
  Sparkles,
  Copy,
  CheckCircle2,
  Calendar,
  Mic,
  Film,
  X,
  ExternalLink,
  ChevronRight,
  Flame,
  Search,
  Filter,
  RefreshCw,
  Clock,
  ShieldCheck,
  ChevronDown,
  Edit3,
  Save,
  Clapperboard,
  Layers,
  ArrowRight
} from "lucide-react";
import { YoutubeIcon } from "@/components/SocialIcons";

function DashboardContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "youtube";

  const [activeTab, setActiveTab] = useState<string>(
    initialTab === "linkedin" ? "scripts" : initialTab
  );

  // Sync tab and topic with URL if param changes
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      if (tabParam === "linkedin" || tabParam === "scripts") {
        setActiveTab("scripts");
      } else if (["youtube", "competitors"].includes(tabParam)) {
        setActiveTab(tabParam);
      }
    }
    const topicParam = searchParams.get("topic") || searchParams.get("pillar");
    if (topicParam) {
      setSearchQuery(topicParam);
      setScriptTopicInput(topicParam);
    }
  }, [searchParams]);

  // YouTube Outlier Feed state
  const [videos, setVideos] = useState<OutlierVideo[]>(OUTLIER_VIDEOS);
  const [selectedVideo, setSelectedVideo] = useState<OutlierVideo | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterScore, setFilterScore] = useState<number>(0);

  // 7-Step Remixer editing & per-step copy state
  const [editingRemixSteps, setEditingRemixSteps] = useState(false);
  const [copiedStepKey, setCopiedStepKey] = useState<string | null>(null);
  const [copiedHookFull, setCopiedHookFull] = useState(false);

  // Custom Outlier Calculator state
  const [showCustomOutlier, setShowCustomOutlier] = useState(false);
  const [calcTitle, setCalcTitle] = useState("");
  const [calcChannel, setCalcChannel] = useState("");
  const [calcViews48h, setCalcViews48h] = useState<number>(220000);
  const [calcAvg48h, setCalcAvg48h] = useState<number>(24000);
  const [calcNiche, setCalcNiche] = useState("AI & Tech Innovations");

  // Content Analysis Channel Audit state
  const [auditChannelInput, setAuditChannelInput] = useState("@mychannel");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditDone, setAuditDone] = useState(false);

  // Extra Features modals / toggles
  const [showVoiceTrainer, setShowVoiceTrainer] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [voiceText, setVoiceText] = useState(
    "I speak directly, concisely, and with real case studies. I never use corporate jargon or hype."
  );

  // Long-Form Script Studio state
  const [selectedScript, setSelectedScript] = useState<NicheScript>(NICHE_SCRIPTS[0]);
  const [scriptTopicInput, setScriptTopicInput] = useState("B2B Inbound Sales Without Ads");
  const [scriptNicheInput, setScriptNicheInput] = useState("Client Acquisition & Strategy");
  const [isGeneratingScript, setIsGeneratingScript] = useState(false);
  const [copiedScriptFull, setCopiedScriptFull] = useState(false);
  const [copiedScriptSection, setCopiedScriptSection] = useState<string | null>(null);

  const handleCopyStep = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStepKey(key);
    setTimeout(() => setCopiedStepKey(null), 2000);
  };

  const handlePushToScriptStudio = () => {
    if (!selectedVideo) return;
    setScriptTopicInput(selectedVideo.remixTitle);
    setScriptNicheInput(selectedVideo.niche);
    const custom: NicheScript = {
      id: "outlier-script-" + Date.now(),
      niche: selectedVideo.niche,
      title: selectedVideo.remixTitle,
      hookType: selectedVideo.hookType,
      productionScript: {
        hook: `[VISUAL: Studio focal shot with high-contrast ambient lighting]\n[TEXT ON SCREEN: ${selectedVideo.title}]\n${selectedVideo.remixHook7Step.patternInterrupt}\n${selectedVideo.remixHook7Step.mirrorViewer}`,
        brollCues: [
          `[VISUAL: Analytics showing ${selectedVideo.outlierScore} Outlier Score spike]`,
          `[B-ROLL: Over-the-shoulder creator workflow]`,
          `[GRAPHIC: Kinetic title breakdown]`
        ],
        timestamps:
          "0:00 - 0:50 (7-Step Hook) | 0:50 - 3:15 (The Mechanism) | 3:15 - 8:30 (Deep Dive Proof) | 8:30 - 11:00 (Next Steps)",
        body: `${selectedVideo.remixHook7Step.opportunity}\n\n${selectedVideo.remixHook7Step.gap}\n\n${selectedVideo.remixHook7Step.transformation}\n\n${selectedVideo.remixHook7Step.authority}\n\n${selectedVideo.remixHook7Step.transition}`
      },
      antiSlopAudit: {
        passed: true,
        colonsRemoved: 1,
        spokenCoffeeShopScore: 100,
        feedback: "Human conversational cadence calibrated against 4,000+ viral outlier scripts."
      }
    };
    setSelectedScript(custom);
    setActiveTab("scripts");
    setModalOpen(false);
  };

  const handleGenerateCustomScript = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingScript(true);
    setTimeout(() => {
      const topic = scriptTopicInput.trim() || "The Untold Blueprint of High-Retention Content";
      const niche = scriptNicheInput.trim() || "Autonomous Creative Systems";
      const custom: NicheScript = {
        id: "custom-" + Date.now(),
        niche,
        title: topic,
        hookType: "Pattern Interrupt + High Stakes Reveal",
        productionScript: {
          hook: `[VISUAL: Cinematic high-contrast workspace, slow tracking shot]\n[SOUND: Subtle low sub-bass pulse]\nMost people in ${niche} are still doing this completely backwards.\n[TEXT ON SCREEN: Stop Wasting 40 Hours]\nIn the next few minutes, everything you thought you knew about ${topic} is going to change.`,
          brollCues: [
            `[VISUAL: Analytics graph showing abnormal 48-hour velocity spike]`,
            `[B-ROLL: Studio microphone and audio waveform display]`,
            `[CLIP: Deconstructed workflow blueprint]`
          ],
          timestamps:
            "0:00 - 0:45 (Hook) | 0:45 - 2:30 (The Core Shift) | 2:30 - 7:30 (Step-by-Step Breakdown) | 7:30 - 10:00 (Execution)",
          body: `When you look at the creators dominating ${niche} right now, they aren't working harder. They are leveraging asymmetric outlier data and structured delivery to capture audience attention.\n\nHere is the exact breakdown they use to hold viewer retention past the 8-minute mark:\n\nFirst, they eliminate dead air and repetitive introductions. You have exactly 5 seconds to establish high stakes before a viewer clicks away.\n\nSecond, they embed visual resets every 45 seconds. Whether that's an on-screen kinetic graphic, a sound design cue, or a sudden perspective change, keeping the visual rhythm dynamic is non-negotiable.\n\nThird, they lead with an open loop that resolves only in the final third of the video. When your audience feels that the biggest insight is still ahead, your average percentage viewed skyrockets.`
        },
        antiSlopAudit: {
          passed: true,
          colonsRemoved: 2,
          spokenCoffeeShopScore: 99,
          feedback: `Clean spoken rhythm tailored to ${niche}. Zero synthetic buzzwords.`
        }
      };
      setSelectedScript(custom);
      setIsGeneratingScript(false);
    }, 600);
  };

  const handleCalculateCustomOutlier = (e: React.FormEvent) => {
    e.preventDefault();
    const score = Math.round((calcViews48h / Math.max(1, calcAvg48h)) * 100);
    const title = calcTitle.trim() || "Why Modern Workflows Are Silently Failing";
    const channel = calcChannel.trim() || "Anonymous Creator";

    const newOutlier: OutlierVideo = {
      id: "outlier-" + Date.now(),
      title,
      channelName: channel,
      channelSubs: "25K",
      views48h: calcViews48h,
      channelAvg48h: calcAvg48h,
      outlierScore: score,
      hookType: score >= 500 ? "Algorithmic Breakout Paradox" : "Strong Category Demand",
      patterns: ["High 48h Velocity", "Contrarian Angle", "Curiosity Tension"],
      thumbnailUrl:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      publishedDaysAgo: 1,
      niche: calcNiche,
      originalHook: `Most creators in ${calcNiche} still follow advice from 2021, and wonder why their reach collapsed. But yesterday, this breakdown exposed the exact shift...`,
      remixTitle: `The Real Mechanism Behind ${title}`,
      remixHook7Step: {
        patternInterrupt: `Stop doing ${calcNiche} the conventional way if you want real consistency.`,
        mirrorViewer: `You put hours into research, but viewers click away before you even reach your main point.`,
        opportunity: `Here is the exact data-driven structure that keeps 70%+ viewers watching all the way through.`,
        gap: `The fatal mistake is relying on raw motivation instead of verified 48-hour demand signals.`,
        transformation: `In the next 7 minutes, you will see the exact blueprint to turn this insight into authority.`,
        authority: `Tested across hundreds of high-retention channels with verified retention above 70%.`,
        transition: `Let's break down step number one right now.`
      },
      scriptFramework: "Pattern Interrupt -> The Mechanism -> Evidence -> Action Plan",
      callToAction: "Export this hook directly to your script studio to produce the full video.",
      thumbnailBrief: {
        visualSubject: `High-contrast obsidian composition representing ${calcNiche} with bright gold accent metrics`,
        textHook: "NEW SHIFT",
        emotion: "High Stakes",
        colorPalette: "Matte obsidian and amber illumination"
      }
    };

    setVideos([newOutlier, ...videos]);
    setSelectedVideo(newOutlier);
    setShowCustomOutlier(false);
    setModalOpen(true);
  };

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditDone(true);
    }, 1000);
  };

  const activeScriptData = selectedScript.productionScript || selectedScript.traditionalMode!;
  const fullScriptText = `${activeScriptData.hook}\n\n// B-ROLL & VISUAL ASSETS:\n${activeScriptData.brollCues.join(
    "\n"
  )}\n\n// FULL PRODUCTION SCRIPT BODY (${activeScriptData.timestamps}):\n${activeScriptData.body}`;

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.channelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.niche.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesScore = video.outlierScore >= filterScore;
    return matchesSearch && matchesScore;
  });

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f5f5f4] selection:bg-[#b8965a]/30 selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-10">
        {/* Hub Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#0f0f12] text-xs font-mono text-white/70 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Leksmedia · YouTube Strategy Operating System
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-white">
              Creator Studio <em className="text-[#b8965a] italic">Dashboard</em>
            </h1>
            <p className="text-sm text-white/60 font-light mt-1 max-w-2xl">
              Track verified 48-hour YouTube outliers, remix 7-step retention hooks, and generate ready-to-record full production scripts.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center bg-[#121216] border border-white/10 rounded-xl p-1.5">
            <Link
              href="/dashboard?tab=youtube"
              onClick={() => setActiveTab("youtube")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === "youtube"
                  ? "bg-[#b8965a] text-[#08080a] font-semibold shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <YoutubeIcon className="w-4 h-4" />
              YouTube Strategy Hub
            </Link>
            <Link
              href="/dashboard?tab=scripts"
              onClick={() => setActiveTab("scripts")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === "scripts"
                  ? "bg-[#b8965a] text-[#08080a] font-semibold shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Film className="w-4 h-4" />
              Long-Form Script Studio
            </Link>
            <Link
              href="/dashboard?tab=competitors"
              onClick={() => setActiveTab("competitors")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === "competitors"
                  ? "bg-[#b8965a] text-[#08080a] font-semibold shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Content Analysis
            </Link>
          </div>
        </div>

        {/* TAB 1: YOUTUBE STRATEGY HUB */}
        {activeTab === "youtube" && (
          <div className="space-y-8 animate-fade-in">
            {/* Utility Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0d0d10] border border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search outlier topics, channels, niches..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-[#141418] border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#b8965a] w-64 font-mono"
                  />
                </div>

                <select
                  value={filterScore}
                  onChange={(e) => setFilterScore(Number(e.target.value))}
                  className="bg-[#141418] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white/80 focus:outline-none focus:border-[#b8965a] font-mono cursor-pointer"
                >
                  <option value={0}>All Outlier Scores</option>
                  <option value={200}>Strong Demand (Score 200+)</option>
                  <option value={500}>Algorithmic Breakouts (500+)</option>
                  <option value={1000}>Hyper-Viral (1,000+)</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowVoiceTrainer(!showVoiceTrainer)}
                  className="btn-secondary px-3 py-1.5 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                >
                  <Mic className="w-3.5 h-3.5 text-[#b8965a]" />
                  Voice Calibration
                </button>

                <button
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="btn-secondary px-3 py-1.5 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  Publishing Cadence
                </button>

                <button
                  onClick={() => setShowCustomOutlier(!showCustomOutlier)}
                  className="btn-gold px-3.5 py-1.5 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(184,150,90,0.3)]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Outlier Sandbox +
                </button>
              </div>
            </div>

            {/* Custom Outlier Sandbox Calculator */}
            {showCustomOutlier && (
              <form
                onSubmit={handleCalculateCustomOutlier}
                className="p-6 rounded-2xl bg-[#0d0d10] border border-[#b8965a]/40 space-y-5 animate-fade-in shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#b8965a]" />
                    <h3 className="font-serif text-lg text-white">
                      Custom 48h Outlier Velocity Sandbox
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#b8965a]">
                    Formula: (Views 48h ÷ Avg Views 48h) × 100
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-1 text-xs font-mono">
                    <label className="text-white/60">Video Topic or Title:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. How I Built an $8M Media Brand..."
                      value={calcTitle}
                      onChange={(e) => setCalcTitle(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#b8965a]"
                    />
                  </div>
                  <div className="space-y-1 text-xs font-mono">
                    <label className="text-white/60">Channel Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Founder Economics"
                      value={calcChannel}
                      onChange={(e) => setCalcChannel(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#b8965a]"
                    />
                  </div>
                  <div className="space-y-1 text-xs font-mono">
                    <label className="text-white/60">Recent 48h Views:</label>
                    <input
                      type="number"
                      min="1000"
                      value={calcViews48h}
                      onChange={(e) => setCalcViews48h(Number(e.target.value))}
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#b8965a]"
                    />
                  </div>
                  <div className="space-y-1 text-xs font-mono">
                    <label className="text-white/60">Channel Baseline Avg 48h:</label>
                    <input
                      type="number"
                      min="500"
                      value={calcAvg48h}
                      onChange={(e) => setCalcAvg48h(Number(e.target.value))}
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#b8965a]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div className="text-xs font-mono">
                    <span className="text-white/50">Calculated Score: </span>
                    <span className="text-[#b8965a] font-bold text-base">
                      {Math.round((calcViews48h / Math.max(1, calcAvg48h)) * 100)}
                    </span>
                    <span
                      className={`ml-2 px-2 py-0.5 rounded text-[10px] font-bold ${
                        (calcViews48h / Math.max(1, calcAvg48h)) * 100 >= 500
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-[#b8965a]/20 text-[#b8965a]"
                      }`}
                    >
                      {(calcViews48h / Math.max(1, calcAvg48h)) * 100 >= 500
                        ? "VIRAL 500+"
                        : "STRONG 200+"}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setShowCustomOutlier(false)}
                      className="btn-secondary px-3 py-1.5 text-xs font-mono cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-gold px-5 py-1.5 text-xs font-semibold cursor-pointer shadow-[0_0_15px_rgba(184,150,90,0.3)]"
                    >
                      Calculate & Remix 7-Step Hook →
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* Voice Trainer Modal */}
            {showVoiceTrainer && (
              <div className="p-6 rounded-xl bg-[#141418] border border-[#b8965a]/30 space-y-4 animate-fade-in">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Mic className="w-4 h-4 text-[#b8965a]" />
                    Learn My Voice (Personal Tone Calibration)
                  </h3>
                  <button
                    onClick={() => setShowVoiceTrainer(false)}
                    className="text-white/40 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-white/60 font-light">
                  Paste a sample transcript or notes below. Our script generator models your vocabulary, pacing, and tone:
                </p>
                <textarea
                  rows={3}
                  value={voiceText}
                  onChange={(e) => setVoiceText(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white font-mono"
                />
                <div className="flex justify-end">
                  <button
                    onClick={() => setShowVoiceTrainer(false)}
                    className="btn-gold px-4 py-1.5 text-xs font-semibold cursor-pointer"
                  >
                    Save Voice Calibration
                  </button>
                </div>
              </div>
            )}

            {/* Publishing Cadence Calendar */}
            {showCalendar && (
              <div className="p-6 rounded-xl bg-[#141418] border border-emerald-500/30 space-y-4 animate-fade-in">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    Scheduled Weekly YouTube Cadence
                  </h3>
                  <button
                    onClick={() => setShowCalendar(false)}
                    className="text-white/40 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3 bg-black/30 rounded-lg border border-white/5">
                    <span className="text-[#b8965a] block mb-1 font-bold">Monday</span>
                    <p className="text-white font-medium">YouTube Deep-Dive</p>
                    <span className="text-white/40 text-[10px]">Outlier Score: 1,348</span>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-white/5">
                    <span className="text-amber-400 block mb-1 font-bold">Wednesday</span>
                    <p className="text-white font-medium">Shorts Hook Test</p>
                    <span className="text-white/40 text-[10px]">Pattern Interrupt Variant</span>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-white/5">
                    <span className="text-emerald-400 block mb-1 font-bold">Friday</span>
                    <p className="text-white font-medium">Long-Form Video Drop</p>
                    <span className="text-white/40 text-[10px]">Production Script Ready</span>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-white/5">
                    <span className="text-sky-400 block mb-1 font-bold">Sunday</span>
                    <p className="text-white font-medium">Community Poll & Brief</p>
                    <span className="text-white/40 text-[10px]">Thumbnail A/B Test</span>
                  </div>
                </div>
              </div>
            )}

            {/* Outlier Feed Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="p-6 rounded-2xl border border-white/10 bg-[#0d0d10] hover:border-[#b8965a]/40 transition-all flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    {/* Thumbnail & Outlier Score badge */}
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#141418]">
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#b8965a]/40 text-[#b8965a] font-mono text-xs font-bold shadow-lg">
                        <Flame className="w-3.5 h-3.5 text-[#b8965a]" />
                        Score: {video.outlierScore}
                      </div>
                      <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/80">
                        {video.publishedDaysAgo}d ago • {video.views48h.toLocaleString()} views
                      </div>
                    </div>

                    {/* Video Title & Channel Meta */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-[10px] uppercase text-[#b8965a] bg-[#b8965a]/10 px-2 py-0.5 rounded border border-[#b8965a]/20">
                          {video.niche}
                        </span>
                        <span className="text-xs font-mono text-white/40">
                          Channel: {video.channelName} ({video.channelSubs})
                        </span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-[#b8965a] transition-colors leading-snug">
                        {video.title}
                      </h3>
                    </div>

                    {/* Hook Type & Pattern list */}
                    <div className="space-y-2 pt-2 border-t border-white/5 text-xs font-mono">
                      <div className="flex items-center justify-between text-white/50">
                        <span>Hook Angle:</span>
                        <span className="text-white/80">{video.hookType}</span>
                      </div>
                      <div className="flex items-center justify-between text-white/50">
                        <span>48h Avg Velocity:</span>
                        <span className="text-emerald-400 font-semibold">
                          +{video.outlierScore - 100}% above channel baseline
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Primary Card Action: Generate My Version */}
                  <button
                    onClick={() => {
                      setSelectedVideo(video);
                      setModalOpen(true);
                    }}
                    className="btn-gold w-full py-2.5 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(184,150,90,0.25)]"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Generate My Viral Version →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: LONG-FORM SCRIPT STUDIO */}
        {activeTab === "scripts" && (
          <div className="space-y-8 animate-fade-in">
            {/* Studio Generator Bar */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Film className="w-5 h-5 text-amber-400" />
                  <h2 className="font-serif text-2xl text-white">
                    Full Long-Form Production Script Studio (8–12 Mins)
                  </h2>
                </div>
                <span className="font-mono text-xs text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  Ready to Record
                </span>
              </div>

              <form onSubmit={handleGenerateCustomScript} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="text"
                  value={scriptTopicInput}
                  onChange={(e) => setScriptTopicInput(e.target.value)}
                  placeholder="Enter YouTube topic or video concept (e.g. How Solo Founders Build $10M Media Funnels)..."
                  className="flex-1 bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                />
                <button
                  type="submit"
                  disabled={isGeneratingScript}
                  className="btn-gold px-6 py-3 text-xs font-semibold flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer shadow-[0_0_20px_rgba(184,150,90,0.3)]"
                >
                  {isGeneratingScript ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Engineering Production Script...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Generate Production Script →
                    </>
                  )}
                </button>
              </form>

              {/* Quick Niche Script Selectors */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5 text-xs font-mono">
                <span className="text-white/40 text-[11px]">Niche Outlier Presets:</span>
                {NICHE_SCRIPTS.map((script) => (
                  <button
                    key={script.id}
                    type="button"
                    onClick={() => {
                      setSelectedScript(script);
                      setScriptTopicInput(script.title);
                      setScriptNicheInput(script.niche);
                    }}
                    className={`px-3 py-1 rounded-lg border text-[11px] cursor-pointer transition-all ${
                      selectedScript.id === script.id
                        ? "bg-[#b8965a] text-[#08080a] font-semibold border-[#b8965a]"
                        : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-[#b8965a]/40"
                    }`}
                  >
                    {script.niche}
                  </button>
                ))}
              </div>
            </div>

            {/* Complete Production Script Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Script Breakdown */}
              <div className="lg:col-span-8 space-y-6">
                <div className="p-8 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-6 shadow-2xl">
                  {/* Script Header */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <span className="font-mono text-xs uppercase text-[#b8965a] bg-[#b8965a]/10 px-2 py-0.5 rounded border border-[#b8965a]/20">
                        {selectedScript.niche}
                      </span>
                      <h3 className="font-serif text-3xl text-white mt-2 leading-snug">
                        {selectedScript.title}
                      </h3>
                      <p className="text-xs font-mono text-white/40 mt-1">
                        Hook Strategy: {selectedScript.hookType} • Estimated Run-Time: 8–12 Minutes
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(fullScriptText);
                          setCopiedScriptFull(true);
                          setTimeout(() => setCopiedScriptFull(false), 2000);
                        }}
                        className="btn-gold px-4 py-2 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-[0_0_20px_rgba(184,150,90,0.35)]"
                      >
                        {copiedScriptFull ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#08080a]" />
                            Copied Full Script!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            Copy Full Script
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Section 1: 0–45s High-Retention Hook */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                        <Flame className="w-4 h-4" />
                        Phase 01: Visual & Spoken Retention Hook (0:00 - 0:45)
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(activeScriptData.hook);
                          setCopiedScriptSection("hook");
                          setTimeout(() => setCopiedScriptSection(null), 2000);
                        }}
                        className="text-[11px] font-mono text-white/50 hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        {copiedScriptSection === "hook" ? "Copied" : "Copy Hook"}
                      </button>
                    </div>
                    <div className="p-4 rounded-xl bg-[#141418] border border-white/5 font-mono text-xs text-white/90 leading-relaxed whitespace-pre-wrap">
                      {activeScriptData.hook}
                    </div>
                  </div>

                  {/* Section 2: Editor B-Roll & Visual Assets */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-bold flex items-center gap-1.5">
                        <Clapperboard className="w-4 h-4" />
                        Phase 02: B-Roll & Dynamic Screen Directions
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(activeScriptData.brollCues.join("\n"));
                          setCopiedScriptSection("broll");
                          setTimeout(() => setCopiedScriptSection(null), 2000);
                        }}
                        className="text-[11px] font-mono text-white/50 hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        {copiedScriptSection === "broll" ? "Copied" : "Copy Cues"}
                      </button>
                    </div>
                    <div className="p-4 rounded-xl bg-[#141418] border border-white/5 space-y-2 text-xs font-mono text-white/70">
                      {activeScriptData.brollCues.map((cue, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-[#b8965a]">•</span>
                          <span>{cue}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 3: Full Production Spoken Body */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        Phase 03: Complete Spoken Body Dialogue ({activeScriptData.timestamps})
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(activeScriptData.body);
                          setCopiedScriptSection("body");
                          setTimeout(() => setCopiedScriptSection(null), 2000);
                        }}
                        className="text-[11px] font-mono text-white/50 hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        {copiedScriptSection === "body" ? "Copied" : "Copy Body"}
                      </button>
                    </div>
                    <div className="p-5 rounded-xl bg-black/40 border border-white/5 text-xs text-white/85 leading-relaxed font-light space-y-4 whitespace-pre-wrap">
                      {activeScriptData.body}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Anti-Slop Audit & Pacing Architecture */}
              <div className="lg:col-span-4 space-y-6">
                {/* Cadence Audit Card */}
                <div className="p-6 rounded-2xl border border-emerald-500/30 bg-[#0d0d10] space-y-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase text-emerald-400 font-bold">
                      ✓ Human Cadence Calibration
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[11px]">
                      {selectedScript.antiSlopAudit.spokenCoffeeShopScore}% Spoken Score
                    </span>
                  </div>
                  <h4 className="font-serif text-xl text-white">
                    Zero Synthetic AI Clichés
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    {selectedScript.antiSlopAudit.feedback}
                  </p>
                  <div className="pt-3 border-t border-white/5 space-y-2 text-xs font-mono text-white/50">
                    <div className="flex justify-between">
                      <span>Robotic Colons Removed:</span>
                      <span className="text-emerald-400">{selectedScript.antiSlopAudit.colonsRemoved}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversational Readability:</span>
                      <span className="text-emerald-400">Natural Spoken</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pacing Drops:</span>
                      <span className="text-emerald-400">Zero Dead Air</span>
                    </div>
                  </div>
                </div>

                {/* Viral Pacing Blueprint */}
                <div className="p-6 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-4 shadow-xl">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#b8965a] font-semibold">
                    Retention Milestones
                  </span>
                  <h4 className="font-serif text-xl text-white">
                    Pacing & Reset Milestones
                  </h4>
                  <ul className="space-y-3 text-xs font-mono text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-[#b8965a] font-bold">0:05</span>
                      <span>Pattern interrupt prevents viewer swipe away</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#b8965a] font-bold">0:45</span>
                      <span>Stakes established; transition into core mechanism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#b8965a] font-bold">3:00</span>
                      <span>Visual reset + on-screen proof asset</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#b8965a] font-bold">7:30</span>
                      <span>Open loop payoff; call to action delivery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CONTENT ANALYSIS */}
        {activeTab === "competitors" && (
          <div className="space-y-8 animate-fade-in">
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  📊 Algorithmic Diagnostics
                </span>
                <span className="font-mono text-[11px] text-white/40">
                  Self-Serve Channel Audit
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white">
                Channel Performance Tiers & AI Retention Lessons
              </h2>
              <p className="text-sm text-white/60 font-light max-w-2xl leading-relaxed">
                Enter any YouTube channel handle or topic to audit retention patterns across 3 distinct tiers: Top 10% Winners, Break-evens, and Flops.
              </p>

              <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="text"
                  required
                  value={auditChannelInput}
                  onChange={(e) => setAuditChannelInput(e.target.value)}
                  placeholder="Enter YouTube @channel, URL, or niche..."
                  className="flex-1 bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                />
                <button
                  type="submit"
                  disabled={isAuditing}
                  className="btn-gold px-6 py-3 text-xs font-semibold flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer shadow-[0_0_15px_rgba(184,150,90,0.3)]"
                >
                  {isAuditing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Running Algorithmic Audit...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Run Channel Diagnostic
                    </>
                  )}
                </button>
              </form>

              {auditDone && (
                <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs font-mono text-emerald-400 flex items-center justify-between animate-fade-in">
                  <span>✓ Successfully analyzed catalog for {auditChannelInput}</span>
                  <span>3 Tiers Calculated</span>
                </div>
              )}
            </div>

            {/* Tiers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tier 1: Wins */}
              <div className="p-6 rounded-2xl border border-emerald-500/30 bg-[#0d0d10] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-emerald-400 font-bold">
                    Tier 1 · Wins (Top 10%)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                    Outlier Score: 500+
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-white">Algorithmic Breakouts</h3>
                <ul className="space-y-2 text-xs text-white/70 font-light leading-relaxed">
                  <li>• Pattern Interrupt within first 4 seconds</li>
                  <li>• Concrete dollar amounts ($8M, $400M) in title</li>
                  <li>• Asymmetric scale paradox (teenager vs corporation)</li>
                </ul>
                <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-400">
                  Action: Remodel into full 8–12 min production script immediately.
                </div>
              </div>

              {/* Tier 2: Break-evens */}
              <div className="p-6 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-white/60 font-bold">
                    Tier 2 · Break-Evens
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white/60 text-[10px] font-mono">
                    Score: 90 - 150
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-white">Core Audience Only</h3>
                <ul className="space-y-2 text-xs text-white/70 font-light leading-relaxed">
                  <li>• Title was descriptive rather than curiosity-driven</li>
                  <li>• Hook lacked tension or stakes</li>
                  <li>• Retention drop at 1:15 minute mark</li>
                </ul>
                <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-white/50">
                  Action: A/B test thumbnail with contrasting emotion.
                </div>
              </div>

              {/* Tier 3: Lessons */}
              <div className="p-6 rounded-2xl border border-red-500/20 bg-[#0d0d10] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-red-400 font-bold">
                    Tier 3 · Lessons
                  </span>
                  <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-mono">
                    Score: &lt; 80
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-white">Algorithmic Drop-offs</h3>
                <ul className="space-y-2 text-xs text-white/70 font-light leading-relaxed">
                  <li>• Long logo intro / sponsor in first 30 seconds</li>
                  <li>• Generic advice without unique category point-of-view</li>
                  <li>• Flat vocal delivery and absent B-roll pacing</li>
                </ul>
                <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-red-400">
                  Action: Archive topic and reposition with 7-step hook framework.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL: 7-STEP HOOK REMIXER & OUTLIER DETAILS */}
        {modalOpen && selectedVideo && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#0d0d10] border border-white/20 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fade-in">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] text-[#b8965a] uppercase bg-[#b8965a]/10 px-2 py-0.5 rounded">
                      {selectedVideo.niche}
                    </span>
                    <span className="font-mono text-[11px] text-emerald-400 font-bold">
                      Outlier Score: {selectedVideo.outlierScore}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-white leading-tight">
                    {selectedVideo.remixTitle}
                  </h3>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1 rounded-lg text-white/40 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 7-Step Remixer Breakdown */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#b8965a] font-bold">
                    🎬 7-Step Hook Formula Output
                  </span>
                  <button
                    onClick={() => setEditingRemixSteps(!editingRemixSteps)}
                    className="text-xs font-mono text-[#b8965a] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    {editingRemixSteps ? "Finish Editing" : "Edit Hook Steps"}
                  </button>
                </div>

                <div className="space-y-2.5 text-xs bg-[#141418] border border-white/5 rounded-xl p-4">
                  {[
                    { key: "patternInterrupt", label: "1. Pattern Interrupt", text: selectedVideo.remixHook7Step.patternInterrupt },
                    { key: "mirrorViewer", label: "2. Mirror Viewer", text: selectedVideo.remixHook7Step.mirrorViewer },
                    { key: "opportunity", label: "3. Opportunity", text: selectedVideo.remixHook7Step.opportunity },
                    { key: "gap", label: "4. The Gap", text: selectedVideo.remixHook7Step.gap },
                    { key: "transformation", label: "5. Transformation", text: selectedVideo.remixHook7Step.transformation },
                    { key: "authority", label: "6. Authority", text: selectedVideo.remixHook7Step.authority },
                    { key: "transition", label: "7. Transition", text: selectedVideo.remixHook7Step.transition }
                  ].map((step) => (
                    <div key={step.key} className="pb-2.5 border-b border-white/5 last:border-0 last:pb-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[#b8965a] font-bold block text-[10px] uppercase">
                          {step.label}
                        </span>
                        <button
                          onClick={() => handleCopyStep(step.key, step.text)}
                          className="text-[10px] font-mono text-white/50 hover:text-white flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/10 cursor-pointer"
                        >
                          {copiedStepKey === step.key ? (
                            <>
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400 font-bold">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy Step</span>
                            </>
                          )}
                        </button>
                      </div>

                      {editingRemixSteps ? (
                        <textarea
                          rows={2}
                          value={step.text}
                          onChange={(e) => {
                            const updated = { ...selectedVideo };
                            (updated.remixHook7Step as any)[step.key] = e.target.value;
                            setSelectedVideo(updated);
                          }}
                          className="w-full bg-[#0d0d10] border border-white/20 rounded p-2 text-xs text-white font-mono focus:outline-none focus:border-[#b8965a]"
                        />
                      ) : (
                        <p className="text-white/90 mt-0.5 leading-relaxed">{step.text}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Thumbnail Brief */}
              <div className="p-4 rounded-xl bg-[#141418] border border-white/5 space-y-2 text-xs font-mono">
                <span className="text-[#b8965a] uppercase font-bold block text-[10px]">
                  🎨 AI Thumbnail Brief:
                </span>
                <p className="text-white/80">Subject: {selectedVideo.thumbnailBrief.visualSubject}</p>
                <p className="text-white/80">Text Hook: &ldquo;{selectedVideo.thumbnailBrief.textHook}&rdquo;</p>
                <p className="text-white/80">Emotion: {selectedVideo.thumbnailBrief.emotion}</p>
                <p className="text-white/80">Palette: {selectedVideo.thumbnailBrief.colorPalette}</p>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={handlePushToScriptStudio}
                  className="btn-secondary px-4 py-2 text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer text-[#b8965a] hover:text-white"
                >
                  <Film className="w-3.5 h-3.5" />
                  Generate Full Production Script →
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      Object.values(selectedVideo.remixHook7Step).join(" ")
                    );
                    setCopiedHookFull(true);
                    setTimeout(() => setCopiedHookFull(false), 2000);
                  }}
                  className="btn-gold px-5 py-2 text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(184,150,90,0.3)]"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copiedHookFull ? "Copied All 7 Steps!" : "Copy Full Hook Sequence"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#08080a] flex items-center justify-center text-white font-mono text-sm">
          Loading Creator Studio...
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
