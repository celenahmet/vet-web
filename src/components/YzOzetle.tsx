import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { BotMessageSquare, Check, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ozetIstemi, yzBaglantilari, type YzAnahtari } from '../lib/blogPaylasim';
import { ChatGPT, Claude, Copilot, DeepSeek, GeminiRenkli, GoogleRenkli, Grok, Kimi, Perplexity } from './MarkaIkonlari';
import './YzOzetle.css';

/**
 * "AI ILE OZETLE" DUGMESI (İSTEK: Ahmet, 29.10.2026; referans ShiftDelete.net).
 *
 * ⚠️ `<details>` BILEREK. JS calismadan da acilip kapaniyor ve ayni isaretleme
 * `scripts/prerender.mjs` tarafindan da uretiliyor; React baglaninca dugme
 * yerinden oynamiyor. JS yalniz disari tiklayinca ve Esc ile kapatmak icin.
 *
 * ⚠️ PARILTI/YILDIZ SIMGESI YOK. Referanstaki sihirli degnek proje ilkesine
 * aykiri (yildiz ve parilti simgesi kullanilmaz); "yapay zekaya sor" anlamini
 * sohbet balonlu bot simgesi tasiyor.
 */
const IKONLAR: Record<YzAnahtari, (p: { boyut?: number }) => React.JSX.Element> = {
  chatgpt: ChatGPT,
  claude: Claude,
  google: GoogleRenkli,
  gemini: GeminiRenkli,
  copilot: Copilot,
  perplexity: Perplexity,
  grok: Grok,
  deepseek: DeepSeek,
  kimi: Kimi,
};

export default function YzOzetle({ slug, baslik }: { slug: string; baslik: string }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDetailsElement>(null);
  // Gemini'ye tiklayinca istem panoya kopyalaniyor ve ekranin altinda bildirim cikiyor
  // (Ahmet 30.10: "sagdaki ikon gereksiz, tiklayinca kopyalandi diyelim").
  // ⚠️ Gemini YENI SEKMEDE aciliyor; sekme arka plana gectiyse bildirim bekler, okur
  // donunce 4 sn gorunur. Menu kapaninca ici gizlendigi icin bildirim disarida (portal).
  // Panoya kopyalanan aracin adi (Gemini, DeepSeek); null = bildirim yok.
  const [kopyalandi, setKopyalandi] = useState<string | null>(null);
  const zaman = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(zaman.current), []);
  function bildir(ad: string) {
    window.clearTimeout(zaman.current);
    setKopyalandi(ad);
    const kapat = () => { zaman.current = window.setTimeout(() => setKopyalandi(null), 4000); };
    window.setTimeout(() => {
      if (document.visibilityState === 'visible') { kapat(); return; }
      const don = () => {
        if (document.visibilityState !== 'visible') return;
        document.removeEventListener('visibilitychange', don);
        kapat();
      };
      document.addEventListener('visibilitychange', don);
    }, 500);
  }

  useEffect(() => {
    const disariTik = (e: MouseEvent) => {
      const d = ref.current;
      if (d?.open && !d.contains(e.target as Node)) d.open = false;
    };
    const tus = (e: KeyboardEvent) => {
      const d = ref.current;
      if (e.key === 'Escape' && d?.open) {
        d.open = false;
        d.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('click', disariTik);
    document.addEventListener('keydown', tus);
    return () => {
      document.removeEventListener('click', disariTik);
      document.removeEventListener('keydown', tus);
    };
  }, []);

  // Baska yaziya gecilince menu acik kalmasin.
  useEffect(() => { if (ref.current) ref.current.open = false; }, [slug]);

  return (
    <details className="yz-ozet" ref={ref}>
      <summary>
        <span className="yz-simge" aria-hidden="true"><BotMessageSquare size={18} /></span>
        <span>{t('post_ai_summary')}</span>
        <span className="yz-ok" aria-hidden="true"><ChevronDown size={16} /></span>
      </summary>
      <ul className="yz-menu" aria-label={t('post_ai_menu')}>
        {yzBaglantilari(slug, baslik).map((s) => {
          const Ikon = IKONLAR[s.anahtar];
          return (
            <li key={s.anahtar}>
              <a
                href={s.adres}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  // Gemini: baglanti istemi tasimazsa okur panodan yapistirsin.
                  if (s.kopyala) {
                    void navigator.clipboard?.writeText(ozetIstemi(slug, baslik)).then(() => bildir(s.ad), () => {});
                  }
                  if (ref.current) ref.current.open = false;
                }}
              >
                <span className={`yz-ikon yz-ikon-${s.anahtar}`} aria-hidden="true"><Ikon boyut={20} /></span>
                <span>{s.ad}</span>
              </a>
            </li>
          );
        })}
      </ul>
      {kopyalandi
        ? createPortal(
            <span className="yz-bildirim" role="status">
              <Check size={16} aria-hidden="true" /> {t('post_ai_copied', { ad: kopyalandi })}
            </span>,
            document.body,
          )
        : null}
    </details>
  );
}
