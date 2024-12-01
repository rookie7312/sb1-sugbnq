import React from 'react';
import AdUnit from './AdUnit';

interface AdLayoutProps {
  children: React.ReactNode;
}

const AdLayout: React.FC<AdLayoutProps> = ({ children }) => {
  return (
    <div className="w-full">
      {/* Top Banner Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[970px] mx-auto mb-6">
          <AdUnit 
            slot="1234567890"
            format="horizontal"
            className="min-h-[90px] bg-gray-50"
          />
        </div>

        {/* Main Content with Side Ad */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {children}
          </div>

          {/* Sidebar Ad */}
          <aside className="lg:w-[300px] shrink-0">
            <AdUnit 
              slot="0987654321"
              format="vertical"
              className="min-h-[600px] bg-gray-50 sticky top-6"
            />
          </aside>
        </div>

        {/* Bottom Banner Ad */}
        <div className="w-full max-w-[970px] mx-auto mt-6">
          <AdUnit 
            slot="5432109876"
            format="horizontal"
            className="min-h-[90px] bg-gray-50"
          />
        </div>
      </div>
    </div>
  );
};

export default AdLayout;