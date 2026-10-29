import React from 'react';
import {
  AudioLines,
  Baseline,
  BookOpenText,
  CirclePause,
  Contrast,
  Droplet,
  Eye,
  Heading,
  ImageOff,
  LayoutGrid,
  Link as LinkIcon,
  List,
  MousePointer2,
  RotateCcw,
  Rows3,
  ScanLine,
  SquareDashed,
  SunMoon,
  Type,
  Volume2,
  X,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ErisilebilirlikSimgesi } from './ErisilebilirlikSimgesi';
import { YAZI_OLCEKLERI, type ErisilebilirlikAyarlari, type ProfilAdi } from '../lib/erisilebilirlik';
import type { AracAnahtari } from './ErisilebilirlikCubugu';

// Erişilebilirlik panelinin arayüzü. Ayrı dosya, çünkü ilk açılışta
// yükleniyor: 16 araç simgesi ve panel düzeni ilk sayfa yüklemesine binmiyor.
// Durum ve davranış ErisilebilirlikCubugu.tsx'te.

interface Arac {
  anahtar: AracAnahtari;
  ikon: React.ReactNode;
  seviye?: number;
}

const ARACLAR: Arac[] = [
  { anahtar: 'yaziBoyutu', ikon: <Type size={18} />, seviye: YAZI_OLCEKLERI.length - 1 },
  { anahtar: 'satirAraligi', ikon: <Rows3 size={18} />, seviye: 2 },
  { anahtar: 'harfAraligi', ikon: <Baseline size={18} />, seviye: 2 },
  { anahtar: 'okunakliYazi', ikon: <BookOpenText size={18} /> },
  { anahtar: 'kontrast', ikon: <Contrast size={18} /> },
  { anahtar: 'tersRenk', ikon: <SunMoon size={18} /> },
  { anahtar: 'renk', ikon: <Droplet size={18} />, seviye: 2 },
  { anahtar: 'baglantiVurgu', ikon: <LinkIcon size={18} /> },
  { anahtar: 'baslikVurgu', ikon: <Heading size={18} /> },
  { anahtar: 'buyukImlec', ikon: <MousePointer2 size={18} /> },
  { anahtar: 'okumaKilavuzu', ikon: <ScanLine size={18} /> },
  { anahtar: 'okumaMaskesi', ikon: <Eye size={18} /> },
  { anahtar: 'hareketsiz', ikon: <CirclePause size={18} /> },
  { anahtar: 'gorselGizle', ikon: <ImageOff size={18} /> },
  { anahtar: 'odakBelirgin', ikon: <SquareDashed size={18} /> },
  { anahtar: 'sesliOkuma', ikon: <Volume2 size={18} /> },
];

const PROFIL_SIRASI: ProfilAdi[] = ['az_goren', 'disleksi', 'dikkat', 'hareket'];

interface ErisilebilirlikPaneliProps {
  panelRef: React.RefObject<HTMLDivElement | null>;
  /** Sekmenin bulunduğu kenar; panel o taraftan açılıyor (29.10). */
  taraf: 'sol' | 'sag';
  tarafDegistir: (taraf: 'sol' | 'sag') => void;
  ayarlar: ErisilebilirlikAyarlari;
  setAyarlar: React.Dispatch<React.SetStateAction<ErisilebilirlikAyarlari>>;
  etkin: number;
  okuyor: boolean;
  sesVar: boolean;
  degistir: (anahtar: AracAnahtari, seviye?: number) => void;
  profilUygula: (profil: ProfilAdi) => void;
  profilEtkin: (profil: ProfilAdi) => boolean;
  sifirla: () => void;
  kapat: () => void;
}

const ErisilebilirlikPaneli: React.FC<ErisilebilirlikPaneliProps> = ({
  panelRef, taraf, tarafDegistir, ayarlar, setAyarlar, etkin, okuyor, sesVar, degistir, profilUygula, profilEtkin, sifirla, kapat,
}) => {
  const { t } = useTranslation();
  // Panel ayrı parça olarak yüklendiği için odak, açılış anında değil panel
  // gerçekten çizildiğinde veriliyor.
  React.useEffect(() => {
    panelRef.current?.focus();
  }, [panelRef]);
  const aracDurumu = (arac: Arac) => {
    if (arac.anahtar === 'sesliOkuma') return okuyor ? 1 : 0;
    const v = ayarlar[arac.anahtar];
    return typeof v === 'number' ? v : v ? 1 : 0;
  };

  return (
    <div
      id="erisilebilirlik-paneli"
      ref={panelRef}
      role="dialog"
      aria-modal="false"
      aria-labelledby="erisilebilirlik-baslik"
      tabIndex={-1}
      // Sol kenar eski sınıflarla; sağ kenar satır içi (CSS bütçesi, 29.10).
      style={taraf === 'sag'
        ? ({ right: 0, borderRadius: '1rem 0 0 1rem', borderRightWidth: 0, '--tw-enter-translate-x': '1rem' } as React.CSSProperties)
        : undefined}
      className={`fixed ${taraf === 'sol' ? 'left-0 rounded-r-2xl border-l-0' : ''} top-1/2 z-[70] flex max-h-[80vh] w-[min(88vw,300px)] -translate-y-1/2 flex-col overflow-hidden border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-2xl outline-none`}
    >
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-zinc-800 px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700">
            <ErisilebilirlikSimgesi size={18} />
          </span>
          <div>
            <h2 id="erisilebilirlik-baslik" className="text-sm font-bold leading-tight text-slate-900 dark:text-zinc-100">{t('a11y.bar.title')}</h2>
            <p className="text-[10px] text-slate-500 dark:text-zinc-400">{t('a11y.bar.active', { sayi: etkin })}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setAyarlar((a) => ({ ...a, kompakt: !a.kompakt }))}
            aria-pressed={ayarlar.kompakt}
            title={ayarlar.kompakt ? t('a11y.bar.wide') : t('a11y.bar.compact')}
            aria-label={ayarlar.kompakt ? t('a11y.bar.wide') : t('a11y.bar.compact')}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 dark:text-zinc-400 transition-colors hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-zinc-100"
          >
            {ayarlar.kompakt ? <List size={18} aria-hidden="true" /> : <LayoutGrid size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={kapat}
            aria-label={t('a11y.bar.close')}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 dark:text-zinc-400 transition-colors hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-zinc-100"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="overflow-y-auto px-4 py-3">
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">{t('a11y.bar.profiles')}</p>
        <div className="mb-3 grid grid-cols-4 gap-1">
          {PROFIL_SIRASI.map((profil) => {
            const secili = profilEtkin(profil);
            return (
              <button
                key={profil}
                type="button"
                onClick={() => profilUygula(profil)}
                aria-pressed={secili}
                title={t(`a11y.profiles.${profil}`)}
                className={`rounded-lg border px-1 py-1.5 text-center text-[10px] font-bold leading-tight transition-colors ${secili ? 'border-teal-700 bg-teal-700 text-white' : 'border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:border-teal-300 hover:bg-teal-50 dark:hover:bg-zinc-800'}`}
              >
                {t(`a11y.profiles_short.${profil}`)}
              </button>
            );
          })}
        </div>

        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">{t('a11y.bar.tools')}</p>
        <div className={`grid gap-1.5 ${ayarlar.kompakt ? 'grid-cols-4' : 'grid-cols-2'}`}>
          {ARACLAR.map((arac) => {
            const durum = aracDurumu(arac);
            const etkinMi = durum > 0;
            const devreDisi = arac.anahtar === 'sesliOkuma' && !sesVar;
            const etiket = t(`a11y.tools.${arac.anahtar}`);
            return (
              <button
                key={arac.anahtar}
                type="button"
                disabled={devreDisi}
                onClick={() => degistir(arac.anahtar, arac.seviye)}
                aria-pressed={arac.seviye ? undefined : etkinMi}
                aria-label={arac.seviye ? `${etiket}: ${t('a11y.bar.level', { seviye: durum, toplam: arac.seviye })}` : etiket}
                title={etiket}
                className={`flex flex-col items-center justify-center gap-1 rounded-lg border text-center transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${ayarlar.kompakt ? 'min-h-12 px-1 py-1.5' : 'min-h-16 p-2.5'} ${etkinMi ? 'border-teal-700 bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-300' : 'border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-200 hover:border-teal-300 hover:bg-slate-50 dark:hover:bg-zinc-800'}`}
              >
                <span aria-hidden="true">{arac.anahtar === 'sesliOkuma' && okuyor ? <AudioLines size={18} /> : arac.ikon}</span>
                <span className={`font-semibold ${ayarlar.kompakt ? 'whitespace-nowrap text-[10px] leading-none' : 'text-xs leading-tight'}`}>{ayarlar.kompakt ? t(`a11y.tools_short.${arac.anahtar}`) : etiket}</span>
                {arac.seviye ? (
                  <span aria-hidden="true" className="flex gap-1">
                    {Array.from({ length: arac.seviye }, (_, i) => (
                      <span key={i} className={`h-1.5 w-1.5 rounded-full ${i < durum ? 'bg-teal-700' : 'bg-slate-200 dark:bg-zinc-700'}`} />
                    ))}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
        {ayarlar.yaziBoyutu > 0 && (
          <p className="mt-2 text-[10px] text-slate-500 dark:text-zinc-400">{t('a11y.bar.text_size', { yuzde: YAZI_OLCEKLERI[ayarlar.yaziBoyutu] })}</p>
        )}

        {/* Çubuğun kenarı (Ahmet 29.10: "standart sola dip dipe, sağ tarafa da
            ayarlardan değiştirilebilecek"). Sınıflar profil düğmeleriyle AYNI:
            yeni sınıf CSS bütçesini aşıyordu. */}
        <p className="mb-1.5 mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">{t('a11y.bar.side')}</p>
        <div className="grid grid-cols-2 gap-1">
          {(['sol', 'sag'] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => tarafDegistir(k)}
              aria-pressed={taraf === k}
              className={`rounded-lg border px-1 py-1.5 text-center text-[10px] font-bold leading-tight transition-colors ${taraf === k ? 'border-teal-700 bg-teal-700 text-white' : 'border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:border-teal-300 hover:bg-teal-50 dark:hover:bg-zinc-800'}`}
            >
              {k === 'sol' ? t('a11y.bar.side_left') : t('a11y.bar.side_right')}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-slate-100 dark:border-zinc-800 px-4 py-2">
        <p className="text-[10px] leading-snug text-slate-500 dark:text-zinc-400">{t('a11y.bar.privacy')}</p>
        <button
          type="button"
          onClick={sifirla}
          disabled={etkin === 0 && !okuyor}
          className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-slate-200 dark:border-zinc-700 px-2.5 py-1.5 text-xs font-bold text-slate-700 dark:text-zinc-200 transition-colors hover:border-teal-300 hover:text-teal-800 disabled:opacity-40"
        >
          <RotateCcw size={12} aria-hidden="true" />
          {t('a11y.bar.reset')}
        </button>
      </div>
    </div>
  );
};

export default ErisilebilirlikPaneli;
