import type { BlogYazi } from './types';

export const tavsanBakimi: BlogYazi = {
  slug: 'tavsan-bakimi',
  baslik: 'Tavşan Bakımı: Beslenme ve Barınak',
  ozet: 'Tavşan beslenmesinin temeli sınırsız kuru ot, barınağın temeli geniş ve havadar bir alan. Merck ve hakemli çalışmalara göre ölçüler ve sık hatalar.',
  kapakAlt:
    'Bahçe kafesinde kuru ot yiyen sarkık kulaklı tavşan',
  kategori: 'Pet Sahipleri',
  tarih: '2026-11-08',
  bloklar: [
    { kind: 'paragraf', metin: '**Tavşanın beslenmesinin temeli sınırsız kuru ot, barınağının temeli ise geniş, havadar ve her gün kafesin dışında vakit geçirebileceği bir alandır.** Merck Veterinary Manual, sağlıklı bir tavşan düzeninde beslenmenin yaklaşık yüzde 85-90\'ının ot olması gerektiğini, geri kalanın ise az miktarda pelet ve taze sebze olduğunu belirtiyor. Barınakta da kafes boyutu, sıcaklık, zemin ve temizlik belirleyici oluyor.' },
    { kind: 'paragraf', metin: 'Aşağıda tavşanın günlük yemi, ot seçimi, kafes ölçüleri, sıcaklık sınırları, zemin ve tuvalet düzeni, arkadaşlık, tüy bakımı ve doğru tutuş anlatılıyor. Yazı bir bakım rehberidir; hastalık tanısı ya da tedavi içermez. Tavşanda bir sağlık sorunundan şüpheleniliyorsa veteriner hekime başvurmak gerekiyor.' },

    { kind: 'tablo', basliklar: ['Konu', 'Merck\'in belirttiği'], satirlar: [
      ['Ot', 'Sınırsız, kaliteli ot (timothy, yulaf, çayır otu)'],
      ['Pelet', 'Günde her 5 pound için yaklaşık 1/4 cup, timothy bazlı'],
      ['Taze sebze', 'Günde her 2 pound için yaklaşık 1 cup'],
      ['Meyve', 'Yalnızca ara sıra ödül olarak'],
      ['Su', 'Her zaman taze ve bol'],
      ['Ortam', 'Tercihen iç mekân, 27 °C üstü sıcaktan uzak'],
    ]},

    { kind: 'baslik', metin: 'Beslenmenin büyük kısmı kuru ot olmalı' },
    { kind: 'paragraf', metin: 'Tavşanlar otla beslenen (otçul) hayvanlardır ve sindirim sistemleri bu işe göre özelleşmiştir. Merck Veterinary Manual, tavşanların yaklaşık yüzde 85-90 oranında ota, buna ek olarak ham lif oranı yüzde 15-20 olan daha az miktarda pelete ihtiyaç duyduğunu yazıyor. Yüksek lif sindirimi destekliyor ve bağırsak hastalığı riskini azaltıyor. Düşük lifli beslenme ise özellikle yavru tavşanlarda ciddi sindirim hastalığı ihtimalini artırıyor.' },
    { kind: 'paragraf', metin: 'Yetişkin tavşanlar için sınırsız timothy otu ya da yulaf, orchard ve çayır otu gibi kalsiyumu düşük başka otlar öneriliyor. Otun yerde değil, yerden yüksekte duran bir otluktan sunulması çöpü azaltıyor ve otu daha temiz tutuyor.' },

    { kind: 'baslik', metin: 'Pelet, sebze ve meyve ne kadar olmalı?' },
    { kind: 'paragraf', metin: 'Merck\'e göre tavşan genel olarak şunları almalıdır:' },
    { kind: 'liste', maddeler: [
      'Sınırsız, kaliteli ot',
      'Günde her 5 pound (yaklaşık 2,3 kg) vücut ağırlığı için yaklaşık 1/4 cup timothy bazlı pelet',
      'Günde her 2 pound (yaklaşık 0,9 kg) vücut ağırlığı için yaklaşık 1 cup taze sebze',
      'Meyve yalnızca ara sıra ödül olarak',
      'Her zaman taze su',
    ]},
    { kind: 'paragraf', metin: 'Besin ihtiyacı yaşa, büyüme dönemine, ırka ve hareket düzeyine göre değişiyor; gebelik ve emzirme döneminde de farklılaşıyor. Bu nedenle ölçüler başlangıç noktasıdır ve kesin bir miktar için veteriner hekime danışmak gerekiyor. Tavşanın yeni bir besini tanıması öncesinde de hekime sorulması öneriliyor.' },
    { kind: 'yanilgi', baslik: '"Hazır karışık tavşan yemi tam beslenme sağlar"', metin: 'Edinburgh Üniversitesi\'nin 32 Dutch tavşanıyla yaptığı rastgele gruplu çalışmada müsli türü karışık yemle beslenen tavşanlarda diş uzunluğu ve eğriliği arttı, yalnız müsliyle beslenen üç tavşanda diş hastalığı bulgusu gelişti. Yazarlar müsli diyetlerinin ev tavşanları için önerilemeyeceği sonucuna vardı. Merck da kurutulmuş meyve ve fındık gibi katkılı yemlerde tavşanın pelet yerine yalnız sevdiği parçaları seçtiğini belirtiyor.' },

    { kind: 'baslik', metin: 'Yonca otu ve zararlı bitkiler' },
    { kind: 'paragraf', metin: 'Gebe ya da emziren olmayan yetişkin tavşanlara genel olarak yonca otu ve yonca bazlı pelet verilmemesi gerekiyor, çünkü bunlar çok fazla kalsiyum içeriyor. Merck, uzun süre fazla kalsiyumun böbrek hasarına ya da mesane ve böbrek taşlarının gelişimine katkıda bulunabileceğini yazıyor. Büyüyen yavru tavşanlar ise yonca otu ve yonca bazlı pelet yiyebiliyor ve 1 yaşa yaklaştıkça kademeli olarak timothy bazlı beslenmeye geçiriliyor.' },
    { kind: 'paragraf', metin: 'Bazı bitki ve besinler tavşan için güvenli değil. Merck\'in listesinde aloe, açelya (azalea), kalla zambağı, vadi zambağı, filodendron, elma çekirdeği, çiğ fasulye ve karanfil zehirli olarak yer alıyor. Tuzu ya da yağı yüksek ödüller ve kafein içeren besinler de uygun değil. Tavşanın bunlardan birini yediğinden şüpheleniliyorsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Kafes ne kadar büyük olmalı?' },
    { kind: 'paragraf', metin: 'Merck, tavşanın kafes boyutunu ırkın büyüklüğüne göre veriyor. Bunlar tek tavşan için asgari ölçülerdir; birden fazla tavşan için daha fazla alan gerekiyor.' },
    { kind: 'tablo', basliklar: ['Irk grubu', 'Asgari kafes'], satirlar: [
      ['Dev ırklar', 'En az 76 x 91 cm, yükseklik 41-46 cm'],
      ['Orta ve büyük ırklar', 'En az 61 x 76 cm'],
      ['Küçük ırklar', 'En az 46 x 61 cm'],
    ]},
    { kind: 'paragraf', metin: 'Kafes yalnızca bir yatak yeri değildir. Merck, hareketin tavşanın bedensel ve ruhsal sağlığı için şart olduğunu, geniş kafese ek olarak her gün kafesin dışında güvenli ve gözetim altında bir alan gerektiğini yazıyor. Kutu, tünel ve işlenmemiş ahşap blok gibi oyuncaklar sıkıntıyı önlüyor. Akvaryum ise hava dolaşımı yetersiz olduğu için uygun bir barınak sayılmıyor.' },
    { kind: 'paragraf', metin: 'Tavşanın kafes dışında dolaşması için kablolardan, halıdan ve çiğneyebileceği diğer eşyalardan uzak tutulması gerekiyor. Bristol Üniversitesi\'nin 2006\'da 102 ev tavşanı üzerinde yaptığı incelemede pet shoplardan alınan kafesler ev yapımı kafeslerden anlamlı ölçüde küçüktü. Satın alınan kafesin etiketine değil, yukarıdaki asgari ölçülere bakmak daha güvenilir bir yol.' },

    { kind: 'baslik', metin: 'Sıcak ve soğuk: iç mekân daha güvenli' },
    { kind: 'paragraf', metin: 'Merck\'e göre tavşanlar sıcağa ve kötü havalandırmaya duyarlıdır ve genel olarak iklim kontrollü, havadar bir iç mekânda daha iyi yaşar. 27 °C\'nin üzerinde uzun süre kalmak tavşanı hasta edebiliyor; sıcak ve nemli ortam, özellikle kapalı kafeslerde ve araçta, sıcak çarpmasına ve ölüme yol açabiliyor. Evcil tavşanlar 10 °C\'nin altında da zorlanıyor.' },
    { kind: 'paragraf', metin: 'Dışarıda tutulan tavşanın aşırı sıcak ya da soğukta içeri alınması gerekiyor. Dış mekân barınağında gölge, hava akımı ve köpek gibi avcılara karşı koruma öneriliyor. Barınak ulaşılması kolay bir yerde olmalı, çünkü Merck uzak köşeye konan tavşanların sık ihmal edildiğini ve ihmal hastalıklarının yaygın olduğunu vurguluyor.' },

    { kind: 'baslik', metin: 'Zemin, yatak ve tuvalet düzeni' },
    { kind: 'paragraf', metin: 'Tel zemin dışkının düşmesini sağlıyor ama tavşanın ayak tabanında baskı yaratabiliyor. Bu yüzden Merck, kafes zemininde plastik gibi yıkanabilir pürüzsüz bir dinlenme alanı bulunmasını öneriyor. Açık alanlarda kaymaz zemin gerekiyor; talaş ve ağaç yongası tozlu olduğu için solunum yollarını tahriş edebildiğinden yatak olarak iyi bir seçim değil.' },
    { kind: 'paragraf', metin: 'Tavşanlar doğal olarak tek bir tuvalet köşesi seçiyor ve çoğu zaman kum kabına alıştırılabiliyor. Kum olarak geri dönüşümlü gazete peleti, kâğıt hamuru ya da ot uygun. Ağaç yongası, mısır koçanı, kil ve topaklanan kumlar yutulursa sindirim yolunu tıkayabileceği için kullanılmaması gerekiyor. İç mekândaki kafesin her gün temizlenmesi, haftada en az bir kez sıcak sabunlu suyla tamamen yıkanması öneriliyor.' },

    { kind: 'baslik', metin: 'Arkadaşlık, tüy bakımı ve tutuş' },
    { kind: 'paragraf', metin: 'Merck tavşanların çok sosyal hayvanlar olduğunu ve çift olarak tutmanın birçok durumda yararlı olduğunu belirtiyor, ancak uyum önemli: yetişkin tavşanlar birbirine karşı çok saldırgan olabiliyor. Kısırlaştırma uyumu artırıyor, tavşanları aynı kafese koymadan önce yan yana ayrı kafeslerde tutmak ise akıllıca bir adım. Bristol incelemesinde 45 tavşan tek başına barındırılıyordu.' },
    { kind: 'paragraf', metin: 'Tavşanlar kendini sık yalıyor ve yuttukları tüy normalde sindirim yolundan geçiyor, fakat çok miktarda tüy yutmak tıkanmaya katkıda bulunabiliyor. Bu yüzden tüm tavşanların yumuşak bir fırçayla düzenli taranması gerekiyor: uzun tüylülerde her gün, kısa tüylülerde haftada en az iki kez. Tüy döküm dönemlerinde fırçalama artırılıyor. Dökülen yerde tüy yeniden çıkmıyorsa veteriner hekime göstermek gerekiyor.' },
    { kind: 'paragraf', metin: 'Tavşan kaldırılırken kalça ve arka bacakları desteklenmeli. Bir el göğsün altında, diğer el arka bacakların altında olacak biçimde vücuda yaslanarak tutuluyor. Tavşan asla kulaklarından tutulmamalı. Arka bacakları çok güçlüdür ve yanlış tutuşta tepinen tavşan omurgasını yaralayabilir. Merck bu nedenle tavşanların çok küçük çocuklardan çok büyük gençler ve yetişkinler için daha uygun olduğunu söylüyor.' },

    { kind: 'baslik', metin: 'Diş ve sağlık sorunlarında veteriner hekim' },
    { kind: 'uyari', metin: 'Bu yazı bakım bilgisi verir, teşhis ya da tedavi önermez. Tavşanın yeme, dışkı, tüy ya da davranışında bir değişiklik fark edilirse evde müdahale etmek yerine veteriner hekime başvurmak gerekiyor.' },
    { kind: 'paragraf', metin: 'Bristol incelemesinde en sık görülen sorun diş hastalığıydı: 102 tavşanın 30\'unda vardı ve sahiplerin yalnızca altısı bunun farkındaydı. Diş hastalığı hazır karışık yem verilmesiyle anlamlı biçimde ilişkiliydi. Yani sorun sahibin gözünden kaçabiliyor ve düzenli muayene bu yüzden önem taşıyor.' },
    { kind: 'paragraf', metin: 'Her veteriner kliniği tavşan kabul etmiyor. İhtiyaç doğmadan önce hangi kliniğin tavşana baktığını öğrenmek için [[veteriner-klinigi-nasil-secilir|veteriner kliniği nasıl seçilir]] yazısındaki soruları kullanabilirsiniz. Mesai dışı bir acil durumda ise [[nobetci-veteriner|nöbetçi veteriner]] yazısı nereye bakılacağını anlatıyor.' },
  ],
  sss: [
    { soru: 'Tavşan günde ne kadar kuru ot yemeli?', cevap: 'Sınırsız. Merck Veterinary Manual, yetişkin tavşanlara sınırsız timothy otu ya da yulaf, orchard veya çayır otu gibi kalsiyumu düşük başka otlar verilmesini öneriyor. Ot beslenmenin yaklaşık yüzde 85-90\'ını oluşturmalı ve bir otluktan, yerden yüksekte sunulması çöpü azaltıyor.' },
    { soru: 'Tavşana meyve verilebilir mi?', cevap: 'Verilebilir ama yalnızca ara sıra, küçük bir ödül olarak. Merck, meyveyi günlük düzenin parçası saymıyor ve sınırlı miktarda verilecek besinler arasında gösteriyor. Düzenin temeli ot, ardından pelet ve taze sebzedir. Yeni bir besini tanıtmadan önce veteriner hekime sorulması öneriliyor.' },
    { soru: 'Tavşan kafesi en az ne kadar olmalı?', cevap: 'Irka göre değişiyor. Merck tek tavşan için küçük ırklarda en az 46 x 61 cm, orta ve büyük ırklarda 61 x 76 cm, dev ırklarda 76 x 91 cm ölçüsünü asgari sayıyor. Birden fazla tavşan için daha fazla alan gerekiyor ve tavşanın her gün kafesten çıkabilmesi de şart.' },
    { soru: 'Tavşan tek başına yaşayabilir mi?', cevap: 'Tek başına tutulması mümkün, ancak Merck tavşanların çok sosyal olduğunu ve çift olarak tutulmanın birçok durumda yararlı olduğunu belirtiyor. Uyum önemli; yetişkin tavşanlar birbirine karşı ciddi biçimde saldırgan olabiliyor. Kısırlaştırma uyumu artırıyor ve tavşanlar önce yan yana kafeslerde tutulabiliyor.' },
    { soru: 'Tavşan dışarıda yaşayabilir mi?', cevap: 'Yaşayabilir ama iç mekân daha güvenli bulunuyor. Merck tavşanların sıcağa ve kötü havalandırmaya duyarlı olduğunu, 27 °C üstünde uzun süre kalırlarsa hastalanabileceklerini yazıyor. Dışarıda tutulacaksa gölge, avcılara karşı koruma ve aşırı sıcak ya da soğukta içeri alınma gerekiyor.' },
    { soru: 'Tavşana tuvalet alışkanlığı kazandırılabilir mi?', cevap: 'Çoğu zaman evet. Tavşanlar doğal olarak tek bir tuvalet alanı seçiyor, sahibin gözlemleyip kum kabını o noktaya koyması yetiyor. Kum için gazete peleti, kâğıt hamuru ya da ot uygun; ağaç yongası, mısır koçanı, kil ve topaklanan kum yutulduğunda sindirim yolunu tıkayabileceği için önerilmiyor.' },
    { soru: 'Tavşan kulaklarından tutulabilir mi?', cevap: 'Hayır. Tavşan asla kulaklarından kaldırılmamalı. Merck, kaldırırken kalça ve arka bacakların desteklenmesini, bir elin göğsün altında diğerinin arka bacakların altında olmasını öneriyor. Yanlış tutuş tavşanın tepinip omurgasını yaralamasına yol açabiliyor.' },
  ],
  kontrolListesi: [
    'Sınırsız kuru ot var mı?',
    'Taze su her zaman var mı?',
    'Kafes asgari ölçüde mi?',
    'Günlük kafes dışı zaman var mı?',
    'Pürüzsüz dinlenme alanı var mı?',
    'Hekim tavşan kabul ediyor mu?',
  ],
  kaynaklar: [
    {
      kurum: 'Merck Veterinary Manual (MSD Veterinary Manual), pet owner version',
      baslik: 'Diet for Rabbits',
      yil: 2026,
      adres: 'https://www.merckvetmanual.com/all-other-pets/rabbits/diet-for-rabbits',
    },
    {
      kurum: 'Merck Veterinary Manual (MSD Veterinary Manual), pet owner version',
      baslik: 'Providing a Home for a Rabbit',
      yil: 2026,
      adres: 'https://www.merckvetmanual.com/all-other-pets/rabbits/providing-a-home-for-a-rabbit',
    },
    {
      kurum: 'Royal (Dick) School of Veterinary Studies and The Roslin Institute, University of Edinburgh',
      baslik: 'Impact of diet on incisor growth and attrition and the development of dental disease in pet rabbits',
      yazarlar: 'Meredith AL, Prebble JL, Shaw DJ',
      dergi: 'Journal of Small Animal Practice',
      yil: 2015,
      kunye: '56(6):377-382',
      doi: '10.1111/jsap.12346',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/25788144/',
    },
    {
      kurum: 'Department of Clinical Veterinary Science, University of Bristol',
      baslik: 'Survey of the husbandry, health and welfare of 102 pet rabbits',
      yazarlar: 'Mullan SM, Main DC',
      dergi: 'Veterinary Record',
      yil: 2006,
      kunye: '159(4):103-109',
      doi: '10.1136/vr.159.4.103',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/16861388/',
    },
  ],
};
