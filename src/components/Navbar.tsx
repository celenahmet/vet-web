import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import logoUrl from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { to: "/features", label: "nav_features" },
    // { to: "/pets", label: "nav_pets" },
    { to: "/clinics", label: "nav_clinics" },
    { to: "/pricing", label: "nav_pricing" },
    { to: "/about", label: "nav_about" },
    { to: "/blog", label: "nav_blog" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'py-3 glass-nav shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center z-[110] flex-1 hover:opacity-80 transition-opacity">
            <img src={logoUrl} alt="Veterito Logo" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 whitespace-nowrap text-sm xl:text-base flex-none">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className={`font-bold transition-colors ${location.pathname === link.to ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--color-vet-primary)]'}`}
              >
                {t(link.label)}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center justify-end gap-4 flex-1">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className="p-2 rounded-full text-[var(--text-muted)] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 p-2 rounded-full text-xs font-semibold text-[var(--text-muted)] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <Globe size={16} />
              {i18n.language.toUpperCase()}
            </button>
            
            <Link to="/pricing" className="hidden lg:flex bg-[var(--color-vet-secondary)] text-white hover:bg-[var(--color-vet-accent)] rounded-full font-semibold transition-all duration-300 px-5 py-2.5 text-sm shadow-sm hover:scale-105 whitespace-nowrap">
              {t('nav_explore')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-[var(--text-main)] relative z-[110]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-[var(--border-color)] p-6 flex flex-col gap-4 shadow-xl md:hidden z-[100] h-screen overflow-y-auto pb-32"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)} 
                className={`block text-2xl font-bold ${location.pathname === link.to ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-main)]'}`}
              >
                {t(link.label)}
              </Link>
            ))}
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="flex items-center bg-[var(--color-vet-secondary)] text-white hover:bg-[var(--color-vet-accent)] rounded-full font-semibold transition-all duration-300 w-full justify-center text-lg py-4 mt-4 shadow-sm">
              {t('nav_explore')}
            </Link>
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-4">
                <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-3 bg-black/5 dark:bg-white/10 rounded-full">
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={toggleLanguage} className="p-3 bg-black/5 dark:bg-white/10 rounded-full flex items-center gap-2">
                  <Globe size={20} /> <span className="font-semibold text-sm">{i18n.language.toUpperCase()}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

