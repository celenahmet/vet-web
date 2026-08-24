import {
  ArrowRight, BarChart3, Cat, Clock, Dog, HeartPulse, Mail, Sparkles, Star, Users, Utensils, Building2,
} from 'lucide-react';
import { useEffect, useState } from 'react';
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

/** Kahraman kutusundaki yazinin degisme araligi. Ahmet: "15 olabilir bu degisebilir". */
const DONME_SURESI = 15000;

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

  /**
   * ⚠️ SUZME ACIKKEN KAHRAMAN KUTUSU YOK (duzeltme 24.08.2026, Ahmet bildirdi:
   * "kedilerde 4 sayi var diyor ama 3 yazi gorunuyor").
   *
   * Sayac dogruydu, gosterim yaniltiyordu. Kategori secilince ilk sonuc en uste
   * "ÖNE ÇIKAN YAZI" etiketiyle buyuk kutuya aliniyor, ızgarada N-1 kart
   * kaliyordu. Kedi'de rozet 4 diyor, goz 3 sayiyor. Terfi eden yazi bir SONUC
   * ama sonuc gibi durmuyor, ustelik etiketi de yanlis: suzulmus listenin en
   * yenisi "one cikan" degil.
   *
   * Kural: kahraman kutusu yalniz SUZULMEMIS listede. Kategori secildiginde
   * butun sonuclar ayni izgarada, rozetteki sayi ile ekrandaki kart sayisi
   * birebir esit.
   */
  const suzuluyor = Boolean(secili);

  /**
   * DONEN KAHRAMAN KUTUSU (İSTEK: Ahmet, 24.08.2026 — "one cikan yazilar belli
   * saniye araliklariyla 15 olabilir bu degisebilir 5 tanesi donup durur").
   *
   * ⚠️ Sure tek yerde: `DONME_SURESI`. Ahmet "degisebilir" dedigi icin sabit
   * bir sayi metnin icine gomulmedi.
   *
   * ⚠️ SUZME ACIKKEN DONMUYOR. Kategori secilince kahraman kutusu zaten
   * gorunmuyor (rozetteki sayi ile kart sayisi tutsun diye); orada donecek bir
   * sey de yok.
   *
   * ⚠️ Hareket azaltma tercihi acikken donme DURUYOR. Kendiliginden degisen
   * icerik, vestibuler duyarliligi olan ve ekran okuyucu kullanan kullanicilar
   * icin rahatsiz edici; ilk yazida sabit kaliyor.
   *
   * ⚠️ Zamanlayici sekmede degil de arka planda da calisir; tarayici zaten
   * arka planda araligi seyreltiyor, ayrica durdurmaya gerek yok. Ama bilesen
   * kalkarken temizleniyor, yoksa gezinme sonrasi sizinti olur.
   */
  const donenler = suzulmus.slice(0, 5);
  const [donenSira, setDonenSira] = useState(0);

  useEffect(() => {
    if (suzuluyor || donenler.length < 2) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const sayac = setInterval(
      () => setDonenSira((o) => (o + 1) % donenler.length),
      DONME_SURESI,
    );
    return () => clearInterval(sayac);
  }, [suzuluyor, donenler.length]);

  // Yazi sayisi azalirsa sira disarida kalmasin.
  const guvenliSira = donenSira < donenler.length ? donenSira : 0;
  const oneCikan = suzuluyor ? undefined : donenler[guvenliSira];

  /**
   * ⚠️ "ONE CIKAN YAZILAR" BOLUMU ARTIK ARTAN KART ICIN ACILMIYOR (Ahmet,
   * 24.08.2026: "one cikan yazilar kucuk kalmis").
   *
   * Eskiden izgara 4 kartla siniriydi ve 5. yazidan itibarasi ayri baslikli bir
   * bolume dusuyordu. Alti yazi varken bu bolum TEK kart iceriyordu: dort
   * sutunluk satirda tek basina duran kucuk bir kart ve yaninda ucte uc bosluk.
   *
   * Simdi izgara arta kalanin tamamini aliyor (iki tam satira kadar). Ikinci
   * satirin eksik kalmasi sorun degil, kart izgaralarinda beklenen davranis bu;
   * sorun olan, tek kart icin AYRI BASLIKLI bir bolum acmakti.
   */
  const izgara = suzuluyor ? suzulmus : suzulmus.slice(1, 9);

  /**
   * Klinik bandinin ustundeki "Son eklenenler" seridi. En yeni dort yazi, ama
   * o an kahraman kutusunda duran HARIC.
   * ⚠️ Kaynak `YAZILAR` (tarihe gore sirali), `suzulmus` degil: bolum yalnizca
   * suzme kapaliyken gorunuyor, orada ikisi zaten ayni.
   */
  const sonEklenenler = YAZILAR.filter((y) => y.slug !== oneCikan?.slug).slice(0, 4);
  const liste = suzuluyor ? [] : suzulmus.slice(9);

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
        <section className="container blog-one-cikan" aria-live="polite">
          {/* `key` her degisimde bileseni yeniliyor, boylece belirme animasyonu
              her yazida yeniden kosuyor. Olmasaydi metin sessizce degisirdi ve
              degistigi fark edilmezdi. */}
          <div className="one-cikan-metin belir" key={oneCikan.slug}>
            <span className="one-cikan-etiket">ÖNE ÇIKAN YAZI</span>
            <h1>{oneCikan.baslik}</h1>
            <p>{oneCikan.ozet}</p>
            <Link to={`/blog/${oneCikan.slug}`} className="one-cikan-dugme">
              Yazıyı Oku <ArrowRight size={18} />
            </Link>
            {donenler.length > 1 ? (
              <div className="one-cikan-noktalar" role="tablist" aria-label="Öne çıkan yazılar">
                {donenler.map((y, i) => (
                  <button
                    key={y.slug}
                    type="button"
                    role="tab"
                    aria-selected={i === guvenliSira}
                    aria-label={y.baslik}
                    className={i === guvenliSira ? 'nokta secili' : 'nokta'}
                    onClick={() => setDonenSira(i)}
                  />
                ))}
              </div>
            ) : null}
          </div>
          <div className="one-cikan-gorsel belir gecikmeli" key={`${oneCikan.slug}-gorsel`}>
            {/* ⚠️ Yalniz ILK yazi oncelikli. Donen butun gorselleri "oncelikli"
                isaretlemek onceligi anlamsizlastirir ve hepsini birden
                indirtir. */}
            <BlogKapak slug={oneCikan.slug} kategori={oneCikan.kategori} alt={oneCikan.baslik} boyut={64} olcu="yazi" oncelikli={guvenliSira === 0} />
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
                <BlogKapak slug={yazi.slug} kategori={yazi.kategori} alt={yazi.baslik} boyut={40} olcu="kart" />
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
                <BlogKapak slug={yazi.slug} kategori={yazi.kategori} alt={yazi.baslik} boyut={24} olcu="kucuk" />
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

      {/*
        ⚠️ BOS DURAN ALAN DOLDURULDU (Ahmet, 24.08.2026: "Blog ana sayfa cok bos
        duruyor... klinik bandinin ustunde en yeni yazilar veya yaziya uygun
        yazi onerileri olabilir").

        Bolum SUZME ACIKKEN gizleniyor: orada zaten butun sonuclar izgarada ve
        ayni kartlari ikinci kez gostermek sayfayi doldurmaz, tekrar eder.

        ⚠️ Kahraman kutusundaki yazi HARIC tutuluyor. O yazi ekranin en ustunde
        buyuk kutuda duruyor; hemen altinda kucuk kart olarak tekrar gostermek
        "blog bos, ayni seyi iki kez koyduk" izlenimi verirdi.
      */}
      {!suzuluyor && sonEklenenler.length ? (
        <section className="container blog-son-eklenenler">
          <header className="blog-liste-baslik">
            <h2><Sparkles size={20} /> Son eklenenler</h2>
            <Link to="/blog">Tüm yazılar <ArrowRight size={16} /></Link>
          </header>
          <div className="blog-liste">
            {sonEklenenler.map((yazi) => (
              <Link key={yazi.slug} to={`/blog/${yazi.slug}`} className="blog-liste-kart">
                <BlogKapak slug={yazi.slug} kategori={yazi.kategori} alt={yazi.baslik} boyut={24} olcu="kucuk" />
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
