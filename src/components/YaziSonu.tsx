import { useEffect, useRef, useState } from 'react';
import { Check, Link2, Mail, Share2, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  GOOGLE_TERCIH_ADRESI,
  INSTAGRAM_ADRESI,
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
import { GoogleRenkli, Reddit, Telegram, Threads, WhatsApp } from './MarkaIkonlari';
import { Facebook, Instagram, LinkedIn, X } from './SosyalIkonlar';
import './YaziSonu.css';

/**
 * YAZI SONU KARTI: solda faydali mi + emoji tepkisi, sagda paylasim; altinda
 * Google tercih edilen kaynak (İSTEK: Ahmet, 29.10.2026; secim "Emoji +
 * 'Faydali mi', anonim").
 *
 * TASARIM (Ahmet 29.10, referans gorsel): "emojiler sade, ustune gelince ne
 * oldugu (sasirtici vs.) gosterilsin", "yerlesim dengeli, mobil, tablet ve
 * webde de", "tasarim aynisi degil". Emoji dugmesinde gorunur yazi yok; adi ve
 * sayisi ipucunda ve `aria-label`da. Kart KAPSAYICI SORGUSUYLA diziliyor: yan
 * yana sigarsa iki bolum arasinda dikey cizgi, sigmazsa alt alta. Paylasim
 * daireleri Veterito'nun kendi dili: markanin duz renginde dolu (gradyan yok).
 *
 * ⚠️ TEPKI BOLUMU SUNUCU HAZIRSA GORUNUYOR. `tepkileriOku` null donerse bolum
 * hic cizilmiyor; paylasim ve Google baglantisi her zaman.
 * Sunucu tarafi: veteriner/supabase/migrations/0346_blog_tepkiler.sql.
 *
 * ⚠️ Kart, paylasim ve Google baglantisi `scripts/prerender.mjs` ciktisinda da
 * var, ayni siniflarla; tepki bolumu yalniz React'te (sayilar canli).
 */
const PAYLASIM_IKONU: Record<PaylasimAnahtari, (p: { boyut?: number }) => React.JSX.Element> = {
  whatsapp: WhatsApp,
  x: X,
  telegram: Telegram,
  facebook: Facebook,
  linkedin: LinkedIn,
  threads: Threads,
  reddit: Reddit,
  eposta: ({ boyut = 20 }) => <Mail size={boyut} aria-hidden="true" />,
};

export default function YaziSonu({ slug, baslik }: { slug: string; baslik: string }) {
  const { t } = useTranslation();
  const [sayilar, setSayilar] = useState<Partial<Record<TepkiTuru, number>> | null>(null);
  const [secim, setSecim] = useState<TepkiSecimi>({});
  // Ust uste hizli tiklamada kapanistaki eski `secim` digerini ezmesin diye guncel deger burada.
  const secimRef = useRef<TepkiSecimi>({});
  const [kopyalandi, setKopyalandi] = useState(false);
  const [durum, setDurum] = useState('');
  const [cihazPaylasimi, setCihazPaylasimi] = useState(false);
  const durumZamani = useRef<number | undefined>(undefined);

  useEffect(() => {
    let iptal = false;
    setSayilar(null);
    const kayitli = yerelSecim(slug);
    secimRef.current = kayitli;
    setSecim(kayitli);
    setKopyalandi(false);
    setDurum('');
    void tepkileriOku(slug).then((s) => { if (!iptal) setSayilar(s); });
    return () => { iptal = true; };
  }, [slug]);

  // Cihazin kendi paylasim menusu (telefon, tablet, bazi masaustleri). Yalniz
  // tarayicida bilinir; prerender ciktisinda yok, React gelince ekleniyor.
  useEffect(() => { setCihazPaylasimi(typeof navigator.share === 'function'); }, []);
  useEffect(() => () => window.clearTimeout(durumZamani.current), []);

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

  function durumGoster(metin: string) {
    window.clearTimeout(durumZamani.current);
    setDurum(metin);
    setKopyalandi(true);
    durumZamani.current = window.setTimeout(() => { setDurum(''); setKopyalandi(false); }, 4000);
  }

  async function panoya() {
    try {
      await navigator.clipboard.writeText(yaziAdresi(slug));
      return true;
    } catch {
      return false; /* Pano izni yoksa adres cubugu zaten acik. */
    }
  }

  async function kopyala() {
    if (await panoya()) durumGoster(t('post_copied'));
  }

  function cihazdaPaylas() {
    void navigator.share?.({ title: baslik, url: yaziAdresi(slug) }).catch(() => {});
  }

  // Instagram'in web paylasim adresi yok. Telefon ve tablette cihazin paylasim
  // menusu (Instagram orada); masaustunde baglanti panoya, Instagram yeni sekmede.
  async function instagram() {
    const dokunmatik = typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches;
    if (dokunmatik && typeof navigator.share === 'function') {
      cihazdaPaylas();
      return;
    }
    const tamam = await panoya();
    window.open(INSTAGRAM_ADRESI, '_blank', 'noopener,noreferrer');
    if (tamam) durumGoster(t('post_insta_copied'));
  }

  // Gorunur yazi yok; ad ipucunda ve ekran okuyucuda (Ahmet 29.10).
  const ifadeler: { tur: TepkiTuru; emoji: string; ad: string }[] = [
    { tur: 'sevdim', emoji: '❤️', ad: t('post_react_love') },
    { tur: 'ogrendim', emoji: '💡', ad: t('post_react_learned') },
    { tur: 'sasirdim', emoji: '😮', ad: t('post_react_surprised') },
    { tur: 'dusundurdu', emoji: '🤔', ad: t('post_react_thoughtful') },
  ];
  const faydaliSayi = sayilar?.faydali ?? 0;

  return (
    <section className="yazi-sonu" aria-label={t('post_end_label')}>
      <div className="ys-kart">
        <div className="ys-ic">
          {sayilar ? (
            <div className="ys-bolum">
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

              <div className="ifade-liste" role="group" aria-label={t('post_react_q')}>
                {ifadeler.map((i) => {
                  const secili = secim.ifade === i.tur;
                  const sayi = sayilar[i.tur] ?? 0;
                  const ipucu = sayi > 0 ? `${i.ad} · ${sayi}` : i.ad;
                  return (
                    <button
                      key={i.tur}
                      type="button"
                      className={secili ? 'ifade-dugme secili' : 'ifade-dugme'}
                      data-ipucu={ipucu}
                      aria-label={ipucu}
                      aria-pressed={secili}
                      disabled={Boolean(secim.ifade) && !secili}
                      onClick={() => oyla('ifade', i.tur)}
                    >
                      <span aria-hidden="true">{i.emoji}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div className={sayilar ? 'ys-bolum ys-paylas ayrik' : 'ys-bolum ys-paylas'}>
            <p className="paylas-baslik">{t('post_share')}</p>
            <ul className="paylas-liste">
              {cihazPaylasimi ? (
                <li>
                  <button type="button" className="paylas-dugme paylas-cihaz" onClick={cihazdaPaylas}
                    aria-label={t('post_share_device')} title={t('post_share_device_short')}>
                    <Share2 size={20} aria-hidden="true" />
                  </button>
                </li>
              ) : null}
              <li>
                <button type="button" className="paylas-dugme paylas-kopya" onClick={() => { void kopyala(); }}
                  aria-label={t('post_copy_link')} title={t('post_copy_link')}>
                  {kopyalandi ? <Check size={20} aria-hidden="true" /> : <Link2 size={20} aria-hidden="true" />}
                </button>
              </li>
              <li>
                <button type="button" className="paylas-dugme paylas-instagram" onClick={() => { void instagram(); }}
                  aria-label={t('post_share_instagram')} title="Instagram">
                  <Instagram boyut={20} />
                </button>
              </li>
              {paylasimBaglantilari(slug, baslik).map((k) => {
                const Ikon = PAYLASIM_IKONU[k.anahtar];
                return (
                  <li key={k.anahtar}>
                    <a
                      className={`paylas-dugme paylas-${k.anahtar}`}
                      href={k.adres}
                      // E-posta yeni sekme acmasin: bos sekme kaliyor.
                      target={k.anahtar === 'eposta' ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      aria-label={k.anahtar === 'eposta' ? t('post_share_email') : t('post_share_on', { ag: k.ad })}
                      title={k.ad}
                    >
                      <Ikon boyut={20} />
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="paylas-durum" role="status">{durum}</p>
          </div>
        </div>
      </div>

      <a className="google-tercih" href={GOOGLE_TERCIH_ADRESI} target="_blank" rel="noopener noreferrer">
        <span className="google-tercih-simge" aria-hidden="true"><GoogleRenkli boyut={26} /></span>
        <span>{t('post_google_pref')}</span>
      </a>
    </section>
  );
}
