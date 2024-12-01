import React, { useState } from 'react';
import { Copy, Check, Heart } from 'lucide-react';

interface LoveMessageButtonProps {
  count: number;
}

const LoveMessageButton: React.FC<LoveMessageButtonProps> = ({ count }) => {
  const [copied, setCopied] = useState(false);

  const hearts = [
    '❤️', '💕', '💗', '💓', '💖', '💘', '💝', '💞', '💟', '♥️'
  ];

  const generateLoveMessages = () => {
    return Array(count)
      .fill(null)
      .map(() => `I love you ${hearts[Math.floor(Math.random() * hearts.length)]}`)
      .join('\n');
  };

  const handleCopy = () => {
    const messages = generateLoveMessages();
    navigator.clipboard.writeText(messages);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`w-full max-w-md mx-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 ${
        copied
          ? 'bg-green-500 text-white'
          : 'bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600'
      }`}
    >
      {copied ? (
        <>
          <Check className="w-6 h-6" />
          <span>Copied {count} Love Messages!</span>
        </>
      ) : (
        <>
          <Heart className="w-6 h-6" />
          <span>Copy {count} "I Love You" Messages</span>
        </>
      )}
    </button>
  );
};

export default LoveMessageButton;