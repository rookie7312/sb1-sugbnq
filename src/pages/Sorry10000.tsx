import React, { useState } from 'react';
import { ArrowLeft, Heart, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Sorry10000 = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const sorryEmojis = [
    '🥺', '😢', '😔', '💔', '🙏', '😿', '💝', '🫂', '❤️', '😭'
  ];

  const sorryMessages = Array(10000)
    .fill(null)
    .map(() => `Sorry ${sorryEmojis[Math.floor(Math.random() * sorryEmojis.length)]}`)
    .join('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(sorryMessages);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Sorry 10,000 Times 🥺 Copy and Paste with Emojis [2024] 💔</title>
        <meta name="description" content="【INSTANT COPY】 Say Sorry 10,000 times with beautiful emojis! 🥺 Perfect for sincere apologies 💔 One-click copy & paste 🙏 Works everywhere! Updated for 2024" />
        <link rel="canonical" href="https://emojicollection.net/sorry-10000" />
        <meta property="og:title" content="Sorry 10,000 Times 🥺 Copy and Paste with Emojis [2024] 💔" />
        <meta property="og:description" content="【INSTANT COPY】 Say Sorry 10,000 times with beautiful emojis! 🥺 Perfect for sincere apologies 💔 One-click copy & paste 🙏 Works everywhere!" />
        <meta property="og:url" content="https://emojicollection.net/sorry-10000" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sorry 10,000 Times 🥺 Copy and Paste with Emojis [2024] 💔" />
        <meta name="twitter:description" content="【INSTANT COPY】 Say Sorry 10,000 times with beautiful emojis! 🥺 Perfect for sincere apologies 💔 One-click copy & paste 🙏 Works everywhere!" />
        <meta name="keywords" content="sorry 10000 times, sorry copy paste, apology messages, sorry emoji, apologize messages, sorry emoji copy paste" />
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
                <span className="text-2xl">🥺</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Sorry 10,000 Times 🥺 Copy and Paste with Emojis [2024] 💔
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Express your deepest apologies with 10,000 heartfelt "Sorry" messages! Perfect for showing true remorse and sincerity. Each message comes with a carefully selected emoji. Updated for 2024 with the latest emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  🥺 Copy 10,000 Sorry Messages Instantly
                </h2>
                <div className="mb-4 overflow-auto max-h-96 text-left whitespace-pre-wrap">
                  {sorryMessages}
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
                      Copied All Messages!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      Copy 10,000 Sorry Messages
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Benefits</h2>
              <div className="text-gray-600 space-y-4">
                <p>🥺 10,000 heartfelt sorry messages</p>
                <p>💔 Each message with a unique emoji</p>
                <p>📋 Instant one-click copy functionality</p>
                <p>🙏 Works on all platforms and devices</p>
                <p>🆕 Updated for 2024 with latest emojis</p>
                <p>🔄 Fresh messages generated every time</p>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">📱 Perfect For</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Personal Apologies</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Sincere apologies</li>
                    <li>Making amends</li>
                    <li>Asking forgiveness</li>
                    <li>Showing remorse</li>
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
                  <summary className="cursor-pointer p-4 font-medium">Why say "Sorry" 10,000 times?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Saying "Sorry" 10,000 times demonstrates the depth of your remorse and sincerity. It's a powerful way to show how truly sorry you are and your commitment to making things right.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Will these messages work everywhere?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Yes! These sorry messages work on all major platforms including Instagram, Facebook, WhatsApp, and more. They're compatible with both mobile and desktop devices.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Can I customize the messages?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    After copying, you can add personal touches like names, specific apologies, or additional messages to make them even more meaningful and sincere.
                  </div>
                </details>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">💔 Why Choose Our Sorry Messages</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>Our "Sorry 10,000 Times" collection is specially crafted to help you express genuine remorse and sincere apologies. Each message is paired with carefully selected emojis that add emotion and sincerity to your apology.</p>
                <p>Whether you're trying to make amends, ask for forgiveness, or show how truly sorry you are, these 10,000 messages provide the perfect way to express your feelings in a meaningful way.</p>
                <p>With our instant copy feature, you can easily share these messages across any platform or device. The messages are regularly updated with the latest emojis to ensure you always have the most effective way to say sorry.</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default Sorry10000;