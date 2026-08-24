import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Instagram, X, TikTok, YouTube, LinkedIn, Facebook } from './SosyalIkonlar';
import { useTranslation } from 'react-i18next';
import { brandConfig } from '../config/brand';
import logoUrl from '../assets/logo.webp';
import logoKoyuUrl from '../assets/logo-koyu.webp';

/**
 * Hesap adi -> ikon eslesmesi. `brand.ts` yalniz veri tutuyor, cizim burada.
 * ⚠️ Yeni hesap eklenirse hem `brand.ts` listesine hem buraya girmeli; eksik
 * kalirsa asagidaki `Ikon` tanimsiz olur ve alt bilgi cizilemez.
 */
const SOSYAL_IKON: Record<string, (p: { boyut?: number }) => React.JSX.Element> = {
  Instagram, X, TikTok, YouTube, LinkedIn, Facebook,
};

const Footer = () => {
  const { t } = useTranslation();
  const year = 2026;

  return (
    <footer className="snap-end relative z-10 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="flex flex-col gap-4">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              {/*
              ⚠️ KOYU TEMADA AYRI LOGO (24.08.2026). Tek logo kullaniliyordu ve
              murekkebi KOYU; koyu zeminde neredeyse gorunmuyordu.
              Olculdu: `veterito-yatay-acik.png` ortalama parlaklik 64/255 (koyu
              murekkep, acik zemin icin), `veterito-yatay-koyu.png` 221/255 (acik
              murekkep, koyu zemin icin). Dosya adlari yanaltici, olcum karar verdi.
              ⚠️ Iki oran birbirinden farkli (acik 3.94, koyu 4.46), o yuzden
              yukseklik sabit tutulup genislik serbest birakildi.
            */}
              <img src={logoUrl} alt="Veterito" width={567} height={144} loading="lazy" className="h-10 md:h-12 w-auto dark:hidden" />
              <img src={logoKoyuUrl} alt="Veterito" width={567} height={127} loading="lazy" className="h-10 md:h-12 w-auto hidden dark:block" />
            </Link>
            <p className="max-w-xs text-sm mt-2">
              {t('footer_desc')}
            </p>
            {/*
              ⚠️ ONCEKI UC IKONUN IKISI YANLISTI (duzeltme 24.08.2026):
                · Dunya ikonu `veterito.com` adresine gidiyordu — sitenin alt
                  bilgisinden yine ayni siteye baglanti.
                · Sohbet ikonu "Community" diye etiketlenmisti ama `/legal`
                  sayfasina, yani sozlesmelere gidiyordu. Etiketiyle gittigi yer
                  farkli olan baglanti, calismayan baglantidan kotudur.
              Yerlerini gercek hesaplar aldi. Liste `config/brand.ts` icinde,
              burada tekrar yazilmiyor.
            */}
            <div className="flex gap-4 mt-4">
              {brandConfig.sosyal.filter((h) => h.altBilgide).map((hesap) => {
                const Ikon = SOSYAL_IKON[hesap.ad];
                return (
                  <a
                    key={hesap.ad}
                    href={hesap.adres}
                    aria-label={`Veterito ${hesap.ad}`}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    <Ikon boyut={20} />
                  </a>
                );
              })}
              <a href={`mailto:${brandConfig.social.contactEmail}`} aria-label="E-posta gönder" className="hover:text-emerald-600 transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{t('footer_explore')}</h3>
              <Link to="/features" className="text-sm hover:text-emerald-600 transition-colors">{t('nav_features')}</Link>
              <Link to="/pets" className="text-sm hover:text-emerald-600 transition-colors">{t('nav_pets')}</Link>
              <Link to="/clinics" className="text-sm hover:text-emerald-600 transition-colors">{t('nav_clinics')}</Link>
              <Link to="/about" className="text-sm hover:text-emerald-600 transition-colors">{t('nav_about')}</Link>
              <Link to="/blog" className="text-sm hover:text-emerald-600 transition-colors">{t('nav_blog')}</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{t('footer_legal')}</h3>
              <Link to="/privacy" className="text-sm hover:text-emerald-600 transition-colors">{t('footer_privacy')}</Link>
              <Link to="/terms" className="text-sm hover:text-emerald-600 transition-colors">{t('footer_terms')}</Link>
              <Link to="/deletion" className="text-sm hover:text-emerald-600 transition-colors">{t('footer_deletion')}</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{t('footer_contact')}</h3>
            <Link to="/contact" className="text-sm hover:text-emerald-600 transition-colors">{t('contact_title')}</Link>
              <a href={`mailto:${brandConfig.social.contactEmail}`} className="text-sm hover:text-emerald-600 transition-colors">{brandConfig.social.contactEmail}</a>
            </div>
          </div>
        </div>
        
        {/*
          ⚠️ ALT SATIR ORTALANDI (Ahmet, 24.08.2026). Onceden `justify-between`
          idi: telif metni en solda, kucuk logo en sagda ve aralarinda 1280
          piksellik bir bosluk kaliyordu. Iki kucuk oge o genislige yayilinca
          satir dagilmis gorunuyordu; ortada tek grup olarak daha derli toplu.
        */}
        <div className="relative pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-sm flex flex-col md:flex-row justify-center items-center gap-4">
          <p>{t('footer_copyright').replace('{{year}}', year.toString()).replace('Veterito', brandConfig.name)}</p>
          {/*
            ⚠️ KUCUK LOGO MUTLAK KONUMLU, EN SAGDA (Ahmet, 24.08.2026).
            Once `justify-between` idi ve telif metni de sola yapisiyordu; sonra
            ikisi birlikte ortalandi ama Ahmet logonun sagda durmasini istedi.
            Ucuncu hal: metin ORTADA, logo SAGDA. Bunu tek satirda `justify`
            ile yapmak mumkun degil (iki oge, uc konum), o yuzden logo akistan
            cikarilip mutlak konumlandi.
            ⚠️ Telefonda mutlak konum kalkiyor: orada satirlar alt alta diziliyor
            ve logo metnin ustune binerdi.
          */}
          <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all md:absolute md:right-0">
            <img src={logoUrl} alt="Veterito" width={567} height={144} loading="lazy" className="h-5 md:h-6 w-auto dark:hidden" />
            <img src={logoKoyuUrl} alt="Veterito" width={567} height={127} loading="lazy" className="h-5 md:h-6 w-auto hidden dark:block" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
