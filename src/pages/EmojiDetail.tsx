import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { emojis } from '../data/emojis';
import { Copy, Check, ArrowLeft, BookOpen } from 'lucide-react';
import RelatedPosts from '../components/RelatedPosts';

const getWikiLinks = (emoji: typeof emojis[0]) => {
  const links = [
    {
      title: 'Emoji',
      url: 'https://en.wikipedia.org/wiki/Emoji',
      description: 'Learn about the history and evolution of emojis'
    }
  ];

  // Add category-specific wiki links
  switch (emoji.category) {
    case 'nature':
      if (emoji.id.includes('roses')) {
        links.push({
          title: 'Rose',
          url: 'https://en.wikipedia.org/wiki/Rose',
          description: 'Discover the cultural significance of roses'
        });
      } else {
        links.push({
          title: 'Nature',
          url: 'https://en.wikipedia.org/wiki/Nature',
          description: 'Explore the natural world and its wonders'
        });
      }
      break;
    case 'symbols':
      if (emoji.id.includes('hearts')) {
        links.push({
          title: 'Heart Symbol',
          url: 'https://en.wikipedia.org/wiki/Heart_symbol',
          description: 'History and meaning of the heart symbol'
        });
      } else {
        links.push({
          title: 'Symbol',
          url: 'https://en.wikipedia.org/wiki/Symbol',
          description: 'Understanding symbols and their meanings'
        });
      }
      break;
    case 'social':
      links.push({
        title: 'Social Media',
        url: 'https://en.wikipedia.org/wiki/Social_media',
        description: 'Learn about social media communication'
      });
      break;
    case 'expressions':
      links.push({
        title: 'Facial Expression',
        url: 'https://en.wikipedia.org/wiki/Facial_expression',
        description: 'Understanding facial expressions and emotions'
      });
      break;
    case 'objects':
      links.push({
        title: 'Material Culture',
        url: 'https://en.wikipedia.org/wiki/Material_culture',
        description: 'Explore the significance of objects in society'
      });
      break;
  }

  return links;
};

const EmojiDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copiedEmoji, setCopiedEmoji] = useState<string | null>(null);

  const emoji = emojis.find(e => e.id === id);

  if (!emoji) {
    navigate('/');
    return null;
  }

  const wikiLinks = getWikiLinks(emoji);

  const handleCopyAll = () => {
    navigator.clipboard.writeText(emoji.emoji);
    setCopiedEmoji('all');
    setTimeout(() => setCopiedEmoji(null), 2000);
  };

  const handleCopyIndividual = (singleEmoji: string) => {
    navigator.clipboard.writeText(singleEmoji);
    setCopiedEmoji(singleEmoji);
    setTimeout(() => setCopiedEmoji(null), 2000);
  };

  // Get the first two emojis for the title
  const titleEmojis = Array.from(emoji.emoji.slice(0, 2)).join(' ');

  // Check if this is a repeated emoji collection (like roses)
  const isRepeatedEmoji = emoji.isRepeated || emoji.emoji.split('').every(char => char === emoji.emoji[0]);

  // For non-repeated emojis, create an array of unique emojis
  const uniqueEmojis = isRepeatedEmoji ? [] : Array.from(new Set(emoji.emoji));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {titleEmojis} {emoji.keyword} {titleEmojis}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {isRepeatedEmoji 
                ? 'Click the button below to copy all emojis at once'
                : 'Click any emoji to copy it individually, or use the copy all button'}
            </p>
            <p className="text-xl text-gray-600 mb-8">
              {emoji.description}
            </p>

            <div className="max-w-2xl mx-auto">
              {isRepeatedEmoji ? (
                // Display for repeated emoji collections
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="text-4xl mb-6 break-words">
                    {emoji.preview || emoji.emoji.slice(0, 50)}
                    {emoji.emoji.length > 50 && '...'}
                  </div>
                  <button
                    onClick={handleCopyAll}
                    className={`inline-flex items-center px-6 py-3 rounded-lg text-white transition-colors ${
                      copiedEmoji === 'all' ? 'bg-green-500' : 'bg-[#ff0000] hover:bg-[#ff0000]/90'
                    }`}
                  >
                    {copiedEmoji === 'all' ? (
                      <>
                        <Check className="mr-2" size={20} />
                        Copied All!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2" size={20} />
                        Copy All {emoji.keyword}
                      </>
                    )}
                  </button>
                </div>
              ) : (
                // Display for collections with different emojis
                <div className="space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {uniqueEmojis.map((singleEmoji, index) => (
                      <button
                        key={index}
                        onClick={() => handleCopyIndividual(singleEmoji)}
                        className={`relative group p-4 text-3xl bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors ${
                          copiedEmoji === singleEmoji ? 'ring-2 ring-green-500' : ''
                        }`}
                      >
                        <span className="block mb-2">{singleEmoji}</span>
                        <span className={`absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                          copiedEmoji === singleEmoji ? 'opacity-100 bg-green-500/50' : ''
                        }`}>
                          {copiedEmoji === singleEmoji ? (
                            <>
                              <Check className="mr-1" size={16} />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="mr-1" size={16} />
                              Copy
                            </>
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <button
                      onClick={handleCopyAll}
                      className={`inline-flex items-center px-6 py-3 rounded-lg text-white transition-colors ${
                        copiedEmoji === 'all' ? 'bg-green-500' : 'bg-[#ff0000] hover:bg-[#ff0000]/90'
                      }`}
                    >
                      {copiedEmoji === 'all' ? (
                        <>
                          <Check className="mr-2" size={20} />
                          Copied All!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2" size={20} />
                          Copy All Emojis
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-4">Usage & Context</h2>
            <p className="text-gray-600">
              Perfect for expressing {emoji.keyword.toLowerCase()} in digital communication.
              This emoji set is commonly used in {emoji.category}-related contexts and can help
              convey complex emotions or ideas in a simple, visual way. 
              {isRepeatedEmoji 
                ? ' Simply click the copy button above to copy all emojis at once!'
                : ' Click individual emojis to copy them one by one, or use the copy all button to get the complete set!'}
            </p>
          </div>

          {/* Wiki Links Section */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2" />
              Learn More
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wikiLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#ff0000] transition-colors">
                        {link.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {link.description}
                      </p>
                    </div>
                    <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-[#ff0000] transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          <RelatedPosts currentId={emoji.id} category={emoji.category} />
        </div>
      </div>
    </div>
  );
};

export default EmojiDetail;