import { FileText, Syringe, MessagesSquare, Heart, Settings, Clock, Megaphone, Stethoscope, Bell, Star, Plus, Send } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  saglikKayitlariniOku, hatirlatmalariOku, gonderileriOku, ilanlariOku,
  duyurulariOku, hizmetleriOku, saatleriOku, hizmetAdlariniOku,
  bildirimleriOku, degerlendirmeleriOku,
  duyuruOlusturVeGonder, ilanOlustur, gonderiPaylas, mesajGonder,
  ulasilabilirKisileriOku, turleriOku,
  type UlasilabilirKisi, type Tur,
  type Hizmet, type CalismaSaati, type Duyuru, type HizmetAdi,
} from './veri';
import { KAYIT_TURU, TUR, tarihYaz } from './sozluk';
import PanelListe from './PanelListe';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Bos from './Bos';
import Diyalog from './Diyalog';

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

export function PanelTopluluk({ klinik }: { klinik: string }) {
  const [acik, setAcik] = useState(false);
  const [metin, setMetin] = useState('');
  const [herkese, setHerkese] = useState(true);
  const [bekliyor, setBekliyor] = useState(false);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [tazele, setTazele] = useState(0);

  async function paylas(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await gonderiPaylas(klinik, metin, herkese);
      setAcik(false); setMetin('');
      setBilgi('Paylaşımınız yayımlandı.');
      setTazele((n) => n + 1);
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  return (
    <>
      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}

      <PanelListe
      key={tazele}
      baslik="Topluluk"
      aciklama="Kliniğiniz adına yaptığınız paylaşımlar ve aldıkları etkileşim."
      yukle={gonderileriOku}
      bosBaslik="Henüz paylaşımınız yok"
      bosAciklama="Kliniğiniz adına bir paylaşım yaptığınızda, aldığı beğeni ve yorumlarla birlikte burada listelenir."
      anahtar={(g) => g.id}
      eylem={
        <button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => { setAcik(true); setIslemHatasi(null); }}>
          <Plus size={15} /> Paylaşım yap
        </button>
      }
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

      <Diyalog acik={acik} kapat={() => setAcik(false)} baslik="Paylaşım yap"
        aciklama="Paylaşımınız kliniğiniz adına çıkar ve uygulamadaki akışta görünür.">
        <form onSubmit={paylas}>
          <div className="pnl-alan">
            <label htmlFor="pnl-post-metin">Ne paylaşmak istiyorsunuz?</label>
            <textarea id="pnl-post-metin" required maxLength={2000} value={metin}
              onChange={(e) => setMetin(e.target.value)}
              placeholder="Örnek: Kış aylarında kedilerde su tüketimi azalır. Su kabını sık sık tazelemek böbrek sağlığını koruyor." />
            <span className="pnl-alan-ipucu">{metin.length} / 2000 karakter</span>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-post-gorunur">Kimler görebilsin</label>
            <select id="pnl-post-gorunur" value={herkese ? 'public' : 'followers'}
              onChange={(e) => setHerkese(e.target.value === 'public')}>
              <option value="public">Herkes</option>
              <option value="followers">Yalnızca takipçilerim</option>
            </select>
          </div>
          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || metin.trim().length < 3}>
              {bekliyor ? 'Paylaşılıyor…' : 'Paylaş'}
            </button>
          </div>
        </form>
      </Diyalog>
    </>
  );
}

export function PanelSahiplendirme() {
  const [acik, setAcik] = useState(false);
  const [turler, setTurler] = useState<Tur[]>([]);
  const [form, setForm] = useState({ baslik: '', aciklama: '', tur: 'cat', cinsiyet: 'unknown', kosullar: '' });
  const [bekliyor, setBekliyor] = useState(false);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [tazele, setTazele] = useState(0);

  useEffect(() => { turleriOku().then(setTurler).catch(() => setTurler([])); }, []);

  async function olustur(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await ilanOlustur(form);
      setAcik(false); setForm({ baslik: '', aciklama: '', tur: 'cat', cinsiyet: 'unknown', kosullar: '' });
      /* ⚠️ "Yayimlandi" DEMIYORUZ: ilan `pending` aciliyor ve moderasyondan
         geciyor. Yayimlandi demek, olmayan bir seyi soylemek olurdu. */
      setBilgi('İlanınız oluşturuldu. Yayımlanmadan önce incelemeden geçiyor.');
      setTazele((n) => n + 1);
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  return (
    <>
      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}

      <PanelListe
      key={tazele}
      baslik="Sahiplendirme"
      aciklama="Sahiplendirme ilanları. Kliniğinize bırakılan bir hayvan için ilan açabilirsiniz."
      yukle={ilanlariOku}
      bosBaslik="Görünen ilan yok"
      bosAciklama="Sahiplendirme ilanları açıldıkça burada listelenir."
      anahtar={(i) => i.id}
      eylem={
        <button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => { setAcik(true); setIslemHatasi(null); }}>
          <Plus size={15} /> İlan oluştur
        </button>
      }
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

      <Diyalog acik={acik} kapat={() => setAcik(false)} baslik="Sahiplendirme ilanı oluştur"
        aciklama="İlanınız incelemeden geçtikten sonra uygulamada yayımlanır.">
        <form onSubmit={olustur}>
          <div className="pnl-alan">
            <label htmlFor="pnl-i-baslik">Başlık</label>
            <input id="pnl-i-baslik" required minLength={3} maxLength={120} value={form.baslik}
              onChange={(e) => setForm((f) => ({ ...f, baslik: e.target.value }))}
              placeholder="Örnek: Üç aylık tekir yavru yuva arıyor" />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-i-tur">Tür</label>
            <select id="pnl-i-tur" value={form.tur} onChange={(e) => setForm((f) => ({ ...f, tur: e.target.value }))}>
              {turler.map((t) => <option key={t.code} value={t.code}>{t.name_tr}</option>)}
            </select>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-i-cins">Cinsiyet</label>
            <select id="pnl-i-cins" value={form.cinsiyet} onChange={(e) => setForm((f) => ({ ...f, cinsiyet: e.target.value }))}>
              <option value="unknown">Bilinmiyor</option>
              <option value="male">Erkek</option>
              <option value="female">Dişi</option>
            </select>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-i-aciklama">Açıklama</label>
            <textarea id="pnl-i-aciklama" required minLength={10} maxLength={2000} value={form.aciklama}
              onChange={(e) => setForm((f) => ({ ...f, aciklama: e.target.value }))}
              placeholder="Yaşı, karakteri, sağlık durumu, aşıları…" />
            <span className="pnl-alan-ipucu">{form.aciklama.length} / 2000 karakter · en az 10</span>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-i-kosul">Sahiplendirme koşulları</label>
            <textarea id="pnl-i-kosul" maxLength={1000} value={form.kosullar}
              onChange={(e) => setForm((f) => ({ ...f, kosullar: e.target.value }))}
              placeholder="Örnek: Balkon güvenliği olan ev, kısırlaştırma sözü." />
          </div>
          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu"
              disabled={bekliyor || form.baslik.trim().length < 3 || form.aciklama.trim().length < 10}>
              {bekliyor ? 'Oluşturuluyor…' : 'İlanı oluştur'}
            </button>
          </div>
        </form>
      </Diyalog>
    </>
  );
}

/**
 * MESAJLAR
 *
 * ⚠️ GELEN KUTUSU YOK, YENI MESAJ VAR. Sunucuda klinigin konusma listesini
 * donduren bir cagri bulunmuyor; ama konusma ACMAK ve mesaj YAZMAK mumkun
 * (`open_direct_conversation` + `messages`). Yani ekran yarim: yazabiliyor,
 * gelen cevabi burada okuyamiyor. Bu acikca yaziliyor, gizlenmiyor.
 *
 * ⚠️ HERKESE YAZILAMIYOR: yalniz klinigin TAKIPCISI ya da MUSTERISI olanlar
 * listeleniyor (`clinic_reachable_users`). Rastgele kullanici aramak istenmeyen
 * mesajin en kolay yolu olurdu.
 */
export function PanelMesajlar({ klinik }: { klinik: string }) {
  const [kisiler, setKisiler] = useState<UlasilabilirKisi[] | null>(null);
  const [acik, setAcik] = useState(false);
  const [kisi, setKisi] = useState('');
  const [metin, setMetin] = useState('');
  const [bekliyor, setBekliyor] = useState(false);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);

  useEffect(() => {
    setKisiler(null);
    ulasilabilirKisileriOku(klinik).then(setKisiler).catch(() => setKisiler([]));
  }, [klinik]);

  async function gonder(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await mesajGonder(kisi, metin);
      setAcik(false); setMetin('');
      setBilgi('Mesajınız gönderildi. Gelen cevapları şimdilik telefondaki uygulamadan görebilirsiniz.');
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  const iliski = (r: string) => (r === 'customer' ? 'müşteriniz' : r === 'follower' ? 'takipçiniz' : r);

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
            Müşterilerinize ve takipçilerinize mesaj yazabilirsiniz. Gelen cevapları şimdilik
            telefondaki uygulamadan görüyorsunuz.
          </p>
        </div>
        <button
          type="button"
          className="pnl-dugme pnl-dugme-olumlu"
          disabled={!kisiler || kisiler.length === 0}
          title={kisiler && kisiler.length === 0 ? 'Mesaj yazabileceğiniz kişi yok' : undefined}
          onClick={() => { setKisi(kisiler?.[0]?.user_id ?? ''); setMetin(''); setAcik(true); setIslemHatasi(null); }}>
          <Send size={15} /> Yeni mesaj
        </button>
      </header>

      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}

      {kisiler === null ? (
        <Yukleniyor />
      ) : kisiler.length === 0 ? (
        <Bos
          baslik="Mesaj yazabileceğiniz kimse yok"
          aciklama="Yalnızca kliniğinizin müşterilerine ve takipçilerine mesaj yazılabiliyor. Müşteri davet ettiğinizde ya da biri sizi takip ettiğinde burada görünür."
        />
      ) : (
        <ul className="pnl-kisi-listesi">
          {kisiler.map((k) => (
            <li key={k.user_id} className="pnl-kisi">
              <span className="pnl-avatar" aria-hidden="true"><MessagesSquare size={17} /></span>
              <div className="pnl-kisi-bilgi">
                <p className="pnl-kisi-ad">{k.display_name || 'İsim girilmemiş'}</p>
                <p className="pnl-kisi-rol">{iliski(k.relation)}</p>
              </div>
              <button
                type="button"
                className="pnl-dugme pnl-dugme-sade pnl-kisi-eylem"
                onClick={() => { setKisi(k.user_id); setMetin(''); setAcik(true); setIslemHatasi(null); }}>
                <Send size={14} /> Mesaj yaz
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="pnl-dipnot">
        <MessagesSquare size={14} aria-hidden="true" />
        Gelen mesajları web panelinde okumak henüz mümkün değil: sunucu tarafında kliniğin gelen
        kutusunu veren bir yol yok. Hazır olduğunda bu ekran tamamlanacak.
      </p>

      <Diyalog acik={acik} kapat={() => setAcik(false)} baslik="Mesaj yaz"
        aciklama="Mesajınız kişiye bildirim olarak gider.">
        <form onSubmit={gonder}>
          <div className="pnl-alan">
            <label htmlFor="pnl-msj-kisi">Kime</label>
            <select id="pnl-msj-kisi" required value={kisi} onChange={(e) => setKisi(e.target.value)}>
              {(kisiler ?? []).map((k) => (
                <option key={k.user_id} value={k.user_id}>
                  {k.display_name || 'İsim girilmemiş'} — {iliski(k.relation)}
                </option>
              ))}
            </select>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-msj-metin">Mesaj</label>
            <textarea id="pnl-msj-metin" required maxLength={1000} value={metin}
              onChange={(e) => setMetin(e.target.value)}
              placeholder="Örnek: Pati'nin aşı zamanı geldi, uygun olduğunuz bir gün için randevu oluşturabiliriz." />
            <span className="pnl-alan-ipucu">{metin.length} / 1000 karakter</span>
          </div>
          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || !kisi || metin.trim().length < 2}>
              {bekliyor ? 'Gönderiliyor…' : 'Gönder'}
            </button>
          </div>
        </form>
      </Diyalog>
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
        {/*
          ⚠️ BOLUM BASLIGI BURADA YOK, UST CUBUKTA. Once ikisi de yaziyordu ve
          ekranda ayni kelime iki kez goruluyordu ("Raporlar / Raporlar").
          Ust cubuk yapiskan, yani sayfa kaydiginca da gorunur duruyor; burada
          tekrarlamak hem yer yiyor hem ekran okuyucuya ayni basligi iki kez
          okutuyordu. Burada yalniz ACIKLAMA ve eylem dugmeleri kaliyor.
        */}
        <div>
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
  const [acik, setAcik] = useState(false);
  const [metin, setMetin] = useState('');
  const [kitle, setKitle] = useState<'customers' | 'followers' | 'both'>('customers');
  const [push, setPush] = useState(false);
  const [bekliyor, setBekliyor] = useState(false);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [tazele, setTazele] = useState(0);

  async function gonder(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      const kisi = await duyuruOlusturVeGonder(klinik, { metin, kitle, pushGonder: push });
      setAcik(false); setMetin(''); setPush(false);
      setBilgi(kisi > 0 ? `Duyuru ${kisi} kişiye gönderildi.` : 'Duyuru oluşturuldu ama ulaşacak kimse bulunamadı.');
      setTazele((n) => n + 1);
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  return (
    <>
      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}

      <PanelListe
      key={tazele}
      baslik="Duyurular"
      aciklama="Kliniğinizin gönderdiği duyurular ve kaç kişiye ulaştıkları."
      yukle={() => duyurulariOku(klinik)}
      bosBaslik="Henüz duyuru göndermediniz"
      bosAciklama="Müşterilerinize ya da takipçilerinize duyuru gönderdiğinizde, kime gittiği ve kaç kişiye ulaştığıyla birlikte burada listelenir."
      anahtar={(d: Duyuru) => d.id}
      eylem={
        <button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => { setAcik(true); setIslemHatasi(null); }}>
          <Megaphone size={15} /> Duyuru oluştur
        </button>
      }
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

      <Diyalog
        acik={acik}
        kapat={() => setAcik(false)}
        baslik="Duyuru oluştur"
        aciklama="Duyurunuz seçtiğiniz kitleye anında gider. Gönderilen duyuru geri alınamaz.">
        <form onSubmit={gonder}>
          {/*
            ⚠️ BASLIK ALANI YOK ve olamaz: sunucudaki duyuru tablosunda baslik
            kolonu bulunmuyor, baslik gonderim aninda klinigin adindan
            turetiliyor. Alan koymak, calismayan bir alan gostermek olurdu.
          */}
          <div className="pnl-alan">
            <label htmlFor="pnl-duyuru-metin">Duyuru metni</label>
            <textarea
              id="pnl-duyuru-metin"
              required
              maxLength={600}
              value={metin}
              onChange={(e) => setMetin(e.target.value)}
              placeholder="Örnek: Bayram boyunca 10:00-16:00 arası açığız. Acil durumlar için telefonla ulaşabilirsiniz."
            />
            <span className="pnl-alan-ipucu">{metin.length} / 600 karakter · Başlık kliniğinizin adından oluşur.</span>
          </div>

          <div className="pnl-alan">
            <label htmlFor="pnl-duyuru-kitle">Kime gitsin</label>
            <select
              id="pnl-duyuru-kitle"
              value={kitle}
              onChange={(e) => {
                const y = e.target.value as 'customers' | 'followers' | 'both';
                setKitle(y);
                /* ⚠️ Push yalniz musterilere acik; kitle degisince secim sessizce
                   kalmasin, kullanici gondereceğini sandigi bildirimi gonderemez. */
                if (y !== 'customers') setPush(false);
              }}>
              <option value="customers">Müşterilerime</option>
              <option value="followers">Takipçilerime</option>
              <option value="both">Müşteri ve takipçilerime</option>
            </select>
          </div>

          <label className={kitle === 'customers' ? 'pnl-anahtar' : 'pnl-anahtar pnl-anahtar-kapali'}>
            <input
              type="checkbox"
              checked={push}
              disabled={kitle !== 'customers'}
              onChange={(e) => setPush(e.target.checked)}
            />
            <span className="pnl-anahtar-yazi">
              <span className="pnl-anahtar-ad">Telefonlarına bildirim de gitsin</span>
              <span className="pnl-anahtar-alt">
                {kitle === 'customers'
                  ? 'Uygulama açık olmasa da bildirim alırlar.'
                  : 'Bildirim yalnızca müşterilere gönderilebilir; takipçiler bunu kabul etmemiş olabilir.'}
              </span>
            </span>
          </label>

          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || metin.trim().length < 5}>
              {bekliyor ? 'Gönderiliyor…' : 'Duyuruyu gönder'}
            </button>
          </div>
        </form>
      </Diyalog>
    </>
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

/** Ayarlar: hesap ve oturum. */
export function PanelAyarlar() {
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
