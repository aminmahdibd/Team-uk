import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ShieldAlert, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Showcase", href: "#portfolio" },
    { name: "Our Team", href: "#team" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050103]/90 backdrop-blur-md border-b border-[#2d090f]/70 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* TEAMUKYT Futuristic Logo */}
          <a
            id="navbar-logo"
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-11 h-11 flex items-center justify-center bg-black border border-red-600 rounded-lg group-hover:border-white transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              {/* Glow backdrop inside */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-950/20 to-black group-hover:scale-110 transition-transform duration-300"></div>
              {/* Minimalist modern TEAMUKYT emblem */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
              >
                <path
                  d="M4 5H20V8H14V20H10V8H4V5Z"
                  fill="#FFFFFF"
                  className="group-hover:fill-red-500 transition-colors duration-300"
                />
                <path
                  d="M13 10L19 15.5L16 20L11.5 14L13 10Z"
                  fill="#DC2626"
                  className="group-hover:fill-white transition-colors duration-300"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider text-white group-hover:text-red-600 transition-colors duration-300">
                TEAM<span className="text-red-600 group-hover:text-white transition-colors duration-300">UKYT</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
                Future Growth
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                id={`desktop-link-${link.name.toLowerCase().replace(" ", "-")}`}
                key={link.name}
                href={link.href}
                className="px-4 py-2 hover:text-red-500 text-zinc-300 font-sans font-medium text-sm tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct WhatsApp Quick Call & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              id="sticky-call-btn"
              href="tel:01870542186"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white font-mono text-xs rounded-full border border-red-500 hover:from-white hover:to-white hover:text-black hover:border-white transition-all duration-300 font-semibold group"
            >
              <PhoneCall size={14} className="group-hover:rotate-12 transition-transform duration-200" />
              <span>01870542186</span>
            </a>

            {/* Mobile Menu Icon */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-400 hover:text-red-500 lg:hidden focus:outline-none focus:ring-1 focus:ring-red-600 rounded-md"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (with Framer Motion orchestration) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#080305]/95 backdrop-blur-lg border-b border-[#2d090f] shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  id={`mobile-link-${link.name.toLowerCase().replace(" ", "-")}`}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-sans font-medium hover:bg-[#1a0508] rounded-md transition-colors text-zinc-300 hover:text-white border-l-2 border-transparent hover:border-red-600"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#1a0508] flex flex-col gap-3 px-4">
                <a
                  id="mobile-call-link"
                  href="tel:01870542186"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#110507] hover:bg-zinc-950 text-red-500 rounded-lg text-sm font-mono font-medium border border-red-950 transition-colors"
                >
                  <PhoneCall size={16} />
                  01870542186
                </a>
                <a
                  id="mobile-whatsapp-link"
                  href="https://wa.me/8801870542186"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-sans font-semibold transition-colors shadow-lg"
                >
                  🚀 Connect on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
