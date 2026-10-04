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
 * Duzen (04.10.2026): blog basligi + arama, kategori seridi, TEK SUTUNLU yazi akisi,
 * sagda kenar cubugu, altta bulten bandi. Donen kahraman kutusu ve iki sutunlu kart
 * izgarasi kalkti; gerekceleri asagida, kaldirildiklari yerde yazili.
 *
 * ⚠️ SITE BASLIGI VE ALT BILGISI BURADA YENIDEN KURULMUYOR. Ikisi de ortak bilesen
 * (`components/Navbar`, `components/Footer`) ve web deposunda baska biri de
 * calisiyor; ortak dosyaya girmek carpisma demek.
 *
 * ⚠️ BOLUMLER ICERIGE GORE ACILIYOR. Tek yazi varken izgara ve one cikanlar
 * gizleniyor. Sahte kartla doldurmak, olmayan bir blogu varmis gibi gosterirdi.
 */

/**
 * Blogun tek cumlelik tanimi. Arama sonucundaki aciklama ile sayfanin basindaki cumle
 * AYNI kaynaktan: ikisi ayri yazilirsa biri guncellenir, oteki eski kalir.
 * ⚠️ `scripts/prerender.mjs` ayni cumleyi kendi sabitinde tasiyor (LISTE_ACIKLAMA).
 */
const ACIKLAMA = 'Kedi ve köpek sağlığı, aşı takvimi, beslenme ve klinik yönetimi üzerine veteriner hekim gözünden yazılar.';

/**
 * Akista bir seferde acilan kart sayisi ve "daha fazla" adimi.
 *
 * ⚠️ NEDEN SAYFALAMA VAR (Ahmet, 16.09.2026: *"bu kadar degil tek satir olmali
 * bunlar"*). Blog 33 yaziya cikinca sayfa 24 kartlik bir duvara donmustu.
 * Kartlari kesip atmak da cozum degil: kesilen yaziya hicbir yerden
 * ulasilamazdi. Cozum, akisi sayfalamak.
 *
 * ⚠️ 12'DEN 8'E INDI (04.10.2026). Akis tek sutuna inince her kart bir ekran
 * boyuna yaklasti; 12 kartlik ilk sayfa, kenar cubugu coktan bitmisken
 * uzayip giden bir sutun demekti.
 * ⚠️ `scripts/prerender.mjs` icindeki LISTE_ILK AYNI SAYI olmak zorunda.
 */
const IZGARA_ADIM = 8;

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

  /*
   * ⚠️ DONEN KAHRAMAN KUTUSU KALDIRILDI (04.10.2026). 24.08'de Ahmet'in istegiyle eklenmisti
   * ("one cikan yazilar 15 saniyede bir donsun"); 04.10'da ayni kutu icin "burasi zaten bloga
   * benzemeyen kisim" dedi. En yeni yazi artik akisin ilk karti. Kutu ayri bir liste
   * olmadigi icin sayac, rozet ve ekrandaki kart sayisi yine birebir ayni; 24.08'de
   * bildirilen "4 sayi var ama 3 yazi gorunuyor" hatasinin kosulu da ortadan kalkti.
   */

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
   * ⚠️ AKIS BUTUN YAZILARI ICERIYOR, hicbiri baska bir kutuya ayrilmiyor.
   * Baslik sayaci, kategori seridi rozeti ve ekrandaki kart sayisi ucu de
   * ayni olmali; ayrisma, Ahmet'in 24.08'de bildirdigi hatanin (*"kedilerde
   * 4 sayi var ama 3 yazi gorunuyor"*) aynisi olurdu.
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

  const kalan = Math.max(0, tumIzgara.length - gosterilen);

  /**
   * EN COK OKUNANLAR — KENAR CUBUGUNDA (16.09.2026).
   *
   * Gercek sayactan geliyor. Esik kenar cubugundakinin (POPULER_ESIGI) aynisi;
   * tutmuyorsa kutu HIC cizilmiyor. Yerine "son eklenenler"i koyup basligini
   * "en cok okunan" birakmak dogrudan yanlis bilgi olurdu.
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
        description={ACIKLAMA}
        url="https://veterito.com/blog"
      />

      {/* BLOG BASLIGI (04.10.2026). Ahmet: *"ben ordan bi blog vibe'i almiyorum blog degilmis
          gibi"*, sonra ekran goruntusuyle: *"burasi zaten bloga benzemeyen kisim"* (donen kahraman
          kutusu: dev baslik, dugme, noktalar). O kutu KALKTI; sayfa blogun adi ve ne anlattigiyla
          aciliyor, hemen altinda yazilar.
          ⚠️ ARAMA BURAYA TASINDI. Sayfa yazi sayfasinin genisligine (1160) inince arama kutusu
          kategori seridine yer birakmiyor, "Pet Sahipleri" alt satira dusuyordu. Baslik satirinin
          sagi zaten bostu.
          prerender.mjs ayni basligi basiyor. */}
      <header className="container blog-masthead">
        <div className="blog-masthead-metin">
          <h1>{t('blog_h1')}</h1>
          <p>{ACIKLAMA}</p>
        </div>
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
      </header>

      {/* ── KATEGORI SERIDI ───────────────────────────────────────────────
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
      </section>

      {/* ── AKIS + KENAR CUBUGU ───────────────────────────────────────────
          UniConnectly blogunun duzeni (Ahmet, 16.09.2026: *"ana sayfa bence
          uniconnectly gibi olsun"*): solda tek akis, sagda yapiskan kenar
          cubugu. */}
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

          {/* ⚠️ TUM KARTLAR HTML'DE (30.09.2026). Once yalniz ilk 12 kart ciziliyordu;
              sunucu HTML'inde 33 yazinin 21'ine bu sayfadan baglanti yoktu ve Google
              "daha fazla" dugmesine basmiyor. Search Console'da 32 sayfa "Kesfedildi,
              dizine eklenmemis" kaliyordu. Artik hepsi ciziliyor, siradakiler
              display:none (sinif degil satir ici: `hidden` ozniteligi .blog-kart'in
              display:flex kuraliyla eziliyordu). Gorunum ve dugme ayni. */}
          {tumIzgara.length ? (
            <div className="blog-izgara">
              {/* ⚠️ TEK SUTUN, KAPAK YATAY VE BUTUN (04.10.2026). Ahmet: *"tekliye indirmek daha
                  iyiydi cunku goz yoruyo genelde bu bloglari okuyanlar da +30 yas kisiler olur"*.
                  Iki sutunda goz saga sola gidip geliyordu; simdi yazilar alt alta, kapak
                  sutunun tam genisliginde, baslik ve ozet buyuk puntoyla altinda.
                  ⚠️ KAPAK KIRPILMIYOR. Ayni gun denenen "afisten fotograf kirp, satira koy"
                  duzeni icin Ahmet: *"fotograflar da yatay oldugu icin olmamis"*. Afisler 16:9
                  ve basligi icinde tasiyor; kirpilinca ne fotograf kaliyor ne afis.
                  ⚠️ YALNIZ ILK KART oncelikli: kahraman kutusu kalkinca sayfanin en buyuk
                  gorseli o oldu. Hepsini isaretlemek onceligi anlamsizlastirir. */}
              {tumIzgara.map((yazi, sira) => (
                <Link key={yazi.slug} to={`/blog/${yazi.slug}`} className="blog-kart" style={sira >= gosterilen ? { display: 'none' } : undefined}>
                  <div className="blog-kart-gorsel">
                    <BlogKapak slug={yazi.slug} kategori={yazi.kategori} alt={yazi.kapakAlt} boyut={56} olcu="akis" oncelikli={sira === 0} />
                  </div>
                  <div className="blog-kart-govde">
                    <span className="blog-kart-kategori">{t('blog_cat_' + yazi.kategori, yazi.kategori).toLocaleUpperCase()}</span>
                    <h3>{yazi.baslik}</h3>
                    <p className="blog-kart-ozet">{yazi.ozet}</p>
                    <div className="blog-kart-alt">
                      <span><Clock size={15} /> {okumaSuresi(yazi)} {t('blog_read_time')}</span>
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
          {/* ⚠️ REKLAM YUVASI EN USTTE. Ahmet (16.09): *"reklam kismi
              kategorilerin ustunde kalacakti"* — kural yazi sayfasinda
              konulmustu, liste sayfasinda da ayni: reklam kenar cubugunun ILK
              kutusu. Iki sayfanin kenar cubugu ayni sirayi izliyor.
              Ayrica *"bos reklam donmesin simdilik"*: yuva duzende duruyor,
              envanteri olmayan kart donmuyor. */}
          <ReklamKutusu />

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
