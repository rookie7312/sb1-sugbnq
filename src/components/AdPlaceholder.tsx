import React from 'react';

interface AdPlaceholderProps {
  slot: 'sidebar' | 'in-article' | 'footer';
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ slot, className = '' }) => {
  // This component serves as a placeholder for future AdSense ads
  return (
    <div 
      className={`ad-placeholder ${className} min-h-[250px] bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200`}
      data-ad-slot={slot}
    >
      <div className="text-center p-4">
        <p className="text-gray-500 text-sm">Advertisement</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;