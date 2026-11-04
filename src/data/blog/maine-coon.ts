import type { BlogYazi } from './types';

export const maineCoon: BlogYazi = {
  slug: 'maine-coon',
  baslik: 'Maine Coon: Özellikleri ve Bakımı',
  ozet: 'Maine Coon, tescilli kedi ırklarının en büyüğü olarak tanımlanıyor. Boyunu, huyunu, tüy bakımını, kalp kası hastalığı ve kalça verilerini anlattık.',
  kapakAlt:
    'Koltuk minderine uzanmış uzun tüylü Maine Coon kedi',
  kategori: 'Kedi',
  tarih: '2026-11-12',
  bloklar: [
    { kind: 'paragraf', metin: '**Maine Coon, tescilli kedi ırklarının en büyüğü olarak tanımlanan, kalın ve dökümlü tüylü, kulakları ve patileri püsküllü, sosyal ve uysal huylu bir kedi ırkıdır; erkeklerin ağırlığı 20 pounda (yaklaşık 9 kg) ulaşabilir ya da geçebilir, tam gelişim üç yıla kadar sürebilir.** Irkta bakım için haftada iki üç kez tarama öneriliyor; sağlık tarafında ise kalp kası hastalığı (HCM) ve kalça displazisi için tarama konuşuluyor.' },
    { kind: 'paragraf', metin: 'Aşağıda ırkın kökenini, görünüşünü, huyunu ve tüy bakımını; kalp ve kalça sağlığına ilişkin çalışmaların ne söylediğini ve sahiplenirken nelere bakılabileceğini anlatıyoruz. Sağlık rakamları belirli kedi gruplarında yapılmış çalışmalardan geliyor, bu yüzden tek bir kediye birebir uygulanmıyor.' },

    { kind: 'tablo', basliklar: ['Özellik', 'Maine Coon'], satirlar: [
      ['Boyut', 'Tescilli ırkların en büyüğü; yetişkin erkekler 20 pounda (yaklaşık 9 kg) ulaşabilir, dişiler genelde daha küçük'],
      ['Tüy', 'Kalın ve dökümlü; omuzlarda kısa, yanlarda, karında ve arka bacaklarda uzun'],
      ['Baş', 'Dikdörtgen biçimli; kare burun, iri ve püsküllü kulaklar'],
      ['Olgunlaşma', 'Yavaş; tam gelişim üç yıla kadar sürebilir'],
      ['Huy', 'Sosyal, sadık, zeki; uysal ve rahat'],
      ['Tüy bakımı', 'Haftada iki üç kez tarama, her seferinde beş on dakika'],
    ]},

    { kind: 'baslik', metin: 'Kökeni: New England\'dan kedi gösterilerine' },
    { kind: 'paragraf', metin: 'Cat Fanciers\' Association (CFA), Maine Coon\'un belgelenmiş geçmişinin 1850\'lere uzandığını yazıyor. CFA\'ya göre kökleri New England\'a dayanıyor; ırkın atalarının, ilk yerleşimcilerle birlikte karaya çıkan kısa tüylü gemi kedileri olduğu belirtiliyor. Irk, ABD\'deki ilk kedi gösterisinde, 1895\'te boy gösterdi: kahverengi tekir Cosey o gösteride en iyi kedi seçildi.' },
    { kind: 'paragraf', metin: '20. yüzyılın başında diğer uzun tüylü ırklar öne çıkınca Maine Coon gösteri salonlarından silindi. CFA, 1960\'lı ve 70\'li yıllarda yetiştiricilerin tam tanınma için çaba harcadığını, ırkın 1976\'da şampiyonluk statüsü kazandığını anlatıyor.' },
    { kind: 'yanilgi', baslik: '"Maine Coon, kedi ile rakunun melezidir"', metin: 'CFA, kahverengi tekir Maine Coon\'ların kalın halkalı kuyruğunun kedilerin rakunlarla çiftleştiği kuramına yol açtığını, bu birleşmenin genetik olarak imkânsız olduğu anlaşılmadan önce "Coon" adının bu yüzden verildiğini yazıyor. Yani adın içindeki "Coon" rakuna benzeyen kuyruktan geliyor, bir akrabalıktan değil.' },

    { kind: 'baslik', metin: 'Görünüşü ve boyutu: iri, kaslı, püsküllü' },
    { kind: 'paragraf', metin: 'CFA\'ya göre yetişkin bir Maine Coon\'un tüyü kalın ve gösterişli: omuzlarda daha kısa, yanlarda, karında ve arka bacaklarda daha uzun, gür ve tüylü bir kuyrukla son buluyor. Baş dikdörtgen biçiminde, burun kare ve güçlü. Kulaklar çok iri ve genellikle belirgin püsküllü, gözler iri ve ifadeli. Irk standardı iri, yuvarlak ve püsküllü patileri tarif ediyor; ön ayaklarda beş, arka ayaklarda dört parmak var.' },
    { kind: 'paragraf', metin: 'Boyuta gelince CFA ırkı "tescilli kedilerin en büyüğü" diye anıyor. Olgun bir erkeğin ağırlığının 20 pounda ulaşması ya da geçmesi sıra dışı sayılmıyor, dişiler genellikle daha küçük. Irk yavaş olgunlaşıyor ve tam büyüklüğe üç yıla kadar varabiliyor. Genel gelişim takvimi için [[kediler-kac-yasina-kadar-buyur|kediler kaç yaşına kadar büyür]] yazısına bakılabilir.' },
    { kind: 'paragraf', metin: 'CFA ırk standardı bir noktayı özellikle vurguluyor: hiçbir özellik zayıflığa yol açacak kadar abartılmamalı ve boyut uğruna kaliteden ödün verilmemeli. Standart ayrıca yavaş olgunlaşmaya pay bırakılması gerektiğini yazıyor.' },

    { kind: 'baslik', metin: 'Huyu: sosyal, zeki, aileyle iç içe' },
    { kind: 'paragraf', metin: 'CFA, Maine Coon\'ları sosyal, sadık ve eskiden çalışan kedi olmanın getirdiği zekâya sahip olarak anlatıyor. Ev halkının her üyesiyle ilgilendikleri, bir kucaktan ötekine geçtikleri ve tek bir favori seçmedikleri yazılıyor. Su sevdikleri, damlayan musluğu izleyebildikleri, yiyecek ya da oyuncak yıkayabildikleri, hatta duşa katılmaya çalışabildikleri belirtiliyor.' },
    { kind: 'paragraf', metin: 'Aynı kaynağa göre bu kediler oldukça bağımsız ve orta düzeyde insan ilgisine ihtiyaç duyuyor; fırsat bulduklarında ise ilgiyi talep ediyorlar. Çocuklarla ve diğer hayvanlarla iyi geçinseler de iri cüsseleri başta çocukları ve diğer hayvanları ürkütebiliyor. Günlük sesleri cıvıltı, tril ve mırlama ile ara sıra miyav içeriyor; CFA konuşkan bir ırk saymıyor. Evde başka bir hayvan varsa tanıştırma için [[kedi-ile-kopek-nasil-alistirilir|kedi ile köpek nasıl alıştırılır]] yazısı işe yarar. Her kedinin huyu farklıdır, bunlar ırk tarifidir, garanti değildir.' },

    { kind: 'baslik', metin: 'Tüy bakımı: haftada iki üç kez tarama' },
    { kind: 'paragraf', metin: 'CFA, dökülmeyi kontrol etmek, tüy yumağını önlemek ve tüyün keçeleşmesine karşı korumak için Maine Coon\'un haftada iki ya da üç kez taranmasını yetiştiricilerin önerdiğini yazıyor. Bu seanslar beş on dakikadan uzun sürmek zorunda değil. Çoğu Maine Coon düzenli banyo gerektirmiyor; zaman zaman yapılan banyo ise görünüme katkı sağlıyor.' },
    { kind: 'paragraf', metin: 'Banyo yapılacaksa kullanılacak ürünler için CFA yetiştiriciye danışılmasını öneriyor, çünkü her tüyün yapısı biraz farklı. Ürün seçiminde ve kedinin tüy ya da deri sorununda veteriner hekime de sorulabilir. Dökülme ve tüy yumağı konusunda [[kedi-tuy-dokumu|kedi tüy dökümü]], banyo konusunda [[kedi-yikanir-mi|kedi yıkanır mı]] yazılarına bakılabilir.' },

    { kind: 'baslik', metin: 'Kalp kası hastalığı (HCM): ırkta bilinen bir gündem' },
    { kind: 'paragraf', metin: 'Kedilerde hipertrofik kardiyomiyopati (HCM), kalbin sol karıncık duvarının kalınlaşmasıyla seyreden bir hastalık. Cornell Üniversitesi Veteriner Fakültesi, hastalığın belirli ırklarda daha sık görüldüğünü yazıyor; sayılan ırklar arasında Maine Coon da var. Cornell\'e göre HCM ekokardiyografiyle tanınıyor; kalp kasındaki kalınlaşma yüksek tansiyon ve hipertiroidi gibi durumlarda da görüldüğü için bunların önce dışlanması gerekiyor.' },
    { kind: 'paragraf', metin: 'Avrupa kedi nüfusunda yapılan bir çalışmada 3757 kedi, aralarında 2744 Maine Coon olmak üzere, MYBPC3-A31P adlı gen değişikliği (mutasyon) için tarandı. Bu mutasyon bir British Longhair dışında yalnızca Maine Coon\'larda bulundu ve ırkta yaygınlığı yüzde 41,5 çıktı. Ekokardiyografi yapılan 164 Maine Coon\'un (ortalama yaş 2,6) 55\'inde (yüzde 34) mutasyon vardı, 12\'sinde (yüzde 7) HCM saptandı. Mutasyon, HCM riskinde anlamlı artışla ilişkili bulundu (göreli risk 9,91).' },
    { kind: 'paragraf', metin: 'Aynı çalışma tablonun karmaşık olduğunu da gösteriyor: mutasyonu taşıyıp HCM saptanmayan genç kediler vardı, mutasyonu taşımadığı hâlde HCM görülen kediler de. Cornell de gen testlerinin sonucunun veteriner hekimin rehberliğinde dikkatle yorumlanması gerektiğini, mutasyonu taşıyan her kedinin hastalığı geliştirmediğini yazıyor. Kalp muayenesinin kim için gerektiğine kediyi muayene eden veteriner hekim karar veriyor.' },
    { kind: 'uyari', metin: 'Cornell\'e göre HCM\'li kedilerin çoğu hasta görünmeyebiliyor; bazıları ise nefes zorluğu, ağız açık soluma ya da halsizlik gösterebiliyor. Kalpte oluşan pıhtı arka bacaklara giden kan akışını tıkayabiliyor ve ani arka bacak ağrısına ya da felce yol açabiliyor. Kedide nefes almada zorlanma ya da arka bacaklarda ani ağrı veya kullanamama görülürse nedeni ne olursa olsun vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Kalça displazisi: iri yapının sağlık bedeli' },
    { kind: 'paragraf', metin: 'Cornell Üniversitesi ve Indiana Üniversitesi araştırmacılarından Loder ve Todhunter, Orthopedic Foundation for Animals kayıt defterindeki kedileri inceledi. Kayıttaki 2732 kedinin 2708\'i (yüzde 99,1) Maine Coon\'du. Sınıflandırılabilen 2548 Maine Coon\'un 635\'inde (yüzde 24,9) kalça displazisi vardı; erkeklerde yüzde 27,3, dişilerde yüzde 23,3 görüldü. Araştırmacılar bulguların başka ırklara ya da başka Maine Coon gruplarına taşınırken dikkatli olunması gerektiğini de yazıyor.' },
    { kind: 'paragraf', metin: 'İsveç\'ten Low ve ekibi ise 20 yıllık röntgenle tarama programı verisinden 5038 soy kütüklü Maine Coon\'u inceledi. Kalça displazisi oranı yüzde 37,4 bulundu. Hastalığın şiddeti yaşla ve vücut kütlesiyle artıyordu; şiddet sınıflarının kalıtsallığı 0,36 hesaplandı. Şiddet vücut kütlesiyle genetik olarak ilişkili çıktı (0,285), yani iri vücut için seçilim kalça displazisi için de seçilim anlamına gelebiliyor. Displaziye karşı yapılan seçici üretimle şiddet azaldı ve bu kedilerin atalarından kuşak başına 33 g daha hafif olduğu görüldü. Araştırmacılar iri vücudu özendiren ırk standartlarına karşı uyarıyor.' },
    { kind: 'paragraf', metin: 'İki çalışma farklı kedi gruplarına, farklı ülkelere ve farklı kriterlere dayandığı için yüzde 24,9 ile yüzde 37,4 birbirinin çelişkisi değil, farklı örneklerin ölçümü. Kedinin hareketinde bir değişiklik fark edilirse nedeni belirlemek veteriner hekimin işi; evde ağrı kesici ya da başka bir ilaç denememek gerekiyor.' },

    { kind: 'baslik', metin: 'Sahiplenirken ve sonrasında neye bakılabilir?' },
    { kind: 'paragraf', metin: 'CFA, ırkın sağlık sorunlarının yetiştiriciler tarafından yönetildiğini; kalça displazisi için röntgenle, HCM için tükürük (gen) testi ve ekokardiyografiyle yapılan testlerin sağlıklı ve çeşitli bir gen havuzunun korunmasında etkili olduğunu yazıyor. Bu yüzden yavru sahiplenirken şu sorular sorulabilir:' },
    { kind: 'liste', maddeler: [
      'Anne ve babanın kalp taraması (ekokardiyografi) yapıldı mı?',
      'HCM gen testi sonuçları var mı?',
      'Anne ve babanın kalça röntgeni sonucu var mı?',
      'Yavrunun veteriner kontrolü ve aşıları yapıldı mı?',
    ]},
    { kind: 'paragraf', metin: 'Sonrasında düzenli tartı, haftalık tarama ve veteriner kontrolü önerilir. Kontrol aralıkları için [[kedi-kopek-check-up-ne-zaman|kedi ve köpekte check-up ne zaman yapılmalı]], günlük mama miktarı için [[kedi-gunde-kac-gram-mama-yer|kedi günde kaç gram mama yer]], ömür bilgisi için [[kediler-kac-yil-yasar|kediler kaç yıl yaşar]] yazılarına göz atılabilir.' },
  ],
  kontrolListesi: [
    'Anne babada kalp taraması var mı?',
    'Kalça röntgeni sonucu var mı?',
    'Haftada iki üç kez tarama var mı?',
    'Düzenli kilo takibi var mı?',
    'Veteriner kontrolü planlandı mı?',
  ],
  sss: [
    { soru: 'Maine Coon kaç kilo olur?', cevap: 'Olgun bir erkek Maine Coon\'un ağırlığının 20 pounda (yaklaşık 9 kg) ulaşması ya da geçmesi CFA\'ya göre sıra dışı değil. Dişiler genellikle daha küçük kalıyor. Sağlıklı kilo kediye göre değiştiği için kedinin ideal kilosunu veteriner hekim muayenede belirler.' },
    { soru: 'Maine Coon kaç yaşında tam büyür?', cevap: 'Tam büyüklüğe üç yıla kadar varabiliyor, çünkü ırk yavaş olgunlaşıyor. CFA ırk standardı da yavaş olgunlaşmaya pay bırakılmasını istiyor. Kedinin kendi gelişimini düzenli kontrollerde veteriner hekim izler.' },
    { soru: 'Maine Coon\'un tüy bakımı nasıl yapılır?', cevap: 'Haftada iki ya da üç kez taramak, CFA\'nın aktardığı yetiştirici önerisi. Her seans beş on dakikadan uzun sürmek zorunda değil. Çoğu Maine Coon düzenli banyo gerektirmiyor. Tarama dökülmeyi, tüy yumağını ve keçeleşmeyi önlemeye yardımcı oluyor.' },
    { soru: 'Maine Coon kucağa gelir mi?', cevap: 'Aile üyelerinin hepsiyle ilgilenir, bir kucaktan ötekine geçer ve tek bir favori seçmez. CFA onları aynı zamanda oldukça bağımsız olarak anlatıyor. Her kedinin huyu farklı olduğu için bu tarif bir garanti değildir.' },
    { soru: 'Maine Coon rakunla melez mi?', cevap: 'Hayır, rakunla melez değil. CFA, kedi ile rakunun çiftleşmesinin genetik olarak imkânsız olduğunu yazıyor. "Coon" adı, kahverengi tekir Maine Coon\'ların kalın halkalı kuyruğunun rakunu andırmasından doğan eski bir kuramdan geliyor.' },
    { soru: 'Maine Coon\'da kalp kası hastalığı görülür mü?', cevap: 'Görülebiliyor. Cornell, HCM\'nin Maine Coon dahil belirli ırklarda daha sık olduğunu yazıyor. Avrupa çalışmasında ekokardiyografi yapılan 164 Maine Coon\'un 12\'sinde (yüzde 7) HCM saptandı. Tanı ekokardiyografiyle konuyor ve değerlendirmeyi veteriner hekim yapıyor.' },
    { soru: 'Maine Coon\'da kalça displazisi görülür mü?', cevap: 'Görülebiliyor. Orthopedic Foundation for Animals kaydındaki 2548 Maine Coon\'un yüzde 24,9\'unda kalça displazisi vardı. İsveç\'te 5038 kedilik taramada oran yüzde 37,4 bulundu. Tanı röntgenle konuyor ve değerlendirme veteriner hekimin işi.' },
  ],
  kaynaklar: [
    {
      kurum: 'The Cat Fanciers\' Association (CFA)',
      baslik: 'Maine Coon Cat (ırk profili ve ırk standardı)',
      adres: 'https://cfa.org/maine-coon/',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Hypertrophic Cardiomyopathy',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/hypertrophic-cardiomyopathy',
    },
    {
      kurum: 'ANTAGENE, Animal Genetics Laboratory (Lyon, Fransa)',
      yazarlar: 'Mary J, Chetboul V, Sampedrano CC, Abitbol M, Gouni V, Trehiou-Sechi E, Tissier R, Queney G, Pouchelon JL, Thomas A',
      baslik: 'Prevalence of the MYBPC3-A31P mutation in a large European feline population and association with hypertrophic cardiomyopathy in the Maine Coon breed',
      dergi: 'Journal of Veterinary Cardiology',
      yil: 2010,
      kunye: '12(3):155-161',
      doi: '10.1016/j.jvc.2010.06.004',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/21051304/',
    },
    {
      kurum: 'Indiana University School of Medicine; Cornell University College of Veterinary Medicine',
      yazarlar: 'Loder RT, Todhunter RJ',
      baslik: 'Demographics of hip dysplasia in the Maine Coon cat',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2018,
      kunye: '20(4):302-307',
      doi: '10.1177/1098612X17705554',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/28430011/',
    },
    {
      kurum: 'Swedish University of Agricultural Sciences',
      yazarlar: 'Low M, Eksell P, Högström K, Olsson U, Audell L, Ohlsson Å',
      baslik: 'Demography, heritability and genetic correlation of feline hip dysplasia and response to selection in a health screening programme',
      dergi: 'Scientific Reports',
      yil: 2019,
      kunye: '9(1):17164',
      doi: '10.1038/s41598-019-53904-w',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/31748658/',
    },
  ],
};
