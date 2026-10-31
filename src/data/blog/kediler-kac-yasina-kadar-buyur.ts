import type { BlogYazi } from './types';

export const kedilerKacYasinaKadarBuyur: BlogYazi = {
  slug: 'kediler-kac-yasina-kadar-buyur',
  baslik: 'Kediler Kaç Yaşına Kadar Büyür?',
  ozet: 'Kediler büyümelerini genellikle ilk yedi ayda tamamlıyor, ama yavru evresi bir yaşa kadar sayılıyor. İri ırklarda süre uzayabiliyor.',
  kapakAlt:
    'Halıda gerinen yetişkin kedi ve yanında oynayan yavru kedi',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kediler büyümelerini genellikle ilk yedi ay içinde tamamlıyor: Merck Veterinary Manual, büyümenin olağan olarak 200-220 günde bittiğini belirtiyor.** Yine de veteriner hekimlikte kedi bir yaşına kadar yavru evresinde sayılıyor ve iri ırklarda olgunlaşma daha yavaş seyredebiliyor.' },
    { kind: 'paragraf', metin: 'Aşağıda büyümenin hangi hızda ilerlediği, yetişkin ağırlığı için kullanılan ortalamalar, yavru evresinin neden bir yaşa kadar sayıldığı, iri ırkların farkı ve kısırlaştırmanın büyümeye etkisi anlatılıyor. Bu yazı genel bilgi veriyor ve teşhis yerine geçmiyor; bir kedinin gelişimini değerlendirmek veteriner hekimin işidir.' },

    { kind: 'tablo', basliklar: ['Dönem', 'Yaklaşık zaman', 'Ne oluyor?'], satirlar: [
      ['Çok hızlı büyüme', 'İlk 3-4 ay', 'Yavru haftada 50-100 gram alıyor'],
      ['Yavaşlama', '150-160. gün (yaklaşık 5 ay)', 'Büyüme hızı düzleşmeye başlıyor'],
      ['Büyümenin bitişi', '200-220. gün (yaklaşık 7 ay)', 'Büyüme genellikle tamamlanıyor'],
      ['Yetişkin mamasına geçiş', '8-12 ay', 'Yavrular genellikle bu aralıkta geçiriliyor'],
      ['Yavru evresinin sonu', '1 yaş', 'Kılavuzlara göre genç yetişkin evresi başlıyor'],
    ]},

    { kind: 'baslik', metin: 'Büyüme hangi hızda ilerliyor?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual kaynağına göre sağlıklı bir yavrunun doğum ağırlığı 90-100 gramdır. Büyüme ilk 3-4 ay boyunca olağanüstü hızlıdır ve yavru haftada 50-100 gram alır. Büyüme hızı 150-160. günde düzleşmeye başlar ve genellikle 200-220 gün içinde tamamlanır.' },
    { kind: 'paragraf', metin: 'Bu rakamlar gün olarak verildiği için ay karşılığı yaklaşık beş ayda yavaşlama ve yaklaşık yedi ayda tamamlanma demektir. Bunlar ortalama değerlerdir; her kedinin gelişimi biraz farklı seyredebilir.' },

    { kind: 'baslik', metin: 'Yetişkin ağırlığı ne kadar olmalı?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual evcil kedilerde ortalama olgun ideal vücut ağırlığını erkeklerde 3,2 kg, dişilerde 2,8 kg olarak veriyor. Bu bir ortalamadır ve iri ırklar ile bireysel yapı farkları rakamı değiştirir. Bir kedinin kendi ideal kilosunu belirlemek için tartının yanında vücut kondisyon puanına bakmak gerekiyor; bunu veteriner hekim yapar.' },
    { kind: 'paragraf', metin: 'Yaşı insan yaşına çevirmek ve hangi evrede olduğunu görmek isteyenler için [[kedi-yasi-nasil-hesaplanir|kedi yaşı hesaplama]] yazısı var.' },

    { kind: 'baslik', metin: 'Yavru evresi neden bir yaşa kadar sürüyor?' },
    { kind: 'paragraf', metin: 'AAHA ve AAFP yaşam evresi kılavuzu (2021) yavru evresini doğumdan bir yaşına kadar, genç yetişkin evresini bir yaştan altı yaşa kadar tanımlıyor. Kılavuz, bu yaşların bireyler arasında önemli farklar gösterebileceğini de belirtiyor. Yani bir yaş bir sınır çizgisidir, kesin bir dönüm noktası değildir.' },
    { kind: 'paragraf', metin: 'Kılavuza göre 10 haftalık büyüyen bir yavrunun enerji ihtiyacı vücut ağırlığının kilogramı başına günde 200 kcal iken, 10 aylıkken bu değer 80 kcal. Büyüme yavaşladıkça kedinin yakıt ihtiyacı belirgin biçimde azalıyor.' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual yavruların genellikle 8 ay ile 12 ay arasında yetişkin mamaya geçirildiğini yazıyor. AAHA ve AAFP kılavuzu ise mama değişiminin 7-10 günde kademeli yapılmasını öngörüyor. Hangi mamaya ne zaman geçileceğine veteriner hekimle birlikte karar vermek önerilir; miktar ve mama türü için [[yavru-kedi-ne-kadar-mama-yemeli|yavru kedi mama miktarı]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'İri ırklar neden daha geç tamamlıyor?' },
    { kind: 'paragraf', metin: 'CFA, Maine Coon ırkını tescilli kedi ırklarının en büyüğü olarak tanımlıyor ve ırk standardında yavaş olgunlaşmaya pay verilmesini istiyor. Yani iri ırklarda genel takvimin biraz ötesinde bir gelişim beklenebiliyor.' },
    { kind: 'paragraf', metin: 'Münih Ludwig-Maximilians Üniversitesi araştırmacıları beş ırktan yavruların doğumdan 12 haftalığa kadar tartı kayıtlarını yetiştiricilerden topladı. Maine Coon yavrularında ortalama doğum ağırlığı 115 g, Persian yavrularında 82 g bulundu. Mutlak büyüme iri ırklarda daha hızlıydı; beklenen olgun ağırlığa oranla bakıldığında ise ırk büyüklüğünün belirgin bir etkisi görülmedi.' },
    { kind: 'paragraf', metin: 'Çalışma yalnızca 12 haftalığa kadar izlediği için iri ırkların hangi ayda tamamladığını göstermiyor. Bu nedenle ırka bağlı bir ay vermek yerine gelişimi veteriner hekimle birlikte izlemek daha doğrudur. Yavru dönemine dair genel bilgi için [[yavru-kedi-bakimi|yavru kedi bakımı]] yazısı da var.' },

    { kind: 'baslik', metin: 'Kısırlaştırma büyümeyi durdurur mu?' },
    { kind: 'yanilgi', baslik: '"Kısırlaştırılan kedi büyümeyi bırakır"', metin: 'İncelenen küçük çalışmalarda kısırlaştırma büyümeyi durdurmadı. Büyüme plağının kapanma zamanı değişti, ama kemik uzunluğunda fark çıkmadı. Kısırlaştırma kararının zamanı ise veteriner hekimle birlikte verilir.' },
    { kind: 'paragraf', metin: 'Florida Üniversitesi veteriner fakültesinde 31 yavru kediyle yapılan kontrollü çalışmada kediler 7 haftalıkken ya da 7 aylıkken kısırlaştırıldı, bir grup da kısırlaştırılmadı. 7 haftada ve 7 ayda kısırlaştırılan gruplar arasında fark çıkmadı. Kısırlaştırılmayan kedilerde ön kol kemiğinin (radius) alt ucundaki büyüme plağı daha erken kapandı ve bu kediler 1 yaşında 7 aylıkken kısırlaştırılanlardan anlamlı olarak daha hafifti.' },
    { kind: 'paragraf', metin: 'İstanbul Üniversitesi Veteriner Fakültesi araştırmacılarının 14 yavruyla yaptığı çalışmada 3 aylıkken kısırlaştırılan dişilerde radiusun üst ucundaki büyüme plağı ortalama 7,43 ayda, ameliyatı taklit edilen grupta 6,14 ayda kapandı. Buna rağmen son ölçümde ortalama radius uzunluğunda anlamlı fark yoktu. Aynı çalışmada 4-9 ay arasında vücut ağırlığında ve kemik mineral yoğunluğunda da anlamlı fark bulunmadı.' },
    { kind: 'paragraf', metin: 'İki çalışma da küçük gruplarla yapıldı; bu yüzden sonuçlar bir kesinlik değil bir eğilim olarak okunmalı. Zamanlama için [[kediler-ne-zaman-kisirlastirilmali|kedilerde kısırlaştırma zamanı]] yazısı var.' },

    { kind: 'baslik', metin: 'Büyüme bitince kilo takibi sürüyor' },
    { kind: 'paragraf', metin: 'AAHA ve AAFP kılavuzu kısırlaştırmanın kilo artışıyla ilişkili olduğunu ve obeziteden korunmanın yavru evresinde başladığını belirtiyor. Kılavuza göre 9 üzerinden 6 ya da 7 kondisyon puanı fazla kilolu, 8 ve üzeri obez kabul ediliyor.' },
    { kind: 'paragraf', metin: 'Kılavuz, vücut ağırlığı ve kondisyon puanının muayenede kayda geçirilmesini istiyor. Büyümenin bittiği dönemden sonra kilo artışı sürüyorsa bunun nedenini ve ne yapılacağını veteriner hekimle konuşmak gerekiyor. Düzenli kontrol zamanı için [[kedi-kopek-check-up-ne-zaman|kedi ve köpek check-up zamanı]] yazısı yol gösterebilir.' },

    { kind: 'baslik', metin: 'Ne zaman veteriner hekime gitmek gerekiyor?' },
    { kind: 'uyari', metin: 'Kedinin büyümesi yaşıtlarına göre belirgin biçimde yavaşsa, kilo almıyorsa ya da kilo kaybediyorsa, iştahı değiştiyse veya gelişimiyle ilgili başka bir kaygı varsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Nedenini belirtilerden tahmin etmek mümkün değildir; değerlendirmeyi yalnızca muayene yapabilir.' },
  ],
  sss: [
    { soru: 'Kediler kaç aylıkken tam boyuna ulaşır?', cevap: 'Genellikle yaklaşık yedi aylıkken. Merck Veterinary Manual büyümenin olağan olarak 200-220 günde tamamlandığını belirtiyor. Bu bir ortalamadır; bireysel farklar olabiliyor ve iri ırklarda süre uzayabiliyor. Gelişimin yolunda olup olmadığını veteriner hekim değerlendirir.' },
    { soru: 'Kedi bir yaşında hâlâ yavru sayılır mı?', cevap: 'Bir yaşına kadar evet, yavru evresinde sayılıyor. AAHA ve AAFP kılavuzu yavru evresini doğumdan bir yaşına kadar, genç yetişkin evresini bir yaştan altı yaşa kadar tanımlıyor. Büyümenin büyük bölümü daha önce bitse de bu sınıflama kontrol ve beslenme planlamasında kullanılıyor.' },
    { soru: 'Maine Coon kaç yaşına kadar büyür?', cevap: 'Kesin bir yaş vermek mümkün değil. CFA ırk standardı Maine Coon için yavaş olgunlaşmaya pay verilmesini istiyor. Bu nedenle iri ırklarda genel kedi takviminden daha geç tamamlanması beklenebiliyor. Kedinin kendi gelişimini veteriner hekim izler.' },
    { soru: 'Kısırlaştırma kedinin büyümesini durdurur mu?', cevap: 'Hayır, incelenen çalışmalarda durdurmadı. Florida ve İstanbul çalışmalarında kısırlaştırılan kedilerde büyüme plağı geç kapandı, ama kemik uzunluğunda fark çıkmadı. Bu çalışmalar küçüktür; kısırlaştırma zamanına veteriner hekimle birlikte karar vermek gerekiyor.' },
    { soru: 'Kedi büyüdükten sonra mama değiştirilmeli mi?', cevap: 'Evet, yavru mamasından yetişkin mamasına geçiş gerekiyor. Merck Veterinary Manual bu geçişin genellikle 8 ay ile 12 ay arasında yapıldığını yazıyor. AAHA ve AAFP kılavuzu geçişin 7-10 günde kademeli olmasını öngörüyor. Hangi mamanın uygun olduğunu veteriner hekim söyler.' },
    { soru: 'Erkek kediler dişilerden daha mı büyük olur?', cevap: 'Ortalamada evet. Merck Veterinary Manual evcil kedilerde ortalama olgun ideal ağırlığı erkeklerde 3,2 kg, dişilerde 2,8 kg olarak veriyor. Bu bir ortalamadır; ırk ve bireysel yapı farkı büyük olabiliyor. Kedinin ideal kilosunu veteriner hekim belirler.' },
    { soru: 'Büyüme bittikten sonra kilo almak normal mi?', cevap: 'Kilo artışı büyümeyle aynı şey değildir ve izlenmesi gerekiyor. AAHA ve AAFP kılavuzu kısırlaştırmanın kilo artışıyla ilişkili olduğunu belirtiyor ve ağırlık ile kondisyon puanının muayenede kaydedilmesini istiyor. Kilo artışı sürüyorsa veteriner hekime danışmak önerilir.' },
  ],
  kontrolListesi: [
    'Kedinin güncel tartı kaydı var mı?',
    'Kondisyon puanına hekim baktı mı?',
    'Yetişkin mamaya geçiş planı var mı?',
    'Kısırlaştırma zamanı konuşuldu mu?',
    'Yıllık kontrol randevusu var mı?',
    'Büyümeyle ilgili bir kaygı var mı?',
  ],
  kaynaklar: [
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Feeding Practices in Small Animals',
      adres: 'https://merckvetmanual.com/management-and-nutrition/nutrition-small-animals/feeding-practices-in-small-animals',
    },
    {
      kurum: 'American Animal Hospital Association · American Association of Feline Practitioners',
      yazarlar: 'Quimby J, Gowland S, Carney HC, DePorter T ve ark.',
      baslik: '2021 AAHA/AAFP Feline Life Stage Guidelines',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2021,
      kunye: '23(3):211-233',
      doi: '10.1177/1098612X21993657',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/33627003/',
    },
    {
      kurum: 'Cat Fanciers\' Association (CFA)',
      baslik: 'Maine Coon Cat',
      adres: 'https://cfa.org/maine-coon/',
    },
    {
      kurum: 'Ludwig-Maximilians-Universität München',
      yazarlar: 'Moik K, Kienzle E',
      baslik: 'Birth weight and postnatal growth of pure-bred kittens',
      dergi: 'British Journal of Nutrition',
      yil: 2011,
      kunye: '106 Suppl 1:S32-4',
      doi: '10.1017/S0007114511003333',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/22005433/',
    },
    {
      kurum: 'University of Florida College of Veterinary Medicine',
      yazarlar: 'Stubbs WP, Bloomberg MS, Scruggs SL, Shille VM, Lane TJ',
      baslik: 'Effects of prepubertal gonadectomy on physical and behavioral development in cats',
      dergi: 'Journal of the American Veterinary Medical Association',
      yil: 1996,
      kunye: '209(11):1864-71',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/8944799/',
    },
    {
      kurum: 'İstanbul Üniversitesi Veteriner Fakültesi',
      yazarlar: 'Uçmak M, Yılmaz ÖT, Gündüz MC, Uçmak ZG, Duzgun O, Eskiyurt N, Oruç CU, Genç S, Erzengin ÖM, Karaçam E',
      baslik: 'Osteoporotic risk and physeal closure in prepubertal ovariohysterectomized cats',
      dergi: 'Animal Reproduction Science',
      yil: 2015,
      kunye: '161:146-51',
      doi: '10.1016/j.anireprosci.2015.09.001',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/26386680/',
    },
  ],
};
