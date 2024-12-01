import React, { useState } from 'react';
import { ArrowLeft, Heart, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Kiss1000 = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const kissEmojis = [
    '💋', '😘', '😚', '😗', '😙', '💏', '👩‍❤️‍💋‍👨', '👨‍❤️‍💋‍👨', '👩‍❤️‍💋‍👩', '❤️'
  ];

  const kisses = Array(1000)
    .fill(null)
    .map(() => kissEmojis[Math.floor(Math.random() * kissEmojis.length)])
    .join('');

  const handleCopy = () => {
    navigator.clipboard.writeText(kisses);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>1000 Kiss Emojis 💋 Copy and Paste [2024] 😘 Free Kiss Collection</title>
        <meta name="description" content="【INSTANT COPY】 Get 1000 kiss emojis! 💋 Perfect mix of romantic kisses 😘 One-click copy & paste 💋 Works everywhere! Updated for 2024 😚 Free kiss emojis for Instagram, WhatsApp & more!" />
        <link rel="canonical" href="https://emojicollection.net/kiss-1000" />
        <meta property="og:title" content="1000 Kiss Emojis 💋 Copy and Paste [2024] 😘 Free Kiss Collection" />
        <meta property="og:description" content="【INSTANT COPY】 Get 1000 kiss emojis! 💋 Perfect mix of romantic kisses 😘 One-click copy & paste 💋 Works everywhere! Updated for 2024" />
        <meta property="og:url" content="https://emojicollection.net/kiss-1000" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="1000 Kiss Emojis 💋 Copy and Paste [2024] 😘 Free Kiss Collection" />
        <meta name="twitter:description" content="【INSTANT COPY】 Get 1000 kiss emojis! 💋 Perfect mix of romantic kisses 😘 One-click copy & paste 💋 Works everywhere! Updated for 2024" />
        <meta name="keywords" content="1000 kiss emojis, kiss emoji copy paste, kiss emojis, romantic emojis, love emoji, kiss symbols, instagram kisses, whatsapp kisses" />
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
                <span className="text-2xl">💋</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                1000 Kiss Emojis 💋 Copy and Paste [2024] 😘 Free Kiss Collection
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to 1000 beautiful kiss emojis! Perfect for expressing love and affection on Instagram, WhatsApp, Facebook, and more. Each kiss is carefully selected to create a stunning display of romance. Updated for 2024 with the latest emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  💋 Copy 1000 Kiss Emojis Instantly
                </h2>
                <div className="mb-4 overflow-auto max-h-96 text-left break-words text-2xl">
                  {kisses}
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
                      Copied 1000 Kisses!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      Copy 1000 Kisses
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>💋 1000 beautiful kiss emojis</p>
                <p>😘 Perfect mix of romantic kisses</p>
                <p>📋 Instant one-click copy functionality</p>
                <p>💕 Works on all platforms and devices</p>
                <p>🆕 Updated for 2024 with latest emojis</p>
                <p>🔄 Fresh combinations generated every time</p>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">📱 Perfect For</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Romance</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Love messages</li>
                    <li>Valentine's Day</li>
                    <li>Anniversaries</li>
                    <li>Date nights</li>
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
                  <summary className="cursor-pointer p-4 font-medium">Why use kiss emojis?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Kiss emojis are perfect for expressing affection, love, and romance. They add a playful and romantic touch to your messages and social media posts.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Do these kisses work everywhere?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Yes! These kiss emojis are universal and work on all major platforms including Instagram, Facebook, WhatsApp, and more. They're compatible with both mobile and desktop devices.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Are these kisses free to use?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Absolutely! Our kiss emojis are completely free to use for both personal and commercial purposes. No attribution required.
                  </div>
                </details>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">💋 Why Choose Our Kiss Collection</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>Our collection of 1000 kiss emojis is specially curated to help you express love and affection in the most beautiful way. Each kiss emoji is carefully selected to create a perfect blend of romantic expressions.</p>
                <p>Whether you're sending a romantic message, creating engaging social media content, or just want to show your love, these 1000 kisses provide the perfect way to express your feelings.</p>
                <p>With our instant copy feature, you can easily share these kisses across any platform or device. The collection is regularly updated with the latest emojis to ensure you always have the most beautiful and current way to express your affection.</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default Kiss1000;