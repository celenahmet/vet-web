import { useEffect, useRef, useState } from 'react';
import { Check, Link2, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  GOOGLE_TERCIH_ADRESI,
  paylasimBaglantilari,
  yaziAdresi,
  type PaylasimAnahtari,
} from '../lib/blogPaylasim';
import {
  tepkiEkle,
  tepkileriOku,
  yerelSecim,
  yerelSecimiKaydet,
  type TepkiEkseni,
  type TepkiSecimi,
  type TepkiTuru,
} from '../lib/blogTepki';
import { GoogleRenkli, Telegram, WhatsApp } from './MarkaIkonlari';
import { Facebook, LinkedIn, X } from './SosyalIkonlar';
import './YaziSonu.css';

/**
 * YAZI SONU: faydali mi, emoji tepkisi, paylasim, Google tercih edilen kaynak
 * (İSTEK: Ahmet, 29.10.2026; secim "Emoji + 'Faydali mi', anonim").
 *
 * ⚠️ TEPKI BOLUMU SUNUCU HAZIRSA GORUNUYOR. `tepkileriOku` null donerse (fonksiyon
 * yok, ag dusuk) bolum hic cizilmiyor; paylasim ve Google baglantisi her zaman.
 * Sunucu tarafi: veteriner/supabase/migrations/0346_blog_tepkiler.sql.
 *
 * ⚠️ Paylasim ve Google baglantilari `scripts/prerender.mjs` ciktisinda da var,
 * ayni siniflarla; tepki bolumu yalniz React'te (sayilar canli).
 */
const PAYLASIM_IKONU: Record<PaylasimAnahtari, (p: { boyut?: number }) => React.JSX.Element> = {
  whatsapp: WhatsApp,
  telegram: Telegram,
  x: X,
  facebook: Facebook,
  linkedin: LinkedIn,
};

export default function YaziSonu({ slug, baslik }: { slug: string; baslik: string }) {
  const { t } = useTranslation();
  const [sayilar, setSayilar] = useState<Partial<Record<TepkiTuru, number>> | null>(null);
  const [secim, setSecim] = useState<TepkiSecimi>({});
  // Ust uste hizli tiklamada kapanistaki eski `secim` digerini ezmesin diye guncel deger burada.
  const secimRef = useRef<TepkiSecimi>({});
  const [kopyalandi, setKopyalandi] = useState(false);

  useEffect(() => {
    let iptal = false;
    setSayilar(null);
    const kayitli = yerelSecim(slug);
    secimRef.current = kayitli;
    setSecim(kayitli);
    setKopyalandi(false);
    void tepkileriOku(slug).then((s) => { if (!iptal) setSayilar(s); });
    return () => { iptal = true; };
  }, [slug]);

  function oyla(eksen: TepkiEkseni, tur: TepkiTuru) {
    if (secimRef.current[eksen]) return;
    const yeni = { ...secimRef.current, [eksen]: tur };
    secimRef.current = yeni;
    setSecim(yeni);
    yerelSecimiKaydet(slug, yeni);
    // Iyimser artis; sunucunun dondurdugu sayi gelince onunla duzeltiliyor.
    setSayilar((s) => (s ? { ...s, [tur]: (s[tur] ?? 0) + 1 } : s));
    void tepkiEkle(slug, tur).then((n) => {
      if (typeof n === 'number') setSayilar((s) => (s ? { ...s, [tur]: n } : s));
    });
  }

  async function kopyala() {
    try {
      await navigator.clipboard.writeText(yaziAdresi(slug));
      setKopyalandi(true);
      window.setTimeout(() => setKopyalandi(false), 2500);
    } catch {
      /* Pano izni yoksa sessiz kal; adres cubugu zaten acik. */
    }
  }

  const ifadeler: { tur: TepkiTuru; emoji: string; etiket: string }[] = [
    { tur: 'sevdim', emoji: '❤️', etiket: t('post_react_love') },
    { tur: 'ogrendim', emoji: '💡', etiket: t('post_react_learned') },
    { tur: 'sasirdim', emoji: '😮', etiket: t('post_react_surprised') },
    { tur: 'dusundurdu', emoji: '🤔', etiket: t('post_react_thoughtful') },
  ];
  const faydaliSayi = sayilar?.faydali ?? 0;

  return (
    <section className="yazi-sonu" aria-label={t('post_end_label')}>
      {sayilar ? (
        <div className="yazi-tepki">
          <div className="tepki-satir">
            <p className="tepki-soru">{t('post_helpful_q')}</p>
            {secim.faydali ? (
              <p className="tepki-tesekkur" role="status">
                {t('post_helpful_thanks')}
                {faydaliSayi > 1 ? ` ${t('post_helpful_count', { n: faydaliSayi })}` : ''}
              </p>
            ) : (
              <div className="tepki-dugmeler">
                <button type="button" className="faydali-dugme" onClick={() => oyla('faydali', 'faydali')}>
                  <ThumbsUp size={16} aria-hidden="true" /> {t('post_helpful_yes')}
                </button>
                <button type="button" className="faydali-dugme" onClick={() => oyla('faydali', 'faydasiz')}>
                  <ThumbsDown size={16} aria-hidden="true" /> {t('post_helpful_no')}
                </button>
              </div>
            )}
          </div>

          <div className="tepki-satir">
            <p className="tepki-soru">{t('post_react_q')}</p>
            <div className="tepki-dugmeler">
              {ifadeler.map((i) => {
                const secili = secim.ifade === i.tur;
                const sayi = sayilar[i.tur] ?? 0;
                return (
                  <button
                    key={i.tur}
                    type="button"
                    className={secili ? 'ifade-dugme secili' : 'ifade-dugme'}
                    aria-pressed={secili}
                    disabled={Boolean(secim.ifade) && !secili}
                    onClick={() => oyla('ifade', i.tur)}
                  >
                    <span aria-hidden="true">{i.emoji}</span> {i.etiket}
                    {sayi > 0 ? <span className="ifade-sayi">{sayi}</span> : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      <div className="paylas-satir">
        <span className="paylas-baslik">{t('post_share')}</span>
        <ul className="paylas-liste">
          {paylasimBaglantilari(slug, baslik).map((k) => {
            const Ikon = PAYLASIM_IKONU[k.anahtar];
            return (
              <li key={k.anahtar}>
                <a
                  className={`paylas-dugme paylas-${k.anahtar}`}
                  href={k.adres}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('post_share_on', { ag: k.ad })}
                >
                  <Ikon boyut={20} />
                </a>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              className="paylas-dugme paylas-kopya"
              onClick={() => { void kopyala(); }}
              aria-label={t('post_copy_link')}
            >
              {kopyalandi ? <Check size={20} aria-hidden="true" /> : <Link2 size={20} aria-hidden="true" />}
            </button>
          </li>
        </ul>
        <span className="paylas-durum" role="status">{kopyalandi ? t('post_copied') : ''}</span>
      </div>

      <a className="google-tercih" href={GOOGLE_TERCIH_ADRESI} target="_blank" rel="noopener noreferrer">
        <span className="google-tercih-simge" aria-hidden="true"><GoogleRenkli boyut={30} /></span>
        <span>{t('post_google_pref')}</span>
      </a>
    </section>
  );
}
