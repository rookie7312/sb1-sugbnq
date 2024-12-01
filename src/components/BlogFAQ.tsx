import React from 'react';
import type { FAQ } from '../utils/blogUtils';

interface BlogFAQProps {
  faqs: FAQ[];
}

const BlogFAQ: React.FC<BlogFAQProps> = ({ faqs }) => {
  return (
    <div className="space-y-6 my-8">
      <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-white rounded-lg shadow-sm"
          >
            <summary className="list-none cursor-pointer p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-gray-400 group-open:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default BlogFAQ;