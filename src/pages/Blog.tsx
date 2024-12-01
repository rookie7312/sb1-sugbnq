import React, { useState } from 'react';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import { BookOpen, Search } from 'lucide-react';
import type { BlogPost } from '../data/types';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => 
    post && (
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const categories = [
    { name: 'All', count: blogPosts.length },
    { 
      name: 'Love & Hearts', 
      count: blogPosts.filter(p => p && (p.title.toLowerCase().includes('love') || p.title.toLowerCase().includes('heart'))).length 
    },
    { 
      name: 'Tutorials', 
      count: blogPosts.filter(p => p && (p.title.toLowerCase().includes('how') || p.title.toLowerCase().includes('guide'))).length 
    },
    { 
      name: 'Emoji History', 
      count: blogPosts.filter(p => p && p.title.toLowerCase().includes('history')).length 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff0000] text-white mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            emojicollection.net Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover stories, insights, and the latest trends in the world of emojis
            and digital communication.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search blog posts..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0000] focus:border-[#ff0000]"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-gray-900">{category.name}</span>
                <span className="ml-2 text-sm text-gray-500">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard 
              key={post.id}
              post={post}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;