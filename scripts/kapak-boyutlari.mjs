/**
 * KAPAK GORSELLERININ DAR SURUMLERINI URETIR.
 *
 * ⚠️ NEDEN: kapaklar 1200 px genisliginde. Lighthouse olctu: mobilde 380 px'lik
 * bir yere ciziliyorlar ve yalniz yazi sayfasinda 325 KiB bosuna iniyor. Kart
 * izgarasinda durum daha kotu, orada olcu ~270 px.
 *
 * Uretilenler: <slug>-400.webp ve <slug>-800.webp. 1200'luk asil dosya duruyor,
 * genis ekran ve retina onu kullaniyor.
 *
 * ⚠️ BUYUTME YOK. Kaynak zaten 1200 px; yalniz kucultuluyor. Olmayan detay
 * uretilemez, buyutulen gorsel yumusak cikar.
 *
 * Calistirma: `npm run kapaklar` (derlemeye BAGLI DEGIL, gorsel eklendiginde
 * elle kosulur). Derlemeye baglamadim cunku `sips` ve `cwebp` macOS/homebrew
 * araci; CI'da bulunmayabilir ve derlemeyi kirardi.
 */
import { readdirSync, existsSync, statSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');
const KLASOR = join(KOK, 'src/assets/blog');
const OLCULER = [400, 800];

function varMi(komut) {
  try { execFileSync('which', [komut], { stdio: 'ignore' }); return true; } catch { return false; }
}
if (!varMi('sips') || !varMi('cwebp')) {
  console.error('kapak boyutlari: `sips` ya da `cwebp` yok. macOS + `brew install webp` gerekiyor.');
  console.error('Uretim atlandi; mevcut gorseller oldugu gibi kaliyor.');
  process.exit(1);
}

// ⚠️ SUZGEC GERCEK OLCULERE BAGLI, "tire + sayi" kalibina DEGIL (31.08.2026).
// Onceki bicim /-\d+\.webp$/ idi ve yil iceren bir slug'i (veteriner-ucretleri-2026)
// varyant sanip asil listesinden dusuruyordu; o kapagin dar surumleri hic
// uretilmedi ve hata sessiz kaldi, cunku betik "0 yeni surum" deyip basariyla
// bitiyordu. Artik yalniz uretilen olculer (400, 800) varyant sayiliyor.
const VARYANT = new RegExp(`-(${OLCULER.join('|')})\\.webp$`);
const asillar = readdirSync(KLASOR).filter((f) => f.endsWith('.webp') && !VARYANT.test(f));
if (asillar.length === 0) {
  console.error('kapak boyutlari: hic asil gorsel bulunamadi — tarama bozuk olabilir.');
  process.exit(1);
}

let uretilen = 0;
for (const dosya of asillar) {
  const slug = dosya.replace(/\.webp$/, '');
  for (const en of OLCULER) {
    const hedef = join(KLASOR, `${slug}-${en}.webp`);
    if (existsSync(hedef) && statSync(hedef).mtimeMs > statSync(join(KLASOR, dosya)).mtimeMs) continue;
    const gecici = `/tmp/kapak-${slug}-${en}.png`;
    execFileSync('sips', ['-s', 'format', 'png', '-Z', String(en), join(KLASOR, dosya), '--out', gecici], { stdio: 'ignore' });
    execFileSync('cwebp', ['-q', '82', gecici, '-o', hedef], { stdio: 'ignore' });
    uretilen++;
  }
}
/*
 * FOTOGRAF KIRPMASI (04.10.2026, Ahmet: *"ben ordan bi blog vibe'i almiyorum"*).
 *
 * Kapaklarin hepsi ayni sablonda: solda logo, baslik ve ikon sirasi, sagda fotograf.
 * Liste ve kartlarda bu afis yan yana dizilince sayfa ilan duvarina donuyordu ve baslik
 * iki kez okunuyordu (gorselde ve altinda). Listeler artik yalniz FOTOGRAF kismini
 * gosteriyor: 1200x675 afisten x=770, y=69 noktasindan 430x537 (4:5) kirpma.
 * Sinir 43 kapakta olculdu: %58 ve %60'ta bazi kapaklarin kosesinde ayracin turkuaz
 * kivrimi kaliyordu (kartta gorundu), %64 (x=770) temiz. Afis yine duruyor: paylasim gorseli (og:image) o.
 *
 * Cikti: src/assets/blog/foto/<slug>-foto.webp (alt klasor: yukaridaki 400/800 taramasina
 * ve gorsel.ts'teki afis taramasina karismaz). ⚠️ `-foto` EKI SART: Vite dosyayi
 * dist/assets'e `<slug>-foto-<karma>.webp` diye cikariyor; ek olmasa prerender'in afis
 * aramasi (`<slug>-<karma>.webp`) kirpmayi afis sanabilirdi.
 */
const FOTO_KLASOR = join(KLASOR, 'foto');
mkdirSync(FOTO_KLASOR, { recursive: true });
const FOTO = { x: 770, y: 69, en: 430, boy: 537 };
let foto = 0;
for (const dosya of asillar) {
  const slug = dosya.replace(/\.webp$/, '');
  const hedef = join(FOTO_KLASOR, `${slug}-foto.webp`);
  if (existsSync(hedef) && statSync(hedef).mtimeMs > statSync(join(KLASOR, dosya)).mtimeMs) continue;
  execFileSync('cwebp', ['-q', '82', '-crop', String(FOTO.x), String(FOTO.y), String(FOTO.en), String(FOTO.boy),
    join(KLASOR, dosya), '-o', hedef], { stdio: 'ignore' });
  foto++;
}

console.log(`kapak boyutlari: ${asillar.length} asil gorsel, ${uretilen} yeni surum, ${foto} yeni fotograf kirpmasi uretildi.`);
