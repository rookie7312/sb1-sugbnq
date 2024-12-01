import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { initializeAdsense } from '../utils/adsense';

const PrivacyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setIsVisible(true);
    } else {
      initializeAdsense();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
    initializeAdsense();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mr-4 text-sm text-gray-600">
            We use cookies and display ads to improve your experience. By using our site, you agree to our{' '}
            <Link to="/privacy-policy" className="text-[#ff0000] hover:underline">privacy policy</Link>{' '}
            and consent to our use of cookies and data collection for personalized advertising.
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <button
              onClick={handleAccept}
              className="bg-[#ff0000] text-white px-6 py-2 rounded-lg hover:bg-[#ff0000]/90 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyBanner;