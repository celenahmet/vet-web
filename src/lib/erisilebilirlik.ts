// lib/erisilebilirlik.ts
//
// Erişilebilirlik çubuğunun ayarları (Ahmet 01.10.2026: "çok gelişmiş, site
// temasına uygun, rahatsız etmeyen, tercihle ilerleyebilen, gerçekten çalışan
// bir çubuk; 12 araç kesin").
//
// ── NEDEN BURADA, BİLEŞENDE DEĞİL ─────────────────────────────────────────
// Ayarların sayfaya uygulanması React'tan bağımsız: `index.tsx` bunu React
// çizilmeden ÖNCE çağırıyor, böylece büyük yazı ya da kontrast seçmiş biri
// her sayfa açılışında önce varsayılan görünümü görüp sonra değişmesini
// yaşamıyor. Bileşen yalnız arayüz.
//
// ── GİZLİLİK ──────────────────────────────────────────────────────────────
// Tercihler yalnız tarayıcıda (localStorage) duruyor, sunucuya gitmiyor ve
// analitiğe OLAY OLARAK GÖNDERİLMİYOR. Hangi aracın açıldığı bir sağlık
// durumuna işaret edebilir; toplanmayan veri en güvenli veridir.

export interface ErisilebilirlikAyarlari {
  /** 0-4: %100, %112, %125, %140, %160 */
  yaziBoyutu: number;
  /** 0-2: normal, geniş, çok geniş */
  satirAraligi: number;
  /** 0-2: normal, geniş, çok geniş */
  harfAraligi: number;
  okunakliYazi: boolean;
  kontrast: boolean;
  tersRenk: boolean;
  /** 0-2: normal, düşük doygunluk, gri tonlama */
  renk: number;
  baglantiVurgu: boolean;
  baslikVurgu: boolean;
  buyukImlec: boolean;
  okumaKilavuzu: boolean;
  okumaMaskesi: boolean;
  hareketsiz: boolean;
  gorselGizle: boolean;
  odakBelirgin: boolean;
  /** Panelin görünümü: kompakt (simgeler) ya da geniş (etiketli). */
  kompakt: boolean;
}

export const VARSAYILAN: ErisilebilirlikAyarlari = {
  yaziBoyutu: 0,
  satirAraligi: 0,
  harfAraligi: 0,
  okunakliYazi: false,
  kontrast: false,
  tersRenk: false,
  renk: 0,
  baglantiVurgu: false,
  baslikVurgu: false,
  buyukImlec: false,
  okumaKilavuzu: false,
  okumaMaskesi: false,
  hareketsiz: false,
  gorselGizle: false,
  odakBelirgin: false,
  // Varsayılan kompakt (Ahmet 02.10: "fazla yer kaplamış, çok küçülebilir").
  kompakt: true,
};

export const YAZI_OLCEKLERI = [100, 112, 125, 140, 160] as const;

export type ProfilAdi = 'az_goren' | 'disleksi' | 'dikkat' | 'hareket';

/** Hazır profiller: tek dokunuşla birkaç aracı birlikte açar. */
export const PROFILLER: Record<ProfilAdi, Partial<ErisilebilirlikAyarlari>> = {
  az_goren: { yaziBoyutu: 2, kontrast: true, baglantiVurgu: true, buyukImlec: true, odakBelirgin: true },
  disleksi: { okunakliYazi: true, harfAraligi: 1, satirAraligi: 1, okumaKilavuzu: true },
  dikkat: { okumaMaskesi: true, hareketsiz: true, renk: 1 },
  hareket: { hareketsiz: true, renk: 1 },
};

const ANAHTAR = 'veterito-erisilebilirlik';

const sinirla = (deger: unknown, enBuyuk: number) =>
  typeof deger === 'number' && Number.isInteger(deger) ? Math.min(Math.max(deger, 0), enBuyuk) : 0;

/** Kayıtlı tercihi okur; bozuk ya da eksik kayıt varsayılana düşer. */
export const kayitliAyarlar = (): ErisilebilirlikAyarlari => {
  try {
    const ham = window.localStorage.getItem(ANAHTAR);
    if (!ham) return { ...VARSAYILAN };
    const veri = JSON.parse(ham) as Partial<Record<keyof ErisilebilirlikAyarlari, unknown>>;
    const sonuc = { ...VARSAYILAN };
    (Object.keys(VARSAYILAN) as Array<keyof ErisilebilirlikAyarlari>).forEach((anahtar) => {
      const v = veri[anahtar];
      if (typeof VARSAYILAN[anahtar] === 'boolean') {
        (sonuc as unknown as Record<string, unknown>)[anahtar] = v === true;
      }
    });
    sonuc.yaziBoyutu = sinirla(veri.yaziBoyutu, YAZI_OLCEKLERI.length - 1);
    sonuc.satirAraligi = sinirla(veri.satirAraligi, 2);
    sonuc.harfAraligi = sinirla(veri.harfAraligi, 2);
    sonuc.renk = sinirla(veri.renk, 2);
    return sonuc;
  } catch {
    return { ...VARSAYILAN };
  }
};

export const ayarlariKaydet = (ayarlar: ErisilebilirlikAyarlari) => {
  try {
    const varsayilanMi = (Object.keys(VARSAYILAN) as Array<keyof ErisilebilirlikAyarlari>).every(
      (k) => ayarlar[k] === VARSAYILAN[k],
    );
    if (varsayilanMi) window.localStorage.removeItem(ANAHTAR);
    else window.localStorage.setItem(ANAHTAR, JSON.stringify(ayarlar));
  } catch {
    // Gizli sekme ya da kapalı depolama: ayar bu oturumda yine çalışır.
  }
};

/** Etkin araç sayısı (görünüm tercihi sayılmaz). */
export const etkinAracSayisi = (a: ErisilebilirlikAyarlari) =>
  (Object.keys(VARSAYILAN) as Array<keyof ErisilebilirlikAyarlari>).filter(
    (k) => k !== 'kompakt' && a[k] !== VARSAYILAN[k],
  ).length;

const SINIFLAR: Array<[string, (a: ErisilebilirlikAyarlari) => boolean]> = [
  ['a11y-satir-1', (a) => a.satirAraligi === 1],
  ['a11y-satir-2', (a) => a.satirAraligi === 2],
  ['a11y-harf-1', (a) => a.harfAraligi === 1],
  ['a11y-harf-2', (a) => a.harfAraligi === 2],
  ['a11y-okunakli', (a) => a.okunakliYazi],
  ['a11y-ters', (a) => a.tersRenk],
  ['a11y-baglanti', (a) => a.baglantiVurgu],
  ['a11y-baslik', (a) => a.baslikVurgu],
  ['a11y-imlec', (a) => a.buyukImlec],
  ['a11y-hareketsiz', (a) => a.hareketsiz],
  ['a11y-gorselsiz', (a) => a.gorselGizle],
  ['a11y-odak', (a) => a.odakBelirgin],
];

/**
 * Ayarları <html> öğesine uygular. Filtreler TEK `filter` değerinde
 * birleşiyor: ayrı ayrı yazılsaydı biri ötekini ezerdi. Kök öğedeki filtre,
 * sabit konumlu öğelerin (menü, çubuk) yerleşimini bozmuyor; tarifname kök
 * öğeyi bu kuraldan ayrık tutuyor.
 */
export const ayarlariUygula = (a: ErisilebilirlikAyarlari) => {
  const kok = document.documentElement;
  SINIFLAR.forEach(([sinif, kosul]) => kok.classList.toggle(sinif, kosul(a)));
  kok.style.fontSize = a.yaziBoyutu ? `${YAZI_OLCEKLERI[a.yaziBoyutu]}%` : '';
  const filtre = [
    a.kontrast ? 'contrast(1.3)' : '',
    a.tersRenk ? 'invert(1) hue-rotate(180deg)' : '',
    a.renk === 1 ? 'saturate(0.45)' : a.renk === 2 ? 'grayscale(1)' : '',
  ]
    .filter(Boolean)
    .join(' ');
  kok.style.filter = filtre;
};

/** `index.tsx`: React çizilmeden önce kayıtlı tercihi uygula. */
export const kayitliAyarlariUygula = () => {
  try {
    ayarlariUygula(kayitliAyarlar());
  } catch {
    // Uygulanamazsa sayfa varsayılan görünümle açılır.
  }
};
