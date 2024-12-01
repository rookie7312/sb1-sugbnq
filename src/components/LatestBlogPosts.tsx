import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Calendar, Clock, User } from 'lucide-react';

const LatestBlogPosts = () => {
  const navigate = useNavigate();
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-600">Latest Blog Posts</h2>
        <button
          onClick={() => navigate('/blog')}
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          View All Posts →
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => navigate(`/blog/${post.id}`)}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 cursor-pointer"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-3 text-gray-600 line-clamp-3">{post.excerpt}</p>
              
              <div className="mt-4 flex items-center text-indigo-600">
                <span className="text-sm font-medium">Read more</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogPosts;