import { useEffect, useState } from 'react';
import {
  Users, Megaphone, Stethoscope, Heart, AlertTriangle, ArrowRight,
  CalendarClock, CalendarDays, Syringe, PawPrint, UsersRound, Inbox,
} from 'lucide-react';

import {
  panoOku, randevulariOku, hatirlatmalariOku, analizOku, personeliOku,
  type Pano, type Randevu, type Hatirlatma, type Analiz, type Personel,
} from './veri';
import { EKSIK_ALAN, RANDEVU_DURUMU, KAYIT_TURU, ROL, tarihYaz, saatYaz } from './sozluk';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import type { Bolum } from './bolumler';

/**
 * PANO — klinigin kontrol ekrani
 *
 * ⚠️ TASARIM TASLAGINDAN GELDI (Ahmet, 24.08.2026: *"boyle bi tasarim nasil
 * olur sence... ben bunu cok begendim"*). Gorsel dil birebir alindi: ikon kutulu
 * sayi kartlari, izgaraya yerlesen bolum kartlari, kart altinda "tumunu goruntule".
 *
 * ⚠️ TASLAKTAKI HER KUTU YAPILMADI ve bu bilerek. Yapilmayanlar ve sebepleri:
 *   · "▲%9 · dun: 11" trend oklari — sunucu GUNLUK GECMIS tutmuyor
 *   · randevu tablosunda "Veteriner" sutunu — `appointment_list` hekim dondurmuyor
 *   · "Devam Ediyor" durumu — boyle bir randevu durumu yok
 *   · hasta kilosu — hicbir RPC kilo dondurmuyor
 *   · mesajlar kutusu — klinik gelen kutusu dondurun bir RPC yok
 *   · bildirim zili rozeti — sayiyi verecek bir kaynak yok
 *   · doluluk orani grafigi — zaman serisi yok
 *   · "Pro'ya Yukselt" — 24.08.2026'da "fiyatlar full ucretsiz" karari alindi
 * Hepsi guzel gorunurdu; hicbirinin arkasinda sayi yoktu. Uydurma sayi gosteren
 * bir panel, yanlis karar verdiren bir paneldir.
 */
export default function PanelPano({ klinik, git }: { klinik: string; git: (b: Bolum) => void }) {
  const [pano, setPano] = useState<Pano | null>(null);
  const [randevular, setRandevular] = useState<Randevu[]>([]);
  const [hatirlatmalar, setHatirlatmalar] = useState<Hatirlatma[]>([]);
  const [analiz, setAnaliz] = useState<Analiz | null>(null);
  const [ekip, setEkip] = useState<Personel[]>([]);
  const [hata, setHata] = useState<string | null>(null);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    let iptal = false;
    setYukleniyor(true); setHata(null);

    Promise.all([
      panoOku(klinik), randevulariOku(klinik), hatirlatmalariOku(klinik),
      analizOku(klinik), personeliOku(klinik),
    ])
      .then(([p, r, h, a, e]) => {
        if (iptal) return;
        setPano(p[0] ?? null); setRandevular(r); setHatirlatmalar(h);
        setAnaliz(a[0] ?? null); setEkip(e);
      })
      .catch((e: { message?: string }) => { if (!iptal) setHata(e?.message ?? ''); })
      .finally(() => { if (!iptal) setYukleniyor(false); });

    return () => { iptal = true; };
  }, [klinik]);

  if (yukleniyor) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} />;

  const bekleyen = randevular.filter((r) => r.status === 'requested').length;

  /*
   * ⚠️ "Yaklasan" = GELECEKTEKI onayli randevular. Gecmisteki bir randevuyu
   * yaklasan diye gostermek, panoyu sessizce yanlis bir sey soyleyen ekran
   * yapardi; bos olmak yanlis olmaktan iyidir.
   */
  const simdi = Date.now();
  const yaklasan = randevular
    .filter((r) => r.status === 'confirmed' || r.status === 'requested')
    .map((r) => ({ r, t: new Date(r.starts_at ?? r.proposed_at ?? '').getTime() }))
    .filter((x) => Number.isFinite(x.t) && x.t >= simdi)
    .sort((a, b) => a.t - b.t);

  const bugun = new Date().toDateString();
  const bugunkuler = yaklasan.filter((x) => new Date(x.t).toDateString() === bugun);

  const kartlar = [
    {
      ikon: CalendarDays, sinif: '', ad: 'Yaklaşan randevu', deger: yaklasan.length,
      anlam: 'Bugün ve sonrası için planlı', hedef: 'randevular' as Bolum,
    },
    {
      ikon: Inbox, sinif: 'pnl-kart-ikon-uyari', ad: 'Bekleyen talep', deger: bekleyen,
      anlam: 'Onayınızı bekliyor', hedef: 'randevular' as Bolum,
    },
    {
      ikon: PawPrint, sinif: '', ad: 'Kayıtlı hasta', deger: analiz?.patients_total ?? 0,
      anlam: 'Kliniğinize bağlı hayvanlar', hedef: 'hastalar' as Bolum,
    },
    {
      ikon: Syringe, sinif: 'pnl-kart-ikon-altin', ad: 'Yaklaşan hatırlatma', deger: hatirlatmalar.length,
      anlam: 'Aşı ve parazit zamanı gelenler', hedef: 'hastalar' as Bolum,
    },
  ];

  const eksikler = (pano?.missing_fields ?? []).map((a) => EKSIK_ALAN[a] ?? a);

  return (
    <>
      <div className="pnl-kartlar">
        {kartlar.map(({ ikon: Ikon, sinif, ad, deger, anlam, hedef }) => (
          <button key={ad} type="button" className="pnl-kart" onClick={() => git(hedef)}>
            <span className={`pnl-kart-ikon ${sinif}`} aria-hidden="true"><Ikon size={21} /></span>
            <span className="pnl-kart-govde">
              <span className="pnl-kart-ad">{ad}</span>
              <span className="pnl-kart-deger">{deger}</span>
              <span className="pnl-kart-anlam">{anlam}</span>
            </span>
          </button>
        ))}
      </div>

      {eksikler.length ? (
        <div className="pnl-uyari">
          <AlertTriangle size={18} aria-hidden="true" />
          <div>
            <p className="pnl-uyari-baslik">Klinik sayfanızda eksik bilgiler var</p>
            <p>
              Şunlar girilmemiş: {eksikler.join(', ')}. Bu bilgiler girilmediği sürece kliniğiniz
              uygulamadaki aramalarda daha az görünür.
            </p>
            <p className="pnl-uyari-alt">Bu bilgiler şimdilik telefondaki uygulamadan giriliyor.</p>
          </div>
        </div>
      ) : null}

      <div className="pnl-pano-izgara">
        {/* ── YAKLASAN RANDEVULAR ── */}
        <section className="pnl-widget pnl-genis">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><CalendarClock size={17} /></span>
            <h3>Yaklaşan randevular</h3>
            <button type="button" className="pnl-widget-eylem" onClick={() => git('randevular')}>
              Tüm randevular <ArrowRight size={13} />
            </button>
          </header>
          <div className="pnl-widget-govde">
            {yaklasan.length === 0 ? (
              <p className="pnl-widget-bos">Planlanmış randevu yok. Yeni talepler geldiğinde burada görünür.</p>
            ) : (
              <ul className="pnl-satirlar">
                {yaklasan.slice(0, 5).map(({ r, t }) => (
                  <li key={r.id} className="pnl-satir">
                    <span className="pnl-saat">{saatYaz(r.starts_at ?? r.proposed_at)}</span>
                    <div className="pnl-satir-govde">
                      <p className="pnl-satir-ad">
                        {r.owner_name || 'İsim belirtilmemiş'}
                        {r.pet_name ? <span className="pnl-soluk"> · {r.pet_name}</span> : null}
                      </p>
                      <p className="pnl-satir-alt">
                        {r.service_name || 'Hizmet belirtilmemiş'} · {tarihYaz(new Date(t).toISOString(), false)}
                      </p>
                    </div>
                    <span className={`pnl-durum pnl-durum-${r.status}`}>
                      {RANDEVU_DURUMU[r.status]?.ad ?? r.status}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {yaklasan.length > 5 ? (
            <button type="button" className="pnl-widget-alt" onClick={() => git('randevular')}>
              {yaklasan.length - 5} randevu daha var, tümünü gör <ArrowRight size={13} />
            </button>
          ) : null}
        </section>

        {/* ── BUGUNKU AJANDA ── */}
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><CalendarDays size={17} /></span>
            <h3>Bugünkü ajanda</h3>
          </header>
          <div className="pnl-widget-govde">
            {bugunkuler.length === 0 ? (
              <p className="pnl-widget-bos">Bugün için planlanmış randevu yok.</p>
            ) : (
              <ul className="pnl-satirlar">
                {bugunkuler.map(({ r }) => (
                  <li key={r.id} className="pnl-satir">
                    <span className="pnl-saat">{saatYaz(r.starts_at ?? r.proposed_at)}</span>
                    <div className="pnl-satir-govde">
                      <p className="pnl-satir-ad">{r.owner_name || 'İsim belirtilmemiş'}</p>
                      <p className="pnl-satir-alt">{r.service_name || 'Hizmet belirtilmemiş'}</p>
                    </div>
                    <span className={`pnl-durum pnl-durum-${r.status}`}>
                      {RANDEVU_DURUMU[r.status]?.ad ?? r.status}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* ── YAKLASAN ASI VE PARAZIT ── */}
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><Syringe size={17} /></span>
            <h3>Yaklaşan aşı ve parazit</h3>
          </header>
          <div className="pnl-widget-govde">
            {hatirlatmalar.length === 0 ? (
              <p className="pnl-widget-bos">
                Zamanı yaklaşan aşı ya da parazit koruması yok. Kayıtlar uygulamadan girildiğinde
                tarihi gelenler burada listelenir.
              </p>
            ) : (
              <ul className="pnl-satirlar">
                {hatirlatmalar.slice(0, 5).map((h) => (
                  <li key={h.record_id} className="pnl-satir">
                    <div className="pnl-satir-govde">
                      <p className="pnl-satir-ad">{h.pet_name || 'İsim girilmemiş'}</p>
                      <p className="pnl-satir-alt">
                        {h.title || (h.kind ? (KAYIT_TURU[h.kind] ?? h.kind) : 'Kayıt')}
                        {h.owner_name ? ` · ${h.owner_name}` : ''}
                      </p>
                    </div>
                    <span className="pnl-satir-sag">
                      <span className={h.days_left !== null && h.days_left <= 7 ? 'pnl-gun-rozet pnl-gun-rozet-yakin' : 'pnl-gun-rozet'}>
                        {h.days_left !== null ? `${h.days_left} gün` : tarihYaz(h.next_due_at, false)}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* ── KLINIK VE EKIP OZETI ── */}
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><UsersRound size={17} /></span>
            <h3>Klinik ve ekip özeti</h3>
            <button type="button" className="pnl-widget-eylem" onClick={() => git('raporlar')}>
              Raporlar <ArrowRight size={13} />
            </button>
          </header>
          <div className="pnl-widget-govde">
            <div className="pnl-mini-izgara">
              <div className="pnl-mini">
                <span className="pnl-mini-deger">{ekip.length}</span>
                <span className="pnl-mini-ad">Ekipte kişi</span>
              </div>
              <div className="pnl-mini">
                <span className="pnl-mini-deger">{ekip.filter((k) => k.role === 'owner').length}</span>
                <span className="pnl-mini-ad">{ROL.owner.ad}</span>
              </div>
              <div className="pnl-mini">
                <span className="pnl-mini-deger">{pano?.customer_count ?? 0}</span>
                <span className="pnl-mini-ad">Müşteri</span>
              </div>
              <div className="pnl-mini">
                <span className="pnl-mini-deger">{pano?.service_count ?? 0}</span>
                <span className="pnl-mini-ad">Hizmet</span>
              </div>
            </div>

            {analiz && analiz.appt_total > 0 ? (
              <p className="pnl-widget-not">
                Bugüne kadar açılan <strong>{analiz.appt_total}</strong> randevunun{' '}
                <strong>{analiz.appt_done}</strong> tanesi tamamlandı.
                {analiz.top_service ? <> En çok verdiğiniz hizmet: <strong>{analiz.top_service}</strong>.</> : null}
              </p>
            ) : (
              <p className="pnl-widget-not">Randevu geçmişi biriktikçe burada özet görünür.</p>
            )}
          </div>
        </section>

        {/* ── VITRIN ── */}
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><Heart size={17} /></span>
            <h3>Klinik sayfanız</h3>
          </header>
          <div className="pnl-widget-govde">
            <div className="pnl-mini-izgara">
              <div className="pnl-mini">
                <span className="pnl-mini-deger">{pano?.follower_count ?? 0}</span>
                <span className="pnl-mini-ad">Takipçi</span>
              </div>
              <div className="pnl-mini">
                <span className="pnl-mini-deger">{pano?.announcement_count ?? 0}</span>
                <span className="pnl-mini-ad">Duyuru</span>
              </div>
            </div>
            <p className="pnl-widget-not">
              {pano?.is_verified
                ? 'Kliniğiniz doğrulanmış, genel klinik listesinde görünüyor.'
                : 'Kliniğiniz henüz doğrulanmadı; doğrulanana kadar genel listede görünmez.'}
            </p>
          </div>
        </section>
      </div>

      {/*
        ⚠️ Bu not SUS DEGIL, DURUS BILDIRIMI. Panelde olmayan seyleri kullanicinin
        aramasi gerekmemeli; nerede olduklarini ekran soyluyor.
      */}
      <p className="pnl-dipnot">
        <Megaphone size={14} aria-hidden="true" />
        Reçete yazma, duyuru gönderme ve klinik sayfası düzenleme şimdilik telefondaki
        uygulamada. Web paneline sırayla ekleniyor.
      </p>

      <span className="pnl-gizli-ikon" aria-hidden="true"><Users size={0} /><Stethoscope size={0} /></span>
    </>
  );
}
