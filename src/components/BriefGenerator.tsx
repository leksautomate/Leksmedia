import React, { useState } from 'react';
import { BriefInput, GeneratedBrief } from '../types';
import { Sparkles, BrainCircuit, RefreshCw, Send, HelpCircle, Film, Copy, Check, Megaphone, HelpCircle as InfoIcon } from 'lucide-react';

interface BriefGeneratorProps {
  appliedQuoteSummary: string;
  appliedQuotePrice: string;
}

export default function BriefGenerator({ appliedQuoteSummary, appliedQuotePrice }: BriefGeneratorProps) {
  const [niche, setNiche] = useState('AI Automation & Wealth-Building');
  const [contentType, setContentType] = useState<'shorts' | 'full_production' | 'script_blueprint' | 'ai_avatar'>('shorts');
  const [tone, setTone] = useState('Energetic & Fast-Paced');
  const [duration, setDuration] = useState(60);
  const [idealAudience, setIdealAudience] = useState('Teen / Young Adult Entrepreneurs');
  
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [briefResult, setBriefResult] = useState<GeneratedBrief | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedText, setCopiedText] = useState(false);

  // Set reassuring loading messages that rotate
  const loadingMessages = [
    'Connecting to Leksmedia creative matrix...',
    'Brainstorming high-attention viral video concepts...',
    'Writing bulletproof scroll-stopping scripts...',
    'Injecting professional prompt parameters and camera motion layouts...',
    'Optimizing titles and tag parameters for search algorithms...',
    'Finalizing blueprint structure...'
  ];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setBriefResult(null);
    setErrorMsg('');
    setLoadingStep(0);

    // Rotate loading messages every 2.5 seconds
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev + 1) % loadingMessages.length);
    }, 2800);

    try {
      const payload: BriefInput = {
        niche,
        contentType,
        tone,
        duration,
        idealAudience
      };

      const response = await fetch('/api/gemini/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Creative server did not respond. Check if your API Key is specified.');
      }

      const data = await response.json();
      setBriefResult(data.brief);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'An error occurred during prompt compilation.');
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!briefResult) return;
    
    let text = `LEKSMEDIA AI CREATIVE BRIEF\n`;
    text += `==============================\n\n`;
    text += `👉 TITLE IDEA: ${briefResult.titleIdea}\n`;
    text += `🔥 VIRAL SHOCKWAVE HOOK: "${briefResult.hook}"\n\n`;
    text += `🎬 STORYBOARD SCENES:\n`;
    briefResult.scripts.forEach((s) => {
      text += `--- Scene ${s.scene} ---\n`;
      text += `🎥 Visual Direction: ${s.visual}\n`;
      text += `🗣️ Audio Narration: ${s.voiceover}\n`;
      text += `🤖 Proposed AI Prompts: ${s.promptSuggestion}\n\n`;
    });
    text += `📈 SEO ACTION TAGS: ${briefResult.seoOptimizations.join(', ')}\n`;
    text += `💰 EST COST: ${appliedQuotePrice ? appliedQuotePrice : briefResult.estimatedCostRange}\n`;

    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl" id="brief-builder">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left column: input compiler */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center gap-2 mb-1">
            <BrainCircuit className="w-5 h-5 text-indigo-400 animate-pulse" />
            <h3 className="text-lg font-bold text-white font-sans tracking-tight">AI Content Brief & Script Architect</h3>
          </div>
          <p className="text-xs text-slate-405 leading-relaxed font-sans font-light">
            Directly test Leksmedia's creative algorithms. Input your core target topic, choose a medium style, and generate instant scroll-stopping script frameworks backed by Gemini AI.
          </p>

          <form onSubmit={handleGenerate} className="space-y-4 pt-1 text-sm font-sans">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">Topic / Brand Niche</label>
              <input
                type="text"
                required
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="e.g. Cinematic side hustles, AI SaaS launch"
                className="w-full px-3.5 py-2.5 bg-white/5 border border-white/5 focus:border-indigo-500 rounded-xl text-xs text-white placeholder-slate-600 focus:ring-0 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">Content Category</label>
                <select
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/5 focus:border-indigo-500 rounded-xl text-xs text-slate-200 focus:ring-0 outline-none cursor-pointer transition-all"
                >
                  <option value="shorts" className="bg-[#0b0c15]">Short-Form Content</option>
                  <option value="full_production" className="bg-[#0b0c15]">Full Video Production</option>
                  <option value="script_blueprint" className="bg-[#0b0c15]">Scripts & Animations</option>
                  <option value="ai_avatar" className="bg-[#0b0c15]">AI Avatar Presenter</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">Creative Tone</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/5 focus:border-indigo-500 rounded-xl text-xs text-slate-200 focus:ring-0 outline-none cursor-pointer transition-all"
                >
                  <option value="Energetic & Hype" className="bg-[#0b0c15]">Energetic & Fast Paced</option>
                  <option value="Cinematic & Mysterious" className="bg-[#0b0c15]">Cinematic & Atmospheric</option>
                  <option value="Educational & Direct" className="bg-[#0b0c15]">Deep Educational</option>
                  <option value="Luxury & Minimalism" className="bg-[#0b0c15]">Premium Tech / Minimal</option>
                  <option value="Satirical & Meme-heavy" className="bg-[#0b0c15]">Humorous / Retentive</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">Duration Length</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/5 focus:border-indigo-500 rounded-xl text-xs text-slate-200 focus:ring-0 outline-none cursor-pointer transition-all"
                >
                  <option value={15} className="bg-[#0b0c15]">15s Micro short</option>
                  <option value={60} className="bg-[#0b0c15]">60s Video viral</option>
                  <option value={180} className="bg-[#0b0c15]">3 mins Mid-length</option>
                  <option value={600} className="bg-[#0b0c15]">10 mins Longform</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">Target Demographic</label>
                <input
                  type="text"
                  value={idealAudience}
                  onChange={(e) => setIdealAudience(e.target.value)}
                  placeholder="e.g. Gen-Z software developers"
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/5 focus:border-indigo-500 rounded-xl text-xs text-white placeholder-slate-600 focus:ring-0 outline-none transition-all"
                />
              </div>
            </div>

            {appliedQuoteSummary && (
              <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
                <div className="text-[10px] font-mono text-indigo-300 font-semibold uppercase flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5 text-indigo-400 animate-pulse" /> Combined Estimate Linked:
                </div>
                <div className="text-xs text-slate-200 font-medium mt-1 leading-normal font-sans">
                  {appliedQuoteSummary}
                </div>
                <div className="text-xs text-fuchsia-300 font-bold mt-1.5 font-mono">
                  Budget Value: {appliedQuotePrice}
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 bg-white text-black font-extrabold rounded-xl text-xs font-sans tracking-wide hover:scale-[1.03] active:scale-[0.97] transition-all shadow-lg shadow-white/5 ${
                loading ? 'opacity-80 cursor-wait' : 'cursor-pointer'
              } flex items-center justify-center gap-2`}
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-black" />
                  Generating script blueprint...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-black" />
                  Compile Storyboard Concept
                </>
              )}
            </button>
          </form>

          {errorMsg && (
            <div className="p-3.5 bg-red-550/10 border border-red-500/20 text-red-300 text-xs rounded-xl flex items-start gap-2 leading-relaxed">
              <span className="font-bold flex items-center h-4"><InfoIcon className="w-3.5 h-3.5 flex-shrink-0" /></span>
              <span className="font-sans font-light">{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Right column: live generated visual storyboard */}
        <div className="lg:col-span-7 flex flex-col min-h-[350px]">
          {loading ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 border border-white/10 rounded-3xl bg-white/5 text-center backdrop-blur-md">
              <div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-indigo-500 animate-spin mb-4" />
              <p className="text-sm text-slate-200 font-sans font-medium max-w-sm transition-all animate-pulse leading-relaxed">
                {loadingMessages[loadingStep]}
              </p>
              <p className="text-[10px] text-slate-500 font-mono mt-2 uppercase font-light">Creative Engine Compiling</p>
            </div>
          ) : briefResult ? (
            <div className="flex-1 flex flex-col justify-between border border-white/10 rounded-3xl bg-white/5 p-6 backdrop-blur-md shadow-2xl text-sm">
              <div>
                {/* Brief Title Header */}
                <div className="flex justify-between items-start gap-4 border-b border-white/5 pb-3.5 mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-wider block">
                      Target Idea Concept
                    </span>
                    <h4 className="text-base font-extrabold text-white font-sans tracking-tight leading-snug">
                      {briefResult.titleIdea}
                    </h4>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="flex-shrink-0 flex items-center gap-1.5 py-1.5 px-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono strings-wide text-white border border-white/10 transition-colors"
                  >
                    {copiedText ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Brief</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Shockwave Hook Block */}
                <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl mb-4">
                  <span className="text-[9px] font-mono text-indigo-300 font-bold uppercase tracking-wide block mb-1">
                    🔥 Scroll-stopping Hook (First 3 seconds)
                  </span>
                  <p className="text-xs text-white italic leading-relaxed font-sans font-medium">
                    "{briefResult.hook}"
                  </p>
                </div>

                {/* Storyboard scenes map */}
                <div className="space-y-3.5 max-h-[340px] overflow-y-auto pr-1">
                  <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wide block mb-1">
                    🎬 Shot-By-Shot Storyboard Grid ({briefResult.scripts.length} Key beats)
                  </span>

                  {briefResult.scripts.map((scene) => (
                    <div
                      key={scene.scene}
                      className="p-4 border border-white/5 bg-white/5 rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-3"
                    >
                      <div className="md:col-span-2 flex flex-col items-center justify-center border-r border-white/5 pb-2 md:pb-0">
                        <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">Beat</span>
                        <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-350 to-fuchsia-350 font-sans">
                          {scene.scene}
                        </span>
                      </div>

                      <div className="md:col-span-10 space-y-1.5 text-xs">
                        <div>
                          <span className="text-[9px] font-mono text-slate-400 font-semibold uppercase">Visual Motion: </span>
                          <span className="text-slate-200 leading-relaxed font-sans font-light">{scene.visual}</span>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-slate-400 font-semibold uppercase">Speech / Narration: </span>
                          <div className="text-indigo-300 italic font-medium leading-relaxed font-sans font-light">"{scene.voiceover}"</div>
                        </div>
                        <div className="text-[10px] bg-[#020205]/40 p-3 rounded-xl border border-white/5 font-mono text-slate-400 leading-relaxed font-light">
                          <span className="text-indigo-300 font-semibold block text-[9px] mb-0.5 uppercase">🤖 Proposed AI Prompts Setup:</span>
                          {scene.promptSuggestion}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* SEO Action tags */}
                <div className="mt-4 pt-3.5 border-t border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block mb-1.5">
                    📈 Engagement tags & SEO Keywords
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {briefResult.seoOptimizations.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-white/5 border border-white/5 text-slate-350 font-light"
                      >
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price estimation line */}
              <div className="text-[10px] font-mono text-slate-400 mt-4 border-t border-white/5 pt-3 flex justify-between items-center bg-indigo-500/5 px-3 py-2 rounded-xl border border-indigo-500/10">
                <span className="flex items-center gap-1.5"><Megaphone className="w-3.5 h-3.5 text-indigo-400" /> Dynamic Quote estimate:</span>
                <span className="font-extrabold text-indigo-300 text-xs font-mono">
                  {appliedQuotePrice ? appliedQuotePrice : briefResult.estimatedCostRange}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 border border-dashed border-white/10 rounded-3xl bg-white/5 text-center select-none backdrop-blur-md">
              <BrainCircuit className="w-10 h-10 text-slate-700 mb-3" />
              <h5 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">Waiting for Compilation</h5>
              <p className="text-xs text-slate-500 max-w-sm mt-1 mb-4 font-sans leading-normal font-light">
                Input your content criteria on the left panels or utilize the cost estimator, then click compile to witness Leksmedia storyboard execution live.
              </p>
              
              <div className="grid grid-cols-2 gap-3 text-left w-full max-w-md bg-white/5 border border-white/5 p-4 rounded-2xl">
                <div>
                  <span className="text-[9px] font-mono text-indigo-300 uppercase block mb-0.5">3D Camera Layouts</span>
                  <span className="text-[10px] text-slate-450 font-sans font-light leading-snug">Automatic framing configurations synced dynamically.</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-indigo-300 uppercase block mb-0.5">Prompt Compiling</span>
                  <span className="text-[10px] text-slate-450 font-sans font-light leading-snug">AI text and image synthesis triggers optimized natively.</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
