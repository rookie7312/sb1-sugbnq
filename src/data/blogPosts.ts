import { BlogPost } from './types';
import { historyEvolution } from './blogPosts/historyEvolution';
import { psychology } from './blogPosts/psychology';
import { workplaceImpact } from './blogPosts/workplaceImpact';
import { culturalDifferences } from './blogPosts/culturalDifferences';
import { mentalHealth } from './blogPosts/mentalHealth';

export const blogPosts: BlogPost[] = [
  historyEvolution,
  psychology,
  workplaceImpact,
  culturalDifferences,
  mentalHealth
];