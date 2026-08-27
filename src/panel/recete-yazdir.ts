import type { Recete } from './veri';

/**
 * RECETE CIKTISI (esitleme denetimi, 27.08.2026).
 *
 * Panelde recete yazilabiliyordu ama hastaya verilebilecek bir ciktisi yoktu;
 * akis yarim duruyordu. Mobil taraf `expo-print` ile PDF uretiyor
 * (`prescription-pdf.ts`).
 *
 * ⚠️ PDF KUTUPHANESI EKLENMEDI ve bu bilincli. Tarayicinin kendi yazdirma
 * penceresi zaten "PDF olarak kaydet" sunuyor; jsPDF/pdfmake gibi bir paket
 * eklemek, ayni sonuc icin pakete yuzlerce kilobayt bindirirdi. Uretim
 * butcesi zaten sinirda (bkz. check-production.mjs).
 *
 * ⚠️ SABLON MOBILLE AYNI. Ayni recete telefondan ve panelden farkli gorunmemeli;
 * bu bir belge, arayuz degil. HTML ve stiller `prescription-pdf.ts` ile birebir
 * tutuluyor -- biri degisirse otekinin de degismesi gerekiyor.
 *
 * ⚠️ ACILIR PENCERE DEGIL, GIZLI CERCEVE. `window.open` engelleyicilere
 * takilabiliyor ve arkada bos bir sekme birakiyor. Ayni belge, ayni kaynakli
 * bir `iframe` icinde basiliyor; yazdirma bitince cerceve kaldiriliyor.
 */

/** ⚠️ Metin HTML'e GOMULUYOR: kacis olmadan bir ilac adi sayfayi bozabilirdi. */
function kacir(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Mobildeki `pdfFooter` ile BIREBIR ayni cumle.
 *
 * ⚠️ Bu bir hukuki kayit: platformun receteyi dogrulamadigi ve tibbi sorumluluk
 * tasimadigi belgenin uzerinde yaziyor. Kisaltilmaz, yeniden yazilmaz.
 */
const ALT_BILGI =
  'Bu belge, düzenleyen veteriner hekimin beyanıdır. '
  + 'Platform içeriği doğrulamaz, onaylamaz ve tıbbi sorumluluk taşımaz.';

export function receteHtml(recete: Recete, klinikAdi: string, hastaAdi: string): string {
  const tarih = new Date(recete.issued_at).toLocaleDateString('tr-TR');

  const kalemler = [...recete.prescription_items]
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((k) => {
      const detay = [k.dosage, k.frequency, k.duration, k.note]
        .filter(Boolean)
        .map((x) => kacir(String(x)))
        .join(' &middot; ');
      return `<li><strong>${kacir(k.drug_name)}</strong>${
        detay ? `<div class="detay">${detay}</div>` : ''
      }</li>`;
    })
    .join('');

  /* ⚠️ IPTAL EDILMIS RECETE CIKTISINDA DA IPTAL YAZIYOR. Yazmasaydi, iptal
     edilmis bir belge disarida gecerliymis gibi dolasirdi. */
  const iptalUyarisi = recete.voided_at
    ? `<div class="iptal">İptal edildi${
        recete.void_reason ? ` — ${kacir(recete.void_reason)}` : ''
      }</div>`
    : '';

  return `<!doctype html>
<html lang="tr"><head><meta charset="utf-8" /><title>Reçete</title>
<style>
  body { font-family: -apple-system, "Helvetica Neue", Arial, sans-serif; color: #1a1a1a;
         padding: 32px; line-height: 1.5; }
  h1 { font-size: 20px; margin: 0 0 4px; }
  .ust { border-bottom: 1px solid #ddd; padding-bottom: 12px; margin-bottom: 16px; }
  .satir { font-size: 13px; color: #555; }
  .iptal { border: 1px solid #b00; color: #b00; padding: 8px 12px; margin: 12px 0;
           font-weight: 600; font-size: 13px; }
  ul { padding-left: 18px; }
  li { margin-bottom: 10px; }
  .detay { font-size: 12px; color: #555; }
  .not { margin-top: 16px; font-size: 13px; }
  .altbilgi { margin-top: 32px; padding-top: 12px; border-top: 1px solid #ddd;
              font-size: 11px; color: #777; }
</style></head>
<body>
  <div class="ust">
    <h1>${kacir(klinikAdi)}</h1>
    <div class="satir">Tarih: ${kacir(tarih)}</div>
    <div class="satir">Hasta: ${kacir(hastaAdi)}</div>
    ${recete.diagnosis ? `<div class="satir">Tanı: ${kacir(recete.diagnosis)}</div>` : ''}
  </div>

  ${iptalUyarisi}

  <ul>${kalemler}</ul>

  ${recete.notes ? `<div class="not">${kacir(recete.notes)}</div>` : ''}

  <div class="altbilgi">${kacir(ALT_BILGI)}</div>
</body></html>`;
}

/**
 * Receteyi tarayicinin yazdirma penceresine verir.
 *
 * Kullanici oradan yazdirabilir ya da "PDF olarak kaydet" diyebilir.
 */
export function receteyiYazdir(recete: Recete, klinikAdi: string, hastaAdi: string): void {
  const cerceve = document.createElement('iframe');
  cerceve.setAttribute('aria-hidden', 'true');
  cerceve.style.position = 'fixed';
  cerceve.style.right = '0';
  cerceve.style.bottom = '0';
  cerceve.style.width = '0';
  cerceve.style.height = '0';
  cerceve.style.border = '0';
  cerceve.srcdoc = receteHtml(recete, klinikAdi, hastaAdi);

  cerceve.onload = () => {
    const pencere = cerceve.contentWindow;
    if (!pencere) {
      cerceve.remove();
      return;
    }
    pencere.focus();
    pencere.print();
    /* ⚠️ CERCEVE HEMEN KALDIRILMIYOR. Bazi tarayicilarda `print()` hemen
       donuyor ve belge daha basilmadan silinirse cikti bos kaliyor. Kisa bir
       gecikme, "yazdirdim ama kagit bos" hatasindan ucuz. */
    window.setTimeout(() => cerceve.remove(), 1000);
  };

  document.body.appendChild(cerceve);
}
