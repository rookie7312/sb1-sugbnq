import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const buttonColors = [
  'bg-indigo-500',
  'bg-violet-500',
  'bg-fuchsia-500',
  'bg-purple-500',
  'bg-blue-500',
  'bg-cyan-500',
  'bg-teal-500',
  'bg-emerald-500'
];

const titleColors = [
  'text-indigo-600',
  'text-violet-600',
  'text-fuchsia-600',
  'text-purple-600',
  'text-blue-600',
  'text-cyan-600',
  'text-teal-600',
  'text-emerald-600'
];

const popularContent = [
  {
    path: '/hearts-1000',
    emojis: ['❤️', '💖', '💝'],
    title: '1000 Hearts Collection',
    description: 'Copy and paste 1000 beautiful heart emojis with just one click!',
    tag: 'Most Popular'
  },
  {
    path: '/roses-1000',
    emojis: ['🌹', '💐', '🌸'],
    title: '1000 Roses Collection',
    description: 'Get 1000 beautiful rose emojis instantly!',
    tag: 'Trending'
  },
  {
    path: '/i-love-you-10000',
    emojis: ['💝', '💕', '💗'],
    title: 'I Love You 10,000 Times',
    description: 'Express your love 10,000 times with beautiful emojis!',
    tag: 'Featured'
  },
  {
    path: '/kiss-1000',
    emojis: ['💋', '😘', '😚'],
    title: '1000 Kiss Emojis',
    description: 'Share 1000 romantic kiss emojis instantly!',
    tag: 'Popular'
  },
  {
    path: '/rainbow-hearts-1000',
    emojis: ['❤️', '💛', '💚'],
    title: '1000 Rainbow Hearts',
    description: 'Beautiful collection of colorful heart emojis!',
    tag: 'Colorful'
  },
  {
    path: '/christmas-1000',
    emojis: ['🎄', '🎅', '⛄'],
    title: '1000 Christmas Emojis',
    description: 'Spread holiday cheer with festive emojis!',
    tag: 'Seasonal'
  },
  {
    path: '/food-drink',
    emojis: ['🍕', '🍔', '🍟'],
    title: 'Food & Drink Collection',
    description: 'Perfect food and drink emojis for foodies!',
    tag: 'Tasty'
  },
  {
    path: '/party-1000',
    emojis: ['🎉', '🎊', '🎈'],
    title: '1000 Party Emojis',
    description: 'Celebrate with 1000 festive party emojis!',
    tag: 'Celebration'
  },
  {
    path: '/love-letter-1000',
    emojis: ['💌', '💘', '💝'],
    title: '1000 Love Letters',
    description: 'Send romantic love letter emojis!',
    tag: 'Romantic'
  }
];

export const PopularPosts = () => {
  const navigate = useNavigate();
  const [displayedPosts, setDisplayedPosts] = useState<typeof popularContent>([]);
  const [randomColors, setRandomColors] = useState<string[]>([]);
  const [randomTitleColors, setRandomTitleColors] = useState<string[]>([]);

  useEffect(() => {
    // Randomly select 6 posts without repetition
    const shuffledPosts = [...popularContent].sort(() => Math.random() - 0.5).slice(0, 6);
    setDisplayedPosts(shuffledPosts);

    // Shuffle colors
    setRandomColors([...buttonColors].sort(() => Math.random() - 0.5));
    setRandomTitleColors([...titleColors].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">Popular Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPosts.map((item, index) => (
          <div
            key={item.path}
            onClick={() => navigate(item.path)}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="p-6 flex flex-col items-center text-center h-full">
              <div className="relative mb-4">
                <div className="flex items-center justify-center space-x-1">
                  {item.emojis.map((emoji, i) => (
                    <span key={i} className="text-4xl transform group-hover:scale-110 transition-transform duration-300 block">
                      {emoji}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className={`text-xl font-extrabold ${randomTitleColors[index]} mb-2 group-hover:opacity-80 transition-opacity`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
              </div>
              <div className="mt-auto">
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${randomColors[index]} text-white`}>
                  {item.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;