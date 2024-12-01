import React, { useState } from 'react';
import { ArrowLeft, Flower2, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlueRoses1000 = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const blueRoses = '💠'.repeat(1000);

  const handleCopy = () => {
    navigator.clipboard.writeText(blueRoses);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>1000 Blue Roses Copy and Paste 💠 Free Blue Rose Emojis [2024]</title>
        <meta name="description" content="【INSTANT COPY】 Get 1000 blue roses emoji 💠 Perfect for expressing unique love and romance 💠 One-click copy & paste 💠 Works everywhere! Updated for 2024 💠 Free blue rose emojis for Instagram, WhatsApp & more!" />
        <link rel="canonical" href="https://emojicollection.net/emoji/blue-roses-1000" />
        <meta property="og:title" content="1000 Blue Roses Copy and Paste 💠 Free Blue Rose Emojis [2024]" />
        <meta property="og:description" content="【INSTANT COPY】 Get 1000 blue roses emoji 💠 Perfect for expressing unique love and romance 💠 One-click copy & paste 💠 Works everywhere! Updated for 2024 💠" />
        <meta property="og:url" content="https://emojicollection.net/emoji/blue-roses-1000" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="1000 Blue Roses Copy and Paste 💠 Free Blue Rose Emojis [2024]" />
        <meta name="twitter:description" content="【INSTANT COPY】 Get 1000 blue roses emoji 💠 Perfect for expressing unique love and romance 💠 One-click copy & paste 💠 Works everywhere! Updated for 2024 💠" />
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-500 mb-4">
                <Flower2 className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                1000 Blue Roses Copy and Paste 💠 Free Blue Rose Emojis [2024]
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to 1000 beautiful blue rose emojis! Perfect for Instagram, WhatsApp, Facebook, and more. Updated for 2024 with the latest rose emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  💠 Copy 1000 Blue Roses Instantly
                </h2>
                <div className="mb-4 overflow-auto max-h-96 text-left break-words text-2xl">
                  {blueRoses}
                </div>
                <button
                  onClick={handleCopy}
                  className={`inline-flex items-center px-6 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="mr-2" size={20} />
                      Copied 1000 Blue Roses!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      Copy 1000 Blue Roses
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>💠 1000 beautiful blue rose emojis</p>
                <p>💝 Perfect for expressing unique love</p>
                <p>📋 Instant one-click copy functionality</p>
                <p>💕 Works on all platforms and devices</p>
                <p>🆕 Updated for 2024 with latest emojis</p>
                <p>🔄 Fresh roses ready to share</p>
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
              <h2 className="text-2xl font-semibold mb-4">🎯 Perfect Uses for Blue Roses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Romance</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Unique love messages</li>
                    <li>Valentine's Day</li>
                    <li>Anniversaries</li>
                    <li>Special occasions</li>
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
                  <h3 className="text-lg font-medium mb-2">Special Events</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Weddings</li>
                    <li>Engagements</li>
                    <li>Date nights</li>
                    <li>Celebrations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">❓ Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Why choose blue roses?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Blue roses symbolize mystery, the impossible, and the unattainable. They're perfect for expressing unique and extraordinary love that goes beyond the ordinary.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Do these roses work everywhere?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Yes! These blue rose emojis are universal and work on all major platforms including Instagram, Facebook, WhatsApp, and more. They're compatible with both mobile and desktop devices.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Are these roses free to use?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Absolutely! Our blue rose emojis are completely free to use for both personal and commercial purposes. No attribution required.
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

export default BlueRoses1000;