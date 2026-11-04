import type { BlogYazi } from './types';

export const chihuahua: BlogYazi = {
  slug: 'chihuahua',
  baslik: 'Chihuahua: Özellikleri ve Bakımı',
  ozet: 'Chihuahua, FCI standardına göre 1-3 kg arasında olan Meksika kökenli bir mini ırk. Bakımda diş, diz kapağı ve kilo en çok dikkat isteyen konular.',
  kapakAlt:
    'Salonda halının üstünde duran açık kahverengi chihuahua',
  kategori: 'Köpek',
  tarih: '2026-11-10',
  bloklar: [
    { kind: 'paragraf', metin: '**Chihuahua, Meksika kökenli, FCI standardına göre 1 ile 3 kg arasında olması beklenen, hareketli ve gözü pek bir mini ırktır.** Bakımı küçük boyu kadar kolay değildir: İngiltere\'deki klinik kayıtlarında en sık görülen sorunlar diş eti hastalığı, obezite ve süt dişlerinin düşmemesi olarak öne çıkıyor. Diz kapağı sorunları da ırkta sık görülüyor.' },
    { kind: 'paragraf', metin: 'Aşağıda ırkın kökenini, standardındaki boy ve kilo ölçüsünü, mizacını ve veteriner kayıtlarında öne çıkan sağlık konularını hakemli çalışmalara dayanarak anlatıyoruz. Sağlık sorunu şüphesinde tanı ve tedavi için veteriner hekime başvurmak gerekiyor.' },

    { kind: 'tablo', basliklar: ['Özellik', 'FCI standardına göre'], satirlar: [
      ['Köken', 'Meksika'],
      ['Grup', 'Eşlik ve oyuncak köpekler (Grup 9)'],
      ['Kilo', '1-3 kg, ideal 1,5-2,5 kg'],
      ['Tüy çeşidi', 'Kısa tüylü ve uzun tüylü'],
      ['Renk', 'Merle dışındaki tüm renkler'],
      ['Mizaç', 'Çevik, uyanık, hareketli ve çok gözü pek'],
    ]},

    { kind: 'baslik', metin: 'Chihuahua nereden geliyor?' },
    { kind: 'paragraf', metin: 'Irkın standardını yayımlayan Uluslararası Köpekbilimi Federasyonu (FCI), Chihuahua\'yı dünyanın en küçük safkan köpeği olarak tanımlıyor. Irk adını Meksika Cumhuriyeti\'nin en büyük eyaleti Chihuahua\'dan alıyor. Standartta Toltek uygarlığı döneminde yerlilerin bu köpekleri yakalayıp evcilleştirdiği varsayılıyor ve Tula\'daki yapıları süsleyen «Techichi» adlı oyuncak köpek betimlemelerinin bugünkü Chihuahua\'ya çok benzediği belirtiliyor.' },
    { kind: 'paragraf', metin: 'FCI ırkı eşlik ve oyuncak köpekler grubunda sınıflandırıyor ve kullanım amacını "eşlik köpeği" olarak yazıyor. Yani Chihuahua çalışma için değil, insanın yanında yaşamak için yetiştirilmiş bir ırktır.' },

    { kind: 'baslik', metin: 'Boy, kilo ve görünüm' },
    { kind: 'paragraf', metin: 'Standartta bu ırk için boy ölçülmüyor, yalnızca kilo dikkate alınıyor. Beklenen ağırlık 1 ile 3 kg arasında, ideal ağırlık ise 1,5 ile 2,5 kg arasındadır. Standart, 1 kg\'ın altındaki ve 3 kg\'ın üstündeki köpeklerin yarışmalarda diskalifiye edileceğini belirtiyor. Bu ölçü sergi standardıdır; evdeki bir köpeğin sağlığını tek başına belirlemez.' },
    { kind: 'paragraf', metin: 'Elma biçimli yuvarlak bir kafa, ırkın en belirgin özelliği olarak kabul ediliyor. Kulaklar büyük ve dik, kuyruk yüksekte taşınıyor. İki tüy çeşidi var: kısa, yapışık ve parlak tüylü olanlar ile ince, ipeksi ve hafif dalgalı tüylü olanlar. Tüm renkler kabul ediliyor, merle renk dışında.' },
    { kind: 'yanilgi', baslik: '"Ne kadar küçükse o kadar makbul"', metin: 'FCI standardı 1 kg\'ın altındaki köpekleri de, 3 kg\'ın üstündekileri de diskalifiye ediyor. Ayrıca standart, belirgin fiziksel anormallik gösteren köpekleri ve fontanelin (kafatasındaki yumuşak nokta) açık kaldığı köpekleri de kabul etmiyor. Aşırı küçüklük bir değer değil, ayrı bir sağlık konusudur.' },
    { kind: 'paragraf', metin: 'Gerçek hayattaki kilolar standarttan farklı olabiliyor. İngiltere\'de birinci basamak kliniklere başvuran 11.647 Chihuahua\'nın kayıtlarında yetişkin köpeklerin ortanca ağırlığı 3,4 kg, aralık ise 0,8 ile 9,8 kg olarak bulundu. Bu veri sergi köpeklerini değil, kliniğe gelen köpekleri temsil ediyor.' },

    { kind: 'baslik', metin: 'Mizaç: küçük bedende büyük özgüven' },
    { kind: 'paragraf', metin: 'FCI standardı mizacı "çevik, uyanık, hareketli ve çok gözü pek" diye tarif ediyor. Aşırı saldırgan ya da aşırı çekingen köpekler standartta diskalifiye nedeni sayılıyor. Yani tarif edilen ideal, kendinden emin ama saldırgan olmayan bir köpektir.' },
    { kind: 'paragraf', metin: 'Gerçek kayıtlar bu ideale her zaman uymuyor. İngiltere\'deki çalışmada saldırganlık, Chihuahualarda en sık kaydedilen beş sorundan biriydi ve köpeklerin %4,2\'sinde bulundu; erkeklerde dişilerden istatistiksel olarak daha olasıydı. Araştırmacılar, deneyimsiz sahiplerin ani bir istekle yavru alması nedeniyle oluşabilecek refah sorunlarına dikkat çekiyor. Küçük boy, eğitimi ve sosyalleşmeyi gereksiz kılmıyor.' },

    { kind: 'baslik', metin: 'Kayıtlarda en sık görülen sağlık konuları' },
    { kind: 'paragraf', metin: 'Royal Veterinary College\'ın VetCompass programı kapsamındaki çalışma, 2016 yılında İngiltere\'deki birinci basamak kliniklerde görülen Chihuahua kayıtlarını inceledi. Tüm köpeklerin %3,46\'sını Chihuahua oluşturuyordu. Irkın yıllık doğum oranı 2005\'te %1,01 iken 2016\'da %5,35\'e yükselmişti.' },
    { kind: 'tablo', basliklar: ['Kaydedilen sorun', 'Chihuahualarda oran'], satirlar: [
      ['Diş eti hastalığı', '%13,5'],
      ['Obezite', '%5,9'],
      ['Süt dişlerinin düşmemesi', '%5,7'],
      ['Anal bez tıkanıklığı', '%4,9'],
      ['Saldırganlık', '%4,2'],
    ]},
    { kind: 'paragraf', metin: 'Çalışmada ölüm nedenleri arasında kalp hastalığı (%18,8), alt solunum yolu hastalıkları (%16,3) ve travmatik yaralanmalar (%13,8) ilk üç sırada yer aldı. Çalışmadaki ortanca ölüm yaşı 8,2 yıl bulundu; ancak araştırmacılar bunun genç ve hızla büyüyen bir nüfus olduğunu belirtiyor, bu nedenle rakam ırkın yaşam beklentisi olarak okunmamalıdır. Irkın ömrü için [[kopekler-kac-yil-yasar|köpekler kaç yıl yaşar]] yazımıza bakılabilir.' },

    { kind: 'baslik', metin: 'Diş sağlığı en önemli bakım konusu' },
    { kind: 'paragraf', metin: 'Chihuahualarda diş eti hastalığı sorun listesinin başında geliyor. Amerika\'da 60 ırkta 3 milyondan fazla kaydı inceleyen bir çalışmada, çok küçük ırkların (6,5 kg altı) diş eti hastalığı tanısı alma olasılığı dev ırklara (25 kg üstü) göre beş kata kadar yüksek bulundu. Yaş, fazla kilo ve son diş temizliğinden bu yana geçen süre de risk etkenleri arasındaydı.' },
    { kind: 'paragraf', metin: 'Aynı araştırma grubunun başka bir çalışmasında çok küçük ırklarda süt dişlerinin zamanında düşmemesi %15 oranında görüldü; tüm köpeklerde bu oran %7 idi. Düşmeyen süt dişleri çene kapanışında bozukluğa, yumuşak doku yaralanmasına ve diş eti hastalığı riskinde artışa yol açabiliyor. Bu yüzden düzenli veteriner muayenesi önerilir.' },
    { kind: 'paragraf', metin: 'Ağız bakımının nasıl yapılacağı için [[kopek-disleri-nasil-fircalanir|köpek dişleri nasıl fırçalanır]] yazısına bakılabilir. Ağız ve dişlerle ilgili bir sorun şüphesinde nedeni tahmin etmek yerine veteriner hekime başvurmak gerekiyor.' },
    { kind: 'yanilgi', baslik: '"Küçük köpeğin bakımı da küçüktür"', metin: 'Küçük ırklar diş eti hastalığına ve süt dişi sorunlarına daha sık yakalanıyor. Amerika çalışmasının yazarları, veteriner hekimlerin diş sağlığı bilgilendirmesini özellikle küçük ırk köpeklere yöneltmesini öneriyor.' },

    { kind: 'baslik', metin: 'Diz kapağı sorunları' },
    { kind: 'paragraf', metin: 'Diz kapağı çıkığı (patellar luksasyon), köpeklerde en sık görülen ortopedik sorunlardan biri ve topallamaya, eklem iltihabına ve ağrıya yol açabiliyor. İngiltere\'de 210.824 köpeği kapsayan bir çalışmada tanı oranı %1,30 bulundu. Melez köpeklerle karşılaştırıldığında Chihuahuada tanı olasılık oranı 5,9 bulundu; Pomeranian (6,5) ve Yorkshire Terrier (5,5) de aynı gruptaydı.' },
    { kind: 'paragraf', metin: 'Ayrıca cins ve cinsiyet ortalamasının altında kilodaki köpeklerde tanı olasılığı 1,4 kat daha yüksekti. Chihuahua topallıyorsa nedenine ve nasıl yönetileceğine veteriner hekim muayene ile karar verir; evde müdahale edilmesi önerilmez.' },

    { kind: 'baslik', metin: 'Kilo ve beslenme' },
    { kind: 'paragraf', metin: 'Kilo takibi bu ırkta önemlidir. Obezite Chihuahualarda kayıtlı ikinci en sık sorundu (%5,9) ve diş eti hastalığı için de fazla kilo risk etkenlerinden biri olarak bulunmuştu.' },
    { kind: 'paragraf', metin: 'Köpeğin ideal kilosunda olup olmadığını anlamak için [[kopegim-fazla-kilolu-mu|köpeğim fazla kilolu mu]] yazısındaki kontrollere bakılabilir. Yavru döneminde mama miktarı için [[yavru-kopek-ne-kadar-mama-yemeli|yavru köpek ne kadar mama yemeli]] yazısı, genel bakım için [[yavru-kopek-bakimi|yavru köpek bakımı]] yazısı yol gösterir. Kesin miktarı ve mama seçimini köpeğin kilosuna göre veteriner hekim belirler.' },

    { kind: 'baslik', metin: 'Sahiplenmeden önce ve sonra' },
    { kind: 'liste', maddeler: [
      'Dişleri ve diş etlerini düzenli olarak veteriner hekime kontrol ettirmek',
      '[[kopek-asi-takvimi|Köpek aşı takvimini]] veteriner hekimle birlikte planlamak',
      'Kilo takibini düzenli ölçümle yapmak, tahmin etmemek',
      'Diz kapağı sorunlarında şüphe varsa ortopedik muayene yaptırmak',
      'Anestezi ve diş işlemleri için mini ırklarda deneyimli bir klinik tercih etmek',
    ]},
    { kind: 'paragraf', metin: 'İngiltere çalışmasının yazarları mini ırklarda veteriner hekimlerin anestezi ve diş hekimliği konusunda ek eğitim almasının değerli olabileceğini belirtiyor. Anestezi gerektirecek bir işlem planlanıyorsa kliniğin küçük ırk deneyimini sormak mantıklıdır.' },

    { kind: 'uyari', metin: 'Topallama, yemek yemeyi bırakma ya da ağız ve dişlerde bir sorun şüphesinde sebep evde tahmin edilmemeli; veteriner hekime başvurulmalıdır. Yazıdaki oranlar kayıtlardan alınan toplum verisidir; tek bir köpeğin durumu için tanı yerine geçmez.' },
  ],
  kontrolListesi: [
    'Dişleri veterinerde kontrol edildi mi?',
    'Güncel kilosu ölçülüyor mu?',
    'Topallama var mı?',
    'Aşı takvimi güncel mi?',
    'Süt dişleri zamanında düştü mü?',
    'Anestezi için klinik deneyimli mi?',
  ],
  sss: [
    { soru: 'Chihuahua kaç kilo olur?', cevap: 'FCI standardına göre Chihuahua 1 ile 3 kg arasında olmalı, ideal ağırlık 1,5 ile 2,5 kg arasındadır. Bu ölçü sergi standardıdır. İngiltere\'de kliniklere gelen yetişkin Chihuahualarda ortanca ağırlık 3,4 kg bulundu, yani gerçek hayatta kilolar daha yüksek olabiliyor.' },
    { soru: 'Chihuahua hangi ülkenin ırkı?', cevap: 'Chihuahua Meksika kökenli bir ırktır. Adını Meksika Cumhuriyeti\'nin en büyük eyaleti Chihuahua\'dan alıyor. FCI, ırkın standardında Meksika\'yı köken ülke olarak gösteriyor ve onu dünyanın en küçük safkan köpeği olarak tanımlıyor.' },
    { soru: 'Chihuahua tüy döker mi, kaç çeşidi var?', cevap: 'Standartta iki tüy çeşidi tanımlanıyor: kısa tüylü ve uzun tüylü. Kısa tüylü olanlarda tüy yapışık, parlak ve yumuşak, uzun tüylülerde ince, ipeksi ve hafif dalgalıdır. Tüy dökülmesinin miktarı konusunda standartta bir bilgi yok; aşırı tüy kaybında veteriner hekime başvurulmalı.' },
    { soru: 'Chihuahualarda en sık hangi sağlık sorunları görülür?', cevap: 'İngiltere kayıtlarında en sık görülen sorunlar diş eti hastalığı (%13,5), obezite (%5,9), düşmeyen süt dişleri (%5,7), anal bez tıkanıklığı (%4,9) ve saldırganlıktı. Ayrıca diz kapağı çıkığı bu ırkta melezlere göre belirgin biçimde daha sık tanılanıyor.' },
    { soru: 'Chihuahua çocuklu eve uygun mu?', cevap: 'Bunu tek başına ırk belirlemez. Standart ırkı çevik ve gözü pek diye tanımlıyor; İngiltere kayıtlarında ise ölüm nedenleri arasında travmatik yaralanma da (%13,8) üçüncü sıradaydı. Sahiplenme kararını ve çocukla etkileşim kurallarını veteriner hekimle konuşmak önerilir.' },
    { soru: 'Chihuahua kaç yıl yaşar?', cevap: 'Ömür tek bir sayıya indirilemez. İngiltere çalışmasındaki ortanca ölüm yaşı 8,2 yıl olsa da araştırmacılar bunun genç bir nüfustan geldiğini belirtiyor ve bu değeri yaşam beklentisi olarak sunmuyor. Genel ırk ömürleri için köpekler kaç yıl yaşar yazısına bakılabilir.' },
  ],
  kaynaklar: [
    {
      kurum: 'Fédération Cynologique Internationale (FCI)',
      baslik: 'FCI Breed Standard N° 218: Chihuahueño (Chihuahua)',
      yil: 2019,
      adres: 'https://www.fci.be/Nomenclature/Standards/218g09-en.pdf',
    },
    {
      kurum: 'Royal Veterinary College, VetCompass Programme',
      yazarlar: 'O\'Neill DG, Packer RMA, Lobb M, Church DB, Brodbelt DC, Pegram C',
      baslik: 'Demography and commonly recorded clinical conditions of Chihuahuas under primary veterinary care in the UK in 2016',
      dergi: 'BMC Veterinary Research',
      yil: 2020,
      kunye: '16(1):42',
      doi: '10.1186/s12917-020-2258-1',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/32046714/',
    },
    {
      kurum: 'Royal Veterinary College, VetCompass Programme',
      yazarlar: 'O\'Neill DG, Meeson RL, Sheridan A, Church DB, Brodbelt DC',
      baslik: 'The epidemiology of patellar luxation in dogs attending primary-care veterinary practices in England',
      dergi: 'Canine Genetics and Epidemiology',
      yil: 2016,
      kunye: '3:4',
      doi: '10.1186/s40575-016-0034-0',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/27280025/',
    },
    {
      kurum: 'Waltham Petcare Science Institute, Banfield Pet Hospital',
      yazarlar: 'Wallis C, Saito EK, Salt C, Holcombe LJ, Desforges NG',
      baslik: 'Association of periodontal disease with breed size, breed, weight, and age in pure-bred client-owned dogs in the United States',
      dergi: 'The Veterinary Journal',
      yil: 2021,
      kunye: '275:105717',
      doi: '10.1016/j.tvjl.2021.105717',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34293444/',
    },
    {
      kurum: 'Waltham Petcare Science Institute, Hasselt University',
      yazarlar: 'Wallis C, Ivanova A, Holcombe LJ',
      baslik: 'Persistent deciduous teeth: Association of prevalence with breed, breed size and body weight in pure-bred client-owned dogs in the United States',
      dergi: 'Research in Veterinary Science',
      yil: 2024,
      kunye: '169:105161',
      doi: '10.1016/j.rvsc.2024.105161',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/38309195/',
    },
  ],
};
