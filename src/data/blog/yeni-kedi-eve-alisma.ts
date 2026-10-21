import type { BlogYazi } from './types';

export const yeniKediEveAlisma: BlogYazi = {
  slug: 'yeni-kedi-eve-alisma',
  baslik: 'Eve Yeni Gelen Kedi Ne Kadar Sürede Alışır? İlk Gün Rehberi',
  ozet: 'Eve yeni gelen kedinin alışması birkaç günden birkaç haftaya kadar sürebiliyor. Tek odada başlangıç, saklanma, ilk 24 saat, diğer hayvanlar ve dışarı çıkma zamanı.',
  kapakAlt:
    'Eve yeni gelen kedi konulu yazının kapak görseli; yeni evinde taşıma çantasının açık kapısından çekinerek dışarı bakan tekir beyaz bir kedi',
  kategori: 'Kedi',
  tarih: '2026-10-27',
  bloklar: [
    { kind: 'paragraf', metin: 'Eve yeni gelen bir kedinin alışması **birkaç günden birkaç haftaya** kadar sürebiliyor. International Cat Care\'e göre bazı kedilerin yeni evlerinde kendilerini güvende hissetmesi **birkaç hafta** alabiliyor. Süreci kısaltan şey kediyi alıştırmaya zorlamak değil; ona sakin bir oda, saklanacak yer ve keşfe ne zaman çıkacağına kendisinin karar vereceği bir zaman tanımak.' },
    { kind: 'paragraf', metin: 'Aşağıda ilk gün ve ilk haftalar için adım adım bir düzen, saklanmanın neden normal olduğu, hangi durumda veteriner hekime ulaşmak gerektiği ve evdeki diğer hayvanlarla tanıştırmanın nasıl yapılacağı International Cat Care ile Amerikan ve Uluslararası Kedi Hekimleri Birliklerinin (AAFP, ISFM) ortak kılavuzuna dayanarak anlatılıyor.' },

    { kind: 'tablo', basliklar: ['Dönem', 'Ne beklenir', 'Ne yapılır'], satirlar: [
      ['İlk 24 saat', 'Saklanma, az yeme, kuma az çıkma normal olabiliyor', 'Sakin bir oda, az ziyaretçi, zorlamadan bekleme'],
      ['İlk 1-2 hafta', 'Kedi odasını keşfedip güven kazanıyor', 'Aynı mama ve aynı kum; kısa, sakin ziyaretler'],
      ['Birkaç hafta', 'Bazı kediler ancak bu sürede rahatlıyor', 'Evin geri kalanını adım adım açma'],
      ['En az 2-3 hafta', 'Yetişkin kedinin eve bağlanması', 'Dışarı çıkan bir kediyse bu sürede içeride tutma'],
    ]},

    { kind: 'baslik', metin: 'Yeni gelen kedi için tek odayla başlamak' },
    { kind: 'paragraf', metin: 'International Cat Care, yavru kedinin ilk birkaç hafta tek ve sessiz bir odada tutulmasını, yetişkin kedide de tek odayla başlanmasını öneriyor; evde başka bir kedi varsa bu zorunlu. Bu oda kedinin bütün ihtiyaçlarını karşılamalı:' },
    { kind: 'liste', maddeler: [
      '**Mama ve su kapları:** Birbirinden birkaç adım uzakta.',
      '**Kum kabı:** Mama ve sudan uzak bir köşede.',
      '**Yatak ve saklanma yeri:** Yan yatırılmış, içine polar bir örtü konmuş bir karton kutu bile yeterli.',
      '**Tırmalama tahtası ve oyuncaklar.**',
      '**Güvenlik:** Kapalı pencereler; kablolar, zehirli bitkiler, ilaçlar ve kırılacak eşyalar ortadan kaldırılmış.',
    ]},
    { kind: 'paragraf', metin: 'AAFP ve ISFM\'nin kedi ortamı kılavuzu da sağlıklı bir ev ortamının ilk iki dayanağını **güvenli bir yer** ve **birbirinden ayrı konmuş temel kaynaklar** (mama, su, kum, dinlenme ve oyun alanı) olarak sayıyor; mama ve suyun birbirinden, kum kabının da diğer kaynaklardan ayrı tutulmasını öneriyor.' },

    { kind: 'baslik', metin: 'Kedi taşıma çantasından nasıl çıkarılır?' },
    { kind: 'paragraf', metin: 'Taşıma çantası hazırlanan odaya bırakılıp kapısı dikkatle açılıyor ve kedinin **kendi zamanında** çıkması bekleniyor. International Cat Care kedinin çantadan asla zorla çıkarılmamasını öneriyor. Çanta odada kalabilir; kedi için tanıdık bir sığınak işlevi görüyor. Önceki evinden gelen yatak ya da örtü varsa tanıdık kokusu kedinin rahatlamasına yardım ediyor.' },
    { kind: 'yanilgi', baslik: '"Saklanan kediyi çıkarıp sevmek alışmasını hızlandırır"', metin: 'Saklanmak yeni bir ortamdaki kedi için normal ve güven kazanmanın parçası. International Cat Care saklanan kedinin dışarı çağrılmamasını, odada sessizce vakit geçirilip kedinin kendisinin yaklaşmasının beklenmesini öneriyor. AAFP ve ISFM kılavuzu da teması kedinin başlatması ve kontrol etmesi gerektiğini vurguluyor.' },

    { kind: 'baslik', metin: 'İlk 24 saatte neler normal?' },
    { kind: 'paragraf', metin: 'İlk 24 saat sakin geçmeli; çok sayıda yeni insanla, özellikle çocuklarla hemen tanıştırmak önerilmiyor. International Cat Care\'e göre çok kaygılı yetişkin kediler ilk 24 saatte **yemek yemeyebiliyor ve kuma çıkmayabiliyor**. Bu sürede taze mama ve su verilmeye, kum kabı kontrol edilmeye devam ediliyor. Durum 24 saatten uzun sürerse veteriner hekim ekibiyle görüşmek gerekiyor.' },

    { kind: 'baslik', metin: 'Yeni kedinin maması ve kumu değişmeli mi?' },
    { kind: 'paragraf', metin: 'İlk 1-2 hafta kedinin alışık olduğu **aynı mama ve aynı kum** kullanılmalı. Mama değiştirilecekse eskisiyle karıştırılarak **7-14 gün** içinde yavaş yavaş geçiliyor; ani değişiklik mide rahatsızlığına yol açabiliyor. Mama seçimi için [[kediler-icin-yas-mama-mi-kuru-mama-mi|kediler için yaş mama mı kuru mama mı]] yazımıza bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Yeni kedi diğer kediye ve çocuklara nasıl alıştırılır?' },
    { kind: 'paragraf', metin: 'Evde başka kedi ya da köpek varsa tanıştırma **yavaş ve dikkatli** yapılıyor; yeni kedi bu yüzden ayrı bir odada başlıyor. Sürecin uzunluğu kediden kediye değişiyor; acele etmemek kalıcı bir uyumun önünü açıyor. Çocuklarla temas başta sınırlı ve yetişkin gözetiminde olmalı, böylece kedi fazla elleme yaşamıyor. AAFP ve ISFM kılavuzu, evde kaç kedi varsa en az o kadar tek kişilik güvenli saklanma yeri bulunmasını öneriyor.' },
    { kind: 'yanilgi', baslik: '"Kediler hemen kaynaşır, aynı odaya koymak yeterli"', metin: 'Kediler yeni bir kediyle aynı alanı birden paylaşmak zorunda kaldığında ciddi stres yaşayabiliyor. Ayrı odayla başlayıp koku ve görüntüyle adım adım tanıştırmak, kalıcı bir çatışmanın önüne geçiyor.' },

    { kind: 'baslik', metin: 'Yeni kedi ne zaman dışarı çıkabilir?' },
    { kind: 'paragraf', metin: 'Dışarı çıkan bir kedi olacaksa International Cat Care yetişkin kedinin **en az 2-3 hafta** içeride tutulmasını öneriyor; bu süre kedinin yeni evine bağlanmasını ve uzaklaşma ihtimalinin azalmasını sağlıyor. Yavru kediler için temel aşıların bitmesinden en az bir hafta sonra (yaklaşık 13-14 haftalık) ve kısırlaştırılıp iyileştikten sonra; 6 aylık olana kadar gözetim altında. Aşı programını [[kedi-asi-takvimi|kedi aşı takvimi]] yazımızda anlattık.' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Kedi bir iki günde alışır', 'Bazı kediler için birkaç hafta sürebiliyor'],
      ['Saklanan kedi dışarı çağrılmalı', 'Kedinin kendi zamanında yaklaşması bekleniyor'],
      ['İlk gün evin her yerini gezsin', 'Tek odayla başlamak öneriliyor'],
      ['Yeni mamaya hemen geçilir', 'Geçiş 7-14 günde yavaş yavaş yapılıyor'],
    ]},
    { kind: 'paragraf', metin: 'İlk veteriner kontrolü de alışma sürecinin parçası. Yavru kediler için zamanlamayı [[yavru-kedi-veterinere-ne-zaman-goturulmeli|yavru kedi veterinere ne zaman götürülmeli]], ilk haftaların bakımını [[yavru-kedi-bakimi|yavru kedi bakımı]] yazılarımızda anlattık.' },
    { kind: 'uyari', metin: 'Yeni gelen kedi 24 saatten uzun süre hiç yemek yemiyor ya da kuma çıkmıyorsa, dokunulunca sürekli tepki gösteriyorsa ya da halsiz, kusan veya hapşıran bir kediyse durum alışma sürecinden ibaret olmayabilir; veteriner hekimle görüşmek gerekiyor.' },
  ],
  kontrolListesi: [
    'Kedinin odasında saklanma yeri var mı?',
    'Mama, su ve kum ayrı yerlerde mi?',
    'İlk gün ziyaretçi sınırlandı mı?',
    'Eski mama ve kum kullanılıyor mu?',
    'Diğer hayvanlar ayrı mı tutuluyor?',
    'İlk veteriner kontrolü planlandı mı?',
  ],
  sss: [
    { soru: 'Eve yeni gelen kedi ne kadar sürede alışır?', cevap: 'Birkaç günden birkaç haftaya kadar. International Cat Care\'e göre bazı kedilerin yeni evlerinde kendilerini güvende hissetmesi birkaç hafta sürebiliyor.' },
    { soru: 'Eve yeni gelen kedi neden saklanır?', cevap: 'Saklanmak yeni bir ortamda güven kazanmanın normal bir parçası. Kedinin dışarı çağrılmaması, odada sessizce vakit geçirilip kendisinin yaklaşmasının beklenmesi öneriliyor.' },
    { soru: 'Yeni gelen kedi yemek yemezse ne yapılır?', cevap: 'Kaygılı kediler ilk 24 saatte yemeyebiliyor ve kuma çıkmayabiliyor. Taze mama ve su verilmeye devam ediliyor; durum 24 saatten uzun sürerse veteriner hekimle görüşmek gerekiyor.' },
    { soru: 'Yeni kedi evdeki kediye nasıl alıştırılır?', cevap: 'Yeni kedi ayrı bir odada başlıyor ve tanıştırma yavaş, adım adım yapılıyor. Sürenin uzunluğu kediden kediye değişiyor; acele etmemek kalıcı uyum için önemli.' },
    { soru: 'Yeni gelen kedi ne zaman dışarı çıkabilir?', cevap: 'Yetişkin kedinin en az 2-3 hafta içeride tutulması öneriliyor. Yavrular temel aşıların bitmesinden en az bir hafta sonra ve kısırlaştırıldıktan sonra çıkabiliyor.' },
    { soru: 'Yeni kedinin maması değiştirilmeli mi?', cevap: 'İlk 1-2 hafta alışık olduğu mama ve kum kullanılmalı. Değişiklik gerekiyorsa eski mamayla karıştırılarak 7-14 günde yavaş yavaş geçiliyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'International Cat Care',
      baslik: 'Helping your new cat or kitten settle in',
      adres: 'https://icatcare.org/articles/helping-your-new-cat-or-kitten-settle-in',
    },
    {
      kurum: 'American Association of Feline Practitioners (AAFP) · International Society of Feline Medicine (ISFM)',
      yazarlar: 'Ellis SL, Rodan I, Carney HC, Heath S, Rochlitz I, Shearburn LD ve ark.',
      baslik: 'AAFP and ISFM feline environmental needs guidelines',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2013,
      kunye: '15(3):219-230',
      doi: '10.1177/1098612X13477537',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/23422366/',
    },
  ],
};
