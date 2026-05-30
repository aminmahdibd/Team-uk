@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

@layer utilities {
  .text-glow-red {
    text-shadow: 0 0 12px rgba(239, 68, 68, 0.4), 0 0 4px rgba(239, 68, 68, 0.2);
  }
  .box-glow-red {
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.15);
  }
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
}

/* Custom modern scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #080507;
}

::-webkit-scrollbar-thumb {
  background: #271418;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #dc2626;
}
