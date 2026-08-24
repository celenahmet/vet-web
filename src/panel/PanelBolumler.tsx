import { FileText, Syringe, MessagesSquare, Heart, Settings, Clock, Megaphone, Stethoscope, Bell, Star, UserRound } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  saglikKayitlariniOku, hatirlatmalariOku, gonderileriOku, ilanlariOku,
  duyurulariOku, hizmetleriOku, saatleriOku, hizmetAdlariniOku,
  bildirimleriOku, degerlendirmeleriOku, cevrimdisiMusterileriOku,
  type Hizmet, type CalismaSaati, type Duyuru, type HizmetAdi,
} from './veri';
import { KAYIT_TURU, TUR, tarihYaz } from './sozluk';
import PanelListe from './PanelListe';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Bos from './Bos';

/**
 * REFERANS MENUSUNDEKI BOLUMLER
 *
 * ⚠️ Hepsi GERCEK VERIYLE calisiyor. Menuye "olsun da bos dursun" diye eklenmis
 * bir bolum yok; her biri sunucudan gelen bir tabloyu gosteriyor. Verisi
 * olmayan tek bolum Mesajlar ve o acikca "yakinda" diyor.
 */

/** Gunun adi. Sunucu 0-6 tutuyor; 0 pazar. */
const GUNLER = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

/** '09:00:00' -> '09:00' */
const saatKirp = (s: string | null) => (s ? s.slice(0, 5) : '--:--');

export function PanelKayitlar({ klinik }: { klinik: string }) {
  return (
    <PanelListe
      baslik="Sağlık kayıtları"
      aciklama="Kliniğinizde girilen muayene, tedavi, aşı ve parazit kayıtları. Kayıtlar şimdilik telefondaki uygulamadan giriliyor."
      yukle={() => saglikKayitlariniOku(klinik)}
      bosBaslik="Henüz sağlık kaydı yok"
      bosAciklama="Bir hastaya muayene, aşı ya da tedavi kaydı girdiğinizde burada listelenir."
      anahtar={(k) => k.id}
      altNot={{ ikon: Stethoscope, metin: 'Yeni kayıt ve reçete yazma şimdilik telefondaki uygulamada.' }}
      satir={(k) => (
        <>
          <span className="pnl-avatar" aria-hidden="true"><FileText size={17} /></span>
          <div className="pnl-kisi-bilgi">
            <p className="pnl-kisi-ad">{k.title || (k.kind ? (KAYIT_TURU[k.kind] ?? k.kind) : 'Kayıt')}</p>
            <p className="pnl-kisi-rol">{k.kind ? (KAYIT_TURU[k.kind] ?? k.kind) : 'Tür belirtilmemiş'}</p>
            {k.detail ? <p className="pnl-kisi-anlam">{k.detail}</p> : null}
            <p className="pnl-kisi-ek pnl-soluk">
              Yapıldı: {tarihYaz(k.performed_at, false)}
              {k.weight_kg ? ` · ${k.weight_kg} kg` : ''}
              {k.next_due_at ? ` · Sonraki: ${tarihYaz(k.next_due_at, false)}` : ''}
            </p>
          </div>
        </>
      )}
    />
  );
}

export function PanelAsi({ klinik }: { klinik: string }) {
  return (
    <PanelListe
      baslik="Aşı takvimi"
      aciklama="Zamanı yaklaşan aşı ve parazit korumaları. Tarihi en yakın olan en üstte."
      yukle={() => hatirlatmalariOku(klinik)}
      bosBaslik="Yaklaşan aşı ya da parazit koruması yok"
      bosAciklama="Bir hastaya sonraki tarihi olan bir kayıt girdiğinizde, zamanı yaklaştıkça burada görünür."
      anahtar={(h) => h.record_id}
      satir={(h) => (
        <>
          <span className="pnl-avatar" aria-hidden="true"><Syringe size={17} /></span>
          <div className="pnl-kisi-bilgi">
            <p className="pnl-kisi-ad">{h.pet_name || 'İsim girilmemiş'}</p>
            <p className="pnl-kisi-rol">{h.title || (h.kind ? (KAYIT_TURU[h.kind] ?? h.kind) : 'Kayıt')}</p>
            <p className="pnl-kisi-ek pnl-soluk">
              {h.owner_name ? `${h.owner_name} · ` : ''}{tarihYaz(h.next_due_at, false)}
            </p>
          </div>
          <span className={h.days_left !== null && h.days_left <= 7 ? 'pnl-gun-rozet pnl-gun-rozet-yakin' : 'pnl-gun-rozet'}>
            {h.days_left !== null ? `${h.days_left} gün` : 'tarih belirsiz'}
          </span>
        </>
      )}
    />
  );
}

export function PanelTopluluk() {
  return (
    <PanelListe
      baslik="Topluluk"
      aciklama="Uygulamada yaptığınız paylaşımlar ve aldıkları etkileşim."
      yukle={gonderileriOku}
      bosBaslik="Henüz paylaşımınız yok"
      bosAciklama="Uygulamadan bir paylaşım yaptığınızda, aldığı beğeni ve yorumlarla birlikte burada listelenir."
      anahtar={(g) => g.id}
      altNot={{ ikon: MessagesSquare, metin: 'Yeni paylaşım yapma şimdilik telefondaki uygulamada.' }}
      satir={(g) => (
        <>
          <span className="pnl-avatar" aria-hidden="true"><MessagesSquare size={17} /></span>
          <div className="pnl-kisi-bilgi">
            <p className="pnl-kisi-ad">{(g.body || 'Metinsiz paylaşım').slice(0, 90)}</p>
            <p className="pnl-kisi-rol">{g.like_count} beğeni · {g.comment_count} yorum</p>
            <p className="pnl-kisi-ek pnl-soluk">{tarihYaz(g.created_at, false)}</p>
          </div>
        </>
      )}
    />
  );
}

export function PanelSahiplendirme() {
  return (
    <PanelListe
      baslik="Sahiplendirme"
      aciklama="Uygulamadaki sahiplendirme ilanları. Kliniğinizin ilan açması gerekmiyor; buradan takip edebilirsiniz."
      yukle={ilanlariOku}
      bosBaslik="Görünen ilan yok"
      bosAciklama="Sahiplendirme ilanları açıldıkça burada listelenir."
      anahtar={(i) => i.id}
      satir={(i) => (
        <>
          <span className="pnl-avatar" aria-hidden="true"><Heart size={17} /></span>
          <div className="pnl-kisi-bilgi">
            <p className="pnl-kisi-ad">{i.title || 'Başlıksız ilan'}</p>
            <p className="pnl-kisi-rol">{i.species_code ? (TUR[i.species_code] ?? i.species_code) : 'Tür belirtilmemiş'}</p>
            <p className="pnl-kisi-ek pnl-soluk">{tarihYaz(i.created_at, false)}</p>
          </div>
        </>
      )}
    />
  );
}

export function PanelMesajlar() {
  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        <div>
          <h2>Mesajlar</h2>
          <p className="pnl-aciklama">Hayvan sahipleriyle yazışma. Şimdilik yalnızca telefondaki uygulamada.</p>
        </div>
      </header>
      {/*
        ⚠️ TEK GERCEKTEN BOS BOLUM ve sebebi yaziliyor. Sunucuda klinigin gelen
        kutusunu donduren bir cagri yok; konusma acma ve karsi taraf bilgisi var
        ama LISTE yok. Uydurma bir liste gostermek yerine eksigin kendisi
        soyleniyor.
      */}
      <Bos
        baslik="Mesajlar web panelinde henüz yok"
        aciklama="Sunucu tarafında kliniğin gelen kutusunu veren bir yol henüz hazır değil. Hazır olduğunda bu ekran doldurulacak; o zamana kadar mesajlarınızı telefondaki uygulamadan görebilirsiniz."
      />
    </section>
  );
}

/** Klinik profili: hizmetler ve calisma saatleri. */
export function PanelProfil({ klinik }: { klinik: string }) {
  const [hizmetler, setHizmetler] = useState<Hizmet[] | null>(null);
  const [saatler, setSaatler] = useState<CalismaSaati[]>([]);
  const [adlar, setAdlar] = useState<Record<string, string>>({});
  const [hata, setHata] = useState<string | null>(null);

  useEffect(() => {
    let iptal = false;
    setHizmetler(null); setHata(null);
    Promise.all([hizmetleriOku(klinik), saatleriOku(klinik), hizmetAdlariniOku()])
      .then(([h, s, a]) => {
        if (iptal) return;
        setHizmetler(h); setSaatler(s);
        setAdlar(Object.fromEntries((a as HizmetAdi[]).map((x) => [x.code, x.name_tr])));
      })
      .catch((e: { message?: string }) => { if (!iptal) { setHizmetler([]); setHata(e?.message ?? ''); } });
    return () => { iptal = true; };
  }, [klinik]);

  if (hizmetler === null) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} />;

  /* ⚠️ Gunler sunucudan sirasiz gelebiliyor; pazartesiden basliyoruz cunku
     calisma haftasi oyle okunuyor. 0 (pazar) sona atiliyor. */
  const sirali = [...saatler].sort((a, b) => ((a.weekday + 6) % 7) - ((b.weekday + 6) % 7));

  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        <div>
          <h2>Klinik profili</h2>
          <p className="pnl-aciklama">
            Verdiğiniz hizmetler ve çalışma saatleriniz. Bu bilgiler klinik sayfanızda ve
            uygulamadaki aramalarda görünür.
          </p>
        </div>
      </header>

      <div className="pnl-izgara-ikili">
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><Stethoscope size={17} /></span>
            <h3>Hizmetler</h3>
          </header>
          <div className="pnl-widget-govde">
            {hizmetler.length === 0 ? (
              <p className="pnl-widget-bos">
                Hizmet seçilmemiş. Hangi hizmetleri verdiğinizi girmediğiniz sürece kliniğiniz
                aramalarda daha az görünür.
              </p>
            ) : (
              <ul className="pnl-satirlar">
                {hizmetler.map((h) => (
                  <li key={h.service_code} className="pnl-satir">
                    <div className="pnl-satir-govde">
                      <p className="pnl-satir-ad">{adlar[h.service_code] ?? h.service_code}</p>
                      {h.note ? <p className="pnl-satir-alt">{h.note}</p> : null}
                    </div>
                    {/* ⚠️ Fiyat varsa gosteriliyor, yoksa satir bos birakilmiyor:
                        "fiyat girilmemis" demek, sifir TL yazmaktan dogru. */}
                    <span className="pnl-satir-sag pnl-soluk">
                      {h.price_min || h.price_max
                        ? `${((h.price_min ?? h.price_max ?? 0) / 100).toLocaleString('tr-TR')} ₺`
                        : 'fiyat girilmemiş'}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><Clock size={17} /></span>
            <h3>Çalışma saatleri</h3>
          </header>
          <div className="pnl-widget-govde">
            {sirali.length === 0 ? (
              <p className="pnl-widget-bos">Çalışma saatleri girilmemiş.</p>
            ) : (
              <ul className="pnl-satirlar">
                {sirali.map((g) => (
                  <li key={g.weekday} className="pnl-satir">
                    <div className="pnl-satir-govde">
                      <p className="pnl-satir-ad">{GUNLER[g.weekday] ?? `Gün ${g.weekday}`}</p>
                    </div>
                    <span className={g.is_closed ? 'pnl-satir-sag pnl-soluk' : 'pnl-satir-sag'}>
                      {g.is_closed ? 'Kapalı' : `${saatKirp(g.opens_at)} – ${saatKirp(g.closes_at)}`}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>

      <p className="pnl-dipnot">
        <Settings size={14} aria-hidden="true" />
        Hizmet ve saat düzenleme şimdilik telefondaki uygulamada.
      </p>
    </section>
  );
}

/** Kimin duyurusu, kime gitti, kac kisiye ulasti. */
const KITLE: Record<string, string> = {
  customers: 'Müşterilerinize',
  followers: 'Takipçilerinize',
  all: 'Herkese',
};

export function PanelDuyurular({ klinik }: { klinik: string }) {
  return (
    <PanelListe
      baslik="Duyurular"
      aciklama="Kliniğinizin gönderdiği duyurular ve kaç kişiye ulaştıkları."
      yukle={() => duyurulariOku(klinik)}
      bosBaslik="Henüz duyuru göndermediniz"
      bosAciklama="Müşterilerinize ya da takipçilerinize duyuru gönderdiğinizde, kime gittiği ve kaç kişiye ulaştığıyla birlikte burada listelenir."
      anahtar={(d: Duyuru) => d.id}
      altNot={{ ikon: Megaphone, metin: 'Yeni duyuru gönderme şimdilik telefondaki uygulamada.' }}
      satir={(d: Duyuru) => (
        <>
          <span className="pnl-avatar" aria-hidden="true"><Megaphone size={17} /></span>
          <div className="pnl-kisi-bilgi">
            <p className="pnl-kisi-ad">{(d.body || 'Metinsiz duyuru').slice(0, 110)}</p>
            <p className="pnl-kisi-rol">{d.audience ? (KITLE[d.audience] ?? d.audience) : 'Kitle belirtilmemiş'}</p>
            <p className="pnl-kisi-ek pnl-soluk">
              {d.recipient_count ? `${d.recipient_count} kişiye ulaştı` : 'Henüz gönderilmedi'}
              {' · '}{tarihYaz(d.created_at, false)}
            </p>
          </div>
        </>
      )}
    />
  );
}

/** Bildirim turleri. Kaynak: `notifications.kind`. */
const BILDIRIM_TURU: Record<string, string> = {
  appointment: 'Randevu',
  announcement: 'Duyuru',
  message: 'Mesaj',
  staff_invitation: 'Ekip daveti',
  customer_invitation: 'Müşteri daveti',
  record: 'Sağlık kaydı',
  system: 'Sistem',
};

export function PanelBildirimler() {
  return (
    <PanelListe
      baslik="Bildirimler"
      aciklama="Size gelen bildirimler. Okunmamış olanlar işaretli görünür."
      yukle={bildirimleriOku}
      bosBaslik="Bildiriminiz yok"
      bosAciklama="Randevu, duyuru ve davet hareketleri olduğunda bildirimler burada birikir."
      anahtar={(b) => String(b.id)}
      satir={(b) => (
        <>
          <span className={b.read_at ? 'pnl-avatar' : 'pnl-avatar pnl-avatar-vurgu'} aria-hidden="true">
            <Bell size={17} />
          </span>
          <div className="pnl-kisi-bilgi">
            <p className="pnl-kisi-ad">
              {b.title || 'Başlıksız bildirim'}
              {/* ⚠️ Okunmamis rozeti METINLE de belirtiliyor: yalniz renk kullanmak,
                  renk ayirt edemeyen biri icin hicbir sey soylememek olurdu. */}
              {!b.read_at ? <span className="pnl-etiket">okunmadı</span> : null}
            </p>
            {b.kind ? <p className="pnl-kisi-rol">{BILDIRIM_TURU[b.kind] ?? b.kind}</p> : null}
            {b.body ? <p className="pnl-kisi-anlam">{b.body}</p> : null}
            <p className="pnl-kisi-ek pnl-soluk">{tarihYaz(b.created_at)}</p>
          </div>
        </>
      )}
    />
  );
}

export function PanelDegerlendirmeler({ klinik }: { klinik: string }) {
  return (
    <PanelListe
      baslik="Değerlendirmeler"
      aciklama="Müşterilerinizin verdiği puanlar ve yazdığı yorumlar. Klinik sayfanızda görünürler."
      yukle={() => degerlendirmeleriOku(klinik)}
      bosBaslik="Henüz değerlendirme yok"
      bosAciklama="Müşterileriniz uygulamadan puan verdiğinde ve yorum yazdığında burada listelenir."
      anahtar={(d) => d.id}
      satir={(d) => (
        <>
          <span className="pnl-avatar" aria-hidden="true"><Star size={17} /></span>
          <div className="pnl-kisi-bilgi">
            <p className="pnl-kisi-ad">
              {d.display_name || 'İsim girilmemiş'}
              <span className="pnl-puan"><Star size={12} /> {d.rating}</span>
            </p>
            {d.comment ? <p className="pnl-kisi-anlam">{d.comment}</p> : <p className="pnl-kisi-anlam pnl-soluk">Yorum yazılmamış, yalnızca puan verilmiş.</p>}
            <p className="pnl-kisi-ek pnl-soluk">{tarihYaz(d.created_at, false)}</p>
          </div>
        </>
      )}
    />
  );
}

/** Klinigin kendi defterine yazdigi, uygulamada hesabi olmayan musteriler. */
export function PanelCevrimdisi({ klinik }: { klinik: string }) {
  return (
    <PanelListe
      baslik="Kayıt defteri"
      aciklama="Uygulamada hesabı olmayan, kliniğinizin kendi defterine yazdığı müşteriler."
      yukle={() => cevrimdisiMusterileriOku(klinik)}
      bosBaslik="Defterde kayıt yok"
      bosAciklama="Uygulamayı kullanmayan bir müşteriyi kendi kaydınıza eklediğinizde burada görünür."
      anahtar={(m) => m.id}
      satir={(m) => (
        <>
          <span className="pnl-avatar" aria-hidden="true"><UserRound size={17} /></span>
          <div className="pnl-kisi-bilgi">
            <p className="pnl-kisi-ad">{m.full_name || 'İsim girilmemiş'}</p>
            <p className="pnl-kisi-rol">{m.phone || m.email || 'İletişim bilgisi yok'}</p>
            {m.note ? <p className="pnl-kisi-ek">{m.note}</p> : null}
          </div>
        </>
      )}
    />
  );
}

/** Ayarlar: hesap ve oturum. */
export function PanelAyarlar() {
  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        <div>
          <h2>Ayarlar</h2>
          <p className="pnl-aciklama">Hesabınız ve bu tarayıcıdaki oturumunuz.</p>
        </div>
      </header>

      <div className="pnl-izgara-ikili">
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><Settings size={17} /></span>
            <h3>Oturum</h3>
          </header>
          <div className="pnl-widget-govde">
            <p className="pnl-widget-not">
              Web panelinden çıkmak, telefondaki uygulamadaki oturumunuzu kapatmaz. İki cihaz
              birbirinden bağımsız çalışır. Çıkmak için sol menünün altındaki düğmeyi kullanın.
            </p>
          </div>
        </section>

        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><Clock size={17} /></span>
            <h3>Hesap işlemleri</h3>
          </header>
          <div className="pnl-widget-govde">
            <p className="pnl-widget-not">
              Şifre değiştirme, hesap silme ve bildirim tercihleri şimdilik telefondaki
              uygulamada. Web paneline sırayla ekleniyor.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
