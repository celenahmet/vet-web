import { ArrowLeft, ArrowRight, Clock, CalendarDays, AlertTriangle, CircleAlert } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import SEO from '../components/SEO';
import { YAZILAR, yaziBul, okumaSuresi, tarihiYaz } from '../data/blog';
import type { BlogBlock } from '../data/blog';
import BlogKapak from '../components/BlogKapak';
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

function KalinMetin({ metin }: { metin: string }) {
  const parcalar = metin.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parcalar.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? <strong key={i}>{p.slice(2, -2)}</strong> : <span key={i}>{p}</span>,
      )}
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
    case 'tuzak':
      return (
        <aside className="yazi-tuzak">
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
  const { slug } = useParams<{ slug: string }>();
  const yazi = yaziBul(slug);

  if (!yazi) {
    return (
      <div className="container yazi-bulunamadi">
        <h1>Yazı bulunamadı</h1>
        <p>Aradığınız yazı kaldırılmış ya da adresi değişmiş olabilir.</p>
        <Link to="/blog" className="yazi-geri"><ArrowLeft size={16} /> Bloga dön</Link>
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

  return (
    <article className="yazi-sayfa">
      <SEO title={yazi.baslik} description={yazi.ozet} url={adres} type="article" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(makaleVerisi)}</script>
        {yazi.sss.length ? <script type="application/ld+json">{JSON.stringify(sssVerisi)}</script> : null}
      </Helmet>

      <header className="container yazi-basi">
        <Link to="/blog" className="yazi-geri"><ArrowLeft size={16} /> Bloga dön</Link>
        <span className="yazi-kategori">{yazi.kategori.toLocaleUpperCase('tr-TR')}</span>
        <h1>{yazi.baslik}</h1>
        <p className="yazi-ozet">{yazi.ozet}</p>
        <div className="yazi-kunye">
          <span className="yazi-yazar">Veterito Editör</span>
          <span><CalendarDays size={14} /> {tarihiYaz(yazi.tarih)}</span>
          <span><Clock size={14} /> {dakika} dk okuma</span>
        </div>
      </header>

      <div className="container yazi-kapak">
        <BlogKapak ad={yazi.kapak} kategori={yazi.kategori} alt={yazi.baslik} boyut={72} />
      </div>

      <div className="container yazi-govde">
        {yazi.bloklar.map((b, i) => <Blok key={i} blok={b} />)}

        {yazi.sss.length ? (
          <section className="yazi-sss">
            <h2>Sık sorulanlar</h2>
            {yazi.sss.map((s) => (
              <details key={s.soru}>
                <summary>{s.soru}</summary>
                <p>{s.cevap}</p>
              </details>
            ))}
          </section>
        ) : null}

        {yazi.kaynaklar?.length ? (
          <section className="yazi-kaynaklar">
            <h2>Kaynaklar</h2>
            <ul>
              {yazi.kaynaklar.map((k) => (
                <li key={k.etiket}>
                  {k.adres ? <a href={k.adres} target="_blank" rel="noopener noreferrer">{k.etiket}</a> : k.etiket}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      {ilgili.length ? (
        <section className="container yazi-ilgili">
          <h2>İlgili yazılar</h2>
          <div className="yazi-ilgili-liste">
            {ilgili.map((y) => (
              <Link key={y.slug} to={`/blog/${y.slug}`} className="yazi-ilgili-kart">
                <BlogKapak ad={y.kapak} kategori={y.kategori} alt={y.baslik} boyut={36} />
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
            <h2>Dostunuzun sağlık defteri cebinizde olsun</h2>
            <p>Aşı takvimi, sağlık kaydı ve veteriner randevusu tek uygulamada. Veterito ücretsizdir.</p>
          </div>
          <Link to="/" className="yazi-uygulama-dugme">Uygulamayı keşfet <ArrowRight size={16} /></Link>
        </div>
      </section>
    </article>
  );
}
