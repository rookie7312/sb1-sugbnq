import React, { useState } from 'react';
import { ArrowLeft, Heart, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoveTextGenerator = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(100);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const loveText = Array(count)
    .fill(`I love you${name ? ` ${name}` : ''} ❤️`)
    .join('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(loveText);
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
              Love Text Generator
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Generate "I love you" messages with custom name and count
            </p>

            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div>
                <label htmlFor="count" className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Number of Times
                </label>
                <input
                  type="number"
                  id="count"
                  min="1"
                  max="1000"
                  value={count}
                  onChange={(e) => setCount(Math.min(1000, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4 overflow-auto max-h-48 text-left whitespace-pre-wrap">
                  {loveText}
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
                      Copy Result
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
            <div className="text-gray-600 space-y-4">
              <p>1. Optionally enter a name to personalize the message</p>
              <p>2. Choose how many times to repeat (max 1000)</p>
              <p>3. Click the copy button to copy all messages</p>
              <p>4. Paste anywhere to share your love!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveTextGenerator;