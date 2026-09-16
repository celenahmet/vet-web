import { useTranslation } from 'react-i18next';
import {
  ArrowRight, BarChart3, Cat, Clock, Dog, Flame, HeartPulse, Mail, Search, Users, Utensils, Building2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import SEO from '../components/SEO';
import { YAZILAR, okumaSuresi, tarihiYaz } from '../data/blog';
import BlogKapak from '../components/BlogKapak';
import { goruntulenmeOku } from '../lib/blogGoruntulenme';
import { trEslesiyor } from '../lib/trArama';
import ReklamKutusu from '../components/ReklamKutusu';
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

  /**
   * ARAMA KUTUSU (16.09.2026, Ahmet: *"blog sayfasinda eksikler felan da var"*).
   *
   * ⚠️ ADRESE YAZILMIYOR. Kategori `?kategori=` ile adreste duruyor cunku
   * paylasilabilir bir gorunum; arama ise anlik bir eylem. Her tusa basista
   * gecmise kayit dusurmek, geri tusunu kullanilamaz hale getirirdi.
   *
   * ⚠️ TURKCE ESLEME ZORUNLU. `toLowerCase` ile "ısırık" aramasi "ISIRIK"
   * basligini bulamiyor; gerekcesi `lib/trArama.ts` icinde yazili.
   */
  const [sorgu, setSorgu] = useState('');

  /** Siralama secenegi (Ahmet: *"en yeniler felan diye secme kismi da olsun"*). */
  const [siralama, setSiralama] = useState<'yeni' | 'eski' | 'okunan'>('yeni');

  const aramaVar = sorgu.trim() !== '';

  const suzulmus = useMemo(() => YAZILAR
    .filter((y) => !secili || y.kategori === secili)
    .filter((y) => trEslesiyor(`${y.baslik} ${y.ozet} ${y.kategori}`, sorgu)),
  [secili, sorgu]);

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
  const suzuluyor = Boolean(secili) || aramaVar;

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
   * ⚠️ SESSIZCE BASARISIZ OLUR. Sayac okunamazsa "en cok okunanlar" serit hic
   * cizilmiyor ve "En cok okunan" siralamasi tarih sirasina dusuyor; bir
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
   * ANA AKIS = TUM YAZILAR, SIRALANMIS VE SAYFALANMIS (16.09.2026).
   *
   * ⚠️ ONCEDEN UC AYRI LISTE VARDI ve ucu de ayni yazilari gosteriyordu:
   * izgara ilk sekizi, "One Cikan Yazilar" basligi altindaki bolum GERIYE
   * KALAN HER SEYI (33 yazida 24 kart), "Son eklenenler" de en yeni dordu.
   * 33 yazi ekranda 37 kez geciyordu ve o basliktaki iddia da yanlisti:
   * `slice(9)` listenin EN ESKI yazilarini veriyordu.
   *
   * ⚠️ AKIS KAHRAMAN YAZISINI DA ICERIYOR. Baslik sayaci, kategori seridi
   * rozeti ve ekrandaki kart sayisi ucu de ayni olmali; ayrisma, Ahmet'in
   * 24.08'de bildirdigi hatanin (*"kedilerde 4 sayi var ama 3 yazi
   * gorunuyor"*) aynisi olurdu.
   */
  const tumIzgara = useMemo(() => {
    const liste = [...suzulmus];
    switch (siralama) {
      case 'eski':
        return liste.sort((a, b) => a.tarih.localeCompare(b.tarih));
      case 'okunan':
        /* Sayac gelmediyse tarih sirasi korunuyor: hepsi 0 olunca "en cok
           okunan" rastgele bir siraya donerdi. */
        if (!gorulenler) return liste;
        return liste.sort((a, b) => (gorulenler.get(b.slug) ?? 0) - (gorulenler.get(a.slug) ?? 0));
      default:
        return liste;
    }
  }, [suzulmus, siralama, gorulenler]);

  const [gosterilen, setGosterilen] = useState(IZGARA_ADIM);

  /* Suzgec ya da siralama degisince akis basa donuyor; yoksa iki yazilik
     sonucta "daha fazla" dugmesi acik kalmis gibi gorunurdu. */
  useEffect(() => { setGosterilen(IZGARA_ADIM); }, [secili, sorgu, siralama]);

  const izgara = tumIzgara.slice(0, gosterilen);
  const kalan = tumIzgara.length - izgara.length;

  /**
   * EN COK OKUNANLAR — KENAR CUBUGUNDA (16.09.2026).
   *
   * Gercek sayactan geliyor. Esik kenar cubugundakinin (POPULER_ESIGI) aynisi;
   * tutmuyorsa kutu HIC cizilmiyor. Yerine "son eklenenler"i koyup basligini
   * "en cok okunan" birakmak dogrudan yanlis bilgi olurdu.
   *
   * ⚠️ KAHRAMAN YAZISI ELENMIYOR. Elenseydi liste, kahraman kutusu her 15
   * saniyede donerken birlikte YENIDEN SIRALANIRDI: okuyucu tam tiklarken
   * satirlar kayardi.
   */
  const enCokOkunanlar = useMemo(() => {
    if (!gorulenler) return [];
    const sayilar = [...gorulenler.values()];
    const toplam = sayilar.reduce((a, b) => a + b, 0);
    const okunanYazi = sayilar.filter((n) => n > 0).length;
    if (toplam < OKUNMA_ESIGI.toplam || okunanYazi < OKUNMA_ESIGI.enAzKacYazi) return [];
    return YAZILAR
      .filter((y) => (gorulenler.get(y.slug) ?? 0) > 0)
      .sort((a, b) => (gorulenler.get(b.slug) ?? 0) - (gorulenler.get(a.slug) ?? 0))
      .slice(0, 5);
  }, [gorulenler]);

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

      {/* ── ARAC SERIDI: kategori suzgeci + arama ─────────────────────────
          ⚠️ SERIT YUKARIDA KALIYOR, kenar cubuguna tasinmadi. Telefonda kenar
          cubugu akisin ALTINA duser; suzgeci oraya koymak, suzmek isteyen
          kullaniciya once butun listeyi kaydirtirdi. */}
      <section className="container blog-araclar">
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

        <div className="blog-arama">
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            value={sorgu}
            onChange={(e) => setSorgu(e.target.value)}
            placeholder={t('blog_search_placeholder')}
            aria-label={t('blog_search_placeholder')}
          />
        </div>
      </section>

      {/* ── AKIS + KENAR CUBUGU ───────────────────────────────────────────
          UniConnectly blogunun duzeni (Ahmet, 16.09.2026: *"ana sayfa bence
          uniconnectly gibi olsun"*): solda tek akis, sagda yapiskan kenar
          cubugu. Kahraman kutusu Veterito'nunki olarak kaldi (*"yukari kapak
          veteritodaki biraz daha iyi"*). */}
      <div className="container blog-duzen">
        <main className="blog-akis">
          <header className="blog-akis-baslik">
            <h2>
              {secili ? t('blog_cat_' + secili, secili) : t('blog_all_posts')}
              <em className="blog-sayac">{tumIzgara.length}</em>
            </h2>

            {/* ⚠️ YERLI <select>: kendi actigimiz bir menu, klavye ve ekran
                okuyucu destegini sifirdan yazmak demekti. Telefonda isletim
                sisteminin kendi secicisi aciliyor. */}
            <label className="blog-siralama">
              <span className="gorunmez-metin">{t('blog_sort')}</span>
              <select
                value={siralama}
                onChange={(e) => setSiralama(e.target.value as typeof siralama)}
              >
                <option value="yeni">{t('blog_sort_new')}</option>
                <option value="eski">{t('blog_sort_old')}</option>
                <option value="okunan">{t('blog_sort_read')}</option>
              </select>
            </label>
          </header>

          {izgara.length ? (
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
          ) : (
            /* ⚠️ BOS SONUC AKISIN ICINDE. Once sayfanin en ustunde ayri bir
               kutuydu; arama kutusu eklenince kullanicinin baktigi yer burasi
               oldu ve mesaji ekranin disinda birakmak dogru olmazdi. */
            <div className="blog-sonuc-yok">
              <p>{aramaVar ? t('blog_search_empty', { sorgu }) : t('blog_empty_category')}</p>
              <button type="button" onClick={() => { setSorgu(''); kategoriSec(null); }}>{t('blog_back_to_all')}
              </button>
            </div>
          )}

          {/* ⚠️ BAGLANTI DEGIL DUGME. Eski basligin yanindaki "Tumunu Gor"
              zaten bulundugun sayfaya (/blog) gidiyordu. */}
          {kalan > 0 ? (
            <div className="blog-daha">
              <button type="button" onClick={() => setGosterilen((n) => n + IZGARA_ADIM)}>{t('blog_load_more')} ({kalan})
              </button>
            </div>
          ) : null}
        </main>

        <aside className="blog-yan">
          {enCokOkunanlar.length ? (
            <section className="blog-yan-kutu">
              <h2><Flame size={18} />{t('blog_most_read')}</h2>
              <ul className="blog-yan-liste">
                {enCokOkunanlar.map((yazi) => (
                  <li key={yazi.slug}>
                    <Link to={`/blog/${yazi.slug}`}>
                      <BlogKapak slug={yazi.slug} kategori={yazi.kategori} alt={yazi.kapakAlt} boyut={24} olcu="kucuk" />
                      <div>
                        <h3>{yazi.baslik}</h3>
                        <span>{t('blog_cat_' + yazi.kategori, yazi.kategori)} · {okumaSuresi(yazi)} {t('blog_read_time')}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* ⚠️ REKLAM YUVASI, DOLUYSA CIZILIYOR. Ahmet (16.09): *"reklam
              alanlari da olacak ama bos reklam donmesin simdilik"* — yuva
              duzende duruyor, envanteri olmayan kart donmuyor. */}
          <ReklamKutusu />

          {/* Klinik bandi buraya tasindi: sayfanin en altinda tek seferlik
              gorulen genis bir bant yerine, akis boyunca yapiskan duran bir
              kart. */}
          <section className="blog-yan-kutu blog-yan-klinik">
            <span className="blog-yan-ikon"><Building2 size={22} /></span>
            <h2>{t('blog_clinic_banner_title')}</h2>
            <p>{t('blog_clinic_banner_desc')}</p>
            <Link to="/clinics">{t('blog_clinic_banner_btn')}<ArrowRight size={15} /></Link>
          </section>
        </aside>
      </div>

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
