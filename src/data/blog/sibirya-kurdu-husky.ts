import type { BlogYazi } from './types';

export const sibiryaKurduHusky: BlogYazi = {
  slug: 'sibirya-kurdu-husky',
  baslik: 'Sibirya Kurdu (Husky): Özellikleri ve Bakımı',
  ozet: 'Husky orta boy, çift katmanlı tüyü olan bir kızak köpeği. Boyut, mizaç, tüy, göz sağlığı ve sıcak hava konusunda kaynaklı bilgiler.',
  kapakAlt:
    'Karlı bahçede dili dışarıda bakan mavi gözlü husky',
  kategori: 'Köpek',
  tarih: '2026-11-12',
  bloklar: [
    { kind: 'paragraf', metin: '**Sibirya kurdu (Husky), kızak çekmek için yetiştirilmiş, orta boy, çift katmanlı tüyü olan ve dayanıklılığıyla bilinen bir çalışma köpeğidir.** Uluslararası Kinoloji Federasyonu (FCI) standardı mizacını dost canlısı, uyanık ve dışa dönük olarak tarif ediyor. Yani aile köpeği olarak sevilmesinin sebebi bu yapısı, ama bakımında tüy, kilo, göz ve sıcak hava gibi başlıklara dikkat gerekiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda ırkın resmî standardında yazanları, tüy dökümünün neden normal sayıldığını, mavi gözle ilgili yaygın bir yanlış inanışı ve huskylerle yapılmış hakemli çalışmalardan çıkan sağlık bilgilerini bulacaksınız. Teşhis ve tedavi konuları veteriner hekime bırakılıyor.' },

    { kind: 'tablo', basliklar: ['Özellik', 'FCI standardında yazan'], satirlar: [
      ['Menşe', 'ABD'],
      ['FCI sınıfı', 'Grup 5, Spitzler ve ilkel tipler; Bölüm 1, Kuzey kızak köpekleri'],
      ['Kullanım amacı', 'Kızak köpeği'],
      ['Erkek boy ve kilo', '53,5 ile 60 cm; 20,5 ile 28 kg'],
      ['Dişi boy ve kilo', '50,5 ile 56 cm; 15,5 ile 23 kg'],
      ['Göz rengi', 'Kahverengi ya da mavi; her göz farklı renkte de olabilir'],
      ['Tüy', 'Çift katmanlı, orta uzunlukta'],
    ]},

    { kind: 'baslik', metin: 'Irkın sınıfı ve kökeni' },
    { kind: 'paragraf', metin: 'FCI, huskyyi ABD menşeli ve kullanım amacı kızak köpekliği olan bir ırk olarak kaydediyor. Irk, Spitzler ve ilkel tipler grubunun Kuzey kızak köpekleri bölümünde yer alıyor. Standart, ırkı "orta boy bir çalışma köpeği" olarak tarif ediyor ve hafif bir yükü ılımlı bir hızla çok uzun mesafelere taşıyabilen yapısını vurguluyor.' },
    { kind: 'paragraf', metin: 'Standartta ayrıca husky için güç, hız ve dayanıklılık arasındaki dengenin esas olduğu yazıyor. Her iki cinsiyette de büyük bir dayanıklılık izlenimi vermesi isteniyor.' },

    { kind: 'baslik', metin: 'Boy ve kilo ne kadar olmalı?' },
    { kind: 'paragraf', metin: 'Standarda göre erkeklerin omuz yüksekliği 53,5 ile 60 cm, dişilerin 50,5 ile 56 cm arasında. Kilo olarak erkekler için 20,5 ile 28 kg, dişiler için 15,5 ile 23 kg veriliyor. Standart, bu değerlerin uç sınırlar olduğunu ve iki uca da üstünlük tanımadığını belirtiyor; kilonun boya orantılı olması gerekiyor.' },
    { kind: 'paragraf', metin: 'Standart ayrıca iyi kondisyondaki huskynin fazla kilo taşımadığını yazıyor ve aşırı kemik ya da kilo görünümünü kusur sayıyor. Kendi köpeğinizin kilosundan emin değilseniz [[kopegim-fazla-kilolu-mu|köpeğim fazla kilolu mu]] yazısına bakabilir, öğün miktarı için de [[kopek-gunde-kac-gram-mama-yer|köpek günde kaç gram mama yer]] yazısından yararlanabilirsiniz. Hedef kilo konusunda son söz veteriner hekimindir.' },

    { kind: 'baslik', metin: 'Mizacı: bekçi köpeği değil' },
    { kind: 'paragraf', metin: 'FCI standardında husky için karakteristik mizaç "dost canlısı ve nazik, ama aynı zamanda uyanık ve dışa dönük" olarak geçiyor. Standart, ırkın bekçi köpeğinin sahiplenici özelliklerini göstermediğini, yabancılara aşırı şüpheyle yaklaşmadığını ve diğer köpeklere karşı saldırgan olmadığını yazıyor. Olgun köpeklerde bir ölçüde çekingenlik ve vakar beklenebileceği de ekleniyor.' },
    { kind: 'paragraf', metin: 'Bu tarif ırkın ortalamasını anlatır. Her köpek farklıdır; yetiştirme, sosyalleşme ve yaşanan deneyimler davranışı belirler. Davranış sorunları için [[kopeklerde-ayrilik-kaygisi|köpeklerde ayrılık kaygısı]] gibi yazıları okuyabilir, ısrarlı sorunlarda veteriner hekimden destek isteyebilirsiniz.' },

    { kind: 'baslik', metin: 'Tüy, renk ve göz rengi' },
    { kind: 'paragraf', metin: 'Standart husky tüyünü "çift katmanlı ve orta uzunlukta" olarak tanımlıyor. Alt tüy yumuşak ve yoğun, üst tüy ise düz ve vücuda yatık olmalı. Standartta dikkat çeken bir cümle var: tüy dökümü döneminde alt tüyün bulunmaması normaldir. Yani mevsimsel döküm bu ırkın beklenen bir parçası olarak yazılmış.' },
    { kind: 'paragraf', metin: 'Standart, bıyık ve patilerin arasındaki tüyün düzenlenmesine izin veriyor; köpeğin başka bir yerinde tüy kesimini ise hoş görmüyor. Bu ifade gösteri standardı içindir. Evdeki bir köpeğin tüyünü kestirip kestirmemek ise veteriner hekime ya da bakım uzmanına danışılması gereken bir karardır.' },
    { kind: 'paragraf', metin: 'Renk olarak siyah, gri, agouti, samur (sable), kırmızı ve beyaz kabul ediliyor; tek renk, çok tonlu ya da beyaz işaretli olabiliyor. Merle (mermer benzeri) ve çizgili (brindle) desenler ise kabul edilmiyor ve standartta diskalifiye sebebi olarak geçiyor.' },
    { kind: 'yanilgi', baslik: '"Mavi gözü olmayan husky safkan değildir"', metin: 'FCI standardına göre göz rengi kahverengi ya da mavi olabilir; her gözün farklı renkte olması ve çok renkli gözler de kabul ediliyor. Göz rengi tek başına ırkı kanıtlamaz ya da çürütmez.' },

    { kind: 'baslik', metin: 'Göz sağlığı: genç yaşta katarakt' },
    { kind: 'paragraf', metin: 'Dört üniversite veteriner hastanesinde 2008 ile 2018 arasında katarakt tanısı almış 50 husky, katarakt tanılı 96 diğer ırk köpeğiyle karşılaştırıldı (diğer ırklar tek merkezden). Huskylerde başvuru yaşı ortalama 3,5 yıl, diğer ırklarda 9,5 yıldı. Huskylerde kalıtsal katarakt oranı yüzde 84, diğer ırklarda yüzde 52 çıktı; diyabete bağlı katarakt ise huskylerde yüzde 16, diğerlerinde yüzde 48 idi.' },
    { kind: 'paragraf', metin: 'Bu çalışma katarakt görülme sıklığını ölçmedi; yalnızca katarakt nedeniyle klinikte değerlendirilen köpekleri karşılaştırdı. Ama sonuç, huskylerde katarakt tanısının daha genç yaşta konabildiğini gösteriyor. Gözde bulanıklık, görmede azalma ya da başka bir değişiklik fark ederseniz muayene için veteriner hekime başvurmak gerekiyor. Kontrollerin zamanı için [[kedi-kopek-check-up-ne-zaman|kedi ve köpek check-up ne zaman yapılır]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Sıcak havada husky' },
    { kind: 'paragraf', metin: 'Brezilya\'da yaşayan 624 husky sahibine uygulanan çevrimiçi bir ankette sahipler köpeklerini sıcağa az uyum sağlayan hayvanlar olarak görüyordu. Bu algı, sahiplerin köpeği güneşin az olduğu sabah, akşamüstü ve gece saatlerinde gezdirmesiyle ilişkiliydi. Çalışma, sahibin zamanı olmadığı için öğle sıcağında yürüyüşe çıkmasının yine de aşırı sıcağa maruz kalma riski taşıdığını belirtiyor.' },
    { kind: 'paragraf', metin: 'Çalışma sahip algısını inceledi; ırkın ısıya ne kadar dayanıklı olduğunu laboratuvarda ölçmedi. Yine de çıkarılacak pratik ders açık: yürüyüş saatlerini günün serin kısmına almak ve güneşin etkisini hesaba katmak gerekiyor. Yürüyüş düzeni için [[kopek-gezdirme-kurallari|köpek gezdirme kuralları]] yazısına bakabilirsiniz.' },
    { kind: 'uyari', metin: 'Sıcakta köpeğinizin durumu kötüye gidiyorsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Evde müdahale etmeye çalışmak yerine hekimin yönlendirmesi önerilir.' },

    { kind: 'baslik', metin: 'Genç huskylerde sinir sistemi bulguları' },
    { kind: 'paragraf', metin: 'Veteriner Patoloji dergisinde yayımlanan bir vaka serisi, 7 genç huskyde dejeneratif ve inflamatuvar polinöropati (birden fazla periferik sinirin işlev bozukluğu) olgusunu anlatıyor. Araştırmacılar genç yaş, yavaş ilerleme ve etkilenen köpeklerin akraba olması nedeniyle kalıtsal bir temel olabileceğini düşünüyor. Başka ırklarda polinöropatiye yol açtığı bilinen üç gendeki beş mutasyon bu köpeklerde bulunmadı; yani sebebin tamamı henüz anlaşılmış değil.' },
    { kind: 'paragraf', metin: 'Bu çalışma küçük bir vaka serisidir ve her husky için risk anlamına gelmez. Genç bir köpekte yürüyüş, sinirsel işlev ya da yutma gibi konularda alışılmadık bir değişiklik görürseniz teşhis koymaya çalışmadan veteriner hekime başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Sahiplenmeden önce sorulacaklar' },
    { kind: 'paragraf', metin: 'FCI standardı, üretimde yalnızca işlevsel ve klinik olarak sağlıklı, ırk tipinde yapıya sahip köpeklerin kullanılması gerektiğini yazıyor. Yavru alacaksanız ebeveynlerin sağlık kayıtlarını ve göz muayenesi bilgilerini sormak bu ilkenin gereğidir. Barınaktaki bir köpeği sahiplenmek isterseniz [[barinaktan-kopek-sahiplenme|barınaktan köpek sahiplenme]] yazısı süreci anlatıyor.' },
    { kind: 'liste', maddeler: [
      'Yetişkin kilo aralığı: erkekte 20,5 ile 28 kg, dişide 15,5 ile 23 kg',
      'Mevsimsel tüy dökümü ırk standardında normal sayılıyor',
      'Yürüyüşlerin serin saatlere planlanması gerekiyor',
      'Göz kontrolünün veteriner ziyaretine dahil edilmesi önerilir',
      'Aşı ve parazit takvimi için [[kopek-asi-takvimi|köpek aşı takvimi]] ve [[kopeklerde-ic-ve-dis-parazit|iç ve dış parazit]] yazıları okunabilir',
    ]},
  ],
  sss: [
    { soru: 'Husky bekçi köpeği olur mu?', cevap: 'Hayır, FCI standardına göre husky bekçi köpeğinin sahiplenici özelliklerini göstermiyor. Irkın yabancılara aşırı şüpheli ya da diğer köpeklere saldırgan olmaması isteniyor. Bu ırk ortalamasıdır; her köpeğin davranışı yetiştirmeye ve sosyalleşmeye göre değişebilir. Güvenlik amacıyla köpek arıyorsanız bunu veteriner hekim ya da eğitmenle konuşmak doğru olur.' },
    { soru: 'Husky\'nin gözleri hep mavi mi olur?', cevap: 'Hayır, FCI standardı göz rengini kahverengi ya da mavi olarak kabul ediyor. Bir gözü kahverengi, diğeri mavi olan ya da çok renkli gözlü köpekler de standartta kabul edilebilir bulunuyor. Yani göz rengi her husky için aynı değildir ve tek başına safkanlığın kanıtı sayılmaz.' },
    { soru: 'Husky kaç kilo ve kaç cm olur?', cevap: 'FCI standardına göre erkekler 53,5 ile 60 cm boyunda ve 20,5 ile 28 kg ağırlığında, dişiler 50,5 ile 56 cm boyunda ve 15,5 ile 23 kg ağırlığında olur. Standart bu değerlerin uç sınırlar olduğunu ve kilonun boya orantılı olması gerektiğini belirtiyor. Köpeğinizin ideal kilosunu veteriner hekim değerlendirir.' },
    { soru: 'Husky tüyü dökmesi normal mi?', cevap: 'Evet, FCI standardı tüy dökümü döneminde alt tüyün bulunmamasını normal kabul ediyor. Husky çift katmanlı tüye sahip olduğu için dönemsel döküm ırkın beklenen bir özelliğidir. Ancak tüyde aniden yoğun kayıp, deride değişiklik ya da kaşıntı fark ederseniz veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Husky sıcak havada rahat eder mi?', cevap: 'Sahipler huskyleri sıcağa az uyumlu görüyor, bu yüzden sıcak havada dikkatli olmak gerekiyor; ırkın ısı toleransı ise bu çalışmada ölçülmedi. Brezilya\'da 624 sahiple yapılan ankette sahipler köpeklerini serin saatlerde gezdirmeyi tercih ediyordu. Yine de öğle sıcağında gezdirmenin risk oluşturabileceği belirtiliyor. Köpeğin durumu kötüleşirse vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Huskylerde katarakt daha mı erken görülür?', cevap: 'Katarakt nedeniyle veteriner hastanesine getirilen huskyler diğer ırklardan daha gençti: ortalama yaş 3,5, diğer ırklarda 9,5 yıldı. Çalışma görülme sıklığını ölçmedi, yalnızca başvuran köpekleri karşılaştırdı. Gözde bulanıklık fark ederseniz muayene için veteriner hekime başvurmak gerekiyor.' },
  ],
  kontrolListesi: [
    'Ebeveynlerin sağlık kaydı var mı?',
    'Göz muayenesi yapıldı mı?',
    'Kilo ırk aralığında mı?',
    'Yürüyüş serin saatlerde mi?',
    'Tüy dökümü dönemi biliniyor mu?',
    'Veteriner kontrolü planlı mı?',
  ],
  kaynaklar: [
    {
      kurum: 'Fédération Cynologique Internationale (FCI)',
      baslik: 'FCI-Standard N° 270: Siberian Husky',
      yil: 2022,
      adres: 'https://www.fci.be/Nomenclature/Standards/270g05-en.pdf',
    },
    {
      kurum: 'Colorado State University College of Veterinary Medicine and Biomedical Sciences',
      baslik: 'Cataracts and phacoemulsification in the Siberian Husky: A retrospective and multicentric study (2008-2018)',
      yazarlar: 'Uhl LK, Henriksen ML, Saxmose Nielsen S, Gemensky-Metzler AJ, Sebbag L, Todd JM',
      dergi: 'Veterinary Ophthalmology',
      yil: 2021,
      kunye: '24(3):252-264',
      doi: '10.1111/vop.12883',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/33730445/',
    },
    {
      kurum: 'Federal University of Paraíba',
      baslik: 'Heat Tolerance of Siberian Husky Dogs Living in Brazil: A Case Study on the Perceptions and Attitudes of Their Owners',
      yazarlar: 'Veríssimo TNS, Saraiva EP, Sant\'Anna AC, Loureiro BA, Nascimento PVD, Lima LADA, Maia MIL, Morais LKDC, Santos SGCGD, Lima EHS, Fonseca VFC',
      dergi: 'Animals (Basel)',
      yil: 2023,
      kunye: '13(17):2774',
      doi: '10.3390/ani13172774',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/37685038/',
    },
    {
      kurum: 'University College Dublin',
      baslik: 'Polyneuropathy in Young Siberian Huskies Caused by Degenerative and Inflammatory Diseases',
      yazarlar: 'Jahns H, Vernau KM, Nolan CM, O\'Neill EJ, Shiel RE, Shelton GD',
      dergi: 'Veterinary Pathology',
      yil: 2020,
      kunye: '57(5):666-674',
      doi: '10.1177/0300985820934112',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/32578500/',
    },
  ],
};
