import React, { useState, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Users, BookOpen, Mail } from 'lucide-react';

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Divisions', href: '/divisions', icon: Globe },
    { name: 'Enrollment', href: '/enrollment', icon: Users },
    { name: 'Learning Platform', href: '/learning', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <header className="bg-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link to="/" className="flex items-center mr-8">
            <span className="text-2xl font-bold text-white">TUAN Creations (Africa) LTD</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-teal-500 text-white'
                      : 'text-indigo-100 hover:bg-teal-500 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-teal-500"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMenu}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'bg-teal-500 text-white'
                        : 'text-indigo-100 hover:bg-teal-500 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
