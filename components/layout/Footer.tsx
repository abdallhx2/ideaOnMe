import React from 'react';
import { SocialLinks } from '../ui/SocialLinks';
import { socialLinks, navigationItems } from '@/utils/contants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="container">
        {/* القسم العلوي */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* معلومات الاتصال */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-500">Port</span>folio
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Let&apos;s work together to create something great.
            </p>
            <SocialLinks links={socialLinks} />
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Email: contact@example.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Location: City, Country</li>
            </ul>
          </div>
        </div>

        {/* القسم السفلي */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-300">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
              <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;