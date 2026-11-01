import type { BlogYazi } from './types';

export const sarmanKedi: BlogYazi = {
  slug: 'sarman-kedi',
  baslik: 'Sarman Kedi: Özellikleri ve Neden Çoğu Erkek?',
  ozet: 'Sarman, sarı tüylü kedinin Türkçedeki adı. Turuncu rengin X kromozomundaki bir genden geldiğini ve bu yüzden çoğunun erkek olduğunu anlatıyoruz.',
  kapakAlt:
    'Oyuncak fareyle oynayan sarman kedi',
  kategori: 'Kedi',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Sarman kedi, Türkçede sarı tüylü kedi demektir; bir ırk değil bir tüy rengidir ve bu renk X kromozomundaki tek bir genden gelir.** Türk Dil Kurumu sözlüğü sarmanı "sarı tüylü kedi" diye tanımlıyor. Turuncu rengi veren gen X kromozomunda taşındığı için erkek kedide tek kopya yetiyor, dişi kedide ise rengin tam turuncu olması için iki kopya gerekiyor. Sarman kedilerin çoğunun erkek olması bu yüzden.' },
    { kind: 'paragraf', metin: 'Aşağıda turuncu rengin genetik olarak nasıl ortaya çıktığını, dişi sarman kedinin neden daha az görüldüğünü, çizgili tüyün turuncu zeminde nasıl göründüğünü ve erkek kedilerde üç renkli tüyün neden alışılmadık olduğunu anlatıyoruz. Bilgiler hakemli genetik çalışmalara dayanıyor.' },

    { kind: 'tablo', basliklar: ['Kedi', 'Turuncu gen kopyası', 'Tüy rengi'], satirlar: [
      ['Erkek', 'X kromozomunda 1 kopya', 'Turuncu (sarman)'],
      ['Erkek', 'Kopya yok', 'Turuncu olmayan renk'],
      ['Dişi', '2 kopya', 'Turuncu (sarman)'],
      ['Dişi', '1 kopya', 'Turuncu ile koyu rengin karıştığı üç renkli desen'],
      ['Dişi', 'Kopya yok', 'Turuncu olmayan renk'],
    ]},

    { kind: 'baslik', metin: 'Sarman bir ırk değil, bir renk' },
    { kind: 'paragraf', metin: 'Sarman sözcüğü Türkçede tüy rengini anlatıyor. Sözlükte "sarı tüylü kedi" anlamı bulunuyor. Yani sarman bir kedi ırkının adı değil; sokak kedisinde de, ırklı kedide de görülebilen bir renk. İngilizce kaynaklarda aynı renk "orange" yani turuncu diye geçiyor.' },
    { kind: 'paragraf', metin: 'Araştırmacılar turuncu rengi veren mutasyonun modern yabani kedilerde bulunmadığını da bildiriyor. Yani sarman renk, evcil kedinin kendi tarihinde ortaya çıkmış bir özellik.' },

    { kind: 'baslik', metin: 'Turuncu renk nereden geliyor?' },
    { kind: 'paragraf', metin: 'Kedilerdeki turuncu rengin sorumlusu uzun süre bilinmiyordu. Stanford Üniversitesi Tıp Fakültesi\'nin de içinde olduğu bir araştırma ekibi 2025\'te Current Biology dergisinde yayımladığı çalışmada bu bilmeceyi çözdü. Turuncu rengin nedeni, X kromozomu üzerinde 5 kb uzunluğunda bir silinme. Bu silinme, Arhgap36 adlı genin pigment hücrelerinde olması gerekenden farklı biçimde çalışmasına yol açıyor.' },
    { kind: 'paragraf', metin: 'Çalışmada kedi embriyolarının derisindeki tek tek hücreler incelendi. Sonuç olarak tüy hücrelerinde koyu pigment üretiminden sorumlu genlerin etkinliği düşüyor ve tüy kırmızı ya da sarı renkte çıkıyor. Araştırmacılar, bu genin diğer memelilerde belirgin bir karşılığı bulunmadığını da belirtiyor; bu yüzden turuncu renk kedilere özgü bir genetik bulmaca olarak kalmıştı.' },
    { kind: 'paragraf', metin: 'İlginç bir ayrıntı da şu: rengi belirleyen sinyal yolunun başındaki alıcı (Mc1r) sağlam kalıyor ve çalışıyor. Sorun yolun daha aşağısında, hücre içinde ortaya çıkıyor; Arhgap36 geni pigment hücrelerinde PKA enziminin katalitik alt biriminin düzeyini düşürüyor. Bu nedenle turuncu gen, siyah ve amber renkleri veren değişikliklerin de üstünde kalıyor: kedi bu genleri taşısa bile turuncu olabiliyor.' },
    { kind: 'paragraf', metin: 'Çalışmadaki turuncu kedilerin hepsi ortak bir gen bölgesi taşıdı. Araştırmacılar bu durumu, turuncu rengin 900 yıldan daha uzun süre önce tek bir kökenden ortaya çıktığı biçiminde yorumluyor. Bu köken, kedilerin evcilleşmesinin başlamasından sonra, yani yaklaşık dokuz bin yıl önce başlayan sürecin içinde bir yerde.' },

    { kind: 'baslik', metin: 'Neden çoğu sarman kedi erkek?' },
    { kind: 'paragraf', metin: 'Turuncu gen X kromozomu üzerinde bulunuyor. Erkek kedide bir X ve bir Y kromozomu var; X\'in üzerinde turuncu gen varsa kedi turuncu oluyor, çünkü bu geni dengeleyecek ikinci bir X yok. Dişi kedide iki X kromozomu bulunuyor. Her ikisinde de turuncu gen varsa kedi turuncu oluyor; yalnızca birinde varsa tüyün bir kısmı turuncu, bir kısmı koyu çıkıyor.' },
    { kind: 'paragraf', metin: 'Birleşik Krallık\'ta veteriner kliniklerinden toplanan veriye göre turuncu genin sıklığı yüzde 19,7 olarak hesaplandı. Gen kedilerin yarısından çok daha azında bulunduğuna göre, tek kopya yetmesi erkeklere büyük bir avantaj sağlıyor: erkekte tek bir kopya rengi belirlerken dişide iki kopyanın bir arada bulunması gerekiyor. Bu da sarman kedilerin arasında erkeklerin daha çok görülmesini açıklıyor.' },
    { kind: 'yanilgi', baslik: '"Sarman kediler hep erkektir"', metin: 'Dişi sarman kedi de var. İki X kromozomunun ikisinde de turuncu gen bulunan dişi kedi tamamen turuncu olabiliyor. Bu yalnızca erkeğe göre daha seyrek görülen bir durum. Rengine bakarak cinsiyet konusunda kesin bir sonuca varmak doğru değil.' },

    { kind: 'baslik', metin: 'Üç renkli kedinin sırrı: X kapanması' },
    { kind: 'paragraf', metin: 'Dişi kedinin hücrelerinde iki X kromozomundan biri embriyo döneminde rastgele kapanıyor. Turuncu geni yalnızca bir X\'inde taşıyan dişi kedide kimi hücre öbeklerinde turuncu geni taşıyan X, kimilerinde taşımayan X kapanıyor. Ortaya turuncu ve koyu renkli yamaların karıştığı üç renkli desen çıkıyor. Araştırmacılar bu desenin, X kapanması fikrini ilk ortaya atan çalışmalardan beri örnek gösterildiğini de hatırlatıyor.' },
    { kind: 'paragraf', metin: 'Bu desen sarman rengin kardeşi sayılabilir: ikisinin arkasında da aynı gen var. Fark, tek kopyanın bir erkekte tüyün tamamını, bir dişide ise yalnızca bir kısmını turuncuya çevirmesinde.' },

    { kind: 'baslik', metin: 'Sarman kedilerde çizgiler' },
    { kind: 'paragraf', metin: 'Birçok sarman kedide koyu çizgiler ya da benekler görülüyor. Bunlar tekir (tabby) desenidir ve turuncu renkten ayrı işleyen bir mekanizmayla oluşuyor. Araştırmacılar, turuncu olmayan bir kedide tekir işaretlerinin koyu ve siyaha yakın olduğunu, turuncu bir kedide ise koyu turuncu göründüğünü bildiriyor.' },
    { kind: 'paragraf', metin: 'Yani sarman kedinin çizgileri yok olmuyor, yalnızca zeminle aynı renk ailesinde kalıyor.' },

    { kind: 'baslik', metin: 'Erkek üç renkli kedi neden nadir?' },
    { kind: 'paragraf', metin: 'Üç renkli desen normalde dişi kedide görülüyor; erkek kedide bu desen genellikle olağandışı bir kromozom yapısına işaret ediyor. Birleşik Krallık\'ta veteriner kliniklerine gönderilen bir ankette 9816 kedi hakkında bilgi toplandı. 4598 erkek kediden 20\'si üç renkliydi, yani yüzde 0,43. İncelenen 11 erkek kedinin altısında 38,XX/38,XY, ikisinde 39,XXY kromozom yapısı bulundu.' },
    { kind: 'paragraf', metin: 'Polonya\'da Poznan Yaşam Bilimleri Üniversitesi\'nden araştırmacıların 2026\'da bildirdiği bir vakada üç renkli bir Maine Coon erkeğinde XX ve XY hücre hatları birlikte bulundu. Çalışma, bu tür erkek kedilerin verimli olabileceğini gösteriyor ve üreme kararından önce kromozom incelemesi öneriyor.' },
    { kind: 'uyari', metin: 'Tüy rengi kedinin cinsiyeti konusunda yalnızca bir olasılık verir. Cinsiyetten emin olunamıyorsa ya da kedinin iştahında, davranışında veya tuvalet alışkanlığında değişiklik fark edilirse, renkten bağımsız olarak veteriner hekime başvurulması gerekiyor.' },

    { kind: 'baslik', metin: 'Sarman kedi sahiplenirken akılda tutulacaklar' },
    { kind: 'liste', maddeler: [
      'Kedinin cinsiyetini veteriner hekime doğrulatmak',
      'Rengine değil genel sağlık durumuna bakmak',
      'Kısırlaştırma zamanını veteriner hekimle konuşmak',
      'Aşı ve parazit takvimini baştan planlamak',
      'Üç renkli bir erkek kedi varsa veteriner hekime danışmak',
    ]},
    { kind: 'paragraf', metin: 'Kısırlaştırma zamanı için [[kediler-ne-zaman-kisirlastirilmali|kediler ne zaman kısırlaştırılmalı]] yazımıza bakabilirsiniz. Sarman rengine yakışan bir ad arıyorsanız [[kedi-isimleri|kedi isimleri]] yazısında ilham verecek öneriler var.' },
  ],
  kontrolListesi: [
    'Cinsiyeti hekimle doğrulandı mı?',
    'Genel sağlık kontrolü var mı?',
    'Kısırlaştırma planı var mı?',
    'Aşı takvimi hazır mı?',
    'Parazit korunması planlandı mı?',
  ],
  sss: [
    { soru: 'Sarman kedi nedir?', cevap: 'Sarman, Türkçede sarı tüylü kedi demektir ve bir ırk adı değil bir tüy rengidir. Türk Dil Kurumu sözlüğü de sarmanı "sarı tüylü kedi" diye tanımlıyor. Aynı renk İngilizce kaynaklarda turuncu (orange) olarak geçiyor ve hem sokak kedisinde hem ırklı kedide görülebiliyor.' },
    { soru: 'Sarman kediler neden çoğunlukla erkek?', cevap: 'Turuncu renk X kromozomundaki bir genden geliyor. Erkek kedide tek X olduğu için bir kopya yetiyor, dişi kedinin tamamen turuncu olması içinse iki X\'inde de bu genin bulunması gerekiyor. Gen yaygın olmadığı için erkekler sarman kediler arasında daha çok görülüyor.' },
    { soru: 'Dişi sarman kedi olur mu?', cevap: 'Evet, olur. İki X kromozomunun ikisinde de turuncu gen bulunan dişi kedi tamamen turuncu görünür. Bu durum erkeğe göre daha seyrek. Turuncu genin yalnızca birinde bulunduğu dişi kedi ise turuncu ile koyu rengin karıştığı üç renkli bir desene sahip olur.' },
    { soru: 'Sarman kedinin çizgileri neden var?', cevap: 'Çizgiler tekir deseninden geliyor ve turuncu renkten ayrı bir mekanizmayla oluşuyor. Turuncu olmayan kedide bu işaretler koyu, turuncu kedide ise koyu turuncu görünüyor. Bu yüzden çizgiler sarman kedide de var ama zeminle aynı renk ailesinde kalıyor.' },
    { soru: 'Erkek üç renkli kedi olur mu?', cevap: 'Olur ama çok seyrek. Birleşik Krallık\'taki bir ankette 4598 erkek kediden yalnızca 20\'si üç renkliydi, yani yüzde 0,43. Erkekte üç renkli desen genellikle olağandışı bir kromozom yapısına işaret ediyor; bu yüzden kesin bilgi için veteriner hekime başvurulması gerekiyor.' },
    { soru: 'Kedinin rengine bakarak cinsiyeti anlaşılır mı?', cevap: 'Kesin olarak anlaşılmaz. Sarman bir kedinin erkek olma olasılığı daha yüksek, ama dişi sarman da var. Üç renkli kediler çoğunlukla dişi, ama istisnalar bulunuyor. Cinsiyetin doğrulanması için veteriner hekime muayene ettirmek en güvenilir yol.' },
  ],
  kaynaklar: [
    {
      kurum: 'Stanford University School of Medicine, Department of Genetics',
      yazarlar: 'Kaelin CB, McGowan KA, Trotman JC, Koroma DC, David VA, Menotti-Raymond M, Graff EC, Schmidt-Küntzel A, Oancea E, Barsh GS',
      baslik: 'Molecular and genetic characterization of sex-linked orange coat color in the domestic cat',
      dergi: 'Current Biology',
      yil: 2025,
      kunye: '35(12):2826-2836.e5',
      doi: '10.1016/j.cub.2025.04.055',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/40378841/',
    },
    {
      kurum: 'University of Bristol, Department of Clinical Veterinary Science',
      yazarlar: 'Leaman T, Rowland R, Long SE',
      baslik: 'Male tortoiseshell cats in the United Kingdom',
      dergi: 'Veterinary Record',
      yil: 1999,
      kunye: '144(1):9-12',
      doi: '10.1136/vr.144.1.9',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/10028567/',
    },
    {
      kurum: 'Poznan University of Life Sciences, Faculty of Veterinary Medicine and Animal Science',
      yazarlar: 'Szczerbal I, Nowacka-Woszuk J, Switonski M',
      baslik: 'XX/XY Chimerism in Tortoiseshell Tomcats: A New Case and Review of the Literature',
      dergi: 'Sexual Development',
      yil: 2026,
      kunye: '20(1-6):68-74',
      doi: '10.1159/000551472',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/41818390/',
    },
    {
      kurum: 'Türk Dil Kurumu',
      baslik: 'Güncel Türkçe Sözlük: sarman',
      adres: 'https://sozluk.gov.tr/',
    },
  ],
};
