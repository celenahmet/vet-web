import type { BlogYazi } from './types';

export const labradorRetriever: BlogYazi = {
  slug: 'labrador-retriever',
  baslik: 'Labrador Retriever: Özellikleri ve Bakımı',
  ozet: 'Labrador Retriever iyi huylu ve çevik bir av köpeği ırkı. Boyu, renkleri, mizacı ve en çok dikkat isteyen konu olan kilo takibi kaynaklarla anlatılıyor.',
  kapakAlt:
    'Göl kenarındaki çimende ağzında oyuncak tutan siyah labrador',
  kategori: 'Köpek',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Labrador Retriever, kökeni Büyük Britanya olan, iyi huylu, çevik ve insana bağlı bir av köpeği ırkıdır; bakımında en çok dikkat isteyen konu iştahı ve kilosudur.** Uluslararası köpek federasyonu FCI, 122 numaralı ırk standardında Labrador\'u "Retrieverlar" grubuna (Grup 8, Bölüm 1) yerleştiriyor ve mizacını "iyi huylu, çok çevik, uyumlu ve bağlı bir yoldaş" olarak tarif ediyor.' },
    { kind: 'paragraf', metin: 'Aşağıda ırk standardının ne dediğini, boy ve kilo değerlerini, renkleri, mizacı, kilo eğilimini, Britanya\'daki veteriner kayıtlarında en sık görülen sağlık sorunlarını ve günlük bakımda nelere dikkat edilmesi gerektiğini anlatıyoruz. Bir sağlık sorunundan şüphelenildiğinde yapılacak şey evde yorum yapmak değil, veteriner hekime başvurmaktır.' },

    { kind: 'tablo', basliklar: ['Özellik', 'FCI standardı ne diyor?'], satirlar: [
      ['Köken', 'Büyük Britanya'],
      ['FCI grubu', 'Grup 8, Bölüm 1: Retrieverlar'],
      ['İdeal boy (cidago)', 'Erkek 56 ile 57 cm, dişi 54 ile 56 cm'],
      ['Renk', 'Siyah, sarı veya çikolata (karaciğer rengi)'],
      ['Tüy', 'Kısa, sık, dalgasız; hava koşullarına dayanıklı alt tüy'],
      ['Kuyruk', 'Tabanda kalın, "su samuru kuyruğu" görünümlü'],
      ['Mizaç', 'İyi huylu, çok çevik, uyumlu, bağlı'],
    ]},

    { kind: 'baslik', metin: 'Labrador\'un kökeni ve ırk standardı' },
    { kind: 'paragraf', metin: 'Yaygın kanıya göre ırk, Newfoundland kıyılarında ortaya çıktı; balıkçıların balık toplamak için benzer görünümde bir köpek kullandığı görülmüş. FCI standardı bunu kesin bir kayıt olarak değil, "yaygın olarak düşünülen" bir anlatı olarak aktarıyor. Standarda göre hava koşullarına dayanıklı tüyü ve su samurununkine benzetilen kuyruğu, Labrador\'un mükemmel bir su köpeği olduğunu vurguluyor.' },
    { kind: 'paragraf', metin: 'Irk görece genç sayılıyor: ırk kulübü 1916\'da, Sarı Labrador Kulübü ise 1925\'te kurulmuş. Labrador erken şöhretini tarla yarışmalarında (field trial) kazanmış. Standart ayrıca üretimde yalnızca işlevsel ve klinik olarak sağlıklı, ırk tipine uygun yapıdaki köpeklerin kullanılması gerektiğini belirtiyor; bu yüzden bir yavru alırken ebeveynlerin sağlığını sormak mantıklıdır. Sahiplenmeyi düşünenler için [[barinaktan-kopek-sahiplenme|barınaktan köpek sahiplenme]] yazısı da bir başlangıç olabilir.' },

    { kind: 'baslik', metin: 'Boy, kilo ve görünüm' },
    { kind: 'paragraf', metin: 'FCI, cidago yüksekliğinde ideal değeri erkeklerde 56 ile 57 cm, dişilerde 54 ile 56 cm olarak veriyor. Standart bir kilo değeri vermiyor, ama genel görünümü "güçlü yapılı, gövdesi kısa, çok aktif" diye tarif ederken bunun "aşırı vücut ağırlığını dışladığını" açıkça yazıyor. Geniş ve derin göğüs yapısının da fazla kiloyla oluşmaması gerekiyor.' },
    { kind: 'paragraf', metin: 'Gerçek hayattaki ağırlık için en geniş verilerden biri Britanya\'daki birinci basamak veteriner kayıtlarından geliyor. VetCompass programında 2013 yılında kayıtlı 33.320 Labrador incelendi ve yetişkinlerin ortalama ağırlığı 33,0 kg çıktı. Erkekler ortalama 35,2 kg, dişiler 30,4 kg geldi. Bu değerler Britanya\'daki köpekleri anlatıyor; tek tek bir köpeğin ideal kilosunu ise yalnızca onu muayene eden veteriner hekim söyleyebilir.' },

    { kind: 'baslik', metin: 'Tüy ve renkler' },
    { kind: 'paragraf', metin: 'FCI üç rengi kabul ediyor: tamamen siyah, sarı veya karaciğer rengi olarak da anılan çikolata. Sarılar açık kremden tilki kızılına, çikolatalar açıktan koyuya uzanabiliyor. Göğüste küçük bir beyaz leke ve arka tarsusta (arka ayak bileği bölgesi) beyazlık kabul ediliyor; başka renk ya da renk birleşimi kabul edilmiyor. Tüy kısa, sık, dalgasız ve saçaksız olmalı, dokunuşta oldukça sert hissettirmeli ve hava koşullarına dayanıklı bir alt tüy taşımalı.' },
    { kind: 'yanilgi', baslik: '"Siyah, sarı ve çikolata Labrador\'lar ayrı ırklardır"', metin: 'FCI standardında üç renk de aynı ırkın kabul edilen renkleridir. Rengi farklı olması ayrı bir ırk anlamına gelmiyor.' },
    { kind: 'paragraf', metin: 'Britanya kayıtlarında renk dağılımı siyah için %44,6, sarı için %27,8, çikolata için %23,8 olarak görüldü. Aynı çalışmada çikolata renkli köpeklerin ortanca yaşam süresi 10,7 yıl, diğer renklerde 12,1 yıl bulundu. Dış kulak iltihabı sıklığı da siyahlarda %12,8, sarılarda %17,0, çikolatalarda %23,4 olarak kaydedildi. Ancak çikolata grubunda yalnızca 34 köpeğin yaşam süresi verisi vardı; bu yüzden rakamlar bir eğilimi gösteriyor, kesin bir hüküm vermiyor.' },

    { kind: 'baslik', metin: 'Mizaç: neden aile köpeği olarak seviliyor?' },
    { kind: 'paragraf', metin: 'FCI standardı Labrador\'u zeki, hevesli ve söz dinlemeye yatkın, memnun etme isteği güçlü bir köpek olarak anlatıyor. Nazik yapıda olması, saldırganlık ya da aşırı çekingenlik izi taşımaması bekleniyor. Mükemmel bir koku alma duyusu, "yumuşak ağız" olarak tarif edilen nazik tutuşu ve suya düşkünlüğü de standartta açıkça geçiyor.' },
    { kind: 'paragraf', metin: 'Standart ideal ırk tipini anlatır; tek tek köpeklerin mizacı bundan farklı olabilir. Yavru döneminde nelere dikkat edileceğini [[yavru-kopek-bakimi|yavru köpek bakımı]] yazısında bulabilirsiniz.' },

    { kind: 'baslik', metin: 'Kilo: Labrador\'da en önemli bakım konusu' },
    { kind: 'paragraf', metin: 'Cambridge Üniversitesi\'nden Raffan ve ekibi 2016\'da Cell Metabolism dergisinde, Labrador\'larda POMC geninde 14 baz çiftlik bir silinme (delesyon) bildirdi. Varyantın allel sıklığı %12 bulundu ve vücut ağırlığı, vücut yağı ve yiyeceğe duyulan istekle ilişkiliydi (allel başına 0,33 standart sapma). Varyant, yardımcı köpeği olarak seçilen Labrador\'larda evcil köpeklere göre anlamlı biçimde daha sık görüldü.' },
    { kind: 'yanilgi', baslik: '"Labrador\'un hep aç olması sadece şımarıklıktır"', metin: 'Araştırmacılar POMC silinmesini Labrador\'larda ağırlığı ve iştahı etkileyen önemli bir değiştirici olarak tanımlıyor. Yani bazı Labrador\'larda yiyeceğe düşkünlüğün genetik bir yanı olabilir. Bu da porsiyonun ve kilonun daha dikkatli izlenmesini gerektiriyor.' },
    { kind: 'paragraf', metin: 'Kilonun önemini gösteren bir başka çalışma, Journal of the American Veterinary Medical Association\'da 2002\'de yayımlanan eşleştirilmiş besleme araştırması. Çalışmada 48 Labrador eşleştirildi ve her çiftteki bir köpeğe 8 haftalıktan ölümüne kadar diğerine göre %25 daha az yiyecek verildi. Az yiyen köpekler daha hafif ve daha az yağlıydı, ortanca yaşam süreleri anlamlı olarak daha uzundu ve kronik hastalık belirtileri genellikle daha geç başladı.' },
    { kind: 'paragraf', metin: 'Bu bir araştırma düzeneğidir, evde uygulanacak bir porsiyon önerisi değildir. Günlük mama miktarının köpeğin yaşına, kilosuna ve sağlığına göre veteriner hekimle belirlenmesi gerekiyor. Genel bilgi için [[kopek-gunde-kac-gram-mama-yer|köpek günde kaç gram mama yer]] ve [[kopegim-fazla-kilolu-mu|köpeğim fazla kilolu mu]] yazılarına bakılabilir.' },
    { kind: 'paragraf', metin: 'Britanya kayıtlarında kısırlaştırma ile fazla kilo arasında da bir ilişki görüldü: erkeklerde aşırı kilo oranı kısırlaştırılmamışlarda %4,1, kısırlaştırılmışlarda %11,4 çıktı. Dişilerde fark istatistiksel olarak anlamlı bulunmadı. Kısırlaştırma kararının zamanı ve gerekçesi için [[kopek-ne-zaman-kisirlastirilmali|köpekler ne zaman kısırlaştırılmalı]] yazısına bakılabilir, nihai karar yine hekimle verilmelidir.' },

    { kind: 'baslik', metin: 'Britanya kayıtlarında en sık görülen sağlık sorunları' },
    { kind: 'paragraf', metin: 'McGreevy ve ekibinin 2018\'de Canine Genetics and Epidemiology dergisinde yayımladığı çalışmada, rastgele seçilen 2.074 Labrador dosyasının 1.277\'sinde (%61,6) en az bir bozukluk kaydı vardı. En sık kaydedilen üç bozukluk dış kulak iltihabı (%10,4), aşırı kilo veya obezite (%8,8) ve dejeneratif eklem hastalığı (%5,5) oldu. Aynı verilerde Labrador\'ların ortanca yaşam süresi 12,0 yıl bulundu. Daha geniş bir bakış için [[kopekler-kac-yil-yasar|köpekler kaç yıl yaşar]] yazısı faydalı olur.' },
    { kind: 'uyari', metin: 'Kulakta, eklemlerde ya da kilosunda bir değişiklik fark edildiğinde bunu evde yorumlamak, ilaç ya da krem kullanmak doğru değildir. Böyle bir durumda vakit kaybetmeden veteriner hekime başvurulması gerekiyor. Kulak sorunlarına dair genel bilgi için [[kopeklerde-kulak-enfeksiyonu|köpeklerde kulak enfeksiyonu]] yazısı var.' },

    { kind: 'baslik', metin: 'Günlük bakımda nelere dikkat edilir?' },
    { kind: 'paragraf', metin: 'Irk standardı Labrador\'u çok aktif, çevik ve suyu çok seven bir köpek olarak tarif ediyor. Bu yüzden hareket edebileceği güvenli bir alan ve düzenli etkinlik, hem mizacına hem de kilo kontrolüne uygun bir bakım yaklaşımıdır. Günlük bakımda şunlara dikkat edilmesi önerilir:' },
    { kind: 'liste', maddeler: [
      '**Kilo:** Vücut kondisyonunun düzenli izlenmesi ve tartı kayıtlarının hekimle paylaşılması.',
      '**Mama:** Miktarın ve türün veteriner hekimle belirlenmesi, ödül maması dahil tüm yiyeceklerin hesaba katılması.',
      '**Kulaklar:** FCI standardında kulaklar "başa yakın sarkan" yapıda tarif ediliyor ve dış kulak iltihabı en sık kaydedilen bozukluk olduğu için kulakların düzenli kontrolü mantıklıdır.',
      '**Dişler ve tırnaklar:** [[kopek-disleri-nasil-fircalanir|Diş fırçalama]] ve [[kopek-tirnagi-nasil-kesilir|tırnak bakımı]] alışkanlığının yavrulukta kazandırılması.',
      '**Aşı ve parazit:** [[kopek-asi-takvimi|Aşı takviminin]] ve [[kopeklerde-ic-ve-dis-parazit|iç ve dış parazit]] korumasının güncel tutulması.',
    ]},
  ],
  kontrolListesi: [
    'Kilo ve vücut kondisyonu izleniyor mu?',
    'Mama miktarı hekimle konuşuldu mu?',
    'Kulaklar düzenli kontrol ediliyor mu?',
    'Hareket için güvenli alan var mı?',
    'Aşı ve parazit takvimi güncel mi?',
    'Düzenli veteriner kontrolü var mı?',
  ],
  sss: [
    { soru: 'Labrador Retriever kaç kilo olur?', cevap: 'Britanya\'daki veteriner kayıtlarında yetişkin Labrador\'ların ortalama ağırlığı 33,0 kg bulundu; erkekler ortalama 35,2 kg, dişiler 30,4 kg geldi. FCI standardı kilo değil boy veriyor: erkeklerde 56 ile 57 cm, dişilerde 54 ile 56 cm. Köpeğiniz için ideal kiloyu veteriner hekim belirler.' },
    { soru: 'Labrador Retriever kaç yıl yaşar?', cevap: 'Britanya kayıtlarında ortanca yaşam süresi 12,0 yıl bulundu. Aynı çalışmada çikolata renkli köpeklerin ortanca yaşam süresi 10,7 yıl, diğer renklerin 12,1 yıl çıktı; ancak çikolata grubu yalnızca 34 köpekten oluştuğu için bu fark kesin bir hüküm sayılmamalı.' },
    { soru: 'Labrador Retriever hangi renklerde olur?', cevap: 'FCI standardı üç rengi kabul ediyor: tamamen siyah, sarı ve karaciğer rengi olarak da anılan çikolata. Sarılar açık kremden tilki kızılına, çikolatalar açıktan koyuya değişebilir. Göğüste küçük bir beyaz leke kabul edilir; başka renk ya da renk birleşimi kabul edilmez.' },
    { soru: 'Labrador neden hep aç görünür?', cevap: 'Bazı Labrador\'larda bunun genetik bir nedeni olabilir. Cambridge\'deki çalışma, POMC geninde 14 baz çiftlik bir silinmeyi Labrador\'larda %12 allel sıklığında buldu ve bunu yüksek vücut ağırlığı ile yiyecek isteğiyle ilişkilendirdi. Porsiyonun ve kilonun veteriner hekimle izlenmesi gerekiyor.' },
    { soru: 'Labrador\'larda en sık hangi sağlık sorunları kaydedilir?', cevap: 'Britanya çalışmasında en sık kaydedilen üç bozukluk dış kulak iltihabı (%10,4), aşırı kilo veya obezite (%8,8) ve dejeneratif eklem hastalığı (%5,5) oldu. Bir belirti fark edildiğinde evde yorum yapmak yerine veteriner hekime başvurulması gerekiyor.' },
    { soru: 'Labrador agresif bir ırk mıdır?', cevap: 'Hayır, FCI standardı ırkı nazik yapıda tarif eder ve saldırganlık ya da aşırı çekingenlik izi beklemez. Saldırgan veya aşırı çekingen köpekler standartta diskalifiye sebebi sayılır. Yine de standart ideali anlatır; tek tek köpeklerin mizacı farklı olabilir.' },
    { soru: 'Labrador suyu sever mi?', cevap: 'Evet, FCI standardı Labrador\'u "suyu çok seven" ve mükemmel bir su köpeği olarak tarif ediyor. Hava koşullarına dayanıklı tüyü de bu özelliği destekliyor. Kulak sorunları en sık kaydedilen bozukluk olduğundan kulakların düzenli kontrolü önerilir.' },
  ],
  kaynaklar: [
    {
      kurum: 'Fédération Cynologique Internationale (FCI)',
      baslik: 'FCI-Standard N° 122: Labrador Retriever',
      adres: 'https://www.fci.be/Nomenclature/Standards/122g08-en.pdf',
    },
    {
      kurum: 'University of Cambridge, Metabolic Research Laboratories',
      yazarlar: 'Raffan E, Dennis RJ, O\'Donovan CJ, Becker JM, Scott RA, Smith SP, Withers DJ, Wood CJ, Conci E, Clements DN, Summers KM, German AJ, Mellersh CS, Arendt ML, Iyemere VP, Withers E, Söder J, Wernersson S, Andersson G, Lindblad-Toh K, Yeo GS, O\'Rahilly S',
      baslik: 'A Deletion in the Canine POMC Gene Is Associated with Weight and Appetite in Obesity-Prone Labrador Retriever Dogs',
      dergi: 'Cell Metabolism',
      yil: 2016,
      kunye: '23(5):893-900',
      doi: '10.1016/j.cmet.2016.04.012',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/27157046/',
    },
    {
      kurum: 'Royal Veterinary College, VetCompass',
      yazarlar: 'McGreevy PD, Wilson BJ, Mansfield CS, Brodbelt DC, Church DB, Dhand N, Soares Magalhães RJ, O\'Neill DG',
      baslik: 'Labrador retrievers under primary veterinary care in the UK: demography, mortality and disorders',
      dergi: 'Canine Genetics and Epidemiology',
      yil: 2018,
      kunye: '5:8',
      doi: '10.1186/s40575-018-0064-x',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/30377534/',
    },
    {
      kurum: 'American Veterinary Medical Association (JAVMA)',
      yazarlar: 'Kealy RD, Lawler DF, Ballam JM, Mantz SL, Biery DN, Greeley EH, Lust G, Segre M, Smith GK, Stowe HD',
      baslik: 'Effects of diet restriction on life span and age-related changes in dogs',
      dergi: 'Journal of the American Veterinary Medical Association',
      yil: 2002,
      kunye: '220(9):1315-1320',
      doi: '10.2460/javma.2002.220.1315',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/11991408/',
    },
  ],
};
