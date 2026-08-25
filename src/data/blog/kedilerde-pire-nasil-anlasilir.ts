import type { BlogYazi } from './types';

/**
 * SAGLIK kategorisi. Dayanak Moore ve ark. 2024 (Trends in Parasitology):
 * kedi piresi C. felis dunyada en yaygin ve en genis dagilimli vektorlerden
 * biri; tasidigi etkenler arasinda Bartonella ve Rickettsia turleri var.
 * ⚠️ Bulasma orani, yumurta sayisi gibi rakamlar VERILMIYOR; kaynak ozetinde
 * yok.
 */
export const kedilerdePireNasilAnlasilir: BlogYazi = {
  slug: 'kedilerde-pire-nasil-anlasilir',
  baslik: 'Kedilerde Pire Nasıl Anlaşılır?',
  ozet: 'Pire görmeden de pire olabilir. Kaşıntıdan önce bakılacak yer tüyün dibi, aranacak şey ise pirenin kendisi değil bıraktığı iz.',
  kategori: 'Sağlık',
  tarih: '2026-08-25',
  bloklar: [
    { kind: 'paragraf', metin: 'Kedide pire denince akla kaşınan bir kedi geliyor. Oysa pire çoğu zaman **görülmeden önce iz bırakıyor**, bazı kedilerde ise belirgin kaşıntı hiç olmuyor. Bu yüzden “kaşınmıyor, pire yok” çıkarımı güvenilir değil.' },
    { kind: 'paragraf', metin: 'Bir de meselenin kaşıntının ötesine geçen bir tarafı var: kedi piresi yalnız rahatsızlık veren bir asalak değil, **hastalık taşıyıcısı**.' },

    { kind: 'baslik', metin: 'Pire yalnız kaşıntı sorunu değil' },
    { kind: 'paragraf', metin: '2024 yılında Trends in Parasitology’de yayımlanan bir derleme, kedi piresi *Ctenocephalides felis*’i **dünya genelinde en yaygın ve en geniş coğrafyaya yayılmış vektörlerden biri** olarak tanımlıyor. Derleme, pirenin taşıdığı etkenler arasında *Bartonella* ve *Rickettsia* türlerini sayıyor.' },
    { kind: 'paragraf', metin: 'Bu, pire mücadelesinin neden "rahatsız oluyorsa yaparız" mantığına bırakılmadığını açıklıyor. Pirenin kendisi kadar taşıdığı da önemli.' },
    { kind: 'paragraf', metin: 'Aynı derleme, kedi piresi üzerine yapılan araştırmaların diğer vektörlere göre geride kaldığını da belirtiyor; yani bu alanda bilinmeyen hâlâ çok.' },

    { kind: 'baslik', metin: 'Aranacak şey pire değil, pire kiri' },
    { kind: 'paragraf', metin: 'Yetişkin pireyi tüyler arasında yakalamak zor: hızlı hareket ediyor ve kedi tımarlanırken bir kısmını temizliyor. Bu yüzden pratikte aranan şey **pire kiri** oluyor: pirenin sindirilmiş kan içeren dışkısı.' },
    { kind: 'paragraf', metin: 'Bakılacak yerler ve yöntem:' },
    { kind: 'liste', maddeler: [
      'Kuyruk dibi, sırtın alt kısmı ve boyun altına bakın',
      'Tüyü ters yönde açıp deriye yakın bakın',
      'Sık dişli bir tarakla tarayıp taraktakini beyaz bir kâğıda dökün',
      'Kâğıdı hafif nemlendirin: kırmızı-kahve bir hâle oluşuyorsa bu pire kiri',
      'Kedinin uyuduğu yerdeki kumaşa da aynı şekilde bakın',
    ] },
    { kind: 'paragraf', metin: 'Dördüncü madde ayırt edici olan: sıradan kir nemle kırmızıya dönmüyor. Renk değişimi, içerikte sindirilmiş kan olduğunu gösteriyor.' },

    { kind: 'yanilgi', baslik: '"Ev kedisinde pire olmaz" yanılgısı', metin: 'Pire eve yalnız hayvanla girmiyor. Ayakkabıyla, kıyafetle, misafirin evindeki hayvandan ya da apartman ortak alanından taşınabiliyor. Dışarı hiç çıkmayan kedide risk düşük ama sıfır değil.' },

    { kind: 'baslik', metin: 'Kaşıntı olmayabilir, başka belirtiler olabilir' },
    { kind: 'paragraf', metin: 'Bazı kedilerde pire varlığı belirgin kaşıntı yapmıyor. Bu durumda başka izler aranıyor:' },
    { kind: 'liste', maddeler: [
      'Aşırı tımarlanma, özellikle karın ve arka bacaklarda',
      'Tüylerde seyrelme, tüy dibinde küçük kabuklar',
      'Huzursuzluk, ani sıçramalar',
      'Diş etlerinde solukluk: yoğun bulaşta kan kaybı olabiliyor',
      'Evdeki insanlarda ayak bileklerinde kaşıntılı kabartılar',
    ] },
    { kind: 'paragraf', metin: 'Son madde ev sahiplerini sık şaşırtıyor: pire kediyi tercih ediyor ama uygun konak yoksa insanı da ısırabiliyor. Evde bu tabloyu görmek, kedide bakılması gerektiğini söylüyor.' },

    { kind: 'yanilgi', baslik: '"Pire gördüm, kediyi yıkadım, bitti" yanılgısı', metin: 'Yetişkin pireler bulaşın küçük bir kısmını oluşturuyor; yumurta ve larvalar ortamda, halıda, yatakta ve zemin aralıklarında kalıyor. Yalnız hayvanı tedavi etmek, ortamdan gelen yeni dalgayı engellemiyor. Mücadele hem hayvanı hem ortamı kapsıyor.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Pire ürünü seçimi veteriner hekime aittir. Köpekler için üretilmiş bazı dış parazit ürünleri kedilerde ciddi zehirlenmeye yol açabiliyor; ürün paylaşımı yapılmaz.' },

    { kind: 'baslik', metin: 'Ortam mücadelesi hayvan kadar önemli' },
    { kind: 'paragraf', metin: 'Pire mücadelesinde en sık yapılan hata, işi yalnız hayvan üzerinden yürütmek. Görünen yetişkin pireler bulaşın küçük bir kısmını oluşturuyor; yumurta, larva ve kozalar evin içine dağılıyor.' },
    { kind: 'paragraf', metin: 'Bunlar özellikle şu yerlerde birikiyor: kedinin uyuduğu yatak ve kumaşlar, halı ve kilim dibi, parke aralıkları, koltuk altları ve süpürgelik kenarları. Yani kedinin en çok vakit geçirdiği yerler aynı zamanda bulaşın en yoğun olduğu yerler.' },
    { kind: 'liste', maddeler: [
      'Kedinin yatağını ve örtüleri sık yıkayın',
      'Halı ve kilimleri düzenli süpürün, torbayı dışarı atın',
      'Koltuk altı ve süpürgelik kenarlarını atlamayın',
      'Evde başka hayvan varsa hepsi birlikte ele alınıyor',
      'Ortam ürünü kullanımı hekime danışılarak yapılıyor',
    ] },
    { kind: 'paragraf', metin: 'Üçüncü madde önemli: süpürme yalnız görüneni almıyor, kozaların açılmasını da tetikleyebiliyor ve bu aslında istenen bir şey; açılan koza uygulanan ürüne maruz kalıyor. Bu yüzden mücadele tek seferlik değil, birkaç haftaya yayılan bir süreç.' },

    { kind: 'baslik', metin: 'Program neden yıl boyu sürüyor' },
    { kind: 'paragraf', metin: 'Pire denince akla yaz geliyor ve mücadele çoğu zaman sonbaharda bırakılıyor. Oysa ısıtılan evlerde ortam koşulları kış boyunca da uygun kalabiliyor. Dışarıda azalan pire, evin içinde döngüsünü sürdürebiliyor.' },
    { kind: 'paragraf', metin: 'Bu yüzden program mevsime değil riske göre kuruluyor: kedi dışarı çıkıyor mu, evde başka hayvan var mı, apartman ortak alanları kullanılıyor mu, misafir hayvan geliyor mu. Bu soruların cevabı aralığı belirliyor.' },
    { kind: 'paragraf', metin: 'Bir de ürünlerin etki süreleri birbirinden farklı. "Geçen ay yapmıştım" cümlesi, kullanılan ürünün koruma süresi bilinmeden bir şey ifade etmiyor; bu yüzden tarih ve ürün adı birlikte kaydediliyor.' },

    { kind: 'baslik', metin: 'Pire ile iç parazit birbirine bağlı' },
    { kind: 'paragraf', metin: 'Pire yalnız dış parazit sorunu olarak kalmıyor: tımarlanırken pire yutan kedi şerit kapabiliyor. Yani dış parazit ihmali iç parazite dönüşebiliyor. İkisinin programı birlikte kuruluyor; ayrıntı [[kedilerde-ic-ve-dis-parazit|iç ve dış parazit]] yazısında.' },
    { kind: 'paragraf', metin: 'Uygulama tarihlerini not etmek burada gerçekten işe yarıyor, çünkü ürünlerin etki süreleri farklı ve “geçen ay yapmıştım” cümlesi çoğu zaman yanlış çıkıyor. Veterito’da bu tarihleri kaydedebilirsiniz.' },
    { kind: 'paragraf', metin: 'Evde birden fazla hayvan varsa kayıt daha da önemli hâle geliyor: hangi hayvana ne zaman ne uygulandığı karışabiliyor ve bir hayvanın atlanması bütün evi yeniden bulaştırabiliyor. Pire mücadelesinde evdeki hayvanlar tek tek değil, birlikte ele alınıyor.' },
    { kind: 'paragraf', metin: 'Son bir not: ürün seçimi kedinin kilosuna göre yapılıyor ve kilo zamanla değişiyor. Yavru için alınan bir ürün altı ay sonra aynı kediye uygun olmayabiliyor. Bu yüzden her uygulamada güncel kilo esas alınıyor.' },
  ],
  kontrolListesi: [
    'Kuyruk dibi ve boyun altına bakın',
    'Sık dişli tarakla kâğıda dökün',
    'Nemlendirin, kırmızıysa pire kiri',
    'Yattığı kumaşları da kontrol edin',
    'Ortamı da hesaba katın',
    'Köpek ürününü kediye uygulamayın',
  ],
  sss: [
    { soru: 'Pire görmüyorum, yine de olabilir mi?', cevap: 'Olabilir. Yetişkin pire hızlı hareket ediyor ve kedi tımarlanırken bir kısmını temizliyor, bu yüzden yakalamak zor. Pratikte pire kiri aranıyor: tüy dibinden alınan kahverengi tanecikler beyaz kâğıda dökülüp nemlendirildiğinde kırmızı bir hâle oluşuyorsa bu bulaş göstergesi.' },
    { soru: 'Kaşınmayan kedide pire olur mu?', cevap: 'Olabiliyor. Bazı kedilerde pire varlığı belirgin kaşıntı yapmıyor. Bu durumda başka izler aranıyor: karın ve arka bacaklarda aşırı tımarlanma, tüylerde seyrelme, tüy dibinde küçük kabuklar ve ani sıçramalarla kendini gösteren huzursuzluk.' },
    { soru: 'Pire hastalık taşır mı?', cevap: 'Evet. 2024 tarihli derleme kedi piresini dünya genelinde en yaygın ve en geniş coğrafyaya yayılmış vektörlerden biri olarak tanımlıyor. Taşıdığı etkenler arasında Bartonella ve Rickettsia türleri sayılıyor; yani pire yalnız rahatsızlık veren bir asalak değil.' },
    { soru: 'Ev kedisine pire ürünü gerekli mi?', cevap: 'Dışarı çıkmayan kedide risk düşük ama sıfır değil. Pire ayakkabı tabanıyla, kıyafetle, apartman ortak alanlarından ya da misafirin hayvanından eve girebiliyor. Program mevsime değil riske göre kuruluyor ve aralığı hekim belirliyor.' },
    { soru: 'Sadece kediyi tedavi etmek yeter mi?', cevap: 'Yetmiyor. Görünen yetişkin pireler bulaşın küçük bir kısmı; yumurta, larva ve kozalar yatakta, halı dibinde, parke aralıklarında ve koltuk altlarında kalıyor. Mücadele hem hayvanı hem ortamı kapsıyor ve birkaç haftaya yayılıyor.' },
    { soru: 'Pire ile şerit arasında ilişki var mı?', cevap: 'Var ve doğrudan. Tımarlanırken pire yutan kedi şerit kapabiliyor; yani dış parazit ihmali iç parazite dönüşebiliyor. Bu yüzden iç ve dış parazit programı ayrı ayrı değil birlikte kuruluyor.' },
    { soru: 'Kışın da pire ürünü gerekli mi?', cevap: 'Isıtılan evlerde ortam koşulları kış boyunca da uygun kalabiliyor; dışarıda azalan pire evin içinde döngüsünü sürdürebiliyor. Bu yüzden program mevsime göre değil, kedinin yaşam biçimine ve evdeki duruma göre belirleniyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'North Carolina State University — Intracellular Pathogens Research Laboratory ve The University of Sydney',
      yazarlar: 'Moore CO, André MR, Šlapeta J, Breitschwerdt EB',
      baslik: 'Vector biology of the cat flea Ctenocephalides felis',
      dergi: 'Trends in Parasitology',
      yil: 2024,
      kunye: '40(4):324-337',
      doi: '10.1016/j.pt.2024.02.006',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/38458883/',
    },
  ],
};
