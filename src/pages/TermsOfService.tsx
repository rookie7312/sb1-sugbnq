import React from 'react';
import { ArrowLeft, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  const navigate = useNavigate();
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <>
      <Helmet>
        <title>Terms of Service - Emoji Collection</title>
        <meta name="description" content="Read our Terms of Service to understand the rules and guidelines for using Emoji Collection. Learn about our policies regarding content usage, advertising, and user responsibilities." />
        <link rel="canonical" href="https://emojicollection.net/terms-of-service" />
      </Helmet>

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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Scale className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Last updated: {lastUpdated}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using emojicollection.net ("the Website"), you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use the Website.
              </p>

              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily access and use the Website for personal, non-commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on the Website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2>3. Advertising and Third-Party Content</h2>
              <p>
                The Website displays advertisements provided by Google AdSense and may contain other third-party content. By using the Website, you acknowledge and agree that:
              </p>
              <ul>
                <li>We do not control the content of advertisements</li>
                <li>We are not responsible for third-party content or websites</li>
                <li>Your use of third-party websites is subject to their terms of service</li>
                <li>Advertisements may be personalized based on your browsing behavior</li>
              </ul>

              <h2>4. Intellectual Property</h2>
              <p>
                The emojis available on the Website are subject to their respective licenses and copyrights. The Website's design, layout, and original content are protected by copyright and other intellectual property laws.
              </p>

              <h2>5. User Content</h2>
              <p>
                If you submit content to the Website, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute your content.
              </p>

              <h2>6. Disclaimer</h2>
              <p>
                The materials on the Website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2>7. Limitations</h2>
              <p>
                In no event shall emojicollection.net or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Website.
              </p>

              <h2>8. Privacy Policy</h2>
              <p>
                Your use of the Website is also governed by our Privacy Policy. Please review our{' '}
                <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a>.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms of service at any time. We do so by posting modified terms on this page. Your continued use of the Website means you accept any changes.
              </p>

              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@emojicollection.net" className="text-blue-500 hover:underline">
                  legal@emojicollection.net
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;