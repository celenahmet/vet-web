import type { ReactNode } from 'react';
import type { LegalBlock } from '../../data/legal';

/**
 * Blokları React düğümüne çevirir.
 *
 * ⚠️ `dangerouslySetInnerHTML` KULLANILMIYOR. Hukuki metinler zamanla ve çoğu zaman
 * aceleyle düzenlenir; ham HTML basılsaydı her düzenleme bir XSS yüzeyi olurdu ve
 * yanlışlıkla yapıştırılan tek bir etiket sayfayı bozardı. Metin içinde yalnız iki
 * işaret tanınıyor, gerisi düz metin olarak basılıyor.
 */

/** `**kalın**` ve `` `kod` `` işaretlerini düğüme çevirir. Tanınmayan her şey düz metin. */
export function inlineMetin(value: string): ReactNode[] {
  const parcalar: ReactNode[] = [];
  const desen = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let son = 0;
  let eslesme: RegExpExecArray | null;
  let sayac = 0;

  while ((eslesme = desen.exec(value)) !== null) {
    if (eslesme.index > son) parcalar.push(value.slice(son, eslesme.index));
    const bulunan = eslesme[0];
    if (bulunan.startsWith('**')) {
      parcalar.push(<strong key={`b${sayac++}`}>{bulunan.slice(2, -2)}</strong>);
    } else {
      parcalar.push(<code key={`c${sayac++}`}>{bulunan.slice(1, -1)}</code>);
    }
    son = eslesme.index + bulunan.length;
  }
  if (son < value.length) parcalar.push(value.slice(son));
  return parcalar;
}

export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case 'text':
            return <p key={i}>{inlineMetin(block.value)}</p>;

          case 'list':
            return (
              <ul key={i} className="legal-list">
                {block.items.map((item, j) => (
                  <li key={j}>{inlineMetin(item)}</li>
                ))}
              </ul>
            );

          case 'steps':
            return (
              <ol key={i} className="legal-steps">
                {block.items.map((item, j) => (
                  <li key={j}>{inlineMetin(item)}</li>
                ))}
              </ol>
            );

          case 'callout':
            return (
              <aside key={i} className="legal-callout">
                {inlineMetin(block.value)}
              </aside>
            );

          case 'table':
            return (
              /* ⚠️ Tablo kendi kabında yatay kayıyor: dar ekranda sayfanın tamamını
                 yana kaydırmak yerine yalnız tablo kayar. Aksi hâlde gövde metni de
                 ekrandan taşardı. */
              <div key={i} className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      {block.columns.map((col, j) => (
                        <th key={j}>{inlineMetin(col)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>{inlineMetin(cell)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
