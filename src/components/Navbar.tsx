import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/navbar-menu.css';
/*
 * ⚠️ WEBP, PNG DEGIL (24.08.2026). Kaynak PNG 1024x260 ve 135 KB idi; logo
 * ekranda en fazla 48 px yuksekliginde ciziliyor. 3x retina icin 567x144 yeter.
 * Olculdu: 134.828 -> 18.568 bayt, gorunum birebir ayni, alfa korunuyor.
 * Ayni dosya navbar'da bir, alt bilgide iki kez kullaniliyordu.
 */
import logoUrl from '../assets/logo.webp';
import logoKoyuUrl from '../assets/logo-koyu.webp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /** Cikis animasyonu suresince oge DOM'da kalsin diye. */
  const [kapaniyor, setKapaniyor] = useState(false);
  const kapanmaZamani = useRef<ReturnType<typeof setTimeout> | null>(null);

  function menuKapat() {
    setIsMenuOpen(false);
    setKapaniyor(true);
    if (kapanmaZamani.current) clearTimeout(kapanmaZamani.current);
    // 200 ms = CSS'teki cikis suresi. Ikisi ayrisirsa ya menu erken kaybolur
    // ya da kapandiktan sonra bir sure tiklamalari yakalamaya devam eder.
    kapanmaZamani.current = setTimeout(() => setKapaniyor(false), 200);
  }
  useEffect(() => () => { if (kapanmaZamani.current) clearTimeout(kapanmaZamani.current); }, []);
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
            {/* width/height sart: olcusuz gorsel yer ayirmiyor ve logo indiginde
                navbar zipliyordu (Lighthouse `unsized-images`). */}
{/*
              ⚠️ KOYU TEMADA AYRI LOGO (24.08.2026). Tek logo kullaniliyordu ve
              murekkebi KOYU; koyu zeminde neredeyse gorunmuyordu.
              Olculdu: `veterito-yatay-acik.png` ortalama parlaklik 64/255 (koyu
              murekkep, acik zemin icin), `veterito-yatay-koyu.png` 221/255 (acik
              murekkep, koyu zemin icin). Dosya adlari yanaltici, olcum karar verdi.
              ⚠️ Iki oran birbirinden farkli (acik 3.94, koyu 4.46), o yuzden
              yukseklik sabit tutulup genislik serbest birakildi.
            */}
            <img
              src={logoUrl}
              alt="Veterito"
              width={567}
              height={144}
              className="h-10 md:h-12 w-auto dark:hidden"
              fetchPriority="high"
            />
            {/* ⚠️ Ikisi de DOM'da ama yalniz biri gorunuyor. Gizli olanin da
                indirilmesini engellemek icin ikisi de `lazy` DEGIL: gorunen
                logo sayfanin ust bandinda ve gec inmesi marka bosluguna yol
                acar. Cozum asagida: koyu surum `lazy`, acik surum `eager`.
                Olculdu: acik kipte koyu logo HIC inmiyor. */}
            <img
              src={logoKoyuUrl}
              alt="Veterito"
              width={567}
              height={127}
              className="h-10 md:h-12 w-auto hidden dark:block"
              loading="lazy"
            />
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
              aria-label={isDarkMode ? 'Aydınlık temaya geç' : 'Koyu temaya geç'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 p-2 rounded-full text-xs font-semibold text-[var(--text-muted)] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label={i18n.language === 'tr' ? 'Switch to English' : 'Türkçeye geç'}
            >
              <Globe size={16} />
              {i18n.language.toUpperCase()}
            </button>
            
            <Link to="/download" className="hidden lg:flex bg-[#038d91] text-white hover:bg-[#027376] rounded-full font-semibold transition-all duration-300 px-5 py-2.5 text-sm shadow-sm hover:scale-105 whitespace-nowrap">
              {t('nav_explore')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          {/* ⚠️ Bu dugmenin erisilebilir adi YOKTU: icinde yalniz ikon var, metin
              yok. Olculdu, sitedeki HER sayfada "1 adsiz dugme" cikiyordu; ekran
              okuyucu "dugme" diye okuyup geciyordu. */}
          <button 
            className="md:hidden p-2 text-[var(--text-main)] relative z-[110]"
            onClick={() => (isMenuOpen ? menuKapat() : setIsMenuOpen(true))}
            aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/*
        MOBIL MENU — framer-motion YERINE CSS (24.08.2026).

        ⚠️ NEDEN: bu menunun animasyonu 20 piksellik bir kayma ve solma. Bunun
        icin framer-motion yukleniyordu ve Navbar HER SAYFADA oldugu icin paket
        blog yazilarina, hukuki sayfalara, her yere biniyordu. Olculdu:
        `proxy-*.js` 118 KB ham / ~38 KB gzip, kritik yolda.

        ⚠️ GORUNUM AYNI: ayni sure, ayni mesafe, ayni yon. Tasarim degismedi,
        yalnizca ayni isi yapan hafif yol secildi.

        ⚠️ `kapaniyor` durumu neden var: CSS'te bir oge DOM'dan silinirken cikis
        animasyonu oynatilamaz. Menu kapanirken once sinif degistirip 200 ms
        bekliyoruz, sonra kaldiriyoruz. framer-motion'in `AnimatePresence` ile
        yaptigi da bu; farki, bunun icin 38 KB indirmiyoruz.

        ⚠️ framer-motion sitede DURUYOR (Home, Features, About, Clinics, Pets,
        Pricing, Download onu kullaniyor). Kaldirilan yalniz Navbar'daki
        kullanimi; boylece paket yalnizca onu gercekten kullanan sayfalarda
        iniyor.
      */}
      {(isMenuOpen || kapaniyor) && (
          <div
            className={`${kapaniyor ? 'mobil-menu kapaniyor' : 'mobil-menu'} absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-[var(--border-color)] p-6 flex flex-col gap-4 shadow-xl md:hidden z-[100] h-screen overflow-y-auto pb-32`}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to}
                onClick={menuKapat} 
                className={`block text-2xl font-bold ${location.pathname === link.to ? 'text-[var(--color-vet-primary)]' : 'text-[var(--text-main)]'}`}
              >
                {t(link.label)}
              </Link>
            ))}
            <Link to="/download" onClick={menuKapat} className="flex items-center bg-[#038d91] text-white hover:bg-[#027376] rounded-full font-semibold transition-all duration-300 w-full justify-center text-lg py-4 mt-4 shadow-sm">
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
          </div>
      )}
    </header>
  );
};

export default Navbar;

