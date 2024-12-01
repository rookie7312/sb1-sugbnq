export interface EmojiPost {
  id: string;
  emoji: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  relatedEmojis: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  keywords: string[];
  platforms: {
    name: string;
    appearance: string;
    interpretation: string;
  }[];
  history: {
    year: number;
    event: string;
  }[];
  schema: {
    datePublished: string;
    dateModified: string;
    author: {
      name: string;
      url: string;
    };
  };
}