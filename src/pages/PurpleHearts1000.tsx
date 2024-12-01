import React, { useState } from 'react';
import { ArrowLeft, Heart, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PurpleHearts1000 = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const purpleHearts = '💜'.repeat(1000);

  const handleCopy = () => {
    navigator.clipboard.writeText(purpleHearts);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>1000 Purple Hearts 💜 Copy and Paste [2024] Free Purple Heart Collection</title>
        <meta name="description" content="【INSTANT COPY】 Get 1000 purple hearts! 💜 Perfect for expressing royalty and luxury 💜 One-click copy & paste 💜 Works everywhere! Updated for 2024 💜 Free purple heart emojis for Instagram, WhatsApp & more!" />
        <link rel="canonical" href="https://emojicollection.net/purple-hearts-1000" />
        <meta property="og:title" content="1000 Purple Hearts 💜 Copy and Paste [2024] Free Purple Heart Collection" />
        <meta property="og:description" content="【INSTANT COPY】 Get 1000 purple hearts! 💜 Perfect for expressing royalty and luxury 💜 One-click copy & paste 💜 Works everywhere! Updated for 2024" />
        <meta property="og:url" content="https://emojicollection.net/purple-hearts-1000" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="1000 Purple Hearts 💜 Copy and Paste [2024] Free Purple Heart Collection" />
        <meta name="twitter:description" content="【INSTANT COPY】 Get 1000 purple hearts! 💜 Perfect for expressing royalty and luxury 💜 One-click copy & paste 💜 Works everywhere! Updated for 2024" />
        <meta name="keywords" content="1000 purple hearts, purple heart emoji, purple heart copy paste, purple hearts, purple emoji, purple symbols, instagram purple hearts" />
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-500 mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                1000 Purple Hearts 💜 Copy and Paste [2024]
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to 1000 beautiful purple hearts! Perfect for expressing royalty, luxury, and sophistication. Updated for 2024 with the latest emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  💜 Copy 1000 Purple Hearts Instantly
                </h2>
                <div className="mb-4 overflow-auto max-h-96 text-left break-words text-2xl">
                  {purpleHearts}
                </div>
                <button
                  onClick={handleCopy}
                  className={`inline-flex items-center px-6 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="mr-2" size={20} />
                      Copied 1000 Purple Hearts!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      Copy 1000 Purple Hearts
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>💜 1000 beautiful purple hearts</p>
                <p>👑 Symbol of royalty and luxury</p>
                <p>📋 Instant one-click copy functionality</p>
                <p>💫 Works on all platforms and devices</p>
                <p>🆕 Updated for 2024 with latest emojis</p>
                <p>🔄 Perfect for creating stunning displays</p>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">📱 Perfect For</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Style & Luxury</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Elegant messages</li>
                    <li>Royal themes</li>
                    <li>Luxury branding</li>
                    <li>Special events</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Social Media</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Instagram posts</li>
                    <li>Facebook updates</li>
                    <li>Twitter messages</li>
                    <li>TikTok captions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Messaging</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>WhatsApp</li>
                    <li>Messenger</li>
                    <li>iMessage</li>
                    <li>SMS</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">❓ Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">What does the purple heart symbolize?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    The purple heart emoji symbolizes royalty, luxury, and sophistication. It's often used to express elegance, style, and refined taste in digital communication.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Do these hearts work everywhere?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Yes! These purple hearts are universal and work on all major platforms including Instagram, Facebook, WhatsApp, and more. They're compatible with both mobile and desktop devices.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Are these hearts free to use?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Absolutely! Our purple hearts are completely free to use for both personal and commercial purposes. No attribution required.
                  </div>
                </details>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default PurpleHearts1000;