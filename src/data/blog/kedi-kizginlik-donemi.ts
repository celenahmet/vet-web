import type { BlogYazi } from './types';

export const kediKizginlikDonemi: BlogYazi = {
  slug: 'kedi-kizginlik-donemi',
  baslik: 'Kedi Kızgınlık Dönemi Ne Kadar Sürer? Belirtileri ve Sıklığı',
  ozet: 'Kedilerde kızgınlık ortalama 5-7 gün sürüyor; çiftleşme olmazsa yaklaşık iki haftada bir tekrarlıyor. Belirtiler, mevsimin etkisi ve ev kedileri.',
  kapakAlt:
    'Kedi kızgınlık dönemi konulu yazının kapak görseli; akşam ışığında pencere önüne uzanıp dışarıyı izleyen uzun tüylü bir kedi',
  kategori: 'Kedi',
  tarih: '2026-10-26',
  bloklar: [
    { kind: 'paragraf', metin: 'Dişi kedilerde kızgınlık **ortalama 5-7 gün** sürüyor; 2 ile 19 gün arasındaki süreler de normal kabul ediliyor. Kedi çiftleşmezse yumurtlama çoğunlukla gerçekleşmiyor ve kızgınlık **yaklaşık iki haftada bir** tekrarlıyor. Bu döngü gün ışığının uzun olduğu aylarda sürüyor; ev ışığında yaşayan kedilerde ise yıl boyu görülebiliyor.' },
    { kind: 'paragraf', metin: 'Aşağıda kızgınlığın evrelerini, kedinin kızgınlıkta olduğunun nasıl anlaşıldığını, döngünün neden bu kadar sık tekrarladığını ve kızgınlığın nasıl önlenebileceğini Auburn Üniversitesi Veteriner Fakültesi\'nin 2022 tarihli derlemesi ve International Cat Care\'in bilgileriyle anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Evre', 'Süre'], satirlar: [
      ['Kızgınlık öncesi (proöstrus)', 'Genellikle 1 günden kısa, çoğu zaman fark edilmiyor'],
      ['Kızgınlık (östrus)', 'Ortalama 5-7 gün (2-19 gün)'],
      ['İki kızgınlık arası', 'Ortalama 8-9 gün'],
      ['Tam döngü', 'Yaklaşık 14 gün'],
      ['Kısa günlerde dinlenme (anöstrus)', 'Birkaç ay'],
      ['Cinsel olgunluk', 'Yaklaşık 4 aylıktan itibaren'],
    ]},

    { kind: 'baslik', metin: 'Kedi kızgınlık dönemi ne kadar sürer?' },
    { kind: 'paragraf', metin: 'Johnson\'un derlemesine göre kızgınlığın kendisi (östrus) ortalama 5-7 gün, aralığı 2-19 gün. Öncesindeki kısa evre genellikle bir günden kısa sürüyor ve çoğu zaman fark edilmiyor. Kedi çiftleşmez ve yumurtlamazsa ortalama 8-9 günlük bir aradan sonra yeni bir kızgınlık başlıyor. International Cat Care de döngünün yaklaşık 14 gün sürdüğünü ve çiftleşme olmazsa yaklaşık iki hafta sonra tekrarlandığını belirtiyor.' },
    { kind: 'paragraf', metin: 'Davranışlar kızgınlığın ilk gününde hemen başlamayabiliyor. Derlemede aktarılan bir çalışmada kedilerin yalnız yüzde 8\'i kızgınlığın ilk gününde belirti gösterirken bu oran 4. günde yüzde 80\'e, 6. günde yüzde 100\'e ulaşmış.' },

    { kind: 'baslik', metin: 'Kedinin kızgınlıkta olduğu nasıl anlaşılır?' },
    { kind: 'liste', maddeler: [
      '**Sürtünme:** Boynunu ve yüzünü eşyalara, insanlara sürtme.',
      '**Yerde yuvarlanma:** Sırt üstü dönüp yerde yuvarlanma.',
      '**Seslenme:** Sık, uzun ve yüksek sesle miyavlama.',
      '**Çiftleşme duruşu:** Ön kısmını yere yaklaştırıp kalçasını kaldırma.',
      '**Arka ayaklarla basma:** Kalça havadayken arka ayaklarla yerinde sayar gibi basma.',
    ]},
    { kind: 'yanilgi', baslik: '"Kedim bağırıp yerde kıvranıyor, bir yeri ağrıyor olmalı"', metin: 'Yüksek sesle miyavlama, yerde yuvarlanma ve kalçayı kaldırma kızgınlığın tipik davranışları; ilk kez gören biri için ağrı belirtisi gibi görünebiliyor. Bu davranışlar birkaç gün sürüp kendiliğinden geçiyor ve iki haftada bir tekrarlıyor. Kedi yemek yemiyor, halsiz ya da akıntısı varsa durum farklı; o zaman hekim muayenesi gerekiyor.' },

    { kind: 'baslik', metin: 'Kızgınlık neden bu kadar sık tekrarlıyor?' },
    { kind: 'paragraf', metin: 'Kediler çoğunlukla **çiftleşmeyle yumurtlayan** hayvanlar: yumurtlamayı tetikleyen, çiftleşmenin kendisi. Çiftleşme olmazsa çoğu kedide yumurtlama gerçekleşmiyor ve vücut kısa bir aradan sonra yeni bir kızgınlığa geçiyor. Johnson, kedilerin yaklaşık üçte birinde çiftleşme olmadan da yumurtlama görülebildiğini ve bunun vücut ağırlığı arttıkça daha sık olduğunu aktarıyor. International Cat Care, kedinin 4-6 günlük bir sürede birkaç kez, hatta birden fazla erkekle çiftleşebildiğini belirtiyor.' },
    { kind: 'paragraf', metin: 'Yumurtlama olup gebelik oluşmazsa kedi yaklaşık **40-45 gün** süren bir yalancı gebelik döneminden geçebiliyor; sonraki kızgınlık ise hormon düşüşünden ortalama 17 gün sonra geliyor. Gebelik oluşursa süreç ortalama 63-65 gün sürüyor; bu dönemi [[kedi-kac-gunde-dogurur|kedi kaç günde doğurur]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Mevsim kızgınlığı nasıl etkiler?' },
    { kind: 'paragraf', metin: 'Kediler **uzun günlerde** kızgınlığa giren hayvanlar. Johnson\'a göre ABD\'de döngü tipik olarak mart ile eylül arasında sürüyor, ekim ile şubat arasında duruyor; Türkiye gibi kuzey yarımkürede benzer bir mevsim düzeni bekleniyor. Bazı kediler doğal ışıkta da yıl boyu döngüye girebiliyor.' },
    { kind: 'paragraf', metin: 'Belirleyici olan gün ışığının süresi: derlemeye göre en az iki ay boyunca **günde 14 saat** ışık, kızgınlığı başlatıp sürdürmeye yetiyor; ışığın 8 saate inmesi döngüyü durduruyor. Akşamları uzun süre yapay ışık alan ev kedilerinin kışın da kızgınlığa girebilmesinin nedeni bu.' },
    { kind: 'yanilgi', baslik: '"Ev kedisi kışın kızgınlığa girmez"', metin: 'Kedinin döngüsünü takvim değil gün ışığının süresi belirliyor. Akşamları uzun süre ışık alan bir ev kedisi kış aylarında da kızgınlığa girebiliyor.' },

    { kind: 'baslik', metin: 'Kedi kızgınlığı nasıl önlenir?' },
    { kind: 'paragraf', metin: 'Kediler yaklaşık 4 aylıktan itibaren cinsel olgunluğa ulaşabildiği için International Cat Care kısırlaştırmayı da yaklaşık 4 aylıktan itibaren öneriyor. Kısırlaştırma hem kızgınlık döngülerini hem de istenmeyen hamileliği önlüyor. Zamanlamayı ve avantajlarını [[kediler-ne-zaman-kisirlastirilmali|kediler ne zaman kısırlaştırılmalı]] yazımızda ayrıntılı anlattık. Kızgınlığı baskılamaya yönelik ilaçlar ise yalnız veteriner hekimin değerlendirmesiyle kullanılabilecek seçenekler.' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Kızgınlık yılda bir iki kez olur', 'Çiftleşme olmazsa yaklaşık iki haftada bir tekrarlıyor'],
      ['Ev kedisi kışın kızgınlığa girmez', 'Uzun süre yapay ışık alan kedi kışın da girebiliyor'],
      ['Yavru kedi kızgınlığa girmez', 'Kediler yaklaşık 4 aylıktan itibaren olgunlaşabiliyor'],
      ['Bağırıp kıvranan kedi hastadır', 'Bunlar kızgınlığın tipik davranışları olabiliyor'],
    ]},
    { kind: 'uyari', metin: 'Sağlıklı kedilerde kızgınlık sırasında belirgin bir akıntı beklenmiyor. Akıntı, iştahsızlık, halsizlik, kusma ya da karında şişlik görülen bir kedi, kızgınlık sanılıp beklenmemesi ve veteriner hekime gösterilmesi gereken bir durumdur.' },
  ],
  kontrolListesi: [
    'Kızgınlık tarihleri not ediliyor mu?',
    'Kısırlaştırma hekimle konuşuldu mu?',
    'Pencereler ve kapılar kapalı mı?',
    'Akşam ışık süresi dikkate alınıyor mu?',
    'Akıntı ya da halsizlik var mı?',
  ],
  sss: [
    { soru: 'Kedi kızgınlık dönemi ne kadar sürer?', cevap: 'Kızgınlık ortalama 5-7 gün sürüyor; 2 ile 19 gün arası normal kabul ediliyor. Çiftleşme olmazsa yaklaşık iki haftada bir tekrarlıyor.' },
    { soru: 'Kediler yılda kaç kez kızgınlığa girer?', cevap: 'Uzun günlerin sürdüğü aylarda çiftleşme olmazsa yaklaşık iki haftada bir. Yapay ışık alan ev kedilerinde döngü yıl boyu sürebiliyor.' },
    { soru: 'Kedinin kızgınlıkta olduğu nasıl anlaşılır?', cevap: 'Yüzünü eşyalara sürtme, yerde yuvarlanma, yüksek sesle miyavlama, kalçayı kaldırıp arka ayaklarla basma kızgınlığın tipik belirtileri.' },
    { soru: 'Kedi ilk kez kaç aylıkken kızgınlığa girer?', cevap: 'International Cat Care\'e göre kediler yaklaşık 4 aylıktan itibaren cinsel olgunluğa ulaşabiliyor; bu yüzden kısırlaştırma da bu yaştan itibaren öneriliyor.' },
    { soru: 'Ev kedisi kışın kızgınlığa girer mi?', cevap: 'Girebilir. Kedinin döngüsünü gün ışığının süresi belirliyor; günde 14 saat ışık kızgınlığı başlatmaya yetiyor, akşamları uzun süre ışık alan kediler kışın da kızgınlığa girebiliyor.' },
    { soru: 'Kızgınlığı önlemenin yolu nedir?', cevap: 'Kalıcı yol kısırlaştırma. Hem kızgınlık döngülerini hem istenmeyen hamileliği önlüyor; zamanlamaya veteriner hekim karar veriyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Auburn University College of Veterinary Medicine',
      yazarlar: 'Johnson AK',
      baslik: 'Normal feline reproduction: The queen',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2022,
      kunye: '24(3):204-211',
      doi: '10.1177/1098612X221079706',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/35209768/',
    },
    {
      kurum: 'International Cat Care',
      baslik: 'Cat pregnancy',
      adres: 'https://icatcare.org/articles/cat-pregnancy',
    },
  ],
};
