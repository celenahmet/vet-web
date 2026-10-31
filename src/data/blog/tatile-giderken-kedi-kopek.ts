import type { BlogYazi } from './types';

export const tatileGiderkenKediKopek: BlogYazi = {
  slug: 'tatile-giderken-kedi-kopek',
  baslik: 'Tatile Giderken Kedi Köpek Ne Yapılır?',
  ozet: 'Tatile giderken kedi ve köpek için evde bakıcı, güvenilen biri ya da pansiyon seçenekleri; aşı kartı, bakıcıya bırakılacak bilgiler ve yasal sorumluluk.',
  kapakAlt:
    'Bavul ve seyahat çantalarının yanında oyuncakla oynayan kedi',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Tatile giderken kedi ya da köpek için başlıca üç yol var: evde bir bakıcıya bırakmak, güvenilen birinin evine vermek ya da iyi bir pansiyona yerleştirmek; hangisinin uygun olduğu hayvanın yabancı insanlara, başka hayvanlara ve yeni ortamlara ne kadar dayandığına bağlı.** Kediler için çoğu zaman en az değişiklik getiren yol, yani kendi evinde kalıp her gün ziyaret edilmesi öneriliyor. Hayvanı yanında götürmek de bir seçenek ama yolculuk ve belge hazırlığı ayrı bir iş.' },
    { kind: 'paragraf', metin: 'Aşağıda her seçeneğin kime uygun olduğunu, pansiyon seçerken nelere bakıldığını, bakıcıya hangi bilgilerin bırakılması gerektiğini ve Türkiye\'deki yasal sorumluluğu anlatıyoruz. Öneriler İngiltere\'deki veteriner yardım kuruluşu PDSA, Avustralya RSPCA ve ABD\'deki ASPCA rehberlerine ve pansiyondaki köpekler üzerine yapılmış bir çalışmaya dayanıyor.' },

    { kind: 'tablo', basliklar: ['Seçenek', 'Kime uygun?', 'Dikkat edilecek'], satirlar: [
      ['Evde bakıcı (ziyaret ya da evde kalan)', 'Ortam ve düzen değişikliğinden etkilenen hayvanlar, çoğu kedi', 'Önceden tanışma, günde en az bir iki ziyaret'],
      ['Güvenilen birinin evi', 'Yeni yere çabuk alışan hayvanlar', 'Önceden deneme ziyareti, evden kaçamaması'],
      ['Pansiyon', 'Yabancılara ve başka hayvanlara alışkın hayvanlar', 'Yerinde görmek, güncel aşılar, erken rezervasyon'],
      ['Yanında götürmek', 'Yolculuğa alışkın hayvanlar', 'Ulaşım kuralları, kimlik ve sağlık belgeleri'],
    ]},

    { kind: 'baslik', metin: 'Sahibinin yasal sorumluluğu tatilde de sürüyor' },
    { kind: 'paragraf', metin: '5199 sayılı Hayvanları Koruma Kanunu\'nun 5. maddesine göre bir hayvanı sahiplenen kişi, onu barındırmak, türüne uygun ihtiyaçlarını karşılamak ve sağlığına dikkat etmekle yükümlü. Bu yükümlülük tatile çıkınca ortadan kalkmıyor; sahibinin yapması gereken, bakımı yerine getirecek birini ya da bir yeri bulmak.' },
    { kind: 'paragraf', metin: 'Aynı Kanun\'un 14. maddesi hayvanları aç ve susuz bırakmayı ve ev hayvanını terk etmeyi açıkça yasaklar arasında sayıyor. Hayvanı uzun süre kendi başına bırakmak ya da tatil öncesinde sokağa bırakmak bu yüzden yalnız hayvan için değil sahibi için de ciddi bir sorun. Konunun ceza tarafı [[hayvana-eziyet-cezasi|hayvana eziyetin cezası]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Kediler için çoğu zaman evde kalmak daha iyi' },
    { kind: 'paragraf', metin: 'RSPCA Avustralya, kediyi tatile götürmenin çoğu zaman uygulanabilir olmadığını belirtiyor: kediler yolculuktan, taşınmaktan, ortam ve günlük düzen değişikliğinden strese girebiliyor. Bu nedenle kedi için evde bir bakım düzeni kurmak tercih ediliyor.' },
    { kind: 'paragraf', metin: 'PDSA da birçok hayvanın pansiyonu oldukça stresli bulduğunu, kendini güvende hissettiği kendi evinde kalmayı tercih edeceğini ve özellikle kedilerin tanıdık bir ortamda kalmasının çoğu zaman daha iyi olduğunu yazıyor. Seçim yapılırken hayvanın yabancı insanlara, başka hayvanlara ve yeni ortamlara ne kadar dayandığı göz önüne alınmalı.' },
    { kind: 'yanilgi', baslik: '"Kedi birkaç gün yalnız kalabilir, bol mama ve su bırakmak yeter"', metin: 'RSPCA, sahibi yokken kedinin sağlığının ve iyiliğinin her gün kontrol edilmesinin önemli olduğunu belirtiyor. Evde bakıcı seçeneğinde de güvenilen bir kişinin ya da bakıcının en az günde bir iki kez gelip kediyi beslemesi, kum kabını değiştirmesi ve onunla vakit geçirmesi öneriliyor. Mama kabı dolu olsa da hastalanan, bir yere sıkışan ya da suyu dökülen bir kediyi kimse fark etmeyebilir.' },

    { kind: 'baslik', metin: 'Evde bakıcı ya da güvenilen birinin evi' },
    { kind: 'paragraf', metin: 'Bakıcı bir arkadaş, aile üyesi, komşu ya da güvenilir bir hizmetten gelen biri olabiliyor. RSPCA, kedi bakıcıyla daha önce karşılaşmadıysa yolculuktan önce tanışma ayarlanmasını ve uyumlarının görülmesini öneriyor. Hayvan başka birinin evinde kalacaksa önceden bir ziyaret ya da kısa bir deneme konaklaması, hayvanın oraya alışıp alışmayacağını ve evin onu güvenle içeride tutup tutamayacağını gösteriyor.' },
    { kind: 'paragraf', metin: 'Hangi düzen seçilirse seçilsin hayvanın güvenlik için evin içinde tutulması gerekiyor. RSPCA bunu güvenlik gereği olarak açıkça yazıyor. Yeni bir kişiyle kalan hayvan açık bir kapıdan kaçabileceği için kimlik bilgilerinin güncel olması ayrıca önemli.' },

    { kind: 'baslik', metin: 'Pansiyon seçerken nelere bakılır?' },
    { kind: 'paragraf', metin: 'PDSA, hangi seçenek seçilirse seçilsin iyi araştırma yapılmasını, yer ayırtmadan önce işletmenin yerinde ziyaret edilmesini, yalnız internet sitesine güvenilmemesini ve arkadaşlardan ya da veteriner hekimden öneri alınmasını tavsiye ediyor. İngiltere\'de işletmenin yerel yönetimden lisanslı olup olmadığının da kontrol edilmesini öneriyor; Türkiye\'de de işletmeye hangi izinlerle çalıştığını sormak yerinde olur.' },
    { kind: 'paragraf', metin: 'İyi pansiyonlar yaz ve yılbaşı gibi yoğun tatil dönemlerinde çoğu zaman dolu oluyor, bu yüzden erken yer ayırtmak gerekiyor. Ziyarette hayvanların nerede kaldığı, ne sıklıkla dışarı çıkarıldığı ya da oyun vakti olup olmadığı ve acil bir durumda hangi veteriner hekimle çalışıldığı sorulabilir.' },
    { kind: 'altBaslik', metin: 'Aşı kartı ve parazit koruması' },
    { kind: 'paragraf', metin: 'PDSA\'ya göre itibarlı pansiyonların tümü hayvanın aşılarının güncel olduğunu görmek istiyor; aşısız hayvanlar başka hayvanlara hastalık kapma ya da bulaştırma riski nedeniyle kabul edilmiyor. Aşıların son dakikaya bırakılmaması, özellikle köpeklerde kennel öksürüğü aşısında dikkat edilmesi öneriliyor, çünkü bazı pansiyonlar aşıdan sonra hayvanı kabul etmek için belli bir süre geçmesini isteyebiliyor.' },
    { kind: 'paragraf', metin: 'RSPCA da kedi pansiyonlarının çoğunun güncel aşı yanında iç ve dış parazit korumasını şart koştuğunu belirtiyor. Hangi aşının ne zaman yapılacağı veteriner hekimle konuşulmalı; genel takvim [[kedi-asi-takvimi|kedi aşı takvimi]] ve [[kopek-asi-takvimi|köpek aşı takvimi]] yazılarında, parazit koruması [[kopeklerde-ic-ve-dis-parazit|köpeklerde iç ve dış parazit]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Pansiyon köpeği ne kadar etkiliyor?' },
    { kind: 'paragraf', metin: 'Queen\'s University Belfast, Royal Veterinary College ve Lincoln Üniversitesi\'nden araştırmacıların 2014\'te Physiology & Behavior dergisinde yayımladığı çalışmada, sahipli 29 köpekten hem kendi evlerinde hem de bir pansiyonda ölçüm alındı. Stres hormonuyla ilişkili idrar değerleri pansiyonda evdekine göre daha yüksek çıktı ve köpekler pansiyonda genel olarak daha hareketliydi, ama köpekler arasında belirgin bireysel farklar vardı.' },
    { kind: 'paragraf', metin: 'Araştırmacılar bu değişimlerin bir uyarılmışlık hâlini gösterdiği sonucuna vardı; köpeklerin pansiyonda olumsuz bir strese girdiğine dair kesin kanıt bulmadılar. Yani pansiyon her köpek için kötü değil ama her köpek için aynı da değil. Evde yalnız kalınca zorlanan köpeklerde konu [[kopeklerde-ayrilik-kaygisi|köpeklerde ayrılık kaygısı]] yazısında ele alınıyor; böyle bir köpek için seçim veteriner hekimle konuşulabilir.' },

    { kind: 'baslik', metin: 'Bakıcıya ya da pansiyona bırakılacak bilgiler' },
    { kind: 'paragraf', metin: 'ASPCA\'nın zehir danışma merkezi (APCC), sahibi yokken beklenmedik bir şey olduğunda arayan bakıcılardan ve sahiplerden her yıl telefon aldığını belirtiyor ve bakıcıya bırakılacaklar için bir liste hazırlamış. Bu liste ile PDSA\'nın önerileri birlikte şöyle özetlenebilir:' },
    { kind: 'liste', maddeler: [
      'Sahibinin telefonu, yolculuk planı ve yedek olarak kalınacak otelin adı, adresi ve telefonu.',
      'Sahibine ulaşılamadığında arayabilecekleri, hayvanı tanıyan ve gerektiğinde sağlıkla ilgili karar verebilecek güvenilir bir kişi.',
      'Hayvanın yaşı, kilosu, bilinen sağlık sorunları, kullandığı ilaçlar, düzenli maması ve [[mikrocip-nedir|mikroçip]] bilgisi.',
      'Hayvanın düzenli gittiği veteriner hekim ve en yakın acil kliniğin iletişim bilgisi.',
      'Günlük düzen: ne kadar mama, hangi saatte, yürüyüş saatleri; kediler için evdeki saklanma yerleri.',
      'Acil bir durumda ne yapılmasını istediğinize dair önceden konuşulmuş bir plan.',
    ]},
    { kind: 'paragraf', metin: 'ASPCA ayrıca hayvanın düzenli veteriner hekimine de ne zaman uzakta olunacağının ve yokluğunuzda hayvanla ilgili karar vermeye kimin yetkili olduğunun bildirilmesini öneriyor. PDSA da bakıcının size ulaşamazsa hayvanı veteriner hekime nasıl götüreceğini önceden sormayı ve bunun isteğinize uyup uymadığına bakmayı tavsiye ediyor.' },

    { kind: 'baslik', metin: 'Mama, günlük düzen ve evden kokular' },
    { kind: 'paragraf', metin: 'PDSA, mamanın aniden değişmesinin midede rahatsızlık yapabileceğini hatırlatıyor ve tatil süresine yetecek miktardan fazlasını, hayvanın alıştığı mamadan bırakmayı öneriyor. Ne kadar ve ne zaman verileceği, günlük egzersizin ne kadar olduğu yazılı olarak bırakılmalı.' },
    { kind: 'paragraf', metin: 'Evin kokusunu taşıyan battaniyeler hayvanın geçici yerine alışmasına yardımcı olabiliyor, sevdiği oyuncaklar da pansiyonda yalnızken sıkılmasını önlüyor. RSPCA da hayvanın sahibi yokken en sevdiği oyuncak ve etkinliklerle meşgul olabilmesinin olası stresle başa çıkmasına yardımcı olacağını belirtiyor.' },

    { kind: 'baslik', metin: 'Tedavisi süren ya da yaşlı hayvanlar' },
    { kind: 'paragraf', metin: 'RSPCA, tatil öncesinde hayvanın yakın zamanda bir sağlık kontrolünden geçmesini öneriyor; böylece olası sorunlar sahibi yokken de yönetilebiliyor ve hayvan olası strese karşı en iyi durumda oluyor. Hayvanın yokluk süresinde veteriner hekime erişebileceğinden de emin olunmalı. Kontrolün zamanlaması için [[kedi-kopek-check-up-ne-zaman|kedi köpek check-up]] yazısına bakılabilir.' },
    { kind: 'paragraf', metin: 'Veteriner hekimin başlattığı bir tedavi sürüyorsa PDSA, tatil boyunca yetecek kadar ilaç bulunmasını ve bakıcıya yazılı talimat bırakılmasını öneriyor; ASPCA da bu bilgilerin mümkünse bakıcıyla yüz yüze gözden geçirilmesini tavsiye ediyor. Bakıcının bu işi rahatlıkla yapabildiğinden ve bir sorun görürse ne yapacağını bildiğinden emin olmak gerekiyor. Tedavinin bakıcıya nasıl devredileceği hayvanın veteriner hekimiyle konuşulmalı.' },
    { kind: 'uyari', metin: 'Tatil öncesinde ya da bakım süresince hayvanda halsizlik, yemek yememe, kusma ya da alışılmadık bir davranış fark edilirse vakit kaybetmeden veteriner hekime başvurulması gerekiyor. Bakıcının hangi durumda hekime gideceğini önceden bilmesi bu yüzden önemli.' },

    { kind: 'baslik', metin: 'Hayvanı yanında götürmeyi düşünüyorsanız' },
    { kind: 'paragraf', metin: '5199 sayılı Kanun\'un 4. maddesi hayvanların türüne özgü şartlarda bakılmasını, beslenmesini, barındırılmasını ve taşınmasını esas alıyor; hayvanı taşıyanların onu türüne uygun ortamda taşıması ve yol boyunca beslemesi gerekiyor. Uçakla gidilecekse [[evcil-hayvanla-ucak-yolculugu|evcil hayvanla uçak yolculuğu]], yurt dışına çıkılacaksa [[evcil-hayvan-pasaportu|evcil hayvan pasaportu]], otobüs ya da metro kullanılacaksa [[evcil-hayvanla-toplu-tasima|evcil hayvanla toplu taşıma]] yazıları ayrıntıları veriyor.' },
    { kind: 'paragraf', metin: 'Yanında götürülse de götürülmese de RSPCA, hayvanın mikroçipli ve künyeli olmasını ve iletişim bilgilerinin güncel tutulmasını öneriyor; tatildeyken kaybolursa sahibine böyle ulaşılabiliyor. Kaybolma durumunda yapılacaklar [[kaybolan-kedi-kopek-nasil-bulunur|kaybolan kedi köpek nasıl bulunur]] yazısında.' },
  ],
  sss: [
    { soru: 'Kedi tatilde evde yalnız bırakılabilir mi?', cevap: 'Kediyi günlerce kimse görmeden yalnız bırakmak önerilmiyor. RSPCA, sahibi yokken kedinin sağlığının her gün kontrol edilmesini ve bakıcının en az günde bir iki kez gelip mama, su, kum kabı ve ilgiyle ilgilenmesini öneriyor. Kediler için tanıdık evde kalmak çoğu zaman pansiyondan daha iyi bir seçenek.' },
    { soru: 'Pansiyon için hangi belgeler isteniyor?', cevap: 'Pansiyonlar genellikle güncel aşı kartı istiyor. PDSA\'ya göre itibarlı pansiyonlar aşısız hayvanı kabul etmiyor ve bazıları aşıdan sonra belli bir süre geçmesini şart koşabiliyor. RSPCA, kedi pansiyonlarının çoğunun iç ve dış parazit korumasını da istediğini belirtiyor. Ayrıntıyı önceden pansiyona sormak gerekiyor.' },
    { soru: 'Pansiyon için ne kadar önceden yer ayırtılmalı?', cevap: 'Yoğun dönemlerde olabildiğince erken yer ayırtmak önerilir. PDSA, iyi pansiyonların yaz ve yılbaşı gibi tatil dönemlerinde çoğu zaman dolduğunu belirtiyor. Aşıların da son dakikaya bırakılmaması gerekiyor, çünkü bazı pansiyonlar aşıdan sonra belli bir süre bekliyor.' },
    { soru: 'Pansiyonda köpek strese girer mi?', cevap: 'Bu köpekten köpeğe değişiyor. 29 sahipli köpekle yapılan 2014 tarihli çalışmada stres hormonuyla ilişkili değerler pansiyonda evdekinden yüksek çıktı, ama araştırmacılar köpeklerin olumsuz strese girdiğine dair kesin kanıt bulamadı ve belirgin bireysel farklar gördü. Köpeğinizin yeni ortamlara nasıl tepki verdiğini bilmek seçimi kolaylaştırıyor.' },
    { soru: 'Bakıcıya hangi bilgiler bırakılmalı?', cevap: 'Sahibinin ve yedek bir güvenilir kişinin iletişim bilgisi, yolculuk planı, hayvanın sağlık bilgileri, maması, mikroçip bilgisi, veteriner hekimi ve en yakın acil kliniğin telefonu bırakılmalı. ASPCA ayrıca günlük düzenin ve acil durumda ne yapılacağının önceden konuşulmasını öneriyor.' },
    { soru: 'Tatile giderken hayvanı bırakmak yasak mı?', cevap: 'Bakımını birine ya da bir yere emanet etmek yasak değil, terk etmek yasak. 5199 sayılı Hayvanları Koruma Kanunu\'nun 14. maddesi hayvanları aç ve susuz bırakmayı ve ev hayvanını terk etmeyi yasaklar arasında sayıyor. Sahibinin bakım yükümlülüğü 5. maddede düzenleniyor ve tatilde de sürüyor.' },
  ],
  kontrolListesi: [
    'Bakıcı ya da pansiyon belli mi?',
    'Aşı kartı güncel mi?',
    'Mikroçip bilgileri güncel mi?',
    'Veteriner ve acil numarası verildi mi?',
    'Yetecek kadar alıştığı mama var mı?',
    'Acil durum planı konuşuldu mu?',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu (madde 4, 5 ve 14)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
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
    {
      kurum: 'PDSA (People\'s Dispensary for Sick Animals)',
      baslik: 'Going on holiday: finding care for your pets',
      adres: 'https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/all-pets/pet-boarding-kennels-and-holiday-care',
    },
    {
      kurum: 'RSPCA Australia',
      baslik: 'Can I take my cat with me when I go on holiday?',
      adres: 'https://kb.rspca.org.au/knowledge-base/can-i-take-my-cat-with-me-when-i-go-on-holiday/',
    },
    {
      kurum: 'ASPCA Animal Poison Control Center',
      baslik: 'Pet Sitter Safety: What to Know Before You Go',
      adres: 'https://www.aspca.org/news/pet-sitter-safety-what-know-you-go',
    },
  ],
};
