import React, { useState, useMemo } from "react";
import * as Icons from "lucide-react";
import { SERVICES_DATA, Service } from "../types";

// Dynamic Icon Renderer helper to pull correct Lucide React representations
function renderServiceIcon(name: string) {
  const IconComponent = (Icons as any)[name];
  if (IconComponent) {
    return <IconComponent className="text-red-500 group-hover:text-white transition-colors duration-300" size={24} />;
  }
  // Fallback
  return <Icons.Sparkles className="text-red-500" size={24} />;
}

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { label: "All Professional Services", value: "All" },
    { label: "Monetization", value: "Monetization" },
    { label: "SEO & Traffic", value: "SEO" },
    { label: "YouTube Growth", value: "Growth" },
    { label: "Ad Campaigns", value: "Ads" },
    { label: "Design", value: "Design" },
    { label: "Web Tech", value: "Development" }
  ];

  // Perform dynamic, lightning-fast filtering based on category AND text search query
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        selectedCategory === "All" || service.category === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="services"
      className="py-24 bg-[#050003] relative overflow-hidden ring-1 ring-zinc-950"
    >
      {/* Visual Design Background Light elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-red-950/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-red-950/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Information */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block">
            // OUR SERVICES CAPABILITIES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Our 25 Premium <span className="text-red-600">Growth Chambers</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans font-light">
            Every business has native growth bottlenecks. Explore our specialized, AdSense-safe service protocols constructed specifically for YouTube, Website SEO, Lead Systems, and Paid Conversions.
          </p>
        </div>

        {/* Dynamic Navigation Toolbar: Search + Category Buttons */}
        <div className="bg-[#0b0407] border border-[#1f0509] rounded-2xl p-4 sm:p-6 mb-12 shadow-2xl space-y-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input Box */}
            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <Icons.Search size={18} />
              </div>
              <input
                id="service-search-input"
                type="text"
                placeholder="Search across all 25 organic services (e.g. SEO, channel)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600/60 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600/30 transition-all font-sans font-light"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 hover:text-red-400 transition-colors"
                >
                  <Icons.X size={16} />
                </button>
              )}
            </div>

            {/* Matching label metrics */}
            <div className="text-xs font-mono text-zinc-500 whitespace-nowrap">
              Showing <span className="text-red-500 font-bold">{filteredServices.length}</span> of 25 Available Protocols
            </div>
          </div>

          {/* Quick Categories filter */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#120508]">
            {categories.map((cat) => (
              <button
                id={`services-cat-btn-${cat.value.toLowerCase()}`}
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg text-xs font-sans font-medium transition-all duration-300 pointer-cursor ${
                  selectedCategory === cat.value
                    ? "bg-red-600 text-white shadow-lg shadow-red-950/30 border border-red-500"
                    : "bg-zinc-950 text-zinc-400 border border-zinc-900 hover:border-red-900/40 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Dynamic Responsive Matching Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => (
              <div
                id={`service-card-${service.id}`}
                key={service.id}
                className="bg-[#0b0406] border border-[#1c0609] hover:border-red-600/30 rounded-2xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between group h-full relative overflow-hidden"
              >
                {/* Visual red gradient top-glow */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-950 group-hover:via-red-600/30 to-transparent transition-all duration-300" />
                <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-red-950/2 blur-2xl group-hover:bg-red-900/5 transition-all duration-300" />

                <div className="space-y-5">
                  {/* Top Row: Icon + Performance level marker */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#1b0509] border border-[#300a0f] flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-350">
                      {renderServiceIcon(service.lucideIcon)}
                    </div>
                    {/* Unique service category badge */}
                    <span className="text-[10px] font-mono uppercase bg-zinc-950 text-zinc-500 px-2 py-1 rounded border border-zinc-900">
                      {service.category}
                    </span>
                  </div>

                  {/* Core Title */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-red-500 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 font-sans font-light text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Highlights lists */}
                  <ul className="space-y-2 pt-2 border-t border-[#120507]">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs font-sans text-zinc-500">
                        <Icons.CheckCircle2 size={13} className="text-red-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Bottom Row showing results and quick connection CTA */}
                <div className="pt-5 mt-6 border-t border-[#170508] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono tracking-wider text-zinc-500 uppercase">Target Outcome</span>
                    <span className="text-xs font-semibold text-zinc-200 font-sans">{service.metric}</span>
                  </div>
                  <a
                    id={`service-card-cta-${service.id}`}
                    href={`#contact?service=${encodeURIComponent(service.title)}`}
                    onClick={() => {
                      const input = document.getElementById("contact-topic-input") as HTMLInputElement;
                      if (input) {
                        input.value = `Protocol: ${service.title}`;
                      }
                      const textarea = document.getElementById("contact-message-input") as HTMLTextAreaElement;
                      if (textarea) {
                        textarea.value = `Hello TEAMUKYT, I am interested in unlocking growth through your "${service.title}" service context. Please advise on custom audits.`;
                      }
                    }}
                    className="p-2 px-3 bg-zinc-950 hover:bg-red-600 text-zinc-400 hover:text-white rounded border border-zinc-900 hover:border-red-500 transition-colors duration-300 text-[10px] font-mono font-medium flex items-center gap-1.5"
                  >
                    <span>Apply Now</span>
                    <Icons.ArrowUpRight size={12} />
                  </a>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty Search results layout */
          <div className="bg-[#0b0407] border border-zinc-900 rounded-2xl p-12 text-center space-y-4 max-w-lg mx-auto">
            <Icons.ShieldAlert className="text-red-600 mx-auto" size={48} />
            <div className="space-y-1">
              <h4 className="font-display font-semibold text-white">No Growth Protocols Match</h4>
              <p className="text-xs font-sans text-zinc-400">
                Adjust your search or category filters to locate any of our 25 digital optimization capabilities.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-sans font-medium transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
