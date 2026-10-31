import type { BlogYazi } from './types';

export const ucretsizKuduzAsisi: BlogYazi = {
  slug: 'ucretsiz-kuduz-asisi',
  baslik: 'Ücretsiz Kuduz Aşısı Nerede Yapılır?',
  ozet: 'Kedi ve köpeğe ücretsiz kuduz aşısı nerede yapılıyor? Tarım ve orman müdürlüklerinin kampanyaları, belediyeler, zorunluluk ve başvuru öncesi sorulacaklar.',
  kapakAlt:
    'Muayene masasında oturan gülümseyen köpek, yanında eldivenli veteriner hekim ve soğutucu çanta',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kedi ve köpekler için ücretsiz kuduz aşısı, il ve ilçe tarım ve orman müdürlüklerinin aşılama kampanyalarında ve bazı belediyelerin veteriner birimlerinde yapılabiliyor.** Tarım ve Orman Bakanlığı, sahipli kedi ve köpekleri her yıl Mart ve Nisan aylarında kampanya şeklinde il ve ilçe müdürlükleri eliyle aşılıyor; sahipsiz hayvanlar için ise belediyelere aşı desteği veriyor.' },
    { kind: 'paragraf', metin: 'Kampanya dönemi ve kapsamı ilden ile, belediyeden belediyeye değişiyor. Bu yüzden en sağlam yol, bağlı olunan ilçe tarım ve orman müdürlüğüne ya da belediyenin veteriner işleri birimine önceden sormak. Kampanyayı kaçıranlar için aşı yıl boyunca özel veteriner kliniklerinde de yaptırılabiliyor. Aşağıda hangi kapının kime açık olduğunu, aşının neden zorunlu olduğunu ve aşıdan sonra hangi kaydın tutulduğunu topladık.' },

    { kind: 'tablo', basliklar: ['Nerede', 'Kime', 'Ne zaman', 'Bilinmesi gereken'], satirlar: [
      ['İl ve ilçe tarım ve orman müdürlüğü', 'Sahipli kedi ve köpek', 'Kampanya her yıl Mart ve Nisan', 'Tarih ve koşul ilden ile değişiyor'],
      ['Belediye veteriner birimi', 'Sahipsiz hayvan; bazı belediyelerde sahipli de', 'Belediyenin duyurusuna göre', 'Kapsam belediyeden belediyeye değişiyor'],
      ['Hayvan bakımevi', 'Bakımevindeki ve sahiplendirilen hayvan', 'Sahiplendirmeden önce', 'Aşısız hayvan bakımevinden çıkamıyor'],
      ['Özel veteriner kliniği', 'Her kedi ve köpek', 'Yıl boyunca', 'Aşı kimlik belgesine işleniyor'],
    ]},

    { kind: 'baslik', metin: 'Tarım ve orman müdürlüğünün kuduz aşılama kampanyası' },
    { kind: 'paragraf', metin: 'Bakanlık, kuduzla mücadele için her yıl yeniden hazırlanan Hayvan Hastalık ve Zararlıları ile Mücadele Programı çerçevesinde kedi ve köpeklere yönelik ülke çapında bir aşılama programı yürütüyor. Bakanlığın 2023 tarihli açıklamasına göre sahipli kedi ve köpekler her yıl Mart ve Nisan aylarında il ve ilçe müdürlüklerince kampanya şeklinde aşılanıyor. Aynı açıklamada 2022 yılında 605.058 kedi ve köpeğin kuduza karşı aşılandığı belirtiliyor.' },
    { kind: 'paragraf', metin: 'Kampanyanın ücretsiz olup olmadığı sorusunun cevabı il duyurularında görülüyor. Samsun İl Tarım ve Orman Müdürlüğünün 2021 duyurusunda, ilin tamamında sahipli ve sahipsiz tüm kedi ve köpeklerin aşılanmasının hedeflendiği ve çalışmalarda kullanılacak aşıların Bakanlıkça proje kapsamında ücretsiz tahsis edildiği yazıyor. Uygulama, il ve ilçe müdürlüklerinin her yılki programına bağlı; bu nedenle bulunulan ilde o yılın kampanya tarihini ve koşulunu ilçe müdürlüğünden teyit etmek gerekiyor.' },

    { kind: 'baslik', metin: 'Belediyeler kuduz aşısı yapıyor mu?' },
    { kind: 'paragraf', metin: 'Belediyelerin kuduz aşısındaki asıl görevi sahipsiz hayvanlar. Kuduz yönetmeliğine göre belediye sorumluluk alanındaki ve muhtarın yazılı talebi üzerine köylerdeki üç aydan büyük sahipsiz kedi ve köpeklerin belediye veteriner hekimlerince yılda bir kez aşılanması, işaretlenmesi (mikroçip, küpe ve benzeri) ve kayıt altına alınması zorunlu.' },
    { kind: 'paragraf', metin: 'Bazı belediyeler bunun ötesine geçip sahipli hayvanlara da ücretsiz aşı kampanyası düzenliyor. Örneğin Ankara Büyükşehir Belediyesi 2013 yılında, Kuduz Hastalığının Kontrolü Projesi kapsamında sahipli ve sahipsiz kedi ve köpekleri yıl sonuna kadar ücretsiz aşılayacağını duyurmuştu. Bu tür kampanyalar her belediyede yok ve süreleri sınırlı; belediyenin kendi internet sitesindeki duyuruları ya da veteriner işleri biriminin telefonu en güvenilir bilgi kaynağı.' },
    { kind: 'yanilgi', baslik: '"Belediye yalnız sokak hayvanını aşılar, sahipli hayvana hizmet vermez"', metin: 'Yönetmeliğin belediyeye yüklediği zorunluluk sahipsiz hayvanlar için. Ama bu, belediyenin sahipli hayvanı aşılayamayacağı anlamına gelmiyor; bazı belediyeler dönemsel kampanyalarla sahipli hayvanlara da ücretsiz kuduz aşısı yapıyor. Hangi belediyede böyle bir kampanya olduğunu ancak belediyenin kendisi söyleyebilir.' },

    { kind: 'baslik', metin: 'Sahiplenilen hayvanın aşısı nasıl oluyor?' },
    { kind: 'paragraf', metin: 'Bakımevinden sahiplenilen hayvan, çoğu zaman aşısı yapılmış olarak yeni evine gidiyor. Yönetmelik, bakımevlerindeki üç aydan büyük kedi ve köpeklerin bakımevi sorumlu veteriner hekimince kuduza karşı aşılanmasını zorunlu tutuyor. Hekim, aşı bilgilerini sahiplendirilen hayvanın kimlik belgesine işlemek ve Bakanlık veri tabanına kaydetmekle yükümlü. Kısırlaştırılmayan ve kuduza karşı aşılanmayan hayvanlar bakımevinden salınamıyor.' },
    { kind: 'paragraf', metin: 'Bu nedenle sahiplenme sırasında kimlik belgesindeki aşı tarihine bakmak önerilir. Bir sonraki aşının tarihi oradan hesaplanıyor. Sahiplenme sürecinin geri kalanı [[barinaktan-kopek-sahiplenme|barınaktan köpek sahiplenme]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Kuduz aşısı zorunlu mu, ne zaman başlıyor?' },
    { kind: 'paragraf', metin: 'Evet, zorunlu. Kuduz Hastalığından Korunma ve Kuduz Hastalığı ile Mücadele Yönetmeliği, sahipli ya da sahipsiz tüm kedi ve köpeklerin yılda bir kez kuduza karşı aşılanmasını ve aşı kayıtlarının tutulmasını zorunlu tutuyor. Üç aydan büyük köpek ve kedi sahipleri, hayvanlarını yılda bir kez aşılatmakla yükümlü.' },
    { kind: 'paragraf', metin: 'Yönetmeliğe göre ilk aşıdan sonraki rapel aşısı, üretici firma aksini belirtmemişse yirmi bir gün sonra yapılıyor; sonraki yıllarda da üretici farklı bir süre belirtmedikçe aşı yılda bir tekrarlanıyor. Aşı öncesi parazit uygulamalarına ve destekleyici işlemlere veteriner hekim karar veriyor. Kurala uymayanlar hakkında 5996 sayılı kanunun 36. maddesine göre idari yaptırım uygulanıyor. Aşı takviminin tamamı [[kedilere-kuduz-asisi|kedilere kuduz aşısı]] ve [[kopek-asi-takvimi|köpek aşı takvimi]] yazılarında var.' },
    { kind: 'yanilgi', baslik: '"Ev kedisi dışarı çıkmıyorsa kuduz aşısı gerekmez"', metin: 'Yönetmelik ev kedisiyle sokağa çıkan kedi arasında ayrım yapmıyor: üç aydan büyük her sahipli kedi ve köpek yılda bir kez aşılanıyor. Hayvan hiç dışarı çıkmasa bile kural aynı.' },

    { kind: 'baslik', metin: 'Aşıdan sonra hangi kayıt tutuluyor?' },
    { kind: 'paragraf', metin: 'Aşıyı yapan hekim kim olursa olsun, resmi veteriner hekim, belediye veteriner hekimi ya da serbest veteriner hekim, uygulama bilgilerini ve bir sonraki aşı tarihini hayvanın kimlik belgesine işlemek, aşı kaydını da Bakanlık veri tabanında güncellemekle yükümlü. Yani ücretsiz kampanyada yapılan aşı da klinikte yapılan aşı gibi kayda geçiyor.' },
    { kind: 'paragraf', metin: 'Kaydın işe yaraması için hayvanın kimliklendirilmiş olması gerekiyor. Mikroçipin ne olduğu ve nasıl takıldığı [[mikrocip-nedir|mikroçip nedir]] yazısında, kayıt sorgulama ise [[petvet-kayit|PetVet kaydı]] yazısında anlatılıyor. Ücretsiz kampanyayı kaçırıp klinikte aşı yaptırmayı düşünenler için fiyat aralığı [[veteriner-ucretleri|veteriner ücretleri]] yazısında.' },

    { kind: 'baslik', metin: 'Hayvan ısırırsa ya da tırmalarsa ne yapılıyor?' },
    { kind: 'paragraf', metin: 'Yönetmelik, hayvan sahiplerinin hayvanlarının başka hayvanlarla ısırma ya da ısırılma ile sonuçlanan temaslarını aynı gün içinde il ve ilçe müdürlüklerine bildirmesini istiyor. Temas eden bir insansa, durumun en yakın sağlık kuruluşuna da bildirilmesi zorunlu.' },
    { kind: 'uyari', metin: 'Kuduz riskli bir ısırık ya da tırmalamadan sonra kişinin vakit kaybetmeden sağlık kuruluşuna başvurması gerekiyor. Hacettepe Üniversitesi Halk Sağlığı Anabilim Dalının bilgilendirmesine göre en kısa sürede sağlık kuruluşuna başvurulması ve hekimin düzenleyeceği aşılama programının aksatılmaması önemli. Hayvanın kendisi için de veteriner hekime başvurmak gerekiyor. Tırmalama sorusunun ayrıntısı [[kedi-tirmalamasi-kuduz-yapar-mi|kedi tırmalaması kuduz yapar mı]] yazısında.' },

    { kind: 'baslik', metin: 'Kuduz aşısı neden bu kadar önemseniyor?' },
    { kind: 'paragraf', metin: 'Kuduz, belirtileri başladıktan sonra hem insanda hem hayvanda ölümle sonuçlanan bir hastalık. Hacettepe Üniversitesi Halk Sağlığı Anabilim Dalının 2025 bilgilendirmesine göre dünyada her yıl 59.000\'in üzerinde insan kuduz nedeniyle hayatını kaybediyor ve olguların %99\'u kuduz köpek ısırığından kaynaklanıyor. Aynı belgede, Türkiye\'de 2024 yılında 470.918 kuduz riskli temas yaşandığı ve bir kuduz vakası tespit edildiği aktarılıyor.' },
    { kind: 'paragraf', metin: 'Riskli temasların önemli bir kısmı sahipli hayvanlardan geliyor. Türkiye\'de bir devlet hastanesinin acil servisinde 2015 ile 2019 arasındaki 3.378 başvuruyu inceleyen hakemli bir çalışmada, kuduz şüpheli temasların %69,1\'inin sahipli hayvanlardan kaynaklandığı bulundu. Çalışmanın yazarları, kentte yaşayan sahipli ya da sahipsiz tüm hayvanların aşılanma açısından izlenmesi gerektiği sonucuna varıyor. Evdeki kedinin ya da köpeğin yıllık aşısı, bu yüzden yalnız hayvanı değil evdekileri de koruyor.' },

    { kind: 'baslik', metin: 'Başvurmadan önce sorulması gerekenler' },
    { kind: 'liste', maddeler: [
      '**Kampanya tarihi:** Bulunulan ilde o yılın aşılama kampanyası ne zaman başlıyor, ne zaman bitiyor?',
      '**Başvuru yeri:** Aşı köy ve mahallelerde mi yapılıyor, yoksa ilçe müdürlüğüne ya da belediyenin birimine mi gidilecek?',
      '**Ücret:** Aşı ve kayıt işlemi için herhangi bir bedel isteniyor mu?',
      '**Belgeler:** Hayvanın kimlik belgesi ve önceki aşı kaydı yanında götürülmeli mi?',
      '**Yaş ve süre:** Hayvan üç aydan büyük mü, son kuduz aşısının üzerinden ne kadar zaman geçti?',
    ]},
    { kind: 'paragraf', metin: 'Bu sorular bir telefonla netleşiyor ve boşuna gidiş gelişin önüne geçiyor. Yıllık tekrar tarihini akılda tutmak için aşı hatırlatması kurmak önerilir; Veterito bu tarihi kedi ya da köpeğiniz için tutuyor ve yaklaşınca hatırlatıyor.' },
  ],
  sss: [
    { soru: 'Ücretsiz kuduz aşısı için nereye başvurulur?', cevap: 'Sahipli kedi ve köpekler için ilk adres bağlı olunan ilçe tarım ve orman müdürlüğü. Bakanlık sahipli hayvanları her yıl Mart ve Nisan aylarında kampanya şeklinde il ve ilçe müdürlükleri eliyle aşılıyor. Bazı belediyeler de dönemsel olarak ücretsiz aşı kampanyası düzenliyor; bunun için belediyenin duyurularına bakmak gerekiyor.' },
    { soru: 'Tarım müdürlüğünün kuduz aşısı ücretsiz mi?', cevap: 'Kampanyalarda kullanılan aşılar Bakanlıkça ücretsiz tahsis ediliyor; Samsun İl Tarım ve Orman Müdürlüğünün 2021 duyurusu bunu açıkça yazıyor. Uygulama her yılın programına ve ile göre değişebildiği için ücret ve kapsam konusunu başvurmadan önce ilçe müdürlüğüne sormak önerilir.' },
    { soru: 'Belediye sahipli kediye kuduz aşısı yapar mı?', cevap: 'Bazı belediyeler yapıyor, hepsi değil. Yönetmeliğin belediyeye yüklediği zorunluluk sahipsiz kedi ve köpeklerin yılda bir aşılanması. Sahipli hayvanlar için ücretsiz kampanya düzenleyen belediyeler de var; örneğin Ankara Büyükşehir Belediyesi 2013 yılında böyle bir kampanya duyurmuştu. Güncel bilgi belediyenin kendisinden alınıyor.' },
    { soru: 'Kuduz aşısı yaptırmak zorunlu mu?', cevap: 'Evet. Kuduz yönetmeliğine göre sahipli ya da sahipsiz tüm kedi ve köpeklerin yılda bir kez kuduza karşı aşılanması ve aşı kayıtlarının tutulması zorunlu. Üç aydan büyük kedi ve köpek sahipleri hayvanlarını yılda bir kez aşılatmakla yükümlü; kurala uymayanlara 5996 sayılı kanuna göre idari yaptırım uygulanıyor.' },
    { soru: 'Kampanyayı kaçırırsam ne olur?', cevap: 'Aşı yıl boyunca yaptırılabiliyor. Kampanya dışında özel veteriner kliniklerinde aşı yaptırmak mümkün; yönetmelik serbest veteriner hekimleri de aşıyı uygulayan hekimler arasında sayıyor. Hangi hekim yaparsa yapsın, aşı bilgisi ve bir sonraki aşı tarihi hayvanın kimlik belgesine ve Bakanlık veri tabanına işleniyor.' },
    { soru: 'Barınaktan sahiplenilen hayvanın kuduz aşısı yapılmış mı olur?', cevap: 'Genellikle evet. Yönetmeliğe göre bakımevlerindeki üç aydan büyük kedi ve köpeklerin bakımevi veteriner hekimince aşılanması zorunlu ve aşılanmayan hayvan bakımevinden salınamıyor. Aşı bilgisi sahiplendirilen hayvanın kimlik belgesine işleniyor; bir sonraki aşı tarihine oradan bakılabiliyor.' },
    { soru: 'Kedim ya da köpeğim birini ısırırsa ne yapmalıyım?', cevap: 'Durumun aynı gün içinde il veya ilçe tarım ve orman müdürlüğüne, ısırılan kişi için de en yakın sağlık kuruluşuna bildirilmesi gerekiyor. Isırılan kişinin vakit kaybetmeden sağlık kuruluşuna başvurması önemli. Hayvan için de veteriner hekime başvurmak gerekiyor; gözlem ve izleme kararını yetkili hekimler veriyor.' },
  ],
  kontrolListesi: [
    'Hayvan üç aydan büyük mü?',
    'Son aşının üstünden bir yıl geçti mi?',
    'Kampanya tarihi soruldu mu?',
    'Belediyenin duyurusuna bakıldı mı?',
    'Kimlik belgesi hazır mı?',
    'Aşı kimlik belgesine işlendi mi?',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: 'Kuduz Hastalığından Korunma ve Kuduz Hastalığı ile Mücadele Yönetmeliği (madde 9, 10 ve 16)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=7&MevzuatNo=15800&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: '28 Eylül Dünya Kuduz Günü',
      yil: 2023,
      adres: 'https://www.tarimorman.gov.tr/Haber/6029/28-Eylul-Dunya-Kuduz-Gunu',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı, Samsun İl Tarım ve Orman Müdürlüğü',
      baslik: 'İlimizde Kuduz Aşılama Programı Başladı',
      yil: 2021,
      adres: 'https://samsun.tarimorman.gov.tr/Haber/1000/Ilimizde-Kuduz-Asilama-Programi-Basladi',
    },
    {
      kurum: 'Ankara Büyükşehir Belediyesi',
      baslik: 'Kedi ve köpeklerinizi aşılatmayı ihmal etmeyin',
      yil: 2013,
      adres: 'https://www.ankara.bel.tr/haberler/kedi-ve-kopeklerinizi-asilatmayi-ihmal-etmeyin-4822',
    },
    {
      kurum: 'Hacettepe Üniversitesi Tıp Fakültesi Halk Sağlığı Anabilim Dalı',
      baslik: 'Dünya Kuduz Günü Bilgilendirme Notu (Toplum İçin Bilgilendirme Dizisi 2024/2025-81; hazırlayan Kaan Aksu, danışman Meltem Şengelen)',
      yil: 2025,
      adres: 'https://halksagligi.hacettepe.edu.tr/duyurular/halkayonelik/kuduzgunu2025.pdf',
    },
    {
      kurum: 'Lüleburgaz İlçe Sağlık Müdürlüğü; Kırklareli İl Sağlık Müdürlüğü',
      baslik: 'An increasing public health problem: Suspected rabies exposures',
      yazarlar: 'Porsuk AO, Cerit C',
      dergi: 'Journal of Infection in Developing Countries',
      yil: 2021,
      kunye: '15(11):1694-1700',
      doi: '10.3855/jidc.13133',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34898498/',
    },
  ],
};
