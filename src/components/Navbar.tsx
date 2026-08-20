import { Link, useLocation } from 'react-router-dom';
import { PawPrint, Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
// Removing old Navbar.css dependency to fully embrace Tailwind + index.css global styles

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass-nav shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50 group flex-1">
            <div className="bg-[var(--color-vet-primary)] text-white p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-[var(--color-vet-primary)]/20">
              <PawPrint size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold tracking-tight text-[var(--color-vet-primary)] dark:text-[var(--color-vet-primary-glow)]">
                Veterito<span className="text-[var(--color-vet-accent)]">.</span>
              </span>
              <span className="text-[0.65rem] font-bold text-[var(--text-muted)] -mt-1 hidden md:block uppercase tracking-wider whitespace-nowrap">{t('nav_subtitle', 'Pati Dostunuzun Dijital Sağlık Asistanı')}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 whitespace-nowrap text-sm xl:text-base flex-none">
            <Link to="/features" className={`font-bold transition-colors ${location.pathname === '/features' ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--color-vet-primary)]'}`}>{t('nav_features')}</Link>
            <Link to="/pets" className={`font-bold transition-colors ${location.pathname === '/pets' ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--color-vet-primary)]'}`}>{t('nav_pets')}</Link>
            <Link to="/clinics" className={`font-bold transition-colors ${location.pathname === '/clinics' ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--color-vet-primary)]'}`}>{t('nav_clinics')}</Link>
            <Link to="/pricing" className={`font-bold transition-colors ${location.pathname === '/pricing' ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--color-vet-primary)]'}`}>{t('nav_pricing')}</Link>
            <Link to="/about" className={`font-bold transition-colors ${location.pathname === '/about' ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--color-vet-primary)]'}`}>{t('nav_about')}</Link>
            <Link to="/blog" className={`font-bold transition-colors ${location.pathname === '/blog' ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--color-vet-primary)]'}`}>{t('nav_blog')}</Link>
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
            
            <Link to="/download" className="hidden lg:flex btn-primary px-5 py-2.5 text-sm shadow-lg shadow-[var(--color-vet-primary)]/30 hover:scale-105 animate-pulse-glow hover:animate-none whitespace-nowrap">
              {t('nav_explore')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-[var(--text-main)]"
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
            className="absolute top-full left-0 right-0 glass-nav border-t border-[var(--border-color)] p-6 flex flex-col gap-4 shadow-xl md:hidden"
          >
            <Link to="/features" onClick={() => setIsMenuOpen(false)} className={`block text-2xl font-bold ${location.pathname === '/features' ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-main)]'}`}>{t('nav_features')}</Link>
            <Link to="/pets" onClick={() => setIsMenuOpen(false)} className={`block text-2xl font-bold ${location.pathname === '/pets' ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-main)]'}`}>{t('nav_pets')}</Link>
            <Link to="/clinics" onClick={() => setIsMenuOpen(false)} className={`block text-2xl font-bold ${location.pathname === '/clinics' ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-main)]'}`}>{t('nav_clinics')}</Link>
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className={`block text-2xl font-bold ${location.pathname === '/pricing' ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-main)]'}`}>{t('nav_pricing')}</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`block text-2xl font-bold ${location.pathname === '/about' ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-main)]'}`}>{t('nav_about')}</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className={`block text-2xl font-bold ${location.pathname === '/blog' ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-main)]'}`}>{t('nav_blog')}</Link>
            <Link to="/download" onClick={() => setIsMenuOpen(false)} className="btn-primary w-full justify-center text-lg py-4 mt-4 shadow-xl shadow-[var(--color-vet-primary)]/30 animate-pulse-glow">
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
