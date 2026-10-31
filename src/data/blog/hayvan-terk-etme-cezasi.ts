import type { BlogYazi } from './types';

export const hayvanTerkEtmeCezasi: BlogYazi = {
  slug: 'hayvan-terk-etme-cezasi',
  baslik: 'Evcil Hayvanı Sokağa Bırakmanın Cezası 2026',
  ozet: 'Kedi ya da köpeği sokağa bırakmanın cezası ne? 5199 sayılı kanundaki terk cezası, üç yıl sahiplenme yasağı ve bakamayan sahibin yasal yolları bu yazıda.',
  kapakAlt:
    'Kapısı açık taşıma kafesinin yanında oturan köpeğin çenesini okşayan el',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Türkiye\'de ev hayvanını terk etmek yasak ve 5199 sayılı Hayvanları Koruma Kanunu bu fiile kanun metninde hayvan başına 60.000 TL idari para cezası öngörüyor; ceza alan kişi ayrıca üç yıl boyunca hayvan bakımevlerinden hayvan sahiplenemiyor.** Terk yasağı 2021\'de 7332 sayılı Kanunla 14. maddeye (n) bendi olarak eklendi, cezanın bugünkü tutarı ise 2024\'te 7527 sayılı Kanunla belirlendi. Bu tutar her yıl yeniden değerleme oranıyla artırılarak uygulanıyor. Aşağıda hangi durumların terk sayıldığını, cezanın nasıl verildiğini ve hayvanına bakamayan bir sahibin kanuna uygun yollarını topladık.' },
    { kind: 'paragraf', metin: 'Bu yazı bilgilendirme amaçlı. Somut bir olayda il veya ilçe tarım ve orman müdürlüğünden ya da bir hukukçudan görüş almak gerekiyor.' },

    { kind: 'baslik', metin: 'Hayvanı sokağa bırakmak suç mu, kabahat mi?' },
    { kind: 'paragraf', metin: 'Kanunun diliyle terk bir **kabahat**, yani hapis değil idari para cezası gerektiren bir fiil. 14. maddenin (n) bendi yasağı tek cümleyle koyuyor: "Ev hayvanını terk etmek." Cezası 28. maddenin (j) bendinde yazılı ve cezayı kanunun 17. maddesindeki denetime yetkili merci, yani Tarım ve Orman Bakanlığı ya da Bakanlığın yetki devrettiği mahallin en büyük mülki amiri veriyor.' },
    { kind: 'paragraf', metin: 'Yönetmelikler de aynı yükümlülüğü tekrarlıyor. Hayvanların Korunması Hakkında Uygulama Yönetmeliği\'ne göre ev hayvanı sahipleri hayvanlarının her türlü bakım ve beslenmesinden sorumlu ve onları terk edemiyor. Kedi, köpek ve gelinciklerin kimliklendirilmesine dair yönetmelik de ev hayvanını terk eden sahibe 28. maddenin (j) bendinin uygulanacağını açıkça yazıyor.' },
    { kind: 'yanilgi', baslik: '"Terk etmenin cezası yok, kimse takip etmiyor"', metin: 'Terk, 5199 sayılı kanunda en yüksek idari para cezası öngörülen fiillerden biri. Bulunan bir hayvanı sahiplenmek isteyen kişi kayıt için başvurduğunda, hayvanın resmî kayıtlarda daha önce sahipli olduğu anlaşılırsa önceki sahibine ivedilikle haber veriliyor.' },

    { kind: 'baslik', metin: 'Hayvan terk etmenin cezası 2026\'da ne kadar?' },
    { kind: 'paragraf', metin: 'Kanun metnindeki tutar **hayvan başına 60.000 TL.** "Hayvan başına" ifadesi önemli: iki kediyi birlikte bırakan kişi için ceza iki hayvan üzerinden hesaplanıyor. Fiili veteriner hekim, veteriner sağlık teknisyeni, hayvan koruma derneği ya da vakfı üyesi veya hayvanlara bakmakla görevlendirilen biri işlerse ceza **iki kat** artırılarak uygulanıyor.' },
    { kind: 'paragraf', metin: '60.000 TL, maddeye yazıldığı yılın tutarı. Kabahatler Kanunu\'nun 17. maddesine göre idari para cezaları her takvim yılı başından geçerli olmak üzere, o yıl için ilan edilen yeniden değerleme oranında artırılarak uygulanıyor. Bakanlığın 2026 için ayrıca ilan ettiği bir tutara ulaşamadık; bu kuralla yapılmış hesap [[5199-sayili-kanun|5199 sayılı kanun ve 2026 idari para cezaları]] yazısındaki tabloda.' },
    {
      kind: 'tablo',
      basliklar: ['Fiil', 'Kanun maddesi', 'Kanun metnindeki ceza'],
      satirlar: [
        ['Ev hayvanını terk etmek', '14/n, 28/j', 'Hayvan başına 60.000 TL'],
        ['Belediye adına toplanan sahipsiz hayvanı bakımevi dışında bir yere bırakmak', '14/o, 28/j', 'Hayvan başına 50.000 TL'],
        ['Geçici 3. madde kapsamındaki köpeği sokağa terk etmek', 'Geçici 3', '30.000 TL'],
        ['Aynı fiilleri veteriner hekim ya da hayvan bakmakla görevli birinin işlemesi', '28', 'Ceza iki kat'],
      ],
    },

    { kind: 'baslik', metin: 'Hangi durumlar terk sayılıyor?' },
    { kind: 'paragraf', metin: 'En bilinen durum, sahipli bir kedi ya da köpeği sokağa, ormana ya da bir yol kenarına bırakmak. Mevzuatta bunun dışında da terk sayılan ya da terkle aynı başlıkta cezalandırılan durumlar var:' },
    {
      kind: 'liste',
      maddeler: [
        '**Bulunan hayvanını teslim almamak:** Kimliklendirme yönetmeliğine göre bulunan bir hayvanın daha önce sahipli olduğu anlaşılırsa önceki sahibine haber veriliyor ve hayvanı teslim alması için yetmiş iki saat süre tanınıyor. Tebligata rağmen hayvanını almaya gelmeyen kişi hayvanı terk etmiş sayılıyor.',
        '**Toplanan sahipsiz hayvanı başka yere bırakmak:** 2024\'te eklenen (o) bendi, yerel yönetimler adına toplanan sahipsiz hayvanları bakımevi dışında bir yere terk etmeyi ya da bakımevindeki köpekleri bakımevi dışında bir yere bırakmayı ayrıca yasaklıyor.',
        '**Geçici 3. madde kapsamındaki köpekler:** Kanunun geçici 3. maddesinde sayılan türlerin sahipleri hayvanlarını en yakın bakımevine bırakabiliyor; bu hayvanların sokağa terki hâlinde ayrı bir idari para cezası uygulanıyor. Ayrıntılar [[yasakli-kopek-irklari|yasaklı köpek ırkları]] yazısında.',
      ],
    },

    { kind: 'baslik', metin: 'Terk eden kişi yeniden hayvan sahiplenebilir mi?' },
    { kind: 'paragraf', metin: 'Bakımevinden sahiplenemiyor. Uygulama Yönetmeliği\'nin 37. maddesine göre **sahiplendiği kedi ya da köpeğini terk ettiği gerekçesiyle idari yaptırım uygulanan kişi üç yıl süreyle hayvan bakımevlerinden hayvan sahiplenemiyor.** Aynı yasak, bir takvim yılı içinde birden fazla kedi ya da köpeğini kaybeden ya da aynı hayvanını bir yıl içinde birden fazla kez kaybeden kişiye de uygulanıyor.' },
    { kind: 'paragraf', metin: 'Barınaktan sahiplenmenin diğer şartları [[barinaktan-kopek-sahiplenme|barınaktan köpek sahiplenme]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Hayvanına bakamayan sahip ne yapmalı?' },
    { kind: 'paragraf', metin: 'Mevzuat bakamayan sahibe iki yasal yol gösteriyor. Uygulama Yönetmeliği\'nin 10. maddesine göre ev hayvanı sahipleri hayvanlarını terk edemiyor; **yeniden sahiplendirme yapabiliyor ya da hayvanı hayvan bakımevine teslim edebiliyor.**' },
    {
      kind: 'liste',
      maddeler: [
        '**Yeniden sahiplendirmek:** Hayvan güvenilir bir yeni sahibe veriliyorsa sahip değişikliğinin kayda geçmesi gerekiyor. Kimliklendirme yönetmeliğine göre yeni sahip, Sahip Değişikliği Belgesi ile altmış gün içinde il veya ilçe müdürlüğüne ya da yetkili kuruma başvuruyor ve değişiklik veri tabanına işleniyor.',
        '**Bakımevine teslim etmek:** Yönetmelik, sahibinin öldüğü ya da hayvanına bakamayacağını bildirdiği durumlarda kedi ve köpekleri hayvan bakımevlerine kabul etmeyi yerel yönetimlerin görevleri arasında sayıyor. Hayvan Bakanlık sisteminde sahipsiz statüsüne alınıyor ve uygun olanlar yeniden sahiplendiriliyor.',
      ],
    },
    { kind: 'paragraf', metin: 'Kayıt bu iki yolda da belirleyici. Kedi ve köpeklerin dijital kimliklendirme yöntemleriyle kayıt altına aldırılması Uygulama Yönetmeliği\'nde sahibin görevleri arasında. Mikroçipin nasıl çalıştığı [[mikrocip-nedir|mikroçip nedir]] yazısında, kaydın nasıl yapıldığı [[petvet-kayit|PetVet kaydı]] yazısında.' },
    { kind: 'uyari', metin: 'Bırakma kararının arkasında hayvanın sağlık sorunu, saldırganlık ya da tuvalet alışkanlığı gibi bir davranış değişikliği varsa önce bir veteriner hekime danışmak önerilir. Hekim sorunun tıbbi bir nedeni olup olmadığını değerlendirebilir ve gerekiyorsa davranış uzmanına yönlendirebilir.' },

    { kind: 'baslik', metin: 'Kaybolan hayvan terk sayılır mı?' },
    { kind: 'paragraf', metin: 'Kaybolmak tek başına terk değil, ama sahibin bir bildirim yükümlülüğü var. Kimliklendirme yönetmeliğine göre **kayıtlı ev hayvanı kaybolursa yedi gün içinde, ölürse otuz gün içinde** sahibin durumu il veya ilçe müdürlüğüne ya da Bakanlıkça yetki verilmiş kuruma bildirmesi gerekiyor.' },
    { kind: 'paragraf', metin: 'Kayıp hayvanı bulan kişi onu sahiplenmek için başvurduğunda kayıtlarda sahipli olduğu anlaşılırsa sahibine haber veriliyor ve teslim alması için yetmiş iki saat süre tanınıyor. Bu sürede gelmeyen sahip, yukarıda anlatıldığı gibi hayvanı terk etmiş sayılıyor. Ayrıca bir yıl içinde birden fazla hayvanını ya da aynı hayvanını birden fazla kez kaybeden kişi de üç yıllık sahiplenme yasağına giriyor.' },

    { kind: 'baslik', metin: 'Terk edilmiş bir hayvan bulursanız ne yapılır?' },
    { kind: 'paragraf', metin: 'Kimliklendirme yönetmeliği iki ihtimali ayrı ayrı düzenliyor. Bulan kişi hayvanı **sahiplenmek istiyorsa** Ek-1\'deki beyannameyi doldurarak il veya ilçe müdürlüğüne kayıt yaptırıyor. Hayvanın önceden sahipli olduğu anlaşılırsa önceki sahibine haber veriliyor; bu bekleme süresinde hayvan, bulduğunu beyan eden kişiye yediemin olarak teslim ediliyor. Süre sonunda sahip gelmezse kayıt yeni sahip adına yapılıyor.' },
    { kind: 'paragraf', metin: 'Bulan kişi hayvanı **sahiplenmek istemiyorsa** terk edilen sahipli ev hayvanı, bakımevi bulunan en yakın belediye tarafından hayvan bakımevine götürülüyor. Hayvan yaralı ya da hasta görünüyorsa veteriner hekime ulaştırılması öncelikli. Bir terk olayını görenler için ilk başvuru adresi il veya ilçe tarım ve orman müdürlüğü; hayvana karşı suç niteliğindeki olaylar için [[hayvana-eziyet-cezasi|hayvana eziyetin cezası]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Terk cezasına itiraz edilebilir mi?' },
    { kind: 'paragraf', metin: '5199 sayılı kanun ödeme ve itiraz için ayrı bir süre koymuyor, bu nedenle Kabahatler Kanunu\'nun genel kuralları uygulanıyor:' },
    {
      kind: 'liste',
      maddeler: [
        '**İtiraz:** İdari para cezası kararına karşı, kararın tebliğinden itibaren en geç on beş gün içinde sulh ceza mahkemesine başvurulabiliyor. Bu süre içinde başvurulmazsa karar kesinleşiyor.',
        '**Ödeme:** Kanunlarında ödeme süresi düzenlenmemiş idari para cezaları tebliğden itibaren bir ay içinde ödeniyor. Bu süre içinde ödenirse cezadan **yüzde 25 indirim** yapılıyor.',
        '**Ödemek itiraz hakkını kaldırmıyor:** Kanun, ödeme yapılmasının kişinin karara karşı kanun yoluna başvurma hakkını etkilemediğini açıkça yazıyor.',
      ],
    },

    { kind: 'baslik', metin: 'İnsanlar hayvanlarını neden bırakıyor?' },
    { kind: 'paragraf', metin: 'Bilimsel çalışmalar bırakmanın çoğu zaman hayvandan değil sahibin hayatındaki değişikliklerden kaynaklandığını gösteriyor. Kopenhag Üniversitesi\'nden araştırmacıların Danimarka\'daki büyük bir barınağın 1996-2017 kayıtlarını incelediği çalışmada, köpekler için en sık bırakma gerekçeleri sahibin sağlığı (yüzde 29), hayvanın davranış sorunları (yüzde 23), barınma sorunları (yüzde 21) ve zaman yetersizliği (yüzde 14) oldu. Kedilerde sahibin sağlığı yüzde 32, barınma sorunları yüzde 26, davranış sorunları yüzde 25 ile öne çıktı.' },
    { kind: 'paragraf', metin: 'Kaydın önemi de ölçülmüş durumda. Ohio State Üniversitesi\'nin 53 barınağa giren 7.704 mikroçipli hayvanı incelediği çalışmada, sahibi bulunan başıboş hayvanlarda bu oran köpeklerde yüzde 74,1, kedilerde yüzde 63,5 oldu. Sahibin bulunamadığı durumların başlıca nedeni ise kayıttaki telefonun yanlış ya da kullanım dışı olmasıydı. Taşınma ya da numara değişikliğinde kaydın güncellenmesi bu yüzden önerilir.' },
  ],
  sss: [
    { soru: 'Kediyi ya da köpeği sokağa bırakmanın cezası ne kadar?', cevap: '5199 sayılı kanun metninde hayvan başına 60.000 TL idari para cezası öngörülüyor. Tutar her yıl yeniden değerleme oranıyla artırılarak uygulanıyor; ceza alan kişi ayrıca üç yıl süreyle hayvan bakımevlerinden hayvan sahiplenemiyor.' },
    { soru: 'Hayvan terk etmek hapis cezası gerektirir mi?', cevap: 'Hayır, terk tek başına bir kabahat ve idari para cezası gerektiriyor. Hapis cezaları kanunun 28/A maddesinde, hayvanı kasten öldürmek, işkence etmek ya da dövüştürmek gibi daha ağır fiiller için düzenleniyor.' },
    { soru: 'Bakamadığım hayvanı barınağa bırakabilir miyim?', cevap: 'Evet, bu yasal yollardan biri. Uygulama Yönetmeliği sahibinin hayvanına bakamayacağını bildirdiği durumlarda kedi ve köpekleri bakımevlerine kabul etmeyi yerel yönetimlerin görevleri arasında sayıyor. Diğer yol, hayvanı yeniden sahiplendirip sahip değişikliğini kayda geçirmek.' },
    { soru: 'Kaybolan hayvanımı bildirmezsem terk etmiş sayılır mıyım?', cevap: 'Kaybolma tek başına terk sayılmıyor, ama kayıtlı hayvanın kaybı yedi gün içinde il veya ilçe müdürlüğüne bildirilmesi gerekiyor. Hayvan bulunur, sahibine haber verilir ve tebligata rağmen yetmiş iki saat içinde teslim alınmazsa sahip hayvanı terk etmiş sayılıyor.' },
    { soru: 'Terk cezasına nasıl itiraz edilir?', cevap: 'Kararın tebliğinden itibaren en geç on beş gün içinde sulh ceza mahkemesine başvurularak itiraz ediliyor. Ceza bir ay içinde ödenirse yüzde 25 indirim uygulanıyor ve ödeme yapmak itiraz hakkını ortadan kaldırmıyor.' },
    { soru: 'Terk edilmiş bir köpek bulursam sahiplenebilir miyim?', cevap: 'Evet, beyanname doldurup il veya ilçe müdürlüğüne kayıt yaptırarak sahiplenilebiliyor. Hayvanın önceden sahipli olduğu anlaşılırsa önceki sahibine yetmiş iki saat süre veriliyor; sahip gelmezse kayıt bulan kişi adına yapılıyor.' },
  ],
  kontrolListesi: [
    'Hayvanın kaydı güncel mi?',
    'Kayıttaki telefon doğru mu?',
    'Kayıp yedi gün içinde bildirildi mi?',
    'Yeni sahip kaydı yaptırdı mı?',
    'Bakımevine teslim seçeneği arandı mı?',
    'Davranış sorunu hekime soruldu mu?',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete, Tarım ve Orman Bakanlığı',
      baslik: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği',
      yil: 2024,
      kunye: '13.12.2024, Sayı 32751',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/12/20241213-3.htm',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: 'Kedi, Köpek ve Gelinciklerin Kimliklendirilmesi ve Kayıt Altına Alınmasına Dair Yönetmelik',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=7&MevzuatNo=24414&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5326 sayılı Kabahatler Kanunu (madde 17 ve 27)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5326&MevzuatTertip=5',
    },
    {
      kurum: 'University of Copenhagen, Department of Veterinary and Animal Sciences',
      yazarlar: 'Jensen JBH, Sandøe P, Nielsen SS',
      baslik: 'Owner-Related Reasons Matter more than Behavioural Problems-A Study of Why Owners Relinquished Dogs and Cats to a Danish Animal Shelter from 1996 to 2017',
      dergi: 'Animals',
      yil: 2020,
      kunye: '10(6):1064',
      doi: '10.3390/ani10061064',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/32575574/',
    },
    {
      kurum: 'The Ohio State University, College of Veterinary Medicine',
      yazarlar: 'Lord LK, Ingwersen W, Gray JL, Wintz DJ',
      baslik: 'Characterization of animals with microchips entering animal shelters',
      dergi: 'Journal of the American Veterinary Medical Association',
      yil: 2009,
      kunye: '235(2):160-7',
      doi: '10.2460/javma.235.2.160',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/19601734/',
    },
  ],
};
