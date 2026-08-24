import type { BlogYazi } from './types';

/**
 * BESLENME kategorisinin ilk yazisi (Ahmet, 24.08.2026: "her kategoriye yayin
 * eklemeliyiz"). Sayisal iddialarin kaynagi Benka 2023 (JAVMA) ve AAHA yasam
 * evreleri kilavuzu; ikisi de PubMed kunyesinden okundu.
 */
export const kopegimFazlaKiloluMu: BlogYazi = {
  slug: 'kopegim-fazla-kilolu-mu',
  baslik: 'Köpeğim Fazla Kilolu mu? Kaburga Testi ve Porsiyon',
  ozet: 'Kilonun ölçüsü terazi değil kaburga. Evde iki dakikada yapılan testle köpeğinizin fazla kilolu olup olmadığını anlayın, porsiyonu buna göre ayarlayın.',
  kategori: 'Beslenme',
  tarih: '2026-08-24',
  bloklar: [
    { kind: 'paragraf', metin: 'Köpeğinizin fazla kilolu olup olmadığını anlamak için tartıya ihtiyacınız yok. **Kaburgaları elinizle hissedebiliyor ama gözle göremiyorsanız** kilo büyük olasılıkla yerinde; hissetmek için bastırmanız gerekiyorsa fazlalık başlamış demektir.' },
    { kind: 'paragraf', metin: 'Bu yazı iki soruyu ayırıyor: köpeğinizin bugünkü durumunu evde nasıl ölçersiniz, ve fazlalık varsa porsiyonu neye göre değiştirirsiniz. Sayılar değil, kaburga ve bel çizgisi ölçüt.' },

    { kind: 'baslik', metin: 'Kilonun ölçüsü terazi değil, kaburga' },
    { kind: 'paragraf', metin: 'Aynı ırktan iki köpeğin ideal kilosu birbirinden kilolarca farklı olabiliyor. İskelet yapısı, kas oranı ve boy aynı ırk içinde bile değişiyor. Bu yüzden veteriner hekimler tartıyı tek başına kullanmıyor, **vücut kondisyon skoru** dedikleri bir el muayenesiyle birlikte değerlendiriyor.' },
    { kind: 'paragraf', metin: 'Evde yapabileceğiniz hâli üç adımdan oluşuyor ve iki dakika sürüyor.' },
    { kind: 'liste', maddeler: [
      '**Kaburga testi:** Elinizin içini köpeğin göğüs kafesine yassı şekilde koyun. Kaburgalar elinizin sırtındaki kemikler gibi hissediliyorsa kilo yerinde. Bastırmadan hiçbir şey hissetmiyorsanız üstünde yağ tabakası var.',
      '**Üstten bakış:** Köpeğe yukarıdan bakın. Kaburgaların bittiği yerde belin içeri girmesi gerekiyor. Gövde kaburgadan kalçaya düz bir dikdörtgen gibi iniyorsa bel çizgisi kaybolmuş demektir.',
      '**Yandan bakış:** Göğüs kafesi karından daha aşağıda olmalı, karın yukarı doğru toplanmalı. Karın alt hattı göğüsle aynı hizadaysa fazlalık var.',
    ] },

    { kind: 'tablo', basliklar: ['Elde hissedilen', 'Üstten görünüm', 'Yorum'], satirlar: [
      ['Kaburgalar keskin, üstünde doku yok', 'Bel belirgin şekilde çökük', 'Zayıf, hekime danışılmalı'],
      ['Hafif bir dokunuşla hissediliyor', 'Bel içeri giriyor', 'İdeal'],
      ['Bastırınca hissediliyor', 'Bel hafif belirgin', 'Fazla kilolu'],
      ['Bastırınca da zor hissediliyor', 'Bel yok, gövde düz', 'Obez, plan gerekiyor'],
    ] },

    { kind: 'yanilgi', baslik: '"Kaburgası görünüyorsa aç kalıyordur" yanılgısı', metin: 'Kaburganın elle hissedilmesi ile gözle görünmesi ayrı şeyler. Sağlıklı bir köpekte kaburgalar hissedilir ama dışarıdan seçilmez. Görünüyor diye porsiyon artırmak, en sık yapılan fazla besleme hatalarından biri.' },

    { kind: 'baslik', metin: 'Kısırlaştırma kiloyu etkiliyor ama sebebi ameliyat değil' },
    { kind: 'paragraf', metin: 'Amerika Birleşik Devletleri’ndeki birinci basamak veteriner kliniklerinden alınan kayıtlarla yapılan geniş bir çalışma, kısırlaştırılmış köpeklerde fazla kilolu olma riskinin daha yüksek olduğunu ve bu riskin **kısırlaştırma yaşına, cinsiyete ve ırk büyüklüğüne göre değiştiğini** ortaya koyuyor.' },
    { kind: 'paragraf', metin: 'Buradaki mekanizma yanlış anlaşılıyor. Ameliyat köpeği kilolu yapmıyor; kısırlaştırma sonrası **enerji ihtiyacı düşüyor** ve porsiyon aynı kalınca fark yağ olarak birikiyor. Yani sorun ameliyatta değil, ameliyattan sonra güncellenmeyen mama miktarında.' },
    { kind: 'paragraf', metin: 'Kısırlaştırmanın ömre etkisi ayrı bir konu ve olumlu tarafları var; ayrıntısı [[kopekler-kac-yil-yasar|köpeklerde ömrü belirleyen etkenler]] yazısında.' },

    { kind: 'baslik', metin: 'Porsiyon paketten değil köpekten hesaplanır' },
    { kind: 'paragraf', metin: 'Mama paketlerindeki tablolar ortalama bir köpeği varsayıyor: orta düzeyde hareketli, kısırlaştırılmamış, genç bir yetişkin. Sizin köpeğiniz bu üç varsayımın hepsine uymuyorsa tablo size fazla gösteriyor demektir.' },
    { kind: 'liste', maddeler: [
      'Kısırlaştırılmışsa günlük ihtiyaç düşüyor, porsiyon buna göre azaltılıyor',
      'Günde iki kısa tuvalet yürüyüşü "hareketli köpek" sayılmıyor',
      'Ödüller günlük toplamın içinde; ayrı bir hesap değil',
      'Sofradan verilen tek lokma küçük ırkta günlük ihtiyacın önemli bir kısmını kapatabiliyor',
      'Yaşlanan köpekte ihtiyaç yine değişiyor, porsiyon yılda bir gözden geçiriliyor',
    ] },

    { kind: 'yanilgi', baslik: '"Az verirsem acıkır, mutsuz olur" yanılgısı', metin: 'Fazla kilolu bir köpekte porsiyonu düşürmek açlık değil, doğru miktara dönüş demek. Köpek yemek isteme davranışını mama miktarından bağımsız olarak sürdürüyor; kabın boşalması açlık göstergesi değil.' },

    { kind: 'baslik', metin: 'Yaş ilerledikçe ölçüt de değişiyor' },
    { kind: 'paragraf', metin: 'AAHA’nın köpek yaşam evreleri kılavuzu, köpeğin hayatını yavru, genç yetişkin, olgun yetişkin, yaşlı ve yaşam sonu olmak üzere beş evreye ayırıyor ve beslenme, parazit kontrolü, davranış gibi başlıkları her evre için ayrı ele alıyor. Yani "köpek maması" diye tek bir doğru miktar yok; evre değiştikçe hedef de değişiyor.' },
    { kind: 'paragraf', metin: 'Köpeğinizin hangi evrede olduğunu bilmiyorsanız [[kopekler-kac-yil-yasar|ırka ve boya göre ömür]] yazısındaki tablo yön verebilir: dev ırklar küçük ırklardan çok daha erken yaşlanıyor.' },

    { kind: 'baslik', metin: 'Kilo vermek hızlı değil, kademeli olmalı' },
    { kind: 'paragraf', metin: 'Fazla kilolu bir köpekte hedef, haftada birkaç yüz gramlık kayıplarla ilerleyen kademeli bir düşüş. Hızlı kilo kaybı kas kaybına ve halsizliğe yol açıyor. Porsiyonu birden yarıya indirmek doğru değil; azaltma küçük adımlarla ve ölçülerek yapılıyor.' },
    { kind: 'paragraf', metin: 'Aylık takip için tartı yeterli değil, kaburga testi de tekrarlanmalı. Aynı tartı değeri kas kaybıyla da gelebilir ve o iyi bir işaret değil.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Ani kilo alımı ya da kaybı hormonal bir sorunun işareti olabilir; kilo planı hayvanı gören veteriner hekimle birlikte kurulmalıdır.' },

    { kind: 'baslik', metin: 'Fazla kilo yalnız görüntü meselesi değil' },
    { kind: 'paragraf', metin: 'Fazla kilonun ilk bedelini eklemler ödüyor. Her fazla kilo, yürürken ve zıplarken diz ve kalça eklemine binen yükü artırıyor; kalça displazisi gibi yatkınlığı olan ırklarda belirtiler daha erken ortaya çıkıyor. Aynı yük omurgaya da biniyor.' },
    { kind: 'paragraf', metin: 'İkinci bedel solunum ve dolaşımda görülüyor. Göğüs çevresindeki yağ dokusu akciğerin genişleme alanını daraltıyor, kalp aynı işi daha çok çalışarak yapıyor. Sıcak havada zorlanma ve egzersiz sonrası uzun süre nefes toparlayamama, çoğu zaman ilk fark edilen işaretler oluyor.' },
    { kind: 'paragraf', metin: 'Üçüncüsü daha sinsi: fazla kilolu köpek daha az hareket ediyor, az hareket kas kaybına yol açıyor, kas kaybı günlük enerji harcamasını daha da düşürüyor. Döngü kendi kendini besliyor ve her turda kırılması zorlaşıyor. Bu yüzden erken müdahale, ileride daha büyük bir kilo hedefiyle uğraşmaktan kolay.' },
    { kind: 'altBaslik', metin: 'Kilo kaydı tutmanın pratik yolu' },
    { kind: 'paragraf', metin: 'Ayda bir tartı ve ayda bir kaburga testi yeterli. İkisini aynı güne koymak, kaydın düzenli kalmasını sağlıyor. Tartı değeri tek başına yorumlanmıyor; kondisyonla birlikte okunuyor. Üç ay üst üste aynı yönde giden bir eğilim varsa, porsiyon ya da hareket düzeni gözden geçiriliyor.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Paketteki miktar herkese uyar', 'Tablo ortalama köpeği varsayıyor, kısırlaştırma ve hareket düzeyi hesaba katılmıyor'],
      ['Ödül az kalori', 'Ödüller günlük toplamın parçası, küçük ırkta payı büyük'],
      ['Kilo yalnız görüntü meselesi', 'Eklem, solunum ve kalp yükü artıyor'],
      ['Tartı tek başına yeter', 'Aynı kilo kas ya da yağ olabilir, kaburga testi gerekiyor'],
      ['Kısırlaştırma kilo yapar', 'Kısırlaştırma enerji ihtiyacını düşürüyor, kiloyu güncellenmeyen porsiyon yapıyor'],
    ] },
  ],
  kontrolListesi: [
    'Kaburga testi bu ay yapıldı mı?',
    'Üstten bakınca bel çizgisi var mı?',
    'Kısırlaştırıldıysa porsiyon azaldı mı?',
    'Ödüller günlük toplama sayılıyor mu?',
    'Tartı kaydı düzenli tutuluyor mu?',
    'Yaş evresine göre mama seçildi mi?',
  ],
  sss: [
    { soru: 'Köpeğimin fazla kilolu olduğunu nasıl anlarım?', cevap: 'Elinizin içini göğüs kafesine yassı koyun; kaburgalar bastırmadan hissedilmiyorsa fazlalık var. Üstten bakıldığında kaburgaların bittiği yerde belin içeri girmesi, yandan bakıldığında karnın yukarı toplanması gerekiyor. Bu üç işaretten ikisi kaybolmuşsa porsiyon gözden geçirilmeli.' },
    { soru: 'Köpeğim kısırlaştırıldıktan sonra kilo alır mı?', cevap: 'Kısırlaştırma sonrası günlük enerji ihtiyacı düşüyor ve porsiyon aynı kalırsa fark yağ olarak birikiyor. Geniş kayıt çalışmaları kısırlaştırılmış köpeklerde fazla kilolu olma riskinin daha yüksek olduğunu, riskin yaşa ve ırk büyüklüğüne göre değiştiğini gösteriyor. Ameliyatın kendisi değil, güncellenmeyen mama miktarı belirleyici.' },
    { soru: 'Mama paketindeki miktar yeterli değil mi?', cevap: 'Paketteki tablo ortalama bir köpeği varsayıyor: orta düzeyde hareketli, kısırlaştırılmamış, genç bir yetişkin. Köpeğiniz bu tanıma uymuyorsa tablo fazla gösteriyor olabilir. Miktar, köpeğin kondisyonuna göre ayarlanıp aylık olarak yeniden değerlendiriliyor.' },
    { soru: 'Köpeğim haftada ne kadar kilo vermeli?', cevap: 'Hedef kademeli bir düşüş; porsiyonu birden yarıya indirmek doğru değil. Hızlı kilo kaybı kas kaybına ve halsizliğe yol açıyor. Takip yalnız tartıyla yapılmıyor, kaburga testi de tekrarlanıyor çünkü aynı tartı değeri kas kaybıyla da gelebilir.' },
    { soru: 'Ödül vermeyi tamamen kesmeli miyim?', cevap: 'Kesmek gerekmiyor ama ödüller günlük toplamın içinde sayılıyor. Küçük ırklarda tek bir ödül günlük ihtiyacın önemli bir kısmını kapatabiliyor. Ödül verilecekse mamadan aynı miktar düşülüyor ya da ödül olarak mamanın kendisi kullanılıyor.' },
    { soru: 'Yaşlı köpeğimin porsiyonu değişmeli mi?', cevap: 'Evet, ihtiyaç yaşam evresine göre değişiyor. AAHA kılavuzu köpeğin hayatını beş evreye ayırıyor ve beslenmeyi her evre için ayrı ele alıyor. Porsiyon en az yılda bir, kondisyonla birlikte gözden geçiriliyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Morris Animal Foundation · Cornell University',
      yazarlar: 'Benka VA, Scarlett JM, Sahrmann J, Rieke K ve ark.',
      baslik: 'Age at gonadectomy, sex, and breed size affect risk of canine overweight and obese outcomes: a retrospective cohort study using data from United States primary care veterinary clinics',
      dergi: 'Journal of the American Veterinary Medical Association',
      yil: 2023,
      kunye: '261(9):1316-1325',
      doi: '10.2460/javma.22.12.0596',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/37217173/',
    },
    {
      kurum: 'American Animal Hospital Association',
      yazarlar: 'Creevy KE, Grady J, Little SE, Moore GE ve ark.',
      baslik: '2019 AAHA Canine Life Stage Guidelines',
      dergi: 'Journal of the American Animal Hospital Association',
      yil: 2019,
      kunye: '55(6):267-290',
      doi: '10.5326/JAAHA-MS-6999',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/31622127/',
    },
  ],
};
