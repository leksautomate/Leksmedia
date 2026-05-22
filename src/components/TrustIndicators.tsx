import React from 'react';
import { motion } from 'motion/react';
import { Youtube, Eye, Award, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';

interface TrustIndicator {
  id: number;
  label: string;
  metric: string;
  desc: string;
  icon: React.ReactNode;
  bgGlow: string;
  accentClass: string;
}

export default function TrustIndicators() {
  const indicators: TrustIndicator[] = [
    {
      id: 1,
      metric: "50+ Channels",
      label: "Channels Grown",
      desc: "Authentic audience scaling & niche domination",
      icon: <Youtube className="w-5 h-5 text-indigo-400" />,
      bgGlow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] bg-indigo-500/10 border-indigo-500/20",
      accentClass: "text-indigo-400"
    },
    {
      id: 2,
      metric: "1M+ Weekly",
      label: "Impressions Generated",
      desc: "Viral hook structures that command user retention",
      icon: <Eye className="w-5 h-5 text-fuchsia-400" />,
      bgGlow: "group-hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] bg-fuchsia-500/10 border-fuchsia-500/20",
      accentClass: "text-fuchsia-400"
    },
    {
      id: 3,
      metric: "100% Absolute",
      label: "Guaranteed Satisfaction",
      desc: "Cinematic grade standards with infinite revisions",
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      bgGlow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] bg-cyan-500/10 border-cyan-500/20",
      accentClass: "text-cyan-400"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="w-full" id="trust-indicators-banner">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {indicators.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="group relative bg-[#040409]/60 border border-white/5 hover:border-white/10 rounded-2xl p-5 backdrop-blur-3xl shadow-xl flex items-start gap-4 transition-all duration-300 hover:translate-y-[-2px]"
          >
            {/* Ambient Background Glow */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none border border-white/15`} />

            {/* Left side: Icon Container */}
            <div className={`p-3 rounded-xl border flex items-center justify-center transition-all duration-300 ${item.bgGlow}`}>
              {item.icon}
            </div>

            {/* Right side: Labels */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-base sm:text-lg font-black text-white font-sans tracking-tight">
                  {item.metric}
                </span>
                <span className={`text-[9px] font-mono uppercase tracking-widest font-semibold ${item.accentClass}`}>
                  {item.label}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-normal font-sans font-light">
                {item.desc}
              </p>
            </div>

            {/* Subtle light bar ornament */}
            <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
