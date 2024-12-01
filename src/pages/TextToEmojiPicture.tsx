import React, { useState } from 'react';
import { ArrowLeft, Image, Copy, Check, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const emojiPalettes = {
  basic: ['⬛', '⬜'],
  colorful: ['🟥', '🟧', '🟨', '🟩', '🟦', '🟪', '⬜'],
  hearts: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤍'],
  nature: ['🌳', '🌲', '🌴', '🌵', '🌿', '☘️', '⭐'],
  faces: ['😀', '😊', '🙂', '😄', '😎', '🥳', '😇'],
  symbols: ['⭕', '❌', '⚡', '💫', '✨', '🌟', '⚪'],
};

const TextToEmojiPicture = () => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(20);
  const [palette, setPalette] = useState<keyof typeof emojiPalettes>('basic');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const createEmojiPicture = (text: string): string => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    
    // Set canvas size based on font size
    canvas.width = fontSize * text.length;
    canvas.height = fontSize * 1.5;
    
    // Draw text
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = 'black';
    ctx.fillText(text, 0, fontSize);
    
    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // Convert to emoji grid
    let result = '';
    const selectedPalette = emojiPalettes[palette];
    const threshold = 128;
    const blockSize = Math.ceil(fontSize / 2);
    
    for (let y = 0; y < canvas.height; y += blockSize) {
      for (let x = 0; x < canvas.width; x += blockSize) {
        let sum = 0;
        let count = 0;
        
        // Calculate average brightness for this block
        for (let by = 0; by < blockSize && y + by < canvas.height; by++) {
          for (let bx = 0; bx < blockSize && x + bx < canvas.width; bx++) {
            const i = ((y + by) * canvas.width + (x + bx)) * 4;
            const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
            sum += brightness;
            count++;
          }
        }
        
        const avgBrightness = sum / count;
        
        // Map brightness to emoji
        if (avgBrightness < threshold) {
          const index = Math.floor((avgBrightness / threshold) * (selectedPalette.length - 1));
          result += selectedPalette[index];
        } else {
          result += selectedPalette[selectedPalette.length - 1];
        }
      }
      result += '\n';
    }
    
    return result;
  };

  const emojiPicture = text ? createEmojiPicture(text) : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(emojiPicture);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-500 mb-4">
              <Image className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Text to Emoji Picture Generator
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Create beautiful emoji art from your text! Choose from different emoji palettes and customize the size to create unique emoji pictures.
            </p>

            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label htmlFor="text" className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Enter Text
                </label>
                <input
                  type="text"
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type something..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fontSize" className="block text-left text-sm font-medium text-gray-700 mb-2">
                    Size
                  </label>
                  <input
                    type="range"
                    id="fontSize"
                    min="10"
                    max="40"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="palette" className="block text-left text-sm font-medium text-gray-700 mb-2">
                    Emoji Palette
                  </label>
                  <select
                    id="palette"
                    value={palette}
                    onChange={(e) => setPalette(e.target.value as keyof typeof emojiPalettes)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="basic">Basic (Black & White)</option>
                    <option value="colorful">Colorful Squares</option>
                    <option value="hearts">Hearts</option>
                    <option value="nature">Nature</option>
                    <option value="faces">Faces</option>
                    <option value="symbols">Symbols</option>
                  </select>
                </div>
              </div>

              {text && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="mb-4 overflow-auto max-h-96 text-left whitespace-pre font-mono">
                    {emojiPicture}
                  </div>
                  <button
                    onClick={handleCopy}
                    className={`inline-flex items-center px-4 py-2 rounded-lg ${
                      copied
                        ? 'bg-green-500 text-white'
                        : 'bg-purple-500 text-white hover:bg-purple-600'
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
                        Copy Result
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-4">Features & Tips</h2>
            <div className="text-gray-600 space-y-4">
              <p>✨ Convert text into emoji art patterns</p>
              <p>🎨 Multiple emoji palettes to choose from</p>
              <p>📏 Adjustable size for different effects</p>
              <p>📋 Easy copy and paste functionality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToEmojiPicture;