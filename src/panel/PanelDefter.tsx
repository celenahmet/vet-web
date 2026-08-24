import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

import { defterOzetiOku, defterKalemleriOku, type DefterOzeti, type DefterKalemi } from './veri';
import { paraYaz } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';

/**
 * GELIR / GIDER (İSTEK: Ahmet, 24.08.2026 — *"gelir gider taraflari yok onlari
 * da ekleyelim sol menuye"*)
 *
 * ⚠️ SUNUCU HAZIRDI. `clinic_ledger_summary` ve `clinic_ledger_by_category`
 * migration 0096'dan beri var; panelde yoktu, o kadar.
 *
 * ⚠️ DEFTER EKIP DISINA KAPALI ve bu kontrol SUNUCUDA: sorgunun `where` sartinda
 * `is_clinic_member(p_clinic)` var. Burada ek bir gizleme yapilmiyor.
 *
 * ⚠️ TUTARLAR KURUS OLARAK GELIYOR, ekranda 100'e bolunuyor. Veride bolunmuyor.
 *
 * ⚠️ Bu ekran YALNIZ GOSTERIYOR. Kayit ekleme telefonda; para girisi yanlis
 * yazildiginda geri almak zor ve web tarafinda henuz onay akisi yok.
 */
export default function PanelDefter({ klinik }: { klinik: string }) {
  const [ozet, setOzet] = useState<DefterOzeti | null>(null);
  const [kalemler, setKalemler] = useState<DefterKalemi[]>([]);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState<string | null>(null);

  useEffect(() => {
    let iptal = false;
    setYukleniyor(true); setHata(null);
    Promise.all([defterOzetiOku(klinik), defterKalemleriOku(klinik)])
      .then(([o, k]) => { if (iptal) return; setOzet(o[0] ?? null); setKalemler(k); })
      .catch((e: { message?: string }) => { if (!iptal) setHata(e?.message ?? ''); })
      .finally(() => { if (!iptal) setYukleniyor(false); });
    return () => { iptal = true; };
  }, [klinik]);

  if (yukleniyor) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} />;

  const gelirler = kalemler.filter((k) => k.kind === 'income').sort((a, b) => b.total - a.total);
  const giderler = kalemler.filter((k) => k.kind === 'expense').sort((a, b) => b.total - a.total);
  const bakiye = ozet?.balance ?? 0;

  return (
    <>
      <div className="pnl-kartlar">
        <div className="pnl-kart pnl-kart-durgun">
          <span className="pnl-kart-ikon" aria-hidden="true"><TrendingUp size={21} /></span>
          <span className="pnl-kart-govde">
            <span className="pnl-kart-ad">Gelir</span>
            <span className="pnl-kart-deger">{paraYaz(ozet?.income)}</span>
            <span className="pnl-kart-anlam">Kaydedilen tüm gelirler</span>
          </span>
        </div>
        <div className="pnl-kart pnl-kart-durgun">
          <span className="pnl-kart-ikon pnl-kart-ikon-uyari" aria-hidden="true"><TrendingDown size={21} /></span>
          <span className="pnl-kart-govde">
            <span className="pnl-kart-ad">Gider</span>
            <span className="pnl-kart-deger">{paraYaz(ozet?.expense)}</span>
            <span className="pnl-kart-anlam">Kaydedilen tüm giderler</span>
          </span>
        </div>
        <div className="pnl-kart pnl-kart-durgun">
          <span className="pnl-kart-ikon pnl-kart-ikon-altin" aria-hidden="true"><Wallet size={21} /></span>
          <span className="pnl-kart-govde">
            <span className="pnl-kart-ad">Kalan</span>
            <span className={bakiye < 0 ? 'pnl-kart-deger pnl-eksi' : 'pnl-kart-deger'}>{paraYaz(bakiye)}</span>
            <span className="pnl-kart-anlam">
              {bakiye < 0 ? 'Giderler gelirlerden fazla' : 'Gelirden giderler düşülmüş hâli'}
            </span>
          </span>
        </div>
        <div className="pnl-kart pnl-kart-durgun">
          <span className="pnl-kart-ikon" aria-hidden="true"><Wallet size={21} /></span>
          <span className="pnl-kart-govde">
            <span className="pnl-kart-ad">Kayıt</span>
            <span className="pnl-kart-deger">{ozet?.tx_count ?? 0}</span>
            <span className="pnl-kart-anlam">Deftere girilen toplam işlem</span>
          </span>
        </div>
      </div>

      <div className="pnl-pano-izgara">
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><TrendingUp size={17} /></span>
            <h3>Gelir kalemleri</h3>
          </header>
          <div className="pnl-widget-govde">
            {gelirler.length === 0 ? (
              <p className="pnl-widget-bos">Henüz gelir kaydı yok. Kayıtlar uygulamadan giriliyor.</p>
            ) : (
              <ul className="pnl-satirlar">
                {gelirler.map((g) => (
                  <li key={g.category} className="pnl-satir">
                    <div className="pnl-satir-govde">
                      <p className="pnl-satir-ad">{g.category}</p>
                      <p className="pnl-satir-alt">{g.tx_count} kayıt</p>
                    </div>
                    <span className="pnl-tutar pnl-arti">{paraYaz(g.total)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><TrendingDown size={17} /></span>
            <h3>Gider kalemleri</h3>
          </header>
          <div className="pnl-widget-govde">
            {giderler.length === 0 ? (
              <p className="pnl-widget-bos">Henüz gider kaydı yok. Kayıtlar uygulamadan giriliyor.</p>
            ) : (
              <ul className="pnl-satirlar">
                {giderler.map((g) => (
                  <li key={g.category} className="pnl-satir">
                    <div className="pnl-satir-govde">
                      <p className="pnl-satir-ad">{g.category}</p>
                      <p className="pnl-satir-alt">{g.tx_count} kayıt</p>
                    </div>
                    <span className="pnl-tutar pnl-eksi">{paraYaz(g.total)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>

      {kalemler.length === 0 && (ozet?.tx_count ?? 0) === 0 ? (
        <Bos
          baslik="Defter henüz boş"
          aciklama="Gelir ve gider kayıtlarınızı uygulamadan girdiğinizde özet burada görünür."
        />
      ) : null}

      <p className="pnl-dipnot">
        <Wallet size={14} aria-hidden="true" />
        Yeni gelir ve gider kaydı şimdilik telefondaki uygulamadan giriliyor. Bu ekran defteri
        yalnızca gösteriyor.
      </p>
    </>
  );
}
