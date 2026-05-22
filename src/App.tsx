import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Film,
  Cpu,
  Layers,
  Smartphone,
  Zap,
  BookOpen,
  UserCheck,
  Volume2,
  ArrowRight,
  ChevronDown,
  Check,
  Instagram,
  Youtube,
  Heart,
  Calculator,
  Plus,
  Menu,
  X,
  Award,
  Clock,
  ExternalLink,
  Users,
  Eye,
  Send,
  Sliders,
  Play
} from 'lucide-react';

import { NexusConfig, ServiceItem } from './types';
import NexusCanvas from './components/NexusCanvas';
import ServiceEstimator from './components/ServiceEstimator';
import BriefGenerator from './components/BriefGenerator';

function ContactFormWrapper() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('full_production');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 950);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
      >
        <span className="text-3xl">🎉</span>
        <h4 className="text-lg font-black text-emerald-300 font-sans">Proposal successfully sent to Leksmedia!</h4>
        <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. I have cached your criteria parameters and am currently preparing a matching channel strategy mockup. I will reach back to your secure email address shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-mono py-1.5 px-4 rounded-xl border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20 transition-all font-semibold"
        >
          Send another proposal
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Your Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Creator Nick"
            className="w-full text-xs font-mono py-2.5 px-4 rounded-xl bg-white/5 border border-white/5 focus:border-indigo-500/30 text-white outline-none placeholder:text-slate-600 transition-all focus:bg-white/[0.08]"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Your Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. leader@channel.com"
            className="w-full text-xs font-mono py-2.5 px-4 rounded-xl bg-white/5 border border-white/5 focus:border-indigo-500/30 text-white outline-none placeholder:text-slate-600 transition-all focus:bg-white/[0.08]"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Target Service Category</label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full text-xs font-mono py-2.5 px-4 rounded-xl bg-[#08080c] border border-white/5 text-slate-300 outline-none transition-all focus:border-indigo-500/30"
        >
          <option value="scripts_animation">Script Writing - Starter Plan ($150)</option>
          <option value="full_production">Full Video Production - Pro Plan ($350)</option>
          <option value="agency">Agency Retainer Plan ($900/month)</option>
          <option value="custom">Custom Estimated Ticket Stream</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Script Narrative or Goals</label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly pitch your channel goal or tell me about your niche..."
          className="w-full text-xs font-mono py-2.5 px-4 rounded-xl bg-white/5 border border-white/5 focus:border-indigo-500/30 text-white outline-none placeholder:text-slate-600 transition-all focus:bg-white/[0.08] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="w-full sm:w-auto py-3 px-6 rounded-xl bg-indigo-500 hover:bg-indigo-600 active:scale-95 disabled:opacity-50 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/10 font-sans uppercase tracking-wider"
      >
        {isSending ? (
          <>
            <div className="w-3 h-3 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            <span>Transmitting...</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            <span>Submit Proposal Request</span>
          </>
        )}
      </button>
    </form>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'script_writing' | 'full_production' | 'short_form' | 'ai_avatar'>('short_form');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Applied cost parameters to pass into the AI Script Brief Generator
  const [appliedQuoteSummary, setAppliedQuoteSummary] = useState('');
  const [appliedQuotePrice, setAppliedQuotePrice] = useState('');

  // 3D Canvas Rig Configuration Settings
  const [nexusConfig, setNexusConfig] = useState<NexusConfig>({
    shape: 'AI_SYNAPSE',
    particleCount: 750,
    rotationSpeed: 0.8,
    colorTheme: 'cyan',
    glowingCore: true,
  });

  const handleConfigChange = (newConfig: Partial<NexusConfig>) => {
    setNexusConfig((prev) => ({ ...prev, ...newConfig }));
  };

  const handleApplyEstimateToBrief = (summary: string, price: string) => {
    setAppliedQuoteSummary(summary);
    setAppliedQuotePrice(price);
    
    // Smooth scroll key elements to the brief generator matching user interest
    const targetElement = document.getElementById('brief-builder-anchor');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mock services content showing detailed deliverables of each requested service
  const creativeServicesList = [
    {
      id: 'script_writing',
      title: 'Script Writing',
      badge: '📝 8,000+ Word Scripts',
      short: 'Research-backed narration scripts for history documentaries',
      long: 'Long-form narration scripts for history documentaries and explainer channels. Clean prose, no filler, built for voiceover and maximized retention.',
      metrics: {
        ctr: '8,000+ word scripts',
        turnaround: '3-4 Working Days',
        idealFor: 'History documentaries and explainer channels'
      },
      deliverables: [
        '8,000+ word scripts',
        'Research-backed narration',
        'Hook engineering',
        'YouTube SEO metadata'
      ]
    },
    {
      id: 'full_production',
      title: 'Full Video Production',
      badge: '🎬 End-to-End Pipeline',
      short: 'Complete production from raw prompt outline to published deliverables',
      long: 'End-to-end pipeline: script, animation plan, AI video prompts (Veo 3 / Sora), thumbnail, description, and tags.',
      metrics: {
        retention: 'Script + animation JSON',
        turnaround: '5-7 Working Days',
        idealFor: 'Full-channel scale and automated feeds'
      },
      deliverables: [
        'Script + animation JSON',
        'Veo 3 / Sora AI prompts',
        'Thumbnail design',
        'YouTube SEO package'
      ]
    },
    {
      id: 'short_form',
      title: 'Short-Form Content',
      badge: '📱 High-Retention Clips',
      short: 'Viral scroll stopping formats for high growth social feeds',
      long: 'High-retention Shorts, Reels, and TikToks. Viral hooks, captions, and platform-optimized formats for IG, FB, TikTok, and YouTube.',
      metrics: {
        viewsRate: '30–90 second scripts',
        turnaround: '2-4 Working Days',
        idealFor: 'Instagram, TikTok, Facebook, and YouTube Shorts'
      },
      deliverables: [
        '30–90 second scripts',
        'Viral hook writing',
        'Multi-platform formatting',
        'Caption + hashtag strategy'
      ]
    },
    {
      id: 'ai_avatar',
      title: 'AI Avatar Videos',
      badge: '🤖 Professional Presenters',
      short: 'Talking-head video presenter series',
      long: 'Realistic AI presenter videos using HeyGen and similar tools. No camera needed — professional talking-head content at scale.',
      metrics: {
        scaling: 'HeyGen avatar generation',
        turnaround: '3-5 Working Days',
        idealFor: 'Training, presentations, faceless channels'
      },
      deliverables: [
        'HeyGen avatar generation',
        'Lip-synced voiceover',
        'Custom avatar setup',
        'Multi-language versions'
      ]
    }
  ];

  const activeServiceData = creativeServicesList.find((s) => s.id === activeTab) || creativeServicesList[2];

  const faqList = [
    {
      q: 'How does Leksmedia combine traditional media production with AI techniques?',
      a: 'We leverage generative tools like Gemini 3.5, Midjourney, and VEO alongside human cinematography and editing systems. This allows us to create visuals that would traditionally cost $20k+ for a fraction of the cost, complete with ultra-fast turnaround timelines.'
    },
    {
      q: 'Can you secure my personal voice and face clone safely?',
      a: 'Yes. All custom synthetic avatars and voice clones created for our clients are locked down in secure sandboxes. We do not use your training data for general model improvements and enforce strict authentication safeguards.'
    },
    {
      q: 'What is the "AI Content Brief Creator" on the page?',
      a: 'It is Leksmedia\'s live playground. It uses the Gemini 3.5 Flash model directly from our server API to compile a functional viral concept, scroll hook, sequential storyboard, and Midjourney commands completely for free, tailored to your brand niche!'
    },
    {
      q: 'How does the volume discount work on the Service Estimator?',
      a: 'When you order larger batch production packages (e.g., 5 or more video blueprint/scripts), we apply a bulk automated discount (ranging from 8% to 15%) to cut unit production overheads.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-slate-100 selection:bg-indigo-505/30 selection:text-indigo-200 relative overflow-x-hidden font-sans">
      
      {/* Immersive Background Mesh */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-indigo-600/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-fuchsia-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative "3D" Floating Elements */}
      <div className="absolute top-24 right-16 w-32 h-32 rotate-12 bg-gradient-to-tr from-white/10 to-transparent border border-white/15 rounded-3xl flex items-center justify-center backdrop-blur-md pointer-events-none shadow-2xl hidden lg:flex">
        <div className="w-12 h-12 bg-white/5 rounded-full border border-white/30 animate-pulse" />
      </div>
      <div className="absolute bottom-40 left-6 w-24 h-24 -rotate-12 bg-gradient-to-bl from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm pointer-events-none shadow-xl hidden xl:flex">
        <div className="w-8 h-8 bg-white/5 rounded-full border border-white/20 animate-pulse" />
      </div>

      {/* Floating Header Navigation Panel */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-400 to-fuchsia-600 shadow-[0_0_15px_rgba(129,140,248,0.3)]">
              <span className="font-sans font-extrabold text-white text-base tracking-tighter">LM</span>
              <div className="absolute inset-0 rounded-lg animate-pulse border border-white/20" />
            </div>
            <div>
              <span className="font-sans font-extrabold text-white tracking-tight text-lg leading-none block">Leksmedia</span>
              <span className="text-[10px] font-mono text-indigo-400 block mt-0.5 font-semibold uppercase tracking-widest">Digital Space</span>
            </div>
          </div>

          {/* Desktop Navigation Anchors */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono text-slate-300">
            <a href="#about-section" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#services-section" className="hover:text-indigo-400 transition-colors">Services</a>
            <a href="#pricing-section" className="hover:text-indigo-400 transition-colors">Pricing</a>
            <a href="#brief-builder-anchor" className="hover:text-fuchsia-400 transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" /> AI Video Director
            </a>
            <a href="#contact-section" className="hover:text-indigo-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing-section"
              className="py-2 px-4 rounded-xl bg-white text-black font-extrabold hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-white/5 font-sans text-xs pointer-events-auto"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile responsive triggers */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-350 hover:text-white p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu anchors */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#020205]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-4 space-y-3.5 flex flex-col font-mono text-xs">
            <a
              href="#nexus-canvas-section"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-indigo-400 py-1"
            >
              3D Interactive Nexus
            </a>
            <a
              href="#services-section"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-indigo-400 py-1"
            >
              Creative Services
            </a>
            <a
              href="#estimator-section"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-indigo-400 py-1"
            >
              Interactive Cost Estimator
            </a>
            <a
              href="#brief-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="text-fuchsia-300 hover:text-fuchsia-400 py-1 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" /> AI Brief Generator
            </a>
            
            <div className="pt-2 flex gap-3 border-t border-white/10">
              <a
                href="#estimator-section"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 rounded-xl text-center border border-white/10 bg-white/5 text-[10px] text-slate-300"
              >
                Cost Calculator
              </a>
              <a
                href="#brief-builder"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 rounded-xl text-center bg-white font-sans text-[11px] font-bold text-black"
              >
                Launch Brief Builder
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        
        {/* Section 1: Hero & Interactive introduction */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="nexus-canvas-section">
          
          <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-indigo-400" />
              <span>AI Video Creator & Content Strategist</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tighter leading-none font-sans">
              Stories that<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-fuchsia-400 to-cyan-300">
                Move Worlds.
              </span>
            </h1>

            <p className="text-sm text-slate-400 leading-relaxed font-sans max-w-lg font-light">
              I create cinematic AI-powered video content — from history documentaries to short-form social reels — that builds audiences and drives results.
            </p>

            {/* Quick action grid */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing-section"
                className="py-3.5 px-6 rounded-2xl bg-white text-black font-extrabold hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-white/5 font-sans text-xs flex items-center justify-center gap-2"
              >
                Hire Me <ArrowRight className="w-3.5 h-3.5 text-black" />
              </a>
              <a
                href="#services-section"
                className="py-3.5 px-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-200 transition-all font-mono text-xs uppercase text-center flex items-center justify-center gap-2"
              >
                See What I Do
              </a>
            </div>

            <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* Core Interactive 3D WebGL Rig Canvas on the right */}
          <div className="lg:col-span-12 xl:col-span-7 w-full">
            <NexusCanvas config={nexusConfig} onConfigChange={handleConfigChange} />
          </div>

        </section>

        {/* Section: About Me */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8 scroll-mt-24" id="about-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Story & Bio */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-widest block bg-indigo-500/10 border border-indigo-500/20 w-fit px-2.5 py-1 rounded-xl">
                👤 About Me
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter leading-tight font-sans">
                AI-Powered Storyteller.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-fuchsia-400 to-cyan-300">
                  Results-Driven Creator.
                </span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
                I'm Leksmedia — a faceless YouTube producer and AI video creator specializing in history documentaries, geopolitical analysis, and high-converting short-form content for Instagram, TikTok, Facebook, and YouTube.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
                I combine deep research, cinematic scripting, and cutting-edge AI tools (Veo 3, Sora, HeyGen) to build channels and content pipelines that grow exponentially. Every frame is engineered to hold attention.
              </p>
            </div>

            {/* Right Column: Key Statistics Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: '50+', label: 'Videos Produced', desc: 'Sovereign history & explainer films.' },
                { value: '8K+', label: 'Words Per Script', desc: 'No filler, highly research-backed.' },
                { value: '5+', label: 'Platforms Served', desc: 'YouTube, TikTok, GI, FB & others.' },
                { value: '100%', label: 'AI Pipeline', desc: 'Sora, Veo 3, and HeyGen optimization.' },
              ].map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-md relative overflow-hidden group">
                  <span className="absolute right-3 top-3 text-[10px] font-mono text-slate-700 font-bold uppercase tracking-widest">0{i+1}</span>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 font-sans tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-1.5 font-sans">
                    {stat.label}
                  </div>
                  <div className="hidden sm:block text-[10px] text-slate-400 font-light mt-1 font-sans">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 2: Portfolio Details by services requested */}
        <section className="space-y-8 pt-8" id="services-section">
          
          <div className="text-center space-y-2.5 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs text-fuchsia-300 font-mono font-medium animate-pulse">
              <Layers className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>What I Do</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter font-sans uppercase">
              Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans font-light">
              Every deliverable is built for performance — crafted to hold attention, grow channels, and convert viewers into followers and clients.
            </p>
          </div>

          {/* Interactive Navigation service tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/5 pb-3 max-w-2xl mx-auto">
            {[
              { id: 'short_form', label: 'Short-Form Content' },
              { id: 'full_production', label: 'Full Video Production' },
              { id: 'script_writing', label: 'Script Writing' },
              { id: 'ai_avatar', label: 'AI Avatar Videos' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-xs py-2 px-4 rounded-xl font-mono transition-all border ${
                  activeTab === tab.id
                    ? 'bg-white/10 border-white/20 text-white font-bold shadow-lg shadow-white/5'
                    : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/[0.08] hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Selected Service Core Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-2xl shadow-2xl items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-widest block bg-indigo-500/20 border border-indigo-500/30 w-fit px-2.5 py-1 rounded-xl">
                {activeServiceData.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">
                {activeServiceData.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans font-light">
                {activeServiceData.long}
              </p>

              {/* Specific features grid inside service selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeServiceData.deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-normal font-sans font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metric & Demonstration panel on the tab */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 backdrop-blur-md">
              <div className="border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-wider block">Estimated Performance Stat</span>
                <span className="text-xs text-slate-400 font-mono mt-0.5 block font-light">{activeServiceData.short}</span>
              </div>

              <div className="space-y-3.5 font-sans">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs text-slate-400 font-light">Target Benchmark:</span>
                    <span className="text-xs font-mono font-bold text-indigo-300">{activeServiceData.metrics.ctr || activeServiceData.metrics.retention || activeServiceData.metrics.scaling}</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                    <div className="bg-indigo-400 h-full rounded-full w-4/5 animate-pulse" />
                  </div>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-light font-sans">Production Turnaround:</span>
                  <span className="text-slate-200 font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" /> {activeServiceData.metrics.turnaround}
                  </span>
                </div>

                <div className="flex justify-between text-xs border-t border-white/5 pt-3">
                  <span className="text-slate-400 font-light">Recommended For:</span>
                  <span className="text-indigo-350 font-medium">{activeServiceData.metrics.idealFor}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#estimator-section"
                  className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl text-xs font-mono tracking-wider border border-white/10 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Calculator className="w-4 h-4 text-indigo-400 animate-bounce" /> Simulate Core Price
                </a>
              </div>
            </div>

          </div>

        </section>

        {/* Section: How It Works - The Pipeline */}
        <section className="space-y-8 pt-8 scroll-mt-24 font-sans" id="pipeline-section">
          <div className="text-center space-y-2.5 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs text-fuchsia-300 font-mono font-medium">
              <span>01 - 04 Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
              How It Works: The Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              A clean 4-step production process — from research to final deliverable — optimized for speed and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Research',
                desc: 'Deep historical or topic research. Sources verified. Narrative arc planned.',
                glow: 'group-hover:text-indigo-400'
              },
              {
                step: '02',
                title: 'Script',
                desc: '8,000+ word narration script. Clean prose, no filler. Hook-engineered for retention.',
                glow: 'group-hover:text-fuchsia-400'
              },
              {
                step: '03',
                title: 'Visuals',
                desc: 'Animation JSON plans, AI video prompts, thumbnail creation, and motion direction.',
                glow: 'group-hover:text-cyan-400'
              },
              {
                step: '04',
                title: 'Delivery',
                desc: 'Final files + YouTube metadata package. Ready to upload and publish.',
                glow: 'group-hover:text-emerald-400'
              }
            ].map((p, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/5 hover:border-white/10 rounded-3xl p-6 relative overflow-hidden backdrop-blur-md transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-4xl font-mono font-black text-white/10 transition-colors ${p.glow}`}>
                    {p.step}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-indigo-400 transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2 font-sans tracking-tight">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-405 leading-relaxed font-light font-sans">
                  {p.desc}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* Section: Flat Pricing Packages */}
        <section className="pt-8 scroll-mt-24 font-sans" id="pricing-section">
          <div className="text-center space-y-2.5 max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 font-mono font-medium">
              <span>Transparent Rates</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
              Let's Work Together
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Pick the package that fits your project. Every tier includes on-time delivery and unlimited revisions on the first draft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* Starter Plan card */}
            <div className="bg-white/5 border border-white/5 hover:border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] relative">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-wider block">Starter</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">$150</span>
                  <span className="text-xs text-slate-400 font-light font-mono">per video</span>
                </div>
                <div className="h-px bg-white/5 w-full" />
                <ul className="space-y-3 text-xs text-slate-300 font-light">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Long-form narration script (8,000+ words)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>YouTube title + description + tags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>1 thumbnail concept</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>2 revision rounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>7-day delivery</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6">
                <a
                  href="#contact-section"
                  className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-center font-bold rounded-xl text-xs block transition-all"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Pro Plan card - Highlighted Feature */}
            <div className="bg-gradient-to-b from-indigo-950/20 to-white/5 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] relative shadow-[0_0_35px_rgba(99,102,241,0.08)]">
              <div className="absolute top-4 right-4 bg-indigo-500 text-black text-[9px] font-mono uppercase font-black px-2.5 py-0.5 rounded-full">
                Most Popular
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-fuchsia-300 font-bold uppercase tracking-wider block">Pro</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">$350</span>
                  <span className="text-xs text-indigo-300 font-medium font-mono">per video</span>
                </div>
                <div className="h-px bg-white/10 w-full" />
                <ul className="space-y-3 text-xs text-slate-205">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-fuchsia-300 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-white">Full script + animation JSON plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-fuchsia-300 flex-shrink-0 mt-0.5" />
                    <span>Veo 3 / Sora AI video prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-fuchsia-300 flex-shrink-0 mt-0.5" />
                    <span>Thumbnail + SEO package</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-fuchsia-300 flex-shrink-0 mt-0.5" />
                    <span>Short-form cut (Shorts / Reels)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-fuchsia-300 flex-shrink-0 mt-0.5" />
                    <span>Unlimited revisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-fuchsia-300 flex-shrink-0 mt-0.5" />
                    <span>5-day delivery</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6">
                <a
                  href="#contact-section"
                  className="w-full py-2.5 px-4 bg-white text-black text-center font-extrabold rounded-xl text-xs block transition-transform hover:scale-[1.03]"
                >
                  Hire Me Now
                </a>
              </div>
            </div>

            {/* Agency Retainer Plan card */}
            <div className="bg-white/5 border border-white/5 hover:border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] relative">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider block">Agency</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">$900</span>
                  <span className="text-xs text-slate-400 font-light font-mono">/ month</span>
                </div>
                <div className="h-px bg-white/5 w-full" />
                <ul className="space-y-3 text-xs text-slate-300 font-light">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>4 full videos per month Retainer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>AI avatar video production inclusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Multi-platform short-form content scaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Channel strategy consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>White-label delivery & custom templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Priority standard turnaround</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6">
                <a
                  href="#contact-section"
                  className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-center font-bold rounded-xl text-xs block transition-all"
                >
                  Let's Talk
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: Cost Estimator Card */}
        <section className="pt-8" id="estimator-section">
          
          <div className="text-center space-y-2.5 max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 font-mono font-medium">
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              <span>Custom Quote Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter font-sans">
              Design & Scale Your Production Ticket
            </h2>
            <p className="text-xs text-slate-400 leading-normal font-sans font-light">
              Choose your parameters, fine-tune video count, adjust animation layouts, and instantly link the final custom estimate code to the AI Storyboard briefing generator.
            </p>
          </div>

          <ServiceEstimator onQuoteSelect={handleApplyEstimateToBrief} />

        </section>

        {/* Section 4: Live AI Creative Partner (Storyboarding & Hook Maker) */}
        <section className="pt-8 scroll-mt-24" id="brief-builder-anchor">
          
          <div className="text-center space-y-2.5 max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs text-fuchsia-300 font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 animate-spin" />
              <span>Interactive Prompt Studio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter font-sans">
              The AI Creative Director Playground
            </h2>
            <p className="text-xs text-slate-400 leading-normal font-sans font-light">
              Ready to test ideas? Use our direct full-stack link to Gemini 3.5 Flash. Select niche variables, click compile, and inspect a custom high-ctr storyboard output layout in raw real-time.
            </p>
          </div>

          <BriefGenerator
            appliedQuoteSummary={appliedQuoteSummary}
            appliedQuotePrice={appliedQuotePrice}
          />

        </section>

        {/* Section 5: Brand Ideals & FAQ Accordions */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8">
          
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono font-medium">
              <Award className="w-3.5 h-3.5 text-indigo-400 animate-bounce" />
              <span>Creative Ideals & Ethics</span>
            </div>
            <h3 className="text-2xl font-black text-white tracking-tighter font-sans">
              Why Leksmedia Architectures Perform Superior
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed font-sans font-light">
              Traditional studios are slow, requiring endless pre-recording loops and casting calls. AI engines on their own are messy, lacking structure and human pacing.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed font-sans font-light">
              Leksmedia sits perfectly in the middle: combining high-end cinematic AI synthesis pipelines with human pacing metrics to construct visual narratives that retain.
            </p>

            {/* Creative grid benefits cards - Honest labels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-300 font-bold text-xs">01</div>
                <h5 className="font-bold text-sm text-white font-sans">Ethical Safe Handling</h5>
                <p className="text-[11px] text-slate-400 font-sans mt-2 font-light leading-relaxed">Cloned assets are sandboxed in private pipelines.</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-fuchsia-500/20 flex items-center justify-center mb-4 text-fuchsia-300 font-bold text-xs">02</div>
                <h5 className="font-bold text-sm text-white font-sans">Cinematic Grading</h5>
                <p className="text-[11px] text-slate-400 font-sans mt-2 font-light leading-relaxed">Custom LUTs and animation plans applied individually.</p>
              </div>
            </div>
          </div>

          {/* Collapsible FAQ Block */}
          <div className="lg:col-span-7 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-350 font-mono mb-4 block">
              Frequently Answered Questions
            </h4>
            
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-350 backdrop-blur-md"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-sans focus:outline-none cursor-pointer"
                >
                  <span className="font-semibold text-xs sm:text-sm text-slate-200">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-indigo-400 flex-shrink-0 transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 text-xs text-slate-400 border-t border-white/5 pt-3 leading-relaxed font-sans font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </section>

        {/* Section: Contact & Submission Request */}
        <section className="bg-gradient-to-tr from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8 scroll-mt-24 font-sans max-w-4xl mx-auto" id="contact-section">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-[10px] font-mono text-fuchsia-300 font-bold uppercase tracking-widest block bg-fuchsia-500/10 border border-fuchsia-500/20 w-fit px-2.5 py-1 rounded-xl mx-auto animate-pulse">
              📬 Secure Pitch Portal
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
              Let's Coordinate Your Channel Scope
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Send over your creative details, desired stream, or retention goals below, and I'll get back to you personally within 24 hours.
            </p>
          </div>

          <ContactFormWrapper />

        </section>

      </main>

      {/* Sleek, High-Contrast Footer Panel - Humble & Structured */}
      <footer className="bg-[#020205]/80 border-t border-white/10 mt-24 py-12 text-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/5 pb-10 mb-8">
            
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-fuchsia-600 flex items-center justify-center font-extrabold text-sm text-white shadow-[0_0_15px_rgba(129,140,248,0.2)]">
                  LM
                </div>
                <div>
                  <span className="font-bold text-white">Leksmedia</span>
                  <span className="text-[9px] font-mono text-indigo-400 block -mt-1 uppercase tracking-widest font-semibold">Digital Platform</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm font-light">
                Next-generation synthetic production and pre-visual storyboard frameworks. Bringing cinematic velocity directly to creators and high-growth social feeds.
              </p>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
              <div>
                <span className="text-[10px] text-slate-300 uppercase font-bold tracking-wider block mb-3 font-mono">Target Streams</span>
                <ul className="space-y-2 text-slate-500 font-light">
                  <li>Scripts & Covers</li>
                  <li>Full Video Prod</li>
                  <li>Short-Form Social</li>
                  <li>AI Synthetic Avatars</li>
                </ul>
              </div>

              <div>
                <span className="text-[10px] text-slate-300 uppercase font-bold tracking-wider block mb-3 font-mono">Dynamic Assets</span>
                <ul className="space-y-2 text-slate-500 font-light">
                  <li>3D Canvas Scene</li>
                  <li>Cost Estimator</li>
                  <li>Gemini AI Briefing</li>
                  <li>Custom AI Prompts</li>
                </ul>
              </div>

              <div>
                <span className="text-[10px] text-slate-300 uppercase font-bold tracking-wider block mb-3 font-mono">Representative Links</span>
                <ul className="space-y-2 text-slate-500 font-light">
                  <li className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors cursor-pointer">
                    <Instagram className="w-3.5 h-3.5" /> Instagram
                  </li>
                  <li className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors cursor-pointer">
                    <Youtube className="w-3.5 h-3.5" /> YouTube Channel
                  </li>
                  <li className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors cursor-pointer">
                    <ExternalLink className="w-3.5 h-3.5" /> TikTok Feed
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
            <p className="font-sans font-light">
              &copy; {new Date().getFullYear()} Leksmedia. Custom interactive experiences compiled in Sandboxed cloud.
            </p>
            <p className="flex items-center gap-1 select-none leading-none">
              Crafted with <Heart className="w-3.5 h-3.5 text-fuchsia-500 fill-fuchsia-500" /> by Leksmedia Creative Matrix.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
