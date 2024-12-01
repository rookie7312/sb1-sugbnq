import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, ExternalLink } from 'lucide-react';
import { emojis } from '../data/emojis';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  path: string;
  type: 'emoji' | 'tool' | 'page';
  preview?: string;
}

const searchData: SearchResult[] = [
  // Tools
  {
    id: 'text-to-emoji',
    title: 'Text to Emoji Converter',
    description: 'Convert text into emoji letters instantly',
    path: '/text-to-emoji',
    type: 'tool'
  },
  {
    id: 'text-to-emoji-picture',
    title: 'Text to Emoji Picture Generator',
    description: 'Create beautiful emoji art from your text',
    path: '/text-to-emoji-picture',
    type: 'tool'
  },
  {
    id: 'text-replicator',
    title: 'Text Replicator',
    description: 'Repeat text multiple times with various separators',
    path: '/text-replicator',
    type: 'tool'
  },
  {
    id: 'count-duplicates',
    title: 'Character Counter',
    description: 'Count and analyze character frequencies in text',
    path: '/count-duplicates',
    type: 'tool'
  },
  // Pages
  {
    id: 'home',
    title: 'Home',
    description: 'Browse our collection of emoji combinations',
    path: '/',
    type: 'page'
  },
  {
    id: 'about',
    title: 'About',
    description: 'Learn about Emoji Collection',
    path: '/about',
    type: 'page'
  },
  {
    id: 'blog',
    title: 'Blog',
    description: 'Read our latest articles about emojis',
    path: '/blog',
    type: 'page'
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Get in touch with us',
    path: '/contact',
    type: 'page'
  },
  // Add emoji collections
  ...emojis.map(emoji => ({
    id: emoji.id,
    title: emoji.keyword,
    description: emoji.description,
    path: `/emoji/${emoji.id}`,
    type: 'emoji' as const,
    preview: emoji.preview || emoji.emoji.slice(0, 50)
  }))
];

const Search = () => {
  const [query, setQuery] = useState('');

  const filteredResults = useMemo(() => {
    if (!query) return searchData;

    const searchTerms = query.toLowerCase().split(' ');
    return searchData.filter(item => {
      const searchText = `${item.title} ${item.description}`.toLowerCase();
      return searchTerms.every(term => searchText.includes(term));
    });
  }, [query]);

  const groupedResults = useMemo(() => {
    const grouped = {
      tools: filteredResults.filter(r => r.type === 'tool'),
      emojis: filteredResults.filter(r => r.type === 'emoji'),
      pages: filteredResults.filter(r => r.type === 'page')
    };

    return grouped;
  }, [filteredResults]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff0000] text-white mb-4">
              <SearchIcon className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Search Emoji Collection
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find emojis, tools, and features instantly
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for emojis, tools, or pages..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0000] focus:border-[#ff0000]"
                />
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Tools Section */}
            {groupedResults.tools.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Tools</h2>
                <div className="grid gap-4">
                  {groupedResults.tools.map((result) => (
                    <Link
                      key={result.id}
                      to={result.path}
                      className="group block p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#ff0000] transition-colors">
                            {result.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            {result.description}
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#ff0000] transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Emoji Collections Section */}
            {groupedResults.emojis.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Emoji Collections</h2>
                <div className="grid gap-4">
                  {groupedResults.emojis.map((result) => (
                    <Link
                      key={result.id}
                      to={result.path}
                      className="group block p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#ff0000] transition-colors">
                            {result.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            {result.description}
                          </p>
                          {result.preview && (
                            <p className="mt-2 text-lg">
                              {result.preview}
                              {result.preview.length < 50 ? '' : '...'}
                            </p>
                          )}
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#ff0000] transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Pages Section */}
            {groupedResults.pages.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Pages</h2>
                <div className="grid gap-4">
                  {groupedResults.pages.map((result) => (
                    <Link
                      key={result.id}
                      to={result.path}
                      className="group block p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#ff0000] transition-colors">
                            {result.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            {result.description}
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#ff0000] transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredResults.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No results found for "{query}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;