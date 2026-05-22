/**
 * Core Type Definitions for Leksmedia Portfolio
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  details: string;
  priceEstimate: string;
  deliveryTime: string;
  features: string[];
  specs: { [key: string]: string };
}

export type NexusShapeType = 'AI_SYNAPSE' | 'MEDIA_MATRIX' | 'GRAVITY_SPIRAL';

export interface NexusConfig {
  shape: NexusShapeType;
  particleCount: number;
  rotationSpeed: number;
  colorTheme: 'cyan' | 'purple' | 'emerald' | 'gold';
  glowingCore: boolean;
}

export interface BriefInput {
  niche: string;
  contentType: 'shorts' | 'full_production' | 'script_blueprint' | 'ai_avatar';
  tone: string;
  duration: number; // in seconds
  idealAudience: string;
}

export interface GeneratedBrief {
  titleIdea: string;
  hook: string;
  scripts: Array<{
    scene: number;
    visual: string;
    voiceover: string;
    promptSuggestion: string;
  }>;
  seoOptimizations: string[];
  estimatedCostRange: string;
}
