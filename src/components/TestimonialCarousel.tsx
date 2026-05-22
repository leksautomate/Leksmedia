import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  TrendingUp,
  Cpu,
  Tv,
  Users,
  Film,
  Sparkles,
  Zap
} from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  channelName: string;
  metrics: string;
  metricLabel: string;
  quote: string;
  iconType: 'history' | 'shorts' | 'avatar' | 'geography' | 'agency';
  colorTheme: 'indigo' | 'fuchsia' | 'cyan' | 'emerald' | 'gold';
  stars: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Sterling",
    role: "Founder",
    channelName: "Ages of History (YouTube)",
    metrics: "+45k subs / 1.4M views",
    metricLabel: "Achieved in first 2 weeks",
    quote: "Leksmedia’s 8,000-word scripts are academic-grade but hold attention like a Hollywood blockbuster. The animation blueprint mapped perfectly with our Veo 3 engine. Our deep-history channel's RPM has gone through the roof!",
    iconType: "history",
    colorTheme: "indigo",
    stars: 5
  },
  {
    id: 2,
    name: "Chloe Mendoza",
    role: "Head of Growth",
    channelName: "FinanceFlow Reels (TikTok & IG)",
    metrics: "12M+ views overall",
    metricLabel: "With 72% average retention",
    quote: "The hook engineering they did for our short-form content is literally like clockwork. They made the first 3 seconds of our reels completely un-scrollable. Our viewers stay glued, and our follower count has exploded!",
    iconType: "shorts",
    colorTheme: "fuchsia",
    stars: 5
  },
  {
    id: 3,
    name: "Dr. Aris Cole",
    role: "CEO",
    channelName: "Cognitive AI Cloud",
    metrics: "90% Cost Reduction",
    metricLabel: "Rendered in 12 global languages",
    quote: "We needed high-end synthetic presenter videos for our global enterprise audience. Leksmedia constructed customized HeyGen cloned presenters and perfect cloned lip-sync voiceovers that made us look elite across 4 continents.",
    iconType: "avatar",
    colorTheme: "cyan",
    stars: 5
  },
  {
    id: 4,
    name: "Jeremy Vance",
    role: "Director",
    channelName: "The Atlas Chronicles",
    metrics: "+18.5% retention gain",
    metricLabel: "Audience session duration grew",
    quote: "Finding a writer who understands narrative pace for documentaries is rare. Leksmedia didn't just write a script; they laid out a cohesive storyboard blueprint with exact prompt details for Gemini/Midjourney vectors.",
    iconType: "geography",
    colorTheme: "emerald",
    stars: 5
  },
  {
    id: 5,
    name: "Sarah K.",
    role: "Creative Director",
    channelName: "Apex Scale Agency",
    metrics: "4x scale increase",
    metricLabel: "Automated weekly pipeline retainer",
    quote: "Our agency relies on Leksmedia's retainer. They handle our entire pipeline of short-form formats and social reels. The AI-human hybrid writing captures our brand voice flawlessly, letting us scale without stress.",
    iconType: "agency",
    colorTheme: "gold",
    stars: 5
  }
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const selectTestimonial = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsAutoPlaying(false); // Pause auto play when user manually selects
  };

  const current = TESTIMONIALS[activeIndex];

  const themeColors = {
    indigo: {
      accent: 'text-indigo-400',
      bgGlow: 'bg-indigo-500/10 border-indigo-500/30',
      badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      glow: 'shadow-[0_0_50px_rgba(99,102,241,0.15)]',
      gradient: 'from-indigo-400 via-indigo-200 to-white'
    },
    fuchsia: {
      accent: 'text-fuchsia-400',
      bgGlow: 'bg-fuchsia-500/10 border-fuchsia-500/30',
      badge: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
      glow: 'shadow-[0_0_50px_rgba(217,70,239,0.15)]',
      gradient: 'from-fuchsia-400 via-fuchsia-200 to-white'
    },
    cyan: {
      accent: 'text-cyan-400',
      bgGlow: 'bg-cyan-500/10 border-cyan-500/30',
      badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      glow: 'shadow-[0_0_50px_rgba(6,182,212,0.15)]',
      gradient: 'from-cyan-400 via-cyan-200 to-white'
    },
    emerald: {
      accent: 'text-emerald-400',
      bgGlow: 'bg-emerald-500/10 border-emerald-500/30',
      badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      glow: 'shadow-[0_0_50px_rgba(16,185,129,0.15)]',
      gradient: 'from-emerald-400 via-emerald-200 to-white'
    },
    gold: {
      accent: 'text-amber-400',
      bgGlow: 'bg-amber-500/10 border-amber-500/30',
      badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      glow: 'shadow-[0_0_50px_rgba(245,158,11,0.15)]',
      gradient: 'from-amber-400 via-amber-200 to-white'
    }
  };

  const activeColor = themeColors[current.colorTheme];

  // Visual icons for types
  const renderIcon = (type: string, css: string) => {
    switch (type) {
      case 'history':
        return <Film className={`${css} w-5 h-5`} />;
      case 'shorts':
        return <Zap className={`${css} w-5 h-5`} />;
      case 'avatar':
        return <Cpu className={`${css} w-5 h-5`} />;
      case 'geography':
        return <Tv className={`${css} w-5 h-5`} />;
      case 'agency':
      default:
        return <Users className={`${css} w-5 h-5`} />;
    }
  };

  // Variants for carousel entry and exit animations
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  return (
    <div
      className="w-full space-y-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      id="testimonials-carousel"
    >
      
      {/* Testimonial Active Display Card */}
      <div className="relative min-h-[440px] sm:min-h-[380px] lg:min-h-[340px] bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between">
        
        {/* Underlay Ambient Glow */}
        <div className={`absolute -right-24 -bottom-24 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-25 mix-blend-screen transition-all duration-700 ${activeColor.glow} ${current.colorTheme === 'indigo' ? 'bg-indigo-500' : current.colorTheme === 'fuchsia' ? 'bg-fuchsia-500' : current.colorTheme === 'cyan' ? 'bg-cyan-500' : current.colorTheme === 'emerald' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
        
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex flex-col justify-between gap-6 relative z-10"
          >
            {/* Top Row: Badge, Rating and Stars */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${activeColor.bgGlow}`}>
                  {renderIcon(current.iconType, activeColor.accent)}
                </div>
                <div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${activeColor.accent}`}>
                    Success Story {current.id} of 5
                  </span>
                  <h4 className="text-sm font-extrabold text-white tracking-tight">
                    {current.channelName}
                  </h4>
                </div>
              </div>

              {/* Stars Row */}
              <div className="flex items-center gap-1">
                {[...Array(current.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>

            {/* Mid Row: Quote block */}
            <div className="relative py-2">
              <Quote className="absolute -top-4 -left-3 w-10 h-10 text-white/5 pointer-events-none rotate-180" />
              <p className="text-sm sm:text-base text-slate-105 leading-relaxed font-sans font-light italic pl-4 sm:pl-6 border-l-2 border-white/10 relative z-10">
                "{current.quote}"
              </p>
            </div>

            {/* Bottom Row: Outcome stats and Client Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end border-t border-white/5 pt-5 mt-2">
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase mb-1">Results Verified</span>
                <span className="text-sm sm:text-base font-bold text-white font-sans flex items-center gap-1.5 ">
                  <TrendingUp className={`w-4 h-4 ${activeColor.accent}`} />
                  {current.metrics}
                </span>
                <span className="text-[10px] text-slate-500 font-sans block mt-0.5 font-light">
                  {current.metricLabel}
                </span>
              </div>

              <div className="sm:text-right">
                <span className="text-[10px] font-mono text-slate-400 block uppercase mb-1">Client Contact</span>
                <span className="text-sm font-bold text-white font-sans block">
                  {current.name}
                </span>
                <span className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${activeColor.accent}`}>
                  {current.role}
                </span>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Floating nav indicators left & right arrows inside display card */}
        <div className="absolute right-6 top-6 sm:top-1/2 sm:-translate-y-1/2 flex sm:flex-col gap-2 z-20">
          <button
            onClick={handlePrev}
            className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
            title="Previous Success Story"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
            title="Next Success Story"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Grid selector representing all 5 client indicators to skip directly to each */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {TESTIMONIALS.map((t, idx) => {
          const isActive = idx === activeIndex;
          const configTheme = themeColors[t.colorTheme];
          return (
            <button
              key={t.id}
              onClick={() => selectTestimonial(idx)}
              className={`text-left p-3.5 rounded-2xl border transition-all duration-300 relative overflow-hidden backdrop-blur-md cursor-pointer ${
                isActive
                  ? 'bg-white/10 border-white/20 shadow-lg scale-[1.02]'
                  : 'bg-white/5 border-white/5 hover:border-white/10 opacity-70 hover:opacity-100 hover:translate-y-[-2px]'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-indigo-400 animate-ping' : 'bg-slate-600'}`} />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-tight block truncate font-light">
                  {t.name.split(' ')[0]}
                </span>
              </div>
              <div className="text-[10px] font-sans font-bold text-slate-200 line-clamp-1">
                {t.channelName.split('(')[0].trim()}
              </div>
              <div className={`text-[10px] font-sans font-light mt-0.5 block truncate font-medium ${isActive ? configTheme.accent : 'text-slate-500'}`}>
                {t.metrics.split('/')[0].trim()}
              </div>
              
              {/* Mini accent bar on bottom */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500" />
              )}
            </button>
          );
        })}
      </div>

    </div>
  );
}
