import type { BlogYazi } from './types';

/**
 * SAGLIK kategorisi. Iki kaynak BILEREK zit yonde: Okur ve ark. 2026 saglikli
 * gorunen kedilerde anormal deger sikligini, Diaz ve ark. 2021 ise rutin
 * tahlilin anestezi yonetimini cogu zaman DEGISTIRMEDIGINI gosteriyor. Yazi
 * ikisini de veriyor; tek yonlu okumak okuyucuyu yaniltirdi.
 */
export const evcilHayvanlardaKanTahlili: BlogYazi = {
  slug: 'evcil-hayvanlarda-kan-tahlili',
  baslik: 'Evcil Hayvanlarda Kan Tahlili Neden Yapılır?',
  ozet: 'Kan tahlili her ziyaretin zorunlu parçası değil ama gözle görülmeyeni gösterebilen tek araç. Ne zaman gerçekten fark yarattığına bakıyoruz.',
  kategori: 'Sağlık',
  tarih: '2026-08-31',
  bloklar: [
    { kind: 'paragraf', metin: 'Kan tahlili iki uçta da yanlış anlaşılıyor. Bir uçta "her ziyarette mutlaka yapılmalı", diğer uçta "hayvan iyiyken para israfı" var. İkisi de tek cümlelik cevap ve ikisi de eksik.' },
    { kind: 'paragraf', metin: 'Doğrusu şu: tahlilin değeri **neden istendiğine** bağlı. Aynı test, bir durumda kararı değiştiriyor, başka bir durumda hiçbir şeyi değiştirmiyor.' },

    { kind: 'baslik', metin: 'Sağlıklı görünmek, değerlerin normal olduğu anlamına gelmiyor' },
    { kind: 'paragraf', metin: 'Elektif ameliyat için gelen, muayenede tamamen sağlıklı bulunan kedilerle yapılan bir çalışma bu ayrımı iyi gösteriyor. Klinik olarak sağlıklı sayılan 414 kedide rutin hematoloji ve biyokimya çalışılmış. Sonuç: kedilerin yalnız **%15,9’unda** bütün değerler normal çıkmış; **%84,1’inde en az bir anormal parametre** bulunmuş. En sık görülen bulgu kan üre azotu yüksekliği olmuş, kedilerin **%55,1’inde**.' },
    { kind: 'paragraf', metin: 'Araştırmacıların vurgusu şu: bulguların çoğu hafif ve büyük olasılıkla belirti üretmeyen düzeyde. Yani "%84 hasta" demek değil. Demek istenen, yalnız klinik ölçütlere bakmanın riski olduğundan düşük göstermesi.' },

    { kind: 'yanilgi', baslik: '"Tahlil çıkmışsa mutlaka bir hastalık var" yanılgısı', metin: 'Referans aralığının dışına çıkan her değer hastalık anlamına gelmiyor. Referans aralıkları popülasyonun büyük çoğunluğunu kapsayacak şekilde belirleniyor; sağlıklı bir hayvanın bir değeri de sınırın hemen dışında olabiliyor. Tek bir sayı değil, sayının yönü, diğer değerlerle ilişkisi ve hayvanın kliniği birlikte yorumlanıyor. Bu yüzden sonuç sayfasını tek başına okumak yanıltıyor.' },

    { kind: 'baslik', metin: 'Her tahlil kararı değiştirmiyor' },
    { kind: 'paragraf', metin: 'Madalyonun öteki yüzü de ölçülmüş. Sekiz yaşından büyük kedi ve köpeklerde anestezi öncesi rutin kan testlerini inceleyen bir çalışmada, hedefsiz yapılan bu testlerin anestezi yönetiminde **çok az değişikliğe** yol açtığı, anestezistlerin sonuçları vakaların çoğunda önceden doğru tahmin ettiği bulunmuş.' },
    { kind: 'paragraf', metin: 'İki çalışma çelişmiyor, farklı soruları cevaplıyor. Biri "sağlıklı görünende anormal değer var mı" diyor, cevabı sık. Diğeri "bu anormal değerler yapılacak işi değiştiriyor mu" diyor, cevabı çoğu zaman hayır. Karar bu ikisinin arasında kuruluyor: tahlil, sonucu bir şeyi değiştirecekse anlamlı.' },

    { kind: 'baslik', metin: 'Tahlilin gerçekten fark yarattığı durumlar' },
    { kind: 'tablo', basliklar: ['Durum', 'Ne aranıyor', 'Neyi değiştiriyor'], satirlar: [
      ['Yaşlılık dönemi kontrolü', 'Böbrek, karaciğer, tiroit', 'Erken evrede beslenme ve takip planı'],
      ['Belirgin şikâyet', 'Enfeksiyon, kansızlık, organ işlevi', 'Tanı yönünü belirliyor'],
      ['Uzun süreli ilaç kullanımı', 'Organ değerlerinde değişim', 'Doz ve izlem sıklığı'],
      ['Anestezi öncesi', 'Riski artıran gizli bulgu', 'Protokol ve hazırlık'],
      ['Karşılaştırma amaçlı ilk kayıt', 'Kişiye özel normal aralık', 'Sonraki sonuçların yorumu'],
    ] },
    { kind: 'paragraf', metin: 'Son satır çoğu zaman atlanıyor. Sağlıklı dönemde alınmış bir sonuç, ileride bir şüphe doğduğunda kıyaslanacak zemini veriyor. Tek bir sonuç "yüksek mi" sorusuna cevap veriyor; iki sonuç "artıyor mu" sorusuna cevap veriyor ve ikincisi daha değerli.' },

    { kind: 'baslik', metin: 'Sonuç sayfasını nasıl okumalı' },
    { kind: 'liste', maddeler: [
      'Sonucu tek başına değil, muayene bulgularıyla birlikte değerlendirin.',
      'Sınırın hemen dışındaki bir değeri, sınırın çok üstündeki bir değerle aynı görmeyin.',
      'Önceki sonuçları saklayın; yön, tek ölçümden daha çok şey söylüyor.',
      'Referans aralıklarının laboratuvara göre değişebildiğini bilin.',
      'Anlamadığınız değeri internetten değil, hekiminizden sorun.',
    ] },
    { kind: 'paragraf', metin: 'Kontrollerin genel çerçevesi ve hangi yaşta ne sıklıkla yapıldığı için [[kedi-kopek-check-up-ne-zaman|check-up ne zaman yapılmalı]] yazısına bakabilirsiniz.' },

    { kind: 'uyari', metin: 'Bu yazı genel bilgi veriyor; tahlil isteme, yorumlama ve tedavi kararı veteriner hekime aittir. Sonuçlarınızı hekiminize danışmadan yorumlamayın.' },
  ],
  sss: [
    { soru: 'Hayvanım sağlıklı, yine de tahlil gerekir mi?', cevap: 'Her ziyarette gerekmiyor. Yaşlılık döneminde, uzun süreli ilaç kullanımında, anestezi öncesinde ve karşılaştırma için ilk kayıt alınırken anlamlı oluyor.' },
    { soru: 'Bir değer yüksek çıktı, hasta mı?', cevap: 'Şart değil. Referans aralığı popülasyona göre belirleniyor ve sağlıklı bir hayvanda da sınır dışına çıkabiliyor. Yorum, diğer değerler ve muayene bulgularıyla birlikte yapılıyor.' },
    { soru: 'Anestezi öncesi tahlil zorunlu mu?', cevap: 'Uygulama kliniğe ve hayvanın durumuna göre değişiyor. Yaşlı hayvanlarda riski görünür kılıyor; genç ve sağlıklı elektif vakalarda yönetimi çoğu zaman değiştirmediği ölçülmüş.' },
    { soru: 'Sonuçları saklamalı mıyım?', cevap: 'Evet. Karşılaştırma imkânı olmadan tek sonuç sınırlı bilgi veriyor; aynı hayvanın zaman içindeki eğilimi daha değerli.' },
  ],
  kontrolListesi: [
    'Tahlil istenirken "bu sonuç neyi değiştirecek" diye sorun.',
    'Önceki sonuçları tarih sırasıyla saklayın, ziyarete götürün.',
    'Yaşlılık döneminde temel değerleri düzenli aralıkla tekrarlayın.',
    'Uzun süreli ilaç kullanıyorsanız izlem sıklığını hekiminizle netleştirin.',
    'Sınır dışı bir değeri internette değil, hekiminizle konuşun.',
  ],
  kaynaklar: [
    {
      kurum: 'Journal of Small Animal Practice',
      baslik: 'Diagnostic value of routine haematological and biochemical testing in clinically healthy ASA I cats undergoing elective ovariohysterectomy and orchiectomy',
      yazarlar: 'Okur DT, Çiplak AY, Aydin Ş, Eren E',
      dergi: 'Journal of Small Animal Practice',
      yil: 2026,
      kunye: '67(5):448-454',
      doi: '10.1111/jsap.70080',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/41450266/',
    },
    {
      kurum: 'Veterinary Anaesthesia and Analgesia',
      baslik: "Preanaesthetic blood tests in cats and dogs older than 8 years: anaesthetists' prediction and peri-anaesthetic changes",
      yazarlar: 'Díaz MDM, Kaartinen J, Allison A',
      dergi: 'Veterinary Anaesthesia and Analgesia',
      yil: 2021,
      kunye: '48(6):854-860',
      doi: '10.1016/j.vaa.2021.04.010',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34563459/',
    },
  ],
};
