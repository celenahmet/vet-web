import type { BlogYazi } from './types';

/**
 * KLINIK YONETIMI. Konu bir MYO on lisans programi. Ders adlari, staj gunu ve
 * mezuniyet kosullari UNIVERSITEYE GORE DEGISIYOR; yazi uc universitenin kendi
 * sayfalarindan beslendi (Ahi Evran Cicekdagi MYO, Mersin, Canakkale Yenice MYO)
 * ve ders listesinin Canakkale plani oldugunu acikca soyluyor. Teshis ve tedavi
 * yetkisi hekimde; mezunun gorevi programlarin kendi tanimindaki "yardim" cercevesi.
 */
export const laborantVeVeterinerSaglik: BlogYazi = {
  slug: 'laborant-ve-veteriner-saglik',
  baslik: 'Laborant ve Veteriner Sağlık Bölümü Nedir?',
  ozet: 'İki yıllık ön lisans programı: dersleri, stajı, mezunun çalışma alanı ve hekimden farkı. Karar yetkisi veteriner hekimde.',
  kapakAlt:
    'Laboratuvarda mikroskop ve tüplerle çalışan laborant, yanında kedi',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-11-11',
  bloklar: [
    { kind: 'paragraf', metin: 'Laborant ve Veteriner Sağlık, meslek yüksekokullarında okutulan **iki yıllık bir ön lisans programı**; mezunları tekniker unvanıyla klinik, laboratuvar ve hayvancılık işletmelerinde yardımcı teknik personel olarak çalışıyor. Teşhis koyan ve tedaviyi belirleyen kişi ise bu programın mezunu değil, veteriner hekim.' },
    { kind: 'paragraf', metin: 'Adı "bölüm" diye anılsa da resmî yapı biraz farklı. Aşağıda üç üniversitenin kendi program sayfalarına ve raporlarına dayanarak programın ne olduğunu, ne öğretildiğini ve mezunun işin neresinde durduğunu anlatıyorum. Klinik sahibi, aday öğrenci ya da sadece veterinerde karşısına çıkan ekibi merak eden hayvan sahibi için yazıldı.' },

    { kind: 'baslik', metin: 'Bölüm mü, program mı' },
    { kind: 'paragraf', metin: 'Günlük dilde "laborant ve veteriner sağlık bölümü" deniyor ama üniversite kayıtlarında yapı şöyle: **Veterinerlik Bölümü** çatısı altında "Laborant ve Veteriner Sağlık Programı" yer alıyor. Çanakkale Onsekiz Mart Üniversitesi Yenice MYO\'nun 2024 öz değerlendirme raporunda bölüm adı Veterinerlik, program adı Laborant ve Veteriner Sağlık olarak yazılmış. Mersin Üniversitesi de aynı yapıyı kullanıyor.' },
    { kind: 'paragraf', metin: 'Bu ayrım küçük görünüyor ama arama yaparken işe yarıyor. Tercih listelerinde ve üniversite sayfalarında aranacak ifade "program adı"; "bölüm" ise programın bağlı olduğu çatıyı gösteriyor.' },

    { kind: 'baslik', metin: 'Kaç yıl sürüyor, nasıl girilir' },
    { kind: 'paragraf', metin: 'Kırşehir Ahi Evran Üniversitesi Çiçekdağı MYO\'nun program sayfasına göre eğitim dili Türkçe, süre 2 yıl, azami süre 4 yıl. Programdan başarıyla çıkan kişi "Laborant ve Veteriner Sağlık alanında önlisans derecesine" sahip oluyor. Toplam yük 120 AKTS.' },
    { kind: 'paragraf', metin: 'Kabul koşulu sade: lise ve dengi okul diploması ile üniversite sınavının TYT bölümünden yeterli puan. Çanakkale Yenice MYO da öğrencileri YKS içindeki TYT puanıyla aldığını, ayrıca özel bir şart aramadığını yazıyor. Kontenjan ve taban puanlar her yıl değiştiği için güncel rakamlar için YÖK Atlas\'a ve üniversitenin kendi sayfasına bakmak gerekiyor; bu yazıda puan ya da sıralama vermiyorum.' },

    { kind: 'baslik', metin: 'Derslerde neler okutuluyor' },
    { kind: 'paragraf', metin: 'Aşağıdaki liste Çanakkale Onsekiz Mart Üniversitesi Yenice MYO\'nun öğretim planından alındı. Ders adları ve dağılımı üniversiteden üniversiteye değişebiliyor, o yüzden bunu kesin bir standart değil örnek bir plan olarak okumak gerekiyor.' },
    { kind: 'tablo', basliklar: ['Ders grubu', 'Plandaki örnek dersler'], satirlar: [
      ['Temel bilimler', 'Anatomi, Fizyoloji, Histoloji, Biyokimya, Genel Mikrobiyoloji'],
      ['Laboratuvar ve klinik', 'Temel Laboratuvar Teknikleri, Klinik Alet ve Malzeme Bilgisi, Klinik Bilgisi, Operasyon Anestezi ve Sterilizasyon'],
      ['Hastalık ve korunma', 'Patoloji, Salgın ve Zoonoz Hastalıkları, Hijyen ve Sanitasyon, Farmakoloji ve Toksikoloji'],
      ['Hayvan ve beslenme', 'Yem Bilgisi ve Hayvan Besleme, Hayvan Davranışları ve Refahı, Pet Hayvanları Bakım ve Sağlığı, Çiftlik Hayvanları Bakım ve Sağlığı'],
      ['Mevzuat ve etik', 'Mevzuat, Etik ve Hayvan Hakları, İş Sağlığı ve Güvenliği'],
    ] },
    { kind: 'paragraf', metin: 'Mersin Üniversitesi\'nin program çıktıları da aynı yöne işaret ediyor: farklı hayvan türlerinin anatomik ve fizyolojik özellikleri, zoonozlar ve aşılama programları, laboratuvar hijyeni ve güvenliği, ilaç bilgisi ve toksikoloji, hayvan hakları ve refahı. Yani program yalnızca laboratuvar değil, kliniğin ve işletmenin bütününe yayılan geniş bir temel veriyor.' },

    { kind: 'baslik', metin: 'Staj ve mezuniyet koşulları' },
    { kind: 'paragraf', metin: 'Programın mezuniyet şartı yalnızca ders geçmek değil. Ahi Evran Üniversitesi, derslerin tümünü geçmeyi, 4.00 üzerinden en az 2.0 ağırlıklı not ortalamasını ve stajı başarıyla tamamlamayı şart koşuyor. Çanakkale Yenice MYO\'da da 120 AKTS ile birlikte **30 günlük zorunlu staj** aranıyor.' },
    { kind: 'paragraf', metin: 'Devam şartı da var: Ahi Evran\'ın tanımına göre öğrencinin sınava girebilmesi için derslerin en az yüzde 70\'ine, uygulamaların en az yüzde 80\'ine katılmış olması gerekiyor. Bu, programın uygulamaya ağırlık verdiğini gösteriyor.' },

    { kind: 'baslik', metin: 'Mezunlar nerede çalışıyor' },
    { kind: 'paragraf', metin: 'Ahi Evran Üniversitesi\'ne göre mezunlar tekniker unvanını kazanıyor; Tarım ve Ormancılık Bakanlığı bünyesindeki kuruluşlarda, özel veteriner hastanelerinde, kliniklerinde ve laboratuvarlarında yardımcı teknik personel olarak çalışabiliyor. Aynı sayfa özel çiftlikleri, tavukçuluk, sığırcılık ve koyunculuk işletmelerini ve yem sanayini de çalışma alanı olarak sayıyor.' },
    { kind: 'paragraf', metin: 'Klinikte tekniker unvanıyla çalışan biriyle karşılaşırsanız bu tür bir programın mezunu olabilir. Günlük görevlerin ayrıntısı için [[veteriner-teknikeri-ne-is-yapar|veteriner teknikerinin görevleri]] yazısı daha uygun. Maaş konusu ayrı bir başlık olduğu için [[veteriner-teknikeri-maaslari|veteriner teknikeri maaşları]] yazısında ele alınıyor.' },

    { kind: 'baslik', metin: 'Yetki sınırı nerede başlıyor' },
    { kind: 'yanilgi', baslik: '"Bu programın mezunu küçük veteriner hekimdir" yanılgısı', metin: 'Program ön lisans düzeyinde; mezun tekniker unvanını alıyor, hekim unvanını değil. Mersin Üniversitesi\'nin program çıktılarında hedef açıkça "veteriner hekime muayene, görüntüleme ve cerrahi uygulamalar sırasında yardımda bulunma" ve hekimin planladığı uygulamaları yürütme olarak yazılmış. Yani **karar hekimde, uygulamada eşlik ekipte.**' },
    { kind: 'paragraf', metin: 'Çanakkale Yenice MYO\'nun hedefleri de aynı çerçeveyi çiziyor: enfeksiyonların kontrolünde, laboratuvar ve klinik uygulamalarda veteriner hekime yardımcı olmak, kayıt işlerini sorumlu hekim nezaretinde yürütmek. Aradaki farkın ayrıntısı [[veteriner-hekim-tekniker-farki|veteriner hekim ile tekniker farkı]] yazısında, hekimliğe giden yol ise [[veteriner-hekim-nasil-olunur|veteriner hekim nasıl olunur]] yazısında anlatılıyor.' },
    { kind: 'uyari', metin: 'Hayvanınızda bir sağlık sorunu fark ederseniz yorumu klinikteki tekniker ya da internet yazıları değil, veteriner hekim yapmalı. Teşhis, tedavi ve ilaç kararı için doğrudan veteriner hekime başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Mezundan sonra ne olur' },
    { kind: 'paragraf', metin: 'Çanakkale Yenice MYO\'ya göre mezunlar Dikey Geçiş Sınavı (DGS) ile Acil Yardım ve Afet Yönetimi, Biyoloji, Biyoteknoloji, Hayvansal Üretim ve Teknolojileri, Moleküler Biyoloji ve Genetik, Sağlık Yönetimi, Tarımsal Biyoteknoloji, Veteriner ve Zootekni lisans programlarına geçebiliyor. Ahi Evran sayfasındaki liste de aynı bölümleri sayıyor. Kontenjan ve koşullar her yıl ÖSYM kılavuzuyla belirlendiği için ilgili yılın kılavuzunu kontrol etmek önerilir.' },

    { kind: 'baslik', metin: 'Kliniğe ve hayvan sahibine ne ifade ediyor' },
    { kind: 'paragraf', metin: 'Klinik sahipleri için işe alımda asıl soru unvanın adı değil, görev ve yetki dağılımının yazılı olması. Kimin hangi işlemi hekim gözetiminde yaptığı kayıtlı olmalı. Veterito\'yu kullanan klinikler ekip üyelerini ve görevlerini panelde tanımlayabiliyor; bu, kişi değiştiğinde bilginin kaybolmasını önlüyor.' },
    { kind: 'paragraf', metin: 'Hayvan sahipleri için ise pratik bilgi şu: hekimin yanında tekniker gibi yardımcı ekip üyeleri de görev alabiliyor. Tahlil süreci hakkında genel bilgi için [[evcil-hayvanlarda-kan-tahlili|evcil hayvanlarda kan tahlili]] yazısı yardımcı olur. Sonucun ne anlama geldiğini ve ne yapılacağını anlatması gereken kişi veteriner hekim.' },
  ],
  sss: [
    { soru: 'Laborant ve veteriner sağlık bölümü kaç yıl sürüyor?', cevap: 'Program iki yıl sürüyor ve ön lisans derecesi veriyor. Ahi Evran Üniversitesi Çiçekdağı MYO\'da süre 2 yıl, azami süre 4 yıl olarak yazılmış. Toplam yük 120 AKTS ve eğitim dili Türkçe. Süre ve ayrıntılar üniversiteye göre değişebildiği için tercih edilen okulun kendi sayfasına bakmak gerekiyor.' },
    { soru: 'Laborant ve veteriner sağlık mezunu veteriner hekim olur mu?', cevap: 'Hayır, mezun tekniker unvanını alıyor; veteriner hekim unvanı ise ayrı bir eğitimle kazanılıyor. Programın hedefi hekime muayene, görüntüleme ve cerrahi uygulamalarda yardım etmek ve hekimin planladığı uygulamaları yürütmek.' },
    { soru: 'Bu programa hangi sınavla girilir?', cevap: 'Programa üniversite sınavının TYT bölümündeki puanla giriliyor. Ahi Evran Üniversitesi lise ve dengi diplomayı ve TYT\'den yeterli puanı şart koşuyor; Çanakkale Yenice MYO da TYT puanıyla öğrenci alıyor. Güncel kontenjan ve taban puan her yıl değiştiği için YÖK Atlas\'tan kontrol edilmesi önerilir.' },
    { soru: 'Laborant ve veteriner sağlıkta staj zorunlu mu?', cevap: 'Evet, staj mezuniyet koşullarının içinde. Çanakkale Yenice MYO\'da 120 AKTS ile birlikte 30 günlük zorunlu staj aranıyor; Ahi Evran Üniversitesi de stajın başarıyla tamamlanmasını mezuniyet şartı olarak yazıyor. Gün sayısı ve işleyiş okula göre farklılaşabiliyor, o yüzden ilgili MYO\'nun staj yönergesine bakmak gerekiyor.' },
    { soru: 'Mezunlar nerede çalışabiliyor?', cevap: 'Mezunlar kamuda ve özel sektörde yardımcı teknik personel olarak çalışabiliyor. Ahi Evran Üniversitesi; Tarım ve Ormancılık Bakanlığı bünyesindeki kuruluşları, özel veteriner hastanelerini, klinikleri, laboratuvarları, özel çiftlikleri ve yem sanayini sayıyor. Her görevde sorumluluk, mevzuat ve kurumun tanımına göre belirleniyor.' },
    { soru: 'Mezun lisans eğitimine devam edebilir mi?', cevap: 'Evet, Dikey Geçiş Sınavı ile ilgili lisans programlarına geçiş mümkün. Çanakkale Yenice MYO; Biyoloji, Biyoteknoloji, Hayvansal Üretim ve Teknolojileri, Veteriner, Zootekni gibi bölümleri sayıyor. Kontenjan ve koşullar her yıl yayımlanan ÖSYM kılavuzuna göre belirlendiği için ilgili yılın kılavuzuna bakmak gerekiyor.' },
    { soru: 'Hayvanımın tedavisine klinikteki tekniker mi karar verir?', cevap: 'Hayır, tedaviye karar veren veteriner hekim. Tekniker programlarının hedefi, hekimin planladığı uygulamalara yardımcı olmak ve kayıt işlerini sorumlu hekim nezaretinde yürütmek. Hayvanınızda sağlık sorunu fark ederseniz yorum için doğrudan veteriner hekime başvurmak gerekiyor.' },
  ],
  kontrolListesi: [
    'Program adı ve bağlı bölüm net mi?',
    'Programda zorunlu staj var mı?',
    'Ders planı güncel kaynaktan mı?',
    'Tanı ve tedavi hekimde mi?',
    'Görev dağılımı yazılı mı?',
    'Dikey geçiş yolu belli mi?',
  ],
  kaynaklar: [
    {
      kurum: 'Kırşehir Ahi Evran Üniversitesi Çiçekdağı Meslek Yüksekokulu',
      baslik: 'Laborant ve Veteriner Sağlık Programı',
      adres: 'https://cicekdagimyo.ahievran.edu.tr/akademik/veterinerlik/laborant-ve-veteriner-saglik-programi',
    },
    {
      kurum: 'Mersin Üniversitesi',
      baslik: 'Veterinerlik Bölümü Laborant ve Veteriner Sağlık Programı - Program Çıktıları',
      adres: 'https://www.mersin.edu.tr/bulut/birim_1593/Program_Cktlar.pdf',
    },
    {
      kurum: 'Çanakkale Onsekiz Mart Üniversitesi Yenice Meslek Yüksekokulu',
      baslik: 'Laborant ve Veteriner Sağlık Programı 2024 Yılı Öz Değerlendirme Raporu',
      yil: 2024,
      adres: 'https://cdn.comu.edu.tr/cms/yenice/files/1252-laborant-ve-veteriner-saglik-2024-yili-oz-degerlen.pdf',
    },
  ],
};
