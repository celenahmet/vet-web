import type { BlogYazi } from './types';

export const kopekOteliAcmak: BlogYazi = {
  slug: 'kopek-oteli-acmak',
  baslik: 'Köpek Oteli Açmak: İzin ve Şartlar',
  ozet: 'Köpek oteli açmak için kuruluş izni, çalışma izni, veteriner hekim sözleşmesi ve tesis şartları neler? Yönetmelik maddeleriyle adım adım anlatıldı.',
  kapakAlt:
    'Köpek otelinin bahçesinde görevliye pati veren köpek',
  kategori: 'Pet Sahipleri',
  tarih: '2026-11-11',
  bloklar: [
    { kind: 'paragraf', metin: '**Köpek oteli açmak için önce il tarım ve orman müdürlüğünden kuruluş izni, tesis hazır olunca da çalışma izin belgesi almak gerekiyor; ayrıca iş yerinde veteriner hekim istihdamı zorunlu.** Bu çerçeveyi 8 Ekim 2011 tarihli, 28078 sayılı Ev Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmelik çiziyor. Yönetmelik köpek otelini "barınma yeri" sayıyor: ev hayvanlarının geçici süreler barındırıldığı konukevi, pansiyon ve otel gibi yerler.' },
    { kind: 'paragraf', metin: 'Aşağıda başvuru sürecini, istenen belgeleri, tesiste bulunması gereken bölümleri, köpek kabulündeki kuralları ve izinden sonraki yükümlülükleri yönetmelik maddeleriyle topladık. Hayvanların yaşam alanı için gereken asgari ölçüleri yönetmelik değil Bakanlık belirliyor; başvurudan önce il müdürlüğünden güncel ölçüleri istemek gerekiyor.' },

    { kind: 'tablo', basliklar: ['Aşama', 'Ne alınıyor', 'Kim veriyor'], satirlar: [
      ['1. Başvuru', 'Dilekçe ve plan belgeleri', 'İl tarım ve orman müdürlüğü'],
      ['2. Yer seçimi', 'Yerinde inceleme ve yer seçim raporu', 'En az iki veteriner hekimden oluşan komisyon'],
      ['3. Kuruluş izni', 'Tesisi kurmak için izin; barınma yerlerinde üç ay geçerli', 'İl müdürlüğü'],
      ['4. Çalışma izni', 'Faaliyete geçmek için işyeri çalışma izin belgesi', 'İl müdürlüğü'],
    ]},

    { kind: 'baslik', metin: 'Köpek oteli yönetmelikte nasıl geçiyor?' },
    { kind: 'paragraf', metin: 'Yönetmeliğin tanımlar maddesine göre barınma yeri, ev hayvanlarının geçici süreler için barındırıldığı konukevi, pansiyon ve otel gibi yerleri ifade ediyor. 13. madde ise "kedi ve köpek barınma ve eğitim yeri" için ayrı şartlar sayıyor. Dolayısıyla "köpek oteli", "köpek pansiyonu" ya da "konukevi" adı ne olursa olsun, köpekleri geçici süreyle barındıran yer bu yönetmeliğin kapsamına giriyor.' },
    { kind: 'paragraf', metin: 'Aralık 2024\'te yayımlanan Hayvanların Korunması Hakkında Uygulama Yönetmeliği de aynı yerleri anıyor: 33. maddede denetime tabi olanlar arasında "hayvan konuk evleri, hayvanların bakıldığı pansiyon ve oteller" sayılıyor.' },

    { kind: 'baslik', metin: 'Kuruluş izni için hangi belgeler isteniyor?' },
    { kind: 'paragraf', metin: 'İş yeri açmak isteyen gerçek ve tüzel kişiler, il müdürlüğüne ıslak ya da elektronik imzalı bir dilekçeyle başvuruyor. Dilekçeye eklenecek dosyada şunlar bulunuyor:' },
    { kind: 'liste', maddeler: [
      '**Başvuru dilekçesi:** Yönetmeliğin ekindeki forma uygun, iş yeri sahibince doldurulmuş',
      '**Vaziyet ya da hâlihazır plan:** İş yerinin yerleşim yeri ve çevresini gösteren, teknik resim kurallarına göre hazırlanmış',
      '**İç plan:** Tüm bölümleri ve ne amaçla kullanıldıklarını gösteren plan örneği ve adres',
      '**Su belgesi:** Bağlı olunan belediyeden alınan su faturası sureti ya da su kullanma belgesi',
      '**Şirket bilgisi:** İşyeri şirketse ticaret sicil bilgileri',
    ]},
    { kind: 'paragraf', metin: 'Belgeler uygun bulunursa yer seçim komisyonu yerinde inceleme yapıyor. Komisyon, il müdürlüğünün hayvan sağlığı şubesinde görevli en az iki veteriner hekimden oluşuyor. Rapora göre uygun bulunan yerlere kuruluş izni veriliyor; barınma ve satış yerleri için bu izin üç ay geçerli. Tesisini bu sürede hazır edemeyenlere il müdürlüğü uygun görürse aynı miktarda ek süre verebiliyor.' },
    { kind: 'yanilgi', baslik: '"Önce tesisi kurarım, izni sonra alırım"', metin: 'Kuruluş izni, yer seçim raporuna göre uygun bulunan yerlere veriliyor; çalışma izin belgesi ise kuruluş izni verilmiş yerlerin faaliyete geçmesi için düzenleniyor. Kira sözleşmesi ve tadilat öncesinde planı il müdürlüğüyle görüşmek, sonradan değişiklik yapmak zorunda kalmamak için yararlı olur.' },

    { kind: 'baslik', metin: 'Çalışma izni ve veteriner hekim sözleşmesi' },
    { kind: 'paragraf', metin: 'Çalışma izni için başvuruda muayenehane, klinik, poliklinik ya da hayvan hastanesinde çalışan bir veteriner hekimle yapılmış, bölge veteriner hekimler odasınca onaylı ve en az bir yıllık sözleşme isteniyor. Başvuru incelenip mahallinde bakıldıktan sonra iş yeri açma raporu düzenleniyor, rapora dayanılarak çalışma izin belgesi veriliyor.' },
    { kind: 'paragraf', metin: 'Bu yönetmelik kapsamındaki iş yerlerinde veteriner hekim istihdamı zorunlu. Hekimin çalışma gün ve saatlerini ve alacağı ücreti bölge veteriner hekimler odası belirliyor, bunların sözleşmede yer alması gerekiyor. Üç kuruluş türünün farkını [[muayenehane-poliklinik-hastane-farki|muayenehane, poliklinik ve hastane farkı]] yazımızda anlattık.' },
    { kind: 'paragraf', metin: 'İş yeri veteriner hekimi; iş yerinin sağlık ve teknik yönden mevzuata uygun çalışmasından, sağlıklı hayvanların kabul edilmesinden, aşılama ve ilaçlamaların yapılmasından, alet ve malzemenin dezenfeksiyonundan işverenle birlikte sorumlu. Hekimin işten ayrılması ya da işverenin hekime son vermesi durumunda bir ay önceden bildirim gerekiyor.' },

    { kind: 'baslik', metin: 'Tesiste hangi bölümler bulunmalı?' },
    { kind: 'paragraf', metin: 'Barınma yerleri için yönetmelik, aynı arazi içinde aşağıdaki birimlerin bulunmasını şart koşuyor:' },
    { kind: 'liste', maddeler: [
      'İdari büro ve veteriner hekim odası',
      'Personel odası, duş, depo ve tuvalet',
      'Hayvan karantina ünitesi',
      'Hayvanların yiyeceklerinin hazırlandığı mutfak ünitesi ve temizlik ünitesi',
      'Kapalı ve açık gezdirme alanı',
    ]},
    { kind: 'paragraf', metin: 'Gezdirme alanlarının zemini toprak olacak. Barınma yerlerine bitişik egzersiz alanlarının kenarları en az 150 cm yüksekliğinde duvarla, ön ve üst kısımları paslanmaz kafes telle kapatılacak. Hayvanların yatacağı yerlerde türüne uygun altlık kullanılacak, kolay temizlenebilir su ve mama kapları bulundurulacak.' },
    { kind: 'paragraf', metin: 'Bunlara ek olarak bütün iş yerleri için genel şartlar var: yıkanabilir ve dezenfekte edilebilir zemin ve duvar, eğimli zeminde süzgeç, şehir şebekesine bağlı su, basınçlı su ve hortum düzeneği, havalandırma ve hayvanları rahatsız etmeyecek aydınlatma. Çevreye rahatsızlık verecek ses ve kötü kokunun yayılmaması için de önlem alınması gerekiyor.' },

    { kind: 'baslik', metin: 'Günlük işleyişte hijyen ve ayrım kuralları' },
    { kind: 'liste', maddeler: [
      '**Dezenfeksiyon:** İş yeri haftada bir, ayrıca hastalık şüphesinde ve gerekli görülen zamanlarda dezenfekte ediliyor',
      '**Kafes ve kaplar:** Kafes, suluk ve yemlik her gün ve her hayvan değişiminden önce temizlenip dezenfekte ediliyor',
      '**Altlık:** Her gün, gerekirse daha sık değiştiriliyor',
      '**Ayrım:** Birbirine zarar verebilecek hayvanlar bir arada tutulamıyor',
      '**Hasta, yaralı ya da sakat hayvan:** Ayrı bir bölümde barındırılıyor',
    ]},
    { kind: 'paragraf', metin: 'Dezenfeksiyon işlemleri dezenfeksiyon defterine, denetimde tespit edilen konular denetim defterine işleniyor. Salgın hayvan hastalığı şüphesinde hayvanlar il ya da ilçe müdürlüğünce sahiplerinin sorumluluğunda karantinaya aldırılıyor; karantina masrafı işyeri sahibine ait.' },

    { kind: 'baslik', metin: 'Köpek kabulünde aşı, yaş ve teslim tutanağı' },
    { kind: 'paragraf', metin: 'Barınma yerlerine kabul edilecek hayvanların aşı ve parazit ilaçlamalarının yapılmış olması şart. İki aylıktan küçük ve aşısı tamamlanmamış yavru köpekler kabul edilemiyor. Hangi aşının ne zaman yapıldığı [[kopek-asi-takvimi|köpek aşı takvimi]], parazit koruması ise [[kopeklerde-ic-ve-dis-parazit|köpeklerde iç ve dış parazit]] yazılarında; kararı veteriner hekim veriyor.' },
    { kind: 'paragraf', metin: 'Barınma yerinde bulunan hayvanlar kayıt defterine işleniyor ve her hayvan için hayvan teslim tutanağı bulunması şart. Tutanakta hayvana, hayvanı teslim edene ve teslim alana ait bilgiler yer alıyor. Yiyeceği kimin karşılayacağı ve özellikleri de teslim tutanağında belirleniyor; taraflar isterse ayrıca taahhütname düzenleyebiliyor.' },
    { kind: 'paragraf', metin: 'Bakanlıkça kimliklendirilmesi istenen türlerin kimliklendirilmesi ve kayıt altına alınması zorunlu; iş yerlerinde bulunan iki aylık kedi ve köpek yavruları da veteriner hekim denetiminde kimliklendiriliyor. Mikroçip uygulamasının ayrıntısı [[mikrocip-nedir|mikroçip nedir]] yazısında.' },

    { kind: 'baslik', metin: 'Köpek otelde hastalanırsa ya da ölürse' },
    { kind: 'paragraf', metin: 'Yönetmelik sorumluluğu şöyle bölüştürüyor: bırakılan hayvan hastalanırsa hayvan sahibine bilgi verilerek tedavisi yapılıyor; sahibine ulaşılamazsa iş yeri veteriner hekiminin kararı uygulanıyor ve masraflar hasta hayvanın sahibine ait. Hayvan ölürse sahibine bilgi veriliyor, sahibi isterse masrafları kendisine ait olmak üzere resmî kurumlarda otopsi ve laboratuvar analizi yaptırılabiliyor.' },
    { kind: 'uyari', metin: 'Köpeğin otelde ya da sonrasında davranışında, iştahında veya dışkısında bir değişiklik fark edilirse nedenini belirlemek veteriner hekimin işidir. Bu yazı teşhis ve tedavi bilgisi vermez; sağlık şüphesinde vakit kaybetmeden veteriner hekime başvurulması gerekiyor.' },

    { kind: 'baslik', metin: 'İzinden sonra denetim, rapor ve değişiklik' },
    { kind: 'paragraf', metin: 'İş yerleri yılda en az bir kez, iki denetim elemanı tarafından denetleniyor. İş yeri sahibi ya da sorumluları çalışmalarıyla ilgili faaliyet raporlarını altı ayda bir il ya da ilçe müdürlüğüne bildiriyor. Yönetmeliğe aykırılık halinde 5996 sayılı Veteriner Hizmetleri, Bitki Sağlığı, Gıda ve Yem Kanunu, 5199 sayılı Hayvanları Koruma Kanunu ve ilgili diğer mevzuata göre işlem yapılıyor.' },
    { kind: 'paragraf', metin: 'Çalışma izni, üzerinde yazılı adres, faaliyet alanı ve faaliyet gösterilen türler için geçerli. Bunlardan biri değişirse izin geçerliliğini kaybediyor; vaziyet planında değişiklik ya da ilave için de il müdürlüğünün izni gerekiyor. Faaliyetin durdurulması veya kapatılması bir ay öncesinden yazıyla il müdürlüğüne bildiriliyor.' },

    { kind: 'baslik', metin: 'Köpeğini otele bırakacaklar neye bakmalı?' },
    { kind: 'paragraf', metin: 'Köpek sahibi için en basit güvence, otelin çalışma izin belgesini ve iş yeri veteriner hekimini sormak. Aşı kartının istenmesi, teslim tutanağının düzenlenmesi ve karantina bölümünün bulunması da yönetmeliğe uygun işleyen bir yerin işaretleri.' },
    { kind: 'paragraf', metin: '2014\'te Physiology & Behavior dergisinde yayımlanan çalışmada, sahipli 29 köpek hem evinde hem bir pansiyonda ölçüldü. Stresle ilişkili idrar değerleri pansiyonda daha yüksek çıktı, ama araştırmacılar köpeklerin olumsuz strese girdiğine dair kesin kanıt bulamadı ve köpekler arasında belirgin bireysel farklar gördü. Köpeğin yeni ortama nasıl tepki verdiğini bilen sahip, otel seçiminde bu bilgiyi kullanabilir; ayrıntılar [[tatile-giderken-kedi-kopek|tatile giderken kedi ve köpek]] yazısında.' },
  ],
  kontrolListesi: [
    'Çalışma izin belgesi var mı?',
    'Otelin veteriner hekimi var mı?',
    'Karantina bölümü var mı?',
    'Teslim tutanağı düzenleniyor mu?',
    'Gezdirme alanı toprak zeminli mi?',
    'Aşı ve parazit kaydı isteniyor mu?',
  ],
  sss: [
    { soru: 'Köpek oteli açmak için izin gerekir mi?', cevap: 'Evet, iki aşamalı izin gerekiyor. Önce il müdürlüğünden kuruluş izni, tesis hazır olunca da çalışma izin belgesi alınıyor. Bu belge, kuruluş izni verilmiş yerlerin faaliyete geçmesi için düzenleniyor. Başvuru il tarım ve orman müdürlüğüne yapılıyor.' },
    { soru: 'Köpek otelinde veteriner hekim çalıştırmak zorunlu mu?', cevap: 'Evet, yönetmelik kapsamındaki iş yerlerinde veteriner hekim istihdamı zorunlu. Çalışma izni için muayenehane, klinik, poliklinik ya da hayvan hastanesinde çalışan bir hekimle, bölge veteriner hekimler odasınca onaylı en az bir yıllık sözleşme isteniyor.' },
    { soru: 'Kuruluş izni ne kadar süre geçerli?', cevap: 'Barınma yerleri için kuruluş izni üç ay geçerli. Bu sürede iş yerini hazır edemeyenlere il müdürlüğü uygun görürse aynı miktarda ek süre verebiliyor. Çalışma izni ancak tesis hazır olup mahallinde yapılan inceleme olumlu sonuçlandıktan sonra düzenleniyor.' },
    { soru: 'Otele hangi köpekler kabul edilebilir?', cevap: 'Aşı ve parazit ilaçlaması yapılmış köpekler kabul edilebilir. Yönetmeliğe göre iki aylıktan küçük ve aşısı tamamlanmamış yavru köpekler barınma yerlerine kabul edilemiyor. Aşı programı için veteriner hekime danışılması gerekiyor.' },
    { soru: 'Köpek oteli ne sıklıkla denetlenir?', cevap: 'Yönetmeliğe göre iş yerleri yılda en az bir kez, iki denetim elemanı tarafından denetleniyor. 2024 tarihli uygulama yönetmeliği de hayvanların bakıldığı pansiyon ve otelleri denetime tabi yerler arasında sayıyor. Denetimde tespit edilenler denetim defterine işleniyor.' },
    { soru: 'Köpek otelde hastalanırsa kim karar verir?', cevap: 'Sahibine ulaşılamazsa iş yeri veteriner hekimi karar veriyor; ulaşılabiliyorsa önce ona bilgi veriliyor. Yönetmeliğe göre masraflar hayvanın sahibine ait. Köpekte bir sağlık şüphesi varsa vakit kaybetmeden veteriner hekime başvurulması gerekiyor.' },
    { soru: 'Otelin kabul ettiği hayvan türü sonradan değişebilir mi?', cevap: 'Çalışma izni, üzerinde yazılı adres, faaliyet alanı ve faaliyet gösterilen türler için geçerli. Bunlardan biri değişirse izin geçerliliğini kaybediyor. Yeni bir tür kabul etmeden önce il tarım ve orman müdürlüğüne danışılması gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: 'Ev Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmelik (8 Ekim 2011, sayı 28078; madde 2, 4, 5, 6, 7, 13, 15, 16, 17, 18, 19, 20)',
      adres: 'https://mevzuat.gov.tr/File/GeneratePdf?mevzuatNo=15374&mevzuatTur=KurumVeKurulusYonetmeligi&mevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği (13 Aralık 2024, sayı 32751), madde 11, 12 ve 33',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/12/20241213-3.htm',
    },
    {
      kurum: 'Queen\'s University Belfast, Royal Veterinary College, University of Lincoln',
      yazarlar: 'Part CE, Kiddie JL, Hayes WA, Mills DS, Neville RF, Morton DB, Collins LM',
      baslik: 'Physiological, physical and behavioural changes in dogs (Canis familiaris) when kennelled: testing the validity of stress parameters',
      dergi: 'Physiology & Behavior',
      yil: 2014,
      kunye: '133:260-71',
      doi: '10.1016/j.physbeh.2014.05.018',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/24866912/',
    },
  ],
};
