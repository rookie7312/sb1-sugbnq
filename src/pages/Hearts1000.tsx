import React, { useState } from 'react';
import { ArrowLeft, Heart, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Hearts1000 = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const hearts = [
    '❤️', '💖', '💝', '💕', '💗', '💓', '💘', '💞', '💟', '♥️'
  ];

  const heartMessage = Array(1000)
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
        <title>1000 Hearts Copy and Paste ❤️ Free Heart Emojis [2024] 💝</title>
        <meta name="description" content="【INSTANT COPY】 Get 1000 beautiful heart emojis! ❤️ Perfect mix of love hearts 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024 ♥️ Express your love with our curated heart collection!" />
        <link rel="canonical" href="https://emojicollection.net/hearts-1000" />
        <meta property="og:title" content="1000 Hearts Copy and Paste ❤️ Free Heart Emojis [2024] 💝" />
        <meta property="og:description" content="【INSTANT COPY】 Get 1000 beautiful heart emojis! ❤️ Perfect mix of love hearts 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024" />
        <meta property="og:url" content="https://emojicollection.net/hearts-1000" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="1000 Hearts Copy and Paste ❤️ Free Heart Emojis [2024] 💝" />
        <meta name="twitter:description" content="【INSTANT COPY】 Get 1000 beautiful heart emojis! ❤️ Perfect mix of love hearts 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024" />
        <meta name="keywords" content="1000 hearts, heart emoji copy paste, heart emojis, love emoji, heart symbols, instagram hearts, whatsapp hearts, facebook hearts" />
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
                1000 Hearts Copy and Paste ❤️ Free Heart Emojis [2024] 💝
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to 1000 beautiful heart emojis! Perfect for expressing love on Instagram, WhatsApp, Facebook, and more. Each heart is carefully selected to create a stunning visual impact. Updated for 2024 with the latest heart emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  💝 Copy 1000 Hearts Instantly
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
                      Copied 1000 Hearts!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      Copy 1000 Hearts
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>❤️ 1000 carefully selected heart emojis</p>
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
              <h2 className="text-2xl font-semibold mb-4">🎯 Perfect Uses for 1000 Hearts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Romance</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Love messages</li>
                    <li>Valentine's Day</li>
                    <li>Anniversaries</li>
                    <li>Proposals</li>
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
                  <summary className="cursor-pointer p-4 font-medium">Why use 1000 hearts?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    1000 hearts create a stunning visual impact that truly expresses the magnitude of your feelings. It's perfect for making your messages stand out and showing the depth of your emotions.
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

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">💕 Why Choose Our Heart Collection</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>Our 1000 hearts collection is specially curated to help you express love in the most beautiful way possible. Each heart is carefully selected from different styles and variations to create a visually stunning and emotionally impactful message.</p>
                <p>Whether you're celebrating a special occasion, wanting to surprise someone special, or simply expressing your feelings, these 1000 hearts provide the perfect way to show the magnitude of your emotions.</p>
                <p>With our instant copy feature, you can easily share these hearts across any platform or device. The hearts are regularly updated with the latest emoji designs to ensure you always have the most beautiful and current way to express your love.</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default Hearts1000;