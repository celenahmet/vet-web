import type { BlogYazi } from './types';

export const trendeEvcilHayvan: BlogYazi = {
  slug: 'trende-evcil-hayvan',
  baslik: 'Trende Evcil Hayvan: TCDD Kuralları 2026',
  ozet: 'TCDD trenlerinde kedi, köpek ve küçük ötücü kuşlar kafeste yolcunun yanında gidiyor. Gereken belgeler, trendeki kurallar, rehber köpek ve tazminat hakları.',
  kapakAlt:
    'Tren penceresinin önünde taşıma çantasından başını çıkaran köpek',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**TCDD Taşımacılık\'ın yüksek hızlı, anahat ve bölgesel trenlerinde kedi, köpek ve küçük ötücü kuşlar, kafeslerinde olmak kaydıyla yolcunun yanında yolculuk edebiliyor; yolculuk öncesinde aşı belgesi ve veteriner sağlık belgesinin gösterilmesi zorunlu.** Hayvanın gözetimi de, diğer yolculara rahatsızlık vermeyecek şekilde yerleştirilmesi de yolcuya ait.' },
    { kind: 'paragraf', metin: 'Bu yazıda iki resmî metni bir araya getirdik: Ulaştırma ve Altyapı Bakanlığı\'nın Demiryolu ile Seyahat Eden Yolcuların Haklarına Dair Yönetmeliği ve TCDD Taşımacılık\'ın kendi yolcu tarifesinin eki olan Yolcu Hakları belgesi. Şehir içindeki metro, otobüs ve vapur kurallarını ise [[evcil-hayvanla-toplu-tasima|evcil hayvanla toplu taşıma]] yazımızda ayrıca anlattık.' },

    { kind: 'tablo', basliklar: ['Soru', 'Kısa cevap'], satirlar: [
      ['Hangi hayvanlar trene alınıyor?', 'Kafesinde kedi, köpek ve küçük ötücü kuşlar'],
      ['Hayvan nerede duruyor?', 'Kafeste, yolcunun yanında'],
      ['Hangi belgeler isteniyor?', 'Aşı belgesi ve veteriner sağlık belgesi'],
      ['Hayvandan kim sorumlu?', 'Gözetimi ve verdiği zarar yolcuya ait'],
      ['Rehber köpek ücretli mi?', 'Hayır; ağızlık ve sağlık belgesiyle ücretsiz'],
      ['Kurallara uyulmazsa?', 'Yolcu seyahatten men edilebiliyor'],
    ]},

    { kind: 'baslik', metin: 'Trene hangi hayvanlar alınıyor?' },
    { kind: 'paragraf', metin: 'TCDD Taşımacılık\'ın Yolcu Hakları belgesi, yolcunun yanında taşınabilecek evcil hayvanı tek cümleyle tanımlıyor: kafeslerinde olmak kaydıyla **sadece kedi, köpek ve küçük ötücü kuşlar**. Belgede örnek olarak saka kuşu, muhabbet kuşu, kanarya ve papağan sayılıyor. Tavşan, hamster, kaplumbağa ya da sürüngen gibi hayvanlar bu tanımın içinde yer almıyor.' },
    { kind: 'paragraf', metin: 'Belge, TCDD Taşımacılık\'a ait yüksek hızlı trenler ile anahat ve bölgesel yolcu trenlerinde bileti olan yolcuları kapsıyor. Yönetmelik de aynı çerçeveyi çiziyor: tren işletmecisi evcil hayvan taşımasını hiçbir şekilde reddedemiyor, ancak taşıma koşullarını kendisi belirleyip ilan ediyor. Yolcu, kafes içindeki evcil hayvanını yanına alabiliyor.' },
    { kind: 'yanilgi', baslik: '"Ağızlık takarsam büyük köpeğimle kafessiz binebilirim"', metin: 'TCDD trenlerinde ölçü ağızlık değil, kafes. Hem yönetmelik hem TCDD Taşımacılık\'ın belgesi, yolcunun yanında taşınan evcil hayvanı kafes içinde tarif ediyor. Kafessiz yolculuk için tanımlanmış tek istisna, ağızlığı ve sağlık belgeleriyle yolculuk eden görme engelli yolcuların rehber köpekleri.' },

    { kind: 'baslik', metin: 'Kafes trende nereye konuyor?' },
    { kind: 'paragraf', metin: 'Yönetmeliğe ve TCDD\'nin Yolcu Hakları belgesine göre bütün trenlerde evcil hayvanların, trende bu iş için ayrılmış yerlere uygun bir şekilde yerleştirilmesi yolcuya ait bir sorumluluk. Kafesin yeri seçilirken üç ölçü sayılıyor: diğer yolcuların geçişini engellememek, onlara rahatsızlık vermemek ve görüntü kirliliği oluşturmamak. Yolcular bu konudaki uyarılara uymak zorunda.' },
    { kind: 'paragraf', metin: 'Yönetmelik ayrıca yolcuları rahatsız edecek, huzurlarını bozacak ya da herhangi bir hasara yol açacak türden evcil hayvanların taşımaya kabul edilemeyeceğini yazıyor. Bu yüzden kafesin sağlam, kapağının iyi kapanan ve hayvanın içinde rahat edebileceği bir kafes olması, yolculuğu hem hayvan hem çevredeki yolcular için kolaylaştırıyor.' },
    { kind: 'liste', maddeler: [
      '**Gözetim:** Hayvanın yolculuk boyunca gözetimi yolcuya ait',
      '**Yer:** Kafes, trende bu iş için ayrılmış yerlere konuyor',
      '**Geçiş:** Kafes koridoru ve diğer yolcuların geçişini kapatmıyor',
      '**Uyarı:** Personelin bu konudaki uyarılarına uyulması gerekiyor',
    ]},

    { kind: 'baslik', metin: 'Bilet ve taşıma koşulları nereden öğreniliyor?' },
    { kind: 'paragraf', metin: 'Yönetmelik, evcil hayvanın hangi koşullarda ve hangi ücretle taşınacağını tek tek saymıyor; bunu tren işletmecisine bırakıyor. TCDD Taşımacılık\'ın Yolcu Hakları belgesi de aynı şeyi söylüyor: el bagajı, evcil hayvan ve araçların taşıma koşullarını TCDD Taşımacılık belirliyor ve ilan ediyor. Yani hayvan için bilet, koltuk ve vagon seçimiyle ilgili güncel kural, TCDD Taşımacılık\'ın ilan ettiği koşullarda yer alıyor.' },
    { kind: 'paragraf', metin: 'Yönetmeliğin 7. maddesi, tren işletmecisinin yolculara seyahat öncesinde ve sırasında en az Ek-1\'de sayılan bilgileri sunmasını istiyor. Ek-1\'deki "yolculuk öncesi sunulacak bilgiler" listesinde **evcil hayvanların taşınmasına ait şartlar** ve trende birinci, ikinci sınıf, kuşet ya da yataklı vagon gibi imkânların bulunup bulunmadığı da var. Bilet almadan önce bu bilgileri bilet satış kanalından ya da istasyondan sormak bir haktır.' },
    { kind: 'yanilgi', baslik: '"Kurallar her trende aynıdır, bir kez öğrenmek yeter"', metin: 'Yönetmelik koşulları belirleme ve ilan etme işini tren işletmecisine bırakıyor; TCDD Taşımacılık da bu koşulları belirleme hakkını kendi belgesinde açıkça yazıyor. Eski bir yolculukta geçerli olan bir düzen bugün değişmiş olabilir. Her yolculuktan önce güncel koşullara bakılması önerilir.' },

    { kind: 'baslik', metin: 'Yolculuk için gereken belgeler' },
    { kind: 'paragraf', metin: 'Yönetmeliğin 10. maddesi bu konuda net: trenle taşınacak evcil hayvanlar için **sağlıklı olduğuna dair belgelerin, yani aşı belgesi ve veteriner sağlık belgesinin, yolculuk öncesinde gösterilmesi zorunlu**. Belge olmadan yola çıkmak, istasyonda ya da trende sorun yaşanmasına yol açabilir.' },
    { kind: 'liste', maddeler: [
      '**Aşı belgesi:** Hayvanın aşılarının işlendiği belge',
      '**Veteriner sağlık belgesi:** Veteriner hekimin düzenlediği, hayvanın sağlık durumunu gösteren belge',
      '**Yanınızda olması:** Belgeler yolculuk öncesinde gösterildiği için çantada, kolay ulaşılır bir yerde durmalı',
    ]},
    { kind: 'paragraf', metin: 'Aşıların zamanlamasını [[kedi-asi-takvimi|kedi aşı takvimi]] ve [[kopek-asi-takvimi|köpek aşı takvimi]] yazılarımızda, kedi ve köpeklerin kimlik ve kayıt belgelerini [[evcil-hayvan-pasaportu|evcil hayvan pasaportu]] yazımızda anlattık. Sağlık belgesi için yapılan muayene, hayvanın uzun bir yolculuğa uygun olup olmadığını veteriner hekimle konuşmak için de iyi bir fırsat.' },
    { kind: 'yanilgi', baslik: '"Hayvanım sağlıklı görünüyorsa belgeye gerek yok"', metin: 'Yönetmelik bu konuda görünüşe değil belgeye bakıyor. Aşı belgesi ve veteriner sağlık belgesinin yolculuk öncesinde gösterilmesi zorunlu tutuluyor. Hayvanın sağlıklı görünmesi bu şartın yerine geçmiyor.' },

    { kind: 'baslik', metin: 'Trende uyulması gereken kurallar' },
    { kind: 'paragraf', metin: 'TCDD Taşımacılık\'ın belgesine göre, taşıma koşullarına uyulmadığını düşündüren akıntı, koku ve benzeri belirtiler ortaya çıkarsa şirket, evcil hayvanın taşıma koşullarına uygun olup olmadığını yolcuyla birlikte ve onun rızasını alarak kontrol etme hakkına sahip. Yolcu rıza göstermezse, gelmezse ya da ona ulaşılamazsa en yakın kolluk kuvvetlerine bildirim yapılıyor.' },
    { kind: 'paragraf', metin: 'Yönetmeliğin 20. maddesi de işletmecinin belirlediği evcil hayvan taşıma kurallarına uymayan ve kurallara aykırı davranmakta ısrar eden yolcunun, yolculuğun başında ya da sırasında **seyahatten men edilebileceğini** ve taşıma ücretinin geri verilmeyebileceğini söylüyor. Yolcu ayrıca evcil hayvanların taşınmasıyla ilgili mevzuata uymak ve bunlara yönelik kontrollere katılmakla yükümlü.' },
    { kind: 'paragraf', metin: 'Sorumluluk da yolcuda. TCDD Taşımacılık\'ın belgesi, yolcunun yanındaki evcil hayvandan kaynaklanan zararları şirketin sorumluluğu dışında sayıyor. Hayvanın koltuğa ya da başka bir yolcunun eşyasına zarar vermesi bu yüzden sahibinin meselesi oluyor.' },
    { kind: 'paragraf', metin: 'Yönetmelikte 10 Ekim 2026\'da yayımlanan değişiklik; skuter ve elektrikli skuterin tanıma eklenmesi, bazı sürelerin 180 günden 90 güne indirilmesi ve idari para cezası gibi konuları kapsıyor. Evcil hayvanla ilgili maddeler bu değişiklikte yer almıyor, yani yukarıdaki kurallar aynen geçerli.' },

    { kind: 'baslik', metin: 'Rehber köpekler ücretsiz yolculuk ediyor' },
    { kind: 'paragraf', metin: 'TCDD Taşımacılık\'ın Yolcu Hakları belgesine göre görme engelli yolcuların rehber köpeği, **köpeğin ağızlığı ve gerekli sağlık belgeleri olmak koşuluyla** yolcunun yanında ücretsiz taşınıyor. Belge, kafes şartını bu köpekler için aramıyor; ölçü ağızlık ve sağlık belgeleri.' },
    { kind: 'paragraf', metin: 'Aynı belgede engelli ya da hareket kabiliyeti kısıtlı kişilerin, refakatçilerinin ve refakat etmek için sertifikalandırılmış rehber köpeklerin taşınmasının öncelikli olduğu da yazıyor. TCDD Taşımacılık ve acenteler, engelli ya da hareket kabiliyeti kısıtlı kişilere rezervasyon yapmayı veya bilet satmayı reddedemiyor ve refakatçi zorunluluğu getiremiyor.' },

    { kind: 'baslik', metin: 'Hayvan yaralanır ya da kaybolursa' },
    { kind: 'paragraf', metin: 'Yönetmeliğin 30. maddesine göre yolcunun öldüğü ya da yaralandığı bir kaza veya olayda tren işletmecisi, yolcunun beraberinde götürdüğü evcil hayvanın kaybolmasından ya da zarar görmesinden de sorumlu. Bunun dışında, gözetimi yolcuya ait olan hayvanın kaybolması ya da zarar görmesinden işletmeci **ancak zarar kendi kusurundan kaynaklanıyorsa** sorumlu tutuluyor.' },
    { kind: 'paragraf', metin: 'İşletmecinin sorumlu olduğu durumlarda yönetmeliğin 32. maddesi tazminata bir üst sınır koyuyor; 2019\'da yayımlanan metinde bu sınır evcil hayvanlar için en fazla 1.800 Türk Lirası olarak yazılı. Yönetmeliğin 67. maddesine göre bu parasal tutarlar her yıl, Vergi Usul Kanunu uyarınca ilan edilen yeniden değerleme oranında artırılarak uygulanıyor; yani bugünkü sınır bu rakamdan yüksek.' },
    { kind: 'paragraf', metin: 'TCDD Taşımacılık ayrıca yolcunun trene binişinden inişine kadar geçen sürede bir kaza ya da olay nedeniyle yanındaki evcil hayvana gelebilecek zararları, üçüncü şahıslara karşı mali sorumluluk sigortasıyla karşılıyor.' },
    { kind: 'yanilgi', baslik: '"Trende hayvanıma ne olursa olsun TCDD öder"', metin: 'Yönetmelik iki durumu ayırıyor. Yolcunun öldüğü ya da yaralandığı bir kaza veya olayda işletmeci hayvan için de sorumlu. Onun dışında hayvanın gözetimi yolcuya ait ve işletmeci yalnızca zarar kendi kusurundan doğduysa sorumlu tutuluyor.' },

    { kind: 'baslik', metin: 'Banliyö hatlarında ve İZBAN\'da durum farklı' },
    { kind: 'paragraf', metin: 'Demiryolu yolcu hakları yönetmeliği, ulusal demiryolu ağında yapılan banliyö taşımacılığını kapsamının dışında bırakıyor. TCDD Taşımacılık\'ın Yolcu Hakları belgesi de banliyö (kent içi) taşımacılık hizmetlerini kapsamadığını yazıyor. Bu yüzden şehir içi banliyö hatlarında, hattı işleten kurumun kendi yolculuk kuralları belirleyici ve bu hatlarla yolculuktan önce o kurallara bakmak gerekiyor.' },
    { kind: 'paragraf', metin: 'İzmir\'deki İZBAN\'ın yolculuk kuralları buna iyi bir örnek: ücretli alanlara yalnızca kafeste ve taşıma çantası içinde taşınan evcil hayvanlar kabul ediliyor ve bu hayvanlar kafesinden ya da çantasından çıkarılmıyor. Kafes ve taşıma çantası dışında taşınan evcil hayvanların ücretli alana girişi yasak. Rehber ya da kılavuz köpeğin ise temiz olması, vücut tasmasının bağlı ve ağızlığının takılı olması zorunlu; engelli kimlik kartı ile köpeğin kimlik belgesi ya da sertifikası yetkiliye gösteriliyor.' },
    { kind: 'tablo', basliklar: ['Hat', 'Geçerli kural'], satirlar: [
      ['YHT, anahat ve bölgesel trenler', 'Yönetmelik ve TCDD Taşımacılık\'ın ilan ettiği koşullar'],
      ['Ulusal ağdaki banliyö hatları', 'Yönetmelik kapsamı dışında; hattın kendi kuralları'],
      ['İZBAN', 'Yalnız kafeste ya da taşıma çantasında'],
    ]},
    { kind: 'uyari', metin: 'Uzun bir tren yolculuğu, özellikle yaşlı, kronik bir sağlık sorunu olan ya da yolculukta çok strese giren hayvanlar için yorucu olabilir. Hayvanın sağlık durumunun yolculuğa uygun olup olmadığını ve yolculuk öncesinde neye dikkat edilmesi gerektiğini veteriner hekime danışmak gerekiyor. Yolda hayvanda beklenmedik bir durum fark edilirse, vakit kaybetmeden bir veteriner hekime başvurmak önerilir.' },
  ],
  kontrolListesi: [
    'Hayvan kafesinde mi?',
    'Aşı belgesi yanında mı?',
    'Veteriner sağlık belgesi var mı?',
    'Kafes geçişi kapatmıyor mu?',
    'Güncel koşullara bakıldı mı?',
    'Rehber köpeğin ağızlığı var mı?',
  ],
  sss: [
    { soru: 'Trene köpekle binilir mi?', cevap: 'Evet, köpek kafesindeyse yolcunun yanında yolculuk edebiliyor. TCDD Taşımacılık\'ın Yolcu Hakları belgesi yolcu yanında taşınabilecek evcil hayvanları kafeslerinde olmak kaydıyla kedi, köpek ve küçük ötücü kuşlar olarak tanımlıyor. Kafessiz yolculuk yalnızca ağızlığı ve sağlık belgeleri olan rehber köpekler için tanımlı.' },
    { soru: 'YHT\'ye kedi alınır mı?', cevap: 'Evet. TCDD Taşımacılık\'ın Yolcu Hakları belgesi yüksek hızlı trenleri de kapsıyor ve kafesindeki kedinin yolcunun yanında taşınabileceğini yazıyor. Yönetmeliğe göre yolculuk öncesinde aşı belgesi ve veteriner sağlık belgesinin gösterilmesi zorunlu. Bilet ve koltuk koşulları TCDD Taşımacılık\'ın ilan ettiği kurallarda yer alıyor.' },
    { soru: 'Trende evcil hayvan için hangi belgeler isteniyor?', cevap: 'Aşı belgesi ve veteriner sağlık belgesi isteniyor. Demiryolu ile Seyahat Eden Yolcuların Haklarına Dair Yönetmelik, trenle taşınacak evcil hayvanlar için sağlıklı olduğunu gösteren bu belgelerin yolculuk öncesinde gösterilmesini zorunlu tutuyor. Belgelerin yolculuk boyunca kolay ulaşılır bir yerde durması önerilir.' },
    { soru: 'Trende evcil hayvan bileti ne kadar?', cevap: 'Bunu TCDD Taşımacılık belirliyor ve ilan ediyor. Yönetmelik ücreti tek tek saymıyor; evcil hayvanın taşıma koşullarını belirleme ve ilan etme işini tren işletmecisine bırakıyor. Güncel ücret ve koltuk düzeni için bilet almadan önce TCDD Taşımacılık\'ın bilet satış kanallarına bakmak gerekiyor.' },
    { soru: 'Kafeste olmayan hayvan trene alınır mı?', cevap: 'Hayır, rehber köpekler dışında alınmıyor. Yönetmelik yolcunun kafes içindeki evcil hayvanını yanına alabileceğini yazıyor; TCDD Taşımacılık\'ın tanımı da kafes şartını içeriyor. Kurallara uymamakta ısrar eden yolcu seyahatten men edilebiliyor ve taşıma ücreti geri verilmeyebiliyor.' },
    { soru: 'Rehber köpek trende ücretli mi?', cevap: 'Hayır. TCDD Taşımacılık\'ın Yolcu Hakları belgesine göre görme engelli yolcunun rehber köpeği, köpeğin ağızlığı ve gerekli sağlık belgeleri olmak koşuluyla yolcunun yanında ücretsiz taşınıyor. Refakat etmek için sertifikalandırılmış rehber köpeklerin taşınması da öncelikli.' },
    { soru: 'İZBAN\'a evcil hayvanla binilir mi?', cevap: 'Evet, ama yalnızca kafeste ya da taşıma çantasında. İZBAN\'ın yolculuk kurallarına göre ücretli alanlara yalnızca bu şekilde taşınan evcil hayvanlar kabul ediliyor ve hayvan kafesinden ya da çantasından çıkarılmıyor. Kafes ve taşıma çantası dışında taşınan evcil hayvanların ücretli alana girişi yasak.' },
  ],
  kaynaklar: [
    {
      kurum: 'TCDD Taşımacılık A.Ş.',
      baslik: 'Yolcu Tarifesi Ek-1: Yolcu Hakları (8 Kasım 2019, versiyon 2)',
      adres: 'https://adminapi.tcddtasimacilik.gov.tr/files/pdfs/yolcu-haklari.pdf',
    },
    {
      kurum: 'T.C. Resmî Gazete (Ulaştırma ve Altyapı Bakanlığı)',
      baslik: 'Demiryolu ile Seyahat Eden Yolcuların Haklarına Dair Yönetmelik (8 Mart 2019, sayı 30708), madde 2, 7, 10, 13, 20, 30, 32, 67 ve Ek-1',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2019/03/20190308-6.htm',
    },
    {
      kurum: 'T.C. Resmî Gazete (Ulaştırma ve Altyapı Bakanlığı)',
      baslik: 'Demiryolu ile Seyahat Eden Yolcuların Haklarına Dair Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik (10 Ekim 2026, sayı 33396)',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2026/10/20261010-16.htm',
    },
    {
      kurum: 'İZBAN A.Ş.',
      baslik: 'Yolculuk Kuralları (madde 2.13 ve 3.10)',
      adres: 'https://www.izban.com.tr/Sayfalar/Single.aspx?MenuId=28',
    },
  ],
};
