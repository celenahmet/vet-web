import type { BlogYazi } from './types';

export const ankaraKedisi: BlogYazi = {
  slug: 'ankara-kedisi',
  baslik: 'Ankara Kedisi: Özellikleri ve Bakımı',
  ozet: 'Ankara kedisinin kökenini, görünüşünü, huyunu ve tüy bakımını; beyaz ve mavi gözlü kedilerde işitme sorununun neden konuşulduğunu anlattık.',
  kapakAlt:
    'Salonda kuyruğunu kaldırmış beyaz uzun tüylü kedi',
  kategori: 'Kedi',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Ankara kedisi (Turkish Angora), Türkiye\'nin yerli ırkıdır; uzun gövdeli, ipek gibi tek kat tüylü, iri ve dik kulaklı, insanla etkileşimi seven bir kedidir ve bakımı uzun tüylü kedilere göre kolay sayılır.** Cat Fanciers\' Association (CFA) ırkı, bilinen en eski uzun tüylü ırk olarak tanıtıyor. Öne çıkan sağlık konusu ise beyaz tüylü ve özellikle mavi gözlü kedilerde işitme kaybının görülebilmesi.' },
    { kind: 'paragraf', metin: 'Aşağıda ırkın kökenini, görünüşünü ve huyunu, tüy bakımının nasıl olduğunu, beyaz kedilerde işitme konusunda bilimsel çalışmaların ne söylediğini ve sahiplenirken nelere bakılabileceğini anlatıyoruz. Irk bilgileri kedi federasyonlarının tanımlarına, sağlık bilgileri veteriner kaynaklarına dayanıyor; tek tek bir kedinin durumunu yalnızca muayene eden veteriner hekim değerlendirebilir.' },

    { kind: 'tablo', basliklar: ['Özellik', 'Ankara kedisinde'], satirlar: [
      ['Boyut', 'Küçük ile orta arası; dişiler genellikle erkeklerden küçük'],
      ['Gövde', 'Uzun ve ince kemikli, kaslı; arka bacaklar öndekilerden uzun'],
      ['Kulak', 'Büyük, sivri, başın üstüne yakın ve dik'],
      ['Tüy', 'Tek kat; kuyruk ve boyun çevresi uzun ve ipeksi'],
      ['Göz rengi', 'Mavi, yeşil, kehribar ya da bir gözü mavi diğeri başka renk'],
      ['Tarama sıklığı', 'CFA\'ya göre ayda iki ya da üç kez'],
    ]},

    { kind: 'baslik', metin: 'Ankara kedisi nereden geliyor?' },
    { kind: 'paragraf', metin: 'CFA, ırkın yazılı tarihinin 1600\'lere uzandığını, kedilerin o dönemde Orta Doğu\'dan Avrupa\'ya getirildiğini yazıyor. Fransa\'da çok sevilen ırkın Marie Antoinette\'in kedileri arasında olduğuna inanılıyor. İngiltere\'de kedi yetiştiriciliği yaygınlaşınca Ankara kedileri İran kedileriyle o kadar sıkı çiftleştirilmiş ki ırk neredeyse ortadan kalkmış.' },
    { kind: 'paragraf', metin: 'CFA\'ya göre ulusal ırkın yok olma riskini fark eden Türk hükümeti 1930\'larda hayvanat bahçelerinde koruma amaçlı üretim programları kurdu. Yalnızca beyaz kediler gerçek Ankara kedisi sayıldı. Irk 1954\'te ilk kez ABD\'ye gittiğinde de tamamen beyaz bir ırk olarak görülüyordu. Bugün çikolata, leylak ve renk uçlu (pointed) desen dışında hemen her renkte Ankara kedisi bulunuyor.' },
    { kind: 'paragraf', metin: 'Ankara Üniversitesi Veteriner Fakültesi\'nden Bilgen ve ekibi 2024\'te Gene dergisinde, Türkiye\'nin farklı bölgelerinden 240 örnekle melez kedilerin mitokondriyal DNA profillerini Ankara kedisi ve Van kedisiyle karşılaştırdı. Araştırmacılar bunu Türkiye\'deki kedi gen havuzuna dair öncü bir çalışma olarak tanımlıyor.' },

    { kind: 'baslik', metin: 'Görünüşü: uzun gövde, iri kulak, her renk' },
    { kind: 'paragraf', metin: 'CFA ırk standardı, ideal Ankara kedisini dengeli, zarif ve orta boyutlu tarif ediyor. Gövde uzun ve ince kemikli, ama kaslı; boyun uzun ve ince, patiler küçük ve yuvarlak, kuyruk uzun ve gür bir fırça biçiminde. Baş, orta uzunlukta bir üçgen biçiminde ve profili düz. Standart, genel dengenin ve ince kemik yapısının gerçek boyuttan daha önemli olduğunu belirtiyor.' },
    { kind: 'paragraf', metin: 'Gözler badem biçiminde ve hafifçe yukarı eğik. Standarda göre göz rengi ile tüy rengi arasında bir ilişki yok; mavi, yeşil, yeşilimsi altın ve kehribar renkler kabul ediliyor. Bir gözü mavi, diğeri yeşil, altın ya da kehribar olan "farklı gözlü" kediler de kabul ediliyor ve CFA bunların sık görüldüğünü, ayrıca çok beğenildiğini yazıyor.' },
    { kind: 'yanilgi', baslik: '"Gerçek Ankara kedisi yalnızca beyaz olur"', metin: 'Tarihte yalnızca beyaz kediler gerçek sayıldı, ama CFA bugün ırkın çikolata, leylak ve renk uçlu desen dışında hemen her renkte bulunduğunu yazıyor. Renkli Ankara kedileri de ırkın tam üyesidir.' },

    { kind: 'baslik', metin: 'Huyu: etkileşimli ve yüksekte durmayı seven' },
    { kind: 'paragraf', metin: 'CFA Ankara kedisini en çok etkileşim kuran ve sevgi gösteren ırklardan biri olarak tanıtıyor. Sahiplerinin yaptığı her işte "yardımcı" olmak istediklerini, çoğu zaman köpeğe benzetildiklerini ve küçük çocuklar için iyi bir evcil hayvan olduklarını yazıyor. Aynı kaynak, zekâ düzeyinin kediden kediye çok değiştiğini de not ediyor.' },
    { kind: 'paragraf', metin: 'Aynı anlatımda ırk, yerden çok dolabın tepesinde bulunan kediler olarak tarif ediliyor; yani evde yüksek bir yer bırakmak işe yarıyor. Gün boyu evde yalnız kalabilecek kadar bağımsız olsalar da eve gelen kişiyi kapıda karşılamak istedikleri belirtiliyor. Bunlar ırk tarifidir; her kedinin huyu farklıdır. Evde yalnız kalma süresi için [[kedi-kac-gun-yalniz-kalabilir|kedi kaç gün yalnız kalabilir]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Tüy bakımı: uzun tüylü ama dolaşmayan kedi' },
    { kind: 'paragraf', metin: 'CFA, Ankara kedisinin tek kat tüyünün düğüm oluşturmaya pek yatkın olmadığını ve bu yüzden bakımı en kolay uzun tüylü ırklardan biri olduğunu yazıyor. Genç kedilerde dökülmeyi kontrol etmek için ayda iki ya da üç kez taramanın yeterli olabileceğini, yaşlı kedilerde daha sık taramanın gerekebileceğini belirtiyor. Dökülme konusunda genel bilgi için [[kedi-tuy-dokumu|kedi tüy dökümü]] yazısına bakılabilir.' },
    { kind: 'paragraf', metin: 'Yıkama gerekirse CFA\'ya göre ırk suya karşı doğal bir ilgi duyduğu için çoğunlukla iyi tolere ediyor. Yıkama sıklığı için [[kedi-yikanir-mi|kedi yıkanır mı]] yazısına bakılabilir. Tırnak, diş ve parazit bakımı diğer kedilerden farklı değil: [[kedi-tirnagi-nasil-kesilir|tırnak kesimi]], [[kedilerin-disleri-nasil-temizlenir|diş temizliği]] ve [[kedilerde-ic-ve-dis-parazit|iç ve dış parazit]] yazıları aynen geçerli.' },

    { kind: 'baslik', metin: 'Beyaz kedilerde işitme: bilinmesi gereken konu' },
    { kind: 'paragraf', metin: 'CFA, Ankara kedisinin ırka özgü bilinen bir sağlık sorunu olmadığını yazıyor. Aynı kaynak yine de beyaz kedilerin, özellikle mavi gözlülerin sağırlığa yatkın olabileceğini belirtiyor. Louisiana State University\'den Strain, kedilerde sağırlığın çoğunlukla genetik olduğunu ve beyaz tüy ile mavi gözle güçlü biçimde ilişkili olduğunu aktarıyor.' },
    { kind: 'paragraf', metin: 'Birleşik Krallık\'ta Mari ve ekibi, 132 beyaz safkan yavru kediyi ve 61 renkli kardeşini işitme sinyali testiyle (BAER) inceledi. Doğuştan sensörinöral sağırlık yalnızca beyaz yavrularda görüldü ve oranı yüzde 30,3 çıktı. En az bir gözü mavi olan yavrularda sağırlık, mavi gözü olmayanlara göre 3,2 kat daha olasıydı. Çalışmada Ankara kedisi yoktu, ama Türkiye kökenli bir başka ırk olan Van kedisinden beyaz yavrular vardı.' },
    { kind: 'tablo', basliklar: ['Beyaz yavru ırkı', 'Sağırlık saptanan', 'Oran'], satirlar: [
      ['Van kedisi', '7 / 15', 'yüzde 46,7'],
      ['Maine Coon', '8 / 18', 'yüzde 44,0'],
      ['Norwegian Forest', '18 / 41', 'yüzde 43,9'],
      ['British Shorthair', '3 / 11', 'yüzde 27,3'],
      ['Russian', '1 / 21', 'yüzde 4,8'],
    ]},
    { kind: 'paragraf', metin: 'Bu tablo Ankara kedisi için doğrudan bir rakam vermiyor ve örnekler küçük. Yine de "beyaz tüy, mavi göz ve işitme" ilişkisinin ırklar arasında değiştiğini gösteriyor. Ankara kedisi çalışmaya dahil edilmediği için beyaz bir Ankara yavrusunun işitmesi hakkında yalnızca tek bir kediye yapılan test kesin bilgi verebilir.' },
    { kind: 'yanilgi', baslik: '"Beyaz ve mavi gözlü kedi mutlaka sağırdır"', metin: 'MSD Veteriner El Kitabı, beyaz tüylü ve mavi gözlü kedilerin bazen ama her zaman değil sağır olduğunu yazıyor. Mari ve ekibinin çalışmasında da iki mavi irisi olan beyaz yavruların yüzde 50\'sinde sağırlık görüldü, yani diğer yarısında görülmedi. Hangi kedinin duyduğunu yalnızca test gösterir.' },
    { kind: 'uyari', metin: 'Yavru kedi seslere tepki vermiyorsa ya da tek kulağı duymuyor gibiyse nedeni ne olursa olsun veteriner hekime başvurmak gerekiyor. MSD kılavuzu bakteriyel kulak enfeksiyonlarında işitmenin geri gelebildiğini, doğuştan sağırlığın ise tedavisi olmadığını yazıyor; ikisini ayırmak muayene gerektirir.' },

    { kind: 'baslik', metin: 'Sağırlık nasıl anlaşılır, sağır kediyle nasıl yaşanır?' },
    { kind: 'paragraf', metin: 'MSD El Kitabı, doğuştan sağırlığın veteriner hekim tarafından kedinin seslere verdiği tepkiye bakılarak tanındığını, grup içinde yaşayan sağır bir kedinin diğerlerini taklit ederek fark edilmeyebildiğini yazıyor. Seslere tepkinin güvenilir hale geldiği 3 ile 4 haftalık yaştan sonra test daha güvenilir oluyor. Tek kulaklı sağırlığı özel bir testsiz ayırt etmek ise özellikle zor.' },
    { kind: 'paragraf', metin: 'Strain da davranışa bakarak yapılan işitme değerlendirmesinin öznel olduğunu ve tek taraflı sağırlığı güvenilir biçimde yakalayamadığını yazıyor. Objektif yöntem olan BAER testi her yerde yapılamıyor. Mevcut hâliyle duyma hücrelerinin kaybını geri döndüren bir tedavi yok. MSD kılavuzuna göre pek çok sağır ya da kısmen sağır kedi iyi uyum sağlıyor, ancak güvenlik için dışarıya yalnızca tasmayla çıkarılmaları gerekiyor.' },
    { kind: 'paragraf', metin: 'CFA ise beyaz kedilerin her zaman renkli kedilerle çiftleştirilmesinin sağır yavru riskini azalttığını, bazı ülkelerde beyaz yavrulardan BAER testi şart koşulduğunu, renkli Ankara kedisi seçmenin sağırlık kaygısını ortadan kaldırdığını belirtiyor. Bu bilgiler, yetiştiriciye sorulacak soruların listesine eklenebilir.' },

    { kind: 'baslik', metin: 'Sahiplenirken neye bakılmalı?' },
    { kind: 'liste', maddeler: [
      'Yavrunun anne ve babasının rengini ve işitme durumunu sormak',
      'Beyaz yavru için BAER testi yapılıp yapılmadığını öğrenmek',
      'Yavrunun soy belgesini ve kayıt bilgisini istemek',
      'Aşı ve kontrol planını veteriner hekimle birlikte yapmak',
      'Evde yüksek tırmanma ve dinlenme alanı bırakmak',
    ]},
    { kind: 'paragraf', metin: 'CFA, ırkın çok sevildiğini ama etkin yetiştirici sayısının talebi karşılamadığını yazıyor; renkli yavruların beyazlara göre bulunması daha kolay olabilir, emekli sergi kedisi sahiplenmek ise daha hızlı ve ucuz olabilir. Aşı programı için [[kedi-asi-takvimi|kedi aşı takvimi]], kontrol sıklığı için [[kedi-kopek-check-up-ne-zaman|kedi ve köpekte check-up ne zaman yapılmalı]] yazıları kullanılabilir. Alım satıma dair kurallar için [[kedi-kopek-satmak-yasak-mi|kedi köpek satmak yasak mı]] yazısına bakılabilir.' },
  ],
  kontrolListesi: [
    'Yavrunun işitmesi test edildi mi?',
    'Ebeveynlerin rengi biliniyor mu?',
    'Soy belgesi ve kayıt var mı?',
    'Tüy taraması düzenli yapılıyor mu?',
    'Yüksek bir dinlenme alanı var mı?',
    'Aşı ve kontrol planı var mı?',
  ],
  sss: [
    { soru: 'Ankara kedisi hangi ülkenin ırkı?', cevap: 'Türkiye\'nin. CFA ırkı kendi ülkesinde ulusal bir hazine olarak tanıtıyor ve bilinen en eski uzun tüylü ırk olduğunu yazıyor. Irkın yazılı tarihi 1600\'lere uzanıyor. Türk hükümeti 1930\'larda ırkı korumak için hayvanat bahçelerinde üretim programları kurdu.' },
    { soru: 'Ankara kedisinin tüy bakımı zor mu?', cevap: 'Hayır, uzun tüylü kedilere göre kolay sayılıyor. CFA tek kat tüyün düğüm oluşturmaya pek yatkın olmadığını yazıyor ve genç kedilerde ayda iki ya da üç tarama öneriyor. Yaşlı kedilerde daha sık gerekebiliyor. Dökülme dönemlerinde tarama sıklığını artırmak işe yarar.' },
    { soru: 'Ankara kedisi her zaman beyaz mıdır?', cevap: 'Hayır. Tarihte yalnızca beyaz kediler gerçek sayıldı, ama CFA bugün ırkın çikolata, leylak ve renk uçlu desen dışında hemen her renkte bulunduğunu yazıyor. Renkli Ankara kedileri de ırkın üyesidir, üstelik beyazlardaki işitme kaygısını taşımazlar.' },
    { soru: 'Beyaz Ankara kedisi sağır olur mu?', cevap: 'Olabilir, ama her zaman olmaz. CFA beyaz kedilerin, özellikle mavi gözlülerin sağırlığa yatkın olabileceğini yazıyor. MSD El Kitabı beyaz ve mavi gözlü kedilerin bazen ama her zaman değil sağır olduğunu belirtiyor. Kesin cevabı veteriner hekim işitme testiyle verir.' },
    { soru: 'Sağır kedi evde mutlu yaşar mı?', cevap: 'Çoğu uyum sağlıyor. MSD El Kitabı pek çok sağır ya da kısmen sağır kedinin iyi uyum sağladığını yazıyor. Tek önlem güvenlik: dışarıya yalnızca tasmayla çıkarılmaları gerekiyor. Doğuştan sağırlığın tedavisi yok, bu yüzden uyumu kolaylaştıran ev düzeni önem kazanıyor.' },
    { soru: 'Ankara kedisi çocuklarla geçinir mi?', cevap: 'Genellikle iyi geçindiği yazılıyor. CFA tahammüllü ve sevgi dolu yapılarını, sık dokunulmaya toleranslarını ve küçük çocuklar için iyi birer evcil hayvan olduklarını belirtiyor. Yine de bunlar ırk tarifidir; her kedinin huyu farklıdır.' },
  ],
  kaynaklar: [
    {
      kurum: 'The Cat Fanciers\' Association (CFA)',
      baslik: 'Turkish Angora (ırk profili ve ırk standardı)',
      adres: 'https://cfa.org/turkish-angora/',
    },
    {
      kurum: 'MSD Veterinary Manual (Merck Veterinary Manual)',
      baslik: 'Deafness in Cats',
      adres: 'https://www.merckvetmanual.com/cat-owners/ear-disorders-of-cats/deafness-in-cats',
    },
    {
      kurum: 'Animal Health Trust, Neurology/Neurosurgery Service, Newmarket',
      yazarlar: 'Mari L, Freeman J, Van Dijk J, De Risio L',
      baslik: 'Prevalence of congenital sensorineural deafness in a population of client-owned purebred kittens in the United Kingdom',
      dergi: 'Journal of Veterinary Internal Medicine',
      yil: 2019,
      kunye: '33(4):1707-1713',
      doi: '10.1111/jvim.15515',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/31144374/',
    },
    {
      kurum: 'Louisiana State University, School of Veterinary Medicine',
      yazarlar: 'Strain GM',
      baslik: 'Hearing disorders in cats',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2017,
      kunye: '19(3):276-287',
      doi: '10.1177/1098612X17695062',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/28245737/',
    },
    {
      kurum: 'Ankara Üniversitesi Veteriner Fakültesi, Hayvan Genetiği Anabilim Dalı',
      yazarlar: 'Bilgen N, Güvendi M, Sezgin E, Can H, Köseoğlu AE, Erkunt Alak S, Döşkaya M, Ün C',
      baslik: 'Mitotyping of random bred cats and pure breed cats (Turkish Angora and Turkish Van) using non-repetitive mitochondrial DNA control region',
      dergi: 'Gene',
      yil: 2024,
      kunye: '892:147849',
      doi: '10.1016/j.gene.2023.147849',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/37776989/',
    },
  ],
};
