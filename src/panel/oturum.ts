/**
 * PANEL OTURUMU VE KLINIK UYELIGI
 *
 * ⚠️ BU DOSYA YETKI VERMIYOR, YALNIZ GOSTERIYOR. Kullanicinin hangi kliniklere
 * uye oldugu burada okunuyor ama bu bilgi bir IZIN degil, bir ARAYUZ girdisi.
 * Gercek karari sunucu veriyor: klinik RPC'lerinin govdesinde
 * `is_clinic_member()` kontrolu var ve uye olmayan cagri 400 donuyor.
 *
 * Yani buradaki liste kurcalanirsa kullanici baska bir klinigin ekranini
 * "acabilir" ama HICBIR VERI GOREMEZ. Istemci tarafi authz yalnizca kullanici
 * deneyimidir (guvenlik anayasasi §1.0/②).
 */
import { istemci } from './istemci';

export type KlinikUyeligi = {
  clinic_id: string;
  role: string;
  clinic_name: string;
};

/**
 * Kullanicinin uye oldugu klinikler.
 *
 * ⚠️ BURADA BIR HATA VARDI VE OLCULEREK BULUNDU (Ahmet, 24.08.2026:
 * *"niye o kadar test gozukuyor onlarin isimleri yok mu"*). Klinik seciminde
 * ayni klinik YEDI KEZ listeleniyordu.
 *
 * Sebep: sorgu `clinic_members` tablosundan doniyordu ve her SATIRI bir klinik
 * sayiyordu. Oysa donen satirlar klinikler degil, tek bir klinigin YEDI
 * PERSONELIYDI. Olculdu:
 *   7 satir · 1 ayri klinik · 7 ayri kullanici · bunlarin 1'i giren kisi
 *
 * ⚠️ ESKI YORUMUM YANLISTI, olcum yanlisladi. "Politika yalnizca kendi
 * satirlarini gosteriyor" yazmistim; oyle degil. Politika, uye oldugunuz
 * KLINIGIN TUM UYELERINI gosteriyor ve bu DOGRU: ekip yonetimi ekrani calisma
 * arkadaslarinizi listeleyebilsin diye boyle. Yanlis olan politika degil,
 * politikanin ne dondugunu olcmeden varsaymamdi.
 *
 * ⚠️ GUVENLIK ACIGI DEGILDI: donen yedi satirin hepsi kullanicinin KENDI
 * kliniginden. Baska bir klinigin uyeligi hic gorunmuyor, yani kimse yabanci
 * bir klinige "gecemiyordu"; yalnizca kendi klinigini yedi kez goruyordu.
 *
 * ⚠️ `.eq('user_id', ...)` SUS DEGIL ANLAM: "benim uyeliklerim" ile "gorebildigim
 * uyelikler" farkli sorular. Ekranda sorulan birincisi.
 */
export async function klinikUyelikleri(): Promise<KlinikUyeligi[]> {
  const { data: kullanici, error: kullaniciHatasi } = await istemci.auth.getUser();
  if (kullaniciHatasi) throw kullaniciHatasi;
  const kimlik = kullanici.user?.id;
  if (!kimlik) return [];

  const { data, error } = await istemci
    .from('clinic_members')
    .select('clinic_id, role, clinics(name)')
    .eq('user_id', kimlik)
    .order('created_at', { ascending: true });

  if (error) throw error;

  /*
   * ⚠️ Tekillestirme, `user_id` suzgeci VARKEN de duruyor. Bir kullanicinin ayni
   * klinikte birden fazla satiri olmasi bugun beklenmiyor; ama ekranda ayni ismi
   * iki kez gostermenin bedeli, birkac satirlik korumadan yuksek. Ilk satir
   * kaliyor: `created_at` artan siralandigi icin bu EN ESKI uyelik.
   */
  const gorulen = new Set<string>();
  const liste: KlinikUyeligi[] = [];
  for (const satir of data ?? []) {
    const id = satir.clinic_id as string;
    if (gorulen.has(id)) continue;
    gorulen.add(id);
    const klinik = satir.clinics as unknown as { name?: string } | null;
    liste.push({
      clinic_id: id,
      role: (satir.role as string) ?? '',
      clinic_name: klinik?.name ?? 'Kliniğiniz',
    });
  }
  return liste;
}

/** Panelde son secilen klinik. Yalnizca kolaylik; yetkiyle ilgisi yok. */
const SECILI_ANAHTAR = 'veterito-panel-klinik';

export function seciliKlinigiOku(): string | null {
  try {
    return localStorage.getItem(SECILI_ANAHTAR);
  } catch {
    // Gizli sekmede depolama istisna firlatabiliyor; panel yine calismali.
    return null;
  }
}

export function seciliKlinigiYaz(id: string) {
  try {
    localStorage.setItem(SECILI_ANAHTAR, id);
  } catch { /* depolama yok, secim yalniz bu oturumda kalir */ }
}
