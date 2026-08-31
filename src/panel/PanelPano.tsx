import { useEffect, useState } from 'react';
import {
  AlertTriangle, ArrowRight,
  CalendarClock, CalendarDays, Syringe, PawPrint, UsersRound, Inbox,
} from 'lucide-react';

import {
  panoOku, randevulariOku, hatirlatmalariOku, analizOku, personeliOku, hastalariOku,
  type Pano, type Randevu, type Hatirlatma, type Analiz, type Personel, type Hasta,
} from './veri';
import { EKSIK_ALAN, RANDEVU_DURUMU, KAYIT_TURU, TUR, ROL, tarihYaz, saatYaz } from './sozluk';
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
  const [hastalar, setHastalar] = useState<Hasta[]>([]);
  const [hata, setHata] = useState<string | null>(null);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    let iptal = false;
    setYukleniyor(true); setHata(null);

    Promise.all([
      panoOku(klinik), randevulariOku(klinik), hatirlatmalariOku(klinik),
      analizOku(klinik), personeliOku(klinik), hastalariOku(klinik),
    ])
      .then(([p, r, h, a, e, hs]) => {
        if (iptal) return;
        setPano(p[0] ?? null); setRandevular(r); setHatirlatmalar(h);
        setAnaliz(a[0] ?? null); setEkip(e); setHastalar(hs);
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
            <span className={`pnl-kart-ikon ${sinif}`} aria-hidden="true"><Ikon size={22} /></span>
            <span className="pnl-kart-govde">
              <span className="pnl-kart-ad">{ad}</span>
              <span className="pnl-kart-deger">{deger}</span>
              <span className="pnl-kart-anlam">{anlam}</span>
            </span>
            {/*
              ⚠️ KARSILASTIRMA SUTUNU SAGDA — referans yerlesimde de oyle. Ic
              duzen uc parcali: ikon | etiket+sayi | karsilastirma. Karsilastirma
              alt alta yazilsaydi kartin yuksekligi buyur, dort kart bir satira
              sigmazdi.

              ⚠️ Degeri "—". Taslakta "▲%9 · dun: 11" gibi degisim vardi; sunucu
              GUNLUK GECMIS tutmuyor, yani o oran hesaplanamaz. Tire hesaplanamadigi
              icin duruyor, sifir DEGIL: sifir "degisim olmadi" demek olurdu.
            */}
            <span className="pnl-kart-kiyas">
              <span className="pnl-kart-kiyas-deger">—</span>
              <span className="pnl-kart-kiyas-ad">geçen döneme göre</span>
            </span>
          </button>
        ))}
      </div>

      {eksikler.length ? (
        <div className="pnl-uyari">
          <AlertTriangle size={18} aria-hidden="true" />
          <div>
            <p className="pnl-uyari-baslik">
              Klinik sayfanızda eksik bilgiler var:{' '}
              <span className="pnl-uyari-liste">{eksikler.join(', ')}</span>
            </p>
            <p className="pnl-uyari-alt">Eksik bilgiler kliniğinizin aramalarda daha az görünmesine yol açıyor.</p>
          </div>
        </div>
      ) : null}

      {/*
        ⚠️ IKI AYRI IZGARA, TEK IZGARA DEGIL — referans yerlesimin ritmi bu.
        Ust satir: genis randevu tablosu + dar ajanda (2:1). Alt satir: dort
        esit kart. Tek `auto-fit` izgarasina birakilsaydi kartlar genislige gore
        rastgele dizilir, ekran her boyutta baska bir duzen gosterirdi.
      */}
      <div className="pnl-izgara-ust">
        {/* ── YAKLASAN RANDEVULAR ── */}
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><CalendarClock size={17} /></span>
            <h3>Yaklaşan randevular</h3>
            <button type="button" className="pnl-widget-eylem" onClick={() => git('randevular')}>
              Tüm randevular <ArrowRight size={13} />
            </button>
          </header>
          <div className="pnl-widget-govde pnl-widget-govde-tablo">
            {yaklasan.length === 0 ? (
              <p className="pnl-widget-bos">Planlanmış randevu yok. Yeni talepler geldiğinde burada görünür.</p>
            ) : (
              /*
               * ⚠️ TABLO, LISTE DEGIL — referans yerlesimdeki gibi. Sutun basligi
               * olmayan bir listede okuyucu her satirda "bu isim sahip mi hayvan mi"
               * diye yeniden karar veriyor. Basliklar bir kez okunuyor, satirlar
               * taraniyor.
               *
               * ⚠️ Referanstaki "Veteriner" sutunu YOK: `appointment_list` randevuya
               * atanmis hekimi dondurmuyor. Bos bir sutun koymak, doldurulacakmis
               * izlenimi verirdi.
               */
              <table className="pnl-tablo">
                <thead>
                  <tr>
                    <th scope="col">Saat</th>
                    <th scope="col">Hasta</th>
                    <th scope="col">Sahip</th>
                    <th scope="col">Hizmet</th>
                    <th scope="col">Durum</th>
                  </tr>
                </thead>
                <tbody>
                  {yaklasan.slice(0, 5).map(({ r, t }) => (
                    <tr key={r.id}>
                      <td className="pnl-td-saat">
                        <span className="pnl-saat">{saatYaz(r.starts_at ?? r.proposed_at)}</span>
                        <span className="pnl-td-tarih">{tarihYaz(new Date(t).toISOString(), false)}</span>
                      </td>
                      <td>{r.pet_name || <span className="pnl-soluk">girilmemiş</span>}</td>
                      <td className="pnl-td-ad">{r.owner_name || 'İsim belirtilmemiş'}</td>
                      <td>{r.service_name || <span className="pnl-soluk">belirtilmemiş</span>}</td>
                      <td>
                        <span className={`pnl-durum pnl-durum-${r.status}`}>
                          {RANDEVU_DURUMU[r.status]?.ad ?? r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          {yaklasan.length > 0 ? (
            <button type="button" className="pnl-widget-alt" onClick={() => git('randevular')}>
              {yaklasan.length > 5 ? `${yaklasan.length - 5} randevu daha var, tümünü gör` : 'Tümünü görüntüle'}
              <ArrowRight size={13} />
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
              /*
               * ⚠️ ZAMAN CIZELGESI: saat solda, yaninda nokta, noktalar dikey bir
               * cizgiyle bagli. Referans yerlesimdeki gibi. Duz liste, gunun
               * SIRASINI gostermiyordu; cizgi "once bu, sonra su" diyor.
               */
              <ul className="pnl-ajanda">
                {bugunkuler.map(({ r }) => (
                  <li key={r.id} className="pnl-ajanda-satir">
                    <span className="pnl-ajanda-saat">{saatYaz(r.starts_at ?? r.proposed_at)}</span>
                    <span className="pnl-ajanda-nokta" aria-hidden="true" />
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

      </div>

      <div className="pnl-izgara-dort">
        {/* ── SON HASTALAR ── */}
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><PawPrint size={17} /></span>
            <h3>Son hastalar</h3>
            <button type="button" className="pnl-widget-eylem" onClick={() => git('hastalar')}>
              Tüm hastalar <ArrowRight size={13} />
            </button>
          </header>
          <div className="pnl-widget-govde">
            {hastalar.length === 0 ? (
              <p className="pnl-widget-bos">
                Kayıtlı hasta yok. Müşterileriniz uygulamada hayvanlarını kaydettiğinde burada görünür.
              </p>
            ) : (
              <ul className="pnl-satirlar">
                {hastalar.slice(0, 4).map((h) => (
                  <li key={h.pet_id} className="pnl-satir">
                    <span className="pnl-avatar pnl-avatar-kucuk" aria-hidden="true"><PawPrint size={15} /></span>
                    <div className="pnl-satir-govde">
                      <p className="pnl-satir-ad">{h.pet_name || 'İsim girilmemiş'}</p>
                      {/*
                        ⚠️ Referansta burada cins, yas ve KILO yaziyordu. Cins ve yas
                        hayvan basina ayri bir cagri (`pet_profile`) istiyor, kilo ise
                        hicbir yerde tutulmuyor. Elde olan tur ve sahip yaziliyor.
                      */}
                      <p className="pnl-satir-alt">
                        {h.species_code ? (TUR[h.species_code] ?? h.species_code) : 'Türü girilmemiş'}
                        {h.owner_name ? ` · ${h.owner_name}` : ''}
                      </p>
                    </div>
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
            {/*
              ⚠️ ALTI MINI KUTU, iki ayri kart degil. Once "Klinik sayfaniz" ayri
              bir kartti ve pano dorduncu bir satira tasiyordu; referans yerlesim
              uc satir ve tek ekrana siğiyor. Takipci ve duyuru sayilari buraya
              katildi, kart sayisi degismedi.
            */}
            <div className="pnl-mini-izgara pnl-mini-alti">
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
              <div className="pnl-mini">
                <span className="pnl-mini-deger">{pano?.follower_count ?? 0}</span>
                <span className="pnl-mini-ad">Takipçi</span>
              </div>
              <div className="pnl-mini">
                <span className="pnl-mini-deger">{pano?.announcement_count ?? 0}</span>
                <span className="pnl-mini-ad">Duyuru</span>
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

            {/*
              ⚠️ Doluluk orani REFERANSTA bu kartin icinde bir grafikti. Zaman
              serisi olmadigi icin grafik cizilemiyor; yeri duruyor, degeri tire.
            */}
            <p className="pnl-satir-ic-yakinda">
              Randevu doluluk oranı <span className="pnl-yakinda-etiket">Yakında</span>
            </p>
          </div>
        </section>

        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><Inbox size={17} /></span>
            <h3>Mesajlar</h3>
            <button type="button" className="pnl-widget-eylem" onClick={() => git('mesajlar')}>
              Gelen kutusunu aç <ArrowRight size={13} />
            </button>
          </header>
          <div className="pnl-widget-govde">
            <p className="pnl-widget-bos">
              Mesaj isteklerini, okunma durumunu, görselleri ve görüşmeleri web panelinden yönetin.
            </p>
          </div>
        </section>

      </div>

      {/*
        ⚠️ Bu not SUS DEGIL, DURUS BILDIRIMI. Panelde olmayan seyleri kullanicinin
        aramasi gerekmemeli; nerede olduklarini ekran soyluyor.
      */}

    </>
  );
}
