import type { BlogYazi } from './types';

export const pegasusEvcilHayvan: BlogYazi = {
  slug: 'pegasus-evcil-hayvan',
  baslik: 'Pegasus Evcil Hayvan Kuralları 2026',
  ozet: 'Pegasus\'ta kabinde 8 kilo ve 32x32x50 cm kafes sınırı, iç hat, dış hat ve KKTC ücretleri, uçak altı taşıma, kabul edilmeyen ırklar ve gereken belgeler.',
  kapakAlt:
    'Havalimanı terminalinde kabin çantasında bekleyen küçük köpek, arkada uçak',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Pegasus\'ta kedi ya da köpek, kafesiyle birlikte en çok 8 kilo ve kafes en çok 32 x 32 x 50 cm ise kabinde (PETC) uçabiliyor; 8 kiloyu aşan kedi ve köpekler yalnız iç hat ve KKTC uçuşlarında uçak altında (AVIH) taşınıyor.** Dış hat uçuşlarda uçak altı taşıma yok. Hizmet ayrıca ücretli, kontenjanlı ve yalnız çağrı merkezi ya da seyahat acentası üzerinden ekleniyor. Hayvanın uçuş tarihinde 3 aydan büyük ve aşılarının tam olması gerekiyor.' },
    { kind: 'paragraf', metin: 'Bu yazı yalnız Pegasus\'un kendi sayfalarındaki kuralları topluyor. Türk Hava Yolları ile karşılaştırma ve genel hazırlık için [[evcil-hayvanla-ucak-yolculugu|evcil hayvanla uçak yolculuğu]] yazısına bakılabilir. Kurallar ve ücretler değişebildiği için bilet almadan önce Pegasus\'un güncel sayfasını kontrol etmek önerilir.' },

    { kind: 'baslik', metin: 'Hangi hayvanlar kabul ediliyor?' },
    { kind: 'paragraf', metin: 'Pegasus iç hat uçuşlarında yalnız kedi, köpek ve kuş; dış hat uçuşlarında (KKTC dahil) yalnız kedi ve köpek kabul ediyor. Kuşlar yalnız iç hatta ve yalnız kabinde taşınıyor. Uçak altında (AVIH) yalnız kedi ve köpek taşınabiliyor.' },
    { kind: 'liste', maddeler: [
      '**Yaş:** Uçuş tarihinde 3 aydan (12 haftadan) küçük hayvanlar kabul edilmiyor.',
      '**Gebelik ve emzirme:** Hamile hayvanlar, anne sütünden kesilmemiş yavrular ve emziren anneler uçuşa kabul edilmiyor.',
      '**Aşı:** Aşısı tamamlanmamış hayvanlar kabul edilmiyor; genel kurallara göre kuduz ve karma aşısının uçuştan önceki bir yıl içinde yapılmış olması gerekiyor.',
      '**Genel durum:** Hayvanın sağlıklı, zararsız, temiz ve kokusuz olması isteniyor. Huzursuz, saldırgan, hasta, çok yaşlı ya da çok küçük görülen hayvan görevli tarafından uçuşa alınmayabiliyor.',
    ] },

    { kind: 'baslik', metin: 'Kabinde seyahat (PETC) kuralları' },
    { kind: 'paragraf', metin: 'PETC, kafesiyle birlikte 8 kiloya kadar olan ve kabinde sahibinin yanında yolculuk eden hayvan demek. Kafesin en çok 32 x 32 x 50 cm olması; su geçirmez, sağlam, kilitli, yeterli havalandırmalı, çizilmeye ve darbeye dayanıklı olması gerekiyor.' },
    { kind: 'liste', maddeler: [
      '**Aynı kafeste iki hayvan:** Toplam ağırlık 8 kiloyu geçmemek şartıyla anne ve yavrusu ya da aynı anneden iki yavru, yani en çok 2 kedi, 2 köpek ya da 2 kuş aynı kafeste gidebiliyor. Bu durumda kafes tek PETC sayılıyor.',
      '**Uçuş başına sınır:** Bir uçuşta en çok 3 PETC olabiliyor.',
      '**Puset:** Evcil hayvan pusetleri bagaj sayılıyor ve uçak altına yükleniyor.',
      '**Refakatsiz çocuk:** Tek başına uçan 12 yaş ve altındaki çocuklar evcil hayvanla seyahat edemiyor. Bebekli ya da çocuklu ailelerin evcil hayvanla uçmasında ise kısıtlama yok.',
    ] },

    { kind: 'baslik', metin: 'Koltuk seçimi nasıl işliyor?' },
    { kind: 'paragraf', metin: 'Kabinde hayvanla uçan yolcuya en ön sıra, acil çıkış, orta koltuk ve koridor koltuğu verilmiyor. Pegasus\'un sistemi 9. sıradan başlayarak arkaya doğru (acil çıkış sıraları hariç) cam kenarı koltuk atıyor. Koltuk satın alınırsa ya da operasyon gerektirirse, cam kenarı olmak şartıyla ilk 8 sıradan (en ön sıra hariç) koltuk verilebiliyor.' },

    { kind: 'baslik', metin: 'Uçak altında taşıma (AVIH)' },
    { kind: 'paragraf', metin: 'Hayvan ve kafes birlikte 8 kiloyu geçtiğinde hayvan havalandırma sistemli kargo bölümünde taşınıyor. Bu hizmet **yalnız iç hat ve KKTC uçuşlarında** var. Pegasus AVIH\'i iki gruba ayırıyor: 8 ile 15 kilo arası küçük (AVIS), 15 kilo üzeri büyük (AVIB). İç hat ve Kıbrıs uçuşlarında bir uçuşta toplam ağırlık 60 kiloyu geçmemek üzere en çok 3 AVIH taşınıyor; toplam 60 kiloyu aşarsa Airbus tipi uçaklarda bu sayı 2\'ye iniyor. Aktarmalı uçuşlarda kabinde seyahat mümkün, uçak altı taşıma ise yalnız iç hatlarda yapılabiliyor.' },
    { kind: 'paragraf', metin: 'Kafesi yolcunun getirmesi gerekiyor. Pegasus\'un genel kurallarına göre kafesin kilidi demirden, güvenli ve sağlam olmalı; üç tarafı hayvanın nefes alabileceği şekilde açık olmalı; hayvan içinde rahatça ayakta durabilmeli, yatabilmeli ve dönebilmeli. İç kenarlar hayvana zarar vermeyecek yapıda, dış kenarlar sivri ve keskin olmamalı. Gecikme ihtimaline karşı kafeste yiyecek ve su bulunması isteniyor ve bunu sağlamak sahibin sorumluluğunda.' },
    { kind: 'uyari', metin: 'ABD\'ye 2010-2018 yılları arasında getirilen köpeklerin kayıtlarını inceleyen bir çalışmada, yolculuk sırasında ölüm ya da hastalık basık yüzlü (brakisefal) ırklarda ve kargo ya da kayıtlı bagaj olarak taşınan köpeklerde daha sık görüldü. Basık yüzlü bir köpek ya da kronik bir sağlık sorunu olan bir hayvan için uçak altı taşımayı düşünmeden önce veteriner hekimle konuşmak önerilir.' },

    { kind: 'baslik', metin: '2026 ücretleri' },
    { kind: 'paragraf', metin: 'Evcil hayvan ücretsiz bagaj hakkına dahil değil, ayrı ücretli bir özel hizmet. Pegasus\'un özel hizmet ücret tablosunda 31 Ekim 2026 itibarıyla görünen tutarlar şöyle:' },
    { kind: 'tablo', basliklar: ['Hizmet', 'İç hat', 'KKTC', 'Dış hat'], satirlar: [
      ['Kabinde (PETC), 8 kiloya kadar', '750 TL', '900 TL', '65 EUR'],
      ['Uçak altı küçük, 8-15 kilo', '850 TL', '1000 TL', 'Yok'],
      ['Uçak altı büyük, 15 kilo üzeri', '950 TL', '1100 TL', 'Yok'],
    ] },
    { kind: 'paragraf', metin: 'BolBol üyeleri evcil hayvan eklemesinden 1 TL karşılığı 1 BolPuan kazanıyor. Tablo Pegasus tarafından güncellenebildiği için ödeme öncesinde çağrı merkezinde tutarı teyit etmek önerilir.' },

    { kind: 'baslik', metin: 'Rezervasyona nasıl eklenir?' },
    { kind: 'paragraf', metin: 'Evcil hayvan internet sitesinden ya da kontuardan eklenemiyor; yalnız Pegasus çağrı merkezi (0888 228 12 12) ya da seyahat acentası üzerinden ekleniyor. Kabul kontenjanla sınırlı ve kontenjan dolunca hayvan kabul edilmiyor. Bu yüzden Pegasus, hayvanın biletin alınmasından hemen sonra eklenmesini istiyor. Kontenjan varsa ekleme check-in kapanana kadar yapılabiliyor. Uçuş değiştirilirse, yeni uçuşta kontenjan olması şartıyla evcil hayvan hizmeti de yeni bilete aktarılabiliyor.' },
    { kind: 'paragraf', metin: 'Havalimanında hayvanla internet check-in yapılsa bile kontuara gitmek gerekiyor: hayvan ve belgeleri görevliye gösterilerek uçuşa kabul işlemi yapılıyor.' },

    { kind: 'baslik', metin: 'Kabul edilmeyen ırklar ve yerler' },
    { kind: 'paragraf', metin: 'Pegasus uçuş güvenliği açısından tehlikeli gördüğü köpekleri almıyor. Genel kurallardaki liste: American Pit Bull, American Staffordshire Terrier, Boxer, American Bulldog, Caucasian (Kafkas çoban köpeği), Chow, Doberman, Dogo Argentino, Fila Brasileiro, Japanese Tosa, Mastiff, Mastino Napoletano, Pit Bull Terrier, Presa Canario ve Rottweiler. Kangal köpekleri ise en çok 6 aylığa kadar kabul ediliyor. Türkiye\'de sahiplenmesi kısıtlı ırklar ayrı bir konu; bunun için [[yasakli-kopek-irklari|yasaklı köpek ırkları]] yazısına bakılabilir.' },
    { kind: 'paragraf', metin: 'Bazı ülkeler evcil hayvan girişine izin vermiyor. Pegasus\'un evcil hayvan sayfasına göre Bahreyn, Birleşik Arap Emirlikleri ve Katar varışlı uçuşlarda; Suudi Arabistan, İrlanda ve İngiltere varışlı ve kalkışlı uçuşlarda evcil hayvanla seyahat edilemiyor. Umman için önceden konsolosluktan ya da Umman gümrük sitesinden onay alınması gerekiyor. Pegasus\'un farklı sayfalarındaki ülke listeleri birebir aynı olmadığı için yolculuk öncesinde çağrı merkezinden teyit almak önerilir.' },
    { kind: 'yanilgi', baslik: '"Rehber köpek de evcil hayvan ücretine tabi"', metin: 'Pegasus\'un genel kurallarına göre görme ve işitme engelli yolculara eşlik eden rehber hayvanlar ücret alınmadan, kabinde ve kafessiz taşınabiliyor; yolcunun yakınında, yerde yolculuk ediyor. Bunun için evcil hayvan belgelerine ek olarak rehber hayvan olduğunu gösteren belge gerekiyor. Bu istisnalar dışında rehber hayvanlar da diğer kurallara tabi.' },

    { kind: 'baslik', metin: 'Gerekli belgeler: iç hat, KKTC ve yurt dışı' },
    { kind: 'paragraf', metin: 'Her uçuşta hayvanın sağlık belgesi, aşılarının tam olduğunu gösteren aşı karnesi ve kimliği yanında olmalı. Belgelerin doğru ve eksiksiz olması yolcunun sorumluluğunda; Pegasus bu konuda taahhütte bulunmuyor.' },
    { kind: 'liste', maddeler: [
      '**İç hat:** Kuduz aşısı gerekiyor, kuduz antikor (titrasyon) testi gerekmiyor. Pegasus iç hat uçuşlarında çip istemiyor. Çipin ne olduğu ve nasıl takıldığı [[mikrocip-nedir|mikroçip nedir]] yazısında anlatılıyor.',
      '**KKTC:** Çip gerekiyor. KKTC\'ye ticari olmayan evcil hayvan götürmek için ithal ruhsatı zorunlu; başvuru formu (PİB.01) sağlık sertifikasıyla birlikte uçuştan önce KKTC Veteriner Dairesi Müdürlüğüne gönderiliyor. KKTC\'den dış hat gelişlerinde titrasyon testi ve kuduz aşısı isteniyor.',
      '**Yurt dışı:** Tarım İl Müdürlüğünden alınan Uluslararası Sağlık Sertifikası ve seyahatten en az 3 ay önce yapılmış kuduz antikor titrasyon testi raporu olmadan hayvan uçağa alınmıyor. Avrupa Birliği ülkelerine gidişte ayrıca [[evcil-hayvan-pasaportu|evcil hayvan pasaportu]] isteniyor.',
    ] },
    { kind: 'paragraf', metin: 'Tarım ve Orman Bakanlığının yurt dışına çıkış talimatına göre hayvanın mikroçiple kimliklendirilmiş, [[petvet-kayit|PETVET]] sistemine kayıtlı ve pasaportunun düzenlenmiş olması gerekiyor. Kuduz aşısı, aşının prospektüsünde farklı bir talimat yoksa en erken 12 haftalık yaşta ve mikroçiple aynı gün ya da sonrasında yapılmış olmalı. Antikor testi için kan, kuduz aşısından en erken 30 gün sonra alınabiliyor. Veteriner sağlık sertifikası il ya da ilçe tarım ve orman müdürlüğünce en erken çıkışa 48 saat kala düzenleniyor. Bu sıralama aylar sürebildiği için yurt dışı planı varsa hazırlığa erken başlamak gerekiyor.' },

    { kind: 'baslik', metin: 'Stresli hayvan ve ilaç konusu' },
    { kind: 'paragraf', metin: 'Pegasus, huzursuz ya da zorlayıcı davranış gösteren hayvanlar için ilaç kullanımının veteriner hekim kontrolünde ve sorumluluğunun yolcuda olduğunu belirtiyor. Hayvana hangi ilacın, ne zaman verileceği ya da hiç verilmemesi gerektiği yalnız hayvanı muayene eden veteriner hekimin kararı. Kendi başına sakinleştirici vermek önerilmez. Hayvanın yolculuktan önce kafesini tanıması da hazırlığın bir parçası olarak önerilir.' },
  ],
  sss: [
    { soru: 'Pegasus\'ta kabinde evcil hayvan kaç kilo olabilir?', cevap: 'Hayvan ve kafesi birlikte en çok 8 kilo olabiliyor. Kafes ölçüsü de en çok 32 x 32 x 50 cm olmalı. Bu sınırı aşan kedi ve köpekler yalnız iç hat ve KKTC uçuşlarında uçak altında taşınabiliyor.' },
    { soru: 'Pegasus evcil hayvan ücreti ne kadar?', cevap: 'Ekim 2026 tablosuna göre kabinde iç hatta 750 TL, KKTC\'de 900 TL, dış hatta 65 EUR. Uçak altında iç hatta 8-15 kilo için 850 TL, 15 kilo üzeri için 950 TL; KKTC\'de 1000 TL ve 1100 TL. Tutarlar değişebildiği için ödeme öncesinde teyit etmek önerilir.' },
    { soru: 'Pegasus\'ta evcil hayvan internetten eklenebilir mi?', cevap: 'Hayır, evcil hayvan yalnız çağrı merkezi ya da seyahat acentası üzerinden ekleniyor; kontuardan da bilet alınamıyor. Kontenjan sınırlı olduğu için Pegasus, eklemenin bilet alındıktan hemen sonra yapılmasını istiyor.' },
    { soru: 'Pegasus dış hatlarda köpeği uçak altında taşıyor mu?', cevap: 'Hayır, dış hat uçuşlarında uçak altı taşıma (AVIH) yapılmıyor. Yurt dışına yalnız kafesiyle 8 kiloyu geçmeyen kedi ve köpekler kabinde götürülebiliyor. KKTC uçuşları bu kuralın dışında; orada uçak altı taşıma var.' },
    { soru: 'Pegasus yavru kedi ya da köpek kabul ediyor mu?', cevap: 'Uçuş tarihinde 3 aydan küçük hayvanlar kabul edilmiyor. Anne sütünden kesilmemiş yavrular, emziren anneler ve hamile hayvanlar da uçuşa alınmıyor. Aşılarının tam olması da gerekiyor.' },
    { soru: 'Pegasus iç hat uçuşunda mikroçip istiyor mu?', cevap: 'Hayır, Pegasus iç hat uçuşlarında çip istemiyor, ancak KKTC uçuşlarında çip gerekiyor. Yurt dışına çıkışta ise Tarım ve Orman Bakanlığı mikroçip, PETVET kaydı ve pasaport istiyor.' },
    { soru: 'Kabinde hayvanla uçarken istediğim koltuğu seçebilir miyim?', cevap: 'Tam olarak değil. En ön sıra, acil çıkış, orta ve koridor koltukları verilmiyor; sistem 9. sıradan itibaren cam kenarı koltuk atıyor. Koltuk satın alınırsa, cam kenarı olmak şartıyla ilk 8 sıradan da (en ön sıra hariç) koltuk verilebiliyor.' },
  ],
  kontrolListesi: [
    'Kafesle 8 kilonun altında mı?',
    'Kafes 32x32x50 cm\'yi aşıyor mu?',
    'Hayvan 3 aydan büyük mü?',
    'Aşı karnesi güncel mi?',
    'Çağrı merkezinden eklendi mi?',
    'Varış ülkesi hayvan kabul ediyor mu?',
  ],
  kaynaklar: [
    {
      kurum: 'Pegasus Hava Yolları',
      baslik: 'Evcil Hayvanlarla Seyahat',
      adres: 'https://www.flypgs.com/faydali-bilgiler/diger-bilgiler/evcil-hayvanla-seyahat',
    },
    {
      kurum: 'Pegasus Hava Yolları',
      baslik: 'Özel Hizmet / Ekipman Taşıma Kural ve Ücretler',
      adres: 'https://www.flypgs.com/faydali-bilgiler/diger-bilgiler/ozel-hizmet-ekipman-tasima-ucretleri',
    },
    {
      kurum: 'Pegasus Hava Yolları',
      baslik: 'Pegasus Genel Kuralları, 12. Evcil Hayvanlar ile Seyahat',
      adres: 'https://www.flypgs.com/faydali-bilgiler/ucusun-icin-bilgiler/genel-kurallar',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Kedi ve Köpeklerin Yurt Dışına Yolcu Beraberi ve Ticari Sevklerine İlişkin Uygulama Talimatı (21.10.2022)',
      adres: 'https://vskn.tarimorman.gov.tr/tekirdag/Belgeler/D%C3%96K%C3%9CMAN/Kedi%20Ve%20K%C3%B6peklerin%20Yurt%20D%C4%B1%C5%9F%C4%B1na%20Yolcu%20Beraberi%20Ve%20Ticari%20Sevklerine%20%C4%B0li%C5%9Fkin%20Uygulama%20Talimat%C4%B1.pdf',
    },
    {
      kurum: 'Centers for Disease Control and Prevention (CDC), Division of Global Migration and Quarantine',
      yazarlar: 'Pieracci EG, Maskery B, Stauffer K, Gertz A, Brown C',
      baslik: 'Risk factors for death and illness in dogs imported into the United States, 2010-2018',
      dergi: 'Transboundary and Emerging Diseases',
      yil: 2022,
      kunye: '69(5):e1749-e1757',
      doi: '10.1111/tbed.14510',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/35291049/',
    },
  ],
};
