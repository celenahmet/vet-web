import type { BlogYazi } from './types';

export const kediKumuCesitleri: BlogYazi = {
  slug: 'kedi-kumu-cesitleri',
  baslik: 'Kedi Kumu Çeşitleri: Hangisi Seçilmeli?',
  ozet: 'Kedilerin çoğu ince taneli, kokusuz ve topaklanan kumu tercih ediyor. Kum türleri, derinlik, temizlik sıklığı ve kum değiştirme yolu kaynaklarıyla burada.',
  kapakAlt:
    'Farklı kum çeşitleriyle dolu üç kabın yanında duran kedi',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kedilerin çoğu için en uygun seçim ince taneli, kokusuz ve topaklanan bir kum; ama asıl ölçü kedinin kendi tercihi ve kumun temiz tutulması.** International Cat Care, kedinin çöl kökenli atası nedeniyle ince, kum benzeri bir dokunun kedinin içgüdüsel tercihine en yakın seçenek olduğunu, pek çok kedinin topaklanan kumu tercih ettiğini belirtiyor. Cornell Üniversitesi Kedi Sağlığı Merkezi de kedilerin çoğunun kokusuz, ince dokulu kumu sevdiğini söylüyor.' },
    { kind: 'paragraf', metin: 'Raflarda kil, silika, odun pelet, kağıt ve mısır gibi bitkisel malzemeden yapılmış onlarca kum var. Aşağıda bu türlerin farkını, kedilerin tercihleri üzerine yapılmış çalışmaları, kumun ne kadar derin konacağını, ne sıklıkla temizleneceğini ve kum türü değiştirilecekse bunun nasıl yapılacağını kaynaklarıyla anlatıyoruz. Kısa cevap: kediniz şu anki kumu sorunsuz kullanıyorsa, onu değiştirmek için çoğu zaman bir sebep yok.' },

    { kind: 'baslik', metin: 'Kedi kumu türleri neler?' },
    { kind: 'paragraf', metin: 'International Cat Care, kedi kumunun kağıt, odun, silika, mısır, kil ve sürdürülebilir kabul edilen başka yeni malzemelerden üretildiğini belirtiyor. Kurum bunların pek çoğunun hafif, doğada çözünebilen ve koku gidermede başarılı olduğunu da ekliyor. Türler kabaca iki büyük gruba ayrılıyor: ıslanınca topaklanan kumlar ve topaklanmayan kumlar.' },
    { kind: 'tablo', basliklar: ['Kum türü', 'Kısaca', 'Bilinmesi gereken'], satirlar: [
      ['Topaklanan kil kumu', 'Islanınca topak olur, topak kürekle alınır', '2025 çalışmasında kedilerin tercih ettiği tür'],
      ['Topaklanmayan kil kumu', 'Sıvıyı emer ama topak yapmaz', 'Tamamen değiştirme haftalık öneriliyor'],
      ['Silika kum', 'Kristal ya da granül yapıda', 'Kedi alışkın değilse geçiş yavaş yapılmalı'],
      ['Odun pelet', 'Sıkıştırılmış talaştan iri taneler', 'İnce taneli dokudan farklı, bazı kediler yadırgayabilir'],
      ['Kağıt ve mısır gibi bitkisel kumlar', 'Hafif, doğada çözünebilen seçenekler', 'Kedinin alışkanlığı belirleyici'],
      ['Kokulu kumlar', 'Esans eklenmiş herhangi bir tür', 'Kedilerin çoğu kokusuz kumu tercih ediyor'],
    ]},
    { kind: 'paragraf', metin: 'Piyasada topaklanan kil kumu çoğunlukla bentonit kumu adıyla satılıyor. Tablodaki üçüncü sütun, bir türün iyi ya da kötü olduğunu söylemiyor; aynı kum bir kedi için ideal, başka bir kedi için rahatsız edici olabiliyor. Bu yüzden markadan çok kedinin davranışına bakmak gerekiyor.' },

    { kind: 'baslik', metin: 'Kediler hangi kumu tercih ediyor?' },
    { kind: 'paragraf', metin: 'Bu konuda en yeni çalışmalardan biri 2025 yılında Journal of Veterinary Medical Science dergisinde yayımlandı. Azabu Üniversitesi Veteriner Fakültesi araştırmacılarının da yer aldığı çalışmada, evde yaşayan kedilere aynı anda birden çok kum kabı sunuldu. Kediler en az 50 cm uzunluğundaki kapları ve topaklanan kil kumunu tercih etti. Bu iki özelliğin bir arada sunulduğu düzen, kum dışına yapılan çişi ve kakayı azalttı. Çalışmanın ilk yazarının bir evcil hayvan ürünleri firmasında çalıştığı makalede çıkar beyanı olarak yer alıyor; sonucu okurken bunu da bilmek faydalı.' },
    { kind: 'paragraf', metin: 'International Cat Care de benzer bir yöne işaret ediyor: topaklanan kum, kirlenen kısmın kolayca alınmasını sağladığı için kabı temiz ve kullanmaya davetkâr tutuyor. Kedi, zaten kirlenmiş bir kabı kullanmaya daha isteksiz oluyor.' },
    { kind: 'yanilgi', baslik: '"Kedi her kuma alışır, hangisi ucuzsa o alınır"', metin: 'International Cat Care, kum tercihlerinin yavrulukta oluştuğunu ve kedinin yavruyken alıştığı malzemeyle devam etmenin onu en mutlu edeceğini belirtiyor. Cornell Üniversitesi de kum markasının ani değişiminin kedinin kumu sevmemesine yol açabildiğini söylüyor. Kumu reddeden kedi, evin başka bir köşesini seçebiliyor.' },

    { kind: 'baslik', metin: 'Topaklanan ve topaklanmayan kum arasındaki fark' },
    { kind: 'paragraf', metin: 'Fark yalnızca kullanımda değil, temizlik düzeninde de ortaya çıkıyor. International Cat Care\'e göre kum kabından kirlenmiş kısım günde en az iki kez alınmalı. Kabın tamamen boşaltılıp yıkanması ve kumun yenilenmesi ise topaklanan kumda 2 ila 4 haftada bir, topaklanmayan kumda haftada bir öneriliyor.' },
    { kind: 'paragraf', metin: 'Topaklanmayan kumda çiş kumun içine dağıldığı için kirlenen kısmı tek tek ayırmak zorlaşıyor; bu da tüm kumun daha sık yenilenmesi demek. Topaklanan kumda ise topak alınıp eksilen kadar temiz kum eklemek yetiyor. Cornell Üniversitesi de topaklanan kum kullanılıyorsa dışkının ve topakların her gün alınmasını, gerektikçe temiz kum eklenmesini öneriyor.' },

    { kind: 'baslik', metin: 'Kokulu kum ve naylon örtü neden önerilmiyor?' },
    { kind: 'paragraf', metin: 'Kokulu kumlar ve kum kokusu gidericiler insanın burnuna hoş gelse de kedinin burnu çok daha hassas. International Cat Care, kedilerin bu kokuları baskın bulabildiğini, kabın içine serilen naylon örtülere tırnaklarının takılmasının da kedi için rahatsız edici olduğunu belirtiyor. Kurum, bunun kedinin tuvaletini başka bir yere yapmasına yol açabileceğini ekliyor.' },
    { kind: 'paragraf', metin: 'Cornell Üniversitesi de kedilerin çoğunun kokusuz kumu tercih ettiğini söylüyor ve naylon örtünün kabı temiz tutmaya yardımcı olsa da pek çok kedinin bundan hoşlanmadığını belirtiyor. Kokuyu azaltmanın daha sağlam yolu, kumu sık sık temizlemek.' },
    { kind: 'liste', maddeler: [
      'Kokusuz kum seçmek',
      'Kum kabına kokulu sprey ya da esans sıkmamak',
      'Naylon örtüyü kedi kabul etmiyorsa kaldırmak',
      'Kabı yıkarken ağır kokulu deterjandan kaçınmak',
      'Kokuyu, kum değil temizlik sıklığıyla kontrol etmek',
    ]},

    { kind: 'baslik', metin: 'Kum ne kadar derin konmalı, kap nasıl seçilmeli?' },
    { kind: 'paragraf', metin: 'International Cat Care, araştırmaların kedilerin kapta yaklaşık 3 cm kum derinliğini tercih ettiğini gösterdiğini belirtiyor. Cornell Üniversitesi\'nin önerisi de bir ila iki inç, yani yaklaşık 2,5 ila 5 cm. Çok fazla kum, kokuyu ve kirliliği gizleyip temizliği geciktirebiliyor; çok az kum ise kedinin eşeleyip gömmesine yetmiyor.' },
    { kind: 'paragraf', metin: 'Kum kadar kap da önemli. International Cat Care, ideal kabın kedinin burnundan kuyruk köküne kadar olan boyunun bir buçuk katı uzunluğunda olmasını öneriyor ve dikdörtgen kapların köşe ya da oval kaplardan daha fazla alan sağladığını belirtiyor. Evdeki kedi sayısı kadar kum kabı, artı bir kap önerisi de hem International Cat Care hem Cornell Üniversitesi tarafından veriliyor. Yavrular için kap seçimini ve kuma alıştırmayı [[yavru-kedi-tuvalet-egitimi|yavru kedi tuvalet eğitimi]] yazımızda ayrıntılı anlattık.' },
    { kind: 'paragraf', metin: 'Kapalı ya da açık kap konusunda Ross Üniversitesi Veteriner Fakültesi\'nin 2013 çalışması ilginç bir sonuç verdi. 28 kediye kapalı ve açık kap birlikte sunulduğunda, genel olarak iki kap arasında anlamlı bir kullanım farkı çıkmadı. Sekiz kedi belirgin bir tercih gösterdi; dördü kapalıyı, dördü açığı seçti. Araştırmacılar, kaplar en az günde bir kez temizlendiğinde kedilerin çoğunun kap tipine göre bir tercih göstermeyeceğini düşünüyor ve kedinin kendi tercihini anlamak için farklı kap türlerinin denenmesini öneriyor.' },

    { kind: 'baslik', metin: 'Kum türü değiştirilecekse nasıl yapılmalı?' },
    { kind: 'paragraf', metin: 'Bazen fiyat, bulunabilirlik ya da toz gibi sebeplerle kum türünü değiştirmek gerekiyor. Cornell Üniversitesi, marka değiştirmek zorunlu hâle gelirse bunun yavaş yavaş, yeni kumu eskisinin içine az miktarda katarak yapılmasını öneriyor. Böylece kedi yeni dokuya ve kokuya alışacak zamanı buluyor.' },
    { kind: 'paragraf', metin: 'Bir başka yol da yeni kumu ayrı bir kapta, eskisinin yanında sunmak ve kedinin hangisini kullandığına bakmak. Cornell Üniversitesi, kedinin en çok sevdiği birleşimi bulmak için birkaç farklı kap ve kum türünün denenmesi gerekebileceğini belirtiyor. Kedinin tercih ettiği yüzey belliyse kum buna göre seçilebiliyor; örneğin halı gibi yumuşak yüzeyleri seçen bir kedi için daha yumuşak ve ince taneli bir kum öneriliyor.' },
    { kind: 'uyari', metin: 'Kum kabını yıkarken temizlik ürününe dikkat etmek gerekiyor. International Cat Care, suyla karışınca bulanıklaşan bazı dezenfektanların, örneğin kloroksilenol içerenlerin, kediler için zehirli olduğunu belirtiyor ve kabın sıcak su ile biyolojik deterjanla yıkanıp iyice durulanmasını, kurutulmasını öneriyor. Kedinin bir temizlik ürününe maruz kaldığından şüpheleniliyorsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Kum temizliği ve toksoplazma' },
    { kind: 'paragraf', metin: 'Kum temizliği insan sağlığıyla da ilgili. Cornell Üniversitesi Kedi Sağlığı Merkezi, kedi dışkısındaki Toxoplasma gondii yumurtacıklarının bulaşıcı hâle gelmesi için en az 24 saat geçmesi gerektiğini, bu yüzden dışkının kum kabından sık alınmasının, eldivenle çalışılıp sonra ellerin yıkanmasının bulaşma olasılığını en aza indirdiğini belirtiyor.' },
    { kind: 'paragraf', metin: 'Aynı kaynak, en çok risk altında olan grupların gebe kadınlar ve bağışıklığı baskılanmış kişiler olduğunu, bu kişilerin kum kabını temizlememesini öneriyor. Kedi sahibi olmanın tek başına enfeksiyon anlamına gelmediğini, evde yaşayan, avlanmayan ve çiğ et yemeyen kedilerin enfekte olma olasılığının düşük olduğunu da ekliyor. Evde gebelik varsa ya da bağışıklık sorunu olan biri yaşıyorsa, konuyu hem hekimle hem veteriner hekimle konuşmak önerilir.' },

    { kind: 'baslik', metin: 'Kum kabı davranışı değişirse' },
    { kind: 'paragraf', metin: 'Cornell Üniversitesi, kum kabı sorunlarının sebebinin kaba ya da kuma karşı isteksizlik olabileceği gibi tıbbi bir sorun da olabileceğini belirtiyor. International Cat Care de bazı sağlık sorunlarının kedinin kabı daha sık kullanmasına yol açabildiğini, bu durumda temizliğin daha sık yapılması gerektiğini söylüyor.' },
    { kind: 'paragraf', metin: 'Bu yüzden kum değişimiyle açıklanamayan her farklılık, örneğin kabı her zamankinden çok daha sık kullanma, kabın içinde uzun süre zorlanma, çişte renk değişimi ya da kum dışına tuvalet yapma, veteriner hekime danışmayı gerektiriyor. Kumu değiştirmek bu durumlarda çözüm değil. Çişte kan görüldüğünde neler bilinmesi gerektiğini [[kedi-idrarinda-kan|kedi idrarında kan]] yazımızda, kabızlık şüphesini [[kedilerde-kabizlik|kedilerde kabızlık]] yazımızda anlattık.' },
  ],
  sss: [
    { soru: 'En iyi kedi kumu hangisi?', cevap: 'Tek bir en iyi kum yok; kedilerin çoğu ince taneli, kokusuz ve topaklanan kumu tercih ediyor. 2025 tarihli bir çalışmada kediler topaklanan kil kumunu seçti. Yine de kediniz mevcut kumu sorunsuz kullanıyorsa, onu değiştirmek için çoğu zaman sebep yok.' },
    { soru: 'Kedi kumu ne sıklıkla tamamen değiştirilmeli?', cevap: 'International Cat Care\'e göre topaklanan kumda 2 ila 4 haftada bir, topaklanmayan kumda haftada bir. Bunun yanında kirlenen kısmın günde en az iki kez alınması öneriliyor. Kedi sayısı arttıkça değişim daha sık gerekebiliyor.' },
    { soru: 'Kum kabına ne kadar kum konmalı?', cevap: 'International Cat Care\'e göre yaklaşık 3 cm. Araştırmalar kedilerin bu derinliği tercih ettiğini gösteriyor. Cornell Üniversitesi de bir ila iki inç, yani yaklaşık 2,5 ila 5 cm arasını öneriyor.' },
    { soru: 'Kokulu kedi kumu kullanmak doğru mu?', cevap: 'Genellikle önerilmiyor. Cornell Üniversitesi kedilerin çoğunun kokusuz kumu tercih ettiğini, International Cat Care ise kokuların kediye baskın gelip kum dışına tuvalet yapmaya yol açabildiğini belirtiyor. Kokuyu kontrol etmenin yolu sık temizlik.' },
    { soru: 'Kedinin kumu nasıl değiştirilir?', cevap: 'Yavaş yavaş değiştirilir. Cornell Üniversitesi, yeni kumun eski kumun içine az miktarda katılarak geçiş yapılmasını öneriyor. Yeni kumu ayrı bir kapta yanına koyup kedinin hangisini seçtiğine bakmak da işe yarayabiliyor.' },
    { soru: 'Gebeyken kedi kumu temizlenir mi?', cevap: 'Cornell Üniversitesi, gebe kadınların ve bağışıklığı baskılanmış kişilerin kum kabını temizlememesini öneriyor. Dışkının günlük alınması, eldiven kullanılması ve sonrasında ellerin yıkanması da toksoplazma bulaşma olasılığını azaltıyor. Ayrıntı için hekimle konuşmak önerilir.' },
    { soru: 'Kapalı kum kabı mı açık kum kabı mı daha iyi?', cevap: 'Kediden kediye değişiyor. 2013 tarihli bir çalışmada 28 kedide iki kap türü arasında genel olarak anlamlı fark çıkmadı; az sayıda kedi belirgin bir tercih gösterdi. Cornell Üniversitesi ise kedilerin çoğunun açık kabı tercih ettiğini belirtiyor.' },
  ],
  kontrolListesi: [
    'Kum kokusuz ve ince taneli mi?',
    'Kum derinliği 3 cm civarında mı?',
    'Topaklar günde iki kez alınıyor mu?',
    'Kedi sayısı artı bir kap var mı?',
    'Kum değişimi yavaş mı yapılıyor?',
    'Tuvalet düzeni değişti mi?',
  ],
  kaynaklar: [
    {
      kurum: 'International Cat Care',
      baslik: 'Choosing a litter tray for your cat',
      adres: 'https://icatcare.org/articles/choosing-a-litter-tray-for-your-cat',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Feline Behavior Problems: House Soiling',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-behavior-problems-house-soiling',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Toxoplasmosis in Cats',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/toxoplasmosis-cats',
    },
    {
      kurum: 'Azabu University, School of Veterinary Medicine',
      yazarlar: 'Iwabuchi-Inoue Y, Hattori Y, Kikusui T',
      baslik: 'Litter box size and litter type preference and their associated behavioral changes in cats',
      dergi: 'Journal of Veterinary Medical Science',
      yil: 2025,
      kunye: '87(6):614-620',
      doi: '10.1292/jvms.24-0468',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/40204471/',
    },
    {
      kurum: 'Ross University School of Veterinary Medicine',
      yazarlar: 'Grigg EK, Pick L, Nibblett B',
      baslik: 'Litter box preference in domestic cats: covered versus uncovered',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2013,
      kunye: '15(4):280-284',
      doi: '10.1177/1098612X12465606',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/23103684/',
    },
  ],
};
