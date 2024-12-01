import React, { useState } from 'react';
import { ArrowLeft, Heart, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const LoveEmojis = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const loveEmojiGroups = [
    {
      title: "Heart Emojis",
      emojis: "❤️ 🧡 💛 💚 💙 💜 🤎 🖤 🤍 💔 ❤️‍🔥 ❤️‍🩹 ♥️ 💝 💖 💗 💓 💞 💕 💟 💌"
    },
    {
      title: "Love Face Emojis",
      emojis: "😍 🥰 😘 😚 😙 🥲 😊 ☺️ 😌 😻"
    },
    {
      title: "Couple & Love Emojis",
      emojis: "💑 👩‍❤️‍👨 👨‍❤️‍👨 👩‍❤️‍👩 💏 👩‍❤️‍💋‍👨 👨‍❤️‍💋‍👨 👩‍❤️‍💋‍👩 💋 💘 💝"
    },
    {
      title: "Love Gesture Emojis",
      emojis: "🫂 🤗 🫶 💝 💐 🌹 🫀"
    }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Love Emojis ❤️ Copy and Paste Love Emoji Collection [2024] 💝</title>
        <meta name="description" content="【INSTANT COPY】 All love emojis in one place! ❤️ Hearts, couples, kisses & more 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024 💕 Free love emojis for Instagram, WhatsApp & more!" />
        <link rel="canonical" href="https://emojicollection.net/love-emojis" />
        <meta property="og:title" content="Love Emojis ❤️ Copy and Paste Love Emoji Collection [2024] 💝" />
        <meta property="og:description" content="【INSTANT COPY】 All love emojis in one place! ❤️ Hearts, couples, kisses & more 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024" />
        <meta property="og:url" content="https://emojicollection.net/love-emojis" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Love Emojis ❤️ Copy and Paste Love Emoji Collection [2024] 💝" />
        <meta name="twitter:description" content="【INSTANT COPY】 All love emojis in one place! ❤️ Hearts, couples, kisses & more 💝 One-click copy & paste 💖 Works everywhere! Updated for 2024" />
        <meta name="keywords" content="love emojis, heart emojis, couple emojis, kiss emoji, love emoji copy paste, romantic emojis" />
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
                Love Emojis ❤️ Copy and Paste Love Emoji Collection [2024] 💝
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover our complete collection of love emojis! From hearts to couples, kisses to romantic gestures - find all the perfect emojis to express your love. Updated for 2024 with the latest emojis. One-click copy and paste for each category!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              {loveEmojiGroups.map((group, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {group.title}
                  </h2>
                  <div className="mb-4 text-3xl">
                    {group.emojis}
                  </div>
                  <button
                    onClick={() => handleCopy(group.emojis)}
                    className={`inline-flex items-center px-4 py-2 rounded-lg ${
                      copied
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600'
                    } transition-colors`}
                  >
                    {copied ? (
                      <>
                        <Check className="mr-2" size={20} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2" size={20} />
                        Copy {group.title}
                      </>
                    )}
                  </button>
                </div>
              ))}
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>❤️ Complete collection of love emojis</p>
                <p>💝 Organized by categories for easy use</p>
                <p>📋 One-click copy for each category</p>
                <p>💕 Works on all platforms and devices</p>
                <p>🆕 Updated for 2024 with latest emojis</p>
                <p>🔄 Regular updates with new emojis</p>
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
                  <summary className="cursor-pointer p-4 font-medium">Which love emojis are most popular?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    The red heart ❤️ is the most popular love emoji, followed by the face with hearts 🥰 and the smiling face with heart-eyes 😍. Different heart colors can convey different meanings and emotions.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Do these emojis work everywhere?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Yes! These love emojis work on all major platforms including Instagram, Facebook, WhatsApp, and more. They're compatible with both mobile and desktop devices.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">What do different heart colors mean?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Different heart colors can express various emotions: Red ❤️ for love, Yellow 💛 for friendship, Green 💚 for nature/health, Blue 💙 for trust, Purple 💜 for royalty/luxury, and Black 🖤 for deep/complex feelings.
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

export default LoveEmojis;