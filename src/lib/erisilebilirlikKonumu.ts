// Erişilebilirlik sekmesinin ekrandaki yeri (Ahmet 29.10.2026: "erişilebilirlik
// çubuğunu taşınabilir yapacağız"; "standart sola dip dipe gelecek, sağ tarafa
// da ayarlardan değiştirilebilecek, dikey hizada hareket edebilecek"). Kenar
// panelden seçiliyor; sürükleme yalnız dikey yeri değiştiriyor. Dikey yer ekran
// yüksekliğinin oranı: pencere boyu değişse de aynı bölgede kalıyor.
//
// ⚠️ Yalnız bu tarayıcıda (localStorage), yalnız okuyucunun rahatı için;
// sunucuya gitmiyor. Depolama kapalıysa varsayılan yer kullanılıyor.

export type Kenar = 'sol' | 'sag';
export interface SekmeKonumu {
  taraf: Kenar;
  /** Sekmenin ortasının ekran yüksekliğine oranı (0..1). */
  y: number;
}

const ANAHTAR = 'erisilebilirlik-konumu';
export const VARSAYILAN_KONUM: SekmeKonumu = { taraf: 'sol', y: 0.5 };

// Sekme ekranın en üstüne ya da altına yapışıp menü çubuğunun ya da alt
// gezinmenin altında kalmasın.
const ALT_SINIR = 0.12;
const UST_SINIR = 0.88;

export const sinirla = (y: number) => Math.min(UST_SINIR, Math.max(ALT_SINIR, y));

export function kayitliKonum(): SekmeKonumu {
  try {
    const ham = window.localStorage.getItem(ANAHTAR);
    if (!ham) return VARSAYILAN_KONUM;
    const k = JSON.parse(ham) as Partial<SekmeKonumu>;
    const taraf: Kenar = k.taraf === 'sag' ? 'sag' : 'sol';
    const y = typeof k.y === 'number' && Number.isFinite(k.y) ? sinirla(k.y) : VARSAYILAN_KONUM.y;
    return { taraf, y };
  } catch {
    return VARSAYILAN_KONUM;
  }
}

export function konumuKaydet(k: SekmeKonumu) {
  try {
    window.localStorage.setItem(ANAHTAR, JSON.stringify(k));
  } catch {
    /* Gizli pencere ya da kapalı depolama: yer bu oturumda geçerli, hatırlanmaz. */
  }
}
