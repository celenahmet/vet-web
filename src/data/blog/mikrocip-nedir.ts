import type { BlogYazi } from './types';

/**
 * PET SAHIPLERI kategorisi. Bu kategori tibbi iddia tasimadigi icin
 * `kaynak-denetimi.mjs` hakemli kaynak istemiyor; yazi da sayisal iddia
 * kurmuyor. Turkiye'deki kayit sistemine dair ayrinti verilmiyor cunku
 * dogrulanmis bir kaynak okunmadan mevzuat yazilmaz.
 */
export const mikrocipNedir: BlogYazi = {
  slug: 'mikrocip-nedir',
  baslik: 'Mikroçip Nedir, Ne İşe Yarar?',
  ozet: 'Mikroçip takip cihazı değil, bir kimlik numarası. Kaybolan hayvanı bulmuyor; bulunduğunda kime ait olduğunu söylüyor.',
  kategori: 'Pet Sahipleri',
  tarih: '2026-08-25',
  bloklar: [
    { kind: 'paragraf', metin: 'Mikroçip konusunda en sık karşılaşılan beklenti şu: “Kaybolursa yerini bulurum.” Bu doğru değil ve baştan bilinmesi gerekiyor. **Mikroçip bir takip cihazı değil.** İçinde pil yok, konum göndermiyor, telefondan izlenmiyor.' },
    { kind: 'paragraf', metin: 'Mikroçip, deri altına yerleştirilen pirinç tanesi büyüklüğünde bir kapsül ve içinde tek bir şey var: **benzersiz bir numara.** O numara okutulduğunda, kayıt sisteminde hayvanın kime ait olduğu görülüyor.' },

    { kind: 'baslik', metin: 'Nasıl çalışıyor' },
    { kind: 'paragraf', metin: 'Çip pasif bir cihaz: yanına bir okuyucu getirilene kadar hiçbir şey yapmıyor. Okuyucu yaklaştığında oluşan alan çipi besliyor ve çip numarasını geri gönderiyor. Bu yüzden pil değişimi gerekmiyor ve ömrü boyunca çalışıyor.' },
    { kind: 'paragraf', metin: 'Zincirin üç halkası var ve **üçü de çalışmazsa çip işe yaramıyor**:' },
    { kind: 'tablo', basliklar: ['Halka', 'Ne olmalı', 'Nerede aksıyor'], satirlar: [
      ['Çip', 'Takılmış ve okunabilir olmalı', 'Nadiren yer değiştirebiliyor'],
      ['Kayıt', 'Numara bir veritabanına işlenmiş olmalı', 'Takıldı ama kaydedilmedi'],
      ['İletişim', 'Kayıttaki telefon güncel olmalı', 'Numara değişmiş, kayıt eski'],
    ] },
    { kind: 'paragraf', metin: 'Uygulamada en sık kopan halka üçüncüsü. Çip takılıyor, kayıt yapılıyor, sonra telefon değişiyor ve kimse kaydı güncellemiyor. Hayvan bulunuyor, çip okunuyor, aranan numara kapalı çıkıyor.' },

    { kind: 'yanilgi', baslik: '"Çipi var, kaybolursa bulurum" yanılgısı', metin: 'Çip konum bilgisi vermiyor. Kaybolan hayvanı bulan şey çip değil, onu bulan kişi. Çipin yaptığı, o kişi hayvanı bir kliniğe ya da barınağa götürdüğünde sahibine ulaşılmasını sağlamak. Yani çip arama aracı değil, geri dönüş aracı.' },

    { kind: 'baslik', metin: 'Takılması nasıl bir işlem' },
    { kind: 'paragraf', metin: 'Çip, genellikle boyun bölgesinde deri altına özel bir enjektörle yerleştiriliyor. İşlem aşı yaptırmaya benziyor ve genel anestezi gerektirmiyor. Kısırlaştırma gibi bir işlem planlanıyorsa aynı seansta yapılabiliyor.' },
    { kind: 'paragraf', metin: 'İşlemden sonra iki şey isteyin:' },
    { kind: 'liste', maddeler: [
      'Çip numarasının yazılı olarak verilmesi',
      'Kaydın hangi sisteme yapıldığının söylenmesi',
      'Kayıttaki telefon ve adresin sizinle birlikte kontrol edilmesi',
      'Bir sonraki muayenede çipin okutulup okunabildiğinin denenmesi',
    ] },
    { kind: 'paragraf', metin: 'Son madde atlanıyor ama basit ve değerli: her rutin muayenede çipin okutulması, çipin hâlâ okunabildiğini teyit ediyor.' },

    { kind: 'yanilgi', baslik: '"Tasmada künye var, çipe gerek yok" yanılgısı', metin: 'Künye ve çip birbirinin yerine geçmiyor. Künye hızlı: bulan kişi anında arayabiliyor. Ama tasma çıkabiliyor, künye aşınıp okunmaz hâle gelebiliyor. Çip ise kalıcı ama okuyucu gerektiriyor. İkisi birlikte kullanıldığında biri diğerinin açığını kapatıyor.' },

    { kind: 'baslik', metin: 'Seyahat ve sahiplendirmede ne değişiyor' },
    { kind: 'paragraf', metin: 'Yurt dışı seyahatlerinde kimliklendirme genellikle isteniyor ve çip numarası, sağlık belgeleriyle eşleşmek zorunda. Burada sık yapılan hata, **çip numarasının belgelerdeki numarayla harfi harfine aynı olduğunun kontrol edilmemesi.**' },
    { kind: 'paragraf', metin: 'Sahiplendirmede ise kaydın devri atlanıyor. Hayvan el değiştiriyor ama kayıt eski sahipte kalıyor; çip okunduğunda yanlış kişiye ulaşılıyor. Devir, sahiplendirmenin bir parçası olarak yapılmalı.' },
    { kind: 'paragraf', metin: 'Ülkeye göre kurallar değiştiği için seyahat öncesi güncel şartları veteriner hekiminizden ve ilgili resmî kaynaktan teyit edin; bu yazı mevzuat bilgisi vermiyor.' },

    { kind: 'baslik', metin: 'Kaybolduğunda ne yapılır' },
    { kind: 'paragraf', metin: 'Çipin işe yaradığı an, hayvanın bulunduğu an. O ana kadar yapılabilecekler ise çipten bağımsız ve zamana duyarlı.' },
    { kind: 'liste', maddeler: [
      'Çevredeki veteriner kliniklerine ve barınaklara haber verin',
      'Çip numaranızı ve kaydın hangi sistemde olduğunu hazır tutun',
      'Net ve güncel bir fotoğraf paylaşın',
      'Kaybolduğu bölgeyi merkeze alarak arayın',
      'Bulanın ulaşabileceği bir numara bırakın',
    ] },
    { kind: 'paragraf', metin: 'Birinci madde çipin doğrudan karşılığı: hayvanı bulan kişi çoğu zaman onu en yakın kliniğe götürüyor ve orada çip okutuluyor. Klinikler kayıp bildirimini önceden almışsa eşleştirme çok daha hızlı oluyor.' },
    { kind: 'paragraf', metin: 'Kaydınızdaki telefonun açık ve güncel olması bu zincirin en kırılgan halkası. Çip okunup numara arandığında ulaşılamıyorsa, çipin sağladığı avantaj kayboluyor.' },

    { kind: 'baslik', metin: 'Sık sorulan teknik ayrıntılar' },
    { kind: 'paragraf', metin: 'Çipin göç etmesi, yani takıldığı yerden kayması nadir görülen ama mümkün olan bir durum. Bu yüzden okuma yapılırken yalnız boyun bölgesine değil, gövdenin geneline bakılıyor. Rutin muayenelerde çipin okutulması, bu tür bir kaymanın erken fark edilmesini sağlıyor.' },
    { kind: 'paragraf', metin: 'Okuyucu uyumu da bir başlık. Farklı standartlarda çipler bulunuyor ve her okuyucu her çipi okuyamayabiliyor. Çip taktırırken hangi standartta olduğunu sormak, özellikle yurt dışı seyahati düşünülüyorsa önem taşıyor.' },
    { kind: 'paragraf', metin: 'Çipin görüntüleme işlemlerine etkisi de sorulan bir konu. Çip küçük bir metal bileşen içerdiği için bazı görüntüleme yöntemlerinde küçük bir gölge oluşturabiliyor; bu, işlemin yapılmasına engel olan bir durum değil ama hekimin bilmesi gereken bir ayrıntı.' },

    { kind: 'baslik', metin: 'Numarayı bir yerde tutmak' },
    { kind: 'paragraf', metin: 'Çip numarası, ihtiyaç duyulduğu anda genellikle elde olmuyor: hayvan kaybolduğunda, acil bir muayenede ya da seyahat başvurusunda isteniyor. Bir kâğıda yazılıp unutulmasındansa, hayvanın kaydında durması daha güvenli.' },
    { kind: 'paragraf', metin: 'Veterito’da çip numarasını hayvanınızın kaydına ekleyebilirsiniz; aşı ve muayene geçmişiyle aynı yerde durur. Klinik seçerken nelere bakıldığı için [[veteriner-klinigi-nasil-secilir|veteriner kliniği nasıl seçilir]] yazısına bakabilirsiniz.' },
    { kind: 'paragraf', metin: 'Numarayı yalnız bir yerde tutmak da yeterli olmuyor. Telefonunuz kaybolduğunda ya da erişilemediğinde numaraya ulaşamamak, tam ihtiyaç anında sorun çıkarıyor. Bu yüzden numaranın hem dijital bir kayıtta hem de evde erişilebilir bir yerde durması öneriliyor.' },
    { kind: 'paragraf', metin: 'Aynı şey aşı karnesi ve sağlık geçmişi için de geçerli. Kaybolma, acil muayene ve seyahat başvurusu; üçü de bu bilgilerin hızlıca bulunmasını gerektiren durumlar ve üçü de önceden haber vermiyor.' },
    { kind: 'paragraf', metin: 'Evde birden fazla hayvan varsa numaraların karışması sık görülüyor. Her hayvanın numarasının kendi kaydında durması, acele bir anda yanlış numarayı vermeyi önlüyor; benzer görünen iki kedinin çipi karıştığında eşleştirme yanlış kişiye çıkabiliyor.' },
  ],
  kontrolListesi: [
    'Çip numarasını yazılı alın',
    'Hangi sisteme kayıtlı, öğrenin',
    'Telefon değişince kaydı güncelleyin',
    'Her muayenede okutulmasını isteyin',
    'Künyeyi çipe ek olarak kullanın',
    'Sahiplendirmede kaydı devredin',
  ],
  sss: [
    { soru: 'Mikroçip hayvanın yerini gösterir mi?', cevap: 'Hayır. Çip pasif bir cihaz: içinde pil yok, konum göndermiyor, telefondan izlenmiyor. Yaptığı tek şey, bir okuyucu yaklaştırıldığında taşıdığı numarayı vermek. Kaybolan hayvanı bulan çip değil, onu bulan kişi; çip o kişi hayvanı kliniğe götürdüğünde devreye giriyor.' },
    { soru: 'Çip takmak acı verir mi?', cevap: 'İşlem aşı yaptırmaya benziyor: özel bir enjektörle deri altına yerleştiriliyor ve genel anestezi gerektirmiyor. Kısırlaştırma gibi bir işlem zaten planlanıyorsa aynı seansta yapılabiliyor, böylece hayvan ikinci bir işlem stresi yaşamıyor.' },
    { soru: 'Pili bitiyor mu?', cevap: 'Pili yok, bu yüzden bitecek bir şey de yok. Okuyucu yaklaştığında oluşan alan çipi besliyor ve çip numarasını geri gönderiyor. Bu yapısı sayesinde ömür boyu çalışıyor; değiştirilmesi ya da şarj edilmesi gerekmiyor.' },
    { soru: 'Çip kaydı nasıl güncellenir?', cevap: 'Kaydın yapıldığı sistem üzerinden güncelleniyor. Bu yüzden çip takıldığı gün hangi sisteme kaydedildiğini öğrenmek önemli. Uygulamada en sık kopan halka bu: telefon değişiyor, kayıt eski kalıyor ve çip okunduğunda ulaşılamıyor.' },
    { soru: 'Künye yerine geçer mi?', cevap: 'Geçmiyor, ikisi birbirini tamamlıyor. Künye hızlı çünkü bulan kişi anında arayabiliyor, ama tasma çıkabiliyor ve yazı aşınabiliyor. Çip kalıcı ama okuyucu gerektiriyor. İkisi birlikte kullanıldığında biri diğerinin açığını kapatıyor.' },
    { soru: 'Yurt dışına çıkarken yeterli mi?', cevap: 'Kimliklendirme genellikle isteniyor ve çip numarasının sağlık belgelerindeki numarayla harfi harfine aynı olması gerekiyor. Ancak şartlar ülkeye göre değişiyor ve zamanla güncelleniyor; bu yazı mevzuat bilgisi vermiyor, güncel kuralları hekiminizden ve resmî kaynaktan teyit edin.' },
    { soru: 'Çip yer değiştirir mi?', cevap: 'Nadir ama mümkün. Bu yüzden okuma yapılırken yalnız boyun bölgesine değil gövdenin geneline bakılıyor. Rutin muayenelerde çipin okutulmasını istemek, hem kaymayı hem de okunamaz hâle gelmiş bir çipi erken fark etmenizi sağlıyor.' },
  ],
};
