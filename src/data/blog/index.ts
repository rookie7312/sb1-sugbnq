import { EmojiPost } from './types/blog';
import { heartEmojiPost } from './posts/heart-emoji';
import { iLoveYou10000Post } from './posts/i-love-you-10000';

export const blogPosts: EmojiPost[] = [
  heartEmojiPost,
  iLoveYou10000Post,
];

export const getBlogPost = (id: string): EmojiPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getRecentPosts = (limit: number = 5): EmojiPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.schema.datePublished).getTime() - new Date(a.schema.datePublished).getTime())
    .slice(0, limit);
};

export const getRelatedPosts = (currentPost: EmojiPost, limit: number = 3): EmojiPost[] => {
  return blogPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.keywords.some(keyword => currentPost.keywords.includes(keyword)) ||
      post.relatedEmojis.some(emoji => currentPost.relatedEmojis.includes(emoji))
    )
    .slice(0, limit);
};