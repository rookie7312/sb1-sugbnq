import React, { useState } from 'react';
import { seoDescription } from '../data/emojis';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PopularPosts from '../components/PopularPosts';
import LatestBlogPosts from '../components/LatestBlogPosts';
import FeaturedCategories from '../components/FeaturedCategories';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover & Share Emojis
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {seoDescription}
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search emojis, collections, tools..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-md hover:from-indigo-700 hover:to-violet-700 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Featured Categories */}
          <FeaturedCategories />

          {/* Popular Posts */}
          <PopularPosts />

          {/* Latest Blog Posts */}
          <LatestBlogPosts />
        </div>
      </div>
    </div>
  );
};

export default Home;