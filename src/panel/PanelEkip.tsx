import { useEffect, useState } from 'react';
import { ShieldCheck, User } from 'lucide-react';

import { personeliOku, type Personel } from './veri';
import { ROL, tarihYaz } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';

/**
 * EKIP
 *
 * ⚠️ ROL HAM KOD OLARAK YAZILMIYOR (Ahmet, 24.08.2026: *"personelin listesi
 * felan neyse her sey cok aciklayici olmali"*). Ekranda `owner` / `staff`
 * gormek, klinikte calisan biri icin hicbir sey soylemez. Rolun adi da yetmiyor:
 * "Klinik sahibi" ile "Calisan" arasindaki farkin NE OLDUGU yaziyor, cunku
 * birini digerine cevirmenin sonucu var.
 *
 * ⚠️ Bu ekran yalniz GOSTERIYOR. Ekip ekleme ve cikarma (`clinic_invite_staff`,
 * `clinic_remove_staff`) sunucuda hazir ama panele bilerek baglanmadi: davet ve
 * cikarma geri alinmasi zor islemler, once onay akisi tasarlanmali.
 */
export default function PanelEkip({ klinik }: { klinik: string }) {
  const [liste, setListe] = useState<Personel[] | null>(null);
  const [hata, setHata] = useState<string | null>(null);

  useEffect(() => {
    setListe(null); setHata(null);
    personeliOku(klinik).then(setListe)
      .catch((e: { message?: string }) => { setListe([]); setHata(e?.message ?? ''); });
  }, [klinik]);

  if (liste === null) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} />;

  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        <div>
          <h2>Ekip</h2>
          <p className="pnl-aciklama">
            Bu klinikte çalışan kişiler. Yeni kişi ekleme ve çıkarma şimdilik yalnızca
            telefondaki uygulamadan yapılıyor.
          </p>
        </div>
      </header>

      {liste.length === 0 ? (
        <Bos baslik="Ekipte kimse görünmüyor" aciklama="Klinik sahibi uygulamadan çalışan davet ettiğinde burada listelenir." />
      ) : (
        <ul className="pnl-kisi-listesi">
          {liste.map((k) => {
            const rol = ROL[k.role];
            return (
              <li key={k.user_id} className="pnl-kisi">
                <span className="pnl-avatar" aria-hidden="true">
                  {k.role === 'owner' ? <ShieldCheck size={18} /> : <User size={18} />}
                </span>
                <div className="pnl-kisi-bilgi">
                  <p className="pnl-kisi-ad">
                    {k.display_name || 'İsim girilmemiş'}
                    {k.is_me ? <span className="pnl-etiket">siz</span> : null}
                  </p>
                  <p className="pnl-kisi-rol">{rol?.ad ?? k.role}</p>
                  <p className="pnl-kisi-anlam">{rol?.anlam ?? 'Bu rolün ne yapabildiği tanımlanmamış.'}</p>
                  {k.title ? <p className="pnl-kisi-ek">{k.title}</p> : null}
                  <p className="pnl-kisi-ek pnl-soluk">Ekibe katıldı: {tarihYaz(k.created_at, false)}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
