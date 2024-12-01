import { BlogPost } from '../data/types';

interface SEOWritingPost {
  id: string;
  title: string;
  content: string;
  meta: {
    description: string;
    author: string;
    publishDate: string;
    readTime: number;
    image: string;
  };
  seo: {
    keywords: string[];
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export async function importSEOWritingPost(apiKey: string, postId: string): Promise<BlogPost> {
  try {
    const response = await fetch(`https://api.seowriting.ai/v1/posts/${postId}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch post from SEOWriting.ai');
    }

    const seoPost: SEOWritingPost = await response.json();

    // Transform SEOWriting.ai post to our BlogPost format
    return {
      id: seoPost.id,
      title: seoPost.title,
      excerpt: seoPost.meta.description,
      author: seoPost.meta.author,
      readTime: `${seoPost.meta.readTime} min read`,
      date: new Date(seoPost.meta.publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      image: seoPost.meta.image,
      content: seoPost.content,
      tableData: {
        headers: ["Topic", "Details"],
        rows: seoPost.seo.keywords.map(keyword => [keyword, "Relevant content"])
      },
      relatedPosts: [], // This would need to be populated based on your logic
      faqs: seoPost.seo.faqs
    };
  } catch (error) {
    console.error('Error importing post from SEOWriting.ai:', error);
    throw error;
  }
}