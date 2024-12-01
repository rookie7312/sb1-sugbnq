import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SitemapSection {
  title: string;
  links: {
    path: string;
    label: string;
    description?: string;
  }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: "Main Pages",
    links: [
      { path: "/", label: "Home", description: "Browse our collection of emoji combinations" },
      { path: "/about", label: "About", description: "Learn about Emoji Collection" },
      { path: "/blog", label: "Blog", description: "Read our latest articles about emojis" },
      { path: "/contact", label: "Contact", description: "Get in touch with us" },
      { path: "/search", label: "Search", description: "Find emojis and content" },
      { path: "/privacy-policy", label: "Privacy Policy", description: "Our privacy practices" }
    ]
  },
  {
    title: "Tools",
    links: [
      { path: "/text-to-emoji", label: "Text to Emoji Converter", description: "Convert text into emoji letters" },
      { path: "/text-to-emoji-picture", label: "Text to Emoji Picture", description: "Create emoji art from text" },
      { path: "/text-replicator", label: "Text Replicator", description: "Repeat text multiple times" },
      { path: "/count-duplicates", label: "Character Counter", description: "Count character frequencies" }
    ]
  },
  {
    title: "Love Messages",
    links: [
      { path: "/i-love-you-10", label: "I Love You × 10", description: "10 love messages" },
      { path: "/i-love-you-50", label: "I Love You × 50", description: "50 love messages" },
      { path: "/i-love-you-100", label: "I Love You × 100", description: "100 love messages" },
      { path: "/i-love-you-4000", label: "I Love You × 4000", description: "4000 love messages" },
      { path: "/i-love-you-5000", label: "I Love You × 5000", description: "5000 love messages" },
      { path: "/i-love-you-10000", label: "I Love You × 10000", description: "10000 love messages" },
      { path: "/i-love-you-100-roses", label: "I Love You with Roses × 100", description: "100 rose love messages" },
      { path: "/i-love-you-generator", label: "Love Message Generator", description: "Generate custom love messages" },
      { path: "/love-text-generator", label: "Love Text Generator", description: "Create personalized love texts" }
    ]
  },
  {
    title: "Heart Collections",
    links: [
      { path: "/hearts-2", label: "2 Hearts", description: "2 heart emojis" },
      { path: "/hearts-5", label: "5 Hearts", description: "5 heart emojis" },
      { path: "/hearts-10", label: "10 Hearts", description: "10 heart emojis" },
      { path: "/hearts-40", label: "40 Hearts", description: "40 heart emojis" },
      { path: "/hearts-50", label: "50 Hearts", description: "50 heart emojis" },
      { path: "/hearts-100", label: "100 Hearts", description: "100 heart emojis" },
      { path: "/hearts-1000", label: "1000 Hearts", description: "1000 heart emojis" },
      { path: "/yellow-hearts-5", label: "5 Yellow Hearts", description: "5 yellow heart emojis" },
      { path: "/purple-hearts-1000", label: "1000 Purple Hearts", description: "1000 purple heart emojis" },
      { path: "/rainbow-hearts-1000", label: "1000 Rainbow Hearts", description: "1000 rainbow heart emojis" },
      { path: "/love-hearts-2000", label: "2000 Love Hearts", description: "2000 love heart emojis" }
    ]
  },
  {
    title: "Kiss Collections",
    links: [
      { path: "/kiss-5", label: "5 Kisses", description: "5 kiss emojis" },
      { path: "/kiss-10", label: "10 Kisses", description: "10 kiss emojis" },
      { path: "/kiss-50", label: "50 Kisses", description: "50 kiss emojis" },
      { path: "/kiss-100", label: "100 Kisses", description: "100 kiss emojis" },
      { path: "/kiss-500", label: "500 Kisses", description: "500 kiss emojis" },
      { path: "/kiss-1000", label: "1000 Kisses", description: "1000 kiss emojis" }
    ]
  },
  {
    title: "Sad Collections",
    links: [
      { path: "/sad-5", label: "5 Sad Emojis", description: "5 sad emojis" },
      { path: "/sad-10", label: "10 Sad Emojis", description: "10 sad emojis" },
      { path: "/sad-50", label: "50 Sad Emojis", description: "50 sad emojis" },
      { path: "/sad-100", label: "100 Sad Emojis", description: "100 sad emojis" },
      { path: "/sad-500", label: "500 Sad Emojis", description: "500 sad emojis" },
      { path: "/sad-1000", label: "1000 Sad Emojis", description: "1000 sad emojis" }
    ]
  },
  {
    title: "Sorry Messages",
    links: [
      { path: "/sorry-1000", label: "Sorry × 1000", description: "1000 sorry messages" },
      { path: "/sorry-10000", label: "Sorry × 10000", description: "10000 sorry messages" }
    ]
  },
  {
    title: "Christmas Collections",
    links: [
      { path: "/happy-christmas-1", label: "Happy Christmas × 1", description: "Single Christmas message" },
      { path: "/happy-christmas-5", label: "Happy Christmas × 5", description: "5 Christmas messages" },
      { path: "/happy-christmas-10", label: "Happy Christmas × 10", description: "10 Christmas messages" },
      { path: "/happy-christmas-20", label: "Happy Christmas × 20", description: "20 Christmas messages" },
      { path: "/happy-christmas-30", label: "Happy Christmas × 30", description: "30 Christmas messages" },
      { path: "/happy-christmas-40", label: "Happy Christmas × 40", description: "40 Christmas messages" },
      { path: "/happy-christmas-50", label: "Happy Christmas × 50", description: "50 Christmas messages" },
      { path: "/christmas-tree-1000", label: "1000 Christmas Trees", description: "1000 Christmas tree emojis" },
      { path: "/christmas-1000", label: "1000 Christmas Emojis", description: "1000 Christmas-themed emojis" }
    ]
  },
  {
    title: "Rose Collections",
    links: [
      { path: "/roses-100", label: "100 Roses", description: "100 rose emojis" },
      { path: "/roses-1000", label: "1000 Roses", description: "1000 rose emojis" },
      { path: "/blue-roses-1000", label: "1000 Blue Roses", description: "1000 blue rose emojis" },
      { path: "/rose-hearts-1000", label: "1000 Rose Hearts", description: "1000 rose and heart combinations" }
    ]
  },
  {
    title: "Colored Love Messages",
    links: [
      { path: "/colored-love-5", label: "Colored Love × 5", description: "5 colored love messages" },
      { path: "/colored-love-10", label: "Colored Love × 10", description: "10 colored love messages" },
      { path: "/colored-love-15", label: "Colored Love × 15", description: "15 colored love messages" },
      { path: "/colored-love-40", label: "Colored Love × 40", description: "40 colored love messages" },
      { path: "/colored-love-50", label: "Colored Love × 50", description: "50 colored love messages" }
    ]
  },
  {
    title: "Other Collections",
    links: [
      { path: "/laugh-1000", label: "1000 Laugh Emojis", description: "1000 laughing emojis" },
      { path: "/party-1000", label: "1000 Party Emojis", description: "1000 party emojis" },
      { path: "/love-emojis", label: "Love Emoji Collection", description: "Complete love emoji collection" },
      { path: "/love-letter-emojis", label: "Love Letter Emojis", description: "Love letter emoji collection" },
      { path: "/love-letter-1000", label: "1000 Love Letters", description: "1000 love letter emojis" },
      { path: "/food-drink", label: "Food & Drink Emojis", description: "Food and drink emoji collection" }
    ]
  }
];

const Sitemap = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Sitemap
            </h1>
            <p className="text-lg text-gray-600">
              Explore all pages and tools available on Emoji Collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sitemapData.map((section, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#ff0000] border-b border-gray-200 pb-2">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.path}
                      className="group block p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#ff0000] transition-colors">
                            {link.label}
                          </h3>
                          {link.description && (
                            <p className="mt-1 text-sm text-gray-600">
                              {link.description}
                            </p>
                          )}
                        </div>
                        <ExternalLink 
                          className="w-5 h-5 text-gray-400 group-hover:text-[#ff0000] transition-colors" 
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;