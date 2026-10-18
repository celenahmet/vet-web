import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const kok = join(dirname(fileURLToPath(import.meta.url)), '..');
const veri = readFileSync(join(kok, 'src/panel/mesaj-veri.ts'), 'utf8');
const ekran = readFileSync(join(kok, 'src/panel/PanelMesajlar.tsx'), 'utf8');
const devam = readFileSync(join(kok, 'src/pages/AppContinue.tsx'), 'utf8');
const bildirimVeri = readFileSync(join(kok, 'src/panel/veri.ts'), 'utf8');
const bildirimPenceresi = readFileSync(join(kok, 'src/panel/BildirimPenceresi.tsx'), 'utf8');
const panel = readFileSync(join(kok, 'src/panel/Panel.tsx'), 'utf8');

const kontroller = [
  ['sabit besli reaksiyon kumesi', /\['heart', 'laugh', 'wow', 'think', 'fire'\]/.test(veri)],
  ['reaksiyon dar RPC ile yaziliyor', /rpc\('set_message_reaction'/.test(veri)],
  ['reaksiyon tablosuna dogrudan yazma yok', !/from\('message_reactions'\)[\s\S]{0,120}\.(?:insert|update|delete)\(/.test(veri)],
  ['normal mesaj yeni kolonu kosulsuz gondermiyor', /if \(yanitlanan\) yeniMesaj\.reply_to_message_id = yanitlanan/.test(veri)],
  ['eski gorunum yeni alanlari guvenli bos degere katliyor', /reply_to_message_id: satir\.reply_to_message_id \?\? null/.test(veri) && /reactions: Array\.isArray/.test(veri)],
  ['istege bagli yetenek probi hata halinde kapali', /return !error/.test(veri)],
  ['bekleyen istekte yeni eylemler kapali', /secili\.peer_state !== 'pending'/.test(ekran)],
  ['yanit onizlemesi ve iptali var', /pnl-mesaj-yanit-onizleme/.test(ekran) && /setYanitlanan\(null\)/.test(ekran)],
  ['reaksiyon degistirme ve kaldirma var', /bendeVar \? null : tepki/.test(ekran)],
  ['hizli sohbet degisiminde eski akis yaniti uygulanmiyor', /istekNo !== akisIstekNo\.current/.test(ekran)],
  ['reaksiyon sonucu baska sohbete geri atlamiyor', /seciliKonusmaId\.current === secili\.id/.test(ekran)],
  ['okundu damgasi hatasi mesaj listesini bosaltmiyor', /try \{ await konusmayiOkunduYap\(k\.id\); \}/.test(ekran)],
  ['uygulama devam rotasi tur ve UUID izin listeli', /ALLOWED_KINDS\.has\(kind\) && UUID\.test\(id\)/.test(devam)],
  ['uygulama devam rotasinda rastgele URL birlestirme yok', !/(?:searchParams|window\.location|decodeURIComponent).*appUrl/.test(devam)],
  ['sohbet bildirimi yalniz tur ve UUID ile yonleniyor', /\['direct_message', 'message_reaction'\]/.test(bildirimVeri) && /reference_kind !== 'conversation'/.test(bildirimVeri) && /\[0-9a-f\]\{8\}/.test(bildirimVeri)],
  ['zil bildirimi sohbet eylemi var', /bildirimKonusmaId\(b\)/.test(bildirimPenceresi) && /sohbeteGit\(id\)/.test(bildirimPenceresi)],
  ['bildirimden panel sohbetine hedef tasiniyor', /setHedefKonusma\(\{ id: konusmaId, sira:/.test(panel) && /hedefKonusma=\{hedefKonusma\}/.test(panel)],
  ['erisilemeyen sohbet otomatik acilmiyor', /konusmalar\.find\(\(k\) => k\.id === hedefKonusma\.id\)/.test(ekran) && /erişilebilir değil/.test(ekran)],
];

let basarisiz = 0;
for (const [ad, gecti] of kontroller) {
  console.log(`${gecti ? 'OK' : 'HATA'}  ${ad}`);
  if (!gecti) basarisiz++;
}

if (basarisiz) {
  console.error(`mesaj ozellik denetimi: ${basarisiz}/${kontroller.length} kontrol basarisiz.`);
  process.exit(1);
}
console.log(`mesaj ozellik denetimi: ${kontroller.length}/${kontroller.length} gecti.`);
