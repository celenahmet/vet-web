import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpenCheck, ChevronRight, Clock, Mail, UserRound } from 'lucide-react';

import SEO from '../components/SEO';
import BlogKapak from '../components/BlogKapak';
import { YAZILAR, okumaSuresi, tarihiYaz } from '../data/blog';
import { YAZAR } from '../data/yazar';
import './Yazar.css';
import '../styles/kirinti.css';

/**
 * YAZAR SAYFASI — /author (16.09.2026)
 *
 * Yazi kunyesindeki "Veterito Editör" baglantisinin hedefi. Metin
 * `data/yazar.ts`'den geliyor (prerender ile ortak). Sayilar ELLE YAZILMIYOR:
 * yazi, kaynak ve hakemli calisma adedi YAZILAR dizisinden hesaplaniyor; elle
 * yazilan sayi bir yazi eklendiginde sessizce yanlisa donerdi.
 *
 * ⚠️ "Hakemli" olcutu kaynak-denetimi.mjs ile AYNI: yazar ya da dergi alani
 * dolu olan kaynak. Iki yer farkli sayarsa sayfa denetimle celisir.
 */
export default function Yazar() {
  const adres = `https://veterito.com${YAZAR.yol}`;
  const kaynaklar = YAZILAR.flatMap((y) => y.kaynaklar ?? []);
  const hakemli = kaynaklar.filter((k) => Boolean(k.yazarlar || k.dergi)).length;

  const profil = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Organization',
      '@id': `${adres}#editor`,
      name: YAZAR.ad,
      description: YAZAR.ozet,
      url: adres,
      email: YAZAR.eposta,
      parentOrganization: { '@type': 'Organization', name: 'Veterito', url: 'https://veterito.com' },
    },
  };

  return (
    <div className="yazar-sayfa">
      <SEO
        title={`${YAZAR.ad} · Yazılar nasıl hazırlanıyor`}
        description={YAZAR.ozet}
        url={adres}
        type="profile"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(profil)}</script>
      </Helmet>

      <header className="container yazar-basi">
        <nav className="yazi-kirinti" aria-label="Sayfa yolu">
          <Link to="/">Ana Sayfa</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link to="/blog">Blog</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span aria-current="page">{YAZAR.ad}</span>
        </nav>

        <div className="yazar-kimlik">
          <span className="yazar-avatar" aria-hidden="true"><UserRound size={34} /></span>
          <div>
            <h1>{YAZAR.ad}</h1>
            <p className="yazar-rol">{YAZAR.rol}</p>
          </div>
        </div>
        <p className="yazar-ozet">{YAZAR.ozet}</p>

        {/* Sayilar canli: yazi eklendikce kendiliginden artiyor. */}
        <dl className="yazar-sayilar">
          <div><dt>Yazı</dt><dd>{YAZILAR.length}</dd></div>
          <div><dt>Kaynak</dt><dd>{kaynaklar.length}</dd></div>
          <div><dt>Hakemli çalışma</dt><dd>{hakemli}</dd></div>
        </dl>
      </header>

      <section className="container yazar-ilkeler" aria-labelledby="ilkeler-baslik">
        <h2 id="ilkeler-baslik"><BookOpenCheck size={20} />Yazılar nasıl hazırlanıyor</h2>
        <ol>
          {YAZAR.ilkeler.map((i) => (
            <li key={i.baslik}>
              <h3>{i.baslik}</h3>
              <p>{i.metin}</p>
            </li>
          ))}
        </ol>
        <p className="yazar-iletisim">
          <Mail size={16} />
          Bir hata ya da eskimiş bilgi gördüyseniz:{' '}
          <a href={`mailto:${YAZAR.eposta}?subject=Blog%20d%C3%BCzeltme`}>{YAZAR.eposta}</a>
        </p>
      </section>

      <section className="container yazar-yazilar" aria-labelledby="yazilar-baslik">
        <h2 id="yazilar-baslik">Bu ekibin yazıları <em>{YAZILAR.length}</em></h2>
        <ul className="yazar-liste">
          {YAZILAR.map((y) => (
            <li key={y.slug}>
              <Link to={`/blog/${y.slug}`}>
                <BlogKapak slug={y.slug} kategori={y.kategori} alt={y.kapakAlt} boyut={24} olcu="kucuk" />
                <div>
                  <span className="yazar-liste-kategori">{y.kategori}</span>
                  <h3>{y.baslik}</h3>
                  <span className="yazar-liste-alt"><Clock size={13} /> {okumaSuresi(y)} dk okuma · {tarihiYaz(y.tarih)}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
