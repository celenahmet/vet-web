import { ArrowRight, Clock, Eye, Flame, HelpCircle, ListChecks } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { YAZILAR, KATEGORILER, okumaSuresi, tarihiYaz } from '../data/blog';
import { goruntulenmeOku, sayiyiKisalt } from '../lib/blogGoruntulenme';
import BlogKapak from './BlogKapak';
import './BlogKenarCubugu.css';

/**
 * YAZI SAYFASI KENAR CUBUGU
 *
 * Referans UniConnectly blogu: kategori listesi (sayilariyla) ve yazi listesi.
 *
 * ⚠️ "POPULER YAZILAR" ARTIK VAR AMA KOSULLU (24.08.2026).
 *
 * Bu dosyada once su not duruyordu: *"populer yazilar demiyoruz, goruntulenme
 * verimiz yok; olcmedigimiz bir seye populer demek dogrulanamayan bir iddia
 * olur"*. Notun koydugu sart bugun karsilandi: migration 0135 canliya cikti ve
 * sayac gercekten calisiyor.
 *
 * ⚠️ AMA SAYAC BUGUN SIFIRDAN BASLADI. Iki goruntulenmeye gore siralama yapip
 * ustune "populer" yazmak, olcmedigimiz seye ad takmanin baska bir bicimi olurdu.
 * O yuzden kutu VERI YETERLI OLDUGUNDA aciliyor; yetmediginde HIC gorunmuyor.
 * Yerine sessizce "son yazilar"i koyup basligini "populer" birakmiyoruz: o,
 * dogrulanamayan bir iddia degil, dogrudan yanlis bilgi olurdu.
 *
 * Esik asagida `POPULER_ESIGI` icinde gerekcesiyle yazili.
 *
 * ⚠️ Kategori sayilari elle yazilmiyor, YAZILAR dizisinden hesaplaniyor. Elle yazilan
 * sayi bir yazi eklendiginde sessizce yanlisa donerdi.
 */

type Props = {
  haricSlug?: string;
  /**
   * ⚠️ SORULAR VE KONTROL LISTESI YUKARIDAN GELIYOR, BURADA URETILMIYOR.
   * Ayni veri hem yazinin govdesinde hem kenar cubugunda gorunuyor; iki yerde
   * ayri kaynak olsaydi biri guncellenip oteki unutulurdu.
   */
  sorular?: string[];
  kontrolListesi?: string[];
  /** Isaretli madde siralari. Govdedeki panelle AYNI kume; iki yer ayrisamaz. */
  isaretliler?: Set<number>;
  isaretiCevir?: (sira: number) => void;
};

/**
 * Kac goruntulenmeden sonra "populer" demeye hakkimiz var?
 *
 * Iki sart birden aranıyor: toplam en az 50 goruntulenme VE en az uc yazinin
 * goruntulenmis olmasi. Gerekce: alti yazi arasinda 3-2-1 gibi sayilarla
 * yapilan siralama, siralama degil gurultudur; ilk okuyan kisi sirayi
 * belirlerdi. Esik keyfi degil ama kesin de degil; veri birikince gozden
 * gecirilebilir.
 */
const POPULER_ESIGI = { toplam: 50, enAzKacYazi: 3 };

export default function BlogKenarCubugu({
  haricSlug, sorular, kontrolListesi, isaretliler, isaretiCevir,
}: Props) {
  const sayim = new Map<string, number>();
  for (const y of YAZILAR) sayim.set(y.kategori, (sayim.get(y.kategori) ?? 0) + 1);

  const sonYazilar = YAZILAR.filter((y) => y.slug !== haricSlug).slice(0, 5);

  /**
   * ⚠️ SESSIZCE BASARISIZ OLUR. Sayac okunamazsa kutu hic cizilmiyor; bir kenar
   * cubugu kutusu yuzunden yazinin okunmasini bozmuyoruz.
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

  const populerYazilar = (() => {
    if (!gorulenler) return [];
    const toplam = [...gorulenler.values()].reduce((a, b) => a + b, 0);
    const okunanYaziSayisi = [...gorulenler.values()].filter((n) => n > 0).length;
    if (toplam < POPULER_ESIGI.toplam) return [];
    if (okunanYaziSayisi < POPULER_ESIGI.enAzKacYazi) return [];
    return YAZILAR
      .filter((y) => y.slug !== haricSlug && (gorulenler.get(y.slug) ?? 0) > 0)
      .sort((a, b) => (gorulenler.get(b.slug) ?? 0) - (gorulenler.get(a.slug) ?? 0))
      .slice(0, 5);
  })();

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

      {populerYazilar.length ? (
        <section className="kenar-kutu">
          <h2><Flame size={17} /> Popüler yazılar</h2>
          <ul className="kenar-yazilar">
            {populerYazilar.map((y) => (
              <li key={y.slug}>
                <Link to={`/blog/${y.slug}`}>
                  <div className="kenar-gorsel">
                    <BlogKapak slug={y.slug} kategori={y.kategori} alt={y.baslik} boyut={20} />
                  </div>
                  <div>
                    <h3>{y.baslik}</h3>
                    {/* Iddianin kaniti okuyucuya da gosteriliyor: kac kez acildigi
                        yaziyor. "Populer" diyip sayiyi saklamak, dogrulanamaz bir
                        siralama sunmak olurdu. */}
                    <span><Eye size={12} /> {sayiyiKisalt(gorulenler?.get(y.slug) ?? 0)} görüntülenme</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/*
        ⚠️ BU IKI KUTU BOS SUTUNU DOLDURMAK ICIN EKLENDI (Ahmet, 24.08.2026:
        "buralar bos kalmis sss ve checklist ile").

        Olculdu: kenar cubugu 1108 px, yazi sutunu 3868-6985 px. Yani sagdaki
        sutunun %71-84'u bostu ve okuyucu uzun yazinin ortasinda saginda hicbir
        sey gormuyordu.

        ⚠️ Sorular kopyalanmiyor, BAGLANTI veriliyor. Cevabi burada tekrar etmek
        ayni metni sayfada iki kez yazmak olurdu; okuyucu icin gurultu, arama
        motoru icin tekrar. Baslik tiklanınca govdedeki cevaba atliyor.

        ⚠️ Kontrol listesi ise TAM veriliyor cunku maddeler tek satir ve isaret
        durumu govdedeki panelle ORTAK. Iki yerde ayri durum tutmak, kullanicinin
        yukarida isaretledigi maddeyi asagida bos gormesi demekti.
      */}
      {sorular?.length ? (
        <section className="kenar-kutu">
          <h2><HelpCircle size={17} /> Bu yazıda cevaplananlar</h2>
          <ol className="kenar-sorular">
            {sorular.map((soru, i) => (
              <li key={soru}><a href={`#soru-${i + 1}`}>{soru}</a></li>
            ))}
          </ol>
        </section>
      ) : null}

      {kontrolListesi?.length && isaretliler && isaretiCevir ? (
        <section className="kenar-kutu">
          <h2><ListChecks size={17} /> Kontrol listesi</h2>
          <ul className="kenar-kontrol">
            {kontrolListesi.map((madde, i) => (
              <li key={madde}>
                <button
                  type="button"
                  className={isaretliler.has(i) ? 'kontrol-madde isaretli' : 'kontrol-madde'}
                  aria-pressed={isaretliler.has(i)}
                  onClick={() => isaretiCevir(i)}
                >
                  {madde}
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Son yazilar artik ASAGIDA (Ahmet, 24.08.2026): ust sirayi populer
          yazilar aldi, bu liste kesif icin altta duruyor. */}
      {sonYazilar.length ? (
        <section className="kenar-kutu">
          <h2>Son yazılar</h2>
          <ul className="kenar-yazilar">
            {sonYazilar.map((y) => (
              <li key={y.slug}>
                <Link to={`/blog/${y.slug}`}>
                  <div className="kenar-gorsel">
                    <BlogKapak slug={y.slug} kategori={y.kategori} alt={y.baslik} boyut={20} />
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
