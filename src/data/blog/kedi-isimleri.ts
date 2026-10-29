import type { BlogYazi } from './types';

export const kediIsimleri: BlogYazi = {
  slug: 'kedi-isimleri',
  baslik: 'Kedi İsimleri: Dişi ve Erkek Kediler İçin Öneriler',
  ozet: 'Dişi ve erkek kedi isimleri, Türkçe, tatlı, renge göre ve komik isim önerileri. Kediler adlarını tanıyor; doğru ismi seçmek için ipuçları da burada.',
  kapakAlt:
    'Kedi isimleri konulu yazının kapak görseli; halıda tüylü bir oyuncağa bakan turuncu, siyah beyaz ve tekir üç yavru kedi',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-29',
  bloklar: [
    { kind: 'paragraf', metin: '**İyi bir kedi ismi kısa, kolay söylenen ve evde sık kullanılan kelimelere benzemeyen bir isimdir.** Tokyo Üniversitesi\'nin 2019 tarihli araştırması kedilerin kendi adlarını başka kelimelerden ve evdeki diğer kedilerin adlarından ayırt edebildiğini gösterdi. Yani seçtiğiniz isim kediniz için gerçekten bir anlam taşıyacak; bu yüzden seçim biraz özeni hak ediyor.' },
    { kind: 'paragraf', metin: 'Aşağıda dişi ve erkek kedi isimlerini, Türkçe isimleri, kedinin rengine ve desenine göre isimleri, yiyecek ve doğa isimlerini ve komik isimleri gruplar hâlinde topladık. Sonunda kedinizin adını öğrenmesini kolaylaştıracak ipuçları da var.' },

    { kind: 'tablo', basliklar: ['İsim seçerken', 'Neden?'], satirlar: [
      ['Bir ya da iki heceli olsun', 'Kısa isim kolay seslenilir ve tekrarlanır'],
      ['Evdeki kelimelere benzemesin', 'Kedi adını sık kelimelerle karıştırmasın'],
      ['Diğer hayvanların adına benzemesin', 'Kafede yaşayan kediler bu ayrımı yapamadı'],
      ['Herkes aynı biçimde söylesin', 'Tutarlılık öğrenmeyi kolaylaştırır'],
      ['Sizi utandırmasın', 'Veteriner kliniğinde de yüksek sesle söylenecek'],
    ]},

    { kind: 'baslik', metin: 'Dişi kedi isimleri' },
    { kind: 'paragraf', metin: 'Dişi kediler için yumuşak sesli, tatlı ya da zarif isimler sık tercih ediliyor. Aşağıdaki listede hem Türkçe hem yabancı kökenli, söylemesi kolay isimler var:' },
    { kind: 'liste', maddeler: [
      'Minnoş, Pamuk, Fındık, Bal, Duman, Mia, Luna',
      'Zeytin, Mimi, Lokum, Tarçın, Cici, Nazlı, Lili',
      'Maya, Bulut, Ponçik, Nane, Kiraz, Çilek, Leyla',
      'Bella, Nala, Kuki, Lola, Mocha, Suşi, Pati',
      'Sütlaç, Gece, Yıldız, Elif, Zuzu, Toffee, Misket',
    ]},

    { kind: 'baslik', metin: 'Erkek kedi isimleri' },
    { kind: 'paragraf', metin: 'Erkek kediler için kısa, güçlü ya da esprili isimler öne çıkıyor. Kedinin karakterine göre seçmek ismin daha kolay benimsenmesini sağlar: sakin bir kediye "Paşa", yerinde duramayan bir kediye "Fırtına" yakışabilir.' },
    { kind: 'liste', maddeler: [
      'Paşa, Tarçın, Fıstık, Karamel, Leo, Oscar, Simba',
      'Duman, Tekir, Zeytin, Badem, Mırmır, Garfield, Felix',
      'Bıdık, Sarman, Kömür, Boncuk, Pamuk, Tony, Milo',
      'Fırtına, Kaplan, Aslan, Karabaş, Pepe, Max, Charlie',
      'Gofret, Kurabiye, Tontiş, Bey, Sultan, Şeker, Joker',
    ]},
    { kind: 'paragraf', metin: 'Bazı isimler hem dişi hem erkek kedilere uyar: Pamuk, Duman, Zeytin, Tarçın, Fındık ve Boncuk gibi. Cinsiyeti henüz bilinmeyen yavru bir kedi için bu tür isimler iyi bir başlangıçtır.' },

    { kind: 'baslik', metin: 'Rengine ve desenine göre kedi isimleri' },
    { kind: 'paragraf', metin: 'Kedinin tüy rengi ve deseni isim için en kolay ilham kaynağıdır. Türkçede kedi renklerinin zaten kendine özgü adları var: sarman, tekir, kara, ak. Bu adları isim olarak kullanmak da yaygın.' },
    { kind: 'tablo', basliklar: ['Tüy rengi ya da deseni', 'İsim önerileri'], satirlar: [
      ['Siyah', 'Kömür, Gece, Zeytin, Karabiber, Panter'],
      ['Beyaz', 'Pamuk, Bulut, Kar, Süt, Sütlaç, Kartopu'],
      ['Sarı, turuncu', 'Sarman, Tarçın, Zencefil, Karamel, Bal, Portakal'],
      ['Gri', 'Duman, Gölge, Kül, Misket, Gümüş, Fırtına'],
      ['Tekir, çizgili', 'Tekir, Kaplan, Zebra, Mırmır, Çizgi'],
      ['Üç renkli', 'Alaca, Benek, Pati, Lokum, Şeker'],
    ]},

    { kind: 'baslik', metin: 'Yiyecek, doğa ve mitoloji isimleri' },
    { kind: 'paragraf', metin: 'Yiyecek isimleri kedi sahipleri arasında en sevilen gruplardan biridir; sevimli ve akılda kalıcıdırlar. Doğa ve mitoloji isimleri ise daha zarif bir seçenek sunar.' },
    { kind: 'liste', maddeler: [
      '**Yiyecek:** Fıstık, Badem, Fındık, Lokum, Kurabiye, Gofret, Sütlaç, Kestane, Çörek, Mantı',
      '**Doğa:** Bulut, Yağmur, Deniz, Papatya, Lale, Rüzgar, Ay, Güneş, Orman, Yaprak',
      '**Mitoloji ve edebiyat:** Athena, Zeus, Apollo, Artemis, Luna, Merlin, Odin, Freya',
      '**Gökyüzü:** Yıldız, Ay, Venüs, Jüpiter, Satürn, Mars, Kuyruklu Yıldız',
    ]},

    { kind: 'baslik', metin: 'Komik ve sıra dışı kedi isimleri' },
    { kind: 'paragraf', metin: 'Bazı sahipler kedisinin karakterine uygun esprili bir isim seçmeyi seviyor. Komik isimler evde gülümsetir, ama kliniğin bekleme salonunda da yüksek sesle söyleneceğini akılda tutmak iyi olur.' },
    { kind: 'liste', maddeler: [
      'Profesör, Kont, Baron, Şef, Patron, Müdür',
      'Pijama, Terlik, Çorap, Yastık, Battaniye',
      'Turşu, Köfte, Börek, Simit, Pide, Dürüm',
      'Pıtırcık, Fırfır, Zıpzıp, Uykucu, Mızmız',
    ]},

    { kind: 'baslik', metin: 'Kediler adlarını gerçekten tanıyor' },
    { kind: 'paragraf', metin: 'Tokyo Üniversitesi\'nden Atsuko Saito ve ekibi 2019\'da Scientific Reports\'ta kedilerin kendi adlarını tanıyıp tanımadığını sınadı. Kedilere önce dört sıradan kelime ya da evdeki diğer kedilerin adları art arda dinletildi, ardından kendi adları. Evde yaşayan kediler bu kelimelere alıştıktan sonra kendi adlarını duyduklarında belirgin biçimde yeniden tepki verdi. Sıradan kelimelerle yapılan denemede bu ayrım, adı kedinin tanımadığı biri söylediğinde de görüldü.' },
    { kind: 'paragraf', metin: 'Kedi kafelerinde yaşayan kediler ise kendi adlarını sıradan kelimelerden ayırdı ama aynı kafedeki diğer kedilerin adlarından ayıramadı. Bu bulgunun pratik bir karşılığı var: evde birden fazla kedi varsa, birbirine benzeyen isimler seçmemek (Mimi ve Mini gibi) kedilerin adlarını ayırmasını kolaylaştırabilir. Kedilerin sahiplerini sesinden ve yüzünden tanıyıp tanımadığını [[kediler-sahibini-tanir-mi|kediler sahibini tanır mı]] yazımızda ayrıca ele aldık.' },
    { kind: 'yanilgi', baslik: '"Kediler isimlerini bilmez, sadece sesin tonuna gelir"', metin: 'Tokyo Üniversitesi\'nin çalışmasında kediler adlarını yabancı biri söylediğinde bile sıradan kelimelerden ayırt etti. Araştırmacılara göre kediler insan sözlerini ses farklarına göre ayırabiliyor; ad bir ton değil, tanınan bir kelimedir.' },

    { kind: 'baslik', metin: 'Kedinin adını öğrenmesi için ipuçları' },
    { kind: 'liste', maddeler: [
      'Adı her seferinde aynı biçimde söylemek; lakaplarla karıştırmamak',
      'Adı güzel anlarla eşleştirmek: mama, oyun, sevgi',
      'Adı azarlarken ya da istenmeyen bir şey yaparken kullanmamak',
      'Kedi adını duyup size döndüğünde onu ödüllendirmek',
      'Evdeki diğer hayvanların adına benzemeyen bir isim seçmek',
    ]},
    { kind: 'paragraf', metin: 'Kedi adını duyduğunda koşup gelmeyebilir; bu onun tanımadığı anlamına gelmez. Kediler sese çoğu zaman kulaklarını ve başlarını çevirerek tepki veriyor. Yeni gelen bir kediyle ilk günlerde nasıl bağ kurulacağını [[yeni-kedi-eve-alisma|eve yeni gelen kedi]] yazımızda anlattık.' },
    { kind: 'yanilgi', baslik: '"Yetişkin kedinin adı değiştirilemez"', metin: 'Barınaktan ya da sokaktan alınan yetişkin bir kediye yeni bir ad verilebilir. Adı tutarlı biçimde ve güzel anlarla birlikte kullanmak, yeni adın zamanla benimsenmesini sağlar. Önceki adı biliniyorsa ona benzeyen bir isim seçmek geçişi kolaylaştırabilir.' },

    { kind: 'baslik', metin: 'İsim kadar kimlik de önemli' },
    { kind: 'paragraf', metin: 'Kedinize bir isim verdiğinizde onu kayıt altına almayı da unutmamak gerekiyor. Türkiye\'de kedi ve köpeklerin mikroçiple kimliklendirilip kayıt altına alınması zorunlu. Kayıt sırasında kedinin adı da sisteme işleniyor ve kaybolması durumunda sahibine ulaşılmasını sağlıyor. Ayrıntıları [[mikrocip-nedir|mikroçip nedir]] ve [[petvet-kayit|PETVET kaydı]] yazılarımızda anlattık.' },
  ],
  kontrolListesi: [
    'İsim bir ya da iki heceli mi?',
    'Evdeki kelimelere benziyor mu?',
    'Diğer hayvanın adına benziyor mu?',
    'Adı herkes aynı söylüyor mu?',
    'Mikroçip kaydı yapıldı mı?',
  ],
  sss: [
    { soru: 'Kediler isimlerini bilir mi?', cevap: 'Evet. Tokyo Üniversitesi\'nin 2019 tarihli çalışmasında evde yaşayan kediler kendi adlarını sıradan kelimelerden ve evdeki diğer kedilerin adlarından ayırt etti; sıradan kelimelerle yapılan denemede adı yabancı biri söylediğinde bile. Kedi kafesindeki kediler ise kendi adlarını diğer kedilerin adlarından ayıramadı.' },
    { soru: 'Kediye nasıl isim konur?', cevap: 'Kısa, kolay söylenen ve evde sık kullanılan kelimelere ya da diğer hayvanların adına benzemeyen bir isim seçmek iyi bir başlangıçtır. Kedinin rengi, deseni, karakteri ya da sevdiğiniz bir yiyecek ilham kaynağı olabilir. Adı hep aynı biçimde kullanmak öğrenmeyi kolaylaştırır.' },
    { soru: 'Dişi kediye hangi isim konur?', cevap: 'Dişi kediler için Minnoş, Pamuk, Fındık, Bal, Duman, Luna, Mia, Zeytin, Lokum, Tarçın ve Nazlı gibi yumuşak sesli ve kısa isimler sık tercih ediliyor. Kedinin rengine ya da karakterine uygun bir isim de iyi bir seçimdir.' },
    { soru: 'Erkek kediye hangi isim konur?', cevap: 'Erkek kediler için Paşa, Tarçın, Fıstık, Leo, Simba, Duman, Sarman, Kömür, Boncuk ve Milo gibi kısa ve akılda kalıcı isimler sık tercih ediliyor. Sakin bir kediye "Paşa", hareketli bir kediye "Fırtına" gibi karakterine uygun isimler de yakışır.' },
    { soru: 'Sarı kediye ne isim konur?', cevap: 'Sarı ya da turuncu kediler için Sarman, Tarçın, Zencefil, Karamel, Bal ve Portakal gibi rengini çağrıştıran isimler sık seçiliyor. Türkçede sarman zaten sarı tüylü kediler için kullanılan bir sözcüktür.' },
    { soru: 'Kedinin adı sonradan değiştirilebilir mi?', cevap: 'Evet. Barınaktan ya da sokaktan alınan yetişkin bir kediye de yeni bir ad verilebilir. Yeni adı tutarlı biçimde ve mama, oyun gibi güzel anlarla birlikte kullanmak, zamanla benimsenmesini sağlar.' },
  ],
  kaynaklar: [
    {
      kurum: 'The University of Tokyo, Graduate School of Arts and Sciences',
      yazarlar: 'Saito A, Shinozuka K, Ito Y, Hasegawa T',
      baslik: 'Domestic cats (Felis catus) discriminate their names from other words',
      dergi: 'Scientific Reports',
      yil: 2019,
      kunye: '9(1):5394',
      doi: '10.1038/s41598-019-40616-4',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/30948740/',
    },
  ],
};
