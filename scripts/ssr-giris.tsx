/**
 * SSR GIRISI — pazarlama sayfalarini derleme sirasinda HTML'e ceviriyor.
 *
 * ⚠️ NEDEN VAR (16.09.2026, Ahmet: *"veterito'yu arama motorlari tanimiyor…
 * ai botlari, robotlar, ajanlar ve insanlar da erisebilsin her sekilde"*).
 * Olculdu: ana sayfanin HTML govdesi BOS bir <div id="root">; metin yalniz JS
 * calisinca geliyor. Google JS calistiriyor ama yeni alan adinda kuyruk yavas;
 * Bing ve cogu yapay zeka tarayicisi JS CALISTIRMIYOR — onlar icin bu sayfalar
 * hic yok. Blog yazilari zaten veri dosyalarindan statik uretiliyordu; pazarlama
 * sayfalari React bilesenleri oldugu icin tek yol React'i sunucuda cizmek.
 *
 * Bu dosya `vite build --ssr` ile ayri bir Node paketine derleniyor;
 * `scripts/ssr-uret.mjs` her rota icin `render(url)` cagirip HTML'i yaziyor.
 *
 * ⚠️ `renderToPipeableStream` + `onAllReady`: rotalar `lazy()` ile yukleniyor;
 * duz `renderToString` Suspense'in yedegini (yuklenme cemberi) basardi. Akisli
 * cizim tembel parcalarin cozulmesini bekliyor, tam sayfa cikiyor.
 *
 * ⚠️ Uygulama bu ciktiyi HYDRATE ETMIYOR: `main.tsx` kutuyu temizleyip yeniden
 * ciziyor (prerender ile ayni yol). Yani uyumsuzluk riski yok; cikti botlar ve
 * ilk boyama icin.
 */
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { Writable } from 'node:stream';
import App from '../src/App';
import '../src/i18n';

type HelmetCikti = { title: { toString(): string }; meta: { toString(): string }; link: { toString(): string }; script: { toString(): string } };

export function render(url: string): Promise<{ govde: string; kafa: string }> {
  const helmetContext: { helmet?: HelmetCikti } = {};
  return new Promise((coz, reddet) => {
    const parcalar: Buffer[] = [];
    const yazici = new Writable({
      write(parca, _kodlama, devam) { parcalar.push(Buffer.from(parca)); devam(); },
      final(devam) {
        let govde = Buffer.concat(parcalar).toString('utf8');
        /*
         * ⚠️ BASLIK/META GOVDENIN ICINDE GELIYOR (olculdu, 16.09.2026). React 19
         * <title>, <meta>, <link> ve ld+json <script>'i "kaldirilabilir" sayiyor:
         * tarayicida kendisi <head>'e tasiyor. Sunucuda ise <html> agacini biz
         * cizmedigimiz icin bulundugu yere basiyor; react-helmet-async'in
         * `context.helmet` toplayicisi bu akista BOS kaliyor. Etiketler govdeden
         * ayiklanip kafaya tasiniyor; govdede kalsalar "Hakkimizda | Veterito"
         * metni sayfanin ilk kelimesi olarak gorunurdu.
         */
        const kafaParcalari: string[] = [];
        const ayikla = (desen: RegExp) => {
          /* `data-onceden`: React yerlesince bu kopyalari kaldiriyor
             (src/yapisal-veri.ts); yoksa tarayicida iki <title>, iki canonical
             kaliyordu (olculdu: her biri 2). Botlarin JS'siz gordugu HTML tek. */
          govde = govde.replace(desen, (m) => {
            kafaParcalari.push(m.replace(/^<(title|meta|link|script)\b/, '<$1 data-onceden="1"'));
            return '';
          });
        };
        ayikla(/<title[^>]*>[^<]*<\/title>/g);
        ayikla(/<meta\s[^>]*\/?>/g);
        ayikla(/<link\s[^>]*\/?>/g);
        ayikla(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g);
        const h = helmetContext.helmet;
        const helmetKafa = h ? [h.title, h.meta, h.link, h.script].map((x) => x.toString()).filter(Boolean) : [];
        coz({ govde, kafa: [...helmetKafa, ...kafaParcalari].join('\n    ') });
        devam();
      },
    });
    const akis = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() { akis.pipe(yazici); },
        onError(hata) { reddet(hata); },
      },
    );
  });
}
