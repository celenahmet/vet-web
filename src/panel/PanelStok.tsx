import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Barcode, Boxes, Camera, CircleAlert, ClipboardCheck, PackagePlus, Pencil, Plus,
  QrCode, RotateCcw, Search, Trash2, XCircle,
} from 'lucide-react';

import Bos from './Bos';
import Diyalog from './Diyalog';
import Hata from './Hata';
import StokEtiketi from './StokEtiketi';
import Yukleniyor from './Yukleniyor';
import { stokKameraAkisiniIste, stokKameraHataMesaji } from './stok-kamera';
import {
  STOK_KOD_TURLERI, STOK_KOD_TURU_ADI, stokKodTurunuNormallestir,
  type StokKodTuru, ureticiKoduGtinOlabilir,
} from './stok-kod-turu';
import {
  aktifSayimiOku, sayimBaslat, sayimSatiriYaz, sayimSatirlariOku, sayimiIptalEt,
  sayimiTamamla, sayimiTemizle, stokHareketiKaydet, stokKodunuBagla,
  stokKodunuCoz, stokLotlariOku, stokOku, urunKaydet,
  type HareketTuru, type IlacFormu, type KodEslesmesi, type SayimOturumu,
  type SayimSatiri, type StokLotu, type StokUrunu, type UrunBirimi, type UrunTuru,
} from './stok-veri';

const TURLER: UrunTuru[] = ['medicine', 'consumable', 'retail'];
const BIRIMLER: UrunBirimi[] = ['piece', 'box', 'pack', 'bottle', 'vial', 'ampoule', 'syringe', 'tablet', 'capsule', 'dose', 'tube', 'can', 'bag', 'roll', 'pair', 'set', 'ml', 'l', 'g', 'kg'];
const FORMLAR: IlacFormu[] = ['tablet', 'capsule', 'oral_solution', 'suspension', 'injection', 'cream', 'ointment', 'drops', 'spray', 'powder', 'vaccine', 'other'];
const HAREKETLER: HareketTuru[] = ['opening', 'purchase', 'use', 'sale', 'return_in', 'return_out', 'waste', 'count_gain', 'count_loss'];
const GIRISLER: HareketTuru[] = ['opening', 'purchase', 'return_in', 'count_gain'];

type BarkodSonucu = { rawValue: string; format?: string };
type BarkodAlgilayici = { detect: (kaynak: HTMLVideoElement) => Promise<BarkodSonucu[]> };
type BarkodAlgilayiciKurucusu = {
  new (secenekler?: { formats?: string[] }): BarkodAlgilayici;
  getSupportedFormats?: () => Promise<string[]>;
};
type KameraKontrolleri = { stop: () => void };

const TUR_ADI: Record<UrunTuru, string> = { medicine: 'İlaç', consumable: 'Sarf', retail: 'Perakende' };
const BIRIM_ADI: Partial<Record<UrunBirimi, string>> = {
  piece: 'adet', box: 'kutu', pack: 'paket', bottle: 'şişe', vial: 'flakon', ampoule: 'ampul',
  syringe: 'şırınga', tablet: 'tablet', capsule: 'kapsül', dose: 'doz', tube: 'tüp', can: 'konserve',
  bag: 'torba', roll: 'rulo', pair: 'çift', set: 'set', ml: 'ml', l: 'L', g: 'g', kg: 'kg',
};
const FORM_ADI: Record<IlacFormu, string> = {
  tablet: 'Tablet', capsule: 'Kapsül', oral_solution: 'Oral solüsyon', suspension: 'Süspansiyon',
  injection: 'Enjeksiyon', cream: 'Krem', ointment: 'Merhem', drops: 'Damla', spray: 'Sprey',
  powder: 'Toz', vaccine: 'Aşı', other: 'Diğer',
};
const HAREKET_ADI: Record<HareketTuru, string> = {
  opening: 'Açılış', purchase: 'Satın alma', use: 'Kullanım', sale: 'Satış', return_in: 'İade giriş',
  return_out: 'İade çıkış', waste: 'Fire', count_gain: 'Sayım fazlası', count_loss: 'Sayım eksiği',
};

type UrunFormu = {
  id: string | null; ad: string; kod: string; gtin: string; tur: UrunTuru; birim: UrunBirimi;
  minimum: string; lotTakibi: boolean; ilacFormu: IlacFormu; etkenMadde: string;
  guc: string; uretici: string; paketMiktari: string; receteli: boolean;
};
const bosUrun = (): UrunFormu => ({
  id: null, ad: '', kod: '', gtin: '', tur: 'medicine', birim: 'box', minimum: '0',
  lotTakibi: true, ilacFormu: 'tablet', etkenMadde: '', guc: '', uretici: '',
  paketMiktari: '1', receteli: false,
});

export default function PanelStok({ klinik, klinikAdi }: { klinik: string; klinikAdi: string }) {
  const [urunler, setUrunler] = useState<StokUrunu[] | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [bekliyor, setBekliyor] = useState(false);
  const [arama, setArama] = useState('');
  const [tur, setTur] = useState<UrunTuru | 'all'>('all');
  const [urunFormu, setUrunFormu] = useState<UrunFormu | null>(null);
  const [yeniUrunKaynagi, setYeniUrunKaynagi] = useState<{ kod: string; tur: StokKodTuru } | null>(null);
  const [hareketUrunu, setHareketUrunu] = useState<StokUrunu | null>(null);
  const [hareket, setHareket] = useState({ tur: 'purchase' as HareketTuru, miktar: '', lot: '', skt: '', not: '' });
  const [acikLot, setAcikLot] = useState<string | null>(null);
  const [lotlar, setLotlar] = useState<Record<string, StokLotu[]>>({});
  const [etiket, setEtiket] = useState<StokUrunu | null>(null);
  const [sayimAcik, setSayimAcik] = useState(false);
  const [sayim, setSayim] = useState<SayimOturumu | null>(null);
  const [sayimSatirlari, setSayimSatirlari] = useState<SayimSatiri[]>([]);
  const [taramaKodu, setTaramaKodu] = useState('');
  const [eslesmeler, setEslesmeler] = useState<KodEslesmesi[]>([]);
  const [bekleyenEslesme, setBekleyenEslesme] = useState<KodEslesmesi | null>(null);
  const [bekleyenLot, setBekleyenLot] = useState('');
  const [eslesmeyenKod, setEslesmeyenKod] = useState('');
  const [baglanacakUrun, setBaglanacakUrun] = useState('');
  const [kodTuru, setKodTuru] = useState<StokKodTuru>('unknown');
  const [kameraAcik, setKameraAcik] = useState(false);
  const [kameraHatasi, setKameraHatasi] = useState<string | null>(null);
  const [kameraBasliyor, setKameraBasliyor] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const kameraAkisiRef = useRef<MediaStream | null>(null);
  const kameraTuruRef = useRef<number | null>(null);
  const zxingKontrolRef = useRef<KameraKontrolleri | null>(null);
  const kameraAktifRef = useRef(false);
  const sonOkutulanKodRef = useRef('');

  const yukle = useCallback(async () => {
    setHata(null);
    try {
      const [liste, aktif] = await Promise.all([stokOku(klinik), aktifSayimiOku(klinik)]);
      setUrunler(liste); setSayim(aktif);
      if (aktif) setSayimSatirlari(await sayimSatirlariOku(aktif.id));
      else setSayimSatirlari([]);
    } catch (e) { setHata((e as Error).message); setUrunler([]); }
  }, [klinik]);

  useEffect(() => { void yukle(); }, [yukle]);

  const kamerayiDurdur = useCallback(() => {
    kameraAktifRef.current = false;
    if (kameraTuruRef.current !== null) cancelAnimationFrame(kameraTuruRef.current);
    kameraTuruRef.current = null;
    zxingKontrolRef.current?.stop();
    zxingKontrolRef.current = null;
    kameraAkisiRef.current?.getTracks().forEach((iz) => iz.stop());
    kameraAkisiRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
    setKameraAcik(false);
    setKameraBasliyor(false);
  }, []);

  useEffect(() => () => kamerayiDurdur(), [kamerayiDurdur]);
  useEffect(() => { if (!sayimAcik) kamerayiDurdur(); }, [kamerayiDurdur, sayimAcik]);

  const filtreli = useMemo(() => {
    const q = arama.trim().toLocaleLowerCase('tr-TR');
    return (urunler ?? []).filter((urun) => {
      if (tur !== 'all' && urun.kind !== tur) return false;
      if (!q) return true;
      return [urun.name, urun.internal_code, urun.gtin, urun.manufacturer, urun.active_ingredient, urun.strength]
        .filter(Boolean).some((alan) => String(alan).toLocaleLowerCase('tr-TR').includes(q));
    });
  }, [arama, tur, urunler]);

  const kritik = (urunler ?? []).filter((urun) => urun.current_stock <= urun.minimum_stock).length;
  const suresiGecen = (urunler ?? []).reduce((toplam, urun) => toplam + urun.expired_lot_count, 0);
  const yaklasan = (urunler ?? []).reduce((toplam, urun) => toplam + urun.expiring_lot_count, 0);

  function urunuDuzenle(urun: StokUrunu) {
    setYeniUrunKaynagi(null);
    setUrunFormu({
      id: urun.product_id, ad: urun.name, kod: urun.internal_code, gtin: urun.gtin ?? '', tur: urun.kind,
      birim: urun.unit, minimum: String(urun.minimum_stock), lotTakibi: urun.lot_tracking,
      ilacFormu: urun.medicine_form ?? 'tablet', etkenMadde: urun.active_ingredient ?? '',
      guc: urun.strength ?? '', uretici: urun.manufacturer ?? '', paketMiktari: String(urun.package_quantity),
      receteli: urun.requires_prescription,
    });
  }

  function urunFormunuKapat() {
    setUrunFormu(null);
    setYeniUrunKaynagi(null);
  }

  function eslesmeyenKoddanUrunAc() {
    if (!eslesmeyenKod) return;
    const form = bosUrun();
    if (ureticiKoduGtinOlabilir(kodTuru, eslesmeyenKod)) form.gtin = eslesmeyenKod;
    setYeniUrunKaynagi({ kod: eslesmeyenKod, tur: kodTuru });
    setUrunFormu(form);
  }

  async function urunuKaydet(e: React.FormEvent) {
    e.preventDefault();
    if (!urunFormu || bekliyor) return;
    const minimum = Number(urunFormu.minimum.replace(',', '.'));
    const paket = Number(urunFormu.paketMiktari.replace(',', '.'));
    if (!urunFormu.ad.trim() || !urunFormu.kod.trim() || !Number.isFinite(minimum) || minimum < 0 || !Number.isFinite(paket) || paket <= 0) {
      return setHata('Ürün adı, iç kodu, minimum stok ve paket miktarını geçerli girin.');
    }
    setBekliyor(true); setHata(null); setBilgi(null);
    try {
      const urunKimligi = await urunKaydet({
        klinik, id: urunFormu.id, ad: urunFormu.ad.trim(), icKod: urunFormu.kod.trim(), tur: urunFormu.tur,
        birim: urunFormu.birim, gtin: urunFormu.gtin.trim() || null,
        lotTakibi: urunFormu.tur === 'medicine' || urunFormu.lotTakibi, minimum,
        ilacFormu: urunFormu.tur === 'medicine' ? urunFormu.ilacFormu : null,
        etkenMadde: urunFormu.tur === 'medicine' ? urunFormu.etkenMadde.trim() || null : null,
        guc: urunFormu.tur === 'medicine' ? urunFormu.guc.trim() || null : null,
        uretici: urunFormu.uretici.trim() || null, paketMiktari: paket,
        receteli: urunFormu.tur === 'medicine' && urunFormu.receteli,
      });
      const kaynak = yeniUrunKaynagi;
      urunFormunuKapat();
      await yukle();
      if (kaynak && !urunFormu.id) {
        if (ureticiKoduGtinOlabilir(kaynak.tur, kaynak.kod)) {
          const eslesme = (await stokKodunuCoz(klinik, kaynak.kod)).find((satir) => satir.product_id === urunKimligi);
          if (!eslesme) throw new Error('Ürün oluşturuldu ancak üretici koduyla yeniden bulunamadı.');
          if (eslesme.lot_tracking) {
            sonOkutulanKodRef.current = '';
            setTaramaKodu(''); setEslesmeyenKod(''); setBaglanacakUrun('');
            setBilgi('Ürün ve üretici kodu kaydedildi. Lot takipli ürünü saymadan önce stok girişiyle lot ve son kullanma tarihi ekleyin.');
          } else {
            await eslesmeyiSay(eslesme);
            setBilgi('Yeni ürün oluşturuldu, üretici kodu eşleştirildi ve sayıma +1 eklendi.');
          }
        } else {
          setBaglanacakUrun(urunKimligi);
          setBilgi('Yeni ürün oluşturuldu. QR/Code içeriği güvenlik denetiminden geçmeden kaydedilmez; kod türünü kontrol edip “Bağla ve +1 say”ı seçin.');
        }
      } else setBilgi(urunFormu.id ? 'Ürün güncellendi.' : 'Ürün oluşturuldu.');
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function hareketiKaydet(e: React.FormEvent) {
    e.preventDefault();
    if (!hareketUrunu || bekliyor) return;
    const miktar = Number(hareket.miktar.replace(',', '.'));
    const sktZorunlu = hareketUrunu.kind === 'medicine' && GIRISLER.includes(hareket.tur);
    if (!Number.isFinite(miktar) || miktar <= 0 || (hareketUrunu.lot_tracking && !hareket.lot.trim()) || (sktZorunlu && !hareket.skt)) {
      return setHata(sktZorunlu && !hareket.skt ? 'İlaç girişinde son kullanma tarihi zorunludur.' : 'Miktar ve lot bilgilerini tamamlayın.');
    }
    setBekliyor(true); setHata(null); setBilgi(null);
    try {
      await stokHareketiKaydet({
        klinik, urun: hareketUrunu.product_id, tur: hareket.tur, miktar,
        lot: hareket.lot.trim() || null, sonKullanma: hareket.skt || null, not: hareket.not.trim() || null,
      });
      setHareketUrunu(null); setHareket({ tur: 'purchase', miktar: '', lot: '', skt: '', not: '' });
      setBilgi('Stok hareketi kaydedildi.'); await yukle();
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function lotlariAc(urun: StokUrunu) {
    if (acikLot === urun.product_id) return setAcikLot(null);
    setAcikLot(urun.product_id); setHata(null);
    if (lotlar[urun.product_id]) return;
    try {
      const bulunanLotlar = await stokLotlariOku(klinik, urun.product_id);
      setLotlar((m) => ({ ...m, [urun.product_id]: bulunanLotlar }));
    }
    catch (e) { setHata((e as Error).message); }
  }

  async function sayimiTazele(oturum = sayim) {
    if (!oturum) return setSayimSatirlari([]);
    setSayimSatirlari(await sayimSatirlariOku(oturum.id));
  }

  async function sayimiAc() {
    setSayimAcik(true); setHata(null);
    if (sayim) return void sayimiTazele(sayim);
    setBekliyor(true);
    try {
      const id = await sayimBaslat(klinik);
      const yeni: SayimOturumu = { id, status: 'draft', title: null, started_at: new Date().toISOString(), updated_at: new Date().toISOString() };
      setSayim(yeni); setSayimSatirlari([]);
    } catch (e) {
      setSayimAcik(false);
      setHata((e as Error).message);
    } finally { setBekliyor(false); }
  }

  async function eslesmeyiSay(eslesme: KodEslesmesi, lotId?: string | null) {
    if (!sayim) return;
    await sayimSatiriYaz({
      oturum: sayim.id, urun: eslesme.product_id, lot: lotId ?? eslesme.lot_id,
      miktar: 1, arttir: true, sonKod: sonOkutulanKodRef.current || taramaKodu.trim() || eslesmeyenKod,
    });
    sonOkutulanKodRef.current = '';
    setTaramaKodu(''); setEslesmeler([]); setBekleyenEslesme(null); setBekleyenLot(''); setEslesmeyenKod('');
    await sayimiTazele();
  }

  async function eslesmeyiSec(eslesme: KodEslesmesi) {
    if (!eslesme.lot_tracking || eslesme.lot_id) return eslesmeyiSay(eslesme);
    const urunLotlari = lotlar[eslesme.product_id] ?? await stokLotlariOku(klinik, eslesme.product_id);
    setLotlar((m) => ({ ...m, [eslesme.product_id]: urunLotlari }));
    if (urunLotlari.length === 0) return setHata('Bu ürün lot takipli fakat sayılabilecek lotu yok. Önce stok girişi yapın.');
    setBekleyenEslesme(eslesme); setBekleyenLot(urunLotlari[0]?.id ?? '');
  }

  async function koduIsle(kodDegeri: string) {
    const kod = kodDegeri.trim();
    if (!sayim || kod.length < 3 || bekliyor) return;
    sonOkutulanKodRef.current = kod;
    setBekliyor(true); setHata(null); setEslesmeler([]); setEslesmeyenKod('');
    try {
      const bulunan = await stokKodunuCoz(klinik, kod);
      if (bulunan.length === 1) await eslesmeyiSec(bulunan[0]!);
      else if (bulunan.length > 1) setEslesmeler(bulunan);
      else { setEslesmeyenKod(kod); setBaglanacakUrun(''); }
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function koduCoz(e: React.FormEvent) {
    e.preventDefault();
    await koduIsle(taramaKodu);
  }

  async function kamerayiAc() {
    if (kameraBasliyor || kameraAcik) return;
    setKameraHatasi(null);
    const Kurucu = (window as Window & { BarcodeDetector?: BarkodAlgilayiciKurucusu }).BarcodeDetector;
    setKameraBasliyor(true);
    try {
      kameraAktifRef.current = true;
      // Izin talebi kütüphaneye bırakılmaz. Kullanıcının doğrudan Kamera
      // tıklaması içinde tek kez çağrıldığı için tarayıcı izin penceresini
      // güvenilir biçimde gösterebilir; iki okuyucu da aynı akışı kullanır.
      const akis = await stokKameraAkisiniIste();
      if (!kameraAktifRef.current) { akis.getTracks().forEach((iz) => iz.stop()); return; }
      kameraAkisiRef.current = akis;
      setKameraAcik(true);
      let video = videoRef.current;
      for (let deneme = 0; !video && deneme < 6; deneme += 1) {
        await new Promise<void>((coz) => requestAnimationFrame(() => coz()));
        video = videoRef.current;
      }
      if (!video) throw new Error('Kamera önizlemesi hazırlanamadı.');

      if (!Kurucu) {
        const { BrowserMultiFormatReader } = await import('@zxing/browser');
        const okuyucu = new BrowserMultiFormatReader();
        const kontroller = await okuyucu.decodeFromStream(akis, video, (sonuc) => {
          const kod = sonuc?.getText().trim() ?? '';
          if (kod.length < 3) return;
          setKodTuru(stokKodTurunuNormallestir(sonuc?.getBarcodeFormat().toString(), kod));
          setTaramaKodu(kod);
          kamerayiDurdur();
          void koduIsle(kod);
        });
        if (kameraAktifRef.current) zxingKontrolRef.current = kontroller;
        else kontroller.stop();
        return;
      }

      video.srcObject = akis;
      await video.play();
      const istenenFormatlar = ['qr_code', 'ean_13', 'ean_8', 'upc_a', 'upc_e', 'code_39', 'code_93', 'code_128', 'itf'];
      const desteklenen = Kurucu.getSupportedFormats ? await Kurucu.getSupportedFormats() : istenenFormatlar;
      const formatlar = istenenFormatlar.filter((format) => desteklenen.includes(format));
      const algilayici = new Kurucu(formatlar.length ? { formats: formatlar } : undefined);
      let algilamaSuruyor = false;
      const tara = async () => {
        if (!kameraAkisiRef.current) return;
        if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
          kameraTuruRef.current = requestAnimationFrame(() => void tara());
          return;
        }
        if (!algilamaSuruyor) {
          algilamaSuruyor = true;
          try {
            const sonuc = await algilayici.detect(video);
            const bulunan = sonuc.find((satir) => satir.rawValue.trim().length >= 3);
            if (bulunan) {
              const kod = bulunan.rawValue.trim();
              setKodTuru(stokKodTurunuNormallestir(bulunan.format, kod));
              setTaramaKodu(kod);
              kamerayiDurdur();
              await koduIsle(kod);
              return;
            }
          } catch {
            setKameraHatasi('Görüntü okunamadı. Kamerayı sabit tutup yeniden deneyin veya kodu elle girin.');
          } finally { algilamaSuruyor = false; }
        }
        if (kameraAkisiRef.current) kameraTuruRef.current = requestAnimationFrame(() => void tara());
      };
      kameraTuruRef.current = requestAnimationFrame(() => void tara());
    } catch (e) {
      kamerayiDurdur();
      setKameraHatasi(stokKameraHataMesaji(e));
    } finally { setKameraBasliyor(false); }
  }

  async function eslesmeyeniBagla() {
    if (!eslesmeyenKod || !baglanacakUrun || bekliyor) return;
    setBekliyor(true); setHata(null);
    try {
      await stokKodunuBagla(klinik, baglanacakUrun, eslesmeyenKod, kodTuru);
      const eslesme = (await stokKodunuCoz(klinik, eslesmeyenKod)).find((satir) => satir.product_id === baglanacakUrun);
      if (!eslesme) throw new Error('Kod bağlandı ancak ürün yeniden çözümlenemedi.');
      await eslesmeyiSec(eslesme);
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function tumSayimiSifirla() {
    if (!sayim || sayimSatirlari.length === 0 || bekliyor) return;
    setBekliyor(true); setHata(null);
    try {
      await sayimiTemizle(sayim.id);
      await sayimiTazele();
      setBilgi('Sayım taslağındaki miktarlar sıfırlandı; stok henüz değiştirilmedi.');
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function sayimiIptal() {
    if (!sayim || bekliyor) return;
    setBekliyor(true); setHata(null);
    try {
      kamerayiDurdur();
      await sayimiIptalEt(sayim.id);
      setSayim(null); setSayimSatirlari([]); setSayimAcik(false);
      setBilgi('Sayım taslağı iptal edildi; stok miktarları değiştirilmedi.');
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function sayimiBitir() {
    if (!sayim || bekliyor) return;
    setBekliyor(true); setHata(null);
    try {
      const hareket = await sayimiTamamla(sayim.id);
      setSayim(null); setSayimSatirlari([]); setSayimAcik(false);
      setBilgi(`Sayım tamamlandı; ${hareket} stok farkı hareket defterine işlendi.`); await yukle();
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  if (urunler === null) return <Yukleniyor metin="Ürün ve stoklar yükleniyor" />;

  return <section className="pnl-bolum pnl-yeni-modul pnl-yeni-modul-operasyon">
    <header className="pnl-bolum-basi pnl-yeni-modul-basi">
      <div><p className="pnl-aciklama">İlaç, sarf ve perakende ürünlerini; lot, son kullanma tarihi, barkod ve sayım farklarıyla tek yerde yönetin.</p></div>
      <div className="pnl-basi-dugmeler">
        <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => void sayimiAc()}><ClipboardCheck size={15} /> Akıllı sayım</button>
        <button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => { setYeniUrunKaynagi(null); setUrunFormu(bosUrun()); }}><Plus size={15} /> Ürün ekle</button>
      </div>
    </header>
    {hata ? <Hata mesaj={hata} kucuk tekrar={() => { setHata(null); void yukle(); }} /> : null}
    {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}

    <div className="pnl-kartlar pnl-yeni-modul-ozetleri">
      <div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon"><Boxes size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">Ürün</span><span className="pnl-kart-deger">{urunler.length}</span><span className="pnl-kart-anlam">Aktif ürün kartı</span></span></div>
      <div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon pnl-kart-ikon-uyari"><CircleAlert size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">Kritik stok</span><span className="pnl-kart-deger">{kritik}</span><span className="pnl-kart-anlam">Minimumda veya altında</span></span></div>
      <div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon pnl-kart-ikon-uyari"><XCircle size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">SKT geçmiş</span><span className="pnl-kart-deger">{suresiGecen}</span><span className="pnl-kart-anlam">Pozitif stoklu lot</span></span></div>
      <div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon pnl-kart-ikon-altin"><PackagePlus size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">Yaklaşan SKT</span><span className="pnl-kart-deger">{yaklasan}</span><span className="pnl-kart-anlam">30 gün içinde</span></span></div>
    </div>

    <section className="pnl-widget pnl-operasyon-araclari">
      <div className="pnl-operasyon-arama"><Search size={16} /><input value={arama} onChange={(e) => setArama(e.target.value)} placeholder="Ad, iç kod, GTIN, üretici veya etken madde ara" aria-label="Stokta ara" /></div>
      <div className="pnl-segment" role="group" aria-label="Ürün türü">
        {(['all', ...TURLER] as const).map((deger) => <button type="button" key={deger} className={tur === deger ? 'pnl-segment-etkin' : ''} onClick={() => setTur(deger)}>{deger === 'all' ? 'Tümü' : TUR_ADI[deger]}</button>)}
      </div>
      <span className="pnl-sonuc-sayisi">{filtreli.length} sonuç</span>
    </section>

    {filtreli.length === 0 ? <Bos baslik="Eşleşen ürün yok" aciklama="Arama veya filtreyi değiştirin; yeni ürünse ürün kartını oluşturun." /> :
      <div className="pnl-operasyon-kartlari pnl-stok-kartlari">{filtreli.map((urun) => {
        const dusuk = urun.current_stock <= urun.minimum_stock;
        const urunLotlari = lotlar[urun.product_id];
        return <article className="pnl-widget pnl-urun-karti" key={urun.product_id}>
          <header className="pnl-urun-basi"><span className="pnl-widget-ikon"><Boxes size={18} /></span><div><h3>{urun.name}</h3><p>{urun.internal_code} · {TUR_ADI[urun.kind]}{urun.gtin ? ` · GTIN ${urun.gtin}` : ''}</p></div><strong className={dusuk ? 'pnl-stok-deger pnl-eksi' : 'pnl-stok-deger'}>{urun.current_stock} {BIRIM_ADI[urun.unit] ?? urun.unit}</strong><button type="button" className="pnl-ikon-dugme" aria-label="Ürünü düzenle" onClick={() => urunuDuzenle(urun)}><Pencil size={16} /></button></header>
          <div className="pnl-urun-ozellikler">
            {urun.kind === 'medicine' ? <span>{[urun.active_ingredient, urun.strength, urun.medicine_form ? FORM_ADI[urun.medicine_form] : null].filter(Boolean).join(' · ') || 'İlaç ayrıntısı girilmemiş'}</span> : null}
            {urun.manufacturer ? <span>{urun.manufacturer}</span> : null}<span>Paket: {urun.package_quantity} {BIRIM_ADI[urun.unit] ?? urun.unit}</span>
            {urun.requires_prescription ? <span className="pnl-etiket pnl-etiket-mavi">Reçeteli</span> : null}
            {dusuk ? <span className="pnl-etiket pnl-etiket-kirmizi">Kritik stok</span> : null}
            {urun.expired_lot_count ? <span className="pnl-etiket pnl-etiket-kirmizi">{urun.expired_lot_count} SKT geçmiş lot</span> : null}
            {urun.expiring_lot_count ? <span className="pnl-etiket pnl-etiket-turuncu">{urun.expiring_lot_count} yaklaşan SKT</span> : null}
          </div>
          {urun.next_expiry ? <p className="pnl-urun-skt">Sıradaki son kullanma: {new Date(urun.next_expiry).toLocaleDateString('tr-TR')}</p> : null}
          <div className="pnl-urun-eylemler"><button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => setHareketUrunu(urun)}><PackagePlus size={14} /> Stok hareketi</button><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => void lotlariAc(urun)}>Lotlar</button><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setEtiket(urun)}><QrCode size={14} /> Etiket</button></div>
          {acikLot === urun.product_id ? <div className="pnl-lot-listesi">{!urunLotlari ? <Yukleniyor metin="Lotlar yükleniyor" /> : urunLotlari.length === 0 ? <p className="pnl-widget-bos">Bu üründe lot kaydı yok.</p> : urunLotlari.map((lot) => <div key={lot.id} className="pnl-lot-satiri"><div><strong>{lot.lot_code}</strong><span>{lot.expires_on ? new Date(lot.expires_on).toLocaleDateString('tr-TR') : 'SKT yok'} · {lot.expiry_status === 'expired' ? 'Süresi geçmiş' : lot.expiry_status === 'expiring' ? 'Yaklaşıyor' : 'Geçerli'}</span></div><b>{lot.current_stock} {BIRIM_ADI[urun.unit] ?? urun.unit}</b></div>)}</div> : null}
        </article>;
      })}</div>}

    <Diyalog boyut="genis" acik={urunFormu !== null} kapat={urunFormunuKapat} baslik={urunFormu?.id ? 'Ürün kartını düzenle' : 'Yeni ürün kartı'} aciklama={yeniUrunKaynagi ? `${yeniUrunKaynagi.kod} kodundan yeni ürün oluşturuluyor. Stok, kod bağlama ve sayım ayrı güvenlik adımlarından geçer.` : 'Stok, lot ve etiket işlemleri bu kartın birim ve takip kurallarını kullanır.'}>
      {urunFormu ? <form onSubmit={urunuKaydet}><div className="pnl-form-ikili">
        <div className="pnl-alan"><label htmlFor="stok-ad">Ürün adı</label><input id="stok-ad" required value={urunFormu.ad} onChange={(e) => setUrunFormu({ ...urunFormu, ad: e.target.value })} /></div>
        <div className="pnl-alan"><label htmlFor="stok-kod">Klinik iç kodu</label><input id="stok-kod" required value={urunFormu.kod} onChange={(e) => setUrunFormu({ ...urunFormu, kod: e.target.value })} /></div>
        <div className="pnl-alan"><label htmlFor="stok-gtin">GTIN / üretici barkodu</label><input id="stok-gtin" inputMode="numeric" value={urunFormu.gtin} onChange={(e) => setUrunFormu({ ...urunFormu, gtin: e.target.value })} /></div>
        <div className="pnl-alan"><label htmlFor="stok-tur">Ürün türü</label><select id="stok-tur" value={urunFormu.tur} onChange={(e) => setUrunFormu({ ...urunFormu, tur: e.target.value as UrunTuru, lotTakibi: e.target.value === 'medicine' || urunFormu.lotTakibi })}>{TURLER.map((deger) => <option key={deger} value={deger}>{TUR_ADI[deger]}</option>)}</select></div>
        <div className="pnl-alan"><label htmlFor="stok-birim">Birim</label><select id="stok-birim" value={urunFormu.birim} onChange={(e) => setUrunFormu({ ...urunFormu, birim: e.target.value as UrunBirimi })}>{BIRIMLER.map((deger) => <option key={deger} value={deger}>{BIRIM_ADI[deger] ?? deger}</option>)}</select></div>
        <div className="pnl-alan"><label htmlFor="stok-paket">Paket miktarı</label><input id="stok-paket" inputMode="decimal" value={urunFormu.paketMiktari} onChange={(e) => setUrunFormu({ ...urunFormu, paketMiktari: e.target.value })} /></div>
        <div className="pnl-alan"><label htmlFor="stok-min">Minimum stok</label><input id="stok-min" inputMode="decimal" value={urunFormu.minimum} onChange={(e) => setUrunFormu({ ...urunFormu, minimum: e.target.value })} /></div>
        <div className="pnl-alan"><label htmlFor="stok-uretici">Üretici</label><input id="stok-uretici" value={urunFormu.uretici} onChange={(e) => setUrunFormu({ ...urunFormu, uretici: e.target.value })} /></div>
      </div>{urunFormu.tur === 'medicine' ? <><div className="pnl-form-ikili"><div className="pnl-alan"><label htmlFor="stok-form">İlaç formu</label><select id="stok-form" value={urunFormu.ilacFormu} onChange={(e) => setUrunFormu({ ...urunFormu, ilacFormu: e.target.value as IlacFormu })}>{FORMLAR.map((deger) => <option key={deger} value={deger}>{FORM_ADI[deger]}</option>)}</select></div><div className="pnl-alan"><label htmlFor="stok-etken">Etken madde</label><input id="stok-etken" value={urunFormu.etkenMadde} onChange={(e) => setUrunFormu({ ...urunFormu, etkenMadde: e.target.value })} /></div><div className="pnl-alan"><label htmlFor="stok-guc">Doz / konsantrasyon</label><input id="stok-guc" value={urunFormu.guc} onChange={(e) => setUrunFormu({ ...urunFormu, guc: e.target.value })} /></div></div><label className="pnl-anahtar"><input type="checkbox" checked={urunFormu.receteli} onChange={(e) => setUrunFormu({ ...urunFormu, receteli: e.target.checked })} /><span className="pnl-anahtar-yazi"><span className="pnl-anahtar-ad">Reçeteli ürün</span><span className="pnl-anahtar-alt">Ürünün reçete gerektirdiğini kartta görünür kılar.</span></span></label></> : null}
      <label className="pnl-anahtar"><input type="checkbox" checked={urunFormu.tur === 'medicine' || urunFormu.lotTakibi} disabled={urunFormu.tur === 'medicine'} onChange={(e) => setUrunFormu({ ...urunFormu, lotTakibi: e.target.checked })} /><span className="pnl-anahtar-yazi"><span className="pnl-anahtar-ad">Lot ve son kullanma tarihi takibi</span><span className="pnl-anahtar-alt">İlaçlarda zorunludur; giriş hareketi lot ve SKT olmadan kaydedilmez.</span></span></label>
      {yeniUrunKaynagi ? <p className="pnl-alan-ipucu">Algılanan kod türü: <strong>{STOK_KOD_TURU_ADI[yeniUrunKaynagi.tur]}</strong>. Üretici koduysa GTIN alanına taşınır; QR ve Code türleri ürün oluşturulduktan sonra ayrıca onaylanır.</p> : null}
      <div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={urunFormunuKapat}>Vazgeç</button><button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor}>{bekliyor ? 'Kaydediliyor…' : 'Ürünü kaydet'}</button></div></form> : null}
    </Diyalog>

    <Diyalog acik={hareketUrunu !== null} kapat={() => setHareketUrunu(null)} baslik="Stok hareketi" aciklama={hareketUrunu ? `${hareketUrunu.name} · mevcut ${hareketUrunu.current_stock} ${BIRIM_ADI[hareketUrunu.unit] ?? hareketUrunu.unit}` : undefined}>
      {hareketUrunu ? <form onSubmit={hareketiKaydet}><div className="pnl-alan"><label htmlFor="hareket-tur">Hareket türü</label><select id="hareket-tur" value={hareket.tur} onChange={(e) => setHareket({ ...hareket, tur: e.target.value as HareketTuru })}>{HAREKETLER.map((deger) => <option key={deger} value={deger}>{HAREKET_ADI[deger]}</option>)}</select></div><div className="pnl-alan"><label htmlFor="hareket-miktar">Miktar</label><input id="hareket-miktar" required inputMode="decimal" value={hareket.miktar} onChange={(e) => setHareket({ ...hareket, miktar: e.target.value })} /></div>{hareketUrunu.lot_tracking ? <><div className="pnl-alan"><label htmlFor="hareket-lot">Lot kodu</label><input id="hareket-lot" required value={hareket.lot} onChange={(e) => setHareket({ ...hareket, lot: e.target.value })} /></div><div className="pnl-alan"><label htmlFor="hareket-skt">Son kullanma tarihi</label><input id="hareket-skt" type="date" required={hareketUrunu.kind === 'medicine' && GIRISLER.includes(hareket.tur)} value={hareket.skt} onChange={(e) => setHareket({ ...hareket, skt: e.target.value })} /></div></> : null}<div className="pnl-alan"><label htmlFor="hareket-not">Klinik notu</label><textarea id="hareket-not" maxLength={300} value={hareket.not} onChange={(e) => setHareket({ ...hareket, not: e.target.value })} /></div><div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setHareketUrunu(null)}>Vazgeç</button><button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor}>{bekliyor ? 'Kaydediliyor…' : 'Hareketi kaydet'}</button></div></form> : null}
    </Diyalog>

    <Diyalog acik={etiket !== null} kapat={() => setEtiket(null)} baslik="Ürün etiketi" aciklama="QR iç etiketi Veterito kodunu, barkod varsa üretici GTIN’ini taşır.">{etiket ? <StokEtiketi klinikAdi={klinikAdi} ad={etiket.name} kod={etiket.internal_label} gtin={etiket.gtin} /> : null}</Diyalog>

    <Diyalog boyut="panorama" acik={sayimAcik} kapat={() => { kamerayiDurdur(); setSayimAcik(false); }} baslik="Akıllı stok sayımı" aciklama="USB okuyucu, kamera veya elle girilen kod aynı güvenli eşleştirme kapısından geçer. Tarama stok değiştirmez; farklar yalnız ‘Sayımı tamamla’ ile işlenir.">
      {!sayim ? <Yukleniyor metin="Sayım açılıyor" /> : <>
        <form className="pnl-tarama-formu" onSubmit={koduCoz}><div className="pnl-operasyon-arama"><Barcode size={17} /><input autoFocus value={taramaKodu} onChange={(e) => setTaramaKodu(e.target.value)} placeholder="Barkod veya QR okutun" aria-label="Barkod veya QR kodu" /></div><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => void kamerayiAc()} disabled={kameraAcik || kameraBasliyor}><Camera size={15} /> {kameraBasliyor ? 'İzin bekleniyor…' : kameraHatasi ? 'Kamera iznini yeniden dene' : 'Kamerayı aç'}</button><button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || taramaKodu.trim().length < 3}>Say</button></form>
        {kameraHatasi ? <p className="pnl-alan-hata" role="alert">{kameraHatasi}</p> : null}
        {kameraAcik ? <div className="pnl-kamera-okuyucu"><video ref={videoRef} muted playsInline aria-label="Barkod kamera önizlemesi" /><span>Kodu çerçevenin ortasında sabit tutun</span><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={kamerayiDurdur}>Kamerayı kapat</button></div> : null}
        <p className="pnl-alan-ipucu">USB okuyucuyu alana odaklayıp okutun veya bilgisayar kameranızı açın. Kod tek ürüne bağlıysa +1 sayılır; birden fazlaysa seçim ister. Uzun raf sayımlarında mobil uygulamanın kamerası daha ergonomiktir.</p>
        {eslesmeler.length > 1 ? <div className="pnl-secim-kutusu"><strong>Birden fazla eşleşme bulundu</strong>{eslesmeler.map((satir) => <button type="button" key={`${satir.product_id}-${satir.lot_id}`} onClick={() => void eslesmeyiSec(satir)}><span>{satir.product_name}{satir.lot_code ? ` · lot ${satir.lot_code}` : ''}</span><small>{satir.match_type} · mevcut {satir.current_stock}</small></button>)}</div> : null}
        {bekleyenEslesme ? <div className="pnl-secim-kutusu"><strong>Lot seçmeden sayım yapılamaz</strong><select value={bekleyenLot} onChange={(e) => setBekleyenLot(e.target.value)}>{(lotlar[bekleyenEslesme.product_id] ?? []).map((lot) => <option key={lot.id} value={lot.id}>{lot.lot_code} · {lot.current_stock} stok · {lot.expires_on ? new Date(lot.expires_on).toLocaleDateString('tr-TR') : 'SKT yok'}</option>)}</select><button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => void eslesmeyiSay(bekleyenEslesme, bekleyenLot)}>Bu lota +1 ekle</button></div> : null}
        {eslesmeyenKod ? <div className="pnl-uyari pnl-uyari-bilgi"><div><p className="pnl-uyari-baslik">Kod hiçbir ürünle eşleşmedi</p><p>{eslesmeyenKod} kodunu mevcut ürüne bağlayın veya bu koddan yeni ürün kartı oluşturun.</p><div className="pnl-form-ikili"><div className="pnl-alan"><label htmlFor="bagla-urun">Mevcut ürün</label><select id="bagla-urun" value={baglanacakUrun} onChange={(e) => setBaglanacakUrun(e.target.value)}><option value="">Ürün seçin</option>{urunler.map((urun) => <option key={urun.product_id} value={urun.product_id}>{urun.name} · {urun.internal_code}</option>)}</select></div><div className="pnl-alan"><label htmlFor="bagla-tur">Kod türü</label><select id="bagla-tur" value={kodTuru} onChange={(e) => setKodTuru(e.target.value as StokKodTuru)}>{STOK_KOD_TURLERI.map((tur) => <option key={tur} value={tur}>{STOK_KOD_TURU_ADI[tur]}</option>)}</select></div></div><div className="pnl-uyari-eylemleri"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={eslesmeyenKoddanUrunAc} disabled={bekliyor}><PackagePlus size={15} /> Yeni ürün oluştur</button><button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => void eslesmeyeniBagla()} disabled={!baglanacakUrun || bekliyor}>Bağla ve +1 say</button></div></div></div> : null}
        <h3 className="pnl-alt-baslik">Sayılanlar</h3>{sayimSatirlari.length === 0 ? <p className="pnl-widget-bos">Henüz ürün sayılmadı.</p> : <div className="pnl-sayim-listesi">{sayimSatirlari.map((satir) => { const urun = urunler.find((u) => u.product_id === satir.product_id); return <div key={satir.id} className="pnl-sayim-satiri"><div><strong>{urun?.name ?? 'Ürün'}{satir.lot_code ? ` · ${satir.lot_code}` : ''}</strong><span>Beklenen {satir.expected_quantity} · tarama {satir.scan_count}</span></div><input aria-label={`${urun?.name ?? 'Ürün'} sayılan miktar`} inputMode="decimal" value={satir.counted_quantity} onChange={(e) => setSayimSatirlari((liste) => liste.map((s) => s.id === satir.id ? { ...s, counted_quantity: Number(e.target.value) || 0 } : s))} onBlur={() => void sayimSatiriYaz({ oturum: sayim.id, urun: satir.product_id, lot: satir.lot_id, miktar: satir.counted_quantity })} /><button type="button" className="pnl-ikon-dugme" aria-label="Bu sayımı sıfırla" onClick={async () => { await sayimiTemizle(sayim.id, satir.product_id, satir.lot_id); await sayimiTazele(); }}><RotateCcw size={15} /></button></div>; })}</div>}
        <div className="pnl-sayim-alt"><button type="button" className="pnl-dugme pnl-dugme-sade" disabled={sayimSatirlari.length === 0 || bekliyor} onClick={() => void tumSayimiSifirla()}><Trash2 size={14} /> Tüm sayımı sıfırla</button><button type="button" className="pnl-dugme pnl-dugme-olumsuz" disabled={bekliyor} onClick={() => void sayimiIptal()}>Sayımı iptal et</button><button type="button" className="pnl-dugme pnl-dugme-olumlu" disabled={sayimSatirlari.length === 0 || bekliyor} onClick={() => void sayimiBitir()}>Sayımı tamamla</button></div>
      </>}
    </Diyalog>
  </section>;
}
