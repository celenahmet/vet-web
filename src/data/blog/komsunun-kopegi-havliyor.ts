import type { BlogYazi } from './types';

export const komsununKopegiHavliyor: BlogYazi = {
  slug: 'komsunun-kopegi-havliyor',
  baslik: 'Komşunun Köpeği Sürekli Havlıyor: Nereye Şikâyet Edilir?',
  ozet: 'Sürekli havlayan köpek için önce komşuyla konuşmak, sonra yönetim; çözülmezse gürültü için kolluk ya da zabıta, apartmanda mahkeme yolu var. Hangi kanun ne diyor?',
  kapakAlt:
    'Komşunun köpeği havlıyor konulu yazının kapak görseli; apartman balkonunda ön ayaklarını korkuluğa dayayıp havlayan bir köpek',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-28',
  bloklar: [
    { kind: 'paragraf', metin: 'Komşunun sürekli havlayan köpeği için başvurulabilecek üç resmî yol var. Havlama başkalarının huzurunu bozacak ölçüdeyse **Kabahatler Kanunu\'nun 36. maddesindeki gürültü** hükmü gereği **kolluk ya da belediye zabıtası** idari para cezası verebiliyor. Aynı apartmandaysanız Kat Mülkiyeti Kanunu, kat maliklerini birbirini rahatsız etmemekle yükümlü tutuyor ve uyuşmazlıkta **mahkemeden hâkimin müdahalesi** istenebiliyor. Köpeğin bakımıyla ilgili bir sorun varsa başvuru yeri **il veya ilçe tarım ve orman müdürlüğü.**' },
    { kind: 'paragraf', metin: 'Aşağıda bu yolları sırasıyla, hangi kanun maddesine dayandıklarıyla birlikte anlatıyoruz. Çoğu durumda resmî şikâyetten önce komşuyla konuşmak, havlamanın nedenini anlamak ve sorunu kalıcı olarak çözmek için en hızlı yol. Bu yazı bilgilendirme amaçlı; somut bir uyuşmazlıkta bir hukukçudan görüş almak gerekiyor.' },

    { kind: 'tablo', basliklar: ['Durum', 'Nereye', 'Dayanak'], satirlar: [
      ['Havlama huzuru bozacak ölçüde gürültü', 'Kolluk ya da belediye zabıtası', 'Kabahatler Kanunu madde 36'],
      ['Aynı apartmanda süren rahatsızlık', 'Önce yönetim, çözülmezse mahkeme', 'Kat Mülkiyeti Kanunu madde 18 ve 33'],
      ['Köpeğin bakımı kötü, sürekli yalnız ya da bağlı', 'İl veya ilçe tarım ve orman müdürlüğü', '5199 sayılı kanun madde 5'],
    ]},

    { kind: 'baslik', metin: 'Köpek havlaması gürültü sayılır mı?' },
    { kind: 'paragraf', metin: 'Kabahatler Kanunu\'nun 36. maddesi, **başkalarının huzur ve sükûnunu bozacak şekilde gürültüye neden olan kişiye** idari para cezası öngörüyor. Madde hayvanları ayrıca saymıyor; ölçüt gürültünün kaynağı değil, başkalarının huzurunu bozup bozmadığı. Maddenin son fıkrasına göre bu kabahat için cezaya **kolluk veya belediye zabıta görevlileri** karar veriyor. Kanundaki tutar 50 TL, ancak idari para cezaları her yıl yeniden değerleme oranıyla artırılarak uygulanıyor.' },
    { kind: 'paragraf', metin: '5199 sayılı Hayvanları Koruma Kanunu da hayvan sahibini, hayvanının insanlara verebileceği **zarar ve rahatsızlıkları önlemekle** yükümlü tutuyor; 2024 tarihli uygulama yönetmeliği bu yükümlülüğü sahibin görevleri arasında yeniden sayıyor.' },

    { kind: 'baslik', metin: 'Önce komşuyla konuşmak neden işe yarar?' },
    { kind: 'paragraf', metin: 'Sürekli havlamanın çoğu zaman bir nedeni oluyor ve köpek sahibi bunun farkında olmayabiliyor; özellikle köpek, sahibi evde yokken havlıyorsa. Saatleri not edip sakin bir dille anlatmak, sahibin sorunu fark etmesini ve önlem almasını sağlayabiliyor. Sahibi evden çıkınca başlayan havlama, ulumanın ve eşyalara zarar vermenin eşlik ettiği bir tablo, ayrılık kaygısının işareti olabiliyor; bu konuyu [[kopeklerde-ayrilik-kaygisi|köpeklerde ayrılık kaygısı]] yazımızda anlattık.' },
    { kind: 'yanilgi', baslik: '"Köpek beslemek zaten yasak, şikâyet edince köpek gider"', metin: 'Apartmanda köpek beslemek kendiliğinden yasak değil; Kat Mülkiyeti Kanunu\'nda bunu yasaklayan bir madde yok. Şikâyetin konusu köpeğin varlığı değil, yarattığı rahatsızlık. Bu konuyu [[apartmanda-kedi-kopek-beslemek|apartmanda kedi köpek beslemek]] yazımızda ayrıntılı anlattık.' },

    { kind: 'baslik', metin: 'Apartmanda havlayan köpek için yönetim ne yapabilir?' },
    { kind: 'paragraf', metin: 'Kat Mülkiyeti Kanunu\'nun 18. maddesi kat maliklerini **doğruluk kurallarına uymak, özellikle birbirini rahatsız etmemekle** yükümlü tutuyor. Binanın yönetim planında hayvanlarla ilgili bir hüküm varsa o hüküm de bütün kat maliklerini bağlıyor. Yönetici ve kat malikleri kurulu konuyu gündeme alabiliyor. Sorun buna rağmen sürerse 33. madde, yükümlülüklerini yerine getirmeyen kat maliki için **mahkemeden hâkimin müdahalesini** isteme yolunu açıyor; hâkimin belirlediği sürede karara uymayana idari para cezası verilebiliyor.' },

    { kind: 'baslik', metin: 'Kolluk ya da zabıtaya nasıl şikâyet edilir?' },
    { kind: 'paragraf', metin: 'Gürültü o anda sürüyorsa kolluğa ya da belediye zabıtasına bildirim yapılabiliyor; Kabahatler Kanunu cezaya bu görevlilerin karar vereceğini söylüyor. Havlamanın hangi gün ve saatlerde, ne kadar sürdüğünü not etmek, şikâyetin değerlendirilmesini kolaylaştırıyor. Gürültünün huzuru bozup bozmadığını yerinde görevli değerlendiriyor.' },

    { kind: 'baslik', metin: 'Köpeğin bakımında sorun varsa' },
    { kind: 'paragraf', metin: 'Havlama bazen köpeğin bakımındaki bir sorunun işareti olabiliyor: aç, susuz, sürekli bağlı ya da günlerce yalnız bırakılan bir köpek gibi. 5199 sayılı kanun sahibi, hayvanı türüne uygun barındırmak ve beslemekle yükümlü tutuyor. Kanuna uyulup uyulmadığını denetleme yetkisi Tarım ve Orman Bakanlığı\'nda; bu yüzden böyle bir durumda başvuru yeri il veya ilçe tarım ve orman müdürlüğü. Kanunun tamamını [[5199-sayili-kanun|5199 sayılı kanun]] yazımızda anlattık.' },
    { kind: 'yanilgi', baslik: '"Şikâyet edilen köpek hemen elinden alınır"', metin: 'Havlama tek başına köpeğin sahibinden alınması için bir neden değil. 5199 sayılı kanun hayvanlara el konulmasını, sahibin bakımı ciddi şekilde ihmal ettiği durumlar için öngörüyor. Gürültü şikâyetinin sonucu, sahibe idari para cezası ya da apartman içinde mahkeme kararı olabiliyor.' },

    { kind: 'baslik', metin: 'Köpek sahibiyseniz: havlamayı azaltmak' },
    { kind: 'paragraf', metin: 'Köpek sahibi, köpeğinin komşulara verdiği rahatsızlığı önlemekle kanunen yükümlü. Havlamanın ne zaman başladığını gözlemlemek nedeni anlamaya yardım ediyor: yalnız kaldığında mı, kapı sesine mi, balkonda dışarıyı görünce mi? Yalnız kalmayla başlayan havlamada ayrılık kaygısı ihtimali için veteriner hekimden ya da bir davranış uzmanından destek almak gerekiyor.' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Apartmanda köpek beslemek yasak', 'Kat Mülkiyeti Kanunu yasaklamıyor; rahatsızlık vermemek gerekiyor'],
      ['Havlama için yapılacak bir şey yok', 'Gürültü için kolluk ve zabıta ceza verebiliyor'],
      ['Şikâyet edilen köpek elinden alınır', 'El koyma ciddi bakım ihmali için öngörülüyor'],
      ['Havlayan köpek sorunlu köpektir', 'Havlama çoğu zaman yalnızlık gibi bir nedene işaret ediyor'],
    ]},
    { kind: 'uyari', metin: 'Bu yazı kanun maddelerinin özetidir; somut bir uyuşmazlıkta bir hukukçudan görüş almak gerekiyor. Bir hayvana şiddet uygulandığına ya da hayvanın tehlikede olduğuna tanık olunursa durumu vakit kaybetmeden kolluğa ya da il veya ilçe tarım ve orman müdürlüğüne bildirmek gerekiyor.' },
  ],
  kontrolListesi: [
    'Komşuyla doğrudan konuşuldu mu?',
    'Havlamanın saatleri not edildi mi?',
    'Yönetim planına bakıldı mı?',
    'Yöneticiye bilgi verildi mi?',
    'Köpeğin bakımında sorun var mı?',
  ],
  sss: [
    { soru: 'Komşunun köpeği sürekli havlıyor, nereye şikâyet edilir?', cevap: 'Havlama huzuru bozacak ölçüde gürültüyse kolluğa ya da belediye zabıtasına; aynı apartmandaysanız önce yönetime, çözülmezse mahkemeye; köpeğin bakımında sorun varsa il veya ilçe tarım ve orman müdürlüğüne başvurulabiliyor.' },
    { soru: 'Köpek havlaması gürültü sayılır mı?', cevap: 'Başkalarının huzur ve sükûnunu bozacak ölçüdeyse sayılabiliyor. Kabahatler Kanunu\'nun 36. maddesi gürültüye neden olana idari para cezası öngörüyor; kararı kolluk ya da zabıta veriyor.' },
    { soru: 'Köpek havlamasının cezası var mı?', cevap: 'Kabahatler Kanunu\'nun 36. maddesine göre huzuru bozan gürültüye idari para cezası verilebiliyor. Kanundaki tutar 50 TL ve her yıl yeniden değerleme oranıyla artırılıyor.' },
    { soru: 'Apartman yönetimi havlayan köpek için ne yapabilir?', cevap: 'Kat malikleri birbirini rahatsız etmemekle yükümlü. Yönetim konuyu gündeme alabiliyor; sorun sürerse kat malikleri mahkemeden hâkimin müdahalesini isteyebiliyor.' },
    { soru: 'Şikâyet edilen köpek sahibinden alınır mı?', cevap: 'Havlama tek başına bunun nedeni değil. 5199 sayılı kanun hayvana el konulmasını, sahibin bakımı ciddi şekilde ihmal ettiği durumlar için öngörüyor.' },
    { soru: 'Köpeğim yalnız kalınca havlıyor, ne yapmalıyım?', cevap: 'Yalnız kalınca başlayan havlama ayrılık kaygısının işareti olabiliyor. Nedeni anlamak ve doğru yaklaşımı belirlemek için veteriner hekimden ya da bir davranış uzmanından destek almak gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5326 sayılı Kabahatler Kanunu (madde 17 ve 36)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5326&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '634 sayılı Kat Mülkiyeti Kanunu (madde 18, 28 ve 33)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=634&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu (madde 5 ve 24)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği (13.12.2024, sayı 32751)',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/12/20241213-3.htm',
    },
  ],
};
