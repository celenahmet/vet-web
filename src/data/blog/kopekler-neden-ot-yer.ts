import type { BlogYazi } from './types';

export const kopeklerNedenOtYer: BlogYazi = {
  slug: 'kopekler-neden-ot-yer',
  baslik: 'Köpekler Neden Ot Yer? Ne Zaman Endişelenmek Gerekir?',
  ozet: 'Ot yemek köpeklerde çok yaygın ve çoğu zaman normal: bir çalışmada köpeklerin yüzde 68\'i haftada en az bir kez bitki yiyor, yalnız yüzde 22\'si sık kusuyor.',
  kapakAlt:
    'Köpekler neden ot yer konulu yazının kapak görseli; şehirde kaldırım kenarındaki çimenlikte otları koklayıp yiyen bir köpek',
  kategori: 'Köpek',
  tarih: '2026-10-28',
  bloklar: [
    { kind: 'paragraf', metin: '**Ot yemek köpeklerde çok yaygın ve çoğu zaman normal bir davranış.** Kaliforniya Üniversitesi Davis Veteriner Fakültesi\'nin 1.571 köpeği kapsayan çalışmasına göre köpeklerin **yüzde 68\'i** her gün ya da her hafta bitki yiyor ve en çok yenen bitki ot. Ot yemeden önce sık sık hasta görünen köpeklerin oranı yalnız **yüzde 9**, yedikten sonra sık kusanların oranı ise **yüzde 22.**' },
    { kind: 'paragraf', metin: 'Aşağıda bu davranışın nedenine dair bilinenleri, ot yiyip kusmanın ne anlama geldiğini, hangi köpeklerin daha çok ot yediğini ve hangi belirtilerde veteriner hekime başvurmak gerektiğini bu çalışma ve aynı ekibin kediler üzerine yaptığı araştırmayla anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Bulgu', 'Oran'], satirlar: [
      ['Her gün ya da her hafta bitki yiyen köpekler', 'Yüzde 68'],
      ['En çok yenen bitki ot olan köpekler', 'Yüzde 79'],
      ['Bitki yemeden önce sık hasta görünenler', 'Yüzde 9'],
      ['Bitki yedikten sonra sık kusanlar', 'Yüzde 22'],
    ]},

    { kind: 'baslik', metin: 'Köpekler neden ot yer?' },
    { kind: 'paragraf', metin: 'Sueda, Hart ve Cliff\'in 2008 tarihli çalışması iki ayrı ankete dayanıyor. Birincisinde her gün bitkilere erişimi olan köpeklerin sahiplerinin yüzde 79\'u köpeğinin ot ya da başka bitkiler yediğini bildirdi. İkinci, internet üzerinden yapılan ankette dönen 3.340 formdan 1.571\'i çalışmaya alındı. Sonuç açık: köpeklerin büyük çoğunluğu bitki yiyor ve bunu hasta olduğu için yapmıyor. Yazarlar bulguların, **bitki yemenin köpeklerin normal bir davranışı** olduğu görüşünü desteklediğini belirtiyor.' },
    { kind: 'yanilgi', baslik: '"Köpek ot yiyorsa midesi bozuktur, kusmak için yer"', metin: 'Çalışmada bitki yemeden önce sık sık hasta görünen köpeklerin oranı yalnız yüzde 9, yedikten sonra sık kusanların oranı yüzde 22. Yani köpeklerin çoğu kusmak için ot yemiyor ve ot yedikten sonra kusmuyor.' },

    { kind: 'baslik', metin: 'Ot yemenin kökeni nereden geliyor?' },
    { kind: 'paragraf', metin: 'Aynı ekip 2021 tarihli kedi çalışmasında vahşi kedigillerin ve köpekgillerin de düzenli olarak ot ve lifli bitkiler yediğine dair gözlemleri derledi. Yazarlara göre bitki yemek, özellikle genç etçillerde bağırsak parazit yükünü kabul edilebilir düzeyde tutmaya yardımcı olan eski bir davranış olabilir. Bu bir **hipotez;** yazarlar bunun kontrollü bir deneyle test edilmediğini açıkça belirtiyor. Köpeklerde düzenli parazit koruması için [[kopeklerde-ic-ve-dis-parazit|köpeklerde iç ve dış parazit]] yazımıza bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Hangi köpekler daha çok ot yer?' },
    { kind: 'paragraf', metin: 'Çalışmada köpeğin cinsiyeti, kısırlaştırılmış olup olmaması, ırk grubu ve beslendiği mama türü, bitki yeme sıklığıyla ilişkili çıkmadı. Belirgin fark yaşta görüldü: **genç köpekler** daha sık bitki yiyor, ot dışındaki bitkileri de daha çok yiyor; buna karşın yemeden önce hasta görünme ve yedikten sonra kusma olasılıkları daha düşük.' },
    { kind: 'yanilgi', baslik: '"Ot yiyorsa mamasında bir eksik vardır"', metin: 'Çalışmada köpeğin beslendiği mama türü ile bitki yeme sıklığı arasında bir ilişki bulunmadı. Ot yemek tek başına mamanın eksik olduğunu göstermiyor.' },

    { kind: 'baslik', metin: 'Köpek ot yiyip kusarsa ne anlama gelir?' },
    { kind: 'paragraf', metin: 'Köpeklerin yaklaşık beşte biri ot yedikten sonra sık kusuyor; ara sıra görülen ve köpeğin genel durumunu etkilemeyen bir kusma bu tabloda yer alabiliyor. Ancak kusma sıklaşıyor, ot yemekten bağımsız oluyor ya da başka belirtiler eşlik ediyorsa bunun ot yemekle açıklanması doğru olmuyor. Kusmanın hangi durumlarda acil olduğunu [[kopegim-kusuyor|köpeğim kusuyor]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Ne zaman endişelenmek gerekir?' },
    { kind: 'liste', maddeler: [
      'Ot yeme davranışı aniden ve belirgin biçimde arttıysa',
      'Köpek ot yemeden önce halsiz, iştahsız ya da huzursuz görünüyorsa',
      'Kusma sık tekrarlıyor ya da kusmukta kan görülüyorsa',
      'İshal, kilo kaybı ya da karın ağrısı eşlik ediyorsa',
      'Köpek ilaçlanmış bir bahçede ya da süs bitkilerinin arasında bitki yediyse',
    ]},
    { kind: 'paragraf', metin: 'Ot yemenin kendisi çoğunlukla zararsız olsa da çimlere uygulanan tarım ilaçları ve bazı süs bitkileri zehirlenmeye yol açabiliyor. Zehirlenme belirtilerini [[kopeklerde-zehirlenme|köpeklerde zehirlenme]] yazımızda topladık.' },

    { kind: 'baslik', metin: 'Kediler de ot yer mi?' },
    { kind: 'paragraf', metin: 'Evet. Aynı ekibin 2021 tarihli kedi çalışmasında kedilerin yüzde 65\'inin haftada en az bir kez bitki yediği görüldü; kediler köpeklerden daha sık kusuyordu (ilk ankette sık kusan kedilerin oranı yüzde 37). Yazarlar kedilerde de bitki yemenin çoğunlukla normal ve yaygın bir davranış olduğu sonucuna vardı. Kedilerin evde zarar görebileceği bitkileri [[kediler-icin-zehirli-bitkiler|kediler için zehirli bitkiler]] yazımızda anlattık.' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Ot yiyen köpek hastadır', 'Köpeklerin yüzde 68\'i düzenli bitki yiyor, çoğu sağlıklı'],
      ['Köpek kusmak için ot yer', 'Yedikten sonra sık kusanların oranı yüzde 22'],
      ['Ot yemek mama eksikliğidir', 'Mama türüyle bir ilişki bulunmadı'],
      ['Ot yemek her zaman zararsızdır', 'İlaçlanmış çim ve bazı süs bitkileri risk taşıyor'],
    ]},
    { kind: 'uyari', metin: 'Sık tekrarlayan ya da kanlı kusma, ishal, halsizlik, iştahsızlık veya karın ağrısı görülen bir köpek, belirtiler ot yemeye bağlanıp beklenmemesi ve veteriner hekime gösterilmesi gereken bir tablodur.' },
  ],
  kontrolListesi: [
    'Gezdiği çimlik ilaçlanmış mı?',
    'Bahçedeki bitkiler güvenli mi?',
    'Kusma sıklığı not ediliyor mu?',
    'Parazit koruması güncel mi?',
    'İştah ve enerjisi normal mi?',
  ],
  sss: [
    { soru: 'Köpekler neden ot yer?', cevap: 'Bir çalışmada köpeklerin yüzde 68\'inin her gün ya da her hafta bitki yediği görüldü ve yazarlar bunun normal bir davranış olduğu sonucuna vardı. Köpeklerin çoğu bunu hasta olduğu için yapmıyor.' },
    { soru: 'Köpek ot yiyip kusarsa ne olur?', cevap: 'Köpeklerin yaklaşık yüzde 22\'si ot yedikten sonra sık kusuyor. Ara sıra görülen kusma bu tabloda yer alabiliyor; sık tekrarlıyor ya da başka belirtiler varsa veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Köpeğin ot yemesi zararlı mı?', cevap: 'Ot yemenin kendisi çoğunlukla zararsız. Risk, çimlere uygulanan tarım ilaçlarından ve bazı süs bitkilerinden geliyor.' },
    { soru: 'Ot yemek köpeğin mamasında eksik olduğunu mu gösterir?', cevap: 'Hayır. Çalışmada köpeğin beslendiği mama türü ile bitki yeme sıklığı arasında bir ilişki bulunmadı.' },
    { soru: 'Yavru köpekler neden daha çok ot yer?', cevap: 'Çalışmada genç köpeklerin daha sık bitki yediği ama yemeden önce hasta görünme ve yedikten sonra kusma olasılıklarının daha düşük olduğu görüldü.' },
    { soru: 'Köpeğin ot yemesi ne zaman endişe vericidir?', cevap: 'Davranış aniden arttıysa, köpek yemeden önce halsiz görünüyorsa, kusma sık ya da kanlıysa veya ishal ve kilo kaybı eşlik ediyorsa veteriner hekime göstermek gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'University of California, Davis, School of Veterinary Medicine',
      yazarlar: 'Sueda KLC, Hart BL, Cliff KD',
      baslik: 'Characterisation of plant eating in dogs',
      dergi: 'Applied Animal Behaviour Science',
      yil: 2008,
      kunye: '111(1-2):120-132',
      doi: '10.1016/j.applanim.2007.05.018',
      adres: 'https://doi.org/10.1016/j.applanim.2007.05.018',
    },
    {
      kurum: 'University of California, Davis, School of Veterinary Medicine',
      yazarlar: 'Hart BL, Hart LA, Thigpen AP, Willits NH',
      baslik: 'Characteristics of Plant Eating in Domestic Cats',
      dergi: 'Animals (Basel)',
      yil: 2021,
      kunye: '11(7):1853',
      doi: '10.3390/ani11071853',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34206345/',
    },
  ],
};
