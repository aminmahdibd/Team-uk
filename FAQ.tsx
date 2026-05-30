import React from "react";
import { Star, Check, Quote, Sparkles } from "lucide-react";
import { TESTIMONIALS_DATA } from "../types";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#050003] relative overflow-hidden ring-1 ring-zinc-950"
    >
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-red-950/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-red-950/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title information */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block">
            // CLIENT SATISFACTION INDEX
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Client <span className="text-red-600">Testimonials</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light">
            Don't trust our words, inspect the experience metrics from creators, businesses, podcasts and brands we have scaled up globally.
          </p>
        </div>

        {/* Testimonials list grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((rev, index) => (
            <div
              id={`testimonial-card-${rev.id}`}
              key={rev.id}
              className="bg-[#0b0406] border border-[#23090e] hover:border-red-600/30 rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-300 group relative flex flex-col justify-between"
            >
              {/* Top gradient glow indicator */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-950 group-hover:via-red-600/30 to-transparent transition-all duration-300" />
              
              {/* Quote Background Emblem */}
              <div className="absolute top-6 right-6 text-zinc-900 group-hover:text-red-950/30 transition-colors pointer-events-none">
                <Quote size={40} className="transform rotate-180" />
              </div>

              <div className="space-y-6">
                {/* Rating star sequence */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < rev.rating ? "fill-red-500 text-red-500" : "text-zinc-700"}
                    />
                  ))}
                  <span className="text-[10px] font-mono text-red-400 ml-2">5.0 SCORE</span>
                </div>

                {/* Review feedback text block */}
                <p className="text-[#dcd6db] font-sans font-light text-sm sm:text-base leading-relaxed relative z-10">
                  "{rev.content}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="pt-6 mt-8 border-t border-[#1a0508] flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-900 ring-1 ring-red-900/40">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-display font-bold text-sm text-white">{rev.name}</h4>
                    {rev.verified && (
                      <span className="p-0.5 bg-red-950 border border-red-900/50 rounded text-red-500" title="Verified Client Authority">
                        <Check size={9} strokeWidth={3} />
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] font-sans text-zinc-500">{rev.role}</p>
                  <p className="text-[10px] font-mono text-zinc-400 mt-0.5">{rev.company}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global score stats indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-6 p-4 px-8 bg-[#0a0407] border border-[#26070a] rounded-full text-xs font-mono text-zinc-400 shadow-xl">
            <span className="flex items-center gap-2">
              <Sparkles size={14} className="text-red-500" />
              Over 120+ Channels Scaled
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 hidden sm:inline" />
            <span className="flex items-center gap-1 text-white">
              ⭐⭐⭐⭐⭐
              <span className="font-bold text-red-500 ml-1">4.9 / 5</span> Client Satisfaction Average
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
