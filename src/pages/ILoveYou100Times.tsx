import React, { useState } from 'react';
import { ArrowLeft, Heart, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ILoveYou100Times = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const hearts = [
    '❤️', '💖', '💝', '💕', '💗', '💓', '💘', '💞', '💟', '♥️', '🥰', '😍', '💑', '💌', '💋'
  ];

  const loveMessages = Array(100)
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
        <title>Copy and Paste I Love You 100 Times ❤️ with Hearts [2024] 💝</title>
        <meta name="description" content="【INSTANT COPY】 Copy and paste I love you 100 times! ❤️ Beautiful heart emojis included 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024 ♥️ Perfect for WhatsApp, Instagram & more!" />
        <link rel="canonical" href="https://emojicollection.net/i-love-you-100-times" />
        <meta property="og:title" content="Copy and Paste I Love You 100 Times ❤️ with Hearts [2024] 💝" />
        <meta property="og:description" content="【INSTANT COPY】 Copy and paste I love you 100 times! ❤️ Beautiful heart emojis included 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024" />
        <meta property="og:url" content="https://emojicollection.net/i-love-you-100-times" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Copy and Paste I Love You 100 Times ❤️ with Hearts [2024] 💝" />
        <meta name="twitter:description" content="【INSTANT COPY】 Copy and paste I love you 100 times! ❤️ Beautiful heart emojis included 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024" />
        <meta name="keywords" content="copy and paste i love you 100 times, i love you copy paste, love messages, heart emojis, romantic messages, love emoji copy paste" />
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
                Copy and Paste I Love You 100 Times ❤️ with Hearts [2024] 💝
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to "I love you" written 100 times with beautiful heart emojis! Perfect for expressing deep love and affection. Each message comes with a randomly selected heart emoji. Updated for 2024 with the latest emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  💝 Copy "I Love You" 100 Times Instantly
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
                      Copy All Messages
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>💝 "I love you" written 100 times</p>
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
                  <summary className="cursor-pointer p-4 font-medium">How to copy and paste "I love you" 100 times?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Simply click the "Copy All Messages" button above, and all 100 "I love you" messages will be copied to your clipboard. Then paste them anywhere using Ctrl+V (Windows) or Cmd+V (Mac).
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

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">💕 Why Choose Our Love Messages</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>Our "Copy and Paste I Love You 100 Times" collection is specially crafted to help you express your deepest love in the most beautiful way. Each message is paired with carefully selected heart emojis that add color, emotion, and meaning to your expression of love.</p>
                <p>Whether you're celebrating a special occasion, wanting to surprise your loved one, or simply expressing your feelings, these 100 love messages provide the perfect way to say "I love you" in a meaningful and memorable way.</p>
                <p>With our instant copy feature, you can easily share these messages across any platform or device. The messages are regularly updated with the latest emojis to ensure you always have the most beautiful and current way to express your love.</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default ILoveYou100Times;