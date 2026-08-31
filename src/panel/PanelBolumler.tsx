import { CalendarDays, FileText, Syringe, MessagesSquare, Heart, Settings, Clock, Megaphone, Stethoscope, Bell, Star, Plus, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  saglikKayitlariniOku,
  hatirlatmalariOku,
  gonderileriOku,
  ilanlarimiOku,
  duyurulariOku,
  hizmetleriOku,
  saatleriOku,
  ozelCalismaGunleriniOku,
  hizmetAdlariniOku,
  bildirimleriOku,
  degerlendirmeleriOku,
  duyuruOlusturVeGonder,
  ilanOlustur,
  gonderiPaylas,
  gonderiYorumlariniOku,
  gonderiYorumunaYanitYaz,
  ulasilabilirKisileriOku,
  turleriOku,
  type Tur,
  type Hizmet,
  type CalismaSaati,
  type OzelCalismaGunu,
  type Duyuru,
  type UlasilabilirKisi,
  type HizmetAdi,
  hizmetiAcKapat,
  calismaSaatiYaz,
  ozelCalismaGunuYaz,
  ozelCalismaGunuSil,
  saglikKaydiSil,
  klinikTurleriniOku,
  turAcKapat,
  sahiplendirmeBasvurulariniOku,
  sahiplendirmeBasvurusunuYanitla,
  type SahiplendirmeBasvurusu,
  type Gonderi,
  type GonderiYorumu,
} from './veri';
import { KAYIT_TURU, TUR, tarihYaz } from './sozluk';
import PanelListe from './PanelListe';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Diyalog from './Diyalog';
import { guvenliGorselleriYukle, imzaliGorselAdresi } from './medya-veri';

function DuyuruGorseli({ storageKey }: { storageKey: string }) {
  const [adres, setAdres] = useState<string | null>(null);
  useEffect(() => { let gecerli = true; imzaliGorselAdresi(storageKey).then((u) => { if (gecerli) setAdres(u); }).catch(() => setAdres('')); return () => { gecerli = false; }; }, [storageKey]);
  return adres ? <img className="pnl-duyuru-gorseli" src={adres} alt="Duyuru görseli" loading="lazy" /> : null;
}

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
  /* Silinen satirdan sonra liste sunucudan YENIDEN okunuyor (tetik). Satiri
     yerel olarak gizlemek daha ucuzdu ama silme sunucuda duserse ekran
     olmayan bir basariyi gostermeye devam ederdi. */
  const [tetik, setTetik] = useState(0);
  const [silmeHatasi, setSilmeHatasi] = useState<string | null>(null);

  /**
   * ⚠️ RECETEDEN FARKLI. Recete disariya verilmis bir belgedir, silinmez iptal
   * edilir. Saglik kaydi klinigin kendi defterindeki bir satir; yanlis girilen
   * bir muayeneyi duzeltmenin yolu silip yeniden yazmak. Mobil taraf da tam
   * boyle davraniyor (`removePetRecord`).
   */
  async function sil(id: string, ad: string) {
    if (!window.confirm(`"${ad}" kaydı silinsin mi? Bu işlem geri alınamaz.`)) return;
    setSilmeHatasi(null);
    try {
      await saglikKaydiSil(id);
      setTetik((t) => t + 1);
    } catch (e) {
      setSilmeHatasi((e as { message?: string })?.message ?? 'Kayıt silinemedi.');
    }
  }

  return (
    <PanelListe
      tetik={tetik}
      baslik="Sağlık kayıtları"
      aciklama="Kliniğinizde girilen muayene, tedavi, aşı ve parazit kayıtları. Yeni kayıt, Hastalar bölümünden hastanın kartı açılarak giriliyor."
      yukle={() => saglikKayitlariniOku(klinik)}
      bosBaslik="Henüz sağlık kaydı yok"
      bosAciklama="Bir hastaya muayene, aşı ya da tedavi kaydı girdiğinizde burada listelenir."
      anahtar={(k) => k.id}
      altNot={{ ikon: Stethoscope, metin: 'Yeni kayıt Hastalar bölümünden, reçete Reçeteler bölümünden giriliyor.' }}
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
            {silmeHatasi ? <p className="pnl-hata-kucuk">{silmeHatasi}</p> : null}
          </div>
          <span className="pnl-kisi-eylem">
            <button
              type="button"
              className="pnl-dugme pnl-dugme-olumsuz"
              onClick={() => void sil(k.id, k.title || (k.kind ? (KAYIT_TURU[k.kind] ?? k.kind) : 'Kayıt'))}
            >
              Sil
            </button>
          </span>
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
  const [gorseller, setGorseller] = useState<File[]>([]);
  const [bekliyor, setBekliyor] = useState(false);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [tazele, setTazele] = useState(0);
  const [yorumGonderisi, setYorumGonderisi] = useState<Gonderi | null>(null);
  const [yorumlar, setYorumlar] = useState<GonderiYorumu[]>([]);
  const [yanitlanan, setYanitlanan] = useState<GonderiYorumu | null>(null);
  const [yanit, setYanit] = useState('');

  async function yorumlariAc(gonderi: Gonderi) {
    setBekliyor(true); setIslemHatasi(null);
    try { setYorumlar(await gonderiYorumlariniOku(gonderi.id)); setYorumGonderisi(gonderi); }
    catch (e) { setIslemHatasi((e as Error).message); }
    finally { setBekliyor(false); }
  }

  async function yanitiGonder(e: React.FormEvent) {
    e.preventDefault(); if (!yorumGonderisi || !yanitlanan || yanit.trim().length<1 || bekliyor) return;
    setBekliyor(true); setIslemHatasi(null);
    try { await gonderiYorumunaYanitYaz(yorumGonderisi.id, yanitlanan.id, yanit); setYanit(''); setYanitlanan(null); setYorumlar(await gonderiYorumlariniOku(yorumGonderisi.id)); setBilgi('Yanıt gönderildi.'); setTazele((n) => n+1); }
    catch (e) { setIslemHatasi((e as Error).message); }
    finally { setBekliyor(false); }
  }

  async function paylas(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      const anahtarlar = await guvenliGorselleriYukle(gorseller, `post-${klinik}`);
      await gonderiPaylas(klinik, metin, herkese, anahtarlar);
      setAcik(false); setMetin(''); setGorseller([]);
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
      yukle={() => gonderileriOku(klinik)}
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
            {g.media?.[0]?.storage_key ? <DuyuruGorseli storageKey={g.media[0].storage_key} /> : null}
            <p className="pnl-kisi-ad">{(g.body || 'Metinsiz paylaşım').slice(0, 90)}</p>
            <p className="pnl-kisi-rol">{g.like_count} beğeni · {g.comment_count} yorum</p>
            <p className="pnl-kisi-ek pnl-soluk">{tarihYaz(g.created_at, false)}</p>
            <button type="button" className="pnl-dugme pnl-dugme-sade" disabled={bekliyor} onClick={() => void yorumlariAc(g)}>Yorumları yönet</button>
          </div>
        </>
      )}
      />

      <Diyalog acik={!!yorumGonderisi} kapat={() => { setYorumGonderisi(null); setYanitlanan(null); setYanit(''); }} baslik="Gönderi yorumları"
        aciklama="Yorumları okuyun ve kliniğiniz adına yanıtlayın.">
        {yorumlar.length===0 ? <p className="pnl-widget-not">Bu gönderide henüz yorum yok.</p> : <div className="pnl-topluluk-yorum-listesi">{yorumlar.map((yorum) => <article key={yorum.id} className={yorum.parent_id ? 'pnl-topluluk-yorum pnl-topluluk-yorum-yanit' : 'pnl-topluluk-yorum'}><div><strong>{yorum.author_name || 'Veterito kullanıcısı'}</strong><small>{tarihYaz(yorum.created_at, false)}</small></div><p>{yorum.body || (yorum.media_key ? 'Görselli yorum' : 'İçerik yok')}</p>{!yorum.parent_id ? <button type="button" className="pnl-metin-dugme" onClick={() => { setYanitlanan(yorum); setYanit(''); }}>Yanıtla{yorum.reply_count ? ` · ${yorum.reply_count} yanıt` : ''}</button> : null}</article>)}</div>}
        {yanitlanan ? <form onSubmit={yanitiGonder}><div className="pnl-alan"><label htmlFor="pnl-yorum-yanit">{yanitlanan.author_name || 'Kullanıcı'} adlı kişiye yanıt</label><textarea id="pnl-yorum-yanit" required minLength={1} maxLength={2000} value={yanit} onChange={(e) => setYanit(e.target.value)} /><span className="pnl-alan-ipucu">{yanit.length} / 2000</span></div><div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setYanitlanan(null)}>Vazgeç</button><button className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || !yanit.trim()}>{bekliyor ? 'Gönderiliyor…' : 'Yanıtla'}</button></div></form> : null}
      </Diyalog>

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
          <div className="pnl-alan"><label htmlFor="pnl-post-gorseller">Görseller (en fazla 8)</label><input id="pnl-post-gorseller" type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={(e) => setGorseller(Array.from(e.target.files ?? []).slice(0, 8))} /><span className="pnl-alan-ipucu">{gorseller.length ? `${gorseller.length} görsel seçildi.` : 'Görsel seçilmedi.'}</span></div>
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
  const [form, setForm] = useState({ baslik: '', aciklama: '', tur: 'cat', cinsiyet: 'unknown', kosullar: '', sehir: '', ilce: '' });
  const [gorseller, setGorseller] = useState<File[]>([]);
  const [basvurular, setBasvurular] = useState<SahiplendirmeBasvurusu[]>([]);
  const [bekliyor, setBekliyor] = useState(false);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [tazele, setTazele] = useState(0);

  useEffect(() => { turleriOku().then(setTurler).catch(() => setTurler([])); }, []);
  useEffect(() => { sahiplendirmeBasvurulariniOku().then(setBasvurular).catch(() => setBasvurular([])); }, [tazele]);

  async function olustur(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      const anahtarlar = await guvenliGorselleriYukle(gorseller, 'adoption');
      await ilanOlustur({ ...form, gorseller: anahtarlar });
      setAcik(false); setForm({ baslik: '', aciklama: '', tur: 'cat', cinsiyet: 'unknown', kosullar: '', sehir: '', ilce: '' }); setGorseller([]);
      /* ⚠️ "Yayimlandi" DEMIYORUZ: ilan `pending` aciliyor ve moderasyondan
         geciyor. Yayimlandi demek, olmayan bir seyi soylemek olurdu. */
      setBilgi('İlanınız oluşturuldu. Yayımlanmadan önce incelemeden geçiyor.');
      setTazele((n) => n + 1);
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  async function basvuruyuYanitla(id: string, durum: 'accepted' | 'rejected') {
    if (bekliyor) return; setBekliyor(true); setIslemHatasi(null);
    try { await sahiplendirmeBasvurusunuYanitla(id, durum); setBilgi(durum === 'accepted' ? 'Başvuru kabul edildi; iletişim bilgisi açıldı.' : 'Başvuru reddedildi.'); setTazele((n) => n + 1); }
    catch (e) { setIslemHatasi((e as Error).message); }
    finally { setBekliyor(false); }
  }

  return (
    <>
      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}

      <PanelListe
      key={tazele}
      baslik="Sahiplendirme"
      aciklama="Sahiplendirme ilanları. Kliniğinize bırakılan bir hayvan için ilan açabilirsiniz."
      yukle={ilanlarimiOku}
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
            {i.photos?.[0]?.storage_key ? <DuyuruGorseli storageKey={i.photos[0].storage_key} /> : null}
            <p className="pnl-kisi-ad">{i.title || 'Başlıksız ilan'}</p>
            <p className="pnl-kisi-rol">{i.species_code ? (TUR[i.species_code] ?? i.species_code) : 'Tür belirtilmemiş'}</p>
            <p className="pnl-kisi-ek">Durum: {i.status}{i.city ? ` · ${i.district ? `${i.district}, ` : ''}${i.city}` : ''}</p>
            {i.reject_reason ? <p className="pnl-hata-kucuk">Ret gerekçesi: {i.reject_reason}</p> : null}
            {basvurular.filter((b) => b.listing_id === i.id).map((b) => <div key={b.id} className="pnl-basvuru-karti"><strong>Başvuru · {b.status === 'pending' ? 'bekliyor' : b.status === 'accepted' ? 'kabul edildi' : 'reddedildi'}</strong><p>{b.message}</p>{b.status === 'accepted' && b.contact_phone ? <a href={`tel:${b.contact_phone}`}>{b.contact_phone}</a> : null}{b.status === 'pending' ? <span className="pnl-satir-eylem"><button type="button" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor} onClick={() => void basvuruyuYanitla(b.id, 'accepted')}>Kabul et</button><button type="button" className="pnl-dugme pnl-dugme-sade" disabled={bekliyor} onClick={() => void basvuruyuYanitla(b.id, 'rejected')}>Reddet</button></span> : null}</div>)}
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
          <div className="pnl-form-ikili"><div className="pnl-alan"><label htmlFor="pnl-i-sehir">Şehir</label><input id="pnl-i-sehir" maxLength={80} value={form.sehir} onChange={(e) => setForm((f) => ({ ...f, sehir: e.target.value }))} /></div><div className="pnl-alan"><label htmlFor="pnl-i-ilce">İlçe</label><input id="pnl-i-ilce" maxLength={80} value={form.ilce} onChange={(e) => setForm((f) => ({ ...f, ilce: e.target.value }))} /></div></div>
          <div className="pnl-alan"><label htmlFor="pnl-i-gorseller">Görseller (en fazla 8)</label><input id="pnl-i-gorseller" type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={(e) => setGorseller(Array.from(e.target.files ?? []).slice(0, 8))} /><span className="pnl-alan-ipucu">{gorseller.length ? `${gorseller.length} görsel seçildi.` : 'Görsel seçilmedi.'}</span></div>
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

/** Klinik profili: hizmetler ve calisma saatleri. */
export function PanelProfil({ klinik }: { klinik: string }) {
  const [hizmetler, setHizmetler] = useState<Hizmet[] | null>(null);
  const [saatler, setSaatler] = useState<CalismaSaati[]>([]);
  const [katalog, setKatalog] = useState<HizmetAdi[]>([]);
  const [turKatalog, setTurKatalog] = useState<Tur[]>([]);
  const [acikTurler, setAcikTurler] = useState<string[]>([]);
  const [turIsleyen, setTurIsleyen] = useState<string | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [isleyen, setIsleyen] = useState<string | null>(null);
  const [saatHatasi, setSaatHatasi] = useState<string | null>(null);
  const [saatKaydediliyor, setSaatKaydediliyor] = useState(false);
  const [saatMesaji, setSaatMesaji] = useState<string | null>(null);
  const [ozelGunler, setOzelGunler] = useState<OzelCalismaGunu[]>([]);
  const [ozelGunFormu, setOzelGunFormu] = useState({
    tarih: '', aciklama: '', kapali: true, acilis: '09:00', kapanis: '18:00',
  });
  const [ozelGunIsleniyor, setOzelGunIsleniyor] = useState<string | null>(null);
  const [ozelGunHatasi, setOzelGunHatasi] = useState<string | null>(null);
  const [ozelGunMesaji, setOzelGunMesaji] = useState<string | null>(null);

  useEffect(() => {
    let iptal = false;
    setHizmetler(null); setHata(null);
    Promise.all([
      hizmetleriOku(klinik), saatleriOku(klinik), hizmetAdlariniOku(),
      turleriOku(), klinikTurleriniOku(klinik), ozelCalismaGunleriniOku(klinik),
    ])
      .then(([h, sa, k, tk, at, og]) => {
        if (iptal) return;
        setHizmetler(h); setSaatler(sa); setKatalog(k as HizmetAdi[]);
        setTurKatalog(tk as Tur[]); setAcikTurler(at as string[]);
        setOzelGunler(og as OzelCalismaGunu[]);
      })
      .catch((e: { message?: string }) => { if (!iptal) { setHizmetler([]); setHata(e?.message ?? ''); } });
    return () => { iptal = true; };
  }, [klinik]);

  if (hizmetler === null) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} />;

  const acikKodlar = new Set(hizmetler.map((h) => h.service_code));
  const secili = (kod: string) => hizmetler.find((h) => h.service_code === kod);

  /**
   * ⚠️ IYIMSER GUNCELLEME, AMA GERI SARILIYOR. Anahtar aninda donuyor cunku
   * sunucuyu beklemek dokunma hissini olduruyor; istek duserse eski hale
   * DONULUYOR ve sebep yaziliyor. Iyimser gosterip hatayi yutmak, "kaydettim"
   * deyip kaydetmemekle ayni sey olurdu.
   */
  async function hizmetDegistir(kod: string, acik: boolean) {
    setIsleyen(kod); setHata(null);
    const oncekiler = hizmetler as Hizmet[];
    setHizmetler(acik
      ? [...oncekiler, { service_code: kod, note: null, price_min: null, price_max: null } as Hizmet]
      : oncekiler.filter((h) => h.service_code !== kod));
    try {
      await hizmetiAcKapat(klinik, kod, acik);
    } catch (e) {
      setHizmetler(oncekiler);
      setHata((e as { message?: string })?.message ?? 'Hizmet güncellenemedi.');
    } finally {
      setIsleyen(null);
    }
  }

  /** Hizmet anahtariyla ayni desen: iyimser cevir, duserse geri sar. */
  async function turDegistir(kod: string, acik: boolean) {
    setTurIsleyen(kod); setHata(null);
    const oncekiler = acikTurler;
    setAcikTurler(acik ? [...oncekiler, kod] : oncekiler.filter((t) => t !== kod));
    try {
      await turAcKapat(klinik, kod, acik);
    } catch (e) {
      setAcikTurler(oncekiler);
      setHata((e as { message?: string })?.message ?? 'Tür güncellenemedi.');
    } finally {
      setTurIsleyen(null);
    }
  }

  /* Yedi gunun hepsi gosteriliyor: veritabaninda satiri olmayan gun de
     duzenlenebilmeli, yoksa hic girilmemis bir gun sonsuza kadar bos kalirdi.
     Pazartesiden basliyor, pazar sona atiliyor. */
  const gunSirasi = [1, 2, 3, 4, 5, 6, 0];
  const gunler = gunSirasi.map((g) =>
    saatler.find((s2) => s2.weekday === g)
      ?? ({ weekday: g, is_closed: true, opens_at: null, closes_at: null } as CalismaSaati));

  function gunuDegistir(gun: number, degisiklik: Partial<CalismaSaati>) {
    setSaatMesaji(null);
    setSaatler((onceki) => {
      const varMi = onceki.some((s2) => s2.weekday === gun);
      const temel = onceki.find((s2) => s2.weekday === gun)
        ?? ({ weekday: gun, is_closed: true, opens_at: null, closes_at: null } as CalismaSaati);
      const yeni = { ...temel, ...degisiklik };
      return varMi ? onceki.map((s2) => (s2.weekday === gun ? yeni : s2)) : [...onceki, yeni];
    });
  }

  /**
   * ⚠️ YEDI GUN DE YAZILIYOR, yalniz degisenler degil. Hangi gunun degistigini
   * izlemek bir defter daha tutmak demekti ve o defterin eskimesi sessiz bir
   * hata dogururdu. Upsert idempotent; ayni degeri tekrar yazmanin zarari yok.
   */
  async function saatleriKaydet() {
    setSaatKaydediliyor(true); setSaatHatasi(null); setSaatMesaji(null);
    try {
      for (const g of gunler) {
        await calismaSaatiYaz({
          klinik,
          gun: g.weekday,
          kapali: g.is_closed,
          acilis: g.opens_at,
          kapanis: g.closes_at,
        });
      }
      setSaatMesaji('Çalışma saatleri kaydedildi.');
    } catch (e) {
      setSaatHatasi((e as { message?: string })?.message ?? 'Saatler kaydedilemedi.');
    } finally {
      setSaatKaydediliyor(false);
    }
  }

  async function ozelGunuKaydet(e: React.FormEvent) {
    e.preventDefault();
    setOzelGunHatasi(null); setOzelGunMesaji(null);
    const aciklama = ozelGunFormu.aciklama.trim();
    if (!ozelGunFormu.tarih || aciklama.length < 2) {
      setOzelGunHatasi('Tarih ve en az 2 karakterlik bir açıklama girin.');
      return;
    }
    if (!ozelGunFormu.kapali && (!ozelGunFormu.acilis || !ozelGunFormu.kapanis
      || ozelGunFormu.acilis >= ozelGunFormu.kapanis)) {
      setOzelGunHatasi('Açık özel günde kapanış saati açılıştan sonra olmalı.');
      return;
    }
    setOzelGunIsleniyor('kaydet');
    try {
      const kayit = await ozelCalismaGunuYaz({
        klinik, tarih: ozelGunFormu.tarih, aciklama,
        kapali: ozelGunFormu.kapali,
        acilis: ozelGunFormu.kapali ? null : ozelGunFormu.acilis,
        kapanis: ozelGunFormu.kapali ? null : ozelGunFormu.kapanis,
      });
      setOzelGunler((onceki) => [...onceki.filter((g) => g.special_date !== kayit.special_date), kayit]
        .sort((a, b) => a.special_date.localeCompare(b.special_date)));
      setOzelGunFormu({ tarih: '', aciklama: '', kapali: true, acilis: '09:00', kapanis: '18:00' });
      setOzelGunMesaji('Özel gün kaydedildi; bu tarih haftalık mesainin yerine geçecek.');
    } catch (e2) {
      setOzelGunHatasi((e2 as { message?: string })?.message ?? 'Özel gün kaydedilemedi.');
    } finally {
      setOzelGunIsleniyor(null);
    }
  }

  async function ozelGunuSil(gun: OzelCalismaGunu) {
    if (!window.confirm(`${gun.label} (${gun.special_date}) özel günü kaldırılsın mı?`)) return;
    setOzelGunHatasi(null); setOzelGunMesaji(null); setOzelGunIsleniyor(gun.id);
    try {
      await ozelCalismaGunuSil(klinik, gun.id);
      setOzelGunler((onceki) => onceki.filter((g) => g.id !== gun.id));
      setOzelGunMesaji('Özel gün kaldırıldı; bu tarihte haftalık mesai yeniden geçerli.');
    } catch (e2) {
      setOzelGunHatasi((e2 as { message?: string })?.message ?? 'Özel gün kaldırılamadı.');
    } finally {
      setOzelGunIsleniyor(null);
    }
  }

  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        <div>
          <p className="pnl-aciklama">
            Verdiğiniz hizmetler ve çalışma saatleriniz. Bu bilgiler klinik sayfanızda ve
            uygulamadaki aramalarda görünür.
          </p>
        </div>
      </header>

      <div className="pnl-izgara-ikili pnl-profil-ust">
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><Stethoscope size={17} /></span>
            <h3>Baktığınız türler</h3>
          </header>
          <div className="pnl-widget-govde">
            <p className="pnl-widget-not">
              Seçtiğiniz türlerde kliniğiniz uygulama aramalarında görünür.
            </p>
            {turKatalog.length === 0 ? (
              <p className="pnl-widget-bos">Tür listesi yüklenemedi.</p>
            ) : (
              <ul className="pnl-profil-secim-izgara pnl-profil-tur-grid">
                {turKatalog.map((t) => {
                  const acik = acikTurler.includes(t.code);
                  return (
                    <li key={t.code}>
                      <label className={acik ? 'pnl-anahtar pnl-profil-anahtar' : 'pnl-anahtar pnl-profil-anahtar pnl-anahtar-kapali'}>
                        <input
                          type="checkbox"
                          checked={acik}
                          disabled={turIsleyen !== null}
                          onChange={(e) => void turDegistir(t.code, e.target.checked)}
                        />
                        <span className="pnl-anahtar-yazi">
                          <span className="pnl-anahtar-ad">{t.name_tr}</span>
                        </span>
                      </label>
                    </li>
                  );
                })}
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
            <ul className="pnl-satirlar">
              {gunler.map((g) => (
                <li key={g.weekday} className="pnl-satir">
                  <label className={g.is_closed ? 'pnl-anahtar pnl-anahtar-kapali' : 'pnl-anahtar'}>
                    <input
                      type="checkbox"
                      checked={!g.is_closed}
                      onChange={(e) => gunuDegistir(g.weekday, { is_closed: !e.target.checked })}
                    />
                    <span className="pnl-anahtar-yazi">
                      <span className="pnl-anahtar-ad">{GUNLER[g.weekday] ?? `Gün ${g.weekday}`}</span>
                    </span>
                  </label>
                  <span className="pnl-saat-ikili">
                    {g.is_closed ? (
                      <span className="pnl-soluk">Kapalı</span>
                    ) : (
                      <>
                        <input
                          className="pnl-saat-alan"
                          type="time"
                          value={saatKirp(g.opens_at)}
                          aria-label={`${GUNLER[g.weekday] ?? ''} açılış saati`}
                          onChange={(e) => gunuDegistir(g.weekday, { opens_at: e.target.value || null })}
                        />
                        <span aria-hidden="true">–</span>
                        <input
                          className="pnl-saat-alan"
                          type="time"
                          value={saatKirp(g.closes_at)}
                          aria-label={`${GUNLER[g.weekday] ?? ''} kapanış saati`}
                          onChange={(e) => gunuDegistir(g.weekday, { closes_at: e.target.value || null })}
                        />
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pnl-widget-eylem">
              <button
                type="button"
                className="pnl-dugme pnl-dugme-olumlu"
                disabled={saatKaydediliyor}
                onClick={() => void saatleriKaydet()}
              >
                {saatKaydediliyor ? 'Kaydediliyor...' : 'Saatleri kaydet'}
              </button>
              {saatMesaji ? <span className="pnl-soluk">{saatMesaji}</span> : null}
            </div>
            {saatHatasi ? <p className="pnl-hata-kucuk">{saatHatasi}</p> : null}

            <section className="pnl-ozel-gunler">
              <header className="pnl-ozel-gun-basi">
                <span className="pnl-widget-ikon" aria-hidden="true"><CalendarDays size={16} /></span>
                <div>
                  <h4>Özel günler</h4>
                  <p>Bayram, nöbet veya eğitim günü haftalık mesainin yerine geçer.</p>
                </div>
              </header>

              <form className="pnl-ozel-gun-formu" onSubmit={(e) => void ozelGunuKaydet(e)}>
                <label className="pnl-alan">
                  <span>Tarih</span>
                  <input type="date" required value={ozelGunFormu.tarih}
                    onChange={(e) => setOzelGunFormu((f) => ({ ...f, tarih: e.target.value }))} />
                </label>
                <label className="pnl-alan pnl-ozel-gun-aciklama">
                  <span>Açıklama</span>
                  <input type="text" required minLength={2} maxLength={80}
                    placeholder="Örn. Bayramın 1. günü" value={ozelGunFormu.aciklama}
                    onChange={(e) => setOzelGunFormu((f) => ({ ...f, aciklama: e.target.value }))} />
                </label>
                <label className="pnl-ozel-gun-kapali">
                  <input type="checkbox" checked={ozelGunFormu.kapali}
                    onChange={(e) => setOzelGunFormu((f) => ({ ...f, kapali: e.target.checked }))} />
                  <span>Kapalı</span>
                </label>
                {!ozelGunFormu.kapali ? (
                  <div className="pnl-ozel-gun-saatleri">
                    <input type="time" aria-label="Özel gün açılış saati" value={ozelGunFormu.acilis}
                      onChange={(e) => setOzelGunFormu((f) => ({ ...f, acilis: e.target.value }))} />
                    <span aria-hidden="true">–</span>
                    <input type="time" aria-label="Özel gün kapanış saati" value={ozelGunFormu.kapanis}
                      onChange={(e) => setOzelGunFormu((f) => ({ ...f, kapanis: e.target.value }))} />
                  </div>
                ) : null}
                <button type="submit" className="pnl-dugme pnl-dugme-olumlu"
                  disabled={ozelGunIsleniyor !== null}>
                  {ozelGunIsleniyor === 'kaydet' ? 'Kaydediliyor…' : 'Özel günü kaydet'}
                </button>
              </form>

              {ozelGunMesaji ? <p className="pnl-bilgi pnl-ozel-gun-bildirim" role="status">{ozelGunMesaji}</p> : null}
              {ozelGunHatasi ? <p className="pnl-hata-kucuk">{ozelGunHatasi}</p> : null}
              {ozelGunler.length > 0 ? (
                <ul className="pnl-ozel-gun-listesi">
                  {ozelGunler.map((g) => (
                    <li key={g.id}>
                      <time dateTime={g.special_date}>
                        {new Date(`${g.special_date}T12:00:00`).toLocaleDateString('tr-TR', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </time>
                      <span className="pnl-ozel-gun-ozet">
                        <strong>{g.label}</strong>
                        <small>{g.is_closed ? 'Kapalı' : `${saatKirp(g.opens_at)}–${saatKirp(g.closes_at)}`}</small>
                      </span>
                      <button type="button" className="pnl-dugme pnl-dugme-sade pnl-dugme-kucuk"
                        onClick={() => setOzelGunFormu({
                          tarih: g.special_date, aciklama: g.label, kapali: g.is_closed,
                          acilis: saatKirp(g.opens_at) === '--:--' ? '09:00' : saatKirp(g.opens_at),
                          kapanis: saatKirp(g.closes_at) === '--:--' ? '18:00' : saatKirp(g.closes_at),
                        })}>
                        Düzenle
                      </button>
                      <button type="button" className="pnl-ikon-dugme pnl-ikon-dugme-olumsuz"
                        aria-label={`${g.label} özel gününü kaldır`}
                        disabled={ozelGunIsleniyor !== null}
                        onClick={() => void ozelGunuSil(g)}>
                        <Trash2 size={15} />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="pnl-widget-bos pnl-ozel-gun-bos">Henüz özel gün eklenmedi.</p>
              )}
            </section>
          </div>
        </section>
      </div>

      <section className="pnl-widget pnl-profil-hizmetler">
        <header className="pnl-widget-basi">
          <span className="pnl-widget-ikon" aria-hidden="true"><Stethoscope size={17} /></span>
          <h3>Hizmetler</h3>
        </header>
        <div className="pnl-widget-govde">
          <p className="pnl-widget-not">
            Sunduğunuz hizmetleri seçin. Kompakt görünümde tüm listeyi tek bakışta yönetebilirsiniz.
          </p>
          {katalog.length === 0 ? (
            <p className="pnl-widget-bos">Hizmet listesi yüklenemedi.</p>
          ) : (
            <ul className="pnl-profil-secim-izgara pnl-hizmet-grid">
              {katalog.map((k) => {
                const acik = acikKodlar.has(k.code);
                const kayit = secili(k.code);
                return (
                  <li key={k.code}>
                    <label className={acik ? 'pnl-anahtar pnl-profil-anahtar' : 'pnl-anahtar pnl-profil-anahtar pnl-anahtar-kapali'}>
                      <input
                        type="checkbox"
                        checked={acik}
                        disabled={isleyen !== null}
                        onChange={(e) => void hizmetDegistir(k.code, e.target.checked)}
                      />
                      <span className="pnl-anahtar-yazi">
                        <span className="pnl-anahtar-ad">{k.name_tr}</span>
                        {kayit?.note ? <span className="pnl-anahtar-alt">{kayit.note}</span> : null}
                      </span>
                      {acik && kayit && (kayit.price_min || kayit.price_max) ? (
                        <span className="pnl-profil-fiyat">
                          {`${((kayit.price_min ?? kayit.price_max ?? 0) / 100).toLocaleString('tr-TR')} ₺`}
                        </span>
                      ) : null}
                    </label>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </section>
  );
}

/** Kimin duyurusu, kime gitti, kac kisiye ulasti. */
const KITLE: Record<string, string> = {
  customers: 'Müşterilerinize',
  followers: 'Takipçilerinize',
  both: 'Müşteri ve takipçilerinize',
  selected: 'Seçtiğiniz kişilere',
};

export function PanelDuyurular({ klinik }: { klinik: string }) {
  const [acik, setAcik] = useState(false);
  const [metin, setMetin] = useState('');
  const [kitle, setKitle] = useState<'customers' | 'followers' | 'both' | 'selected'>('customers');
  const [push, setPush] = useState(false);
  const [teslim, setTeslim] = useState<'announcement' | 'notification'>('announcement');
  const [sehir, setSehir] = useState('');
  const [tur, setTur] = useState('');
  const [kisiler, setKisiler] = useState<UlasilabilirKisi[]>([]);
  const [secilenler, setSecilenler] = useState<string[]>([]);
  const [gorseller, setGorseller] = useState<File[]>([]);
  const [bekliyor, setBekliyor] = useState(false);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [tazele, setTazele] = useState(0);

  useEffect(() => {
    ulasilabilirKisileriOku(klinik).then(setKisiler).catch(() => setKisiler([]));
  }, [klinik]);

  async function gonder(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      const anahtarlar = await guvenliGorselleriYukle(gorseller, `announcement-${klinik}`);
      const kisi = await duyuruOlusturVeGonder(klinik, {
        metin, kitle, pushGonder: push, teslim, sehir, tur, alicilar: secilenler, gorseller: anahtarlar,
      });
      setAcik(false); setMetin(''); setPush(false); setTeslim('announcement'); setSehir(''); setTur(''); setSecilenler([]); setGorseller([]);
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
            {d.media?.[0]?.storage_key ? <DuyuruGorseli storageKey={d.media[0].storage_key} /> : null}
            <p className="pnl-kisi-ad">{(d.body || 'Metinsiz duyuru').slice(0, 110)}</p>
            <p className="pnl-kisi-rol">{d.audience ? (KITLE[d.audience] ?? d.audience) : 'Kitle belirtilmemiş'}</p>
            <p className="pnl-kisi-ek">{d.delivery_kind === 'notification' ? 'İşlemsel bildirim' : 'Duyuru'}{d.channels?.includes('push') ? ' · uygulama içi + push' : ' · uygulama içi'}</p>
            {d.target_city || d.target_species ? <p className="pnl-kisi-ek pnl-soluk">Filtre: {[d.target_city, d.target_species ? (TUR[d.target_species] ?? d.target_species) : null].filter(Boolean).join(' · ')}</p> : null}
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
            <label htmlFor="pnl-duyuru-teslim">Gönderim türü</label>
            <select id="pnl-duyuru-teslim" value={teslim} onChange={(e) => {
              const y = e.target.value as 'announcement' | 'notification'; setTeslim(y);
              if (y === 'notification') { setKitle('customers'); setPush(true); }
            }}><option value="announcement">Duyuru</option><option value="notification">İşlemsel bildirim</option></select>
            <span className="pnl-alan-ipucu">İşlemsel bildirim yalnız müşterilere gider; pazarlama duyurusu yerine kullanılmamalıdır.</span>
          </div>

          <div className="pnl-alan">
            <label htmlFor="pnl-duyuru-kitle">Kime gitsin</label>
            <select
              id="pnl-duyuru-kitle"
              value={kitle}
              onChange={(e) => {
                const y = e.target.value as 'customers' | 'followers' | 'both' | 'selected';
                setKitle(y);
                /* ⚠️ Push yalniz musterilere acik; kitle degisince secim sessizce
                   kalmasin, kullanici gondereceğini sandigi bildirimi gonderemez. */
                if (y !== 'customers') { setPush(false); if (teslim === 'notification') setTeslim('announcement'); }
              }}>
              <option value="customers">Müşterilerime</option>
              <option value="followers">Takipçilerime</option>
              <option value="both">Müşteri ve takipçilerime</option>
              <option value="selected">Seçtiğim kişilere</option>
            </select>
          </div>

          {kitle === 'selected' ? <fieldset className="pnl-secilebilir-liste"><legend>Alıcılar ({secilenler.length} seçili)</legend>{kisiler.length === 0 ? <p className="pnl-not">Seçilebilecek müşteri veya takipçi yok.</p> : kisiler.map((k) => <label key={k.user_id}><input type="checkbox" checked={secilenler.includes(k.user_id)} onChange={(e) => setSecilenler((l) => e.target.checked ? [...l, k.user_id] : l.filter((id) => id !== k.user_id))} /><span>{k.display_name || 'İsimsiz kullanıcı'} <small>{k.relation === 'customer' ? 'müşteri' : 'takipçi'}</small></span></label>)}</fieldset> : null}

          <div className="pnl-form-ikili"><div className="pnl-alan"><label htmlFor="pnl-duyuru-sehir">Şehir filtresi (isteğe bağlı)</label><input id="pnl-duyuru-sehir" maxLength={80} value={sehir} onChange={(e) => setSehir(e.target.value)} placeholder="Örn. İstanbul" /></div><div className="pnl-alan"><label htmlFor="pnl-duyuru-tur">Hayvan türü filtresi (isteğe bağlı)</label><select id="pnl-duyuru-tur" value={tur} onChange={(e) => setTur(e.target.value)}><option value="">Tüm türler</option>{Object.entries(TUR).map(([kod, ad]) => <option key={kod} value={kod}>{ad}</option>)}</select></div></div>

          <div className="pnl-alan"><label htmlFor="pnl-duyuru-gorsel">Görseller (isteğe bağlı, en fazla 4)</label><input id="pnl-duyuru-gorsel" type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={(e) => setGorseller(Array.from(e.target.files ?? []).slice(0, 4))} /><span className="pnl-alan-ipucu">{gorseller.length ? `${gorseller.length} görsel seçildi. WebP'ye çevrilip EXIF verisi atılır.` : 'Görsel seçilmedi.'}</span></div>

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
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || metin.trim().length < 5 || (kitle === 'selected' && secilenler.length === 0)}>
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
