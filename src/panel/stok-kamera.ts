export const STOK_KAMERA_KISITLARI: MediaStreamConstraints = {
  audio: false,
  video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } },
};

export async function stokKameraAkisiniIste(): Promise<MediaStream> {
  if (!navigator.mediaDevices?.getUserMedia) {
    const hata = new Error('Bu bilgisayar veya tarayıcı kamerayı desteklemiyor. USB okuyucu ya da elle giriş kullanın; seri sayım için mobil uygulamanın kamerasını öneriyoruz.');
    hata.name = 'NotSupportedError';
    throw hata;
  }
  // Bu çağrı kullanıcı butona bastığı anda yapılır. İzin isteğini barkod
  // kütüphanesine ertelemek bazı tarayıcılarda istemin hiç görünmemesine yol açar.
  return navigator.mediaDevices.getUserMedia(STOK_KAMERA_KISITLARI);
}

export function stokKameraHataMesaji(hata: unknown): string {
  const ad = hata && typeof hata === 'object' && 'name' in hata ? String(hata.name) : '';
  if (ad === 'NotAllowedError') {
    return 'Kamera izni bu site için engellenmiş. Adres çubuğundaki kamera veya kilit simgesinden Kamera ayarını “İzin ver” yapıp sayfayı yenileyin; ardından kamera iznini yeniden deneyin. USB okuyucu ve mobil seri sayım da kullanılabilir.';
  }
  if (ad === 'NotFoundError') return 'Kullanılabilir kamera bulunamadı. Kamerayı bağlayıp yeniden deneyin veya USB okuyucu kullanın.';
  if (ad === 'NotReadableError') return 'Kamera başka bir uygulama tarafından kullanılıyor. Diğer uygulamayı kapatıp yeniden deneyin.';
  if (hata instanceof Error && hata.message) return hata.message;
  return 'Kamera başlatılamadı.';
}
