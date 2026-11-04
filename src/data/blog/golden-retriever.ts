import type { BlogYazi } from './types';

export const goldenRetriever: BlogYazi = {
  slug: 'golden-retriever',
  baslik: 'Golden Retriever: Karakteri, Bakımı ve Ömrü',
  ozet: 'Golden Retriever İngiltere kökenli bir av köpeği ırkı. Standarttaki karakteri, boyu ve tüyü ile İngiliz anketindeki ömür ve kanser verilerini anlatıyoruz.',
  kapakAlt:
    'Çimenlerde ağzında oyuncakla koşan golden retriever',
  kategori: 'Köpek',
  tarih: '2026-11-14',
  bloklar: [
    { kind: 'paragraf', metin: '**Golden Retriever, İngiltere kökenli bir toplayıcı av köpeğidir; ırk standardı onu uyumlu, zeki, nazik, arkadaş canlısı ve kendine güvenen bir köpek olarak tanımlıyor.** İngiltere\'de yapılan bir ankette bu ırkın medyan ölüm yaşı yaklaşık 12 yıl 3 ay görünüyor, ama ölümlerin %38,8\'i kanserden olmuş. Yani sevimli bir karakter ve uzun bir ömür beklentisi var, fakat sağlık takibi bu ırkta özellikle önemli.' },
    { kind: 'paragraf', metin: 'Aşağıda uluslararası ırk standardının söyledikleri, tüy ve günlük bakım, kilo ve hareket, ömre dair veriler ve ırkta en çok araştırılan sağlık konusu var. Burada bir teşhis ya da tedavi önerisi yok; sağlıkla ilgili her kaygı için veteriner hekime başvurulması gerekiyor.' },

    { kind: 'tablo', basliklar: ['Özellik', 'Irk standardına göre'], satirlar: [
      ['Köken', 'Büyük Britanya'],
      ['Grup', 'FCI 8. grup, retrieverler (toplayıcı av köpekleri)'],
      ['Erkek boyu (omuz yüksekliği)', '56-61 cm'],
      ['Dişi boyu (omuz yüksekliği)', '51-56 cm'],
      ['Renk', 'Altın sarısının ya da kremin her tonu; kızıl ve maun olmaz'],
      ['Tüy', 'Düz ya da dalgalı, saçaklı, yoğun ve su itici alt tüylü'],
    ]},

    { kind: 'baslik', metin: 'Irkın görünüşü ve kökeni' },
    { kind: 'paragraf', metin: 'Uluslararası Köpek Federasyonu\'nun (FCI) 111 numaralı standardına göre Golden Retriever Büyük Britanya kökenli ve tüfekli av köpeği olarak sınıflanıyor. Irk, 8. grupta, toplayıcı köpeklerin bölümünde yer alıyor. Yani yetiştirilme amacı avlanan hayvanı bulup getirmek.' },
    { kind: 'paragraf', metin: 'Standart genel görünümü dengeli, aktif, güçlü ve nazik ifadeli diye anlatıyor. Omuz yüksekliği erkeklerde 56-61 cm, dişilerde 51-56 cm olarak yazılmış. Tüy rengi için altın sarısının ya da kremin her tonu kabul ediliyor; kızıl ve maun renk ise istenmiyor. Göğüste yalnızca birkaç beyaz tüy hoş görülüyor.' },

    { kind: 'baslik', metin: 'Karakteri: standart ne diyor?' },
    { kind: 'paragraf', metin: 'Standardın davranış bölümü Golden Retriever\'ı yönlendirilmeye açık, zeki, doğal çalışma yeteneği olan, nazik, arkadaş canlısı ve kendine güvenen bir köpek olarak tarif ediyor. Yönlendirilmeye açık olmak, sahibiyle birlikte çalışmaya yatkın olmak demek. Bu da eğitimin ırkla birlikte gelen bir kolaylığı olabileceğini düşündürüyor.' },
    { kind: 'paragraf', metin: 'Aynı standart, saldırgan ya da aşırı çekingen köpekleri ırktan diskalifiye eden kusurlar arasında sayıyor. Yani böyle köpekler de çıkabiliyor ve bunlar ırkın istenen tipi sayılmıyor.' },
    { kind: 'yanilgi', baslik: '"Her Golden Retriever uysaldır"', metin: 'Standart bir ideali tarif eder, her köpeğin davranışını garanti etmez. Aynı standart saldırgan ya da aşırı çekingen köpekleri kusurlu sayıyor. Davranış bireyden bireye değişir; yavru köpeğin erken dönemde tanıştırılması ve eğitimi [[yavru-kopek-bakimi|yavru köpek bakımı]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Tüy ve günlük bakım' },
    { kind: 'paragraf', metin: 'Standarda göre tüy düz ya da dalgalı, saçaklı ve altında yoğun, su itici bir alt tüy var. Yoğun bir tüy düzenli taramayı gerektiriyor; tarama hem ölü tüyü almaya hem de cildi ve tüy dibini gözden geçirmeye fırsat veriyor. Tarama sırasında yeni bir kitle, kızarıklık ya da kabuklanma görülürse bunu veteriner hekime göstermek gerekiyor.' },
    { kind: 'paragraf', metin: 'Kulaklar da düzenli bakım isteyen bir bölge. Golden Retriever Yaşam Boyu Çalışması, dış kulak yolu iltihabını bu ırkta izlenen ikincil sağlık sonuçlarından biri olarak listeliyor. Kulakta koku, akıntı ya da kaşınma fark edilirse [[kopeklerde-kulak-enfeksiyonu|köpeklerde kulak enfeksiyonu]] yazısına bakılabilir, ama ev yöntemleriyle denemeden önce muayene gerekiyor. Rutin temizlik için [[kopek-kulagi-nasil-temizlenir|köpek kulağı nasıl temizlenir]] yazısı var.' },

    { kind: 'baslik', metin: 'Beslenme, kilo ve hareket' },
    { kind: 'paragraf', metin: 'Golden Retriever tüfekli av köpeği olarak yetiştirilmiş aktif bir ırk. Standart "aktif" ve "güçlü" diyor; bu da gün içinde düzenli hareket ve zihinsel uyaran ihtiyacını akla getiriyor. Hareketin süresi köpeğin yaşına, sağlığına ve veteriner hekimin önerisine göre belirleniyor.' },
    { kind: 'paragraf', metin: 'Kilonun ve mama miktarının köpeğin vücut durumuna göre veteriner hekimle birlikte belirlenmesi önerilir; ayrıntı için [[kopek-gunde-kac-gram-mama-yer|köpek günde kaç gram mama yer]] ve [[kopegim-fazla-kilolu-mu|köpeğim fazla kilolu mu]] yazılarına bakılabilir.' },

    { kind: 'baslik', metin: 'Ömrü ne kadar?' },
    { kind: 'paragraf', metin: 'İngiltere\'de Kennel Club\'ın 169 ırk için yürüttüğü bir ankette, ırk kulübü üyelerine yaklaşık 58.363 anket gönderildi. Yanıt oranı %24 oldu ve 15.881 ölüm değerlendirildi. Bu verilere dayanan tabloda Golden Retriever için 927 ölüm kayıtlı ve medyan ölüm yaşı 12,25 yıl, yani yaklaşık 12 yıl 3 ay olarak verilmiş.' },
    { kind: 'paragraf', metin: 'Bu rakamı dikkatli okumak gerekiyor. Anket ırk kulübü üyelerine yapıldı, yanıt oranı düşüktü ve yazarlar da sonuçların tüm ırk popülasyonunu temsil etmeyebileceğini belirtiyor. Bir köpeğin ömrü beslenmesine, kilosuna ve bakımına göre değişir; genel ırk karşılaştırması için [[kopekler-kac-yil-yasar|köpekler kaç yıl yaşar]] yazısı var.' },

    { kind: 'baslik', metin: 'Irkta kanser verileri' },
    { kind: 'paragraf', metin: 'Aynı anketin kanser verileri Golden Retriever için dikkat çekici. Tüm ırklarda ölümlerin %27\'si (15.881 ölümün 4.282\'si) kanserden olurken, Golden Retriever\'da 927 ölümün 360\'ı, yani %38,8\'i kansere bağlı bulundu. Bu bir köpeğin kanser olma olasılığı değil, ankete yansıyan ölümler içindeki kanserin payıdır.' },
    { kind: 'tablo', basliklar: ['Veri', 'Sonuç'], satirlar: [
      ['Anketteki tüm ırklarda kansere bağlı ölüm payı', '%27'],
      ['Golden Retriever\'da kansere bağlı ölüm payı', '%38,8 (927 ölümün 360\'ı)'],
      ['Yaşam Boyu Çalışması\'nda hemanjiyosarkom tanısı', '%7,65 (3.044 köpeğin 233\'ü)'],
      ['Yaşam Boyu Çalışması\'nda iç organ hemanjiyosarkomu', '%6,9 (3.044 köpeğin 211\'i)'],
    ]},
    { kind: 'paragraf', metin: 'Golden Retriever Yaşam Boyu Çalışması\'nda 2012-2015 arasında 6 ay ile 2 yaş arasındaki 3.044 Amerikalı Golden Retriever kayıt altına alındı. Çalışma bu köpekleri yıllar boyunca izleyerek beslenme, çevre, yaşam tarzı ve genetik etkenlerin kanser ve diğer hastalıklarla ilişkisini inceliyor. Öncelikli sonuçları hemanjiyosarkom, lenfoma, osteosarkom ve yüksek dereceli mast hücreli tümörler.' },
    { kind: 'paragraf', metin: 'Kan damarı hücrelerinden gelişen kötü huylu bir tümör olan hemanjiyosarkom, çalışmada 2022 Eylül\'ü itibarıyla 3.044 köpeğin 233\'ünde (%7,65) tanılanmış. Aynı çalışma, hemanjiyosarkomsuz kalma olasılığının cinsiyete ve kısırlaştırma durumuna göre farklı seyrettiğini bildiriyor, ama güven aralıkları geniş. Kısırlaştırma kararının veteriner hekimle birlikte, köpeğin tüm koşulları gözetilerek verilmesi önerilir; ayrıntı için [[kopek-ne-zaman-kisirlastirilmali|köpek ne zaman kısırlaştırılmalı]] yazısı var.' },
    { kind: 'yanilgi', baslik: '"Kanser her yerde Golden Retriever\'ın kaderidir"', metin: 'Veriler bölgeye göre farklı. Bir derlemeye göre hemanjiyosarkom ABD\'deki Golden Retrieverlarda yakın zamanda belirgin bir sorun olmuş; aynı derleme bu ırkta hemanjiyosarkomun İngiltere\'de özellikle sık görülmediğini belirtiyor. Derleme, Golden Retriever\'ın Avrupa ve Amerika altgruplarının genetik olarak birbirinden belirgin biçimde ayrıldığını da aktarıyor. Bölge farkı ne olursa olsun düzenli veteriner kontrolü gerekiyor.' },

    { kind: 'baslik', metin: 'Sahiplenirken neye bakılmalı?' },
    { kind: 'paragraf', metin: 'FCI standardı, ırkta üretimde yalnızca işlevsel ve klinik olarak sağlıklı, ırk tipine uygun yapıdaki köpeklerin kullanılmasını istiyor. Bu yüzden bir yavru alınırken ana babanın sağlık durumu ve davranışı hakkında sorular sormak makul bir adımdır. Yetiştiricinin bu soruları rahatça yanıtlaması ve sağlık bilgilerini paylaşması güven verici bir işaret.' },
    { kind: 'paragraf', metin: 'Barınaktan sahiplenme de bir seçenek; süreci [[barinaktan-kopek-sahiplenme|barınaktan köpek sahiplenme]] yazısında anlattık. Hangi yoldan olursa olsun, yeni köpeğin ilk veteriner kontrolü ve aşı takvimi için [[kopek-asi-takvimi|köpek aşı takvimi]] ile [[kedi-kopek-check-up-ne-zaman|check-up ne zaman yapılmalı]] yazılarına bakılabilir.' },

    { kind: 'uyari', metin: 'Köpekte yeni bir şişlik ya da kitle, ani halsizlik, çökme, solgunluk, iştah ya da kilo değişimi fark edilirse beklemeden veteriner hekime başvurulması gerekiyor. Bunların nedeni evde anlaşılamaz ve yalnızca muayene ile gerekirse yapılacak tetkiklerle belirlenir. Aniden kötüleşen bir durumda en yakın nöbetçi kliniğe ulaşılması önerilir; [[nobetci-veteriner|nöbetçi veteriner]] yazısında nasıl bulunacağı anlatılıyor.' },
  ],
  kontrolListesi: [
    'Tüyü düzenli taranıyor mu?',
    'Kulakları düzenli bakılıyor mu?',
    'Kilosu veterinerle izleniyor mu?',
    'Günlük hareketi yeterli mi?',
    'Yeni bir kitle fark edildi mi?',
    'Düzenli kontrolü yapılıyor mu?',
  ],
  sss: [
    { soru: 'Golden Retriever kaç yıl yaşar?', cevap: 'İngiltere\'deki bir ırk kulübü anketine dayanan tabloda Golden Retriever için medyan ölüm yaşı 12,25 yıl, yani yaklaşık 12 yıl 3 ay. Anketin yanıt oranı %24 olduğu için bu rakam kesin bir ortalama değil. Bireysel ömür bakıma, kiloya ve sağlık takibine göre değişiyor.' },
    { soru: 'Golden Retriever\'ın karakteri nasıldır?', cevap: 'FCI standardı onu yönlendirilmeye açık, zeki, nazik, arkadaş canlısı ve kendine güvenen bir köpek olarak tarif ediyor. Standart bir idealdir ve her köpeğin davranışını garanti etmez. Saldırgan ya da aşırı çekingen köpekler standartta kusur sayılıyor. Eğitim ve erken tanıştırma önemli.' },
    { soru: 'Golden Retriever\'ın boyu ne kadar olur?', cevap: 'FCI standardına göre omuz yüksekliği erkeklerde 56-61 cm, dişilerde 51-56 cm. Standartta kilo aralığı verilmiyor. İdeal kilo her köpekte vücut durumuna göre değerlendirildiği için veteriner hekimle birlikte izlenmesi önerilir.' },
    { soru: 'Golden Retriever hangi renklerde olur?', cevap: 'Standart, altın sarısının ya da kremin her tonunu kabul ediyor; kızıl ve maun renk ise olmaz. Göğüste yalnızca birkaç beyaz tüy hoş görülüyor. Bunun dışındaki renkler ya da renk kombinasyonları standartta kabul edilebilir sayılmıyor.' },
    { soru: 'Golden Retriever\'ın tüyü nasıldır?', cevap: 'Tüy düz ya da dalgalı, saçaklı ve altında yoğun, su itici bir alt tüy var. Yoğun tüy düzenli taramayı gerektiriyor. Tarama sırasında cilt ve tüy dibi de gözden geçirilebilir; yeni bir kitle, kızarıklık ya da kabuklanma fark edilirse veteriner hekime gösterilmesi önerilir.' },
    { soru: 'Golden Retriever\'larda kanser sık mı görülür?', cevap: 'İngiltere\'deki bir ankette Golden Retriever ölümlerinin %38,8\'i kansere bağlı bulundu; tüm ırklarda bu pay %27\'ydi. Bu, bir köpeğin kanser olma olasılığını göstermez. Yeni bir kitle ya da halsizlik gibi değişiklikler fark edilirse vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Golden Retriever\'ı ne zaman kısırlaştırmak gerekir?', cevap: 'Kısırlaştırma zamanı köpeğin cinsiyetine, yaşına ve yaşam koşullarına göre değişiyor ve kararı veteriner hekimle birlikte vermek gerekiyor. Ayrıntı için köpek ne zaman kısırlaştırılmalı yazısına bakılabilir.' },
  ],
  kaynaklar: [
    {
      kurum: 'Fédération Cynologique Internationale (FCI)',
      baslik: 'FCI-Standard N° 111: Golden Retriever',
      adres: 'https://www.fci.be/Nomenclature/Standards/111g08-en.pdf',
    },
    {
      kurum: 'Animal Health Trust, Kentford, Suffolk',
      yazarlar: 'Adams VJ, Evans KM, Sampson J, Wood JL',
      baslik: 'Methods and mortality results of a health survey of purebred dogs in the UK',
      dergi: 'Journal of Small Animal Practice',
      yil: 2010,
      kunye: '51(10):512-524',
      doi: '10.1111/j.1748-5827.2010.00974.x',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/21029096/',
    },
    {
      kurum: 'University of Cambridge, Queen\'s Veterinary School Hospital',
      yazarlar: 'Dobson JM',
      baslik: 'Breed-predispositions to cancer in pedigree dogs',
      dergi: 'ISRN Veterinary Science',
      yil: 2013,
      kunye: '2013:941275',
      doi: '10.1155/2013/941275',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/23738139/',
    },
    {
      kurum: 'Morris Animal Foundation',
      yazarlar: 'Labadie J, Swafford B, DePena M, Tietje K, Page R, Patterson-Kane J',
      baslik: 'Cohort profile: The Golden Retriever Lifetime Study (GRLS)',
      dergi: 'PLoS One',
      yil: 2022,
      kunye: '17(6):e0269425',
      doi: '10.1371/journal.pone.0269425',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/35679242/',
    },
    {
      kurum: 'Morris Animal Foundation; Utrecht University, Faculty of Veterinary Medicine',
      yazarlar: 'Hillman A, Swafford B, Delavenne C, Fieten H, Boerkamp K, Tietje K',
      baslik: 'Descriptive analysis of haemangiosarcoma occurrence in dogs enrolled in the Golden Retriever lifetime study',
      dergi: 'Veterinary and Comparative Oncology',
      yil: 2023,
      kunye: '21(4):700-708',
      doi: '10.1111/vco.12933',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/37635246/',
    },
  ],
};
