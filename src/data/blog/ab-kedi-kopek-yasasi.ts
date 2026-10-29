import type { BlogYazi } from './types';

export const abKediKopekYasasi: BlogYazi = {
  slug: 'ab-kedi-kopek-yasasi',
  baslik: 'AB\'de Kedi ve Köpekler İçin İlk Ortak Yasa: Neler Değişiyor?',
  ozet: 'AB kedi ve köpekler için ilk ortak yasasını çıkardı: zorunlu mikroçip, akraba üretme yasağı, ithalat kuralları ve AB\'ye hayvanla gidenler için ön kayıt.',
  kapakAlt:
    'AB kedi ve köpek yasası konulu yazının kapak görseli; Avrupa Birliği bayrağının önünde yan yana oturan bir köpek ve bir kedi',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-29',
  bloklar: [
    { kind: 'paragraf', metin: '**Avrupa Birliği, kedi ve köpeklerin refahını ve izlenebilirliğini düzenleyen ilk ortak yasasını 2026\'da kabul etti.** Avrupa Parlamentosu tüzüğü 28 Nisan 2026\'da 558 kabul, 35 ret ve 52 çekimser oyla onayladı. 17 Haziran 2026 tarihli 2026/1818 sayılı tüzük, 10 Ağustos 2026\'da Avrupa Birliği Resmî Gazetesi\'nde yayımlandı.' },
    { kind: 'paragraf', metin: 'Tüzüğün raportörü Veronika Vrecionová, yasanın özünü tek cümleyle özetliyor: "Evcil hayvan bir aile üyesidir, bir nesne ya da oyuncak değil." Aşağıda yasanın getirdiği başlıca kuralları, geçiş sürelerini ve Avrupa\'ya evcil hayvanıyla seyahat edecekleri ilgilendiren yeni ön kayıt şartını anlattık.' },

    { kind: 'tablo', basliklar: ['Konu', 'Yeni kural'], satirlar: [
      ['Mikroçip ve kayıt', 'AB\'deki tüm kedi ve köpekler, sahipli olanlar dahil'],
      ['Akraba üretme', 'Ebeveyn-yavru, büyükebeveyn-torun ve kardeşler arasında yasak'],
      ['Aşırı özellikler', 'Ciddi sağlık riski taşıyan abartılı özellikler için üretim yasak'],
      ['Bağlama ve tasmalar', 'Bağlamak ve güvenlik mekanizması olmayan dikenli, boğucu tasmalar yasak'],
      ['AB\'ye hayvanla giriş', 'Varıştan en az beş iş günü önce ön kayıt'],
    ]},

    { kind: 'baslik', metin: 'Yasa neden çıkarıldı?' },
    { kind: 'paragraf', metin: 'Avrupa Parlamentosu\'nun verilerine göre AB vatandaşlarının yaklaşık yüzde 44\'ünün bir evcil hayvanı var ve yüzde 74\'ü bu hayvanların refahının daha iyi korunması gerektiğini düşünüyor. Kedi ve köpek ticaretinin yıllık değeri 1,3 milyar avroya ulaşmış durumda. Avrupa Komisyonu\'na göre sahiplerin yaklaşık yüzde 60\'ı kedi ya da köpeğini internetten alıyor.' },
    { kind: 'paragraf', metin: 'Bu büyüme, kötü koşullarda üretim yapan işletmeleri ve izlenemeyen satışları da beraberinde getirdi. Komisyon yasa teklifini 7 Aralık 2023\'te sundu; Parlamento ve Konsey Kasım 2025\'te uzlaştı. Parlamento\'nun 2026 Nisan\'ındaki son oylamasıyla yasa, üreme, barınma, izlenebilirlik, ithalat ve kedi köpeklere davranış konularında AB çapındaki ilk ortak standartları koydu.' },

    { kind: 'baslik', metin: 'Tüm kedi ve köpeklere mikroçip' },
    { kind: 'paragraf', metin: 'Yasanın en geniş etkili kuralı kimliklendirme: AB\'de bakılan tüm kedi ve köpekler, sahipli olanlar da dahil, mikroçiple işaretlenecek ve birbiriyle uyumlu çalışan ulusal veri tabanlarına kaydedilecek. Böylece bir ülkede kaydedilen hayvanın bilgisine başka bir üye ülkeden de ulaşılabilecek.' },
    { kind: 'tablo', basliklar: ['Kim?', 'Hazırlık süresi'], satirlar: [
      ['Satıcılar, üreticiler ve barınaklar', 'Yürürlükten itibaren 4 yıl'],
      ['Satış yapmayan köpek sahipleri', '10 yıl'],
      ['Satış yapmayan kedi sahipleri', '15 yıl'],
    ]},
    { kind: 'paragraf', metin: 'Bu noktada Türkiye bir adım önde: 5199 sayılı Hayvanları Koruma Kanunu\'na göre Türkiye\'de sahipli kedi ve köpeklerin mikroçiple kimliklendirilip kayıt altına alınması zaten zorunlu. Mikroçipin nasıl çalıştığını [[mikrocip-nedir|mikroçip nedir]], kaydın nasıl yapıldığını [[petvet-kayit|PETVET kaydı]] yazılarımızda anlattık.' },
    { kind: 'yanilgi', baslik: '"AB\'deki tüm kedi sahipleri hemen mikroçip taktırmak zorunda"', metin: 'Kural tüm kedi ve köpekleri kapsıyor ama geçiş süreleri uzun. Satıcılar, üreticiler ve barınaklar için 4 yıl, satış yapmayan sahipler için köpeklerde 10, kedilerde 15 yıl süre tanındı. Ticaret yapanlar önce, bireysel sahipler daha sonra kapsama giriyor.' },

    { kind: 'baslik', metin: 'Akraba üretme ve aşırı özellikler yasaklanıyor' },
    { kind: 'paragraf', metin: 'Yasa, sağlıksız üretimin önüne geçmek için iki önemli yasak getiriyor. Birincisi akraba üretme: ebeveyn ile yavrusu, büyükebeveyn ile torunu ve kardeşler ya da üvey kardeşler arasında üretim yasak. İkincisi, kedi ve köpeklerde ciddi sağlık riski taşıyan abartılı ya da aşırı özellikler için üretim yapmak yasak.' },
    { kind: 'paragraf', metin: 'Gösteri, sergi ve yarışmalar için de yeni bir sınır var: sakatlanmış (mutilasyon uygulanmış) ya da başka bir açıdan endişe taşıyan kedi ve köpekler bu etkinliklerde kullanılamayacak.' },

    { kind: 'baslik', metin: 'Bağlama ve dikenli tasma yasağı' },
    { kind: 'paragraf', metin: 'Bir köpeği ya da kediyi bir nesneye bağlamak, tıbbi tedavi gerektiği durumlar dışında yasaklanıyor. Güvenlik mekanizması bulunmayan dikenli ve boğucu tasmalar da yasak kapsamında. Türkiye\'de şehirde köpek gezdirirken uyulması gereken tasma kurallarını [[kopek-gezdirme-kurallari|köpek gezdirme kuralları]] yazımızda topladık.' },
    { kind: 'yanilgi', baslik: '"Yasa köpeklerde tasma kullanımını yasaklıyor"', metin: 'Yasaklanan tasmanın kendisi değil; güvenlik mekanizması olmayan dikenli ve boğucu tasmalar ve hayvanı bir nesneye bağlayarak bırakmak. Normal bir tasmayla köpek gezdirmek yasanın yasak kapsamında değil.' },

    { kind: 'baslik', metin: 'AB\'ye evcil hayvanla gidenler için ön kayıt' },
    { kind: 'paragraf', metin: 'Yasa AB dışından gelen hayvanları da kapsıyor ve bu bölüm Türkiye\'den Avrupa\'ya evcil hayvanıyla seyahat edenleri doğrudan ilgilendiriyor. Satış amacıyla ithal edilen kedi ve köpekler AB\'ye girmeden önce mikroçiplenmiş olmalı ve bir ulusal veri tabanına kaydedilmeli.' },
    { kind: 'paragraf', metin: 'Ticari olmayan yolculuklarda ise yeni bir adım var: AB\'ye evcil hayvanıyla gelen kişi, mikroçipli hayvanını varıştan **en az beş iş günü önce** bir veri tabanına ön kayıt ettirmek zorunda. Hayvan bir AB ülkesinin veri tabanında zaten kayıtlıysa bu gerekmiyor; Parlamento bültenine göre bazı ülkelerden gelişler için de istisna var. Yolculuktan önce gidilecek ülkenin resmî kaynaklarına bakmak en sağlıklısı.' },
    { kind: 'uyari', metin: 'Bu ön kayıt, mevcut sınır geçiş belgelerinin yerine geçmiyor; onlara ek bir adım. Evcil hayvan pasaportu, kuduz aşısı ve gerekli testlerle ilgili kuralları [[evcil-hayvan-pasaportu|evcil hayvan pasaportu]] ve [[evcil-hayvanla-ucak-yolculugu|evcil hayvanla uçak yolculuğu]] yazılarımızda anlattık.' },

    { kind: 'baslik', metin: 'Sırada dijital evcil hayvan pasaportu var' },
    { kind: 'paragraf', metin: 'Tüzükle birlikte yayımlanan Komisyon açıklamasında, AB Hayvan Sağlığı Kanunu kapsamındaki evcil hayvan pasaportunun dijitalleştirilmesi fikrine olumlu bakıldığı belirtiliyor. Komisyon, bunun teknik ve pratik sonuçlarını üye ülkelerle birlikte iki yıl içinde ayrıntılı biçimde değerlendirecek; Avrupa Dijital Kimlik Cüzdanı\'nın kullanılması da seçenekler arasında.' },
    { kind: 'paragraf', metin: 'Komisyon ayrıca AB genelinde evcil hayvan olarak beslenebilecek türleri belirleyen bir "pozitif liste" getirilmesinin gerekli ve uygulanabilir olup olmadığını inceleyen bir çalışma başlattı. Bu iki adım, Avrupa\'da evcil hayvan sahipliğinin önümüzdeki yıllarda daha da dijital ve kayıtlı hâle geleceğini gösteriyor.' },

    { kind: 'baslik', metin: 'Türkiye ile karşılaştırma' },
    { kind: 'paragraf', metin: 'İki düzenleme farklı yollardan benzer hedeflere yürüyor. Türkiye\'de 5199 sayılı kanun 2021\'de güncellendi; sahipli kedi ve köpeklerin kaydı zorunlu hâle geldi, pet shoplarda kedi ve köpek bulundurmak yasaklandı ve ev hayvanını terk etmek açıkça yasaklandı. AB yasası ise özellikle üretim, ithalat ve sınır ötesi izlenebilirliğe odaklanıyor.' },
    { kind: 'paragraf', metin: 'Türkiye\'deki satış kurallarını [[kedi-kopek-satmak-yasak-mi|kedi köpek satışı yasak mı]], sahiplerin yükümlülüklerini ve cezaları da [[5199-sayili-kanun|5199 sayılı kanun]] yazımızda bulabilirsiniz.' },
  ],
  kontrolListesi: [
    'Hayvan mikroçipli mi?',
    'Kayıt bilgileri güncel mi?',
    'AB ön kaydı 5 iş günü önce mi?',
    'Pasaport ve aşılar tamam mı?',
    'Tasmada güvenlik kilidi var mı?',
  ],
  sss: [
    { soru: 'AB kedi ve köpek yasası nedir?', cevap: 'Avrupa Birliği\'nin kedi ve köpeklerin refahını ve izlenebilirliğini düzenleyen ilk ortak yasası. 17 Haziran 2026 tarihli 2026/1818 sayılı tüzük; üreme, barınma, mikroçip ve kayıt, ithalat ve hayvanlara davranış konularında AB çapında ortak standartlar getiriyor.' },
    { soru: 'AB\'de kedi ve köpeklere mikroçip zorunlu mu?', cevap: 'Evet, yasa tüm kedi ve köpeklerin mikroçiplenmesini ve ulusal veri tabanlarına kaydedilmesini zorunlu tutuyor. Satıcılar, üreticiler ve barınaklar için 4 yıllık geçiş süresi var; satış yapmayan sahipler için bu süre köpeklerde 10, kedilerde 15 yıl.' },
    { soru: 'Türkiye\'den AB\'ye evcil hayvanla gidenleri ne bekliyor?', cevap: 'Yasa, AB\'ye evcil hayvanıyla gelenlerin mikroçipli hayvanını varıştan en az beş iş günü önce bir veri tabanına ön kayıt ettirmesini öngörüyor. Hayvan bir AB ülkesinin veri tabanında zaten kayıtlıysa bu gerekmiyor. Pasaport ve aşı kuralları da geçerliliğini koruyor.' },
    { soru: 'AB yasası hangi üretim yöntemlerini yasaklıyor?', cevap: 'Ebeveyn ile yavru, büyükebeveyn ile torun ve kardeşler ya da üvey kardeşler arasında üretim yasak. Ciddi sağlık riski taşıyan abartılı özellikler için üretim yapmak da yasaklandı. Sakatlanmış hayvanlar gösteri ve yarışmalarda kullanılamayacak.' },
    { soru: 'AB\'de dikenli tasma yasak mı?', cevap: 'Güvenlik mekanizması bulunmayan dikenli ve boğucu tasmalar yasak. Bir köpeği ya da kediyi bir nesneye bağlamak da tıbbi tedavi gerektiği durumlar dışında yasaklandı. Normal bir tasmayla köpek gezdirmek ise yasak kapsamında değil.' },
    { soru: 'Türkiye\'de kedi ve köpeklere mikroçip zorunlu mu?', cevap: 'Evet. 5199 sayılı Hayvanları Koruma Kanunu\'na göre Türkiye\'de sahipli kedi ve köpeklerin mikroçiple kimliklendirilip kayıt altına alınması zorunlu. Kayıt yaptırmamanın 2026\'daki idari para cezası hayvan başına 10.423 TL.' },
  ],
  kaynaklar: [
    {
      kurum: 'Avrupa Parlamentosu',
      baslik: 'First EU rules to protect cats and dogs from abuses (basın bülteni, 28.04.2026)',
      adres: 'https://www.europarl.europa.eu/news/en/press-room/20260423IPR41833/first-eu-rules-to-protect-cats-and-dogs-from-abuses',
    },
    {
      kurum: 'Avrupa Parlamentosu',
      baslik: 'Protection of dogs and cats: deal on EU rules to stop abuse (basın bülteni, Kasım 2025)',
      adres: 'https://www.europarl.europa.eu/news/en/press-room/20251121IPR31539/protection-of-dogs-and-cats-deal-on-eu-rules-to-stop-abuse',
    },
    {
      kurum: 'Avrupa Parlamentosu',
      baslik: 'Kabul edilen metin P10_TA(2026)0115: Welfare of dogs and cats and their traceability',
      adres: 'https://data.europarl.europa.eu/distribution/doc/TA-10-2026-0115_en.pdf',
    },
    {
      kurum: 'Avrupa Birliği Resmî Gazetesi',
      baslik: 'Regulation (EU) 2026/1818 on the welfare of dogs and cats and their traceability (OJ L, 10.8.2026)',
      adres: 'https://eur-lex.europa.eu/eli/reg/2026/1818/oj',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
  ],
};
