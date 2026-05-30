import React from "react";
import { Twitter, Instagram, Facebook, Linkedin, Youtube, Orbit } from "lucide-react";
import { motion } from "motion/react";
import { TEAM_DATA } from "../types";

// Helper styles based on member details to increase branding prestige
const getMemberStyles = (id: string) => {
  switch (id) {
    case "team-1": // Amin Mahdi
      return {
        glow: "bg-amber-500/10",
        shadow: "shadow-amber-950/20",
        borderColor: "group-hover:border-amber-600/30",
        textAccent: "text-amber-500",
        beacon: "bg-amber-500",
        gradient: "from-amber-950/20 via-amber-900/5 to-transparent",
      };
    case "team-2": // Amin Mahi
      return {
        glow: "bg-red-500/10",
        shadow: "shadow-red-950/20",
        borderColor: "group-hover:border-red-600/30",
        textAccent: "text-red-500",
        beacon: "bg-red-500",
        gradient: "from-red-950/20 via-red-900/5 to-transparent",
      };
    case "team-3": // Eshat Amin
      return {
        glow: "bg-purple-500/10",
        shadow: "shadow-purple-950/20",
        borderColor: "group-hover:border-purple-600/30",
        textAccent: "text-purple-500",
        beacon: "bg-purple-500",
        gradient: "from-purple-950/20 via-purple-900/5 to-transparent",
      };
    case "team-4": // Juned Ahmed
      return {
        glow: "bg-cyan-500/10",
        shadow: "shadow-cyan-950/20",
        borderColor: "group-hover:border-cyan-600/30",
        textAccent: "text-cyan-400",
        beacon: "bg-cyan-400",
        gradient: "from-cyan-950/20 via-cyan-900/5 to-transparent",
      };
    case "team-5": // Tutul Ahmed
      return {
        glow: "bg-blue-500/10",
        shadow: "shadow-blue-950/20",
        borderColor: "group-hover:border-blue-600/30",
        textAccent: "text-blue-400",
        beacon: "bg-blue-400",
        gradient: "from-blue-950/20 via-blue-900/5 to-transparent",
      };
    default:
      return {
        glow: "bg-red-500/10",
        shadow: "shadow-red-950/20",
        borderColor: "group-hover:border-red-600/30",
        textAccent: "text-red-500",
        beacon: "bg-red-500",
        gradient: "from-red-950/20 via-red-900/5 to-transparent",
      };
  }
};

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
      },
    },
  };

  return (
    <section
      id="team"
      className="py-28 bg-[#0a0407] relative overflow-hidden border-t border-[#1a0508]"
    >
      {/* Absolute futuristic lighting backdrops */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-red-950/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[350px] h-[350px] rounded-full bg-purple-950/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title information */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-red-500" />
            <span className="font-mono text-[10px] text-red-500 font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Orbit size={10} className="animate-spin text-red-500" style={{ animationDuration: "12s" }} /> 
              ACTIVE CORE BOARD & SQUAD
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-red-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            Meet TEAM<span className="text-red-600">UKYT</span> Specialists
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed">
            We are hands-on distribution experts, SEO masters, and visual engineers. Meet the professionals directly responsible for magnifying subscriber loops and scaling client conversions.
          </p>
        </div>

        {/* Specialists 5 Card list layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {TEAM_DATA.map((member) => {
            const styles = getMemberStyles(member.id);

            return (
              <motion.div
                variants={cardVariants}
                id={`team-member-card-${member.id}`}
                key={member.id}
                className={`bg-gradient-to-b from-[#0a0508]/85 via-[#060205]/95 to-[#030102]/98 border border-[#1b090e] hover:border-red-600/30 ${styles.borderColor} rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)] relative`}
              >
                {/* Visual Header Glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Profile Portrait / Custom Visual Segment */}
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950 border-b border-[#110408]">
                  {/* Direct original photographs including the user's high-res media drive link */}
                  <img
                    src={member.avatar}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-[0.85] contrast-[1.05] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  
                  {/* Smooth dark overlay elements and filters dynamically matching premium theme */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050103]/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Glow frame ring inside the card with specific theme color */}
                  <div className={`absolute inset-0 border-2 border-transparent ${styles.borderColor} transition-colors duration-500 rounded-b-none pointer-events-none`} />
                </div>

                {/* Core Text details & Glassmorphic Body Container */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left relative z-10 bg-[#060205]/40 backdrop-blur-sm">
                  
                  <div className="space-y-2">
                    {/* Position Label with glowing style */}
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono uppercase text-red-500 font-bold tracking-wider px-2 py-0.5 bg-red-950/20 rounded border border-red-900/20">
                        {member.position}
                      </span>
                      <span className="text-[8px] font-mono text-zinc-600">
                        EST. BD
                      </span>
                    </div>
                    
                    {/* Name */}
                    <h4 className="font-display font-black text-base text-zinc-100 group-hover:text-red-500 transition-colors duration-200">
                      {member.name}
                    </h4>
                    
                    {/* Premium Description Bio */}
                    <p className="text-[11px] text-zinc-400 font-sans font-normal leading-relaxed pt-1 line-clamp-4">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social media icons ALWAYS visible below body as requested */}
                  <div className="pt-4 border-t border-[#1b0a0e] mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {member.socials.twitter && (
                        <a 
                          href={member.socials.twitter} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-zinc-500 hover:text-white hover:scale-110 transition-all duration-150 p-1.5 bg-zinc-950/80 rounded-md border border-zinc-900 hover:border-zinc-800 shadow-md flex items-center justify-center hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                          aria-label="Twitter Profile"
                        >
                          <Twitter size={11} />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a 
                          href={member.socials.linkedin} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-zinc-500 hover:text-sky-400 hover:scale-110 transition-all duration-150 p-1.5 bg-zinc-950/80 rounded-md border border-zinc-900 hover:border-zinc-800 shadow-md flex items-center justify-center hover:shadow-[0_0_10px_rgba(56,189,248,0.15)]"
                          aria-label="LinkedIn Profile"
                        >
                          <Linkedin size={11} />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a 
                          href={member.socials.instagram} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-zinc-500 hover:text-pink-400 hover:scale-110 transition-all duration-150 p-1.5 bg-zinc-950/80 rounded-md border border-zinc-900 hover:border-zinc-800 shadow-md flex items-center justify-center hover:shadow-[0_0_10px_rgba(244,63,94,0.15)]"
                          aria-label="Instagram Profile"
                        >
                          <Instagram size={11} />
                        </a>
                      )}
                      {member.socials.facebook && (
                        <a 
                          href={member.socials.facebook} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-zinc-500 hover:text-blue-400 hover:scale-110 transition-all duration-150 p-1.5 bg-zinc-950/80 rounded-md border border-zinc-900 hover:border-zinc-800 shadow-md flex items-center justify-center hover:shadow-[0_0_10px_rgba(59,130,246,0.15)]"
                          aria-label="Facebook Profile"
                        >
                          <Facebook size={11} />
                        </a>
                      )}
                      {member.socials.youtube && (
                        <a 
                          href={member.socials.youtube} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-zinc-500 hover:text-red-500 hover:scale-110 transition-all duration-150 p-1.5 bg-zinc-950/80 rounded-md border border-zinc-900 hover:border-zinc-800 shadow-md flex items-center justify-center hover:shadow-[0_0_10px_rgba(239,68,68,0.15)]"
                          aria-label="YouTube Channel"
                        >
                          <Youtube size={11} />
                        </a>
                      )}
                    </div>

                    {/* Highly trustworthy inline availability status dot */}
                    <div className="flex items-center gap-1 text-[8px] font-mono text-zinc-500 bg-[#050103] border border-zinc-900/60 px-1.5 py-0.5 rounded">
                      <span className={`w-1 h-1 rounded-full ${styles.beacon} animate-pulse`} />
                      <span className="text-[7px]">STANDBY</span>
                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
