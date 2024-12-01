import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface LoveMessageBoxProps {
  count: number;
}

const LoveMessageBox: React.FC<LoveMessageBoxProps> = ({ count }) => {
  const [copied, setCopied] = useState(false);

  const hearts = [
    '❤️', '💕', '💗', '💓', '💖', '💘', '💝', '💞', '💟', '♥️'
  ];

  const loveMessages = Array(count)
    .fill(null)
    .map(() => `I love you ${hearts[Math.floor(Math.random() * hearts.length)]}`)
    .join('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(loveMessages);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 my-8">
      <div className="mb-4 overflow-auto max-h-48 text-left whitespace-pre-wrap">
        {loveMessages}
      </div>
      <button
        onClick={handleCopy}
        className={`inline-flex items-center px-4 py-2 rounded-lg ${
          copied
            ? 'bg-green-500 text-white'
            : 'bg-pink-500 text-white hover:bg-pink-600'
        } transition-colors`}
      >
        {copied ? (
          <>
            <Check className="mr-2" size={20} />
            Copied!
          </>
        ) : (
          <>
            <Copy className="mr-2" size={20} />
            Copy All Messages
          </>
        )}
      </button>
    </div>
  );
};

export default LoveMessageBox;