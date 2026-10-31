import type { BlogYazi } from './types';

export const kedilerKaranliktaGorurMu: BlogYazi = {
  slug: 'kediler-karanlikta-gorur-mu',
  baslik: 'Kediler Karanlıkta Görür mü?',
  ozet: 'Kediler tam karanlıkta görmez ama loş ışıkta insandan çok daha iyi görür. Göz yapısını ve bu inancın ölçümlerle nasıl desteklendiğini anlatıyoruz.',
  kapakAlt:
    'Gece loş salonda yürüyen siyah beyaz kedi',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kediler tam karanlıkta görmez, ama loş ışıkta insanlardan çok daha iyi görür.** Merck Veteriner El Kitabı\'na göre kediler az ışıkta insanlardan yaklaşık 6 kat daha iyi görüyor ve insanların "kediler karanlıkta görür" demesinin sebebi bu. Yani kedinin gözü ışığı çok iyi kullanıyor, ama kullanacağı bir ışık yoksa o da göremiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda kedi gözünün loş ışığı nasıl yakaladığını, gözlerin karanlıkta neden parladığını, insanla kedi arasında yapılan bir ölçümün ne gösterdiğini ve evde bu bilginin ne işe yarayacağını anlatıyoruz. Kedinizin görmesinde bir değişiklik fark ederseniz ne yapılması gerektiğini de sona ekledik.' },

    { kind: 'tablo', basliklar: ['', 'İnsan', 'Kedi'], satirlar: [
      ['Loş ışıkta görme', 'Daha zayıf', 'Yaklaşık 6 kat daha iyi'],
      ['Gözde yansıtıcı tabaka (tapetum lucidum)', 'Yok', 'Var'],
      ['Tam karanlıkta görme', 'Yok', 'Yok'],
      ['İnce ayrıntı (loş ışıkta)', 'Zayıf ya da yok', 'Zayıf ya da yok'],
    ]},

    { kind: 'baslik', metin: 'Kediler karanlıkta gerçekten görür mü?' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı\'nın kedi sahiplerine yönelik sayfası bu konuyu açıkça anlatıyor: kediler loş ışıkta insanlardan 6 kat daha iyi görüyor ve bu durum, kedilerin karanlıkta görebildiği efsanesine yol açmış. Kitabın kedinin fiziksel özelliklerini anlatan sayfası da aynı oranı veriyor.' },
    { kind: 'paragraf', metin: 'Buradaki ayrım önemli. "Loş ışıkta iyi görmek" ile "karanlıkta görmek" aynı şey değil. Gece sokak lambasının, ayın ya da bir odadaki küçük bir ışığın verdiği az miktardaki ışık, kedi için işe yarar bir görüntü oluşturabiliyor. Işığın hiç olmadığı bir ortamda ise gözün yakalayacağı bir şey kalmıyor.' },
    { kind: 'yanilgi', baslik: '"Kediler her karanlıkta rahatça görür"', metin: 'Kediler loş ışıkta insandan çok daha iyi görüyor, ama Merck Veteriner El Kitabı karanlıkta görme fikrini bir efsane olarak anıyor. Kedinin gözü var olan az ışığı güçlendirir; ışık hiç yoksa güçlendirilecek bir şey de yoktur.' },

    { kind: 'baslik', metin: 'Kedinin gözü loş ışığı nasıl yakalıyor?' },
    { kind: 'paragraf', metin: 'Kedi gözünde loş ışıkta görmeye yardım eden üç özellik öne çıkıyor.' },
    { kind: 'liste', maddeler: [
      '**Gözbebeği:** Ortam karardığında gözbebeği genişleyerek içeri daha çok ışık alıyor, ortam aydınlandığında ise küçülüyor.',
      '**Çubuk hücreler:** Retinada çubuk adı verilen çok sayıda hücre var ve bunlar loş ışığı toplamakta iyi.',
      '**Tapetum lucidum:** Retinanın arkasında bulunan, ışığı yansıtan bir tabaka. Gelen ışığı güçlendiriyor.',
    ]},
    { kind: 'paragraf', metin: 'Tapetum lucidum, Vet Ophthalmol dergisinde yayımlanan karşılaştırmalı bir incelemeye göre ışığa duyarlı retina hücrelerine ışığı yakalamak için ikinci bir fırsat veriyor ve böylece az ışıkta görme duyarlılığını artırıyor. Aynı çalışma kedigillerin de içinde bulunduğu etçil hayvanlarda bu tabakanın "tapetum cellulosum" türünde olduğunu bildiriyor.' },
    { kind: 'paragraf', metin: 'İnceleme ayrıca ilginç bir ayrıntı veriyor: primatlar, yani insanlar da dahil bu grup, tapetum lucidum taşımıyor ve incelemeye göre bu yapıya sahip olmayan türler genellikle gündüz aktif hayvanlar. Kedinin gözü ile bizim gözümüz arasındaki en önemli fark bu yansıtıcı tabaka.' },

    { kind: 'baslik', metin: 'Kedinin gözleri karanlıkta neden parlıyor?' },
    { kind: 'paragraf', metin: 'Gece fenerle ya da araba farıyla kediye bakınca gözlerinin parlaması da aynı tabakadan geliyor. Vet Ophthalmol incelemesi, bu "göz parlaması" olgusunun gözün içindeki yansıtıcı bir yapıyla, yani tapetum lucidum ile ilişkili olduğunu belirtiyor. Merck Veteriner El Kitabı ise kedilerde bu parıltının gece mavi ya da yeşilimsi göründüğünü yazıyor.' },
    { kind: 'paragraf', metin: 'Yani parlayan göz, kedinin karanlıkta ışık yaydığı anlamına gelmiyor. Dışarıdan gelen ışık tabakadan geri yansıyor.' },

    { kind: 'baslik', metin: 'Ölçümler insan ve kedi için ne gösteriyor?' },
    { kind: 'paragraf', metin: 'Illinois Üniversitesi\'nden Kang ve arkadaşları 2009\'da Journal of Neurophysiology dergisinde kedileri ve insanları aynı görsel uyaranlarla, benzer davranış yöntemleriyle ve çok geniş bir ışık aralığında karşılaştırdı. Kediler, düşük ayrıntılı (kaba) desenleri algılamada insanlardan daha duyarlı çıktı.' },
    { kind: 'paragraf', metin: 'Sonuçların iki yönü var. Birincisi, kedilerin kaba desenlerde üstünlüğünün büyük bölümü, araştırmacılara göre gözün optiğinin ışığı daha iyi toplamasıyla açıklanabiliyor. İkincisi, daha ince ayrıntılarda üstünlük kedide değil insanda: araştırmaya göre daha yüksek ayrıntı düzeylerinde insanlar daha duyarlıydı ve çok loş ışıkta ince ayrıntıya duyarlılık hem kedide hem insanda zayıf ya da yoktu.' },
    { kind: 'paragraf', metin: 'Kısacası kedi, loş ışıkta genel şekilleri ve hareketi seçmekte iyi olabilir, ama karanlıkta ince ayrıntıyı okuduğu söylenemez. Araştırmacılar kedi ile insanın çubuk hücre görmesinin benzer kısıtlar altında çalıştığı sonucuna varıyor.' },

    { kind: 'baslik', metin: 'Kediler renkleri görüyor mu?' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı\'na göre koni hücreleri renk görmeden de sorumlu, ama kedilerin renkleri görüp görmediği kesin değil. Exp Eye Res dergisinde 2016\'da yayımlanan bir çalışma da kedinin renk görmesinin temel yapısının hâlâ çözülmediğini yazıyor; çalışmaya göre elektrofizyolojik araştırmaların çoğu kedi retinasında iki tür koni olduğunu gösteriyor. Köpeklerdeki durum için [[kopekler-renkleri-gorur-mu|köpekler renkleri görür mü]] yazımıza bakılabilir.' },

    { kind: 'baslik', metin: 'Bu bilgi evde ne işe yarıyor?' },
    { kind: 'paragraf', metin: 'Kedi gece evde dolaşıyor diye karanlıkta her şeyi gördüğü sanılmamalı. Loş ışık kediye, tam karanlıktan daha fazla görme imkânı veriyor. Geceleri aktif bir kediniz varsa uykusuzluğun nedenlerine [[kedim-neden-gece-uyumuyor|kedim neden gece uyumuyor]] yazımızdan bakabilirsiniz.' },
    { kind: 'paragraf', metin: 'Gözlerin görünüşü de bir ipucu verebilir: kedinin gözünde akıntı ya da kızarıklık görülüyorsa durum karanlıkta görmeyle ilgili değildir. Bu konuda [[kedilerde-goz-akintisi|kedilerde göz akıntısı]] ve [[kedilerde-goz-enfeksiyonu|kedilerde göz enfeksiyonu]] yazılarımız var, ama gözle ilgili bir sorun şüphesinde asıl adım veteriner hekime başvurmaktır.' },

    { kind: 'baslik', metin: 'Görme değişikliğinde veteriner hekime ne zaman gidilmeli?' },
    { kind: 'paragraf', metin: 'Kedinin karanlıkta ışığı güçlendirme yeteneği doğal bir özellik; ama kedinin görmesinde ani bir değişiklik farklı bir durum. Merck Veteriner El Kitabı\'nın hekimlere yönelik bölümü, ani görme kaybında ayrıntılı bir nörooftalmik muayenenin gerekli olduğunu, hastanın geçmişinin eksiksiz alınmasının önemli olduğunu ve bazı durumlarda göz hekimine yönlendirme yapılmasının önerildiğini belirtiyor.' },
    { kind: 'uyari', metin: 'Kediniz eşyalara çarpmaya, merdivenlerde tereddüt etmeye, tanıdık yerlerde yolunu kaybetmeye başladıysa ya da gözlerinde bulanıklık, kızarıklık veya akıntı varsa durumu evde değerlendirmeye çalışmak yerine vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Gözle ilgili ilaç ya da damla vermeden önce de veteriner hekime danışmak önerilir.' },
  ],
  kontrolListesi: [
    'Gece loş bir ışık kaynağı var mı?',
    'Kedi eşyalara çarpıyor mu?',
    'Merdivende tereddüt ediyor mu?',
    'Gözlerde bulanıklık var mı?',
    'Gözde akıntı ya da kızarıklık var mı?',
  ],
  sss: [
    { soru: 'Kediler karanlıkta görür mü?', cevap: 'Tam karanlıkta görmez, ama loş ışıkta insandan çok daha iyi görür. Merck Veteriner El Kitabı\'na göre kediler az ışıkta insanlardan 6 kat daha iyi görüyor ve bu, kedilerin karanlıkta görebildiği efsanesine yol açmış. Işık hiç yoksa kedinin gözü de görüntü oluşturamaz.' },
    { soru: 'Kediler insandan kaç kat iyi görür?', cevap: 'Merck Veteriner El Kitabı, kedilerin loş ışıkta insanlardan 6 kat daha iyi görebildiğini yazıyor. Bu oran az ışıktaki durum için geçerli; ince ayrıntıyı seçme konusunda aynı üstünlükten söz edilemez. Hatta daha ince desenlerde insanların daha duyarlı olduğu bir karşılaştırma çalışması var.' },
    { soru: 'Kedinin gözü karanlıkta neden parlar?', cevap: 'Kedinin retinasının arkasında tapetum lucidum denen yansıtıcı bir tabaka var. Dışarıdan gelen ışık bu tabakadan geri yansıdığı için gözler fener ya da far ışığında parlıyor. Merck Veteriner El Kitabı\'na göre kedilerde bu parıltı mavi ya da yeşilimsi görünüyor.' },
    { soru: 'Tapetum lucidum nedir?', cevap: 'Gözün arka kısmında bulunan, ışığı yansıtan bir tabakadır. Işığa duyarlı retina hücrelerine ışığı yakalamak için ikinci bir fırsat verir ve böylece az ışıkta görme duyarlılığını artırır. İnsanlarda bulunmaz, kedi gibi etçil hayvanlarda bulunur.' },
    { soru: 'Kediler renkleri görür mü?', cevap: 'Kesin bilinmiyor. Merck Veteriner El Kitabı kedilerin renkleri görüp görmediğinin belirsiz olduğunu yazıyor. 2016 tarihli bir çalışmaya göre elektrofizyolojik araştırmaların çoğu kedi retinasında iki tür koni hücresi gösteriyor, ama bu konu hâlâ tam çözülmüş değil.' },
    { soru: 'Kedim geceleri eşyalara çarpıyorsa ne yapmalıyım?', cevap: 'Kedinin eşyalara çarpması, merdivende tereddüt etmesi ya da tanıdık yerlerde yolunu bulamaması görmede bir değişikliğe işaret edebilir. Nedeni evde tahmin etmeye çalışmak yerine vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Muayene sırasında kedinin geçmişini eksiksiz anlatmak önemli.' },
  ],
  kaynaklar: [
    {
      kurum: 'Merck & Co., Inc. (Merck Veterinary Manual)',
      baslik: 'Eye Structure and Function in Cats',
      yil: 2025,
      adres: 'https://www.merckvetmanual.com/cat-owners/eye-disorders-of-cats/eye-structure-and-function-in-cats',
    },
    {
      kurum: 'Merck & Co., Inc. (Merck Veterinary Manual)',
      baslik: 'Acute Vision Loss in Small Animals',
      yil: 2024,
      adres: 'https://www.merckvetmanual.com/emergency-medicine-and-critical-care/ophthalmic-emergencies/acute-vision-loss-in-animals',
    },
    {
      kurum: 'University of Illinois, Neuroscience Program',
      yazarlar: 'Kang I, Reem RE, Kaczmarowski AL, Malpeli JG',
      baslik: 'Contrast sensitivity of cats and humans in scotopic and mesopic conditions',
      dergi: 'Journal of Neurophysiology',
      yil: 2009,
      kunye: '102(2):831-840',
      doi: '10.1152/jn.90641.2008',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/19458146/',
    },
    {
      kurum: 'University of Florida, College of Veterinary Medicine',
      yazarlar: 'Ollivier FJ, Samuelson DA, Brooks DE, Lewis PA, Kallberg ME, Komáromy AM',
      baslik: 'Comparative morphology of the tapetum lucidum (among selected species)',
      dergi: 'Veterinary Ophthalmology',
      yil: 2004,
      kunye: '7(1):11-22',
      doi: '10.1111/j.1463-5224.2004.00318.x',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/14738502/',
    },
    {
      kurum: 'Family Eye Medical Group, Long Beach',
      yazarlar: 'Clark DL, Clark RA',
      baslik: 'Neutral point testing of color vision in the domestic cat',
      dergi: 'Experimental Eye Research',
      yil: 2016,
      kunye: '153:23-26',
      doi: '10.1016/j.exer.2016.10.002',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/27720709/',
    },
  ],
};
