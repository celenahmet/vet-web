import type { BlogYazi } from './types';

/**
 * SAGLIK kategorisi. Iki dayanak:
 *   · Olson, Kustritz, Johnston 2001 — erken yasta kisirlastirmanin buyumeyi
 *     DURDURMADIGI, islemin genc hayvanlarda guvenli gorundugu, iyilesmenin
 *     daha hizli oldugu.
 *   · Foreman-Worsley ve ark. 2025 (Veterinary Record) — 2410 vucut kondisyon
 *     skoru kaydiyla, 4 ay ve oncesi / 5 ay / 6 ay arasinda FARK OLMADIGI,
 *     7-12 ayda kilo artisinin daha yavas oldugu, kilo takibinin TUM kediler
 *     icin onerildigi.
 * ⚠️ Ideal yas icin tek bir sayi VERILMIYOR: kaynaklar guvenligi ve kilo
 * egilimini olcuyor, "su ay en iyisi" demiyor.
 */
export const kedilerNeZamanKisirlastirilmali: BlogYazi = {
  slug: 'kediler-ne-zaman-kisirlastirilmali',
  baslik: 'Kediler Ne Zaman Kısırlaştırılmalı?',
  ozet: 'Erken kısırlaştırma büyümeyi durdurmuyor. Ama kısırlaştırma sonrası kilo, hangi ayda yapılırsa yapılsın takip gerektiriyor.',
  kategori: 'Sağlık',
  tarih: '2026-08-25',
  bloklar: [
    { kind: 'paragraf', metin: 'Kısırlaştırma zamanı, kedi sahiplerinin en çok çelişkili bilgi duyduğu başlıklardan biri. “Erken yaparsan gelişemez”, “ilk kızgınlığı beklemeli”, “altı ay standarttır” cümlelerinin hepsi aynı anda dolaşıyor. Bu yazı bunları tek tek ele alıyor ve her birinin arkasında ne olduğunu gösteriyor.' },

    { kind: 'baslik', metin: 'Erken kısırlaştırma büyümeyi durdurmuyor' },
    { kind: 'paragraf', metin: 'En yaygın kaygı bu ve cevabı net. Amerika Birleşik Devletleri’nde erken yaşta kısırlaştırmayı inceleyen bir derleme, işlemin **köpeklerde de kedilerde de büyümeyi durdurmadığını** belirtiyor. Aynı derleme, genç yavrularda cerrahi ve anestezi işlemlerinin güvenli göründüğünü, hastalık oranının daha düşük ve iyileşmenin yetişkinlere göre daha hızlı olduğunu ekliyor.' },
    { kind: 'paragraf', metin: 'Derleme, 7 haftalıkken kısırlaştırılan hayvanlarla geleneksel yaş olan 7 aylıkken kısırlaştırılanlar arasında yan etki açısından belirgin bir fark bulunmadığını da söylüyor. Yani “çok erken” kaygısının dayandığı büyüme argümanı, bu veriyle desteklenmiyor.' },

    { kind: 'yanilgi', baslik: '"Bir kere doğursun, sonra kısırlaştırırız" yanılgısı', metin: 'Bu inanışın tıbbi bir dayanağı yok. Doğurmanın kediye sağladığı bir sağlık yararı gösterilmiş değil; buna karşılık gebelik ve doğum kendi riskini taşıyor, üstelik sahiplendirilecek yavru sayısını artırıyor. Karar, kedinin sağlık durumu üzerinden veriliyor.' },

    { kind: 'baslik', metin: 'Asıl mesele kilo, ve o herkesi ilgilendiriyor' },
    { kind: 'paragraf', metin: '2025 yılında Veterinary Record’da yayımlanan bir çalışma, kısırlaştırma yaşının uzun vadede vücut kondisyon skoru ve kiloya etkisini inceledi. Klinik kayıtlardan **2.410 vücut kondisyon skoru ve 2.073 kilo ölçümü** kullanıldı.' },
    { kind: 'paragraf', metin: 'İki bulgu öne çıkıyor. Birincisi: **4 aylık ve öncesinde, 5 aylıkken ya da 6 aylıkken kısırlaştırılan kediler arasında** vücut kondisyon skoru ve kilo açısından fark bulunmadı. Yani bu üç zamanlama, kilo açısından birbirinden ayrışmıyor.' },
    { kind: 'paragraf', metin: 'İkincisi: 7 ile 12 ay arasında kısırlaştırılan kedilerde yaşa bağlı kilo ve kondisyon artışı **daha yavaş** seyretti. Çalışma yine de sonuç bölümünde şunu vurguluyor: kısırlaştırma sonrası kilo yönetimi önerisi **tüm kediler için** geçerli.' },
    { kind: 'paragraf', metin: 'Aynı çalışmada kilo ve kondisyonun 9 yaşına kadar arttığı, sonrasında azaldığı; dişilerin erkeklerden daha düşük kilo ve kondisyona sahip olduğu; uzun tüylü kedilerin kondisyon skorunun daha düşük çıktığı ama kilonun tüy uzunluğuyla anlamlı ilişki göstermediği bildiriliyor. Son nokta pratikte önemli: **uzun tüylü kedide gözle değerlendirme yanıltabiliyor**, bu yüzden kondisyon skoru ile kilonun birlikte izlenmesi öneriliyor.' },

    { kind: 'tablo', basliklar: ['Soru', 'Kaynaklarda ne var'], satirlar: [
      ['Erken kısırlaştırma büyümeyi durdurur mu', 'Hayır, durdurmuyor'],
      ['Genç yaşta işlem güvenli mi', 'Güvenli görünüyor, iyileşme daha hızlı'],
      ['4-5-6 ay arasında kilo farkı var mı', 'Fark bulunmadı'],
      ['7-12 ayda kilo nasıl', 'Artış daha yavaş seyretti'],
      ['Kilo takibi kime gerekli', 'Tüm kedilere'],
    ] },

    { kind: 'yanilgi', baslik: '"Kısırlaştırılan kedi mutlaka şişmanlar" yanılgısı', metin: 'Kısırlaştırılan kedilerin obeziteye daha yatkın olduğu doğru, ama bu kaçınılmaz bir sonuç değil. Çalışmanın sonucu tam olarak buna işaret ediyor: kilo yönetimi önerisi tüm kediler için geçerli. Yatkınlık, takiple yönetilen bir şey.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Kısırlaştırma zamanı kedinin sağlık durumu, yaşam biçimi ve muayene bulgularına göre veteriner hekim tarafından belirlenir.' },

    { kind: 'baslik', metin: 'Karar tek bir sayıya indirgenmiyor' },
    { kind: 'paragraf', metin: 'Yukarıdaki iki çalışma da “şu ay en iyisidir” demiyor; birincisi güvenliği, ikincisi kilo eğilimini ölçüyor. Karar verilirken bakılan başka başlıklar da var:' },
    { kind: 'liste', maddeler: [
      'Kedinin dışarı çıkıp çıkmadığı',
      'Evde başka kısırlaştırılmamış kedi olup olmadığı',
      'Mevcut kilo ve genel sağlık durumu',
      'Aşı programının hangi aşamada olduğu',
      'Barınak ya da çoklu hayvan ortamında yaşayıp yaşamadığı',
    ] },
    { kind: 'paragraf', metin: 'Aşı programıyla zamanlama sık çakışıyor; ayrıntı [[kedi-asi-takvimi|kedi aşı takvimi]] yazısında.' },

    { kind: 'baslik', metin: 'Kısırlaştırmanın kilo dışındaki etkileri' },
    { kind: 'paragraf', metin: 'Kısırlaştırma yalnız üremeyi engellemiyor; davranış ve sağlık tarafında da karşılıkları var. Kızgınlık döneminin getirdiği huzursuzluk, sesli çağrı ve kaçma isteği ortadan kalkıyor. Erkeklerde bölge işaretleme davranışı azalabiliyor.' },
    { kind: 'paragraf', metin: 'Dışarı çıkan kedilerde kaçma isteğinin azalması, dolaylı bir güvenlik kazancı da sağlıyor: kavga, trafik ve bulaşıcı hastalık teması gibi riskler eş arama davranışıyla artıyor. Bu, kısırlaştırma kararının yalnız üreme kontrolüyle sınırlı olmadığını gösteriyor.' },
    { kind: 'paragraf', metin: 'Buna karşılık her davranış kısırlaştırmayla değişmiyor. İşlemden sonra da süren tırmalama, sesli iletişim ya da huzursuzluk varsa sebebi başka yerde aranıyor; kısırlaştırma bir davranış tedavisi değil.' },

    { kind: 'baslik', metin: 'İşlem öncesi hazırlık' },
    { kind: 'paragraf', metin: 'Kısırlaştırma planlanan bir işlem olduğu için öncesinde birkaç başlık konuşuluyor. Bunlar kediden kediye değişiyor ama sık sorulanlar şunlar:' },
    { kind: 'liste', maddeler: [
      'Aç kalma süresi: hekimin verdiği süreye uyuluyor',
      'Aşıların hangi aşamada olduğu',
      'Varsa süregelen ilaç kullanımı',
      'Daha önce anestezi aldıysa nasıl geçtiği',
      'İşlem günü ve dönüş için taşıma kabı hazırlığı',
    ] },
    { kind: 'paragraf', metin: 'Dönüşte kedinin sakin, ılık ve kaygan olmayan bir yerde dinlenmesi isteniyor. Yüksek yerlere çıkmasını engellemek ilk gün için önemli; anestezi etkisi tam geçmeden yapılan atlayışlar yaralanmaya yol açabiliyor.' },

    { kind: 'baslik', metin: 'İşlemden sonra ne izleniyor' },
    { kind: 'paragraf', metin: 'Sonrasında iki şey takip ediliyor: yara yeri ve kilo. Yara yeri birkaç gün, kilo ise yıllarca. Çalışmanın önerisi net biçimde “vücut kondisyon skoru ve kilonun birlikte izlenmesi”; ikisinden yalnız birine bakmak, özellikle uzun tüylü kedilerde yanıltabiliyor.' },
    { kind: 'paragraf', metin: 'Kilo ölçümlerini Veterito’da kedinizin kaydına ekleyebilirsiniz; eğilimi görmek, tek bir ölçüme bakmaktan daha çok şey söylüyor.' },
    { kind: 'paragraf', metin: 'Ölçüm sıklığı konusunda pratik bir yaklaşım, işlemden sonraki ilk yıl daha sık, sonrasında rutin muayenelerde tartmak. Aynı tartıyla ve mümkünse günün benzer saatinde ölçmek, aradaki küçük farkların gerçek olup olmadığını anlamayı kolaylaştırıyor.' },
  ],
  kontrolListesi: [
    'Zamanı hekimle birlikte belirleyin',
    'Aşı programıyla çakışmayı konuşun',
    'Yara yerini birkaç gün izleyin',
    'Kiloyu düzenli ölçüp kaydedin',
    'Uzun tüyde gözle karar vermeyin',
    'Kilo artışında erken davranın',
  ],
  sss: [
    { soru: 'Erken kısırlaştırma gelişimi engeller mi?', cevap: 'Hayır. İncelenen derleme, erken yaşta kısırlaştırmanın köpeklerde de kedilerde de büyümeyi durdurmadığını açıkça belirtiyor. Aynı derleme genç yavrularda cerrahi ve anestezi işlemlerinin güvenli göründüğünü, hastalık oranının daha düşük ve iyileşmenin yetişkinlere göre daha hızlı olduğunu ekliyor.' },
    { soru: 'En doğru yaş kaç ay?', cevap: 'Kaynaklar tek bir sayı vermiyor ve buraya bir sayı yazmak yanıltıcı olur. 2025 tarihli çalışmada 4 ay ve öncesi, 5 ay ve 6 ay arasında kilo açısından fark bulunmamış; 7-12 ayda kilo artışı daha yavaş seyretmiş. Karar kedinin sağlık durumuna göre hekimle veriliyor.' },
    { soru: 'İlk kızgınlığı beklemeli mi?', cevap: 'Bu inanışı destekleyen bir bulgu incelenen kaynaklarda yok. Beklemeyi gerektiren bireysel bir sebep varsa bunu muayene sonrası hekim değerlendiriyor. Bekleme kararı, kedinin dışarı çıkıp çıkmadığı ve evde başka kısırlaştırılmamış kedi olup olmadığıyla birlikte ele alınıyor.' },
    { soru: 'Kısırlaştırma sonrası mama değiştirilmeli mi?', cevap: 'Kısırlaştırılan kediler obeziteye daha yatkın ve çalışmanın sonucu, kilo yönetimi önerisinin tüm kediler için geçerli olduğu yönünde. Mama türü ve porsiyon kararı hekimle veriliyor; kendi başına yapılan porsiyon kısıtlaması başka sorunlar doğurabiliyor.' },
    { soru: 'Erkek ve dişide zamanlama farklı mı?', cevap: 'İncelenen çalışmada dişilerin kilo ve vücut kondisyon skoru erkeklerden düşük çıkmış ve bu fark yaz ile sonbaharda daha belirginmiş. Ancak zamanlama önerisi cinsiyete göre ayrılmamış; karar kedinin bireysel durumuna göre veriliyor.' },
    { soru: 'Kilo takibini nasıl yapmalıyım?', cevap: 'Çalışmanın önerisi, vücut kondisyon skoru ile kilonun birlikte izlenmesi. Özellikle uzun tüylü kedilerde yalnız gözle değerlendirme yanıltıcı olabiliyor: çalışmada uzun tüylü kedilerin kondisyon skoru daha düşük çıkmış ama kilo tüy uzunluğuyla anlamlı ilişki göstermemiş.' },
    { soru: 'Kısırlaştırma davranış sorunlarını çözer mi?', cevap: 'Kızgınlık dönemine bağlı huzursuzluk, sesli çağrı ve kaçma isteği ortadan kalkıyor; erkeklerde işaretleme azalabiliyor. Ancak kısırlaştırma bir davranış tedavisi değil. İşlemden sonra da süren huzursuzluk ya da tırmalama varsa sebebi başka yerde aranıyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Nottingham Trent University ve University of Bristol Veterinary School',
      yazarlar: 'Foreman-Worsley R, Blackwell E, Finka LR, Skillings E, McDonald JL',
      baslik: 'Long-term effect of neutering age on body condition score and bodyweight in domestic cats',
      dergi: 'Veterinary Record',
      yil: 2025,
      kunye: '196(12):e5433',
      doi: '10.1002/vetr.5433',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/40390198/',
    },
    {
      kurum: 'University of Minnesota College of Veterinary Medicine',
      yazarlar: 'Olson PN, Kustritz MV, Johnston SD',
      baslik: 'Early-age neutering of dogs and cats in the United States (a review)',
      dergi: 'Journal of Reproduction and Fertility. Supplement',
      yil: 2001,
      kunye: '57:223-232',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/11787153/',
    },
  ],
};
