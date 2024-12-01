import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import BlogTable from '../components/BlogTable';
import BlogFAQ from '../components/BlogFAQ';
import ReactMarkdown from 'react-markdown';
import HeartCopyBox from '../components/HeartCopyBox';
import LoveMessageButton from '../components/LoveMessageButton';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    navigate('/blog');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Blog
        </button>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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
            </div>

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({children}) => (
                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{children}</h2>
                  ),
                  h3: ({children}) => (
                    <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">{children}</h3>
                  ),
                  p: ({children}) => (
                    <p className="text-gray-600 mb-4">{children}</p>
                  ),
                  ul: ({children}) => (
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">{children}</ul>
                  ),
                  li: ({children}) => (
                    <li className="ml-4">{children}</li>
                  ),
                  HeartCopyBox: () => <HeartCopyBox />,
                  LoveMessageButton: ({count}) => <LoveMessageButton count={parseInt(count)} />,
                  iframe: ({node, ...props}) => (
                    <div className="aspect-w-16 aspect-h-9 my-8">
                      <iframe {...props} className="rounded-lg shadow-lg" />
                    </div>
                  ),
                  a: ({node, ...props}) => (
                    <a {...props} target="_blank" rel="noopener noreferrer" className="text-[#ff0000] hover:underline" />
                  ),
                  table: ({children}) => (
                    <div className="my-8">
                      <BlogTable 
                        headers={post.tableData.headers}
                        rows={post.tableData.rows}
                      />
                    </div>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {post.faqs.length > 0 && (
              <div className="mt-12 border-t border-gray-200 pt-8">
                <BlogFAQ faqs={post.faqs} />
              </div>
            )}

            {post.relatedPosts.length > 0 && (
              <div className="mt-12 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {post.relatedPosts.map((relatedPost) => (
                    <div
                      key={relatedPost.id}
                      onClick={() => navigate(`/blog/${relatedPost.id}`)}
                      className="cursor-pointer group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#ff0000] transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;