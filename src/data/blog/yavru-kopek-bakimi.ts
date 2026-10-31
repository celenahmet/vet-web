import type { BlogYazi } from './types';

export const yavruKopekBakimi: BlogYazi = {
  slug: 'yavru-kopek-bakimi',
  baslik: 'Yavru Köpek Bakımı: İlk Aylar Rehberi',
  ozet: 'Yavru köpek bakımı sessiz bir dinlenme yeri, aynı mama ve küçük öğünler, kontrollü sosyalleşme ve veteriner hekimle düzenli iletişimden oluşuyor.',
  kapakAlt:
    'Mama kabı ve oyuncakların arasında sevilen golden yavru köpek',
  kategori: 'Köpek',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Yavru köpek bakımı, ilk aylarda sakin bir düzen kurmayı, aynı yavru maması ve küçük öğünleri, güvenli bir evi, düzenli dinlenmeyi ve aşı dizisi bitmeden de kontrollü biçimde yeni deneyimlerle tanışmayı kapsar.** İngiltere\'nin hayvan refahı kuruluşu RSPCA, 8-12 haftalık dönemi özellikle önemli buluyor: yavrunun bu dönemde öğrendikleri ve yaşadıkları ilerideki davranışını şekillendiriyor.' },
    { kind: 'paragraf', metin: 'Aşağıda eve gelmeden önceki hazırlığı, ilk veteriner ziyaretini, sosyalleşmeyi, yeni deneyimlere alıştırmayı, beslenmeyi, dinlenmeyi ve yavru sınıfını sırayla anlatıyoruz. Aşı, parazit ve tuvalet eğitimi gibi konuların ayrıntısı için ilgili yazılarımıza bağlantı verdik.' },

    { kind: 'tablo', basliklar: ['Dönem', 'Odak'], satirlar: [
      ['Eve gelmeden önce', 'Dinlenme yeri, oyuncak, zehirli maddelerin kaldırılması, veteriner hekim bulunması'],
      ['8-12 hafta', 'Kontrollü sosyalleşme, kısa süreli yalnız kalma, küçük ve düzenli öğünler, tuvalet eğitimi'],
      ['12 hafta sonrası', 'Aşılar tamamlanınca dışarıda sosyalleşme, yavru sınıfı, kısa eğitim oturumları'],
      ['6 ay sonrası', 'Ödüllü eğitime devam, yetişkin mamasına geçiş'],
    ]},

    { kind: 'baslik', metin: 'Yavru eve gelmeden önce neler hazırlanmalı?' },
    { kind: 'paragraf', metin: 'RSPCA, yavru eve gelmeden önce bir dinlenme yeri hazırlanmasını öneriyor: sessiz ve cereyansız bir yerde, yavrunun rahatsız edilmeden dinlenebileceği bir kafes (crate), saklanma köşeleri ya da rahat bir yatak. Yavrunun ilk yaşadığı yerden bir battaniye alıp getirmek de ona tanıdık ve rahat bir koku sunuyor. Bunun yanında yavruya oyun için bir alan ve oyalanması için oyuncaklar gerekiyor.' },
    { kind: 'paragraf', metin: 'Rehberdeki bir diğer madde, zehirli olan ya da kemirilmesini istemediğiniz her şeyin yavrunun erişiminden kaldırılması. Hangi yiyeceklerin köpekler için riskli olduğunu [[kopeklere-zararli-yiyecekler|köpeklere zararlı yiyecekler]] yazımızda anlattık. Zehirlenmeden şüphelenilen bir durumda vakit kaybetmeden veteriner hekime başvurmak gerekiyor; ayrıntısı [[kopeklerde-zehirlenme|köpeklerde zehirlenme]] yazımızda.' },
    { kind: 'paragraf', metin: 'Eve gelmeden önce bir veteriner hekim bulmak da hazırlığın parçası. Nasıl seçileceğini [[veteriner-klinigi-nasil-secilir|veteriner kliniği nasıl seçilir]] yazımızda bulabilirsiniz.' },

    { kind: 'baslik', metin: 'İlk veteriner ziyareti ve aşı takvimi' },
    { kind: 'paragraf', metin: 'RSPCA, yavrunun önceki bakıcısının ilk aşıyı yaptırmış, tuvalet eğitimine ve yeni durumlarla tanıştırmaya başlamış olması gerektiğini belirtiyor. Aynı rehberde 12 hafta civarında ikinci aşılardan söz ediliyor; bu ziyarette veteriner hekime solucan, pire uygulaması ve kısırlaştırma konusunun sorulması öneriliyor. Türkiye\'de hangi aşının ne zaman yapılacağını yavrunun durumuna göre veteriner hekim belirliyor.' },
    { kind: 'paragraf', metin: 'Aşı dizisinin ayrıntısı [[kopek-asi-takvimi|köpek aşı takvimi]] yazımızda, ilk aylardaki kontrol ziyaretleri [[yavru-kopek-veterinere-ne-zaman-goturulmeli|yavru köpek ne zaman veterinere götürülmeli]] yazımızda, parazit konusu ise [[kopeklerde-ic-ve-dis-parazit|köpeklerde iç ve dış parazit]] yazımızda anlatılıyor. Bu yazıda onları tekrar etmiyoruz.' },

    { kind: 'baslik', metin: 'Aşılar bitmeden sosyalleşme nasıl yapılır?' },
    { kind: 'paragraf', metin: 'RSPCA, yavru henüz tam aşılı değilken bile sosyalleşmenin sürmesini öneriyor. Önerilen yollar şunlar: sağlıklı ve tam aşılı köpek ve kedilerle tanıştırmak, yavruyu kucakta dışarı götürüp yeni insanlar, görüntüler ve seslerle karşılaştırmak. Aşılar tamamlandıktan sonra ise dışarıda sosyalleşmeye geçiliyor.' },
    { kind: 'paragraf', metin: 'Howell ve arkadaşlarının hakemli derlemesine göre yaşa uygun sosyalleşme doğumdan birkaç gün sonra başlamalı ve yetişkinliğe kadar sürmeli. Yavruyken uygun biçimde sosyalleşen köpeklerin yetişkinlikte saldırganlık ve korkaklık dahil davranış sorunlarını daha az gösterdiği belirtiliyor.' },
    { kind: 'yanilgi', baslik: '"Aşılar bitmeden yavruyu hiçbir ortama sokmamak gerekir"', metin: 'ABD\'de 21 klinik ve 24 eğitmenden toplanan verilerle yapılan bir çalışmada yavru sosyalleşme sınıflarına katılan 279 yavrunun hiçbirinde parvovirüs şüphesi ya da tanısı bildirilmedi. Sonuçlara göre en az bir kez aşılanmış ve sınıfa giden yavrular, sınıfa gitmeyen aşılı yavrulardan daha yüksek risk taşımıyordu. Bu, her ortamın güvenli olduğu anlamına gelmiyor; hangi ortamların uygun olduğunu veteriner hekimle konuşmak gerekiyor.' },
    { kind: 'paragraf', metin: 'Sosyalleşmenin ihmal edilmesi gerçek bir durum. Cutler ve arkadaşlarının 296 yavru sahibiyle yaptığı ankette, 20 haftadan küçük yavruların yaklaşık üçte biri evin dışında insanlarla ve köpeklerle yalnızca asgari düzeyde temas kurabilmişti.' },

    { kind: 'baslik', metin: 'Dokunulmaya, arabaya ve yalnız kalmaya alıştırmak' },
    { kind: 'paragraf', metin: 'RSPCA 8-12 haftalık dönemde yavrunun yeni deneyimlere yavaş yavaş alıştırılmasını öneriyor: araba yolculuğu, tüy bakımı, tutulmak, kulakların, gözlerin ve vücudun diğer bölgelerinin kontrol edilmesi. Her deneyimin olumlu geçmesi, bu rehberin temel çizgisi.' },
    { kind: 'paragraf', metin: 'Aynı rehber, ayrılıkla ilgili davranış sorunlarını önlemek için yavrunun kısa süreler için yalnız bırakılmaya başlanmasını da öneriyor. Yalnız kalmakta zorlanan köpekler için [[kopeklerde-ayrilik-kaygisi|köpeklerde ayrılık kaygısı]] yazımıza bakabilirsiniz; belirgin sıkıntı varsa veteriner hekime danışmak gerekiyor.' },

    { kind: 'baslik', metin: 'Yavru maması ve öğün düzeni' },
    { kind: 'paragraf', metin: 'RSPCA, yavruya eski yerinde yediği aynı yavru mamasının verilmesini ve aynı rutinin sürdürülmesini, öğünlerin küçük ve düzenli olmasını öneriyor. Yani eve gelen yavruda mamayı ilk günden değiştirmek yerine tanıdık olanla başlamak daha uygun görülüyor.' },
    { kind: 'paragraf', metin: 'Mamayı kabın içinde sürekli bırakmak (serbest besleme) konusunda WSAVA\'nın görüşü ayrıntılı. Dünya Küçük Hayvan Veteriner Hekimleri Birliği, serbest beslemenin ancak ideal kilosunu ve vücut kondisyonunu kendi iştahıyla koruyabilen hayvanlarda uygun olduğunu söylüyor. Büyük ırk büyüme çağındaki yavrularda ise bu yöntem önerilmiyor; porsiyonlu besleme, yavaş kilo artışı ve 9 üzerinden 4 vücut kondisyon skoru hedefleniyor, çünkü hızlı büyüme eklem ve iskelet sorunlarıyla ilişkilendiriliyor.' },
    { kind: 'paragraf', metin: 'RSPCA, 6 aydan sonraki dönemde köpek büyüdükçe beslenme ihtiyaçları değiştiği için yetişkin mamasına geçilmesini öneriyor. Günlük miktarın nasıl hesaplandığını [[kopek-gunde-kac-gram-mama-yer|köpek günde kaç gram mama yer]] yazımızda anlattık. Kesin miktarı ve mama geçişinin zamanını yavrunun durumuna göre veteriner hekimle belirlemek gerekiyor.' },

    { kind: 'baslik', metin: 'Dinlenme, rutin ve kısa eğitim oturumları' },
    { kind: 'paragraf', metin: 'RSPCA\'ya göre büyümek ve öğrenmek yorucu; bu yüzden yavrunun düzenli olarak dinlenmesine izin vermek ve eğitim oturumlarını kısa ve eğlenceli tutmak gerekiyor. Yavru kafese alıştırılmışsa kafes onun için güvenli bir sığınak olabiliyor.' },
    { kind: 'paragraf', metin: 'Rehber ayrıca tutarlı bir rutin ve kurallar oluşturmayı, iyi davranışı ödüllendirip istenmeyen davranışı görmezden gelmeyi öneriyor. Tuvalet eğitiminde de aynı mantık geçerli: yavru dışarıda yaptığında ödüllendirilir. Adım adım anlatım için [[yavru-kopek-tuvalet-egitimi|yavru köpeğe tuvalet eğitimi]] yazımıza bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Yavru sınıfı işe yarar mı?' },
    { kind: 'paragraf', metin: 'RSPCA 12 haftadan sonra iyi yavru sınıflarının yavrunun özgüvenini artırmak ve temel eğitimi öğrenmek için güzel bir yol olduğunu söylüyor. Howell ve arkadaşları ise sınıfların yararına dair kanıtın net olmadığını belirtiyor: bazı çalışmalar yetişkin davranışına olumlu etki gösterirken bazıları açık bir fayda bulmuyor. Sınıf tek başına bir çözüm değil, sosyalleşmenin bir yolu.' },
    { kind: 'paragraf', metin: 'Cutler ve arkadaşlarının anketinde sınıfa katılan sahipler ceza temelli disiplin yöntemlerini daha az kullandığını bildirdi.' },

    { kind: 'baslik', metin: 'Ne zaman veteriner hekime danışılmalı?' },
    { kind: 'uyari', metin: 'Yavrunun sağlığıyla ilgili bir kaygı varsa ya da beslenme, aşı, parazit, kısırlaştırma gibi konularda karar vermek gerekiyorsa veteriner hekime danışmak gerekiyor. RSPCA da yavruyla ilgili her kaygıda veteriner hekime başvurulmasını öneriyor. Belirtilere bakıp kendi kendine teşhis koymak ya da evde tedavi denemek önerilmez.' },
  ],
  kontrolListesi: [
    'Dinlenme köşesi hazır mı?',
    'Zehirli maddeler kaldırıldı mı?',
    'Veteriner hekim belirlendi mi?',
    'Yeni deneyimler yavaş mı tanıtılıyor?',
    'Mama ve öğün düzeni sabit mi?',
    'Yalnız kalma süresi kısa mı?',
  ],
  sss: [
    { soru: 'Yavru köpek bakımında ilk yapılacaklar nelerdir?', cevap: 'Eve gelmeden önce sessiz bir dinlenme yeri hazırlamak, zehirli ve kemirilmesi istenmeyen her şeyi kaldırmak ve bir veteriner hekim bulmak gerekiyor. RSPCA bunları eve gelmeden önceki hazırlık olarak sayıyor. Ardından aynı mamayla küçük ve düzenli öğünler, tuvalet eğitimi ve kontrollü sosyalleşme başlıyor.' },
    { soru: 'Aşıları bitmeden yavru köpek dışarı çıkarılabilir mi?', cevap: 'Kontrollü biçimde çıkarılabilir, ama ortamı veteriner hekimle konuşmak gerekiyor. RSPCA bu dönemde yavruyu kucakta dışarı çıkarmayı ve sağlıklı, tam aşılı köpek ve kedilerle tanıştırmayı öneriyor. Tam aşılandıktan sonra dışarıda sosyalleşme sürüyor.' },
    { soru: 'Yavru köpek sosyalleşmesi ne zaman başlar?', cevap: 'Mümkün olduğunca erken başlar. Howell ve arkadaşlarının derlemesine göre yaşa uygun sosyalleşme doğumdan birkaç gün sonra başlamalı ve yetişkinliğe kadar sürmeli. Eve gelen yavruda RSPCA 8-12 haftalık dönemi özellikle önemli buluyor.' },
    { soru: 'Yavru köpeğe ne kadar mama verilir?', cevap: 'Kesin miktarı veteriner hekimle belirlemek gerekiyor. RSPCA küçük ve düzenli öğünleri öneriyor; WSAVA ise büyük ırk büyüme çağındaki yavrularda serbest beslemek yerine porsiyonlu besleme ve yavaş kilo artışı öneriyor.' },
    { soru: 'Yavru köpek ne zaman yetişkin mamasına geçer?', cevap: 'RSPCA rehberinde yetişkin mamasına geçiş 6 aydan sonraki dönem için anılıyor; köpek büyüdükçe beslenme ihtiyaçları değişiyor. Geçişin zamanı ve yöntemi için veteriner hekime danışmak gerekiyor.' },
    { soru: 'Yavru köpek sınıfı gerekli mi?', cevap: 'Sınıfın yararına dair kanıt net değil, ama iyi bir sınıf güven kazandırabiliyor. RSPCA iyi yavru sınıflarının özgüveni artırdığını ve temel eğitimi öğrettiğini söylüyor. Howell ve arkadaşları ise kanıtın tutarlı olmadığını belirtiyor.' },
    { soru: 'Yavru köpek yalnız bırakılabilir mi?', cevap: 'Kısa süreler için yalnız bırakılarak başlanması öneriliyor. RSPCA, ayrılıkla ilgili davranış sorunlarını önlemek için yavrunun 8-12 haftalık dönemde kısa sürelerle yalnız kalmaya alıştırılmasını öneriyor. Belirgin sıkıntı görülürse veteriner hekime danışmak gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'RSPCA (Royal Society for the Prevention of Cruelty to Animals)',
      baslik: 'Caring For Your Puppy - 6 weeks to 12 months',
      adres: 'https://www.rspca.org.uk/adviceandwelfare/pets/dogs/health/puppycare',
    },
    {
      kurum: 'La Trobe University, School of Psychology and Public Health',
      baslik: 'Puppy parties and beyond: the role of early age socialization practices on adult dog behavior',
      yazarlar: 'Howell TJ, King T, Bennett PC',
      dergi: 'Veterinary Medicine (Auckland)',
      yil: 2015,
      kunye: '6:143-153',
      doi: '10.2147/VMRR.S62081',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/30101101/',
    },
    {
      kurum: 'University of California, Davis, School of Veterinary Medicine',
      baslik: 'Frequency of CPV infection in vaccinated puppies that attended puppy socialization classes',
      yazarlar: 'Stepita ME, Bain MJ, Kass PH',
      dergi: 'Journal of the American Animal Hospital Association',
      yil: 2013,
      kunye: '49(2):95-100',
      doi: '10.5326/JAAHA-MS-5825',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/23325595/',
    },
    {
      kurum: 'American Veterinary Medical Association (AVMA)',
      baslik: 'Puppy socialization practices of a sample of dog owners from across Canada and the United States',
      yazarlar: 'Cutler JH, Coe JB, Niel L',
      dergi: 'Journal of the American Veterinary Medical Association',
      yil: 2017,
      kunye: '251(12):1415-1423',
      doi: '10.2460/javma.251.12.1415',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/29190195/',
    },
    {
      kurum: 'World Small Animal Veterinary Association (WSAVA)',
      baslik: 'Frequently Asked Questions & Myths (Ocak 2018)',
      yil: 2018,
      adres: 'https://wsava.org/wp-content/uploads/2020/01/Frequently-Asked-Questions-and-Myths.pdf',
    },
  ],
};
