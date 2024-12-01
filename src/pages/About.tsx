import React from 'react';
import { Heart, Globe, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
              About emojicollection.net
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                emojicollection.net is dedicated to exploring and explaining the rich world of emojis,
                helping people understand the deeper meanings and cultural significance behind
                these universal symbols of digital communication.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-[#FF8C00] mb-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To make digital communication more expressive and meaningful through the power of emojis.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-[#FF8C00] mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                  <p className="text-gray-600">
                    Bridging cultural gaps and fostering understanding through universal emoji language.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-[#FF8C00] mb-4">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-gray-600">
                    Building a vibrant community of emoji enthusiasts and digital communicators.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded by a group of digital communication enthusiasts, emojicollection.net began as
                a simple idea to document and explain emoji meanings. Today, we've grown into
                a comprehensive platform that explores the intersection of digital communication,
                culture, and human expression.
              </p>

              <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
              <p className="text-gray-600">
                Whether you're a casual emoji user or a digital communication professional,
                emojicollection.net is your gateway to understanding and mastering the art of emoji
                expression. Join our community and be part of the evolution of digital
                communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;