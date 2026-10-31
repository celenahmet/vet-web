import type { BlogYazi } from './types';

export const evcilHayvanOlunce: BlogYazi = {
  slug: 'evcil-hayvan-olunce',
  baslik: 'Evcil Hayvan Ölünce Ne Yapılır? Gömme ve Kremasyon',
  ozet: 'Evcil hayvan ölünce atılacak adımlar: mevzuata göre gömme ve yakma, belediyenin görevi, PetVet kaydının 30 günde kapatılması ve yasla baş etme.',
  kapakAlt:
    'Pencere önünde köpek fotoğrafı, eski bir tasma ve beyaz çiçekler',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Evcil hayvanınız öldüğünde önce veteriner hekiminizle ya da belediyenizle hayvanın nasıl gömüleceğini veya yakılacağını konuşmanız, ardından kayıtlı bir kedi ya da köpekse ölümü 30 gün içinde il veya ilçe tarım ve orman müdürlüğüne bildirip pasaportu teslim etmeniz gerekiyor.** Türkiye\'deki mevzuat ölen ev hayvanını sıradan bir atık saymıyor: yakılarak imha ediliyor ya da Bakanlığın tanıdığı istisnayla gömülüyor. Belediyelerin görevleri arasında da ölen ev hayvanlarını usulüne uygun bertaraf etmek ya da kireçle gömmek yer alıyor.' },
    { kind: 'paragraf', metin: 'Bu yazıda ilk saatlerde nelerin konuşulması gerektiğini, mevzuatın gömme ve yakma hakkında ne söylediğini, PetVet kaydının nasıl kapatıldığını, klinikte ötanazi uygulandığında sorumluluğun kimde olduğunu ve hem sahibin hem evdeki diğer hayvanların yaşadığı yası araştırmaların ışığında anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Seçenek', 'Kim üstlenir?', 'Bilinmesi gereken'], satirlar: [
      ['Klinik aracılığıyla bertaraf', 'Veteriner kliniği', 'Ötanazi uygulandıysa bertaraf yükümlülüğü işlemi yapan kişide'],
      ['Belediyeye başvurmak', 'Yerel yönetim', 'Yönetmelik belediyelere ölen ev hayvanlarını bertaraf etme ya da kireçle gömme görevi veriyor'],
      ['Gömmek', 'Sahip ya da belediye', 'Ölmüş pet hayvanlarının gömülmesi istisna olarak izinli; yer için belediyeye danışmak önerilir'],
      ['Kremasyon (yakma)', 'Yetkili tesis', 'Bu tür materyalin olağan imha yolu yakmak'],
      ['Kaydı kapatmak', 'Sahip', '30 gün içinde il veya ilçe müdürlüğüne bildirim, pasaport teslimi'],
    ]},

    { kind: 'baslik', metin: 'İlk saatlerde neler konuşulmalı?' },
    { kind: 'paragraf', metin: 'Hayvan evde öldüyse ilk arama genellikle onu tanıyan veteriner hekimedir. Klinik hem ölümün doğrulanması hem de sonrasında hangi seçeneklerin bulunduğu konusunda yol gösterebilir. Kliniğe giderken hayvanın nasıl taşınacağını da önceden sormak önerilir.' },
    { kind: 'paragraf', metin: 'Ölüm ani olduysa, nedeni bilinmiyorsa ya da zehirlenme veya bulaşıcı bir hastalık şüphesi varsa, hayvanı gömmeden önce veteriner hekime danışmak gerekiyor. Ölümün nedenini tahmin etmek bu yazının konusu değil; bu değerlendirme yalnızca veteriner hekimin yapabileceği bir iş. Evde başka hayvanlar ya da çocuklar varsa onlar için de sakin bir ortam hazırlamak işi kolaylaştırır.' },
    { kind: 'uyari', metin: 'Evde başka bir hayvan aynı dönemde halsizlik, kusma ya da iştahsızlık gösteriyorsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Ortak bir neden olup olmadığını yalnızca hekim değerlendirebilir.' },

    { kind: 'baslik', metin: 'Mevzuat ölen evcil hayvan için ne diyor?' },
    { kind: 'paragraf', metin: 'Ölen hayvanlar İnsan Tüketimi Amacıyla Kullanılmayan Hayvansal Yan Ürünler Yönetmeliği\'nin kapsamına giriyor. Yönetmelik, çiftlik ve yabani hayvanlar dışındaki **pet hayvanlarını**, sirk ve hayvanat bahçesi hayvanlarıyla birlikte **kategori I materyal** sayıyor. Kategori I materyal için öngörülen ilk yol yakılarak imha.' },
    { kind: 'paragraf', metin: 'Aynı yönetmeliğin 14. maddesi bu kurala istisna getiriyor: Bakanlık, genel imha hükümlerine istisna olarak **ölmüş pet hayvanlarının gömülerek imhasına izin veriyor**. Yani evcil hayvanın gömülmesi mevzuatta tanınmış bir seçenek.' },
    { kind: 'paragraf', metin: '2024 tarihli Hayvanların Korunması Hakkında Uygulama Yönetmeliği ise belediyelere açık bir görev veriyor. Yönetmeliğin 7. maddesine göre yerel yönetimler, ev hayvanları ile hayvan bakımevlerinde ölen hayvanları 2872 sayılı Çevre Kanunu ve ilgili mevzuat çerçevesinde bertaraf etmek ya da usulüne uygun olarak kireç ile gömmekle yükümlü. Bu nedenle nereye başvuracağını bilemeyen sahip için belediye doğal bir adres.' },
    { kind: 'yanilgi', baslik: '"Ölen evcil hayvanı çöpe bırakmak sorun değil"', metin: 'Mevzuat ölen pet hayvanını kategori I hayvansal yan ürün sayıyor ve imha yolunu ayrıca tarif ediyor: yakma ya da istisna olarak gömme. Bu yollar arasında çöp konteyneri yok. Belediyenin bu konuda görevli olması da bunun kişinin kendi başına çözmek zorunda kaldığı bir mesele olmadığını gösteriyor.' },

    { kind: 'baslik', metin: 'Gömmek: nereye ve nasıl?' },
    { kind: 'paragraf', metin: 'Yönetmelik gömmeye izin veriyor ama bunun nerede ve hangi koşulda yapılacağını sahipler için ayrıntılı tarif etmiyor. Uygulama bir belediyeden diğerine değişebiliyor; bu yüzden gömmeye karar vermeden önce belediyenin veteriner işleri birimine, hayvan mezarlığı ya da gömme hizmeti olup olmadığını sormak önerilir.' },
    { kind: 'paragraf', metin: 'Mevzuatın "usulüne uygun" gömmeden ne anladığına dair bir ipucu, bakımevleriyle ilgili maddede bulunuyor: bakımevinde ölen sahipsiz hayvanlar diğerlerinden ayrılıyor, yerel yönetimce belirlenmiş yerde açılmış derin çukurlara kireç ile gömülüyor ve üzeri toprakla kapatılıyor. Yani yer seçimi kişisel bir karardan çok yerel yönetimin belirlediği bir konu olarak görülüyor.' },
    { kind: 'paragraf', metin: 'Apartman ya da site bahçesi çoğu zaman ortak alan olduğu için yönetimle konuşmadan bu alana gömmek komşuluk sorunlarına yol açabilir. Ortak alan kullanımına dair kuralları [[apartmanda-kedi-kopek-beslemek|apartmanda kedi ve köpek beslemek]] yazısında anlattık.' },

    { kind: 'baslik', metin: 'Kremasyon (yakma) nasıl işliyor?' },
    { kind: 'paragraf', metin: 'Yakma, mevzuatın kategori I materyal için öngördüğü olağan imha yolu. Pek çok sahip için kremasyonun anlamı ise farklı: hayvanın küllerini saklayabilmek ya da gömme için uygun bir yer bulamadığında saygın bir seçenek.' },
    { kind: 'paragraf', metin: 'Bu hizmet için veteriner kliniğine ve belediyeye danışmak önerilir. Hizmeti verecek işletmeye birkaç soru sormak gerekiyor:' },
    { kind: 'liste', maddeler: [
      'Tesisin bu iş için izni ya da onayı var mı?',
      'Hayvan tek başına mı, başka hayvanlarla birlikte mi yakılıyor?',
      'Küller sahibine geri veriliyor mu, nasıl teslim ediliyor?',
      'Hayvanın klinikten ya da evden alınması hizmete dahil mi?',
    ]},

    { kind: 'baslik', metin: 'PetVet kaydı ve pasaport: 30 gün içinde bildirim' },
    { kind: 'paragraf', metin: 'Kimliklendirilmiş kedi ve köpekler Bakanlığın veri sisteminde kayıtlı. Tarım ve Orman Bakanlığı Eskişehir İl Müdürlüğü\'nün kamuoyu bilgilendirmesine göre sahipli ev hayvanlarının ölümü hâlinde **30 gün içinde il veya ilçe tarım ve orman müdürlüklerine bildirilmesi** ve hayvanın pasaportu teslim edilerek sistemden düşülmesi gerekiyor.' },
    { kind: 'paragraf', metin: 'Bu adım ihmal edilirse hayvan sistemde sahipli ve hayatta görünmeye devam eder. Kaydın nasıl tutulduğunu [[petvet-kayit|PetVet kaydı]], belgenin kendisini [[evcil-hayvan-pasaportu|evcil hayvan pasaportu]] ve kimliklendirmenin temelini [[mikrocip-nedir|mikroçip nedir]] yazılarında bulabilirsiniz.' },

    { kind: 'baslik', metin: 'Klinikte ötanazi uygulandığında sorumluluk kimde?' },
    { kind: 'paragraf', metin: 'Ötanazi bir hekimlik kararıdır ve ancak veteriner hekimle konuşularak verilir; hangi durumda gündeme geldiğini bu yazıda tartışmıyoruz. Uygulama Yönetmeliği\'ne göre ötanazi veteriner hekim tarafından uygun görülen bir yöntemle yapılıyor ve etkisi kontrol edilemeyen zehirli madde kullanımı gibi yöntemler açıkça yasak.' },
    { kind: 'paragraf', metin: 'Sonrası için de yönetmelik net: ötanazi işleminden sorumlu kişi, hayvanın kesin olarak öldüğünden emin olduktan sonra ölüsünü usulüne uygun olarak bertaraf etmekle yükümlü. Ölen ya da ötanazi uygulanan hayvanlar 5996 sayılı Kanun veya 2872 sayılı Kanun çerçevesinde bertaraf ediliyor. Sahibin gömme ya da yakma tercihi varsa bunu önceden klinikle konuşması önerilir.' },

    { kind: 'baslik', metin: 'Yas tutmak normal mi?' },
    { kind: 'paragraf', metin: 'Evet, ve araştırmalar bunu ciddiye almak gerektiğini gösteriyor. İzmir Ekonomi Üniversitesi Psikoloji Bölümü\'nden araştırmacıların Türkiye\'de yaptığı çalışmaya son bir yıl içinde evcil hayvanını kaybetmiş 210 yetişkin katıldı. Hayvana bağlılık, yasın şiddetini en güçlü yordayan etken çıktı. Duygularını bastırmak zorunda kaldığını hisseden katılımcılar daha fazla sıkıntı yaşadı.' },
    { kind: 'paragraf', metin: 'Araştırmacılar evcil hayvan kaybının çoğu zaman toplumca tanınmayan ve desteklenmeyen bir yas olarak görüldüğünü vurguluyor. Yani "sadece bir hayvandı" sözü, yası hafifletmiyor; tersine kişinin yükünü artırabiliyor.' },
    { kind: 'paragraf', metin: 'Colorado State Üniversitesi Veteriner Fakültesi\'nden Lori Kogan ve ekibinin 4.902 sahiple yaptığı çalışmada beklenmedik ölüm, doğal ya da beklenen ölüme göre daha şiddetli yas ve depresyonla ilişkili bulundu. Hayvanı "en iyi arkadaş" yerine "partner" ya da "ruh eşi" olarak tanımlayanlarda da sonuçlar daha ağırdı. Ölüm anında hayvanın yanında bulunmak ise ölçülen sonuçların hiçbiriyle ilişkili çıkmadı; yanında olamadığı için kendini suçlayan sahipler için bu önemli bir bulgu.' },
    { kind: 'uyari', metin: 'Yas aylar geçmesine rağmen günlük yaşamı belirgin biçimde zorlaştırıyorsa bir ruh sağlığı uzmanından destek almak önerilir.' },

    { kind: 'baslik', metin: 'Evdeki diğer hayvanlar da etkilenebilir' },
    { kind: 'paragraf', metin: 'İtalya\'da aralarında Milano Üniversitesi Veteriner Fakültesi\'nin de bulunduğu bir ekibin yürüttüğü çalışmada, en az iki köpeği olan ve bunlardan birini kaybeden 426 sahip anket doldurdu. Sahiplerin anlattığına göre geride kalan köpekte oyun, uyku ve yeme alışkanlıklarında ve korku düzeyinde değişiklikler görüldü.' },
    { kind: 'paragraf', metin: 'Bu değişiklikleri en çok iki köpek arasındaki dostça ya da ebeveyn ilişkisi, yemeği paylaşmaları ve sahibin kendi yası ile öfkesi yordadı. İki köpeğin birlikte geçirdiği sürenin ise etkisi bulunmadı. Geride kalan hayvanın davranışındaki değişiklik uzun sürerse ya da yemeyi bırakırsa veteriner hekime danışmak gerekiyor; kedilerde iştahsızlık için [[kedim-yemek-yemiyor|kedim yemek yemiyor]] yazısına bakabilirsiniz.' },
  ],
  sss: [
    { soru: 'Ölen kedimi ya da köpeğimi bahçeye gömebilir miyim?', cevap: 'Mevzuat ölmüş pet hayvanlarının gömülerek imhasına istisna olarak izin veriyor, ancak yer ve koşulları sahipler için ayrıntılı tarif etmiyor. Bu yüzden gömmeden önce belediyeye danışmak önerilir. Bahçe ortak alansa apartman ya da site yönetiminin görüşünü almak da gerekiyor.' },
    { soru: 'Evcil hayvanın ölümünü nereye bildirmek gerekiyor?', cevap: 'Kayıtlı kedi ve köpeğin ölümü 30 gün içinde il veya ilçe tarım ve orman müdürlüğüne bildiriliyor. Bakanlığın bilgilendirmesine göre hayvanın pasaportu da teslim edilerek kayıt sistemden düşülüyor.' },
    { soru: 'Belediye ölen evcil hayvanı alıyor mu?', cevap: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği, ölen ev hayvanlarını Çevre Kanunu çerçevesinde bertaraf etmeyi ya da usulüne uygun kireçle gömmeyi yerel yönetimlerin görevleri arasında sayıyor. Hizmetin nasıl verildiği belediyeye göre değişebildiği için belediyenin veteriner işleri birimini aramak önerilir.' },
    { soru: 'Klinikte ötanazi uygulanan hayvanın bertarafını kim yapar?', cevap: 'Yönetmeliğe göre ötanazi işleminden sorumlu kişi, hayvanın kesin olarak öldüğünden emin olduktan sonra ölüsünü usulüne uygun bertaraf etmekle yükümlü. Gömme ya da yakma gibi bir tercih varsa bunu önceden klinikle konuşmak önerilir.' },
    { soru: 'Evcil hayvanı yaktırmak yasal mı?', cevap: 'Evet, yakma mevzuatın öngördüğü olağan yol. Yönetmelik pet hayvanlarını kategori I materyal sayıyor ve bu materyal için ilk sırada yakılarak imhayı gösteriyor. Hizmeti verecek tesisin izinli olup olmadığını sormak önerilir.' },
    { soru: 'Evcil hayvanın ardından yas tutmak normal mi?', cevap: 'Evet. Türkiye\'de 210 kişiyle yapılan bir çalışmada hayvana bağlılık yasın şiddetini en güçlü yordayan etken çıktı. Duygularını bastırmak zorunda kalanlar daha fazla sıkıntı yaşadı. Yas günlük yaşamı uzun süre zorlaştırıyorsa uzman desteği almak önerilir.' },
    { soru: 'Diğer köpeğim de yas tutar mı?', cevap: 'Tutabilir. İtalya\'da 426 sahiple yapılan çalışmada geride kalan köpeklerde oyun, uyku, yeme ve korku düzeyinde değişiklikler bildirildi. İki köpek arasındaki ilişkinin yakınlığı ve sahibin kendi yası bu değişiklikleri yordadı. Değişiklik uzun sürerse veteriner hekime danışmak gerekiyor.' },
  ],
  kontrolListesi: [
    'Veteriner hekimle konuşuldu mu?',
    'Ölüm nedeninde şüphe var mı?',
    'Gömme yeri belediyeye soruldu mu?',
    'Ölüm 30 günde bildirildi mi?',
    'Pasaport teslim edildi mi?',
    'Diğer hayvan izleniyor mu?',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: 'İnsan Tüketimi Amacıyla Kullanılmayan Hayvansal Yan Ürünler Yönetmeliği (madde 7, 9 ve 14)',
      adres: 'https://mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatNo=15648&MevzuatTertip=5&MevzuatTur=7',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği (13 Aralık 2024, sayı 32751), madde 7, 16, 25, 26 ve 27',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/12/20241213-3.htm',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı, Eskişehir İl Tarım ve Orman Müdürlüğü',
      baslik: 'Sahipli Hayvanların Dijital Kimliklendirilmesi',
      adres: 'https://eskisehir.tarimorman.gov.tr/Duyuru/675/Sahipli-Hayvanlarin-Dijital-Kimliklendirilmesi',
    },
    {
      kurum: 'İzmir Ekonomi Üniversitesi, Psikoloji Bölümü',
      baslik: 'Bound by society: An exploratory study of pet attachment and social constraints in pet bereavement among a Turkish sample.',
      yazarlar: 'Demirci Ö, Yüksel Ö, Meral Y',
      dergi: 'Death Studies',
      yil: 2025,
      kunye: '1-11',
      doi: '10.1080/07481187.2025.2604581',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/41416840/',
    },
    {
      kurum: 'Colorado State University, College of Veterinary Medicine and Biomedical Sciences',
      baslik: 'Poorer bereavement outcomes among companion animal owners are associated with unexpected death or describing the pet as a partner or soulmate.',
      yazarlar: 'Kogan LR, Packman W, Currin-McCulloch J, Bussolari C',
      dergi: 'Journal of the American Veterinary Medical Association',
      yil: 2026,
      kunye: '1-10',
      doi: '10.2460/javma.26.08.0659',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/42933129/',
    },
    {
      kurum: 'University of Milan, Department of Veterinary Medicine and Animal Science',
      baslik: 'Domestic dogs (Canis familiaris) grieve over the loss of a conspecific.',
      yazarlar: 'Uccheddu S, Ronconi L, Albertini M, Coren S, Da Graça Pereira G, De Cataldo L, Haverbeke A, Mills DS, Pierantoni L, Riemer S, Testoni I, Pirrone F',
      dergi: 'Scientific Reports',
      yil: 2022,
      kunye: '12(1):1920',
      doi: '10.1038/s41598-022-05669-y',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/35210440/',
    },
  ],
};
