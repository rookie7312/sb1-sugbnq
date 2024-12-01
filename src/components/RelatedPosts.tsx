import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { emojis, type EmojiData } from '../data/emojis';

interface RelatedPostsProps {
  currentId: string;
  category?: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentId, category }) => {
  const getRelatedEmojis = (): EmojiData[] => {
    // First, get emojis from the same category
    let related = category 
      ? emojis.filter(emoji => emoji.category === category && emoji.id !== currentId)
      : [];

    // If we don't have enough related items, add some popular ones
    if (related.length < 3) {
      const popular = emojis.filter(emoji => 
        emoji.id !== currentId && 
        (!category || emoji.category !== category)
      );
      related = [...related, ...popular];
    }

    // Return only the first 3 items
    return related.slice(0, 3);
  };

  const relatedEmojis = getRelatedEmojis();

  return (
    <div className="border-t border-gray-200 pt-8 mt-8">
      <h2 className="text-2xl font-semibold mb-6">You Might Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedEmojis.map((emoji) => (
          <Link
            key={emoji.id}
            to={`/emoji/${emoji.id}`}
            className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#ff0000] transition-colors mb-2">
                  {emoji.keyword}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {emoji.description}
                </p>
                <div className="text-2xl">
                  {emoji.preview || emoji.emoji.slice(0, 10)}
                  {emoji.emoji.length > 10 && '...'}
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#ff0000] transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;