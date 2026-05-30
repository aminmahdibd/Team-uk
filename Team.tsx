import React, { useState, useMemo } from "react";
import { ArrowUpRight, TrendingUp, Search, Eye, ExternalLink, Calendar, CheckSquare } from "lucide-react";
import { PORTFOLIO_DATA, PortfolioItem } from "../types";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { label: "All Masterpieces", value: "All" },
    { label: "SEO Projects", value: "SEO" },
    { label: "YouTube Growth", value: "YouTube Growth" },
    { label: "Thumbnail Design", value: "Thumbnail Design" },
    { label: "Website Projects", value: "Website Projects" },
    { label: "Ads Campaigns", value: "Ads Campaigns" },
    { label: "Social Media", value: "Social Media Marketing" }
  ];

  const filteredPortfolio = useMemo(() => {
    if (selectedCategory === "All") {
      return PORTFOLIO_DATA;
    }
    return PORTFOLIO_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="portfolio"
      className="py-24 bg-[#050003] relative overflow-hidden ring-1 ring-zinc-950"
    >
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-red-950/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-red-950/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Information */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block">
            // OUR CONVERSION LANDSCAPE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Proven Agency <span className="text-red-600">Showcase</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light">
            We don't talk potential; we deliver hard historical outputs. Dive into our live portfolio archives across SEO keyword tracking, subscriber upscaling, and robust web applications.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              id={`portfolio-tab-${cat.value.toLowerCase().replace(" ", "-")}`}
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2.5 rounded-lg text-xs font-sans font-medium transition-all duration-300 ${
                selectedCategory === cat.value
                  ? "bg-red-600 text-white shadow-lg border border-red-500"
                  : "bg-zinc-950 text-zinc-400 border border-zinc-900 hover:border-red-950 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item, index) => (
            <div
              id={`portfolio-item-card-${item.id}`}
              key={item.id}
              className="bg-[#0b0406] border border-[#23090e] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-red-600/30 group relative flex flex-col justify-between"
            >
              {/* Image Preview Block */}
              <div className="relative aspect-video overflow-hidden bg-zinc-950">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                
                {/* Dark glow overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0406] via-transparent to-transparent opacity-90" />
                
                {/* Category tag badge floating */}
                <span className="absolute top-4 left-4 text-[9px] font-mono uppercase bg-red-600 border border-red-500 text-white px-2 py-1 rounded shadow-lg">
                  {item.category}
                </span>

                {/* Performance Metrics Overlay Indicator */}
                <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-red-950/90 to-black/90 border border-red-900/30 rounded-xl p-3 backdrop-blur-sm shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-red-500 font-bold shrink-0 animate-bounce" size={16} />
                    <div className="text-left">
                      <p className="text-[8px] font-mono text-zinc-500 uppercase">Key Achievement</p>
                      <p className="text-[11px] font-sans font-bold text-white tracking-wide">{item.metrics}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Text content block */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Client Profile</span>
                    <span className="text-[10px] font-sans font-semibold text-zinc-300">{item.clientName}</span>
                  </div>
                  
                  <h3 className="font-display font-bold text-base text-zinc-100 group-hover:text-red-500 transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1a0508] mt-4 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase flex items-center gap-1.5">
                    <Calendar size={12} className="text-red-600" /> Continuous Audit
                  </span>
                  
                  <a
                    id={`portfolio-item-cta-${item.id}`}
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-red-500 group-hover:text-white transition-colors"
                  >
                    <span>Check Schema Case</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Audit CTA inside Showcase */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 p-4 bg-[#0d0407] border border-[#29070c] rounded-2xl max-w-xl shadow-xl">
            <div className="p-2 bg-red-950 text-red-500 rounded-lg">
              <CheckSquare size={18} />
            </div>
            <p className="text-xs text-zinc-400 font-sans text-left leading-relaxed">
              Want to see actual live channel URLs and ranking screenshots in real time? <a href="#contact" className="text-red-500 hover:text-white underline font-semibold transition-colors">Submit your project details for an audit showcase.</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
