import React, { useEffect, useRef } from 'react';
import { useAdsenseInit } from '../utils/adsense';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  style?: React.CSSProperties;
  className?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({ slot, format = 'auto', style, className = '' }) => {
  const adRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  useAdsenseInit();

  useEffect(() => {
    if (adRef.current && !initialized.current && window.adsbygoogle) {
      try {
        window.adsbygoogle.push({});
        initialized.current = true;
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  if (!localStorage.getItem('cookieConsent')) {
    return null;
  }

  return (
    <div className={`ad-container ${className}`} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
          minHeight: '90px',
          ...style,
        }}
        data-ad-client="ca-pub-6423086412262403"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdUnit;