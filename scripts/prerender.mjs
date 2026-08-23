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

/** **kalin** -> <strong> */
const kalin = (s) =>
  kac(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

function blokHtml(b) {
  switch (b.kind) {
    case 'baslik': return `<h2>${kac(b.metin)}</h2>`;
    case 'altBaslik': return `<h3>${kac(b.metin)}</h3>`;
    case 'paragraf': return `<p>${kalin(b.metin)}</p>`;
    case 'liste': return `<ul>${b.maddeler.map((m) => `<li>${kalin(m)}</li>`).join('')}</ul>`;
    case 'uyari': return `<aside class="yazi-uyari"><p>${kac(b.metin)}</p></aside>`;
    case 'tuzak': return `<aside class="yazi-tuzak"><strong>${kac(b.baslik)}</strong><p>${kac(b.metin)}</p></aside>`;
    case 'tablo':
      return `<table><thead><tr>${b.basliklar.map((h) => `<th>${kac(h)}</th>`).join('')}</tr></thead><tbody>${b.satirlar
        .map((s) => `<tr>${s.map((h) => `<td>${kac(h)}</td>`).join('')}</tr>`)
        .join('')}</tbody></table>`;
    default: return '';
  }
}

function kafaDegistir(sablon, { baslik, aciklama, adres, tip, jsonLd }) {
  let html = sablon;
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
    `<meta name="twitter:card" content="summary_large_image" />`,
    ...jsonLd.map((v) => `<script type="application/ld+json">${JSON.stringify(v)}</script>`),
  ].join('\n    ');
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

// --- Tek tek yazilar ---
for (const y of yazilar) {
  const adres = `${SITE}/blog/${y.slug}`;
  const dakika = okumaSuresi(y);
  const makale = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: y.baslik,
    description: y.ozet,
    datePublished: y.tarih,
    author: { '@type': 'Organization', name: 'Veterito' },
    publisher: { '@type': 'Organization', name: 'Veterito' },
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
    ...y.bloklar.map(blokHtml),
    y.sss?.length
      ? `<section><h2>Sık sorulanlar</h2>${y.sss
          .map((s) => `<h3>${kac(s.soru)}</h3><p>${kac(s.cevap)}</p>`)
          .join('')}</section>`
      : '',
    `</article>`,
  ].join('\n');

  const html = govdeDegistir(
    kafaDegistir(sablon, { baslik: `${y.baslik} | Veterito`, aciklama: y.ozet, adres, tip: 'article', jsonLd: [makale, ...sss] }),
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
    }),
    listeGovde,
  ),
);

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
