import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { navigationItems } from '@/utils/contants';

interface NavigationItem {
  id: string;
  label: string;
}

interface NavigationProps {
  items?: NavigationItem[];
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  items = navigationItems,
  activeSection,
  onNavigate,
  theme,
  onToggleTheme
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-blue-500">Port</span>folio
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`
                transition-colors duration-300 relative
                ${activeSection === item.id
                  ? 'text-blue-500'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }
              `}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          
          <button
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`
                block w-full text-left py-2 px-4
                ${activeSection === item.id
                  ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};