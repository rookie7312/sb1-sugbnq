import { EmojiData } from './types';

export const seoDescription = `
Emoji Collection offers the web's most comprehensive collection of curated emoji combinations for every occasion. 
Our platform features carefully selected emoji packs for birthdays, expressions, love, social media, and more. 
With instant copy functionality and detailed meanings, we make digital communication more expressive and engaging. 
Perfect for social media managers, digital marketers, and anyone looking to enhance their online communication.
`;

export const emojis: EmojiData[] = [
  // Existing collections
  {
    id: 'sad-1000',
    emoji: Array(1000).fill(null).map(() => ['😢', '😭', '😔', '😪', '😥', '😓', '😩', '😫', '🥺', '😿'][Math.floor(Math.random() * 10)]).join(''),
    preview: '😢😭😔😪😥...',
    keyword: '1000 Sad Emojis',
    description: 'Beautiful collection of 1000 sad emojis for expressing emotions.',
    category: 'expressions',
    isRepeated: true
  },
  // New collections
  {
    id: 'clap-1000',
    emoji: '👏'.repeat(1000),
    preview: '👏👏👏...',
    keyword: '1000 Clap Emojis',
    description: 'Express appreciation with 1000 clapping hands emojis.',
    category: 'expressions',
    isRepeated: true
  },
  {
    id: 'star-1000',
    emoji: '⭐'.repeat(1000),
    preview: '⭐⭐⭐...',
    keyword: '1000 Star Emojis',
    description: 'Shine bright with 1000 star emojis.',
    category: 'symbols',
    isRepeated: true
  },
  {
    id: 'moon-1000',
    emoji: '🌙'.repeat(1000),
    preview: '🌙🌙🌙...',
    keyword: '1000 Moon Emojis',
    description: 'Beautiful collection of 1000 crescent moon emojis.',
    category: 'nature',
    isRepeated: true
  },
  {
    id: 'sun-1000',
    emoji: '☀️'.repeat(1000),
    preview: '☀️☀️☀️...',
    keyword: '1000 Sun Emojis',
    description: 'Brighten your day with 1000 sun emojis.',
    category: 'nature',
    isRepeated: true
  },
  {
    id: 'rainbow-1000',
    emoji: '🌈'.repeat(1000),
    preview: '🌈🌈🌈...',
    keyword: '1000 Rainbow Emojis',
    description: 'Add color with 1000 rainbow emojis.',
    category: 'nature',
    isRepeated: true
  },
  {
    id: 'sparkles-1000',
    emoji: '✨'.repeat(1000),
    preview: '✨✨✨...',
    keyword: '1000 Sparkle Emojis',
    description: 'Add magic with 1000 sparkle emojis.',
    category: 'symbols',
    isRepeated: true
  },
  {
    id: 'fire-1000',
    emoji: '🔥'.repeat(1000),
    preview: '🔥🔥🔥...',
    keyword: '1000 Fire Emojis',
    description: 'Light it up with 1000 fire emojis.',
    category: 'symbols',
    isRepeated: true
  },
  {
    id: 'crown-1000',
    emoji: '👑'.repeat(1000),
    preview: '👑👑👑...',
    keyword: '1000 Crown Emojis',
    description: 'Feel royal with 1000 crown emojis.',
    category: 'objects',
    isRepeated: true
  },
  {
    id: 'butterfly-1000',
    emoji: '🦋'.repeat(1000),
    preview: '🦋🦋🦋...',
    keyword: '1000 Butterfly Emojis',
    description: 'Flutter with 1000 butterfly emojis.',
    category: 'nature',
    isRepeated: true
  }
];