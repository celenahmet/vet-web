import type { BlogYazi } from './types';

/**
 * BESLENME kategorisi. Dayanak Cortinovis & Caloni 2016 (Frontiers in
 * Veterinary Science): cikolata, Allium turleri (sogan, sarimsak, pirasa,
 * frenk sogani), makadamya, uzum ve kuru uzum, ksilitolle tatlandirilmis
 * urunler, alkol, pismemis hamur.
 * ⚠️ DOZ VERILMIYOR: kaynak ozetinde miktar esigi yok. "Su kadar gram
 * zararlidir" demek uydurma olurdu.
 */
export const kopeklereZararliYiyecekler: BlogYazi = {
  slug: 'kopeklere-zararli-yiyecekler',
  baslik: 'Köpeklere Zararlı Yiyecekler Nelerdir?',
  ozet: 'Mutfaktaki en sıradan şeyler listede: çikolata, soğan, üzüm, şekersiz sakız. Zehirlenmelerin çoğu kötü niyetten değil, bu ürünlerin riskinin bilinmemesinden oluyor.',
  kategori: 'Beslenme',
  tarih: '2026-08-25',
  bloklar: [
    { kind: 'paragraf', metin: 'Köpek zehirlenmelerinin büyük kısmı egzotik maddelerle değil, **mutfakta duran sıradan yiyeceklerle** oluyor. Milano Üniversitesi’nden yayımlanan bir derleme bunu açıkça söylüyor: zehirlenme vakaları genellikle bu ürünlerin evcil hayvanlar için ciddi bir sağlık tehdidi oluşturduğunun bilinmemesinden kaynaklanıyor.' },
    { kind: 'paragraf', metin: 'Bu yazı o derlemede sayılan başlıkları tek tek ele alıyor. Bilerek miktar vermiyoruz; bunun sebebini aşağıda açıklıyoruz.' },

    { kind: 'baslik', metin: 'Derlemede sayılan yiyecekler' },
    { kind: 'paragraf', metin: 'Son on yılda dünya genelinde bildirilen gıda kaynaklı zehirlenme vakalarında öne çıkan ürünler şunlar:' },
    { kind: 'tablo', basliklar: ['Ürün', 'Nerede karşınıza çıkar'], satirlar: [
      ['Çikolata ve çikolatalı ürünler', 'Tatlı, kek, bayram şekeri, sıcak içecek'],
      ['Soğan, sarımsak, pırasa, frenk soğanı', 'Yemek artığı, çorba, sos, kuru baharat'],
      ['Makadamya cevizi', 'Kuruyemiş karışımı, kurabiye'],
      ['Üzüm, kuru üzüm, sultani üzüm, kuş üzümü', 'Meyve tabağı, kek, kahvaltılık karışım'],
      ['Ksilitolle tatlandırılmış ürünler', 'Şekersiz sakız, diş macunu, bazı fıstık ezmeleri'],
      ['Alkollü içecekler', 'Bardakta kalan, hamur içindeki alkol'],
      ['Pişmemiş hamur', 'Mayalanmayı bekleyen ekmek hamuru'],
    ] },
    { kind: 'paragraf', metin: 'İkinci sütun bilerek var: bu ürünlerin çoğu köpeğe kasten verilmiyor, **yemek artığı ya da yerde kalan bir paket** yoluyla ulaşıyor.' },

    { kind: 'yanilgi', baslik: '"Bir lokma bir şey olmaz" yanılgısı', metin: 'Bu cümlenin sorunu, hangi miktarın sorun olacağını kimsenin önceden bilmemesi. Etki köpeğin kilosuna, ürünün yoğunluğuna ve köpeğin bireysel duyarlılığına göre değişiyor. "Bir lokma" bir köpekte hiçbir şey yapmayabilir, diğerinde acil bir tabloya dönüşebilir; bu yüzden eşik aramak yerine ürün hiç verilmiyor.' },

    { kind: 'baslik', metin: 'Neden bu yazıda miktar yok' },
    { kind: 'paragraf', metin: 'İnternette bu konuda çok sayıda “şu kadar gram şu kadar kiloya zararlı” tablosu dolaşıyor. Bu yazıda böyle bir tablo bilerek yok, çünkü dayandığımız derleme miktar eşiği vermiyor. Kaynağın söylemediği bir sayıyı yazmak, okuyucuya doğrulanabilir görünen ama doğrulanamayan bir bilgi vermek olurdu.' },
    { kind: 'paragraf', metin: 'Pratikte de miktar hesabı yanlış bir güven veriyor: köpeğin tam olarak ne kadar yediği çoğu zaman bilinmiyor. Paketin ne kadarının kaldığına bakmak, ne kadarının yendiğini söylemiyor.' },
    { kind: 'paragraf', metin: 'Konuyu ele alan ikinci bir derleme de aynı listeyi farklı bir açıdan doğruluyor: evcil hayvanlar için zehirli olabilen gıdalar, insan mutfağının olağan parçaları ve zehirlenmeler çoğunlukla bu ürünlerin evde serbestçe bulunmasından kaynaklanıyor. İki bağımsız derlemenin aynı ürün grubunu sayması, listenin tek bir çalışmanın çerçevesine dayanmadığını gösteriyor.' },

    { kind: 'baslik', metin: 'Yediyse ne yapılır' },
    { kind: 'paragraf', metin: 'Belirti beklemek doğru bir strateji değil; bazı ürünlerde belirtiler saatler sonra çıkıyor ve o zamana kadar emilim tamamlanmış oluyor.' },
    { kind: 'liste', maddeler: [
      'Ürünün ambalajını saklayın, içeriği okunabilsin',
      'Ne zaman yediğini ve tahmini miktarı not edin',
      'Köpeğin kilosunu bilin, hekim ilk bunu soruyor',
      'Hekime telefonla ulaşın, yola çıkmadan haber verin',
      'Kendi başınıza kusturmaya çalışmayın',
      'Belirti çıkmasını beklemeyin',
    ] },
    { kind: 'paragraf', metin: 'Beşinci madde önemli: evde kusturma girişimi bazı maddelerde zararı artırıyor ve yanlış yapıldığında akciğere kaçma riski taşıyor. Kusturma kararı ve yöntemi hekime ait.' },

    { kind: 'yanilgi', baslik: '"Doğal olan zararsızdır" yanılgısı', metin: 'Listedeki ürünlerin neredeyse hepsi doğal: üzüm, soğun, sarımsak, ceviz. Doğal olmak, bir maddenin her canlı için güvenli olduğu anlamına gelmiyor. İnsan için besleyici olan bir şey köpekte farklı metabolize olabiliyor.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Zehirlenme şüphesinde en doğru adım vakit kaybetmeden veteriner hekime ulaşmaktır. Evde kusturma denenmez.' },

    { kind: 'baslik', metin: 'Bayram ve tatil dönemleri ayrı bir risk' },
    { kind: 'paragraf', metin: 'Zehirlenme vakalarının belirli dönemlerde arttığı biliniyor ve sebebi tahmin edilebilir: evde daha fazla yiyecek ortada duruyor, misafir sayısı artıyor ve kimin ne verdiği takip edilemiyor.' },
    { kind: 'paragraf', metin: 'Bayramlarda çikolata ve şekerleme ortada bırakılıyor; kalabalıkta çöp kovası daha sık doluyor ve daha çok karıştırılıyor. Misafirler çoğu zaman iyi niyetle bir şeyler veriyor ve bunu size söylemiyor. Bu yüzden kural misafire baştan söyleniyor, sonradan değil.' },
    { kind: 'paragraf', metin: 'Tatilde ev dışında kalınıyorsa risk başka yerden geliyor: yabancı bir ortamda köpeğin ulaşabileceği yerler bilinmiyor. Yeni bir eve girildiğinde ilk yapılacak şey, köpeğin serbest dolaşacağı alanda ne olduğuna bakmak.' },

    { kind: 'baslik', metin: 'Belirtiler ürüne göre değişiyor' },
    { kind: 'paragraf', metin: 'Bu yazıda hangi üründe hangi belirtinin çıkacağına dair bir tablo yok, çünkü belirtiler ürüne, miktara ve köpeğe göre değişiyor ve dayandığımız kaynak bunu ayrıntılandırmıyor. Genel olarak dikkat çeken şey şu: **belirti yokluğu güvence değil.**' },
    { kind: 'paragraf', metin: 'Bazı maddelerde etki hızlı ortaya çıkıyor, bazılarında saatler sonra. Bekleyip görmek stratejisinin sorunu tam burada: belirti çıktığında emilim çoktan tamamlanmış oluyor ve müdahale seçenekleri daralıyor.' },
    { kind: 'paragraf', metin: 'Bu yüzden karar kuralı basit tutuluyor: listedeki bir ürünü yediğinden şüpheleniyorsanız, belirti olsun olmasın hekime haber veriliyor. Gereksiz bir telefon, geç kalınmış bir müdahaleden iyidir.' },

    { kind: 'baslik', metin: 'Önlem, listeyi ezberlemekten kolay' },
    { kind: 'paragraf', metin: 'Bu listeyi akılda tutmak yerine mutfakta birkaç düzen kurmak daha güvenli:' },
    { kind: 'liste', maddeler: [
      'Yemek artığı vermeyi bir kural olarak bırakın',
      'Çöp kovasını kapaklı ve ulaşılamaz tutun',
      'Çanta ve montu köpeğin ulaşabileceği yere bırakmayın; sakız çoğu zaman orada',
      'Misafirlere “bir şey vermeyin” demeyi baştan söyleyin',
      'Kuruyemiş ve meyve tabağını ortada bırakmayın',
    ] },
    { kind: 'paragraf', metin: 'Üçüncü madde en sık atlanan yer. Şekersiz sakız içeren bir çanta, köpek için mutfaktan daha riskli olabiliyor.' },
    { kind: 'paragraf', metin: 'Bir şey yediyse tarih ve saat önem taşıyor. Veterito’da köpeğinizin kaydına bu notu düşebilirsiniz; hekime giderken tahmin yerine kayıt götürmüş olursunuz.' },
    { kind: 'paragraf', metin: 'Kilo takibi de bu konunun parçası: aynı miktar, farklı kilodaki köpekte farklı anlam taşıyor. Yaşa göre değişen ihtiyaçlar için [[kopekler-kac-yil-yasar|köpeklerin yaşam süresi]] yazısına bakabilirsiniz.' },
    { kind: 'paragraf', metin: 'Evde birden fazla kişi yaşıyorsa kuralın herkes tarafından bilinmesi gerekiyor. En sık görülen tablo şu: bir kişi hiç vermiyor, bir kişi ara sıra veriyor ve köpek mutfakta beklemeyi öğreniyor. Beklemeyi öğrenen köpek, kimse bakmadığı anda tezgâha da uzanıyor.' },
    { kind: 'paragraf', metin: 'Çocuklu evlerde ayrı bir başlık var: çocuklar yiyeceği paylaşmayı sevgi göstergesi olarak öğreniyor. Yasak koymak yerine, köpeğe verilebilecek bir kaba önceden ayrılmış uygun atıştırmalık koymak daha iyi işliyor; çocuk paylaşımı sürdürüyor ama güvenli olanı paylaşıyor.' },
  ],
  kontrolListesi: [
    'Yemek artığı vermeyi bırakın',
    'Çöp kovasını kapaklı tutun',
    'Çanta ve montu ortada bırakmayın',
    'Yediyse ambalajı saklayın',
    'Belirti beklemeden telefon edin',
    'Evde kusturmaya çalışmayın',
  ],
  sss: [
    { soru: 'Ne kadarı zararlı?', cevap: 'Dayandığımız kaynak miktar eşiği vermiyor, bu yüzden burada sayı yazmıyoruz. Etki köpeğin kilosuna, ürünün yoğunluğuna ve bireysel duyarlılığa göre değişiyor. Ayrıca köpeğin tam olarak ne kadar yediği çoğu zaman bilinmiyor; eşik aramak yerine ürün hiç verilmiyor.' },
    { soru: 'Beyaz çikolata da zararlı mı?', cevap: 'Derleme çikolata ve çikolatalı ürünleri bir bütün olarak sayıyor, tür ayrımı yapmıyor. Evde türü ayırt etmeye ve buna göre karar vermeye çalışmak, güvenilir olmayan bir hesaba dayanıyor. Doğru yaklaşım hiçbirini vermemek.' },
    { soru: 'Ksilitol nerede bulunur?', cevap: 'Şekersiz sakız ve şekerlemeler, bazı diş macunları ve bazı fıstık ezmeleri sık karşılaşılan yerler. Ürünün adında geçmeyebiliyor, bu yüzden etiketteki içerik listesini okumak gerekiyor. Çanta içindeki bir paket sakız, mutfaktan daha kolay ulaşılabilir olabiliyor.' },
    { soru: 'Köpek yediyse kusturayım mı?', cevap: 'Hayır. Bazı maddelerde kusturma zararı artırıyor ve yanlış uygulandığında içeriğin akciğere kaçma riski var. Kusturma kararı ve yöntemi hekime ait. Siz ambalajı saklayıp ne zaman ve tahminen ne kadar yediğini not ederek yardımcı olabilirsiniz.' },
    { soru: 'Belirti yoksa gitmesem olur mu?', cevap: 'Olmuyor. Bazı ürünlerde belirtiler saatler sonra ortaya çıkıyor ve o zamana kadar emilim tamamlanmış oluyor; müdahale seçenekleri daralıyor. Belirti yokluğu güvence değil, yalnızca henüz görünmediği anlamına geliyor.' },
    { soru: 'Kediler için de aynı liste geçerli mi?', cevap: 'Derleme köpek ve kedileri birlikte ele alıyor, ağırlıklı olarak köpek vakalarını anlatıyor. Kedilerde de bu ürünler verilmiyor. Kediler genellikle daha seçici yediği için vaka sayısı düşük görünüyor, bu risk olmadığı anlamına gelmiyor.' },
    { soru: 'Bayramlarda neden risk artıyor?', cevap: 'Evde daha fazla yiyecek ortada duruyor, misafir sayısı artıyor ve kimin ne verdiği takip edilemiyor. Çöp kovası daha sık doluyor ve daha çok karıştırılıyor. Bu yüzden "bir şey vermeyin" kuralını misafire baştan söylemek, sonradan fark etmekten güvenli.' },
  ],
  kaynaklar: [
    {
      kurum: 'University of Veterinary Medicine and Pharmacy in Košice — Department of Pharmacology and Toxicology',
      yazarlar: 'Kovalkovičová N, Sutiaková I, Pistl J, Sutiak V',
      baslik: 'Some food toxic for pets',
      dergi: 'Interdisciplinary Toxicology',
      yil: 2009,
      kunye: '2(3):169-176',
      doi: '10.2478/v10102-009-0012-4',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/21217849/',
    },
    {
      kurum: 'Università degli Studi di Milano — Department of Health, Animal Science and Food Safety',
      yazarlar: 'Cortinovis C, Caloni F',
      baslik: 'Household Food Items Toxic to Dogs and Cats',
      dergi: 'Frontiers in Veterinary Science',
      yil: 2016,
      kunye: '3:26',
      doi: '10.3389/fvets.2016.00026',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/27047944/',
    },
  ],
};
