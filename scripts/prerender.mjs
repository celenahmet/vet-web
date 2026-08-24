/**
 * BLOG YAZILARINI STATIK HTML'E CEVIRIR.
 *
 * ⚠️ NEDEN VAR: site tamamen tarayicida uretiliyor. `dist/index.html` govdesi
 * `<div id="root"></div>` ve `vercel.json` her adresi `/`'a yonlendiriyor. Bu haliyle
 * bir tarama botu blog yazisini istedeginde BOS SAYFA aliyor. Blogun tek sebebi arama
 * oldugu icin, prerender olmadan yazilan her yazi bosa gidiyordu.
 *
 * Ne yapiyor: her yazi icin `dist/blog/<slug>/index.html` uretiyor. Dosyanin icinde
 * gercek metin, baslik, aciklama, canonical adres, Open Graph etiketleri ve
 * yapilandirilmis veri (Article + FAQPage) var. Ayni dosya SPA'yi da yukluyor;
 * `main.tsx` `createRoot` kullandigi icin React icerigi temizleyip kendi ciziyor,
 * hidrasyon uyusmazligi olmuyor.
 *
 * Calistirma: `node --experimental-strip-types scripts/prerender.mjs`
 * (build betigine bagli, elle calistirilmasi gerekmiyor.)
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

/**
 * ⚠️ SURUM KAPISI: tip soyma (type stripping) Node 22.6+ istiyor. Daha eski bir
 * surumde betik COKMEZ, yuksek sesle atlar. Sebebi: derlemeyi kirmak siteyi
 * yayindan kaldirir; ama sessizce atlamak da "prerender var" sanmamiza yol acar.
 * package.json icinde engines.node >=22.6 var, normalde buraya hic dusulmemeli.
 */
{
  const [buyuk, kucuk] = process.versions.node.split('.').map(Number);
  if (buyuk < 22 || (buyuk === 22 && kucuk < 6)) {
    console.error('');
    console.error('!!! PRERENDER ATLANDI !!!');
    console.error(`Node ${process.versions.node} kullaniliyor, 22.6+ gerekiyor.`);
    console.error('Blog yazilari statik HTML olarak URETILMEDI, tarama botlari bos sayfa gorecek.');
    console.error('');
    process.exit(0);
  }
}

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://veterito.com';
const YAZI_KLASORU = join(KOK, 'src/data/blog');
const HARIC = new Set(['index.ts', 'types.ts', 'gorsel.ts']);

const kac = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * `**kalin**` -> <strong>, `[[slug|etiket]]` -> <a href="/blog/slug">
 *
 * ⚠️ Ic baglanti prerender ciktisina da GIRIYOR. Yalniz React tarafinda
 * cizilseydi tarama botu JS calistirmadan yazilar arasi gecisi goremezdi ve
 * baglanti agi sifir islev gorurdu.
 */
const kalin = (s) =>
  kac(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '<a href="/blog/$1">$2</a>')
    .replace(/\[\[([^\]|]+)\]\]/g, '<a href="/blog/$1">$1</a>');

function blokHtml(b) {
  switch (b.kind) {
    case 'baslik': return `<h2>${kac(b.metin)}</h2>`;
    case 'altBaslik': return `<h3>${kac(b.metin)}</h3>`;
    case 'paragraf': return `<p>${kalin(b.metin)}</p>`;
    case 'liste': return `<ul>${b.maddeler.map((m) => `<li>${kalin(m)}</li>`).join('')}</ul>`;
    case 'uyari': return `<aside class="yazi-uyari"><p>${kac(b.metin)}</p></aside>`;
    case 'yanilgi': return `<aside class="yazi-yanilgi"><strong>${kac(b.baslik)}</strong><p>${kac(b.metin)}</p></aside>`;
    case 'tablo':
      return `<table><thead><tr>${b.basliklar.map((h) => `<th>${kac(h)}</th>`).join('')}</tr></thead><tbody>${b.satirlar
        .map((s) => `<tr>${s.map((h) => `<td>${kac(h)}</td>`).join('')}</tr>`)
        .join('')}</tbody></table>`;
    default: return '';
  }
}

function kafaDegistir(sablon, { baslik, aciklama, adres, tip, jsonLd, onYukle, gorsel, ekBaglantilar }) {
  let html = sablon;
  /*
   * ⚠️ VARSAYILAN og ETIKETLERI ONCE SOKULUYOR. `index.html` her sayfa icin taban
   * degerler tasiyor; asagida kendi degerlerimizi EKLIYORUZ. Sokmezsek sayfada
   * iki `og:title` ve iki `og:image` kalir ve hangisinin kazandigi tarayiciya
   * gore degisir. Sessiz bir tutarsizlik olurdu.
   */
  html = html.replace(
    /\n?\s*<meta (?:property="og:(?:type|title|description|url|image|image:width|image:height)"|name="twitter:(?:card|image)") content="[^"]*" \/>/g,
    '',
  );
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${kac(baslik)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${kac(aciklama)}" />`,
  );
  const ek = [
    `<link rel="canonical" href="${adres}" />`,
    `<meta property="og:type" content="${tip}" />`,
    `<meta property="og:title" content="${kac(baslik)}" />`,
    `<meta property="og:description" content="${kac(aciklama)}" />`,
    `<meta property="og:url" content="${adres}" />`,
    /*
     * ⚠️ `og:image` YOKTU (duzeltme 24.08.2026). `twitter:card` "buyuk gorsel"
     * diyordu ama gosterecek gorsel verilmiyordu: paylasimlarda kart bos
     * cikiyordu. Adres MUTLAK olmali, gorece adres paylasimda cozulmez.
     */
    gorsel ? `<meta property="og:image" content="${SITE}${gorsel}" />` : '',
    gorsel ? `<meta property="og:image:width" content="1200" />` : '',
    gorsel ? `<meta property="og:image:height" content="675" />` : '',
    gorsel ? `<meta name="twitter:image" content="${SITE}${gorsel}" />` : '',
    `<meta name="twitter:card" content="summary_large_image" />`,
    ekBaglantilar ?? '',
    ...jsonLd.map((v) => `<script type="application/ld+json">${JSON.stringify(v)}</script>`),
    onYukle ?? '',
  ].filter(Boolean).join('\n    ');
  return html.replace('</head>', `    ${ek}\n  </head>`);
}

function govdeDegistir(html, icerik) {
  return html.replace('<div id="root"></div>', `<div id="root">${icerik}</div>`);
}

function yaz(yol, icerik) {
  mkdirSync(dirname(yol), { recursive: true });
  writeFileSync(yol, icerik, 'utf8');
}

// --- Yazilari yukle ---
const { okumaSuresi, tarihiYaz } = await import(pathToFileURL(join(YAZI_KLASORU, 'types.ts')).href);

const dosyalar = readdirSync(YAZI_KLASORU).filter((f) => f.endsWith('.ts') && !HARIC.has(f));
const yazilar = [];
for (const d of dosyalar) {
  const mod = await import(pathToFileURL(join(YAZI_KLASORU, d)).href);
  for (const deger of Object.values(mod)) {
    if (deger && typeof deger === 'object' && 'slug' in deger && 'bloklar' in deger) yazilar.push(deger);
  }
}
yazilar.sort((a, b) => b.tarih.localeCompare(a.tarih));

const sablonYolu = join(KOK, 'dist/index.html');
if (!existsSync(sablonYolu)) {
  console.error('prerender: dist/index.html yok, once vite build calismali');
  process.exit(1);
}
const sablon = readFileSync(sablonYolu, 'utf8');

/**
 * ⚠️ "Loading..." BOSLUGU (23.08.2026, Ahmet cihazda gordu):
 * App.tsx butun rotalari `lazy()` ile yukluyor. Prerender edilen gercek icerik
 * ekranda duruyor, React acilinca onu siliyor ve rota parcasi inene kadar cıplak
 * "Loading..." yazisi kaliyor. Kullanicinin gordugu sey: icerik, sonra bosluk,
 * sonra tekrar icerik.
 *
 * Cozum: sayfanin ihtiyac duydugu parcalari BAS KISMINDA on yukluyoruz. Boylece
 * rota parcasi ana paketle ayni anda iniyor ve Suspense boslugu milisaniyeye
 * dusuyor. App.tsx'e dokunulmuyor; o dosya web deposunda ortak alan.
 */
function onYuklemeler(desenler) {
  const varliklar = readdirSync(join(KOK, 'dist/assets'));
  const satirlar = [];
  for (const desen of desenler) {
    for (const dosya of varliklar) {
      if (!dosya.startsWith(desen)) continue;
      if (dosya.endsWith('.js')) satirlar.push(`<link rel="modulepreload" crossorigin href="/assets/${dosya}">`);
      else if (dosya.endsWith('.css')) satirlar.push(`<link rel="stylesheet" crossorigin href="/assets/${dosya}">`);
    }
  }
  return satirlar.join('\n    ');
}


/**
 * Yazinin kapak gorsellerini derlenmis varliklar arasinda bulur.
 *
 * ⚠️ NEDEN GEREKLI: Vite dosya adlarina hash ekliyor
 * (`kediler-kac-yil-yasar-BRfh4cGZ.webp`). Prerender bu adlari bilmeden LCP
 * gorselini on yukleyemez ve `og:image` veremez. Klasor taraniyor, tahmin
 * edilmiyor.
 *
 * ⚠️ Dar surumler ayni onekle basliyor (`<slug>-400-<hash>.webp`), o yuzden
 * eslesme sirasi onemli: once dar surumler ayiklaniyor, kalan asil dosya.
 */
function kapakVarliklari(slug) {
  const hepsi = readdirSync(join(KOK, 'dist/assets')).filter((f) => f.endsWith('.webp'));
  const dar = {};
  let asil = null;
  for (const dosya of hepsi) {
    const m = dosya.match(new RegExp(`^${slug}-(\\d+)-[^-]+\\.webp$`));
    if (m) { dar[Number(m[1])] = `/assets/${dosya}`; continue; }
    if (new RegExp(`^${slug}-[^-]+\\.webp$`).test(dosya)) asil = `/assets/${dosya}`;
  }
  if (!asil) return null;
  const parcalar = Object.keys(dar).map(Number).sort((a, b) => a - b).map((en) => `${dar[en]} ${en}w`);
  parcalar.push(`${asil} 1200w`);
  return { asil, srcset: parcalar.join(', ') };
}

const YAZI_ON_YUKLEME = onYuklemeler(['BlogPost-', 'BlogKapak-']);
const LISTE_ON_YUKLEME = onYuklemeler(['Blog-', 'BlogKapak-']);

// --- Tek tek yazilar ---
for (const y of yazilar) {
  const adres = `${SITE}/blog/${y.slug}`;
  const dakika = okumaSuresi(y);
  const kapak = kapakVarliklari(y.slug);
  const makale = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: y.baslik,
    description: y.ozet,
    datePublished: y.tarih,
    /* ⚠️ `dateModified` yoksa Google yaziyi hic guncellenmemis sayiyor. Ayri bir
       alan tutmadigimiz icin yayin tarihiyle ayni; yazi guncellenirse veride
       ayri alan acilir. */
    dateModified: y.tarih,
    /* ⚠️ `image` Article zengin sonucu icin Google'in ISTEDIGI alan. Yoktu. */
    ...(kapak ? { image: [`${SITE}${kapak.asil}`] } : {}),
    author: { '@type': 'Organization', name: 'Veterito' },
    publisher: {
      '@type': 'Organization',
      name: 'Veterito',
      logo: { '@type': 'ImageObject', url: `${SITE}/icon-512.png` },
    },
    mainEntityOfPage: adres,
  };
  const sss = y.sss?.length
    ? [{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: y.sss.map((s) => ({
          '@type': 'Question',
          name: s.soru,
          acceptedAnswer: { '@type': 'Answer', text: s.cevap },
        })),
      }]
    : [];

  const govde = [
    `<article>`,
    `<p>${kac(y.kategori)}</p>`,
    `<h1>${kac(y.baslik)}</h1>`,
    `<p>${kac(y.ozet)}</p>`,
    `<p>Veterito Editör · ${kac(tarihiYaz(y.tarih))} · ${dakika} dk okuma</p>`,
    /*
     * ⚠️ KAPAK GORSELI PRERENDER GOVDESINE DE KONUYOR (24.08.2026).
     *
     * Olculdu: sayfanin en buyuk ogesi (LCP) bu gorsel ve suresinin %81'i
     * "render gecikmesi"ydi — dosya 13 ms'de iniyordu ama gorsel yalniz React
     * agacinda oldugu icin parca inip calisana kadar CIZILEMIYORDU. On yukleme
     * dosyayi erken getiriyor, cizdirmiyor.
     *
     * Burada durunca tarayici HTML'i okur okumaz ciziyor; LCP, FCP'ye yaklasiyor.
     * ⚠️ `srcset`, `sizes`, `width` ve `height` React'teki <img> ile BIREBIR ayni
     * olmali. Ayrisirsa tarayici iki farkli dosya indirir ve gorsel React
     * baglandiginda yeniden yerlesir.
     */
    kapak
      ? `<div class="yazi-kapak"><img src="${kapak.asil}" srcset="${kac(kapak.srcset)}" sizes="(max-width: 700px) 100vw, (max-width: 1080px) 780px, 784px" width="1200" height="675" alt="${kac(y.baslik)}" fetchpriority="high" decoding="sync"></div>`
      : '',
    ...y.bloklar.map(blokHtml),
    y.kontrolListesi?.length
      ? `<section><h2>Kontrol listesi</h2><ul>${y.kontrolListesi
          .map((m) => `<li>${kac(m)}</li>`)
          .join('')}</ul></section>`
      : '',
    y.sss?.length
      ? `<section><h2>Sık sorulanlar</h2>${y.sss
          .map((s) => `<h3>${kac(s.soru)}</h3><p>${kac(s.cevap)}</p>`)
          .join('')}</section>`
      : '',
    `</article>`,
    /*
     * ⚠️ KAYNAKLAR PRERENDER CIKTISINA DA KONUYOR (24.08.2026). Onceden yalniz
     * React tarafinda ciziliyordu; tarama botu ve yapay zeka tarayicisi kaynak
     * gormeden yaziyi degerlendiriyordu. Saglik iceriginde kaynak, sayfanin
     * guvenilirlik sinyali.
     */
    y.kaynaklar?.length
      /*
       * ⚠️ KUNYE TAM HALIYLE PRERENDER CIKTISINA GIRIYOR (24.08.2026). Yazar,
       * dergi, yil, cilt/sayi ve DOI tarama botunun ve yapay zeka
       * tarayicisinin JS calistirmadan okudugu yerde duruyor. Saglik
       * iceriginde kaynak bir guvenilirlik sinyali; yalniz React tarafinda
       * cizilirse o sinyal hic verilmemis oluyor.
       */
      ? `<section><h2>Kaynaklar</h2><ol>${y.kaynaklar
          .map((k) => {
            const bas = k.adres
              ? `<a href="${kac(k.adres)}" rel="noopener noreferrer">${kac(k.baslik)}</a>`
              : kac(k.baslik);
            const parcalar = [
              k.yazarlar ? `${kac(k.yazarlar)}. ` : '',
              bas,
              k.dergi ? `. ${kac(k.dergi)}` : '',
              k.yil ? `, ${k.yil}` : '',
              k.kunye ? `;${kac(k.kunye)}` : '',
              `. ${kac(k.kurum)}`,
              k.doi ? `. doi: ${kac(k.doi)}` : '',
            ];
            return `<li>${parcalar.join('')}</li>`;
          })
          .join('')}</ol></section>`
      : '',
    /*
     * ⚠️ IC BAGLANTILAR PRERENDER CIKTISINA DA KONUYOR. React acilinca yerini kenar
     * cubugu aliyor, ama tarama botu JS calistirmadan da diger yazilara gecebiliyor.
     * Ic baglanti agi, tek tek yazilarin degil blogun butununun siralanmasini
     * etkiliyor.
     */
    yazilar.length > 1
      ? `<nav aria-label="Diğer yazılar"><h2>Diğer yazılar</h2><ul>${yazilar
          .filter((d) => d.slug !== y.slug)
          .slice(0, 6)
          .map((d) => `<li><a href="/blog/${d.slug}">${kac(d.baslik)}</a></li>`)
          .join('')}</ul></nav>`
      : '',
  ].filter(Boolean).join('\n');

  const html = govdeDegistir(
    kafaDegistir(sablon, {
      baslik: `${y.baslik} | Veterito`,
      aciklama: y.ozet,
      adres,
      tip: 'article',
      jsonLd: [makale, ...sss],
      onYukle: YAZI_ON_YUKLEME,
      gorsel: kapak?.asil,
      /*
       * ⚠️ EN BUYUK GORSEL ON YUKLENIYOR. Lighthouse "prioritize-lcp-image"
       * basliginda 2250 ms kazanc gosteriyordu: kapak, React acilip bileseni
       * cizene kadar KESFEDILMIYORDU. Bu satir tarayiciya HTML'i okurken
       * soyluyor.
       * ⚠️ `imagesrcset` ve `imagesizes`, <img> uzerindekiyle BIREBIR ayni
       * olmali; ayrisirsa tarayici iki farkli dosya indirir ve on yukleme
       * kazanc yerine kayip olur.
       */
      ekBaglantilar: kapak
        ? `<link rel="preload" as="image" fetchpriority="high" href="${kapak.asil}" imagesrcset="${kapak.srcset}" imagesizes="(max-width: 700px) 100vw, (max-width: 1080px) 780px, 784px" />`
        : '',
    }),
    govde,
  );
  yaz(join(KOK, 'dist/blog', y.slug, 'index.html'), html);
}

// --- Blog liste sayfasi ---
const listeGovde = [
  '<h1>Veterito Blog</h1>',
  '<p>Kedi ve köpek sağlığı, aşı takvimi, beslenme ve klinik yönetimi üzerine yazılar.</p>',
  '<ul>',
  ...yazilar.map(
    (y) =>
      `<li><a href="/blog/${y.slug}">${kac(y.baslik)}</a><span> ${kac(y.kategori)} · ${okumaSuresi(y)} dk okuma · ${kac(tarihiYaz(y.tarih))}</span><p>${kac(y.ozet)}</p></li>`,
  ),
  '</ul>',
].join('\n');

yaz(
  join(KOK, 'dist/blog/index.html'),
  govdeDegistir(
    kafaDegistir(sablon, {
      baslik: 'Blog | Veterito',
      aciklama: 'Kedi ve köpek sağlığı, aşı takvimi, beslenme ve klinik yönetimi üzerine veteriner hekim gözünden yazılar.',
      adres: `${SITE}/blog`,
      tip: 'website',
      jsonLd: [],
      onYukle: LISTE_ON_YUKLEME,
    }),
    listeGovde,
  ),
);

// --- 404 sayfasi ---
/*
 * ⚠️ NEDEN URETILIYOR (24.08.2026): `vercel.json` eskiden her adresi uygulamaya
 * yonlendiriyordu ve olmayan sayfalar bile "HTTP 200" doneuyordu (olculdu: dort
 * ayri cop adresin dordu de 200). Yonlendirme daralttiktan sonra eslesmeyen
 * adres statik dosya aramasina dusuyor; Vercel bu dosyayi bulunca GERCEK 404
 * durum koduyla veriyor.
 *
 * ⚠️ `noindex` ZORUNLU. Bu dosya tek bir adrese ait degil, butun bulunamayan
 * adresler icin servis ediliyor. Indekslenmesine izin vermek, arama sonuclarinda
 * "bulunamadi" baslikli bir sayfa cikmasi demek.
 *
 * ⚠️ Govdeye gercek metin konuyor. JS calismadan once de sayfanin ne oldugu
 * anlasilmali; bos bir kabuk, tarayiciya ve kullaniciya ayni sey demiyor.
 */
const bulunamadiGovde = [
  '<h1>Sayfa bulunamadı</h1>',
  '<p>Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>',
  '<p><a href="/">Ana sayfaya dön</a></p>',
  '<nav aria-label="Sık kullanılan sayfalar"><ul>',
  '<li><a href="/blog">Blog</a></li>',
  '<li><a href="/clinics">Klinikler İçin</a></li>',
  '<li><a href="/contact">İletişim</a></li>',
  '</ul></nav>',
].join('\n');

let bulunamadiHtml = kafaDegistir(sablon, {
  baslik: 'Sayfa bulunamadı | Veterito',
  aciklama: 'Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.',
  adres: `${SITE}/404`,
  tip: 'website',
  jsonLd: [],
  onYukle: onYuklemeler(['NotFound-']),
});
// Canonical KALDIRILIYOR: bu dosya tek bir adresi temsil etmiyor, kendine
// isaret eden bir canonical yanlis bilgi olurdu.
bulunamadiHtml = bulunamadiHtml
  .replace(/\s*<link rel="canonical"[^>]*>/, '')
  .replace('</head>', '    <meta name="robots" content="noindex, follow" />\n  </head>');

yaz(join(KOK, 'dist/404.html'), govdeDegistir(bulunamadiHtml, bulunamadiGovde));

// --- Sitemap ---
const sitemapYolu = join(KOK, 'dist/sitemap.xml');
if (existsSync(sitemapYolu)) {
  const mevcut = readFileSync(sitemapYolu, 'utf8');
  const yeni = yazilar
    .map((y) => `  <url>\n    <loc>${SITE}/blog/${y.slug}</loc>\n    <lastmod>${y.tarih}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`)
    .join('\n');
  if (!mevcut.includes('/blog/')) {
    writeFileSync(sitemapYolu, mevcut.replace('</urlset>', `${yeni}\n</urlset>`), 'utf8');
  }
}

console.log(`prerender: ${yazilar.length} yazi + liste sayfasi uretildi`);
