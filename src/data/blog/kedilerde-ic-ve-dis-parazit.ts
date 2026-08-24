import type { BlogYazi } from './types';

/**
 * SAGLIK kategorisinin ilk yazisi. Sayisal ve tibbi iddialarin dayanagi Cornell
 * Feline Health Center'in bagirsak parazitleri sayfasi ve Pennelegion 2020
 * (Parasites & Vectors); ikincisi ESCCAP kilavuzlarina dayaniyor.
 */
export const kedilerdeIcVeDisParazit: BlogYazi = {
  slug: 'kedilerde-ic-ve-dis-parazit',
  baslik: 'Kedilere İç ve Dış Parazit Ne Zaman Yapılır?',
  ozet: 'Parazit uygulamasının sıklığı takvimle değil kedinin yaşam biçimiyle belirleniyor. Ev kedisi ile dışarı çıkan kedide risk aynı değil, program da aynı olmuyor.',
  kategori: 'Sağlık',
  tarih: '2026-08-24',
  bloklar: [
    { kind: 'paragraf', metin: 'Kedilerde parazit uygulaması **sabit bir takvimle değil, kedinin yaşam biçimine göre** belirleniyor. Yavrularda sık aralıklarla başlıyor, yetişkinlikte ise dışarı çıkma, avlanma ve evde başka hayvan olup olmamasına göre seyrekleşiyor ya da sıklaşıyor.' },
    { kind: 'paragraf', metin: 'Bu yazı iki şeyi ayırıyor: iç parazit ile dış parazit farklı şeyler ve farklı programları var. Bir de herkese uyan tek bir aralık olmadığı için, riskin nasıl ölçüldüğünü anlatıyor.' },

    { kind: 'baslik', metin: 'İç parazit ve dış parazit aynı şey değil' },
    { kind: 'paragraf', metin: 'İç parazitler sindirim sisteminde yaşayan solucanlar ve tek hücreliler. Cornell Üniversitesi Veteriner Fakültesi’nin kedi sağlığı merkezine göre kedilerde en sık görülenler yuvarlak solucanlar, kancalı solucanlar ve şeritler; bunların bir kısmı insanlara da geçebiliyor.' },
    { kind: 'paragraf', metin: 'Dış parazitler ise pire, kene ve uyuz etkenleri gibi deride yaşayanlar. Aralarında doğrudan bir bağ da var: **pire yutan kedi şerit kapıyor.** Yani dış parazit ihmali iç parazite dönüşebiliyor; ikisini ayrı ayrı düşünmek yanlış.' },

    { kind: 'tablo', basliklar: ['Tür', 'Nerede', 'Nasıl bulaşıyor'], satirlar: [
      ['Yuvarlak solucan', 'İnce bağırsak', 'Anne sütü, dışkıyla kirlenmiş ortam'],
      ['Kancalı solucan', 'İnce bağırsak', 'Ağız yoluyla, deriden geçiş'],
      ['Şerit', 'İnce bağırsak', 'Pire yutma, avlanma'],
      ['Pire', 'Deri, tüy dibi', 'Ortam, başka hayvan'],
      ['Kene', 'Deri', 'Dış ortam, bitki örtüsü'],
    ] },

    { kind: 'baslik', metin: 'Yavru kedide program sık başlıyor' },
    { kind: 'paragraf', metin: 'Yavrularda iç parazit uygulaması erken haftalarda başlıyor ve kısa aralıklarla tekrarlanıyor. Sebebi basit: yuvarlak solucan anneden yavruya geçebiliyor, yani yavru dış dünyayla hiç temas etmeden de parazitli doğabiliyor.' },
    { kind: 'paragraf', metin: 'Aşı programı da bu döneme denk geliyor ve ikisi genelde birlikte planlanıyor. Aşıdan önce parazit temizliği yapılmasının sebebi, parazitli bir yavruda bağışıklık yanıtının zayıf kalması. Ayrıntı [[kedi-asi-takvimi|kedi aşı takvimi]] yazısında.' },

    { kind: 'yanilgi', baslik: '"Ev kedisine parazit gerekmez" yanılgısı', metin: 'Dışarı çıkmayan kedide risk düşük ama sıfır değil. Parazit yumurtaları ayakkabı tabanıyla eve giriyor, saksı toprağıyla geliyor, evdeki başka hayvanla taşınıyor. Ev kedisinde program seyrekleşiyor, ortadan kalkmıyor.' },

    { kind: 'baslik', metin: 'Sıklığı belirleyen şey takvim değil risk' },
    { kind: 'paragraf', metin: 'Birleşik Krallık’ta kedi ve köpek sahipleriyle yapılan bir anket çalışması, sahiplerin uyguladığı parazit programlarının çoğu zaman hayvanın **gerçek risk düzeyiyle örtüşmediğini** gösteriyor. Aynı çalışma, doğru sıklığın hayvanın yaşam biçimine bakılarak belirlenmesi gerektiğini vurguluyor.' },
    { kind: 'paragraf', metin: 'Pratikte bakılan başlıklar şunlar:' },
    { kind: 'liste', maddeler: [
      'Kedi dışarı çıkıyor mu, çıkıyorsa serbest mi',
      'Avlanıyor mu; kemirgen ve kuş şerit kaynağı',
      'Evde başka hayvan var mı, onlar dışarı çıkıyor mu',
      'Evde küçük çocuk ya da bağışıklığı baskılanmış biri var mı',
      'Çiğ et veriliyor mu',
      'Barınak ya da pansiyon teması oluyor mu',
    ] },
    { kind: 'paragraf', metin: 'Bu başlıklardan kaçının "evet" olduğu, aralığın yılda birkaç kez mi yoksa daha sık mı olacağını belirliyor. Karar veteriner hekimin.' },

    { kind: 'yanilgi', baslik: '"Paraziti dışkıda görürüm, o zaman yaparım" yanılgısı', metin: 'Parazitlerin çoğu dışkıda gözle görünmüyor; görülen genellikle şerit halkaları oluyor ve o da her zaman çıkmıyor. Belirti beklemek, bulaşın uzun süre fark edilmemesi demek. Program belirtiye göre değil riske göre kuruluyor.' },

    { kind: 'baslik', metin: 'Uygulama biçimi de sonuca etki ediyor' },
    { kind: 'paragraf', metin: 'Damla, tablet ve tasma farklı etkenler taşıyor ve hepsi aynı parazitleri kapsamıyor. Bir ürünün pireye etkili olması kene ya da iç parazit için de etkili olduğu anlamına gelmiyor. Bu yüzden "parazit yaptırdım" cümlesi tek başına bilgi taşımıyor; hangi ürünün ne zaman uygulandığı kayıt altında olmalı.' },
    { kind: 'paragraf', metin: 'Köpek için üretilmiş bazı dış parazit ürünleri kedilerde ciddi zehirlenmeye yol açabiliyor. Ürün paylaşımı yapılmıyor.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Parazit ürünü ve aralığı, hayvanı gören veteriner hekim tarafından yaşam biçimine göre belirlenir. Köpek için üretilmiş ürünler kedide kullanılmaz.' },

    { kind: 'baslik', metin: 'Evdeki insanlar da hesaba katılıyor' },
    { kind: 'paragraf', metin: 'Kedi parazitlerinin bir kısmı insanlara geçebiliyor. Cornell Üniversitesi Veteriner Fakültesi’nin kedi sağlığı merkezi, yuvarlak ve kancalı solucanların insanlarda da hastalık yapabildiğini belirtiyor. Bulaş genellikle dışkıyla kirlenmiş toprak ya da kum yoluyla oluyor; kedinin kendisine dokunmakla değil.' },
    { kind: 'paragraf', metin: 'Bu yüzden parazit programı yalnız kedinin sağlığıyla ilgili bir konu değil. Evde küçük çocuk, hamile biri ya da bağışıklığı baskılanmış bir kişi varsa risk değerlendirmesi buna göre yapılıyor ve aralık genellikle kısalıyor.' },
    { kind: 'liste', maddeler: [
      'Kum kabı günlük temizleniyor, eldivenle çalışılıyor',
      'Bahçe toprağıyla uğraşıldıysa eller yıkanıyor',
      'Çocukların oynadığı kum havuzu kapalı tutuluyor',
      'Çiğ et verilmiyor; şerit ve diğer etkenler bu yolla geçebiliyor',
      'Yeni gelen kedi, mevcut kedilerle karışmadan önce kontrol ediliyor',
    ] },
    { kind: 'altBaslik', metin: 'Yeni bir kedi eve girerken' },
    { kind: 'paragraf', metin: 'Sokaktan alınan ya da barınaktan gelen kedide parazit ihtimali belirgin şekilde yüksek. Eve almadan önce veteriner kontrolü, parazit uygulaması ve evde başka kedi varsa bulaşıcı hastalık testi yapılması gerekiyor. Bu adım, evdeki diğer hayvanları koruduğu için isteğe bağlı değil.' },

    { kind: 'altBaslik', metin: 'Uygulama sonrası ne beklenir' },
    { kind: 'paragraf', metin: 'İç parazit ilacından sonra dışkıda parazit görülmesi beklenen bir durum ve ilacın işe yaradığını gösteriyor. Bir iki gün süren hafif iştahsızlık ya da yumuşak dışkı da olağan. Kusma, uzun süren ishal ya da belirgin halsizlik ise olağan değil ve hekime bildirilmeli.' },
    { kind: 'paragraf', metin: 'Dış parazit damlası uygulandıktan sonra kedinin o bölgeyi yalayamaması gerekiyor; damla ensenin üst kısmına, kedinin ulaşamayacağı noktaya konuyor. Uygulamadan sonraki iki gün banyo yapılmıyor, aksi hâlde etken yıkanıp gidiyor ve koruma başlamadan bitiyor.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Yılda bir kez yeterli', 'Aralık yaşam biçimine göre değişiyor, tek doğru sayı yok'],
      ['Ev kedisine gerek yok', 'Risk düşük ama sıfır değil, program seyrekleşiyor'],
      ['Pire mevsimsel, kışın gerekmez', 'Isıtılan evlerde pire yıl boyu yaşayabiliyor'],
      ['Bir ürün her paraziti kapsar', 'Etken farklı, kapsam farklı; kayıt tutulmalı'],
      ['Köpek ürünü kediye de olur', 'Bazı köpek ürünleri kedide ciddi zehirlenme yapıyor'],
    ] },
    { kind: 'paragraf', metin: 'Parazit kaydı ile aşı kaydını aynı yerde tutmak, aralıkların kaçmasını önlüyor. Kedinizin ömrünü etkileyen diğer başlıklar için [[kediler-kac-yil-yasar|kedilerde ömrü belirleyen etkenler]] yazısına bakabilirsiniz.' },
  ],
  kontrolListesi: [
    'Son parazit uygulaması kayıtlı mı?',
    'Hangi ürünün verildiği yazılı mı?',
    'Kedi dışarı çıkıyor mu, avlanıyor mu?',
    'Evdeki diğer hayvanlar da kapsandı mı?',
    'Pire tasması ya da damlası güncel mi?',
    'Bir sonraki tarih takvime eklendi mi?',
  ],
  sss: [
    { soru: 'Kedilere parazit ne sıklıkla yapılır?', cevap: 'Tek bir doğru aralık yok; sıklık kedinin yaşam biçimine göre belirleniyor. Dışarı çıkan ve avlanan kedide aralık kısalıyor, tamamen ev içinde yaşayan kedide seyrekleşiyor. Karar, riski değerlendiren veteriner hekim tarafından veriliyor.' },
    { soru: 'Ev kedisine parazit yapmak gerekir mi?', cevap: 'Evet, program seyrekleşiyor ama ortadan kalkmıyor. Parazit yumurtaları ayakkabı tabanıyla, saksı toprağıyla ve evdeki diğer hayvanlarla içeri girebiliyor. Dışarı çıkmayan kedide risk düşük, sıfır değil.' },
    { soru: 'İç parazit ile dış parazit aynı ürünle yapılır mı?', cevap: 'Bazı ürünler ikisini birden kapsıyor ama hepsi kapsamıyor. Bir ürünün pireye etkili olması iç parazite de etkili olduğu anlamına gelmiyor. Hangi ürünün hangi parazitleri kapsadığı kutusunda yazıyor ve kayıt altında tutulması gerekiyor.' },
    { soru: 'Kedimde parazit olduğunu nasıl anlarım?', cevap: 'Çoğu parazit gözle görünmüyor; belirti beklemek bulaşın uzun süre fark edilmemesi demek. Kilo kaybı, karın şişkinliği, dışkıda pirinç tanesi görünümlü halkalar ve makat bölgesini yere sürtme dikkat çekmesi gereken işaretler. Kesin sonuç dışkı incelemesiyle çıkıyor.' },
    { soru: 'Köpeğimin parazit ürününü kediye kullanabilir miyim?', cevap: 'Hayır, bazı köpek dış parazit ürünleri kedilerde ciddi zehirlenmeye yol açıyor. Kedinin metabolizması bu etkenleri köpekteki gibi işleyemiyor. Ürün paylaşımı yapılmaz, her hayvana kendi türü için üretilmiş ürün uygulanır.' },
    { soru: 'Yavru kedide parazit ne zaman başlar?', cevap: 'Yavrularda uygulama erken haftalarda başlıyor ve kısa aralıklarla tekrarlanıyor, çünkü yuvarlak solucan anneden yavruya geçebiliyor. Aşı programıyla aynı döneme denk geldiği için genelde birlikte planlanıyor; parazitli yavruda aşı yanıtı zayıf kalabiliyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University College of Veterinary Medicine — Cornell Feline Health Center',
      baslik: 'Gastrointestinal Parasites of Cats',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/gastrointestinal-parasites-cats',
    },
    {
      kurum: 'European Scientific Counsel Companion Animal Parasites (ESCCAP) verilerine dayalı saha çalışması',
      yazarlar: 'Pennelegion C, Drake J, Wiseman S, Wright I',
      baslik: 'Survey of UK pet owners quantifying internal parasite infection risk and deworming recommendation implications',
      dergi: 'Parasites & Vectors',
      yil: 2020,
      kunye: '13(1):218',
      doi: '10.1186/s13071-020-04086-2',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/32336273/',
    },
  ],
};
