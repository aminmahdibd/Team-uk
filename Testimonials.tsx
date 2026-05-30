import React from "react";
import { Users2, Award, ShieldCheck, Heart, Sparkles, Target, Zap, TrendingUp, CheckCircle } from "lucide-react";

export default function About() {
  const categories = [
    {
      title: "Content Creators",
      description: "Scale from 0 views to thousands of active, concurrent subscribers. We manage complete catalog YouTube SEO optimizations, high Click-Through-Rate thumb designs, and organic watch-time promotion pathways.",
      icon: "Youtube"
    },
    {
      title: "eCommerce & Brands",
      description: "Generate consistent commercial conversion pipelines using technical A to Z website SEO setups, Google Ads search campaigns, and high-impact Meta social media marketing structures.",
      icon: "Business"
    },
    {
      title: "Podcasts & Audio",
      description: "Skyrocket listener streams organically. Transform standard audio recordings into viral TikTok/Reels micro-highlights that feed listeners directly into Spotify, SoundCloud and Apple Podcasts.",
      icon: "Mic"
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#0a0407] relative overflow-hidden border-t border-[#1a0508]"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 rounded-full bg-red-950/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-60 h-60 bg-zinc-950/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Showcase Block (Left Layer) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-red-600/5 rounded-2xl blur-xl" />
            
            <div className="relative bg-[#050103] border border-[#2b080f] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-950/50 flex items-center justify-center border border-red-500/20">
                  <Target className="text-red-500" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-medium text-white text-base">Organically Driven Focus</h4>
                  <p className="text-xs text-zinc-500 font-mono">Guaranteed Bot-Free Distribution</p>
                </div>
              </div>

              <blockquote className="text-sm font-sans italic text-zinc-300 leading-relaxed border-l-2 border-red-600 pl-4 py-1">
                "Our fundamental principle with TEAMUKYT is straightforward: algorithms do not place money inside your pockets, actual engaged human audiences do."
              </blockquote>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-950 flex items-center justify-center border border-red-500/20">
                    <CheckCircle className="text-red-500" size={12} />
                  </div>
                  <span className="text-xs text-zinc-300 font-sans">100% Secure Partner Policy compliance</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-950 flex items-center justify-center border border-red-500/20">
                    <CheckCircle className="text-red-500" size={12} />
                  </div>
                  <span className="text-xs text-zinc-300 font-sans">Multi-niche audience targeting network</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-950 flex items-center justify-center border border-red-500/20">
                    <CheckCircle className="text-red-500" size={12} />
                  </div>
                  <span className="text-xs text-zinc-300 font-sans">A-Z technical optimizations across platforms</span>
                </div>
              </div>

              {/* Mini achievement sticker */}
              <div className="bg-gradient-to-r from-red-950/40 to-[#120508] border border-red-900/30 rounded-xl p-4 flex items-center gap-4">
                <div className="font-display font-bold text-3xl text-red-500">2018</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider leading-relaxed">
                  Established brand building advanced organic conversion structures & content syndication channels.
                </div>
              </div>

            </div>
          </div>

          {/* Copywriting Pitch Text (Right Layer) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block">
                // WHO WE ARE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Empowering Creators & Brands with <span className="text-red-600">Calculated Growth</span>
              </h2>
            </div>

            <p className="text-zinc-400 font-sans font-light leading-relaxed text-base sm:text-lg">
              At **TEAMUKYT**, we have demolished the barrier of poor visibility. We understand that whether you are an independent YouTube creator striving for the 4,000-hour milestone, an eCommerce brand needing qualified sales leads, or a musician hungry for Spotify traction — generic marketing tricks simply don't generate revenue.
            </p>

            <p className="text-zinc-500 font-sans font-light leading-relaxed text-sm">
              We engineer deep technical solutions. Our team couples custom-coded web architectures with sophisticated platform SEO, custom click-driver thumbnail arts, and comprehensive Paid Ad management to ensure your brand gains the immediate visual traction it deserves.
            </p>

            {/* Structured Split columns based on audiences */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {categories.map((cat, index) => (
                <div
                  id={`about-category-card-${index}`}
                  key={index}
                  className="bg-[#0e060a] border border-[#2b080f]/50 p-5 rounded-xl transition-all duration-300 hover:border-red-600/30 group"
                >
                  <h5 className="font-display font-semibold text-white text-base mb-2 group-hover:text-red-500 transition-colors">
                    {cat.title}
                  </h5>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
