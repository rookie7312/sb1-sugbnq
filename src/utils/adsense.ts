import { useEffect } from 'react';

let adsenseInitialized = false;

export const initializeAdsense = () => {
  if (adsenseInitialized || typeof window === 'undefined') return;
  
  try {
    // Only initialize if consent is given
    if (localStorage.getItem('cookieConsent') !== 'true') {
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6423086412262403';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    // Initialize adsbygoogle
    if (!window.adsbygoogle) {
      window.adsbygoogle = [];
    }
    
    adsenseInitialized = true;
  } catch (err) {
    console.error('AdSense initialization error:', err);
  }
};

export const useAdsenseInit = () => {
  useEffect(() => {
    initializeAdsense();
  }, []);
};

// Add proper TypeScript types
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}