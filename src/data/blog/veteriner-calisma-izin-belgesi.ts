import type { BlogYazi } from './types';

export const veterinerCalismaIzinBelgesi: BlogYazi = {
  slug: 'veteriner-calisma-izin-belgesi',
  baslik: 'Veteriner Hekim Çalışma İzin Belgesi Nasıl Alınır?',
  ozet: 'Veteriner hekim çalışma izin belgesini il müdürlüğü veriyor. Kimler için düzenlendiği, başvuru evrakı ve hekim ayrılınca belgeye ne olduğu yönetmelikle.',
  kapakAlt:
    'Masada belge dolduran veteriner hekim, yanında taşıma kafesindeki kedi',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-11-15',
  bloklar: [
    { kind: 'paragraf', metin: '**Veteriner hekim çalışma izin belgesini il müdürlüğü düzenliyor; belge, ruhsat verilmiş bir muayenehane ya da poliklinikte görev yapan her hekim için, sorumlu hekim dahil, ayrı ayrı çıkarılıyor.** Dayanağı 2011 yılında yayımlanan Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği.' },
    { kind: 'paragraf', metin: 'Aşağıda belgeyi kimin verdiğini, kimler için düzenlendiğini, başvuruda istenen evrakı, belgesiz çalışmanın sonuçlarını ve hekim ayrıldığında belgeye ne olduğunu yönetmelik maddeleriyle topladık. Klinik açma sürecinin bütününü [[veteriner-klinigi-acmak|veteriner kliniği açmak]] yazımızda anlattık. Buradaki bilgiler yalnızca muayenehane ve poliklinikler için geçerli.' },

    { kind: 'tablo', basliklar: ['Belge', 'Kime düzenlenir', 'Kim düzenler'], satirlar: [
      ['Sorumlu Veteriner Hekim Belgesi', 'Muayenehane ya da polikliniğin sorumlu hekimine', 'İl müdürlüğü'],
      ['Veteriner Hekim Çalışma İzin Belgesi', 'Kuruluşta görev yapan her hekime, sorumlu hekim dahil', 'İl müdürlüğü'],
      ['Yardımcı Sağlık Hizmetleri Personeli Çalışma İzin Belgesi', 'Veteriner sağlık teknikeri, teknisyeni, laborant', 'İl müdürlüğü'],
    ]},

    { kind: 'baslik', metin: 'Çalışma izin belgesi nedir, kim verir?' },
    { kind: 'paragraf', metin: 'Yönetmeliğin 11. maddesine göre ruhsat verilmiş muayenehane ve polikliniğin sorumlu hekimine Sorumlu Veteriner Hekim Belgesi, kuruluşta görev yapan hekimlere ise ayrı ayrı Veteriner Hekim Çalışma İzin Belgesi düzenleniyor. Belgeleri il müdürlüğü, yani il gıda, tarım ve hayvancılık müdürlüğü veriyor ve birer örneğini kendi arşivinde saklıyor.' },
    { kind: 'paragraf', metin: 'Ruhsat verilmiş kuruluştaki hekimlerin adı ve soyadı, kuruluşun adresi, ruhsat tarihi ve numarası ayrıca bölge veteriner hekimler odasına yazıyla bildiriliyor. Yani belge hem il müdürlüğünün hem de odanın kayıtlarında görünüyor.' },

    { kind: 'baslik', metin: 'Belge kimler için düzenlenir?' },
    { kind: 'paragraf', metin: 'Muayenehane tek bir hekim tarafından açılabildiği gibi en fazla üç hekim tarafından da açılabiliyor. Ruhsatlı hekim, kendisi sorumlu hekim olmak şartıyla iki hekimle iş akdi yapabiliyor ve sorumlu hekim dahil her hekime ayrı çalışma izin belgesi veriliyor.' },
    { kind: 'paragraf', metin: 'Poliklinikte durum aynı: kuruluşu açan hekim, kendisi sorumlu hekim olmak şartıyla en az üç hekimle iş akdi yapıyor ve her hekime ayrı belge düzenleniyor. Poliklinik tanımı da en az dört hekimin bir araya gelerek açtığı muayenehaneler bütünü. İki kuruluş türünün farkını [[muayenehane-poliklinik-hastane-farki|muayenehane, poliklinik ve hastane farkı]] yazımızda bulabilirsiniz.' },

    { kind: 'baslik', metin: 'Belgeye giden yol: önce ruhsat' },
    { kind: 'paragraf', metin: 'Belge ruhsatlı kuruluşa bağlı düzenlendiği için süreç ruhsat başvurusuyla başlıyor. Muayenehane açmak isteyen hekim, dilekçesine ekleyeceği dosyayla il müdürlüğüne başvuruyor. Belgeler incelendikten ve yer yerinde görüldükten sonra yönetmeliğe uygun bulunan muayenehaneye ruhsat veriliyor. Başvuru dosyasında şunlar yer alıyor:' },
    { kind: 'liste', maddeler: [
      '**Diploma:** Diploma ya da mezuniyet belgesinin aslı veya kurum onaylı sureti',
      '**İhtisas:** Varsa ihtisası gösteren belge',
      '**Kimlik ve ikametgâh:** T.C. kimlik numarası beyanı ve ikametgâh adresi beyanı',
      '**Fotoğraf:** İkişer adet',
      '**Plan:** Teknik resim kurallarına göre hazırlanmış plan örneği ve muayenehanenin adresi',
      '**Oda kaydı:** Bölge veteriner hekimler odasından alınan oda kayıt belgesi',
    ]},
    { kind: 'paragraf', metin: 'Muayenehane açacak hekimde aranan şartlar da yönetmelikte sayılıyor: T.C. vatandaşı olmak ya da 2527 sayılı Kanunun sağladığı haklara sahip olmak, Türkiye\'deki veteriner fakültelerinden birinden mezun olmak (yabancı diploma için denklik belgesi gerekiyor) ve mesleğin icrasına engel bir hali bulunmamak. Hekimin kuruluşa katılırken hangi evrakı sunacağı ise yönetmelik metninde ayrıca sayılmıyor; güncel işleyiş için il müdürlüğüne danışmak önerilir.' },

    { kind: 'baslik', metin: 'Oda kaydı ve mesleğe engel haller' },
    { kind: 'paragraf', metin: 'Başvuruda bölge veteriner hekimler odasından alınan kayıt belgesi isteniyor. 6343 sayılı Kanunun 17. maddesi de mesleğini serbest olarak icra eden hekimlerin bir ay içinde o il veya mıntaka odasına yazılmasını ve üyelik görevlerini yerine getirmesini öngörüyor.' },
    { kind: 'paragraf', metin: 'Aynı kanunun 6. maddesi mesleğin icrasına engel halleri sayıyor. Bunların arasında zimmet, rüşvet, dolandırıcılık gibi suçlardan hapis cezasına mahkûm olmak ve Haysiyet Divanı kararıyla meslekten men edilmek var. Bu engellerden biri varsa hekim muayenehane açamıyor.' },

    { kind: 'baslik', metin: 'Sorumlu veteriner hekim belgesi ne işe yarar?' },
    { kind: 'paragraf', metin: 'Her muayenehane ve poliklinikte hekimlerden biri sorumlu hekim olarak görevlendiriliyor. Kuruluşun işleyişi ve denetimiyle ilgili işlemlerde il müdürlüğünün ve Bakanlığın birinci derecede muhatabı bu hekim. Sorumlu hekim adına aynı zamanda çalışma izin belgesi de düzenleniyor. Görevinden ayrılmak istediğinde ya da görevine son verilmek istendiğinde bunun bir hafta öncesinden il müdürlüğüne bildirilmesi gerekiyor.' },

    { kind: 'baslik', metin: 'Belge olmadan çalışmak mümkün mü?' },
    { kind: 'paragraf', metin: 'Hayır. Yönetmeliğin 22. maddesi iki ayrı kısıtlama koyuyor: muayenehane ve poliklinikler il müdürlüğünden ruhsat almadan faaliyete geçemiyor, il müdürlüğünce çalışma izin belgesi verilmemiş hekim de çalıştırılamıyor.' },
    { kind: 'yanilgi', baslik: '"Diplomam ve oda kaydım var, kliniğe hemen çalışmaya başlayabilirim"', metin: 'Diploma ve oda kaydı gerekli ama yeterli değil. Yönetmeliğe göre il müdürlüğünce çalışma izin belgesi verilmemiş veteriner hekim çalıştırılamıyor.' },
    { kind: 'paragraf', metin: 'Aynı madde çalışma düzenini de sınırlıyor. Bir muayenehane veya polikliniğin görevli hekimi başka bir muayenehane veya poliklinikte çalışamıyor. Muayenehanesi olan hekim aynı zamanda başka bir poliklinikte çalışamıyor, poliklinikte çalışan hekim de ayrıca muayenehane açamıyor.' },
    { kind: 'paragraf', metin: 'Yönetmeliğe aykırı davrananlar hakkında 5996 sayılı Kanunun 36. ve 6343 sayılı Kanunun 67. maddelerine göre işlem yapılıyor. Kuruluşlar ayrıca yılda en az bir kez il müdürlüğü hekimlerince denetleniyor.' },

    { kind: 'baslik', metin: 'Hekim ayrılırsa belgeye ne olur?' },
    { kind: 'paragraf', metin: 'Sorumlu hekim, görevine son verilen ya da ayrılan hekimin ve yardımcı sağlık personelinin çalışma izin belgelerini en geç bir hafta içinde il müdürlüğüne iade etmekle yükümlü.' },
    { kind: 'paragraf', metin: 'Meslekten men cezası kesinleşen hekimin belgesine ise il müdürlüğü ceza süresince el koyuyor. Hekimin kendi adına muayenehane ruhsatı varsa o da el konuluyor ve muayenehanenin faaliyeti son buluyor. Ceza süresi bitince el konulan belgeler sahiplerine iade ediliyor.' },

    { kind: 'baslik', metin: 'Yardımcı sağlık personeli için ayrı belge var' },
    { kind: 'paragraf', metin: 'Veteriner sağlık teknikeri, teknisyeni ya da laborant çalıştırmak isteyen hekim, il müdürlüğüne dilekçeyle başvuruyor; personelin diploma veya mezuniyet belgesinin aslını ya da onaylı örneğini, imzalı protokolün bir nüshasını ve iki resmi sunuyor. İş akdinin noter tasdikli olması gerekiyor. Uygun bulunursa personel adına Yardımcı Sağlık Hizmetleri Personeli Çalışma İzin Belgesi düzenleniyor ve bu belge olmadan personel çalıştırılamıyor. Mesleğin kapsamını [[veteriner-teknikeri-ne-is-yapar|veteriner teknikeri ne iş yapar]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Hasta sahibi belgeyi nasıl görebilir?' },
    { kind: 'paragraf', metin: 'Yönetmelik belgelerin görünür yerde durmasını şart koşuyor. Muayenehanede veteriner hekim odasında, poliklinikte bekleme odasında; ruhsat, sorumlu hekim belgesi ve çalışma izin belgeleri hasta sahiplerinin görebileceği bir yere asılıyor. Aynı yerde, bölge odasının o yıla ait asgari ücret tarifesinden az olmayacak şekilde belirlenen ücret tarifesi de bulunuyor.' },
    { kind: 'paragraf', metin: 'Bu, kliniğin ve hekimin kayıtlı çalıştığını görmenin pratik bir yolu. Klinik seçerken bakılacak diğer ölçüleri [[veteriner-klinigi-nasil-secilir|veteriner kliniği nasıl seçilir]], tarifenin ne anlama geldiğini [[asgari-ucret-tarifesi-nedir|asgari ücret tarifesi]] yazımızda bulabilirsiniz.' },
  ],
  kontrolListesi: [
    'Diploma ve oda kaydı hazır mı?',
    'Kuruluşun ruhsatı alındı mı?',
    'Her hekim için izin belgesi var mı?',
    'Sorumlu hekim belirlendi mi?',
    'Belgeler görünür yere asıldı mı?',
    'Ayrılanın belgesi iade edildi mi?',
  ],
  sss: [
    { soru: 'Veteriner hekim çalışma izin belgesini kim verir?', cevap: 'Belgeyi il müdürlüğü, yani il gıda, tarım ve hayvancılık müdürlüğü veriyor. Belge, ruhsat verilmiş muayenehane ya da poliklinikte görev yapan hekimler için ayrı ayrı düzenleniyor ve bir örneği il müdürlüğünde saklanıyor.' },
    { soru: 'Belge olmadan veteriner hekim çalışabilir mi?', cevap: 'Hayır, çalışamaz. Yönetmeliğin 22. maddesi, il müdürlüğünce çalışma izin belgesi verilmemiş veteriner hekimin çalıştırılamayacağını söylüyor. Aykırı davrananlar hakkında 5996 sayılı Kanunun 36. ve 6343 sayılı Kanunun 67. maddelerine göre işlem yapılıyor.' },
    { soru: 'Belge her hekim için ayrı mı düzenlenir?', cevap: 'Evet, ayrı düzenleniyor. Muayenehane ve poliklinikte görev yapan her hekime, sorumlu hekim dahil, ayrı belge veriliyor. Sorumlu hekim bunun yanında Sorumlu Veteriner Hekim Belgesi de alıyor.' },
    { soru: 'Hekim işten ayrılırsa belge ne olur?', cevap: 'Belge il müdürlüğüne iade ediliyor. Sorumlu hekim, ayrılan ya da görevine son verilen hekimin belgesini en geç bir hafta içinde iade etmekle yükümlü. Sorumlu hekimin kendisi ayrılacaksa bunu bir hafta öncesinden il müdürlüğüne bildirmesi gerekiyor.' },
    { soru: 'Başvuruda oda kayıt belgesi gerekir mi?', cevap: 'Muayenehane ruhsatı başvurusunda gerekiyor. Yönetmelik, bağlı olunan bölge veteriner hekimler odasından alınan oda kayıt belgesinin aslını ya da il müdürlüğü yetkililerince onaylı suretini istiyor. 6343 sayılı Kanun da serbest çalışan hekimin bir ay içinde odaya yazılmasını öngörüyor.' },
    { soru: 'Veteriner teknikeri için de çalışma izni gerekir mi?', cevap: 'Evet, ayrı bir belge gerekiyor. İl müdürlüğünce düzenlenmiş yardımcı sağlık hizmetleri personeli çalışma izin belgesi olmadan veteriner sağlık teknikeri, teknisyeni veya laborant çalıştırılamıyor. İş akdinin de noter tasdikli olması gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: 'Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği (madde 5, 6, 8, 11, 12, 13, 21, 22, 23)',
      yil: 2011,
      adres: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=15393&MevzuatTur=7&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği (15 Ekim 2011, sayı 28085)',
      yil: 2011,
      adres: 'https://www.resmigazete.gov.tr/eskiler/2011/10/20111015-2.htm',
    },
    {
      kurum: 'Türk Veteriner Hekimleri Birliği',
      baslik: '6343 sayılı Veteriner Hekimliği Mesleğinin İcrasına, Türk Veteriner Hekimleri Birliği ile Odalarının Teşekkül Tarzına ve Göreceği İşlere Dair Kanun (madde 6 ve 17)',
      adres: 'https://tvhb.org.tr/wp-content/uploads/2019/03/6343-sayili-kanun.pdf',
    },
  ],
};
