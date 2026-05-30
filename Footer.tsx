import React from "react";
import { Sparkles, ShieldCheck, Users, Zap, Search, Target, Briefcase, MessageSquare } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Organic Growth",
      icon: Sparkles,
      description: "No bots, zero fake audiences. All our promotion and traffic distribution practices target genuine human action parameters."
    },
    {
      title: "Trusted Service",
      icon: ShieldCheck,
      description: "100% compliant with AdSense, YouTube, Meta, and Google guidelines. We safe-proof physical properties from penalties."
    },
    {
      title: "Professional Team",
      icon: Users,
      description: "Our core specialists bring industry experience on deep conversion optimization and systematic metrics-scaling models."
    },
    {
      title: "Fast Support",
      icon: Zap,
      description: "Launch campaigns smoothly, receive direct progress reports, and align priorities with rapid deployment pathways."
    },
    {
      title: "SEO Experts",
      icon: Search,
      description: "We optimize on-page signals, schema markups, speed, and execute semantic link schemas to place you as #1 on Google."
    },
    {
      title: "Real Audience",
      icon: Target,
      description: "Targeting parameters based on buyer intent, contextual niche, and community interests to ensure real high retention."
    },
    {
      title: "Marketing Strategy",
      icon: Briefcase,
      description: "We craft detailed customer journeys, matching direct emotional triggers across copy structures, visuals, and funnels."
    },
    {
      title: "24/7 Communication",
      icon: MessageSquare,
      description: "Always stay updated via dedicated messengers and live WhatsApp reporting channels directly connected with specialists."
    }
  ];

  return (
    <section
      id="why-us"
      className="py-24 bg-[#0a0407] relative overflow-hidden border-t border-[#1a0508]"
    >
      {/* Background glow meshes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-950/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Headers */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block">
            // CRITICAL COMPETENCY ADVANTAGES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Why Successful Brands <br className="hidden sm:inline" />
            Choose <span className="text-red-600">TEAMUKYT</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light">
            We bypass trivial vanity metrics and build long-term value. Here is why elite content creators and businesses trust our team of specialists for continuous organic visibility.
          </p>
        </div>

        {/* Feature Cards Grid (4x2 on large screens, responsive on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                id={`why-us-card-${index}`}
                key={index}
                className="bg-[#050103] border border-[#23090e]/80 hover:border-red-600/30 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Horizontal hover light lines */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#dc2626]/20 group-hover:via-[#dc2626]/40 to-transparent transition-all duration-300" />

                <div className="space-y-4">
                  {/* Styled Rounded Icon Background */}
                  <div className="w-12 h-12 rounded-xl bg-[#1d0509] border border-[#3d0f15]/50 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300">
                    <Icon className="text-red-500 group-hover:text-white transition-colors duration-300" size={22} />
                  </div>

                  {/* Core Content */}
                  <div className="space-y-2">
                    <h4 className="font-display font-semibold text-white text-base group-hover:text-red-500 transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-zinc-400 font-sans text-xs sm:text-xs leading-relaxed font-light">
                      {feat.description}
                    </p>
                  </div>
                </div>

                {/* Subtle border shine effect */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-red-600 group-hover:to-transparent transition-all duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
