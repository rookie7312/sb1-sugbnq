import React from 'react';
import { ArrowLeft, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeartGenerator from '../components/HeartGenerator';

const Hearts2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>2 Hearts Copy and Paste ❤️ Free Heart Emojis [2024] 💝</title>
        <meta name="description" content="【INSTANT COPY】 Get 2 hearts emoji ❤️ Perfect mix of heart emojis 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024 ♥️ Free heart emojis for Instagram, WhatsApp & more!" />
        <link rel="canonical" href="https://emojicollection.net/hearts-2" />
        <meta property="og:title" content="2 Hearts Copy and Paste ❤️ Free Heart Emojis [2024] 💝" />
        <meta property="og:description" content="【INSTANT COPY】 Get 2 hearts emoji ❤️ Perfect mix of heart emojis 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024 ♥️ Free heart emojis for Instagram, WhatsApp & more!" />
        <meta property="og:url" content="https://emojicollection.net/hearts-2" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2 Hearts Copy and Paste ❤️ Free Heart Emojis [2024] 💝" />
        <meta name="twitter:description" content="【INSTANT COPY】 Get 2 hearts emoji ❤️ Perfect mix of heart emojis 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024 ♥️ Free heart emojis for Instagram, WhatsApp & more!" />
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
                2 Hearts Copy and Paste ❤️ Free Heart Emojis [2024]
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to 2 beautiful heart emojis! Perfect for Instagram, WhatsApp, Facebook, and more. Updated for 2024 with the latest heart emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <HeartGenerator count={2} />
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>❤️ 2 carefully selected heart emojis</p>
                <p>💝 Beautiful mix of different heart styles</p>
                <p>📋 Instant one-click copy functionality</p>
                <p>💕 Works on all platforms and devices</p>
                <p>🆕 Updated for 2024 with latest emojis</p>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">📱 Perfect For</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Social Media</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Instagram posts & stories</li>
                    <li>Facebook updates</li>
                    <li>Twitter/X posts</li>
                    <li>TikTok captions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Messaging</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>WhatsApp messages</li>
                    <li>Text messages</li>
                    <li>Email signatures</li>
                    <li>Direct messages</li>
                  </ul>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default Hearts2;