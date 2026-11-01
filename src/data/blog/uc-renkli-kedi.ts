import type { BlogYazi } from './types';

export const ucRenkliKedi: BlogYazi = {
  slug: 'uc-renkli-kedi',
  baslik: 'Üç Renkli Kedi Neden Hep Dişi?',
  ozet: 'Üç renkli kediler neden neredeyse hep dişi? Turuncu renk geninin X kromozomunda olması, calico ile tortoiseshell farkı ve nadir erkekler yazıda.',
  kapakAlt:
    'Salonda pati kaldırmış üç renkli kedi',
  kategori: 'Kedi',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Üç renkli kediler neredeyse her zaman dişidir, çünkü kırmızı (turuncu) rengi veren gen X kromozomunda bulunur.** Cat Fanciers\' Association, bu renklerin cinsiyete bağlı turuncu genle ilişkili olduğunu yazıyor ve calico tanımını "dişi kedi" diye yapıyor. Erkekte bu görünüm yalnızca nadir bir kromozom farkıyla ortaya çıkıyor.' },
    { kind: 'paragraf', metin: 'Sokakta "üç renkli" dediğimiz kedinin gerçekte iki ayrı adı var, üstelik ikisi de ırk değil. Aşağıda rengin nasıl oluştuğunu, calico ile tortoiseshell farkını ve erkek üç renkli kedinin neden istisna sayıldığını kaynaklarıyla birlikte topladık.' },

    { kind: 'tablo', basliklar: ['Soru', 'Kısa cevap'], satirlar: [
      ['Üç renkli kedi hangi cinsiyette olur?', 'Büyük çoğunlukla dişi'],
      ['Turuncu geni hangi kromozomda?', 'X kromozomunda'],
      ['Erkek üç renkli kedi var mı?', 'Var, ama düşük sıklıkta'],
      ['Üç renkli kedi bir ırk mı?', 'Hayır, bir renk ve desen tanımı'],
    ]},

    { kind: 'baslik', metin: 'Turuncu rengin geni X kromozomunda' },
    { kind: 'paragraf', metin: 'Kedilerde kırmızı ya da turuncu renk, "orange" adı verilen ve X kromozomuna bağlı bir bölgeyle kontrol ediliyor. Bu bölge siyah-kahverengi pigmentin baskılanıp turuncu rengin öne çıkmasına yol açıyor. Cat Fanciers\' Association, parti-color (birden çok renkli) grubundaki renklerin çoğunun cinsiyete bağlı turuncu genle ilişkili olduğunu belirtiyor.' },
    { kind: 'paragraf', metin: 'Bu genin tam olarak hangisi olduğu uzun süre bilinmiyordu. 2025\'te Kyushu Üniversitesi\'nden araştırmacılar, X\'e bağlı ARHGAP36 geninin bir bölgesindeki 5,1 kilobazlık bir silinmenin turuncu renkle yakından ve yalnızca onunla ilişkili olduğunu bildirdi. Çalışma bu silinmenin evcil kedilerdeki turuncu renkte yaygın olduğunu, yani rengin tek bir kökenden gelmiş olabileceğini düşündürdüğünü yazıyor.' },

    { kind: 'baslik', metin: 'Yama yama görünüm nasıl oluşuyor?' },
    { kind: 'paragraf', metin: 'Dişi memelilerde iki X kromozomu var ve hücrelerde bunlardan biri rastgele susturuluyor. Buna rastgele X kromozomu inaktivasyonu deniyor. Bir dişi kedinin bir X\'inde turuncu, diğerinde turuncu olmayan alel varsa, deriyi oluşturan hücre gruplarının bir kısmı turuncu, bir kısmı siyah-kahverengi renk üretiyor.' },
    { kind: 'paragraf', metin: 'Kyushu Üniversitesi çalışması da tortoiseshell ve calico kedilerdeki siyah-kahverengi ile turuncu yamaların, dişi memelilerde görülen rastgele X inaktivasyonunun klasik örneği sayıldığını yazıyor. Yani yamaların yeri ve boyutu kedinin gelişimi sırasında rastlantıyla belirleniyor, iki üç renkli kedinin deseni de aynı olmuyor.' },

    { kind: 'baslik', metin: 'Calico, tortoiseshell ve yamalı tekir farkı' },
    { kind: 'paragraf', metin: 'Üç renkli kedi gündelik bir ifade. Cat Fanciers\' Association\'ın tanımlarında bu görünümler ayrı adlarla geçiyor ve hepsi "parti-colored" grubunda toplanıyor.' },
    { kind: 'tablo', basliklar: ['Ad', 'Cat Fanciers\' Association tanımı'], satirlar: [
      ['Tortoiseshell', 'Siyah, çikolata ya da seal renkli dişi kedi, tüyün her yerinde kırmızı yamalar'],
      ['Calico', 'Beyaz ile siyah ve kırmızı, mavi ve krem ya da lila ve krem renkli geniş düz alanlar taşıyan dişi kedi'],
      ['Yamalı tekir', 'Tekir desenli kedi, üzerinde kırmızı ya da krem yamalar, büyük olasılıkla dişi'],
    ]},
    { kind: 'paragraf', metin: 'Aynı kuruluş, tortoiseshell ve mavi-krem kedilerin beyazla da birleşebileceğini yazıyor. Yani tortoiseshell ile calico arasındaki en belirgin fark beyazın geniş alanlar kaplamasıdır. Tekir desenli kedilerin renk ve desen ayrımını [[tekir-kedi|tekir kedi]] yazımızda anlatıyoruz.' },
    { kind: 'paragraf', metin: 'İki renkli (bi-color) kedi ise farklı bir grup. Beyaz ile başka bir renk ya da desen taşıyan bu kediler, Cat Fanciers\' Association\'a göre hem erkekte hem dişide görülebiliyor.' },

    { kind: 'baslik', metin: 'Erkek üç renkli kedi nasıl olur?' },
    { kind: 'paragraf', metin: 'Erkek kedide normalde tek X kromozomu bulunur, dolayısıyla hem turuncu hem turuncu olmayan alel taşıması beklenmez. Kopenhag Üniversitesi\'nden araştırmacılar, tortoiseshell renginin normalde dişilerle sınırlı olduğunu, erkeklerin ise insandaki Klinefelter sendromuna benzer bir kromozom farkı yüzünden düşük sıklıkta bu rengi taşıdığını yazıyor.' },
    { kind: 'paragraf', metin: 'Bu farkta erkek kedide 39,XXY karyotipi var, yani fazladan bir X kromozomu bulunuyor. Fazla X, bir turuncu ve bir turuncu olmayan alelin birlikte bulunmasına izin veriyor ve ortaya tortoiseshell görünüm çıkıyor.' },
    { kind: 'paragraf', metin: 'Aynı çalışmada incelenen tortoiseshell erkek kedinin testis dokusunda üreme hücreleri hiç görülmedi ve yazarlar olguyu "kısır, 39,XXY kromozomlu tortoiseshell erkek kedinin klasik örneği" diye tanımladı. Bu tek bir olgunun bulgusu; her erkek üç renkli kedinin aynı durumda olduğunu göstermez.' },
    { kind: 'paragraf', metin: 'Polonya ve Finlandiya\'dan araştırmacıların yazdığı, cinsiyet gelişim bozukluğu olan kedileri anlatan bir çalışma, XXY trisomisi saptanan ve testisleri küçülmüş tortoiseshell bir Devon Rex erkek kediyi bildiriyor. Bu da erkek üç renkli kedinin kromozom incelemesiyle anlaşılan bir durum olduğunu gösteriyor.' },
    { kind: 'uyari', metin: 'Üç renkli bir kedinin cinsiyetini ve sağlığını renginden çıkarmak doğru değil. Cinsiyetin doğrulanması, kromozom incelemesi ve sağlıkla ilgili her soru için veteriner hekime başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Üç renkli kedi bir ırk mı?' },
    { kind: 'paragraf', metin: 'Hayır. Cat Fanciers\' Association, renk ve desen tanımlarının kedinin ırkını belirtmediğini, tekirin bir desen olduğu gibi calico ve tortoiseshell için de aynısının geçerli olduğunu yazıyor. Aynı kuruluşa göre tortoiseshell Persian ya da Cornish Rex, tekir Oriental ya da Maine Coon görülebilir.' },
    { kind: 'yanilgi', baslik: '"Üç renkli kediler ayrı bir ırktır"', metin: 'Üç renk, tüyün rengini ve desenini anlatır; ırkı anlatmaz. Sokak kedisinde de ırklı kedide de bu görünüm çıkabilir. Irkı belli olmayan bir kedinin ırkını rengine bakarak söylemek mümkün olmaz.' },
    { kind: 'yanilgi', baslik: '"Üç renkli erkek kedi diye bir şey yoktur"', metin: 'Vardır, ama nadirdir. Tortoiseshell erkek kediler düşük sıklıkta görülüyor ve bunun nedeni insandaki Klinefelter sendromuna benzer bir kromozom farkı. Renkten "hep dişi" demek, kesin kural değil, güçlü bir eğilim.' },

    { kind: 'baslik', metin: 'Renk huyu ya da sağlığı söyler mi?' },
    { kind: 'paragraf', metin: 'Elimizdeki kaynaklarda üç renkli kedilerin belirli bir huyu ya da hastalığa yatkınlığı olduğuna dair bir bulgu yok. Renk, tüydeki pigment üretimini anlatıyor; kedinin davranışını ya da sağlığını belirlediği gösterilmiş değil. Kedinin davranışında ani bir değişiklik fark edilirse nedenini renginde aramadan veteriner hekime danışmak gerekiyor.' },

    { kind: 'baslik', metin: 'Üç renkli bir kediyi sahiplenirken' },
    { kind: 'paragraf', metin: 'Üç renkli kediyi sahiplenirken diğer kediler için geçerli adımlar aynen geçerli. İlk muayenede kedinin yaşı, cinsiyeti ve genel durumu veteriner hekimle konuşulur; yaşını tahmin etmek için [[kedi-yasi-nasil-hesaplanir|kedi yaşı hesaplama]] yazımıza bakılabilir, kısırlaştırma zamanı ise [[kediler-ne-zaman-kisirlastirilmali|kediler ne zaman kısırlaştırılmalı]] yazımızda anlatılıyor.' },
    { kind: 'paragraf', metin: 'Renkli bir isim aranıyorsa üç renkli kediler için önerilen isimlere [[kedi-isimleri|kedi isimleri]] yazımızdan göz atılabilir.' },
  ],
  kontrolListesi: [
    'Kedinin cinsiyeti doğrulandı mı?',
    'İlk muayene yapıldı mı?',
    'Yaşı tahmin edildi mi?',
    'Kısırlaştırma konuşuldu mu?',
    'Davranış değişikliği not ediliyor mu?',
    'Veteriner hekim belirlendi mi?',
  ],
  sss: [
    { soru: 'Üç renkli kediler neden hep dişi?', cevap: 'Kırmızı ya da turuncu rengi veren gen X kromozomunda bulunuyor. Dişide iki X olduğu için siyah-kahverengi ile turuncu yamalar bir arada görülebiliyor. Erkekte normalde tek X var; üç renk yalnızca nadir bir kromozom farkıyla ortaya çıkıyor.' },
    { soru: 'Erkek üç renkli kedi olur mu?', cevap: 'Olur, ama düşük sıklıkta. Bir araştırmaya göre tortoiseshell erkek kediler, insandaki Klinefelter sendromuna benzer bir kromozom farkından, yani fazladan bir X kromozomundan kaynaklanıyor. İnceleme ve değerlendirme veteriner hekim işidir.' },
    { soru: 'Calico ile tortoiseshell arasındaki fark nedir?', cevap: 'Calico, beyaz ile geniş siyah ve kırmızı alanlar taşıyan dişi kedidir. Tortoiseshell ise siyah, çikolata ya da seal zeminde kırmızı yamalar taşıyan dişi kedidir. Tortoiseshell de beyazla birleşebiliyor, bu yüzden en belirgin ayrım beyazın geniş alanlar kaplamasıdır.' },
    { soru: 'Üç renkli kedi bir ırk mı?', cevap: 'Hayır, üç renkli kedi bir ırk değil. Cat Fanciers\' Association, calico ve tortoiseshell terimlerinin kedinin deseni için kullanıldığını belirtiyor. Tortoiseshell bir Persian ya da Cornish Rex olabilir; yani ırk ayrı, renk ayrı bir bilgi.' },
    { soru: 'Üç renkli kedinin yamaları nasıl dağılıyor?', cevap: 'Yamaların yeri rastgele belirleniyor. Dişi kedide iki X kromozomundan biri hücrelerde rastgele susturuluyor ve bu rastgele X inaktivasyonu siyah-kahverengi ile turuncu yamaları oluşturuyor. Bu yüzden iki üç renkli kedinin deseni birbirinin aynısı olmuyor.' },
    { soru: 'Turuncu rengin geni bulundu mu?', cevap: 'Evet, 2025\'te yayımlanan bir çalışma X\'e bağlı ARHGAP36 geninin bölgesindeki 5,1 kilobazlık bir silinmenin turuncu renkle yakından ilişkili olduğunu bildirdi. Silinmenin evcil kedilerdeki turuncu renkte yaygın olduğu, bunun tek bir kökene işaret edebileceği yazılıyor.' },
    { soru: 'Üç renkli kedilerin huyu farklı mı?', cevap: 'Elimizdeki kaynaklarda renk ile huy arasında kanıtlanmış bir ilişki yok. Davranış kedinin kendi yapısına, yaşantısına ve sağlığına göre değişiyor. Davranışta ani değişiklik görülürse veteriner hekime danışmak önerilir.' },
  ],
  kaynaklar: [
    {
      kurum: 'Cat Fanciers\' Association (CFA)',
      baslik: 'Coat & Color Descriptions',
      adres: 'https://cfa.org/coat-color-descriptions/',
    },
    {
      kurum: 'Kyushu University, Medical Institute of Bioregulation',
      yazarlar: 'Toh H, Au Yeung WK, Unoki M, Matsumoto Y, Miki Y, Matsumura Y, Baba Y, Sado T, Nakamura Y, Matsuda M, Sasaki H',
      baslik: 'A deletion at the X-linked ARHGAP36 gene locus is associated with the orange coloration of tortoiseshell and calico cats.',
      dergi: 'Current Biology',
      yil: 2025,
      kunye: '35(12):2816-2825.e3',
      doi: '10.1016/j.cub.2025.03.075',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/40378840/',
    },
    {
      kurum: 'University of Copenhagen, Faculty of Health Sciences',
      yazarlar: 'Pedersen AS, Berg LC, Almstrup K, Thomsen PD',
      baslik: 'A tortoiseshell male cat: chromosome analysis and histologic examination of the testis.',
      dergi: 'Cytogenetic and Genome Research',
      yil: 2014,
      kunye: '142(2):107-111',
      doi: '10.1159/000356466',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/24335095/',
    },
    {
      kurum: 'Poznan University of Life Sciences, Department of Genetics and Animal Breeding',
      yazarlar: 'Szczerbal I, Krzeminska P, Dzimira S, Tamminen TM, Saari S, Nizanski W, Gogulski M, Nowacka-Woszuk J, Switonski M',
      baslik: 'Disorders of sex development in cats with different complements of sex chromosomes.',
      dergi: 'Reproduction in Domestic Animals',
      yil: 2018,
      kunye: '53(6):1317-1322',
      doi: '10.1111/rda.13263',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/30099782/',
    },
  ],
};
