import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, ChevronDown, BookOpen, Home, Info, Mail } from 'lucide-react';
import { blogPosts } from '../data/blog';

const Header = () => {
  const [isKissDropdownOpen, setIsKissDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const location = useLocation();

  const kissPages = [
    { path: '/kiss-1000', title: 'Kiss × 1000' },
    { path: '/kiss-500', title: 'Kiss × 500' },
    { path: '/kiss-100', title: 'Kiss × 100' },
    { path: '/kiss-50', title: 'Kiss × 50' },
    { path: '/kiss-10', title: 'Kiss × 10' },
    { path: '/kiss-5', title: 'Kiss × 5' }
  ];

  const recentBlogPosts = blogPosts
    .sort((a, b) => new Date(b.schema.datePublished).getTime() - new Date(a.schema.datePublished).getTime())
    .slice(0, 5)
    .map(post => ({
      path: `/blog/${post.slug}`,
      title: post.title,
      emoji: post.emoji
    }));

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold">
              Emoji Collection
            </Link>
            
            {/* Main Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link to="/" className="flex items-center space-x-1 hover:text-white/80 transition-colors">
                <Home size={18} />
                <span>Home</span>
              </Link>

              <Link to="/about" className="flex items-center space-x-1 hover:text-white/80 transition-colors">
                <Info size={18} />
                <span>About</span>
              </Link>

              <Link to="/contact" className="flex items-center space-x-1 hover:text-white/80 transition-colors">
                <Mail size={18} />
                <span>Contact</span>
              </Link>

              <div className="relative group">
                <button
                  onClick={() => setIsKissDropdownOpen(!isKissDropdownOpen)}
                  className="flex items-center space-x-1 hover:text-white/80 transition-colors"
                >
                  <Heart size={18} />
                  <span>Kiss Emojis</span>
                  <ChevronDown size={14} className={`ml-1 transform transition-transform ${isKissDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isKissDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      {kissPages.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                          onClick={() => setIsKissDropdownOpen(false)}
                        >
                          {page.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button
                  onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
                  className="flex items-center space-x-1 hover:text-white/80 transition-colors"
                >
                  <BookOpen size={18} />
                  <span>Blog</span>
                  <ChevronDown size={14} className={`ml-1 transform transition-transform ${isBlogDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isBlogDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      <Link
                        to="/blog"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-semibold"
                        onClick={() => setIsBlogDropdownOpen(false)}
                      >
                        All Blog Posts
                      </Link>
                      <div className="border-t border-gray-100 my-1"></div>
                      {recentBlogPosts.map((post) => (
                        <Link
                          key={post.path}
                          to={post.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                          onClick={() => setIsBlogDropdownOpen(false)}
                        >
                          <span className="mr-2">{post.emoji}</span>
                          {post.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;