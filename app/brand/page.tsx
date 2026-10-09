"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { generateSampleBlueprint, IkigaiBlueprint } from "@/lib/creatorData";
import {
  Compass,
  UserCheck,
  Volume2,
  Layers,
  RefreshCw,
  LayoutDashboard,
  Film,
  LogIn,
  Copy,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Target,
  FileCheck,
  Download,
  Edit3,
  Save,
  RotateCcw,
  ExternalLink,
  Share2,
  BarChart2,
  TrendingUp
} from "lucide-react";

interface PathBStrategy {
  youtubeUrl?: string;
  nicheDescription?: string;
  email?: string;
  path?: string;
}

export default function BrandBlueprintPage() {
  const [blueprint, setBlueprint] = useState<IkigaiBlueprint>(generateSampleBlueprint());
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saveToast, setSaveToast] = useState(false);
  const [strategyContext, setStrategyContext] = useState<PathBStrategy | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check for custom saved blueprint first
      const customSaved = localStorage.getItem("creator_os_custom_blueprint");
      if (customSaved) {
        try {
          setBlueprint(JSON.parse(customSaved));
        } catch (e) {
          console.error(e);
        }
      } else {
        const saved = localStorage.getItem("creator_os_blueprint");
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            setBlueprint(generateSampleBlueprint(parsed.passion, parsed.skills, parsed.mission, parsed.vocation));
          } catch (e) {
            console.error(e);
          }
        }
      }

      // Check for Path B strategy data
      const strat = localStorage.getItem("creator_os_strategy");
      if (strat) {
        try {
          setStrategyContext(JSON.parse(strat));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  const handleSaveCustomBlueprint = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("creator_os_custom_blueprint", JSON.stringify(blueprint));
      setSaveToast(true);
      setIsEditing(false);
      setTimeout(() => setSaveToast(false), 3000);
    }
  };

  const handleResetToAiDefault = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("creator_os_custom_blueprint");
      const saved = localStorage.getItem("creator_os_blueprint");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setBlueprint(generateSampleBlueprint(parsed.passion, parsed.skills, parsed.mission, parsed.vocation));
        } catch {
          setBlueprint(generateSampleBlueprint());
        }
      } else {
        setBlueprint(generateSampleBlueprint());
      }
      setIsEditing(false);
      setSaveToast(true);
      setTimeout(() => setSaveToast(false), 3000);
    }
  };

  const generateMarkdownString = () => {
    return `# Brand Blueprint — Leksmedia Studio
Generated: ${new Date().toLocaleDateString()}
Target Architecture: Data-Validated Creator Category Design

---

## 01. Brand Positioning Identity
> "${blueprint.brandPositioning}"

- Core Passion: ${blueprint.passion}
- Unfair Skillset: ${blueprint.skills}
- Market Mission: ${blueprint.mission}
- High-Ticket Monetization: ${blueprint.vocation}

---

## 02. Ideal Customer Avatar (ICA)
- Target Role: ${blueprint.idealCustomerAvatar.targetRole}
- Psychographic Mindset: ${blueprint.idealCustomerAvatar.dominantMindset}

### Critical Pain Points
${blueprint.idealCustomerAvatar.corePainPoints.map(p => `- ${p}`).join("\n")}

### Primary Goals & Desires
${blueprint.idealCustomerAvatar.primaryGoals.map(g => `- ${g}`).join("\n")}

---

## 03. Brand Voice & Tone
- Archetype: ${blueprint.brandVoiceAndTone.archetype}
- Writing Style: ${blueprint.brandVoiceAndTone.writingStyle}

### Always Do (Voice Guidelines):
${blueprint.brandVoiceAndTone.doRules.map(r => `- ✓ ${r}`).join("\n")}

### Never Do (Strict Voice Constraints):
${blueprint.brandVoiceAndTone.dontRules.map(r => `- ✗ ${r}`).join("\n")}

---

## 04. Monetization Content Pillars
${blueprint.contentPillars.map(p => `### Pillar ${p.number}: ${p.title}
${p.description}

**Example Viral Topics:**
${p.viralTopics.map(t => `- ${t}`).join("\n")}
`).join("\n---\n")}
`;
  };

  const handleDownloadMarkdown = () => {
    const md = generateMarkdownString();
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `brand_blueprint_${blueprint.idealCustomerAvatar.targetRole.toLowerCase().replace(/[^a-z0-9]/g, "_")}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadJson = () => {
    const jsonString = JSON.stringify(blueprint, null, 2);
    const blob = new Blob([jsonString], { type: "application/json;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "brand_blueprint.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyFullBlueprint = () => {
    navigator.clipboard.writeText(generateMarkdownString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f5f5f4] flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 flex-1">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Path B Strategy Callout if applicable */}
          {strategyContext && (
            <div className="p-4 rounded-xl bg-[#b8965a]/10 border border-[#b8965a]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#b8965a] uppercase font-semibold">
                  <BarChart2 className="w-3.5 h-3.5" />
                  Calibrated for existing channel: {strategyContext.youtubeUrl || "@channel"}
                </div>
                <p className="text-xs text-white/80 font-light">
                  Niche focus: <strong className="text-white font-medium">{strategyContext.nicheDescription || "General"}</strong>
                </p>
              </div>
              <Link
                href="/#scripts"
                className="btn-gold px-4 py-2 text-xs font-semibold inline-flex items-center gap-1.5 flex-shrink-0 cursor-pointer shadow-md"
              >
                Explore Production Scripts →
              </Link>
            </div>
          )}

          {/* Toast Notification */}
          {saveToast && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center justify-between animate-fade-in">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Blueprint modifications saved to your local Creator Studio session!
              </span>
              <button
                onClick={() => setSaveToast(false)}
                className="text-emerald-400 hover:text-white"
              >
                ✕
              </button>
            </div>
          )}

          {/* Header & Primary Actions */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">
                <FileCheck className="w-3.5 h-3.5" />
                Category Architecture Generated
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-tight">
                Your Brand <em className="text-[#b8965a] italic">Blueprint</em>
              </h1>
              <p className="text-sm text-white/60 font-light mt-2 max-w-xl">
                Synthesized from your Ikigai quadrant coordinates and benchmarked against top creator retention frameworks.
              </p>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSaveCustomBlueprint}
                    className="btn-gold px-4 py-2 text-xs font-semibold inline-flex items-center gap-1.5 shadow-[0_0_15px_rgba(184,150,90,0.35)] cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" />
                    Save Changes
                  </button>
                  <button
                    onClick={handleResetToAiDefault}
                    className="btn-secondary px-3.5 py-2 text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer text-red-300 hover:text-red-200"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="btn-secondary px-3.5 py-2 text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn-secondary px-4 py-2 text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer border-[#b8965a]/30 hover:border-[#b8965a]"
                >
                  <Edit3 className="w-3.5 h-3.5 text-[#b8965a]" />
                  Edit Blueprint
                </button>
              )}

              <button
                onClick={handleDownloadMarkdown}
                title="Download formatted Markdown document"
                className="btn-secondary px-3.5 py-2 text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-sky-400" />
                Export .md
              </button>

              <button
                onClick={handleDownloadJson}
                title="Download JSON data file"
                className="btn-secondary px-3 py-2 text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer"
              >
                JSON
              </button>

              <button
                onClick={handleCopyFullBlueprint}
                className="btn-secondary px-3.5 py-2 text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied ? "Copied All!" : "Copy"}
              </button>

              <Link
                href="/#scripts"
                className="btn-gold px-4 py-2 text-xs font-semibold inline-flex items-center gap-1.5 shadow-[0_0_20px_rgba(184,150,90,0.3)] cursor-pointer"
              >
                <Film className="w-3.5 h-3.5" />
                Production Scripts
              </Link>
            </div>
          </div>

          {/* Section 1: Brand Positioning */}
          <div className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-4 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-[#b8965a]/10 pointer-events-none">
              <Compass className="w-32 h-32" />
            </div>

            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#b8965a] uppercase tracking-wider font-semibold">
                🎯 01 · Brand Positioning Identity
              </span>
              {isEditing && (
                <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                  Editing Mode Active
                </span>
              )}
            </div>

            {isEditing ? (
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase text-white/50 block">
                  Category Positioning Statement:
                </label>
                <textarea
                  value={blueprint.brandPositioning}
                  onChange={(e) =>
                    setBlueprint({ ...blueprint, brandPositioning: e.target.value })
                  }
                  rows={3}
                  className="w-full bg-[#141418] border border-white/20 rounded-xl p-3.5 text-base sm:text-lg text-white font-serif focus:outline-none focus:border-[#b8965a]"
                />
              </div>
            ) : (
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal max-w-3xl leading-snug">
                &ldquo;{blueprint.brandPositioning}&rdquo;
              </h2>
            )}

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-white/50 border-t border-white/5">
              <span>Core Passion: {blueprint.passion ? blueprint.passion.split(",")[0] : "Discipline"}</span>
              <span>•</span>
              <span>Unfair Skill: {blueprint.skills ? blueprint.skills.split(",")[0] : "Expertise"}</span>
              <span>•</span>
              <span>Monetization: {blueprint.vocation ? blueprint.vocation.split(",")[0] : "Solutions"}</span>
            </div>
          </div>

          {/* Section 2: Ideal Customer Avatar (ICA) */}
          <div className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-sky-400 uppercase tracking-wider font-semibold">
                👤 02 · Ideal Customer Avatar (ICA)
              </span>
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-white/50">Target Role:</span>
                  <input
                    type="text"
                    value={blueprint.idealCustomerAvatar.targetRole}
                    onChange={(e) =>
                      setBlueprint({
                        ...blueprint,
                        idealCustomerAvatar: {
                          ...blueprint.idealCustomerAvatar,
                          targetRole: e.target.value
                        }
                      })
                    }
                    className="bg-[#141418] border border-white/20 rounded px-2.5 py-1 text-xs text-white font-mono focus:outline-none focus:border-sky-400"
                  />
                </div>
              ) : (
                <span className="font-mono text-xs text-white/40">
                  {blueprint.idealCustomerAvatar.targetRole}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* Pain Points */}
              <div className="p-6 rounded-xl bg-[#141418] border border-white/5 space-y-3">
                <h3 className="font-serif text-lg text-red-400">
                  Critical Pain Points
                </h3>
                {isEditing ? (
                  <textarea
                    rows={4}
                    value={blueprint.idealCustomerAvatar.corePainPoints.join("\n")}
                    onChange={(e) =>
                      setBlueprint({
                        ...blueprint,
                        idealCustomerAvatar: {
                          ...blueprint.idealCustomerAvatar,
                          corePainPoints: e.target.value.split("\n").filter(Boolean)
                        }
                      })
                    }
                    className="w-full bg-[#0d0d10] border border-white/20 rounded-lg p-2.5 text-xs text-white/80 font-light focus:outline-none focus:border-red-400"
                    placeholder="One pain point per line"
                  />
                ) : (
                  <ul className="space-y-2 text-xs text-white/70 font-light leading-relaxed">
                    {blueprint.idealCustomerAvatar.corePainPoints.map((pain, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-400">•</span>
                        {pain}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Goals */}
              <div className="p-6 rounded-xl bg-[#141418] border border-white/5 space-y-3">
                <h3 className="font-serif text-lg text-emerald-400">
                  Primary Goals
                </h3>
                {isEditing ? (
                  <textarea
                    rows={4}
                    value={blueprint.idealCustomerAvatar.primaryGoals.join("\n")}
                    onChange={(e) =>
                      setBlueprint({
                        ...blueprint,
                        idealCustomerAvatar: {
                          ...blueprint.idealCustomerAvatar,
                          primaryGoals: e.target.value.split("\n").filter(Boolean)
                        }
                      })
                    }
                    className="w-full bg-[#0d0d10] border border-white/20 rounded-lg p-2.5 text-xs text-white/80 font-light focus:outline-none focus:border-emerald-400"
                    placeholder="One goal per line"
                  />
                ) : (
                  <ul className="space-y-2 text-xs text-white/70 font-light leading-relaxed">
                    {blueprint.idealCustomerAvatar.primaryGoals.map((goal, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400">•</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Mindset */}
              <div className="p-6 rounded-xl bg-[#141418] border border-white/5 space-y-3">
                <h3 className="font-serif text-lg text-[#b8965a]">
                  Psychographic Mindset
                </h3>
                {isEditing ? (
                  <textarea
                    rows={4}
                    value={blueprint.idealCustomerAvatar.dominantMindset}
                    onChange={(e) =>
                      setBlueprint({
                        ...blueprint,
                        idealCustomerAvatar: {
                          ...blueprint.idealCustomerAvatar,
                          dominantMindset: e.target.value
                        }
                      })
                    }
                    className="w-full bg-[#0d0d10] border border-white/20 rounded-lg p-2.5 text-xs text-white/80 font-light focus:outline-none focus:border-[#b8965a]"
                  />
                ) : (
                  <>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      {blueprint.idealCustomerAvatar.dominantMindset}
                    </p>
                    <div className="pt-2 text-[11px] font-mono text-white/40">
                      Values verified data and calm operational sovereignty over hustle culture.
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Section 3: Brand Voice & Tone */}
          <div className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-6 shadow-xl">
            <span className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold">
              🗣️ 03 · Brand Voice & Tone
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Voice Style */}
              <div className="p-6 rounded-xl bg-[#141418] border border-white/5 space-y-3">
                <span className="font-mono text-[10px] text-white/40 uppercase">Archetype</span>
                {isEditing ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={blueprint.brandVoiceAndTone.archetype}
                      onChange={(e) =>
                        setBlueprint({
                          ...blueprint,
                          brandVoiceAndTone: {
                            ...blueprint.brandVoiceAndTone,
                            archetype: e.target.value
                          }
                        })
                      }
                      className="w-full bg-[#0d0d10] border border-white/20 rounded px-2.5 py-1.5 text-base text-white font-serif focus:outline-none focus:border-amber-400"
                    />
                    <textarea
                      rows={3}
                      value={blueprint.brandVoiceAndTone.writingStyle}
                      onChange={(e) =>
                        setBlueprint({
                          ...blueprint,
                          brandVoiceAndTone: {
                            ...blueprint.brandVoiceAndTone,
                            writingStyle: e.target.value
                          }
                        })
                      }
                      className="w-full bg-[#0d0d10] border border-white/20 rounded-lg p-2.5 text-xs text-white/80 focus:outline-none focus:border-amber-400 font-light"
                    />
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif text-2xl text-white">
                      {blueprint.brandVoiceAndTone.archetype}
                    </h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      {blueprint.brandVoiceAndTone.writingStyle}
                    </p>
                  </>
                )}
              </div>

              {/* Do vs Don't table */}
              <div className="p-6 rounded-xl bg-[#141418] border border-white/5 space-y-4">
                <div>
                  <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold mb-2">
                    ✓ Always Do (Voice Guidelines):
                  </h4>
                  <ul className="space-y-1.5 text-xs text-white/70 font-light">
                    {blueprint.brandVoiceAndTone.doRules.map((rule, i) => (
                      <li key={i}>• {rule}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <h4 className="text-xs font-mono uppercase text-red-400 font-bold mb-2">
                    ✗ Never Do (Strict Voice Constraints):
                  </h4>
                  <ul className="space-y-1.5 text-xs text-white/70 font-light">
                    {blueprint.brandVoiceAndTone.dontRules.map((rule, i) => (
                      <li key={i}>• {rule}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Content Pillars (3-5) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#b8965a] uppercase tracking-wider font-semibold">
                🧱 04 · Monetization Content Pillars (3–5)
              </span>
              <span className="font-mono text-xs text-white/40">
                Balanced between Organic Virality and Inbound Conversion
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blueprint.contentPillars.map((pillar, pIdx) => (
                <div
                  key={pillar.number}
                  className="p-8 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-4 shadow-xl flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="font-mono text-xs text-[#b8965a] font-bold">
                      Pillar {pillar.number}
                    </span>

                    {isEditing ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={pillar.title}
                          onChange={(e) => {
                            const updated = [...blueprint.contentPillars];
                            updated[pIdx].title = e.target.value;
                            setBlueprint({ ...blueprint, contentPillars: updated });
                          }}
                          className="w-full bg-[#141418] border border-white/20 rounded px-2.5 py-1 text-lg text-white font-serif focus:outline-none focus:border-[#b8965a]"
                        />
                        <textarea
                          rows={2}
                          value={pillar.description}
                          onChange={(e) => {
                            const updated = [...blueprint.contentPillars];
                            updated[pIdx].description = e.target.value;
                            setBlueprint({ ...blueprint, contentPillars: updated });
                          }}
                          className="w-full bg-[#141418] border border-white/20 rounded p-2 text-xs text-white/70 focus:outline-none focus:border-[#b8965a]"
                        />
                      </div>
                    ) : (
                      <>
                        <h3 className="font-serif text-2xl text-white">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-white/60 font-light leading-relaxed">
                          {pillar.description}
                        </p>
                      </>
                    )}

                    <div className="pt-3 border-t border-white/5 space-y-2">
                      <span className="font-mono text-[10px] uppercase text-white/40 block">
                        Example Viral Topics:
                      </span>
                      {isEditing ? (
                        <textarea
                          rows={3}
                          value={pillar.viralTopics.join("\n")}
                          onChange={(e) => {
                            const updated = [...blueprint.contentPillars];
                            updated[pIdx].viralTopics = e.target.value.split("\n").filter(Boolean);
                            setBlueprint({ ...blueprint, contentPillars: updated });
                          }}
                          className="w-full bg-[#141418] border border-white/20 rounded p-2 text-xs text-white/80 font-mono focus:outline-none focus:border-[#b8965a]"
                          placeholder="One topic per line"
                        />
                      ) : (
                        <ul className="space-y-1.5 text-xs text-white/80 font-mono">
                          {pillar.viralTopics.map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#b8965a]">→</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Pillar Action Buttons */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href="/#scripts"
                      className="text-xs font-mono text-[#b8965a] hover:underline inline-flex items-center gap-1"
                    >
                      <Film className="w-3.5 h-3.5" />
                      Production Scripts →
                    </Link>

                    <Link
                      href="/dashboard?tab=youtube"
                      className="text-xs font-mono text-emerald-400 hover:underline inline-flex items-center gap-1"
                    >
                      <TrendingUp className="w-3.5 h-3.5" />
                      YouTube Outlier Feed →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Nav Footer / Action Banner */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0d0d10] flex flex-wrap items-center justify-between gap-6 shadow-2xl">
            <div>
              <h3 className="font-serif text-2xl text-white">
                Next: Scale Your Brand with Outlier Scripts
              </h3>
              <p className="text-xs text-white/60 font-light mt-1">
                Your blueprint is locked in. Receive ready-to-record full production scripts and 7-step hook remixes weekly.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/#scripts"
                className="btn-gold px-6 py-3 text-xs font-semibold inline-flex items-center gap-2 shadow-[0_0_20px_rgba(184,150,90,0.35)]"
              >
                <Film className="w-4 h-4" />
                🎬 Production Scripts
              </Link>
              <Link
                href="/#pricing"
                className="btn-secondary px-5 py-3 text-xs font-medium inline-flex items-center gap-1.5"
              >
                <ArrowRight className="w-4 h-4 text-[#b8965a]" />
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
