// scripts/sosyal-youtube.mjs
//
// /social sayfasinin YouTube verisi (Ahmet 30.10: "her sosyal medyada son 5 post ve populer
// postlarimiz ... youtube da videolar shorts vs gozukur"; karar: YouTube otomatik, digerleri
// liste).
//
// ANAHTARSIZ: YouTube'un acik RSS akislari. Kanal akisi son 15 gonderiyi, izlenme sayisiyla
// (media:statistics) veriyor; Shorts ayrimi yukleme listelerinden: UUSH = yalniz Shorts,
// UULF = yalniz uzun video. "Populer" bu son gonderiler icinde izlenmeye gore.
//
// GIZLILIK: kucuk resimler DERLEMEDE kendi alan adimiza indiriliyor (dist/sosyal/youtube/).
// Okurun tarayicisi Google'a istek atmiyor, cerez yok.
//
// DAYANIKLI: ag ya da YouTube yanit vermezse derleme KIRILMAZ; dosya yazilmaz, sayfa
// YouTube icin profil kartini gosterir. Cikti: dist/sosyal/youtube.json (+ resimler).
// Calisma yeri: `vite build`'den sonra (dist var).
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const KANAL = 'UCJQIvdnYmTcxuIdKHy3-mhA'; // @veterito (30.10 kanal sayfasindan, externalId)
const PROFIL = 'https://www.youtube.com/@veterito';
const DIST = join(import.meta.dirname, '..', 'dist');
const HEDEF = join(DIST, 'sosyal', 'youtube');

const varlik = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

async function akis(param) {
  const r = await fetch(`https://www.youtube.com/feeds/videos.xml?${param}`, { signal: AbortSignal.timeout(15000) });
  if (!r.ok) throw new Error(`${param} ${r.status}`);
  const xml = await r.text();
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => {
    const e = m[1];
    const id = /<yt:videoId>([^<]+)<\/yt:videoId>/.exec(e)?.[1] ?? '';
    const baslik = varlik(/<title>([^<]*)<\/title>/.exec(e)?.[1] ?? '');
    const tarih = /<published>([^<]+)<\/published>/.exec(e)?.[1] ?? '';
    const izlenme = Number(/<media:statistics views="(\d+)"/.exec(e)?.[1] ?? 0);
    return { id, baslik, tarih, izlenme };
  }).filter((g) => /^[A-Za-z0-9_-]{11}$/.test(g.id));
}

try {
  if (!existsSync(DIST)) throw new Error('dist yok (once vite build)');
  const [hepsi, shorts] = await Promise.all([
    akis(`channel_id=${KANAL}`),
    akis(`playlist_id=UUSH${KANAL.slice(2)}`).catch(() => []),
  ]);
  const shortsKume = new Set(shorts.map((g) => g.id));
  mkdirSync(HEDEF, { recursive: true });
  const gonderiler = [];
  for (const g of hepsi) {
    const kisa = shortsKume.has(g.id);
    // hqdefault (480x360): Shorts'ta dikey kare ortada; sayfa 9:16 kutuda ortalayip kirpiyor.
    const r = await fetch(`https://i.ytimg.com/vi/${g.id}/hqdefault.jpg`, { signal: AbortSignal.timeout(15000) });
    if (!r.ok) continue;
    writeFileSync(join(HEDEF, `${g.id}.jpg`), Buffer.from(await r.arrayBuffer()));
    gonderiler.push({
      id: g.id,
      // Sondaki #etiketler kartta kalabalik ediyor; baslik etiketsiz.
      baslik: g.baslik.replace(/(\s+#[^\s#]+)+\s*$/u, '').trim() || g.baslik,
      tarih: g.tarih,
      izlenme: g.izlenme,
      tur: kisa ? 'shorts' : 'video',
      adres: kisa ? `https://www.youtube.com/shorts/${g.id}` : `https://www.youtube.com/watch?v=${g.id}`,
      gorsel: `/sosyal/youtube/${g.id}.jpg`,
    });
  }
  writeFileSync(join(DIST, 'sosyal', 'youtube.json'), JSON.stringify({ guncel: new Date().toISOString(), profil: PROFIL, gonderiler }));
  console.log(`sosyal-youtube: ${gonderiler.length} gonderi (${gonderiler.filter((g) => g.tur === 'shorts').length} Shorts), resimler dist/sosyal/youtube/`);
} catch (e) {
  console.warn(`sosyal-youtube: atlandi (${e instanceof Error ? e.message : e}); sayfa YouTube icin profil kartini gosterir`);
}
