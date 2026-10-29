import { useEffect, useRef } from 'react';
import { BotMessageSquare, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { yzBaglantilari, type YzAnahtari } from '../lib/blogPaylasim';
import { ChatGPT, Claude, Copilot, GoogleRenkli, Grok, Perplexity } from './MarkaIkonlari';
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
  google: GoogleRenkli,
  claude: Claude,
  copilot: Copilot,
  perplexity: Perplexity,
  grok: Grok,
};

export default function YzOzetle({ slug, baslik }: { slug: string; baslik: string }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDetailsElement>(null);

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
                onClick={() => { if (ref.current) ref.current.open = false; }}
              >
                <span className={`yz-ikon yz-ikon-${s.anahtar}`} aria-hidden="true"><Ikon boyut={20} /></span>
                {s.ad}
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
