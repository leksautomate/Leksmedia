export interface OutlierVideo {
  id: string;
  title: string;
  channelName: string;
  channelSubs: string;
  views48h: number;
  channelAvg48h: number;
  outlierScore: number;
  hookType: string;
  patterns: string[];
  thumbnailUrl: string;
  publishedDaysAgo: number;
  niche: string;
  originalHook: string;
  remixTitle: string;
  remixHook7Step: {
    patternInterrupt: string;
    mirrorViewer: string;
    opportunity: string;
    gap: string;
    transformation: string;
    authority: string;
    transition: string;
  };
  scriptFramework: string;
  callToAction: string;
  thumbnailBrief: {
    visualSubject: string;
    textHook: string;
    emotion: string;
    colorPalette: string;
  };
}

export interface NicheScript {
  id: string;
  niche: string;
  title: string;
  hookType: string;
  productionScript: {
    hook: string;
    brollCues: string[];
    timestamps: string;
    body: string;
  };
  traditionalMode?: {
    hook: string;
    brollCues: string[];
    timestamps: string;
    body: string;
  };
  antiSlopAudit: {
    passed: boolean;
    colonsRemoved: number;
    spokenCoffeeShopScore: number;
    feedback: string;
  };
}

export const OUTLIER_VIDEOS: OutlierVideo[] = [
  {
    id: "outlier-1",
    title: "How a Solo Founder Built an $8M Personal Media Brand with Zero Ads",
    channelName: "Founder Economics",
    channelSubs: "42.5K",
    views48h: 248000,
    channelAvg48h: 18400,
    outlierScore: 1348, // (248000 / 18400) * 100
    hookType: "Asymmetric Leverage + Revenue Paradox",
    patterns: ["Specific revenue number ($8M)", "Zero ad spend contrast", "Inbound deal velocity"],
    thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    publishedDaysAgo: 2,
    niche: "Executive Media & Personal Brands",
    originalHook: "Most people think scaling a high-ticket personal brand requires endless cold outreach, massive agency retainers, and years of shouting into the void. But six months ago, a solo founder started publishing data-backed category breakdowns. Today, his inbound pipeline generates $180,000 every single month.",
    remixTitle: "The High-Authority Video System That Drives $120k/Mo Inbound Retainers",
    remixHook7Step: {
      patternInterrupt: "Stop scrolling if you still think building an authority brand means shouting into the void 5 days a week.",
      mirrorViewer: "You have deep industry expertise, but guessing what topics will get traction is killing your pipeline consistency.",
      opportunity: "What if a single data-backed system could turn your best ideas into high-retention video breakdowns and full production scripts?",
      gap: "The trap 95% of founders fall into is relying on raw motivation instead of verified market demand signals.",
      transformation: "In the next 8 minutes, I will show you the exact 3-step architecture elite founders use to build category authority on autopilot.",
      authority: "We analyzed over 4,000 top-performing videos across 40 specialized industry niches.",
      transition: "Let's open the live data and look at the first critical outlier signal right now."
    },
    scriptFramework: "Exposé Deep Dive: Origin -> The Hidden Mechanism -> The Outlier Data Proof -> 3 Actionable Systems",
    callToAction: "Get the Ikigai Leksmedia blueprint in the description to automate your personal niche voice.",
    thumbnailBrief: {
      visualSubject: "Dark minimalist workspace with neon Seoul skyline and blurred revenue graph spike",
      textHook: "$8M AUTHORITY",
      emotion: "Shock / Intrigue",
      colorPalette: "Deep obsidian #08080a with glowing gold #b8965a"
    }
  },
  {
    id: "outlier-2",
    title: "The Tragic Collapse of the 100M Views AI Shorts Factory",
    channelName: "Creator Economics",
    channelSubs: "89K",
    views48h: 310000,
    channelAvg48h: 35000,
    outlierScore: 885,
    hookType: "Downfall / Cautionary Exposé",
    patterns: ["Tragic downfall angle", "Warning to other creators", "YouTube policy shift"],
    thumbnailUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    publishedDaysAgo: 3,
    niche: "Tech & AI Trends",
    originalHook: "Overnight, their analytics went from 40 million views a week to complete zero. In June 2024, YouTube silently updated their algorithmic authenticity guidelines, terminating 12 of the biggest faceless channels in history.",
    remixTitle: "Why 90% of AI Channels Just Got Demonetized (And How to Protect Your Brand)",
    remixHook7Step: {
      patternInterrupt: "If your AI scripts sound like generic ChatGPT robotic bullet points, your channel is on borrowed time.",
      mirrorViewer: "You built your channel to escape the 9-to-5, but waking up to a surprise YouTube demonetization email is your worst nightmare.",
      opportunity: "There is a bulletproof way to build automated content that passes every human authenticity audit with flying colors.",
      gap: "Generic AI tools churn out synthetic slop with telltale colons and empty buzzwords like 'game-changing' that YouTube algorithms now actively suppress.",
      transformation: "Here is the exact anti-AI audit protocol extracted from 4,000 real viral scripts that keep channels monetized forever.",
      authority: "Tested across our Leksmedia network with zero algorithm strikes in 24 months.",
      transition: "Let's break down the 5 banned AI phrases you must delete from your scripts immediately."
    },
    scriptFramework: "Investigation / Warning: The Crash -> Algorithmic Mechanics -> Safe Human-in-the-Loop Protocol",
    callToAction: "Check your own scripts with our built-in Authenticity Audit tool before publishing your next video.",
    thumbnailBrief: {
      visualSubject: "Red demonetization badge over analytics chart with contrasting gold security shield",
      textHook: "AUDIT FAILED?",
      emotion: "Urgency / High Stakes",
      colorPalette: "Crimson warning red and metallic matte gold"
    }
  },
  {
    id: "outlier-3",
    title: "How a 12-Minute YouTube Breakdown Signs $25k Clients with Zero Ads",
    channelName: "Founder Media Labs",
    channelSubs: "24.1K",
    views48h: 142000,
    channelAvg48h: 12000,
    outlierScore: 1183,
    hookType: "Contrarian Conversion Formula",
    patterns: ["Asymmetric deal size ($25k)", "Low view count leverage", "High-retention client acquisition"],
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    publishedDaysAgo: 1,
    niche: "YouTube Strategy & Consulting",
    originalHook: "Nobody buys high-ticket advisory from a 30-second TikTok dance. While most agencies burn $10,000 a month on cold ad spend, this 12-minute breakdown generated $280,000 in pipeline with only 1,800 views.",
    remixTitle: "The High-Retention YouTube Funnel That Signs Enterprise Retainers from Small Audiences",
    remixHook7Step: {
      patternInterrupt: "Stop chasing millions of passive YouTube views that never convert into actual revenue.",
      mirrorViewer: "You are spending days editing videos, but your calendar is empty with zero qualified inbound calls.",
      opportunity: "What if you engineered an 8–12 minute video script specifically around high-retention problem solving?",
      gap: "Most creators optimize for empty algorithmic clicks instead of building category authority that attracts high-paying buyers.",
      transformation: "I will show you the exact 7-step retention script architecture that turns YouTube attention into a high-ticket client engine.",
      authority: "Verified across 4,000+ viral outlier scripts and over $20M in client pipeline generated.",
      transition: "Here is step number one: The Retention Pattern Interrupt that hooks decision-makers in the first 5 seconds."
    },
    scriptFramework: "Framework Breakdown: Vanity Metrics vs Inbound Pipeline -> 7-Step Script Architecture -> High-Ticket Conversion",
    callToAction: "Use the Long-Form Script Studio in your dashboard to generate this complete production script.",
    thumbnailBrief: {
      visualSubject: "Side-by-side comparison of empty calendar vs stacked $25k client notifications with YouTube retention curve",
      textHook: "12 MINS = $25K",
      emotion: "Curiosity / High Value",
      colorPalette: "Obsidian black and warm gold glow"
    }
  },
  {
    id: "outlier-4",
    title: "The Mysterious Disappearance of the Crypto Kingpin Who Vanished with $400M",
    channelName: "Cold Case Archives",
    channelSubs: "112K",
    views48h: 620000,
    channelAvg48h: 68000,
    outlierScore: 911,
    hookType: "In Media Res Unsolved Mystery",
    patterns: ["Massive financial stakes ($400M)", "Unsolved vanishing", "Fast cinematic tension"],
    thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    publishedDaysAgo: 4,
    niche: "True Crime & Documentary",
    originalHook: "On a rainy Tuesday night in Lisbon, 31-year-old Roman Miller checked into the Ritz Hotel with two encrypted laptops and a briefcase containing four cold storage hardware wallets. By dawn, the room was empty, the cameras were looped, and 400 million dollars in client funds had evaporated into the blockchain.",
    remixTitle: "The $400M Vanishing Act: The Crime That Broke Every Digital Forensic Tool",
    remixHook7Step: {
      patternInterrupt: "You can erase your browser history in three clicks, but how do you erase an entire human being holding $400 million in cold hard crypto?",
      mirrorViewer: "We love a good mystery because it reminds us that despite all modern surveillance, someone can still outsmart the system.",
      opportunity: "What forensic investigators uncovered six months later shocked Interpol and changed offshore banking regulations forever.",
      gap: "The official police report claimed it was an inside job, but private blockchain trackers discovered a much darker digital footprint.",
      transformation: "In this documentary deep dive, you will follow the unsealed server logs, the fake passports, and the single transaction that gave him away.",
      authority: "Declassified court documents and on-chain blockchain forensic data verified by three independent analysts.",
      transition: "Let's rewind back to October 14th, at the Lisbon seaport terminal."
    },
    scriptFramework: "Cinematic True Crime: The Incident -> The Investigation -> The Plot Twist -> The Chilling Conclusion",
    callToAction: "Subscribe for more declassified financial true crime investigations every Friday.",
    thumbnailBrief: {
      visualSubject: "Shadowy figure walking through Lisbon mist with red blockchain cryptographic lines",
      textHook: "VANISHED $400M",
      emotion: "Chilling Suspense",
      colorPalette: "Dark cold steel grey with neon amber highlights"
    }
  }
];

export const NICHE_SCRIPTS: NicheScript[] = [
  {
    id: "niche-crime",
    niche: "True Crime & Forensic Mystery",
    title: "The Phantom of Lisbon: The Heist That Stunned Interpol",
    hookType: "In Media Res + High Stakes Mystery",
    productionScript: {
      hook: "[VISUAL: Aerial rain-soaked Lisbon coastline, slow zoom in]\n[SOUND: Distant thunder, quiet heartbeat synth]\nFour hours later, he walked out the service elevator with three encrypted hardware wallets and was never seen again.\n[CLIP: Surveillance footage timestamp 03:41 AM]\n[TEXT ON SCREEN: October 14 | $400,000,000 Missing]\nNo alarm sounded. No security guard turned their head.",
      brollCues: ["[VISUAL: Rainy cobblestone streets]", "[B-ROLL: Server racks flashing green to red]", "[CLIP: Unsealed Interpol bulletin]"],
      timestamps: "0:00 - 0:45 (Hook) | 0:45 - 2:30 (The Setup) | 2:30 - 6:00 (The Twist)",
      body: "To understand how Roman Miller pulled off the cleanest financial vanishing act in modern history, you have to look at the offshore shell companies he created six months before stepping foot in Portugal..."
    },
    antiSlopAudit: {
      passed: true,
      colonsRemoved: 4,
      spokenCoffeeShopScore: 98,
      feedback: "Natural spoken cadence. Zero buzzword filler like 'let that sink in'. Passes 100% human authenticity criteria."
    }
  },
  {
    id: "niche-celeb",
    niche: "Celebrity & Creator Documentary",
    title: "How an Unfiltered Teenager Built a $5B YouTube Toy Kingdom",
    hookType: "Greatest Hits + Asymmetric Scale Contrast",
    productionScript: {
      hook: "[VISUAL: Flashing paparazzi flashbulbs, fast cuts of toy store aisles]\n[TEXT ON SCREEN: 12 Years Old | $5,000,000,000 Net Worth]\nUnboxing plastic toys and eating gummy candies on a living room rug.\n[B-ROLL: Private jet interior, luxury estate gates]\nThese simple afternoon activities turned an ordinary toddler into a five-billion-dollar empire before he even finished middle school.",
      brollCues: ["[CLIP: 2015 first viral upload]", "[B-ROLL: Walmart toy aisle branded displays]", "[VISUAL: Forbes magazine cover photoshoot]"],
      timestamps: "0:00 - 0:50 (Hook) | 0:50 - 3:15 (The First Million) | 3:15 - 7:00 (The Corporate Machine)",
      body: "In 2015, Ryan was just three years old when his mother held up a smartphone to record him picking a Lego train at Target. Nobody in that household could have predicted that within five years, major retail giants would be licensing his face across 50,000 stores nationwide."
    },
    antiSlopAudit: {
      passed: true,
      colonsRemoved: 3,
      spokenCoffeeShopScore: 96,
      feedback: "Human conversational delivery without robotic fragments."
    }
  },
  {
    id: "niche-tech",
    niche: "AI Agents & Autonomous Tech",
    title: "Why Silicon Valley Quietly Replaced Junior Engineers With AI Agents",
    hookType: "Contrarian Industry Shift",
    productionScript: {
      hook: "[VISUAL: Empty modern open-plan tech office in San Francisco]\n[TEXT ON SCREEN: 73% Engineering Reduction]\nLast Monday, a fintech startup in downtown San Francisco shipped 42,000 lines of production code without a single junior engineer writing a line.\n[CLIP: Terminal cursor executing automated PR merges]\nWhile public headlines still debate if AI is useful, the biggest venture-backed firms have already restructured their entire hiring roadmap.",
      brollCues: ["[VISUAL: GitHub action graphs passing]", "[B-ROLL: Silicon Valley coffee shop engineers]", "[VISUAL: Venture capital term sheet signature]"],
      timestamps: "0:00 - 0:40 (Hook) | 0:40 - 2:50 (The Secret Agent Stack) | 2:50 - 5:40 (The New Creator)",
      body: "The change did not happen with a grand announcement. It happened with small script automations that gradually swallowed code review, documentation, database migrations, and frontend deployment..."
    },
    antiSlopAudit: {
      passed: true,
      colonsRemoved: 2,
      spokenCoffeeShopScore: 99,
      feedback: "Eliminated buzzwords 'revolutionary' and 'game-changing'. Clean flow."
    }
  },
  {
    id: "niche-finance",
    niche: "Personal Finance & Creator Wealth",
    title: "The $10M Solopreneur Formula: 1 Creator, 0 Employees, 85% Margins",
    hookType: "Asymmetric Leverage & Margin Paradox",
    productionScript: {
      hook: "[VISUAL: Clean Nordic minimalist home office, MacBook open on balcony]\n[TEXT ON SCREEN: 1 Person | $10,000,000 Revenue | 85% Margin]\nHe runs an eight-figure business from a kitchen table with zero employees and zero office rent.\n[CLIP: Stripe dashboard refreshing live payouts]\nFor decades, business schools taught that scaling revenue required scaling payroll. This one creator proved that model completely obsolete.",
      brollCues: ["[VISUAL: Solo creator writing in notebook]", "[B-ROLL: Automated customer checkout flow]", "[VISUAL: Tokyo quiet streets at sunrise]"],
      timestamps: "0:00 - 0:45 (Hook) | 0:45 - 3:00 (The Productized Service) | 3:00 - 6:30 (The Flywheel)",
      body: "When you analyze his actual revenue streams, you realize something fascinating. He does not sell hourly consulting. He built an automated media funnel where YouTube captures abnormal organic demand, high-ticket productized offers convert clients, and digital templates create recurring margin..."
    },
    antiSlopAudit: {
      passed: true,
      colonsRemoved: 1,
      spokenCoffeeShopScore: 97,
      feedback: "Direct, punchy statement without clichés."
    }
  }
];

export interface IkigaiBlueprint {
  passion: string;
  skills: string;
  mission: string;
  vocation: string;
  brandPositioning: string;
  idealCustomerAvatar: {
    avatarName: string;
    targetRole: string;
    corePainPoints: string[];
    primaryGoals: string[];
    dominantMindset: string;
  };
  brandVoiceAndTone: {
    archetype: string;
    writingStyle: string;
    doRules: string[];
    dontRules: string[];
  };
  contentPillars: Array<{
    number: string;
    title: string;
    description: string;
    viralTopics: string[];
  }>;
}

export function generateSampleBlueprint(
  passion = "AI automations, video production, tech minimalism",
  skills = "Scriptwriting, systems architecture, digital storytelling",
  mission = "Freeing creators from manual burnout through automated content engines",
  vocation = "Productized AI software tools, digital templates, recurring subscriptions, high-value B2B solutions"
): IkigaiBlueprint {
  const primarySkill = skills.split(",")[0]?.trim() || "Systems Architecture";
  const primaryPassion = passion.split(",")[0]?.trim() || "Creative Engineering";
  const cleanMission = mission.replace(/^(to|freeing|helping|building|empowering)\s+/i, "").trim() || "High-leverage outcomes";
  const primaryVocation = vocation.split(",")[0]?.trim() || "Productized High-Margin Software";

  const brandPositioning = `The ${primarySkill} & ${primaryPassion} Specialist who helps ambitious operators achieve freedom by ${cleanMission.toLowerCase()} through ${primaryVocation.toLowerCase()}.`;

  return {
    passion,
    skills,
    mission,
    vocation,
    brandPositioning,
    idealCustomerAvatar: {
      avatarName: "High-Intent Operator & Client",
      targetRole: `High-value clients seeking ${primaryVocation.toLowerCase()}`,
      corePainPoints: [
        `Wasting 15+ hours weekly without a scalable system for ${primaryPassion.toLowerCase()}`,
        "Struggling to articulate clear differentiation in a crowded market",
        "Tired of generic advice and inconsistent pipeline results"
      ],
      primaryGoals: [
        `Automate consistent client acquisition and category dominance in ${primaryPassion.toLowerCase()}`,
        `Deploy high-margin ${primaryVocation.toLowerCase()} with zero operational burnout`,
        "Build a recognizable, data-backed personal authority engine"
      ],
      dominantMindset: "Value-driven, pragmatic, respects systems over raw hustle, hates generic marketing fluff."
    },
    brandVoiceAndTone: {
      archetype: "The Master Craftsman & Data-Backed Architect",
      writingStyle: "Calm, conversational, highly specific, zero-fluff, driven by real metrics and lived operational experience.",
      doRules: [
        "Speak like a senior friend sharing insider discoveries over coffee",
        "Back up every insight with specific numbers, real timelines, or direct case studies",
        "Use active verbs and rhythmic, natural sentence structures"
      ],
      dontRules: [
        "Never use buzzwords like 'game-changing', 'revolutionary', or 'let that sink in'",
        "Never post generic AI bullet-point lists with zero context or personal friction",
        "Never write corporate jargon or speak down to the audience"
      ]
    },
    contentPillars: [
      {
        number: "01",
        title: `${primaryPassion} Insights`,
        description: `Deep-dive analyses and teardowns of real market demand in ${primaryPassion.toLowerCase()}.`,
        viralTopics: [
          `The Unseen Bottleneck in ${primaryPassion} (And How to Fix It in 48 Hours)`,
          `Why 90% of Approaches to ${primaryPassion} Fail Before Day 30`,
          `3 Case Studies of High-Performing Breakouts in ${primaryPassion}`
        ]
      },
      {
        number: "02",
        title: `${primarySkill} Systems`,
        description: `Actionable methodologies, frameworks, and step-by-step blueprints for ${primarySkill.toLowerCase()}.`,
        viralTopics: [
          `The 15-Minute Daily Framework for ${primarySkill}`,
          `How to Eliminate 80% of Manual Waste Using Systematic Workflows`,
          `From Theory to Execution: The Clean Implementation Protocol`
        ]
      },
      {
        number: "03",
        title: "Category Authority & Market Shift",
        description: `Contrarian takes, perspective shifts, and thought leadership that sparks executive conversations.`,
        viralTopics: [
          `Why Traditional Advice on ${primaryPassion} Is Outdated in 2026`,
          `The Single Metric Every Serious Operator Should Track Weekly`,
          `How Quiet Specialists Out-Compete Loud Generalists Every Time`
        ]
      },
      {
        number: "04",
        title: `Monetization & ${primaryVocation}`,
        description: `Sustainable commercial leverage, pricing power, and scalable productized delivery.`,
        viralTopics: [
          `How to Package Your Expertise Into ${primaryVocation}`,
          `The High-Margin Architecture for Solo Operators`,
          `Why Inbound Authority Beats Cold Outreach by 10x`
        ]
      }
    ]
  };
}

export interface LinkedInPostOutput {
  format: "Story" | "Listicle" | "Framework" | "Contrarian" | "Data Insight" | "Quick Win";
  emoji: string;
  title: string;
  hook: string;
  body: string;
  cta: string;
  characterCount: number;
  aiImagePrompt: string;
}

export function generateLinkedInPosts(sourceUrlOrTopic = "https://youtube.com/watch?v=sample-viral-video"): LinkedInPostOutput[] {
  // Extract or clean topic from URL or text
  let topic = sourceUrlOrTopic.trim();
  if (topic.includes("youtube.com") || topic.includes("youtu.be") || topic.includes("http")) {
    try {
      const url = new URL(topic);
      const v = url.searchParams.get("v");
      const pathParts = url.pathname.split("/").filter(Boolean);
      topic = v || pathParts[pathParts.length - 1] || "Viral Content Strategy";
      topic = topic.replace(/[-_]/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    } catch {
      topic = "High-Retention Content Strategy";
    }
  }

  if (!topic || topic.length < 3 || topic.startsWith("Http")) {
    topic = "High-Retention Content Strategy";
  }

  const posts: LinkedInPostOutput[] = [
    {
      format: "Story",
      emoji: "📖",
      title: `The Vulnerable Origin Breakdown (${topic})`,
      hook: `3 years ago, I had zero leverage with ${topic}.\n\nYesterday, our automated system generated qualified inbound opportunities in 25 minutes.\n\nHere is what changed:`,
      body: `When I started out, I believed the myth that more hours equaled better results.\n\nI was grinding late into the night, guessing what people wanted, and burning out every quarter.\n\nThe breakthrough didn't come from working harder.\n\nIt came when I stopped guessing and started analyzing real Outlier signals:\n1. Tracking abnormal demand spikes before writing a single word\n2. Deconstructing what actually held attention in the first 30 seconds\n3. Delivering clear, non-negotiable value in ${topic}.\n\nReal authority isn't about bragging. It's about an audience discovery system.`,
      cta: `Drop a comment with 'SYSTEM' and I'll send you our complete step-by-step workflow for ${topic}.`,
      characterCount: 0,
      aiImagePrompt: `Cinematic editorial photo of a focused creator analyzing data monitors in an obsidian minimalist office, warm metallic gold accents, shot on Leica 35mm lens`
    },
    {
      format: "Listicle",
      emoji: "📋",
      title: `The 5 Non-Negotiable Rules of ${topic}`,
      hook: `90% of attempts at ${topic} fail within the first month.\n\nThe 10% who build lasting category authority follow these 5 rules:`,
      body: `1. The 48-Hour Velocity Rule\nIf interest spikes 3x above average in the first 48 hours, double down immediately.\n\n2. The Anti-Slop Test\nDelete robotic buzzwords like 'game-changing' and syncopated colons. Speak naturally.\n\n3. One Core Insight, Multiple Angles\nA single winning thesis contains an educational breakdown, a contrarian perspective, and a direct conversion asset.\n\n4. Clarity Over Production Hype\nPeople tolerate simple formatting. They immediately abandon confusing, bloated ideas.\n\n5. Sustainable Leverage\nBuild systems that compound over months instead of burning out on daily hamster-wheel volume.`,
      cta: `Which of these 5 rules makes the biggest difference in your workflow?`,
      characterCount: 0,
      aiImagePrompt: `Minimalist dark luxury typography poster with gold indicators 01 to 05, subtle geometric grain, clean architectural layout`
    },
    {
      format: "Framework",
      emoji: "⚙️",
      title: `The Systematic Framework for ${topic}`,
      hook: `Most people treat ${topic} like random guesswork.\n\nHere is the repeatable 4-step framework we use to guarantee results:`,
      body: `Step 1: Signal Detection — Identify abnormal market interest before creating anything.\nStep 2: The Pattern Interrupt — Challenge the default assumption in your first line.\nStep 3: The Gap — Explain why conventional methods fail 95% of people.\nStep 4: The Actionable Blueprint — Give the exact implementation sequence with zero fluff.\n\nWhen you build with architecture instead of mood, consistency takes care of itself.`,
      cta: `Save this post so you have the framework ready next time you execute.`,
      characterCount: 0,
      aiImagePrompt: `Precision architectural blueprint diagram with gold circuit pathways against dark obsidian slate, high resolution 3D render`
    },
    {
      format: "Contrarian",
      emoji: "⚡",
      title: `The Unpopular Truth About ${topic}`,
      hook: `Unpopular opinion: Most conventional advice regarding ${topic} is completely backwards.`,
      body: `The industry tells you to 'just keep publishing' and 'wait your turn'.\n\nSo operators churn out mediocre, repetitive platitudes and wonder why engagement is flat.\n\nHere is the reality:\nHigh-caliber clients and decision-makers don't care about frequency. They care about depth and distinct perspective.\n\nOne masterfully engineered insight into ${topic} will outperform 50 superficial posts every single time.\n\nStop optimizing for sheer volume.\nStart optimizing for signal.`,
      cta: `Do you agree, or do you believe raw volume still wins? Let's discuss below.`,
      characterCount: 0,
      aiImagePrompt: `High contrast black and white portrait with sharp metallic gold beam cutting through darkness, fine art photography style`
    },
    {
      format: "Data Insight",
      emoji: "📊",
      title: `The Outlier Data Behind ${topic}`,
      hook: `We analyzed the numbers across hundreds of top performers in ${topic}.\n\nRaw vanity metrics lie. Velocity and retention reveal the truth.`,
      body: `Here is the formula we use to identify breakout performance:\nOutlier Score = (Performance in 48h ÷ Baseline 48h Average) × 100\n\n• Baseline Score (100): Expected performance\n• Strong Signal (200+): Meaningful market resonance\n• Outlier Breakout (500+): Algorithmic compounding\n\nWhen you see a 500+ outlier on an emerging account, that's proof of untapped market demand in ${topic}.`,
      cta: `Want to run your own metrics through the Outlier calculator? Try it on our dashboard.`,
      characterCount: 0,
      aiImagePrompt: `Modern financial analytics graph with glowing gold vector curve ascending on obsidian frosted glass, cinematic lighting`
    },
    {
      format: "Quick Win",
      emoji: "🎯",
      title: `The 3-Minute Polish Trick for ${topic}`,
      hook: `Here is a 3-minute self-audit to instantly improve your output in ${topic}:`,
      body: `Before you publish anything, do this:\n\nRead your opening paragraph aloud at a normal conversational pace.\n\nIf you pause, trip over syllables, or sound like a corporate press release, delete and simplify.\n\nTurn:\n'Utilizing state-of-the-art methodology to maximize synergies.'\n\nInto:\n'Here is what actually worked when we tested it with real users.'\n\nNatural human clarity always wins.`,
      cta: `Try this 3-minute test on your latest draft today and see the difference.`,
      characterCount: 0,
      aiImagePrompt: `Close-up photograph of an elegant brass fountain pen on dark slate notebook, warm ambient gold lighting, shallow depth of field`
    }
  ];

  return posts.map((p) => ({
    ...p,
    characterCount: (p.hook + "\n\n" + p.body + "\n\n" + p.cta).length
  }));
}
