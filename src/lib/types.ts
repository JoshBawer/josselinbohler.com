export type Locale = 'en' | 'fr';
export type ProjectStatus = 'Published' | 'Prototype' | 'Internal tool' | 'Archived';

export interface ProjectCaseStudy {
  slug: string;
  locale: Locale;
  title: string;
  eyebrow: string;
  summary: string;
  status: ProjectStatus;
  year: string;
  role: string;
  problem: string;
  approach: string[];
  outcome: string;
  stack: string[];
  proofs: Array<{ value: string; label: string }>;
  cover: string;
  coverAlt: string;
  featured: boolean;
  order: number;
  links?: Array<{ label: string; url: string; kind: 'github' | 'external' }>;
}

export interface ExperienceEntry {
  id: string;
  locale: Locale;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  contexts?: string[];
  order: number;
}

export interface Insight {
  slug: string;
  locale: Locale;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
}

