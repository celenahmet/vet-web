import type { BlogYazi } from './types';

export const kucukKopekIrklari: BlogYazi = {
  slug: 'kucuk-kopek-irklari',
  baslik: 'Küçük Köpek Irkları ve Özellikleri',
  ozet: 'Chihuahua, Yorkshire Terrier ve Maltese gibi küçük köpek ırklarının standart ölçüleri, huyları, ömürleri ve ağız ile soluk borusu sağlığı bu yazıda.',
  kapakAlt:
    'Halıda oyuncakların arasında yan yana duran üç küçük köpek',
  kategori: 'Köpek',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Küçük köpek ırklarının en küçükleri, uluslararası ırk standartlarına göre Chihuahua için 1 ile 3 kg, Yorkshire Terrier için en çok 3,2 kg, Maltese için 3 ile 4 kg arasında bir ağırlığa sahip.** Ama küçük beden, küçük bakım ihtiyacı demek değil: ABD\'de 3 milyondan fazla klinik kaydın incelendiği bir çalışmada 6,5 kg altındaki çok küçük ırklar, dev ırklara göre diş eti hastalığı tanısını beş kata kadar daha sık aldı.' },
    { kind: 'paragraf', metin: 'Aşağıda üç yaygın küçük ırkın dünya köpekçilik federasyonu FCI standartlarındaki ölçülerini ve huy tariflerini, küçük köpeklerin ömrüne dair bilimsel bulguyu, ağız sağlığı ile soluk borusu konularında çalışmaların söylediğini ve küçük bir köpeği olan ya da almayı düşünen birinin neye bakması gerektiğini bulacaksınız. Tek bir ırkı ayrıntılı anlatan yazı arıyorsanız [[pomeranian|Pomeranian]] yazımıza bakabilirsiniz.' },

    { kind: 'tablo', basliklar: ['Irk', 'FCI sınıfı', 'Standarttaki ölçü', 'Standarttaki huy'], satirlar: [
      ['Chihuahua', 'Grup 9, Refakat ve Toy köpekleri', '1 ile 3 kg, ideal 1,5 ile 2,5 kg; boy değerlendirilmiyor', 'Çevik, tetikte, canlı, çok cesur'],
      ['Yorkshire Terrier', 'Grup 3, Teriyerler (Toy Teriyerler bölümü)', 'En çok 3,2 kg', 'Uyanık, zeki, canlı; mizacı dengeli'],
      ['Maltese', 'Grup 9, Refakat ve Toy köpekleri', 'Erkek 21-25 cm, dişi 20-23 cm; 3 ile 4 kg', 'Canlı, sevecen, çok sakin, çok zeki'],
    ]},

    { kind: 'baslik', metin: 'Küçük köpek neye denir?' },
    { kind: 'paragraf', metin: 'Bu yazıdaki çalışmalar kendi boyut sınıflarını kullanıyor. Ağız sağlığı çalışmasında 6,5 kg altı "çok küçük", 6,5 ile 9 kg arası "küçük", 9 ile 15 kg arası "orta-küçük" sayıldı. Irk standartları ise ağırlığı ya da omuz yüksekliğini ırka özel biçimde veriyor; Chihuahua standardında yalnızca ağırlık dikkate alınıyor, boy hiç değerlendirilmiyor.' },
    { kind: 'paragraf', metin: 'Küçük olmak FCI\'da tek bir grup da anlamına gelmiyor. Chihuahua ve Maltese Grup 9\'da (Refakat ve Toy köpekleri), Yorkshire Terrier ise boyu küçük olsa da Grup 3\'te (Teriyerler) yer alıyor. Yani bir köpeğin küçük olması huyunu ya da kökenini belirlemiyor.' },

    { kind: 'baslik', metin: 'Üç yaygın küçük ırkın standartlardaki ölçüleri' },
    { kind: 'paragraf', metin: 'Chihuahua\'nın kökeni Meksika, Yorkshire Terrier\'in kökeni Büyük Britanya, Maltese\'nin kökeni ise standartta Orta Akdeniz Bölgesi olarak gösteriliyor. Chihuahua standardında 1 kg altı ve 3 kg üstü köpekler diskalifiye ediliyor; Maltese standardı ise erkeğin 21 ile 25 cm, dişinin 20 ile 23 cm boyunda olmasını bekliyor.' },
    { kind: 'paragraf', metin: 'Bu ölçüler standardın tarif ettiği ideal köpeği anlatıyor. Evdeki tek tek bir köpeğin sağlıklı kilosu yaşına, yapısına ve sağlık durumuna göre değişebilir ve bunu veteriner hekim belirler. Köpeğinizin kilosunun uygun olup olmadığını anlamak için [[kopegim-fazla-kilolu-mu|köpeğim fazla kilolu mu]] yazısına göz atılabilir.' },

    { kind: 'baslik', metin: 'Huy: standartlar ne söylüyor?' },
    { kind: 'paragraf', metin: 'Standartlar huyu birkaç sözcükle tarif ediyor. Chihuahua için "çevik, tetikte, canlı ve çok cesur", Yorkshire Terrier için "uyanık, zeki, ruhu canlı ve mizacı dengeli", Maltese için "canlı, sevecen, çok sakin ve çok zeki" ifadeleri kullanılıyor. Bunlar ırkın genel tarifidir; her köpeğin kişiliği ayrıca yetiştirilmesine ve yaşadıklarına bağlı.' },
    { kind: 'yanilgi', baslik: '"Küçük köpek sakindir, bakımı kolaydır"', metin: 'Standartlar bunu söylemiyor: Chihuahua için "çok cesur", Yorkshire Terrier için "canlı" ifadesi geçiyor. Bakım tarafında da tersi doğru: 3 milyondan fazla kaydın incelendiği çalışmada diş eti hastalığına en sık tanı konan ırklar çok küçük, küçük ve orta-küçük kategorilerdeydi. Küçük köpeğin ağız bakımı ve kilo takibi daha da önemli.' },

    { kind: 'baslik', metin: 'Küçük köpekler daha uzun mu yaşar?' },
    { kind: 'paragraf', metin: 'Eğilim küçük köpekler lehine. Max Planck Demografik Araştırma Enstitüsü\'nden Kraus ve ekibi 74 ırkın ölüm verisini inceledi; aynı tür içinde büyük bireylerin daha kısa yaşadığı görüldü ve araştırmacılar büyük köpeklerin öncelikle daha hızlı yaşlandığı için erken öldüğü sonucuna vardı. Köpek ırkları arasında ortalama yaşam süresi iki kat farklılık gösterebiliyor.' },
    { kind: 'paragraf', metin: 'Bu bir ortalama ve bireysel bir söz değil: küçük bir ırktan olmak tek başına uzun ömür garantisi vermiyor. Irka ve boya göre ömür aralıklarını [[kopekler-kac-yil-yasar|köpekler kaç yıl yaşar]] yazısında topladık.' },

    { kind: 'baslik', metin: 'Küçük ırklarda ağız sağlığı' },
    { kind: 'paragraf', metin: 'Wallis ve ekibi 2021\'de ABD\'deki bir veteriner hastane zincirine gelen köpeklerin beş yılda toplanan, 60 ırkı kapsayan 3 milyondan fazla tıbbi kaydını inceledi. 6,5 kg altındaki çok küçük ırklar dev ırklara (25 kg üzeri) göre diş eti hastalığı tanısını beş kata kadar daha sık aldı.' },
    { kind: 'paragraf', metin: 'Yaş, fazla kilo ve son diş taşı temizliğinden bu yana geçen süre de ek risk etkenleri olarak bulundu. Yazarlar veteriner hekimlerin diş sağlığı eğitimini ve tanı çabalarını küçük ırklara ve fazla kilolu köpeklere yöneltmesini öneriyor. Evde diş bakımı için [[kopek-disleri-nasil-fircalanir|köpek dişleri nasıl fırçalanır]] yazısı, diş durumunun muayenesi için veteriner hekim gerekiyor.' },

    { kind: 'baslik', metin: 'Soluk borusu çökmesi ve kilo' },
    { kind: 'paragraf', metin: 'Seul Ulusal Üniversitesi Veteriner Fakültesi\'nden Kim ve ekibi 2022 ile 2024 arasındaki kayıtlardan floroskopi (hareketli röntgen) ile soluk borusu çökmesi tanısı konmuş 110 küçük ırk köpeği inceledi. En sık görülen dört ırk Maltese, Pomeranian, Poodle ve Chihuahua\'ydı.' },
    { kind: 'paragraf', metin: 'Çalışmada çökmenin derecesi yüksek vücut kondisyon skoruyla ilişkili çıktı. Dikkat çeken bir bulgu da çökmenin yeri ve derecesinin öksürüğün şiddetini açıklamamasıydı. Bu yüzden tanıyı ve izlemeyi evde değil, veteriner hekim yapmalı.' },
    { kind: 'uyari', metin: 'Köpek uzun süredir öksürüyor, ağzından kötü koku geliyor, yemekte zorlanıyor ya da bir bacağını yere basmıyorsa nedenini evde tahmin etmek yerine veteriner hekime başvurulması gerekiyor. Bu yazı teşhis ya da tedavi yerine geçmez.' },

    { kind: 'baslik', metin: 'Küçük bir köpek seçerken ve bakarken' },
    { kind: 'liste', maddeler: [
      'İlgilendiğiniz ırkın FCI standardını okuyup huy tarifini ev düzeninizle karşılaştırmak önerilir',
      'Kiloyu düzenli tartıp sağlıklı hedefi veteriner hekimle belirlemek gerekiyor',
      'Ağız bakımını rutine koyup diş kontrolünü veteriner hekimle planlamak önerilir',
      'Aşı ve kontrol takvimini veteriner hekimle birlikte oluşturmak önerilir; ayrıntı için [[kopek-asi-takvimi|köpek aşı takvimi]] yazısına bakılabilir',
    ]},
  ],
  kontrolListesi: [
    'Irkın standardını okudum mu?',
    'Kilosunu düzenli tartıyor muyum?',
    'Ağız bakımı rutinde var mı?',
    'Diş kontrolü planlandı mı?',
    'Huyu yaşam düzenime uyuyor mu?',
  ],
  sss: [
    { soru: 'Chihuahua kaç kilo olur?', cevap: 'FCI standardına göre Chihuahua 1 ile 3 kg arasında olmalı, ideal ağırlık 1,5 ile 2,5 kg. Standartta yalnızca ağırlık dikkate alınıyor, boy değerlendirilmiyor. Bu ideal bir ırk tarifidir; tek bir köpeğin sağlıklı kilosunu veteriner hekim belirler.' },
    { soru: 'Yorkshire Terrier kaç kilo olur?', cevap: 'FCI standardında Yorkshire Terrier için ağırlık en çok 3,2 kg olarak veriliyor. Irk boyu küçük olmasına rağmen Grup 3\'te, yani teriyerler arasında sınıflandırılıyor ve standart huyunu "uyanık, zeki, ruhu canlı" diye tarif ediyor.' },
    { soru: 'Maltese ne kadar büyür?', cevap: 'FCI standardına göre erkek Maltese 21 ile 25 cm, dişi 20 ile 23 cm boyunda olur ve ağırlığı 3 ile 4 kg arasındadır. Standart ırkın huyunu canlı, sevecen, çok sakin ve çok zeki olarak tarif ediyor; bu genel bir tariftir.' },
    { soru: 'Küçük köpekler daha uzun yaşar mı?', cevap: 'Genel eğilim evet. 74 ırkın ölüm verisini inceleyen bir çalışma, büyük köpeklerin daha hızlı yaşlandığı için erken öldüğü sonucuna vardı. Bu bir ortalamadır; tek bir köpeğin ömrü kalıtıma, kiloya ve veteriner bakımına göre değişir.' },
    { soru: 'Küçük ırklarda diş sorunu daha mı sık?', cevap: 'Kayıtlar öyle gösteriyor. ABD\'de 3 milyondan fazla klinik kaydın incelendiği çalışmada 6,5 kg altındaki ırklar dev ırklara göre diş eti hastalığı tanısını beş kata kadar daha sık aldı. Fazla kilo da riski artıran etkenlerdendi.' },
    { soru: 'Küçük ırk köpek sakin midir?', cevap: 'Hayır, bu bir genelleme olur. Irk standartları Chihuahua için "çok cesur", Yorkshire Terrier için "canlı" ifadesini kullanıyor; Maltese için ise "çok sakin" geçiyor. Huy ırka ve köpeğin kendi kişiliğine göre değişir.' },
    { soru: 'Küçük köpekte kilo neden önemli?', cevap: 'Fazla kilo hem diş eti hastalığı tanısı riskiyle hem de soluk borusu çökmesinin daha ağır derecesiyle ilişkili bulundu. Yüksek vücut kondisyon skoru, Seul\'daki 110 köpeklik çalışmada çökmenin derecesiyle bağlantılı çıktı.' },
  ],
  kaynaklar: [
    {
      kurum: 'Fédération Cynologique Internationale (FCI)',
      baslik: 'FCI-Standard N° 218: Chihuahueño (Chihuahua)',
      yil: 2019,
      adres: 'https://www.fci.be/Nomenclature/Standards/218g09-en.pdf',
    },
    {
      kurum: 'Fédération Cynologique Internationale (FCI)',
      baslik: 'FCI-Standard N° 86: Yorkshire Terrier',
      yil: 2026,
      adres: 'https://www.fci.be/Nomenclature/Standards/086g03-en.pdf',
    },
    {
      kurum: 'Fédération Cynologique Internationale (FCI)',
      baslik: 'FCI-Standard N° 65: Maltese',
      yil: 2015,
      adres: 'https://www.fci.be/Nomenclature/Standards/065g09-en.pdf',
    },
    {
      kurum: 'Max Planck Institute for Demographic Research',
      yazarlar: 'Kraus C, Pavard S, Promislow DE',
      baslik: 'The size-life span trade-off decomposed: why large dogs die young',
      dergi: 'The American Naturalist',
      yil: 2013,
      kunye: '181(4):492-505',
      doi: '10.1086/669665',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/23535614/',
    },
    {
      kurum: 'Waltham Petcare Science Institute · Banfield Pet Hospital',
      yazarlar: 'Wallis C, Saito EK, Salt C, Holcombe LJ, Desforges NG',
      baslik: 'Association of periodontal disease with breed size, breed, weight, and age in pure-bred client-owned dogs in the United States',
      dergi: 'The Veterinary Journal',
      yil: 2021,
      kunye: '275:105717',
      doi: '10.1016/j.tvjl.2021.105717',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34293444/',
    },
    {
      kurum: 'Seoul National University, College of Veterinary Medicine',
      yazarlar: 'Kim MR, Kim SH, Ryu MO, Youn HY, Choi JH, Seo KW',
      baslik: 'A retrospective study of tracheal collapse in small-breed dogs: 110 cases (2022-2024)',
      dergi: 'Frontiers in Veterinary Science',
      yil: 2024,
      kunye: '11:1448249',
      doi: '10.3389/fvets.2024.1448249',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/39205804/',
    },
  ],
};
