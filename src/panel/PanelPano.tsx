import { useEffect, useState } from 'react';
import { CalendarClock, Users, Megaphone, ShieldCheck, AlertTriangle } from 'lucide-react';

import { istemci } from './istemci';
import type { KlinikUyeligi } from './oturum';

type Pano = {
  follower_count: number;
  customer_count: number;
  announcement_count: number;
  service_count: number;
  is_verified: boolean;
  missing_fields: string[];
};

type Randevu = {
  id: string;
  pet_name: string;
  owner_name: string;
  starts_at: string | null;
  proposed_at: string | null;
  status: string;
  service_name: string;
};

const DURUM_ADI: Record<string, string> = {
  requested: 'Talep edildi',
  proposed: 'Teklif verildi',
  confirmed: 'Onaylandı',
  completed: 'Tamamlandı',
  cancelled: 'İptal',
  declined: 'Reddedildi',
};

function tarihYaz(iso: string | null): string {
  if (!iso) return 'Tarih yok';
  const t = new Date(iso);
  return t.toLocaleString('tr-TR', { day: '2-digit', month: 'long', hour: '2-digit', minute: '2-digit' });
}

/**
 * KLINIK PANOSU
 *
 * ⚠️ VERI SUNUCUDAN, YETKI DE SUNUCUDAN. `clinic_dashboard` govdesinde
 * `is_clinic_member()` kontrolu var; uye olmayan cagriya 400 donuyor. Bu ekran
 * o hatayi gizlemiyor, kullaniciya soyluyor: sessizce bos pano gostermek,
 * "veri yok" ile "yetkin yok"u ayni gostermek olurdu.
 *
 * ⚠️ `appointment_list` `security invoker`, yani gorunen satirlari RLS
 * belirliyor. Istemci tarafinda ek bir suzme YAPILMIYOR; yapilsaydi guvenlik
 * sanilan ama olmayan bir katman eklenmis olurdu.
 */
export default function PanelPano({ klinik }: { klinik: KlinikUyeligi }) {
  const [pano, setPano] = useState<Pano | null>(null);
  const [randevular, setRandevular] = useState<Randevu[]>([]);
  const [hata, setHata] = useState<string | null>(null);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    let iptal = false;
    setYukleniyor(true);
    setHata(null);

    Promise.all([
      istemci.rpc('clinic_dashboard', { p_clinic: klinik.clinic_id }),
      istemci.rpc('appointment_list', { p_clinic: klinik.clinic_id }),
    ])
      .then(([panoCevap, randevuCevap]) => {
        if (iptal) return;
        if (panoCevap.error) throw panoCevap.error;
        if (randevuCevap.error) throw randevuCevap.error;
        setPano((panoCevap.data as Pano[] | null)?.[0] ?? null);
        setRandevular(((randevuCevap.data as Randevu[] | null) ?? []).slice(0, 8));
      })
      .catch((e: { message?: string }) => {
        if (!iptal) setHata(e?.message ?? 'Veri alınamadı.');
      })
      .finally(() => { if (!iptal) setYukleniyor(false); });

    return () => { iptal = true; };
  }, [klinik.clinic_id]);

  if (yukleniyor) return <div className="panel-yukleniyor" role="status" aria-label="Yükleniyor" />;

  if (hata) {
    return (
      <div className="panel-kutu panel-kutu-hata">
        <AlertTriangle size={22} />
        <h2>Veri alınamadı</h2>
        <p>{hata}</p>
        <p className="panel-not">Bu klinik için yetkiniz yoksa sunucu erişimi reddeder. Yanlış klinik seçili olabilir.</p>
      </div>
    );
  }

  const kartlar = [
    { ikon: Users, ad: 'Müşteri', deger: pano?.customer_count ?? 0 },
    { ikon: Megaphone, ad: 'Duyuru', deger: pano?.announcement_count ?? 0 },
    { ikon: ShieldCheck, ad: 'Hizmet', deger: pano?.service_count ?? 0 },
    { ikon: CalendarClock, ad: 'Takipçi', deger: pano?.follower_count ?? 0 },
  ];

  return (
    <>
      <div className="panel-kartlar">
        {kartlar.map(({ ikon: Ikon, ad, deger }) => (
          <div key={ad} className="panel-kart">
            <Ikon size={20} />
            <span className="panel-kart-deger">{deger}</span>
            <span className="panel-kart-ad">{ad}</span>
          </div>
        ))}
      </div>

      {pano?.missing_fields?.length ? (
        <div className="panel-uyari">
          <AlertTriangle size={18} />
          <span>
            Klinik sayfanızda eksik alanlar var: {pano.missing_fields.join(', ')}.
            Eksik alanlar dizinde görünürlüğü düşürüyor.
          </span>
        </div>
      ) : null}

      <section className="panel-bolum">
        <h2>Randevular</h2>
        {randevular.length === 0 ? (
          <p className="panel-bos">Bu klinikte henüz randevu yok.</p>
        ) : (
          <table className="panel-tablo">
            <thead>
              <tr><th>Hayvan</th><th>Sahip</th><th>Hizmet</th><th>Zaman</th><th>Durum</th></tr>
            </thead>
            <tbody>
              {randevular.map((r) => (
                <tr key={r.id}>
                  <td>{r.pet_name || '—'}</td>
                  <td>{r.owner_name || '—'}</td>
                  <td>{r.service_name || '—'}</td>
                  <td>{tarihYaz(r.starts_at ?? r.proposed_at)}</td>
                  <td><span className={`panel-durum durum-${r.status}`}>{DURUM_ADI[r.status] ?? r.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
}
