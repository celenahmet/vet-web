import { useCallback, useEffect, useState } from 'react';
import { Check, X, CalendarCheck, Ban, RefreshCw, CalendarClock } from 'lucide-react';

import { randevulariOku, randevuDurumunuDegistir, baskaSaatOner, type Randevu } from './veri';
import { RANDEVU_DURUMU, IZINLI_GECISLER, tarihYaz, gorecelizaman } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Diyalog from './Diyalog';

/**
 * RANDEVULAR — panelin is yapan ekrani
 *
 * ⚠️ NEDEN VAR (Ahmet, 24.08.2026): *"butonlari yok"*. Panelin ilk surumu
 * randevulari LISTELIYORDU ama hicbir sey yapamiyordu. Klinik icin randevu
 * ekrani okunacak bir tablo degil, onaylanacak bir kuyruk.
 *
 * ⚠️ DUGME SAYISI SUNUCUNUN KURALINDAN GELIYOR. `IZINLI_GECISLER` sunucudaki
 * makinenin kopyasi; "Onayla" yalnizca yeni talepte, "Geldi" yalnizca onaylanmis
 * randevuda cikiyor. Bu bir yetki katmani DEGIL: kopya eskise bile karari sunucu
 * veriyor ve gecersiz gecisi reddettigi olculdu.
 *
 * ⚠️ IYIMSER GUNCELLEME YOK. Islem bitene kadar satir kilitli ve donuyor; sunucu
 * onaylamadan ekranda "Onaylandi" yazmiyor. Sebep: randevu ikinci bir calisan
 * tarafindan ayni anda degistirilmis olabilir. Ekranin dogru gorunmesi degil
 * DOGRU olmasi gerekiyor.
 */
export default function PanelRandevular({ klinik }: { klinik: string }) {
  const [liste, setListe] = useState<Randevu[] | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [islemde, setIslemde] = useState<string | null>(null);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [suzgec, setSuzgec] = useState<'bekleyen' | 'tumu'>('bekleyen');
  /* Baska saat onerme diyalogu: hangi randevu, hangi saat, hangi not. */
  const [oneri, setOneri] = useState<Randevu | null>(null);
  const [oneriZaman, setOneriZaman] = useState('');
  const [oneriNot, setOneriNot] = useState('');
  const [oneriBekliyor, setOneriBekliyor] = useState(false);

  const yukle = useCallback(() => {
    setHata(null);
    randevulariOku(klinik)
      .then(setListe)
      .catch((e: { message?: string }) => { setListe([]); setHata(e?.message ?? ''); });
  }, [klinik]);

  useEffect(() => { setListe(null); yukle(); }, [yukle]);

  async function degistir(randevu: Randevu, durum: string) {
    setIslemde(randevu.id);
    setIslemHatasi(null);
    try {
      await randevuDurumunuDegistir(randevu.id, durum);
      /*
       * ⚠️ Tek satiri elde guncellemek yerine listeyi sunucudan tekrar okuyoruz.
       * Durum degisince sunucu tarafinda baska sey de degisebiliyor (bildirim,
       * sayaclar); elde guncellenen ekran bir sure sonra gercekle ayrisirdi.
       */
      const taze = await randevulariOku(klinik);
      setListe(taze);
    } catch (e) {
      setIslemHatasi((e as { message?: string })?.message ?? '');
    } finally {
      setIslemde(null);
    }
  }

  async function saatOner(e: React.FormEvent) {
    e.preventDefault();
    if (!oneri || oneriBekliyor) return;
    setOneriBekliyor(true);
    setIslemHatasi(null);
    try {
      /*
       * ⚠️ `datetime-local` YEREL saat veriyor, bolge bilgisi TASIMIYOR.
       * `new Date(...)` tarayicinin bolgesinde yorumluyor ve `toISOString()`
       * UTC'ye ceviriyor. Bu dogru davranis: klinik kendi saatini yaziyor,
       * sunucu evrensel saati sakliyor. Ham dizeyi gondermek, sunucunun onu
       * UTC sanmasina ve randevunun saatler kaymasina yol acardi.
       */
      await baskaSaatOner(oneri.id, new Date(oneriZaman).toISOString(), oneriNot.trim() || undefined);
      setOneri(null); setOneriZaman(''); setOneriNot('');
      setListe(await randevulariOku(klinik));
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally {
      setOneriBekliyor(false);
    }
  }

  if (liste === null) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} tekrar={yukle} />;

  const bekleyenDurumlar = new Set(['requested', 'confirmed', 'proposed']);
  const gosterilen = suzgec === 'bekleyen' ? liste.filter((r) => bekleyenDurumlar.has(r.status)) : liste;
  const bekleyenSayisi = liste.filter((r) => bekleyenDurumlar.has(r.status)).length;

  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        <div>
          <h2>Randevular</h2>
          <p className="pnl-aciklama">
            Hayvan sahiplerinin gönderdiği randevu talepleri burada. Onayladığınız randevu
            hayvan sahibine bildirim olarak gider.
          </p>
        </div>
        <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={yukle}>
          <RefreshCw size={15} /> Yenile
        </button>
      </header>

      <div className="pnl-sekmeler" role="tablist">
        <button
          type="button" role="tab" aria-selected={suzgec === 'bekleyen'}
          className={suzgec === 'bekleyen' ? 'pnl-sekme pnl-sekme-etkin' : 'pnl-sekme'}
          onClick={() => setSuzgec('bekleyen')}>
          İşlem bekleyenler {bekleyenSayisi > 0 ? <span className="pnl-rozet">{bekleyenSayisi}</span> : null}
        </button>
        <button
          type="button" role="tab" aria-selected={suzgec === 'tumu'}
          className={suzgec === 'tumu' ? 'pnl-sekme pnl-sekme-etkin' : 'pnl-sekme'}
          onClick={() => setSuzgec('tumu')}>
          Tüm randevular ({liste.length})
        </button>
      </div>

      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}

      {gosterilen.length === 0 ? (
        <Bos
          baslik={suzgec === 'bekleyen' ? 'Şu an işlem bekleyen randevu yok' : 'Henüz randevu yok'}
          aciklama={
            suzgec === 'bekleyen'
              ? 'Yeni bir talep geldiğinde burada görünür ve onayınızı bekler.'
              : 'Hayvan sahipleri uygulamadan randevu istediğinde talepler buraya düşer.'
          }
        />
      ) : (
        <ul className="pnl-randevu-listesi">
          {gosterilen.map((r) => {
            const durum = RANDEVU_DURUMU[r.status];
            const gecisler = IZINLI_GECISLER[r.status] ?? [];
            const zaman = r.starts_at ?? r.proposed_at;
            const goreceli = gorecelizaman(zaman);
            const calisiyor = islemde === r.id;

            return (
              <li key={r.id} className={calisiyor ? 'pnl-randevu pnl-randevu-islemde' : 'pnl-randevu'}>
                <div className="pnl-randevu-bilgi">
                  <div className="pnl-randevu-ust">
                    <span className={`pnl-durum pnl-durum-${r.status}`}>{durum?.ad ?? r.status}</span>
                    {goreceli ? <span className="pnl-goreceli">{goreceli}</span> : null}
                  </div>

                  <p className="pnl-randevu-kim">
                    <strong>{r.owner_name || 'İsim belirtilmemiş'}</strong>
                    {r.pet_name ? <> · {r.pet_name}</> : <span className="pnl-soluk"> · hayvan bilgisi girilmemiş</span>}
                  </p>

                  <p className="pnl-randevu-detay">
                    {r.service_name || 'Hizmet belirtilmemiş'} · {tarihYaz(zaman)}
                  </p>

                  {durum ? <p className="pnl-randevu-anlam">{durum.anlam}</p> : null}

                  {r.note ? (
                    <p className="pnl-randevu-not">
                      <span>Hayvan sahibinin notu:</span> {r.note}
                    </p>
                  ) : null}
                </div>

                {gecisler.length ? (
                  <div className="pnl-randevu-eylem">
                    {/*
                      ⚠️ "Baska saat oner" YALNIZ yeni talepte. Onaylanmis bir
                      randevuya karsi teklif vermek, karsi tarafin planini
                      bozmak demek; sunucu da `requested` disinda bu cagriyi
                      anlamli bulmuyor.
                    */}
                    {r.status === 'requested' ? (
                      <button
                        type="button"
                        disabled={calisiyor}
                        className="pnl-dugme pnl-dugme-notr"
                        onClick={() => {
                          setOneri(r);
                          setOneriZaman('');
                          setOneriNot('');
                        }}>
                        <CalendarClock size={15} /> Başka saat öner
                      </button>
                    ) : null}
                    {gecisler.map((g) => (
                      <button
                        key={g.durum}
                        type="button"
                        disabled={calisiyor}
                        className={`pnl-dugme pnl-dugme-${g.tur}`}
                        onClick={() => degistir(r, g.durum)}>
                        {g.durum === 'confirmed' ? <Check size={15} /> : null}
                        {g.durum === 'done' ? <CalendarCheck size={15} /> : null}
                        {g.durum === 'declined' ? <X size={15} /> : null}
                        {g.durum === 'cancelled' ? <Ban size={15} /> : null}
                        {g.etiket}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="pnl-randevu-eylem">
                    {/* ⚠️ Bos birakilmiyor: "burada neden dugme yok" sorusunu ekran cevapliyor. */}
                    <span className="pnl-kapali-not">Bu randevu kapandı, yapılacak işlem yok.</span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
      <Diyalog
        acik={oneri !== null}
        kapat={() => setOneri(null)}
        baslik="Başka bir saat önerin"
        aciklama={
          oneri
            ? `${oneri.owner_name || 'Hayvan sahibi'} için önerdiğiniz saat bildirim olarak gider. Kabul ederse randevu o saate geçer.`
            : undefined
        }>
        <form onSubmit={saatOner}>
          <div className="pnl-alan">
            <label htmlFor="pnl-oneri-zaman">Yeni saat</label>
            <input
              id="pnl-oneri-zaman"
              type="datetime-local"
              required
              value={oneriZaman}
              onChange={(e) => setOneriZaman(e.target.value)}
            />
            <span className="pnl-alan-ipucu">Kliniğinizin saatiyle yazın.</span>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-oneri-not">Not (isteğe bağlı)</label>
            <textarea
              id="pnl-oneri-not"
              value={oneriNot}
              maxLength={300}
              onChange={(e) => setOneriNot(e.target.value)}
              placeholder="Örnek: O saatte doktorumuz müsait değil, bir saat sonrası uygun."
            />
          </div>
          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setOneri(null)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={oneriBekliyor || !oneriZaman}>
              {oneriBekliyor ? 'Gönderiliyor…' : 'Öneriyi gönder'}
            </button>
          </div>
        </form>
      </Diyalog>
    </section>
  );
}
