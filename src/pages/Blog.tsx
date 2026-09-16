import { useTranslation } from 'react-i18next';
import {
  ArrowRight, BarChart3, Cat, Clock, Dog, Flame, HeartPulse, Mail, Users, Utensils, Building2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import SEO from '../components/SEO';
import { YAZILAR, okumaSuresi, tarihiYaz } from '../data/blog';
import BlogKapak from '../components/BlogKapak';
import { goruntulenmeOku } from '../lib/blogGoruntulenme';
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

/**
 * Ana izgarada bir seferde acilan kart sayisi ve "daha fazla" adimi.
 *
 * ⚠️ NEDEN SAYFALAMA VAR (Ahmet, 16.09.2026: *"bu kadar degil tek satir olmali
 * bunlar"*). Blog 33 yaziya cikinca sayfa 24 kartlik bir duvara donmustu.
 * Kartlari kesip atmak da cozum degil: kesilen yaziya hicbir yerden
 * ulasilamazdi. Cozum, akisi sayfalamak.
 */
const IZGARA_ADIM = 12;

/**
 * "En cok okunanlar" seridi ne zaman aciliyor?
 *
 * ⚠️ AYNI ESIK KENAR CUBUGUNDA DA VAR (`BlogKenarCubugu.tsx` · POPULER_ESIGI).
 * Gerekce orada yazili: iki-uc goruntulenmeyle yapilan siralama siralama degil
 * gurultudur. Esik tutmuyorsa serit HIC cizilmiyor; yerine "son eklenenler"i
 * koyup basligini "en cok okunan" birakmak dogrudan yanlis bilgi olurdu.
 *
 * ⚠️ Iki yerde duran esik, ikisinden biri degistiginde otekinin unutulmasi
 * demek. Ayni sayiyi tasiyorlar ve ikisi de birbirine isaret ediyor.
 */
const OKUNMA_ESIGI = { toplam: 50, enAzKacYazi: 3 };

const KATEGORI_IKON = {
  'Kedi': Cat,
  'Köpek': Dog,
  'Beslenme': Utensils,
  'Sağlık': HeartPulse,
  'Klinik Yönetimi': BarChart3,
  'Pet Sahipleri': Users } as const;

export default function Blog() {
  const { t } = useTranslation();
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
   * ANA AKIS = TUM YAZILAR, SAYFALANMIS (16.09.2026 duzenlemesi).
   *
   * ⚠️ ONCEDEN UC AYRI LISTE VARDI ve ucu de ayni yazilari gosteriyordu:
   * izgara ilk sekizi, "One Cikan Yazilar" basligi altindaki bolum GERIYE
   * KALAN HER SEYI (33 yazida 24 kart), "Son eklenenler" de en yeni dordu.
   * 33 yazi ekranda 37 kez geciyordu.
   *
   * ⚠️ USTELIK O BASLIK YANLISTI. `slice(9)` listenin EN ESKI yazilarini
   * veriyordu; onlara "one cikan" demek, olcmedigimiz seye ad takmakti —
   * kenar cubugunda "populer" demekten kacinma gerekcesinin aynisi.
   *
   * Simdi tek akis var: yazilar tarihe gore siralı, `IZGARA_ADIM` kadari acik,
   * gerisi "daha fazla" dugmesiyle geliyor. Hicbir yazi erisilemez kalmiyor.
   *
   * ⚠️ AKIS KAHRAMAN YAZISINI DA ICERIYOR (`slice(1)` YOK). Eskiden ilk yazi
   * disarida birakiliyordu, cunku izgara "kalanlar" demekti. Artik basligi
   * "Tum yazilar" ve yaninda sayi var: 32 yazip 33 kart saymak ya da tersi,
   * Ahmet'in 24.08'de bildirdigi hatanin (*"kedilerde 4 sayi var ama 3 yazi
   * gorunuyor"*) aynisi olurdu. Serit rozeti, baslik sayisi ve ekrandaki kart
   * sayisi artik ucu de ayni.
   */
  const tumIzgara = suzulmus;
  const [gosterilen, setGosterilen] = useState(IZGARA_ADIM);

  /* Kategori degisince akis basa donuyor; yoksa iki yazilik kategoride
     "daha fazla" dugmesi acik kalmis gibi gorunurdu. */
  useEffect(() => { setGosterilen(IZGARA_ADIM); }, [secili]);

  const izgara = tumIzgara.slice(0, gosterilen);
  const kalan = tumIzgara.length - izgara.length;

  /**
   * ⚠️ SESSIZCE BASARISIZ OLUR. Sayac okunamazsa serit hic cizilmiyor; bir
   * siralama yuzunden blogun acilmasini bozmuyoruz.
   */
  const [gorulenler, setGorulenler] = useState<Map<string, number> | null>(null);
  useEffect(() => {
    let iptal = false;
    void goruntulenmeOku(YAZILAR.map((y) => y.slug)).then((satirlar) => {
      if (iptal || !satirlar) return;
      setGorulenler(new Map(satirlar.map((r) => [r.slug, r.goruntulenme])));
    });
    return () => { iptal = true; };
  }, []);

  /**
   * EN COK OKUNANLAR — TEK SATIR (Ahmet, 16.09.2026: *"tek satir olmali
   * bunlar"*). Dort kart, gercek sayactan. Suzme aciksa gorunmuyor: orada
   * zaten butun sonuclar tek izgarada.
   *
   * ⚠️ KAHRAMAN YAZISI ELENMIYOR. Elenseydi serit, kahraman kutusu her 15
   * saniyede donerken birlikte YENIDEN SIRALANIRDI: okuyucu tam tiklarken
   * kartlar kayardi. Siralama sabit kaliyor, tekrar riskine tercih edilir.
   */
  const enCokOkunanlar = (() => {
    if (suzuluyor || !gorulenler) return [];
    const sayilar = [...gorulenler.values()];
    const toplam = sayilar.reduce((a, b) => a + b, 0);
    const okunanYazi = sayilar.filter((n) => n > 0).length;
    if (toplam < OKUNMA_ESIGI.toplam || okunanYazi < OKUNMA_ESIGI.enAzKacYazi) return [];
    return YAZILAR
      .filter((y) => (gorulenler.get(y.slug) ?? 0) > 0)
      .sort((a, b) => (gorulenler.get(b.slug) ?? 0) - (gorulenler.get(a.slug) ?? 0))
      .slice(0, 4);
  })();

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
          <p>{t('blog_empty_category')}</p>
          <button type="button" onClick={() => kategoriSec(null)}>{t('blog_back_to_all')}</button>
        </section>
      ) : null}

      {oneCikan ? (
        <section className="container blog-one-cikan" aria-live="polite">
          {/* `key` her degisimde bileseni yeniliyor, boylece belirme animasyonu
              her yazida yeniden kosuyor. Olmasaydi metin sessizce degisirdi ve
              degistigi fark edilmezdi. */}
          <div className="one-cikan-metin belir" key={oneCikan.slug}>
            <span className="one-cikan-etiket">{t('blog_featured_badge')}</span>
            <h1>{oneCikan.baslik}</h1>
            <p>{oneCikan.ozet}</p>
            <Link to={`/blog/${oneCikan.slug}`} className="one-cikan-dugme">{t('blog_read_post')}<ArrowRight size={18} />
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
            <BlogKapak slug={oneCikan.slug} kategori={oneCikan.kategori} alt={oneCikan.kapakAlt} boyut={64} olcu="yazi" oncelikli={guvenliSira === 0} />
          </div>
        </section>
      ) : null}

      <section className="container">
        <nav className="kategori-seridi" aria-label={t('blog_sidebar_categories')}>
          <button
            type="button"
            className={`kategori-oge${secili ? '' : ' secili'}`}
            onClick={() => kategoriSec(null)}
          >
            <span>{t('pets_filter_all')}</span>
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
                <span>{t('blog_cat_' + ad, ad)}</span>
                <em>{adet}</em>
              </button>
            );
          })}
        </nav>
      </section>

      {/* EN COK OKUNANLAR — TEK SATIR. Kompakt kart bilerek: hemen altindaki
          ana akis buyuk kartlarla cizildigi icin ayni dokuyu iki kez
          koymuyoruz; serit bir kesif seridi, akisin kopyasi degil. */}
      {enCokOkunanlar.length ? (
        <section className="container blog-cok-okunan">
          <header className="blog-liste-baslik">
            <h2><Flame size={20} />{t('blog_most_read')}</h2>
          </header>
          <div className="blog-liste">
            {enCokOkunanlar.map((yazi) => (
              <Link key={yazi.slug} to={`/blog/${yazi.slug}`} className="blog-liste-kart">
                <BlogKapak slug={yazi.slug} kategori={yazi.kategori} alt={yazi.kapakAlt} boyut={24} olcu="kucuk" />
                <div>
                  <h4>{yazi.baslik}</h4>
                  <div className="blog-liste-alt">
                    <span>{t('blog_cat_' + yazi.kategori, yazi.kategori)}</span>
                    <span>{okumaSuresi(yazi)} {t('blog_read_time')}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {izgara.length ? (
        <section className="container blog-tum-yazilar">
          <header className="blog-liste-baslik">
            <h2>
              {secili ? t('blog_cat_' + secili, secili) : t('blog_all_posts')}
              <em className="blog-sayac">{tumIzgara.length}</em>
            </h2>
          </header>
          <div className="blog-izgara">
            {izgara.map((yazi) => (
              <Link key={yazi.slug} to={`/blog/${yazi.slug}`} className="blog-kart">
                <div className="blog-kart-gorsel">
                  <BlogKapak slug={yazi.slug} kategori={yazi.kategori} alt={yazi.kapakAlt} boyut={40} olcu="kart" />
                </div>
                <div className="blog-kart-govde">
                  <span className="blog-kart-kategori">{t('blog_cat_' + yazi.kategori, yazi.kategori).toLocaleUpperCase()}</span>
                  <h3>{yazi.baslik}</h3>
                  <div className="blog-kart-alt">
                    <span><Clock size={14} /> {okumaSuresi(yazi)} {t('blog_read_time')}</span>
                    <span>{tarihiYaz(yazi.tarih)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ⚠️ BAGLANTI DEGIL DUGME. Eski basligin yanindaki "Tumunu Gor"
              zaten bulundugun sayfaya (/blog) gidiyordu: calismayan bir
              baglanti, olmayan bir ozellikten kotudur. Burada gercek bir is
              yapan dugme var ve kac yazi kaldigini soyluyor. */}
          {kalan > 0 ? (
            <div className="blog-daha">
              <button type="button" onClick={() => setGosterilen((n) => n + IZGARA_ADIM)}>{t('blog_load_more')} ({kalan})
              </button>
            </div>
          ) : null}
        </section>
      ) : null}

      {/*
        ⚠️ "SON EKLENENLER" BOLUMU KALDIRILDI (16.09.2026).

        24.08.2026'da Ahmet'in istegiyle eklenmisti: *"blog ana sayfa cok bos
        duruyor, klinik bandinin ustunde en yeni yazilar olabilir"*. O gun blog
        alti yaziydi ve sayfa gercekten bostu.

        Bugun ana izgara zaten TARIHE GORE sirali ve en yeni yazilarla
        basliyor; bolum, hemen ustundeki dort karti ikinci kez gosteriyordu.
        Sayfayi doldurmuyor, tekrar ediyordu. Istegin gerekcesi (boslugu
        doldurmak) 33 yaziyla ortadan kalkti.
      */}

      <section className="container">
        <div className="klinik-bandi">
          <div className="klinik-bandi-ikon"><Building2 size={30} /></div>
          <div className="klinik-bandi-metin">
            <h2>{t('blog_clinic_banner_title')}</h2>
            <p>{t('blog_clinic_banner_desc')}</p>
            <Link to="/clinics" className="klinik-bandi-dugme">{t('blog_clinic_banner_btn')}<ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="bulten-bandi">
          <div className="bulten-metin">
            <Mail size={26} />
            <div>
              <h2>{t('blog_newsletter_title')}</h2>
              <p>{t('blog_newsletter_desc')}</p>
            </div>
          </div>
          <a className="bulten-dugme" href="mailto:info@veterito.com?subject=Blog%20bultenine%20abone%20olmak%20istiyorum">{t('blog_newsletter_btn')}<ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
