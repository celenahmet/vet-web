/**
 * Favicon setini uretir.
 *
 * ⚠️ ONCEKI FAVICON MARKAYLA ILGISIZDI: mor (#863bff) bir sablon simgesiydi, muhtemelen
 * baslangic sablonundan kalmisti. Tarayici sekmesinde Veterito yerine baska bir urun
 * gorunuyordu.
 *
 * ⚠️ TEAL ZEMIN + BEYAZ AMBLEM secildi, uygulama ikonunun beyaz zeminli hali degil.
 * Iki secenek 16/32/64 pikselde, hem acik hem koyu sekme zemininde uretilip
 * karsilastirildi: beyaz zeminli ikon ACIK sekmede zemine karisiyor ve amblemin ince
 * cizgileri 16 pikselde dagiliyor. Teal kare ikisinde de okunuyor. Karar tahminle
 * degil bakarak verildi.
 *
 * ⚠️ KAYNAK PNG'DE ALFA YOK. `white-amblem.png` beyaz-uzerine-SIYAH; saydam degil.
 * Parlaklik dogrudan alfa kanalina yaziliyor, boylece amblemin kenar yumusakligi
 * korunuyor. Dogrudan yapistirilsaydi amblemin etrafinda siyah bir kare kalirdi.
 *
 * ⚠️ apple-touch-icon KOSESIZ: iOS kendi maskesini uyguluyor. Yuvarlatilmis bir kare
 * verilseydi kose ustune kose binerdi.
 *
 * Kullanim: node scripts/build-favicons.mjs
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const KAYNAK = '/Users/ahmetcelen/Developer/veteriner/assets/logo/mono-white/white-amblem.png';
const HEDEF = new URL('../public/', import.meta.url).pathname;

const PY = `
from PIL import Image, ImageDraw
KAYNAK = ${JSON.stringify(KAYNAK)}
HEDEF  = ${JSON.stringify(HEDEF)}
TEAL   = (15, 107, 87, 255)   # #0F6B57 — index.html'deki theme-color ile ayni

def amblem():
    im = Image.open(KAYNAK).convert('L')
    kat = Image.new('RGBA', im.size, (255, 255, 255, 255))
    kat.putalpha(im)
    b = kat.split()[3].getbbox()
    return kat.crop(b) if b else kat

A = amblem()

def kare(boyut, yuvarlak=True, dolgu=0.18):
    if yuvarlak:
        m = Image.new('L', (boyut*4, boyut*4), 0)
        ImageDraw.Draw(m).rounded_rectangle([0, 0, boyut*4-1, boyut*4-1],
                                            radius=int(boyut*4*0.22), fill=255)
        m = m.resize((boyut, boyut), Image.LANCZOS)
        t = Image.new('RGBA', (boyut, boyut), TEAL); t.putalpha(m)
    else:
        t = Image.new('RGBA', (boyut, boyut), TEAL)
    ic = int(boyut * (1 - 2*dolgu))
    o = A.width / A.height
    w, h = (ic, int(ic/o)) if o >= 1 else (int(ic*o), ic)
    a = A.resize((max(w,1), max(h,1)), Image.LANCZOS)
    t.alpha_composite(a, ((boyut-a.width)//2, (boyut-a.height)//2))
    return t

kare(32).save(HEDEF + 'favicon-32x32.png')
kare(16).save(HEDEF + 'favicon-16x16.png')
# ⚠️ apple-touch-icon kosesiz ve dolgusu daha genis: iOS kendi maskesini uyguluyor
# ve kenardan kirpiyor.
kare(180, yuvarlak=False, dolgu=0.20).save(HEDEF + 'apple-touch-icon.png')
kare(192).save(HEDEF + 'icon-192.png')
kare(512).save(HEDEF + 'icon-512.png')
# Android maskable: guvenli alan merkezdeki %80; amblem daha kucuk kalmali yoksa
# yuvarlak maske altinda kenarlari kesilir.
kare(512, yuvarlak=False, dolgu=0.28).save(HEDEF + 'icon-maskable-512.png')
# Cok boyutlu .ico — eski tarayicilar ve Windows kisayollari icin.
kare(48).save(HEDEF + 'favicon.ico', sizes=[(16,16), (32,32), (48,48)])
print('uretildi')
`;
execFileSync('python3', ['-c', PY], { stdio: 'inherit' });

writeFileSync(HEDEF + 'site.webmanifest', JSON.stringify({
  name: 'Veterito',
  short_name: 'Veterito',
  description: 'Hayvanseverlerin sosyal platformu',
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
  theme_color: '#0F6B57',
  background_color: '#FFFFFF',
  display: 'standalone',
  start_url: '/',
}, null, 2) + '\n');
console.log('site.webmanifest yazildi');
