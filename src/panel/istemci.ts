/**
 * PANEL SUPABASE ISTEMCISI
 *
 * ⚠️ NEDEN PAKET EKLENDI: sitenin geri kalani PostgREST'i duz `fetch` ile
 * cagiriyor ve bu bilincli bir tercihti (`lib/clinicPage.ts`, `lib/blogGoruntulenme.ts`).
 * Orada is OKUMA ve oturum yok. Burada OTURUM var: jeton yenileme, sure dolumu,
 * es zamanli yenileme yarisi ve depolama. Bunlari elle yazmak, guvenlik
 * hatalarinin en sik ciktigi yer.
 *
 * ⚠️ MALIYETI PAZARLAMA SAYFALARINA BINMIYOR. Bu modul yalniz `/panel` rota
 * agacindan import ediliyor ve o agac `lazy()` ile yukleniyor; blog ve ana
 * sayfa paketi degismiyor. Derlemeden sonra olculuyor.
 *
 * ⚠️ ANON ANAHTAR GIZLI DEGIL. Zaten sitede duruyor ve durmasi normal: yetkiyi
 * anahtar degil, sunucudaki RLS ve RPC govdelerindeki `is_clinic_member()`
 * kontrolu veriyor. Olculdu (24.08.2026):
 *   oturumsuz  -> HTTP 401 (RPC anon'a hic acik degil)
 *   uye        -> HTTP 200
 *   uye degil  -> HTTP 400 "yetkisiz: bu klinigin uyesi degilsin"
 * Yani panel yeni bir yetki yuzeyi ACMIYOR; var olani kullaniyor.
 */
import { createClient } from '@supabase/supabase-js';

const ADRES = import.meta.env.VITE_SUPABASE_URL ?? '';
const ANAHTAR = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

/** Ortam degiskeni yoksa panel hic acilmamali; sessizce bos ekran gostermek yerine soyluyoruz. */
export const yapilandirmaEksik = !ADRES || !ANAHTAR;

export const istemci = createClient(ADRES, ANAHTAR, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    /**
     * ⚠️ URL'den oturum okuma KAPALI. Panel parola ile giriyor; sihirli bag ya
     * da OAuth donusu beklemiyoruz. Acik birakmak, adres cubugundaki parcayi
     * oturum verisi diye yorumlayan bir yuzey birakirdi.
     */
    detectSessionInUrl: false,
    storageKey: 'veterito-panel',
  },
});
