"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sparkles, Terminal, Copy, CheckCircle2, ArrowLeft, Code2 } from "lucide-react";

export default function McpDocsPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCode = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const claudeCodeSnippet = `claude mcp add --transport http leksmedia https://leksmedia.com/api/v1/mcp --header "Authorization: Bearer leks_live_YOUR_API_KEY"`;
  const cursorConfigSnippet = `{
  "mcpServers": {
    "leksmedia": {
      "url": "https://leksmedia.com/api/v1/mcp",
      "headers": {
        "Authorization": "Bearer leks_live_YOUR_API_KEY"
      }
    }
  }
}`;

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f5f5f4] flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 flex-1">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <Link
              href="/"
              className="text-xs font-mono text-white/40 hover:text-white inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#b8965a]/30 bg-[#b8965a]/10 text-[#b8965a] font-mono text-xs uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              Developer & Agent Protocol
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-white">
              Model Context Protocol (MCP) & API Docs
            </h1>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              Connect Leksmedia directly into Claude Code, Cursor, or any autonomous agent stack to trigger real-time outlier detection, hook remixes, and multi-format script writing on demand.
            </p>
          </div>

          {/* Quick MCP Setup */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-6">
            <h2 className="font-serif text-2xl text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[#b8965a]" />
              Connect Claude Code in 1 Line
            </h2>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Run this in your local terminal. Your CLI agent can then query 48h YouTube velocity scores and generate 7-step hook sequences.
            </p>

            <div className="p-4 rounded-xl bg-black/60 border border-white/10 relative">
              <pre className="font-mono text-xs text-white/90 overflow-x-auto whitespace-pre-wrap break-all pr-12">
                {claudeCodeSnippet}
              </pre>
              <button
                onClick={() => copyCode(claudeCodeSnippet, 1)}
                className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                title="Copy snippet"
              >
                {copiedIndex === 1 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Cursor Configuration */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-6">
            <h2 className="font-serif text-2xl text-white">
              Cursor IDE Configuration
            </h2>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Add the following JSON into your Cursor <code className="text-[#b8965a] font-mono">mcp.json</code> settings file:
            </p>

            <div className="p-4 rounded-xl bg-black/60 border border-white/10 relative">
              <pre className="font-mono text-xs text-white/90 overflow-x-auto">
                {cursorConfigSnippet}
              </pre>
              <button
                onClick={() => copyCode(cursorConfigSnippet, 2)}
                className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                title="Copy snippet"
              >
                {copiedIndex === 2 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* MCP Exposed Tools Reference */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-4">
            <h2 className="font-serif text-2xl text-white">
              Exposed Tools & Endpoints
            </h2>
            <div className="space-y-3 pt-2 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#141418] border border-white/5">
                <span className="text-[#b8965a] block font-bold mb-1">
                  • get_outlier_videos(niche?: string, minScore?: number)
                </span>
                <p className="text-white/60 font-sans text-xs">
                  Returns top videos in the last 48 hours where velocity exceeds channel baseline by 200%+ or 500%+.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#141418] border border-white/5">
                <span className="text-sky-400 block font-bold mb-1">
                  • remix_7_step_hook(videoId: string, targetVoice?: string)
                </span>
                <p className="text-white/60 font-sans text-xs">
                  Generates the 7-step psychological hook remix without AI slop fragments.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#141418] border border-white/5">
                <span className="text-emerald-400 block font-bold mb-1">
                  • generate_production_script(videoId: string)
                </span>
                <p className="text-white/60 font-sans text-xs">
                  Generates full-length 8–12 min YouTube production script with B-roll cues, timestamps, and retention-engineered scene direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
