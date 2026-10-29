import React from 'react';
import { ErisilebilirlikSimgesi } from './ErisilebilirlikSimgesi';
import { useTranslation } from 'react-i18next';
import {
  PROFILLER,
  VARSAYILAN,
  ayarlariKaydet,
  ayarlariUygula,
  etkinAracSayisi,
  kayitliAyarlar,
  type ErisilebilirlikAyarlari,
  type ProfilAdi,
} from '../lib/erisilebilirlik';
import { kayitliKonum, konumuKaydet, sinirla, VARSAYILAN_KONUM, type SekmeKonumu } from '../lib/erisilebilirlikKonumu';

// Sol kenardaki erişilebilirlik çubuğu (UniConnectly'de 01.10.2026; Veterito'ya
// 29.10.2026'da taşındı: Ahmet "veteritoda erişilebilirlik çubuğu da yok, onu da
// tasarıma uygun şekilde ekleyeceğiz"; renkler Veterito turkuazı, koyu tema var). Kapalıyken yalnız
// küçük bir sekme; açılınca panel. Ayarlar lib/erisilebilirlik.ts'de, burada
// arayüz, okuma kılavuzu/maskesi ve sesli okuma var. Kullanım ANALİTİĞE
// GÖNDERİLMİYOR (gerekçe o dosyada).

export type SayiAnahtar = 'yaziBoyutu' | 'satirAraligi' | 'harfAraligi' | 'renk';
export type MantikAnahtar = Exclude<keyof ErisilebilirlikAyarlari, SayiAnahtar | 'kompakt'>;

export type AracAnahtari = SayiAnahtar | MantikAnahtar | 'sesliOkuma';

const ErisilebilirlikPaneli = React.lazy(() => import('./ErisilebilirlikPaneli'));

/** Uzun metni cümle sınırlarından ~220 karakterlik parçalara böler: bazı
 *  tarayıcılar tek seferde okunan uzun metni yarıda kesiyor. */
const parcala = (metin: string) => {
  const cumleler = metin.replace(/\s+/g, ' ').trim().match(/[^.!?…]+[.!?…]*/g) ?? [];
  const parcalar: string[] = [];
  let tampon = '';
  cumleler.forEach((c) => {
    if ((tampon + c).length > 220 && tampon) {
      parcalar.push(tampon.trim());
      tampon = '';
    }
    tampon += c;
  });
  if (tampon.trim()) parcalar.push(tampon.trim());
  return parcalar;
};

export const ErisilebilirlikCubugu: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [acik, setAcik] = React.useState(false);
  const [ayarlar, setAyarlar] = React.useState<ErisilebilirlikAyarlari>(VARSAYILAN);
  const [hazir, setHazir] = React.useState(false);
  const [okuyor, setOkuyor] = React.useState(false);
  const [imlecY, setImlecY] = React.useState<number | null>(null);
  const sekmeRef = React.useRef<HTMLButtonElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const sesVar = typeof window !== 'undefined' && 'speechSynthesis' in window;

  // Taşınabilir sekme (Ahmet 29.10): varsayılan sol kenar, kenara yapışık;
  // sürükleyince YALNIZ DİKEYDE kayar ("x ekseni gibi düşün", tek eksen). Sağ
  // kenara geçiş panelin içindeki ayardan. Yeri bu tarayıcıda hatırlanır. Sürükleme tıklamadan 6 px eşikle ayrılıyor;
  // sürüklemenin sonundaki tıklama paneli açmasın diye bir kez yutuluyor.
  const [konum, setKonum] = React.useState<SekmeKonumu>(VARSAYILAN_KONUM);
  const surukleme = React.useRef<{ x: number; y: number; basladi: boolean } | null>(null);
  const tiklamayiYut = React.useRef(false);
  React.useEffect(() => { setKonum(kayitliKonum()); }, []);

  const konumuYerlestir = (clientY: number) => {
    setKonum((k) => ({ ...k, y: sinirla(clientY / window.innerHeight) }));
  };

  const tarafDegistir = (taraf: SekmeKonumu['taraf']) => {
    setKonum((k) => { const yeni = { ...k, taraf }; konumuKaydet(yeni); return yeni; });
  };

  const tutmaBasla = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.button !== 0) return;
    surukleme.current = { x: e.clientX, y: e.clientY, basladi: false };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const tutmaTasi = (e: React.PointerEvent<HTMLButtonElement>) => {
    const s = surukleme.current;
    if (!s) return;
    if (!s.basladi && Math.hypot(e.clientX - s.x, e.clientY - s.y) < 6) return;
    s.basladi = true;
    konumuYerlestir(e.clientY);
  };
  const tutmaBirak = (e: React.PointerEvent<HTMLButtonElement>) => {
    const s = surukleme.current;
    surukleme.current = null;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
    if (!s?.basladi) return;
    tiklamayiYut.current = true;
    setKonum((k) => { konumuKaydet(k); return k; });
  };

  // Klavyeyle taşıma: Alt + yukarı/aşağı, kenar boyunca.
  const tusIleTasi = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!e.altKey) return;
    const adim: Record<string, (k: SekmeKonumu) => SekmeKonumu> = {
      ArrowUp: (k) => ({ ...k, y: sinirla(k.y - 0.05) }),
      ArrowDown: (k) => ({ ...k, y: sinirla(k.y + 0.05) }),
    };
    const f = adim[e.key];
    if (!f) return;
    e.preventDefault();
    setKonum((k) => { const yeni = f(k); konumuKaydet(yeni); return yeni; });
  };

  // İlk açılış: kayıtlı tercih (index.tsx zaten sayfaya uyguladı; burada
  // yalnız arayüzün durumunu eşitliyoruz).
  React.useEffect(() => {
    setAyarlar(kayitliAyarlar());
    setHazir(true);
  }, []);

  React.useEffect(() => {
    if (!hazir) return;
    ayarlariUygula(ayarlar);
    ayarlariKaydet(ayarlar);
  }, [ayarlar, hazir]);

  // Okuma kılavuzu ve maskesi imleci (dokunmatikte parmağı) izliyor.
  const izle = ayarlar.okumaKilavuzu || ayarlar.okumaMaskesi;
  React.useEffect(() => {
    if (!izle) {
      setImlecY(null);
      return undefined;
    }
    const tasi = (e: PointerEvent) => setImlecY(e.clientY);
    window.addEventListener('pointermove', tasi, { passive: true });
    window.addEventListener('pointerdown', tasi, { passive: true });
    return () => {
      window.removeEventListener('pointermove', tasi);
      window.removeEventListener('pointerdown', tasi);
    };
  }, [izle]);

  // Panel: Esc kapatır, açılınca odak panele, kapanınca sekmeye döner.
  React.useEffect(() => {
    if (!acik) return undefined;
    const tus = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAcik(false);
        sekmeRef.current?.focus();
      }
    };
    window.addEventListener('keydown', tus);
    return () => window.removeEventListener('keydown', tus);
  }, [acik]);

  // Sayfadan ayrılırken ya da bileşen kalkarken okuma durur.
  React.useEffect(() => () => {
    if (sesVar) window.speechSynthesis.cancel();
  }, [sesVar]);

  const degistir = (anahtar: AracAnahtari, seviye?: number) => {
    if (anahtar === 'sesliOkuma') {
      sesliOku();
      return;
    }
    setAyarlar((onceki) => {
      if (seviye !== undefined) {
        const simdiki = onceki[anahtar as SayiAnahtar];
        return { ...onceki, [anahtar]: simdiki >= seviye ? 0 : simdiki + 1 };
      }
      return { ...onceki, [anahtar]: !onceki[anahtar as MantikAnahtar] };
    });
  };

  const profilUygula = (profil: ProfilAdi) => {
    setAyarlar((onceki) => (profilEtkin(profil, onceki)
      ? { ...VARSAYILAN, kompakt: onceki.kompakt }
      : { ...VARSAYILAN, ...PROFILLER[profil], kompakt: onceki.kompakt }));
  };

  const profilEtkin = (profil: ProfilAdi, a: ErisilebilirlikAyarlari = ayarlar) =>
    (Object.keys(VARSAYILAN) as Array<keyof ErisilebilirlikAyarlari>).every(
      (k) => k === 'kompakt' || a[k] === ({ ...VARSAYILAN, ...PROFILLER[profil] })[k],
    );

  const sifirla = () => {
    if (sesVar) window.speechSynthesis.cancel();
    setOkuyor(false);
    setAyarlar((onceki) => ({ ...VARSAYILAN, kompakt: onceki.kompakt }));
  };

  function sesliOku() {
    if (!sesVar) return;
    const ses = window.speechSynthesis;
    if (okuyor) {
      ses.cancel();
      setOkuyor(false);
      return;
    }
    const secili = window.getSelection()?.toString().trim();
    const kaynak = secili || (document.getElementById('main-content') ?? document.querySelector('main'))?.innerText || '';
    const parcalar = parcala(kaynak);
    if (!parcalar.length) return;
    const dil = i18n.language.startsWith('en') ? 'en' : 'tr';
    const ses_ = ses.getVoices().find((v) => v.lang.toLowerCase().startsWith(dil));
    ses.cancel();
    parcalar.forEach((parca, sira) => {
      const s = new SpeechSynthesisUtterance(parca);
      s.lang = dil === 'en' ? 'en-US' : 'tr-TR';
      if (ses_) s.voice = ses_;
      if (sira === parcalar.length - 1) s.onend = () => setOkuyor(false);
      s.onerror = () => setOkuyor(false);
      ses.speak(s);
    });
    setOkuyor(true);
  }

  const etkin = etkinAracSayisi(ayarlar);

  return (
    <>
      {imlecY !== null && ayarlar.okumaKilavuzu && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 right-0 z-[60] h-3 -translate-y-1/2 border-y-2 border-teal-800 bg-amber-300/40"
          style={{ top: imlecY }}
        />
      )}
      {imlecY !== null && ayarlar.okumaMaskesi && (
        <>
          <div aria-hidden="true" className="pointer-events-none fixed left-0 right-0 top-0 z-[60] bg-slate-950/60" style={{ height: Math.max(imlecY - 56, 0) }} />
          <div aria-hidden="true" className="pointer-events-none fixed bottom-0 left-0 right-0 z-[60] bg-slate-950/60" style={{ top: imlecY + 56 }} />
        </>
      )}

      <button
        ref={sekmeRef}
        type="button"
        onClick={() => {
          if (tiklamayiYut.current) { tiklamayiYut.current = false; return; }
          setAcik((v) => !v);
        }}
        onPointerDown={tutmaBasla}
        onPointerMove={tutmaTasi}
        onPointerUp={tutmaBirak}
        onPointerCancel={tutmaBirak}
        onKeyDown={tusIleTasi}
        aria-expanded={acik}
        aria-controls="erisilebilirlik-paneli"
        aria-label={t('a11y.bar.open')}
        aria-keyshortcuts="Alt+ArrowUp Alt+ArrowDown"
        title={`${t('a11y.bar.open')}. ${t('a11y.bar.move')}`}
        // ⚠️ Kenara özgü konum, köşe, imleç ve geçiş satır içi: yeni Tailwind
        // sınıfı CSS bütçesini (check-production, 155 KiB) aşıyordu (29.10).
        style={{
          top: `${konum.y * 100}%`,
          touchAction: 'none',
          cursor: 'grab',
          transitionProperty: 'width, background-color, opacity',
          transitionDuration: '150ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          ...(konum.taraf === 'sol'
            ? { left: 0, borderRadius: '0 0.75rem 0.75rem 0' }
            : { right: 0, borderRadius: '0.75rem 0 0 0.75rem' }),
        }}
        className={`fixed z-[70] flex h-11 w-9 -translate-y-1/2 items-center justify-center bg-teal-700 text-white shadow-lg hover:w-11 hover:bg-teal-800 focus-visible:w-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${acik ? 'pointer-events-none opacity-0' : 'opacity-90 hover:opacity-100'}`}
      >
        <ErisilebilirlikSimgesi size={20} />
        {etkin > 0 && (
          <span
            style={konum.taraf === 'sol' ? { right: '-0.25rem' } : { left: '-0.25rem' }}
            className="absolute -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-black text-slate-900 dark:text-zinc-100"
          >
            {etkin}
          </span>
        )}
      </button>

      {acik && (
        <React.Suspense fallback={null}>
          <ErisilebilirlikPaneli
            panelRef={panelRef}
            taraf={konum.taraf}
            tarafDegistir={tarafDegistir}
            ayarlar={ayarlar}
            setAyarlar={setAyarlar}
            etkin={etkin}
            okuyor={okuyor}
            sesVar={sesVar}
            degistir={degistir}
            profilUygula={profilUygula}
            profilEtkin={profilEtkin}
            sifirla={sifirla}
            kapat={() => { setAcik(false); sekmeRef.current?.focus(); }}
          />
        </React.Suspense>
      )}
    </>
  );
};
