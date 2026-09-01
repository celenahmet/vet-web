import {
  LayoutDashboard, CalendarClock, Users, PawPrint, FileText, Syringe, Building2,
  MessagesSquare, MessageCircle, Heart, UsersRound, Wallet, Globe, BarChart3, Settings,
  Megaphone, Star, Pill, Boxes, FlaskConical, PlugZap, Workflow,
  type LucideIcon,
} from 'lucide-react';

/**
 * PANEL BOLUMLERI — tek liste, iki yerde kullaniliyor
 *
 * ⚠️ SIRA REFERANS TASARIMDAN (Ahmet, 25.08.2026: *"sol taraftaki menülerde
 * aynı değil aynen yapalım"*). Referanstaki on iki kalem ayni adla ve ayni
 * sirada duruyor. Ustune Ahmet'in iki eklemesi geliyor:
 *   · **Gelir / Gider** (*"gelir gider taraflarını da ekleyelim sol menüye"*)
 *   · **Klinik web sitesi** (*"web klinik benim eklememdi site tarafı"*)
 *   · **Duyurular** ve **Değerlendirmeler** (*"sol tarafa duyuru ve bildirimler
 *     de ekleyelim eksikmiş... proaktif olalım"*)
 *
 * ⚠️ **Bildirimler MENUDE YOK** (Ahmet, 25.08.2026: *"bildirimleri solda yer
 * vermeye gerek yok zaten çan ikonu koymuşuz"*). Bolum duruyor ve calisiyor;
 * yalnizca ust cubuktaki zilden aciliyor. Ayni yere iki kapi acmak, menuyu
 * uzatmaktan baska bir sey yapmiyordu.
 *   · **Raporlar**
 * Ikisi de referansta yok; bilerek eklendi ve karistirilmasin diye burada
 * isaretli.
 *
 * ⚠️ ACIKLAMA MENUDE GORUNMUYOR, `title`e tasindi (25.08.2026). Her satirin
 * altinda aciklama vardi ve menu ogesini iki katina cikariyordu; referans
 * yerlesimde menu tek satirlik ve panel tek ekrana sigiyor.
 *
 * ⚠️ `hazir: false` olan bolum EKRANI YINE ACIYOR ama icerigi "yakinda" diyor.
 * Menuden gizlemek yerine gosterilmesi Ahmet'in karari: *"olmayanlara - koyarız
 * sonra oturturuz bence daha hızlı çıkar panel"*. Tasarim bastan tam oturuyor,
 * sonra kutular doluyor.
 *
 * ⚠️ Panel adres cubugunu KULLANMIYOR: bolumler `/panel` altinda ayri rota
 * degil, ic durum. Sebep, bu turdaki her yeni rotanin `vercel.json`'a da
 * eklenmesi gerekmesi; unutulursa dogrudan acilan adres 404 doner.
 */
export type Bolum =
  | 'pano' | 'randevular' | 'musteriler' | 'hastalar' | 'kayitlar' | 'asi'
  | 'receteler' | 'profil' | 'topluluk' | 'mesajlar' | 'sahiplendirme' | 'ekip'
  | 'duyurular' | 'bildirimler' | 'degerlendirmeler'
  | 'stok' | 'laboratuvar' | 'iletisim' | 'entegrasyonlar'
  | 'defter' | 'websitesi' | 'raporlar' | 'ayarlar';

export type BolumGrubu = 'daily' | 'care' | 'operations' | 'communication' | 'clinic' | 'management';

export const BOLUM_GRUBU_ADI: Record<BolumGrubu, string> = {
  daily: 'Günlük',
  care: 'Klinik bakım',
  operations: 'Operasyon',
  communication: 'İletişim',
  clinic: 'Klinik yönetimi',
  management: 'Yönetim',
};

export const BOLUMLER: {
  anahtar: Bolum; ad: string; aciklama: string; ikon: LucideIcon; grup: BolumGrubu;
  /** Referansta olmayan, sonradan eklenen bolum. */
  ekleme?: boolean;
}[] = [
  { anahtar: 'pano', ad: 'Genel bakış', aciklama: 'Kliniğinizin özeti', ikon: LayoutDashboard, grup: 'daily' },
  { anahtar: 'randevular', ad: 'Randevular', aciklama: 'Talepleri onaylayın', ikon: CalendarClock, grup: 'daily' },
  { anahtar: 'musteriler', ad: 'Müşteriler', aciklama: 'Bağlı hayvan sahipleri', ikon: Users, grup: 'daily' },
  { anahtar: 'hastalar', ad: 'Hastalar', aciklama: 'Kayıtlı hayvanlar', ikon: PawPrint, grup: 'daily' },
  { anahtar: 'kayitlar', ad: 'Sağlık kayıtları', aciklama: 'Muayene, tedavi ve reçeteler', ikon: FileText, grup: 'care' },
  { anahtar: 'asi', ad: 'Aşı takvimi', aciklama: 'Zamanı yaklaşan aşı ve parazit', ikon: Syringe, grup: 'care' },
  { anahtar: 'receteler', ad: 'Reçeteler', aciklama: 'Yazılan reçeteler ve iptaller', ikon: Pill, grup: 'care', ekleme: true },
  { anahtar: 'laboratuvar', ad: 'Laboratuvar', aciklama: 'İstem, sonuç ve klinik destek', ikon: FlaskConical, grup: 'care', ekleme: true },
  { anahtar: 'stok', ad: 'Ürün ve stok', aciklama: 'Lot, SKT, barkod ve sayım', ikon: Boxes, grup: 'operations', ekleme: true },
  { anahtar: 'iletisim', ad: 'Operasyonel işlemler', aciklama: 'İzinler, otomasyon hazırlığı ve işlem kuyrukları', ikon: Workflow, grup: 'operations', ekleme: true },
  { anahtar: 'mesajlar', ad: 'Mesajlar', aciklama: 'Hayvan sahipleriyle yazışma', ikon: MessageCircle, grup: 'communication' },
  { anahtar: 'topluluk', ad: 'Topluluk', aciklama: 'Paylaşımlarınız', ikon: MessagesSquare, grup: 'communication' },
  { anahtar: 'duyurular', ad: 'Duyurular', aciklama: 'Gönderdiğiniz duyurular', ikon: Megaphone, grup: 'communication', ekleme: true },
  { anahtar: 'sahiplendirme', ad: 'Sahiplendirme', aciklama: 'Sahiplendirme ilanları', ikon: Heart, grup: 'communication' },
  { anahtar: 'profil', ad: 'Klinik profili', aciklama: 'Bilgiler, hizmetler, saatler', ikon: Building2, grup: 'clinic' },
  { anahtar: 'ekip', ad: 'Ekip', aciklama: 'Klinikte çalışanlar', ikon: UsersRound, grup: 'clinic' },
  { anahtar: 'websitesi', ad: 'Klinik web sitesi', aciklama: 'Genel sayfanız', ikon: Globe, grup: 'clinic', ekleme: true },
  { anahtar: 'degerlendirmeler', ad: 'Değerlendirmeler', aciklama: 'Müşteri puan ve yorumları', ikon: Star, grup: 'clinic', ekleme: true },
  { anahtar: 'entegrasyonlar', ad: 'Entegrasyonlar', aciklama: 'Sağlayıcı, API, cihaz ve güvenli kimlik bilgileri', ikon: PlugZap, grup: 'management', ekleme: true },
  { anahtar: 'defter', ad: 'Gelir / Gider', aciklama: 'Klinik defteri', ikon: Wallet, grup: 'management', ekleme: true },
  { anahtar: 'raporlar', ad: 'Raporlar', aciklama: 'Sayılar ve yorumlar', ikon: BarChart3, grup: 'management', ekleme: true },
  { anahtar: 'ayarlar', ad: 'Ayarlar', aciklama: 'Hesap ve web oturumu', ikon: Settings, grup: 'management' },
];
