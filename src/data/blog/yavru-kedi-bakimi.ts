import type { BlogYazi } from './types';

export const yavruKediBakimi: BlogYazi = {
  slug: 'yavru-kedi-bakimi',
  baslik: 'Yavru Kedi Bakımı: İlk Haftalardan İki Aylığa Kadar Rehber',
  ozet: 'Yavru kedinin ilk iki ayı beslenme, sosyalleşme ve ilk veteriner ziyareti açısından en kritik dönem. Haftalara göre neler değişir, mamaya ne zaman geçilir, nasıl alıştırılır?',
  kapakAlt:
    'Yavru kedi bakımı konulu yazının kapak görseli; avuçlar arasında battaniyeye sarılı küçük bir yavru kedi',
  kategori: 'Kedi',
  tarih: '2026-10-21',
  bloklar: [
    { kind: 'paragraf', metin: 'Yavru kedinin ilk iki ayında üç şey belirleyici: **düzenli beslenme, insanlarla olumlu tanışma ve erken veteriner kontrolü.** 2021 tarihli AAHA ve AAFP kedi yaşam evreleri kılavuzuna göre yavrular **3-5 haftalıkken** yavru mamasına geçmeye başlayabiliyor; insanlara ve yeni deneyimlere alıştıkları hassas sosyalleşme dönemi **2-3 haftada** başlıyor ve **9-10 haftada** kapanmaya yaklaşıyor.' },
    { kind: 'paragraf', metin: 'Aşağıda bu dönemi haftalara göre özetledik; beslenme, sosyalleşme, tuvalet ve ilk veteriner ziyareti için neler yapılacağını kılavuzlara dayanarak anlatıyoruz. Yavrunuza özel plan her zaman veteriner hekiminizle yapılır.' },

    { kind: 'baslik', metin: 'Haftalara göre yavru kedi gelişimi' },
    { kind: 'tablo', basliklar: ['Yaş', 'Ne oluyor', 'Sizin işiniz'], satirlar: [
      ['0-3 hafta', 'Yavru annesine bağımlı, anne sütüyle besleniyor', 'Anne ve yavruları sakin, sıcak bir köşede tutmak'],
      ['2-3 hafta', 'Hassas sosyalleşme dönemi başlıyor', 'Nazik, kısa ve olumlu dokunuşlar'],
      ['3-5 hafta', 'Yavru mamasına geçiş başlayabiliyor', 'Dengeli, ticari yavru maması sunmak'],
      ['6-8 hafta', 'Temel aşı programı başlıyor', 'Veteriner muayenesi ve aşı takvimi'],
      ['9-10 hafta', 'Sosyalleşme dönemi kapanmaya yaklaşıyor', 'İnsanlara, seslere, taşıma çantasına alıştırmayı sürdürmek'],
      ['12 hafta civarı', 'Kediler arası oyun en yüksek düzeyde', 'Av içgüdüsüne uygun oyun ve oyuncak'],
    ]},

    { kind: 'baslik', metin: 'Yavru kedi nasıl beslenir?' },
    { kind: 'paragraf', metin: 'AAHA ve AAFP kılavuzuna göre yavrular **3-5 haftalıkken** besin açısından dengeli ticari yavru mamasına geçmeye başlayabiliyor. Yavruların kilogram başına enerji ihtiyacı yetişkinden çok daha yüksek: kılavuz 10 haftalık bir yavrunun kilogram başına günde yaklaşık 200 kilokalori harcadığını belirtiyor. Bunun kaç grama denk geldiğini [[yavru-kedi-ne-kadar-mama-yemeli|yavru kedi ne kadar mama yemeli]] yazımızda hesapladık.' },
    { kind: 'paragraf', metin: 'Cornell Üniversitesi Kedi Sağlığı Merkezi, yavruların kilogram başına daha çok besine ihtiyaç duyduğu için gün içinde daha sık beslenmesini, **altı aylık olana kadar genellikle günde üç öğünün** en iyi sonucu verdiğini belirtiyor.' },
    { kind: 'uyari', metin: 'Altı haftadan küçük bir yavruda yalnız 12 saatlik açlık bile hayati tehlike oluşturabiliyor. Yavru emmiyor ya da mamayı reddediyorsa beklemeden veteriner hekime başvurun.' },

    { kind: 'baslik', metin: 'Annesiz yavru kediye nasıl bakılır?' },
    { kind: 'paragraf', metin: 'İlk haftalarda yavrunun ısınma, beslenme ve temizlik ihtiyacını annesi karşılıyor. Annesiz bulunan bir yavruda bu ihtiyaçların hepsi yaşa göre değişiyor ve yanlış süt, yanlış sıcaklık ya da düzensiz beslenme kısa sürede tehlikeli olabiliyor. Bu yüzden annesiz bir yavru bulduğunuzda ilk iş onu sıcak tutup **aynı gün** bir veteriner hekime götürmek; hekim yavrunun yaşını tahmin edip beslenme planını çıkarır.' },
    { kind: 'yanilgi', baslik: '"Yavru biraz aç kalsa bir şey olmaz, sabah götürürüm"', metin: 'Çok küçük yavruların enerji depoları sınırlı. Cornell\'e göre altı haftadan küçük bir yavruda 12 saatlik açlık bile ölümcül olabiliyor; bu yaşta beklemek risk.' },

    { kind: 'baslik', metin: 'Yavru kedi nasıl sosyalleştirilir?' },
    { kind: 'paragraf', metin: 'Sosyalleşme döneminde edinilen deneyimler kedinin ömür boyu insanlara ve yeni durumlara nasıl tepki vereceğini büyük ölçüde belirliyor. AAHA ve AAFP kılavuzunun önerileri:' },
    { kind: 'liste', maddeler: [
      '**Günde 30-60 dakika** insanlarla olumlu etkileşim.',
      '**Nazik ve saygılı tutma:** Yavru ömür boyu rahat tutulmaya böyle hazırlanıyor.',
      '**İlk karşılaşmalar stresli olmasın:** Yeni insan, ses ve ortamlarla tanışma kısa ve olumlu olmalı.',
      '**El ve ayakla oynamayın:** Kılavuz, oyunda ellerin ve ayakların oyuncak gibi kullanılmamasını öğütlüyor; büyüyen kedide tırmalama ve ısırma alışkanlığı buradan başlayabiliyor.',
      '**Av içgüdüsüne uygun oyuncak:** Yavrular kovalayarak, atılarak ve yakalayarak öğreniyor; bu dürtüye uygun oyuncaklar sunun.',
    ]},

    { kind: 'baslik', metin: 'Yavru kediye tuvalet nasıl öğretilir?' },
    { kind: 'paragraf', metin: 'AAHA ve AAFP kılavuzu, yavruya **farklı türde kumlar sunmanın** faydalı olabileceğini belirtiyor; yavru hangisini tercih ettiğini böyle gösteriyor.' },

    { kind: 'baslik', metin: 'İlk veteriner ziyareti ve aşılar' },
    { kind: 'paragraf', metin: 'Yavru kedinin ilk veteriner ziyareti, kaç haftalık olursa olsun **eve gelir gelmez** yapılmalı; temel aşılar ise 6-8 haftalıkken başlıyor. Ziyaret zamanlamasını [[yavru-kedi-veterinere-ne-zaman-goturulmeli|yavru kedi veterinere ne zaman götürülmeli]], aşı programını [[kedi-asi-takvimi|kedi aşı takvimi]] yazılarımızda ayrıntılı anlattık.' },
    { kind: 'paragraf', metin: 'Her veteriner ziyareti aynı zamanda bir sosyalleşme fırsatı. Taşıma çantasını evde açık bırakmak ve yavrunun kendi isteğiyle girip çıkmasına izin vermek, ileride kliniğe gitmeyi çok daha kolay hale getiriyor.' },
  ],
  sss: [
    { soru: 'Yavru kedi ne zaman mamaya geçer?', cevap: 'AAHA ve AAFP kılavuzuna göre 3-5 haftalıkken dengeli ticari yavru mamasına geçiş başlayabiliyor.' },
    { soru: 'Yavru kedi günde kaç öğün yemeli?', cevap: 'Cornell\'e göre altı aylık olana kadar genellikle günde üç öğün en iyi sonucu veriyor.' },
    { soru: 'Yavru kedinin sosyalleşme dönemi ne zaman?', cevap: '2-3 haftada başlıyor ve 9-10 haftada kapanmaya yaklaşıyor.' },
    { soru: 'Yavru kediyle günde ne kadar ilgilenmeliyim?', cevap: 'Kılavuz günde 30-60 dakika insanlarla olumlu etkileşim öneriyor.' },
    { soru: 'Annesiz yavru kedi bulursam ne yapmalıyım?', cevap: 'Sıcak tutup aynı gün veteriner hekime götürün; beslenme planını hekim yaşına göre çıkarır.' },
    { soru: 'Yavru kediyle elle oynamak zararlı mı?', cevap: 'Kılavuz ellerin ve ayakların oyuncak gibi kullanılmamasını öneriyor; bunun yerine oyuncak kullanın.' },
  ],
  kaynaklar: [
    {
      kurum: 'American Animal Hospital Association (AAHA), American Association of Feline Practitioners (AAFP)',
      yazarlar: 'Quimby J, Gowland S, Carney HC, DePorter T, Plummer P, Westropp J',
      baslik: '2021 AAHA/AAFP Feline Life Stage Guidelines',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2021,
      kunye: '23(3):211-233',
      doi: '10.1177/1098612X21993657',
      adres: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10812130/',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Anorexia',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/anorexia',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'How often should you feed your cat?',
      adres: 'https://www.vet.cornell.edu/departments/cornell-feline-health-center/health-information/feline-health-topics/how-often-should-you-feed-your-cat',
    },
  ],
};
