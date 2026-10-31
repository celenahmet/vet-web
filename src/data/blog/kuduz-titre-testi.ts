import type { BlogYazi } from './types';

export const kuduzTitreTesti: BlogYazi = {
  slug: 'kuduz-titre-testi',
  baslik: 'Kuduz Antikor (Titre) Testi Nedir, Nerede Yapılır?',
  ozet: 'Kuduz titre testi, aşının kanda yeterli antikor oluşturup oluşturmadığını ölçer. Türkiye\'de Etlik\'te yapılır; 30 gün kuralı, 0,5 IU/ml sınırı ve bekleme süreleri.',
  kapakAlt:
    'Laboratuvar tezgâhında taşıma kafesindeki kedi, arkada kan tüpleri ve mikroskop',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kuduz antikor (titre) testi, kuduz aşısı yapılmış kedi ya da köpeğin kan serumunda kuduz virüsünü etkisiz bırakan antikor düzeyini ölçen bir laboratuvar testidir. Türkiye\'de bu test Ankara\'daki Etlik Veteriner Kontrol Merkez Araştırma Enstitüsü\'nde yapılıyor; kanı ise kuduz aşısından en az 30 gün sonra veteriner hekim alıyor. Sonucun 0,5 IU/ml ya da üzerinde çıkması koruyucu kabul ediliyor.**' },
    { kind: 'paragraf', metin: 'Test, hayvanı yurt dışına götürmek isteyenlerin karşısına çıkıyor: bazı ülkeler kuduz aşısının yapıldığını görmekle yetinmiyor, aşının işe yaradığının da belgelenmesini istiyor. Aşağıda testin neyi ölçtüğünü, Türkiye\'de kan alımından rapora kadar sürecin nasıl işlediğini ve hangi sürelerin hesaplanması gerektiğini resmî kaynaklara dayanarak anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Soru', 'Kısa cevap'], satirlar: [
      ['Test nerede yapılıyor?', 'Ankara Etlik Veteriner Kontrol Merkez Araştırma Enstitüsü'],
      ['Kanı kim alıyor?', 'Veteriner hekim; enstitüde kan alınmıyor'],
      ['Kan ne zaman alınıyor?', 'Kuduz aşısından en erken 30 gün sonra'],
      ['Yeterli sonuç nedir?', '0,5 IU/ml ya da üzeri'],
      ['Sonuç ne zaman çıkıyor?', 'Numune enstitüye ulaştıktan yaklaşık 4-6 hafta içinde'],
      ['Rapor ne kadar geçerli?', 'Aşılar zamanında tekrarlandıkça ömür boyu'],
    ]},

    { kind: 'baslik', metin: 'Kuduz titre testi neyi ölçer?' },
    { kind: 'paragraf', metin: 'Testin resmî adı kuduz antikor titre tayin testi. Etlik\'teki enstitü bu testi FAVN yöntemiyle (Fluorescent Antibody Virus Neutralisation, floresan antikor virüs nötralizasyon testi) yapıyor. Yöntemin mantığı şu: laboratuvarda hayvanın serumu belirli miktarda kuduz virüsüyle karşılaştırılıyor ve serumun virüsü hangi seyreltmede etkisiz bıraktığı ölçülüyor. Bu değer uluslararası bir standart serumla kıyaslanarak IU/ml (mililitrede uluslararası birim) olarak raporlanıyor.' },
    { kind: 'paragraf', metin: 'Dünya Hayvan Sağlığı Örgütü (WOAH) tanı el kitabına göre, uluslararası hayvan hareketi öncesinde aşı yanıtını ölçmek için yalnız virüs nötralizasyon yöntemleri kabul ediliyor: FAVN ve RFFIT. İki yöntem eşdeğer sonuç veriyor. ELISA gibi daha hızlı testler aşı kampanyalarını izlemede işe yarasa da hayvanların uluslararası hareketinde geçerli sayılmıyor.' },
    { kind: 'yanilgi', baslik: '"Titre testi hayvanın kuduz olup olmadığını gösterir"', metin: 'Göstermez. Test, aşıya karşı oluşan antikor düzeyini ölçüyor; WOAH el kitabı da serolojik testlerin hastalığın birincil tanısında kullanılmaması gerektiğini açıkça yazıyor. Hayvanınızda bir sağlık sorunundan şüpheleniyorsanız bunu değerlendirecek kişi veteriner hekimdir.' },

    { kind: 'baslik', metin: 'Test hangi durumlarda isteniyor?' },
    { kind: 'paragraf', metin: 'Tarım ve Orman Bakanlığı\'nın kedi ve köpeklerin yurt dışına çıkışına ilişkin uygulama talimatına göre geçerli bir FAVN test raporu, **alıcı ülke tarafından talep edilmesi durumunda** aranıyor. Yani test her yolculukta değil, gidilecek ülkenin kuralı gerektiriyorsa yapılıyor. Enstitü de her ülkenin farklı uygulaması olduğunu, sorun yaşamamak için varılacak ülkeden ya da il veya ilçe tarım ve orman müdürlüğünden bilgi alınmasını öneriyor.' },
    { kind: 'liste', maddeler: [
      '**Avrupa Birliği:** AB\'ye girecek kedi, köpek ve gelinciklerde test, AB\'nin onayladığı bir laboratuvarda yapılmak zorunda. Etlik\'teki enstitü bu listede yer alıyor.',
      '**Avustralya:** Etlik\'teki enstitü, Avustralya\'nın sonuçlarını kabul ettiği laboratuvarlar arasında değil. Enstitüye göre önce Etlik\'ten test sonucu alınıyor, ardından Avustralya\'nın kabul ettiği laboratuvarların bulunduğu bir ülkede test tekrarlanıyor.',
      '**Diğer ülkeler:** Talimata göre AB dışındaki ülkeler için WOAH tarafından onaylı laboratuvarların sonuçları kabul ediliyor; ayrıntı ülkeden ülkeye değişiyor.',
    ]},

    { kind: 'baslik', metin: 'Türkiye\'de kuduz titre testi nerede yapılır?' },
    { kind: 'paragraf', metin: 'Bakanlık talimatına göre kan serumu, kuduz antikor titrasyon testi için **Etlik Veteriner Kontrol Merkez Araştırma Enstitüsü Müdürlüğü**\'ne gönderiliyor. Enstitü, sadece testi yapmakla yetkili olduğunu belirtiyor: kurumda kan alımı yapılmıyor, yalnız uygun şartlarda ve zamanında gönderilmiş serum örnekleri kabul ediliyor. Yani hayvanı Ankara\'ya götürmek gerekmiyor; kanı bulunduğunuz yerdeki veteriner hekim alıyor ve örnek enstitüye elden ya da kargoyla ulaştırılıyor.' },
    { kind: 'paragraf', metin: 'Talimat, hayvanlardan alınan kan serumu örneklerinin analiz için yurt dışına gönderilmesini yasaklıyor; örnekler ancak Bakanlık izniyle yurt dışına gönderilebiliyor. Daha önce başka bir laboratuvardan alınmış rapor varsa, raporu veren laboratuvarın yetkili olup olmadığı kontrol ediliyor.' },

    { kind: 'baslik', metin: 'Kan alımından rapora: süreç adım adım' },
    { kind: 'paragraf', metin: 'Talimat ve enstitünün başvuru sayfasına göre süreç şu sırayla ilerliyor:' },
    { kind: 'liste', maddeler: [
      '**Mikroçip:** Mikroçip en geç kuduz aşısının yapıldığı gün takılmış olmalı. Enstitüye göre mikroçip takılmadan önce yapılan kuduz aşıları sistemde görülmüyor.',
      '**Kuduz aşısı:** Aşının prospektüsünde farklı bir talimat yoksa hayvan en erken 12 haftalıkken aşılanmış olmalı; uygulama tarihi pasaportta kayıtlı, hekimin kaşe ve imzası bulunmalı.',
      '**Müdürlüğe haber:** Kanı alacak serbest veteriner hekim, kan alımından önce il veya ilçe tarım ve orman müdürlüğündeki görevli resmî veteriner hekime e-posta ya da dilekçeyle bilgi veriyor.',
      '**Kan alımı:** Kuduz aşısından en erken 30 gün sonra veteriner hekim en az 1 ml\'lik kan serumu örneği alıyor.',
      '**Belgeler:** Örneğin yanında VELBİS (Veteriner Laboratuvar Bilgi Sistemi) üzerinden hazırlanıp hekimce kaşelenip imzalanmış dilekçe, mikroçip ve aşı bilgilerini gösteren karne ya da pasaport sayfalarının fotokopisi ve ücret dekontu gönderiliyor.',
      '**Gönderim:** Serum soğuk zincirde, kan alımından sonra en geç 5 gün içinde enstitüye ulaşmalı.',
    ]},
    { kind: 'uyari', metin: 'Kan alımından sonraki 5 gün içinde enstitüye ulaşmayan numuneler işleme alınmadan imha ediliyor. Dekontu olmayan ya da şartları eksik numuneler de kabul edilmiyor. Enstitü, numunelerin hafta içi mesai saatlerinde ulaşacak şekilde gönderilmesini istiyor; bu yüzden kan alım gününü kargo süresine göre planlamak gerekiyor.' },
    { kind: 'paragraf', metin: 'Testin yıllık ücreti, enstitünün muayene ve analiz ücretleri listesinde 423 numaralı FAVN testi kalemi olarak yayımlanıyor. Kan alma ve gönderme işlemi için kliniğin aldığı ücret ise enstitünün yetki alanında değil; bu konuda veteriner hekimler odasına ya da il veya ilçe müdürlüğüne başvurulabiliyor. Klinik ücretlerinin genel çerçevesini [[veteriner-ucretleri|veteriner ücretleri]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Sonuç ne zaman çıkar, rapor nasıl okunur?' },
    { kind: 'paragraf', metin: 'Enstitünün duyurusuna göre sonuçlar, numune enstitüye ulaştıktan sonra **yaklaşık 4-6 hafta içinde** çıkıyor. Test sırası numunelerin enstitüye geliş tarihine göre belirleniyor. Raporlar il veya ilçe tarım ve orman müdürlüklerine, kliniğin Kayıtlı Elektronik Posta (KEP) adresi varsa bu adrese elektronik imzalı olarak gönderiliyor; ıslak imzalı rapor verilmiyor.' },
    { kind: 'paragraf', metin: 'Raporu okumak basit: enstitüye göre 0,5 IU/ml ya da daha yüksek antikor titresi taşıyan kedi ve köpek serumları koruyucu kabul ediliyor. 4-6 hafta sonunda rapor ulaşmadıysa, hayvanın adı, çip numarası, sahibinin adı ve numuneyi gönderen kliniğin adıyla enstitünün kuduz titre e-posta adresine yazılabiliyor; telefonla bilgi verilmiyor.' },
    { kind: 'paragraf', metin: 'Raporda düzeltme gerekirse (örneğin çip arızası nedeniyle yeni çip takıldıysa) başvuru enstitüye değil, il veya ilçe tarım ve orman müdürlüğüne yapılıyor. Enstitü bu konuda şahsi başvuru kabul etmiyor.' },

    { kind: 'baslik', metin: 'Bekleme süreleri nasıl hesaplanır?' },
    { kind: 'paragraf', metin: 'Testin kendisi kadar, testten sonraki bekleme süresi de önemli. Enstitüye göre bu tür bekleme süreleri **numunenin alındığı tarihten** başlıyor ve ülkeden ülkeye değişiyor. Avrupa Komisyonu\'nun kurallarına göre AB için kan örneği, hayvanla birlikte giden hayvan sağlığı sertifikasının düzenlenme tarihinden en az 90 gün önce alınmış olmalı. Enstitünün verdiği örnekle takvim şöyle işliyor:' },
    { kind: 'tablo', basliklar: ['Adım', 'Örnek tarih', 'Dayanak'], satirlar: [
      ['Kuduz aşısı', '10 Haziran 2021', 'Mikroçip takılı hayvana'],
      ['Kan serumu alımı', '10 Temmuz 2021', 'Aşıdan en az 30 gün sonra'],
      ['Sonuç raporu', '15 Temmuz 2021', 'Numune 5 gün içinde enstitüde'],
      ['Ülkeye giriş', '10 Ekim 2021', 'Kan alımından 90 gün sonra'],
    ]},
    { kind: 'paragraf', metin: 'Bu tarihler enstitünün kendi sayfasındaki örnektir; enstitü de alıcı ülkenin istediği sağlık sertifikasına göre değişebileceğini belirtiyor. Ayrıca rapor 4-6 haftada da çıkabileceği için takvime pay bırakmak gerekiyor. Pasaport, sağlık sertifikası ve AB\'ye giriş adımlarını [[evcil-hayvan-pasaportu|evcil hayvan pasaportu]] yazımızda; uçuş kurallarını [[evcil-hayvanla-ucak-yolculugu|evcil hayvanla uçak yolculuğu]] yazımızda ayrıntılı anlattık.' },
    { kind: 'yanilgi', baslik: '"Titre raporu varsa hayvan yurt dışına çıkabilir"', metin: 'Talimata göre kuduz serolojik test raporu yurt dışı çıkışında tek başına yeterli değil. Geçerli raporla birlikte, çıkıştan 48 saat önce il veya ilçe tarım ve orman müdürlüğünden veteriner sağlık sertifikası alınması zorunlu. Resmî veteriner hekim, sertifikayı düzenlemeden önce raporu VELBİS üzerinden doğruluyor.' },

    { kind: 'baslik', metin: 'Test raporu ne kadar süre geçerli?' },
    { kind: 'paragraf', metin: 'Talimata göre aşı prospektüsüne uygun şekilde düzenli aşılamaya devam edildiği sürece, daha önce alınmış FAVN test raporu **hayvanın yaşamı boyunca** geçerli. Avrupa Komisyonu da aynı ilkeyi uyguluyor: tatmin edici sonuçtan sonra aşılar geçerlilik süresi içinde tekrarlandıysa testin yenilenmesi gerekmiyor.' },
    { kind: 'paragraf', metin: 'Bir aşı gecikirse durum değişiyor. Talimata göre sonraki aşı, öncekinin geçerlilik süresi içinde yapılmazsa "ilk aşılama" sayılıyor ve hayvan bu aşıdan en az 30 gün sonra yeniden teste giriyor. Aşı takvimini [[kedilere-kuduz-asisi|kedilere kuduz aşısı]] ve [[kopek-asi-takvimi|köpek aşı takvimi]] yazılarımızda anlattık; tarihleri kaçırmamak test raporunu korumanın en kolay yolu.' },

    { kind: 'baslik', metin: 'Sonuç yetersiz çıkarsa ne olur?' },
    { kind: 'paragraf', metin: 'Aşılanmış her hayvan 0,5 IU/ml eşiğini aşamayabiliyor. İsviçre Kuduz Merkezi\'nde (Bern Üniversitesi) yapılan ve evcil hayvan seyahati için test edilen 10.999 köpek ile 2.470 kediden alınan 13.469 kan örneğini inceleyen çalışmada, aşı ile kan alımı arasındaki sürenin köpeklerde başarısızlığın başlıca kaynağı olduğu doğrulandı: tek dozluk ilk aşıdan 4 ay sonra köpeklerin yüzde 23\'ünde sonuç yetersiz çıktı.' },
    { kind: 'paragraf', metin: 'Aynı çalışmada ilk aşıdan en erken 12 ay sonra yapılan rapel (tekrar) aşının ardından başarısızlık köpeklerde genellikle yüzde 5\'in altında kaldı, kedilerde hiç görülmedi. Aşı markaları ve köpek ırkları arasında da anlamlı farklar bulundu. Bu bulgular, sonucun yalnız aşının yapılmasına değil, zamanlamaya ve hayvana da bağlı olduğunu gösteriyor.' },
    { kind: 'uyari', metin: 'Sonuç yetersiz çıktığında yeniden aşılama gerekip gerekmediğine, hangi aşının uygulanacağına ve testin ne zaman tekrarlanacağına hayvanı muayene eden veteriner hekim karar veriyor. Yolculuk tarihi yaklaştıysa durumu hekime ve il veya ilçe müdürlüğüne erkenden bildirmek gerekiyor.' },
  ],
  sss: [
    { soru: 'Kuduz titre testi nerede yapılıyor?', cevap: 'Türkiye\'de test Ankara\'daki Etlik Veteriner Kontrol Merkez Araştırma Enstitüsü\'nde yapılıyor. Enstitüde kan alınmıyor; kanı veteriner hekim alıyor ve serum soğuk zincirde, kan alımından sonra en geç 5 gün içinde enstitüye elden ya da kargoyla ulaştırılıyor.' },
    { soru: 'Kuduz aşısından ne kadar sonra kan alınır?', cevap: 'Kuduz aşısından en erken 30 gün sonra. Bakanlık talimatı ve Etlik\'teki enstitü bu süreyi açıkça belirtiyor. Kanı alacak veteriner hekim, kan alımından önce il veya ilçe tarım ve orman müdürlüğündeki resmî veteriner hekime haber vermek zorunda.' },
    { soru: 'Titre testi sonucu kaç gün sonra çıkar?', cevap: 'Enstitünün duyurusuna göre sonuçlar, numune enstitüye ulaştıktan sonra yaklaşık 4-6 hafta içinde çıkıyor. Rapor il veya ilçe tarım ve orman müdürlüğüne, kliniğin KEP adresi varsa bu adrese elektronik imzalı olarak gönderiliyor.' },
    { soru: 'Kuduz titre sonucu kaç olmalı?', cevap: '0,5 IU/ml ya da üzeri olmalı. Etlik\'teki enstitü bu değerdeki kedi ve köpek serumlarını koruyucu kabul ediyor; Avrupa Komisyonu da AB\'ye giriş için kanda en az 0,5 IU/ml nötralizan antikor istiyor.' },
    { soru: 'Kuduz titre testi her yolculukta tekrarlanır mı?', cevap: 'Hayır, aşılar zamanında yapıldığı sürece tekrarlanmıyor. Talimata göre düzenli aşılamayla rapor ömür boyu geçerli. Ancak bir aşı, öncekinin geçerlilik süresi içinde yapılmazsa ilk aşılama sayılıyor ve test yeniden yapılıyor. Her çıkışta ise yeni veteriner sağlık sertifikası gerekiyor.' },
    { soru: 'AB\'ye gitmek için testten sonra ne kadar beklemek gerekir?', cevap: 'Kan örneğinin alındığı tarihten itibaren en az 90 gün. Avrupa Komisyonu, örneğin hayvan sağlığı sertifikasının düzenlenme tarihinden en az 90 gün önce alınmasını istiyor. Enstitüye göre bekleme süresi rapor tarihinden değil, numunenin alındığı tarihten başlıyor.' },
    { soru: 'Test hayvanın kuduz olup olmadığını gösterir mi?', cevap: 'Hayır. Test aşıya karşı oluşan antikor düzeyini ölçüyor, hastalığı teşhis etmiyor. WOAH tanı el kitabı serolojik testlerin birincil tanıda kullanılmaması gerektiğini belirtiyor. Bir sağlık sorunundan şüphelenildiğinde vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },
  ],
  kontrolListesi: [
    'Mikroçip aşıdan önce takıldı mı?',
    'Aşıdan 30 gün geçti mi?',
    'Müdürlüğe önceden haber verildi mi?',
    'Serum 5 günde ulaşacak mı?',
    'Gidilen ülkenin kuralı belli mi?',
    'Aşı tekrar tarihleri takipte mi?',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Kedi ve Köpeklerin Yurt Dışına Yolcu Beraberi ve Ticari Sevklerine İlişkin Uygulama Talimatı (21.10.2022, E-10724253-010.07.01-7586682)',
      yil: 2022,
      adres: 'https://vskn.tarimorman.gov.tr/tekirdag/Belgeler/D%C3%96K%C3%9CMAN/Kedi%20Ve%20K%C3%B6peklerin%20Yurt%20D%C4%B1%C5%9F%C4%B1na%20Yolcu%20Beraberi%20Ve%20Ticari%20Sevklerine%20%C4%B0li%C5%9Fkin%20Uygulama%20Talimat%C4%B1.pdf',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı, Veteriner Kontrol Merkez Araştırma Enstitüsü (Etlik)',
      baslik: 'Kuduz Titre Testi / Rabies Titer Test',
      adres: 'https://vetkontrol.tarimorman.gov.tr/merkez/Menu/229/Kuduz-Titre-Testi-_-Rabies-Titer-Test',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı, Veteriner Kontrol Merkez Araştırma Enstitüsü (Etlik)',
      baslik: 'Kuduz antikor titre testi ile ilgili numune durumu sorgulanması',
      yil: 2022,
      adres: 'https://vetkontrol.tarimorman.gov.tr/merkez/Duyuru/57/Kuduz-Antikor-Titre-Testi-Ile-Ilgili-Numune-Durumu-Sorgulanmasi',
    },
    {
      kurum: 'European Commission, Food Safety',
      baslik: 'Bringing a pet into the EU from a non-EU country',
      adres: 'https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/bringing-pet-eu-non-eu-country_en',
    },
    {
      kurum: 'World Organisation for Animal Health (WOAH)',
      baslik: 'Manual of Diagnostic Tests and Vaccines for Terrestrial Animals, Chapter 3.1.18: Rabies (infection with rabies virus and other lyssaviruses)',
      yil: 2023,
      adres: 'https://www.woah.org/fileadmin/Home/eng/Health_standards/tahm/3.01.18_RABIES.pdf',
    },
    {
      kurum: 'Swiss Rabies Center, Institute of Veterinary Virology, University of Berne',
      yazarlar: 'Zanoni RG, Bugnon P, Deranleau E, Nguyen TM, Brügger D',
      baslik: 'Walking the dog and moving the cat: rabies serology in the context of international pet travel schemes',
      dergi: 'Schweizer Archiv für Tierheilkunde',
      yil: 2010,
      kunye: '152(12):561-8',
      doi: '10.1024/0036-7281/a000125',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/21104630/',
    },
  ],
};
