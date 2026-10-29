import type { BlogYazi } from './types';

export const sokakKedisiSahiplenmek: BlogYazi = {
  slug: 'sokak-kedisi-sahiplenmek',
  baslik: 'Sokak Kedisi Sahiplenmek İstiyorum: Nasıl Yapılır?',
  ozet: 'Sokak kedisi eve nasıl alınır? Kedinin ev hayatına uygun olup olmadığını anlamak, ilk veteriner kontrolü, kayıt, ilk günler ve yasal sorumluluklar.',
  kapakAlt:
    'Sokak kedisi sahiplenme konulu yazının kapak görseli; apartman girişinde bir kadının uzattığı ele yaklaşan, kuyruğu dik bir tekir sokak kedisi',
  kategori: 'Kedi',
  tarih: '2026-10-29',
  bloklar: [
    { kind: 'paragraf', metin: '**Sokak kedisi sahiplenmek, bir kediye ev hayatı sunmanın en doğrudan yollarından biridir.** Kapınızın önüne her gün gelen, size sürtünen, mamasını bekleyen bir kediyi eve almayı düşünüyorsanız yalnız değilsiniz. Türkiye\'de evlerdeki kedilerin önemli bir kısmının hikâyesi bir sokakta, bir bahçede ya da bir apartman girişinde başlıyor.' },
    { kind: 'paragraf', metin: 'Yine de her sokak kedisi ev hayatına aynı kolaylıkla uyum sağlamıyor. Aşağıda kedinin eve uygun olup olmadığını nasıl anlayacağınızı, ilk veteriner kontrolünü, kayıt işlemlerini, eve alıştırma sürecini ve sahip olarak üstlendiğiniz sorumlulukları adım adım anlattık.' },

    { kind: 'tablo', basliklar: ['Adım', 'Ne yapılıyor?'], satirlar: [
      ['1. Gözlem', 'Kedinin insanlara yaklaşıp yaklaşmadığına bakılır'],
      ['2. Sahip kontrolü', 'Kayıp bir ev kedisi olup olmadığı araştırılır'],
      ['3. Veteriner kontrolü', 'Genel muayene, parazit, aşı ve kısırlaştırma planı'],
      ['4. Kayıt', 'Mikroçiple kimliklendirme ve sahip adına kayıt'],
      ['5. Ev hazırlığı', 'İlk günler için sakin tek bir oda hazırlanır'],
    ]},

    { kind: 'baslik', metin: 'Her sokak kedisi ev hayatına uygun mu?' },
    { kind: 'paragraf', metin: 'Uluslararası kedi refahı kuruluşu International Cat Care (iCatCare), sokakta yaşayan kedileri tek bir grup olarak görmüyor. Kuruluşa göre yabani (feral) kediler genellikle dışarıda, insanla çok az temas ederek doğup büyüyor ve insana yakın olmayı ya da bir eve kapatılmayı çok stresli buluyor. Şehirlerde koloniler hâlinde yaşayan sokak kedileri tanıdık insanlara biraz tolerans gösterebiliyor, ama yavruyken sosyalleşmemiş olanlar ev hayatına uyum sağlamakta zorlanıyor.' },
    { kind: 'paragraf', metin: 'Üçüncü bir grup daha var: kaybolmuş ya da terk edilmiş eski ev kedileri. iCatCare\'e göre bu kediler nerede yaşarlarsa yaşasınlar ev kedisi olmaya devam ediyor; erken dönem deneyimleri sayesinde insanlarla rahat yaşama kapasitesine büyük olasılıkla sahipler. Eve en kolay uyum sağlayan sokak kedileri genellikle bu gruptan çıkıyor.' },
    { kind: 'tablo', basliklar: ['Belirti', 'Eve uyum ihtimali yüksek kedi', 'Yabani kedi'], satirlar: [
      ['İnsana tepkisi', 'Yaklaşır, sürtünür; çekingense bile zamanla gelir', 'Teşvik edilse de yaklaşmaz'],
      ['Nerede görülür?', 'Evlerin, bahçelerin yakınında', 'İnsanlardan uzak saklanma yerlerinde'],
      ['Ne zamandır orada?', 'Yeni ortaya çıkmış, kaybolmuş görünebilir', 'Uzun süredir aynı bölgede yaşar'],
      ['Görünüşü', 'Bakımsız, zayıf olabilir', 'Kendi başına yaşamaya alışkın'],
    ]},
    { kind: 'paragraf', metin: 'Bu tablo İngiliz kedi refahı kuruluşu Cats Protection\'ın ayırt etme ölçütlerine dayanıyor. Kuruluşa göre kedilerin insan temasından hoşlanmayı öğrendiği sosyalleşme dönemi iki ile altı hafta arasında; iCatCare bu aralığı iki ile yedi hafta olarak veriyor. Bu dönemi insanlarla geçirmemiş kediler insanlara karşı temkinli kalıyor.' },
    { kind: 'yanilgi', baslik: '"Sokaktaki her kedi eve alınınca mutlu olur"', metin: 'iCatCare\'e göre yavruyken sosyalleşmemiş yabani ve sokak kedileri bir eve ya da kafese kapatılmayı çok stresli buluyor. Bu kediler için en iyi yardım çoğu zaman bulundukları yerde beslenmek, kısırlaştırılmak ve izlenmek. Eve almak, insanlara yaklaşan ve dokunulmaktan hoşlanan kediler için daha uygun bir seçenek.' },

    { kind: 'baslik', metin: 'Önce sahibi var mı, bakın' },
    { kind: 'paragraf', metin: 'İnsanlara yaklaşan, bakımsız ve yeni ortaya çıkmış bir kedi, birinin kaybolmuş kedisi olabilir. Cats Protection, kaybolmuş kedilerin mikroçipli olabileceğini hatırlatıyor. Türkiye\'de kedilerin mikroçiple kimliklendirilip kayıt altına alınması zorunlu; bir veteriner hekim mikroçip okuyucuyla kedide çip olup olmadığını kısa sürede kontrol edebilir.' },
    { kind: 'paragraf', metin: 'Çip çıkarsa kedi sahibine kavuşabilir; bu da güzel bir son. Çip yoksa mahalledeki paylaşım gruplarına ve apartman panolarına kısa bir duyuru asmak, kediyi arayan biri varsa ona ulaşmanın en kolay yolu. Mikroçipin nasıl çalıştığını [[mikrocip-nedir|mikroçip nedir]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'İlk veteriner kontrolü' },
    { kind: 'paragraf', metin: 'Sokaktan alınan bir kedinin eve girmeden ya da ilk günlerde bir veteriner hekime gösterilmesi, hem kedinin hem evdeki diğer hayvanların sağlığı için önemli. Veteriner hekim genel muayeneyi yapar, iç ve dış parazitler için uygun uygulamayı belirler, kedinin yaşına ve geçmişine göre aşı takvimini ve kısırlaştırma planını çıkarır.' },
    { kind: 'uyari', metin: 'Evde başka bir kedi varsa, yeni gelen kedi veteriner kontrolünden geçene kadar ayrı bir odada tutulmalı. iCatCare de evde zaten bir kedi varken yeni gelen kedinin ilk günlerini tek bir odada geçirmesini gerekli görüyor. Halsizlik, iştahsızlık, burun ya da göz akıntısı, ishal gibi belirtiler varsa kediyi vakit kaybetmeden veteriner hekime göstermek gerekiyor.' },
    { kind: 'paragraf', metin: 'Aşıların hangi sırayla yapıldığını [[kedi-asi-takvimi|kedi aşı takvimi]], kısırlaştırmanın zamanlamasını da [[kediler-ne-zaman-kisirlastirilmali|kediler ne zaman kısırlaştırılmalı]] yazılarımızda bulabilirsiniz.' },

    { kind: 'baslik', metin: 'Kayıt ve yasal sorumluluklar' },
    { kind: 'paragraf', metin: 'Sokak kedisini eve aldığınız anda onun sahibi oluyorsunuz ve 2024 tarihli Hayvanların Korunması Hakkında Uygulama Yönetmeliği\'nin hayvan sahiplerine yüklediği sorumluluklar size de geçiyor. Bunların başlıcaları şunlar:' },
    { kind: 'liste', maddeler: [
      '**Kayıt:** Kediyi dijital kimliklendirme yöntemleriyle, yani mikroçiple kayıt altına aldırmak',
      '**Sağlık:** Gerekli aşı ve tedavileri veteriner hekime yaptırmak, türüne uygun ihtiyaçlarını karşılamak',
      '**Kısırlaştırma:** Kontrolsüz üremeyi önlemek için kısırlaştırmak; yavrulatmak istenirse yavruları kayıt altına aldırarak sahiplenmek ya da sahiplendirmek',
      '**Bildirim:** Kedinin ölmesi hâlinde il ya da ilçe tarım ve orman müdürlüğüne bildirmek',
    ]},
    { kind: 'paragraf', metin: 'Yönetmelik, ev hayvanı sahiplerinin hayvanlarını terk edemeyeceğini; gerektiğinde yeniden sahiplendirme yapabileceğini ya da hayvan bakımevine teslim edebileceğini söylüyor. 5199 sayılı kanuna göre ev hayvanını terk etmenin 2026\'daki idari para cezası hayvan başına 108.370 TL. Kayıt sürecini [[petvet-kayit|PETVET kaydı]] yazımızda adım adım anlattık.' },
    { kind: 'yanilgi', baslik: '"Sokak kedisini eve aldım, işler yolunda gitmezse geri bırakırım"', metin: 'Kediyi sahiplendiğiniz anda ev hayvanı sahibi oluyorsunuz ve yönetmelik ev hayvanlarının terk edilmesini yasaklıyor. Uyum sağlanamazsa yasal yol kediyi yeniden sahiplendirmek ya da bir hayvan bakımevine teslim etmek. Bu yüzden karar vermeden önce kediyi bir süre gözlemlemek iyi bir başlangıç.' },

    { kind: 'baslik', metin: 'İlk günler: tek oda, çok sabır' },
    { kind: 'paragraf', metin: 'iCatCare, eve yeni gelen kedilerin ilk günlerini ya da haftalarını tek bir odada geçirmesini öneriyor; yetişkin kediler de başlangıçta tek odada daha rahat hissedebiliyor. Odada mama ve su kapları, rahat bir yatak, kum kabı, oyuncaklar ve tırmalama tahtası bulunmalı. Kum kabı bir köşeye, mama kabı karşı tarafa, su kabı da ikisinden biraz uzağa konulabilir.' },
    { kind: 'liste', maddeler: [
      'Kediyi taşıma çantasıyla odaya bırakıp kapağı açmak ve kendi zamanında çıkmasını beklemek',
      'Taşıma çantasını odada güvenli bir sığınak olarak bırakmak',
      'Yan yatırılmış, içine kalın bir battaniye konmuş bir karton kutuyla saklanma yeri sağlamak',
      'Pencereleri güvenli biçimde kapalı tutmak; sokak kedisi ilk günlerde kaçmaya çalışabilir',
      'Kediyi zorla kucağa almamak, yaklaşmasını beklemek',
    ]},
    { kind: 'paragraf', metin: 'Sokaktan gelen bir kedinin evdeki seslere, kokulara ve kum kabına alışması biraz zaman alabilir. Eve yeni gelen kedilerin uyum sürecini [[yeni-kedi-eve-alisma|eve yeni gelen kedi]] yazımızda ayrıntılı anlattık.' },

    { kind: 'baslik', metin: 'Eve almak yerine yardım etmenin yolları' },
    { kind: 'paragraf', metin: 'Her kediyi eve almak mümkün olmayabilir; bu, yardım edemeyeceğiniz anlamına gelmiyor. iCatCare\'e göre koloni hâlinde yaşayan sokak kedilerinin sayısının kontrol altında tutulması için kısırlaştırma gerekiyor ve bazı ülkelerde bu kedilere görevli kişiler mama, barınak sağlıyor ve onları izliyor. Türkiye\'de de pek çok belediye ve gönüllü sahipsiz hayvanlar için kısırlaştırma ve besleme çalışmaları yürütüyor.' },
    { kind: 'paragraf', metin: 'Kışın bir karton ya da strafor kutudan yapılmış basit bir kulübe, düzenli temiz su ve mahalledeki kedilerin kısırlaştırılması için belediyeyle iletişime geçmek, eve alamadığınız kediler için yapabileceğiniz en değerli şeyler arasında. Barınaklardan sahiplenme seçeneğini de [[barinaktan-kopek-sahiplenme|barınaktan sahiplenme]] yazımızda anlattık.' },
  ],
  kontrolListesi: [
    'Kedi insanlara yaklaşıyor mu?',
    'Mikroçip kontrolü yapıldı mı?',
    'Veteriner muayenesi yapıldı mı?',
    'Kayıt sahip adına yapıldı mı?',
    'İlk günler için oda hazır mı?',
    'Pencereler güvenli mi?',
  ],
  sss: [
    { soru: 'Sokak kedisi eve alışır mı?', cevap: 'İnsanlara yaklaşan, dokunulmaktan hoşlanan kediler çoğu zaman eve uyum sağlar; bunların bir kısmı kaybolmuş ya da terk edilmiş eski ev kedileridir. iCatCare\'e göre yavruyken sosyalleşmemiş yabani ve sokak kedileri ise bir eve kapatılmayı çok stresli bulabiliyor.' },
    { soru: 'Sokak kedisini eve alınca ne yapmalı?', cevap: 'İlk iş kediyi bir veteriner hekime götürüp mikroçip kontrolü, genel muayene, parazit uygulaması, aşı ve kısırlaştırma planı için değerlendirmek. Ardından kedi mikroçiple sizin adınıza kayıt altına alınır ve ilk günlerini sakin, tek bir odada geçirmesi sağlanır.' },
    { soru: 'Sokak kedisinin sahibi olup olmadığı nasıl anlaşılır?', cevap: 'Bir veteriner hekim mikroçip okuyucuyla kedide çip olup olmadığını kontrol edebilir. Çip yoksa mahalle paylaşım gruplarına ve apartman panolarına kısa bir duyuru asmak, kediyi arayan biri varsa ona ulaşmanın en kolay yoludur.' },
    { soru: 'Sokak kedisini eve alınca kaydettirmek zorunlu mu?', cevap: 'Evet. Uygulama yönetmeliği hayvan sahiplerinin kedi ve köpeklerini dijital kimliklendirme yöntemleriyle, yani mikroçiple kayıt altına aldırmasını zorunlu tutuyor. Kediyi sahiplendiğiniz anda bu yükümlülük size geçiyor.' },
    { soru: 'Sahiplendiğim kedi eve uyum sağlamazsa ne olur?', cevap: 'Yönetmelik ev hayvanlarının terk edilmesini yasaklıyor; uyum sağlanamazsa kedi yeniden sahiplendirilebilir ya da bir hayvan bakımevine teslim edilebilir. 2026\'da ev hayvanını terk etmenin cezası hayvan başına 108.370 TL.' },
    { soru: 'Yabani kedi evcilleşir mi?', cevap: 'Cats Protection\'a göre yabani kediler insanla çok az temas etmiş ya da hiç etmemiştir ve evcilleştirilemez. iCatCare de bu kedilerin insana yakın olmayı ya da bir eve kapatılmayı çok stresli bulduğunu söylüyor. Onlar için en iyi yardım bulundukları yerde kısırlaştırma ve beslemedir.' },
  ],
  kaynaklar: [
    {
      kurum: 'International Cat Care (iCatCare)',
      baslik: 'The different needs of domestic cats',
      adres: 'https://icatcare.org/articles/the-different-needs-of-different-cats',
    },
    {
      kurum: 'International Cat Care (iCatCare)',
      baslik: 'Helping your new cat or kitten settle in',
      adres: 'https://icatcare.org/articles/helping-your-new-cat-or-kitten-settle-in',
    },
    {
      kurum: 'Cats Protection',
      baslik: 'What are feral cats?',
      adres: 'https://www.cats.org.uk/help-and-advice/lost-found-and-feral-cats/feral-cat',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği (13.12.2024, sayı 32751), madde 10',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/12/20241213-3.htm',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu (madde 14 ve 28)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
  ],
};
