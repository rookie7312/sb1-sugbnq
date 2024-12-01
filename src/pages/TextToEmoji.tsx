import React, { useState } from 'react';
import { ArrowLeft, Smile, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const letterToEmoji: { [key: string]: string } = {
  a: '🅰️', b: '🅱️', c: '©️', d: '🇩', e: '📧', f: '🎏', g: '🇬', h: '♓️',
  i: 'ℹ️', j: '🗾', k: '🎋', l: '🕒', m: 'Ⓜ️', n: '♑️', o: '⭕️', p: '🅿️',
  q: '🔍', r: '®️', s: '💲', t: '✝️', u: '⛎', v: '♈️', w: '〰️', x: '❌',
  y: '💹', z: '💤', ' ': ' ',
  '0': '0️⃣', '1': '1️⃣', '2': '2️⃣', '3': '3️⃣', '4': '4️⃣',
  '5': '5️⃣', '6': '6️⃣', '7': '7️⃣', '8': '8️⃣', '9': '9️⃣'
};

const TextToEmoji = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const convertToEmoji = (input: string): string => {
    return input.toLowerCase().split('').map(char => letterToEmoji[char] || char).join('');
  };

  const emojiText = convertToEmoji(text);

  const handleCopy = () => {
    navigator.clipboard.writeText(emojiText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Text to Emoji Converter 🔄 Convert Text to Emoji Letters [2024]</title>
        <meta name="description" content="【INSTANT CONVERT】 Transform text into emoji letters! ✨ Perfect for social media 📱 One-click copy & paste 📋 Works everywhere! Updated for 2024" />
        <link rel="canonical" href="https://emojicollection.net/text-to-emoji" />
      </Helmet>

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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Smile className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Text to Emoji Converter
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Transform your text into emoji letters! Perfect for creating unique messages, social media posts, and fun communications. Enter your text below and watch it transform into emojis instantly.
              </p>

              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <label htmlFor="text" className="block text-left text-sm font-medium text-gray-700 mb-2">
                    Enter Text to Convert
                  </label>
                  <input
                    type="text"
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type something..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                {text && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="mb-4 overflow-auto max-h-48 text-left break-words">
                      {emojiText}
                    </div>
                    <button
                      onClick={handleCopy}
                      className={`inline-flex items-center px-4 py-2 rounded-lg ${
                        copied
                          ? 'bg-green-500 text-white'
                          : 'bg-yellow-500 text-white hover:bg-yellow-600'
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
              <h2 className="text-2xl font-semibold mb-4">Features & Tips</h2>
              <div className="text-gray-600 space-y-4">
                <p>✨ Converts letters and numbers into matching emojis</p>
                <p>🔄 Real-time conversion as you type</p>
                <p>📋 One-click copy functionality</p>
                <p>💡 Perfect for social media posts and messages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextToEmoji;