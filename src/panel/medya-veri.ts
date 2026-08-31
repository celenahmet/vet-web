import { istemci } from './istemci';
import { guvenliHata } from './guvenli-hata';

type Kova = 'pet-media' | 'avatars';
const SAGLAYICI = import.meta.env.VITE_STORAGE_PROVIDER ?? 'supabase';

function anahtarUret(sahip: string, kapsam: string, gorunurluk: 'pub' | 'prv'): string {
  const rastgele = crypto.getRandomValues(new Uint32Array(2)).join('');
  return `${gorunurluk}/photo/${sahip}/${kapsam}/${Date.now().toString(36)}-${rastgele}.webp`;
}

async function resmiYuklemedenHazirla(dosya: File): Promise<Blob> {
  const turler = new Set(['image/jpeg', 'image/png', 'image/webp']);
  if (!turler.has(dosya.type)) throw new Error('Yalnız JPEG, PNG veya WebP görsel seçin.');
  if (dosya.size > 12 * 1024 * 1024) throw new Error('Kaynak görsel en fazla 12 MB olabilir.');

  const adres = URL.createObjectURL(dosya);
  try {
    const resim = new Image();
    resim.decoding = 'async';
    resim.src = adres;
    await resim.decode();
    const oran = Math.min(1, 2400 / Math.max(resim.naturalWidth, resim.naturalHeight));
    let genislik = Math.max(1, Math.round(resim.naturalWidth * oran));
    let yukseklik = Math.max(1, Math.round(resim.naturalHeight * oran));

    for (let deneme = 0; deneme < 5; deneme += 1) {
      const tuval = document.createElement('canvas');
      tuval.width = genislik; tuval.height = yukseklik;
      const cizim = tuval.getContext('2d');
      if (!cizim) throw new Error('Görsel işleme bu tarayıcıda kullanılamıyor.');
      cizim.drawImage(resim, 0, 0, genislik, yukseklik);
      const kalite = Math.max(.62, .86 - deneme * .06);
      const blob = await new Promise<Blob | null>((coz) => tuval.toBlob(coz, 'image/webp', kalite));
      if (!blob) throw new Error('Görsel WebP biçimine dönüştürülemedi.');
      if (blob.size <= 5 * 1024 * 1024) return blob;
      genislik = Math.max(1, Math.round(genislik * .82));
      yukseklik = Math.max(1, Math.round(yukseklik * .82));
    }
    throw new Error('Görsel 5 MB sınırına indirilemedi. Daha küçük bir dosya seçin.');
  } finally {
    URL.revokeObjectURL(adres);
  }
}

export async function guvenliGorselYukle(dosya: File, kapsam: string, gorunurluk: 'pub' | 'prv' = 'pub', kova: Kova = 'pet-media'): Promise<string> {
  const { data: kullanici } = await istemci.auth.getUser();
  if (!kullanici.user) throw new Error('Görsel yüklemek için yeniden giriş yapın.');
  const blob = await resmiYuklemedenHazirla(dosya);
  const key = anahtarUret(kullanici.user.id, kapsam, gorunurluk);

  if (SAGLAYICI === 'r2') {
    const { data, error } = await istemci.functions.invoke<{ url: string }>('storage-sign', {
      body: { action: 'upload', bucket: kova, key, contentType: 'image/webp' },
    });
    if (error || !data?.url) throw guvenliHata(error ?? new Error('İmzalı adres alınamadı.'), 'storage-sign.upload');
    const cevap = await fetch(data.url, { method: 'PUT', headers: { 'Content-Type': 'image/webp' }, body: blob });
    if (!cevap.ok) throw new Error('Görsel yüklenemedi. Bağlantınızı kontrol edip yeniden deneyin.');
    return key;
  }

  const { data: imza, error: imzaHatasi } = await istemci.storage.from(kova).createSignedUploadUrl(key);
  if (imzaHatasi) throw guvenliHata(imzaHatasi, 'storage.createSignedUploadUrl');
  const { error: yuklemeHatasi } = await istemci.storage.from(kova).uploadToSignedUrl(key, imza.token, blob, { contentType: 'image/webp' });
  if (yuklemeHatasi) throw guvenliHata(yuklemeHatasi, 'storage.uploadToSignedUrl');
  return key;
}

export async function imzaliGorselAdresi(key: string, kova: Kova = 'pet-media'): Promise<string> {
  if (SAGLAYICI === 'r2') {
    const { data, error } = await istemci.functions.invoke<{ url: string }>('storage-sign', {
      body: { action: 'read', bucket: kova, key, expiresInSeconds: 300 },
    });
    if (error || !data?.url) throw guvenliHata(error ?? new Error('Görsel açılamadı.'), 'storage-sign.read');
    return data.url;
  }
  const { data, error } = await istemci.storage.from(kova).createSignedUrl(key, 300);
  if (error) throw guvenliHata(error, 'storage.createSignedUrl');
  return data.signedUrl;
}

/** Veritabanı işlemi başarısız olursa sahipsiz nesne bırakmamak için kullanılır. */
export async function guvenliGorselSil(key: string, kova: Kova = 'pet-media'): Promise<void> {
  if (SAGLAYICI === 'r2') {
    const { data, error } = await istemci.functions.invoke<{ url: string }>('storage-sign', {
      body: { action: 'delete', bucket: kova, key },
    });
    if (error || !data?.url) throw guvenliHata(error ?? new Error('Silme adresi alınamadı.'), 'storage-sign.delete');
    const cevap = await fetch(data.url, { method: 'DELETE' });
    if (!cevap.ok && cevap.status !== 404) throw new Error('Yüklenemeyen görsel temizlenemedi.');
    return;
  }
  const { error } = await istemci.storage.from(kova).remove([key]);
  if (error) throw guvenliHata(error, 'storage.remove');
}

export async function guvenliGorselleriTemizle(keys: string[], kova: Kova = 'pet-media'): Promise<void> {
  await Promise.allSettled(keys.map((key) => guvenliGorselSil(key, kova)));
}

/** Çoklu seçimde ara yükleme bozulursa daha önce yüklenenleri geri toplar. */
export async function guvenliGorselleriYukle(
  dosyalar: File[],
  kapsam: string,
  gorunurluk: 'pub' | 'prv' = 'pub',
  kova: Kova = 'pet-media',
): Promise<string[]> {
  const keys: string[] = [];
  try {
    for (const dosya of dosyalar) keys.push(await guvenliGorselYukle(dosya, kapsam, gorunurluk, kova));
    return keys;
  } catch (error) {
    await guvenliGorselleriTemizle(keys, kova);
    throw error;
  }
}

export type KlinikFotografi = { id: string; storage_key: string; caption: string | null; sort_order: number };

export async function klinikFotograflariniOku(klinik: string): Promise<KlinikFotografi[]> {
  const { data, error } = await istemci.from('clinic_photos').select('id, storage_key, caption, sort_order').eq('clinic_id', klinik).order('sort_order').order('created_at');
  if (error) throw guvenliHata(error, 'clinic_photos.select');
  return (data as KlinikFotografi[] | null) ?? [];
}

export async function klinikFotografiEkle(klinik: string, key: string, aciklama?: string): Promise<void> {
  const { error } = await istemci.rpc('add_clinic_photo', { p_clinic: klinik, p_key: key, p_caption: aciklama?.trim() || null });
  if (error) throw guvenliHata(error, 'add_clinic_photo');
}

export async function klinikGorseliniGuncelle(klinik: string, hedef: 'logo' | 'cover', key: string): Promise<void> {
  const { error } = await istemci.rpc('update_clinic_images', {
    p_clinic: klinik,
    p_logo: hedef === 'logo' ? key : null,
    p_cover: hedef === 'cover' ? key : null,
  });
  if (error) throw guvenliHata(error, 'update_clinic_images');
}
