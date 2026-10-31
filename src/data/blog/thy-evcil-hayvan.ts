import type { BlogYazi } from './types';

export const thyEvcilHayvan: BlogYazi = {
  slug: 'thy-evcil-hayvan',
  baslik: 'THY Evcil Hayvan Kuralları 2026: Kabin ve Ücret',
  ozet: 'THY\'de kabinde 8 kilo ve 23 x 30 x 40 cm sınırı, çanta başına ücret, yaş ve ırk kısıtları, rezervasyon ve belgeler. Türk Hava Yolları kurallarıyla.',
  kapakAlt:
    'Havalimanında uçak penceresinin önünde kabin çantasındaki kedi',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Türk Hava Yolları\'nda kedi, köpek, muhabbet kuşu ve kanarya, taşıma çantasıyla birlikte en çok 8 kilo ve çanta en çok 23 x 30 x 40 cm ise kabinde yolcuyla uçabiliyor; daha ağır hayvanlar uçak altında, kafesle birlikte en çok 50 kiloya kadar taşınıyor. Evcil hayvan ücretsiz bagaj hakkına dahil değil, ayrıca ücretlendiriliyor; kabin için 0-8 kilo tek kategori, tutar ise rotaya göre değişiyor ve THY\'nin ücret hesaplama sayfasından öğreniliyor.**' },
    { kind: 'paragraf', metin: 'Bu yazıda yalnız THY\'nin kendi koşullarını ayrıntılı anlatıyoruz: ücretin nasıl hesaplandığı, rezervasyon ve koltuk kuralları, yaş ve ırk kısıtları, belgeler. THY ile Pegasus\'u yan yana karşılaştıran genel rehber için [[evcil-hayvanla-ucak-yolculugu|evcil hayvanla uçak yolculuğu]] yazısına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'THY\'de kabinde hangi hayvanlar uçabiliyor?' },
    { kind: 'paragraf', metin: 'THY\'nin satış kurallarına göre kabinde yolcuyla birlikte yalnız **kedi, köpek ve küçük ötücü kuşlar (muhabbet kuşu ve kanarya)** taşınabiliyor. Evcil hayvan hakkını yalnız bileti olan yolcu satın alabiliyor.' },
    { kind: 'liste', maddeler: [
      '**Muhabbet kuşu ve kanarya:** Kabinde taşınabiliyor.',
      '**Papağan ve güvercin:** Uçak altında taşınıyor (CITES Ek-1 listesindekiler hariç).',
      '**Diğer küçük kuş türleri:** Kabine alınmıyor, Turkish Cargo ile taşınıyor.',
      '**Kuşla seyahat:** Kuşun uçuş sertifikasının gösterilmesi gerekiyor.',
    ] },

    { kind: 'baslik', metin: 'Kabin ve uçak altı için ağırlık ve çanta ölçüsü' },
    { kind: 'tablo', basliklar: ['', 'Kabinde (PETC)', 'Uçak altında (AVIH)'], satirlar: [
      ['Hayvan ve çanta birlikte', 'En çok 8 kg', 'En çok 50 kg'],
      ['Çanta ya da kafes ölçüsü', 'En çok 23 x 30 x 40 cm (yükseklik, genişlik, uzunluk)', 'En çok 75 x 75 x 125 cm'],
      ['Çanta türü', 'Sert ya da özel yumuşak yüzeyli çanta', 'Yalnız sert kafes; yumuşak çanta kabul edilmiyor'],
      ['Ölçü aşılırsa', '8 kiloyu ya da ölçüyü aşan hayvan uçak altına alınıyor', '75 x 75 x 125 cm\'yi aşan kafes Turkish Cargo ile taşınıyor'],
    ] },
    { kind: 'paragraf', metin: 'Çantanın üç yüzünde, hayvanın rahat nefes alabilmesi için 2,5 cm çapında delikler bulunması isteniyor. Çantanın su geçirmez olması ve hayvanın rahat yolculuk edebileceği büyüklükte olması gerekiyor. Uçuş boyunca çantanın kapağı ya da fermuarı kapalı kalıyor ve çanta öndeki koltuğun altına yerleştiriliyor.' },
    { kind: 'paragraf', metin: 'Birlikte yaşamaya alışkın, **aynı türden iki hayvan** (iki kedi, iki köpek ya da iki kuş) toplam 8 kilo aşılmamak koşuluyla kabinde aynı çantada taşınabiliyor.' },

    { kind: 'baslik', metin: 'THY evcil hayvan ücreti nasıl hesaplanıyor?' },
    { kind: 'paragraf', metin: 'Evcil hayvan taşıma ücretsiz bagaj hakkına dahil değil ve ek ücrete tabi. Ücret, hayvanın çantasıyla birlikte tartılan toplam ağırlığına göre belirlenen sabit bir tutar. THY ağırlığı şu kategorilere ayırıyor:' },
    { kind: 'tablo', basliklar: ['Kategori', 'Ağırlık (hayvan ve çanta)'], satirlar: [
      ['Kabin (PETC)', '0-8 kg, tek kategori'],
      ['Uçak altı, hafif (AVIH)', '0-23 kg'],
      ['Uçak altı, orta (AVIH)', '24-32 kg'],
      ['Uçak altı, ağır (AVIH)', '33 kg ve üzeri'],
    ] },
    { kind: 'paragraf', metin: 'Yurt dışı uçuşlarda ücret gidilen yere göre değişiyor; THY ödenecek tutarın **Evcil Hayvan Taşıma Ücreti Hesaplama** sayfasından öğrenilmesini istiyor. Bu yüzden bu yazıda tek bir tutar vermiyoruz: rotanın güncel ücreti bilet alırken o sayfadan hesaplanmalı. Ajet uçuşlarında ücret ve kurallar farklı olabiliyor.' },
    { kind: 'yanilgi', baslik: '"Çantada iki kedi varsa iki kat ücret ödenir"', metin: 'THY ücreti hayvan sayısına göre değil, **çanta başına** alıyor. Tek çantada iki kedi taşıyan yolcu, hayvan sayısı için değil çanta için ücret ödüyor; yine de toplam ağırlık kabin için 8 kiloyu aşmamalı.' },
    { kind: 'altBaslik', metin: 'Aktarmalı ve başka havayoluyla bağlantılı uçuşlar' },
    { kind: 'paragraf', metin: 'Aktarmalı yolculukta ücret, aktarma noktasından varış noktasına ayrıca hesaplanıyor ve iki bacağın toplamı ödeniyor. THY\'nin örneğine göre Frankfurt ile New York arasında kabinde taşınan bir hayvan için Frankfurt-İstanbul ücreti ile İstanbul-New York ücreti toplanıyor. Türkiye\'ye gelen, Türkiye\'den kalkan ya da aktarma yapan başka havayoluyla bağlantılı (interline) uçuşlarda THY tablosu kabin için +75 USD, uçak altındaki her ağırlık kategorisi için +150 USD gösteriyor.' },

    { kind: 'baslik', metin: 'Rezervasyon, koltuk ve kontenjan kuralları' },
    { kind: 'paragraf', metin: 'Evcil hayvan, bilet alındıktan sonra rezervasyon kodu (PNR) ile THY\'nin internet sitesinden ya da mobil uygulamasından rezervasyona eklenebiliyor. THY\'nin koşullarındaki başlıca kurallar şunlar:' },
    { kind: 'liste', maddeler: [
      '**Süre:** Evcil hayvan hakkı çevrim içi kanallardan kalkıştan 6 saat öncesine kadar alınabiliyor; rezervasyon yönetimi sayfasından ise uçuştan 24 saat öncesine kadar.',
      '**Koltuk:** Çevrim içi kanallardan alan yolcular yalnız standart pencere kenarı koltuklarda oturabiliyor. Bu yolculara ödeme adımında koltuk seçimi ücretsiz veriliyor; önceden ücretli koltuk alınmışsa o ücret iade edilmiyor.',
      '**Uygun olmayan koltuk:** Evcil hayvan taşımaya uygun olmayan bir koltuk almış yolcu, işlemi satış ofisi ya da çağrı merkezi üzerinden yapmak zorunda.',
      '**Kafes sayısı:** Yolcu başına en çok iki kafes kabul ediliyor; bunlardan yalnız biri kabinde olabiliyor, diğeri uçak altında taşınıyor.',
      '**Çevrim içi alamayanlar:** Refakatsiz çocuk ve bebek yolcular evcil hayvan hakkını çevrim içi kanallardan alamıyor. Ajet dışında birden fazla havayolunun işlettiği uçuşlarda da işlem satış ofisinden yapılıyor.',
      '**Check-in:** Kontuarda çevrim içi verilen bilgiler doğrulanıyor; bilgilerde uyumsuzluk çıkarsa hayvan uçuşa alınmayabiliyor. Bu yüzden havalimanına erken gelinmesi öneriliyor.',
    ] },

    { kind: 'baslik', metin: 'Yaş sınırı ve kabul edilmeyen ırklar' },
    { kind: 'paragraf', metin: 'THY **10 haftalıktan küçük ya da hâlâ anne sütü emen** yavru kedi ve köpekleri, emziren anne kedi ve köpekleri taşımıyor. 10 ile 12 haftalık yavrular ise ancak veteriner hekim onayıyla uçabiliyor. Kuduz aşısının en erken 12 haftalık yaşta yapılabildiği düşünülünce, yurt dışı yolculuklarında yaş sınırı pratikte daha da yukarı çıkabiliyor.' },
    { kind: 'altBaslik', metin: 'Basık burunlu (brakisefal) ırklar' },
    { kind: 'paragraf', metin: 'THY 1 Ekim 2021\'den bu yana solunum sorunu yaşayabilen kedi ve köpek ırklarının uçak altında taşınmasını kısıtlıyor. Birman, Exotic, Persian (İran kedisi), Himalaya, Burma, Scottish Fold ve British Shorthair gibi kediler ile Pug, Shih Tzu, Pekinez, French Bulldog, English Bulldog, Boston Terrier, Boxer, Chow Chow ve Shar Pei gibi köpekler, çantayla birlikte 8 kiloyu ve kabin çantası ölçüsünü aşmıyorsa kabinde yolcuyla uçabiliyor.' },
    { kind: 'paragraf', metin: 'Bu kısıtın arkasında somut bir risk var. ABD\'ye 2010-2018 arasında getirilen köpekleri inceleyen hakemli bir çalışmada, yolculukta hastalanma ya da ölüm brakisefal ırklarda yaklaşık 3,88 kat daha olası bulundu. Kargo olarak taşınma (yaklaşık 2,41 kat) ve kayıtlı bagaj olarak taşınma (yaklaşık 5,74 kat) da hastalanma ya da ölümle ilişkili çıktı.' },
    { kind: 'uyari', metin: 'Basık burunlu, yaşlı ya da sağlık sorunu olan bir hayvanla uçmayı düşünüyorsanız, uçuşa uygun olup olmadığını bilet almadan önce veteriner hekiminizle konuşmanız önerilir. Yolculuk sırasında ya da sonrasında solunum güçlüğü, halsizlik ya da olağan dışı bir durum görürseniz vakit kaybetmeden bir veteriner hekime başvurmak gerekiyor.' },
    { kind: 'altBaslik', metin: 'Uçuşa hiç alınmayan ve yalnız kargoyla taşınan köpekler' },
    { kind: 'liste', maddeler: [
      '**Hiç kabul edilmeyenler:** Uluslararası havacılık kuralları gereği Bull Terrier, Staffordshire Bull Terrier, American Pitbull Terrier, American Staffordshire Terrier, Pitbull Terrier, Japanese Tosa, Dogo Argentino, Fila Brasileiro, American Bully ve bunların melezleri taşınmıyor.',
      '**Kabine alınmayanlar:** American Bulldog, Bandog, Tosa Inu, Kafkas Çoban Köpeği, Dogue de Bordeaux, Doberman, Presa Canario, Rottweiler, Mastiff (Bull Mastiff hariç), kurt melezleri, Anadolu Çoban Köpeği, Boerboel ve melezleri kabine alınmıyor; yalnız Turkish Cargo kabul ederse uçak altında taşınıyor.',
      '**İzinle taşınanlar:** Sivas Kangalı, Ankara kedisi ve Van kedisi gibi koruma altındaki yerli ırklar, Tarım ve Orman Bakanlığı\'nın ilgili müdürlüklerinden izin alınması koşuluyla taşınabiliyor; izin uçuştan önce kontuarda gösteriliyor.',
    ] },
    { kind: 'paragraf', metin: 'Türkiye\'deki yasaklı ırk düzenlemesi ayrı bir konu; ayrıntısı [[yasakli-kopek-irklari|yasaklı köpek ırkları]] yazısında.' },

    { kind: 'baslik', metin: 'THY ile uçarken gereken belgeler' },
    { kind: 'paragraf', metin: 'THY kedi ve köpekler için sağlık ve aşı belgesi ile kimlik belgesi istiyor. Aşı kartındaki **kuduz aşısının uçuş tarihinden en az 30 gün, en çok 1 yıl önce** yapılmış olması gerekiyor. Türkiye\'den yurt dışına çıkışta, Tarım ve Orman Bakanlığı talimatı gereği veteriner sağlık sertifikası olmayan hayvan uçuşa kabul edilmiyor.' },
    { kind: 'paragraf', metin: 'Bakanlığın yurt dışına yolcu beraberi çıkış talimatına göre hayvanın mikroçiple kimliklendirilmiş, Ev Hayvanı Kayıt Sistemi\'ne (PETVET) kaydedilmiş ve pasaportunun düzenlenmiş olması gerekiyor. Kuduz aşısı, aşının prospektüsünde farklı bir talimat yoksa en erken 12 haftalık yaşta ve mikroçiple aynı gün ya da sonrasında yapılmış olmalı. Gidilen ülke istiyorsa geçerli bir kuduz antikor (FAVN) test raporu da gerekiyor; bu rapor tek başına yeterli değil, çıkıştan 48 saat önce il ya da ilçe tarım ve orman müdürlüğünden veteriner sağlık sertifikası alınması zorunlu. Pasaport ve mikroçip için [[evcil-hayvan-pasaportu|evcil hayvan pasaportu]] ve [[mikrocip-nedir|mikroçip nedir]] yazılarına bakabilirsiniz.' },
    { kind: 'paragraf', metin: 'Kuzey Kıbrıs Türk Cumhuriyeti\'ne giden ya da oradan kalkan uçuşlarda, KKTC Veteriner Dairesi\'nden ithal izni alınması gerekiyor; bu izin 60 gün geçerli. Kalkış ülkesinin veteriner birimince onaylanmış ihracat sağlık sertifikasının da en az 48 saat önceden alınması isteniyor.' },

    { kind: 'baslik', metin: 'Uçak altında taşınacak hayvanlar için ek kurallar' },
    { kind: 'paragraf', metin: 'Uçak altında güvenli yolculuk için kafesin sert olması şart; yumuşak çanta ya da kafes bu bölüme kabul edilmiyor. En az dört saatlik bekleme ya da en az sekiz saatlik uçuşlarda kafeste otomatik suluk bulunması zorunlu. THY ayrıca hayvanın ihtiyacı olursa diye kafeste dökülmeyen bir kapta yiyecek bulundurulmasını öneriyor.' },
    { kind: 'yanilgi', baslik: '"Hangi kafes olursa olsun uçak altına verilir"', metin: 'THY uçak altında yalnız sert kafes kabul ediyor ve kafes 75 x 75 x 125 cm\'yi aşmamalı. Daha büyük kafesler yolcu uçuşunda değil Turkish Cargo üzerinden taşınıyor; bu da ayrı bir işlem ve ayrı bir planlama gerektiriyor.' },

    { kind: 'baslik', metin: 'Özel rotalar ve hizmet köpekleri' },
    { kind: 'liste', maddeler: [
      '**Birleşik Krallık:** THY\'nin koşullarına göre son varış noktası Birleşik Krallık olan uçuşlarda, aktarmalılar dahil, evcil hayvan taşınmıyor.',
      '**Ajet bağlantısı:** Ajet ile bağlantılı THY uçuşlarında THY kuralları, tamamı Ajet\'in işlettiği uçuşlarda Ajet kuralları geçerli.',
      '**Psikiyatrik hizmet köpeği (PSD):** Yalnız İstanbul\'dan kalkan ya da İstanbul\'a gelen ve ABD havalimanlarına giden ya da oradan gelen uçuşlarda kabul ediliyor.',
      '**Hizmet köpeği rezervasyonu:** PSD ve hizmet köpeği (SVAN) rezervasyonu çevrim içi kanallardan yapılamıyor.',
      '**Alerji:** Kedi, köpek ya da kuş alerjisini sağlık raporuyla belgeleyen bir yolcu varsa evcil hayvan rezervasyonu özel koşullara göre yapılıyor.',
    ] },
    { kind: 'uyari', metin: 'Bu yazıdaki kurallar Türk Hava Yolları\'nın kendi sayfalarından ve Tarım ve Orman Bakanlığı talimatından alındı. Havayolları kuralları, ırk listelerini ve ücretleri güncelleyebiliyor; bilet almadan önce THY\'nin güncel evcil hayvan sayfasını, ücret hesaplama aracını ve gidilen ülkenin resmî giriş kurallarını kontrol etmek gerekiyor.' },
  ],
  kontrolListesi: [
    'Çantayla toplam 8 kilo altında mı?',
    'Çanta 23 x 30 x 40 cm içinde mi?',
    'Hayvan rezervasyona eklendi mi?',
    'Rotanın ücreti hesaplandı mı?',
    'Kuduz aşısı tarihi uygun mu?',
    'Irk için bir kısıt var mı?',
  ],
  sss: [
    { soru: 'THY\'de kabinde evcil hayvan kaç kilo olabilir?', cevap: 'Hayvan ve çantası birlikte en çok 8 kilo olabiliyor. Çantanın da en çok 23 cm yüksekliğinde, 30 cm genişliğinde ve 40 cm uzunluğunda olması gerekiyor. Bu sınırları aşan hayvan uçak altında, kafesle birlikte en çok 50 kiloya kadar taşınıyor.' },
    { soru: 'THY evcil hayvan kabin ücreti ne kadar?', cevap: 'Tutar rotaya göre değişiyor, tek bir fiyat yok. Kabin için 0-8 kilo tek kategori olarak ücretlendiriliyor ve ücret ücretsiz bagaj hakkına dahil değil. Uçacağınız rotanın tutarını THY\'nin evcil hayvan taşıma ücreti hesaplama sayfasından öğrenmeniz gerekiyor; aktarmalı uçuşta iki bacağın ücreti toplanıyor.' },
    { soru: 'Aynı çantada iki kedi taşınırsa iki ücret mi ödenir?', cevap: 'Hayır, THY ücreti hayvan başına değil çanta başına alıyor. Birlikte yaşamaya alışkın aynı türden iki hayvan, toplam ağırlık 8 kiloyu geçmiyorsa kabinde aynı çantada taşınabiliyor ve tek çanta için ücret ödeniyor.' },
    { soru: 'THY\'de evcil hayvan rezervasyonu ne zamana kadar yapılır?', cevap: 'Çevrim içi kanallardan kalkıştan 6 saat öncesine kadar, rezervasyon yönetimi sayfasından ise uçuştan 24 saat öncesine kadar yapılabiliyor. Hayvanı bilete eklemek için rezervasyon kodu (PNR) yeterli. Refakatsiz çocuk ve bebek yolcular ise işlemi çevrim içi yapamıyor.' },
    { soru: 'Yavru kedi ya da köpek THY ile uçabilir mi?', cevap: '10 haftalıktan küçük ya da hâlâ anne sütü emen yavrular uçamıyor. 10 ile 12 haftalık yavrular ancak veteriner hekim onayıyla kabul ediliyor. Yurt dışı yolculukta kuduz aşısının en erken 12 haftalıkta yapılabilmesi ve uçuştan en az 30 gün önce yapılmış olması gerektiği için yaş sınırı pratikte daha yüksek oluyor.' },
    { soru: 'French Bulldog ya da İran kedisi THY ile uçabilir mi?', cevap: 'Evet, ama yalnız kabinde. THY 1 Ekim 2021\'den bu yana solunum sorunu yaşayabilen basık burunlu ırkların uçak altında taşınmasını kısıtlıyor. Hayvan çantasıyla birlikte 8 kiloyu ve kabin çantası ölçüsünü aşmıyorsa yolcuyla kabinde uçabiliyor; uçuşa uygunluğunu önceden veteriner hekimle konuşmak önerilir.' },
    { soru: 'THY ile yurt dışına evcil hayvanla gitmek için hangi belgeler gerekir?', cevap: 'Mikroçip, PETVET kaydı, pasaport, uçuştan en az 30 gün en çok 1 yıl önce yapılmış kuduz aşısı ve veteriner sağlık sertifikası gerekiyor. Gidilen ülke istiyorsa FAVN kuduz antikor test raporu da isteniyor; bu durumda sertifika çıkıştan 48 saat önce il ya da ilçe tarım ve orman müdürlüğünden alınıyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Türk Hava Yolları',
      baslik: 'Traveling with Pets',
      adres: 'https://www.turkishairlines.com/en-us/any-questions/traveling-with-pets/',
    },
    {
      kurum: 'Türk Hava Yolları',
      baslik: 'Pet Carriage Fees',
      adres: 'https://www.turkishairlines.com/en-int/any-questions/traveling-with-pets/fees-for-carrying-pets/',
    },
    {
      kurum: 'Türk Hava Yolları',
      baslik: 'Terms And Conditions For Additional Services',
      adres: 'https://www.turkishairlines.com/en-th/terms-and-conditions-for-additional-services/',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Kedi ve Köpeklerin Yurt Dışına Yolcu Beraberi ve Ticari Sevklerine İlişkin Uygulama Talimatı',
      yil: 2022,
      adres: 'https://vskn.tarimorman.gov.tr/tekirdag/Belgeler/D%C3%96K%C3%9CMAN/Kedi%20Ve%20K%C3%B6peklerin%20Yurt%20D%C4%B1%C5%9F%C4%B1na%20Yolcu%20Beraberi%20Ve%20Ticari%20Sevklerine%20%C4%B0li%C5%9Fkin%20Uygulama%20Talimat%C4%B1.pdf',
    },
    {
      kurum: 'Centers for Disease Control and Prevention (CDC), Division of Global Migration and Quarantine',
      yazarlar: 'Pieracci EG, Maskery B, Stauffer K, Gertz A, Brown C',
      baslik: 'Risk factors for death and illness in dogs imported into the United States, 2010-2018.',
      dergi: 'Transboundary and Emerging Diseases',
      yil: 2022,
      kunye: '69(5):e1749-e1757',
      doi: '10.1111/tbed.14510',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/35291049/',
    },
  ],
};
