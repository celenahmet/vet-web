import type { BlogYazi } from './types';

export const evcilHayvanPasaportu: BlogYazi = {
  slug: 'evcil-hayvan-pasaportu',
  baslik: 'Evcil Hayvan Pasaportu Nasıl Alınır? Yurt Dışına Kedi Köpek',
  ozet: 'Pasaport PETVET kaydıyla düzenleniyor ama yurt dışı için yetmiyor. Kuduz aşısı, antikor testi, sağlık sertifikası ve AB için 90 günlük bekleme adım adım.',
  kapakAlt:
    'Evcil hayvan pasaportu konulu yazının kapak görseli; havalimanında valizin yanında taşıma çantasında bekleyen bir kedi',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-20',
  bloklar: [
    { kind: 'paragraf', metin: 'Türkiye\'de kedi ve köpeğin pasaportu, hayvan **mikroçiple PETVET\'e kaydedilirken** veteriner hekim ya da il veya ilçe tarım ve orman müdürlüğü tarafından düzenleniyor. Ancak yurt dışına çıkışta pasaport **tek başına yetmiyor:** hayvanın kuduz aşısının geçerli olması, gidilen ülke istiyorsa kuduz antikor testinin yapılmış olması ve çıkıştan önce **resmî veteriner hekimin düzenlediği veteriner sağlık sertifikasının** alınması gerekiyor.' },
    { kind: 'paragraf', metin: 'AB ülkelerine gidecekseniz en uzun adım antikor testi: kan örneği alındıktan sonra sertifika için **en az 90 gün** beklemek gerekiyor. Aşağıda Tarım ve Orman Bakanlığı\'nın yurt dışı çıkış talimatını ve Avrupa Komisyonu\'nun giriş kurallarını adım adım anlatıyoruz.' },

    { kind: 'baslik', metin: 'Evcil hayvan pasaportu nasıl alınır?' },
    { kind: 'liste', maddeler: [
      '**Başvuru:** Serbest çalışan bir veteriner hekime ya da il veya ilçe tarım ve orman müdürlüğüne başvuruluyor.',
      '**Mikroçip:** Hayvana 15 haneli numara taşıyan mikroçip takılıyor.',
      '**Kayıt ve pasaport:** Hayvan PETVET\'e kaydediliyor ve pasaportu düzenleniyor; yönetmelik bunun için en çok 15 gün tanıyor.',
    ]},
    { kind: 'paragraf', metin: 'Yurt içinde başka bir şehre götürürken de pasaportun yanınızda olması gerekiyor. Pasaport kaybolur ya da çalınırsa **60 gün içinde** il veya ilçe müdürlüğüne bildirilip yenisi düzenletiliyor. Mikroçipin nasıl çalıştığını [[mikrocip-nedir|mikroçip nedir]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Yurt dışına kedi köpek götürmek için gerekenler' },
    { kind: 'liste', maddeler: [
      '**Mikroçip, PETVET kaydı ve pasaport:** Yurt dışına çıkışın ön şartı.',
      '**Geçerli kuduz aşısı:** Aşı tarihi pasaporta işlenmiş, aşıyı yapan hekimin kaşesi ve imzası olmalı. Aşı, prospektüste farklı bir talimat yoksa hayvan **en erken 12 haftalıkken** yapılmış olmalı ve **mikroçiple aynı gün ya da ondan sonra** yapılmış olmalı.',
      '**Kuduz antikor (titre) testi:** Gidilen ülke istiyorsa zorunlu. AB ülkeleri istiyor.',
      '**Veteriner sağlık sertifikası:** İkamet ettiğiniz il veya ilçe tarım ve orman müdürlüğü, **çıkışa en erken 48 saat kala** düzenliyor. Bu sertifika olmadan hiçbir kedi ve köpek yurt dışına çıkarılamıyor.',
    ]},
    { kind: 'paragraf', metin: 'Aşı zamanlamasını [[kedi-asi-takvimi|kedi aşı takvimi]] ve [[kopek-asi-takvimi|köpek aşı takvimi]] yazılarımızda anlattık. Yurt dışı planı varsa bunu ilk kuduz aşısında veteriner hekime söylemek gerekiyor; mikroçipin aşıdan önce ya da aynı gün takılmış olması şart.' },

    { kind: 'baslik', metin: 'Kuduz antikor testi nedir, nasıl yapılır?' },
    { kind: 'paragraf', metin: 'Kuduz antikor titrasyon testi (FAVN), aşının hayvanda yeterli bağışıklık oluşturduğunu kandan ölçüyor. Bakanlık talimatına göre süreç şöyle işliyor:' },
    { kind: 'liste', maddeler: [
      '**Kan örneği:** Kuduz aşısından **en erken 30 gün sonra** veteriner hekim alıyor.',
      '**Laboratuvar:** Örnek, Ankara\'daki **Etlik Veteriner Kontrol Merkez Araştırma Enstitüsü**\'ne gönderiliyor. Örneğin alındıktan sonra en geç 5 gün içinde enstitüye ulaşması gerekiyor; ulaşmayan örnek işleme alınmıyor.',
      '**Hekimin bildirimi:** Kanı alacak serbest veteriner hekim, öncesinde il veya ilçe müdürlüğündeki resmî veteriner hekime haber veriyor.',
      '**Geçerlilik:** Aşılar zamanında tekrarlandığı sürece test raporu hayvanın **ömrü boyunca** geçerli. Bir aşı geciktirilirse sonraki aşı "ilk aşı" sayılıyor ve test yeniden yapılıyor.',
    ]},
    { kind: 'paragraf', metin: 'Etlik\'teki enstitü, Avrupa Komisyonu\'nun kuduz antikor testi için onayladığı laboratuvarlar listesinde yer alıyor; raporu AB ülkelerinde kabul ediliyor.' },
    { kind: 'yanilgi', baslik: '"Kuduz aşısı varsa test gereksiz"', metin: 'AB ve bazı ülkeler aşının yanında aşının işe yaradığının kanıtını da istiyor. Aşı kartı bunu göstermiyor; ancak antikor testi gösteriyor. Test sonucu ve sertifika yoksa hayvan sınırdan geri çevrilebiliyor.' },

    { kind: 'baslik', metin: 'AB ülkelerine kedi köpek götürmek: hesaplanması gereken süreler' },
    { kind: 'paragraf', metin: 'Türkiye, AB\'nin antikor testinden muaf tuttuğu ülkeler listesinde değil. Bu yüzden Türkiye\'den AB\'ye giden kedi ve köpekte test zorunlu ve sonucun **en az 0,5 IU/ml** çıkması gerekiyor. Avrupa Komisyonu\'nun kurallarına göre takvim şöyle kuruluyor:' },
    { kind: 'tablo', basliklar: ['Adım', 'Ne zaman', 'Kural'], satirlar: [
      ['Mikroçip ve kuduz aşısı', 'Hayvan en az 12 haftalıkken', 'Aşı mikroçipten sonra ya da aynı gün'],
      ['Antikor testi için kan örneği', 'Aşıdan en az 30 gün sonra', 'Onaylı laboratuvarda, en az 0,5 IU/ml'],
      ['Veteriner sağlık sertifikası', 'Kan örneğinden en az 90 gün sonra', 'Türkiye\'de çıkışa en erken 48 saat kala'],
      ['AB\'ye giriş', 'Sertifika tarihinden itibaren 10 gün içinde', 'Belirlenmiş yolcu giriş noktasından'],
    ]},
    { kind: 'paragraf', metin: 'Yani ilk kuduz aşısından AB\'ye çıkışa kadar **en az dört ay** hesaplamak gerekiyor. Sertifika, AB içinde sonraki seyahatler için 6 ay ya da kuduz aşısının geçerliliği bitene kadar (hangisi önceyse) kullanılabiliyor. Ticari olmayan harekette bir araçta en çok **5 hayvan** olabiliyor ve sahibin, hayvanın satılmayacağına dair yazılı beyanı isteniyor. AB, 1 Ekim 2026\'dan itibaren düzenlenen sertifikalar için yeni bir sertifika modeline geçti; modeli müdürlük düzenliyor.' },

    { kind: 'baslik', metin: 'Hangi durumlar ticari sayılır?' },
    { kind: 'paragraf', metin: 'Bakanlık talimatına göre hayvan sahibiyle ya da sahibinin yetkilendirdiği kişiyle birlikte gidiyorsa **yolcu beraberi** sertifika düzenleniyor. Şu durumlar ise ticari sayılıyor ve ticari sertifika gerekiyor:' },
    { kind: 'liste', maddeler: [
      'Hayvan, sahibinin yolculuğundan **5 günden daha önce ya da sonra** gidiyorsa (örneğin kargoyla ayrı gönderiliyorsa).',
      'Hayvan sahiplendirilmek ya da üretim için götürülüyorsa.',
      'Taşıma ücret karşılığında bir nakliye şirketi aracılığıyla yapılıyorsa.',
    ]},

    { kind: 'baslik', metin: 'Yurt dışına çıkışı izne bağlı ırklar' },
    { kind: 'paragraf', metin: 'Gen kaynakları koruma altındaki şu ırkların yurt dışına çıkışı **ön izne** bağlı: Kangal, Akbaş ve Kars çoban köpekleri, Çatal Burun av köpeği, Zağar İnci köpeği, Ankara kedisi ve Van kedisi. Pasaportunda ırk ya da renk yalnız "melez" veya "karışık" diye yazılmış hayvanlarda çıkış işlemi yapılmıyor; önce pasaporta en yakın ırk ve renk yazdırılması gerekiyor.' },
    { kind: 'paragraf', metin: 'Bakanlıkça tehlike arz eden sayılan ırklardan sahipli ve kayıtlı köpekler, alıcı ülke kabul ederse sahipleriyle yurt dışına çıkabiliyor ama **Türkiye\'ye yeniden giremiyor.**' },
    { kind: 'uyari', metin: 'Ülkelerin giriş kuralları ve havayollarının hayvan taşıma şartları değişebiliyor. Bilet almadan önce gidilecek ülkenin resmî makamının ve havayolunun güncel kurallarına bakmak, sertifika için de il veya ilçe müdürlüğüyle erkenden görüşmek gerekiyor.' },
  ],
  kontrolListesi: [
    'Mikroçip aşıdan önce mi takıldı?',
    'Kuduz aşısı pasaporta işli mi?',
    'Gidilecek ülke test istiyor mu?',
    'Kan örneği 90 günü karşılıyor mu?',
    'Sertifika randevusu planlandı mı?',
  ],
  sss: [
    { soru: 'Evcil hayvan pasaportu nereden alınır?', cevap: 'Mikroçip ve PETVET kaydıyla birlikte veteriner hekimde ya da il veya ilçe tarım ve orman müdürlüğünde düzenleniyor.' },
    { soru: 'Yurt dışına çıkmak için pasaport yeterli mi?', cevap: 'Hayır; geçerli kuduz aşısı, gerekiyorsa antikor testi ve çıkışa en erken 48 saat kala alınan veteriner sağlık sertifikası da gerekiyor.' },
    { soru: 'Kuduz antikor testi ne zaman yapılır?', cevap: 'Kuduz aşısından en erken 30 gün sonra alınan kanla, Ankara Etlik\'teki enstitüde yapılıyor.' },
    { soru: 'AB\'ye kedi köpek götürmek için ne kadar beklemek gerekir?', cevap: 'Kan örneğinden en az 90 gün sonra sertifika alınabiliyor; aşıdan itibaren en az dört ay hesaplayın.' },
    { soru: 'Antikor testi her seyahatte tekrarlanır mı?', cevap: 'Hayır; kuduz aşıları zamanında tekrarlandığı sürece rapor ömür boyu geçerli.' },
    { soru: 'Veteriner sağlık sertifikası nereden alınır?', cevap: 'İkamet ettiğiniz il veya ilçe tarım ve orman müdürlüğünden, çıkışa en erken 48 saat kala.' },
    { soru: 'Kangal yurt dışına çıkarılabilir mi?', cevap: 'Koruma altındaki ırklardan olduğu için çıkışı Bakanlığın ön iznine bağlı.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Kedi ve Köpeklerin Yurt Dışına Yolcu Beraberi ve Ticari Sevklerine İlişkin Uygulama Talimatı (21.10.2022, sayı 7455140)',
      adres: 'https://vskn.tarimorman.gov.tr/tekirdag/Belgeler/D%C3%96K%C3%9CMAN/Kedi%20Ve%20K%C3%B6peklerin%20Yurt%20D%C4%B1%C5%9F%C4%B1na%20Yolcu%20Beraberi%20Ve%20Ticari%20Sevklerine%20%C4%B0li%C5%9Fkin%20Uygulama%20Talimat%C4%B1.pdf',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Kedi, Köpek ve Gelinciklerin Kimliklendirilmesi ve Kayıt Altına Alınmasına Dair Yönetmelik',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=7&MevzuatNo=24414&MevzuatTertip=5',
    },
    {
      kurum: 'European Commission, Food Safety',
      baslik: 'Bringing a pet into the EU from a non-EU country',
      adres: 'https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/bringing-pet-eu-non-eu-country_en',
    },
    {
      kurum: 'European Commission, Food Safety',
      baslik: 'Listing of territories and non-EU countries',
      adres: 'https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/listing-territories-and-non-eu-countries_en',
    },
    {
      kurum: 'European Commission, Food Safety',
      baslik: 'Designated laboratories performing rabies antibody titration tests: non-EU countries',
      adres: 'https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/designated-laboratories-performing-rabies-antibody-titration-tests/non-eu-countries_en',
    },
  ],
};
