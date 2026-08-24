import {
  LayoutDashboard, CalendarClock, Users, PawPrint, Wallet, UsersRound, Globe, BarChart3,
  type LucideIcon,
} from 'lucide-react';

/**
 * PANEL BOLUMLERI — tek liste, iki yerde kullaniliyor
 *
 * ⚠️ Yan menu ve icerik AYNI listeden uretiliyor. Ayri ayri yazilsaydi biri
 * guncellenip digeri unutulurdu; menude gorunen ama acilmayan bolum, en can
 * sikici hata turudur.
 *
 * ⚠️ IKONLAR SUS DEGIL. Klinikte calisan biri menuyu okumadan once ikona
 * bakiyor; sekiz kalemlik bir listede yalniz metin, her seferinde bastan
 * okumak demek.
 *
 * ⚠️ Panel adres cubugunu KULLANMIYOR: bolumler `/panel` altinda ayri rota
 * degil, ic durum. Sebep, bu turdaki her yeni rotanin `vercel.json`'a da
 * eklenmesi gerekmesi; unutulursa dogrudan acilan adres 404 doner. Bolum
 * derinlestiginde rota modeline gecilir, o zaman rota denetcisi de kapsar.
 */
export const BOLUMLER: { anahtar: string; ad: string; aciklama: string; ikon: LucideIcon }[] = [
  { anahtar: 'pano', ad: 'Genel bakış', aciklama: 'Kliniğinizin özeti', ikon: LayoutDashboard },
  { anahtar: 'randevular', ad: 'Randevular', aciklama: 'Talepleri onaylayın', ikon: CalendarClock },
  { anahtar: 'musteriler', ad: 'Müşteriler', aciklama: 'Bağlı hayvan sahipleri', ikon: Users },
  { anahtar: 'hastalar', ad: 'Hastalar', aciklama: 'Kayıtlı hayvanlar', ikon: PawPrint },
  { anahtar: 'defter', ad: 'Gelir / Gider', aciklama: 'Klinik defteri', ikon: Wallet },
  { anahtar: 'ekip', ad: 'Ekip', aciklama: 'Klinikte çalışanlar', ikon: UsersRound },
  { anahtar: 'websitesi', ad: 'Klinik web sitesi', aciklama: 'Genel sayfanız', ikon: Globe },
  { anahtar: 'raporlar', ad: 'Raporlar', aciklama: 'Sayılar ve yorumlar', ikon: BarChart3 },
] as const;

export type Bolum = 'pano' | 'randevular' | 'musteriler' | 'hastalar' | 'defter' | 'ekip' | 'websitesi' | 'raporlar';
