import { useEffect, useState } from 'react';
import { Pill, Plus, Ban, Printer } from 'lucide-react';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Bos from './Bos';
import Diyalog from './Diyalog';
import {
  receteleriOku,
  receteYaz,
  receteIptalEt,
  hastalariOku,
  type Recete,
  type ReceteKalemi,
  type Hasta,
} from './veri';
import { receteyiYazdir } from './recete-yazdir';

/**
 * RECETELER (esitleme denetimi 3. madde, 27.08.2026).
 *
 * Panelde bolum bile yoktu; veteriner recete yazmak icin telefona gitmek
 * zorundaydi. Mobil tarafta yazma, iptal ve PDF vardi.
 *
 * ⚠️ RECETEYI VETERINER YAZAR, PLATFORM YAZMAZ. Bu ekranda ilac onerisi, doz
 * hesabi ya da otomatik tamamlama YOK ve olmayacak. Oneri sunmak tibbi karar
 * vermek demektir; urunun boyle bir yetkisi yok.
 *
 * ⚠️ SILME DUGMESI YOK, IPTAL VAR. Recete disariya verilmis bir belgedir;
 * gecmisi degistirmek, verilmemis bir belgeyi verilmis gostermek olur. Yanlis
 * recete iptal isaretleniyor ve sebebi yaziliyor. Sunucu da silmeye izin
 * vermiyor (DELETE yetkisi hic verilmemis), yani bu yalniz arayuz nezaketi
 * degil, iki katmanda birden kural.
 *
 * ⚠️ CIKTI VAR (27.08.2026). Bu yorum once "PDF bu ekranda YOK" diyordu; ayni
 * turda eklendi ve yorum da guncellendi. `recete-yazdir.ts` mobildekiyle BIREBIR
 * ayni sablonu uretip tarayicinin yazdirma penceresine veriyor; kullanici
 * oradan "PDF olarak kaydet" diyebiliyor. Ayri bir PDF kutuphanesi eklenmedi.
 */

const bosKalem = (): ReceteKalemi => ({ drug_name: '', dosage: '', frequency: '', duration: '', note: '' });

function tarih(s: string): string {
  try {
    return new Date(s).toLocaleDateString('tr-TR', { day: '2-digit', month: 'short', year: 'numeric' });
  } catch {
    return s;
  }
}

export default function PanelReceteler({ klinik, klinikAdi }: { klinik: string; klinikAdi: string }) {
  const [receteler, setReceteler] = useState<Recete[] | null>(null);
  const [hastalar, setHastalar] = useState<Hasta[]>([]);
  const [hata, setHata] = useState<string | null>(null);

  const [yazAcik, setYazAcik] = useState(false);
  const [hasta, setHasta] = useState('');
  const [tani, setTani] = useState('');
  const [notlar, setNotlar] = useState('');
  const [kalemler, setKalemler] = useState<ReceteKalemi[]>([bosKalem()]);
  const [bekliyor, setBekliyor] = useState(false);
  const [yazHatasi, setYazHatasi] = useState<string | null>(null);

  const [iptalEdilecek, setIptalEdilecek] = useState<Recete | null>(null);
  const [iptalSebebi, setIptalSebebi] = useState('');
  const [iptalHatasi, setIptalHatasi] = useState<string | null>(null);

  async function yukle() {
    setHata(null);
    try {
      const [r, h] = await Promise.all([receteleriOku(klinik), hastalariOku(klinik)]);
      setReceteler(r);
      setHastalar(h);
    } catch (e) {
      setReceteler([]);
      setHata((e as { message?: string })?.message ?? '');
    }
  }

  useEffect(() => {
    let iptal = false;
    setReceteler(null);
    void (async () => {
      await yukle();
      if (iptal) return;
    })();
    return () => { iptal = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [klinik]);

  const hastaAdi = (id: string) =>
    hastalar.find((h) => h.pet_id === id)?.pet_name ?? 'Hasta';

  /** Ilac adi bos olan kalem yazilmiyor: bos satir bir ilac degildir. */
  const gecerliKalemler = kalemler.filter((k) => k.drug_name.trim().length > 0);

  async function kaydet() {
    setBekliyor(true); setYazHatasi(null);
    try {
      await receteYaz({
        klinik,
        hasta,
        kalemler: gecerliKalemler.map((k) => ({
          drug_name: k.drug_name.trim(),
          dosage: k.dosage?.trim() || null,
          frequency: k.frequency?.trim() || null,
          duration: k.duration?.trim() || null,
          note: k.note?.trim() || null,
        })),
        tani: tani.trim() || null,
        notlar: notlar.trim() || null,
      });
      setYazAcik(false);
      setHasta(''); setTani(''); setNotlar(''); setKalemler([bosKalem()]);
      await yukle();
    } catch (e) {
      setYazHatasi((e as { message?: string })?.message ?? 'Reçete yazılamadı.');
    } finally {
      setBekliyor(false);
    }
  }

  async function iptalEt() {
    if (!iptalEdilecek) return;
    setBekliyor(true); setIptalHatasi(null);
    try {
      await receteIptalEt(iptalEdilecek.id, iptalSebebi);
      setIptalEdilecek(null); setIptalSebebi('');
      await yukle();
    } catch (e) {
      setIptalHatasi((e as { message?: string })?.message ?? 'Reçete iptal edilemedi.');
    } finally {
      setBekliyor(false);
    }
  }

  if (receteler === null) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} />;

  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        <div>
          <p className="pnl-aciklama">
            Kliniğinizde yazılan reçeteler. Reçete silinmez; yanlış yazılan reçete
            sebebiyle birlikte iptal edilir.
          </p>
        </div>
        <div className="pnl-basi-dugmeler">
          <button
            type="button"
            className="pnl-dugme pnl-dugme-olumlu"
            onClick={() => setYazAcik(true)}
            disabled={hastalar.length === 0}
          >
            <Plus size={16} aria-hidden="true" />
            Reçete yaz
          </button>
        </div>
      </header>

      {receteler.length === 0 ? (
        <Bos
          baslik="Henüz reçete yok"
          aciklama="Bir hastaya reçete yazdığınızda burada listelenir."
        />
      ) : (
        <ul className="pnl-satirlar">
          {receteler.map((r) => (
            <li key={r.id} className="pnl-satir">
              <span className="pnl-avatar" aria-hidden="true"><Pill size={17} /></span>
              <div className="pnl-satir-govde">
                <p className="pnl-satir-ad">
                  {hastaAdi(r.pet_id)}
                  {r.diagnosis ? ` · ${r.diagnosis}` : ''}
                </p>
                <p className="pnl-satir-alt">
                  {tarih(r.issued_at)}
                  {' · '}
                  {r.prescription_items.length} kalem
                  {r.prescription_items.length > 0
                    ? ` (${r.prescription_items.map((k) => k.drug_name).join(', ')})`
                    : ''}
                </p>
                {/* ⚠️ IPTAL SEBEBI GIZLENMIYOR. Gecmise bakan hekimin ilk sorusu
                    "neden iptal edilmis"; cevabi saklamak belgeyi degersizlestirir. */}
                {r.voided_at ? (
                  <p className="pnl-satir-alt">
                    İptal edildi{r.void_reason ? `: ${r.void_reason}` : ''}
                  </p>
                ) : null}
              </div>
              <span className="pnl-satir-sag">
                {/* ⚠️ IPTAL EDILMIS RECETE DE YAZDIRILABILIYOR. Ciktinin
                    uzerinde "Iptal edildi" ve sebebi yaziyor; gecmisteki bir
                    belgenin kopyasini alamamak, arsivi eksik birakirdi. */}
                <button
                  type="button"
                  className="pnl-dugme pnl-dugme-sade"
                  onClick={() => receteyiYazdir(r, klinikAdi, hastaAdi(r.pet_id))}
                >
                  <Printer size={15} aria-hidden="true" />
                  Yazdır
                </button>
                {r.voided_at ? (
                  <span className="pnl-etiket">İptal</span>
                ) : (
                  <button
                    type="button"
                    className="pnl-dugme pnl-dugme-sade"
                    onClick={() => { setIptalEdilecek(r); setIptalSebebi(''); setIptalHatasi(null); }}
                  >
                    <Ban size={15} aria-hidden="true" />
                    İptal et
                  </button>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* ⚠️ "PDF simdilik telefonda" notu KALDIRILDI cunku artik dogru degil.
          Yazdirma penceresinden "PDF olarak kaydet" secilebiliyor. */}
      <p className="pnl-dipnot">
        Yazdır düğmesi tarayıcının yazdırma penceresini açar; oradan PDF olarak da
        kaydedebilirsiniz.
      </p>

      <Diyalog
        baslik="Reçete yaz"
        aciklama="İlaç, doz ve süreyi siz girersiniz. Uygulama öneri sunmaz."
        acik={yazAcik}
        kapat={() => setYazAcik(false)}
      >
        <div className="pnl-alan">
          <label htmlFor="pnl-recete-hasta">Hasta</label>
          <select
            id="pnl-recete-hasta"
            value={hasta}
            onChange={(e) => setHasta(e.target.value)}
          >
            <option value="">Seçiniz</option>
            {hastalar.map((h) => (
              <option key={h.pet_id} value={h.pet_id}>
                {h.pet_name ?? 'Hasta'}{h.owner_name ? ` · ${h.owner_name}` : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="pnl-alan">
          <label htmlFor="pnl-recete-tani">Tanı</label>
          <input
            id="pnl-recete-tani"
            type="text"
            value={tani}
            onChange={(e) => setTani(e.target.value)}
            placeholder="İsteğe bağlı"
          />
        </div>

        {kalemler.map((k, i) => (
          <div className="pnl-alan" key={i}>
            <label htmlFor={`pnl-ilac-${i}`}>{i + 1}. ilaç</label>
            <input
              id={`pnl-ilac-${i}`}
              type="text"
              value={k.drug_name}
              onChange={(e) => setKalemler((o) => o.map((x, j) => (j === i ? { ...x, drug_name: e.target.value } : x)))}
              placeholder="İlaç adı"
            />
            <input
              type="text"
              value={k.dosage ?? ''}
              aria-label={`${i + 1}. ilaç dozu`}
              onChange={(e) => setKalemler((o) => o.map((x, j) => (j === i ? { ...x, dosage: e.target.value } : x)))}
              placeholder="Doz"
            />
            <input
              type="text"
              value={k.frequency ?? ''}
              aria-label={`${i + 1}. ilaç sıklığı`}
              onChange={(e) => setKalemler((o) => o.map((x, j) => (j === i ? { ...x, frequency: e.target.value } : x)))}
              placeholder="Sıklık"
            />
            <input
              type="text"
              value={k.duration ?? ''}
              aria-label={`${i + 1}. ilaç süresi`}
              onChange={(e) => setKalemler((o) => o.map((x, j) => (j === i ? { ...x, duration: e.target.value } : x)))}
              placeholder="Süre"
            />
          </div>
        ))}

        <button
          type="button"
          className="pnl-dugme pnl-dugme-sade"
          onClick={() => setKalemler((o) => [...o, bosKalem()])}
        >
          <Plus size={15} aria-hidden="true" />
          İlaç ekle
        </button>

        <div className="pnl-alan">
          <label htmlFor="pnl-recete-not">Not</label>
          <textarea
            id="pnl-recete-not"
            value={notlar}
            rows={2}
            onChange={(e) => setNotlar(e.target.value)}
            placeholder="İsteğe bağlı"
          />
        </div>

        {yazHatasi ? <p className="pnl-hata-kucuk">{yazHatasi}</p> : null}

        <div className="pnl-diyalog-eylem">
          <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setYazAcik(false)}>
            Vazgeç
          </button>
          {/* ⚠️ Hasta secilmeden ve en az bir ilac girilmeden yazilamiyor:
              ilacsiz recete, hastanin gecmisinde anlamsiz bir kayit birakirdi. */}
          <button
            type="button"
            className="pnl-dugme pnl-dugme-olumlu"
            disabled={bekliyor || !hasta || gecerliKalemler.length === 0}
            onClick={() => void kaydet()}
          >
            {bekliyor ? 'Yazılıyor...' : 'Reçeteyi yaz'}
          </button>
        </div>
      </Diyalog>

      <Diyalog
        baslik="Reçeteyi iptal et"
        aciklama="Reçete silinmez, iptal işaretlenir ve sebebi kayda geçer."
        acik={iptalEdilecek !== null}
        kapat={() => setIptalEdilecek(null)}
      >
        <div className="pnl-alan">
          <label htmlFor="pnl-iptal-sebep">İptal sebebi</label>
          <input
            id="pnl-iptal-sebep"
            type="text"
            value={iptalSebebi}
            onChange={(e) => setIptalSebebi(e.target.value)}
            placeholder="Örneğin: doz yanlış girildi"
          />
        </div>
        {iptalHatasi ? <p className="pnl-hata-kucuk">{iptalHatasi}</p> : null}
        <div className="pnl-diyalog-eylem">
          <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setIptalEdilecek(null)}>
            Vazgeç
          </button>
          {/* Sebep zorunlu: sebepsiz iptal, gecmise bakan hekimi cevapsiz birakir. */}
          <button
            type="button"
            className="pnl-dugme pnl-dugme-olumsuz"
            disabled={bekliyor || iptalSebebi.trim().length < 3}
            onClick={() => void iptalEt()}
          >
            {bekliyor ? 'İptal ediliyor...' : 'İptal et'}
          </button>
        </div>
      </Diyalog>
    </section>
  );
}
