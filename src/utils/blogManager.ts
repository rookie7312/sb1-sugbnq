import { BlogPost } from '../data/types';
import { blogPosts as localPosts } from '../data/blogPosts';
import { importSEOWritingPost } from './seowritingImporter';

export class BlogManager {
  private static instance: BlogManager;
  private posts: Map<string, BlogPost> = new Map();
  private initialized = false;

  private constructor() {
    // Initialize with local posts
    localPosts.forEach(post => {
      this.posts.set(post.id, post);
    });
  }

  public static getInstance(): BlogManager {
    if (!BlogManager.instance) {
      BlogManager.instance = new BlogManager();
    }
    return BlogManager.instance;
  }

  public async importSEOWritingPosts(apiKey: string, postIds: string[]): Promise<void> {
    try {
      const importPromises = postIds.map(id => importSEOWritingPost(apiKey, id));
      const importedPosts = await Promise.all(importPromises);
      
      importedPosts.forEach(post => {
        this.posts.set(post.id, post);
      });
    } catch (error) {
      console.error('Error importing posts:', error);
      throw error;
    }
  }

  public getAllPosts(): BlogPost[] {
    return Array.from(this.posts.values());
  }

  public getPost(id: string): BlogPost | undefined {
    return this.posts.get(id);
  }

  public async initialize(apiKey: string, seowritingPostIds: string[]): Promise<void> {
    if (!this.initialized) {
      await this.importSEOWritingPosts(apiKey, seowritingPostIds);
      this.initialized = true;
    }
  }
}