/**
 * public/llms.txt ve public/llms-full.txt uretir.
 *
 * Ahmet (16.09.2026): *"veterito blogunda ai botlarina da uniconnectly gibi
 * destek sunmamiz lazim"* + *"google da ai modu var, gemini ile calisiyo, o cok
 * trafik getirir"*.
 *
 * ── NEDEN ───────────────────────────────────────────────────────────────────
 * Dil modeli siteyi tararken HTML'den anlam cikarmak zorunda: menu, buton,
 * tekrar eden bilesenler. `llms.txt` ona SITENIN haritasini duz metinle veriyor.
 * `llms-full.txt` ise yazilarin GOVDESINI duz metin olarak tasiyor; model
 * alintilayacagi cumleyi JS calistirmadan, dogru baglamda buluyor.
 *
 * ── E-E-A-T ─────────────────────────────────────────────────────────────────
 * Her yazinin altina KAYNAK KUNYELERI de yaziliyor (kurum, dergi, yil, DOI).
 * Veterito'nun ayirt edici tarafi bu: hakemli kaynak ve universite kaynagi.
 * Model "bu bilgi nereden geliyor" diye baktiginda cevabi ayni dosyada buluyor.
 *
 * ── NE GIRMEZ ───────────────────────────────────────────────────────────────
 * Yayinda olmayan yazi (kapaksiz ya da tarihi gelmemis) girmiyor; kural site,
 * prerender ve besleme ile ayni. Klinik sayfalari (`/klinik/...`) girmiyor:
 * onlar kullanici uretimi ve degisken.
 *
 * ⚠️ Bu dosya ELLE DUZENLENMEZ; `npm run build` sirasinda yeniden yazilir.
 */
import { readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://veterito.com';
const YAZI_KLASORU = join(KOK, 'src/data/blog');
const KAPAK_KLASORU = join(KOK, 'src/assets/blog');
const HARIC = new Set(['index.ts', 'types.ts', 'gorsel.ts']);
const bugun = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Istanbul' }).format(new Date());

const tum = [];
for (const d of readdirSync(YAZI_KLASORU).filter((f) => f.endsWith('.ts') && !HARIC.has(f))) {
  const mod = await import(pathToFileURL(join(YAZI_KLASORU, d)).href);
  for (const deger of Object.values(mod)) {
    if (deger && typeof deger === 'object' && 'slug' in deger && 'bloklar' in deger) tum.push(deger);
  }
}
const yazilar = tum
  .filter((y) => existsSync(join(KAPAK_KLASORU, `${y.slug}.webp`)))
  .filter((y) => y.tarih <= bugun)
  .sort((a, b) => b.tarih.localeCompare(a.tarih));

const SAYFALAR = [
  ['/', 'Veterito nedir: evcil hayvan sahibi ile veteriner kliniğini aynı uygulamada buluşturan sistem'],
  ['/features', 'Uygulamanın özellikleri: sağlık kaydı, aşı ve parazit takvimi, randevu, klinik defteri'],
  ['/clinics', 'Klinik dizini: Veterito üzerinde sayfası olan veteriner klinikleri'],
  ['/pricing', 'Klinik hesabı ve hizmetler'],
  ['/download', 'Uygulamayı indirme: App Store, Google Play, AppGallery'],
  ['/about', 'Veterito hakkında'],
  ['/contact', 'İletişim'],
];

/** Blokları düz metne çevirir: model için biçim değil ANLAM taşınır. */
function duzMetin(y) {
  const parcalar = [];
  for (const b of y.bloklar) {
    if (b.kind === 'baslik' || b.kind === 'altBaslik') parcalar.push(`\n## ${b.metin}`);
    else if (b.kind === 'paragraf') parcalar.push(b.metin);
    else if (b.kind === 'liste') parcalar.push(b.maddeler.map((m) => `- ${m}`).join('\n'));
    else if (b.kind === 'tablo') {
      parcalar.push([b.basliklar.join(' | '), ...b.satirlar.map((s) => s.join(' | '))].join('\n'));
    } else if (b.kind === 'uyari') parcalar.push(`UYARI: ${b.metin}`);
    else if (b.kind === 'yanilgi') parcalar.push(`YAYGIN YANILGI — ${b.baslik}: ${b.metin}`);
  }
  // İç bağlantı işaretlemesi `[[slug|metin]]` düz metinde okunur hâle getiriliyor.
  return parcalar.join('\n\n').replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, '$2 ($SITE/blog/$1)').replace(/\$SITE/g, SITE);
}

function kaynakSatiri(k) {
  const p = [k.kurum, k.baslik];
  if (k.yazarlar) p.push(k.yazarlar);
  if (k.dergi) p.push(k.dergi);
  if (k.yil) p.push(String(k.yil));
  if (k.kunye) p.push(k.kunye);
  if (k.doi) p.push(`DOI: ${k.doi}`);
  if (k.adres) p.push(k.adres);
  return `- ${p.join(' · ')}`;
}

const basli = [
  '# Veterito',
  '',
  '> Evcil hayvan sahibi ile veteriner kliniğini aynı uygulamada buluşturan Türkiye',
  '> merkezli sistem. Sahip dostunun aşı, parazit, kilo ve ziyaret kaydını tutar;',
  '> klinik randevu, hasta defteri ve hatırlatmalarını yürütür.',
  '',
  'Bu dosya yapay zekâ araçları içindir: sitede ne olduğunu düz metinle bildirir.',
  'Blog yazılarının kaynak künyeleri de burada: bilgiyi kim yayımlamış, hangi dergide,',
  'hangi yıl, DOI\'si ne — hepsi doğrulanabilir.',
  '',
  '## Sayfalar',
  '',
  ...SAYFALAR.map(([yol, ac]) => `- [${yol}](${SITE}${yol}): ${ac}`),
  '',
  '## Blog',
  '',
  `${yazilar.length} yazı yayında. Her yazının altında en az iki kaynak var; genelde biri`,
  'uluslararası üniversite ya da hakemli dergi (Cornell, AAHA/AAFP, WSAVA gibi).',
  '',
];
for (const y of yazilar) {
  basli.push(`- [${y.baslik}](${SITE}/blog/${y.slug}) — ${y.kategori}, ${y.tarih}: ${y.ozet}`);
}
basli.push('', '## Tıbbi sorumluluk', '', 'Yazılar bilgilendirme amaçlı; teşhis ve tedavi yerine geçmez.', 'Acil durumda en yakın veteriner hekime başvurulmalıdır.', '');
writeFileSync(join(KOK, 'public/llms.txt'), basli.join('\n'));

const tamMetin = [
  '# Veterito — blog yazılarının tam metni',
  '',
  `Üretim: ${bugun}. ${yazilar.length} yazı. Kaynak künyeleri her yazının sonunda.`,
  '',
];
for (const y of yazilar) {
  tamMetin.push(
    '---', '',
    `# ${y.baslik}`, '',
    `Adres: ${SITE}/blog/${y.slug}`,
    `Kategori: ${y.kategori} · Yayın: ${y.tarih}`, '',
    y.ozet, '',
    duzMetin(y), '',
  );
  if (y.sss?.length) {
    tamMetin.push('## Sıkça sorulan sorular', '');
    for (const s of y.sss) tamMetin.push(`**${s.soru}**`, s.cevap, '');
  }
  if (y.kaynaklar?.length) {
    tamMetin.push('## Kaynaklar', '', ...y.kaynaklar.map(kaynakSatiri), '');
  }
}
writeFileSync(join(KOK, 'public/llms-full.txt'), tamMetin.join('\n'));

const kb = (s) => `${Math.round(Buffer.byteLength(s, 'utf8') / 1024)} KB`;
console.log(`llms: ${yazilar.length} yazi -> public/llms.txt (${kb(basli.join('\n'))}), public/llms-full.txt (${kb(tamMetin.join('\n'))})`);
