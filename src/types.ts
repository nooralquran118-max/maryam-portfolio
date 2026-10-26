export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  liveUrl?: string;
  displayUrl?: string;
  image: string;
  description: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  isPrimary?: boolean;
}

export interface SkillPillar {
  id: string;
  title: string;
  role: string;
  tagline: string;
  description: string;
  coreCapabilities: string[];
  metrics: string;
  glowColor: string;
  iconName: string;
  sampleArtifactTitle: string;
  sampleArtifactType: 'prompt' | 'code' | 'content';
  sampleArtifactContent: string;
}

export interface TechTool {
  name: string;
  category: 'frontend' | 'ai' | 'design' | 'workflow';
  level: string;
  highlight: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  metric: string;
}
