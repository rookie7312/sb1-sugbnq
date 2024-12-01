import React, { useState } from 'react';
import { ArrowLeft, Repeat, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TextReplicator = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(1);
  const [separator, setSeparator] = useState('newline');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const replicatedText = Array(count)
    .fill(text)
    .join(separator === 'newline' ? '\n' : ' ');

  const handleCopy = () => {
    navigator.clipboard.writeText(replicatedText);
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
            <img 
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80" 
              alt="Text Replication Tool - Copy and Repeat Text Multiple Times"
              className="w-full h-48 object-cover rounded-xl mb-8"
            />
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-500 mb-4">
              <Repeat className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Text Replicator Tool - Copy & Repeat Text
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Need to repeat text multiple times? Our free text replicator tool lets you duplicate any text, emoji, or symbol instantly. Perfect for creating patterns, testing layouts, or generating sample content. Simply enter your text, choose how many times to repeat it, and copy the result with one click.
            </p>

            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label htmlFor="text" className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Text to Replicate
                </label>
                <input
                  type="text"
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter text, emoji, or symbols to repeat..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Separator
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="newline"
                      checked={separator === 'newline'}
                      onChange={(e) => setSeparator(e.target.value)}
                      className="text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2">New Line</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="space"
                      checked={separator === 'space'}
                      onChange={(e) => setSeparator(e.target.value)}
                      className="text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2">Space</span>
                  </label>
                </div>
              </div>

              {text && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="mb-4 overflow-auto max-h-48 text-left whitespace-pre-wrap">
                    {replicatedText}
                  </div>
                  <button
                    onClick={handleCopy}
                    className={`inline-flex items-center px-4 py-2 rounded-lg ${
                      copied
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
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
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-4">Features & Benefits</h2>
            <div className="text-gray-600 space-y-4">
              <p>✨ Instantly duplicate any text up to 1000 times</p>
              <p>🔄 Choose between new line or space separation</p>
              <p>📋 One-click copy to clipboard functionality</p>
              <p>🎯 Perfect for social media, testing, and content creation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextReplicator;