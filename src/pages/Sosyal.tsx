import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Eye, Play, X as Kapat } from 'lucide-react';
import SEO from '../components/SEO';
import { brandConfig } from '../config/brand';
import { ELLE_GONDERILER, type SosyalGonderi, type SosyalPlatform } from '../data/sosyal';
import { Instagram, LinkedIn, TikTok, X, YouTube } from '../components/SosyalIkonlar';
import './Sosyal.css';

/**
 * /social — "Sosyal medyada biz" (Ahmet 30.10: "her sosyal medyada son 5 post ve populer
 * postlarimiz yer alacak, kullanici degistirip goruntuleyebilecek, standarti yeniler";
 * "youtube da videolar shorts vs gozukur"; adres /social).
 *
 * Ustte platform sekmeleri, her platformda "Yeni" (varsayilan) ve "Populer", 5'er kart.
 * VERI: YouTube derlemede kendiliginden (scripts/sosyal-youtube.mjs -> /sosyal/youtube.json,
 * kucuk resimler kendi alan adimizda); digerleri src/data/sosyal.ts listesinden.
 * Gonderisi olmayan platformda o hesaba giden PROFIL KARTI (yer tutucu metin yok).
 * Kartlar duz baglanti: sayfada Instagram/TikTok/YouTube betigi yuklenmiyor, cerez yok.
 */
type Platform = { anahtar: SosyalPlatform; ad: string; kullanici: string; adres: string; Ikon: (p: { boyut?: number }) => React.JSX.Element };

const IKON: Record<SosyalPlatform, Platform['Ikon']> = { instagram: Instagram, tiktok: TikTok, youtube: YouTube, x: X, linkedin: LinkedIn };
const SIRA: SosyalPlatform[] = ['instagram', 'tiktok', 'youtube', 'x', 'linkedin'];
const KART = 5;
// Turkce bulunma eki platforma gore degisiyor (TikTok'ta, X'te, LinkedIn'de); kalip "{{ag}}'da"
// uc platformda yanlis olurdu. Ingilizce metin {{ag}} kullaniyor.
const KONUM: Record<SosyalPlatform, string> = {
  instagram: "Instagram'da", tiktok: "TikTok'ta", youtube: "YouTube'da", x: "X'te", linkedin: "LinkedIn'de",
};

const PLATFORMLAR: Platform[] = SIRA.flatMap((anahtar) => {
  const h = brandConfig.sosyal.find((s) => s.ad.toLowerCase() === anahtar);
  return h ? [{ anahtar, ad: h.ad, kullanici: h.kullanici, adres: h.adres, Ikon: IKON[anahtar] }] : [];
});

type YouTubeGonderi = SosyalGonderi & { id?: string };
type YouTubeVeri = { profil: string; gonderiler: (SosyalGonderi & { id: string })[] };

export default function Sosyal() {
  const { t, i18n } = useTranslation();
  const [youtube, setYoutube] = useState<YouTubeGonderi[]>([]);
  // Sayfa ici oynatici (Ahmet 30.10: "play kismi new tab yapilmadan da izlenebilsin").
  // YALNIZ TIKLAYINCA yuklenir ve gizlilik gelistirilmis kipte (youtube-nocookie.com):
  // oynatilmadikca YouTube'a hic istek gitmez. Cerez Bildirimi 3. bolum buna gore guncellendi.
  const [oynatilan, setOynatilan] = useState<YouTubeGonderi | null>(null);
  const pencere = useRef<HTMLDialogElement>(null);
  const [secili, setSecili] = useState<SosyalPlatform | null>(null);
  const [sira, setSira] = useState<'yeni' | 'populer'>('yeni');

  useEffect(() => {
    window.scrollTo(0, 0);
    let iptal = false;
    fetch('/sosyal/youtube.json', { cache: 'no-cache' })
      .then((r) => (r.ok ? (r.json() as Promise<YouTubeVeri>) : null))
      .then((v) => {
        if (iptal || !v) return;
        setYoutube(v.gonderiler.map((g) => ({ ...g, dikey: g.tur === 'shorts' })));
      })
      .catch(() => {});
    return () => { iptal = true; };
  }, []);

  const gonderiler = (p: SosyalPlatform): SosyalGonderi[] => (p === 'youtube' ? youtube : ELLE_GONDERILER[p]);

  // Varsayilan sekme YouTube (Ahmet 30.10: "standart youtube acilsin").
  const aktif: SosyalPlatform = secili ?? (PLATFORMLAR.some((p) => p.anahtar === 'youtube') ? 'youtube' : PLATFORMLAR[0]?.anahtar ?? 'instagram');

  useEffect(() => {
    const d = pencere.current;
    if (!d) return;
    if (oynatilan && !d.open) d.showModal();
    if (!oynatilan && d.open) d.close();
  }, [oynatilan]);
  const platform = PLATFORMLAR.find((p) => p.anahtar === aktif);

  const liste = useMemo(() => {
    const kopya = [...gonderiler(aktif)];
    if (sira === 'populer') kopya.sort((a, b) => (b.izlenme ?? 0) - (a.izlenme ?? 0) || b.tarih.localeCompare(a.tarih));
    else kopya.sort((a, b) => b.tarih.localeCompare(a.tarih));
    return kopya.slice(0, KART);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aktif, sira, youtube]);

  const dil = i18n.language?.startsWith('en') ? 'en-US' : 'tr-TR';
  const tarih = (s: string) => new Date(s).toLocaleDateString(dil, { day: 'numeric', month: 'long', year: 'numeric' });
  const sayi = (n: number) => new Intl.NumberFormat(dil, { notation: 'compact', maximumFractionDigits: 1 }).format(n);

  return (
    <div className="sosyal-sayfa">
      <SEO title={t('social_seo_title')} description={t('social_seo_desc')} url="https://veterito.com/social" />
      <header className="sosyal-ust sosyal-kap">
        <h1>{t('social_title')}</h1>
        <p>{t('social_desc')}</p>
      </header>

      <div className="sosyal-kap">
        <div className="sosyal-sekmeler" role="tablist" aria-label={t('social_platforms')}>
          {PLATFORMLAR.map((p) => (
            <button
              key={p.anahtar}
              type="button"
              role="tab"
              id={`sekme-${p.anahtar}`}
              aria-selected={p.anahtar === aktif}
              aria-controls="sosyal-panel"
              className={p.anahtar === aktif ? `sosyal-sekme secili sosyal-${p.anahtar}` : `sosyal-sekme sosyal-${p.anahtar}`}
              onClick={() => setSecili(p.anahtar)}
            >
              <p.Ikon boyut={18} />
              <span>{p.ad}</span>
            </button>
          ))}
        </div>

        <section id="sosyal-panel" role="tabpanel" aria-labelledby={`sekme-${aktif}`} className="sosyal-panel">
          {platform && liste.length > 0 ? (
            <>
              <div className="sosyal-sira" role="group" aria-label={t('social_sort')}>
                <button type="button" aria-pressed={sira === 'yeni'} onClick={() => setSira('yeni')}>{t('social_new')}</button>
                <button type="button" aria-pressed={sira === 'populer'} onClick={() => setSira('populer')}>{t('social_popular')}</button>
              </div>
              <ul className="sosyal-izgara">
                {liste.map((g) => (
                  <li key={g.adres}>
                    <a
                      className={g.dikey ? 'sosyal-kart dikey' : 'sosyal-kart'}
                      href={g.adres}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        // YouTube: sayfanin icinde oynat. Ctrl/Cmd ile tiklayan yine yeni sekme alir;
                        // JS yoksa baglanti zaten YouTube'a gider.
                        const id = (g as YouTubeGonderi).id;
                        if (!id || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
                        e.preventDefault();
                        setOynatilan(g);
                      }}
                    >
                      <span className="sosyal-gorsel">
                        <img src={g.gorsel} alt="" loading="lazy" decoding="async" />
                        {g.tur === 'shorts' ? <span className="sosyal-rozet">Shorts</span> : null}
                        {(g as YouTubeGonderi).id ? <span className="sosyal-oynat" aria-hidden="true"><Play size={22} fill="currentColor" /></span> : null}
                      </span>
                      <span className="sosyal-baslik">{g.baslik}</span>
                      <span className="sosyal-alt">
                        <time dateTime={g.tarih}>{tarih(g.tarih)}</time>
                        {g.izlenme ? <span><Eye size={13} aria-hidden="true" /> {sayi(g.izlenme)}</span> : null}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a className="sosyal-tumu" href={platform.adres} target="_blank" rel="noopener noreferrer">
                {t('social_see_all', { ag: platform.ad, konum: KONUM[platform.anahtar] })} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </>
          ) : platform ? (
            <div className="sosyal-profil">
              <span className={`sosyal-profil-ikon sosyal-${platform.anahtar}`}><platform.Ikon boyut={28} /></span>
              <p className="sosyal-profil-ad">@{platform.kullanici}</p>
              <p className="sosyal-profil-metin">{t('social_profile_text', { ag: platform.ad })}</p>
              <a className="sosyal-profil-dugme" href={platform.adres} target="_blank" rel="noopener noreferrer">
                {t('social_follow', { ag: platform.ad, konum: KONUM[platform.anahtar] })} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          ) : null}
        </section>
      </div>

      <dialog
        ref={pencere}
        className={oynatilan?.tur === 'shorts' ? 'sosyal-oynatici dikey' : 'sosyal-oynatici'}
        aria-label={oynatilan?.baslik ?? ''}
        onClose={() => setOynatilan(null)}
        onClick={(e) => { if (e.target === e.currentTarget) setOynatilan(null); }}
      >
        {oynatilan?.id ? (
          <div className="sosyal-oynatici-ic">
            <button type="button" className="sosyal-kapat" onClick={() => setOynatilan(null)} aria-label={t('social_close')}>
              <Kapat size={20} aria-hidden="true" />
            </button>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${oynatilan.id}?autoplay=1&rel=0&playsinline=1`}
              title={oynatilan.baslik}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <p className="sosyal-oynatici-not">
              {t('social_player_note')}{' '}
              <a href={oynatilan.adres} target="_blank" rel="noopener noreferrer">{t('social_open_youtube')}</a>
            </p>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
