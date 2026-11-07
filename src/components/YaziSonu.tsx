import { useEffect, useRef, useState } from 'react';
import { Check, Link2, Mail, Share2, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  GOOGLE_HABERLER_ADRESI,
  GOOGLE_TERCIH_ADRESI,
  INSTAGRAM_ADRESI,
  paylasimBaglantilari,
  yaziAdresi,
  type PaylasimAnahtari,
} from '../lib/blogPaylasim';
import {
  fisGecerli,
  tepkiSec,
  tepkileriOku,
  yerelKayit,
  yerelKayitYaz,
  type TepkiEkseni,
  type TepkiFisleri,
  type TepkiSecimi,
  type TepkiTuru,
} from '../lib/blogTepki';
import { GoogleHaberler, GoogleRenkli, Reddit, Telegram, Threads, WhatsApp } from './MarkaIkonlari';
import { Facebook, Instagram, LinkedIn, X } from './SosyalIkonlar';
import './YaziSonu.css';

/**
 * YAZI SONU KARTI: solda faydali mi + emoji tepkisi, sagda paylasim; altinda
 * Google tercih edilen kaynak (İSTEK: Ahmet, 29.10.2026; secim "Emoji +
 * 'Faydali mi', anonim").
 *
 * TASARIM (Ahmet 29-30.10, referans bote.web.tr'deki kart: "ikinci fotodaki gibi
 * olsun dedim ben israrla"): soru ve Evet/Hayir AYNI SATIRDA, altinda 6 emoji HAP
 * bicimde (❤️ 🔥 ✅ 🤯 🤔 😅). Emoji dugmesinde ad yazmaz; adi ipucunda ve
 * `aria-label`da, sayi (varsa) emojinin yaninda. Kart KAPSAYICI SORGUSUYLA
 * diziliyor: yan yana sigarsa iki bolum arasinda dikey cizgi, sigmazsa alt alta.
 * Paylasim daireleri Veterito'nun kendi dili: markanin duz renginde dolu (gradyan
 * yok); 38 px, soru satiri tek satirda kalsin diye.
 *
 * GERI CEKME (Ahmet 07.11, UniConnectly ve bote.web.tr ile ayni): basili dugmeye tekrar
 * basmak oyu geri alir, ayni eksendeki obur dugme degistirir. Evet/Hayir da bu yuzden
 * oy sonrasi kaliyor (sayi yaninda, secilen basili, tesekkur altta). Yalniz fisi olan
 * oy geri cekilir (bkz. lib/blogTepki.ts); fissiz oyda obur dugmeler soluk ve kilitli.
 *
 * ⚠️ TEPKI BOLUMU SUNUCU HAZIRSA GORUNUYOR. `tepkileriOku` null donerse bolum
 * hic cizilmiyor; paylasim ve Google baglantisi her zaman.
 * Sunucu tarafi: veteriner/supabase/migrations/0348_blog_tepkiler.sql (+ 0349 alti ifade).
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
  const [fisler, setFisler] = useState<TepkiFisleri>({});
  const fislerRef = useRef<TepkiFisleri>({});
  // Eksen basina tek istek: yanit gelmeden ikinci tiklama yok sayilir.
  const mesgulRef = useRef<Partial<Record<TepkiEkseni, boolean>>>({});
  // Yanit geldiginde okur baska yaziya gecmis olabilir; sonuc o yazinin kaydina gider.
  const slugRef = useRef(slug);
  // Tesekkur yalniz bu ziyarette verilen Evet/Hayir oyunun hemen ardindan.
  const [tesekkur, setTesekkur] = useState(false);
  const [kopyalandi, setKopyalandi] = useState(false);
  const [durum, setDurum] = useState('');
  const [cihazPaylasimi, setCihazPaylasimi] = useState(false);
  const durumZamani = useRef<number | undefined>(undefined);

  useEffect(() => {
    let iptal = false;
    setSayilar(null);
    const kayit = yerelKayit(slug);
    slugRef.current = slug;
    secimRef.current = kayit.secim;
    fislerRef.current = kayit.fisler;
    mesgulRef.current = {};
    setSecim(kayit.secim);
    setFisler(kayit.fisler);
    setTesekkur(false);
    setKopyalandi(false);
    setDurum('');
    void tepkileriOku(slug).then((s) => { if (!iptal) setSayilar(s); });
    return () => { iptal = true; };
  }, [slug]);

  // Cihazin kendi paylasim menusu (telefon, tablet, bazi masaustleri). Yalniz
  // tarayicida bilinir; prerender ciktisinda yok, React gelince ekleniyor.
  useEffect(() => { setCihazPaylasimi(typeof navigator.share === 'function'); }, []);
  useEffect(() => () => window.clearTimeout(durumZamani.current), []);

  function secimiKoy(secimYeni: TepkiSecimi, fislerYeni: TepkiFisleri) {
    secimRef.current = secimYeni;
    fislerRef.current = fislerYeni;
    setSecim(secimYeni);
    setFisler(fislerYeni);
  }

  // Oy var ama fisi yok ya da suresi doldu: obur dugmeler kilitli.
  const kilitli = (eksen: TepkiEkseni) => Boolean(secim[eksen]) && !fisGecerli(fisler[eksen]);

  function oyla(eksen: TepkiEkseni, tur: TepkiTuru) {
    if (mesgulRef.current[eksen]) return;
    const mevcut = secimRef.current[eksen];
    const fis = fislerRef.current[eksen];
    if (mevcut && !fisGecerli(fis)) return;
    const hedef = mevcut === tur ? null : tur;
    const oncekiTesekkur = tesekkur;
    // Sayilara uygulanan iyimser fark; ulasilamazsa tersi uygulanir.
    const farkUygula = (yon: 1 | -1) => setSayilar((s) => {
      if (!s) return s;
      const y = { ...s };
      if (mevcut) y[mevcut] = Math.max(0, (y[mevcut] ?? 0) - yon);
      if (hedef) y[hedef] = Math.max(0, (y[hedef] ?? 0) + yon);
      return y;
    });
    // Yalniz bu eksen degisir; obur eksendeki secim ve fise dokunulmaz.
    const eksenKoy = (taban: { secim: TepkiSecimi; fisler: TepkiFisleri }, t: TepkiTuru | null, f: TepkiFisleri[TepkiEkseni]) => {
      const secimYeni: TepkiSecimi = { ...taban.secim };
      const fislerYeni: TepkiFisleri = { ...taban.fisler };
      if (t) secimYeni[eksen] = t; else delete secimYeni[eksen];
      if (t && f) fislerYeni[eksen] = f; else delete fislerYeni[eksen];
      return { secim: secimYeni, fisler: fislerYeni };
    };
    const simdiki = () => ({ secim: secimRef.current, fisler: fislerRef.current });

    const iyimser = eksenKoy(simdiki(), hedef, undefined);
    secimiKoy(iyimser.secim, iyimser.fisler);
    if (eksen === 'faydali') setTesekkur(hedef !== null);
    farkUygula(1);

    mesgulRef.current = { ...mesgulRef.current, [eksen]: true };
    void tepkiSec(slug, hedef, mevcut && fis ? fis.f : null).then((r) => {
      const ayniYazi = slugRef.current === slug;
      if (ayniYazi) mesgulRef.current = { ...mesgulRef.current, [eksen]: false };
      if (!r) {
        // Ulasilamadi: bu eksen tiklamadan onceki haline doner.
        if (!ayniYazi) return;
        const geri = eksenKoy(simdiki(), mevcut ?? null, fis);
        secimiKoy(geri.secim, geri.fisler);
        setTesekkur(oncekiTesekkur);
        farkUygula(-1);
        return;
      }
      // Fis gecmediyse (suresi doldu ya da kullanildi) geri cekme olmadi: oy yerinde, kilitli.
      const geriCekilemedi = Boolean(mevcut) && !r.geriAlindi && hedef === null;
      const sonTur = geriCekilemedi ? mevcut ?? null : hedef;
      const sonFis = !geriCekilemedi && hedef && r.fis ? { f: r.fis, t: Date.now() } : undefined;
      if (!ayniYazi) {
        const k = eksenKoy(yerelKayit(slug), sonTur, sonFis);
        yerelKayitYaz(slug, k.secim, k.fisler);
        return;
      }
      const son = eksenKoy(simdiki(), sonTur, sonFis);
      secimiKoy(son.secim, son.fisler);
      yerelKayitYaz(slug, son.secim, son.fisler);
      if (geriCekilemedi && eksen === 'faydali') setTesekkur(false);
      // Sunucunun bildigi gercek sayilar esas (yalniz donen turler guncellenir).
      setSayilar((s) => (s ? { ...s, ...r.sayilar } : s));
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

  // 6 ifade, bote.web.tr ile ayni emojiler (Ahmet 30.10). Ad yalniz ipucunda ve ekran
  // okuyucuda. Eski turlerin anahtari ve sayaci korunuyor (ogrendim artik ✅ Anladim).
  const ifadeler: { tur: TepkiTuru; emoji: string; ad: string }[] = [
    { tur: 'sevdim', emoji: '❤️', ad: t('post_react_love') },
    { tur: 'harika', emoji: '🔥', ad: t('post_react_great') },
    { tur: 'ogrendim', emoji: '✅', ad: t('post_react_learned') },
    { tur: 'sasirdim', emoji: '🤯', ad: t('post_react_surprised') },
    { tur: 'dusundurdu', emoji: '🤔', ad: t('post_react_thoughtful') },
    { tur: 'zorlandim', emoji: '😅', ad: t('post_react_hard') },
  ];
  const fayda: { tur: TepkiTuru; ad: string; simge: typeof ThumbsUp }[] = [
    { tur: 'faydali', ad: t('post_helpful_yes'), simge: ThumbsUp },
    { tur: 'faydasiz', ad: t('post_helpful_no'), simge: ThumbsDown },
  ];

  return (
    <section className="yazi-sonu" aria-label={t('post_end_label')}>
      <div className="ys-kart">
        <div className="ys-ic">
          {sayilar ? (
            <div className="ys-bolum">
              <div className="tepki-satir">
                <p className="tepki-soru">{t('post_helpful_q')}</p>
                <div className="tepki-dugmeler">
                  {fayda.map((f) => {
                    const secili = secim.faydali === f.tur;
                    const sayi = sayilar[f.tur] ?? 0;
                    const Simge = f.simge;
                    return (
                      <button
                        key={f.tur}
                        type="button"
                        className={secili ? 'faydali-dugme secili' : 'faydali-dugme'}
                        aria-label={sayi > 0 ? `${f.ad}, ${sayi}` : f.ad}
                        aria-pressed={secili}
                        disabled={kilitli('faydali') && !secili}
                        onClick={() => oyla('faydali', f.tur)}
                      >
                        <Simge size={16} aria-hidden="true" /> <span aria-hidden="true">{f.ad}</span>
                        {sayi > 0 ? <b aria-hidden="true">{sayi}</b> : null}
                      </button>
                    );
                  })}
                </div>
                {tesekkur ? (
                  <p className="tepki-tesekkur" role="status">{t('post_helpful_thanks')}</p>
                ) : null}
              </div>

              <div className="ifade-liste" role="group" aria-label={t('post_react_q')}>
                {ifadeler.map((i) => {
                  const secili = secim.ifade === i.tur;
                  const sayi = sayilar[i.tur] ?? 0;
                  return (
                    <button
                      key={i.tur}
                      type="button"
                      className={secili ? 'ifade-dugme secili' : 'ifade-dugme'}
                      data-ipucu={i.ad}
                      aria-label={sayi > 0 ? `${i.ad}, ${sayi}` : i.ad}
                      aria-pressed={secili}
                      disabled={kilitli('ifade') && !secili}
                      onClick={() => oyla('ifade', i.tur)}
                    >
                      <span aria-hidden="true">{i.emoji}</span>
                      {sayi > 0 ? <b aria-hidden="true">{sayi}</b> : null}
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
                    <Share2 size={17} aria-hidden="true" />
                  </button>
                </li>
              ) : null}
              <li>
                <button type="button" className="paylas-dugme paylas-kopya" onClick={() => { void kopyala(); }}
                  aria-label={t('post_copy_link')} title={t('post_copy_link')}>
                  {kopyalandi ? <Check size={17} aria-hidden="true" /> : <Link2 size={17} aria-hidden="true" />}
                </button>
              </li>
              <li>
                <button type="button" className="paylas-dugme paylas-instagram" onClick={() => { void instagram(); }}
                  aria-label={t('post_share_instagram')} title="Instagram">
                  <Instagram boyut={17} />
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
                      <Ikon boyut={17} />
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="paylas-durum" role="status">{durum}</p>
          </div>
        </div>
      </div>

      {/* Google'da one cikarma: tercih edilen kaynak + Google Haberler'de takip (30.10). */}
      <div className="google-satir">
        <a className="google-tercih" href={GOOGLE_TERCIH_ADRESI} target="_blank" rel="noopener noreferrer">
          <span className="google-tercih-simge" aria-hidden="true"><GoogleRenkli boyut={24} /></span>
          <span>{t('post_google_pref')}</span>
        </a>
        <a className="google-tercih" href={GOOGLE_HABERLER_ADRESI} target="_blank" rel="noopener noreferrer">
          <span className="google-tercih-simge" aria-hidden="true"><GoogleHaberler boyut={24} /></span>
          <span>{t('post_google_news')}</span>
        </a>
      </div>
    </section>
  );
}
