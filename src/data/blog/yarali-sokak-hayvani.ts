import type { BlogYazi } from './types';

export const yaraliSokakHayvani: BlogYazi = {
  slug: 'yarali-sokak-hayvani',
  baslik: 'Yaralı Sokak Hayvanı İçin Kim Aranır?',
  ozet: 'Yaralı sokak kedisi ya da köpeği görünce hangi kurum aranır, yaban hayvanında kime ulaşılır, çarpan sürücünün yükümlülüğü ne? Kanun ve belediye uygulamaları.',
  kapakAlt:
    'Havluya sarılı yavru kediyi tutan eldivenli veteriner, yanında taşıma kafesi',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Yaralı bir sokak kedisi ya da köpeği için aranacak yer, hayvanın bulunduğu yerin belediyesidir.** 5199 sayılı Hayvanları Koruma Kanunu, sahipsiz hayvanların en hızlı şekilde yerel yönetimlerce kurulan ya da izin verilen hayvan bakımevlerine götürülmesini zorunlu tutuyor. İstanbul Büyükşehir Belediyesi bu ihbarı Alo 153 Çözüm Merkezi\'nden alıyor; hat ve işleyiş belediyeden belediyeye değişebildiği için bulunduğunuz belediyenin kendi sayfasına bakmak gerekiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda kimin ne zaman aranacağını, telefonda neyin söyleneceğini, ekip gelene kadar nelere dikkat edileceğini ve hayvana araç çarptığında sürücünün yükümlülüğünü kanun maddeleriyle birlikte topladık. Yaban hayvanları ve şiddet olayları için yol farklı, onları da ayrı başlıklarda anlattık.' },

    { kind: 'tablo', basliklar: ['Durum', 'Kime ulaşılır?'], satirlar: [
      ['Yaralı sokak kedisi ya da köpeği', 'Bulunduğu yerin belediyesi (İstanbul\'da Alo 153)'],
      ['Hayvana araç çarptı', 'Sürücü hayvanı veteriner hekime götürmek ya da götürülmesini sağlamakla yükümlü'],
      ['Yaralı kuş, kirpi, tilki gibi yaban hayvanı', 'Tarım ve Orman Bakanlığı, Doğa Koruma ve Milli Parklar birimleri'],
      ['Hayvana şiddet uygulandı', 'İl ya da ilçe tarım ve orman müdürlüğü; suçüstünde kolluk'],
      ['Hayvanın sahibi olabilir', 'Belediye; bakımevinde mikroçip kontrolü yapılıyor'],
    ]},

    { kind: 'baslik', metin: 'Yaralı sokak hayvanından kim sorumlu?' },
    { kind: 'paragraf', metin: 'Kanunun 6. maddesi açık: sahipsiz ya da güçten düşmüş hayvanların en hızlı şekilde yerel yönetimlerce kurulan veya izin verilen hayvan bakımevlerine götürülmesi zorunlu. Kanunun ek 1. maddesi büyükşehir belediyelerine, il belediyelerine ve nüfusu yirmi beş bini aşan belediyelere hayvan bakımevi kurma görevi veriyor. Bakımevi kurma zorunluluğu olmayan belediyeler ve il özel idareleri de sorumluluk alanlarındaki hayvanları en yakın bakımevine götürüyor.' },
    { kind: 'paragraf', metin: 'Kanun bakımevinde yapılacak işi de tanımlıyor. Rehabilitasyon; sahipsiz hayvanların tedavisini, parazit mücadelesini, aşılanmasını, kısırlaştırılmasını ve dijital kimlikle işaretlenmesini kapsıyor. Yani yaralı bir sokak hayvanının tedavisi kanunda belediyenin bakımevi zincirine bağlanmış durumda.' },
    { kind: 'paragraf', metin: 'Aralık 2024\'te yayımlanan Hayvanların Korunması Hakkında Uygulama Yönetmeliği\'nin 15. maddesi işin sahadaki kısmını düzenliyor: yerel yönetimler ihtiyacı karşılayacak bir toplama ekibi kuruyor, ekip ehil kişilerden oluşuyor ve sorumlu veteriner hekimce dönemsel olarak eğitiliyor. Hayvanlar eziyet edilmeden toplanıyor ve nakil sırasında zarar görmemeleri için önlem alınıyor. Belediyeler bu işi gönüllü kuruluşlarla iş birliği yaparak da yürütebiliyor.' },
    { kind: 'yanilgi', baslik: '"Sokak hayvanı kimsenin sorumluluğunda değil"', metin: 'Kanun bu sorumluluğu açıkça yerel yönetimlere veriyor. Ek 1. madde, bakımevi için ayrılması gereken kaynağı ayırmayan ya da bu kaynağı hayvanları toplamak, rehabilite etmek ve bakmak dışında harcayan belediye başkanı ve yetkilileri için altı aydan iki yıla kadar hapis cezası öngörüyor.' },

    { kind: 'baslik', metin: 'Belediyeyi ararken neler söylenmeli?' },
    { kind: 'paragraf', metin: 'İstanbul Büyükşehir Belediyesi Veteriner Hizmetleri Şube Müdürlüğü, araç çarpıp kaçtığı için yaralı yatan bir sokak köpeği sorusuna şöyle cevap veriyor: Alo 153 Çözüm Merkezi aranıp olay yerinin adresi ve hayvanın yanında bulunan kişinin iletişim bilgileri verildiğinde, yaralı ve tedaviye muhtaç sokak hayvanları 7 gün 24 saat nöbetçi ekiple alınıyor ve tedavileri yapılıyor.' },
    { kind: 'paragraf', metin: 'Bu cevap, ekibin neye ihtiyaç duyduğunu da gösteriyor. Hayvanı hızla bulabilmek için telefonda şu bilgilerin hazır olması işi kolaylaştırıyor:' },
    { kind: 'liste', maddeler: [
      '**Açık adres:** Sokak, bina numarası ya da tarif edilebilecek bir işaret',
      '**Hayvanın türü ve görünüşü:** Kedi mi köpek mi, rengi, yaklaşık büyüklüğü',
      '**Hayvanın durumu:** Hareket edebiliyor mu, kendi başına yer değiştirdi mi',
      '**İletişim bilgisi:** Ekip yaklaşırken ulaşabileceği bir telefon numarası',
    ]},
    { kind: 'paragraf', metin: 'Yaşadığınız ilçe bir büyükşehirin içindeyse ilçe belediyesinin de veteriner işleri birimi olabilir. Hangi hattın arandığını belediyenin kendi sitesinden öğrenmek, yanlış kapıda zaman kaybetmeyi önlüyor.' },

    { kind: 'baslik', metin: 'Ekip gelene kadar nelere dikkat edilmeli?' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı\'nın küçük hayvanlarda ilk yardım ve nakil bölümü ilk önceliği net koyuyor: önce müdahale eden kişinin güvenliği. Acı çeken bir hayvan korkuyla ısırabilir ya da tırmalayabilir. El kitabı, hayvanın başının üzerine hafif bir örtü koymanın korku ve saldırganlık tepkilerine yol açabilecek dış uyaranları azalttığını belirtiyor.' },
    { kind: 'liste', maddeler: [
      '**Örtü:** Başının üzerine hafif bir kumaş örtmek dış uyaranı azaltıyor',
      '**Kediler:** El kitabı, nakil stresini azaltmak için kedilerin karanlık bir kutuya alınabileceğini söylüyor',
      '**Omurga:** Baş, boyun ya da sırtta yaralanma şüphesi varsa hareketin en aza indirilmesi, gerekirse tahta, karton ya da kalın kumaş gibi düz ve sert bir yüzeyle taşınması gerekiyor',
      '**Batan cisim:** Vücuda batmış bir cisim nakil sırasında yerinde bırakılıyor; çekip çıkarmaya çalışılmıyor',
    ]},
    { kind: 'uyari', metin: 'Yaralı bir hayvana ilaç vermek, yarasına bir şey sürmek ya da evde tedavi etmeye çalışmak hayvana zarar verebilir. Ekibi ya da bir veteriner hekimi beklerken yapılacak iş, hayvanı daha fazla tehlikeden uzak tutmak ve kendini korumaktır. Tedaviye veteriner hekim karar verir.' },

    { kind: 'baslik', metin: 'Isırılır ya da tırmalanırsanız ne yapılmalı?' },
    { kind: 'paragraf', metin: 'Sokak hayvanının aşı durumu çoğu zaman bilinmiyor. Bu yüzden yardım ederken ısırılan ya da tırmalanan kişinin durumu hafife almadan, vakit kaybetmeden bir sağlık kuruluşuna başvurması gerekiyor. Isırık ve tırmalamadan sonra kuduz açısından izlenen yolu [[kedi-tirmalamasi-kuduz-yapar-mi|kedi tırmalaması kuduz yapar mı]] yazımızda ayrıntılı anlattık.' },

    { kind: 'baslik', metin: 'Hayvana araç çarparsa sürücünün yükümlülüğü' },
    { kind: 'paragraf', metin: 'Kanunun "Trafik kazaları" başlıklı 21. maddesi tek cümle: bir hayvana çarpan ve ona zarar veren sürücü, onu en yakın veteriner hekime ya da tedavi ünitesine götürmek veya götürülmesini sağlamak zorunda. Yani kanun, hayvanı yolda bırakıp gitmeyi değil, hayvanın hekime ulaşmasını sürücüden bekliyor.' },
    { kind: 'paragraf', metin: 'Kanunun 28. maddesi 21. maddeye aykırı davrananlar için hayvan başına idari para cezası öngörüyor. Bu cezanın 2026 tutarını resmî bir kaynaktan doğrulayamadığımız için burada vermiyoruz; güncel tutar için il ya da ilçe tarım ve orman müdürlüğüne danışılabilir.' },
    { kind: 'paragraf', metin: 'Trafik kazası kediler için de sık rastlanan bir durum. Royal Veterinary College\'dan Conroy ve arkadaşlarının İngiltere\'de mesai dışı acil kliniklere getirilen 33.053 kedinin kayıtlarını inceleyen çalışmasında, trafik kazası görülme oranı yüzde 4,2 bulundu. 6 ay ile 2 yaş arası kediler, erkek kediler ve melez kediler daha yüksek risk taşıyordu; kazalar en çok sonbaharda görülüyordu.' },

    { kind: 'baslik', metin: 'Yaralı yaban hayvanı için kime ulaşılır?' },
    { kind: 'paragraf', metin: 'Kuş, kirpi, tilki ya da sincap gibi yaban hayvanları sokak kedisi ve köpeğiyle aynı yoldan gitmiyor. Tarım ve Orman Bakanlığı\'na bağlı Doğa Koruma ve Milli Parklar Genel Müdürlüğü (DKMP), yaralı ve bakıma muhtaç yaban hayvanlarını ülke genelinde 11 Yaban Hayvanı Kurtarma ve Rehabilitasyon Merkezi\'nde tedavi ediyor. Genel Müdürlüğün Temmuz 2026 açıklamasına göre 2026\'nın ilk altı ayında tedavisi tamamlanan 2 bin 205 yaban hayvanı doğaya geri bırakıldı.' },
    { kind: 'paragraf', metin: 'Böyle bir durumda Bakanlığın il ya da ilçe müdürlüğüne ulaşmak ya da Bakanlığın 180 Tarım İletişim Merkezi\'nden yönlendirme istemek bir yol. 5199 sayılı kanunun ilkelerinden biri, yabani hayvanların yaşama ortamlarından koparılmaması ve doğada serbestçe yaşayan bir hayvanın yakalanıp özgürlükten yoksun bırakılmaması. Yaralı yaban hayvanını eve götürüp beslemeye çalışmak yerine yetkili birimle görüşmek bu yüzden önem taşıyor.' },

    { kind: 'baslik', metin: 'Hayvan sahipli çıkarsa ne olur?' },
    { kind: 'paragraf', metin: 'Sokakta yaralı bulunan her hayvan sahipsiz olmayabilir. Yönetmeliğin 16. maddesine göre hayvan bakımevine getirilen hayvanların mikroçip kontrolü yapılıyor ve sahipli olduğu tespit edilenler yirmi dört saat içinde il ya da ilçe tarım ve orman müdürlüğüne bildiriliyor. Sahipsiz hayvanlar Bakanlığın veri tabanına kaydediliyor ve ön sağlık muayenesinden geçiriliyor.' },
    { kind: 'paragraf', metin: 'Mikroçipin neden önemli olduğunu ve nasıl okunduğunu [[mikrocip-nedir|mikroçip nedir]] yazımızda anlattık. Kendi hayvanınızın kaybolma ihtimaline karşı çip kaydının güncel olması, belediyeye ulaşan bir hayvanın size geri dönmesini kolaylaştırıyor.' },

    { kind: 'baslik', metin: 'Hayvana şiddet uygulandıysa kime bildirilir?' },
    { kind: 'paragraf', metin: 'Yaralanma bir kaza değil de şiddet sonucuysa iş idari bir ihbardan çıkıp suç alanına giriyor. Kanunun 28/A maddesine göre bu maddedeki suçlarda soruşturma yapılması, Tarım ve Orman Bakanlığı\'nın il ya da ilçe müdürlüklerinin Cumhuriyet başsavcılığına yazılı başvurusuna bağlı. Suçüstü hâlinde ise soruşturma genel hükümlere göre yürütülüyor; yani olay o anda yaşanıyorsa kolluğa haber verilebiliyor.' },
    { kind: 'paragraf', metin: 'Kanunun genel çerçevesini, sahiplerin yükümlülüklerini ve denetimin kimde olduğunu [[5199-sayili-kanun|5199 sayılı kanun]] yazımızda ayrıntılı topladık. Şiddete tanık olunduğunda kendini tehlikeye atmadan yeri, saati ve varsa tanıkları not etmek bildirimi güçlendiriyor.' },
  ],
  sss: [
    { soru: 'Yaralı sokak kedisi için hangi numara aranır?', cevap: 'Hayvanın bulunduğu yerin belediyesi aranır. İstanbul Büyükşehir Belediyesi yaralı hayvan ihbarını Alo 153 Çözüm Merkezi\'nden alıyor ve 7 gün 24 saat nöbetçi ekiple hayvanı alıyor. Hat ve işleyiş belediyeye göre değişebildiği için belediyenin kendi sayfasına bakmak gerekiyor.' },
    { soru: 'Belediye yaralı sokak hayvanını almak zorunda mı?', cevap: 'Evet, kanun bunu belediyelere görev olarak veriyor. 5199 sayılı kanunun 6. maddesi sahipsiz hayvanların en hızlı şekilde yerel yönetimlerin kurduğu ya da izin verdiği bakımevlerine götürülmesini zorunlu tutuyor. Bakımevi kurmak zorunda olmayan belediyeler de hayvanı en yakın bakımevine götürüyor.' },
    { soru: 'Hayvana çarpan sürücü ne yapmak zorunda?', cevap: 'Hayvanı en yakın veteriner hekime ya da tedavi ünitesine götürmek veya götürülmesini sağlamak zorunda. Bu yükümlülük 5199 sayılı kanunun 21. maddesinde yazıyor ve 28. madde buna aykırı davranan için hayvan başına idari para cezası öngörüyor.' },
    { soru: 'Yaralı kuş ya da kirpi bulursam belediyeyi mi aramalıyım?', cevap: 'Yaban hayvanları için yetkili birim Doğa Koruma ve Milli Parklar Genel Müdürlüğü. Genel Müdürlük yaralı yaban hayvanlarını ülke genelindeki 11 kurtarma ve rehabilitasyon merkezinde tedavi ediyor. Tarım ve orman müdürlüğüne ya da Bakanlığın 180 Tarım İletişim Merkezi\'ne ulaşıp yönlendirme istemek bir yol.' },
    { soru: 'Yaralı hayvanı kendim kucaklayıp taşıyabilir miyim?', cevap: 'Mümkün, ama önce kendi güvenliğinizi sağlamak gerekiyor. Merck Veteriner El Kitabı acı çeken hayvanın korkuyla saldırabileceğini, başına hafif bir örtü koymanın bu tepkiyi azalttığını belirtiyor. Omurga yaralanması şüphesinde hareketin en aza indirilmesi ve düz, sert bir yüzey kullanılması gerekiyor. Mümkünse belediye ekibini beklemek daha güvenli.' },
    { soru: 'Sokak hayvanı beni ısırırsa ne yapmalıyım?', cevap: 'Vakit kaybetmeden bir sağlık kuruluşuna başvurmak gerekiyor. Sokak hayvanının aşı durumu çoğu zaman bilinmediği için ısırık ve tırmalama kuduz açısından hafife alınmıyor. Yaranın nasıl değerlendirileceğine ve aşı gerekip gerekmediğine sağlık kuruluşundaki hekim karar veriyor.' },
  ],
  kontrolListesi: [
    'Belediyenin ihbar hattı kayıtlı mı?',
    'Açık adres ve tarif hazır mı?',
    'Kendi güvenliğiniz sağlandı mı?',
    'Hayvanın başı örtülü mü?',
    'Isırık varsa hekime gidildi mi?',
    'Ekibe ulaşacak telefon verildi mi?',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu (madde 3, 4, 6, 21, 28, 28/A, ek madde 1)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği (13 Aralık 2024, sayı 32751), madde 7, 15 ve 16',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/12/20241213-3.htm',
    },
    {
      kurum: 'İstanbul Büyükşehir Belediyesi, Veteriner Hizmetleri Şube Müdürlüğü',
      baslik: 'Sokak köpeğine araba çarptı kaçtı, yaralı yatıyor. Onu alabilir misiniz?',
      adres: 'https://tarim.ibb.istanbul/veteriner-hizmetleri-mudurlugu/sikca-sorulan-sorular/64/sokak-kopegine-araba-carpti-kacti-yarali-yatiyor-onu-alabilir-misiniz.html',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı, Doğa Koruma ve Milli Parklar Genel Müdürlüğü',
      baslik: 'Yaralı Yaban Hayvanlarını Tedavi Ederek Doğayla Buluşturuyoruz (13 Temmuz 2026)',
      adres: 'https://www.tarimorman.gov.tr/DKMP/Haber/439/Yarali-Yaban-Hayvanlarini-Tedavi-Ederek-Dogayla-Bulusturuyoruz',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'First Aid and Transport of Small Animals',
      adres: 'https://www.merckvetmanual.com/emergency-medicine-and-critical-care/emergency-medicine-introduction/first-aid-and-transport-of-small-animals',
    },
    {
      kurum: 'Royal Veterinary College',
      baslik: 'Epidemiology of road traffic accidents in cats attending emergency-care practices in the UK.',
      yazarlar: 'Conroy M, O\'Neill D, Boag A, Church D, Brodbelt D',
      dergi: 'Journal of Small Animal Practice',
      yil: 2019,
      kunye: '60(3):146-152',
      doi: '10.1111/jsap.12941',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/30383291/',
    },
  ],
};
