import React, { useState } from 'react';
import { ArrowLeft, Flower2, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Roses100 = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const roses = '🌹'.repeat(100);

  const handleCopy = () => {
    navigator.clipboard.writeText(roses);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>100 Red Roses Copy and Paste 🌹 Free Rose Emojis [2024]</title>
        <meta name="description" content="【INSTANT COPY】 Get 100 red roses emoji 🌹 Perfect for expressing love and romance 🌹 One-click copy & paste 🌹 Works everywhere! Updated for 2024 🌹 Free rose emojis for Instagram, WhatsApp & more!" />
        <link rel="canonical" href="https://emojicollection.net/roses-100" />
        <meta property="og:title" content="100 Red Roses Copy and Paste 🌹 Free Rose Emojis [2024]" />
        <meta property="og:description" content="【INSTANT COPY】 Get 100 red roses emoji 🌹 Perfect for expressing love and romance 🌹 One-click copy & paste 🌹 Works everywhere! Updated for 2024 🌹 Free rose emojis for Instagram, WhatsApp & more!" />
        <meta property="og:url" content="https://emojicollection.net/roses-100" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="100 Red Roses Copy and Paste 🌹 Free Rose Emojis [2024]" />
        <meta name="twitter:description" content="【INSTANT COPY】 Get 100 red roses emoji 🌹 Perfect for expressing love and romance 🌹 One-click copy & paste 🌹 Works everywhere! Updated for 2024 🌹 Free rose emojis for Instagram, WhatsApp & more!" />
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
                <Flower2 className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                100 Red Roses Copy and Paste 🌹 Free Rose Emojis [2024]
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to 100 beautiful red rose emojis! Perfect for expressing love, romance, and appreciation. Updated for 2024 with the latest rose emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  🌹 Copy 100 Roses Instantly
                </h2>
                <div className="mb-4 overflow-auto max-h-96 text-left break-words text-2xl">
                  {roses}
                </div>
                <button
                  onClick={handleCopy}
                  className={`inline-flex items-center px-6 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="mr-2" size={20} />
                      Copied 100 Roses!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      Copy 100 Roses
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>🌹 100 beautiful red rose emojis</p>
                <p>💝 Perfect for expressing love and romance</p>
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
              <h2 className="text-2xl font-semibold mb-4">🎯 Perfect Uses for 100 Roses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Romance</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Love messages</li>
                    <li>Valentine's Day</li>
                    <li>Anniversaries</li>
                    <li>Date invitations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Celebrations</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Birthdays</li>
                    <li>Weddings</li>
                    <li>Graduations</li>
                    <li>Special events</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Appreciation</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Thank you notes</li>
                    <li>Congratulations</li>
                    <li>Support messages</li>
                    <li>Friendship</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">❓ Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Why use rose emojis?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Rose emojis are universally recognized symbols of love, beauty, and appreciation. They add a romantic and elegant touch to your messages and social media posts.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Do these roses work everywhere?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Yes! These rose emojis are universal and work on all major platforms including Instagram, Facebook, WhatsApp, and more. They're compatible with both mobile and desktop devices.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Are these roses free to use?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Absolutely! Our rose emojis are completely free to use for both personal and commercial purposes. No attribution required.
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

export default Roses100;