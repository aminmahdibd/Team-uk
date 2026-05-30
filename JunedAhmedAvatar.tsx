import React, { useState, useMemo } from "react";
import { Plus, Minus, Search, HelpCircle, AlertCircle } from "lucide-react";
import { FAQS_DATA, FAQItem } from "../types";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Default first open
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = [
    { label: "All Subjects", value: "All" },
    { label: "Monetization", value: "Monetization" },
    { label: "YouTube Growth", value: "YouTube Growth" },
    { label: "SEO Systems", value: "SEO" },
    { label: "Paid Strategy", value: "Ads & Strategy" }
  ];

  const filteredFAQs = useMemo(() => {
    return FAQS_DATA.filter((faq) => {
      const matchesCategory =
        filterCategory === "All" || faq.category === filterCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filterCategory, searchQuery]);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faqs"
      className="py-24 bg-[#0a0407] relative overflow-hidden border-t border-[#1a0508]"
    >
      <div className="absolute top-1/4 right-0 -translate-y-1/2 w-80 h-80 rounded-full bg-red-950/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Section header info */}
        <div className="space-y-4 mb-16 text-center">
          <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block">
            // FREQUENTLY RESOLVED ARCHIVES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Got Questions? <span className="text-red-600">We Have Answers</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light max-w-xl mx-auto">
            Everything you need to know about monetization status, organic subscribers, technical configurations, and ad delivery mechanics designed to grow your brand.
          </p>
        </div>

        {/* Search bar + filter button */}
        <div className="bg-[#050103] border border-[#23090e] rounded-2xl p-4 sm:p-5 mb-10 space-y-4 shadow-xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
              <Search size={16} />
            </div>
            <input
              id="faq-search-input"
              type="text"
              placeholder="Search frequently asked questions (e.g. bot protection, YPP timeline)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 focus:border-red-600/60 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600/35 transition-all font-sans font-light"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2 justify-center">
            {categories.map((cat) => (
              <button
                id={`faq-cat-btn-${cat.value.toLowerCase().replace(" ", "-")}`}
                key={cat.value}
                onClick={() => setFilterCategory(cat.value)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-mono transition-colors duration-200 ${
                  filterCategory === cat.value
                    ? "bg-red-600 text-white"
                    : "bg-zinc-950 text-zinc-500 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion Blocks */}
        {filteredFAQs.length > 0 ? (
          <div className="space-y-4 text-left">
            {filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  id={`faq-accordion-box-${faq.id}`}
                  key={faq.id}
                  className="bg-[#050103] border border-[#21090d] hover:border-[#ff001c]/20 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    id={`faq-trigger-${faq.id}`}
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none relative"
                  >
                    <div className="flex items-center gap-3.5 pr-8">
                      <HelpCircle size={18} className="text-red-500 shrink-0" />
                      <span className="font-display font-bold text-sm sm:text-base text-zinc-100 hover:text-white transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div className="p-1 rounded-md bg-[#1d0509] text-red-500 border border-red-950/55 shrink-0">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-[#1a0508]" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans font-light">
                      {faq.answer}
                      
                      {/* Sub footer tags on FAQ */}
                      <div className="mt-4 pt-4 border-t border-zinc-950 flex justify-between items-center text-[9px] font-mono text-zinc-500">
                        <span>SUBJECT: {faq.category}</span>
                        <span className="text-red-600 font-bold uppercase">// TEAMUKYT Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-[#050103] border border-zinc-900 rounded-2xl p-10 text-center space-y-4 max-w-sm mx-auto">
            <AlertCircle className="text-red-500 mx-auto" size={36} />
            <div>
              <p className="font-display font-semibold text-white">No Solutions Found</p>
              <p className="text-xs text-zinc-400 font-sans font-light">
                Try shifting your keywords to broader topics like "premium SEO" or "monetize".
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery("");
                setFilterCategory("All");
              }}
              className="px-3 py-1 bg-red-600 text-white rounded text-[10px] font-sans font-medium hover:bg-red-700 transition"
            >
              Clear FAQ Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
