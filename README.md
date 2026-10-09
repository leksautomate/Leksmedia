# Leksmedia — The Self-Serve YouTube Personal Brand Operating System

> **The complete YouTube personal brand platform for creators, founders, and engineers.**  
> Define your category of one with the Ikigai blueprint, discover 48-hour breakout outlier opportunities, generate production-ready 8–12 minute video scripts, and connect directly to your agent stack via the Model Context Protocol (MCP).

---

## 🧭 Philosophy: 100% Self-Serve Creator Sovereignty

Leksmedia is **not** an agency, coaching program, or "done-for-you" service. 

We provide the algorithmic intelligence, positioning frameworks, script generation studio, and agent protocols—**you build, calibrate, and scale your personal brand on your own terms.** No waiting on contractors, no manual retainers, and no third-party lock-in.

---

## 🏗️ Architecture Overview

The platform is structured into two synchronized tiers: an interactive, modern **Frontend Application** and a high-throughput, agentic **Backend Intelligence Pipeline**.

```
                           ┌──────────────────────────────────────────────┐
                           │          LEKSMEDIA CREATOR PLATFORM          │
                           └──────────────────────┬───────────────────────┘
                                                  │
                ┌─────────────────────────────────┴─────────────────────────────────┐
                ▼                                                                   ▼
┌───────────────────────────────┐                                   ┌───────────────────────────────┐
│     FRONTEND APPLICATION      │                                   │       BACKEND & MCP STACK     │
│       (Next.js 15 / React 19) │                                   │    (APIs / MCP / Data Engine) │
├───────────────────────────────┤                                   ├───────────────────────────────┤
│ • Landing & Brand Studio      │                                   │ • YouTube 48h Velocity Engine │
│ • Guided Ikigai Intake Flow   │ <────────── JSON / SSE ─────────> │ • 7-Step Hook Remixer         │
│ • Outlier & Script Dashboard  │                                   │ • 8–12 Min Script Studio Gen  │
│ • Interactive MCP Terminal UI │                                   │ • Model Context Protocol Host │
│ • Enterprise Legal Suite      │                                   │ • Zero Model Training Policy  │
└───────────────────────────────┘                                   └───────────────────────────────┘
                │                                                                   │
                │                                                                   ▼
                │                                                   ┌───────────────────────────────┐
                │                                                   │      EXTERNAL AGENT STACK     │
                │                                                   ├───────────────────────────────┤
                │                                                   │ • Claude Code (CLI)           │
                └────────────────── MCP HTTP SSE ──────────────────>│ • Codex / Cursor / VS Code    │
                                                                    │ • Universal MCP Hosts         │
                                                                    └───────────────────────────────┘
```

---

## 🎨 Frontend Architecture

The frontend is built with **Next.js 15 (App Router)** and styled using custom **Tailwind CSS** tokens following an obsidian (`#08080a`) and champagne gold (`#b8965a`) luxury palette.

### Key Pages & Modules

| Route | File Path | Description |
| :--- | :--- | :--- |
| `/` | [`app/page.tsx`](app/page.tsx) | Complete landing experience featuring the Beams Canvas, 3 system pillars, self-serve workflow, interactive script studio, MCP agent hub, pricing, and FAQ. |
| `/onboarding` | [`app/onboarding/page.tsx`](app/onboarding/page.tsx) | Guided 4-quadrant Ikigai diagnostic (Passion, Skills, Mission, Vocation) with automated category synthesis and avatar generation. |
| `/brand` | [`app/brand/page.tsx`](app/brand/page.tsx) | Deliverables dashboard rendering the Category Positioning Statement, Ideal Customer Avatar (ICA), and 4 Monetization Content Pillars. Supports in-browser editing and JSON/MD export. |
| `/dashboard` | [`app/dashboard/page.tsx`](app/dashboard/page.tsx) | Creator OS hub featuring the live 48-Hour Outlier Velocity Feed, search by niche, 7-step hook breakdown modal, and 3-tier channel diagnostics. |
| `/docs/mcp` | [`app/docs/mcp/page.tsx`](app/docs/mcp/page.tsx) | In-depth technical documentation for developers and agent builders connecting Claude Code, Cursor, and custom MCP clients. |
| `/terms` | [`app/terms/page.tsx`](app/terms/page.tsx) | 11-section enterprise agreement with 100% creator IP ownership, YouTube API compliance, and arbitration governance. |
| `/privacy` | [`app/privacy/page.tsx`](app/privacy/page.tsx) | 12-section GDPR/CCPA privacy policy with YouTube API read-only data disclosures, Google security revoke links, and Zero Model Training Guarantee. |
| `/refund` | [`app/refund/page.tsx`](app/refund/page.tsx) | 8-section billing policy detailing the 14-Day Money-Back Creator Guarantee and 1-click self-serve cancellation via Stripe. |

### UI & Styling System
- **Dynamic Backgrounds:** High-performance HTML5 Canvas gradient beams ([`components/BeamsCanvas.tsx`](components/BeamsCanvas.tsx)).
- **Component System:** Fully accessible modals, copy buttons, tabs, accordions, and script drawers ([`components/NicheScriptStudio.tsx`](components/NicheScriptStudio.tsx)).
- **Favicon & Identity:** Crisp vector SVG squircle ([`public/favicon.svg`](public/favicon.svg)) combined with dynamic Next.js App Router icons ([`app/icon.tsx`](app/icon.tsx)).

---

## ⚙️ Backend & Data Architecture

The backend handles algorithmic scoring, script generation, data ingestion, and agent communication.

### 1. YouTube 48-Hour Outlier Velocity Engine
Rather than chasing vanity metrics, Leksmedia calculates normalized breakout velocity:

$$\text{Outlier Score} = \left(\frac{\text{Views in last 48 hours}}{\text{Channel Average 48h Views}}\right) \times 100$$

- **200+ Score:** High market demand.
- **500+ Score:** Organic algorithmic breakout.
- **Small Creator Bias:** Specifically filters for channels under 50,000 subscribers hitting 500+ outlier scores to isolate true topic demand from existing audience size.
- **Read-Only API Compliance:** Conforms strictly to Google API Services User Data Policy, retrieving only publicly accessible video metrics without requesting private channel administration scopes.

### 2. 7-Step Retention Hook Remixer
Engineered by deconstructing over 4,000 real viral YouTube outlier videos across 40 niches:
1. **Visual Pattern Interrupt:** Disarms immediate scroll instinct in seconds 0–5.
2. **Problem Identification:** Mirrors viewer frustration.
3. **High-Stakes Agitation:** Demonstrates the hidden cost of inaction.
4. **Invalidation of Common Wisdom:** Destroys existing bad advice.
5. **New Paradigm Reveal:** Introduces your unique framework or mechanism.
6. **Concrete Proof Metric:** Validates authority with tangible numbers or evidence.
7. **Video Roadmap Transition:** Outlines the exact agenda to lock watch-time through the 60-second mark.

### 3. Production Script Engine & Anti-Slop Cadence Audit
Generates full-length 8–12 minute YouTube video scripts:
- **Scene-by-Scene Layout:** Clear dialogue, visual B-roll cues, sound effects prompts, and on-screen text instructions.
- **Anti-Slop Cadence Filter:** Eliminates robotic AI cliches, colon-heavy bullet outlines, and corporate jargon in favor of spoken, coffee-shop conversational rhythm.

### 4. Model Context Protocol (MCP) Server
Leksmedia exposes a native MCP server over HTTP SSE at `https://leksmedia.com/api/v1/mcp`:

```typescript
// Exposed Agent Tools
leksmedia_get_outliers    // Query 48h outlier velocity and breakout scores by niche
leksmedia_generate_hook   // Generate 7-step retention hook sequences
leksmedia_write_script    // Output 8–12 min production script with B-roll cues
leksmedia_ikigai_audit    // Synthesize positioning statements and monetization pillars
```

### 5. Content Sovereignty & Zero Model Training Guarantee
- Customer inputs, private Ikigai answers, and unpublished scripts are **never** used to train, retrain, or fine-tune public AI models or foundation training corpuses.
- The creator retains **100% intellectual property ownership** with zero royalties owed to Leksmedia.

---

## 🤖 Connecting to Your Agent Stack via MCP

You can query Leksmedia directly from your preferred AI development environment:

### 1. Claude Code CLI (Anthropic)
Run in your local terminal:
```bash
claude mcp add --transport http leksmedia https://leksmedia.com/api/v1/mcp --header "Authorization: Bearer leks_live_YOUR_API_KEY"
```

Example prompt in Claude Code:
> *"Query Leksmedia for 500+ outlier videos in 'AI Engineering' from the last 48 hours, break down the best hook, and scaffold an 8-minute production script into `./scripts/video-01.md`."*

### 2. Codex / Cursor / VS Code
Add to your project's `.cursor/mcp.json` or IDE MCP settings:
```json
{
  "mcpServers": {
    "leksmedia": {
      "url": "https://leksmedia.com/api/v1/mcp",
      "headers": {
        "Authorization": "Bearer leks_live_YOUR_API_KEY"
      }
    }
  }
}
```

### 3. Universal MCP Host (Desktop & Custom Agents)
Compatible with Claude Desktop, Goose, and custom Python/TypeScript agent frameworks communicating over JSON-RPC 2.0 via standard MCP HTTP SSE transport.

---

## 📂 Project Structure

```
leksmedia/
├── app/
│   ├── admin/whitelist/      # Internal access & license whitelist dashboard
│   ├── brand/                # Deliverables: Category design, ICA & monetization pillars
│   ├── dashboard/            # Creator OS: 48h Outlier Feed, Hook Remixer & Script Hub
│   ├── docs/mcp/             # MCP & Developer Documentation
│   ├── login/                # Authentication & Session Entry
│   ├── onboarding/           # 4-Step Guided Ikigai Questionnaire
│   ├── privacy/              # 12-Section GDPR/CCPA Privacy Policy
│   ├── refund/               # 8-Section Refund & Cancellation Policy
│   ├── terms/                # 11-Section Terms of Service Agreement
│   ├── globals.css           # Design tokens, typography & animation utilities
│   ├── icon.tsx              # Next.js dynamic metadata icon generator
│   ├── layout.tsx            # Root layout, HTML head metadata & favicon bindings
│   └── page.tsx              # Primary landing page, MCP tabbed UI & Script Studio
├── components/
│   ├── BeamsCanvas.tsx       # Animated canvas background gradient beams
│   ├── Footer.tsx            # Global footer with platform, docs, and legal links
│   ├── HeroMockup.tsx        # High-converting UI mockup preview
│   ├── Navbar.tsx            # Global header navigation
│   ├── NicheScriptStudio.tsx # Interactive long-form script generator & cadencing
│   ├── SocialIcons.tsx       # Brand vector icons (YouTube, X, etc.)
│   └── TtsPlayer.tsx         # Voice playback preview component
├── lib/
│   └── creatorData.ts        # Outlier dataset, script schemas, and Ikigai generators
├── public/
│   └── favicon.svg           # Vector squircle favicon with gold monogram
├── skill/                    # Production script formulas, hook swipes & prompt skills
├── next.config.mjs           # Next.js build configuration
├── tailwind.config.ts        # Tailwind typography, animations & color tokens
├── vercel.json               # Vercel deployment framework preset override
└── package.json              # Project dependencies (Next.js 15.3.9, React 19)
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js:** `18.18.0` or later (Node 20+ recommended)
- **npm:** `9.x` or later

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/leksautomate/Leksmedia.git
   cd Leksmedia
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

5. **Build for production:**
   ```bash
   npm run build
   npm run start -- -p 3000
   ```

---

## 🚢 Deploying to Production (Vercel)

The project is pre-configured for instant deployment on [Vercel](https://vercel.com):

1. Push your changes to the `main` branch on GitHub:
   ```bash
   git push origin main
   ```
2. In your Vercel Project Settings:
   - **Framework Preset:** `Next.js`
   - **Build Command:** `npm run build`
   - **Output Directory:** Default (`.next`)
3. Vercel automatically deploys every commit with zero downtime and global edge caching.

---

## 📜 Legal & Policies

- **Terms of Service:** [`/terms`](app/terms/page.tsx)
- **Privacy Policy:** [`/privacy`](app/privacy/page.tsx)
- **Refund Policy:** [`/refund`](app/refund/page.tsx)
- **Developer Protocol:** [`/docs/mcp`](app/docs/mcp/page.tsx)

---

## 📄 License

Proprietary © 2026 Leksmedia. All rights reserved. Built for creators and founders.
