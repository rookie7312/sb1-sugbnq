import { EmojiPost } from '../data/types/blog';

export const generateMetaDescription = (post: EmojiPost): string => {
  return `Learn about the ${post.emoji} ${post.title} emoji - history, meaning, usage across platforms, and cultural significance. Updated guide with examples and best practices for ${new Date().getFullYear()}.`.slice(0, 160);
};

export const generateSchemaMarkup = (post: EmojiPost) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": post.images[0]?.url,
    "datePublished": post.schema.datePublished,
    "dateModified": post.schema.dateModified,
    "author": {
      "@type": "Person",
      "name": post.schema.author.name,
      "url": post.schema.author.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "Emoji Collection",
      "url": "https://emojicollection.net"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://emojicollection.net/emoji/${post.slug}`
    }
  };
};

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const getRelatedPosts = (currentPost: EmojiPost, allPosts: EmojiPost[]): EmojiPost[] => {
  return allPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.keywords.some(keyword => currentPost.keywords.includes(keyword)) ||
      post.relatedEmojis.includes(currentPost.emoji)
    )
    .slice(0, 5);
};