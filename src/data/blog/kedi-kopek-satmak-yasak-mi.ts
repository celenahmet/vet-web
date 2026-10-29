import type { BlogYazi } from './types';

export const kediKopekSatmakYasakMi: BlogYazi = {
  slug: 'kedi-kopek-satmak-yasak-mi',
  baslik: 'Kedi Köpek Satışı Yasak mı? Pet Shop Kuralları ve Cezalar',
  ozet: 'Pet shoplarda neden kedi köpek yok? 5199 sayılı kanun ve 2024 yönetmeliğine göre kim, nasıl satış yapabilir; yasak satışların 2026 cezaları tabloda.',
  kapakAlt:
    'Kedi ve köpek satışı kurallarını anlatan yazının kapak görseli; masada belge dolduran iki kişinin önünde halıda yan yana uzanan bir tekir kedi ve bir golden retriever',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-29',
  bloklar: [
    { kind: 'paragraf', metin: '**Türkiye\'de kedi ve köpek satışı tamamen yasak değil, ama pet shoplarda kedi ve köpek bulundurmak yasak.** 2021\'de 7332 sayılı kanunla 5199 sayılı Hayvanları Koruma Kanunu\'na eklenen bu kural 14 Temmuz 2022\'de yürürlüğe girdi. O günden beri vitrinde ya da kafeste satış için bekleyen yavru kedi ve köpek görmek mümkün değil.' },
    { kind: 'paragraf', metin: 'Peki satış nasıl yapılıyor, kim satabiliyor, alıcıdan hangi belgeler isteniyor? Aşağıda kanunun ve Aralık 2024\'te yayımlanan uygulama yönetmeliğinin satışla ilgili hükümlerini, yasak satışların 2026 cezalarıyla birlikte topladık.' },

    { kind: 'tablo', basliklar: ['Soru', 'Kısa cevap'], satirlar: [
      ['Pet shopta kedi ve köpek bulunur mu?', 'Hayır; sahipli olanlar dışında bulundurulamaz'],
      ['Pet shop kedi ve köpek satabilir mi?', 'İzinli üretim yerinden, görselle aracılık edebilir'],
      ['Kim satış yapabilir?', 'Hayvan bakımı eğitimi alıp sertifika almış kişiler'],
      ['16 yaşından küçüğe satılır mı?', 'Hayır; 2026 cezası 17.376 TL'],
      ['Satış bir yere bildirilir mi?', 'Evet; beş iş günü içinde tarım ve orman müdürlüğüne'],
    ]},

    { kind: 'baslik', metin: 'Pet shoplarda neden kedi ve köpek yok?' },
    { kind: 'paragraf', metin: 'Kanunun 10. maddesinin birinci fıkrasına 2021\'de şu cümle eklendi: "Ev hayvanı satış yerlerinde kedi ve köpek bulundurulamaz, ancak buralarda Bakanlıkça izin verilen ev hayvanı üretim yerlerindeki kedi ve köpeklerin satışı yapılabilir." Cümle, yayımından bir yıl sonra, 14 Temmuz 2022\'de yürürlüğe girdi.' },
    { kind: 'paragraf', metin: 'Uygulama yönetmeliği bu kuralı açıyor: pet shoplar, sahipli olanlar dışında kedi ve köpek bulunduramaz. Yani dükkân sahibinin kendi kedisi dükkânda yaşayabilir, ama satış ya da sergileme amacıyla hayvan tutulamaz. Denetimde satış veya sergileme amaçlı kedi ya da köpek bulunursa, kanunun 24. maddesine göre bu hayvanlara el konuluyor.' },
    { kind: 'yanilgi', baslik: '"Pet shoplarda kedi köpek satışı tamamen yasaklandı"', metin: 'Yasaklanan, hayvanı dükkânda bulundurmak. Kanun aynı cümlede, Bakanlıkça izin verilen üretim yerlerindeki kedi ve köpeklerin pet shop üzerinden satılabileceğini açıkça söylüyor. Satış yöntemi değişti, satış bütünüyle kalkmadı.' },

    { kind: 'baslik', metin: 'Pet shop satışı nasıl yapıyor?' },
    { kind: 'paragraf', metin: 'Yönetmeliğin 11. maddesine göre pet shop, Bakanlıkça izin verilen ev hayvanı üretim yerlerindeki hayvanların basılı ya da dijital görsellerini kullanarak satışa aracılık edebiliyor. Hayvan, dükkândan değil, doğrudan üretim yerinden teslim alınıyor.' },
    { kind: 'paragraf', metin: 'Satış tamamlandığında pet shop, kedi ve köpek satışına ilişkin bilgileri satış işleminden itibaren beş iş günü içinde il ya da ilçe tarım ve orman müdürlüğüne bildirmekle yükümlü. Böylece satılan her hayvanın nereden çıkıp kime gittiği kayda geçiyor.' },

    { kind: 'baslik', metin: 'Köpek alırken apartman izni isteniyor' },
    { kind: 'paragraf', metin: 'Yönetmeliğin dikkat çeken bir hükmü köpek satışıyla ilgili. Pet shop, köpek almak isteyen kişiden iki belge istiyor: binanın Kat Mülkiyeti Kanunu kapsamındaki yönetim planı ve bu plana göre bağımsız bölümde köpek bulundurulabileceğine dair yöneticiden alınan izin belgesi. Satış ancak evde köpek beslemenin uygun olduğu durumlarda gerçekleştirilebiliyor.' },
    { kind: 'paragraf', metin: 'Bu hüküm kedi satışı için değil, köpek satışı için yazılmış. Apartmanda hayvan beslemenin genel kurallarını, yönetim planının ve kat malikleri kurulunun rolünü [[apartmanda-kedi-kopek-beslemek|apartmanda kedi köpek beslemek]] yazımızda ayrıntılı anlattık.' },

    { kind: 'baslik', metin: 'Kimler kedi ve köpek satabilir?' },
    { kind: 'paragraf', metin: 'Kanunun 14. maddesi, hayvan bakımı eğitimi almamış kişilerin ev hayvanı satmasını yasaklıyor. Kanunun 5. maddesi ve yönetmeliğin 12. maddesi bu eğitimin çerçevesini çiziyor: ev hayvanı satan kişiler, yerel yönetimlerin düzenlediği hayvan bakımı ve korunması eğitimine katılıp sertifika almak zorunda.' },
    { kind: 'liste', maddeler: [
      '**Sertifika:** Yerel yönetimlerin düzenlediği eğitim programından alınır',
      '**Ruhsat:** Sertifikadan sonra işyeri ruhsatı alınarak satış yeri açılır',
      '**Kimliklendirme:** Satılacak kedi ve köpekler mikroçiple kayıt altına aldırılır',
      '**Bilgilendirme:** Satıcı, alıcıyı hayvanın bakımı konusunda bilgilendirmek zorundadır',
    ]},
    { kind: 'yanilgi', baslik: '"Kendi kedimin yavrularını internetten satabilirim"', metin: 'Kanunun 14. maddesi hayvan bakımı eğitimi almamış kişilerce ev hayvanı satılmasını açıkça yasaklıyor. Sertifikası ve ruhsatı olmayan bir kişinin yavruları ilanla satması bu kurala aykırı. Yavrulara yuva aramak isteyenler için ücretsiz sahiplendirme ayrı bir yol.' },

    { kind: 'baslik', metin: 'Yasak satışlar ve 2026 cezaları' },
    { kind: 'paragraf', metin: 'Kanunun 28. maddesindeki tutarlar, maddeye yazıldıkları yılın tutarları. Kabahatler Kanunu\'nun 17. maddesi gereği idari para cezaları her yıl yeniden değerleme oranıyla artırılıyor. Aşağıdaki 2026 tutarlarını bu kuralla hesapladık; aynı hesabın ayrıntısı [[5199-sayili-kanun|5199 sayılı kanun]] yazımızda.' },
    { kind: 'tablo', basliklar: ['Fiil', 'Kanundaki tutar', '2026 tutarı'], satirlar: [
      ['Satış yerinde kedi ve köpek bulundurmak (28/f)', 'Hayvan başına 1.500 TL', '13.032 TL'],
      ['16 yaşından küçüğe ev hayvanı satmak (28/j)', '2.000 TL', '17.376 TL'],
      ['Tehlikeli ırk üretmek, sahiplendirmek, satmak (28/j)', 'Hayvan başına 11.000 TL', '95.589 TL'],
      ['Ev hayvanını terk etmek (28/j)', 'Hayvan başına 60.000 TL', '108.370 TL'],
    ]},
    { kind: 'paragraf', metin: 'Tehlikeli ırklar konusunda kanun yalnızca satışı değil, bu hayvanları üretmeyi, sahiplenmeyi, sahiplendirmeyi, takas etmeyi, sergilemeyi, hediye etmeyi ve reklamını yapmayı da yasaklıyor. Hangi ırkların bu listede olduğunu [[yasakli-kopek-irklari|yasaklı köpek ırkları]] yazımızda bulabilirsiniz.' },

    { kind: 'baslik', metin: 'Satmak ile sahiplendirmek aynı şey değil' },
    { kind: 'paragraf', metin: 'Kanun "satmak" ile "sahiplendirmek" fiillerini ayrı ayrı kullanıyor. Satış kuralları, yani sertifika, ruhsat ve pet shop sınırlamaları, ticari satış için yazılmış. Bir hayvana karşılıksız yuva bulmak ise sahiplendirme. Barınaklar ve belediyeler hayvanları bu yolla yeni ailelerine veriyor.' },
    { kind: 'paragraf', metin: 'Sahiplendirmede de kayıt önemli. Kedi ve köpeklerin mikroçiple kimliklendirilmesi zorunlu ve sahip değişikliği aynı kayda işleniyor. Yeni sahibin hayvanı kendi adına kaydettirmesi, kaybolma ya da anlaşmazlık durumunda sahipliği kanıtlamanın en sağlam yolu. Süreci [[petvet-kayit|PETVET kaydı]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Satın almadan önce neye bakılmalı?' },
    { kind: 'paragraf', metin: 'Kanun ve yönetmelik, alıcıya da bazı şeyleri kontrol etme imkânı veriyor. Satış kurallarına uyan bir satıcı bu soruların hepsine belgeyle cevap verebilir:' },
    { kind: 'liste', maddeler: [
      'Satıcının hayvan bakımı eğitim sertifikası ve işyeri ruhsatı var mı?',
      'Hayvan, Bakanlıkça izin verilen bir üretim yerinden mi geliyor?',
      'Hayvan mikroçipli ve kayıt altına alınmış mı?',
      'Satıcı bakım, aşı ve beslenme konusunda bilgi veriyor mu?',
      'Köpek alınıyorsa yönetim planı ve yönetici izni hazır mı?',
    ]},
    { kind: 'paragraf', metin: 'Satın almak tek yol değil. Türkiye\'de barınaklarda ve sokaklarda yuva bekleyen çok sayıda kedi ve köpek var. Sahiplenme sürecini [[barinaktan-kopek-sahiplenme|barınaktan köpek sahiplenme]] yazımızda adım adım anlattık; hangi yolu seçerseniz seçin, yeni dostunuzu ilk haftalarda bir veteriner hekime göstermek iyi bir başlangıç olur.' },
  ],
  kontrolListesi: [
    'Satıcının sertifikası var mı?',
    'Satış yerinin ruhsatı var mı?',
    'Üretim yeri Bakanlık izinli mi?',
    'Hayvan mikroçipli ve kayıtlı mı?',
    'Köpek için yönetici izni alındı mı?',
  ],
  sss: [
    { soru: 'Pet shoplarda kedi köpek satışı yasak mı?', cevap: 'Pet shoplarda sahipli olanlar dışında kedi ve köpek bulundurmak 14 Temmuz 2022\'den beri yasak. Ancak pet shop, Bakanlıkça izin verilen üretim yerlerindeki hayvanların görsellerini kullanarak satışa aracılık edebiliyor; hayvan doğrudan üretim yerinden teslim alınıyor.' },
    { soru: 'Kedi yavrusu satmak yasak mı?', cevap: '5199 sayılı kanunun 14. maddesi, hayvan bakımı eğitimi almamış kişilerin ev hayvanı satmasını yasaklıyor. Ev hayvanı satanların yerel yönetimlerin eğitim programından sertifika alması ve ruhsatlı satış yeri açması gerekiyor. Yavrulara karşılıksız yuva bulmak ise satış değil, sahiplendirmedir.' },
    { soru: 'Pet shopta hayvan bulundurmanın cezası ne kadar?', cevap: 'Kanunun 28/f bendine göre satış yerinde kedi ve köpek bulundurana hayvan başına 1.500 TL idari para cezası öngörülüyor; yeniden değerlemeyle 2026 tutarı hayvan başına 13.032 TL. Ayrıca denetimde bulunan hayvanlara kanunun 24. maddesine göre el konuluyor.' },
    { soru: '16 yaşından küçüğe hayvan satılır mı?', cevap: 'Hayır. 5199 sayılı kanunun 14. maddesi ev hayvanlarının 16 yaşından küçüklere satılmasını yasaklıyor. Bu yasağa aykırı davranana kanunda 2.000 TL idari para cezası öngörülüyor; yeniden değerlemeyle 2026 tutarı 17.376 TL.' },
    { soru: 'Köpek alırken apartman izni gerekir mi?', cevap: 'Uygulama yönetmeliğine göre pet shop, köpek almak isteyen kişiden binanın yönetim planını ve bağımsız bölümde köpek bulundurulabileceğine dair yöneticiden alınan izin belgesini istemekle yükümlü. Satış ancak evde köpek beslemenin uygun olduğu durumlarda yapılabiliyor.' },
    { soru: 'Satılan hayvan bir yere bildirilir mi?', cevap: 'Evet. Pet shop, kedi ve köpek satışına ilişkin bilgileri satış işleminden itibaren beş iş günü içinde il ya da ilçe tarım ve orman müdürlüğüne bildirmek zorunda. Satıcı ayrıca satacağı kedi ve köpekleri mikroçiple kayıt altına aldırmakla yükümlü.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu (madde 5, 10, 14, 24, 28)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği (13.12.2024, sayı 32751), madde 11 ve 12',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/12/20241213-3.htm',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5326 sayılı Kabahatler Kanunu (madde 17, yeniden değerleme)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5326&MevzuatTertip=5',
    },
  ],
};
