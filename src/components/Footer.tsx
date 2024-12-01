import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Map, Mail, Info, FileText, Search, Shield, Scale } from 'lucide-react';
import AdUnit from './AdUnit';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2" />
              About
            </h3>
            <p className="text-gray-400 text-sm">
              emojicollection.net offers the web's most comprehensive collection of curated emoji 
              combinations for every occasion. Make your digital communication more expressive!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Search
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:hello@emojicollection.net" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  hello@emojicollection.net
                </a>
              </li>
              <li>
                <a href="mailto:legal@emojicollection.net" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  legal@emojicollection.net
                </a>
              </li>
              <li>
                <a href="mailto:privacy@emojicollection.net" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  privacy@emojicollection.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <AdUnit slot="footer-ad" format="horizontal" className="max-w-4xl mx-auto" />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} emojicollection.net. Made with 
            <Heart className="w-4 h-4 mx-1 text-indigo-500" /> 
            for the emoji community
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/sitemap" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center">
              <Map className="w-4 h-4 mr-1" />
              Sitemap
            </Link>
            <Link to="/search" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center">
              <Search className="w-4 h-4 mr-1" />
              Search
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;