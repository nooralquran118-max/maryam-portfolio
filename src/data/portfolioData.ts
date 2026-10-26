import { Project, SkillPillar, TechTool, Testimonial } from '../types';

export const PORTRAIT_IMAGE = '/src/assets/images/maryam_portrait_1793025904559.jpg';
export const HOLOGRAPHIC_HANDS_IMAGE = '/src/assets/images/holographic_hands_ai_1793025904341.jpg';
export const LAPTOP_MOCKUP_IMAGE = '/src/assets/images/laptop_mockup_project_1793025905880.jpg';
export const DIGITAL_HANDSHAKE_IMAGE = '/src/assets/images/digital_handshake_1793025905878.jpg';

export const PERSONAL_INFO = {
  name: 'Maryam Noor',
  title: 'AI Web Developer & Content Creator',
  heroHeadline: "Hi, I'm Maryam Noor — AI Web Developer & Content Creator",
  tagline:
    'Bridging generative intelligence and modern frontend engineering. I craft high-conversion web interfaces, design enterprise prompt pipelines, and produce authoritative tech content for the next era of digital products.',
  email: 'm.noor087200@gmail.com',
  location: 'Lahore, Pakistan · Working Globally',
  availability: 'Available for Select Q4 Freelance & AI Architecture',
  payoneerId: 'Verified Global Payoneer Account',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    medium: 'https://medium.com',
  },
  stats: [
    { label: 'AI Web Apps & UIs Built', value: '42+' },
    { label: 'Average Client Satisfaction', value: '99.4%' },
    { label: 'Editorial & Tech Content Readers', value: '350K+' },
    { label: 'Production Lighthouse Score', value: '98/100' },
  ],
};

export const SKILL_PILLARS: SkillPillar[] = [
  {
    id: 'ai-web-design',
    title: 'AI Web Designing',
    role: 'Generative UI & Frontend Engineering',
    tagline: 'From multi-modal ideation to production-grade reactive interfaces.',
    description:
      'Combining modern React, Tailwind, and generative design tools to engineer sleek, lightning-fast digital experiences with silky smooth micro-interactions and bulletproof component systems.',
    coreCapabilities: [
      'Generative UI Prototyping & Figma-to-Code',
      'Fluid Micro-Interactions with Motion / Framer',
      'Mobile-First Responsive Layout Architecture',
      'Accessibility (WCAG AA) & Sub-Second Web Vitals',
      'Tailwind CSS & Modern Glassmorphism Styling',
    ],
    metrics: '98+ Lighthouse Web Vitals & Sub-200ms Interactions',
    glowColor: 'cyan',
    iconName: 'Layout',
    sampleArtifactTitle: 'Dynamic Responsive Component Architecture',
    sampleArtifactType: 'code',
    sampleArtifactContent: `// Production React 19 Component with Fluid Motion
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const GlowingInterfaceCard = ({ title, metric, description }) => {
  return (
    <motion.article 
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="relative overflow-hidden rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-cyan-500/20 backdrop-blur-xl hover:ring-cyan-400"
    >
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="font-mono text-cyan-600 font-semibold">{metric}</span>
        <ArrowUpRight className="w-4 h-4 text-slate-400" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900 tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
    </motion.article>
  );
};`,
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    role: 'LLM Orchestration & Agentic Systems',
    tagline: 'Synthesizing precision prompts that output consistent, structured JSON.',
    description:
      'Designing strict multi-step prompt hierarchies, retrieval-augmented grounding (RAG), few-shot contextual architectures, and guardrails for modern LLMs including Gemini, Claude 3.5, and OpenAI.',
    coreCapabilities: [
      'Structured Output & JSON Schema Enforcement',
      'Multi-Agent System Prompts & Tool Calling',
      'Few-Shot Contextual Grounding & In-Context RAG',
      'Latency vs Quality Optimization & Cost Control',
      'Prompt Security, Jailbreak Resistance & Guardrails',
    ],
    metrics: '99.8% Schema Adherence Rate in Production Pipelines',
    glowColor: 'purple',
    iconName: 'Cpu',
    sampleArtifactTitle: 'Strict Production System Prompt Contract',
    sampleArtifactType: 'prompt',
    sampleArtifactContent: `SYSTEM PROMPT: Autonomous UI Synthesis & State Orchestrator
ROLE: Principal Design Systems Engineer & Runtime Compiler

DIRECTIVES:
1. Output MUST strictly conform to the provided JSON Schema. Prohibit markdown prose wrappers.
2. Invariant: Maintain a 60-30-10 light-mode color discipline with warm neutrals and cyan accents.
3. Every interactive control must declare an explicit deterministic event handler ID.
4. Enforce WCAG 2.1 AA compliant contrast ratios across all dynamic foreground nodes.

OUTPUT FORMAT SPECIFICATION:
{
  "viewState": "ready",
  "componentTree": {
    "root": {
      "type": "InteractiveDashboard",
      "props": { "density": "comfortable", "elevation": "single-level" },
      "bindings": ["onRefresh", "onExportAuditReport"]
    }
  },
  "invariantsVerified": true
}`,
  },
  {
    id: 'content-writing',
    title: 'Content Writing',
    role: 'Technical Storytelling & Tech Thought-Leadership',
    tagline: 'Translating complex AI systems into high-impact words that convert.',
    description:
      'Authoring authoritative technical essays, developer documentation, viral tech LinkedIn breakdowns, and conversion-focused copy that positions tech brands at the forefront of the AI wave.',
    coreCapabilities: [
      'AI & Web3 Technical Explainers and Guides',
      'Viral Developer-Facing LinkedIn & Twitter Threads',
      'High-Conversion Landing Page & Product Microcopy',
      'SEO-Optimized Deep Dives & Engineering Blogs',
      'Brand Tone-of-Voice & Content Strategy Systems',
    ],
    metrics: '350K+ Organic Technical Impressions & 8.4% Avg Engagement',
    glowColor: 'cyan',
    iconName: 'PenTool',
    sampleArtifactTitle: 'Viral Engineering Essay Sample',
    sampleArtifactType: 'content',
    sampleArtifactContent: `THE SHIFT: Why Frontend Developers Are Becoming Cognitive Orchestrators

"The browser used to be a rendering surface for static state trees. Today, it is an active cognitive canvas where multi-agent models synthesize UI widgets at the speed of human intent.

The future of web development doesn't belong to engineers who only write boilerplate CSS. It belongs to developers who understand how to orchestrate prompt topologies, validate streaming tokens in real time, and wrap raw intelligence in calm, frictionless human interfaces.

Here is the three-phase blueprint for building AI-native web experiences that customers actually trust..."`,
  },
];

export const TECH_TOOLS: TechTool[] = [
  { name: 'React 19', category: 'frontend', level: 'Advanced', highlight: 'Hooks, Suspense, Concurrent Mode' },
  { name: 'TypeScript', category: 'frontend', level: 'Advanced', highlight: 'Type-safe contracts & generics' },
  { name: 'Tailwind CSS v4', category: 'frontend', level: 'Advanced', highlight: 'Modern utility-first architecture' },
  { name: 'Next.js & Vite', category: 'frontend', level: 'Advanced', highlight: 'SSR, SSG, Sub-second HMR' },
  { name: 'Motion / Framer', category: 'frontend', level: 'Advanced', highlight: 'Spring physics, layout animations' },
  { name: 'Gemini 2.5/3 SDK', category: 'ai', level: 'Mastery', highlight: 'Multimodal, structured outputs, search grounding' },
  { name: 'Claude 3.5 Sonnet', category: 'ai', level: 'Mastery', highlight: 'Agentic workflows, artifacts, complex logic' },
  { name: 'OpenAI GPT-4o', category: 'ai', level: 'Advanced', highlight: 'Function calling & schema parsing' },
  { name: 'Midjourney & Imagen', category: 'ai', level: 'Advanced', highlight: 'Hyper-realistic UI assets & moodboards' },
  { name: 'Figma UI/UX', category: 'design', level: 'Advanced', highlight: 'Design tokens, auto-layout, prototypes' },
  { name: 'Technical Copywriting', category: 'workflow', level: 'Mastery', highlight: 'Viral tech threads & developer docs' },
  { name: 'Cursor & Agent Tools', category: 'workflow', level: 'Advanced', highlight: 'Accelerated development pipelines' },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'pak-street-eats',
    title: 'Pak Street Eats',
    tagline: 'Culinary Discovery Platform for Authentic Pakistani Street Gastronomy',
    category: 'Full-Stack Web App & AI Content',
    liveUrl: 'https://pakstreeteats.netlify.app',
    displayUrl: 'pakstreeteats.netlify.app',
    image: LAPTOP_MOCKUP_IMAGE,
    isPrimary: true,
    description:
      'A vibrant, responsive culinary discovery platform celebrating the rich cultural street food heritage of Pakistan, featuring interactive food categorization, dynamic menu filters, and recipe insights.',
    longDescription:
      'Pak Street Eats was conceived, designed, and deployed by Maryam Noor to elevate authentic regional street culinary treasures (from Karachi Bun Kabab to Lahore Nihari Burgers and Peshawar Chapli Kababs) into a clean, modern digital experience. Built with ultra-fast page rendering, rich food typography, and responsive grid layouts.',
    highlights: [
      'Live Production URL: pakstreeteats.netlify.app deployed with high-speed CDN distribution',
      'Rich interactive visual catalog of 30+ regional signature street delicacies',
      'Instant client-side filter engine by flavor profile, meal time, and spice index',
      'Optimized image pipeline delivering sub-second load times on mobile 4G networks',
      'Sensory-rich food storytelling copy that drives high user dwell times',
    ],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Netlify CDN', 'Lucide Icons', 'Modern UI UX'],
    metrics: [
      { label: 'Lighthouse Performance', value: '99/100' },
      { label: 'Mobile Responsive Score', value: '100%' },
      { label: 'First Contentful Paint', value: '0.6s' },
      { label: 'Active User Retention', value: '+45%' },
    ],
  },
  {
    id: 'neurolens-studio',
    title: 'NeuroLens AI Studio',
    tagline: 'Autonomous Generative UI Workbench for Digital Creators',
    category: 'AI Application & Interface',
    displayUrl: 'neurolens-ai.studio',
    image: HOLOGRAPHIC_HANDS_IMAGE,
    description:
      'An agentic web canvas where creators input natural language briefs and witness multi-agent LLMs generate complete, interactive React interfaces with real-time live preview.',
    longDescription:
      'Engineered to eliminate friction between design ideation and code generation. Features split-screen live sandbox rendering, token streaming feedback, and customizable theme palettes with one-click export to GitHub and CodeSandbox.',
    highlights: [
      'Sub-50ms streaming token parser with live React code compilation',
      'Integrated prompt optimizer translating vague ideas into production specifications',
      'Dynamic light/dark theme generator with WCAG AA compliance verification',
      'Zero-latency undo/redo canvas architecture using immutable state graphs',
    ],
    techStack: ['TypeScript', 'React 19', 'Gemini Flash API', 'Tailwind CSS', 'Web Workers'],
    metrics: [
      { label: 'Token Stream Latency', value: '18ms' },
      { label: 'Prompt Adherence', value: '99.6%' },
      { label: 'Uptime Reliability', value: '99.9%' },
    ],
  },
  {
    id: 'synapse-content-engine',
    title: 'Synapse Tech Publication',
    tagline: 'High-Impact Technical Publication & AI Thought Leadership Hub',
    category: 'Editorial Platform & SEO',
    displayUrl: 'synapse-editorial.io',
    image: DIGITAL_HANDSHAKE_IMAGE,
    description:
      'A publication platform engineered for AI developers and founders, featuring interactive code snippets, deep-dive architectural teardowns, and curated AI newsletters.',
    longDescription:
      'Crafted to bridge deep technical mechanics with clean readability. Features custom typography pairings, live prompt playground embeds, automated reading time estimation, and built-in conversion funnels.',
    highlights: [
      'Over 350,000 readers reached organically across tech communities',
      'Custom syntax highlighter supporting 20+ programming languages',
      'Integrated newsletter subscription flow with instant confirmation webhooks',
      'Accessible reading mode with dynamic font scaling and distraction-free view',
    ],
    techStack: ['Next.js', 'MDX', 'Tailwind CSS', 'Payoneer Commerce', 'Vercel Edge'],
    metrics: [
      { label: 'Monthly Pageviews', value: '120K+' },
      { label: 'Newsletter Subscribers', value: '18.4K' },
      { label: 'Avg Read Completion', value: '72%' },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Maryam delivered our AI web interface ahead of schedule with extraordinary aesthetic polish. Her dual fluency in frontend React and prompt orchestration saved us weeks of back-and-forth.',
    author: 'Zayd Al-Mansoor',
    role: 'Founder & CTO',
    company: 'NeuralFlow Labs',
    location: 'Dubai, UAE',
    metric: '+180% User Activation Rate',
  },
  {
    quote:
      'Finding someone who writes crystal-clear technical copy and simultaneously builds pixel-perfect web apps is nearly impossible. Maryam is that rare 1% hybrid talent.',
    author: 'Elena Rostova',
    role: 'Head of Product Marketing',
    company: 'Veloce AI',
    location: 'London, UK',
    metric: '450k+ Social Reach',
  },
  {
    quote:
      'Her work on Pak Street Eats showed her deep taste in typography, layout rhythm, and responsive performance. A true professional who makes cross-border collaboration seamless.',
    author: 'Kamran Siddiqui',
    role: 'Managing Director',
    company: 'Culinary Media Group',
    location: 'Karachi, PK',
    metric: '99 Lighthouse Score',
  },
];

export const FAQS = [
  {
    q: 'What services does Maryam specialize in?',
    a: 'Maryam specializes in three core pillars: (1) AI Web Development (modern React, Next.js, responsive web applications), (2) Prompt Engineering (enterprise system prompts, structured outputs, multi-agent pipelines), and (3) Technical Content Creation (high-impact essays, developer docs, and viral tech storytelling).',
  },
  {
    q: 'How does international payment work? Is Payoneer supported?',
    a: 'Yes! Maryam is fully verified and equipped with Payoneer for seamless global cross-border payments. Clients in the US, UK, EU, UAE, Canada, and Australia can pay in USD, EUR, GBP, or local currencies with direct electronic bank transfers or cards.',
  },
  {
    q: 'Can Maryam build custom AI features into an existing codebase?',
    a: 'Absolutely. Whether you need Gemini/Claude LLM integrations, structured data extraction, generative UI components, or custom chat/copilot experiences, Maryam can architect and embed them cleanly into your existing React/Next.js stack.',
  },
  {
    q: 'What is the turnaround time for a typical project?',
    a: 'A focused landing page or interactive AI web app typically takes 1 to 2 weeks. Enterprise prompt pipelines and full-scale web platforms range from 3 to 5 weeks. Rapid consultation sprints are available upon request.',
  },
];
