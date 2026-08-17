import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { brandConfig } from '../config/brand';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { path: '/', label: t('nav_home') },
    { path: '/features', label: t('nav_features') },
    { path: '/pets', label: t('nav_pets') },
    { path: '/clinics', label: t('nav_clinics') },
    { path: '/about', label: t('nav_about') },
    { path: '/blog', label: t('nav_blog') },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Stethoscope className="logo-icon" size={28} />
          <span className="logo-text">{brandConfig.name}</span>
        </Link>

        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="nav-actions">
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="lang-switcher" onClick={toggleLanguage} aria-label="Toggle language">
              <Globe size={18} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            <a href="#download" className="btn btn-primary nav-cta" onClick={() => setIsMenuOpen(false)}>
              {t('nav_get_app')}
            </a>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
