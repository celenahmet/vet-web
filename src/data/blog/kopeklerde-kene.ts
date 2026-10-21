import type { BlogYazi } from './types';

export const kopeklerdeKene: BlogYazi = {
  slug: 'kopeklerde-kene',
  baslik: 'Köpeklerde Kene: Nasıl Temizlenir, Hangi Hastalıkları Taşır?',
  ozet: 'Köpekte kene görünce yapılacak ilk şey onu doğru yöntemle hemen çıkarmak. Kene nasıl çıkarılır, hangi hastalıkları taşır, koruma yıl boyu mu sürer?',
  kapakAlt:
    'Köpeklerde kene konulu yazının kapak görseli; doğa yürüyüşünde köpeğinin tüylerini kene için kontrol eden sahibi',
  kategori: 'Köpek',
  tarih: '2026-10-21',
  bloklar: [
    { kind: 'paragraf', metin: '**Köpekte görülen kene beklemeden ve doğru yöntemle çıkarılmalı.** Avrupa Evcil Hayvan Parazitleri Bilimsel Danışma Kurulu\'nun (ESCCAP) kılavuzu da görünen kenelerin fark edilir edilmez çıkarılmasını istiyor, çünkü kenenin taşıdığı hastalık etkenleri beslenme sırasında tükürükle geçiyor ve kene ne kadar uzun tutunursa risk o kadar artıyor.' },
    { kind: 'paragraf', metin: 'Aşağıda kenenin nasıl çıkarıldığını, hangi yöntemlerin zarar verdiğini, kenelerin köpeklere hangi hastalıkları taşıdığını ve korunmanın neden çoğu bölgede yıl boyu sürmesi gerektiğini anlatıyoruz.' },

    { kind: 'baslik', metin: 'Köpekte kene nasıl çıkarılır?' },
    { kind: 'liste', maddeler: [
      '**Alet:** İnce uçlu bir cımbız ya da evcil hayvanlar için yapılmış bir kene çıkarma aleti kullanılıyor; mümkünse eldivenle.',
      '**Tutuş:** Kene gövdesinden sıkılmadan, ağız kısmına en yakın noktadan, derinin hemen üstünden kavranıyor.',
      '**Çekiş:** Kene çevrilmeden, sarsılmadan, düzgün ve sabit bir kuvvetle dışarı çekiliyor. Sarsmak ağız parçalarının deride kalmasına yol açabiliyor.',
      '**Temizlik:** Isırık yeri ve eller sabun ve suyla yıkanıyor.',
      '**Atma:** Kenenin başka bir canlıya geçmemesi için kapalı bir kaba konuyor ya da banta sarılarak atılıyor; parmakla ezilmiyor.',
    ]},
    { kind: 'paragraf', metin: 'Ağız parçaları deride kalırsa zorlamak doğru olmuyor; ESCCAP, zorla çıkarılan kenenin geride kalan ağız parçalarının ısırık yerinde enfeksiyon ya da küçük bir apseye yol açabileceğini belirtiyor. Bölgede şişlik, kızarıklık ya da akıntı olursa veteriner hekime göstermek gerekiyor.' },
    { kind: 'yanilgi', baslik: '"Keneye yağ, kolonya ya da çakmak tutunca kendisi çıkar"', metin: 'ESCCAP kılavuzu keneyi çıkarırken yağ, alkol ya da eter kullanılmamasını açıkça yazıyor. ABD Hastalık Kontrol Merkezi de vazelin, oje, ısı gibi yöntemlerin keneyi tahriş edip enfekte sıvının deriye geçmesine yol açabileceğini belirtiyor. Bu yöntemlerle uğraşmak, keneyi çıkarmayı geciktirmekten başka işe yaramıyor.' },

    { kind: 'baslik', metin: 'Köpeklerde kene en çok nerede bulunur?' },
    { kind: 'paragraf', metin: 'Keneler vücudun her yerinde olabiliyor ama en çok **tüyün az ve derinin ince olduğu** yerlere tutunuyor: yüz, kulaklar, koltuk altları, parmak araları, kasık ve anüs çevresi. Doğa yürüyüşünden, parktan ya da bahçeden döndükten sonra bu bölgeleri elle yoklayarak kontrol etmek en etkili alışkanlık. Larva ve nimf denen genç evreler çok küçük olduğu için gözden kaçabiliyor; beslenip şişmiş dişi keneler ise 1 santimetreye ulaşabiliyor ve kolay görülüyor.' },

    { kind: 'baslik', metin: 'Kene köpeklere hangi hastalıkları taşır?' },
    { kind: 'paragraf', metin: 'Kenenin asıl önemi kan emmesi değil, taşıdığı hastalık etkenleri. ESCCAP\'ın Avrupa için hazırladığı tabloda köpekleri ilgilendiren başlıcaları şunlar:' },
    { kind: 'tablo', basliklar: ['Hastalık', 'Etken', 'Taşıyan kene'], satirlar: [
      ['Babesiosis (piroplazmoz)', 'Babesia canis, Babesia vogeli', 'Dermacentor, kahverengi köpek kenesi (Rhipicephalus sanguineus)'],
      ['Ehrlichiosis', 'Ehrlichia canis', 'Kahverengi köpek kenesi'],
      ['Anaplasmosis', 'Anaplasma türleri', 'Ixodes, kahverengi köpek kenesi'],
      ['Lyme hastalığı', 'Borrelia türleri', 'Ixodes'],
      ['Hepatozoonosis', 'Hepatozoon canis', 'Kahverengi köpek kenesi (kene yutulunca bulaşır)'],
    ]},
    { kind: 'paragraf', metin: 'Bu hastalıkların belirtileri belirsiz olabiliyor ve kene ısırığından günler ya da haftalar sonra ortaya çıkabiliyor. Bu yüzden kene çıkardıktan sonraki haftalarda köpeğinizde halsizlik, iştahsızlık, ateş, solgun diş eti ya da koyu renkli idrar fark edilirse veteriner hekime kene ısırığından da söz etmek önemli. Teşhis ve tedaviye hekim karar verir.' },

    { kind: 'baslik', metin: 'Keneden korunma yıl boyu mu sürmeli?' },
    { kind: 'paragraf', metin: 'ESCCAP\'a göre korunma, kenelerin aktif olduğu dönemin tamamını kapsamalı. Kışları sert geçen bölgelerde bu "kene mevsimi" demek; ancak sıcak bölgelerde ve kenenin evde yaşayabildiği durumlarda koruma **yıl boyu** gerekebiliyor. Kahverengi köpek kenesi güney Avrupa ikliminde ilkbahar ve yazın yoğunlaşsa da yıl boyu beslenebiliyor ve hayatını ev ile köpek barınağı içinde tamamlayabiliyor.' },
    { kind: 'tablo', basliklar: ['Köpeğin yaşamı', 'ESCCAP önerisi'], satirlar: [
      ['Dışarıya çok az çıkıyor', 'Düzenli kontrol; kene bulunursa elle çıkarma, gerekirse ardından kene ilacı'],
      ['Düzenli dışarı çıkıyor', 'Ürün etiketine uygun düzenli koruma; sıcak bölgelerde yıl boyu'],
      ['Sürekli kene riski var', 'Yıl boyu kesintisiz koruma'],
    ]},
    { kind: 'paragraf', metin: 'Kene bulunduktan sonra kalan dönem için hem o köpeğin hem evdeki diğer hayvanların korunmaya alınması öneriliyor. İç ve dış parazit takvimini [[kopeklerde-ic-ve-dis-parazit|köpeklerde iç ve dış parazit]] yazımızda ayrıntılı anlattık.' },
    { kind: 'uyari', metin: 'Köpekler için üretilen bazı kene ilaçları (yüksek yoğunluklu sentetik piretroidler) kediler için zehirli. Evde kedi de varsa ürünün veteriner hekime danışılarak seçilmesi gerekiyor; köpeğe ait ürün asla kediye uygulanmamalı.' },
  ],
  kontrolListesi: [
    'Yürüyüşten sonra kulaklara bakıldı mı?',
    'Evde kene cımbızı var mı?',
    'Kene koruması yıl boyu sürüyor mu?',
    'Evdeki kedi için ürün uygun mu?',
    'Kene çıkan tarih not edildi mi?',
  ],
  sss: [
    { soru: 'Köpekte kene nasıl çıkarılır?', cevap: 'İnce uçlu cımbız ya da kene aletiyle deriye en yakın yerden tutup çevirmeden, sabit kuvvetle çekerek.' },
    { soru: 'Keneyi çıkarırken yağ ya da kolonya kullanılır mı?', cevap: 'Hayır; ESCCAP yağ, alkol ve eter kullanılmamasını öneriyor.' },
    { soru: 'Kenenin başı içeride kalırsa ne olur?', cevap: 'Zorlamak doğru olmuyor; bölgede şişlik ya da akıntı olursa veteriner hekime göstermek gerekiyor.' },
    { soru: 'Kene köpeğe hangi hastalıkları bulaştırır?', cevap: 'Başlıcaları babesiosis, ehrlichiosis, anaplasmosis, Lyme hastalığı ve hepatozoonosis.' },
    { soru: 'Kene en çok köpeğin neresinde olur?', cevap: 'Yüz, kulaklar, koltuk altı, parmak araları, kasık ve anüs çevresi gibi tüyü az, derisi ince yerlerde.' },
    { soru: 'Kene koruması kışın da gerekir mi?', cevap: 'Sıcak bölgelerde ve kenenin evde yaşayabildiği durumlarda ESCCAP yıl boyu koruma öneriyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'European Scientific Counsel Companion Animal Parasites (ESCCAP)',
      baslik: 'Control of Ectoparasites in Dogs and Cats. ESCCAP Guideline 03, Seventh Edition',
      yil: 2022,
      adres: 'https://www.esccap.org/uploads/docs/cgqtqpf1_0720_ESCCAP_GL3__English_v19_1p.pdf',
    },
    {
      kurum: 'U.S. Centers for Disease Control and Prevention (CDC)',
      baslik: 'What to Do After a Tick Bite',
      adres: 'https://www.cdc.gov/ticks/after-a-tick-bite/index.html',
    },
  ],
};
