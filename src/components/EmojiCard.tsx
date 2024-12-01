import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check } from 'lucide-react';
import type { EmojiData } from '../data/emojis';

const buttonColors = [
  'bg-indigo-500',
  'bg-violet-500',
  'bg-fuchsia-500',
  'bg-purple-500',
  'bg-blue-500',
  'bg-cyan-500',
  'bg-teal-500',
  'bg-emerald-500'
];

const titleColors = [
  'text-indigo-600',
  'text-violet-600',
  'text-fuchsia-600',
  'text-purple-600',
  'text-blue-600',
  'text-cyan-600',
  'text-teal-600',
  'text-emerald-600'
];

interface EmojiCardProps {
  emoji: EmojiData;
}

export const EmojiCard: React.FC<EmojiCardProps> = ({ emoji }) => {
  const [copied, setCopied] = useState(false);

  // Get a random color for the button
  const buttonColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];

  // Get a random color for the title
  const titleColor = titleColors[Math.floor(Math.random() * titleColors.length)];

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emoji.emoji);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Use preview if available, otherwise use the full emoji
  const displayEmoji = emoji.preview || emoji.emoji;

  return (
    <Link
      to={`/emoji/${emoji.id}`}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
    >
      <div className="p-6 flex flex-col items-center text-center h-full">
        <div className="relative">
          <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 min-h-[48px] flex items-center">
            {displayEmoji}
          </div>
          <button
            onClick={handleCopy}
            className={`absolute -right-2 -top-2 p-2 rounded-full ${
              copied ? 'bg-green-500' : 'bg-gradient-to-r from-indigo-600 to-violet-600'
            } text-white shadow-md transition-colors`}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <div className="flex-grow">
          <h3 className={`text-xl font-semibold ${titleColor} mb-2`}>
            {emoji.keyword}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {emoji.description}
          </p>
        </div>
        <div className="mt-auto">
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${buttonColor} text-white`}>
            {emoji.category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EmojiCard;