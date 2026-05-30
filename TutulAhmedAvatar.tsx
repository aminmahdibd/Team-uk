import React from "react";

interface AvatarProps {
  className?: string;
}

export default function AminMahdiAvatar({ className = "w-full h-full" }: AvatarProps) {
  return (
    <svg 
      viewBox="0 0 400 400" 
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      id="amin-mahdi-avatar"
    >
      <defs>
        <radialGradient id="mahdi-bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#0284c7" />
        </radialGradient>
        <linearGradient id="mahdi-polo-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f4f4f5" />
        </linearGradient>
        <linearGradient id="mahdi-skin-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8c39e" />
          <stop offset="100%" stopColor="#c6956e" />
        </linearGradient>
        <linearGradient id="mahdi-hair-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e2022" />
          <stop offset="100%" stopColor="#090a0b" />
        </linearGradient>
        <linearGradient id="mahdi-beard-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#151718" />
          <stop offset="100%" stopColor="#050607" />
        </linearGradient>
      </defs>

      {/* Sky-blue background as in original photo */}
      <rect width="100%" height="100%" fill="#38bdf8" />
      <circle cx="200" cy="200" r="180" fill="url(#mahdi-bg-glow)" opacity="0.6" />

      {/* Hair (flowing behind) */}
      <path d="M 120 180 Q 90 280 130 350 L 270 350 Q 310 280 280 180 Z" fill="#090a0b" />

      {/* Body - Neck */}
      <path d="M 175 220 L 175 280 L 225 280 L 225 220 Z" fill="url(#mahdi-skin-shade)" />
      <path d="M 175 220 Q 200 240 225 220 L 225 235 Q 200 255 175 235 Z" fill="#b07d56" opacity="0.6" />

      {/* White Polo Shirt */}
      <path d="M 100 320 C 130 280, 160 270, 200 270 C 240 270, 270 280, 300 320 L 320 400 L 80 400 Z" fill="url(#mahdi-polo-shade)" />
      
      {/* Polo Collar */}
      <path d="M 160 270 L 200 295 L 180 325 L 140 285 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1.5" />
      <path d="M 240 270 L 200 295 L 220 325 L 260 285 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1.5" />
      <path d="M 190 285 L 200 295 L 210 285 L 210 330 L 190 330 Z" fill="#f4f4f5" />
      
      {/* Red-Green Webbing detail */}
      <rect x="198" y="295" width="4" height="40" fill="#22c55e" />
      <rect x="200" y="295" width="1" height="40" fill="#ef4444" />
      
      {/* Silver Neck Chain */}
      <path d="M 178 245 Q 200 285 222 245" fill="none" stroke="#d4d4d8" strokeWidth="2" opacity="0.8" />

      {/* Head/Face Base */}
      <path d="M 135 150 C 135 90, 265 90, 265 150 C 265 210, 265 240, 200 250 C 135 240, 135 210, 135 150 Z" fill="url(#mahdi-skin-shade)" />

      {/* Ears */}
      <circle cx="132" cy="165" r="15" fill="#d9ab82" />
      <circle cx="268" cy="165" r="15" fill="#d9ab82" />
      <circle cx="132" cy="165" r="8" fill="#a46d43" opacity="0.5" />
      <circle cx="268" cy="165" r="8" fill="#a46d43" opacity="0.5" />

      {/* Eyebrows */}
      <path d="M 155 138 Q 170 130 183 138" fill="none" stroke="#121314" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M 245 138 Q 230 130 217 138" fill="none" stroke="#121314" strokeWidth="4.5" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="170" cy="148" rx="8" ry="5" fill="#ffffff" />
      <ellipse cx="230" cy="148" rx="8" ry="5" fill="#ffffff" />
      <circle cx="170" cy="148" r="4.5" fill="#4a3728" />
      <circle cx="230" cy="148" r="4.5" fill="#4a3728" />
      <circle cx="168" cy="146" r="1.5" fill="#ffffff" />
      <circle cx="228" cy="146" r="1.5" fill="#ffffff" />

      {/* Nose */}
      <path d="M 200 142 L 200 185 Q 200 190 206 188 Q 194 188 200 185" fill="none" stroke="#9d6d45" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Smiling Mouth */}
      <path d="M 183 205 Q 200 215 217 205" fill="none" stroke="#8c2e2e" strokeWidth="3" strokeLinecap="round" />

      {/* Groomed Mustache and Beard */}
      <path d="M 180 198 Q 200 193 220 198 Q 200 204 180 198" fill="url(#mahdi-beard-shade)" />
      <path d="M 194 213 L 206 213 L 200 225 Z" fill="url(#mahdi-beard-shade)" />
      
      {/* Beard lining jaw & chin based on image */}
      <path d="M 135 158 C 135 220, 160 252, 200 252 C 240 252, 265 220, 265 158 C 265 210, 252 245, 200 245 C 148 245, 135 210, 135 158 Z" fill="url(#mahdi-beard-shade)" opacity="0.95" />

      {/* Long hair segments parted in center */}
      <path d="M 200 95 C 140 95, 130 140, 130 180 C 130 220, 105 260, 115 320 C 120 350, 135 340, 135 300 C 135 220, 142 160, 195 110 Z" fill="url(#mahdi-hair-shade)" />
      <path d="M 200 95 C 260 95, 270 140, 270 180 C 270 220, 295 260, 285 320 C 280 350, 265 340, 265 300 C 265 220, 258 160, 205 110 Z" fill="url(#mahdi-hair-shade)" />

      {/* Highlights */}
      <path d="M 195 98 Q 150 110, 140 160" fill="none" stroke="#4a4d50" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
      <path d="M 205 98 Q 250 110, 260 160" fill="none" stroke="#4a4d50" strokeWidth="2" opacity="0.4" strokeLinecap="round" />

      {/* GUCCI Interlocking branding print on the polo shirt */}
      <g transform="translate(245, 335) scale(0.65)" opacity="0.9">
        <path d="M 15 10 C 15 15, 25 15, 25 10 C 25 5, 15 5, 15 10 Z M 19 10 C 19 7, 23 7, 23 10 C 23 13, 19 13, 19 10 Z" fill="#111111" stroke="#111111" strokeWidth="0.5" />
        <path d="M 23 10 C 23 15, 33 15, 33 10 C 33 5, 23 5, 23 10 Z M 27 10 C 27 7, 31 7, 31 10 C 31 13, 27 13, 27 10 Z" fill="#111111" stroke="#111111" strokeWidth="0.5" />
        <text x="3" y="24" fontFamily="'Inter', sans-serif" fontSize="6.5" fontWeight="900" fill="#111111" letterSpacing="0.8">GUCCI</text>
      </g>
    </svg>
  );
}
