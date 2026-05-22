import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';

// Load environment variables for local testing
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware configurations
app.use(express.json());

// Lazy-initialized Gemini client
let geminiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!geminiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
      throw new Error('GEMINI_API_KEY is not defined. Please configure it in your Secrets / Env variables panel.');
    }
    geminiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return geminiClient;
}

// API endpoint: Generate Creative Brief using Gemini 3.5 Flash
app.post('/api/gemini/brief', async (req, res) => {
  try {
    const { niche, contentType, tone, duration, idealAudience } = req.body;

    if (!niche || !contentType || !tone || !idealAudience) {
      res.status(400).json({ error: 'Missing required parameters: niche, contentType, tone, idealAudience' });
      return;
    }

    // Lazy check validation
    const ai = getGeminiClient();

    // Map content style to human readable structures
    const serviceNameMap: { [key: string]: string } = {
      shorts: 'AI Video Creator | Short-Form Content for IG, FB, TikTok, Youtube Shorts',
      full_production: 'Full Video Production (Scripts, Visual Assets, Prompts, Voiceover, SEO)',
      script_blueprint: 'Pre-Production Blueprint: Scripts + Animation Plans + Custom Thumbnails',
      ai_avatar: 'AI Avatar Presentation & Synthetic Voice Cloning Cloned sequences',
    };

    const targetService = serviceNameMap[contentType] || contentType;

    const userPrompt = `
      Create a comprehensive, highly strategic, and highly retentive video brief of ${duration} seconds targeted for "${idealAudience}".
      
      CRITICAL PARAMETERS:
      - Niche/Topic: "${niche}"
      - Content Format Style: "${targetService}"
      - Aesthetic Tone & Mood: "${tone}"
      - Estimated Video Length: ${duration} seconds.
      
      Suggest the structure of storyboard scenes. Break down the entire video duration into several chronological logical scenes (typically 3 to 5 scenes, representing pacing milestones).
      Include precise camera direction tags, visual cues, synthetic voice synthesizers direction and specific high-end midjourney/veo visual AI prompts for generating each scene's visual background.
    `;

    const systemInstruction = `
      You are the AI Creative Director at Leksmedia, an elite multimedia production agency.
      Leksmedia builds high-retention cinematic videos, interactive animations, AI avatares, and pre-production blueprints.
      Generate viral, modern, scroll-stopping hooks and highly detailed chronological scene breakdowns of visual animations and voiceovers in structured valid JSON.
      NEVER reference internal system parameters, port values, or container details in the output. Keep titles human-focused, premium, and compelling.
    `;

    // Query generative model with JSON schemas constraints
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.85,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            titleIdea: {
              type: Type.STRING,
              description: 'A viral, attention-grabbing title idea for the video.',
            },
            hook: {
              type: Type.STRING,
              description: 'The absolute hook: A powerful opening line spoken or shown in the first 3 seconds to ensure 90%+ immediate viewer retention.',
            },
            scripts: {
              type: Type.ARRAY,
              description: 'Chronological storyboard scene cards mapping out the flow of the entire video duration.',
              items: {
                type: Type.OBJECT,
                properties: {
                  scene: {
                    type: Type.INTEGER,
                    description: 'The sequential index number of this storyboard scene (starts at 1).',
                  },
                  visual: {
                    type: Type.STRING,
                    description: 'The cinematic visual action happening on-screen. Include motion tracking, animation assets, camera movements, text overlays, and screen effect directions.',
                  },
                  voiceover: {
                    type: Type.STRING,
                    description: 'The specific spoken narration or presenter line of dialog for this scene.',
                  },
                  promptSuggestion: {
                    type: Type.STRING,
                    description: 'Bespoke, professional Midjourney, DALL-E 3 or VEO prompt specifications to easily generate the high-end visuals described for this specific scene.',
                  },
                },
                required: ['scene', 'visual', 'voiceover', 'promptSuggestion'],
              },
            },
            seoOptimizations: {
              type: Type.ARRAY,
              description: 'Highly searchable tags, key terms, and high-CTR social media hashtags focused on current trends.',
              items: { type: Type.STRING },
            },
            estimatedCostRange: {
              type: Type.STRING,
              description: 'A highly descriptive hypothetical price breakdown statement (e.g. "$400 - $600") based on complexity.',
            },
          },
          required: ['titleIdea', 'hook', 'scripts', 'seoOptimizations', 'estimatedCostRange'],
        },
      },
    });

    const briefText = response.text;
    if (!briefText) {
      throw new Error('Gemini API returned an empty response.');
    }

    const compiledBrief = JSON.parse(briefText);
    res.json({ success: true, brief: compiledBrief });

  } catch (error: any) {
    console.error('Error generating AI brief:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'An error occurred during generative AI brief compilation.',
    });
  }
});

// Configure Vite middleware flow or production static files fallback
async function bootUpServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log('Vite middleware mounted in Development mode.');
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log('Serving compiled static assets from dist folder in Production mode.');
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running successfully at http://0.0.0.0:${PORT}`);
  });
}

bootUpServer();
