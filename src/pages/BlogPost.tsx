import { useTranslation } from 'react-i18next';

import { ArrowLeft, ArrowRight, Clock, CalendarDays, AlertTriangle, CircleAlert, CheckCircle2, Eye } from 'lucide-react';
import { useOncedenUretilmisVeriyiDevral } from '../yapisal-veri';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import SEO from '../components/SEO';
import { YAZILAR, yaziBul, okumaSuresi, tarihiYaz } from '../data/blog';
import type { BlogBlock } from '../data/blog';
import BlogKapak from '../components/BlogKapak';
import BlogKenarCubugu from '../components/BlogKenarCubugu';
import { goruntulenmeArtir, sayiyiKisalt } from '../lib/blogGoruntulenme';
import './BlogPost.css';

/**
 * TEK YAZI SAYFASI
 *
 * ⚠️ ESKI HALI SAHTE ICERIK GOSTERIYORDU: govde birebir soyleydi, "This is a
 * placeholder for the full blog post content. In a real application, this would be
 * fetched from a database or CMS". Ingilizce sablon metni yayindaydi. Artik yazi
 * `src/data/blog/*` icinden tipli bloklar olarak geliyor.
 *
 * ⚠️ SSS BOLUMU AYNI ZAMANDA YAPILANDIRILMIS VERI URETIYOR (FAQPage). Arama
 * sonucunda sorular acilir kutu olarak gorunebiliyor; blogun amaci arama oldugu
 * icin bu bolum sussuz degil, isin kendisi.
 */

/**
 * Metin icindeki `**kalin**` ve `[[slug|baglanti]]` isaretlerini cozer.
 *
 * ⚠️ Tek gecişte iki desen birden ayristiriliyor. Once kalin sonra baglanti diye
 * iki asamada yapilsaydi, birinin urettigi React ogesinin icinde otekinin
 * isareti metin olarak kalirdi.
 */
function KalinMetin({ metin }: { metin: string }) {
  const parcalar = metin.split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\])/g);
  return (
    <>
      {parcalar.map((p, i) => {
        if (p.startsWith('**') && p.endsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>;
        if (p.startsWith('[[') && p.endsWith(']]')) {
          const [slug, etiket] = p.slice(2, -2).split('|');
          return <Link key={i} to={`/blog/${slug}`} className="yazi-ic-baglanti">{etiket ?? slug}</Link>;
        }
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

function Blok({ blok }: { blok: BlogBlock }) {
  switch (blok.kind) {
    case 'baslik':
      return <h2>{blok.metin}</h2>;
    case 'altBaslik':
      return <h3>{blok.metin}</h3>;
    case 'paragraf':
      return <p><KalinMetin metin={blok.metin} /></p>;
    case 'liste':
      return <ul>{blok.maddeler.map((m, i) => <li key={i}><KalinMetin metin={m} /></li>)}</ul>;
    case 'uyari':
      return (
        <aside className="yazi-uyari">
          <AlertTriangle size={20} />
          <p>{blok.metin}</p>
        </aside>
      );
    case 'yanilgi':
      return (
        <aside className="yazi-yanilgi">
          <CircleAlert size={20} />
          <div>
            <strong>{blok.baslik}</strong>
            <p>{blok.metin}</p>
          </div>
        </aside>
      );
    case 'tablo':
      return (
        <div className="yazi-tablo-sarmal">
          <table>
            <thead><tr>{blok.basliklar.map((b, i) => <th key={i}>{b}</th>)}</tr></thead>
            <tbody>
              {blok.satirlar.map((satir, i) => (
                <tr key={i}>{satir.map((h, j) => <td key={j}>{h}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function BlogPost() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const yazi = yaziBul(slug);

  /**
   * ⚠️ SAYAC HER ACILISTA BIR ARTAR (İSTEK: Ahmet, 24.08.2026).
   *
   * `sayildiMi` bayragi neden var: React gelistirme kipinde `useEffect` iki kez
   * calisiyor. Bayrak olmasaydi her acilis iki sayilirdi ve sayi sessizce sisirdi.
   * Slug degisince bayrak sifirlaniyor, cunku baska bir yaziya gecilmis oluyor.
   */
  const [goruntulenme, setGoruntulenme] = useState<number | null>(null);
  const sayildiMi = useRef<string | null>(null);

  useEffect(() => {
    if (!slug || sayildiMi.current === slug) return;
    sayildiMi.current = slug;
    let iptal = false;
    void goruntulenmeArtir(slug).then((n) => {
      if (!iptal && typeof n === 'number') setGoruntulenme(n);
    });
    return () => { iptal = true; };
  }, [slug]);

  /**
   * KONTROL LISTESI ISARETLERI — bilerek GECICI.
   *
   * Yalniz bu bilesenin belleginde duruyor: sunucuya gitmiyor, `localStorage`'a
   * yazilmiyor, sayfa yenilenince siniyor (İSTEK: Ahmet, 24.08.2026 —
   * "hicbir yerde verileri tutulmasin reaksiyon amac").
   *
   * ⚠️ Slug degisince sifirlaniyor. Ayni bilesen baska bir yaziya gecerken
   * yeniden olusturulmayabilir; sifirlamasaydik onceki yazinin isaretleri yeni
   * yazinin maddelerinde gorunurdu.
   */
  const [isaretliler, setIsaretliler] = useState<Set<number>>(() => new Set());
  useEffect(() => { setIsaretliler(new Set()); }, [slug]);

  function isaretiCevir(sira: number) {
    setIsaretliler((onceki) => {
      const sonraki = new Set(onceki);
      if (sonraki.has(sira)) sonraki.delete(sira);
      else sonraki.add(sira);
      return sonraki;
    });
  }

  if (!yazi) {
    /*
     * ⚠️ ESKI HALI CIPLAKTI (duzeltme 24.08.2026, Ahmet bildirdi): baslik, tek
     * cumle ve bir geri baglantisi. Okuyucu yanlis adrese dustugunde eli bos
     * kaliyordu.
     *
     * ⚠️ `noindex`: bu ekran butun gecersiz sluglar icin ciziliyor, tek bir
     * adresi temsil etmiyor. Indekslenmesine izin vermek, arama sonuclarinda
     * "yazi bulunamadi" baslikli kayitlar demek.
     *
     * ⚠️ Cikmaz sokak birakilmiyor: en yeni uc yazi kart olarak veriliyor.
     * Okuyucu buraya bir sey ARARKEN geldi; bos bir ozur sayfasi yerine
     * okuyabilecegi seyler gostermek dogru olan.
     */
    const oneriler = YAZILAR.slice(0, 3);
    return (
      <div className="yazi-sayfa">
        <SEO
          title="Yazı bulunamadı"
          description="Aradığınız yazı kaldırılmış ya da adresi değişmiş olabilir."
          noindex
        />
        <section className="container yazi-bulunamadi">
          <span className="yazi-kategori">404</span>
          <h1>{t('post_not_found_title')}</h1>
          <p>{t('post_not_found_desc')}</p>
          <Link to="/blog" className="one-cikan-dugme">{t('post_back_to_blog')}<ArrowRight size={18} /></Link>
        </section>
        {oneriler.length ? (
          <section className="container yazi-ilgili">
            <h2>{t('post_recent_posts')}</h2>
            <div className="yazi-ilgili-liste">
              {oneriler.map((y) => (
                <Link key={y.slug} to={`/blog/${y.slug}`} className="yazi-ilgili-kart">
                  <BlogKapak slug={y.slug} kategori={y.kategori} alt={y.baslik} boyut={36} olcu="kart" />
                  <div>
                    <span>{y.kategori}</span>
                    <h3>{y.baslik}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    );
  }

  const adres = `https://veterito.com/blog/${yazi.slug}`;
  const dakika = okumaSuresi(yazi);
  const ilgili = YAZILAR.filter((y) => y.slug !== yazi.slug).slice(0, 3);

  const makaleVerisi = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: yazi.baslik,
    description: yazi.ozet,
    datePublished: yazi.tarih,
    author: { '@type': 'Organization', name: 'Veterito' },
    publisher: { '@type': 'Organization', name: 'Veterito' },
    mainEntityOfPage: adres,
  };

  const sssVerisi = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: yazi.sss.map((s) => ({
      '@type': 'Question',
      name: s.soru,
      acceptedAnswer: { '@type': 'Answer', text: s.cevap },
    })),
  };

  // Prerender ayni Article/FAQPage bloklarini HTML'e yazmisti; Helmet asagida
  // kendi kopyasini basiyor. Bu, HTML'dekini devralip cift beyani onluyor.
  useOncedenUretilmisVeriyiDevral();

  return (
    <article className="yazi-sayfa">
      <SEO title={yazi.baslik} description={yazi.ozet} url={adres} type="article" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(makaleVerisi)}</script>
        {yazi.sss.length ? <script type="application/ld+json">{JSON.stringify(sssVerisi)}</script> : null}
      </Helmet>

      {/*
        ⚠️ TEK IZGARA (24.08.2026). Onceki halde sayfada UC FARKLI OLCU vardi:
        baslik ve kapak 820 pikselde ortalaniyordu, govde ve kenar cubugu izgarasi
        1160'ta. Iki farkli genislik ortalaninca sol kenarlari tutmuyor ve her blok
        baska yerden basliyordu; Ahmet'in "denge sorunlari" dedigi sey buydu.

        Artik baslik, kapak ve govde AYNI sol sutunda; kenar cubugu en bastan sagda
        ve tek bir sol kenar cizgisi var.
      */}
      <div className="container yazi-duzen">
        <div className="yazi-ana">
          <header className="yazi-basi">
            <div className="yazi-ust-satir">
              <Link to="/blog" className="yazi-geri"><ArrowLeft size={16} />{t('post_back_to_blog')}</Link>
              <span className="yazi-kategori">{yazi.kategori.toLocaleUpperCase('tr-TR')}</span>
            </div>
            <h1>{yazi.baslik}</h1>
            <p className="yazi-ozet">{yazi.ozet}</p>
            <div className="yazi-kunye">
              <span className="yazi-yazar">{t('post_author')}</span>
              <span><CalendarDays size={14} /> {tarihiYaz(yazi.tarih)}</span>
              <span><Clock size={14} /> {dakika} {t('post_read_time')}</span>
              {/* Sayac gelene kadar hic gosterilmiyor: "0 goruntulenme" yazmak,
                  hic yazmamaktan kotu. */}
              {goruntulenme !== null ? (
                <span><Eye size={14} /> {sayiyiKisalt(goruntulenme)} {t('post_views')}</span>
              ) : null}
            </div>
          </header>

          <div className="yazi-kapak">
            <BlogKapak slug={yazi.slug} kategori={yazi.kategori} alt={yazi.baslik} boyut={72} olcu="yazi" oncelikli />
          </div>

          <div className="yazi-govde">
            {yazi.bloklar.map((b, i) => <Blok key={i} blok={b} />)}
          </div>
        </div>

        <BlogKenarCubugu
          haricSlug={yazi.slug}
          sorular={yazi.sss.map((s) => s.soru)}
          kontrolListesi={yazi.kontrolListesi}
          isaretliler={isaretliler}
          isaretiCevir={isaretiCevir}
        />
      </div>

      {yazi.kontrolListesi?.length ? (
        <section className="container yazi-kontrol">
          <div className="kontrol-panel">
            <header>
              <CheckCircle2 size={22} />
              <div>
                <h2>{t('post_checklist_title')}</h2>
                <p>{t('post_checklist_desc')}</p>
              </div>
            </header>
            {/*
              ⚠️ TIKLANABILIR AMA HICBIR YERE YAZILMIYOR (İSTEK: Ahmet,
              24.08.2026 — "bunlari tikleme yapilabilsin geciciiTABI hicbir yerde
              verileri tutulmasin reaksiyon amac").

              Durum yalniz bu bilesenin belleginde. Sunucuya gitmiyor,
              `localStorage`'a da yazilmiyor: sayfa yenilenince siniyor. Bu bir
              eksiklik degil, karar. Kontrol listesi bir gorev yoneticisi degil,
              okurken "bunu yaptim" diyebilmek icin bir tepki.

              ⚠️ Veri minimizasyonu acisindan da dogru olan bu: tutulmayan veri
              icin cerez metni, saklama suresi ve silme yolu gerekmiyor.

              ⚠️ `<li>` degil `<button>`: tiklanabilir bir sey klavyeyle de
              erisilebilir olmali. `aria-pressed` ekran okuyucuya durumu soyluyor.
            */}
            <ul>
              {yazi.kontrolListesi.map((m, i) => (
                <li key={m}>
                  <button
                    type="button"
                    className={isaretliler.has(i) ? 'kontrol-madde isaretli' : 'kontrol-madde'}
                    aria-pressed={isaretliler.has(i)}
                    onClick={() => isaretiCevir(i)}
                  >
                    {m}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {yazi.sss.length ? (
        <section className="container yazi-sss">
          <h2>{t('post_faq_title')}</h2>
          {/*
            ⚠️ ACILIR KAPANIR DEGIL (Ahmet, 23.08.2026): "sikca sorulan sorular
            acilir kapanirda degil de direkt gozukse tasarimi ayri gozukur".
            Ayrica kapali metin arama motoru icin de zayif: acilir kutudaki cevap
            sayfada var ama okuyucunun gormesi bir tiklamaya bagli.

            Genis ekranda iki sutuna aciliyor; tek sutunda cok uzun bir serit
            oluyordu.
          */}
          <div className="sss-izgara">
            {yazi.sss.map((s, i) => (
              <div className="sss-kart" id={`soru-${i + 1}`} key={s.soru}>
                <span className="sss-no">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{s.soru}</h3>
                  <p>{s.cevap}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {yazi.kaynaklar?.length ? (
        <section className="container yazi-kaynaklar">
          <h2>{t('post_sources_title')}</h2>
          {/*
            ⚠️ KUNYE PARCALI GOSTERILIYOR (Ahmet, 24.08.2026: "hangi dergi hangi
            makale hangi sayi vs vs"). Once yalniz bir baglanti etiketi vardi ve
            okuyucu kaynagin hakemli bir calisma mi yoksa bir kurum sayfasi mi
            oldugunu ayirt edemiyordu.

            Sira bilincli: once YAZAR (arastirmayi kim yurutmus), sonra baslik,
            sonra dergi/kurum ve kunye. Saglik iceriginde guvenilirlik sinyali
            once kimin soyledigi.
          */}
          <ol>
            {yazi.kaynaklar.map((k) => (
              <li key={k.doi ?? k.adres ?? k.baslik}>
                {k.yazarlar ? <span className="kaynak-yazar">{k.yazarlar}. </span> : null}
                {k.adres
                  ? <a href={k.adres} target="_blank" rel="noopener noreferrer">{k.baslik}</a>
                  : <span>{k.baslik}</span>}
                {k.dergi ? <span className="kaynak-dergi">. {k.dergi}</span> : null}
                {k.yil ? <span>, {k.yil}</span> : null}
                {k.kunye ? <span>;{k.kunye}</span> : null}
                <span className="kaynak-kurum">{k.kurum}</span>
                {k.doi ? <span className="kaynak-doi">doi: {k.doi}</span> : null}
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {ilgili.length ? (
        <section className="container yazi-ilgili">
          <h2>{t('post_related_title')}</h2>
          <div className="yazi-ilgili-liste">
            {ilgili.map((y) => (
              <Link key={y.slug} to={`/blog/${y.slug}`} className="yazi-ilgili-kart">
                <BlogKapak slug={y.slug} kategori={y.kategori} alt={y.baslik} boyut={36} olcu="kart" />
                <div>
                  <span>{y.kategori}</span>
                  <h3>{y.baslik}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="container">
        <div className="yazi-uygulama-bandi">
          <div>
            <h2>{t('post_app_banner_title')}</h2>
            <p>{t('post_app_banner_desc')}</p>
          </div>
          <Link to="/" className="yazi-uygulama-dugme">{t('post_app_banner_btn')}<ArrowRight size={16} /></Link>
        </div>
      </section>
    </article>
  );
}
