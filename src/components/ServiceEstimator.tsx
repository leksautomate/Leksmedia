import React, { useState } from 'react';
import { HelpCircle, Layers, Clock, TrendingUp, CheckCircle, Smartphone, Sliders, Laptop, UserCheck, Video } from 'lucide-react';

interface ServiceEstimatorProps {
  onQuoteSelect: (summary: string, price: string) => void;
}

export default function ServiceEstimator({ onQuoteSelect }: ServiceEstimatorProps) {
  const [selectedService, setSelectedService] = useState<'scripts_animation' | 'full_production' | 'short_form' | 'ai_avatar'>('short_form');
  const [videoCount, setVideoCount] = useState<number>(5);
  const [videoDuration, setVideoDuration] = useState<number>(60); // in seconds
  const [includeVoiceover, setIncludeVoiceover] = useState<boolean>(true);
  const [includeCustomGraphics, setIncludeCustomGraphics] = useState<boolean>(true);
  const [platformFocus, setPlatformFocus] = useState<string>('tiktok_reels');

  // Interactive estimates calculations based on industry standard multimedia production rates
  const calculatePricing = () => {
    let baseRate = 0;
    let multiplier = videoCount;
    let description = '';

    // Turnaround days based on complexity
    let turnaroundDays = 5;

    switch (selectedService) {
      case 'scripts_animation':
        baseRate = 150; // aligned with Starter $150 Script Writing plan
        turnaroundDays = Math.max(3, Math.round(videoCount * 1.0));
        description = 'Script Writing (8,000+ words, hook engineering, SEO tags & metadata)';
        break;
      case 'full_production':
        baseRate = 350; // aligned with Pro $350 End-To-End plan
        turnaroundDays = Math.max(5, Math.round(videoCount * 1.5));
        description = 'Full Video Production (Sora/Veo 3 AI prompts, script + animation plans, SEO suite)';
        break;
      case 'short_form':
        baseRate = 120; // high-retention short-form reels/shorts
        turnaroundDays = Math.max(2, Math.round(videoCount * 0.8));
        description = 'Short-Form Content (30-90s viral reels, animated caption styling)';
        break;
      case 'ai_avatar':
        baseRate = 320; // AI avatars scale
        turnaroundDays = Math.max(4, Math.round(videoCount * 1.2));
        description = 'AI Avatar Videos (HeyGen presenters, lifelike cloned voice synthesis)';
        break;
    }

    let rawCost = baseRate * multiplier;

    // Adjust for durations over standard sizes (shorts vs long-form)
    if (selectedService === 'full_production' && videoDuration > 60) {
      // Long form penalty rate
      const extraMinutes = Math.max(0, (videoDuration - 60) / 60);
      rawCost += extraMinutes * 150 * videoCount;
    }

    // Include toggles adjustments
    if (includeVoiceover && selectedService === 'scripts_animation') {
      rawCost += 50 * videoCount; // Add VO generation cost
    }
    if (includeCustomGraphics) {
      rawCost += 40 * videoCount; // Custom bespoke illustrations/visual overlays
    }

    // Bulk discount
    let discountPercent = 0;
    if (videoCount >= 10) {
      discountPercent = 15;
    } else if (videoCount >= 5) {
      discountPercent = 8;
    }

    const discountAmount = Math.round((rawCost * discountPercent) / 100);
    const finalPrice = Math.round(rawCost - discountAmount);

    return {
      subtotal: rawCost,
      discountPercent,
      discountAmount,
      finalPrice,
      turnaroundDays,
      serviceTitle: description,
    };
  };

  const pricing = calculatePricing();

  const handleApplyToBrief = () => {
    const quoteSummary = `${videoCount}x [${pricing.serviceTitle}] targeting ${videoDuration}s clips for ${platformFocus.toUpperCase()}`;
    const quotePrice = `$${pricing.finalPrice}`;
    onQuoteSelect(quoteSummary, quotePrice);
  };

  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Step-by-step Quote Tuner */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Sliders className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg font-bold text-white font-sans tracking-tight">Interactive Cost & Deliverables Calculator</h3>
          </div>

          {/* Service Selector Block */}
          <div>
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider block mb-2.5">
              1. Choose Core Creative Stream
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  id: 'scripts_animation',
                  label: 'Script Writing',
                  sub: '📝 8,000+ Word Narrations',
                  desc: 'Long-form scripts for history documentaries & explainer channels.'
                },
                {
                  id: 'full_production',
                  label: 'Full Video Production',
                  sub: '🎬 End-To-End Pipeline',
                  desc: 'Script, animation plans, Veo 3 / Sora prompts, thumbnail & SEO.'
                },
                {
                  id: 'short_form',
                  label: 'Short-Form Content',
                  sub: '📱 High-Retention Feed Dominator',
                  desc: 'Viral hooks, captions, and localized layouts.'
                },
                {
                  id: 'ai_avatar',
                  label: 'AI Avatar Videos',
                  sub: '🤖 Realistic Presenters',
                  desc: 'Lip-synced virtual avatars and customized cloned voiceover synthesis.'
                }
              ].map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => {
                    setSelectedService(svc.id as any);
                    if (svc.id === 'full_production' && videoDuration <= 60) {
                      setVideoDuration(180); // Default to long form
                    } else if (svc.id === 'short_form' || svc.id === 'ai_avatar') {
                      setVideoDuration(50); // Default to short-form length
                    }
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedService === svc.id
                      ? 'bg-white/10 border-indigo-500 text-white shadow-[0_0_15px_rgba(129,140,248,0.15)]'
                      : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-300'
                  }`}
                >
                  <div className="font-bold text-sm tracking-tight text-white">{svc.label}</div>
                  <div className="text-[10px] font-mono text-indigo-300 font-semibold mt-0.5">{svc.sub}</div>
                  <div className="text-xs text-slate-450 mt-1.5 leading-relaxed font-light">{svc.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Slider Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
                  2. Video Volume Count
                </span>
                <span className="font-mono text-indigo-300 font-bold bg-white/5 px-2.5 py-0.5 rounded-lg border border-white/5 text-xs">
                  {videoCount} {videoCount === 1 ? 'Video' : 'Videos'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={videoCount}
                onChange={(e) => setVideoCount(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>1 Video</span>
                <span>10+ Videos (15% off)</span>
                <span>30 Videos</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
                  3. Video Duration Format
                </span>
                <span className="font-mono text-indigo-300 font-bold bg-white/5 px-2.5 py-0.5 rounded-lg border border-white/5 text-xs">
                  {videoDuration >= 60 ? `${Math.floor(videoDuration/60)}m ${videoDuration%60}s` : `${videoDuration} seconds`}
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="600"
                step="5"
                value={videoDuration}
                onChange={(e) => setVideoDuration(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>15s (Shorts)</span>
                <span>1 min</span>
                <span>5 mins</span>
                <span>10 mins</span>
              </div>
            </div>
          </div>

          {/* Add-on toggles & Social Platform selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider mb-2 block">
                4. Primary Target Platform
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'tiktok_reels', label: 'Tiktok / Reels', icon: Smartphone },
                  { id: 'youtube_shorts', label: 'YT Shorts', icon: Video },
                  { id: 'youtube_long', label: 'YT Longform', icon: Laptop },
                ].map((plat) => {
                  const IconComp = plat.icon;
                  return (
                    <button
                      key={plat.id}
                      onClick={() => setPlatformFocus(plat.id)}
                      className={`py-2 px-1 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all text-center ${
                        platformFocus === plat.id
                          ? 'bg-indigo-500/20 border-indigo-500/80 text-fuchsia-300'
                          : 'bg-white/5 border-white/5 hover:border-white/10 text-slate-400'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                      <span className="text-[10px] font-medium tracking-tight whitespace-nowrap">{plat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider mb-2.5 block">
                5. High-Retention Assets inclusion
              </span>
              <div className="space-y-2">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={includeVoiceover}
                    onChange={(e) => setIncludeVoiceover(e.target.checked)}
                    className="rounded bg-white/5 border-white/10 text-indigo-400 focus:ring-0 w-3.5 h-3.5"
                  />
                  <span className="font-light">AI voice cloned synthesis or narration template</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={includeCustomGraphics}
                    onChange={(e) => setIncludeCustomGraphics(e.target.checked)}
                    className="rounded bg-white/5 border-white/10 text-indigo-400 focus:ring-0 w-3.5 h-3.5"
                  />
                  <span className="font-light">Bespoke 3D elements / custom visual motion overlays</span>
                </label>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Live Cost Summary & Billing Deck */}
        <div className="w-full lg:w-80 bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-between backdrop-blur-md">
          <div>
            <div className="border-b border-white/10 pb-3.5 mb-4">
              <span className="text-[10px] font-mono uppercase text-slate-450 tracking-wider block">Est. Billable Spec</span>
              <h4 className="text-sm font-bold text-slate-200 mt-1 font-sans">{pricing.serviceTitle}</h4>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between text-slate-400 font-light">
                <span>Unit Base Rate:</span>
                <span className="text-slate-200 font-medium">${pricing.subtotal / videoCount} / video</span>
              </div>
              <div className="flex justify-between text-slate-400 font-light">
                <span>Subtotal ({videoCount} videos):</span>
                <span className="text-slate-200 font-medium">${pricing.subtotal}</span>
              </div>

              {pricing.discountPercent > 0 && (
                <div className="flex justify-between text-indigo-300 font-semibold">
                  <span>Volume Discount ({pricing.discountPercent}%):</span>
                  <span>-${pricing.discountAmount}</span>
                </div>
              )}

              <div className="flex justify-between text-slate-400 border-t border-white/5 pt-3 text-[11px] font-light">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" /> Deliverable:
                </span>
                <span className="text-slate-205 font-semibold">⚡ ~ {pricing.turnaroundDays} working days</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 font-semibold block">Estimated Total:</span>
              <span className="text-3xl font-black text-white tracking-tight">
                ${pricing.finalPrice}
              </span>
            </div>

            <button
              onClick={handleApplyToBrief}
              className="w-full py-3 px-4 bg-white text-black font-extrabold rounded-xl text-xs font-sans tracking-wide hover:scale-[1.03] active:scale-[0.97] transition-transform shadow-lg shadow-white/5 cursor-pointer text-center flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-4 h-4 text-black" /> Apply To Project Builder
            </button>
            <p className="text-[10px] text-center text-slate-500 font-mono mt-2.5 leading-normal font-light">
              Estimates are dynamically computed. Click to automatically align your AI Brief Planner content!
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
