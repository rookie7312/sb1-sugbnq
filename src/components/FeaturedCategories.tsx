import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, PartyPopper, Gift, Star, Smile, Flower2, Music, Coffee } from 'lucide-react';

const categories = [
  {
    title: 'Love & Hearts',
    icon: Heart,
    description: 'Express your love with beautiful heart emojis',
    path: '/hearts-1000',
    emoji: '❤️',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Celebrations',
    icon: PartyPopper,
    description: 'Perfect for parties and special occasions',
    path: '/party-1000',
    emoji: '🎉',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Christmas',
    icon: Gift,
    description: 'Spread holiday cheer with festive emojis',
    path: '/christmas-1000',
    emoji: '🎄',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Romance',
    icon: Star,
    description: 'Romantic emojis for special moments',
    path: '/roses-1000',
    emoji: '🌹',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    title: 'Expressions',
    icon: Smile,
    description: 'Show your emotions with expressive emojis',
    path: '/love-emojis',
    emoji: '😊',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Nature',
    icon: Flower2,
    description: 'Beautiful nature and flower emojis',
    path: '/blue-roses-1000',
    emoji: '🌸',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    title: 'Celebrations',
    icon: Music,
    description: 'Party and celebration emojis',
    path: '/party-1000',
    emoji: '🎈',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Food & Drink',
    icon: Coffee,
    description: 'Delicious food and drink emojis',
    path: '/food-drink',
    emoji: '🍕',
    gradient: 'from-orange-500 to-red-500'
  }
];

const FeaturedCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">Featured Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => navigate(category.path)}
            className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <category.icon className="w-6 h-6 text-indigo-600 mr-2" />
                  <span className="text-2xl">{category.emoji}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                  <svg className="w-4 h-4 text-indigo-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;