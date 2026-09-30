import type { BlogYazi } from './types';

/**
 * KEDI. Plan no 3. Asi zamanlamasi WSAVA 2024 asi kilavuzu PDF'inden (wsava.org),
 * yavru muayenesi ve aliskanliklar 2021 AAHA/AAFP Feline Life Stage Guidelines tam
 * metninden (PMC), FeLV/FIV testi 2020 AAFP Retrovirus kilavuzundan (PMC), acil
 * belirtiler Cornell Feline Health Center'in panlokopeni sayfasindan okundu.
 * Kunyeler PubMed E-utilities'ten. 30.09.2026.
 *
 * Okuyucu kalir mi (Ahmet 30.09): ilk paragraf "ne zaman" sorusunu cevapliyor, takvim
 * tablosu ilk yilin tamamini tek bakista veriyor; bolumler ilk ziyaret -> asi ->
 * test -> parazit -> acil -> kisirlastirma -> aliskanlik sirasiyla ilerliyor.
 */
export const yavruKediVeterinereNeZamanGoturulmeli: BlogYazi = {
  slug: 'yavru-kedi-veterinere-ne-zaman-goturulmeli',
  baslik: 'Yavru Kedi Ne Zaman Veterinere Götürülmeli?',
  ozet: 'İlk muayene yavru eve gelir gelmez yapılıyor; aşılar 6-8 haftada başlayıp 16 haftaya kadar sürüyor. İlk yılın bütün ziyaretleri ve beklenmeyecek belirtiler.',
  kapakAlt:
    'Yavru kedinin ilk veteriner ziyareti konulu yazının kapak görseli; ilk yılın muayene ve aşı takvimi',
  kategori: 'Kedi',
  tarih: '2026-09-30',
  bloklar: [
    { kind: 'paragraf', metin: 'Yavru kedinin ilk veteriner ziyareti, **eve geldikten sonra en kısa sürede** yapılıyor; kaç haftalık olduğu bunu değiştirmiyor. Kedi 6-8 haftalıksa bu ziyaret aşı programının da başlangıcı oluyor: Dünya Küçük Hayvan Veteriner Birliği’nin (WSAVA) 2024 kılavuzuna göre temel aşılar 6-8 haftada başlıyor, 16 haftalık olana kadar 2-4 haftada bir tekrarlanıyor ve 26. haftada ya da sonrasında bir doz daha yapılıyor.' },
    { kind: 'paragraf', metin: 'Yani yavru kedi ilk yılında çoğunlukla dört ile altı kez veteriner hekim görüyor. Aşağıda her ziyaretin ne için yapıldığı, evde başka kedi varsa neyin ertelenmediği ve aşı günü beklenmeden hekime ulaşılması gereken belirtiler var.' },

    { kind: 'tablo', basliklar: ['Zaman', 'Ziyaretin konusu'], satirlar: [
      ['Eve geldiği ilk günler', 'İlk muayene, parazit, FeLV ve FIV testi, beslenme ve davranış'],
      ['6-8 hafta', 'İlk temel aşı (panlökopeni, herpes, kalisi)'],
      ['16 haftaya kadar, 2-4 haftada bir', 'Temel aşı tekrarları, parazit uygulamasıyla birlikte'],
      ['8 haftadan itibaren', 'Risk varsa FeLV aşısı: 3-4 hafta arayla iki doz'],
      ['26 hafta ve sonrası (yaklaşık 6 ay)', 'Temel aşı tekrar dozu, kısırlaştırma görüşmesi'],
      ['1 yaş', 'Yıllık kontrol; bundan sonra en az yılda bir'],
    ] },

    { kind: 'baslik', metin: 'İlk muayene aşı yaşını beklemiyor' },
    { kind: 'paragraf', metin: 'İlk ziyaretin amacı aşıdan önce yavrunun kendisini tanımak. AAHA ve Amerikan Kedi Hekimleri Birliği’nin (AAFP) 2021 kılavuzuna göre yavru kedi muayenesi özellikle doğuştan gelen sorunlara odaklanıyor: kalpte üfürüm, fıtık ve damak yarığı aranıyor, dişlenme ayrıntılı kontrol ediliyor.' },
    { kind: 'paragraf', metin: 'Aynı kılavuz hekimin yavrunun geçmişini sormasını öneriyor: nereden geldiği, akraba kedilerin sağlık durumu, üst solunum yolu ya da parazit belirtisi olup olmadığı, ne zaman sütten kesildiği ve nasıl beslendiği. Bu yüzden ilk ziyarete, yavruyu aldığınız yerden öğrenebildiğiniz her bilgiyle gitmek muayeneyi kısaltıyor.' },

    { kind: 'yanilgi', baslik: '"Yavruyu aşı yaşına gelince götürürüm" yanılgısı', metin: 'Aşı yaşı ilk ziyaretin tarihini belirlemiyor. Parazit, doğuştan gelen sorunlar ve bulaşıcı hastalık testi yavru eve gelir gelmez önemli; evde başka kedi varsa daha da önemli. 4 haftalık bir yavru da aşısız olarak muayene edilebiliyor.' },

    { kind: 'baslik', metin: 'Aşı takvimi annenin bıraktığı korumaya göre kuruluyor' },
    { kind: 'paragraf', metin: 'Yavru, anneden aldığı antikorlarla doğuyor ve bu antikorlar hem hastalığa karşı koruyor hem de aşının işe yaramasını engelliyor. WSAVA’ya göre bu koruma çoğu yavruda 8-12. haftalarda aşıya izin verecek düzeye iniyor, ama bazılarında 12. haftayı geçiyor. Hangi yavruda ne zaman indiği bilinmediği için aşı tek doz değil, 16. haftayı geçene kadar tekrarlanan bir dizi olarak yapılıyor.' },
    { kind: 'paragraf', metin: 'Aynı nedenle 26. haftadaki doz eski "bir yıl sonra rapel" alışkanlığının yerini alıyor: WSAVA, 16. haftada hâlâ anne antikoru taşıyan az sayıdaki yavrunun korunmasız kaldığı süreyi kısaltmak için bu dozu 12-16 aylığa bırakmak yerine 6 aylıkken öneriyor. Aşıların içeriği ve sırası [[kedi-asi-takvimi|kedi aşı takvimi]] yazısında ayrıntılı.' },

    { kind: 'baslik', metin: 'FeLV ve FIV testi evde başka kedi varsa ertelenmiyor' },
    { kind: 'paragraf', metin: 'AAFP’nin 2020 retrovirüs kılavuzuna göre kediler, sahiplenildikten sonra en kısa sürede kedi lösemisi virüsü (FeLV) ve kedi bağışıklık yetmezliği virüsü (FIV) için test ediliyor. FeLV’e en açık yaş grubu yavrular: yaşla birlikte direnç artıyor, yavrularda ise kalıcı enfeksiyon riski en yüksek. Evde başka kedi varsa yeni gelen yavru, test sonucu çıkana kadar diğerlerinden ayrı tutuluyor.' },
    { kind: 'paragraf', metin: 'Test tek seferde kesin sonuç vermeyebiliyor. Yakın zamanda bulaş olduysa virüs ya da antikor henüz ölçülebilir düzeye çıkmamış olabiliyor; bu durumda kılavuz en erken 60 gün sonra tekrar test öneriyor. FeLV aşısı yapılacaksa önce test ediliyor, aşı 8 haftadan itibaren 3-4 hafta arayla iki doz olarak uygulanıyor.' },

    { kind: 'yanilgi', baslik: '"FIV testi pozitif çıkan yavru kesin taşıyıcıdır" yanılgısı', metin: 'Yavru kedide FIV testi, virüsün kendisini değil antikoru arıyor ve anneden geçen antikorlar testi pozitif gösterebiliyor. AAFP’ye göre bu yavruların çoğu, anne antikorları kaybolduğunda negatife dönüyor; 6 aylıktan sonra hâlâ pozitif çıkan yavrunun gerçekten enfekte olma ihtimali yüksek.' },

    { kind: 'baslik', metin: 'Parazit programı ilk ziyarette başlıyor' },
    { kind: 'paragraf', metin: 'Yuvarlak solucan anneden yavruya sütle geçebildiği için yavru kedi, dışarıyla hiç karşılaşmadan da parazitli olabiliyor. AAHA ve AAFP kılavuzu hiç dışarı çıkmayan kedilerin de parazit açısından gerçek bir risk taşıdığını vurguluyor ve dışkı incelemesinin kedinin yaşam biçimine göre düzenli yapılmasını öneriyor.' },
    { kind: 'paragraf', metin: 'Parazit uygulaması aşı ziyaretleriyle aynı günlere denk getirilebiliyor. Yavruda ve yetişkinde sıklığın nasıl belirlendiği [[kedilerde-ic-ve-dis-parazit|kedilerde iç ve dış parazit]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Bu belirtilerde aşı günü beklenmiyor' },
    { kind: 'paragraf', metin: 'Aşı dizisi tamamlanmamış yavru, en ağır yavru hastalıklarından biri olan panlökopeniye (kedi parvovirüsü) karşı henüz tam korunmuş sayılmıyor. Cornell Üniversitesi Veteriner Fakültesi’nin kedi sağlığı merkezine göre hastalanan kediler çoğunlukla bir yaşından küçük ve şu belirtiler görülüyor:' },
    { kind: 'liste', maddeler: [
      'İshal ve kusma',
      'Ateş, halsizlik ve iştahsızlık',
      'Susuzluk: çökük gözler, kuru diş etleri',
      'Karında ağrı',
      'Ani ölüm, en çok 5 aylıktan küçük yavrularda',
    ] },
    { kind: 'paragraf', metin: 'Bu belirtilerden biri görülen yavru, bir sonraki aşı gününü beklemeden, vakit kaybetmeden veteriner hekime ulaşılması gereken bir tablodadır. Yavrular kilo ve sıvı kaybını yetişkinler kadar tolere edemiyor; yetişkinde bir gün beklenebilecek iştahsızlık yavruda beklenmiyor. Yetişkin kedide iştahsızlığın ne zaman acil olduğu [[kedim-yemek-yemiyor|kedim yemek yemiyor]] yazısında.' },

    { kind: 'yanilgi', baslik: '"Ev kedisi dışarı çıkmıyorsa aşıya gerek yok" yanılgısı', metin: 'Cornell’e göre panlökopeni virüsü çevrede o kadar yaygın ki kedilerin neredeyse tamamı hayatının bir döneminde onunla karşılaşıyor. Virüs uygun dezenfeksiyon yapılmazsa ev içinde aylarca, bir yıla kadar canlı kalabiliyor ve ayakkabıyla, eşyayla taşınabiliyor. Dışarı çıkmayan kedi de temel aşılara ihtiyaç duyuyor.' },

    { kind: 'baslik', metin: 'Kısırlaştırma ve kimlik ilk yılın gündeminde' },
    { kind: 'paragraf', metin: 'AAHA ve AAFP kılavuzu kısırlaştırma, mikroçip ve kimlik gibi konuların ilk görüşmelerde bir kez ele alınmasını öneriyor. Kısırlaştırma zamanı 26. hafta dozu civarında netleşiyor; ayrıntılar [[kediler-ne-zaman-kisirlastirilmali|kediler ne zaman kısırlaştırılmalı]] yazısında, mikroçipin ne işe yaradığı ise [[mikrocip-nedir|mikroçip nedir]] yazısında.' },

    { kind: 'baslik', metin: 'Veteriner ziyaretini kolaylaştıran alışkanlıklar bu dönemde kazanılıyor' },
    { kind: 'paragraf', metin: 'Kediyi ömür boyu veteriner hekime götürmenin kolay ya da zor olması büyük ölçüde yavruluk döneminde belirleniyor. AAHA ve AAFP kılavuzu bu dönemde şunların alıştırılmasını öneriyor:' },
    { kind: 'liste', maddeler: [
      'Taşıma çantası evde açık duruyor, yavru içine kendi isteğiyle girip çıkıyor',
      'Kısa araba yolculukları ziyaret günü dışında da yapılıyor',
      'Tüy tarama, tırnak kesme ve ağız çevresine dokunma günlük oyuna katılıyor',
      'Yavru farklı insanlar ve evdeki diğer hayvanlarla sakin ortamda tanıştırılıyor',
      'Oyunda el ve ayak oyuncak olarak kullanılmıyor; bu alışkanlık ileride tırmalama ve ısırmaya dönüşebiliyor',
    ] },
    { kind: 'paragraf', metin: 'Kılavuza göre kedilerde birbiriyle oyun 12. hafta civarında zirve yapıyor ve yavru bu dönemde sert tutulursa ömür boyu sürebilecek korkular geliştirebiliyor. Muayene masasında sakin kalabilen bir kedi, ileride hem daha kolay muayene ediliyor hem de hastalık belirtileri daha erken fark ediliyor.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Aşı, test ve parazit programı yavruyu gören veteriner hekim tarafından yaşına, geçmişine ve evdeki diğer hayvanlara göre belirlenir.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['İlk ziyaret aşı yaşında yapılır', 'İlk ziyaret yavru eve gelir gelmez yapılıyor'],
      ['Tek doz aşı yeterli', 'Dizi 16. haftayı geçene kadar sürüyor, 26. haftada bir doz daha'],
      ['Ev kedisine aşı gerekmez', 'Panlökopeni virüsü eve ayakkabıyla girebiliyor'],
      ['FIV pozitif yavru kesin taşıyıcı', 'Anne antikoru testi yanıltabiliyor, 6 aydan sonra tekrar bakılıyor'],
      ['Yavru bir gün yemese de olur', 'Yavruda iştahsızlık beklenmiyor'],
    ] },
  ],
  kontrolListesi: [
    'İlk muayene tarihi belli mi?',
    'FeLV ve FIV testi yapıldı mı?',
    'Aşı kartı elinizde mi?',
    'Parazit uygulaması kayıtlı mı?',
    'Taşıma çantasına alışıyor mu?',
    '26. hafta dozu takvimde mi?',
  ],
  sss: [
    { soru: 'Yavru kedi ilk kez ne zaman veterinere götürülür?', cevap: 'Yavru kedi eve geldikten sonra en kısa sürede, kaç haftalık olduğundan bağımsız olarak ilk muayeneye götürülüyor. Bu ziyarette doğuştan gelen sorunlara bakılıyor, parazit programı başlıyor ve FeLV ile FIV testi yapılıyor. Yavru 6-8 haftalıksa ilk temel aşı da aynı ziyarette yapılabiliyor.' },
    { soru: 'Yavru kedi aşıları kaç haftalıkken başlar?', cevap: 'WSAVA’nın 2024 kılavuzuna göre temel aşılar 6-8 haftalıkken başlıyor ve 16 haftalık olana kadar 2-4 haftada bir tekrarlanıyor. 26. haftada ya da sonrasında bir doz daha yapılıyor. Anneden geçen antikorlar aşının etkisini engellediği için tek doz yeterli olmuyor.' },
    { soru: 'Yavru kedi ilk yılında kaç kez veterinere gider?', cevap: 'Çoğunlukla dört ile altı kez. İlk muayene, 16. haftaya kadar 2-4 haftada bir yapılan aşı ziyaretleri, 26. haftadaki tekrar dozu ve bir yaş kontrolü bu sayıyı oluşturuyor. Parazit uygulaması ve kısırlaştırma görüşmesi genellikle bu ziyaretlerle aynı günlere denk getiriliyor.' },
    { soru: 'Sokaktan alınan yavru kedi ne zaman veterinere götürülmeli?', cevap: 'Eve alındıktan sonra en kısa sürede ve evde başka kedi varsa onlarla karışmadan önce. Sokaktan gelen yavruda parazit ve bulaşıcı hastalık ihtimali yüksek; AAFP yeni gelen kedinin FeLV ve FIV için test edilmesini ve sonuç çıkana kadar diğer kedilerden ayrı tutulmasını öneriyor.' },
    { soru: 'Yavru kedide FeLV ve FIV testi ne zaman yapılır?', cevap: 'Sahiplenildikten sonra en kısa sürede yapılıyor. Yakın zamanda bulaş olduysa test henüz pozitife dönmemiş olabileceği için en erken 60 gün sonra tekrar önerilebiliyor. Yavrularda FIV testi anneden geçen antikorlar nedeniyle yanıltıcı olabiliyor; 6 aylıktan sonra hâlâ pozitif çıkan yavrunun enfekte olma ihtimali yüksek.' },
    { soru: 'Aşısı tamamlanmayan yavru kedi dışarı çıkabilir mi?', cevap: 'Aşı dizisi tamamlanana kadar yavru panlökopeni gibi ağır hastalıklara karşı tam korunmuş sayılmıyor. Bu dönemde aşı durumu bilinmeyen kedilerle temasın ve dış ortamın sınırlanması öneriliyor. Virüs ayakkabı ve eşyayla da taşınabildiği için eve girişte temizliğe dikkat ediliyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'World Small Animal Veterinary Association (WSAVA), Vaccination Guidelines Group',
      yazarlar: 'Squires RA, Crawford C, Marcondes M, Whitley N',
      baslik: '2024 guidelines for the vaccination of dogs and cats - compiled by the Vaccination Guidelines Group (VGG) of the World Small Animal Veterinary Association (WSAVA)',
      dergi: 'Journal of Small Animal Practice',
      yil: 2024,
      kunye: '65(5):277-316',
      doi: '10.1111/jsap.13718',
      adres: 'https://wsava.org/wp-content/uploads/2024/04/WSAVA-Vaccination-guidelines-2024.pdf',
    },
    {
      kurum: 'American Animal Hospital Association (AAHA), American Association of Feline Practitioners (AAFP)',
      yazarlar: 'Quimby J, Gowland S, Carney HC, DePorter T, Plummer P, Westropp J',
      baslik: '2021 AAHA/AAFP Feline Life Stage Guidelines',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2021,
      kunye: '23(3):211-233',
      doi: '10.1177/1098612X21993657',
      adres: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10812130/',
    },
    {
      kurum: 'American Association of Feline Practitioners (AAFP)',
      yazarlar: 'Little S, Levy J, Hartmann K, Hofmann-Lehmann R, Hosie M, Olah G, Denis KS',
      baslik: '2020 AAFP Feline Retrovirus Testing and Management Guidelines',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2020,
      kunye: '22(1):5-30',
      doi: '10.1177/1098612X19895940',
      adres: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11135720/',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Feline Panleukopenia Virus',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-panleukopenia-virus',
    },
  ],
};
