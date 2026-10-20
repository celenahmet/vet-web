import type { BlogYazi } from './types';

export const veterinerKlinigiAcmak: BlogYazi = {
  slug: 'veteriner-klinigi-acmak',
  baslik: 'Veteriner Kliniği Açmak İçin Gerekenler: Şartlar ve Belgeler',
  ozet: 'Muayenehane ya da poliklinik açmak için il müdürlüğüne hangi belgelerle başvurulur, oda ölçüleri ne olmalı, poliklinikte kaç hekim gerekir? Yönetmelik maddeleriyle adım adım.',
  kapakAlt:
    'Veteriner kliniği açmak konulu yazının kapak görseli; yeni döşenmiş, boş ve modern bir veteriner muayene odası',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-10-20',
  bloklar: [
    { kind: 'paragraf', metin: 'Türkiye\'de veteriner kliniği açmak için **il tarım ve orman müdürlüğünden ruhsat** almak gerekiyor. Şartları **Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği** belirliyor: tek hekimin çalıştığı yer **muayenehane**, en az dört hekimin birlikte çalıştığı yer **poliklinik.** Başvuru dilekçe ve belgelerle yapılıyor, il müdürlüğü yeri yerinde inceliyor ve uygun bulursa ruhsatı ve çalışma izinlerini veriyor.' },
    { kind: 'paragraf', metin: 'Aşağıda başvuruda istenen belgeleri, odaların asgari ölçülerini ve açıldıktan sonra bildirilmesi gereken değişiklikleri yönetmelik maddeleriyle topladık. İki kuruluş türü arasındaki farkı [[muayenehane-poliklinik-hastane-farki|muayenehane, poliklinik ve hastane farkı]] yazımızda ayrıca anlattık.' },

    { kind: 'baslik', metin: 'Muayenehane mi, poliklinik mi?' },
    { kind: 'tablo', basliklar: ['', 'Muayenehane', 'Poliklinik'], satirlar: [
      ['Hekim sayısı', 'Tek hekim (sorumlu veteriner hekim)', 'En az dört veteriner hekim'],
      ['Sorumlu kişi', 'Sorumlu veteriner hekim', 'Sorumlu yönetici'],
      ['Muayene odası', 'Bir, en az 6 m²', 'İki, her biri en az 6 m²'],
      ['Tuvalet ve duş', 'Yönetmelikte ayrı şart yok', 'Hijyenik tuvalet ve duş kabini'],
    ]},
    { kind: 'paragraf', metin: 'Polikliniği tek bir hekim de açabiliyor; bu durumda kendisi sorumlu olmak şartıyla en az üç hekimle iş sözleşmesi yapması gerekiyor. Poliklinik bir şirket olarak da kurulabiliyor; sorumlu yönetici görevini şirket müdürü üstlenebiliyor.' },

    { kind: 'baslik', metin: 'Veteriner kliniği açmak için hangi belgeler gerekir?' },
    { kind: 'paragraf', metin: 'Başvuru il müdürlüğüne ıslak ya da elektronik imzalı dilekçeyle yapılıyor. **Muayenehane** için istenenler:' },
    { kind: 'liste', maddeler: [
      'Diploma ya da mezuniyet belgesinin aslı veya onaylı sureti, varsa uzmanlık belgesi',
      'T.C. kimlik numarası ve ikametgâh beyanı',
      'İki fotoğraf',
      'Teknik resim kurallarına uygun yerleşim planı ve adres',
      'Bölge veteriner hekimler odası kayıt belgesi',
    ]},
    { kind: 'paragraf', metin: '**Poliklinikte** bunlara ek olarak polikliniğin adı ve adresiyle sorumlu yöneticinin dilekçesi, hekimlerle yapılan sözleşmeler ya da adi ortaklık belgesi, şirketse şirket sözleşmesi ve ticaret sicil bilgileri ile sorumlu yönetici olacak kişinin sözleşmesi isteniyor.' },

    { kind: 'baslik', metin: 'Klinik için asgari fiziki şartlar' },
    { kind: 'liste', maddeler: [
      '**Hekim odası:** Hekim başına en az 6 m².',
      '**Muayene odası:** En az 6 m², müstakil ve soğutucu dolaplı. Muayene masası paslanmaz ya da metal olmalı.',
      '**Malzeme odası:** En az 4 m², müstakil, raflı ve hasta girişine kapalı.',
      '**Laboratuvar ya da röntgen odası (poliklinikte, varsa):** En az 4 m².',
      '**Lavabo:** Belediye su şebekesine ve kanalizasyona bağlı.',
      '**Zemin ve duvar:** Zemin düz ve temizlenebilir, duvarlar açık renkli ve dezenfekte edilebilir; bölmeler tabandan tavana kadar.',
      '**Güvenlik ve hijyen:** Yeterli aydınlatma ve havalandırma, yangın söndürme cihazı, her bölümde çöp kutusu.',
      '**Tıbbi atık:** Üzerinde "DİKKAT TIBBİ ATIK" yazan kırmızı torbada toplanıyor ve toplama aracı gelmeden dışarı çıkarılmıyor.',
    ]},
    { kind: 'paragraf', metin: 'Poliklinikte bütün bölümlerin aynı binada, bitişik ya da aynı binanın katlarında olması gerekiyor. Alet ve ekipmanın asgari listesini yönetmelik değil, Bakanlık belirliyor; başvurudan önce il müdürlüğünden güncel listeyi istemek zaman kazandırır.' },
    { kind: 'yanilgi', baslik: '"Önce yeri açarım, ruhsatı sonra alırım"', metin: 'Ruhsat, yerin yönetmelikteki şartlara uygun olduğu yerinde görüldükten sonra veriliyor. Kira sözleşmesi ve tadilat öncesinde planı ölçülere göre çizdirip il müdürlüğüyle görüşmek, sonradan duvar yıkmaktan ucuz.' },

    { kind: 'baslik', metin: 'Ruhsat ve çalışma izni nasıl alınır?' },
    { kind: 'paragraf', metin: 'Başvuruyu il müdürlüğünün hayvan sağlığı birimi inceliyor ve yeri yerinde kontrol ediyor. Uygun bulunursa il müdürlüğü şu belgeleri veriyor:' },
    { kind: 'liste', maddeler: [
      'Kuruluşun ruhsatı',
      'Sorumlu veteriner hekim belgesi',
      'Klinikte çalışacak her hekim için çalışma izni',
      'Yardımcı sağlık personeli için çalışma izni',
    ]},
    { kind: 'paragraf', metin: 'Ruhsat ve belgeler hayvan sahiplerinin görebileceği bir yere asılıyor. Dış tabelada kliniğin adı, telefonu, hekimin adı, unvanı ve uzmanlığı yazılabiliyor; yanıltıcı ifadeler ve yabancı dilde unvan yasak, ruhsattaki ad dışında bir ad da kullanılamıyor.' },

    { kind: 'baslik', metin: 'Açıldıktan sonra neler bildirilir?' },
    { kind: 'tablo', basliklar: ['Değişiklik', 'Ne yapılır'], satirlar: [
      ['Adres değişikliği', 'İl müdürlüğünün izniyle; yeni adrese göre belgeler hazırlanıp yeni ruhsat isteniyor'],
      ['Sorumlu hekimin ayrılması', 'Bir hafta önceden bildiriliyor; çalışma izni bir hafta içinde iade ediliyor'],
      ['Şirket ortaklarının değişmesi', '15 gün içinde il müdürlüğüne bildiriliyor'],
      ['Kapatma', 'Dilekçe ve ruhsatın aslıyla il müdürlüğüne bildiriliyor'],
      ['Ruhsatın kaybı', 'Kayıp ilanıyla ya da yıpranmış ruhsatın aslıyla yeniden başvuruluyor'],
    ]},

    { kind: 'baslik', metin: 'Açılıştan sonra ilk kurulacak düzen' },
    { kind: 'paragraf', metin: 'Ruhsat kliniği açar ama kliniği yaşatan, hastanın geri gelmesi. Randevu, aşı hatırlatma ve hasta kayıtlarını ilk günden düzenli tutmak, sonradan kâğıt yığınını sisteme taşımaktan kolay. Bu konuları [[klinikte-randevu-yonetimi|klinikte randevu yönetimi]] ve [[kliniklerde-asi-hatirlatma|kliniklerde aşı hatırlatma]] yazılarımızda anlattık. Fiyatlandırmada meslek odasının belirlediği tabanı [[asgari-ucret-tarifesi-nedir|asgari ücret tarifesi]] yazısında bulabilirsiniz.' },
    { kind: 'uyari', metin: 'Bu yazı yönetmeliğin özetidir. Vergi kaydı, belediye işlemleri ve kira sözleşmesi gibi konular için bir mali müşavirle, güncel ekipman listesi ve inceleme takvimi için il tarım ve orman müdürlüğüyle görüşün.' },
  ],
  sss: [
    { soru: 'Veteriner kliniği açmak için ruhsatı kim verir?', cevap: 'İl tarım ve orman müdürlüğü, yeri yerinde inceledikten sonra verir.' },
    { soru: 'Muayenehane ile poliklinik arasındaki fark nedir?', cevap: 'Muayenehanede tek sorumlu hekim çalışır; poliklinikte en az dört veteriner hekim bulunur.' },
    { soru: 'Veteriner muayene odası kaç metrekare olmalı?', cevap: 'Yönetmeliğe göre en az 6 m², müstakil ve soğutucu dolaplı.' },
    { soru: 'Veteriner kliniği açmak için hangi belgeler gerekir?', cevap: 'Diploma, kimlik ve ikametgâh beyanı, iki fotoğraf, yerleşim planı ve veteriner hekimler odası kayıt belgesi.' },
    { soru: 'Tek hekim poliklinik açabilir mi?', cevap: 'Evet; sorumlu olmak şartıyla en az üç hekimle iş sözleşmesi yapması gerekir.' },
    { soru: 'Klinik adresi değişirse ne yapılır?', cevap: 'İl müdürlüğünün izni alınır ve yeni adres için yeni ruhsat istenir.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği',
      yil: 2011,
      adres: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=15393&MevzuatTur=7&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '6343 sayılı Veteriner Hekimliği Mesleğinin İcrasına, Türk Veteriner Hekimleri Birliği ile Odalarının Teşekkül Tarz ve Mesai Şekillerine Dair Kanun',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=6343&MevzuatTertip=3',
    },
  ],
};
