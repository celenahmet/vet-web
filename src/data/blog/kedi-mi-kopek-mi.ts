import type { BlogYazi } from './types';

export const kediMiKopekMi: BlogYazi = {
  slug: 'kedi-mi-kopek-mi',
  baslik: 'Kedi mi Köpek mi? Hangisi Size Uygun?',
  ozet: 'Kedi mi köpek mi sorusunun herkes için tek cevabı yok. Yalnız kalma süresi, hareket ihtiyacı, ömür ve alerji gibi ölçütleri kaynaklarla karşılaştırdık.',
  kapakAlt:
    'Halıda yan yana uzanan tekir kedi ve golden köpek',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Herkes için geçerli tek bir doğru cevap yok; kedi evde genellikle daha uzun süre yalnız kalabiliyor, köpek ise her gün düzenli egzersiz ve ilgi istiyor.** Seçimi hayvanın türü kadar sizin günlük düzeniniz belirliyor: gün içinde evde ne kadar vakit geçirdiğiniz, hareket etmeye ne kadar zaman ayırabildiğiniz ve bakım için ne kadar emek verebileceğiniz.' },
    { kind: 'paragraf', metin: 'Aşağıda yalnız kalma süresini, hareket ihtiyacını, kedinin ev içi gereksinimlerini, ömür farkını ve alerji konusunu uluslararası veteriner kaynaklarıyla birlikte ele alıyoruz. Amaç size bir tür önermek değil, kararı somut sorularla vermenizi kolaylaştırmak.' },

    { kind: 'tablo', basliklar: ['Ölçüt', 'Kedi', 'Köpek'], satirlar: [
      ['Yalnız kalma', 'Genellikle köpekten uzun süre yalnız kalabiliyor; yavru, yaşlı ve hasta kedilerde bu geçerli olmayabilir', 'Genellikle kediden daha kısa süre yalnız kalabiliyor'],
      ['Hareket', 'Ev içinde düzenli oyun, tırmanma ve yiyecek arama fırsatları gerekiyor', 'Düzenli egzersiz ve oyun gerekiyor; ihtiyaç ırka, yaşa ve sağlığa göre değişiyor'],
      ['Tuvalet ve dışarı çıkış', 'Kum kabı gerekiyor ve en az günde bir kez temizleniyor', 'Dışarıda tasmayla gezdirilmesi ve dışkısının toplanması gerekiyor'],
      ['Tüy bakımı', 'Düzenli tarama', 'Sık tarama'],
      ['Medyan ömür (İngiltere kayıtları)', '14,0 yıl', '12,0 yıl'],
    ]},

    { kind: 'baslik', metin: 'Gün içinde evde ne kadar vakit geçiriyorsunuz?' },
    { kind: 'paragraf', metin: 'International Cat Care, kedilerin oldukça bağımsız olduğunu ve genellikle köpeklerden daha uzun süre yalnız bırakılabildiğini belirtiyor. Aynı kaynak şu istisnaları sayıyor: yavru kediler, yaşlı kediler, bedensel sağlık sorunu olanlar, davranış sorunu bulunanlar ve bakıcısıyla özellikle güçlü bağı olan kediler uzun süre yalnız kalmaya uygun olmayabilir. Ayrıntıyı [[kedi-kac-gun-yalniz-kalabilir|kedi evde kaç gün yalnız kalabilir]] yazısında anlattık.' },
    { kind: 'yanilgi', baslik: '"Kedi bağımsızdır, ona zaman ayırmak gerekmez"', metin: 'Kediler genellikle köpeklerden uzun süre yalnız kalabiliyor, ama bu ilgiye ihtiyaç duymadıkları anlamına gelmiyor. Dışarı çıkışı olmayan bir kedi için düzenli oyun saatleri, yiyecek arama fırsatları ve tırmanılacak alanlar sağlanması gerekiyor.' },
    { kind: 'paragraf', metin: 'Köpekte durum farklı: köpekler genellikle kedilerden daha kısa süre yalnız kalabiliyor. Gün boyu evden uzakta olan biri için bu önemli bir ölçüt. Köpeğin yalnız kalmakta zorlandığı düşünülüyorsa [[kopeklerde-ayrilik-kaygisi|köpeklerde ayrılık kaygısı]] yazısına bakılabilir; sorunun nedenini değerlendirmek için veteriner hekime başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Köpek her gün hareket ve zaman ister' },
    { kind: 'paragraf', metin: 'ASPCA\'ya göre köpeklerin kalori yakmak, zihinlerini uyarmak ve sağlıklı kalmak için egzersize ihtiyacı var. İhtiyaç ırka ya da ırk karışımına, cinsiyete, yaşa ve sağlık durumuna göre değişiyor; yani her köpek için geçerli tek bir yürüyüş süresi vermek doğru olmaz. Egzersiz ayrıca sıkıntıyı azaltıyor, çünkü sıkılan köpekte yıkıcı davranışlar görülebiliyor.' },
    { kind: 'paragraf', metin: 'Köpeği dışarıda tasmayla gezdirmek, yalnızca çevresi kapalı ve güvenli bir alanda tasmasız bırakmak önerilir. Köpeğin kamusal alanda yaptığı dışkıyı toplamak da sahibine düşüyor. Türkiye\'deki kurallar için [[kopek-gezdirme-kurallari|köpek gezdirme kuralları]], apartman yaşamı için [[apartmanda-kedi-kopek-beslemek|apartmanda kedi ve köpek beslemek]] yazısına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Kedinin ihtiyaçları ev içinde karşılanıyor' },
    { kind: 'paragraf', metin: 'Dışarı çıkmayan bir kedi için ev, tek yaşam alanı. International Cat Care, dışarı erişimi olmayan kedilere düzenli oyun saatleri, yiyecek arama fırsatları (örneğin yiyecek bulmaca oyuncakları) ve keşfedip tırmanabilecekleri alanlar sağlanması gerektiğini belirtiyor.' },
    { kind: 'paragraf', metin: 'ASPCA ise kum kabının sessiz ve ulaşılabilir bir yerde olmasını, katı atıkların günde en az bir kez alınmasını ve çok katlı evlerde her kata bir kum kabı konmasını öneriyor. Kediler kirli ve kokulu bir kum kabını kullanmıyor. Tırmalama da kedinin ihtiyacı: ASPCA, sağlam ve en az üç fit (yaklaşık 90 santimetre) yüksekliğinde bir tırmalama direği öneriyor. Seçenekler için [[kedi-kumu-cesitleri|kedi kumu çeşitleri]] ve [[kedi-tirmalama-tahtasi|kedi tırmalama tahtası]] yazılarına bakabilirsiniz.' },
    { kind: 'paragraf', metin: 'Bakım yükü açısından iki tür de düzenli tarama istiyor. ASPCA köpeklerde tüy dökülmesini azaltmak için sık taramayı, kedilerde ise düzenli taramayı öneriyor. Kedinin yılda en az bir kez veteriner hekim muayenesine ve yıllık aşılara götürülmesi, hastalık ya da yaralanmada ise hemen götürülmesi gerekiyor.' },

    { kind: 'baslik', metin: 'Ömür farkı: İngiltere kayıtları ne söylüyor?' },
    { kind: 'paragraf', metin: 'Royal Veterinary College\'dan O\'Neill ve ekibi İngiltere\'de muayenehane kayıtlarına dayanan iki ayrı çalışma yaptı. Köpek çalışmasında 86 muayenehaneden 102.609 köpeğin verisi incelendi ve ölümü doğrulanmış 5095 köpek üzerinde duruldu. Kedi çalışmasında 90 muayenehaneye gelen 118.016 kedi arasından ölümü doğrulanmış 4009 kedi rastgele seçildi.' },
    { kind: 'tablo', basliklar: ['Ölçüt', 'Köpek çalışması (2013)', 'Kedi çalışması (2015)'], satirlar: [
      ['Muayenehane sayısı', '86', '90'],
      ['Medyan ömür', '12,0 yıl', '14,0 yıl'],
      ['Çeyrekler arası aralık', '8,9 ile 14,2 yıl', '9,0 ile 17,0 yıl'],
    ]},
    { kind: 'paragraf', metin: 'Aralıkların genişliği önemli: bu rakamlar ortalama bir tablo veriyor, tek bir hayvanın ne kadar yaşayacağını öngörmüyor. Veriler İngiltere\'deki muayenehanelere gelen hayvanlardan geldiği için Türkiye\'deki hayvanlara birebir uygulanamaz. Köpeklerde ayrıca fark büyük: araştırmacılar melez köpeklerin ırklı köpeklerden 1,2 yıl daha uzun yaşadığını ve vücut ağırlığı arttıkça ömrün kısaldığını buldu. En uzun yaşayan ırklar arasında minyatür kaniş, bearded collie, border collie ve minyatür dakhund, en kısa yaşayanlar arasında dogue de bordeaux ve Great Dane vardı.' },
    { kind: 'paragraf', metin: 'Bu yüzden "kedi mi daha uzun yaşar, köpek mi" sorusunun cevabı seçeceğiniz hayvana göre değişiyor. Ayrıntılı bilgi için [[kediler-kac-yil-yasar|kediler kaç yıl yaşar]] ve [[kopekler-kac-yil-yasar|köpekler kaç yıl yaşar]] yazılarına bakabilirsiniz. Her iki durumda da on yılı aşabilecek bir bakım sorumluluğundan söz ediyoruz.' },

    { kind: 'baslik', metin: 'Alerjiniz varsa karar vermeden önce' },
    { kind: 'paragraf', metin: 'International Cat Care\'e göre bazı kedilere karşı gösterilen tepkiye tüyün kendisi değil, kedinin tükürüğünde bulunan bir protein yol açıyor. Kediler kendini yaladığı için tükürük tüylerde kuruyor ve alerjeni taşıyan toz, pul ve tüyler ortama yayılıyor. Aynı kaynak, alerjisi olanların kedisi olan tanıdıkların evini ziyaret edip tepkilerini gözlemlemesini; alerji ağırsa farklı bir hayvanı düşünmesi gerekebileceğini söylüyor.' },
    { kind: 'uyari', metin: 'Kendinizde ya da ailenizde alerji veya astım varsa evcil hayvan almadan önce hekiminize danışılması gerekiyor; belirtilerin nedenini yalnızca hekim belirleyebilir. Yeni aldığınız kedi ya da köpekte iştahsızlık, ishal, kusma veya halsizlik iki günden uzun sürüyorsa veteriner hekime başvurulması gerekiyor.' },

    { kind: 'baslik', metin: 'Kararı kolaylaştıran sorular' },
    { kind: 'liste', maddeler: [
      'Evden uzakta geçirdiğiniz süre, hayvanın yalnız kalabileceği süreyi aşıyor mu?',
      'Her gün düzenli yürüyüş ve oyun için vaktiniz var mı?',
      'Kum kabını günde en az bir kez temizleyebilir misiniz?',
      'Evde alerjisi olan biri var mı?',
      'On yılı aşabilecek bir bakım sorumluluğunu üstlenebilir misiniz?',
      'Tatil ve seyahatte bakım için bir planınız var mı?',
    ]},
    { kind: 'paragraf', metin: 'Tatil planı için [[tatile-giderken-kedi-kopek|tatile giderken kedi ve köpek]] yazısı, yaşadığınız yerin uygunluğu için [[apartmanda-kedi-kopek-beslemek|apartmanda kedi ve köpek beslemek]] yazısı yol gösterebilir.' },

    { kind: 'baslik', metin: 'İkisini aynı evde beslemek mümkün mü?' },
    { kind: 'paragraf', metin: 'Evinizde köpek varsa kedi almak mümkün; International Cat Care bunun köpeğin mizacına ve kedilerle geçmiş deneyimine bağlı olduğunu belirtiyor. Kedinin köpeklerle daha önce olumlu bir deneyimi olup olmadığının da sorulması öneriliyor. Tanıştırma yavaş ve aşamalı yapılmalı; ilk günlerde köpeğin tasmayla tutulması kedinin kovalanmasını ya da yaralanmasını önlemeye yardım ediyor. Ayrıntı için [[kedi-ile-kopek-nasil-alistirilir|kedi ile köpek nasıl alıştırılır]] yazısına bakabilirsiniz.' },
    { kind: 'paragraf', metin: 'Yeni bir hayvan edinmeye karar verdiyseniz ASPCA sahiplenmeyi ilk seçenek yapmayı öneriyor. Köpek için [[barinaktan-kopek-sahiplenme|barınaktan köpek sahiplenme]] yazısı süreci anlatıyor.' },
  ],
  kontrolListesi: [
    'Evde geçirdiğiniz saat yeterli mi?',
    'Günlük yürüyüşe vaktiniz var mı?',
    'Kum kabı temizliğine vaktiniz var mı?',
    'Evde alerjisi olan biri var mı?',
    'Tatil için bakım planınız var mı?',
    'Uzun süreli sorumluluğa hazır mısınız?',
  ],
  sss: [
    { soru: 'Kedi mi köpek mi daha kolay bakılır?', cevap: 'Kedi genellikle günlük programa daha esnek uyuyor, çünkü kediler çoğunlukla köpeklerden uzun süre yalnız kalabiliyor ve hareket ihtiyacının büyük kısmı evde karşılanıyor. Yine de kedinin de oyun, kum kabı temizliği ve düzenli veteriner kontrolü gerekiyor; esnek program bakımsızlık anlamına gelmiyor.' },
    { soru: 'Çalışan biri kedi mi köpek mi sahiplenmeli?', cevap: 'Gün boyu evden uzak kalan biri için kedi genellikle daha uygun bir seçim, çünkü kediler çoğunlukla köpeklerden uzun süre yalnız kalabiliyor. İstisnalar var: yavru, yaşlı, hasta ya da bakıcısına çok bağlı kediler uzun yokluğa uygun olmayabilir. Köpek düşünülüyorsa günlük yürüyüş için zaman ayrılması gerekiyor.' },
    { soru: 'Kedi mi köpek mi daha uzun yaşar?', cevap: 'İngiltere\'deki muayenehane kayıtlarına dayanan iki çalışmada kedilerin medyan ömrü 14,0 yıl, köpeklerin 12,0 yıl bulundu. Köpeklerde ömür ırka ve vücut ağırlığına göre çok değişiyor; ağırlık arttıkça ömür kısalıyor. Bu rakamlar ortalamadır ve tek bir hayvanın ömrünü öngörmez.' },
    { soru: 'Köpeğin günde ne kadar yürümesi gerekiyor?', cevap: 'Herkes için geçerli tek bir süre yok; ASPCA\'ya göre egzersiz ihtiyacı ırka, cinsiyete, yaşa ve sağlık durumuna göre değişiyor. Köpeğinizin ihtiyacını yaşına ve sağlık durumuna bakarak veteriner hekiminiz değerlendirebilir. Yeterince hareket edemeyen köpekte sıkıntı yıkıcı davranışlara dönüşebiliyor.' },
    { soru: 'Kedi alerjisi tüyden mi kaynaklanır?', cevap: 'Hayır, International Cat Care\'e göre tepkiye yol açan şey tüyün kendisi değil, kedinin tükürüğündeki bir protein. Kedi kendini yaladıkça tükürük tüyde kuruyor ve alerjeni taşıyan toz, pul ve tüyler yayılıyor. Alerjiniz varsa karar vermeden önce hekiminize danışmanız gerekiyor.' },
    { soru: 'Kedi ve köpek aynı evde yaşayabilir mi?', cevap: 'Yaşayabilir, ama bu köpeğin mizacına ve kedilerle geçmiş deneyimine bağlı. International Cat Care tanıştırmanın yavaş ve aşamalı yapılmasını, ilk günlerde köpeğin tasmayla tutulmasını ve kedinin köpeklerle olumlu bir deneyimi olup olmadığının sorulmasını öneriyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'International Cat Care',
      baslik: 'Thinking of getting a cat?',
      adres: 'https://icatcare.org/articles/thinking-of-getting-a-cat',
    },
    {
      kurum: 'ASPCA',
      baslik: 'General Dog Care',
      adres: 'https://www.aspca.org/pet-care/dog-care/general-dog-care',
    },
    {
      kurum: 'ASPCA',
      baslik: 'General Cat Care',
      adres: 'https://www.aspca.org/pet-care/cat-care/general-cat-care',
    },
    {
      kurum: 'The Royal Veterinary College, Veterinary Epidemiology, Economics and Public Health',
      yazarlar: 'O\'Neill DG, Church DB, McGreevy PD, Thomson PC, Brodbelt DC',
      baslik: 'Longevity and mortality of owned dogs in England',
      dergi: 'The Veterinary Journal',
      yil: 2013,
      kunye: '198(3):638-643',
      doi: '10.1016/j.tvjl.2013.09.020',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/24206631/',
    },
    {
      kurum: 'The Royal Veterinary College, Veterinary Epidemiology, Economics and Public Health',
      yazarlar: 'O\'Neill DG, Church DB, McGreevy PD, Thomson PC, Brodbelt DC',
      baslik: 'Longevity and mortality of cats attending primary care veterinary practices in England',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2015,
      kunye: '17(2):125-133',
      doi: '10.1177/1098612X14536176',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/24925771/',
    },
  ],
};
