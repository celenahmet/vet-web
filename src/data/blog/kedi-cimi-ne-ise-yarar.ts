import type { BlogYazi } from './types';

export const kediCimiNeIseYarar: BlogYazi = {
  slug: 'kedi-cimi-ne-ise-yarar',
  baslik: 'Kedi Çimi Ne İşe Yarar? Kediler Neden Çim Yer',
  ozet: 'Kedilerin çim yemesi çoğu zaman normal bir davranış. Anketler hastalık ve tüy topu açıklamalarını sınadı; evde güvenli bitki seçimi de önemli.',
  kapakAlt:
    'Saksıdaki kedi çimini koklayan sarman kedi',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kedi çimi, kedilerin çiğneyip yemesi için yetiştirilen çimdir ve kedilerin çim yemesi çoğu zaman normal bir davranış olarak görülüyor.** Kaliforniya Üniversitesi Davis Veteriner Fakültesi\'nin sahip anketlerinde kedilerin yüzde 65\'i haftalık olarak bitki yedi, bitki yemeden önce hasta görünen kedilerin oranı ise yalnızca yüzde 6 oldu.' },
    { kind: 'paragraf', metin: 'Aşağıda kedilerin neden çim yediğine dair açıklamaları, hangisinin araştırmalarda destek bulduğunu, evde kedi çimi sağlamanın mantıklı olup olmadığını, ev bitkilerinin riskini ve çim yedikten sonra kusmanın ne zaman veteriner hekime götürülmesi gereken bir durum olduğunu anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Anketten çıkan gösterge', 'Oran'], satirlar: [
      ['Haftalık olarak bitki yiyen kediler', 'Yüzde 65'],
      ['Bitki yemeden önce hasta görünen kediler', 'Yüzde 6'],
      ['Bitki yiyenler arasında yedikten sonra sık kusanlar', 'Yüzde 37'],
      ['İkinci ankette hiç bitki yemeyen kediler', 'Yaklaşık yüzde 11'],
    ]},

    { kind: 'baslik', metin: 'Kediler neden çim yer?' },
    { kind: 'paragraf', metin: 'Kesin bir neden ortaya konmuş değil, ama araştırmalar çim yemenin kedilerde yaygın ve çoğu zaman normal bir davranış olduğunu gösteriyor. Davis\'teki araştırmacılar, 10 yıl içinde yürüttükleri iki ayrı ankette, her birinde bin ila iki bin arası kedi sahibinin yanıtıyla üç açıklamayı sınadı: çim yemek kedinin kendini hasta hissetmesine bir yanıt mı, kusturan bir şey mi, yoksa yutulan tüyleri atmanın bir yolu mu?' },
    { kind: 'paragraf', metin: 'Sonuçlar hastalık ve tüy topu açıklamalarını desteklemedi; bitki yedikten sonra kusma ise bir bölüm kedide görüldü. Araştırmacılar bulguları, kedilerdeki bitki yemenin köpeklerde olduğu gibi çoğunlukla normal ve yaygın bir davranışı yansıttığı şeklinde yorumladı.' },
    { kind: 'paragraf', metin: 'Bu yorumun bir dayanağı da yabani etoburlar. Ekibin atıf yaptığı 352 çalışmalık bir derlemede 124 etobur türünde lifli bitki maddesi tüketimi görüldü. Derlemenin yazarları, bazı örneklerde bağırsak parazitleriyle otların birlikte görülmesinden yola çıkarak lifli bitki maddesinin parazitlerin atılmasına yardım ettiğini öne sürdü. Araştırmacılar davranışın büyük olasılıkla içgüdüsel olduğunu ve evcil kedide de bir ölçüde ortaya çıktığını yazıyor. Bu bir hipotezdir; evcil kedi için kanıtlanmış bir neden olarak sunulmuyor.' },

    { kind: 'baslik', metin: 'Çim yemek hastalık belirtisi mi?' },
    { kind: 'paragraf', metin: 'Anketlerde kedilerin büyük çoğunluğu bitki yemeden önce normal görünüyordu; yalnızca yüzde 6\'sı hasta gibiydi. Araştırmacılar bu düşük oranın, bitki yemenin kedinin kendini kötü hissetmesiyle tetiklendiği fikrini desteklemediğini belirtiyor.' },
    { kind: 'yanilgi', baslik: '"Kedi çim yiyorsa mutlaka hastadır"', metin: 'Davis\'teki ilk ankette kedilerin yaklaşık yüzde 94\'ü bitki yemeden önce normal görünüyordu. Çim yemek tek başına hastalık işareti sayılmıyor. Ama kedi çim yemekle birlikte iştahsızlık, halsizlik ya da sık kusma gösteriyorsa durum çimden bağımsız olarak veteriner hekime danışılmasını gerektiriyor.' },

    { kind: 'baslik', metin: 'Çim tüy topunu çıkarır mı?' },
    { kind: 'paragraf', metin: 'Bu açıklama yaygın olsa da araştırma onu desteklemedi. Kısa tüylü kediler, uzun tüylü kediler kadar sık bitki yedi; araştırmacılar bu bulgunun tüy topu açıklamasına karşı çıktığını yazıyor.' },
    { kind: 'paragraf', metin: 'Tüy topu kusması ise ayrı bir konu. Cornell Feline Health Center, tüy topunun kedilerde kusmanın sık görülen ve çoğu durumda nispeten zararsız bir nedeni olduğunu, bir kedinin bir ya da iki haftada bir tüy topu çıkarmasının kalıcı bir soruna işaret etmeyebileceğini belirtiyor. Tüy topu ve malt hakkında ayrıntı için [[kedilerde-malt-ne-ise-yarar|kedilerde malt ne işe yarar]] yazımıza bakılabilir.' },

    { kind: 'baslik', metin: 'Yavru ve yaşlı kediler çimle nasıl ilişkili?' },
    { kind: 'paragraf', metin: 'Anketlerde genç kediler daha sık bitki yedi, yedikten sonra ise daha az kustu ve daha az hasta göründü. Bir yaşın altındaki kedilerde çim dışı bitkiler daha sık yeniyordu; çim bu yaşta yenen bitkilerin yalnızca yüzde 39\'unu oluşturdu. Bir yaş ve üzerindeki kedilerde ise en sık yenen bitki çimdi.' },
    { kind: 'paragraf', metin: 'Yaşla birlikte tablo değişti: en yaşlı grupta (9 yaş üzeri) bitki yedikten sonra kusma oranı yüzde 57,1\'e, bitki yemeden önce hasta görünme oranı yüzde 9,4\'e çıktı. Yaşlı bir kedide çim yemeye sık kusma eşlik ediyorsa bunu çimle açıklamak yerine veteriner hekime göstermek gerekiyor. Yavru kedilerin genel bakımı için [[yavru-kedi-bakimi|yavru kedi bakımı]] yazımız faydalı olabilir.' },

    { kind: 'baslik', metin: 'Evde kedi çimi yetiştirmek mantıklı mı?' },
    { kind: 'paragraf', metin: 'Çoğu kedi bitki yemeye eğilimli olduğundan, dışarı çıkmayan kediler için bir çim bahçesi sağlamak mantıklı görünüyor. Davis araştırmacıları da bunu önerilebilir bir uygulama olarak değerlendiriyor. Ankette, bir bitkiyi en az 10 kez yerken görülen kedilerin sahiplerinin yüzde 33\'ü düzenli olarak bir çim yatağı sunuyordu.' },
    { kind: 'paragraf', metin: 'Asıl risk, kedinin kendine uygun bir çim bulamadığında ev bitkilerine yönelmesi. Araştırmacılar, yaygın ev bitkilerinin birçoğunun kediler için zehirli olabildiğini ve bunun dikkat edilmesi gereken bir nokta olduğunu belirtiyor. ASPCA\'nın kediler için hazırladığı listeden birkaç örnek aşağıda.' },
    { kind: 'tablo', basliklar: ['Bitki', 'ASPCA kedi listesinde'], satirlar: [
      ['Paskalya zambağı (Easter lily)', 'Zehirli bitkiler arasında'],
      ['Kaplan zambağı (Tiger lily)', 'Zehirli bitkiler arasında'],
      ['Asya zambağı (Asian lily)', 'Zehirli bitkiler arasında'],
      ['Turuncu günlük zambağı (Orange day lily)', 'Zehirli bitkiler arasında'],
      ['Aloe vera', 'Zehirli bitkiler arasında'],
      ['Kurdele bitkisi (Spider plant)', 'Zehirsiz bitkiler arasında'],
    ]},
    { kind: 'paragraf', metin: 'Evdeki bitkileri tek tek kontrol etmek için [[kediler-icin-zehirli-bitkiler|kediler için zehirli bitkiler]] yazımız var. Kedinin ulaşabildiği her bitkinin güncel ASPCA listesinde kontrol edilmesi öneriliyor.' },

    { kind: 'baslik', metin: 'Çim yedikten sonra kusma ne zaman sorun?' },
    { kind: 'paragraf', metin: 'Anketlerde bitki yiyen kedilerin yüzde 27 ila 37\'si yedikten sonra sık sık kustu; bu nedenle ara sıra kusma tek başına şaşırtıcı değil. Ama Cornell Feline Health Center, haftada birden sık kusan ya da halsizlik, zayıflık, iştah azalması, kusmukta kan, susuzluk artışı, idrar miktarında artış veya azalış ya da eşlik eden ishal gösteren kedilerin vakit kaybetmeden bir veteriner hekime gösterilmesi gerektiğini belirtiyor.' },
    { kind: 'paragraf', metin: 'Kusma nedenleri arasında zehirli bitki yapraklarının yutulması da sayılıyor. Kedinin ne yediğini görmek her zaman mümkün olmayabilir; bu yüzden kusmayı çimden kaynaklandığını varsayarak geçiştirmemek gerekiyor. Kusmanın olası nedenleri için [[kedim-kusuyor|kedim kusuyor]] yazımıza da bakılabilir.' },
    { kind: 'uyari', metin: 'Kedinin zehirli olabilecek bir bitki yediğinden şüpheleniliyorsa, belirti çıkmasını beklemeden vakit kaybetmeden veteriner hekime başvurulması gerekiyor. Evde kusturmaya çalışmak ya da bir şey vermek yerine, bitkinin adını ve miktarını veteriner hekime iletmek önerilir.' },

    { kind: 'baslik', metin: 'Kedi çimi için pratik öneriler' },
    { kind: 'liste', maddeler: [
      'Dışarı çıkmayan kediye çiğneyebileceği ayrı bir çim alanı sunmak',
      'Evdeki tüm bitkileri ASPCA\'nın kedi listesinde kontrol etmek',
      'Zehirli çıkan bitkileri kedinin ulaşamayacağı yerlere taşımak ya da evden çıkarmak',
      'Çim yedikten sonra kusma sıklığını not etmek',
      'Haftada birden sık kusma görülürse veteriner hekime başvurmak',
    ]},
  ],
  kontrolListesi: [
    'Kedide ayrı bir çim alanı var mı?',
    'Evde zehirli bitki var mı?',
    'Haftada birden sık kusma var mı?',
    'İştahsızlık ya da halsizlik var mı?',
    'Kusmukta kan var mı?',
  ],
  sss: [
    { soru: 'Kedi çimi ne işe yarar?', cevap: 'Kedi çimi, kedinin bitki yeme eğilimini evde kontrollü biçimde karşılamaya yarar. Davis anketlerinde kedilerin çoğu düzenli bitki yedi ve araştırmacılar dışarı çıkmayan kedilere çim sunmayı mantıklı buldu. Kedi çimi bir tedavi ya da ilaç değildir; sağlık sorunlarında veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Kediler neden çim yer?', cevap: 'Kesin nedeni bilinmiyor, ama çoğu zaman normal ve yaygın bir davranış olarak görülüyor. Araştırmacılar davranışın büyük olasılıkla içgüdüsel olduğunu düşünüyor. Hastalık ve tüy topu açıklamaları ise yapılan anketlerde güçlü destek bulmadı.' },
    { soru: 'Kedi çim yedikten sonra kusarsa normal mi?', cevap: 'Ara sıra olabiliyor, çünkü anketlerde bitki yiyen kedilerin yüzde 27 ila 37\'si yedikten sonra sık sık kustu. Ancak haftada birden sık kusma, halsizlik, iştahsızlık, kusmukta kan ya da ishal varsa kedinin vakit kaybetmeden veteriner hekime gösterilmesi gerekiyor.' },
    { soru: 'Çim yemek tüy topu için mi?', cevap: 'Bu açıklama anketlerde desteklenmedi. Kısa tüylü kediler uzun tüylü kediler kadar sık bitki yedi; bu da çim yemenin tüy atmak için olduğu fikrine karşı bir bulgu olarak yorumlandı. Tüy topu kusması ise ayrı bir konu olarak ele alınıyor.' },
    { soru: 'Yavru kediler de çim yer mi?', cevap: 'Evet, hem de yetişkinlerden daha sık yiyorlar. Anketlerde genç kediler daha sık bitki yedi, daha az kustu ve daha az hasta göründü. Bir yaşın altındaki kedilerde çim dışı bitkiler daha sık yeniyordu; bu yüzden ev bitkilerinin ulaşılamaz tutulması önemli.' },
    { soru: 'Kedi evdeki çiçekleri yerse ne olur?', cevap: 'Bazı ev bitkileri kediler için zehirli olabiliyor. ASPCA listesinde zambak türleri ve aloe vera zehirli bitkiler arasında yer alıyor. Kedinin zehirli olabilecek bir bitki yediğinden şüpheleniliyorsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Her kedi çim yer mi?', cevap: 'Hayır. İkinci ankette kedilerin yaklaşık yüzde 11\'i bitki yemiyordu. Yani çim yemeyen kediler de yaygın. Kedinin iştahında ya da davranışında bir değişiklik varsa durumu çim yeme ile ilişkilendirmeden veteriner hekime danışmak önerilir.' },
  ],
  kaynaklar: [
    {
      kurum: 'University of California, Davis, School of Veterinary Medicine',
      baslik: 'Characteristics of Plant Eating in Domestic Cats',
      yazarlar: 'Hart BL, Hart LA, Thigpen AP, Willits NH',
      dergi: 'Animals (Basel)',
      yil: 2021,
      kunye: '11(7):1853',
      doi: '10.3390/ani11071853',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34206345/',
    },
    {
      kurum: 'ASPCA Animal Poison Control Center',
      baslik: 'Toxic and Non-Toxic Plant List: Cats',
      adres: 'https://www.aspca.org/pet-care/animal-poison-control/cats-plant-list',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Vomiting',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/vomiting',
    },
  ],
};
