import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

import { YAZILAR, KATEGORILER, okumaSuresi, tarihiYaz } from '../data/blog';
import BlogKapak from './BlogKapak';
import './BlogKenarCubugu.css';

/**
 * YAZI SAYFASI KENAR CUBUGU
 *
 * Referans UniConnectly blogu: kategori listesi (sayilariyla) ve yazi listesi.
 *
 * ⚠️ "POPULER YAZILAR" DEMIYORUZ. Goruntulenme verimiz yok; olcmedigimiz bir seye
 * populer demek, dogrulanamayan bir iddia olur. Basligi "Son yazilar" olarak
 * kuruyoruz; olcum altyapisi geldiginde ad da degisebilir.
 *
 * ⚠️ Kategori sayilari elle yazilmiyor, YAZILAR dizisinden hesaplaniyor. Elle yazilan
 * sayi bir yazi eklendiginde sessizce yanlisa donerdi.
 */

type Props = { haricSlug?: string };

export default function BlogKenarCubugu({ haricSlug }: Props) {
  const sayim = new Map<string, number>();
  for (const y of YAZILAR) sayim.set(y.kategori, (sayim.get(y.kategori) ?? 0) + 1);

  const sonYazilar = YAZILAR.filter((y) => y.slug !== haricSlug).slice(0, 5);

  return (
    <aside className="blog-kenar">
      <section className="kenar-kutu">
        <h2>Kategoriler</h2>
        <ul className="kenar-kategori">
          <li>
            <Link to="/blog">
              <span>Tümü</span>
              <em>{YAZILAR.length}</em>
            </Link>
          </li>
          {KATEGORILER.map((ad) => {
            const adet = sayim.get(ad) ?? 0;
            return (
              <li key={ad} className={adet ? '' : 'bos'}>
                <Link to={`/blog?kategori=${encodeURIComponent(ad)}`}>
                  <span>{ad}</span>
                  <em>{adet}</em>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {sonYazilar.length ? (
        <section className="kenar-kutu">
          <h2>Son yazılar</h2>
          <ul className="kenar-yazilar">
            {sonYazilar.map((y) => (
              <li key={y.slug}>
                <Link to={`/blog/${y.slug}`}>
                  <div className="kenar-gorsel">
                    <BlogKapak ad={y.kapak} kategori={y.kategori} alt={y.baslik} boyut={20} />
                  </div>
                  <div>
                    <h3>{y.baslik}</h3>
                    <span><Clock size={12} /> {okumaSuresi(y)} dk · {tarihiYaz(y.tarih)}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="kenar-kutu kenar-cta">
        <h2>Dostunuzun sağlık defteri</h2>
        <p>Aşı takvimi, sağlık kaydı ve veteriner randevusu tek uygulamada. Ücretsizdir.</p>
        <Link to="/">Uygulamayı keşfet <ArrowRight size={15} /></Link>
      </section>
    </aside>
  );
}
