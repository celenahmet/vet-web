import type { BlogYazi } from './types';

export const kopeklerUsurMu: BlogYazi = {
  slug: 'kopekler-usur-mu',
  baslik: 'Köpekler Üşür mü? Kışın Dışarıda Kalabilir mi?',
  ozet: 'Köpekler üşür; uzun süre soğukta kalmak hipotermi ve donma riski taşır. Dışarıda kalma, barınak, yürüyüş, pati bakımı ve antifriz için öneriler.',
  kapakAlt:
    'Kar manzaralı pencerenin önünde yelek giymiş köpeği seven el',
  kategori: 'Köpek',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Evet, köpekler üşür; tüyleri olsa da uzun süre soğukta kalmak onları hipotermi ve donma yaralanmalarına açık hâle getirir. Bu yüzden köpeklerin kışın uzun süre dışarıda bırakılmaması öneriliyor.** Cornell Üniversitesi Veteriner Fakültesi\'nden hekimler, köpeklerin de insanlar gibi donma ve hipotermiye yatkın olduğunu belirtiyor. ASPCA\'nın özeti de basit: hava size çok soğuk geliyorsa evcil hayvanınız için de büyük olasılıkla çok soğuktur.' },
    { kind: 'paragraf', metin: 'Bu yazıda hangi köpeklerin soğuktan daha çok etkilendiğini, dışarıda zaman geçiren köpek için barınağın nasıl olması gerektiğini, kış yürüyüşlerinde mont, bot ve pati bakımını, antifriz ve buz çözücü gibi mevsime özgü riskleri veteriner fakülteleri, hayvan refahı kuruluşları ve hakemli çalışmalara dayanarak anlatıyoruz. Kedilerdeki durum için [[kediler-usur-mu|kediler üşür mü]] yazısına bakılabilir.' },

    { kind: 'tablo', basliklar: ['Kış riski', 'Önerilen önlem'], satirlar: [
      ['Uzun süre soğukta kalmak', 'Köpeğin içeride tutulması, dışarıdakine rüzgârdan koruyan barınak'],
      ['Soğuk ve rüzgârlı havada yürüyüş', 'Küçük ve kısa tüylü köpeğe mont, yürüyüşün kısa tutulması'],
      ['Patilerde buz ve kar topakları', 'Patilerin dışarıdayken kontrol edilmesi, pati arası tüyün kısaltılması'],
      ['Yol tuzu ve buz çözücüler', 'Yürüyüş sonrası patilerin ve karın bölgesinin yıkanıp kurulanması'],
      ['Antifriz', 'Ulaşılamaz yerde saklanması, sızıntının hemen temizlenmesi'],
      ['Karda kaybolma', 'Karda ve buzda tasmasız bırakılmaması, tasmada kimlik künyesi'],
      ['Kuru ev havası', 'Evin nemli tutulması, dışarıdan gelen köpeğin hemen kurulanması'],
    ]},

    { kind: 'baslik', metin: 'Köpekler neden üşür?' },
    { kind: 'paragraf', metin: 'Köpeğin tüyü onu bir ölçüde korur, ama soğuğa karşı tam bir kalkan değildir. Cornell Üniversitesi Hayvan Hastanesi\'nden hekim Brian Collins, soğuk iklimlerde yaşayan hayvanların hipotermi riski taşıdığını söylüyor. Hipotermi, donma derecesindeki bir ortamda uzun süre kalmanın yol açabileceği ve ölümcül olabilen bir vücut ısısı düşüşüdür.' },
    { kind: 'paragraf', metin: 'Köpeğin vücudu soğuğa bir ölçüde uyum sağlayabiliyor. Japonya\'da dış ortamda yetiştirilen köpeklerle yapılan eski bir fizyoloji çalışmasında, kışın dışarıda bakılan köpeklerin iki yolla soğuğa alıştığı sonucuna varıldı: tüylerinin yalıtım etkisi arttı ve dinlenme hâlindeki ısı üretimleri yükseldi. Bu uyum, köpeğin her soğukta güvende olduğu anlamına gelmiyor. Çalışma dişi melez köpeklerde, kalorimetre içinde yapılan ölçümlere dayanıyor; rüzgâr, kar, ıslaklık ya da köpeğin yaşı ve sağlığı gibi etkenleri ölçmüyor.' },
    { kind: 'yanilgi', baslik: '"Köpeğin tüyü var, kışın dışarıda bir şey olmaz"', metin: 'Tüy soğuğu tamamen engellemez. Veteriner kaynakları, köpeklerin de insanlar gibi donma ve hipotermiye yatkın olduğunu, hayvanların soğukta uzun süre dışarıda bırakılmaması gerektiğini belirtiyor. Dışarıda zaman geçirmek zorunda olan köpek için rüzgârdan ve soğuktan koruyan bir barınak ile temiz su gerekiyor.' },

    { kind: 'baslik', metin: 'Hangi köpekler soğuktan daha çok etkilenir?' },
    { kind: 'paragraf', metin: 'Her köpek soğuktan aynı ölçüde etkilenmez. Cornell\'den Collins\'e göre çok genç hayvanlar, yaşlı hayvanlar ve kısa tüylü ırklar en savunmasız grup. Aynı hekim, küçük ve kısa tüylü köpeklerin soğuk ve rüzgârlı havada kısa yürüyüşlerde bile monta ihtiyaç duyabileceğini söylüyor.' },
    { kind: 'liste', maddeler: [
      '**Yavru köpekler:** Cornell\'in en savunmasız saydığı gruplardan biri. Yavruların ilk aylarındaki bakım ve kontroller için [[yavru-kopek-veterinere-ne-zaman-goturulmeli|yavru köpek veterinere ne zaman götürülmeli]] yazısına bakılabilir.',
      '**Yaşlı köpekler:** Aynı kaynağa göre soğuktan en çok etkilenen gruplardan biri.',
      '**Küçük ve kısa tüylü köpekler:** Soğuk ve rüzgârlı havada mont gerekebiliyor.',
      '**Uzun ve kalın tüylü köpekler:** Tüy daha iyi korur, ancak patilerde ve tüylerde buz ve kar birikebiliyor.',
    ]},
    { kind: 'paragraf', metin: 'Düşük vücut sıcaklığı yalnızca soğukta kalmaktan kaynaklanmaz. Kedi ve köpeklerde hipotermiyi inceleyen bir derlemede, hipoterminin çevresel maruziyetin yanı sıra hastalık, ilaçlar, anestezi ya da travmaya bağlı da gelişebildiği belirtiliyor. Bu yüzden sıcak bir evde yaşadığı hâlde sürekli üşüyormuş gibi görünen bir köpeğin veteriner hekime gösterilmesi gerekiyor.' },

    { kind: 'baslik', metin: 'Köpek kışın dışarıda kalabilir mi?' },
    { kind: 'paragraf', metin: 'Kısa yürüyüşler ve bahçede geçirilen kısa süreler çoğu köpek için sorun değil; asıl risk uzun süre soğukta kalmak. ASPCA, dışarıda bırakılan hayvanların donabileceğini, yönünü şaşırabileceğini, kaybolabileceğini, çalınabileceğini, yaralanabileceğini ya da ölebileceğini hatırlatarak hayvanların içeride tutulmasını öneriyor. Cornell\'den Collins de evcil hayvanların soğukta uzun süre dışarıda bırakılmaması gerektiğini söylüyor.' },
    { kind: 'paragraf', metin: 'ASPCA soğuk havada köpeğin arabada yalnız bırakılmamasını da istiyor: araba soğuğu içinde tutan bir buzdolabı gibi davranabiliyor ve hayvanın donarak ölmesine yol açabiliyor.' },
    { kind: 'paragraf', metin: 'Türkiye\'de konunun hukuki bir yanı da var. 5199 sayılı Hayvanları Koruma Kanunu\'nun 4. maddesi, hayvanların türüne özgü şartlarda bakılmasını, beslenmesini ve barındırılmasını esas alıyor. 5. maddesi ise bir hayvanı sahiplenen kişiyi hayvanı barındırmak, etolojik ihtiyaçlarını karşılamak ve sağlığına dikkat etmekle yükümlü tutuyor. Kanunun ayrıntıları [[5199-sayili-kanun|5199 sayılı Kanun]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Dışarıda zaman geçiren köpek için barınak' },
    { kind: 'paragraf', metin: 'Bahçede ya da dışarıda zaman geçiren köpekler için Cornell\'in önerisi, rüzgârdan ve soğuktan koruyan bir barınak ile temiz su sağlamak. Collins, köpek kulübelerinde samanın iyi bir yalıtım malzemesi olduğunu belirtiyor.' },
    { kind: 'liste', maddeler: [
      '**Yalıtım:** Kulübede altlık olarak saman öneriliyor.',
      '**Konum:** Kulübenin rüzgâr almayan bir yerde olması gerekiyor.',
      '**Su:** Her zaman temiz suya ulaşılabilmesi, kabın donup donmadığının düzenli kontrol edilmesi gerekiyor.',
      '**Uyku yeri:** ASPCA, hayvanın uyuyacağı yerin sıcak, yerden yüksek ve cereyandan uzak olmasını öneriyor.',
    ]},
    { kind: 'paragraf', metin: 'Apartman bahçesinde ya da ortak alanlarda köpek bakımıyla ilgili kurallar [[apartmanda-kedi-kopek-beslemek|apartmanda kedi köpek beslemek]] yazısında ayrıca ele alınıyor.' },

    { kind: 'baslik', metin: 'Kış yürüyüşü: süre, mont ve bot' },
    { kind: 'paragraf', metin: 'Köpeğin üşüdüğünü anlamanın bir yolu davranışına bakmak. Cornell\'den Collins, patilerini yerden kaldıran ya da yürümekte isteksiz görünen bir köpeğin çok üşüyor olabileceğini söylüyor. Cornell\'den hekim Lauri-Jo Gamble de yürüyüş süresi konusunda sağduyulu olunmasını, yürüyüşlerin kısa tutulmasını ve titreme, huzursuzluk ya da yavaş hareket etme gibi işaretlerin izlenmesini öneriyor. Bu işaretler görülüyorsa köpeğin eve alınması, durum geçmiyorsa veteriner hekime başvurulması gerekiyor.' },
    { kind: 'liste', maddeler: [
      '**Mont ya da kazak:** ASPCA, kısa tüylü köpekler için yüksek yakalı, kuyruk dibinden karın bölgesine kadar örten bir mont ya da kazak öneriyor.',
      '**Bot:** Collins\'e göre dışarıda daha uzun kalacak köpeklere bot gerekebiliyor. Bot, tuzun ve kumun parmak aralarına girmesini de önlüyor.',
      '**Tasma ve kimlik:** ASPCA, köpeğin karda ve buzda, özellikle kar fırtınasında tasmasız bırakılmamasını öneriyor; köpekler karda koku izini kaybedip kolayca kaybolabiliyor. Kuruluşa göre kışın diğer mevsimlere göre daha fazla köpek kayboluyor, bu yüzden tasmada kimlik künyesi bulunması gerekiyor.',
      '**Tırnak:** Kışın beton zeminle temas azaldığı için Gamble tırnakların daha sık kesilmesini öneriyor.',
    ]},
    { kind: 'paragraf', metin: 'Kaybolan bir köpeği bulmak için atılacak adımlar [[kaybolan-kedi-kopek-nasil-bulunur|kaybolan kedi köpek nasıl bulunur]] yazısında, mikroçipin işlevi ise [[mikrocip-nedir|mikroçip nedir]] yazısında anlatılıyor. Genel yürüyüş kuralları için [[kopek-gezdirme-kurallari|köpek gezdirme kuralları]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Patiler, tuz ve buz çözücüler' },
    { kind: 'paragraf', metin: 'Kışın patiler en çok zorlanan bölge. Cornell\'e göre uzun tüylü köpeklerin patilerinde buz ve kar birikebiliyor; dışarıdayken patilerin düzenli kontrol edilmesi ve pati tüylerinin kısaltılması buz birikmesini önlemeye yardımcı oluyor. ASPCA da pati yastıklarının arasında oluşan kar topaklarının temizlenmesini öneriyor.' },
    { kind: 'paragraf', metin: 'Yolların tuzlandığı yerlerde ek önlem gerekiyor. Cornell\'den Gamble, tuzun ve çoğu buz çözücünün köpekler için zehirli olabileceğini, köpeğin yoğun tuzlanmış yol ve kaldırımlardan uzak tutulmasını öneriyor. ASPCA her yürüyüşten sonra patilerin ve karın bölgesinin yıkanıp kurulanmasını, pati yastıklarında çatlak ve parmak aralarında kızarıklık olup olmadığına bakılmasını istiyor. Kuruluş yürüyüş öncesinde veterinerin uygun gördüğü bir pati koruyucunun sürülebileceğini ve mümkünse evcil hayvan dostu buz çözücülerin kullanılmasını da ekliyor.' },
    { kind: 'paragraf', metin: 'Tüy bakımında da kışa özgü bir kural var. ASPCA, köpeğin kışın deriye kadar tıraş edilmemesini öneriyor; uzun tüy daha fazla sıcaklık sağlıyor. Uzun tüylü köpeklerde tüylerin yalnızca buz topaklarını, tuz kristallerini ve buz çözücü kalıntılarını azaltacak kadar kısaltılması öneriliyor.' },

    { kind: 'baslik', metin: 'Antifriz ve kışa özgü diğer riskler' },
    { kind: 'paragraf', metin: 'Kış hazırlığında arabalara konan antifriz köpekler için ciddi bir tehlike. Cornell\'den Collins, çoğu antifriz markasındaki etken maddenin etilen glikol olduğunu, bu tatlı tadın hayvanları çekebildiğini ve son derece zehirli olduğunu söylüyor. Antifrizin hayvanların ulaşamayacağı bir yerde saklanması ve dökülen antifrizin hemen temizlenmesi gerekiyor. ASPCA ayrıca etilen glikol yerine propilen glikol içeren ürünlerin tercih edilmesini öneriyor.' },
    { kind: 'paragraf', metin: 'Soba ve şömine kullanılan evlerde küle dikkat etmek gerekiyor. Collins, odun sobası ve şömine küllerinde hâlâ köz varsa evcil hayvanları yakabileceğini, bu yüzden küllerin tamamen soğuduktan sonra boşaltılmasını öneriyor.' },
    { kind: 'uyari', metin: 'Köpeğin antifriz, buz çözücü ya da başka bir kimyasal yuttuğundan şüpheleniliyorsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Evde kendi başına bir şey verilmemeli; ne yapılacağına hekim karar verir. Evdeki diğer tehlikeler için [[kopeklerde-zehirlenme|köpeklerde zehirlenme]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Evde kış: yatak, mama ve kuru hava' },
    { kind: 'paragraf', metin: 'ASPCA, köpeğin uyuyacağı yerin sıcak, yerden yüksek ve cereyandan uzak olmasını, içinde sıcak bir battaniye ya da yastık bulunan bir köpek yatağının bunun için uygun olduğunu belirtiyor. Kuruluş, soğuk dış hava ile sıcak ev arasında sürekli gidip gelmenin deride kaşıntı ve pullanmaya yol açabileceğini, evin nemli tutulmasının ve dışarıdan gelen köpeğin hemen kurulanmasının bu konuda yardımcı olduğunu ekliyor.' },
    { kind: 'paragraf', metin: 'Beslenme tarafında ASPCA, hayvanların kışın sıcak kalmak için daha fazla enerji harcadığını, biraz daha fazla beslemenin gereken kaloriyi sağlayabileceğini, bol su içmenin de deriyi kuruluktan koruduğunu söylüyor. Bu öneri özellikle dışarıda vakit geçiren köpekler için anlamlı. Kışın evde daha az hareket eden bir köpekte ise mama artışı kilo alımına yol açabilir; miktarın veteriner hekimle konuşulması önerilir. Konu için [[kopek-gunde-kac-gram-mama-yer|köpek günde kaç gram mama yer]] ve [[kopegim-fazla-kilolu-mu|köpeğim fazla kilolu mu]] yazılarına bakılabilir.' },
  ],
  sss: [
    { soru: 'Köpekler kışın üşür mü?', cevap: 'Evet, köpekler üşür. Tüyleri onları bir ölçüde korusa da uzun süre soğukta kalmak hipotermi ve donma yaralanmalarına yol açabilir. Veteriner kaynakları, köpeklerin soğukta uzun süre dışarıda bırakılmamasını öneriyor.' },
    { soru: 'Köpek kışın dışarıda yatabilir mi?', cevap: 'Veteriner kaynakları köpeklerin soğukta uzun süre dışarıda bırakılmamasını öneriyor. Dışarıda zaman geçirmek zorunda olan bir köpeğin rüzgârdan ve soğuktan koruyan bir barınağı, samanla yalıtılmış bir kulübesi ve donmayan temiz suyu olması gerekir.' },
    { soru: 'Köpeğin üşüdüğü nasıl anlaşılır?', cevap: 'Patilerini yerden kaldırması ya da yürümekte isteksiz olması çok üşüdüğünü gösterebilir. Cornell\'den hekimler titreme, huzursuzluk ve yavaş hareket etmenin de izlenmesini öneriyor. Bu durumda köpeğin eve alınması, geçmiyorsa veteriner hekime başvurulması gerekir.' },
    { soru: 'Hangi köpeklere kışın mont giydirilmeli?', cevap: 'Küçük ve kısa tüylü köpekler soğuk ve rüzgârlı havada kısa yürüyüşlerde bile monta ihtiyaç duyabilir. ASPCA, yüksek yakalı ve kuyruk dibinden karın bölgesine kadar örten bir mont ya da kazak öneriyor. Uzun süre dışarıda kalacak köpeklere bot da gerekebilir.' },
    { soru: 'Yol tuzu köpeklere zarar verir mi?', cevap: 'Evet, tuz ve çoğu buz çözücü köpekler için zehirli olabilir ve patileri tahriş edebilir. Yoğun tuzlanmış yollardan uzak durulması, yürüyüş sonrası patilerin ve karın bölgesinin yıkanıp kurulanması öneriliyor. Bot da tuzun parmak aralarına girmesini önler.' },
    { soru: 'Köpeğin tüyü kışın kesilmeli mi?', cevap: 'Kışın deriye kadar tıraş önerilmez, çünkü uzun tüy daha fazla sıcaklık sağlar. Uzun tüylü köpeklerde yalnızca buz topaklarını ve tuz kalıntılarını azaltacak kadar kısaltma, pati arasındaki tüylerin kısaltılması ise buz birikmesini önlemek için öneriliyor.' },
    { soru: 'Antifriz köpekler için neden tehlikelidir?', cevap: 'Çoğu antifrizdeki etilen glikol tatlı bir tada sahiptir, hayvanları çekebilir ve son derece zehirlidir. Ulaşılamaz yerde saklanması ve sızıntıların hemen temizlenmesi gerekir. Yutma şüphesinde vakit kaybetmeden veteriner hekime başvurmak gerekir.' },
  ],
  kontrolListesi: [
    'Cereyansız sıcak bir yatak var mı?',
    'Kulübe rüzgârdan korunuyor mu?',
    'Su kabının donması izleniyor mu?',
    'Yürüyüşten sonra patiler siliniyor mu?',
    'Antifriz ulaşılamaz yerde mi?',
    'Tasmada kimlik künyesi var mı?',
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University College of Veterinary Medicine',
      baslik: 'Keeping your furry friends safe during winter weather',
      yil: 2021,
      adres: 'https://vet.cornell.edu/news/20210129/keeping-your-furry-friends-safe-during-winter-weather',
    },
    {
      kurum: 'ASPCA (American Society for the Prevention of Cruelty to Animals)',
      baslik: 'Cold Weather Safety Tips',
      adres: 'https://www.aspca.org/pet-care/general-pet-care/cold-weather-safety-tips',
    },
    {
      kurum: 'Oradell Animal Hospital; Maine Veterinary Referral Center',
      yazarlar: 'Brodeur A, Wright A, Cortes Y',
      baslik: 'Hypothermia and targeted temperature management in cats and dogs',
      dergi: 'Journal of Veterinary Emergency and Critical Care',
      yil: 2017,
      kunye: '27(2):151-163',
      doi: '10.1111/vec.12572',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/28122159/',
    },
    {
      kurum: 'The Japanese Journal of Physiology',
      yazarlar: 'Sugano Y',
      baslik: 'Seasonal changes in heat balance of dogs acclimatized to outdoor climate',
      dergi: 'The Japanese Journal of Physiology',
      yil: 1981,
      kunye: '31(4):465-75',
      doi: '10.2170/jjphysiol.31.465',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/7328901/',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu',
      adres: 'https://www.mevzuat.gov.tr/MevzuatMetin/1.5.5199.pdf',
    },
  ],
};
