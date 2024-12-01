import React, { useState } from 'react';
import { ArrowLeft, Heart, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ILoveYou5000 = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const hearts = [
    '❤️', '💖', '💝', '💕', '💗', '💓', '💘', '💞', '💟', '♥️', '🥰', '😍', '💑', '💌', '💋'
  ];

  const loveMessages = Array(5000)
    .fill(null)
    .map(() => `I love you ${hearts[Math.floor(Math.random() * hearts.length)]}`)
    .join('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(loveMessages);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>I Love You 5,000 Times 🥰 Copy and Paste with Emojis ♥💖 [2024]</title>
        <meta name="description" content="【INSTANT COPY】 Say I Love You 5,000 times with beautiful heart emojis! 💝 Perfect for expressing deep love 💖 One-click copy & paste ❤️ Works everywhere! Updated for 2024 ♥️" />
        <link rel="canonical" href="https://emojicollection.net/i-love-you-5000" />
        <meta property="og:title" content="I Love You 5,000 Times 🥰 Copy and Paste with Emojis ♥💖 [2024]" />
        <meta property="og:description" content="【INSTANT COPY】 Say I Love You 5,000 times with beautiful heart emojis! 💝 Perfect for expressing deep love 💖 One-click copy & paste ❤️ Works everywhere!" />
        <meta property="og:url" content="https://emojicollection.net/i-love-you-5000" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="I Love You 5,000 Times 🥰 Copy and Paste with Emojis ♥💖 [2024]" />
        <meta name="twitter:description" content="【INSTANT COPY】 Say I Love You 5,000 times with beautiful heart emojis! 💝 Perfect for expressing deep love 💖 One-click copy & paste ❤️ Works everywhere!" />
        <meta name="keywords" content="i love you 5000 times, i love you copy paste, love messages, heart emojis, romantic messages, love emoji copy paste" />
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 text-pink-500 mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                I Love You 5,000 Times 🥰 Copy and Paste with Emojis ♥💖 [2024]
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Express your deep love with 5,000 beautiful "I love you" messages! Perfect for showing the intensity of your feelings. Each message comes with a randomly selected heart emoji. Updated for 2024 with the latest emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  💝 Copy 5,000 Love Messages Instantly
                </h2>
                <div className="mb-4 overflow-auto max-h-96 text-left whitespace-pre-wrap">
                  {loveMessages}
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
                      Copied All Messages!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      Copy 5,000 Love Messages
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>💝 5,000 beautiful "I love you" messages</p>
                <p>❤️ Each message with a unique heart emoji</p>
                <p>📋 Instant one-click copy functionality</p>
                <p>💕 Works on all platforms and devices</p>
                <p>🆕 Updated for 2024 with latest emojis</p>
                <p>🔄 Fresh messages generated every time</p>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">📱 Perfect For</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Special Occasions</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Valentine's Day</li>
                    <li>Anniversaries</li>
                    <li>Birthdays</li>
                    <li>Proposals</li>
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
                  <summary className="cursor-pointer p-4 font-medium">Why say "I love you" 5,000 times?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Saying "I love you" 5,000 times represents a profound and deep love. It's a beautiful way to express the magnitude of your feelings in a unique and memorable way.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Will these messages work everywhere?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Yes! These love messages work on all major platforms including Instagram, Facebook, WhatsApp, and more. They're compatible with both mobile and desktop devices.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Can I customize the messages?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    After copying, you can add personal touches like names, dates, or additional messages to make them even more special and meaningful.
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

export default ILoveYou5000;