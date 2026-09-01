import { useEffect, useState } from 'react';
import { Star, CalendarCheck, PawPrint, Eye, TrendingUp, Syringe} from 'lucide-react';

import { analizOku, raporOku, degerlendirmeleriOku, type Analiz, type Rapor, type Degerlendirme } from './veri';
import { tarihYaz } from './sozluk';
import { Halka, Cubuklar, OranHalkasi } from './Grafik';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';

/**
 * RAPORLAR
 *
 * ⚠️ GRAFIKLER EKLENDI (Ahmet, 25.08.2026: *"raporlara grafikler interaktif
 * infografik tarzı eklemeler yapabiliriz bu hali raporlar için web
 * gösteriminde sade olmuş"*). Veri degismedi, GOSTERIMI degisti: ayni sayilar
 * artik oran olarak da okunuyor.
 *
 * ⚠️ ZAMAN SERISI GRAFIGI YOK ve olamaz. Cizgi grafik icin "gun gun" veri
 * gerekiyor; sunucu yalnizca GUNCEL toplamlari tutuyor. Cizgi cizmek, olmayan
 * bir gecmisi uydurmak olurdu. Cizilen her sey elde olan sayilarin baska bir
 * gosterimi.
 *
 * ⚠️ Her grafigin yaninda SAYILI gosterge var: renk tek basina anlatmiyor.
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

  const randevuDilimleri = [
    { ad: 'Tamamlandı', deger: analiz?.appt_done ?? 0, renk: '#2F8F6B' },
    { ad: 'Onaylandı', deger: analiz?.appt_confirmed ?? 0, renk: '#0F6B57' },
    { ad: 'Bekliyor', deger: analiz?.appt_pending ?? 0, renk: '#D6A23D' },
    { ad: 'İptal', deger: analiz?.appt_cancelled ?? 0, renk: '#AAB7B1' },
    { ad: 'Kabul edilmedi', deger: analiz?.appt_declined ?? 0, renk: '#D95C5C' },
  ];

  /*
   * ⚠️ `completion_rate` sunucudan ORAN olarak geliyor (0-1 arasi) ama bazi
   * kurulumlarda yuzde gelebiliyor. 1'den buyukse zaten yuzdedir; kucukse
   * yuze cevriliyor. Tahmin degil, iki durumu da dogru okuyan bir kontrol.
   */
  const ham = analiz?.completion_rate ?? 0;
  const tamamlanma = ham > 1 ? ham : ham * 100;

  /* Puan dagilimi: 5'ten 1'e. */
  const puanlar = [5, 4, 3, 2, 1].map((p) => ({
    ad: `${p} yıldız`,
    deger: yorumlar.filter((y) => Math.round(y.rating) === p).length,
    renk: p >= 4 ? '#2F8F6B' : p === 3 ? '#D6A23D' : '#D95C5C',
  }));

  const etkilesim = [
    { ad: 'Sayfa görüntülenme', deger: rapor?.views_total ?? 0 },
    { ad: 'Gönderi görüntülenme', deger: rapor?.post_views_total ?? 0 },
    { ad: 'Beğeni', deger: rapor?.likes_total ?? 0 },
    { ad: 'Yorum', deger: rapor?.comments_total ?? 0 },
    { ad: 'Takipçi', deger: rapor?.followers_total ?? 0 },
  ];

  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        {/*
          ⚠️ BOLUM BASLIGI BURADA YOK, UST CUBUKTA. Once ikisi de yaziyordu ve
          ekranda ayni kelime iki kez goruluyordu ("Raporlar / Raporlar").
          Ust cubuk yapiskan, yani sayfa kaydiginca da gorunur duruyor; burada
          tekrarlamak hem yer yiyor hem ekran okuyucuya ayni basligi iki kez
          okutuyordu. Burada yalniz ACIKLAMA ve eylem dugmeleri kaliyor.
        */}
        <div>
          <p className="pnl-aciklama">
            Kliniğinizin randevu hareketi ve uygulamadaki görünürlüğü. Sayılar canlı; her sayfa
            açılışında yeniden hesaplanıyor.
          </p>
        </div>
      </header>

      <div className="pnl-kartlar">
        {[
          { ikon: CalendarCheck, ad: 'Toplam randevu', deger: analiz?.appt_total ?? 0, anlam: 'Bugüne kadar açılan', sinif: '' },
          { ikon: PawPrint, ad: 'Klinik defteri hastası', deger: analiz?.patients_total ?? 0, anlam: `${analiz?.patients_new ?? 0} tanesi yeni`, sinif: '' },
          /* ⚠️ `upcoming_due` esitleme denetiminde cikan TEK eksikti: mobil
             rapor ekrani bunu gosteriyordu, panel gostermiyordu. Ayni kaynaktan
             (`clinic_analytics`) geliyor, yeni sunucu isi yok. */
          { ikon: Syringe, ad: 'Yaklaşan aşı ve parazit', deger: analiz?.upcoming_due ?? 0, anlam: 'Zamanı gelmek üzere olan kayıt', sinif: 'pnl-kart-ikon-uyari' },
          { ikon: Eye, ad: 'Sayfa görüntülenme', deger: rapor?.views_total ?? 0, anlam: 'Klinik sayfanız kaç kez açıldı', sinif: 'pnl-kart-ikon-altin' },
          { ikon: Star, ad: 'Değerlendirme', deger: rapor?.reviews_total ?? 0, anlam: rapor?.rating_avg ? `Ortalama ${rapor.rating_avg.toFixed(1)}` : 'Henüz puan yok', sinif: 'pnl-kart-ikon-uyari' },
        ].map(({ ikon: Ikon, ad, deger, anlam, sinif }) => (
          <div key={ad} className="pnl-kart pnl-kart-durgun">
            <span className={`pnl-kart-ikon ${sinif}`} aria-hidden="true"><Ikon size={22} /></span>
            <span className="pnl-kart-govde">
              <span className="pnl-kart-ad">{ad}</span>
              <span className="pnl-kart-deger">{deger}</span>
              <span className="pnl-kart-anlam">{anlam}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="pnl-izgara-ust">
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><CalendarCheck size={17} /></span>
            <h3>Randevuların dağılımı</h3>
          </header>
          <div className="pnl-widget-govde">
            <Halka dilimler={randevuDilimleri} toplamEtiket="randevu" />
          </div>
        </section>

        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><TrendingUp size={17} /></span>
            <h3>Tamamlanma</h3>
          </header>
          <div className="pnl-widget-govde">
            <OranHalkasi
              oran={tamamlanma}
              etiket="tamamlandı"
              alt={
                (analiz?.appt_total ?? 0) > 0
                  ? `Açılan ${analiz?.appt_total} randevunun ${analiz?.appt_done} tanesi tamamlandı.`
                  : 'Randevu biriktikçe oran anlamlı olur.'
              }
            />
          </div>
        </section>
      </div>

      <div className="pnl-izgara-ikili">
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><Eye size={17} /></span>
            <h3>Görünürlük ve etkileşim</h3>
          </header>
          <div className="pnl-widget-govde">
            <Cubuklar satirlar={etkilesim} />
            {analiz?.top_service ? (
              <p className="pnl-widget-not">
                En çok verdiğiniz hizmet: <strong>{analiz.top_service}</strong>
                {analiz.top_service_count ? ` (${analiz.top_service_count} randevu)` : ''}.
              </p>
            ) : null}
          </div>
        </section>

        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><Star size={17} /></span>
            <h3>Puan dağılımı</h3>
            {rapor?.rating_avg ? <span className="pnl-puan"><Star size={13} /> {rapor.rating_avg.toFixed(1)}</span> : null}
          </header>
          <div className="pnl-widget-govde">
            <Cubuklar satirlar={puanlar} />
          </div>
        </section>
      </div>

      <h3 className="pnl-alt-baslik">Son yorumlar</h3>
      {yorumlar.length === 0 ? (
        <Bos baslik="Henüz değerlendirme yok" aciklama="Müşterileriniz uygulamadan puan verdiğinde yorumlar burada görünür." />
      ) : (
        <ul className="pnl-yorum-listesi">
          {yorumlar.slice(0, 5).map((y) => (
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
