import React, { useState } from 'react';
import { ArrowLeft, Utensils, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FoodDrink = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const foodDrinkEmojis = [
    // Foods
    '🍕', '🍔', '🍟', '🌭', '🍿', '🧂', '🥨', '🥯', '🥖', '🥐',
    '🍞', '🥜', '🌰', '🥑', '🥬', '🥒', '🥦', '🥗', '🥙', '🥪',
    '🌮', '🌯', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟',
    '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥡', '🥩', '🍗', '🍖',
    '🦴', '🌶️', '🍄', '🥕', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖',
    // Fruits
    '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒',
    '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑',
    // Sweets
    '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🧁', '🥧', '🍫',
    '🍬', '🍭', '🍮', '🍯',
    // Drinks
    '☕', '🍵', '🍶', '🍾', '🍷', '🍸', '🍹', '🍺', '🍻', '🥂',
    '🥃', '🥤', '🧃', '🧉', '🧊'
  ].join('');

  const handleCopy = () => {
    navigator.clipboard.writeText(foodDrinkEmojis);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Food and Drink Emojis 🍕🍷 Copy and Paste Collection [2024]</title>
        <meta name="description" content="【INSTANT COPY】 Get 100+ food & drink emojis 🍕 Perfect for foodies & restaurants 🍷 One-click copy & paste 🍔 Works everywhere! Updated for 2024 🍜 Free food emojis for Instagram, WhatsApp & more!" />
        <link rel="canonical" href="https://emojicollection.net/food-drink" />
        <meta property="og:title" content="Food and Drink Emojis 🍕🍷 Copy and Paste Collection [2024]" />
        <meta property="og:description" content="【INSTANT COPY】 Get 100+ food & drink emojis 🍕 Perfect for foodies & restaurants 🍷 One-click copy & paste 🍔 Works everywhere! Updated for 2024 🍜" />
        <meta property="og:url" content="https://emojicollection.net/food-drink" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Food and Drink Emojis 🍕🍷 Copy and Paste Collection [2024]" />
        <meta name="twitter:description" content="【INSTANT COPY】 Get 100+ food & drink emojis 🍕 Perfect for foodies & restaurants 🍷 One-click copy & paste 🍔 Works everywhere! Updated for 2024 🍜" />
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                <Utensils className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Food and Drink Emojis 🍕🍷 Copy and Paste Collection [2024]
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant access to 100+ delicious food and drink emojis! Perfect for restaurants, food bloggers, and foodies. Updated for 2024 with the latest emojis. One-click copy and paste feature!
              </p>
            </header>

            <section className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  🍽️ Copy All Food & Drink Emojis
                </h2>
                <div className="mb-4 overflow-auto max-h-96 text-left break-words text-2xl">
                  {foodDrinkEmojis}
                </div>
                <button
                  onClick={handleCopy}
                  className={`inline-flex items-center px-6 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="mr-2" size={20} />
                      Copied All Emojis!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={20} />
                      Copy All Emojis
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-4">✨ Features & Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">🍕 Fast Food</h3>
                  <p className="text-gray-600">Pizza, burgers, fries, hotdogs, and more quick bites</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">🍱 World Cuisine</h3>
                  <p className="text-gray-600">Sushi, tacos, pasta, curry, and global delicacies</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">🍷 Beverages</h3>
                  <p className="text-gray-600">Coffee, tea, wine, cocktails, and refreshing drinks</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">🍰 Desserts</h3>
                  <p className="text-gray-600">Cakes, ice cream, cookies, and sweet treats</p>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">🎯 Perfect For</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Restaurants</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Menu descriptions</li>
                    <li>Social media posts</li>
                    <li>Special offers</li>
                    <li>Food promotions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Food Bloggers</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Recipe posts</li>
                    <li>Food reviews</li>
                    <li>Instagram stories</li>
                    <li>Blog content</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Personal Use</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Food diaries</li>
                    <li>Party planning</li>
                    <li>Meal sharing</li>
                    <li>Food messages</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-semibold mb-4">❓ FAQ</h2>
              <div className="space-y-4">
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Where can I use these food emojis?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    These food and drink emojis work everywhere - Instagram, Facebook, WhatsApp, Twitter, and any other platform that supports emojis. They're perfect for social media, messaging apps, and digital content.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">Are these emojis free to use?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    Yes! All emojis in this collection are completely free to use for both personal and commercial purposes. No attribution required.
                  </div>
                </details>
                <details className="group bg-gray-50 rounded-lg">
                  <summary className="cursor-pointer p-4 font-medium">How often are new emojis added?</summary>
                  <div className="p-4 pt-0 text-gray-600">
                    We regularly update our collection with new food and drink emojis as they become available through Unicode updates. Our collection is always current with the latest emoji standards.
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

export default FoodDrink;