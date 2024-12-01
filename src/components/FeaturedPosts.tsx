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

const allPages = [
  {
    path: '/hearts-1000',
    emojis: ['❤️', '💖', '💝'],
    title: '1000 Hearts',
    description: 'Copy and paste 1000 beautiful heart emojis!',
    tag: 'Popular'
  },
  {
    path: '/roses-1000',
    emojis: ['🌹', '💐', '🌸'],
    title: '1000 Roses',
    description: 'Beautiful collection of 1000 rose emojis!',
    tag: 'Trending'
  },
  {
    path: '/i-love-you-10000',
    emojis: ['💝', '💕', '💗'],
    title: 'I Love You 10,000 Times',
    description: 'Express your love 10,000 times with emojis!',
    tag: 'New'
  },
  {
    path: '/text-to-emoji',
    emojis: ['🔄', '✨', '💫'],
    title: 'Text to Emoji',
    description: 'Convert your text into emoji letters!',
    tag: 'Tool'
  }
];

const FeaturedPosts = () => {
  const navigate = useNavigate();
  const [randomPages, setRandomPages] = useState(allPages);
  const [randomColors, setRandomColors] = useState(buttonColors);
  const [randomTitleColors, setRandomTitleColors] = useState(titleColors);

  useEffect(() => {
    // Shuffle pages and colors on component mount
    setRandomPages([...allPages].sort(() => Math.random() - 0.5));
    setRandomColors([...buttonColors].sort(() => Math.random() - 0.5));
    setRandomTitleColors([...titleColors].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">Quick Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {randomPages.map((item, index) => (
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

export default FeaturedPosts;