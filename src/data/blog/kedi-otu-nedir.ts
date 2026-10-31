import type { BlogYazi } from './types';

export const kediOtuNedir: BlogYazi = {
  slug: 'kedi-otu-nedir',
  baslik: 'Kedi Otu (Catnip) Nedir, Zararlı mı?',
  ozet: 'Kedi otu, kedilerin çoğunda yuvarlanma ve sürtünme davranışı yaratan bir nane ailesi bitkisi. Her kedi tepki vermiyor; ASPCA\'nın saydığı belirtiler kusma ve ishal.',
  kapakAlt:
    'Kedi otu yastığının yanında yerde yuvarlanan tekir kedi',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kedi otu (catnip), bilimsel adı Nepeta cataria olan ve çoğu kedide yuvarlanma, yüzünü sürtme gibi bir tepki yaratan bitkidir.** Etkisini nepetalactone adlı bileşenle gösteriyor. ASPCA bitkiyi kedi için toksik olarak listeliyor, ama sayılan belirtiler kusma ve ishaldir. Her üç kediden biri ise bu bitkiye hiç tepki vermiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda kedi otunun ne olduğunu, kedilerin ona verdiği tepkinin arkasındaki mekanizmayı, neden her kedide aynı sonucu görmediğimizi, zararlı olup olmadığını ve tepki vermeyen kediler için hangi bitkilerin denendiğini hakemli çalışmalara dayanarak anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Bitki', 'Tepki veren kedi oranı (100 kedi)'], satirlar: [
      ['Kedi otu (Nepeta cataria)', 'Her üç kediden biri tepki vermedi'],
      ['Gümüş asma (Actinidia polygama)', 'Yaklaşık %80'],
      ['Tatar hanımeli (Lonicera tatarica)', 'Yaklaşık %50'],
      ['Valerian kökü (Valeriana officinalis)', 'Yaklaşık %50'],
    ]},

    { kind: 'baslik', metin: 'Kedi otu nedir?' },
    { kind: 'paragraf', metin: 'Kedi otu, ballıbabagiller (Lamiaceae) familyasından bir bitkidir. İngilizcede catnip dışında catswort ve catmint adlarıyla da anılıyor. ASPCA zehirli ve zehirsiz bitki rehberinde etkin maddesini nepetalactone olarak veriyor.' },
    { kind: 'paragraf', metin: 'Nepetalactone kedi otunda en yüksek düzeyde bulunuyor. 2017 tarihli bir çalışmada araştırmacılar bitki materyallerini gaz kromatografisi ve kütle spektrometrisiyle analiz etti ve bu bileşenin diğer üç kedi çekici bitkide yalnızca çok düşük düzeyde bulunduğunu gördü.' },
    { kind: 'paragraf', metin: 'Aynı çalışma koku yoluyla zenginleştirmenin, yani kediye ilgi çekici bir koku sunmanın, çoğu zaman gözden kaçan bir yöntem olduğunu belirtiyor. Kedi otu da bu yöntemin en tanınmış örneği.' },

    { kind: 'baslik', metin: 'Kediler kedi otuna nasıl tepki verir?' },
    { kind: 'paragraf', metin: 'Evcil kediler ve diğer kedigiller kedi otuna ve gümüş asmaya yüzlerini ve başlarını sürtüyor, yerde yuvarlanıyor. Bu tepkiyi 2021\'de Science Advances dergisinde yayımlanan bir çalışma ayrıntılı biçimde inceledi. ASPCA ise etkinin kediden kediye değiştiğini, bitkinin bazı kedileri sakinleştirirken bazılarını uyardığını yazıyor.' },
    { kind: 'paragraf', metin: 'Bu bireysel fark 2022\'deki bir deneyle de ölçüldü. Altı kediyle yapılan çalışmada tepkinin süresi ve davranışın biçimi kediler arasında anlamlı ölçüde farklıydı. Her kedinin davranışı farklı bitkilerde kendi içinde tutarlıydı. Yani bir kedi sürtünüyorsa diğeri yuvarlanabiliyor, bir üçüncüsü ise yalnızca kokluyor olabilir.' },
    { kind: 'paragraf', metin: 'Beyindeki mekanizma da araştırıldı. Japonya\'daki Iwate Üniversitesi\'nden Uenoyama ve ekibi gümüş asmanın ana bileşeni olan nepetalactol\'ün kedilerde kandaki beta-endorfin düzeyini artırdığını buldu. Mu opioid reseptörleri ilaçla engellendiğinde ise klasik sürtünme davranışı baskılandı. Yani tepki, beyindeki opioid sistemi üzerinden gerçekleşiyor.' },

    { kind: 'baslik', metin: 'Her kedi tepki vermez' },
    { kind: 'paragraf', metin: 'Texas\'taki Cowboy Cat Ranch\'ten Bol ve ekibi 2017\'de 100 evcil kediye dört bitkiyi tekrar tekrar sundu ve tepkilerini kaydetti. Bulgular önceki çalışmalarla uyumluydu: her üç kediden biri kedi otuna tepki vermedi. Gümüş asmaya kedilerin yaklaşık %80\'i, Tatar hanımeline ve valerian köküne yaklaşık %50\'si tepki verdi.' },
    { kind: 'paragraf', metin: 'Kedi otuna tepki vermeyen kedilere bakıldığında tablo değişti. Bu kedilerin yaklaşık %75\'i gümüş asmaya tepki verdi, her üç kediden biri de Tatar hanımeline tepki verdi. Araştırmacılar gümüş asma ve Tatar hanımelini kedi otuna tepki vermeyen evcil kediler için iyi bir alternatif olarak değerlendirdi.' },
    { kind: 'paragraf', metin: 'Dolayısıyla kedinin bitkiye ilgi göstermemesi bir sağlık sorunu anlamına gelmez. Bu, bir kedinin yaygın bir davranış özelliğini taşımadığını gösterir. Davranışta bunun dışında bir değişiklik varsa veteriner hekime danışmak gerekiyor.' },
    { kind: 'yanilgi', baslik: '"Kedi otuna tepki vermeyen kedide bir sorun vardır"', metin: 'Araştırmalarda kedilerin yaklaşık üçte biri kedi otuna hiç tepki vermiyor. Bu tamamen olağan bir bireysel farklılıktır. Aynı kedilerin önemli bir kısmı gümüş asma gibi başka bitkilere tepki verebiliyor.' },

    { kind: 'baslik', metin: 'Kediler neden yuvarlanıp yüzlerini sürter?' },
    { kind: 'paragraf', metin: 'Bu davranışın biyolojik işlevi uzun süre bilinmiyordu. Uenoyama ve ekibi sürtünmenin bitkideki nepetalactol\'ü kedinin yüzüne ve başına taşıdığını, bu maddenin de Aedes albopictus sivrisineğini uzaklaştırdığını gösterdi. Yani kedinin bitkiye sürtünmesi, onu sivrisinek ısırığına karşı korumaya yarayan bir kimyasal savunma olabilir.' },
    { kind: 'paragraf', metin: 'Bu deneyler gümüş asmanın ana bileşeniyle yapıldı. Sonuçları doğrudan kedi otu yaprağına uygulamak doğru olmaz, ama tepkinin bitkilerin kimyasını kullanan doğal bir davranış olduğu fikri güçleniyor.' },

    { kind: 'baslik', metin: 'Kedi otu zararlı mı?' },
    { kind: 'paragraf', metin: 'ASPCA kedi otunu "kedi için toksik" olarak sınıflandırıyor. Klinik belirti olarak yazdığı şey şu: pek çok kedi bitkiyi seviyor ama bitki kusma ve ishale yol açabilir. Yani sayfada listelenen belirtiler kusma ve ishaldir.' },
    { kind: 'paragraf', metin: 'Kedi otunun bağımlılık yapıp yapmadığı sık sorulan bir sorudur. Bu konuda en doğrudan veri gümüş asmadan geliyor: 2023\'te iScience dergisinde yayımlanan çalışmada kedilerin sürekli bitkiye maruz bırakılması bağımlılık belirtisi göstermedi, stres göstergelerinde ve karaciğer ya da böbrek hasarı göstergelerinde artış olmadı. Çalışma kedi otunu değil gümüş asmayı inceledi.' },
    { kind: 'yanilgi', baslik: '"Kedi otu kediyi bağımlı yapar"', metin: 'Gümüş asmayla yapılan 2023 çalışmasında sürekli maruziyet bağımlılık belirtisi göstermedi. Çalışma kedi otunu kapsamıyor, bu yüzden kesin hüküm vermek yerine bu bulguyu en yakın veri olarak okumak daha doğru olur.' },
    { kind: 'uyari', metin: 'Kedi bitkiyi yedikten sonra kusma ya da ishal görülüyor, kedi halsizleşiyor veya davranışında bir değişiklik fark ediliyorsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Kedi otu dışında bir bitki yenmiş olabilir; [[kediler-icin-zehirli-bitkiler|kediler için zehirli bitkiler]] listesine de bakılması önerilir. Kusma üzerine ayrıntı için [[kedim-kusuyor|kedim kusuyor]] yazısı da var.' },

    { kind: 'baslik', metin: 'Kedi otu ile kedi çimi karıştırılıyor' },
    { kind: 'paragraf', metin: '"Kedi otu" adı ürün olarak çoğu zaman kedi çimi için de kullanılıyor. Bu yazıdaki kedi otu, bilimsel adı Nepeta cataria olan ve nepetalactone içeren bitkidir. Marketlerde ve mağazalarda "kedi otu" adıyla satılan, kedilerin kemirmek için kullandığı çimler ise başka bir ürün grubu. Bu çimler için [[kediler-icin-zehirli-bitkiler|kediler için zehirli bitkiler]] yazımızda güvenli seçenekleri anlattık.' },

    { kind: 'baslik', metin: 'Kedi ortamını zenginleştirmek için seçenekler' },
    { kind: 'paragraf', metin: '2017 çalışmasında gümüş asma tozu ve kedi otu, evcil kediler arasında en çok tercih edilen materyaller oldu. Gümüş asma meyve galından elde edilen toz özellikle popülerdi. 2023 çalışması da kurutulmuş gümüş asma yapraklarını kedi tepkisini en çok artıran seçenek olarak buldu; kurutma yaprağın iridoid bileşimini değiştirerek tepkiyi güçlendiriyor.' },
    { kind: 'liste', maddeler: [
      'Kedi otu kedilerin yaklaşık üçte ikisinde tepki yaratıyor',
      'Tepki vermeyen kediler gümüş asma ya da Tatar hanımeliyle denenebilir',
      'Tepki kediden kediye süre ve biçim olarak değişiyor',
      'Kusma ya da ishal görülürse veteriner hekime danışmak gerekiyor',
    ]},
  ],
  kontrolListesi: [
    'Kedi otu mu, kedi çimi mi?',
    'Kedim bitkiye tepki veriyor mu?',
    'Tepki yoksa alternatif denendi mi?',
    'Kusma ya da ishal görüldü mü?',
    'Zehirli bitkiler listesine baktım mı?',
  ],
  sss: [
    { soru: 'Kedi otu nedir?', cevap: 'Kedi otu, bilimsel adı Nepeta cataria olan ve ballıbabagiller familyasından gelen bir bitkidir. Kedilerin tepki verdiği etkin maddesi nepetalactone. Çoğu kedi bitkiye sürtünüyor ve yuvarlanıyor, yaklaşık her üç kediden biri ise hiç tepki vermiyor.' },
    { soru: 'Kedi otu kedilere zararlı mı?', cevap: 'ASPCA kedi otunu kedi için toksik olarak listeliyor ve belirtileri kusma ile ishal olarak veriyor. Aynı sayfa pek çok kedinin bitkiyi sevdiğini de belirtiyor. Kusma ya da ishal sürüyorsa veteriner hekime danışmak gerekiyor.' },
    { soru: 'Kedilerin hepsi kedi otundan etkilenir mi?', cevap: 'Hayır. 100 kediyle yapılan bir çalışmada her üç kediden biri kedi otuna tepki vermedi. Bu bir sağlık sorunu işareti değil, bireysel farklılıktır. Tepki vermeyen kedilerin yaklaşık %75\'i gümüş asmaya tepki verdi.' },
    { soru: 'Kediler kedi otuna neden sürtünür?', cevap: 'Araştırmalara göre sürtünme bitkideki maddeyi kedinin yüzüne ve başına taşıyor. Gümüş asmanın ana bileşeni nepetalactol, Aedes albopictus sivrisineğini uzaklaştırıyor. Bu yüzden davranış sivrisinek ısırığına karşı doğal bir korunma olabilir.' },
    { soru: 'Kedi otu bağımlılık yapar mı?', cevap: 'Kedi otu için doğrudan bir çalışma bu yazının kaynaklarında yok. Gümüş asmayla yapılan 2023 çalışmasında sürekli maruziyet bağımlılık belirtisi göstermedi ve stres ile karaciğer ya da böbrek hasarı göstergeleri artmadı. Yine de bu bulgu kedi otuna birebir uygulanmamalı.' },
    { soru: 'Kedi otuna tepki vermeyen kedi için ne denenebilir?', cevap: 'Araştırmalarda kedi otuna tepki vermeyen kedilerin yaklaşık %75\'i gümüş asmaya, her üç kediden biri de Tatar hanımeline tepki verdi. Araştırmacılar bu iki bitkiyi iyi alternatifler olarak değerlendirdi. Yeni bir bitkiyi tanıtmadan önce veteriner hekime danışılması önerilir.' },
    { soru: 'Kedi otu ile kedi çimi aynı şey mi?', cevap: 'Hayır. Kedi otu Nepeta cataria bitkisidir ve etkin maddesi nepetalactone. Marketlerde "kedi otu" diye satılan çimler başka ürünlerdir. Kedilere güvenli bitkiler için ASPCA listesine bakılması ve eve bitki almadan önce bu listenin kontrol edilmesi öneriliyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'ASPCA',
      baslik: 'Toxic and Non-toxic Plants: Catnip',
      adres: 'https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/catnip',
    },
    {
      kurum: 'Cowboy Cat Ranch; Technische Universität Braunschweig; UC Davis School of Veterinary Medicine',
      yazarlar: 'Bol S, Caspers J, Buckingham L, Anderson-Shelton GD, Ridgway C, Buffington CA, Schulz S, Bunnik EM',
      baslik: 'Responsiveness of cats (Felidae) to silver vine (Actinidia polygama), Tatarian honeysuckle (Lonicera tatarica), valerian (Valeriana officinalis) and catnip (Nepeta cataria)',
      dergi: 'BMC Veterinary Research',
      yil: 2017,
      kunye: '13(1):70',
      doi: '10.1186/s12917-017-0987-6',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/28302120/',
    },
    {
      kurum: 'Iwate University; University of Liverpool; Nagoya University',
      yazarlar: 'Uenoyama R, Miyazaki T, Hurst JL, Beynon RJ, Adachi M, Murooka T, Onoda I, Miyazawa Y, Katayama R, Yamashita T, Kaneko S, Nishikawa T, Miyazaki M',
      baslik: 'The characteristic response of domestic cats to plant iridoids allows them to gain chemical defense against mosquitoes',
      dergi: 'Science Advances',
      yil: 2021,
      kunye: '7(4):eabd9135',
      doi: '10.1126/sciadv.abd9135',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/33523929/',
    },
    {
      kurum: 'Cowboy Cat Ranch; University of Western Australia',
      yazarlar: 'Bol S, Scaffidi A, Bunnik EM, Flematti GR',
      baslik: 'Behavioral differences among domestic cats in the response to cat-attracting plants and their volatile compounds reveal a potential distinct mechanism of action for actinidine',
      dergi: 'BMC Biology',
      yil: 2022,
      kunye: '20(1):192',
      doi: '10.1186/s12915-022-01369-1',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/36008824/',
    },
    {
      kurum: 'Iwate University; Nagoya University; University of Liverpool',
      yazarlar: 'Uenoyama R, Ooka S, Miyazaki T, Mizumoto H, Nishikawa T, Hurst JL, Miyazaki M',
      baslik: 'Assessing the safety and suitability of using silver vine as an olfactory enrichment for cats',
      dergi: 'iScience',
      yil: 2023,
      kunye: '26(10):107848',
      doi: '10.1016/j.isci.2023.107848',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/37810229/',
    },
  ],
};
