import React from "react";
import { Youtube, Twitter, Instagram, Facebook, ArrowUp, ArrowUpRight, PhoneCall, Mail } from "lucide-react";

export default function Footer() {
  const linksCompany = [
    { name: "About TEAMUKYT", href: "#about" },
    { name: "Why Brands Trust Us", href: "#why-us" },
    { name: "Agency Specialists", href: "#team" }
  ];

  const linksServices = [
    { name: "YouTube Monetization", href: "#services" },
    { name: "Technical SEO A-Z", href: "#services" },
    { name: "Paid Ads Optimization", href: "#services" },
    { name: "Creative Thumbnails", href: "#services" }
  ];

  const linksSupport = [
    { name: "Audit Inquiries", href: "#contact" },
    { name: "Frequently Resolved FAQs", href: "#faqs" },
    { name: "Privacy Policy Agreements", href: "#" }
  ];

  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="bg-[#040103] border-t border-[#1b0508] pt-20 pb-8 text-left relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main Footer Layout Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Info (4 layout columns) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 flex items-center justify-center bg-black border border-red-600 rounded-lg group-hover:border-white transition-colors duration-300 shadow-[0_0_12px_rgba(239,68,68,0.25)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5H20V8H14V20H10V8H4V5Z" fill="#FFFFFF" />
                  <path d="M13 10L19 15.5L16 20L11.5 14L13 10Z" fill="#DC2626" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-wider text-white">
                  TEAM<span className="text-red-600">UKYT</span>
                </span>
                <span className="text-[8px] font-mono tracking-widest text-[#6c5960] uppercase">
                  Future Growth
                </span>
              </div>
            </a>

            <p className="text-xs text-[#a29299] font-sans font-light leading-relaxed max-w-sm">
              TEAMUKYT is a premier digital marketing, YouTube growth, and SEO agency optimizing online visibility since 2018. We scale organic metrics safely and implement advanced conversion funnels.
            </p>

            {/* Quick social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Youtube, url: "https://youtube.com", label: "YouTube" },
                { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
                { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
                { icon: Facebook, url: "https://facebook.com", label: "Facebook" }
              ].map((soc, i) => {
                const Icon = soc.icon;
                return (
                  <a
                    id={`footer-social-link-${soc.label.toLowerCase()}`}
                    key={i}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-900 hover:border-red-600/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
                    aria-label={`TEAMUKYT ${soc.label}`}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Company Links (2 layout columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono uppercase text-red-500 tracking-widest">
              Growth Organization
            </h4>
            <ul className="space-y-2.5">
              {linksCompany.map((link, i) => (
                <li key={i}>
                  <a
                    id={`footer-company-link-${i}`}
                    href={link.href}
                    className="text-xs text-[#a29299] hover:text-white font-sans transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links (3 layout columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono uppercase text-red-500 tracking-widest">
              Core Optimization
            </h4>
            <ul className="space-y-2.5">
              {linksServices.map((link, i) => (
                <li key={i}>
                  <a
                    id={`footer-services-link-${i}`}
                    href={link.href}
                    className="text-xs text-[#a29299] hover:text-white font-sans transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support Links (3 layout columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono uppercase text-[#98878e] tracking-widest">
              Legal & Support
            </h4>
            <ul className="space-y-2.5">
              {linksSupport.map((link, i) => (
                <li key={i}>
                  <a
                    id={`footer-support-link-${i}`}
                    href={link.href}
                    className="text-xs text-[#a29299] hover:text-white font-sans transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright details row */}
        <div className="pt-8 border-t border-[#180507] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-sans">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} TEAMUKYT. All Rights Reserved. Private Agency.</p>
            <p className="text-[10px] text-zinc-600 font-mono">LONDON & SYLHET DIGITAL DISTRIBUTION DIVISIONS.</p>
          </div>

          {/* Scroll to Top Trigger */}
          <button
            id="back-to-top-btn"
            onClick={scrollBackToTop}
            className="p-3 bg-zinc-950 hover:bg-red-600 text-zinc-400 hover:text-white rounded-xl border border-zinc-900 hover:border-red-500 transition-all duration-300 flex items-center gap-2 text-xs font-mono group"
            aria-label="Scroll Back to Top"
          >
            <span>Back To Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
