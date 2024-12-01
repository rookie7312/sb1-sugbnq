export interface EmojiData {
  id: string;
  emoji: string;
  keyword: string;
  description: string;
  category: 'social' | 'expressions' | 'symbols' | 'art' | 'nature' | 'objects';
  preview?: string;
  isRepeated?: boolean;
}