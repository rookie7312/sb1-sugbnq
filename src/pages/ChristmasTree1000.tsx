import React, { useState } from 'react';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ChristmasTree1000 = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const christmasTree = '🎄'.repeat(1000);

  const handleCopy = () => {
    navigator.clipboard.writeText(christmasTree);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>1000 Christmas Trees 🎄 Copy and Paste [2024]</title>
        <meta name="description" content="【INSTANT COPY】 Get 1000 Christmas tree emojis! 🎄 Perfect for holiday decorations 🎄 One-click copy & paste 🎄 Works everywhere! Updated for 2024 🎄 Free Christmas tree emojis for Instagram, WhatsApp & more!" />
        <link rel="canonical" href="https://emojicollection.net/christmas-tree-1000" />
        <meta property="og:title" content="1000 Christmas Trees 🎄 Copy and Paste [2024]" />
        <meta property="og:description" content="【INSTANT COPY】 Get 1000 Christmas tree emojis! 🎄 Perfect for holiday decorations 🎄 One-click copy & paste 🎄 Works everywhere! Updated for 2024" />
        <meta property="og:url" content="https://emojicollection.net/christmas-tree-1000" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="1000 Christmas Trees 🎄 Copy and Paste [2024]" />
        <meta name="twitter:description" content="【INSTANT COPY】 Get 1000 Christmas tree emojis! 🎄 Perfect for holiday decorations 🎄 One-click copy & paste 🎄 Works everywhere! Updated for 2024" />
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

          <article className="bg-white rounded-2xl shadow-lg p-8">
            <header className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                <span className="text-2xl">🎄</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                1000 Christmas Trees 🎄 Copy and Paste [2024]
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to 1000 beautiful Christmas tree emojis! Perfect for holiday messages, social media posts, and spreading Christmas cheer. Updated for 2024 with the latest emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  🎄 Copy 1000 Christmas Trees Instantly
                </h2>
                <div className="mb-4 overflow-auto max-h-96 text-left break-words text-2xl">
                  {christmasTree}
                </div>
                <button
                  onClick={handleCopy}
                  className={`inline-flex items-center px-6 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="mr-2" size={20} />
                      Copied Christmas Trees!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      Copy Christmas Trees
                    </>
                  )}
                </button>
              </div>
            </section>

            {/* Rest of the sections remain similar to Christmas1000.tsx but with tree-specific content */}
          </article>
        </div>
      </div>
    </>
  );
};

export default ChristmasTree1000;