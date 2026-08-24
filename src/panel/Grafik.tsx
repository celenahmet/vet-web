import { useId, useState } from 'react';

/**
 * GRAFIKLER — saf SVG, kutuphane yok
 *
 * ⚠️ NEDEN KUTUPHANE YOK: (1) panelin guvenlik basligi dis kaynak yuklemeyi
 * zaten engelliyor, (2) bir grafik kutuphanesi panel paketine yuz kilobaytlarca
 * ekliyor ve burada cizilen sey birkac daire dilimi ile birkac cubuk. Ihtiyac
 * kadarini yazmak, ihtiyacin on katini indirmekten ucuz.
 *
 * ⚠️ GRAFIK SUS DEGIL: her parca ERISILEBILIR. Dilimler ve cubuklar odak
 * alabiliyor, `aria-label` ile deger okunuyor, uzerine gelince deger
 * gorunuyor. Yalnizca renkle anlatilan bir grafik, renk ayirt edemeyen ya da
 * ekran okuyucu kullanan biri icin bos bir kutudur; bu yuzden her grafigin
 * altinda SAYILI bir gosterge de var.
 *
 * ⚠️ SIFIR DURUMU AYRI: butun degerler sifirken daire cizmek, "veri var ama
 * hepsi esit" izlenimi veriyor. Sifirda grafik yerine cumle yaziliyor.
 */

export type Dilim = { ad: string; deger: number; renk: string };

/** Daire uzerindeki bir noktanin koordinati. */
function nokta(cx: number, cy: number, r: number, aci: number) {
  const rad = ((aci - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/**
 * HALKA GRAFIK
 *
 * ⚠️ Pasta degil HALKA: ortasi bos oldugu icin toplam sayi oraya yaziliyor ve
 * grafik tek basina bir cumle kuruyor ("12 randevunun dagilimi").
 */
export function Halka({ dilimler, toplamEtiket }: { dilimler: Dilim[]; toplamEtiket: string }) {
  const [uzerinde, setUzerinde] = useState<number | null>(null);
  const kimlik = useId();
  const toplam = dilimler.reduce((t, d) => t + d.deger, 0);

  if (toplam === 0) {
    return <p className="pnl-grafik-bos">Henüz veri yok; kayıt biriktikçe dağılım burada görünür.</p>;
  }

  const R = 62, r = 42, cx = 70, cy = 70;
  let baslangic = 0;

  return (
    <div className="pnl-grafik">
      {/*
        ⚠️ DILIMLER ODAK ALMIYOR, etkilesim asagidaki GERCEK DUGMELERDE.
        Grafik `role="img"` ve tam bir `aria-label` tasiyor; dilimler
        `aria-hidden`.
        Sebep: `tabIndex` verilmis bir SVG `<path>` tarayicilar ve ekran
        okuyucular arasinda tutarsiz davraniyor. `<button>` her yerde ayni:
        sekmeyle gidiliyor, odak halkasi ciziliyor, rolu belirsiz degil.
        Gercek Tab tusuyla denendi: odak gosterge dugmesine giriyor ve halkanin
        ortasindaki sayi degisiyor.

        ⚠️ ONCEKI YORUM YANLISTI ve olcum aracindan kaynaklandi: "SVG path odak
        olayi uretmiyor" yazmistim. Sonra ayni sey DUZ BIR HTML DUGMESIYLE
        denendi ve o da olay uretmedi — cunku programatik `.focus()` basli
        basina odak olayi tetiklemiyor. Sorun SVG'de degil TESTTEYDI. Gercek
        tus olayiyla olculunce ikisi de calisiyor. Ders: sifir sonuc gorunce
        once aleti sorgula.
      */}
      <svg viewBox="0 0 140 140" className="pnl-halka" role="img"
        aria-label={`${toplamEtiket} dağılımı: ${dilimler.filter((d) => d.deger > 0).map((d) => `${d.ad} ${d.deger}, yüzde ${Math.round((d.deger / toplam) * 100)}`).join('; ')}. Toplam ${toplam}.`}>
        {dilimler.filter((d) => d.deger > 0).map((d, i) => {
          const pay = d.deger / toplam;
          const bitis = baslangic + pay * 360;
          const buyukYay = pay > 0.5 ? 1 : 0;
          const d1 = nokta(cx, cy, R, baslangic), d2 = nokta(cx, cy, R, bitis);
          const i1 = nokta(cx, cy, r, bitis), i2 = nokta(cx, cy, r, baslangic);
          /*
           * ⚠️ Tek dilim %100 ise yay ciziminde baslangic ve bitis AYNI noktaya
           * dusuyor ve dilim hic gorunmuyor. O durumda tam halka ciziliyor.
           */
          const tamHalka = pay >= 0.999;
          const yol = tamHalka
            ? `M ${cx - R} ${cy} A ${R} ${R} 0 1 1 ${cx + R} ${cy} A ${R} ${R} 0 1 1 ${cx - R} ${cy} M ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy}`
            : `M ${d1.x} ${d1.y} A ${R} ${R} 0 ${buyukYay} 1 ${d2.x} ${d2.y} L ${i1.x} ${i1.y} A ${r} ${r} 0 ${buyukYay} 0 ${i2.x} ${i2.y} Z`;
          baslangic = bitis;
          return (
            <path
              key={d.ad}
              d={yol}
              fill={d.renk}
              fillRule="evenodd"
              className={uzerinde === i ? 'pnl-dilim pnl-dilim-etkin' : 'pnl-dilim'}
              aria-hidden="true"
              onMouseEnter={() => setUzerinde(i)}
              onMouseLeave={() => setUzerinde(null)}
            />
          );
        })}
        <text x={cx} y={cy - 4} textAnchor="middle" className="pnl-halka-sayi">
          {uzerinde !== null ? dilimler.filter((d) => d.deger > 0)[uzerinde]?.deger : toplam}
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" className="pnl-halka-etiket">
          {uzerinde !== null ? dilimler.filter((d) => d.deger > 0)[uzerinde]?.ad : toplamEtiket}
        </text>
      </svg>

      {/*
        ⚠️ GOSTERGE SUS DEGIL, ETKILESIMIN KENDISI. Her satir gercek bir
        `<button>`: klavyeyle sekmeyle gezilebiliyor, odaklaninca ilgili dilim
        vurgulaniyor ve halkanin ortasindaki sayi degisiyor. Sayilar da
        yaziyor, yani renk ayirt edemeyen biri icin de eksiksiz.
      */}
      <ul className="pnl-gosterge">
        {dilimler.filter((d) => d.deger > 0).map((d, i) => (
          <li key={d.ad}>
            <button
              type="button"
              className={uzerinde === i ? 'pnl-gosterge-oge pnl-gosterge-etkin' : 'pnl-gosterge-oge'}
              aria-label={`${d.ad}: ${d.deger}, yüzde ${Math.round((d.deger / toplam) * 100)}`}
              onMouseEnter={() => setUzerinde(i)}
              onMouseLeave={() => setUzerinde(null)}
              onFocus={() => setUzerinde(i)}
              onBlur={() => setUzerinde(null)}>
              <span className="pnl-gosterge-renk" style={{ background: d.renk }} aria-hidden="true" />
              <span className="pnl-gosterge-ad">{d.ad}</span>
              <span className="pnl-gosterge-deger">{d.deger}</span>
              <span className="pnl-gosterge-yuzde">%{Math.round((d.deger / toplam) * 100)}</span>
            </button>
          </li>
        ))}
      </ul>
      <span id={kimlik} className="pnl-gizli" />
    </div>
  );
}

/**
 * YATAY CUBUK
 *
 * ⚠️ Cubuklar en buyuge gore olcekleniyor, toplama gore DEGIL: amac paylari
 * degil buyuklukleri karsilastirmak. Toplama gore olceklense kucuk degerler
 * gorunmez cizgi olurdu.
 */
export function Cubuklar({ satirlar }: { satirlar: { ad: string; deger: number; renk?: string }[] }) {
  const enBuyuk = Math.max(1, ...satirlar.map((s) => s.deger));
  const hepsiSifir = satirlar.every((s) => s.deger === 0);

  if (hepsiSifir) {
    return <p className="pnl-grafik-bos">Henüz sayı birikmemiş.</p>;
  }

  return (
    <ul className="pnl-cubuklar">
      {satirlar.map((s) => (
        <li key={s.ad} className="pnl-cubuk-satir">
          <span className="pnl-cubuk-ad">{s.ad}</span>
          <span className="pnl-cubuk-yol">
            <span
              className="pnl-cubuk-dolgu"
              style={{ width: `${(s.deger / enBuyuk) * 100}%`, background: s.renk ?? 'var(--pnl-vurgu)' }}
              role="img"
              aria-label={`${s.ad}: ${s.deger}`}
            />
          </span>
          <span className="pnl-cubuk-deger">{s.deger}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * ORAN HALKASI — tek bir yuzde.
 *
 * ⚠️ Yuzde METIN olarak da yaziliyor. Yay uzunlugundan yuzde okumak, gozle
 * tahmin etmek demek; sayi ortada duruyor.
 */
export function OranHalkasi({ oran, etiket, alt }: { oran: number; etiket: string; alt?: string }) {
  const yuzde = Math.max(0, Math.min(100, Math.round(oran)));
  const R = 52, cevre = 2 * Math.PI * R;
  return (
    <div className="pnl-oran">
      <svg viewBox="0 0 130 130" className="pnl-oran-svg" role="img" aria-label={`${etiket}: yüzde ${yuzde}`}>
        <circle cx="65" cy="65" r={R} className="pnl-oran-zemin" />
        <circle
          cx="65" cy="65" r={R}
          className="pnl-oran-dolgu"
          strokeDasharray={`${(yuzde / 100) * cevre} ${cevre}`}
          transform="rotate(-90 65 65)"
        />
        <text x="65" y="62" textAnchor="middle" className="pnl-oran-sayi">%{yuzde}</text>
        <text x="65" y="80" textAnchor="middle" className="pnl-oran-etiket">{etiket}</text>
      </svg>
      {alt ? <p className="pnl-oran-alt">{alt}</p> : null}
    </div>
  );
}
