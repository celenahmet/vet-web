/**
 * ONCEDEN URETILMIS YAPISAL VERIYI DEVRALMA
 *
 * ⚠️ NEDEN VAR (olcum, 24.08.2026): `/blog/<slug>/index.html` icinde 3 tane
 * `ld+json` blogu var; ayni sayfa tarayicida acilinca 5 oluyordu. Fazladan iki
 * blok, prerender'in bastigi `Article` ve `FAQPage`'in React tarafindan bir kez
 * daha eklenmesiydi.
 *
 * Neden kendiliginden duzelmiyor: `react-helmet-async` yalnizca KENDI yonettigi
 * etiketleri tanir. Prerender'in dogrudan HTML'e yazdigi etiket onun defterinde
 * yok; bu yuzden onu guncellemiyor, yanina yenisini koyuyor.
 *
 * ⚠️ Neden onemli: yapisal veri arama motoruna verilen bir BEYAN. Ayni sayfa
 * icin ayni tipten iki beyan, tarama tarafinda hangisinin gecerli oldugunu
 * belirsizlestiriyor. Gozle fark edilmiyor cunku sayfa dogru gorunuyor; yalniz
 * DOM sayilarak ortaya cikiyor.
 *
 * ⚠️ SIRA ONEMLI: kaldirma islemi React yerlestikten SONRA (efekt icinde)
 * yapiliyor. Once kaldirip sonra basmak, JS calisan ama render'i geciken bir
 * tarayicida sayfayi bir sure yapisal verisiz birakirdi.
 *
 * ⚠️ `index.html`'deki Organization/WebSite blogu ISARETSIZ ve oyle kalmali:
 * onu React hic basmiyor, kaldirilirsa geri gelmez.
 */
import { useEffect } from 'react';

export function useOncedenUretilmisVeriyiDevral(): void {
  useEffect(() => {
    /* 16.09.2026: yalniz ld+json degil, prerender/SSR'in bastigi <title>,
       <meta>, <link> de kaldiriliyor — React kendi kopyasini basti. Olculdu:
       kaldirilmayinca her sayfada iki <title>, iki canonical, iki og:title. */
    for (const el of document.querySelectorAll('head [data-onceden]')) {
      el.remove();
    }
  });
}
