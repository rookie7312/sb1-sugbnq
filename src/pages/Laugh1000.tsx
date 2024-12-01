import React, { useState } from 'react';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Laugh1000 = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const laughEmojis = [
    '😂', '🤣', '😆', '😅', '😄', '😃', '😀', '😹', '🤪', '😝'
  ];

  const laughMessage = Array(1000)
    .fill(null)
    .map(() => laughEmojis[Math.floor(Math.random() * laughEmojis.length)])
    .join('');

  const handleCopy = () => {
    navigator.clipboard.writeText(laughMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>1000 Laugh Emojis 😂 Copy and Paste [2024] 🤣 Free Collection</title>
        <meta name="description" content="【INSTANT COPY】 Get 1000 laugh emojis! 😂 Perfect mix of funny expressions 🤣 One-click copy & paste 😆 Works everywhere! Updated for 2024 😄 Free laugh emojis for Instagram, WhatsApp & more!" />
        <link rel="canonical" href="https://emojicollection.net/laugh-1000" />
        <meta property="og:title" content="1000 Laugh Emojis 😂 Copy and Paste [2024] 🤣 Free Collection" />
        <meta property="og:description" content="【INSTANT COPY】 Get 1000 laugh emojis! 😂 Perfect mix of funny expressions 🤣 One-click copy & paste 😆 Works everywhere! Updated for 2024" />
        <meta property="og:url" content="https://emojicollection.net/laugh-1000" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="1000 Laugh Emojis 😂 Copy and Paste [2024] 🤣 Free Collection" />
        <meta name="twitter:description" content="【INSTANT COPY】 Get 1000 laugh emojis! 😂 Perfect mix of funny expressions 🤣 One-click copy & paste 😆 Works everywhere! Updated for 2024" />
        <meta name="keywords" content="1000 laugh emojis, laugh emoji copy paste, funny emojis, lol emoji, laughing emoji, joy emoji, instagram laugh emojis" />
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
                <span className="text-2xl">😂</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                1000 Laugh Emojis 😂 Copy and Paste [2024] 🤣
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to 1000 hilarious laugh emojis! Perfect for expressing joy and humor. Each emoji is carefully selected to spread laughter. Updated for 2024 with the latest emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  😂 Copy 1000 Laugh Emojis Instantly
                </h2>
                <div className="mb-4 overflow-auto max-h-96 text-left break-words text-2xl">
                  {laughMessage}
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
                      Copied 1000 Laughs!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      Copy 1000 Laughs
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>😂 1000 hilarious laugh emojis</p>
                <p>🤣 Perfect mix of funny expressions</p>
                <p>📋 Instant one-click copy functionality</p>
                <p>💫 Works on all platforms and devices</p>
                <p>🆕 Updated for 2024 with latest emojis</p>
                <p>🔄 Fresh combinations generated every time</p>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">📱 Perfect For</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Fun & Humor</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Funny moments</li>
                    <li>Jokes & memes</li>
                    <li>Group chats</li>
                    <li>Comedy content</li>
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
                  <summary className="cursor-pointer p-4 font-medium">Why use laugh emojis?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Laugh emojis help express joy and humor in digital communication. They add fun and lighthearted energy to your messages and social media posts.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Do these emojis work everywhere?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Yes! These laugh emojis are universal and work on all major platforms including Instagram, Facebook, WhatsApp, and more. They're compatible with both mobile and desktop devices.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Are these emojis free to use?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Absolutely! Our laugh emojis are completely free to use for both personal and commercial purposes. No attribution required.
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

export default Laugh1000;