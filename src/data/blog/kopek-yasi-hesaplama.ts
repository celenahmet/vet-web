import type { BlogYazi } from './types';

export const kopekYasiHesaplama: BlogYazi = {
  slug: 'kopek-yasi-hesaplama',
  baslik: 'Köpek Yaşı Hesaplama: Köpeğim İnsan Yaşıyla Kaç Yaşında?',
  ozet: 'Her köpek yılı yedi insan yılı değil. 2020 tarihli bir çalışmaya göre 1 yaşındaki köpek yaklaşık 31, 4 yaşındaki 53 insan yaşında. Tablo ve formülle hesaplama.',
  kapakAlt:
    'Köpek yaşı hesaplama konulu yazının kapak görseli; şehir parkında çimenlerde yan yana oturan biri yaşlı biri genç iki golden retriever',
  kategori: 'Köpek',
  tarih: '2026-10-24',
  bloklar: [
    { kind: 'paragraf', metin: '**Her köpek yılını yedi insan yılı saymak bilimsel olarak doğru değil.** 2020\'de Cell Systems dergisinde yayımlanan bir çalışma, köpeklerin hayatlarının başında çok hızlı, yetişkinlikte ise çok daha yavaş yaşlandığını gösterdi. Bu çalışmanın formülüne göre 1 yaşındaki bir köpek yaklaşık 31, 2 yaşındaki 42, 4 yaşındaki 53, 12 yaşındaki ise 71 insan yaşına karşılık geliyor.' },
    { kind: 'paragraf', metin: 'Aşağıda bu formülü, yaşa göre hazır tabloyu, formülün hangi köpeklerden çıkarıldığını ve sınırlarını, yaşı bilinmeyen bir köpeğin yaşının nasıl öğrenilebileceğini anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Köpeğin yaşı', 'İnsan yaşı karşılığı'], satirlar: [
      ['1 yaş', '31'],
      ['2 yaş', '42'],
      ['3 yaş', '49'],
      ['4 yaş', '53'],
      ['5 yaş', '57'],
      ['6 yaş', '60'],
      ['8 yaş', '64'],
      ['10 yaş', '68'],
      ['12 yaş', '71'],
      ['14 yaş', '73'],
      ['16 yaş', '75'],
    ]},

    { kind: 'baslik', metin: 'Köpek yaşı nasıl hesaplanır?' },
    { kind: 'paragraf', metin: 'Tablodaki değerler Kaliforniya Üniversitesi San Diego\'dan Wang ve arkadaşlarının 2020 tarihli çalışmasındaki formülle hesaplandı: **insan yaşı = 16 × ln(köpeğin yaşı) + 31.** Buradaki "ln" doğal logaritma; telefonların bilimsel hesap makinesinde "ln" tuşuyla bulunuyor.' },
    { kind: 'liste', maddeler: [
      '**1. adım:** Köpeğin yaşı alınır, örneğin 5.',
      '**2. adım:** Hesap makinesinin ln tuşuyla logaritması bulunur: ln 5 yaklaşık 1,61.',
      '**3. adım:** Sonuç 16 ile çarpılır: yaklaşık 25,7.',
      '**4. adım:** Üzerine 31 eklenir: yaklaşık 57. Yani 5 yaşındaki köpek yaklaşık 57 yaşında bir insana karşılık geliyor.',
    ]},
    { kind: 'paragraf', metin: 'Formül, insanlarla köpeklerin DNA\'sındaki yaşa bağlı değişimleri karşılaştırarak elde edildi. Yani "köpeğim kaç yaşında hissediyor" sorusuna değil, vücudun moleküler düzeyde ne kadar yaşlandığına dayanıyor.' },

    { kind: 'baslik', metin: 'Neden 7 ile çarpmak yanlış?' },
    { kind: 'paragraf', metin: 'Çalışmaya göre köpekle insan yaşı arasındaki ilişki doğrusal değil, yani sabit bir çarpanla ifade edilemiyor. Köpekler ilk yıllarında çok hızlı yaşlanıyor: 1 yaşındaki bir köpek, insan ölçüsünde genç bir yetişkin konumunda. Yetişkinlikte bu hız belirgin biçimde yavaşlıyor; 10 yaşından sonra her yıl insan ölçüsünde yalnız birkaç yıla denk geliyor.' },
    { kind: 'yanilgi', baslik: '"Bir köpek yılı yedi insan yılıdır"', metin: 'Bu kural 1 yaşındaki köpeği 7 yaşında bir çocuk gibi gösteriyor, oysa o yaştaki köpek genç bir yetişkin. Kural yaşlı köpekte de yanılıyor: 12 yaşındaki bir köpeği 84 yaşına koyuyor, çalışmanın formülü ise yaklaşık 71 veriyor.' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Her köpek yılı 7 insan yılıdır', 'İlk yıllar çok hızlı, yetişkinlik çok daha yavaş geçiyor'],
      ['1 yaşındaki köpek çocuk sayılır', '1 yaşındaki köpek yaklaşık 31 yaşındaki bir insana karşılık geliyor'],
      ['Formül her ırk için aynıdır', 'Formül Labrador\'lardan çıkarıldı; ömrü farklı ırklarda farklı olabilir'],
      ['Yaş yalnız takvimle ölçülür', 'Irk, boy ve sağlık durumu yaşlanmanın hızını etkiliyor'],
    ]},

    { kind: 'baslik', metin: 'Formül her ırk için geçerli mi?' },
    { kind: 'paragraf', metin: 'Hayır, bu formülün en önemli sınırı bu. Formül **104 Labrador retriever** üzerinde geliştirildi; dokuz köpek yetersiz veri nedeniyle çıkarıldı ve hesap 95 köpekle yapıldı. Köpeklerin yaşları 0,1 ile 16 arasındaydı. Yazarlar, ömürleri çok farklı olan ırklarda farklı bir dönüşüm eğrisi çıkabileceğini ve ırk ile boy etkisinin bu çalışmada test edilmediğini açıkça belirtiyor.' },
    { kind: 'paragraf', metin: 'Bu fark önemli, çünkü büyük ırklar küçük ırklardan daha kısa yaşıyor. Göttingen ve Washington üniversitelerinden Kraus ve arkadaşlarının 2013 tarihli çalışması, büyük köpeklerin daha hızlı yaşlandığını ve bunun ömür farkının ana nedeni olduğunu gösteriyor. Irklara göre ömür beklentisini [[kopekler-kac-yil-yasar|köpekler kaç yıl yaşar]] yazımızda anlattık.' },
    { kind: 'yanilgi', baslik: '"Küçük köpek de büyük köpek de aynı hızda yaşlanır"', metin: 'Büyük ırk bir köpek, aynı takvim yaşındaki küçük ırk bir köpekten genellikle daha yaşlı bir dönemdedir. Bu yüzden tablo bir Chihuahua için iyimser, bir Danua için ise kötümser kalabilir.' },

    { kind: 'baslik', metin: 'Köpeğin yaşam evreleri' },
    { kind: 'paragraf', metin: 'Amerikan Hayvan Hastaneleri Birliği\'nin (AAHA) 2019 tarihli köpek yaşam evreleri kılavuzu, köpeğin ömrünü beş evreye ayırıyor: **yavru, genç yetişkin, olgun yetişkin, yaşlı ve yaşamın sonu.** Kılavuz ilk dört evre için beslenme, aşı, parazit kontrolü, diş sağlığı ve temel tahliller gibi on başlıkta ayrı öneriler veriyor. Yaşı insan yaşına çevirmek merak gidermeye yarıyor; bakım kararlarında ise belirleyici olan köpeğin hangi evrede olduğu.' },

    { kind: 'baslik', metin: 'Yaşı bilinmeyen köpeğin yaşı nasıl anlaşılır?' },
    { kind: 'paragraf', metin: 'Sahiplenilen ya da sokaktan alınan bir köpeğin doğum tarihi biliniyorsa en güvenilir kaynak **pasaportu:** mikroçipli kayıtta hayvanın doğum tarihi tutuluyor. Kayıt yoksa yaşı kesin söylemenin bir yolu yok; veteriner hekim muayeneyle bir tahmin yapabiliyor. Kayıt işlemlerini [[petvet-kayit|PETVET kaydı]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Yaşlanan köpekte neler değişir?' },
    { kind: 'paragraf', metin: 'Yaş ilerledikçe kontrollerin sıklığı ve kapsamı değişiyor. Yaşlı evredeki köpeklerde düzenli muayene ve kan tahlili, belirti vermeyen sorunları erken yakalamanın yolu. Kontrol aralıklarını [[kedi-kopek-check-up-ne-zaman|check-up ne zaman yapılmalı]] yazımızda topladık.' },
    { kind: 'uyari', metin: 'İnsan yaşı karşılığı bir fikir verir ama sağlık durumunu göstermez. Yaşlı bir köpekte iştah, su tüketimi, kilo ya da hareketlilikte belirgin bir değişiklik, yaşa bağlanıp beklenmemesi ve veteriner hekime gösterilmesi gereken bir durumdur.' },
  ],
  kontrolListesi: [
    'Köpeğin doğum tarihi kayıtlı mı?',
    'Hangi yaşam evresinde olduğu belli mi?',
    'Irkının ortalama ömrü biliniyor mu?',
    'Maması yaşına uygun mu?',
    'Yıllık kontrolü takvimde mi?',
  ],
  sss: [
    { soru: 'Köpek yaşı nasıl hesaplanır?', cevap: '2020 tarihli bir çalışmanın formülüne göre insan yaşı, 16 ile köpeğin yaşının doğal logaritmasının çarpımına 31 eklenerek bulunuyor. Buna göre 5 yaşındaki bir köpek yaklaşık 57 insan yaşında.' },
    { soru: '1 yaşındaki köpek insan yaşıyla kaç yaşında?', cevap: 'Formüle göre yaklaşık 31 yaşında. Köpekler ilk yıllarında çok hızlı yaşlandığı için 1 yaşındaki köpek, ergenliğini tamamlamış genç bir yetişkine karşılık geliyor.' },
    { soru: 'Bir köpek yılı yedi insan yılı mı?', cevap: 'Hayır. Köpekle insan yaşı arasındaki ilişki doğrusal değil; ilk yıllar çok hızlı, yetişkinlik çok daha yavaş geçiyor. Bu yüzden sabit bir çarpan doğru sonuç vermiyor.' },
    { soru: '10 yaşındaki köpek insan yaşıyla kaç yaşında?', cevap: 'Formüle göre yaklaşık 68 yaşında. Formül Labrador\'lardan çıkarıldığı için büyük ırklarda biraz daha yaşlı, küçük ırklarda biraz daha genç bir karşılık söz konusu olabilir.' },
    { soru: 'Köpek yaşı formülü her ırkta geçerli mi?', cevap: 'Tam olarak değil. Formül 104 Labrador retriever üzerinde geliştirildi ve yazarlar, ömrü çok farklı ırklarda farklı bir sonuç çıkabileceğini belirtiyor.' },
    { soru: 'Yaşı bilinmeyen köpeğin yaşı nasıl anlaşılır?', cevap: 'Mikroçipli kayıt varsa doğum tarihi pasaportta yazar. Kayıt yoksa kesin bir yöntem yok; veteriner hekim muayeneyle yaklaşık bir tahmin yapabilir.' },
  ],
  kaynaklar: [
    {
      kurum: 'University of California San Diego',
      yazarlar: 'Wang T, Ma J, Hogan AN, Fong S, Licon K, Tsui B ve ark.',
      baslik: 'Quantitative Translation of Dog-to-Human Aging by Conserved Remodeling of the DNA Methylome',
      dergi: 'Cell Systems',
      yil: 2020,
      kunye: '11(2):176-185.e6',
      doi: '10.1016/j.cels.2020.06.006',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/32619550/',
    },
    {
      kurum: 'American Animal Hospital Association (AAHA)',
      yazarlar: 'Creevy KE, Grady J, Little SE, Moore GE, Strickler BG, Thompson S, Webb JA',
      baslik: '2019 AAHA Canine Life Stage Guidelines',
      dergi: 'Journal of the American Animal Hospital Association',
      yil: 2019,
      kunye: '55(6):267-290',
      doi: '10.5326/JAAHA-MS-6999',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/31622127/',
    },
    {
      kurum: 'University of Göttingen · University of Washington',
      yazarlar: 'Kraus C, Pavard S, Promislow DE',
      baslik: 'The size-life span trade-off decomposed: why large dogs die young',
      dergi: 'The American Naturalist',
      yil: 2013,
      kunye: '181(4):492-505',
      doi: '10.1086/669665',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/23535614/',
    },
  ],
};
