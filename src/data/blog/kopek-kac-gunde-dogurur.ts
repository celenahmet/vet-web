import type { BlogYazi } from './types';

export const kopekKacGundeDogurur: BlogYazi = {
  slug: 'kopek-kac-gunde-dogurur',
  baslik: 'Köpek Kaç Günde Doğurur? Hamilelik Süresi ve Belirtileri',
  ozet: 'Köpeklerde hamilelik çiftleşmeden itibaren 57-68 gün sürüyor; yumurtlamaya göre hesaplanınca süre 64-66 güne daralıyor. Hamilelik ne zaman anlaşılır, nasıl izlenir?',
  kapakAlt:
    'Köpek hamileliği konulu yazının kapak görseli; yeşil bir minderin üzerinde dinlenen, karnı belirgin hamile bir köpek',
  kategori: 'Köpek',
  tarih: '2026-10-25',
  bloklar: [
    { kind: 'paragraf', metin: 'Köpeklerde hamilelik **çiftleşmeden itibaren 57 ile 68 gün** arasında sürüyor. Aralığın bu kadar geniş olmasının nedeni çiftleşme gününün yumurtlama gününe denk gelmemesi. Cornell Üniversitesi\'nden Concannon\'un çalışmalarına göre süre, yumurtlamayı başlatan hormon zirvesinden (LH zirvesi) hesaplandığında **64-66 güne**, yani neredeyse sabit bir süreye daralıyor.' },
    { kind: 'paragraf', metin: 'Aşağıda doğum tarihinin nasıl tahmin edildiğini, hamileliğin hangi gün hangi yöntemle anlaşılabildiğini, hamile köpeğin nasıl beslenip izlendiğini veteriner fakültelerinin hakemli yayınlarıyla anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Konu', 'Gün'], satirlar: [
      ['Çiftleşmeden doğuma', '57-68 gün'],
      ['Hormon (LH) zirvesinden doğuma', '64-66 gün'],
      ['Ultrasonda gebelik kesesi', 'Yaklaşık 19. gün'],
      ['Ultrasonda kalp atışı', 'Yaklaşık 24. gün'],
      ['Elle muayenede rahim büyümesi', 'Yaklaşık 21. günden itibaren'],
      ['Röntgende yavru iskeleti', 'Yaklaşık 46. gün'],
    ]},

    { kind: 'baslik', metin: 'Köpek kaç günde doğurur?' },
    { kind: 'paragraf', metin: 'Concannon ve arkadaşlarının 1989 tarihli çalışması, köpekler arasında çok değişken olan süreleri ve neredeyse hiç değişmeyen süreleri ayrı ayrı ölçtü. Değişken olanlar: kızgınlık davranışının başlangıcı ve **verimli çiftleşmeden doğuma kadar geçen süre (57-68 gün).** Neredeyse sabit olanlar: LH zirvesinden yumurtlamaya kadar geçen **2 gün**, yumurtanın olgunlaşması için gereken yaklaşık **4 gün**, rahme tutunmaya kadar geçen yaklaşık **18 gün** ve LH zirvesinden doğuma kadar geçen **64-66 gün.**' },
    { kind: 'paragraf', metin: 'Concannon\'un 2011 tarihli derlemesi de köpeklerde gebeliğin **65 ± 1 gün** sürdüğünü bildiriyor. Bu yüzden doğum tarihini kesin bilmek isteyen yetiştiriciler için veteriner hekim, kızgınlık sırasında kanda progesteron ölçerek LH zirvesinin gününü tahmin edebiliyor; Cornell\'den Meyers-Wallen bu ölçümün doğum tarihini öngörmek için kullanıldığını aktarıyor.' },
    { kind: 'yanilgi', baslik: '"Çiftleşme günü bilinirse doğum günü kesin bilinir"', metin: 'Kızgınlık davranışı, yumurtlamayı başlatan hormon zirvesinden 2 gün önce ile 5 gün sonra arasında başlayabiliyor ve günlerce sürüyor; çiftleşme bu aralığın herhangi bir gününe denk gelebiliyor. Bu yüzden çiftleşme tarihinden yapılan hesap 57-68 günlük, yani 11 günlük bir aralık veriyor. Kesin tarih için hormona dayalı hesap gerekiyor.' },

    { kind: 'baslik', metin: 'Köpeğin hamile olduğu nasıl anlaşılır?' },
    { kind: 'paragraf', metin: 'Concannon\'a göre hamileliğin ilk haftalarında **erken gebeliği gösteren bir test yok.** Gebeliğe özgü değişiklikler ancak belirli günlerden sonra ortaya çıkıyor: ultrasonda gebelik kesesi yaklaşık 19. günde, kalp atışları yaklaşık 24. günde görülebiliyor; elle muayenede rahim büyümesi 21. günden itibaren hissedilebiliyor; kanda relaksin hormonu yaklaşık 25. günde yükseliyor. Röntgende yavruların iskeleti yaklaşık 46. günden sonra görünüyor, bu da yavru sayısını saymaya yarıyor.' },
    { kind: 'paragraf', metin: 'Michigan State Üniversitesi\'nden Johnson\'un derlemesi de hamileliğin çiftleşmeden **yaklaşık 25 gün sonra** doğrulandığını belirtiyor. Yani çiftleşmeden sonraki ilk üç haftada hamileliği bilmenin güvenilir bir yolu yok.' },
    { kind: 'yanilgi', baslik: '"Hamilelik ilk hafta anlaşılır"', metin: 'Köpeklerde erken gebeliği gösteren bir test bulunmuyor. İlk güvenilir bulgular ultrasonda yaklaşık 19-24. günlerde ortaya çıkıyor; daha önce yapılan tahminler yanıltıcı olabiliyor.' },

    { kind: 'baslik', metin: 'Hamile köpek nasıl beslenir?' },
    { kind: 'paragraf', metin: 'Johnson, çiftleşmeden sonra **üreme ve emzirme dönemine uygun ticari bir mamaya** geçilmesini öneriyor. Bu mamalar genellikle yüzde 29-32 hayvansal kaynaklı protein, en az yüzde 18 yağ ve yüzde 20-30 karbonhidrat içeriyor. Hamilelik ilerledikçe köpeğin kalori ihtiyacının ve kilosunun **istikrarlı biçimde artması** bekleniyor; **kilo kaybı olmamalı.**' },

    { kind: 'baslik', metin: 'Hamilelik boyunca neler izlenir?' },
    { kind: 'liste', maddeler: [
      '**Davranış ve hareketlilik:** Köpeğin tavrında ve aktivitesinde belirgin değişiklik.',
      '**İştah ve kilo:** İştah ve kilo düzenli artmalı; artış durursa hekim değerlendirmesi gerekiyor.',
      '**Genel görünüm:** Hastalık belirtisi olup olmadığı.',
      '**Doğum yeri:** Johnson, sakin bir "doğum odası" ve bir doğum kutusu hazırlanmasını öneriyor.',
    ]},
    { kind: 'paragraf', metin: 'Johnson\'a göre iştah ve kilo artmaya devam etmezse ya da herhangi bir hastalık belirtisi ortaya çıkarsa annenin tam muayene ve kan tahlilleriyle, yavruların ise ultrasonla değerlendirilmesi gerekiyor. Concannon, hamileliğin ikinci yarısında kandaki hematokrit değerinin yaklaşık yüzde 30 düşebildiğini, yani köpeklerde de insanlardaki gibi bir "gebelik kansızlığı" görüldüğünü aktarıyor.' },

    { kind: 'baslik', metin: 'Doğumun yaklaştığı nasıl anlaşılır?' },
    { kind: 'paragraf', metin: 'Concannon\'a göre doğumdan yaklaşık 36 saat önce, hamileliği sürdüren progesteronu üreten yapının gerilemesini başlatan hormonal değişim başlıyor. Johnson, doğumun yaklaştığının ve ilerleyişinin **rektal vücut ısısı**, kandaki progesteron düzeyi ve rahim ile yavru izleme cihazlarıyla takip edilebildiğini belirtiyor. Hangi ölçümün nasıl yapılacağını ve hangi değerin önemli olduğunu önceden veteriner hekimle konuşmak, doğum günü geldiğinde paniği önlüyor.' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Köpek hamileliği tam 2 ay sürer', 'Çiftleşmeye göre 57-68 gün; hormon zirvesine göre 64-66 gün'],
      ['Hamilelik ilk hafta anlaşılır', 'Erken gebelik testi yok; ultrason yaklaşık 19-24. günde'],
      ['Hamile köpek hemen iki kat yemeli', 'Kalori ve kilo hamilelik ilerledikçe istikrarlı artmalı'],
      ['Röntgen her zaman çekilebilir', 'Yavru iskeleti röntgende yaklaşık 46. günden sonra görünüyor'],
    ]},
    { kind: 'paragraf', metin: 'Yavrular doğduktan sonra ilk kontrol ve aşı zamanlaması için [[yavru-kopek-veterinere-ne-zaman-goturulmeli|yavru köpek veterinere ne zaman götürülmeli]] ve [[kopek-asi-takvimi|köpek aşı takvimi]] yazılarımıza bakabilirsiniz. İstenmeyen hamileliği önlemek için kısırlaştırma zamanını [[kopek-ne-zaman-kisirlastirilmali|köpek ne zaman kısırlaştırılmalı]] yazımızda anlattık.' },
    { kind: 'uyari', metin: 'Hamile köpekte iştahsızlık, kilo kaybı, halsizlik, kötü kokulu ya da kanlı akıntı veya doğum sırasında ilerleme olmaması, vakit kaybetmeden veteriner hekime ulaşılması gereken bir tablodur. Bu yazı genel bilgilendirme amaçlıdır.' },
  ],
  kontrolListesi: [
    'Çiftleşme tarihleri not edildi mi?',
    'Ultrason kontrolü planlandı mı?',
    'Gebelik mamasına geçildi mi?',
    'Kilo düzenli tartılıyor mu?',
    'Doğum kutusu hazır mı?',
    'Acil durumda aranacak klinik belli mi?',
  ],
  sss: [
    { soru: 'Köpek kaç günde doğurur?', cevap: 'Köpeklerde hamilelik çiftleşmeden itibaren 57-68 gün sürüyor. Yumurtlamayı başlatan hormon zirvesinden hesaplandığında süre 64-66 güne daralıyor.' },
    { soru: 'Köpeğin hamile olduğu ne zaman anlaşılır?', cevap: 'Erken gebeliği gösteren bir test yok. Ultrasonda gebelik kesesi yaklaşık 19. günde, kalp atışları yaklaşık 24. günde görülebiliyor; hamilelik genellikle 25. gün civarında doğrulanıyor.' },
    { soru: 'Köpekte röntgenle yavru sayısı ne zaman görülür?', cevap: 'Yavruların iskeleti röntgende yaklaşık 46. günden sonra görünüyor. Bu yüzden yavru sayımı için röntgen hamileliğin son döneminde çekiliyor.' },
    { soru: 'Hamile köpek ne yemeli?', cevap: 'Çiftleşmeden sonra üreme ve emzirme dönemine uygun ticari bir mamaya geçilmesi öneriliyor. Hamilelik ilerledikçe kalori ihtiyacı ve kilo istikrarlı biçimde artmalı, kilo kaybı olmamalı.' },
    { soru: 'Köpeğin doğum tarihi nasıl hesaplanır?', cevap: 'Çiftleşme tarihinden yapılan hesap 57-68 günlük bir aralık veriyor. Kesin tarih için veteriner hekim kızgınlıkta progesteron ölçerek hormon zirvesini tahmin ediyor; doğum bu zirveden 64-66 gün sonra bekleniyor.' },
    { soru: 'Hamile köpek ne zaman veterinere götürülmeli?', cevap: 'Hamileliği doğrulamak için yaklaşık 25. gün civarında; iştah ve kilo artmazsa, hastalık belirtisi olursa ya da doğumda ilerleme olmazsa vakit kaybetmeden.' },
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University, New York State College of Veterinary Medicine',
      yazarlar: 'Concannon PW, McCann JP, Temple M',
      baslik: 'Biology and endocrinology of ovulation, pregnancy and parturition in the dog',
      dergi: 'Journal of Reproduction and Fertility. Supplement',
      yil: 1989,
      kunye: '39:3-25',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/2695640/',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine',
      yazarlar: 'Concannon PW',
      baslik: 'Reproductive cycles of the domestic bitch',
      dergi: 'Animal Reproduction Science',
      yil: 2011,
      kunye: '124(3-4):200-210',
      doi: '10.1016/j.anireprosci.2010.08.028',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/21055888/',
    },
    {
      kurum: 'Michigan State University College of Veterinary Medicine',
      yazarlar: 'Johnson CA',
      baslik: 'Pregnancy management in the bitch',
      dergi: 'Theriogenology',
      yil: 2008,
      kunye: '70(9):1412-1417',
      doi: '10.1016/j.theriogenology.2008.09.009',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/18834624/',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Baker Institute for Animal Health',
      yazarlar: 'Meyers-Wallen VN',
      baslik: 'Unusual and abnormal canine estrous cycles',
      dergi: 'Theriogenology',
      yil: 2007,
      kunye: '68(9):1205-1210',
      doi: '10.1016/j.theriogenology.2007.08.019',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/17915307/',
    },
  ],
};
