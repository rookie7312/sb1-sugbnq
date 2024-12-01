import React, { useState, useRef } from 'react';
import { ArrowLeft, Hash, Copy, Check, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DuplicateCount {
  value: string;
  count: number;
}

const CountDuplicates = () => {
  const [text, setText] = useState('');
  const [splitBy, setSplitBy] = useState('character');
  const [copied, setCopied] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'text/plain') {
      setFileError('Please upload a .txt file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setText(content);
      setFileError('');
    };
    reader.onerror = () => {
      setFileError('Error reading file');
    };
    reader.readAsText(file);
  };

  const countDuplicates = (): DuplicateCount[] => {
    if (!text) return [];

    const items = splitBy === 'character' 
      ? Array.from(text)
      : text.split(/\s+/).filter(Boolean);

    const counts = items.reduce((acc: { [key: string]: number }, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(counts)
      .map(([value, count]) => ({ value, count }))
      .sort((a, b) => b.count - a.count);
  };

  const duplicates = countDuplicates();
  const totalCount = duplicates.reduce((sum, item) => sum + item.count, 0);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
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
            <img 
              src="https://images.unsplash.com/photo-1555952494-efd681c7e3f9?auto=format&fit=crop&w=800&q=80" 
              alt="Character and Word Counter Tool - Analyze Text Frequency"
              className="w-full h-48 object-cover rounded-xl mb-8"
            />
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-500 mb-4">
              <Hash className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Text Analysis & Frequency Counter Tool
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Analyze your text instantly with our powerful frequency counter. Count characters, words, or emojis and discover patterns in your content. Perfect for writers, data analysts, and content creators who need to understand text composition. Upload files or paste text directly - get instant results with detailed frequency analysis.
            </p>

            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label htmlFor="text" className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Enter Text or Upload File
                </label>
                <div className="space-y-4">
                  <textarea
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter or paste text to analyze frequency..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  
                  <div className="flex flex-col items-center">
                    <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-purple-500 transition-colors"
                         onClick={() => fileInputRef.current?.click()}>
                      <div className="flex flex-col items-center">
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">Click to upload a .txt file</p>
                        <p className="text-xs text-gray-500 mt-1">or drag and drop</p>
                      </div>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".txt"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    {fileError && (
                      <p className="text-red-500 text-sm mt-2">{fileError}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Analysis Type
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="character"
                      checked={splitBy === 'character'}
                      onChange={(e) => setSplitBy(e.target.value)}
                      className="text-purple-500 focus:ring-purple-500"
                    />
                    <span className="ml-2">Characters/Emojis</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="word"
                      checked={splitBy === 'word'}
                      onChange={(e) => setSplitBy(e.target.value)}
                      className="text-purple-500 focus:ring-purple-500"
                    />
                    <span className="ml-2">Words</span>
                  </label>
                </div>
              </div>

              {text && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="text-left mb-4">
                    <p className="text-sm text-gray-600">
                      Total {splitBy === 'character' ? 'characters' : 'words'}: {totalCount}
                    </p>
                    <p className="text-sm text-gray-600">
                      Unique {splitBy === 'character' ? 'characters' : 'words'}: {duplicates.length}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {duplicates.map(({ value, count }) => (
                      <div
                        key={value}
                        className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{value}</span>
                          <span className="text-sm text-gray-500">
                            ({count} {count === 1 ? 'time' : 'times'})
                          </span>
                        </div>
                        <button
                          onClick={() => handleCopy(value)}
                          className={`inline-flex items-center px-3 py-1 rounded text-sm ${
                            copied === value
                              ? 'bg-green-500 text-white'
                              : 'bg-purple-500 text-white hover:bg-purple-600'
                          } transition-colors`}
                        >
                          {copied === value ? (
                            <>
                              <Check className="mr-1" size={14} />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="mr-1" size={14} />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <div className="text-gray-600 space-y-4">
              <p>📊 Instant character and word frequency analysis</p>
              <p>📁 Support for text file uploads</p>
              <p>🔄 Switch between character and word counting modes</p>
              <p>📋 Quick copy functionality for results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDuplicates;