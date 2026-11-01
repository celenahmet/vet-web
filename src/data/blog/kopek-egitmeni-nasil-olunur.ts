import type { BlogYazi } from './types';

export const kopekEgitmeniNasilOlunur: BlogYazi = {
  slug: 'kopek-egitmeni-nasil-olunur',
  baslik: 'Köpek Eğitmeni Nasıl Olunur? Belge, Eğitim ve Şartlar',
  ozet: 'Köpek eğitim yeri açmak için uzmanlık belgesi ve veteriner hekim sözleşmesi aranıyor. Yönetmelik şartları, sertifika programları ve yöntem seçimi.',
  kapakAlt:
    'Parkta tasmalı köpeğe eğitim veren kişi',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Köpek eğitmeni olmak için, bir eğitim yeri açılacaksa, çalışma izni verecek kurumca onaylı bir uzmanlık belgesi gerekiyor.** Ev hayvanlarının eğitim yerlerini düzenleyen yönetmelik, bu belgeyi çalışma izni başvurusunun şartları arasında sayıyor. Belgenin hangi eğitimle alınacağını yönetmeliğin kendisi tarif etmiyor; bu yüzden başvurudan önce il müdürlüğüne sormak gerekiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda yönetmeliğin eğitim yerleri için aradığı şartları, üniversite sertifika programlarının neler öğrettiğini, eğitim yöntemi seçiminin köpeğin refahına etkisini ve eğitmenle veteriner hekimin sınırlarını anlatıyoruz. Yazı bir tanı ya da tedavi rehberi değildir; köpeğin sağlığıyla ilgili her şüphede veteriner hekime başvurmak gerekiyor.' },

    { kind: 'tablo', basliklar: ['Konu', 'Yönetmelikte ne var?'], satirlar: [
      ['Eğitim yeri', 'Veteriner hekim denetiminde faaliyet gösteren yer'],
      ['Çalışma izni başvurusu', 'Oda onaylı en az bir yıllık veteriner hekim sözleşmesi ve eğitimcinin uzmanlık belgesi'],
      ['Personel', 'Yeterli sayıda eğitim uzmanı ve bakıcı'],
      ['Yabancı uyruklu eğitimci', 'Eğitimci belgelerinin resmî makamlara onaylatılması şart'],
      ['Veteriner hekim', 'İş yerlerinde istihdamı zorunlu'],
    ]},

    { kind: 'baslik', metin: 'Yönetmelik eğitim yerini nasıl tanımlıyor?' },
    { kind: 'paragraf', metin: 'İlgili yönetmelik 8 Ekim 2011 tarihli ve 28078 sayılı Resmî Gazete\'de yayımlandı. Eğitim yerini, hayvan sahibinin isteği ya da ilgili makamların gerekli görmesi durumunda hayvanlara itaat, tuvalet terbiyesi, hırçın hayvanların sakinleştirilmesi, koruma, bekçilik, sportif ve avcılık gibi özellikler kazandırmak amacıyla, veteriner hekim denetiminde faaliyet gösteren yerler olarak tanımlıyor. 6 Nisan 2022 tarihli değişiklikle yönetmeliğin adı "Ev Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmelik" olarak değişti.' },
    { kind: 'paragraf', metin: 'Tanımın merkezinde veteriner hekim denetimi var. Yönetmelik kapsamında kurulan iş yerlerinde veteriner hekim istihdamı zorunlu tutuluyor. Yani eğitim yeri, eğitmenin tek başına yürüttüğü bir iş değil; veteriner hekimle birlikte çalışılan bir düzen olarak kurgulanıyor.' },
    { kind: 'paragraf', metin: '18 Şubat 2020 tarihli değişiklikle yeniden yazılan 6. madde, iş yeri açacak kişilerden çalışma izni için iki belge istiyor: muayenehane, klinik, poliklinik veya hayvan hastanesinde çalışan veteriner hekimle yapılmış, bölge veteriner hekimler odası onaylı ve en az bir yıllık sözleşme ile eğitim yerlerinde görev yapacak uzman eğitimcinin, çalışma izni verecek kurumca onaylı uzmanlık belgesi.' },
    { kind: 'paragraf', metin: 'Yönetmelik iş yeri açacak kişilere uygulanıyor. Ev ziyareti yapan bağımsız eğitmenler için aynı belge şartının nasıl işletildiği bu yazıda incelenen kaynaklardan anlaşılmıyor; bu durumda il müdürlüğüne danışmak gerekiyor.' },

    { kind: 'baslik', metin: 'Eğitim yerinde hangi şartlar aranıyor?' },
    { kind: 'paragraf', metin: 'Kedi ve köpek barınma ve eğitim yerleri için yönetmeliğin 13. maddesi şunları zorunlu tutuyor:' },
    { kind: 'liste', maddeler: [
      'Aynı arazi içinde veteriner hekim odası, karantina ünitesi, açık ve kapalı gezdirme alanı ile kapalı ve açık eğitim yerinin bulunması',
      'Kabul edilecek hayvanların aşı ve parazit ilaçlamasının yapılmış olması',
      'İki aylıktan küçük ve aşısı tamamlanmamış yavru köpeklerin kabul edilmemesi',
      'Hayvana hangi eğitimin verileceğinin bir tutanağa yazılması ve tutanağın hayvan sahibiyle birlikte imzalanması',
      'Yeterli sayıda eğitim uzmanı ve bakıcı istihdam edilmesi',
    ]},
    { kind: 'paragraf', metin: 'Aynı madde, bırakılan hayvan hastalanırsa sahibine bilgi verilerek tedavisinin yapılacağını, sahibine ulaşılamıyorsa iş yeri veteriner hekiminin kararının uygulanacağını söylüyor. Tedavi kararı eğitmene değil, sahibine; ulaşılamazsa veteriner hekime ait. Aşı dönemleri için [[kopek-asi-takvimi|köpek aşı takvimi]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Sertifika programları ne öğretiyor?' },
    { kind: 'paragraf', metin: 'Üniversitelerin sürekli eğitim merkezleri bu alanda program açabiliyor. Örnek olarak Ondokuz Mayıs Üniversitesi Sürekli Eğitim Merkezi\'nin Temmuz 2021 tarihli Köpek Eğitmenliği Eğitimi Sertifika Programı, 6 gün ve 48 saat sürdü ve köpek eğitimine ilgi duyan yetişkinlere açıktı. İçerikte vücut dilini ve ses tonunu kullanmak, topuk izleme, otur ve kal, yat ve kal komutları, sosyalizasyon ve köpeklerde tuvalet eğitimi gibi başlıklar yer alıyordu.' },
    { kind: 'paragraf', metin: 'Aynı duyuru, programın belgesini "Tarım ve Orman Bakanlığı kabul gören sertifika" olarak tanıtıyordu. Bu duyuru 2021 tarihlidir; bir belgenin bugün uzmanlık belgesi olarak kabul edilip edilmediğini yalnızca çalışma izni verecek kurum söyleyebilir. Program ücretlerinin ve tarihlerinin ilgili merkezin güncel duyurusundan kontrol edilmesi gerekiyor. Tuvalet eğitiminin temelleri için [[yavru-kopek-tuvalet-egitimi|yavru köpek tuvalet eğitimi]] yazımıza bakılabilir.' },

    { kind: 'baslik', metin: 'Eğitim yöntemi neden bu kadar önemli?' },
    { kind: 'paragraf', metin: 'Eğitmenin seçtiği yöntem köpeğin refahını doğrudan etkiliyor. Porto Üniversitesi\'nden Vieira de Castro ve ekibinin 2020\'de PLoS ONE\'da yayımlanan çalışmasında, 92 evcil köpek üç ödül tabanlı ve dört aversif tabanlı eğitim okulundan alındı. Aversif tabanlı yöntemleri yüksek oranda kullanan okullardaki köpekler eğitim sırasında daha fazla stresle ilişkili davranış gösterdi, daha sık gergin hâlde bulundu ve eğitim sonrası kortizol artışı daha yüksek oldu.' },
    { kind: 'paragraf', metin: 'Aversif yöntemleri düşük oranda kullanan okullardaki köpekler de ödül tabanlı okullardakilere göre daha fazla stres davranışı gösterdi ve daha sık gergin hâlde bulundu. Araştırmacılar bu sonuçlardan, aversif tabanlı yöntemlerin özellikle yüksek oranda kullanıldığında köpeklerin refahını hem eğitim içinde hem dışında zayıflattığı sonucuna vardı.' },
    { kind: 'yanilgi', baslik: '"Sert yöntem köpeği daha iyi eğitir"', metin: 'Porto çalışması, aversif yöntemlerin köpeğin refahını eğitim sırasında ve sonrasında olumsuz etkilediğini bildirdi. Merck Veterinary Manual da ağrı ya da korku yaratan tekniklerin kalıcı korkuya, kaygıya ve saldırganlığa yol açabileceğini belirtiyor ve bilimsel olarak doğrulanmış, zorlayıcı olmayan yöntemleri kullanan eğitmenlerin sahiplere değerli rehberlik sağladığını söylüyor.' },

    { kind: 'baslik', metin: 'Eğitmen ile veteriner hekimin sınırı nerede?' },
    { kind: 'paragraf', metin: 'Davranış sorunu olan bir köpekte eğitime başlamadan önce tıbbi nedenlerin dışlanması gerekiyor. Merck Veterinary Manual, bunu "gerekli" olarak tanımlıyor ve ağrının davranış sorunları için önemli bir risk etkeni olduğunu belirtiyor. Aynı kaynakta veteriner davranış hekimlerinin vakalarına bakan bir çalışmada hastaların yüzde 28 ile 82\'sinde ağrı belirtisi görüldüğü aktarılıyor.' },
    { kind: 'paragraf', metin: 'Bu nedenle eğitmenin görevi sorunu yorumlamak değil, sahibi doğru yere yönlendirmek. Evde yalnız kalamama gibi yaygın başlıklarda da önce veteriner hekim değerlendirmesi gerekiyor; ayrıntı için [[kopeklerde-ayrilik-kaygisi|köpeklerde ayrılık kaygısı]] yazısına bakılabilir. Yavru köpeğin sosyalleşme dönemini ve ilk aylarını [[yavru-kopek-bakimi|yavru köpek bakımı]] yazısında anlattık.' },
    { kind: 'uyari', metin: 'Köpek eğitim sırasında ağrı belirtisi gösteriyor, isteksizleşiyor ya da davranışı değişiyorsa çalışmayı sürdürmeden veteriner hekime başvurulması gerekiyor. Eğitmen teşhis koymaz, ilaç ya da tedavi önermez; bu kararlar köpeği muayene eden veteriner hekime aittir.' },

    { kind: 'baslik', metin: 'Eğitmen olmak isteyenler için yol haritası' },
    { kind: 'liste', maddeler: [
      'İl müdürlüğüne hangi uzmanlık belgesinin istendiğini sormak',
      'Üniversite sürekli eğitim merkezleri gibi kurumların programlarını içeriğiyle karşılaştırmak',
      'Ödül tabanlı, korku ve acı yaratmayan yöntemleri öğreten bir program seçmek',
      'İş yeri açılacaksa bölge veteriner hekimler odası onaylı bir veteriner hekim sözleşmesi yapmak',
      'Sağlık sorunu şüphesinde sahibi veteriner hekime yönlendirmeyi alışkanlık hâline getirmek',
    ]},
  ],
  kontrolListesi: [
    'Uzmanlık belgesi şartı sorulmuş mu?',
    'Veteriner hekim sözleşmesi var mı?',
    'Yöntem ödül tabanlı mı?',
    'Yavru ve aşı şartı biliniyor mu?',
    'Eğitim tutanağı yazılıyor mu?',
    'Sağlık şüphesinde yönlendirme var mı?',
  ],
  sss: [
    { soru: 'Köpek eğitmeni olmak için belge gerekir mi?', cevap: 'Eğitim yeri açılacaksa evet. Yönetmelik, eğitim yerlerinde görev yapacak uzman eğitimcinin, çalışma izni verecek kurumca onaylı uzmanlık belgesini çalışma izni başvurusunun şartı sayıyor. Belgenin hangi eğitimle alınacağını yönetmelik tarif etmiyor; ev ziyareti gibi çalışma biçimlerinde de il müdürlüğüne danışmak gerekiyor.' },
    { soru: 'Köpek eğitmenliği sertifika programı ne kadar sürer?', cevap: 'Süre programa göre değişiyor. Ondokuz Mayıs Üniversitesi Sürekli Eğitim Merkezi\'nin Temmuz 2021 tarihli programı 6 gün ve 48 saat sürdü. Güncel programların süresi, ücreti ve içeriği ilgili merkezin yeni duyurusundan kontrol edilmeli.' },
    { soru: 'Köpek eğitim yerinde veteriner hekim gerekli mi?', cevap: 'Evet. Yönetmelik eğitim yerini veteriner hekim denetiminde faaliyet gösteren yer olarak tanımlıyor ve bu iş yerlerinde veteriner hekim istihdamını zorunlu tutuyor. Çalışma izni başvurusunda da bölge veteriner hekimler odası onaylı, en az bir yıllık veteriner hekim sözleşmesi isteniyor.' },
    { soru: 'Eğitim yerine yavru köpek kabul edilir mi?', cevap: 'İki aylıktan küçük ve aşısı tamamlanmamış yavru köpekler barınma ve eğitim yerlerine kabul edilemiyor. Kabul edilecek hayvanların aşı ve parazit ilaçlamasının da yapılmış olması şart. Yavrunun hangi ortamlara ne zaman çıkabileceğini veteriner hekimle konuşmak gerekiyor.' },
    { soru: 'Hangi köpek eğitim yöntemi daha güvenli?', cevap: 'Ödül tabanlı yöntemler, refah açısından daha olumlu sonuçlarla ilişkili bulundu. 92 köpekle yapılan bir çalışmada aversif yöntemlerin, özellikle yüksek oranda kullanıldığında, köpeğin refahını eğitim içinde ve dışında zayıflattığı bildirildi. Merck Veterinary Manual da acı ya da korku yaratan tekniklerin kalıcı kaygıya yol açabileceğini belirtiyor.' },
    { soru: 'Eğitmen köpeğin sağlık sorununu teşhis edebilir mi?', cevap: 'Hayır, teşhis ve tedavi eğitmenin değil veteriner hekimin alanında kalıyor. Merck Veterinary Manual, davranış sorunlarında önce tıbbi nedenlerin dışlanmasının gerekli olduğunu ve ağrının önemli bir risk etkeni olduğunu belirtiyor. Şüphe durumunda sahibi veteriner hekime yönlendirmek gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Gıda, Tarım ve Hayvancılık Bakanlığı, T.C. Resmî Gazete',
      baslik: 'Ev ve Süs Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmelik (8.10.2011, sayı 28078)',
      yil: 2011,
      adres: 'https://www.resmigazete.gov.tr/eskiler/2011/10/20111008-4.htm',
    },
    {
      kurum: 'Tarım ve Orman Bakanlığı, T.C. Resmî Gazete',
      baslik: 'Ev ve Süs Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik (18.2.2020, sayı 31043), madde 4',
      yil: 2020,
      adres: 'https://www.resmigazete.gov.tr/eskiler/2020/02/20200218-4.htm',
    },
    {
      kurum: 'Tarım ve Orman Bakanlığı, T.C. Resmî Gazete',
      baslik: 'Ev ve Süs Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik (6.4.2022, sayı 31801), madde 1',
      yil: 2022,
      adres: 'https://www.resmigazete.gov.tr/eskiler/2022/04/20220406-17.htm',
    },
    {
      kurum: 'Ondokuz Mayıs Üniversitesi Sürekli Eğitim Merkezi (OMÜSEM)',
      baslik: 'Köpek Eğitmenliği Eğitimi Sertifika Programı (26-31 Temmuz 2021) duyuru metni',
      yil: 2021,
      adres: 'https://www.omu.edu.tr/sites/default/files/omusem_kopek_egitmenligi_egitimi_sertifika_programi_duyuru_metni.pdf',
    },
    {
      kurum: 'Porto Üniversitesi, Instituto de Biologia Molecular e Celular (IBMC) ve i3S',
      yazarlar: 'Vieira de Castro AC, Fuchs D, Morello GM, Pastur S, de Sousa L, Olsson IAS',
      baslik: 'Does training method matter? Evidence for the negative impact of aversive-based methods on companion dog welfare',
      dergi: 'PLoS One',
      yil: 2020,
      kunye: '15(12):e0225023',
      doi: '10.1371/journal.pone.0225023',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/33326450/',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Behavior Problems of Dogs',
      adres: 'https://www.merckvetmanual.com/behavior/behavior-of-dogs/behavior-problems-of-dogs',
    },
  ],
};
