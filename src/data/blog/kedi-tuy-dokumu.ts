import type { BlogYazi } from './types';

export const kediTuyDokumu: BlogYazi = {
  slug: 'kedi-tuy-dokumu',
  baslik: 'Kedi Tüy Dökümü: Ne Zaman Normal, Nasıl Azaltılır?',
  ozet: 'Kedilerde tüy dökümü mevsim geçişlerinde artar ve çoğu zaman normaldir. Normal dökülme ile tüy kaybı nasıl ayrılır, dökülme nasıl azaltılır?',
  kapakAlt:
    'Kedi tüy dökümü konulu yazının kapak görseli; sıcak ev ışığında taranan uzun tüylü bir kedi ve fırçada biriken tüyler',
  kategori: 'Kedi',
  tarih: '2026-10-21',
  bloklar: [
    { kind: 'paragraf', metin: '**Kedilerde tüy dökümü çoğu zaman normal** ve mevsim geçişlerinde artıyor. Normal olmayan, tüyün yerine yenisi gelmeden **açıklık, kel bölge ya da deri yarası** oluşması. Tüy dökümünü azaltmanın en etkili yolu düzenli tarama; Cornell Üniversitesi Kedi Sağlığı Merkezi kedi sahiplerine tüyü **her gün** fırçalayıp taramayı alışkanlık haline getirmelerini öneriyor.' },
    { kind: 'paragraf', metin: 'Aşağıda dökülmenin ne zaman normal sayıldığını, hangi belirtilerin bir soruna işaret ettiğini ve evde neler yapılabileceğini anlatıyoruz.' },

    { kind: 'baslik', metin: 'Kedilerde tüy dökümü ne zaman normal?' },
    { kind: 'paragraf', metin: 'Kediler gününün **yüzde 30 ile 50\'sini** kendini temizleyerek geçiriyor ve bu sırada dökülen tüyün önemli bir kısmını yutuyor. Cornell, kedilerin tüylerini normalde döktüğü mevsimlerde tüy yumağının da daha sık görüldüğünü belirtiyor; yani bu dönemlerde evde daha çok tüy görmek beklenen bir durum.' },
    { kind: 'paragraf', metin: 'Uzun tüylü ırklarda, örneğin İran kedisi ve Maine Coon\'da, tüy yumağı riski daha yüksek. Bu kedilerde düzenli tarama hem evdeki tüyü hem de yutulan tüyü azaltıyor.' },
    { kind: 'yanilgi', baslik: '"Çok tüy döküyorsa hasta demektir"', metin: 'Bol dökülme tek başına hastalık belirtisi değil; özellikle mevsim geçişlerinde normal. Asıl dikkat edilmesi gereken, derinin görünür hale gelmesi, kel bölgeler, kabuklanma ya da kedinin bir bölgeyi sürekli yalaması.' },

    { kind: 'baslik', metin: 'Tüy kaybı ne zaman bir sorunun belirtisi?' },
    { kind: 'paragraf', metin: 'Cornell\'e göre yalama ve temizlenme, sıklığı ya da süresi aşırıya kaçtığında ve **çok sayıda tüy yumağına ya da tüy kaybına** yol açtığında normal değil. Tüy kaybının yeri ipucu verebiliyor:' },
    { kind: 'tablo', basliklar: ['Nerede', 'Akla gelebilecek neden'], satirlar: [
      ['Kuyruk dibinde sürekli yalama', 'Pire'],
      ['Sırt, karın ya da vücudun çeşitli yerleri', 'Polen ya da besin alerjisi'],
      ['Tek bir noktaya odaklanmış yalama', 'O bölgede ağrı'],
      ['Belirgin bir tıbbi neden yoksa', 'Stres'],
    ]},
    { kind: 'paragraf', metin: 'Tablo yalnız yönlendirme amaçlı; nedeni hekim muayeneyle belirler. Yalama deriyi aşındırdığında enfeksiyon başlayabiliyor ve bu da yalamayı artırabiliyor; bu yüzden kel bölge ya da yara görüldüğünde beklememek gerekiyor. Pirenin evde nasıl anlaşılacağını [[kedilerde-pire-nasil-anlasilir|kedilerde pire nasıl anlaşılır]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Stres tüy kaybına yol açar mı?' },
    { kind: 'paragraf', metin: 'Evet. Cornell; taşınma, eve yeni bir hayvanın gelmesi ya da bir hayvanın kaybı, hatta günlük düzenin değişmesinin kedide kaygıya yol açabildiğini ve yalamanın kediyi sakinleştiren bir davranışa dönüşebildiğini belirtiyor. Tıbbi nedenler dışlandıktan sonra önerilenler:' },
    { kind: 'liste', maddeler: [
      'Değişiklikleri ve yeni tanışmaları **yavaş yavaş** yapmak.',
      'Kedinin çekilebileceği **yüksek ve güvenli** yerler sağlamak.',
      'Her gün **10-15 dakika** kediyle oyun oynamak.',
      'Ciddi stres varsa hekimle geçici ilaç seçeneğini konuşmak.',
    ]},
    { kind: 'paragraf', metin: 'Neden ortadan kalksa bile yalama alışkanlığının geçmesi zaman alabiliyor; sabırlı olmak gerekiyor.' },

    { kind: 'baslik', metin: 'Kedi tüy dökümü nasıl azaltılır?' },
    { kind: 'liste', maddeler: [
      '**Her gün tarama:** Dökülecek tüyü kedi yutmadan önce fırça topluyor. Uzun tüylü kedilerde tarama keçeleşmeyi de önlüyor.',
      '**Düzenli pire koruması:** Pire, tüy kaybının en sık nedenlerinden. Koruma programını [[kedilerde-ic-ve-dis-parazit|kedilerde iç ve dış parazit]] yazımızda anlattık.',
      '**Stresi azaltmak:** Yukarıdaki önerilerle.',
      '**Tüy yumağını izlemek:** Malt gibi ürünlerin ne işe yaradığını [[kedilerde-malt-ne-ise-yarar|kedilerde malt ne işe yarar]] yazımızda anlattık.',
    ]},
    { kind: 'uyari', metin: 'Kediniz halsizse, bir iki günden uzun süre yemek yemiyorsa ya da tekrar tekrar sonuçsuz öğürüyor veya kusuyorsa tüy yumağı bir tıkanıklığa yol açmış olabilir; vakit kaybetmeden veteriner hekime ulaşılması gereken bir tablodur.' },
  ],
  kontrolListesi: [
    'Tüy her gün taranıyor mu?',
    'Pire koruması güncel mi?',
    'Kel ya da yaralı bölge var mı?',
    'Bir nokta sürekli yalanıyor mu?',
    'Günde 10-15 dakika oyun var mı?',
  ],
  sss: [
    { soru: 'Kedilerde tüy dökümü normal mi?', cevap: 'Evet, çoğu zaman normal ve mevsim geçişlerinde artıyor.' },
    { soru: 'Kedi tüy dökümü nasıl azaltılır?', cevap: 'Her gün tarayarak, düzenli pire koruması uygulayarak ve stresi azaltarak.' },
    { soru: 'Kedimin tüyü neden öbek öbek dökülüyor?', cevap: 'Kel bölge normal dökülme değil; pire, alerji, ağrı ya da stres olabilir; veteriner hekim muayenesi gerekiyor.' },
    { soru: 'Kediler ne kadar süre kendini temizler?', cevap: 'Cornell\'e göre günün yüzde 30 ile 50\'si.' },
    { soru: 'Uzun tüylü kedileri ne sıklıkla taramalıyım?', cevap: 'Cornell her gün fırçalayıp taramayı öneriyor.' },
    { soru: 'Stres kedide tüy dökülmesine yol açar mı?', cevap: 'Evet; aşırı yalama yoluyla tüy kaybına yol açabiliyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'The Danger of Hairballs',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/danger-hairballs',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Cats that Lick Too Much',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/cats-lick-too-much',
    },
  ],
};
