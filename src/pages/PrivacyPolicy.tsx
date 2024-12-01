import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Emoji Collection</title>
        <meta name="description" content="Learn about how we collect, use, and protect your data at Emoji Collection. Our privacy policy explains our practices regarding cookies, advertising, and your privacy rights." />
        <link rel="canonical" href="https://emojicollection.net/privacy-policy" />
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-500 mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Last updated: {lastUpdated}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                At emojicollection.net, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website.
              </p>

              <h2>Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide when using our website, including:
              </p>
              <ul>
                <li>Name and email address when using our contact form</li>
                <li>Usage data and preferences</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
              </ul>

              <h2>Advertising</h2>
              <p>
                We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
              </p>
              <p>
                You may opt out of personalized advertising by visiting{' '}
                <a href="https://www.google.com/settings/ads" className="text-blue-500 hover:underline">Google Ads Settings</a>.
              </p>

              <h2>Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
                if you do not accept cookies, you may not be able to use some portions of our website.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to maintain the security of your personal information, 
                but remember that no method of transmission over the Internet is 100% secure.
              </p>

              <h2>Third-Party Privacy Policies</h2>
              <p>
                Our Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective 
                Privacy Policies of these third-party ad servers for more detailed information.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal 
                information from children under 13.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@emojicollection.net" className="text-blue-500 hover:underline">
                  privacy@emojicollection.net
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;