import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Why Us', path: '/why-us' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            alt="Logo Icon" 
            className="h-7 w-7 rounded bg-primary p-1" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY6XHzjKBV6-AvLuLObPTRPQKjQZpTZj6oUqocwehPTs-O1I3upzon6FsDJ5b5aIoFsJV19LWTK6yWf2jWcnEZzQx7yOfK8eTUxv9LJeQ9nahg4t3_5vQ3a6Ty3sF8ijHAAXsPxpWx3IypNLFl-pSlW71kKnxjQOfzRDTUflq0pqWfBgPvUBA4c1sUUmDw6LMc7KAVsJl_SsqPGGPjqt1qGQYUeyjSx95fcJG9M7qjMVTBVn3loElrBvw2hf-0_9KgjsogSrD_hZsW" 
          />
          <span className="font-display font-bold text-xl tracking-tight text-primary dark:text-white">Staffona</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${
                isActive(link.path)
                  ? 'text-primary dark:text-secondary-bright'
                  : 'text-slate-600 dark:text-slate-400 hover:text-primary transition-colors'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link 
              to="/contact" 
              className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
           <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          <button className="p-1" onClick={toggleMenu}>
            {isOpen ? <X className="text-primary dark:text-white" /> : <Menu className="text-primary dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-white dark:bg-background-dark transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
             <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <img 
                    alt="Logo Icon" 
                    className="h-7 w-7 rounded bg-primary p-1" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY6XHzjKBV6-AvLuLObPTRPQKjQZpTZj6oUqocwehPTs-O1I3upzon6FsDJ5b5aIoFsJV19LWTK6yWf2jWcnEZzQx7yOfK8eTUxv9LJeQ9nahg4t3_5vQ3a6Ty3sF8ijHAAXsPxpWx3IypNLFl-pSlW71kKnxjQOfzRDTUflq0pqWfBgPvUBA4c1sUUmDw6LMc7KAVsJl_SsqPGGPjqt1qGQYUeyjSx95fcJG9M7qjMVTBVn3loElrBvw2hf-0_9KgjsogSrD_hZsW" 
                />
                <span className="font-display font-bold text-xl tracking-tight text-primary dark:text-white">Staffona</span>
            </Link>
            <button className="p-2" onClick={toggleMenu}>
              <X size={32} className="text-slate-900 dark:text-white" />
            </button>
          </div>
          <nav className="flex flex-col space-y-8 text-2xl font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'text-primary dark:text-secondary-bright'
                    : 'hover:text-primary dark:hover:text-secondary-bright transition-colors text-slate-600 dark:text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/contact')
                    ? 'text-primary dark:text-secondary-bright'
                    : 'hover:text-primary dark:hover:text-secondary-bright transition-colors text-slate-600 dark:text-slate-400'
                }`}
              >
                Contact
              </Link>
          </nav>
          <div className="mt-auto pb-10">
            <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="block w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg text-center"
            >
                Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
