import React, { useState } from 'react';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Clap1000 = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const claps = '👏'.repeat(1000);

  const handleCopy = () => {
    navigator.clipboard.writeText(claps);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>1000 Clap Emojis 👏 Copy and Paste [2024] Free Clapping Collection</title>
        <meta name="description" content="【INSTANT COPY】 Get 1000 clap emojis! 👏 Perfect for showing appreciation 👏 One-click copy & paste 👏 Works everywhere! Updated for 2024" />
        <link rel="canonical" href="https://emojicollection.net/clap-1000" />
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <span className="text-2xl">👏</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                1000 Clap Emojis 👏 Copy and Paste [2024]
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to 1000 clapping hands emojis! Perfect for showing appreciation, celebrating success, or encouraging others. Updated for 2024. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  👏 Copy 1000 Claps Instantly
                </h2>
                <div className="mb-4 overflow-auto max-h-96 text-left break-words text-2xl">
                  {claps}
                </div>
                <button
                  onClick={handleCopy}
                  className={`inline-flex items-center px-6 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="mr-2" size={20} />
                      Copied 1000 Claps!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      Copy 1000 Claps
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>👏 1000 clapping hands emojis</p>
                <p>🎯 Perfect for showing appreciation</p>
                <p>📋 Instant one-click copy functionality</p>
                <p>💫 Works on all platforms and devices</p>
                <p>🆕 Updated for 2024</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default Clap1000;