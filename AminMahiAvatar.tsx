import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageSquare, Check, HelpCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    needsGrowthType: [] as string[]
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const channelsList = [
    { label: "YouTube Monetization Unlock", value: "yt-monetize" },
    { label: "Website SEO / Traffic", value: "web-seo" },
    { label: "Social Audience Growth", value: "social-growth" },
    { label: "Google / Meta Paid Ads", value: "paid-ads" },
    { label: "Thumbnails & Asset Design", value: "art-design" }
  ];

  const handleCheckboxChange = (val: string) => {
    setFormData((prev) => {
      const exists = prev.needsGrowthType.includes(val);
      const updated = exists
        ? prev.needsGrowthType.filter((x) => x !== val)
        : [...prev.needsGrowthType, val];
      return { ...prev, needsGrowthType: updated };
    });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please key in your Name and Email address first.");
      return;
    }
    setLoading(true);
    // Simulate API connection flow gracefully
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#050003] relative overflow-hidden ring-1 ring-zinc-950"
    >
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-red-950/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-red-950/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block">
            // CRITICAL CONVERSION ENTRY POINT
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Initiate Your <span className="text-red-600">Organic Trajectory</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light">
            No obligation. Receive a comprehensive digital audit review by our lead specialists within 24 operational hours. Complete the inquiry blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed left info and dark abstract vector map placement (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0b0406] border border-[#21090d] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
              <h3 className="font-display font-bold text-lg text-white">Direct Channels</h3>
              
              <div className="space-y-4 font-sans text-sm text-zinc-300">
                <a
                  id="contact-phone-cta"
                  href="tel:01870542186"
                  className="flex items-center gap-4 p-3.5 bg-zinc-950 rounded-xl border border-zinc-900 hover:border-red-600/30 hover:bg-[#150407] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1c0508] border border-red-950 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-zinc-500 block">Direct Telephone</span>
                    <span className="font-mono font-bold text-white group-hover:text-red-500 transition-colors">01870542186</span>
                  </div>
                </a>

                <a
                  id="contact-whatsapp-cta"
                  href="https://wa.me/8801870542186"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 bg-zinc-950 rounded-xl border border-zinc-900 hover:border-red-600/30 hover:bg-[#150407] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-950/40 border border-green-900/30 flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <MessageSquare size={18} />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-zinc-500 block">24/7 Priority Support</span>
                    <span className="font-bold text-zinc-100 group-hover:text-red-500 transition-colors">Connect on WhatsApp</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 bg-transparent border border-transparent">
                  <div className="w-10 h-10 rounded-lg bg-[#1c0508] flex items-center justify-center text-red-500">
                    <Mail size={18} />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-zinc-500 block">Email Inquiries</span>
                    <span className="font-sans text-sm text-zinc-100">amineshatbd@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 bg-transparent border border-transparent">
                  <div className="w-10 h-10 rounded-lg bg-[#1c0508] flex items-center justify-center text-red-500 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-zinc-500 block">Operational HQ</span>
                    <span className="font-sans text-sm text-zinc-100">Sylhet, Bangladesh</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 bg-transparent border border-transparent">
                  <div className="w-10 h-10 rounded-lg bg-[#1c0508] flex items-center justify-center text-red-500 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-zinc-500 block">Corporate Office</span>
                    <span className="font-sans text-sm text-zinc-100">London, England</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Minimalist Abstract Vector Map (Premium "Manual" Vibe) */}
            <div className="bg-[#0b0406] border border-[#21090d] rounded-2xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Interactive Satellite Blueprint</span>
                <span className="text-[9px] font-mono text-xs text-red-500">PING ACTIVE</span>
              </div>
              
              {/* Sleek SVG abstract map showing location nodes */}
              <div className="relative aspect-video rounded-xl bg-[#030002] border border-zinc-900/80 overflow-hidden flex items-center justify-center shadow-inner group">
                <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-40">
                  {/* Grid background */}
                  <g stroke="#120509" strokeWidth="0.5">
                    {[...Array(20)].map((_, i) => (
                      <line key={`x-${i}`} x1={i * 20} y1="0" x2={i * 20} y2="200" />
                    ))}
                    {[...Array(10)].map((_, i) => (
                      <line key={`y-${i}`} x1="0" y1={i * 20} x2="400" y2={i * 20} />
                    ))}
                  </g>
                  {/* Abstract stylized regional lines representing map blobs */}
                  <path d="M40 30 C 80 40, 110 5, 140 30 C 180 60, 200 100, 220 120 C 250 150, 280 180, 360 160" stroke="#ff001c" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M10 110 C 60 120, 90 140, 130 110 M 230 40 C 270 50, 320 20, 380 50" stroke="#220408" strokeWidth="2" />
                  <path d="M120 180 C 180 160, 210 170, 270 190" stroke="#100305" strokeWidth="1" />
                  
                  {/* Bangladesh/HQ Region Indicator Node */}
                  <circle cx="210" cy="115" r="40" fill="url(#radial-pulse-red)" opacity="0.15" />
                  <circle cx="210" cy="115" r="15" fill="#dc2626" opacity="0.25" />
                  <circle cx="210" cy="115" r="5" fill="#ffffff" />
                </svg>
                
                <div className="absolute top-4 left-4 bg-[#0a0407] border border-red-950 text-[9px] text-[#ff001c] font-mono py-1 px-2 rounded">
                  SYLHET & LONDON METRIC STATIONS
                </div>
                
                <div className="absolute bottom-4 right-4 text-center text-[10px] font-sans text-zinc-400 max-w-xs bg-black/85 p-2 rounded border border-zinc-900 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                  </span>
                  <span>LONDON & SYLHET OPERATIONS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form placement container (7 columns) */}
          <div className="lg:col-span-7">
            {submitted ? (
              /* Success Landing Block */
              <div className="bg-[#0b0406] border border-red-600/35 rounded-2xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden flex flex-col items-center py-16">
                <div className="w-16 h-16 rounded-full bg-red-950/40 border border-red-600 flex items-center justify-center text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)] shrink-0">
                  <Check size={32} strokeWidth={2.5} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-white">Inquiry Blueprint Secure!</h3>
                  <p className="text-sm text-zinc-300 font-sans font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-red-500">{formData.name}</span>. Your audit inquiry has successfully reached Mahdi and our YouTube growth team.
                  </p>
                  <p className="text-xs text-zinc-500 font-sans max-w-sm mx-auto">
                    A specialist will finalize your baseline property analysis and email you reports at <span className="font-mono text-zinc-400 font-semibold">{formData.email}</span> within 24 operational hours.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      topic: "",
                      message: "",
                      needsGrowthType: []
                    });
                  }}
                  className="px-6 py-2.5 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-white rounded border border-zinc-900 hover:border-red-900 transition-colors text-xs font-sans font-medium"
                >
                  Send another request
                </button>
              </div>
            ) : (
              /* Full form implementation */
              <form
                onSubmit={handleSubmit}
                className="bg-[#0b0406] border border-[#21090d] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl text-left"
              >
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-white">Inquiry Blueprint</h3>
                  <p className="text-xs text-zinc-400 font-sans font-light">
                    Complete the metrics below to dispatch direct property information securely.
                  </p>
                </div>

                {/* Growth Checklist (Interactive Channel choices) */}
                <div className="space-y-3">
                  <label className="text-xs font-mono text-zinc-400 block uppercase tracking-wider">
                    Which growth vectors do you need?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {channelsList.map((ch) => {
                      const isChecked = formData.needsGrowthType.includes(ch.value);
                      return (
                        <button
                          id={`input-growth-chk-${ch.value}`}
                          key={ch.value}
                          type="button"
                          onClick={() => handleCheckboxChange(ch.value)}
                          className={`p-3 rounded-lg text-xs font-sans text-left border flex items-center justify-between transition-all duration-200 ${
                            isChecked
                              ? "bg-red-950/25 border-red-600 text-white"
                              : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:border-red-950"
                          }`}
                        >
                          <span>{ch.label}</span>
                          <div className={`w-4.5 h-4.5 rounded border flex items-center justify-center shrink-0 ${
                            isChecked ? "bg-red-600 border-red-500 text-white" : "border-zinc-800 bg-zinc-900"
                          }`}>
                            {isChecked && <Check size={10} strokeWidth={3} />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Standard Inputs row: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label id="input-label-name" className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Alex Mercer"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-red-600/50 rounded-xl py-3 px-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-red-600/20 font-sans font-light"
                    />
                  </div>

                  <div className="space-y-2">
                    <label id="input-label-email" className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="alex@example.com"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-red-600/50 rounded-xl py-3 px-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-red-600/20 font-sans font-light"
                    />
                  </div>
                </div>

                {/* Additional Inputs: Phone + Topic Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label id="input-label-phone" className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Telephone / WhatsApp
                    </label>
                    <input
                      id="contact-phone-input"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-red-600/50 rounded-xl py-3 px-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-red-600/20 font-sans font-light"
                    />
                  </div>

                  <div className="space-y-2">
                    <label id="input-label-topic" className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Preferred Growth Channel
                    </label>
                    <select
                      id="contact-topic-input"
                      name="topic"
                      value={formData.topic}
                      onChange={handleFormChange}
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-red-600/50 rounded-xl py-3 px-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-red-600/20 font-sans font-light"
                    >
                      <option value="">Choose growth objective...</option>
                      <option value="youtube-monetize">YouTube Monetization Option</option>
                      <option value="youtube-organic-views">YouTube SEO & Subscribers</option>
                      <option value="website-organic-seo">Website Technical SEO</option>
                      <option value="paid-advertising-ads">Google & Meta Ad Campaigns</option>
                      <option value="graphic-thumbnails-kits">Thumbnails & Brand Graphics</option>
                    </select>
                  </div>
                </div>

                {/* Message block */}
                <div className="space-y-2">
                  <label id="input-label-msg" className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Inquiry Details / Channel URL
                  </label>
                  <textarea
                    id="contact-message-input"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Provide details about your current subscribers, target search terms, or paste your channel url direct here..."
                    className="w-full bg-zinc-950 border border-zinc-900 focus:border-red-600/50 rounded-xl py-3 px-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-red-600/20 font-sans font-light"
                  />
                </div>

                {/* Terms notification */}
                <p className="text-[10px] font-sans text-zinc-500 leading-relaxed text-left">
                  * By submitting, you grant permission for TEAMUKYT lead specialists to perform basic traffic metadata queries against your channel assets/site context to prepare the audit.
                </p>

                {/* Submit buttons */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-red-600 via-red-700 to-red-800 disabled:from-zinc-900 disabled:to-zinc-950 hover:from-white hover:to-white hover:text-black hover:border-white text-white rounded-xl font-sans font-semibold text-xs uppercase tracking-wide shadow-xl transform active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 mt-2 cursor-pointer border border-red-500"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-zinc-400 border-t-white animate-spin shrink-0" />
                      <span>Securing Connection Blueprint...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Blueprint Audit</span>
                      <Send size={12} />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
      
      {/* Dynamic gradients used inside the custom SVG Map above */}
      <svg width="0" height="0">
        <defs>
          <radialGradient id="radial-pulse-red" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
            <stop offset="100%" stopColor="#050003" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
}
