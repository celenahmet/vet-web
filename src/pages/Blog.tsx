import {
  ArrowRight, BarChart3, Cat, Clock, Dog, HeartPulse, Mail, Star, Users, Utensils, Building2,
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

import SEO from '../components/SEO';
import { YAZILAR, okumaSuresi, tarihiYaz } from '../data/blog';
import BlogKapak from '../components/BlogKapak';
import './Blog.css';

/**
 * BLOG ANA SAYFASI
 *
 * Duzen Ahmet'in gonderdigi tasarim referansini izliyor: one cikan yazi, kategori
 * seridi, kart izgarasi, one cikan yazilar listesi, klinik bandi, bulten bandi.
 *
 * ⚠️ SITE BASLIGI VE ALT BILGISI BURADA YENIDEN KURULMUYOR. Ikisi de ortak bilesen
 * (`components/Navbar`, `components/Footer`) ve web deposunda baska biri de
 * calisiyor; ortak dosyaya girmek carpisma demek.
 *
 * ⚠️ BOLUMLER ICERIGE GORE ACILIYOR. Tek yazi varken izgara ve one cikanlar
 * gizleniyor. Sahte kartla doldurmak, olmayan bir blogu varmis gibi gosterirdi.
 */

const KATEGORI_IKON = {
  'Kedi': Cat,
  'Köpek': Dog,
  'Beslenme': Utensils,
  'Sağlık': HeartPulse,
  'Klinik Yönetimi': BarChart3,
  'Pet Sahipleri': Users,
} as const;

export default function Blog() {
  /**
   * ⚠️ KATEGORI BAGLANTILARI OLU IDI (duzeltme 23.08.2026). Serit `/blog?kategori=Kedi`
   * adresine gidiyordu ama bu sayfa parametreyi hic okumuyordu: kullanici tikliyor,
   * hicbir sey degismiyordu. Calismayan bir baglanti, olmayan bir ozellikten kotudur;
   * kullanici ozelligin bozuk oldugunu dusunur.
   */
  const [parametreler, setParametreler] = useSearchParams();
  const secili = parametreler.get('kategori');

  const suzulmus = secili ? YAZILAR.filter((y) => y.kategori === secili) : YAZILAR;
  const oneCikan = suzulmus[0];
  const izgara = suzulmus.slice(1, 5);
  const liste = suzulmus.slice(5, 9);

  const kategoriSayisi = new Map<string, number>();
  for (const y of YAZILAR) kategoriSayisi.set(y.kategori, (kategoriSayisi.get(y.kategori) ?? 0) + 1);

  function kategoriSec(ad: string | null) {
    if (ad) setParametreler({ kategori: ad });
    else setParametreler({});
  }

  return (
    <div className="blog-sayfa">
      <SEO
        title="Blog"
        description="Kedi ve köpek sağlığı, aşı takvimi, beslenme ve klinik yönetimi üzerine veteriner hekim gözünden yazılar."
        url="https://veterito.com/blog"
      />

      {secili && !suzulmus.length ? (
        <section className="container blog-bos">
          <p>Bu kategoride henüz yazı yok.</p>
          <button type="button" onClick={() => kategoriSec(null)}>Tüm yazılara dön</button>
        </section>
      ) : null}

      {oneCikan ? (
        <section className="container blog-one-cikan">
          <div className="one-cikan-metin belir">
            <span className="one-cikan-etiket">ÖNE ÇIKAN YAZI</span>
            <h1>{oneCikan.baslik}</h1>
            <p>{oneCikan.ozet}</p>
            <Link to={`/blog/${oneCikan.slug}`} className="one-cikan-dugme">
              Yazıyı Oku <ArrowRight size={18} />
            </Link>
          </div>
          <div className="one-cikan-gorsel belir gecikmeli">
            <BlogKapak ad={oneCikan.kapak} kategori={oneCikan.kategori} alt={oneCikan.baslik} boyut={64} />
          </div>
        </section>
      ) : null}

      <section className="container">
        <nav className="kategori-seridi" aria-label="Kategoriler">
          <button
            type="button"
            className={`kategori-oge${secili ? '' : ' secili'}`}
            onClick={() => kategoriSec(null)}
          >
            <span>Tümü</span>
            <em>{YAZILAR.length}</em>
          </button>
          {(Object.keys(KATEGORI_IKON) as (keyof typeof KATEGORI_IKON)[]).map((ad) => {
            const Ikon = KATEGORI_IKON[ad];
            const adet = kategoriSayisi.get(ad) ?? 0;
            return (
              <button
                type="button"
                key={ad}
                className={`kategori-oge${secili === ad ? ' secili' : ''}${adet ? '' : ' bos'}`}
                onClick={() => adet && kategoriSec(ad)}
                disabled={!adet}
              >
                <Ikon size={18} />
                <span>{ad}</span>
                <em>{adet}</em>
              </button>
            );
          })}
        </nav>
      </section>

      {izgara.length ? (
        <section className="container blog-izgara">
          {izgara.map((yazi) => (
            <Link key={yazi.slug} to={`/blog/${yazi.slug}`} className="blog-kart">
              <div className="blog-kart-gorsel">
                <BlogKapak ad={yazi.kapak} kategori={yazi.kategori} alt={yazi.baslik} boyut={40} />
              </div>
              <div className="blog-kart-govde">
                <span className="blog-kart-kategori">{yazi.kategori.toLocaleUpperCase('tr-TR')}</span>
                <h3>{yazi.baslik}</h3>
                <div className="blog-kart-alt">
                  <span><Clock size={14} /> {okumaSuresi(yazi)} dk okuma</span>
                  <span>{tarihiYaz(yazi.tarih)}</span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      ) : null}

      {liste.length ? (
        <section className="container blog-liste-bolum">
          <header className="blog-liste-baslik">
            <h2><Star size={20} /> Öne Çıkan Yazılar</h2>
            <Link to="/blog">Tümünü Gör <ArrowRight size={16} /></Link>
          </header>
          <div className="blog-liste">
            {liste.map((yazi) => (
              <Link key={yazi.slug} to={`/blog/${yazi.slug}`} className="blog-liste-kart">
                <BlogKapak ad={yazi.kapak} kategori={yazi.kategori} alt={yazi.baslik} boyut={24} />
                <div>
                  <h4>{yazi.baslik}</h4>
                  <div className="blog-liste-alt">
                    <span>{yazi.kategori}</span>
                    <span>{okumaSuresi(yazi)} dk okuma</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="container">
        <div className="klinik-bandi">
          <div className="klinik-bandi-ikon"><Building2 size={30} /></div>
          <div className="klinik-bandi-metin">
            <h2>Klinik yönetimini dijitalleştirin, dostlara daha fazla zaman ayırın</h2>
            <p>Veterito ile randevu talepleri, müşteri kayıtları ve hasta geçmişi tek panelde toplanır. Klinik paneli ücretsizdir.</p>
            <Link to="/clinics" className="klinik-bandi-dugme">Klinikler İçin Veterito <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="bulten-bandi">
          <div className="bulten-metin">
            <Mail size={26} />
            <div>
              <h2>Yeni yazılardan haberdar olun</h2>
              <p>Kedi ve köpek sağlığına dair yeni yazılar yayınlandığında haber verelim.</p>
            </div>
          </div>
          <a className="bulten-dugme" href="mailto:info@veterito.com?subject=Blog%20bultenine%20abone%20olmak%20istiyorum">
            Bültene Abone Ol <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
