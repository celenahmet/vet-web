import type { BlogYazi } from './types';

export const kedilerSahibiniTanirMi: BlogYazi = {
  slug: 'kediler-sahibini-tanir-mi',
  baslik: 'Kediler Sahibini Tanır mı? Sesinizi ve Adını Biliyor',
  ozet: 'Evet. Kediler sahibinin sesini yabancılardan ayırt ediyor, kendi adını başka kelimelerden ayırıyor ve çoğu sahibine güvenli bağlanıyor.',
  kapakAlt:
    'Kediler sahibini tanır mı konulu yazının kapak görseli; kapıdan giren sahibinin bacağına kuyruğu dik sürtünen gri beyaz bir kedi',
  kategori: 'Kedi',
  tarih: '2026-10-29',
  bloklar: [
    { kind: 'paragraf', metin: '**Evet, kediler sahibini tanır.** Tokyo Üniversitesi\'nde yapılan bir çalışmada kediler sahiplerinin sesini yabancıların sesinden ayırt etti; aynı ekibin başka bir çalışması kedilerin kendi adlarını başka kelimelerden ayırabildiğini gösterdi. Oregon State Üniversitesi\'nin araştırmasında ise yavru kedilerin yüzde 64\'ünün sahibine güvenli biçimde bağlandığı görüldü.' },
    { kind: 'paragraf', metin: 'Aşağıda bu üç çalışmanın ne bulduğunu, kedinin neden köpek gibi koşup gelmediğini, "kedim adını bilmiyor" düşüncesinin nereden geldiğini ve kediyle bağı güçlendirmenin yollarını anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Soru', 'Araştırma ne diyor?'], satirlar: [
      ['Sahibinin sesini tanır mı?', 'Evet; yabancı seslerden ayırt ediyor (Saito ve Shinozuka, 2013)'],
      ['Kendi adını bilir mi?', 'Evet; adını başka kelimelerden ayırıyor (Saito ve ekibi, 2019)'],
      ['Sahibine bağlanır mı?', 'Yavruların yüzde 64,3\'ü güvenli bağlanmış (Vitale ve ekibi, 2019)'],
      ['Tanıdığını nasıl gösterir?', 'Kulak ve baş çevirerek; çoğu zaman yerinden kalkmadan'],
    ]},

    { kind: 'baslik', metin: 'Kediler sahibinin sesini yabancılardan ayırt ediyor' },
    { kind: 'paragraf', metin: 'Tokyo Üniversitesi\'nden Atsuko Saito ve Kazutaka Shinozuka 2013\'te 20 kediyle bir deney yaptı. Sahip kedinin göremeyeceği bir yerdeyken, kediye adını söyleyen üç farklı yabancının sesi art arda dinletildi, ardından sahibin sesi. Araştırmacılar kedilerin tepkisini kaydetti ve bağımsız değerlendiricilere puanlattı.' },
    { kind: 'paragraf', metin: 'Yirmi kediden 15\'i üçüncü yabancı sese ilk sese göre daha az tepki verdi, yani yabancı seslere alıştı. Bu kediler sahiplerinin sesini duyduğunda tepkileri yeniden belirgin biçimde arttı. Araştırmacılar kedilerin insanları yalnız seslerinden ayırt edebildiği sonucuna vardı.' },

    { kind: 'baslik', metin: 'Tanıdığını kulağıyla gösterir, ayağıyla değil' },
    { kind: 'paragraf', metin: 'Aynı çalışmanın en ilginç ayrıntısı, kedilerin sese nasıl tepki verdiğiydi. Kediler seslere miyavlayarak ya da kuyruk hareketiyle değil, kulaklarını ve başlarını sese çevirerek tepki verdi. Bu, sahipleri seslendiğinde bile değişmedi.' },
    { kind: 'paragraf', metin: 'Bu bulgu pek çok kedi sahibinin gündelik deneyimini açıklıyor: adınızı söylediğinizde kediniz yerinden kalkmıyor ama kulağı size dönüyor, başını çeviriyor ya da kuyruğunun ucunu oynatıyor. Kedi sizi duymuş ve tanımıştır; yalnızca koşup gelmeyi gerekli görmemiştir.' },
    { kind: 'yanilgi', baslik: '"Kedim çağırınca gelmiyor, demek ki beni tanımıyor"', metin: 'Tokyo Üniversitesi\'nin çalışmasında kediler sahiplerinin sesini tanıdı, ama bunu yerinden kalkarak değil, kulak ve baş çevirerek gösterdi. Gelmemek tanımamak değildir; kedinin iletişim biçimi köpeğinkinden farklıdır.' },

    { kind: 'baslik', metin: 'Kediler kendi adlarını başka kelimelerden ayırıyor' },
    { kind: 'paragraf', metin: 'Saito ve ekibi 2019\'da Scientific Reports dergisinde bir adım daha attı. Kedilere önce dört farklı genel isim (sıradan kelimeler) ya da evdeki diğer kedilerin adları art arda dinletildi, ardından kedinin kendi adı. Sıradan evlerde yaşayan kediler, bu kelimelere alıştıktan sonra kendi adlarını duyduklarında belirgin biçimde yeniden tepki verdi.' },
    { kind: 'paragraf', metin: 'Kediler adlarını yabancı biri söylediğinde de ayırt etti. Kedi kafelerinde yaşayan kediler ise kendi adlarını sıradan kelimelerden ayırdı, ama aynı kafedeki diğer kedilerin adlarından ayıramadı. Kafede pek çok kedi ve pek çok insan aynı ortamı paylaştığı için adların sık sık birbirine karışması bunun nedeni olabilir. Araştırmacılar kedilerin insan sözlerini ses farklarına göre ayırt edebildiği sonucuna vardı.' },
    { kind: 'tablo', basliklar: ['Kedi grubu', 'Kendi adı ile sıradan kelime', 'Kendi adı ile diğer kedilerin adı'], satirlar: [
      ['Evde yaşayan kediler', 'Ayırt etti', 'Ayırt etti'],
      ['Kedi kafesindeki kediler', 'Ayırt etti', 'Ayırt etmedi'],
    ]},

    { kind: 'baslik', metin: 'Çoğu kedi sahibine güvenli bağlanıyor' },
    { kind: 'paragraf', metin: 'Oregon State Üniversitesi\'nden Kristyn Vitale ve ekibi 2019\'da Current Biology\'de, insan bebeklerinin ebeveynlerine bağlanmasını ölçmek için geliştirilmiş bir testin uyarlamasını kedilere uyguladı. Kedi ve sahibi yabancı bir odaya alındı; sahip kısa bir süre odadan çıktı ve geri döndü. Araştırmacılar kedinin sahibi dönünce nasıl davrandığını değerlendirdi.' },
    { kind: 'paragraf', metin: 'Sınıflandırılabilen 70 yavru kedinin yüzde 64,3\'ü güvenli, yüzde 35,7\'si güvensiz bağlanmış bulundu. 38 yetişkin kedide oranlar neredeyse aynıydı: yüzde 65,8 güvenli, yüzde 34,2 güvensiz. Güvenli bağlı kedi, sahibi döndüğünde onu karşılayıp sonra yaptığı işe, örneğin odayı keşfetmeye dönüyordu. Araştırmacılar bu oranların insan bebeklerinde görülen oranlara yakın olduğunu belirtiyor.' },
    { kind: 'yanilgi', baslik: '"Kediler insana değil eve bağlanır"', metin: 'Oregon State Üniversitesi\'nin çalışmasında kedilerin üçte ikiye yakını sahiplerine güvenli biçimde bağlanmış çıktı ve sahibin yanında yabancı bir odayı rahatça keşfedebildi. Kediler yalnızca mekâna değil, kendileriyle ilgilenen kişiye de bağlanabiliyor.' },

    { kind: 'baslik', metin: 'Bağı güçlendirmek kedinin dilinden konuşmaktır' },
    { kind: 'paragraf', metin: 'Araştırmalar kedinin sizi tanıdığını ve size bağlanabildiğini gösteriyor. Bu bağın günlük hayattaki karşılığı ise kedinin kendi iletişim biçimine saygı duymaktan geçiyor.' },
    { kind: 'liste', maddeler: [
      'Kediyle konuşurken adını tutarlı ve hep aynı tonda kullanmak',
      'Adını yalnızca güzel şeylerle, örneğin mama ya da oyunla birlikte söylemek; cezayla birlikte kullanmamak',
      'Kedinin yanınıza gelmesini beklemek, onu kovalayarak kucağa almamak',
      'Kediye bakarken gözleri yavaşça kısıp kırpmak; aşağıda anlattığımız çalışmada kediler buna karşılık verdi',
      'Her gün aynı saatlerde oyun ve mama: öngörülebilir bir rutin güveni artırır',
    ]},
    { kind: 'paragraf', metin: 'Yavaş göz kırpma için de bir çalışma var. Sussex Üniversitesi\'nden Tasmin Humphrey ve ekibi 2020\'de Scientific Reports\'ta, sahipleri kedilerine yavaşça göz kırptığında kedilerin de daha sık yarım kırpma ve göz kısma yaptığını gösterdi. İkinci deneyde kediler, kendilerine yavaşça göz kırpan bir araştırmacıya, nötr bir yüz ifadesiyle duran araştırmacıya göre daha çok yaklaştı. Araştırmacılar yavaş göz kırpmanın kedi ile insan arasında olumlu bir duygu iletişimi olabileceğini düşünüyor.' },
    { kind: 'paragraf', metin: 'Kediniz için yeni bir ad arıyorsanız, kısa ve sık kullanılan ev kelimelerine benzemeyen bir ad seçmek, adını diğer kelimelerden ayırmasını kolaylaştırabilir. Yeni bir kediyle bağın ilk günlerde nasıl kurulduğunu [[yeni-kedi-eve-alisma|eve yeni gelen kedi ne kadar sürede alışır]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Kediler eski sahibini tanır mı?' },
    { kind: 'paragraf', metin: 'Bu soru çok aranıyor, ama doğrudan cevap veren bir çalışma bulunmuyor. Bilinen şu: kediler sahiplerinin sesini yabancılardan ayırt edebiliyor ve sahiplerine bağlanabiliyor. Ancak bu tanımanın aylar ya da yıllar süren bir ayrılıktan sonra ne kadar korunduğu araştırılmış değildir. Kesin bir süre veren kaynaklara temkinle yaklaşmak gerekiyor.' },
    { kind: 'paragraf', metin: 'Kedinin evden kaçması ya da kaybolması durumunda onu sahibine kavuşturan şey hafızası değil kimliğidir. Mikroçip ve kayıt, kaybolan bir kedinin bulunduğunda sahibine ulaştırılmasının en güvenilir yoludur; ayrıntıları [[mikrocip-nedir|mikroçip nedir]] yazımızda anlattık.' },
  ],
  kontrolListesi: [
    'Adı hep aynı tonda mı söyleniyor?',
    'Adı cezayla birlikte kullanılıyor mu?',
    'Oyun ve mama saatleri düzenli mi?',
    'Kedinin gelmesi bekleniyor mu?',
    'Mikroçip kaydı güncel mi?',
  ],
  sss: [
    { soru: 'Kediler sahibini tanır mı?', cevap: 'Evet. Tokyo Üniversitesi\'nin 2013 tarihli çalışmasında kediler sahiplerinin sesini yabancıların sesinden ayırt etti. Oregon State Üniversitesi\'nin 2019 tarihli çalışmasında da yavru kedilerin yüzde 64,3\'ünün sahibine güvenli biçimde bağlandığı görüldü.' },
    { soru: 'Kediler isimlerini bilir mi?', cevap: 'Evet. 2019 tarihli bir çalışmada evde yaşayan kediler kendi adlarını sıradan kelimelerden ve evdeki diğer kedilerin adlarından ayırt etti; adı yabancı biri söylediğinde bile. Kedi kafesindeki kediler ise kendi adlarını diğer kedilerin adlarından ayıramadı.' },
    { soru: 'Kedi adını duyunca neden gelmez?', cevap: 'Kediler sese çoğunlukla kulaklarını ve başlarını çevirerek tepki veriyor; yerinden kalkıp gelmek zorunda hissetmiyor. Tokyo Üniversitesi\'nin çalışmasında kediler sahiplerinin sesini tanıdı, ama bunu miyavlama ya da kuyruk hareketiyle değil, kulak ve baş hareketiyle gösterdi.' },
    { soru: 'Kediler sahiplerine bağlanır mı?', cevap: 'Evet. Oregon State Üniversitesi\'nin 2019 tarihli çalışmasında yavru kedilerin yüzde 64,3\'ü, yetişkin kedilerin yüzde 65,8\'i sahibine güvenli biçimde bağlanmış bulundu. Araştırmacılar bu oranın insan bebeklerinde görülen orana yakın olduğunu belirtiyor.' },
    { soru: 'Kediler eski sahibini tanır mı?', cevap: 'Doğrudan bu soruya cevap veren bir çalışma bulunmuyor. Kedilerin sahiplerinin sesini tanıdığı ve onlara bağlandığı biliniyor, ama bu tanımanın uzun bir ayrılıktan sonra ne kadar sürdüğü araştırılmış değildir. Kesin süre veren iddialara temkinle yaklaşmak gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'The University of Tokyo, Graduate School of Arts and Sciences',
      yazarlar: 'Saito A, Shinozuka K',
      baslik: 'Vocal recognition of owners by domestic cats (Felis catus)',
      dergi: 'Animal Cognition',
      yil: 2013,
      kunye: '16(4):685-690',
      doi: '10.1007/s10071-013-0620-4',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/23525707/',
    },
    {
      kurum: 'The University of Tokyo, Graduate School of Arts and Sciences',
      yazarlar: 'Saito A, Shinozuka K, Ito Y, Hasegawa T',
      baslik: 'Domestic cats (Felis catus) discriminate their names from other words',
      dergi: 'Scientific Reports',
      yil: 2019,
      kunye: '9(1):5394',
      doi: '10.1038/s41598-019-40616-4',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/30948740/',
    },
    {
      kurum: 'Oregon State University, Department of Animal and Rangeland Sciences',
      yazarlar: 'Vitale KR, Behnke AC, Udell MAR',
      baslik: 'Attachment bonds between domestic cats and humans',
      dergi: 'Current Biology',
      yil: 2019,
      kunye: '29(18):R864-R865',
      doi: '10.1016/j.cub.2019.08.036',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/31550468/',
    },
    {
      kurum: 'University of Sussex, School of Psychology',
      yazarlar: 'Humphrey T, Proops L, Forman J, Spooner R, McComb K',
      baslik: 'The role of cat eye narrowing movements in cat-human communication',
      dergi: 'Scientific Reports',
      yil: 2020,
      kunye: '10(1):16503',
      doi: '10.1038/s41598-020-73426-0',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/33020542/',
    },
  ],
};
