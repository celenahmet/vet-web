import type { BlogYazi } from './types';

export const veterinerHekimNasilOlunur: BlogYazi = {
  slug: 'veteriner-hekim-nasil-olunur',
  baslik: 'Veteriner Hekim Nasıl Olunur? Eğitim, Puan Türü ve Meslek Şartları',
  ozet: 'Veteriner hekim olmak için YKS\'de sayısal puanla veteriner fakültesine yerleşip beş yıllık eğitimi bitirmek gerekiyor. İntörnlük, diploma tescili ve odaya kayıt dahil adım adım yol.',
  kapakAlt:
    'Veteriner hekim nasıl olunur konulu yazının kapak görseli; veteriner fakültesi laboratuvarında önlüklü öğrenciler',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-10-23',
  bloklar: [
    { kind: 'paragraf', metin: 'Veteriner hekim olmak için **YKS\'de sayısal (SAY) puan türüyle bir veteriner fakültesine yerleşmek** ve fakültenin **beş yıllık** eğitimini tamamlamak gerekiyor. 6343 sayılı kanuna göre veteriner fakültesinden diploma alanlar "veteriner hekim" olarak anılıyor. Mesleği serbest olarak yapabilmek için ayrıca diplomanın Bakanlığa tescil ettirilmesi ve serbest çalışanların bir ay içinde veteriner hekimler odasına kaydolması isteniyor.' },
    { kind: 'paragraf', metin: 'Aşağıda bu yolu sırasıyla anlatıyoruz: hangi bölüm okunuyor, eğitim nasıl ilerliyor, intörnlük nedir ve mezuniyetten sonra hangi adımlar atılıyor.' },

    { kind: 'baslik', metin: 'Veteriner hekim olmak için hangi bölüm okunur?' },
    { kind: 'paragraf', metin: 'Veteriner hekim olmanın yolu üniversitelerin **veteriner fakülteleri.** Meslek yüksekokullarının veterinerlikle ilgili ön lisans programları ise **veteriner teknikeri** yetiştiriyor; tekniker veteriner hekimin yerine geçmiyor. İki meslek arasındaki farkı [[veteriner-hekim-tekniker-farki|veteriner hekim ve tekniker farkı]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Veterinerlik hangi puan türüyle alıyor, taban puanlar nereden bakılır?' },
    { kind: 'paragraf', metin: 'Veteriner fakülteleri öğrencilerini ÖSYM\'nin merkezi yerleştirmesiyle, **sayısal (SAY)** puan türünden alıyor. Taban puan ve başarı sıraları üniversiteden üniversiteye ve yıldan yıla büyük farklılık gösteriyor; Türkçe ve İngilizce programlar, devlet ve vakıf üniversiteleri ayrı listeleniyor. Güncel ve resmî rakamlar için Yükseköğretim Kurulu\'nun **YÖK Atlas** sayfasındaki program sayfalarına bakın; her programın kontenjanı, yerleşen sayısı, en düşük puanı ve başarı sırası orada yer alıyor.' },
    { kind: 'yanilgi', baslik: '"Taban puanı düşük fakülte daha kolay diploma verir"', metin: 'Taban puan, o yıl programı tercih edenlerin sıralamasını gösteriyor; eğitimin süresini ya da içeriğini değil. Her fakültenin eğitim süresi ve mezuniyet şartları kendi yönetmeliğinde yazılı ve aşağıda göreceğiniz gibi temel yapı aynı.' },

    { kind: 'baslik', metin: 'Veteriner fakültesi kaç yıl, eğitim nasıl ilerliyor?' },
    { kind: 'paragraf', metin: 'Eğitim süresini her üniversite kendi yönetmeliğiyle belirliyor ve bu yönetmelikler Resmî Gazete\'de yayımlanıyor. Örneğin Tekirdağ Namık Kemal Üniversitesi\'nin 22 Temmuz 2026\'da yayımlanan yönetmeliğine göre eğitim süresi **yabancı dil hazırlık sınıfı hariç beş yıl, azami sekiz yıl.** Van Yüzüncü Yıl Üniversitesi\'nin yönetmeliği de normal süreyi beş, azami süreyi sekiz yıl olarak belirliyor.' },
    { kind: 'tablo', basliklar: ['Aşama', 'Ne oluyor'], satirlar: [
      ['Hazırlık (varsa)', 'Yabancı dil hazırlık sınıfı; beş yıllık süreye dahil değil'],
      ['1-9. yarıyıl', 'Temel ve klinik bilimler dersleri, uygulamalar ve stajlar'],
      ['Son yarıyıl ya da son yıl', 'İntörnlük: veteriner hekimliği olgunlaşma uygulaması'],
      ['Mezuniyet', 'Diploma; unvan "veteriner hekim"'],
    ]},

    { kind: 'baslik', metin: 'Veteriner fakültesinde intörnlük nedir?' },
    { kind: 'paragraf', metin: 'İntörnlük, öğrencinin son döneminde klinikte ve sahada hekim gözetiminde mesleği uygulamalı olarak yürüttüğü eğitim. Namık Kemal Üniversitesi\'nde **onuncu yarıyıl** tamamen bu eğitime ayrılıyor ve tek bir çok disiplinli ders olarak yürütülüyor. Van Yüzüncü Yıl\'da da intörnlük onuncu yarıyılda ve öğrencinin ilk dokuz yarıyılın derslerini başarmış olması gerekiyor; bazı fakültelerde ise dokuzuncu ve onuncu yarıyılı kapsıyor. Hangi düzenin geçerli olduğu her fakültenin kendi yönetmeliğinde yazılı.' },

    { kind: 'baslik', metin: 'Mezun olduktan sonra veteriner hekim olarak çalışmak için ne gerekir?' },
    { kind: 'liste', maddeler: [
      '**Diploma tescili:** 6343 sayılı kanunun 2. maddesi, Türkiye Cumhuriyeti vatandaşı olan ve diplomasını Bakanlığa tescil ettirmiş veteriner hekimlerin mesleğini serbestçe yapabileceğini söylüyor.',
      '**Oda kaydı:** Kanunun 17. maddesine göre mesleğini serbest olarak yapan veteriner hekimler **bir ay içinde** bulundukları bölgenin veteriner hekimler odasına kaydolmak zorunda. Kamuda çalışanlar için kayıt isteğe bağlı.',
      '**Yurt dışı diploması:** Yabancı ülkede alınan diplomayla çalışmak isteyenlerin diploma denkliğinin onaylanması ve Türkiye\'deki bir veteriner fakültesinde yapılan sınavı kazanmaları gerekiyor.',
      '**Muayenehane açmak:** Kendi kliniğini açmak isteyen hekim il tarım ve orman müdürlüğünden ruhsat alıyor; süreci [[veteriner-klinigi-acmak|veteriner kliniği açmak]] yazımızda anlattık.',
    ]},

    { kind: 'baslik', metin: 'Veteriner hekimler nerede çalışır, ne kazanır?' },
    { kind: 'paragraf', metin: 'Veteriner hekimler muayenehane, poliklinik ve hayvan hastanelerinde, kamuda Tarım ve Orman Bakanlığı ile belediyelerde, gıda ve hayvancılık işletmelerinde, ilaç ve yem sektöründe ve akademide çalışabiliyor. Klinik türleri arasındaki farkı [[muayenehane-poliklinik-hastane-farki|muayenehane, poliklinik ve hastane farkı]], maaşları [[veteriner-hekim-maaslari|veteriner hekim maaşları]] yazılarımızda ele aldık.' },
    { kind: 'uyari', metin: 'Taban puanlar, kontenjanlar ve fakülte yönetmelikleri her yıl değişebiliyor. Tercih yapmadan önce YÖK Atlas\'taki güncel program sayfasına ve tercih edeceğiniz üniversitenin kendi yönetmeliğine bakın.' },
  ],
  sss: [
    { soru: 'Veteriner hekim olmak için hangi bölüm okunur?', cevap: 'Üniversitelerin veteriner fakülteleri; ön lisans programları ise veteriner teknikeri yetiştiriyor.' },
    { soru: 'Veterinerlik hangi puan türüyle öğrenci alır?', cevap: 'YKS sayısal (SAY) puan türüyle.' },
    { soru: 'Veteriner fakültesi kaç yıl?', cevap: 'Hazırlık hariç beş yıl; örnek yönetmeliklerde azami süre sekiz yıl.' },
    { soru: 'Veterinerlik taban puanları nereden bakılır?', cevap: 'YÖK Atlas\'taki program sayfalarından; puanlar üniversiteye ve yıla göre değişiyor.' },
    { soru: 'Veteriner fakültesinde intörnlük ne zaman?', cevap: 'Son dönemde; fakülteye göre onuncu ya da dokuzuncu ve onuncu yarıyıllarda.' },
    { soru: 'Veteriner hekimlerin odaya kaydı zorunlu mu?', cevap: 'Serbest çalışanlar için evet, bir ay içinde; kamuda çalışanlar için isteğe bağlı.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '6343 sayılı Veteriner Hekimliği Mesleğinin İcrasına, Türk Veteriner Hekimleri Birliği ile Odalarının Teşekkül Tarz ve Mesai Şekillerine Dair Kanun (madde 1, 2, 3, 17)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=6343&MevzuatTertip=3',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Tekirdağ Namık Kemal Üniversitesi Veteriner Fakültesi Eğitim-Öğretim ve Sınav Yönetmeliği (22.07.2026, sayı 33317)',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2026/07/20260722-2.htm',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Van Yüzüncü Yıl Üniversitesi Veteriner Fakültesi Eğitim-Öğretim ve Sınav Yönetmeliği (13.10.2024)',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/10/20241013-5.htm',
    },
    {
      kurum: 'Yükseköğretim Kurulu',
      baslik: 'YÖK Atlas: Lisans Programları',
      adres: 'https://yokatlas.yok.gov.tr/',
    },
  ],
};
