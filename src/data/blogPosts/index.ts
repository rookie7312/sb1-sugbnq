import { historyEvolution } from './historyEvolution';
import { psychology } from './psychology';
import { workplaceImpact } from './workplaceImpact';
import { culturalDifferences } from './culturalDifferences';
import { mentalHealth } from './mentalHealth';
import { socialMedia } from './socialMedia';
import { marketing } from './marketing';
import { future } from './future';
import { relationships } from './relationships';
import { education } from './education';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
  videoUrl?: string;
  relatedPosts: Array<{ id: string; title: string }>;
  faqs: Array<{ question: string; answer: string }>;
  tableData: {
    headers: string[];
    rows: (string | number)[][];
  };
}

export const blogPosts: BlogPost[] = [
  historyEvolution,
  psychology,
  workplaceImpact,
  culturalDifferences,
  mentalHealth,
  socialMedia,
  marketing,
  future,
  relationships,
  education
];