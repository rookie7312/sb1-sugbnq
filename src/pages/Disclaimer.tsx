import React from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
  const navigate = useNavigate();
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <>
      <Helmet>
        <title>Disclaimer - Emoji Collection</title>
        <meta name="description" content="Read our disclaimer to understand the nature of our emoji content, copyright information, and usage guidelines. Learn about proper attribution and fair use of emojis from our collection." />
        <link rel="canonical" href="https://emojicollection.net/disclaimer" />
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Disclaimer
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Last updated: {lastUpdated}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>1. Emoji Usage and Copyright</h2>
              <p>
                The emojis available on emojicollection.net are subject to their respective licenses and copyrights. 
                We do not claim ownership of any emoji designs. Emojis are provided by various platforms and are subject 
                to their respective terms of use and licensing agreements.
              </p>

              <h2>2. Content Accuracy</h2>
              <p>
                While we strive to keep the information on our website accurate and up-to-date, we make no 
                representations or warranties of any kind, express or implied, about the completeness, accuracy, 
                reliability, suitability, or availability of the information, products, services, or related graphics 
                contained on the website.
              </p>

              <h2>3. Fair Use and Attribution</h2>
              <p>
                When using emojis from our collection, please ensure you comply with fair use guidelines and provide 
                appropriate attribution where required. Some specific guidelines include:
              </p>
              <ul>
                <li>Respect copyright and trademark rights</li>
                <li>Use emojis in accordance with platform-specific guidelines</li>
                <li>Provide attribution when required by specific licenses</li>
                <li>Do not claim ownership of emoji designs</li>
              </ul>

              <h2>4. Third-Party Content</h2>
              <p>
                Our website may include content from third-party sources. We are not responsible for and do not 
                endorse any third-party content. Users should verify the accuracy and reliability of any third-party 
                information independently.
              </p>

              <h2>5. Commercial Use</h2>
              <p>
                If you intend to use emojis for commercial purposes, please:
              </p>
              <ul>
                <li>Verify the commercial use rights for specific emojis</li>
                <li>Obtain necessary licenses or permissions</li>
                <li>Comply with platform-specific commercial use guidelines</li>
                <li>Seek legal advice when necessary</li>
              </ul>

              <h2>6. Platform Compatibility</h2>
              <p>
                Emoji appearance may vary across different platforms and devices. We do not guarantee that emojis 
                will appear exactly as shown on our website across all platforms. Users should test emoji compatibility 
                on their intended platforms before use.
              </p>

              <h2>7. User Responsibility</h2>
              <p>
                Users are responsible for:
              </p>
              <ul>
                <li>Verifying emoji compatibility on their intended platforms</li>
                <li>Ensuring appropriate use in their specific context</li>
                <li>Complying with relevant laws and regulations</li>
                <li>Obtaining necessary permissions for specific uses</li>
              </ul>

              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or 
                indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul>
                <li>Your use or inability to use our website</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from our website</li>
                <li>Any bugs, viruses, or other harmful code that may be transmitted</li>
              </ul>

              <h2>9. Changes to Disclaimer</h2>
              <p>
                We reserve the right to update or modify this disclaimer at any time without prior notice. By 
                continuing to use our website, you acknowledge and agree to any changes made to this disclaimer.
              </p>

              <h2>Contact Information</h2>
              <p>
                If you have any questions about this disclaimer, please contact us at{' '}
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

export default Disclaimer;