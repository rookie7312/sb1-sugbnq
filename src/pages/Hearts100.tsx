import React, { useState } from 'react';
import { ArrowLeft, Heart, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Hearts100 = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const hearts = [
    '❤️', '💕', '💗', '💓', '💖', '💘', '💝', '💞', '💟', '♥️'
  ];

  const heartMessage = Array(100)
    .fill(null)
    .map(() => hearts[Math.floor(Math.random() * hearts.length)])
    .join('');

  const handleCopy = () => {
    navigator.clipboard.writeText(heartMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>100 Hearts Copy and Paste ❤️ Free Heart Emojis [2024] 💝</title>
        <meta name="description" content="【INSTANT COPY】 Get 100 hearts emoji ❤️ Perfect mix of heart emojis 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024 ♥️ Free heart emojis for Instagram, WhatsApp & more!" />
        <link rel="canonical" href="https://emojicollection.net/hearts-100" />
        <meta property="og:title" content="100 Hearts Copy and Paste ❤️ Free Heart Emojis [2024] 💝" />
        <meta property="og:description" content="【INSTANT COPY】 Get 100 hearts emoji ❤️ Perfect mix of heart emojis 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024 ♥️ Free heart emojis for Instagram, WhatsApp & more!" />
        <meta property="og:url" content="https://emojicollection.net/hearts-100" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="100 Hearts Copy and Paste ❤️ Free Heart Emojis [2024] 💝" />
        <meta name="twitter:description" content="【INSTANT COPY】 Get 100 hearts emoji ❤️ Perfect mix of heart emojis 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024 ♥️ Free heart emojis for Instagram, WhatsApp & more!" />
        <meta name="keywords" content="100 hearts emoji, heart emoji copy paste, heart emojis, love emoji, heart symbols, instagram hearts, whatsapp hearts, facebook hearts" />
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-500 mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                100 Hearts Copy and Paste ❤️ Free Heart Emojis [2024]
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to 100 beautiful heart emojis! Perfect for Instagram, WhatsApp, Facebook, and more. Updated for 2024 with the latest heart emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  💝 Copy 100 Hearts Instantly
                </h2>
                <div className="mb-4 overflow-auto max-h-96 text-left break-words text-2xl">
                  {heartMessage}
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
                      Copied 100 Hearts!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      Copy 100 Hearts
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>❤️ 100 carefully selected heart emojis</p>
                <p>💝 Beautiful mix of different heart styles</p>
                <p>📋 Instant one-click copy functionality</p>
                <p>💕 Works on all platforms and devices</p>
                <p>🆕 Updated for 2024 with latest emojis</p>
                <p>🔄 Fresh hearts generated every time</p>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">📱 Platform Compatibility</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Social Media</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Instagram posts & stories</li>
                    <li>Facebook updates</li>
                    <li>Twitter/X posts</li>
                    <li>TikTok captions</li>
                    <li>YouTube comments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Messaging Apps</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>WhatsApp messages</li>
                    <li>Telegram chats</li>
                    <li>Facebook Messenger</li>
                    <li>iMessage</li>
                    <li>SMS</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">🎯 Perfect Uses for 100 Hearts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Personal</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Love messages</li>
                    <li>Valentine's Day</li>
                    <li>Anniversaries</li>
                    <li>Birthday wishes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Social Media</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Post decorations</li>
                    <li>Story highlights</li>
                    <li>Profile bios</li>
                    <li>Comments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Creative</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Digital art</li>
                    <li>Text decoration</li>
                    <li>Pattern making</li>
                    <li>Borders</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">📝 How to Use</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">1. Copy the Hearts</h3>
                  <p className="text-gray-600">Click the "Copy 100 Hearts" button above. All hearts will be automatically copied to your clipboard.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">2. Paste Anywhere</h3>
                  <p className="text-gray-600">Use Ctrl+V (Windows) or Cmd+V (Mac) to paste the hearts wherever you want to use them.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">3. Create & Share</h3>
                  <p className="text-gray-600">Get creative! Use the hearts to make patterns, decorate messages, or express your love.</p>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">❓ Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Why choose 100 hearts?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    100 hearts provide the perfect balance - enough to make an impact while staying within platform character limits. It's ideal for most social media posts and messages.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Do these hearts work everywhere?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Yes! These heart emojis are universal and work on all major platforms including Instagram, Facebook, WhatsApp, and more. They're compatible with both mobile and desktop devices.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Are these hearts free to use?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Absolutely! Our heart emojis are completely free to use for both personal and commercial purposes. No attribution required.
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

export default Hearts100;