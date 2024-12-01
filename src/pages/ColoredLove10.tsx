import React, { useState } from 'react';
import { ArrowLeft, Heart, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ColoredLove10 = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const loveMessages = [
    "❤️ I love you 💝",
    "💜 I love you 💕",
    "💚 I love you 💗",
    "💙 I love you 💓",
    "💛 I love you 💖",
    "🧡 I love you 💘",
    "💗 I love you 💞",
    "💚 I love you 💟",
    "💙 I love you 💌",
    "💜 I love you 💕"
  ].join('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(loveMessages);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 text-pink-500 mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              I Love You 10 Times
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Express your love with beautiful heart emojis
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4 overflow-auto max-h-96 text-left whitespace-pre-wrap">
                  {loveMessages}
                </div>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2" size={20} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      Copy All
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
            <div className="text-gray-600 space-y-4">
              <p>1. Click the "Copy All" button to copy all messages</p>
              <p>2. Paste anywhere to share your love!</p>
              <p>3. Perfect for messages, social media, or anywhere you want to express your love</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColoredLove10;