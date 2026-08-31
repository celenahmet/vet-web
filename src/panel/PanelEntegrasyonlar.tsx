import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Activity, Beaker, ChevronDown, ChevronUp, CircleAlert,
  CalendarClock, Boxes, FileText, KeyRound, MessageCircle, RefreshCw,
  Send, ShieldCheck, Smartphone, Stethoscope, X,
} from 'lucide-react';

import Diyalog from './Diyalog';
import Hata from './Hata';
import Yukleniyor from './Yukleniyor';
import { cevrimdisiMusterileriOku, musterileriOku, type CevrimdisiMusteri, type Musteri } from './veri';
import {
  entegrasyonAyariniKaydet, entegrasyonBaglantisiIste, entegrasyonlariOku,
  entegrasyonSaglayicilariniOku, iletiKuyrukla, iletisimDogrulamalariniOku,
  iletisimIzinleriniOku, iletisimIzniYaz, iletisimIsleriniOku,
  iletisimSablonlariniOku, kuyruktakiIletiyiIptalEt,
  type EntegrasyonSaglayicisi, type EntegrasyonTuru, type IletisimAmaci,
  type IletisimDogrulamasi, type IletisimIsi, type IletisimIzni,
  type IletisimSablonu, type KlinikEntegrasyonu,
} from './entegrasyon-veri';

type TeknikTur = 'sms' | 'whatsapp' | 'laboratory';
type Taslak = {
  saglayici: string;
  ortam: 'sandbox' | 'production';
  temelAdres: string;
  ayarlar: Record<string, string>;
  sirlar: Record<string, string>;
};

const TURLER: EntegrasyonTuru[] = ['sms', 'whatsapp', 'laboratory', 'official_erx'];
const TEKNIK = new Set<EntegrasyonTuru>(['sms', 'whatsapp', 'laboratory']);
const TUR_ADI: Record<EntegrasyonTuru, string> = {
  sms: 'SMS', whatsapp: 'WhatsApp', laboratory: 'Laboratuvar', official_erx: 'E-reçete',
};
const TUR_ACIKLAMA: Record<EntegrasyonTuru, string> = {
  sms: 'Hizmet bildirimleri ve izinli klinik duyurularını doğrulanmış telefonlara kuyruklar.',
  whatsapp: 'Onaylı şablonları izinli ve doğrulanmış WhatsApp hedeflerine iletir.',
  laboratory: 'İstem, sonuç, düzeltme ve cihaz/LIS aktarımının teknik sağlayıcı ayarlarıdır.',
  official_erx: 'Resmî reçete sağlayıcısına gönderim için yönetilen bağlantı talebidir.',
};
const DURUM_ADI: Record<string, string> = {
  not_configured: 'Yapılandırılmadı', pending: 'Bağlantı bekliyor', ready: 'Hazır', paused: 'Duraklatıldı', error: 'Hata',
  draft: 'Taslak', validation_pending: 'Doğrulama bekliyor', connected: 'Bağlı', revalidation_required: 'Yeniden doğrulama gerekli', revoked: 'İptal',
  not_tested: 'Test edilmedi', healthy: 'Sağlıklı', degraded: 'Yavaş / sınırlı', down: 'Erişilemiyor',
};
const ADAPTER_ADI: Record<string, string> = {
  rest: 'REST API', soap: 'SOAP', hl7_v2: 'HL7 v2', astm: 'ASTM', sftp_file: 'SFTP dosya', manual_file: 'Manuel dosya',
};
const SISTEM_ADI: Record<string, string> = {
  external_reference_lab: 'Dış referans laboratuvarı', lis_middleware: 'LIS / ara katman',
  in_house_analyzer: 'Klinik içi analiz cihazı', manual_file_import: 'Manuel dosya aktarımı',
};
const DISIPLIN_ADI: Record<string, string> = {
  hematology: 'Hematoloji', biochemistry: 'Biyokimya', urinalysis: 'İdrar', blood_gas: 'Kan gazı',
  coagulation: 'Koagülasyon', endocrinology: 'Endokrinoloji', microbiology: 'Mikrobiyoloji', pathology: 'Patoloji',
};
const ALAN_ADI: Record<string, string> = {
  account_sid: 'Hesap SID', sender_name: 'Gönderen adı', delivery_reports: 'Teslim raporları',
  iys_enabled: 'İYS etkin', timeout_seconds: 'Zaman aşımı (sn)', api_key: 'API anahtarı',
  api_secret: 'API gizli anahtarı', auth_token: 'Yetkilendirme tokenı', phone_number_id: 'Telefon numarası kimliği',
  business_account_id: 'Business Account ID', webhook_url: 'Webhook adresi', webhook_verify_token: 'Webhook doğrulama tokenı',
  access_token: 'Kalıcı erişim tokenı', app_secret: 'Uygulama gizli anahtarı', site_code: 'Klinik / site kodu',
  result_mode: 'Sonuç teslim biçimi', timezone: 'Saat dilimi', catalog_version: 'Panel katalog sürümü',
  order_endpoint: 'İstem gönderim adresi', result_endpoint: 'Sonuç teslim adresi', api_token: 'Laboratuvar API tokenı',
  webhook_secret: 'Webhook imza sırrı', username: 'Kullanıcı adı', api_password: 'API parolası',
};
const AMAC_ADI: Record<IletisimAmaci, string> = {
  appointment: 'Randevu', care_reminder: 'Bakım hatırlatması', lab_result: 'Laboratuvar sonucu',
  prescription: 'Reçete durumu', announcement: 'Klinik duyurusu',
};
const IS_DURUMU: Record<IletisimIsi['status'], string> = {
  queued: 'Kuyrukta', sending: 'Gönderiliyor', sent: 'Gönderildi', delivered: 'Teslim edildi',
  failed: 'Başarısız', cancelled: 'İptal',
};

type Alici = { anahtar: string; tur: 'user' | 'offline'; id: string; ad: string };

export default function PanelEntegrasyonlar({ klinik, sahip, gorunum = 'technical', git }: {
  klinik: string;
  sahip: boolean;
  gorunum?: 'technical' | 'communications';
  git?: (bolum: 'randevular' | 'stok' | 'laboratuvar' | 'receteler' | 'entegrasyonlar') => void;
}) {
  const [entegrasyonlar, setEntegrasyonlar] = useState<KlinikEntegrasyonu[]>([]);
  const [saglayicilar, setSaglayicilar] = useState<EntegrasyonSaglayicisi[]>([]);
  const [izinler, setIzinler] = useState<IletisimIzni[]>([]);
  const [sablonlar, setSablonlar] = useState<IletisimSablonu[]>([]);
  const [isler, setIsler] = useState<IletisimIsi[]>([]);
  const [dogrulamalar, setDogrulamalar] = useState<IletisimDogrulamasi[]>([]);
  const [musteriler, setMusteriler] = useState<Musteri[]>([]);
  const [cevrimdisi, setCevrimdisi] = useState<CevrimdisiMusteri[]>([]);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [bekliyor, setBekliyor] = useState(false);
  const [uyariAcik, setUyariAcik] = useState(true);
  // Klinik sahibi ekrana geldiğinde ilk yapılandırılabilir kanal doğrudan açıktır;
  // ayarların nerede olduğu keşfe bırakılmaz, diğer entegrasyonlar aynı karttan açılır.
  const [acikTur, setAcikTur] = useState<EntegrasyonTuru | null>('sms');
  const [taslaklar, setTaslaklar] = useState<Partial<Record<TeknikTur, Taslak>>>({});
  const [izinAcik, setIzinAcik] = useState(false);
  const [izinFormu, setIzinFormu] = useState({ alici: '', amac: 'appointment' as IletisimAmaci, kanal: 'sms' as 'sms' | 'whatsapp', durum: 'allowed' as 'allowed' | 'denied' | 'revoked', kaynak: 'written' as 'written' | 'import' | 'provider', kanit: '' });
  const [gonderAcik, setGonderAcik] = useState(false);
  const [gonderFormu, setGonderFormu] = useState({ sablon: '', alici: '' });

  const yukle = useCallback(async () => {
    setYukleniyor(true); setHata(null);
    try {
      if (gorunum === 'technical') {
        const [e, s] = await Promise.all([entegrasyonlariOku(klinik), entegrasyonSaglayicilariniOku()]);
        setEntegrasyonlar(e); setSaglayicilar(s);
      } else {
        const [e, i, sa, is, d, m, c] = await Promise.all([
          entegrasyonlariOku(klinik), iletisimIzinleriniOku(klinik), iletisimSablonlariniOku(),
          iletisimIsleriniOku(klinik), iletisimDogrulamalariniOku(klinik),
          musterileriOku(klinik), cevrimdisiMusterileriOku(klinik),
        ]);
        setEntegrasyonlar(e); setIzinler(i); setSablonlar(sa); setIsler(is);
        setDogrulamalar(d); setMusteriler(m); setCevrimdisi(c);
      }
    } catch (e) { setHata((e as Error).message); }
    finally { setYukleniyor(false); }
  }, [gorunum, klinik]);

  useEffect(() => { void yukle(); }, [yukle]);

  const alicilar: Alici[] = useMemo(() => [
    ...musteriler.map((musteri) => ({ anahtar: `user:${musteri.user_id}`, tur: 'user' as const, id: musteri.user_id, ad: musteri.display_name || 'Veterito kullanıcısı' })),
    ...cevrimdisi.map((musteri) => ({ anahtar: `offline:${musteri.id}`, tur: 'offline' as const, id: musteri.id, ad: `${musteri.full_name || 'Klinik defteri'} · klinik defteri` })),
  ], [cevrimdisi, musteriler]);

  const entegrasyon = (tur: EntegrasyonTuru) => entegrasyonlar.find((satir) => satir.kind === tur);
  const saglayici = (tur: TeknikTur, kod?: string | null) => saglayicilar.find((satir) => satir.kind === tur && satir.code === kod);

  function taslak(tur: TeknikTur): Taslak {
    const satir = entegrasyon(tur);
    return taslaklar[tur] ?? {
      saglayici: satir?.provider_code ?? '', ortam: satir?.environment ?? 'sandbox', temelAdres: satir?.base_url ?? '',
      ayarlar: Object.fromEntries(Object.entries(satir?.public_config ?? {}).map(([anahtar, deger]) => [anahtar, String(deger)])),
      sirlar: {},
    };
  }

  function taslagiYama(tur: TeknikTur, yama: Partial<Taslak>) {
    setTaslaklar((tum) => ({ ...tum, [tur]: { ...taslak(tur), ...yama } }));
  }

  function saglayiciyiSec(tur: TeknikTur, kod: string) {
    const mevcut = entegrasyon(tur); const ayni = mevcut?.provider_code === kod;
    taslagiYama(tur, {
      saglayici: kod,
      ayarlar: ayni ? Object.fromEntries(Object.entries(mevcut?.public_config ?? {}).map(([a, d]) => [a, String(d)])) : {},
      sirlar: {},
    });
  }

  async function teknikAyariKaydet(tur: TeknikTur) {
    if (!sahip || bekliyor) return;
    const t = taslak(tur); const secili = saglayici(tur, t.saglayici); const mevcut = entegrasyon(tur);
    if (!secili) return setHata('Uyumlu sağlayıcı seçin.');
    const eksikAyar = secili.required_config_fields.some((alan) => !t.ayarlar[alan]?.trim());
    const mevcutSirlar = mevcut?.provider_code === t.saglayici ? mevcut.secret_fields_configured : [];
    const eksikSir = secili.required_secret_fields.some((alan) => !t.sirlar[alan]?.trim() && !mevcutSirlar?.includes(alan));
    if (eksikAyar || eksikSir) return setHata('Zorunlu teknik alanlar veya kimlik bilgileri eksik.');
    setBekliyor(true); setHata(null); setBilgi(null);
    try {
      await entegrasyonAyariniKaydet({ klinik, tur, saglayici: t.saglayici, ortam: t.ortam, temelAdres: t.temelAdres.trim() || null, genelAyarlar: t.ayarlar, sirlar: Object.fromEntries(Object.entries(t.sirlar).filter(([, deger]) => deger.trim())) });
      taslagiYama(tur, { sirlar: {} }); setBilgi(`${TUR_ADI[tur]} ayarları güvenli kasaya kaydedildi. Bağlantı testi ve sağlayıcı adaptörü tamamlanmadan hazır sayılmaz.`); await yukle();
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function erxIste() {
    setBekliyor(true); setHata(null);
    try { await entegrasyonBaglantisiIste(klinik, 'official_erx'); setBilgi('E-reçete bağlantı talebi oluşturuldu.'); await yukle(); }
    catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  const seciliSablon = sablonlar.find((sablon) => sablon.code === gonderFormu.sablon);
  const seciliKanalHazir = !!seciliSablon && entegrasyon(seciliSablon.channel)?.status === 'ready';
  const uygunAlicilar = useMemo(() => {
    if (!seciliSablon) return [];
    const simdi = Date.now();
    return alicilar.filter((alici) => {
      const izin = izinler.some((satir) => satir.purpose === seciliSablon.purpose
        && satir.channel === seciliSablon.channel && satir.state === 'allowed'
        && (alici.tur === 'user' ? satir.user_id === alici.id : satir.offline_customer_id === alici.id));
      const dogrulama = dogrulamalar.some((satir) => satir.channel === seciliSablon.channel
        && !satir.revoked_at && (!satir.expires_at || new Date(satir.expires_at).getTime() > simdi)
        && (alici.tur === 'user' ? satir.user_id === alici.id : satir.offline_customer_id === alici.id));
      return izin && dogrulama;
    });
  }, [alicilar, dogrulamalar, izinler, seciliSablon]);

  async function izinKaydet(e: React.FormEvent) {
    e.preventDefault();
    const alici = alicilar.find((satir) => satir.anahtar === izinFormu.alici);
    if (!alici || (izinFormu.durum === 'allowed' && !izinFormu.kanit.trim()) || bekliyor) return;
    setBekliyor(true); setHata(null); setBilgi(null);
    try {
      await iletisimIzniYaz({ klinik, kullanici: alici.tur === 'user' ? alici.id : null, cevrimdisiMusteri: alici.tur === 'offline' ? alici.id : null, amac: izinFormu.amac, kanal: izinFormu.kanal, durum: izinFormu.durum, kaynak: izinFormu.kaynak, kanit: izinFormu.kanit.trim() || null });
      setIzinAcik(false); setBilgi('İletişim tercihi amaç ve kanal ayrımıyla kaydedildi.'); await yukle();
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function iletiGonder(e: React.FormEvent) {
    e.preventDefault();
    const alici = uygunAlicilar.find((satir) => satir.anahtar === gonderFormu.alici);
    if (!seciliSablon || !alici || bekliyor) return;
    if (!seciliKanalHazir) return setHata(`${seciliSablon.channel === 'sms' ? 'SMS' : 'WhatsApp'} sağlayıcı bağlantısı hazır değil.`);
    setBekliyor(true); setHata(null); setBilgi(null);
    try {
      await iletiKuyrukla({ klinik, kullanici: alici.tur === 'user' ? alici.id : null, cevrimdisiMusteri: alici.tur === 'offline' ? alici.id : null, sablon: seciliSablon.code, parametreler: {}, benzersizAnahtar: crypto.randomUUID() });
      setGonderAcik(false); setGonderFormu({ sablon: '', alici: '' });
      setBilgi('İleti spam, izin ve doğrulama kontrollerinden geçerek kuyruğa alındı.'); await yukle();
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function isiIptalEt(is: string) {
    setBekliyor(true); setHata(null);
    try { await kuyruktakiIletiyiIptalEt(is); setBilgi('Kuyruktaki ileti iptal edildi.'); await yukle(); }
    catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  function izniDuzenle(izin: IletisimIzni) {
    const anahtar = izin.user_id ? `user:${izin.user_id}` : `offline:${izin.offline_customer_id}`;
    setIzinFormu({ alici: anahtar, amac: izin.purpose, kanal: izin.channel, durum: izin.state,
      kaynak: izin.source, kanit: izin.proof_reference ?? '' });
    setIzinAcik(true);
  }

  const aliciAdi = (izin: Pick<IletisimIzni, 'user_id' | 'offline_customer_id'>) =>
    alicilar.find((alici) => alici.id === (izin.user_id ?? izin.offline_customer_id))?.ad ?? 'Kayıtlı alıcı';
  const izinDogrulanmis = (izin: IletisimIzni) => dogrulamalar.some((satir) =>
    satir.channel === izin.channel && satir.user_id === izin.user_id
    && satir.offline_customer_id === izin.offline_customer_id && !satir.revoked_at
    && (!satir.expires_at || new Date(satir.expires_at).getTime() > Date.now()));

  if (yukleniyor) return <Yukleniyor metin={gorunum === 'technical' ? 'Entegrasyonlar yükleniyor' : 'Operasyonel işlemler yükleniyor'} />;

  const hazirKanal = ['sms', 'whatsapp'].filter((tur) => entegrasyon(tur as EntegrasyonTuru)?.status === 'ready').length;
  const izinli = izinler.filter((izin) => izin.state === 'allowed').length;
  const kuyrukta = isler.filter((is) => ['queued', 'sending'].includes(is.status)).length;
  const basarisiz = isler.filter((is) => is.status === 'failed').length;
  const yapilandirilan = entegrasyonlar.filter((satir) => satir.status !== 'not_configured').length;
  const dogrulamaBekleyen = entegrasyonlar.filter((satir) => ['pending', 'validation_pending'].includes(satir.status)
    || satir.configuration_status === 'validation_pending').length;
  const saglikli = entegrasyonlar.filter((satir) => satir.health_status === 'healthy').length;
  const entegrasyonHatasi = entegrasyonlar.filter((satir) => satir.status === 'error'
    || ['degraded', 'down'].includes(satir.health_status)).length;

  return <section className="pnl-bolum">
    <header className="pnl-bolum-basi"><div><p className="pnl-aciklama">{gorunum === 'technical' ? 'Yalnız teknik kurulum: SMS, WhatsApp, laboratuvar/LIS-cihaz ve e-reçete sağlayıcılarının API, sağlık ve maskeli kimlik bilgilerini yönetin.' : 'Günlük klinik akışları: iletişim izinlerini yönetin, güvenli şablonları kuyruğa alın, teslimi izleyin ve ilgili operasyon ekranlarına geçin.'}</p></div>{gorunum === 'communications' ? <div className="pnl-basi-dugmeler"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setIzinAcik(true)}><ShieldCheck size={15} /> İletişim tercihi</button><button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => setGonderAcik(true)}><Send size={15} /> İleti gönder</button></div> : null}</header>
    {gorunum === 'technical' && !sahip ? <div className="pnl-klinik-uyari"><KeyRound size={20} /><div><strong>Teknik kimlik bilgileri yalnız klinik sahibi tarafından değiştirilebilir</strong><p>Çalışanlar bağlantı ve sağlık durumunu görebilir; sağlayıcı sırlarını yazamaz.</p></div></div> : null}
    {gorunum === 'communications' && uyariAcik ? <div className="pnl-klinik-uyari"><ShieldCheck size={20} /><div><strong>Kuyruğa alındı, gönderildi anlamına gelmez</strong><p>Telefon kaydı izin değildir. Amaç + kanal izni, doğrulanmış hedef ve hazır sağlayıcı birlikte gerekir; teslim durumu yalnız sağlayıcı cevabıyla değişir.</p></div><button type="button" aria-label="İletişim uyarısını kapat" onClick={() => setUyariAcik(false)}><X size={16} /></button></div> : null}
    {hata ? <Hata mesaj={hata} kucuk tekrar={() => { setHata(null); void yukle(); }} /> : null}
    {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}
    {gorunum === 'technical' ? <section className="pnl-entegrasyon-rehberi" aria-labelledby="entegrasyon-ayarlari-baslik"><div><h2 id="entegrasyon-ayarlari-baslik">Entegrasyon ayarları</h2><p>Her kart kendi bağlantısının bütün teknik ayarlarını içerir. Sağlayıcıyı seçin; test veya canlı ortamı, uç noktaları, hesap/webhook alanlarını ve gereken gizli anahtarları aynı karttan kaydedin.</p></div><ul><li><strong>Genel ayarlar</strong><span>Sağlayıcı, ortam, API adresi, gönderici ve cihaz/LIS alanları</span></li><li><strong>Gizli bilgiler</strong><span>API key, token, parola ve webhook sırrı yalnız kasaya yazılır</span></li><li><strong>Bağlantı durumu</strong><span>Yapılandırma, sağlık kontrolü, sürüm ve son hata sınıfı</span></li></ul></section> : null}
    {gorunum === 'technical' ? <div className="pnl-kartlar"><div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon"><Activity size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">Yapılandırılan</span><span className="pnl-kart-deger">{yapilandirilan}/4</span><span className="pnl-kart-anlam">Teknik bağlantı kapsamı</span></span></div><div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon"><ShieldCheck size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">Sağlıklı</span><span className="pnl-kart-deger">{saglikli}</span><span className="pnl-kart-anlam">Son kontrolde çalışan</span></span></div><div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon pnl-kart-ikon-altin"><RefreshCw size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">Doğrulama</span><span className="pnl-kart-deger">{dogrulamaBekleyen}</span><span className="pnl-kart-anlam">Bağlantı testi bekleyen</span></span></div><div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon pnl-kart-ikon-uyari"><CircleAlert size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">Sorunlu</span><span className="pnl-kart-deger">{entegrasyonHatasi}</span><span className="pnl-kart-anlam">Hata veya erişim sorunu</span></span></div></div> : <div className="pnl-kartlar"><div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon"><Activity size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">Hazır kanal</span><span className="pnl-kart-deger">{hazirKanal}/2</span><span className="pnl-kart-anlam">SMS ve WhatsApp</span></span></div><div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon"><ShieldCheck size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">İzinli tercih</span><span className="pnl-kart-deger">{izinli}</span><span className="pnl-kart-anlam">Amaç ve kanal bazında</span></span></div><div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon pnl-kart-ikon-altin"><Send size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">Kuyruk</span><span className="pnl-kart-deger">{kuyrukta}</span><span className="pnl-kart-anlam">Gönderim bekliyor</span></span></div><div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon pnl-kart-ikon-uyari"><CircleAlert size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">Başarısız</span><span className="pnl-kart-deger">{basarisiz}</span><span className="pnl-kart-anlam">Son 50 iş içinde</span></span></div></div>}

    {gorunum === 'communications' && git ? <section className="pnl-widget"><header className="pnl-widget-basi"><span className="pnl-widget-ikon"><Activity size={17} /></span><h3>Günlük klinik operasyonları</h3><button type="button" className="pnl-widget-eylem" onClick={() => git('entegrasyonlar')}><KeyRound size={13} /> Teknik entegrasyonlara git</button></header><div className="pnl-operasyon-kisayollari"><button type="button" onClick={() => git('randevular')}><CalendarClock size={18} /><span><strong>Randevu yönetimi</strong><small>Talep, onay, zaman ve klinik notu</small></span></button><button type="button" onClick={() => git('laboratuvar')}><Stethoscope size={18} /><span><strong>Laboratuvar operasyonu</strong><small>İstem, cihaz, OCR, sonuç ve revizyon</small></span></button><button type="button" onClick={() => git('receteler')}><FileText size={18} /><span><strong>Reçete operasyonu</strong><small>Taslak, sürüm, iptal ve resmî durum</small></span></button><button type="button" onClick={() => git('stok')}><Boxes size={18} /><span><strong>Stok ve sayım</strong><small>Lot, SKT, barkod, QR ve fark işlemleri</small></span></button></div></section> : null}

    {gorunum === 'technical' ? <div className="pnl-entegrasyon-listesi">{TURLER.map((tur) => {
      const satir = entegrasyon(tur); const acik = acikTur === tur; const teknik = TEKNIK.has(tur); const teknikTur = tur as TeknikTur; const t = teknik ? taslak(teknikTur) : null; const secili = teknik && t ? saglayici(teknikTur, t.saglayici) : undefined;
      return <article className="pnl-widget pnl-entegrasyon-karti" key={tur}><button type="button" className="pnl-entegrasyon-basi" onClick={() => setAcikTur(acik ? null : tur)}><span className="pnl-widget-ikon">{tur === 'laboratory' ? <Beaker size={17} /> : tur === 'sms' ? <Smartphone size={17} /> : <MessageCircle size={17} />}</span><span><strong>{TUR_ADI[tur]}</strong><small>{TUR_ACIKLAMA[tur]}</small></span><em className={`pnl-durum pnl-durum-${satir?.status ?? 'not_configured'}`}>{DURUM_ADI[satir?.status ?? 'not_configured']}</em>{acik ? <ChevronUp size={17} /> : <ChevronDown size={17} />}</button>
      {acik ? <div className="pnl-entegrasyon-ayrinti"><div className="pnl-lab-meta"><span><b>Sağlayıcı</b>{satir?.provider_name || satir?.provider_code || 'Seçilmedi'}</span><span><b>Yapılandırma</b>{DURUM_ADI[satir?.configuration_status ?? 'draft']}</span><span><b>Bağlantı sağlığı</b>{DURUM_ADI[satir?.health_status ?? 'not_tested']}</span><span><b>Sürüm</b>{satir?.config_version ?? 0}</span></div>{satir?.last_health_checked_at ? <p className="pnl-widget-not">Son sağlık kontrolü: {new Date(satir.last_health_checked_at).toLocaleString('tr-TR')}{satir.last_health_error_class ? ` · ${satir.last_health_error_class}` : ''}</p> : null}
      {teknik && t ? <>{sahip ? <><div className="pnl-alan"><label htmlFor={`saglayici-${tur}`}>Sağlayıcı / cihaz sistemi</label><select id={`saglayici-${tur}`} value={t.saglayici} onChange={(e) => saglayiciyiSec(teknikTur, e.target.value)}><option value="">Sağlayıcı seçin</option>{saglayicilar.filter((s) => s.kind === tur).map((s) => <option key={s.code} value={s.code}>{s.display_name} · {tur === 'laboratory' && s.lab_system_type ? SISTEM_ADI[s.lab_system_type] : ADAPTER_ADI[s.adapter_kind]}</option>)}</select></div>{secili ? <><div className="pnl-entegrasyon-kabiliyet"><strong>{ADAPTER_ADI[secili.adapter_kind]}</strong>{secili.lab_system_type ? <span>{SISTEM_ADI[secili.lab_system_type]}</span> : null}{secili.lab_disciplines.map((d) => <span key={d}>{DISIPLIN_ADI[d] ?? d}</span>)}{secili.capabilities.map((k) => <span key={k}>{k.replaceAll('_', ' ')}</span>)}</div><div className="pnl-form-ikili"><div className="pnl-alan"><label htmlFor={`ortam-${tur}`}>Ortam</label><select id={`ortam-${tur}`} value={t.ortam} onChange={(e) => taslagiYama(teknikTur, { ortam: e.target.value as 'sandbox' | 'production' })}>{secili.environments.map((o) => <option key={o} value={o}>{o === 'sandbox' ? 'Test / sandbox' : 'Canlı / production'}</option>)}</select></div>{secili.adapter_kind === 'rest' ? <div className="pnl-alan"><label htmlFor={`adres-${tur}`}>API temel adresi</label><input id={`adres-${tur}`} type="url" value={t.temelAdres} onChange={(e) => taslagiYama(teknikTur, { temelAdres: e.target.value })} /></div> : null}</div><h3 className="pnl-alt-baslik">Genel entegrasyon ayarları</h3><div className="pnl-form-ikili">{[...secili.required_config_fields, ...secili.optional_config_fields].map((alan) => <div className="pnl-alan" key={alan}><label htmlFor={`${tur}-${alan}`}>{ALAN_ADI[alan] ?? alan}{secili.required_config_fields.includes(alan) ? ' *' : ''}</label><input id={`${tur}-${alan}`} value={t.ayarlar[alan] ?? ''} onChange={(e) => taslagiYama(teknikTur, { ayarlar: { ...t.ayarlar, [alan]: e.target.value } })} /></div>)}</div><h3 className="pnl-alt-baslik">Gizli kimlik bilgileri</h3>{secili.required_secret_fields.map((alan) => { const ayarli = satir?.provider_code === t.saglayici && satir.secret_fields_configured.includes(alan); return <div className="pnl-sir-alani" key={alan}>{ayarli ? <div><span>{ALAN_ADI[alan] ?? alan}</span><b>••••••••</b><ShieldCheck size={16} /></div> : null}<div className="pnl-alan"><label htmlFor={`sir-${tur}-${alan}`}>{ayarli ? `${ALAN_ADI[alan] ?? alan} değerini değiştir` : `${ALAN_ADI[alan] ?? alan} gir`} *</label><input id={`sir-${tur}-${alan}`} type="password" autoComplete="new-password" value={t.sirlar[alan] ?? ''} onChange={(e) => taslagiYama(teknikTur, { sirlar: { ...t.sirlar, [alan]: e.target.value } })} /></div></div>; })}<div className="pnl-gizlilik-notu"><KeyRound size={17} /><span>Gizli değerler yalnız kaydetme sırasında güvenli kasaya gönderilir. Sonradan gerçek değer dönmez; yalnız •••••••• ve değiştirilme zamanı görünür. Kaydetme bağlantıyı test etmez veya hazır durumuna geçirmez.</span></div><button type="button" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor} onClick={() => void teknikAyariKaydet(teknikTur)}>{bekliyor ? 'Kaydediliyor…' : 'Entegrasyon ayarlarını güvenli kaydet'}</button></> : null}</> : <p className="pnl-widget-not">Ayarları görmek için kartı açık bırakabilirsiniz; değişiklik yapma yetkisi klinik sahibindedir.</p>}</> : sahip ? <><p className="pnl-widget-not">Resmî e-reçete bağlantısı sağlayıcı koordinasyonu gerektirir. Hazır olmadan reçete gönderimi açılamaz.</p><button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => void erxIste()} disabled={bekliyor}>{satir ? 'Bağlantı talebini yenile' : 'Bağlantı iste'}</button></> : null}</div> : null}</article>;
    })}</div> : null}

    {gorunum === 'communications' ? <><section className="pnl-widget"><header className="pnl-widget-basi"><span className="pnl-widget-ikon"><ShieldCheck size={17} /></span><h3>İletişim tercihleri ve hedef doğrulaması</h3></header><div className="pnl-widget-govde pnl-widget-govde-tablo">{izinler.length === 0 ? <p className="pnl-widget-bos">Henüz amaç ve kanal bazında iletişim tercihi kaydedilmedi.</p> : <table className="pnl-tablo"><thead><tr><th>Alıcı</th><th>Amaç / kanal</th><th>Tercih</th><th>Hedef</th><th>İşlem</th></tr></thead><tbody>{izinler.map((izin) => <tr key={izin.id}><td><strong>{aliciAdi(izin)}</strong><small>{izin.proof_reference ? `Kanıt: ${izin.proof_reference}` : 'Kanıt referansı yok'}</small></td><td>{AMAC_ADI[izin.purpose]}<small>{izin.channel === 'sms' ? 'SMS' : 'WhatsApp'}</small></td><td><span className={`pnl-durum pnl-durum-${izin.state}`}>{izin.state === 'allowed' ? 'İzin verdi' : izin.state === 'denied' ? 'İzin vermedi' : 'İzni geri aldı'}</span></td><td>{izinDogrulanmis(izin) ? <span className="pnl-etiket pnl-etiket-mavi">Doğrulandı</span> : <span className="pnl-etiket pnl-etiket-turuncu">Doğrulanmadı</span>}</td><td><button type="button" className="pnl-metin-dugme" onClick={() => izniDuzenle(izin)}>Değiştir</button></td></tr>)}</tbody></table>}</div></section><section className="pnl-widget"><header className="pnl-widget-basi"><span className="pnl-widget-ikon"><Send size={17} /></span><h3>İleti kuyruğu ve teslim durumu</h3><button type="button" className="pnl-widget-eylem" onClick={() => void yukle()}><RefreshCw size={13} /> Yenile</button></header><div className="pnl-widget-govde pnl-widget-govde-tablo">{isler.length === 0 ? <p className="pnl-widget-bos">Henüz SMS veya WhatsApp işi yok.</p> : <table className="pnl-tablo"><thead><tr><th>Kanal / amaç</th><th>Şablon</th><th>Durum</th><th>Zaman</th><th>İşlem</th></tr></thead><tbody>{isler.map((is) => <tr key={is.id}><td><strong>{is.channel === 'sms' ? 'SMS' : 'WhatsApp'}</strong><small>{AMAC_ADI[is.purpose]}</small></td><td>{is.template_code}</td><td><span className={`pnl-durum pnl-durum-${is.status}`}>{IS_DURUMU[is.status]}</span>{is.normalized_error ? <small>{is.normalized_error}</small> : null}</td><td>{new Date(is.requested_at).toLocaleString('tr-TR')}</td><td>{is.status === 'queued' ? <button type="button" className="pnl-metin-dugme pnl-eksi" onClick={() => void isiIptalEt(is.id)}>İptal et</button> : '—'}</td></tr>)}</tbody></table>}</div></section></> : null}

    {gorunum === 'communications' ? <Diyalog acik={izinAcik} kapat={() => setIzinAcik(false)} baslik="İletişim tercihi kaydet" aciklama="Telefon numarası izin değildir. Amaç ve kanal ayrı kaydedilir; izin verildiyse kanıt referansı zorunludur."><form onSubmit={izinKaydet}><div className="pnl-alan"><label htmlFor="izin-alici">Alıcı</label><select id="izin-alici" required value={izinFormu.alici} onChange={(e) => setIzinFormu({ ...izinFormu, alici: e.target.value })}><option value="">Alıcı seçin</option>{alicilar.map((alici) => <option key={alici.anahtar} value={alici.anahtar}>{alici.ad}</option>)}</select></div><div className="pnl-form-ikili"><div className="pnl-alan"><label htmlFor="izin-amac">Gönderim amacı</label><select id="izin-amac" value={izinFormu.amac} onChange={(e) => setIzinFormu({ ...izinFormu, amac: e.target.value as IletisimAmaci })}>{Object.entries(AMAC_ADI).map(([kod, ad]) => <option key={kod} value={kod}>{ad}</option>)}</select></div><div className="pnl-alan"><label htmlFor="izin-kanal">Kanal</label><select id="izin-kanal" value={izinFormu.kanal} onChange={(e) => setIzinFormu({ ...izinFormu, kanal: e.target.value as 'sms' | 'whatsapp' })}><option value="sms">SMS</option><option value="whatsapp">WhatsApp</option></select></div><div className="pnl-alan"><label htmlFor="izin-durum">Tercih</label><select id="izin-durum" value={izinFormu.durum} onChange={(e) => setIzinFormu({ ...izinFormu, durum: e.target.value as typeof izinFormu.durum })}><option value="allowed">İzin verdi</option><option value="denied">İzin vermedi</option><option value="revoked">İzni geri aldı</option></select></div><div className="pnl-alan"><label htmlFor="izin-kaynak">Kanıt kaynağı</label><select id="izin-kaynak" value={izinFormu.kaynak} onChange={(e) => setIzinFormu({ ...izinFormu, kaynak: e.target.value as typeof izinFormu.kaynak })}><option value="written">Yazılı belge</option><option value="import">Aktarılan kayıt</option><option value="provider">Sağlayıcı kaydı</option></select></div></div><div className="pnl-alan"><label htmlFor="izin-kanit">İzin kanıtı / belge referansı{izinFormu.durum === 'allowed' ? ' *' : ''}</label><input id="izin-kanit" required={izinFormu.durum === 'allowed'} value={izinFormu.kanit} onChange={(e) => setIzinFormu({ ...izinFormu, kanit: e.target.value })} placeholder="Belge, sözleşme veya sağlayıcı kayıt no." /></div><div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setIzinAcik(false)}>Vazgeç</button><button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || !izinFormu.alici || (izinFormu.durum === 'allowed' && !izinFormu.kanit.trim())}>Tercihi kaydet</button></div></form></Diyalog> : null}

    {gorunum === 'communications' ? <Diyalog acik={gonderAcik} kapat={() => setGonderAcik(false)} baslik="SMS veya WhatsApp gönder" aciklama="Serbest metin gönderilmez. Yalnız önceden tanımlı, hassas veri içermeyen şablonlar; izinli ve doğrulanmış alıcıya kuyruklanır."><form onSubmit={iletiGonder}><div className="pnl-alan"><label htmlFor="gonder-sablon">Şablon</label><select id="gonder-sablon" required value={gonderFormu.sablon} onChange={(e) => setGonderFormu({ sablon: e.target.value, alici: '' })}><option value="">Şablon seçin</option>{sablonlar.map((sablon) => <option key={sablon.code} value={sablon.code}>{sablon.channel === 'sms' ? 'SMS' : 'WhatsApp'} · {AMAC_ADI[sablon.purpose]}{sablon.is_marketing ? ' · duyuru' : ''}{entegrasyon(sablon.channel)?.status !== 'ready' ? ' · sağlayıcı hazır değil' : ''}</option>)}</select></div>{seciliSablon ? <>{!seciliKanalHazir ? <p className="pnl-alan-hata">{seciliSablon.channel === 'sms' ? 'SMS' : 'WhatsApp'} sağlayıcı bağlantısı hazır değil; ileti kuyruğa alınamaz.</p> : <div className="pnl-alan"><label htmlFor="gonder-alici">İzinli ve doğrulanmış alıcı</label><select id="gonder-alici" required value={gonderFormu.alici} onChange={(e) => setGonderFormu({ ...gonderFormu, alici: e.target.value })}><option value="">Alıcı seçin</option>{uygunAlicilar.map((alici) => <option key={alici.anahtar} value={alici.anahtar}>{alici.ad}</option>)}</select>{uygunAlicilar.length === 0 ? <span className="pnl-alan-hata">Bu şablonun amaç ve kanalı için hem izinli hem doğrulanmış alıcı yok.</span> : <span className="pnl-alan-ipucu">{uygunAlicilar.length} uygun alıcı. Telefon numarası ekranda gösterilmez.</span>}</div>}<div className="pnl-gizlilik-notu"><ShieldCheck size={17} /><span>Aynı/benzer içerik {seciliSablon.is_marketing ? '7 gün' : '6 saat'} içinde tekrar gönderilemez. Alıcı başına günlük 3, klinik ve kanal başına saatlik 100 iş sınırı sunucuda uygulanır.</span></div></> : null}<div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setGonderAcik(false)}>Vazgeç</button><button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || !seciliKanalHazir || !gonderFormu.sablon || !gonderFormu.alici}>{bekliyor ? 'Kuyruklanıyor…' : 'Kontrollerden geçir ve kuyrukla'}</button></div></form></Diyalog> : null}
  </section>;
}
