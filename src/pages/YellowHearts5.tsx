import React from 'react';
import { ArrowLeft, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeartGenerator from '../components/HeartGenerator';

const YellowHearts5 = () => {
  const navigate = useNavigate();

  const yellowHearts = ['💛', '💛', '💛', '💛', '💛'];

  return (
    <>
      <Helmet>
        <title>5 Yellow Hearts Copy and Paste 💛 Free Yellow Heart Emojis [2024]</title>
        <meta name="description" content="【INSTANT COPY】 Get 5 yellow hearts emoji 💛 Perfect yellow heart emojis 💛 One-click copy & paste 💛 Works everywhere! Updated for 2024 💛 Free yellow heart emojis for Instagram, WhatsApp & more!" />
        <link rel="canonical" href="https://emojicollection.net/yellow-hearts-5" />
        <meta property="og:title" content="5 Yellow Hearts Copy and Paste 💛 Free Yellow Heart Emojis [2024]" />
        <meta property="og:description" content="【INSTANT COPY】 Get 5 yellow hearts emoji 💛 Perfect yellow heart emojis 💛 One-click copy & paste 💛 Works everywhere! Updated for 2024 💛 Free yellow heart emojis for Instagram, WhatsApp & more!" />
        <meta property="og:url" content="https://emojicollection.net/yellow-hearts-5" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="5 Yellow Hearts Copy and Paste 💛 Free Yellow Heart Emojis [2024]" />
        <meta name="twitter:description" content="【INSTANT COPY】 Get 5 yellow hearts emoji 💛 Perfect yellow heart emojis 💛 One-click copy & paste 💛 Works everywhere! Updated for 2024 💛 Free yellow heart emojis for Instagram, WhatsApp & more!" />
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
                <Heart className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                5 Yellow Hearts Copy and Paste 💛 Free Yellow Heart Emojis [2024]
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to 5 beautiful yellow heart emojis! Perfect for Instagram, WhatsApp, Facebook, and more. Updated for 2024 with the latest yellow heart emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <HeartGenerator count={5} hearts={yellowHearts} />
            </section>

            {/* Rest of the content similar to Hearts100.tsx but adapted for 5 yellow hearts */}
          </article>
        </div>
      </div>
    </>
  );
};

export default YellowHearts5;