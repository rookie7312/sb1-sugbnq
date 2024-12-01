import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const HeartCopyBox = () => {
  const [copied, setCopied] = useState(false);

  const hearts = [
    '❤️', '💕', '💗', '💓', '💖', '💘', '💝', '💞', '💟', '♥️'
  ];

  const heartMessage = Array(100)
    .fill(null)
    .map(() => hearts[Math.floor(Math.random() * hearts.length)])
    .join('');

  const handleCopy = () => {
    navigator.clipboard.writeText(heartMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 my-8">
      <div className="mb-4 overflow-auto max-h-48 text-left break-words text-2xl">
        {heartMessage}
      </div>
      <button
        onClick={handleCopy}
        className={`inline-flex items-center px-6 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 ${
          copied
            ? 'bg-green-500 text-white'
            : 'bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600'
        }`}
      >
        {copied ? (
          <>
            <Check className="mr-2" size={20} />
            Copied 100 Hearts!
          </>
        ) : (
          <>
            <Copy className="mr-2" size={20} />
            Copy 100 Hearts
          </>
        )}
      </button>
    </div>
  );
};

export default HeartCopyBox;