import type { BlogYazi } from './types';

export const almanKurdu: BlogYazi = {
  slug: 'alman-kurdu',
  baslik: 'Alman Kurdu: Özellikleri, Eğitimi ve Ömrü',
  ozet: 'Alman kurdu çalışmak için geliştirilmiş orta boy bir çoban köpeği. Ölçüleri, huyu, eğitimi, ömrü ve sık görülen sağlık konuları bu yazıda.',
  kapakAlt:
    'Ormanlık patikada tasmasıyla yürüyen Alman kurdu',
  kategori: 'Köpek',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Alman kurdu, uluslararası ırk standardına göre erkeği 60-65 cm boyunda ve 30-40 kg, dişisi 55-60 cm boyunda ve 22-32 kg olan, çalışmak için geliştirilmiş orta boy bir çoban köpeğidir.** Birleşik Krallık\'ta birinci basamak kliniklerin kayıtlarıyla yapılan bir çalışmada ırkın ortanca ömrü 10,3 yıl bulundu.' },
    { kind: 'paragraf', metin: 'Aşağıda ırkın standardındaki ölçüleri, kökenini, huyunu, eğitim ve sosyalleşme konusunda uzman kuruluşların görüşünü, ömrünü ve kayıtlarda sık görünen sağlık konularını bulacaksınız. Türkiye\'de "Alman kurdu" denen ırkın standarttaki adı Deutscher Schäferhund, yani German Shepherd Dog; Fédération Cynologique Internationale (FCI) onu 1. grupta, çoban köpekleri arasında sınıflıyor.' },

    { kind: 'tablo', basliklar: ['Ölçü', 'Erkek', 'Dişi'], satirlar: [
      ['Omuz yüksekliği', '60-65 cm', '55-60 cm'],
      ['Ağırlık', '30-40 kg', '22-32 kg'],
      ['Gövde uzunluğu', 'Omuz yüksekliğinden yaklaşık %10-17 fazla', 'Omuz yüksekliğinden yaklaşık %10-17 fazla'],
    ]},

    { kind: 'baslik', metin: 'Irk ne için ve nasıl geliştirildi?' },
    { kind: 'paragraf', metin: 'Irkın düzenli yetiştiriciliği 1899\'da Almanya\'da kurulan bir dernekle, Verein für Deutsche Schäferhunde ile başladı. Derneğin kayıtlarına göre irk, o dönemde var olan orta ve güney Almanya çoban köpeklerinden, yüksek başarıya yatkın bir çalışma köpeği yaratma hedefiyle geliştirildi.' },
    { kind: 'paragraf', metin: 'FCI standardı ırkın kullanım amacını "çok yönlü çalışma, çobanlık ve hizmet köpeği" olarak yazıyor. Yani Alman kurdu süs ya da yalnızca eşlik için değil, görev almak için şekillenmiş bir ırktır. Bu köken, hem huyunu hem de günlük ihtiyaçlarını anlamanın en iyi başlangıcı.' },

    { kind: 'baslik', metin: 'Beden yapısı, tüy ve renk' },
    { kind: 'paragraf', metin: 'Standart köpeği orta boy, hafifçe uzun gövdeli, güçlü ve kaslı olarak tarif ediyor. Kulaklar dik ve sivri durur, burun siyah olmalıdır. Diş sayısı 42, ısırış ise makas ısırıştır.' },
    { kind: 'paragraf', metin: 'Tüy iki biçimde yetiştiriliyor: çift katlı tüy ve uzun çift katlı tüy. İkisinde de alt tüy bulunması gerekiyor. Renkler siyah ile kızıl kahverengi, kahverengi ve sarıdan açık griye değişen işaretler, tek renk siyah, koyu gölgeli gri ve siyah semer ile maske olarak sayılıyor. Beyaz renk standartta kabul edilmiyor.' },

    { kind: 'baslik', metin: 'Huy: standart ne diyor?' },
    { kind: 'paragraf', metin: 'Standarda göre Alman kurdu karakter bakımından dengeli ve güçlü sinirli, kendinden emin, doğal ve heyecanlandırıldığı durumlar dışında iyi huylu olmalı. Ayrıca dikkatli ve memnun etmeye istekli olması bekleniyor. Aynı metin köpeğin eş, bekçi, koruma, hizmet ve çoban köpeği olarak uygun olabilmesi için içgüdüsel davranış, dayanıklılık ve özgüvenle donanmış olmasını istiyor.' },
    { kind: 'yanilgi', baslik: '"Alman kurdu doğuştan saldırgandır"', metin: 'Standart tam tersini yazıyor: zayıf karakterli, zayıf sinirli ve ısıran köpekler ırk standardında diskalifiye sebebi. Yani saldırganlık ırkın tarifi değil, istenmeyen bir kusurdur. Ama aşağıda göreceğiniz gibi kayıtlarda saldırganlık da görülüyor; bu yüzden yetiştirici seçimi, sosyalleşme ve doğru eğitim önem taşıyor.' },

    { kind: 'baslik', metin: 'Eğitim ve sosyalleşme' },
    { kind: 'paragraf', metin: 'Standardın "dikkatli ve memnun etmeye istekli" tarifi, ırkın eğitime uygun bir yapıyla geliştirildiğini gösteriyor. Eğitim yöntemi konusunda ise Amerikan Veteriner Davranış Hekimleri Derneği (AVSAB) tutumu açık: köpek eğitiminin her alanında ve davranış sorunlarının ele alınmasında yalnızca ödüle dayalı yöntemlerin kullanılması öneriliyor. Elektronik tasma, boğma zinciri ve fiziksel ya da psikolojik cezayı da kapsayan caydırıcı yöntemlerin hiçbir durumda kullanılmaması gerektiği belirtiliyor.' },
    { kind: 'paragraf', metin: 'AVSAB\'ın ayrı bir görüş bildirisi de yavru köpeklerde sosyalleşmenin gerekliliğine dikkat çekiyor ve aşı programlarının yavru sınıflarını nasıl etkilediği sorusunu ele alıyor. Hangi yaşta, hangi aşı durumunda yavru sınıfına başlanabileceği için veteriner hekime danışılması gerekiyor; aşı takvimini [[kopek-asi-takvimi|köpek aşı takvimi]] yazımızda özetledik.' },
    { kind: 'paragraf', metin: 'Yavru köpek döneminin genel bakımı için [[yavru-kopek-bakimi|yavru köpek bakımı]], dışarı çıkış kuralları için [[kopek-gezdirme-kurallari|köpek gezdirme kuralları]], evde yalnız kalma sıkıntısı için [[kopeklerde-ayrilik-kaygisi|köpeklerde ayrılık kaygısı]] yazılarına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Alman kurdu kaç yıl yaşar?' },
    { kind: 'paragraf', metin: 'Royal Veterinary College\'ın VetCompass programı kapsamında 2013 yılında birinci basamak veteriner bakımındaki Alman kurtlarını inceleyen çalışmada ortanca ömür 10,3 yıl bulundu. Çeyrekler arası aralık 8,0-12,1 yıl, kayıtlardaki en kısa ve en uzun yaşam ise 0,2 ve 17,0 yıldı. Bu bir ortalama sınırı değil, o köpek grubunun ortasıdır; tek bir köpeğin ömrünü söylemez.' },
    { kind: 'paragraf', metin: 'Çalışmada en sık ölüm nedenleri kas-iskelet sistemi sorunları (%16,3) ve ayağa kalkamama (%14,9) olarak kaydedildi. Irklar arası genel ömür karşılaştırması için [[kopekler-kac-yil-yasar|köpekler kaç yıl yaşar]] yazısına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Kayıtlarda sık görülen sağlık konuları' },
    { kind: 'paragraf', metin: 'Aynı çalışmada Alman kurtlarında en sık kaydedilen beş sorun sırayla dış kulak iltihabı (131 köpek), osteoartrit, ishal, fazla kilo ve saldırganlık oldu. Saldırganlık erkeklerde dişilere göre daha sık görüldü.' },
    { kind: 'tablo', basliklar: ['Kayıtlı sorun', 'Oran'], satirlar: [
      ['Osteoartrit (eklem kireçlenmesi)', '%5,54'],
      ['İshal', '%5,24'],
      ['Fazla kilo ve obezite', '%5,18'],
      ['Saldırganlık', '%4,76'],
    ]},
    { kind: 'paragraf', metin: 'Bu oranlar Birleşik Krallık\'taki köpekler için ve veteriner hekime getirilmiş vakalara göre; Türkiye için aynı oranlar beklenmemeli, yön göstermesi açısından değerlidir. Kilo ve kulak konularında [[kopegim-fazla-kilolu-mu|köpeğim fazla kilolu mu]] ve [[kopeklerde-kulak-enfeksiyonu|köpeklerde kulak enfeksiyonu]] yazılarını da okuyabilirsiniz.' },

    { kind: 'baslik', metin: 'Kalça displazisi ve yetiştirici seçimi' },
    { kind: 'paragraf', metin: 'Kalça displazisi kalıtsal bir hastalık; çevresel ve epigenetik etkenler de rol oynuyor. Zürih ve Bern üniversitelerinden araştırmacıların İsviçre\'de 1995-2016 arasındaki röntgen kayıtlarına bakan çalışması, röntgene dayalı seçimin yaygınlığı düşürebildiği bilgisini destekledi: röntgeni çekilen Alman çoban köpeklerinde kalça displazisi oranı 1995-1999 döneminde %46 iken 2010-2016 döneminde %18\'e indi.' },
    { kind: 'paragraf', metin: 'Aynı çalışma bir sınırlamayı da açıkça yazıyor: Alman çoban köpeklerinin yalnızca %31\'inin röntgeni çekilmişti ve bu yüzden gerçek yaygınlık hakkında kesin sonuç çıkarılamıyor. Pratikte bu, bir yavru alırken anne babanın kalça değerlendirmesinin yapılıp yapılmadığını yetiştiriciye sormanın anlamlı olduğunu gösteriyor. Standart da şekil bozukluğu olan köpekleri diskalifiye sayıyor. Satışa ilişkin kuralları [[kedi-kopek-satmak-yasak-mi|kedi ve köpek satmak yasak mı]] yazısında, sahiplenme seçeneğini [[barinaktan-kopek-sahiplenme|barınaktan köpek sahiplenme]] yazısında anlattık.' },
    { kind: 'uyari', metin: 'Köpek ayağa kalkmakta zorlanıyor, topallıyor, merdiven ya da sıçramadan kaçınıyorsa bunun nedenini evde tahmin etmek mümkün değil. Muayene ve gerekirse röntgen için veteriner hekime başvurulması gerekiyor. Ağrı kesici dahil hiçbir ilacın veteriner hekim önerisi olmadan verilmemesi önerilir.' },
  ],
  kontrolListesi: [
    'Yetiştiricide kalça sonucu var mı?',
    'Yavru sosyalleşme planı var mı?',
    'Ödüle dayalı eğitim seçildi mi?',
    'Kilo düzenli tartılıyor mu?',
    'Kulaklar düzenli kontrol ediliyor mu?',
    'Veteriner kontrolü planlandı mı?',
  ],
  sss: [
    { soru: 'Alman kurdu kaç kilo olur?', cevap: 'FCI standardına göre erkek Alman kurdu 30-40 kg, dişi 22-32 kg olmalı. Omuz yüksekliği erkekte 60-65 cm, dişide 55-60 cm. Standart bu ölçülerden 1 cm\'den fazla büyük ya da küçük köpekleri diskalifiye sayıyor.' },
    { soru: 'Alman kurdu kaç yıl yaşar?', cevap: 'Birleşik Krallık\'ta birinci basamak kliniklerin kayıtlarına dayanan bir çalışmada Alman kurtlarının ortanca ömrü 10,3 yıl bulundu. Çeyrekler arası aralık 8,0-12,1 yıldı. Bu rakam bir grubun ortasıdır, tek bir köpeğin ömrünü belirlemez.' },
    { soru: 'Alman kurdu saldırgan bir ırk mı?', cevap: 'Irk standardı dengeli, kendinden emin ve iyi huylu bir köpek istiyor; ısıran, zayıf sinirli köpekleri diskalifiye sayıyor. Birleşik Krallık kayıtlarında saldırganlık ise en sık beş sorun arasındaydı ve erkeklerde daha yaygındı. Davranış sorununda veteriner hekime başvurulması gerekiyor.' },
    { soru: 'Alman kurdu nasıl eğitilmeli?', cevap: 'AVSAB, köpek eğitiminin her alanında yalnızca ödüle dayalı yöntemleri öneriyor ve caydırıcı yöntemlerin hiçbir durumda kullanılmamasını istiyor. Standart ırkı dikkatli ve memnun etmeye istekli olarak tarif ettiği için bu yaklaşım ırkın yapısıyla da uyumlu.' },
    { soru: 'Alman kurdunda hangi sağlık sorunları sık görülür?', cevap: 'Birleşik Krallık kayıtlarında en sık dış kulak iltihabı, osteoartrit, ishal, fazla kilo ve saldırganlık görüldü. Ölüm nedenlerinde kas-iskelet sistemi sorunları öne çıktı. Bu bilgiler ırk düzeyinde bir tablodur; bir köpekteki şikâyet için veteriner hekim muayenesi gerekiyor.' },
    { soru: 'Uzun tüylü Alman kurdu var mı?', cevap: 'Evet, FCI standardı iki tüy türünü tanımlıyor: çift katlı tüy ve uzun çift katlı tüy. Her ikisinde de alt tüy bulunması gerekiyor. Alt tüysüz, uzun ve düz tüylü köpekler standartta diskalifiye sebebi sayılıyor.' },
    { soru: 'Alman kurdu beyaz olabilir mi?', cevap: 'Standarda göre hayır, beyaz renk Alman kurdunda kabul edilmiyor. Kabul edilen renkler siyah ile kızıl kahverengi, kahverengi ve sarıdan açık griye değişen işaretler, tek renk siyah ile koyu gölgeli gridir. Albinizm de diskalifiye sebebi.' },
  ],
  kaynaklar: [
    {
      kurum: 'Fédération Cynologique Internationale (FCI)',
      baslik: 'FCI-Standard N° 166: Deutscher Schäferhund (German Shepherd Dog)',
      yil: 2010,
      adres: 'https://www.fci.be/Nomenclature/Standards/166g01-en.pdf',
    },
    {
      kurum: 'The Royal Veterinary College, VetCompass Programme',
      yazarlar: 'O\'Neill DG, Coulson NR, Church DB, Brodbelt DC',
      baslik: 'Demography and disorders of German Shepherd Dogs under primary veterinary care in the UK',
      dergi: 'Canine Genetics and Epidemiology',
      yil: 2017,
      kunye: '4:7',
      doi: '10.1186/s40575-017-0046-4',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/28770095/',
    },
    {
      kurum: 'University of Zurich, Clinic for Diagnostic Imaging · University of Bern, Section of Clinical Radiology',
      yazarlar: 'Ohlerth S, Geiser B, Flückiger M, Geissbühler U',
      baslik: 'Prevalence of Canine Hip Dysplasia in Switzerland Between 1995 and 2016-A Retrospective Study in 5 Common Large Breeds',
      dergi: 'Frontiers in Veterinary Science',
      yil: 2019,
      kunye: '6:378',
      doi: '10.3389/fvets.2019.00378',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/31709271/',
    },
    {
      kurum: 'American Veterinary Society of Animal Behavior (AVSAB)',
      baslik: 'Position Statements: Humane Dog Training ve Puppy Socialization',
      adres: 'https://avsab.org/resources/position-statements/',
    },
  ],
};
