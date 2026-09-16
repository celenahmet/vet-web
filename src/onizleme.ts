/**
 * ONCEDEN URETILMIS ICERIGIN YAKALANMASI
 *
 * ⚠️ NEDEN AYRI MODUL: once bu deger `main.tsx` icinden disa aktariliyordu ve
 * `App.tsx` oradan import ediyordu. Ama `main.tsx` de `App.tsx`'i import ediyor;
 * yani DONGUSEL bir bagimlilik olusuyordu. Sonucu olculdu: `App.tsx` tarafinda
 * deger bos geliyor, ara durumda onizleme yerine donen halka ciziliyordu.
 *
 * Kendi modulunde durunca zincir tek yonlu: main -> onizleme, App -> onizleme.
 *
 * ⚠️ MODUL YUKLENIR YUKLENMEZ OKUNUYOR. `createRoot` bagli oldugu kutunun icini
 * TEMIZLIYOR; okuma o cagridan once olmak zorunda. Bu dosya `main.tsx` icinde
 * `createRoot`tan ONCE import edildigi surece dogru sirada calisiyor.
 */
/* ⚠️ `typeof document` kontrolu (16.09.2026): bu modul artik SUNUCUDA da
   yukleniyor (scripts/ssr-giris.tsx pazarlama sayfalarini Node'da ciziyor).
   Orada `document` yok; kontrolsuz erisim SSR paketini daha ilk satirda
   dusuruyordu. Tarayicida davranis ayni. */
const kok = typeof document !== 'undefined' ? document.getElementById('root') : null;

/**
 * Prerender'in urettigi HTML. Prerender edilmemis sayfalarda bos dize.
 * ⚠️ Icerik BIZIM uretimimiz; kullanicidan ya da agdan gelmiyor, bu yuzden
 * `dangerouslySetInnerHTML` ile basmak guvenli.
 */
export const ONCEDEN_URETILMIS = kok ? kok.innerHTML.trim() : '';
