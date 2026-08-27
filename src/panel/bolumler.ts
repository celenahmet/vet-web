import {
  LayoutDashboard, CalendarClock, Users, PawPrint, FileText, Syringe, Building2,
  MessagesSquare, MessageCircle, Heart, UsersRound, Wallet, Globe, BarChart3, Settings,
  Megaphone, Star, Pill,
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
  | 'defter' | 'websitesi' | 'raporlar' | 'ayarlar';

export const BOLUMLER: {
  anahtar: Bolum; ad: string; aciklama: string; ikon: LucideIcon;
  /** Referansta olmayan, sonradan eklenen bolum. */
  ekleme?: boolean;
}[] = [
  { anahtar: 'pano',          ad: 'Genel bakış',       aciklama: 'Kliniğinizin özeti',            ikon: LayoutDashboard },
  { anahtar: 'randevular',    ad: 'Randevular',        aciklama: 'Talepleri onaylayın',           ikon: CalendarClock },
  { anahtar: 'musteriler',    ad: 'Müşteriler',        aciklama: 'Bağlı hayvan sahipleri',        ikon: Users },
  { anahtar: 'hastalar',      ad: 'Hastalar',          aciklama: 'Kayıtlı hayvanlar',             ikon: PawPrint },
  { anahtar: 'kayitlar',      ad: 'Sağlık kayıtları',  aciklama: 'Muayene, tedavi ve reçeteler',  ikon: FileText },
  { anahtar: 'asi',           ad: 'Aşı takvimi',       aciklama: 'Zamanı yaklaşan aşı ve parazit',ikon: Syringe },
  { anahtar: 'receteler',     ad: 'Reçeteler',         aciklama: 'Yazılan reçeteler ve iptaller', ikon: Pill, ekleme: true },
  { anahtar: 'profil',        ad: 'Klinik profili',    aciklama: 'Bilgiler, hizmetler, saatler',  ikon: Building2 },
  { anahtar: 'topluluk',      ad: 'Topluluk',          aciklama: 'Paylaşımlarınız',               ikon: MessagesSquare },
  { anahtar: 'mesajlar',      ad: 'Mesajlar',          aciklama: 'Hayvan sahipleriyle yazışma',   ikon: MessageCircle },
  { anahtar: 'sahiplendirme', ad: 'Sahiplendirme',     aciklama: 'Sahiplendirme ilanları',        ikon: Heart },
  { anahtar: 'ekip',          ad: 'Ekip',              aciklama: 'Klinikte çalışanlar',           ikon: UsersRound },
  { anahtar: 'duyurular',     ad: 'Duyurular',         aciklama: 'Gönderdiğiniz duyurular',       ikon: Megaphone, ekleme: true },
  { anahtar: 'degerlendirmeler', ad: 'Değerlendirmeler', aciklama: 'Müşteri puan ve yorumları',  ikon: Star, ekleme: true },
  { anahtar: 'defter',        ad: 'Gelir / Gider',     aciklama: 'Klinik defteri',                ikon: Wallet, ekleme: true },
  { anahtar: 'websitesi',     ad: 'Klinik web sitesi', aciklama: 'Genel sayfanız',                ikon: Globe, ekleme: true },
  { anahtar: 'raporlar',      ad: 'Raporlar',          aciklama: 'Sayılar ve yorumlar',           ikon: BarChart3, ekleme: true },
  { anahtar: 'ayarlar',       ad: 'Ayarlar',           aciklama: 'Çalışma saatleri ve duyurular', ikon: Settings },
];
