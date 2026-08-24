import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

import { analizOku, raporOku, degerlendirmeleriOku, type Analiz, type Rapor, type Degerlendirme } from './veri';
import { tarihYaz } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';

/**
 * RAPORLAR
 *
 * ⚠️ HER SAYININ YANINDA NE OLDUGU YAZIYOR. Rakam tek basina yoruma acik:
 * "Tamamlanma %75" iyi mi kotu mu, neyin yuzdesi? Klinikte calisan biri bunu
 * tahmin etmek zorunda kalmamali.
 *
 * ⚠️ Sunucu iki ayri fonksiyon veriyor: `clinic_analytics` randevu ve hasta
 * hareketi, `clinic_report` vitrin ve etkilesim. Ikisi tek ekranda ama AYRI
 * baslikta; kaynaklari farkli oldugu icin donemleri de farkli olabiliyor.
 */
export default function PanelRaporlar({ klinik }: { klinik: string }) {
  const [analiz, setAnaliz] = useState<Analiz | null>(null);
  const [rapor, setRapor] = useState<Rapor | null>(null);
  const [yorumlar, setYorumlar] = useState<Degerlendirme[]>([]);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState<string | null>(null);

  useEffect(() => {
    let iptal = false;
    setYukleniyor(true); setHata(null);
    Promise.all([analizOku(klinik), raporOku(klinik), degerlendirmeleriOku(klinik)])
      .then(([a, r, d]) => {
        if (iptal) return;
        setAnaliz(a[0] ?? null); setRapor(r[0] ?? null); setYorumlar(d);
      })
      .catch((e: { message?: string }) => { if (!iptal) setHata(e?.message ?? ''); })
      .finally(() => { if (!iptal) setYukleniyor(false); });
    return () => { iptal = true; };
  }, [klinik]);

  if (yukleniyor) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} />;

  const randevuSatirlari = [
    { ad: 'Toplam randevu', deger: analiz?.appt_total ?? 0, anlam: 'Bugüne kadar açılan tüm randevular.' },
    { ad: 'Onay bekleyen', deger: analiz?.appt_pending ?? 0, anlam: 'Sizin cevabınızı bekleyen talepler.' },
    { ad: 'Onaylanan', deger: analiz?.appt_confirmed ?? 0, anlam: 'Kesinleşmiş, günü gelmemiş randevular.' },
    { ad: 'Tamamlanan', deger: analiz?.appt_done ?? 0, anlam: 'Hayvanın gelip muayene olduğu randevular.' },
    { ad: 'İptal edilen', deger: analiz?.appt_cancelled ?? 0, anlam: 'Sonradan iptal edilenler.' },
    { ad: 'Kabul edilmeyen', deger: analiz?.appt_declined ?? 0, anlam: 'Geri çevirdiğiniz talepler.' },
  ];

  const vitrinSatirlari = [
    { ad: 'Sayfa görüntülenme', deger: rapor?.views_total ?? 0, anlam: 'Klinik sayfanızın toplam açılma sayısı.' },
    { ad: 'Takipçi', deger: rapor?.followers_total ?? 0, anlam: 'Kliniğinizi uygulamadan takip edenler.' },
    { ad: 'Müşteri', deger: rapor?.customers_total ?? 0, anlam: 'Kliniğinize bağlı hayvan sahipleri.' },
    { ad: 'Paylaşım', deger: rapor?.posts_total ?? 0, anlam: 'Uygulamada paylaştığınız gönderiler.' },
    { ad: 'Beğeni', deger: rapor?.likes_total ?? 0, anlam: 'Paylaşımlarınıza gelen beğeniler.' },
    { ad: 'Yorum', deger: rapor?.comments_total ?? 0, anlam: 'Paylaşımlarınıza gelen yorumlar.' },
  ];

  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        <div>
          <h2>Raporlar</h2>
          <p className="pnl-aciklama">
            Kliniğinizin randevu hareketi ve uygulamadaki görünürlüğü. Sayılar canlı,
            her sayfa açılışında yeniden hesaplanır.
          </p>
        </div>
      </header>

      <h3 className="pnl-alt-baslik">Randevular</h3>
      <div className="pnl-rapor-izgara">
        {randevuSatirlari.map((s) => (
          <div key={s.ad} className="pnl-rapor-kart">
            <span className="pnl-rapor-deger">{s.deger}</span>
            <span className="pnl-rapor-ad">{s.ad}</span>
            <span className="pnl-rapor-anlam">{s.anlam}</span>
          </div>
        ))}
      </div>

      {analiz && analiz.appt_total > 0 ? (
        <p className="pnl-ozet">
          Açılan her 100 randevunun <strong>{Math.round((analiz.completion_rate ?? 0) * 100) / 1}</strong> tanesi
          tamamlanmış. En çok verdiğiniz hizmet:{' '}
          <strong>{analiz.top_service || 'henüz belirgin değil'}</strong>
          {analiz.top_service_count ? ` (${analiz.top_service_count} randevu)` : ''}.
        </p>
      ) : null}

      <h3 className="pnl-alt-baslik">Klinik sayfanız</h3>
      <div className="pnl-rapor-izgara">
        {vitrinSatirlari.map((s) => (
          <div key={s.ad} className="pnl-rapor-kart">
            <span className="pnl-rapor-deger">{s.deger}</span>
            <span className="pnl-rapor-ad">{s.ad}</span>
            <span className="pnl-rapor-anlam">{s.anlam}</span>
          </div>
        ))}
      </div>

      <h3 className="pnl-alt-baslik">
        Değerlendirmeler
        {rapor?.rating_avg ? <span className="pnl-puan"><Star size={14} /> {rapor.rating_avg.toFixed(1)}</span> : null}
      </h3>
      {yorumlar.length === 0 ? (
        <Bos baslik="Henüz değerlendirme yok" aciklama="Müşterileriniz uygulamadan puan verdiğinde yorumlar burada görünür." />
      ) : (
        <ul className="pnl-yorum-listesi">
          {yorumlar.map((y) => (
            <li key={y.id} className="pnl-yorum">
              <div className="pnl-yorum-ust">
                <strong>{y.display_name || 'İsim girilmemiş'}</strong>
                <span className="pnl-puan"><Star size={13} /> {y.rating}</span>
                <span className="pnl-soluk">{tarihYaz(y.created_at, false)}</span>
              </div>
              {y.comment ? <p>{y.comment}</p> : <p className="pnl-soluk">Yorum yazılmamış, yalnızca puan verilmiş.</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
