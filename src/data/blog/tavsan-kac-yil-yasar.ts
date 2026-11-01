import type { BlogYazi } from './types';

export const tavsanKacYilYasar: BlogYazi = {
  slug: 'tavsan-kac-yil-yasar',
  baslik: 'Tavşan Kaç Yıl Yaşar? Evcil Tavşan Ömrü ve Bakım',
  ozet: 'Doğru beslenen ve düzenli kontrole götürülen evcil tavşan 10 ile 12 yıl, hatta daha uzun yaşayabiliyor. Ömrü neyin belirlediğini anlatıyoruz.',
  kapakAlt:
    'Saman yatağında uzanan sarkık kulaklı tavşan',
  kategori: 'Pet Sahipleri',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Bakımı iyi olan bir evcil tavşan 10 ile 12 yıl, hatta daha uzun yaşayabiliyor.** MSD Veterinary Manual (Merck), doğru beslenme ve sağlıklı yaşam koşullarında tavşanlar için bu süreyi veriyor. Eski laboratuvar ve halk kaynaklarında ise 5 ile 10 yıl yazılırdı. Merck süreyi doğru beslenmeye ve sağlıklı yaşam koşullarına bağlıyor.' },
    { kind: 'paragraf', metin: 'Aşağıda kaynakların verdiği süreleri, ömrü uzatan beslenme ve kontrol düzenini, yaş ilerledikçe artan sağlık sorunlarını ve tavşan sahiplenmeden önce düşünülmesi gerekenleri anlatıyoruz. Bu yazı bilgilendirme amaçlıdır; tavşanınızın sağlığıyla ilgili her soru için veteriner hekime başvurmak gerekiyor.' },

    { kind: 'tablo', basliklar: ['Kaynak', 'Verdiği süre'], satirlar: [
      ['MSD Veterinary Manual', 'Doğru beslenme ve sağlıklı koşullarda 10 ile 12 yıl ya da daha uzun'],
      ['Lennox, 2010 (laboratuvar ve halk literatürü)', 'Evcil tavşan için bildirilen ortalama 5 ile 10 yıl'],
      ['Lennox, 2010 (klinik deneyimi)', 'Düzenli olarak 9 ya da 10 yıl yaşayanlar görülüyor, en yaşlısı 14 yıl'],
    ]},

    { kind: 'baslik', metin: 'Tavşanın ömrü neden tek sayıyla verilmiyor?' },
    { kind: 'paragraf', metin: 'Kaynaklara bakınca iki ayrı rakam aralığı görülüyor. Birincisi eski ve genel bir bilgi: evcil tavşan için bildirilen ortalama ömür 5 ile 10 yıl. İkincisi, Indianapolis\'teki bir egzotik hayvan kliniğinden Lennox\'un 2010 tarihli derlemesinden: yazar ve diğer veteriner hekimler artık düzenli olarak 9 ya da 10 yıl yaşayan tavşanlar görüyor, kendi kliniğinde bildirilen en yaşlı tavşan ise 14 yaşında.' },
    { kind: 'paragraf', metin: 'MSD Veterinary Manual\'in tavşan hastalıkları sayfası da aynı yönü gösteriyor: doğru beslenme ve sağlıklı yaşam koşullarında 10 ile 12 yıl ya da daha uzun. Yani asıl belirleyici, tavşanın nasıl beslendiği ve nasıl izlendiği. Bu kaynakların yurt dışındaki klinik deneyime ve araştırmalara dayandığını da belirtmek gerekiyor.' },
    { kind: 'yanilgi', baslik: '"Tavşan küçük hayvandır, kısa yaşar"', metin: 'Boyutu küçük olsa da kaynaklara göre bakımı iyi olan bir tavşan on yıl ya da daha uzun yaşayabiliyor. Tavşan sahiplenmek, uzun yıllara yayılan bir sorumluluk almak demek.' },

    { kind: 'baslik', metin: 'Uzun ömür için beslenme: saman ağırlıklı düzen' },
    { kind: 'paragraf', metin: 'Tavşan otçul bir hayvan ve sindirim sistemi lifli beslenmeye göre çalışıyor. MSD Veterinary Manual, tavşanların beslenmesinin yaklaşık %85 ile 90\'ının çayır otu kurusu (saman) olması gerektiğini, geri kalanın ham lif oranı yüzde 15 ile 20 olan peletlerden oluşmasının uygun olduğunu belirtiyor. Lif oranı yüksek beslenme sindirimi destekliyor ve bağırsak hastalıkları riskini azaltıyor; düşük lifli beslenme ise özellikle genç tavşanlarda ağır sindirim hastalığı ihtimalini artırıyor.' },
    { kind: 'tablo', basliklar: ['Besin', 'MSD Veterinary Manual\'e göre'], satirlar: [
      ['Saman', 'Sınırsız ve kaliteli; beslenmenin büyük bölümü'],
      ['Pelet', 'Saman dışında daha küçük bir bölüm; kuru meyve ya da kuruyemiş katılmamış olanlar uygun'],
      ['Taze sebze', 'Günlük beslenmenin bir parçası'],
      ['Meyve', 'Yalnızca ara sıra ödül olarak'],
      ['Su', 'Her zaman ulaşılabilir olmalı'],
    ]},
    { kind: 'paragraf', metin: 'Yetişkin ve gebe olmayan tavşanlara yonca (alfalfa) samanı ya da yonca bazlı pelet verilmemesi öneriliyor, çünkü kalsiyum içeriği yüksek; uzun süre fazla kalsiyum böbrek hasarına ya da mesane ve böbrek taşlarına katkıda bulunabiliyor. Yeni bir besini tavşanın düzenine eklemeden önce veteriner hekime danışmak gerekiyor.' },

    { kind: 'baslik', metin: 'Dişler ve sindirim: erken fark etmek ömrü etkiler' },
    { kind: 'paragraf', metin: 'Tavşanın ön ve arka tüm dişleri hayat boyu uzamaya devam ediyor; normalde çiğneme bu dişleri aşındırıyor. Üst ve alt dişler düzgün örtüşmediğinde ortaya çıkan maloklüzyon, tavşanlarda en sık görülen kalıtsal sorunlardan biri. MSD Veterinary Manual\'e göre çoğunlukla pelet yiyen tavşanların dişleri, samanın sağladığı aşınma olmadığı için fazla uzayabiliyor.' },
    { kind: 'liste', maddeler: [
      'Çok uzamış ön dişler',
      'Eşit aşınmamış dişler',
      'Salya akması',
      'Ağzı kapatmakta, yemekte ya da su içmekte zorlanma',
    ]},
    { kind: 'paragraf', metin: 'Bunlar dişle ilgili sorunun işaretleri olarak sayılıyor. MSD Veterinary Manual\'e göre dişlerin kısaltılması ya da düzeltilmesi veteriner hekim tarafından, tavşan sakinleştirilerek yapılıyor; bu müdahale evde denenmemeli.' },
    { kind: 'uyari', metin: 'MSD Veterinary Manual, iştah ve enerji kaybı, normal hareket etmeme, nefes almada güçlük, burun ya da gözden akıntı gibi belirtilerin yanında 12 saatten uzun süre dışkı çıkarmamayı da veteriner hekime hemen başvurulması gereken işaretler arasında sayıyor. Tavşanlar hastalığı sıklıkla gizlediği için bekleyerek geçmesini ummak yerine vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Yaş ilerledikçe: yıllık kontrol neden önemli?' },
    { kind: 'paragraf', metin: 'MSD Veterinary Manual, tavşanların ilk edinildiğinde ve sonrasında yılda bir kez veteriner muayenesinden geçmesini öneriyor. Lennox\'un derlemesi ise tavşanların uzun yaşamasının yaşlılıkla ilgili hastalıkların artışını da beraberinde getirdiğini vurguluyor. Bu yüzden ömrün uzaması, sağlık takibinin de uzun yıllara yayılması anlamına geliyor.' },
    { kind: 'paragraf', metin: 'Dişi tavşanlarda rahim kanseri bu konunun en çok bahsedilen örneği. MSD Veterinary Manual, 3 yaşından büyük tavşanlarda rahim kanserinin yaygın ve çoğu zaman ölümcül olduğunu yazıyor. Tayland\'da Rajamangala Teknoloji Üniversitesi veteriner fakültesinden araştırmacıların 2023 tarihli çalışmasında, 5 yaşından büyük tavşanlarda üreme sistemi tümörü görülme ihtimali daha genç tavşanlara göre 3,85 kat yüksek bulundu ve en sık tür rahim adenokarsinomuydu. Yazarlar, özellikle orta yaşın ileri dönemlerinden sonra tavşanın sağlığının yıllık olarak izlenmesini öneriyor.' },
    { kind: 'paragraf', metin: 'MSD Veterinary Manual dişi tavşanlarda kısırlaştırmayı bu nedenle çok önemli olarak değerlendiriyor. Kısırlaştırmanın zamanı ve uygunluğu tavşanın yaşına ve sağlığına göre değişeceğinden bu konuyu muayenede veteriner hekimle konuşmak gerekiyor.' },

    { kind: 'baslik', metin: 'Aşı ve bulaşıcı hastalıklar' },
    { kind: 'paragraf', metin: 'MSD Veterinary Manual\'e göre evcil tavşanlar için önerilen tek rutin aşı, çok bulaşıcı ve çoğu zaman ölümcül olan RHDV-2 virüsünün yol açtığı tavşan hemorajik hastalığına karşı olan aşı. Özellikle dışarı çıkan, yabani tavşanların bulunabileceği yerlerde bulunan ya da başka evcil tavşanlarla temas eden tavşanlarda aşının önemli olduğu belirtiliyor. Türkiye\'de hangi aşının bulunduğunu ve ne zaman yapılacağını veteriner hekime sormak gerekiyor.' },
    { kind: 'uyari', metin: 'Kedi ve köpekler için güvenli olan bazı ilaçlar ve pire ürünleri tavşanlar için tehlikeli olabiliyor. MSD Veterinary Manual, bazı ağızdan antibiyotiklerin tavşanda ağır ishale ve ölüme yol açabildiğini, fipronil içeren pire ürününün tavşanlarda kullanılmaması gerektiğini bildiriyor. Evde bulunan hiçbir ilaç ya da ürün, veteriner hekime sorulmadan tavşana uygulanmamalı.' },

    { kind: 'baslik', metin: 'Tavşan sahiplenmeden önce neler düşünülmeli?' },
    { kind: 'paragraf', metin: 'Tavşan, on yıl ve üzerine yayılabilecek bir birliktelik demek. Kedilerin ve köpeklerin ömrünü [[kediler-kac-yil-yasar|kediler kaç yıl yaşar]] ve [[kopekler-kac-yil-yasar|köpekler kaç yıl yaşar]] yazılarında anlattık; tavşan da on yıl ve üzerine uzanabilen bir ilgi gerektiriyor.' },
    { kind: 'liste', maddeler: [
      'Uzun yıllara yayılacak bakımı üstlenebilmek',
      'Sınırsız saman ve taze sebzeyi düzenli sağlayabilmek',
      'Tavşanlara bakan bir veteriner hekim bulmak',
      'Yılda bir muayene bütçesi ayırmak',
      'İştah ve dışkıdaki değişikliği günlük gözlemlemek',
    ]},
    { kind: 'paragraf', metin: 'Kliniklerin egzotik hayvanlarla deneyimi farklı olabilir. Kliniği nasıl seçeceğinizi [[veteriner-klinigi-nasil-secilir|veteriner kliniği nasıl seçilir]] yazımızda anlattık; tavşan için randevu almadan önce kliniğe bu türe bakıp bakmadıklarını sormak önerilir.' },
  ],
  kontrolListesi: [
    'Saman her zaman ulaşılabilir mi?',
    'Yılda bir veteriner muayenesi var mı?',
    'Tavşana bakan veteriner hekim var mı?',
    'İştah ve dışkı her gün izleniyor mu?',
    'Kısırlaştırma konuşuldu mu?',
    'Aşı durumu veterinere soruldu mu?',
  ],
  sss: [
    { soru: 'Tavşan kaç yıl yaşar?', cevap: 'Doğru beslenen ve sağlıklı koşullarda yaşayan evcil bir tavşan 10 ile 12 yıl, hatta daha uzun yaşayabiliyor. MSD Veterinary Manual bu süreyi veriyor. Eski laboratuvar ve halk literatüründe ise 5 ile 10 yıl bildiriliyor.' },
    { soru: 'Tavşanın ortalama ömrü kaynaklara göre neden farklı?', cevap: 'Kaynaklar farklı türde verilere dayandığı için farklı süre veriyor. Laboratuvar ve halk literatüründe 5 ile 10 yıl bildirilirken, 2010 tarihli klinik derlemede 9 ya da 10 yıl yaşayan tavşanların artık düzenli görüldüğü yazıyor. MSD Veterinary Manual ise doğru beslenme ve sağlıklı koşullarda 10 ile 12 yıl ya da daha uzun veriyor.' },
    { soru: 'Bir tavşan en fazla kaç yıl yaşamış?', cevap: 'Lennox\'un 2010 tarihli derlemesinde, yazarın kendi kliniğinde bildirilen en yaşlı tavşan 14 yaşında. Bu bir üst sınır ya da beklenen süre değil, tek bir kliniğin kaydıdır. Her tavşandan bu süreyi beklemek doğru olmaz.' },
    { soru: 'Tavşanın ömrünü ne belirler?', cevap: 'Kaynaklar doğru beslenmeyi ve sağlıklı yaşam koşullarını öne çıkarıyor. Saman ağırlıklı, lif oranı yüksek beslenme sindirimi ve dişleri koruyor; yıllık veteriner muayenesi sorunların erken fark edilmesini sağlıyor. Aşı ve kısırlaştırma gibi konularda kararı veteriner hekimle birlikte vermek gerekiyor.' },
    { soru: 'Tavşan veterinere ne sıklıkla götürülmeli?', cevap: 'MSD Veterinary Manual, tavşanın ilk edinildiğinde ve sonrasında yılda bir kez veteriner muayenesinden geçmesini öneriyor. Muayenede dişler de kontrol ediliyor. İştah kaybı, dışkı çıkarmama ya da hareketsizlik gibi bir durumda ise yıllık kontrolü beklemeden hemen başvurmak gerekiyor.' },
    { soru: 'Dişi tavşanlarda kısırlaştırma neden konuşuluyor?', cevap: 'MSD Veterinary Manual, 3 yaşından büyük tavşanlarda rahim kanserinin yaygın ve çoğu zaman ölümcül olduğunu bildiriyor. Kısırlaştırma bu riski ortadan kaldırdığı için dişilerde çok önemli sayılıyor. Zamanı ve uygunluğu tavşanın durumuna bağlı olduğundan karar veteriner hekimle verilmeli.' },
    { soru: 'Evcil tavşana aşı yapılır mı?', cevap: 'MSD Veterinary Manual, evcil tavşanlar için önerilen tek rutin aşının RHDV-2 virüsünün yol açtığı tavşan hemorajik hastalığına karşı olduğunu yazıyor. Hangi aşının Türkiye\'de bulunduğunu ve uygulama zamanını veteriner hekime sormak önerilir.' },
  ],
  kaynaklar: [
    {
      kurum: 'Avian and Exotic Animal Clinic, Indianapolis',
      yazarlar: 'Lennox AM',
      baslik: 'Care of the geriatric rabbit',
      dergi: 'Vet Clin North Am Exot Anim Pract',
      yil: 2010,
      kunye: '13(1):123-33',
      doi: '10.1016/j.cvex.2009.09.002',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/20159546/',
    },
    {
      kurum: 'Rajamangala University of Technology Tawan-Ok, Faculty of Veterinary Medicine',
      yazarlar: 'Pornsukarom S, Sudjaidee P, Ratipunyapornkum N, Tungjitpeanpong T, Chettanawanit A, Amornteparak C, Sananmuang T',
      baslik: 'Analysis of occurrence and risk factors associated with pet rabbits\' tumors in Central Thailand',
      dergi: 'J Vet Med Sci',
      yil: 2023,
      kunye: '85(12):1341-1347',
      doi: '10.1292/jvms.23-0149',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/37926514/',
    },
    {
      kurum: 'MSD Veterinary Manual (Merck & Co.)',
      baslik: 'Illness of Rabbits',
      adres: 'https://www.merckvetmanual.com/all-other-pets/rabbits/illness-of-rabbits',
    },
    {
      kurum: 'MSD Veterinary Manual (Merck & Co.)',
      baslik: 'Diet for Rabbits',
      adres: 'https://www.merckvetmanual.com/all-other-pets/rabbits/diet-for-rabbits',
    },
  ],
};
