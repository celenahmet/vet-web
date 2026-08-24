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
 * ⚠️ `clinic_members` tablosuna DOGRUDAN okuma yapiliyor ve bu guvenli: tablo
 * RLS altinda ve politika yalnizca kendi satirlarini gosteriyor. Baskasinin
 * uyeliklerini okumaya calismak bos kume donduruyor, hata degil — bu yuzden
 * bos sonucu "yetki yok" diye degil "uyelik yok" diye yorumluyoruz.
 */
export async function klinikUyelikleri(): Promise<KlinikUyeligi[]> {
  const { data, error } = await istemci
    .from('clinic_members')
    .select('clinic_id, role, clinics(name)')
    .order('created_at', { ascending: true });

  if (error) throw error;

  return (data ?? []).map((satir) => {
    const klinik = satir.clinics as unknown as { name?: string } | null;
    return {
      clinic_id: satir.clinic_id as string,
      role: (satir.role as string) ?? '',
      clinic_name: klinik?.name ?? 'Klinik',
    };
  });
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
