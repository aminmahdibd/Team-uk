export interface Service {
  id: string;
  title: string;
  category: "Monetization" | "SEO" | "Growth" | "Design" | "Ads" | "Development" | "All";
  description: string;
  features: string[];
  lucideIcon: string;
  metric: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "SEO" | "YouTube Growth" | "Thumbnail Design" | "Website Projects" | "Ads Campaigns" | "Social Media Marketing";
  clientName: string;
  metrics: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  socials: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Monetization" | "SEO" | "YouTube Growth" | "Ads & Strategy";
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

// Global Static Data to feed components
export const SERVICES_DATA: Service[] = [
  // Monetization (2 services)
  {
    id: "yt-monetization",
    title: "YouTube Monetization Unlock",
    category: "Monetization",
    description: "Get your channel fully compliant and approved for the YouTube Partner Program (YPP) with safe organic practices.",
    features: ["Policy compliance audit", "Watch time optimization", "Partner Program application support", "Rejection audit & fix"],
    lucideIcon: "DollarSign",
    metric: "100% Approval Rate"
  },
  {
    id: "fb-monetization",
    title: "Facebook Monetization Unlock",
    category: "Monetization",
    description: "Prepare and optimize your page to unlock in-stream ads, subscriptions, stars, and reels play bonuses.",
    features: ["Page policy cleaning", "Criteria tracking metrics", "Rights Manager setup support", "CPM optimization"],
    lucideIcon: "Facebook",
    metric: "50+ Brands Approved"
  },
  // Growth / YouTube (5 services)
  {
    id: "yt-channel-setup",
    title: "YouTube Channel Setup",
    category: "Growth",
    description: "Complete professional channel layout setup with customized assets, SEO-optimized descriptions, and branding.",
    features: ["Custom header & watermark placement", "Optimized tags & description keyword layout", "Custom intro/outro strategy", "Featured upload structuring"],
    lucideIcon: "Sliders",
    metric: "Complete Branded Launch"
  },
  {
    id: "organic-video-promo",
    title: "Organic Video Promotion",
    category: "Growth",
    description: "Drive relevant external traffic to your videos via content syndication, partner widgets, and organic sharing.",
    features: ["Targeted community distribution", "High-retention traffic pathways", "Strict AdSense safe practices", "Genuine user interaction tracking"],
    lucideIcon: "TrendingUp",
    metric: "+250% Engager Organic Lift"
  },
  {
    id: "organic-sub-growth",
    title: "Organic Subscriber Growth",
    category: "Growth",
    description: "Attract active, repeat viewers who enjoy your niche and build a highly loyal community around your brand.",
    features: ["Niche community networking", "View-to-subscriber conversion loops", "Engaging comment strategies", "Zero bot guarantee"],
    lucideIcon: "Users",
    metric: "100% Active Audiences Only"
  },
  {
    id: "youtube-seo",
    title: "YouTube SEO (Video & Channel)",
    category: "Growth",
    description: "Dominate both YouTube search and Google video results with advanced keyword research and metadata styling.",
    features: ["Algorithm-focused title writing", "Semantically rich descriptions", "Dynamic tags & chapter optimization", "Playlist keyword structural funneling"],
    lucideIcon: "Search",
    metric: "#1 Search Placements"
  },
  {
    id: "watch-time-increase",
    title: "Organic Watch Time Increase",
    category: "Growth",
    description: "Boost video retention structures to unlock organic suggestion loops and satisfy algorithm thresholds.",
    features: ["Audience retention dropoff audit", "Playlist hook techniques", "Mid-video pattern-interrupt formulas", "End screen conversion funneling"],
    lucideIcon: "Clock",
    metric: "+4,000 Hours Milestones"
  },
  // SEO (3 services)
  {
    id: "website-seo",
    title: "Website A to Z SEO",
    category: "SEO",
    description: "Technical, on-page, and off-page search engine optimization to consistently place you on the first page of Google.",
    features: ["Complete schema markup deployment", "Deep competitor keyword analysis", "Premium semantic backlink building", "Core Web Vitals acceleration"],
    lucideIcon: "Globe",
    metric: "+450% Organic Web Queries"
  },
  {
    id: "traffic-gen",
    title: "Traffic Generation",
    category: "SEO",
    description: "Funnel targeted web visits from organic search channels and cross-niche referral platforms.",
    features: ["High-authority blog guest postings", "Targeted query mapping", "Low bounce-rate traffic landing", "Niche newsletter placements"],
    lucideIcon: "Navigation",
    metric: "Targeted User Flow"
  },
  {
    id: "lead-gen",
    title: "Lead Generation",
    category: "SEO",
    description: "Convert basic visitors into high-paying prospects and capture qualified leads automatically in real time.",
    features: ["High-impact landing page design", "Interactive quiz loops", "Lead magnet crafting", "Automated CRM integrations"],
    lucideIcon: "UserCheck",
    metric: "25% Opt-in Average"
  },
  // Social Media Management & Growth (8 services)
  {
    id: "social-management",
    title: "Social Media Management",
    category: "Growth",
    description: "Cohesive management of all social nodes to enforce consistent brand messaging, posting schedules, and engagement.",
    features: ["Multichannel content scheduling", "Proactive community responses", "Weekly branding performance analytics", "Visual feed layout grids"],
    lucideIcon: "Settings",
    metric: "99.9% Consistent Posting"
  },
  {
    id: "twitter-growth",
    title: "Twitter Audience Growth",
    category: "Growth",
    description: "Build massive brand authority on X / Twitter using viral thread structures, smart engagement, and executive networking.",
    features: ["Authority thread structural scripts", "Influencer connection outreach", "Trending topic newsjacking", "Follower-to-newsletter loops"],
    lucideIcon: "Twitter",
    metric: "+5k Monthly Followers"
  },
  {
    id: "insta-growth",
    title: "Instagram Audience Growth",
    category: "Growth",
    description: "Establish strong aesthetic authority. Attract recurring clients with Reels strategies, carousels, and stories.",
    features: ["Attention-grabbing hooks", "Trending audio mapping", "Engagement-trigger interactions", "Daily content stories flow"],
    lucideIcon: "Instagram",
    metric: "Elevate Visual Reach"
  },
  {
    id: "fb-growth",
    title: "Facebook Page Growth",
    category: "Growth",
    description: "Build a highly interactive subscriber base on Facebook through reels exposure and group orchestration.",
    features: ["Viral reels editing flow", "Organic group seeding methods", "Subscriber incentive programs", "Page recommendations audit"],
    lucideIcon: "ExternalLink",
    metric: "+10k Reach Upscales"
  },
  {
    id: "tiktok-growth",
    title: "TikTok Audience Growth",
    category: "Growth",
    description: "Ride the algorithm wave. Dominate short-form with custom hook patterns and editing strategies designed to retain.",
    features: ["First 3-second hook styling", "Visual retention tricks", "Audio matching curation", "User Generated Video replication"],
    lucideIcon: "Tv",
    metric: "Multi-Million View Potentials"
  },
  {
    id: "pinterest-growth",
    title: "Pinterest Audience Growth",
    category: "Growth",
    description: "Drive stable compounding daily referral traffic to websites using SEO-friendly design pins.",
    features: ["Traffic optimized rich pins", "Keyword styled visual boards", "Compounding reach funnels", "Auto-scheduler orchestration"],
    lucideIcon: "Pin",
    metric: "+100k Monthly Visitors"
  },
  {
    id: "podcast-growth",
    title: "Podcast Audience Growth",
    category: "Growth",
    description: "Raise audio platform download statistics on Spotify, Apple Podcasts, and YouTube with targeted audio clips.",
    features: ["Short highlight reels clipping", "Multi-platform directory listings", "Co-host promotion networks", "Subscriber engagement callouts"],
    lucideIcon: "Mic",
    metric: "+350% Direct Listens"
  },
  {
    id: "spotify-sound-promo",
    title: "Spotify & SoundCloud Promotion",
    category: "Growth",
    description: "Launch your music safely using authoritative playlists, organic music logs, and real verified listener plays.",
    features: ["Curator playlist placements", "Targeted lookalike fan ads", "Music community shares", "Algorithmic Radio trigger funnels"],
    lucideIcon: "Music",
    metric: "+100k Streams Reached"
  },
  // Design & Thumbnails (3 services)
  {
    id: "thumbnail-clickbait",
    title: "YouTube Thumbnail Clickbait Design",
    category: "Design",
    description: "Get extreme CTR with clean, high-contrast, story-driven visual compositions that command viewer curiosity.",
    features: ["Extreme contrast color styling", "Readable short-text overlays", "Emotion focused main faces", "3-second glance tests"],
    lucideIcon: "Camera",
    metric: "12%+ Click-Through Rate"
  },
  {
    id: "website-creation",
    title: "Website Creation & Dev",
    category: "Development",
    description: "Create breathtaking fast, premium, search-optimized websites designed directly to convert cold prospects.",
    features: ["Ultra-modern dark theme designs", "Framer/React high speed rendering", "Fully responsive layouts", "High conversion form mechanics"],
    lucideIcon: "Code",
    metric: "Premium custom web layout"
  },
  {
    id: "graphic-design",
    title: "All Graphic Design Layouts",
    category: "Design",
    description: "Enforce complete aesthetic visual brand authority across logos, media kits, ads, and merchandise layers.",
    features: ["High-end corporate layouts", "Media outreach kits", "Custom high-contrast banners", "Vector scale design exports"],
    lucideIcon: "Palette",
    metric: "100% Original Vector Files"
  },
  // Ads & Strategy (4 services)
  {
    id: "google-ads",
    title: "Google Google Ads (SEM)",
    category: "Ads",
    description: "Place your solution right in front of buyers at the exact millisecond they search for it globally.",
    features: ["Intent mapping keyword research", "Conversion tracking installation", "A/B copy-testing strategy", "Negative keyword daily hygiene"],
    lucideIcon: "Layers",
    metric: "4.5x Average Return on Ad Spend"
  },
  {
    id: "facebook-ads",
    title: "Meta & Facebook Ads Campaign",
    category: "Ads",
    description: "Scalable customer acquisition models using laser-focused audience demographics and thumb-dropping visuals.",
    features: ["Detailed lookalike audience setups", "Instant lead capture configurations", "Dynamic creative optimizations", "Pixel & API integration sync"],
    lucideIcon: "Target",
    metric: "Under $2 Cost-Per-Lead Models"
  },
  {
    id: "email-marketing",
    title: "Email Marketing Funnels",
    category: "Ads",
    description: "Nurture existing data and generate consistent repeat orders using high-converting educational email automation.",
    features: ["Dynamic behavior flows", "Weekly high-value broadcast scripts", "Deliverability score repairs", "Interactive client newsletters"],
    lucideIcon: "Mail",
    metric: "40%+ Open Rate Optimizations"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "port-seo-finance",
    title: "Scale SaaS Organic Traffic by 400%",
    category: "SEO",
    clientName: "FinTech Hub Global",
    metrics: "Ranked #1 for 45 Main Keywords",
    description: "A complete overhaul focusing on site schema markup, technical index correction, and premium backlinking content strategy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "port-yt-monetize",
    title: "Gaming Channel to $12k/Mo Affiliate Funnel",
    category: "YouTube Growth",
    clientName: "Pixel Arena YT",
    metrics: "420k Subscribers in 8 Months",
    description: "Utilized semantic SEO optimization, extreme retention script structures, and professional color-graded high clickbait-style thumbnail designs.",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "port-thumb-vlog",
    title: "Tech Review Video Packaging Optimization",
    category: "Thumbnail Design",
    clientName: "GadgetRanger Reviews",
    metrics: "CTR Skyrocketed from 3.1% to 11.8%",
    description: "Crafted high-impact visual stories, optimized contrast ratios, and implemented psychological facial alignment schemas in thumbnails.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "port-web-crypto",
    title: "High-Speed Futuristic Web App Launch",
    category: "Website Projects",
    clientName: "AetherLabs Web3",
    metrics: "0.4s Loaded (Speed Index 99/100)",
    description: "Designed a stunning fully-responsive dark-themed Web App built for maximum speed, styled with glowing crimson red visual lines.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "port-ads-coaching",
    title: "Consulting Brand $140,000 Pipeline Generation",
    category: "Ads Campaigns",
    clientName: "HighRise Mentoring",
    metrics: "603 High-Intent Leads in 30 Days",
    description: "Engineered ultra-targeted Meta and Google ads with direct qualifying copy, funnelling directly to interactive calendar bookings.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "port-sm-music",
    title: "Viral Artist Spotify Growth Framework",
    category: "Social Media Marketing",
    clientName: "Kaelen Woods (Electronic Producer)",
    metrics: "2.1 Million Streams organically",
    description: "Coordinated organic short-form TikTok & Reel loops, syncing Spotify algorithm triggers to feed direct recommendation radios.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80"
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: "team-2",
    name: "Amin Mahi",
    position: "CEO & Founder",
    bio: "Visionary leader and media distribution architect. Built multiple digital networks scaling beyond 10M+ collective impressions with high-converting marketing frameworks.",
    avatar: "https://drive.google.com/thumbnail?id=1y4VNmZFnmuiPrHAJ6_b_S39lSHTNJQB4&sz=w600",
    socials: {
      twitter: "https://twitter.com/aminmahi",
      facebook: "https://facebook.com/aminmahi",
      linkedin: "https://linkedin.com/in/aminmahi",
      youtube: "https://youtube.com/@aminmahi"
    }
  },
  {
    id: "team-1",
    name: "Amin Mahdi",
    position: "Co-Founder",
    bio: "Chief execution officer and strategic growth planner. Orchestrating professional campaigns, conversion-focused pipelines, and high-pacing business growth tracks.",
    avatar: "https://drive.google.com/thumbnail?id=1U1YkStZK6lLWgHt-XJgpJSIEfyKKfeJZ&sz=w600",
    socials: {
      twitter: "https://twitter.com/aminmahdi",
      facebook: "https://facebook.com/aminmahdi",
      linkedin: "https://linkedin.com/in/aminmahdi",
      youtube: "https://youtube.com/@aminmahdi"
    }
  },
  {
    id: "team-3",
    name: "Eshat Amin",
    position: "YouTube Expert",
    bio: "Audience retention specialist. Manipulating click-through rates (CTR), retention curve optimizations, and YouTube search-algorithmic pathways to secure exponential viewer growth.",
    avatar: "https://drive.google.com/thumbnail?id=1WdHeFSnYoC7wu8WfeDqk2W5AXBkFNA5c&sz=w600",
    socials: {
      twitter: "https://twitter.com/eshatamin",
      youtube: "https://youtube.com/@eshatamin",
      linkedin: "https://linkedin.com/in/eshatamin"
    }
  },
  {
    id: "team-4",
    name: "Juned Ahmed",
    position: "Senior Graphic Designer",
    bio: "Aesthetic virtuoso directing thumb-stopping thumbnail configurations, high-impact vector artwork scaling, and corporate-authority visual design suites.",
    avatar: "https://drive.google.com/thumbnail?id=1ZScDgOn9dBn0uc-DSKbUAYuNejjOA9xN&sz=w600",
    socials: {
      instagram: "https://instagram.com/junedahmed",
      linkedin: "https://linkedin.com/in/junedahmed",
      twitter: "https://twitter.com/junedahmed"
    }
  },
  {
    id: "team-5",
    name: "Tutul Ahmed",
    position: "Social Media Specialist",
    bio: "Platform growth authority managing short-form algorithmic reels, Facebook and TikTok page acceleration programs, and community relationship building.",
    avatar: "https://drive.google.com/thumbnail?id=1R3UGxGYqRFOhglT04NMUhexdSE0rOvSs&sz=w600",
    socials: {
      twitter: "https://twitter.com/tutulahmed",
      facebook: "https://facebook.com/tutulahmed",
      instagram: "https://instagram.com/tutulahmed"
    }
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Devon Reed",
    role: "Tech YouTuber",
    company: "DevonByte Reviews (380k Subs)",
    content: "TEAMUKYT literally unlocked my monetization in less than 20 days after I was stuck in a review-loop for months! Since then, they handled my video SEO and my CTR shot up to 13%. They are genuine experts with direct active audiences.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "test-2",
    name: "Clara Vance",
    role: "Marketing Director",
    company: "Apex Legal SaaS Solution",
    content: "Working with Alex and the web group on our SEO strategy has been our single best inbound marketing decision. Our organic trial registrations increased by 312% in exactly 90 days. Professional communication!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "test-3",
    name: "Landon Peters",
    role: "Founder & Creator",
    company: "The Wealth Podcast",
    content: "The thumb designs by Sarah and the shorts distribution strategy of Marcus completely revitalized our podcast. We got over 3 million short-form impressions inside 6 weeks. 24/7 support and amazing response pacing.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    verified: true
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do you achieve YouTube and Facebook Monetization Unlock?",
    answer: "We perform a thorough channel review, clean standard design policies, edit metadata structures, and drive high-retention organic support to exceed watch time thresholds safely. We do NOT use bots — everything complies with official platform guidelines.",
    category: "Monetization"
  },
  {
    id: "faq-2",
    question: "Do you guarantee real audience subscriber growth?",
    answer: "Yes. Our models target exact interest sub-sections, active user communities, and strategic playlist distributions. We ensure your subscribers are real human beings who genuinely click and contribute metrics to your videos.",
    category: "YouTube Growth"
  },
  {
    id: "faq-3",
    question: "What is your approach to technical A to Z website SEO?",
    answer: "We fix critical rendering speeds, insert detailed schema elements, rebuild local page silos, map conversion flows, and build premium organic backlink structures targeting competitive key terms on Google.",
    category: "SEO"
  },
  {
    id: "faq-4",
    question: "What platforms do you manage for social growth?",
    answer: "We support Instagram, TikTok, Twitter/X, Pinterest, Facebook, YouTube, as well as Spotify/SoundCloud audio growth loops and global Podcast directory listings.",
    category: "YouTube Growth"
  },
  {
    id: "faq-5",
    question: "How are thumbnail clickbait designs prepared?",
    answer: "We follow extreme high-retention patterns: high contrast colors, face focus with micro-expression mapping, extreme story hooks, readable texts on any mobile device index, and dynamic glance tests.",
    category: "Ads & Strategy"
  },
  {
    id: "faq-6",
    question: "How do we collaborate on paid ads (Google / Facebook)?",
    answer: "We perform full copy layouts, setup your client pixel tracking, run detailed lookalike demographic testing matrices, and optimize campaigns weekly to achieve positive Return on Ad Spend (ROAS).",
    category: "Ads & Strategy"
  }
];

export const STATS_DATA: StatItem[] = [
  { label: "Active Channels Scaled", value: 120, suffix: "+" },
  { label: "Total Views Generated", value: 75, suffix: "M+" },
  { label: "SEO First Page Keywords", value: 1400, suffix: "+" },
  { label: "Client Ad Profit Secured", value: 3.2, suffix: "M$" }
];
