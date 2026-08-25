/*
 * Yalniz iki sabit; BILEREK bagimsiz bir dosya.
 *
 * Bunlar `guvenli-hata.ts` icindeydi ve o dosya Supabase istemcisini iceri
 * cekiyor. `sozluk.ts` yalniz sabitler icin istemciyi de yuklemek zorunda
 * kaliyordu; sozlugu tek basina calistirmak (ve sinamak) mumkun degildi.
 */
/**
 * Mesajin basina konan iki isaret. `hatayiAnlat` ikisini de taniyor.
 *
 * IKISI DE GEREKLI, biri yetmez. Yalniz gizlenenler isaretlenseydi, buradan
 * GECMEYEN bir hata (ornegin GoTrue giris hatasi) "isaretsiz" oldugu icin
 * "bizimdir" sayilip ham metniyle ekrana basilirdi. Kural tersine calisiyor:
 * ISARETSIZ HICBIR SEY GOSTERILMIYOR.
 *
 * Yazdirilamayan bir karakter secildi; "gizli" gibi bir kelime secilseydi
 * gercekten "gizli" diye baslayan bir cumleyle karisirdi.
 */
export const GIZLI_ISARET = '\u0001g';
export const GUVENLI_ISARET = '\u0001b';
