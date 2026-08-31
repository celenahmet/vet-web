import type { BlogYazi } from './types';

/**
 * KLINIK YONETIMI.
 *
 * ⚠️ RAKAM YAZILMADI, BILEREK. Kamu maasi katsayiya ve ek gostergeye bagli,
 * yilda en az iki kez degisiyor; ozel sektorde ise merkezi bir kayit yok.
 * Buraya yazilacak bir sayi haftalar icinde yanlis olur ve yaziyi okuyan
 * yanlis bilgiyle pazarlik yapar. Yazi, maasin NASIL olustugunu anlatiyor ve
 * guncel rakam icin resmi kaynaga yonlendiriyor. Kaynaksiz sayi vermek,
 * kaynaksiz yazmaktan kotudur (Anayasa §4.1).
 */
export const veterinerHekimMaaslari: BlogYazi = {
  slug: 'veteriner-hekim-maaslari',
  baslik: 'Veteriner Hekim Maaşları: Kamu ve Özel Klinik Nasıl Farklılaşıyor?',
  ozet: 'Tek bir veteriner hekim maaşı yok. Kamuda maaş formülle, özelde ciroyla oluşuyor; ikisini aynı tabloda karşılaştırmak yanıltıyor.',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-08-31',
  bloklar: [
    { kind: 'paragraf', metin: 'Bu sorunun tek rakamlı bir cevabı yok ve olmaması normal. Veteriner hekimin geliri **nerede çalıştığına** göre bambaşka bir mantıkla oluşuyor. Kamuda maaş bir formülün sonucu; özel sektörde kliniğin cirosuna ve yapılan işe bağlı.' },
    { kind: 'paragraf', metin: 'Aşağıda önce **yaklaşık bantları** veriyoruz, sonra bu bantları neyin belirlediğini açıyoruz. Rakamlar hızla eskiyor: kamu maaşları katsayıya bağlı olarak yılda en az iki kez değişiyor, özel sektörde ise merkezi bir kayıt yok. Bu yüzden her sayının yanında hangi tarihe ait olduğu ve neye göre değiştiği yazıyor.' },

    { kind: 'baslik', metin: 'Kısa cevap: 2026 için yaklaşık bantlar' },
    { kind: 'paragraf', metin: 'Aşağıdaki değerler **Ağustos 2026 itibarıyla** kamu maaş katsayısı ve sektör ilanlarından derlenen yaklaşık bantlardır. Kesin tutar değildir: kamuda derece, kademe, ek gösterge ve döner sermayeye; özelde kliniğin cirosuna ve çalışma biçimine göre değişir.' },
    { kind: 'tablo', basliklar: ['Durum', 'Yaklaşık aylık net', 'Neye göre değişir'], satirlar: [
      ['Kamu, yeni başlayan (8/1)', '65.000 - 75.000 TL', 'Derece, kademe, ek ödeme'],
      ['Kamu, kıdemli (5. derece, 2400 ek gösterge)', '75.000 - 81.000 TL', 'Kıdem, döner sermaye'],
      ['Özel klinikte çalışan', 'Meslek örgütünün açıkladığı asgari net ücret 85.000 TL', 'Prim, mesai, kliniğin hacmi'],
      ['Klinik sahibi', 'Sabit bant yok', 'Ciro eksi giderler'],
    ] },
    { kind: 'uyari', metin: 'Bu bantlar bilgilendirme amaçlıdır ve garanti edilmez. Kamu maaşları katsayı değişikliğiyle yıl içinde güncellenir; özel sektörde ilan edilen ücretler doğrulanmamış beyandır. Karar vermeden önce aşağıdaki resmî kaynaklardan güncel değeri teyit edin.' },
    { kind: 'paragraf', metin: 'Bantların neden bu kadar geniş olduğunu ve aradaki farkı neyin ürettiğini aşağıda açıyoruz.' },

    { kind: 'baslik', metin: 'Kamuda: maaş bir toplama işlemi' },
    { kind: 'paragraf', metin: 'Kamuda çalışan veteriner hekim, devlet memuru statüsünde. Maaş tek kalem değil, birkaç bileşenin toplamı olarak çıkıyor:' },
    { kind: 'liste', maddeler: [
      'Gösterge ve ek gösterge: unvan ve öğrenim durumuna bağlı',
      'Aylık katsayısı: merkezi olarak belirleniyor ve dönemsel güncelleniyor',
      'Kıdem: hizmet yılına göre artıyor',
      'Ek ödeme ve tazminatlar: kadro ve göreve göre',
      'Döner sermaye: kurumuna göre değişiyor, her kurumda yok',
    ] },
    { kind: 'paragraf', metin: 'Bu yüzden "kamuda veteriner hekim maaşı" tek bir sayı değil, bir aralık. Aynı yıl işe başlamış iki hekimin geliri, çalıştıkları kuruma göre farklılaşabiliyor.' },

    { kind: 'baslik', metin: 'Özel sektörde: gelir işin hacmine bağlı' },
    { kind: 'paragraf', metin: 'Özel klinikte çalışan hekimde tablo değişiyor. Sabit ücret, ciro primi ya da ikisinin karışımı yaygın. Klinik sahibi olan hekimde ise "maaş" kavramı yerini **işletme kârına** bırakıyor: gelirden kira, personel, ilaç ve sarf, cihaz amortismanı, vergi ve oda giderleri düşüldükten sonra kalan.' },
    { kind: 'tablo', basliklar: ['', 'Kamu', 'Özelde çalışan', 'Klinik sahibi'], satirlar: [
      ['Gelirin kaynağı', 'Kadro ve katsayı', 'Ücret ve/veya prim', 'İşletme kârı'],
      ['Öngörülebilirlik', 'Yüksek', 'Orta', 'Düşük, mevsimsel'],
      ['Gider riski', 'Yok', 'Yok', 'Hekimde'],
      ['Gelir tavanı', 'Mevzuatla sınırlı', 'Performansa bağlı', 'Hacme bağlı'],
    ] },

    { kind: 'yanilgi', baslik: '"Özel klinik daha çok kazandırır" yanılgısı', metin: 'Ciro ile kazanç aynı şey değil. Klinik sahibi hekimde kira, personel maaşı, ilaç ve sarf malzeme, cihaz yatırımı, atık yönetimi, muhasebe ve vergi giderleri gelirden önce düşülüyor. Yüksek ciro yapan bir klinik, gider yapısı ağırsa kamudaki bir hekimden daha az bırakabiliyor. Karşılaştırma yapılacaksa ciro değil, **giderden sonra kalan** karşılaştırılmalı.' },

    { kind: 'baslik', metin: 'Klinik sahibi için: geliri belirleyen üç kalem' },
    { kind: 'paragraf', metin: 'Klinik işletiyorsanız gelirinizi belirleyen şey ücret listesi değil, üç şeyin bileşimi: hasta sayısı, işlem başına ortalama gelir ve **tahsil edilebilirlik.** Üçüncüsü çoğu zaman gözden kaçıyor; yapılan ama takibi düşen işlem, gelir tablosunda görünmüyor.' },
    { kind: 'paragraf', metin: 'Ücretlendirmenin alt sınırını belirleyen oda tarifelerinin nasıl işlediğini [[asgari-ucret-tarifesi-nedir|asgari ücret tarifesi]] yazısında anlattık. Randevu ve takip kayıplarının gelire etkisi için [[klinikte-randevu-yonetimi|randevu yönetimi]] yazısına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Güncel rakamı nereden öğrenmeli' },
    { kind: 'liste', maddeler: [
      'Kamu için: Tarım ve Orman Bakanlığı ile ilgili kurumların personel alım ilanları ve resmî maaş katsayısı duyuruları.',
      'Kadro ve ek gösterge için: 657 sayılı Devlet Memurları Kanunu ve ekli cetveller.',
      'Özel sektör için: bulunduğunuz ildeki veteriner hekimleri odası ve meslek grupları.',
      'İlan sitelerindeki rakamları tek başına ölçü almayın; doğrulanmamış beyandır.',
    ] },

    { kind: 'uyari', metin: 'Bu yazı güncel maaş rakamı içermiyor ve kariyer danışmanlığı değildir. Kamu maaşları mevzuat ve katsayı değişikliklerine, özel sektör gelirleri ise işletme koşullarına göre değişir. Karar vermeden önce resmî kaynaklara ve muhasebe desteğine başvurun.' },
  ],
  sss: [
    { soru: 'Verilen rakamlar kesin mi?', cevap: 'Hayır, yaklaşık bantlardır ve Ağustos 2026 durumunu yansıtır. Kamu maaşları katsayı değişikliğiyle yıl içinde güncellenir; özel sektörde ilan edilen ücretler doğrulanmamış beyandır. Karar vermeden önce resmî kaynaktan teyit edin.' },
    { soru: 'Kamuda mı özelde mi daha çok kazanılır?', cevap: 'Tek yönlü bir cevabı yok. Kamu daha öngörülebilir, özel sektör performansa bağlı olarak daha geniş bir aralık sunuyor ama gider ve risk hekimde.' },
    { soru: 'Klinik sahibi olmak geliri artırır mı?', cevap: 'Ciroyu artırabilir, kazancı artırıp artırmadığı gider yapısına bağlı. Kira, personel, sarf ve cihaz giderleri düşüldükten sonra kalana bakmak gerekiyor.' },
    { soru: 'Döner sermaye her kurumda var mı?', cevap: 'Hayır. Kuruma ve göreve göre değişiyor; olmadığı kadrolar da var.' },
  ],
  kontrolListesi: [
    'Karşılaştırma yaparken ciroyu değil, giderden sonra kalanı karşılaştırın.',
    'Kamu için güncel katsayı ve ek gösterge bilgisini resmî kaynaktan doğrulayın.',
    'İş görüşmesinde sabit ücret ile prim oranını ayrı ayrı netleştirin.',
    'Klinik sahibiyseniz tahsil edilemeyen işlemleri ayrı izleyin.',
    'İlan sitelerindeki rakamları doğrulanmamış beyan olarak görün.',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: '657 sayılı Devlet Memurları Kanunu (gösterge, ek gösterge ve aylık hesabına ilişkin hükümler)',
      yil: 1965,
      adres: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=657&MevzuatTur=1&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: '6343 sayılı Veteriner Hekimliği Mesleğinin İcrasına, Türk Veteriner Hekimleri Birliği ile Odalarının Teşekkül Tarzına ve Göreceği İşlere Dair Kanun',
      yil: 1954,
      adres: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6343&MevzuatTur=1&MevzuatTertip=3',
    },
  ],
};
