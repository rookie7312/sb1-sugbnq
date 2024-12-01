import React from 'react';
import { ArrowLeft, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeartGenerator from '../components/HeartGenerator';

const Hearts50 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>50 Hearts Copy and Paste ❤️ Free Heart Emojis [2024] 💝</title>
        <meta name="description" content="【INSTANT COPY】 Get 50 hearts emoji ❤️ Perfect mix of heart emojis 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024 ♥️ Free heart emojis for Instagram, WhatsApp & more!" />
        <link rel="canonical" href="https://emojicollection.net/hearts-50" />
        <meta property="og:title" content="50 Hearts Copy and Paste ❤️ Free Heart Emojis [2024] 💝" />
        <meta property="og:description" content="【INSTANT COPY】 Get 50 hearts emoji ❤️ Perfect mix of heart emojis 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024 ♥️ Free heart emojis for Instagram, WhatsApp & more!" />
        <meta property="og:url" content="https://emojicollection.net/hearts-50" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="50 Hearts Copy and Paste ❤️ Free Heart Emojis [2024] 💝" />
        <meta name="twitter:description" content="【INSTANT COPY】 Get 50 hearts emoji ❤️ Perfect mix of heart emojis 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024 ♥️ Free heart emojis for Instagram, WhatsApp & more!" />
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
                50 Hearts Copy and Paste ❤️ Free Heart Emojis [2024]
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to 50 beautiful heart emojis! Perfect for Instagram, WhatsApp, Facebook, and more. Updated for 2024 with the latest heart emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <HeartGenerator count={50} />
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>❤️ 50 carefully selected heart emojis</p>
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
              <h2 className="text-2xl font-semibold mb-4">🎯 Perfect Uses for 50 Hearts</h2>
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
              <h2 className="text-2xl font-semibold mb-4">❓ Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Why choose 50 hearts?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    50 hearts provide a perfect balance - enough to make a strong visual impact while being suitable for most social media posts and messages.
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

export default Hearts50;