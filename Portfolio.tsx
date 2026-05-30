import React, { useEffect, useState } from "react";
import { ArrowRight, Play, Award, Zap, CheckCircle2, TrendingUp, Sparkles, Youtube, Globe, Eye } from "lucide-react";
import { motion } from "motion/react";
import { STATS_DATA } from "../types";

// Dynamic Counter Hook/Component for elite metrics animation
interface CounterProps {
  value: number;
  suffix: string;
}

function Counter({ value, suffix }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    // Fast timer to count up smoothly
    const duration = 2000;
    const incrementTime = Math.max(Math.floor(duration / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
      {count}
      <span className="text-red-600">{suffix}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#050003]"
    >
      {/* Dynamic Animated Ambient Background Red Mesh */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-red-950/15 blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] rounded-full bg-zinc-900/40 blur-[90px] pointer-events-none"></div>

      {/* Cyberpunk Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#11050a_1px,transparent_1px),linear-gradient(to_bottom,#11050a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Explanatory Pitch (Left 7 Columns) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tag badge with live notification effect */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b0509] border border-[#ff001c]/20 text-xs font-mono text-red-400 uppercase tracking-widest mx-auto lg:mx-0 box-glow-red select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="flex items-center gap-1 font-semibold text-[10px] sm:text-xs">
                <Sparkles size={12} className="text-red-500" />
                Next-Gen Distribution Engages Organic Traction
              </span>
            </div>

            {/* Core Big Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[70px] font-extrabold leading-tight tracking-tight text-white">
              Grow Your Brand <br className="hidden sm:inline" />
              With <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-white text-glow-red">TEAMUKYT</span>
            </h1>

            {/* Copywritten Subheadline */}
            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-zinc-400 font-sans font-light leading-relaxed">
              We specialize in aggressive YouTube channel growth, systematic search engine optimization (SEO), monetization unlock procedures, high-conversion ad funnels, and stunning thumbnail architectures. Dominate algorithms and turn high-intent organic traffic into recurring clients.
            </p>

            {/* Premium Interactive Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                id="hero-get-started"
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white rounded-lg font-sans font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(220,38,38,0.35)] hover:shadow-[0_0_35px_rgba(255,50,50,0.5)] transform hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group border border-red-500"
              >
                <span>Unlock Advanced Growth</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>

              <a
                id="hero-contact-us"
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white hover:text-red-500 rounded-lg font-sans font-semibold text-sm tracking-wide border border-zinc-800 hover:border-red-600/50 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Free Channel Audit</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 group-hover:bg-white transition-colors"></span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-y-3 gap-x-6 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-red-500" />
                AdSense Compliant Tactics
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-red-500" />
                Zero Bot / Pure Human Traffic
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-red-500" />
                24/7 Priority Support
              </span>
            </div>

          </div>

          {/* Large High-Fidelity UI Interface Mockup (Right 5 Columns) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Behind layout glow */}
            <div className="absolute inset-0 bg-red-600/5 rounded-2xl blur-2xl filter pointer-events-none"></div>

            {/* Interactive Dashboard representation */}
            <div className="w-full max-w-[430px] bg-[#0c0406] border border-[#2b080f] rounded-2xl p-5 sm:p-6 shadow-[0_15px_50px_rgba(0,0,0,0.9)] box-glow-red relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
              
              {/* Fake Widget Header */}
              <div className="flex items-center justify-between border-b border-[#21090d] pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></div>
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                    TEAMUKYT Engine v4.2
                  </span>
                </div>
                <div className="px-2 py-0.5 bg-red-950/45 border border-red-900/40 rounded text-[9px] font-mono text-red-500 font-bold uppercase">
                  Live Stream Analytics
                </div>
              </div>

              {/* Statistics Chart Preview */}
              <div className="space-y-4">
                <div className="bg-[#120609] border border-[#2e0911]/30 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-xs text-zinc-400 font-sans block">Client Audience Growth</span>
                      <span className="font-display font-bold text-2xl text-white">412,850</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-green-500 bg-green-950/40 px-1.5 py-0.5 rounded-md font-semibold">
                      <TrendingUp size={10} />
                      +340% YoY
                    </div>
                  </div>
                  
                  {/* Styled Mock Metric Chart Path */}
                  <div className="h-16 flex items-end gap-1.5 pt-2">
                    {[30, 45, 38, 55, 62, 48, 70, 85, 98, 110, 100, 125].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-red-950 via-red-700 to-red-600 rounded-t-sm transition-all duration-500 group-hover:bg-red-500" style={{ height: `${height * 0.45}%` }}></div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#120609] border border-[#2e0911]/30 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] mb-1 font-mono">
                      <Youtube size={12} className="text-red-600" />
                      Retention Rate
                    </div>
                    <span className="font-display font-bold text-lg text-white">82.1%</span>
                    <div className="w-full bg-zinc-900 h-1 rounded-full mt-2 overflow-hidden">
                      <div className="bg-red-600 h-full w-[82%]" />
                    </div>
                  </div>

                  <div className="bg-[#120609] border border-[#2e0911]/30 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] mb-1 font-mono">
                      <Globe size={11} className="text-red-500" />
                      SEO Rank Top 3
                    </div>
                    <span className="font-display font-bold text-lg text-white">94.7%</span>
                    <div className="w-full bg-zinc-900 h-1 rounded-full mt-2 overflow-hidden">
                      <div className="bg-red-500 h-full w-[94%]" />
                    </div>
                  </div>
                </div>

                {/* Live Audit Process Tick */}
                <div className="bg-[#120609]/70 border border-[#23090e] rounded-xl p-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="p-1 px-1.5 bg-red-950 text-red-500 rounded font-mono font-bold text-[9px]">
                      YPP
                    </div>
                    <span className="text-zinc-300 font-sans">Monetization Checklist Verified</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                </div>
              </div>

              {/* Interactive Hover Border Light */}
              <div className="absolute inset-0 border border-transparent group-hover:border-red-600/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>

        </div>

        {/* Milestone Statistics Panel Bar */}
        <div className="mt-20 sm:mt-24 pt-8 border-t border-[#1f060a]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            {STATS_DATA.map((stat, i) => (
              <div id={`stat-node-${i}`} key={i} className="space-y-1">
                <div className="flex justify-center sm:justify-start">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 font-mono tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
