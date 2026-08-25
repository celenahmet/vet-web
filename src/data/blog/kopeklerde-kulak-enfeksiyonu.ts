import type { BlogYazi } from './types';

/**
 * KOPEK kategorisi. Sayisal ve mikrobiyolojik iddialarin dayanagi Tesin ve ark.
 * 2023 (Polish Journal of Veterinary Sciences): 60 kopekten alinan orneklerin
 * dagilimi ve antibiyotik duyarliligi. Ozette gecen sayilar disinda rakam
 * verilmiyor.
 */
export const kopeklerdeKulakEnfeksiyonu: BlogYazi = {
  slug: 'kopeklerde-kulak-enfeksiyonu',
  baslik: 'Köpeklerde Kulak Enfeksiyonu Nasıl Anlaşılır?',
  ozet: 'Kulak kaşıma her zaman enfeksiyon değil, enfeksiyon da her zaman aynı şey değil. Bakteri mi maya mı sorusunun cevabı tedaviyi baştan belirliyor.',
  kategori: 'Köpek',
  tarih: '2026-08-25',
  bloklar: [
    { kind: 'paragraf', metin: 'Köpeğinin kulağını kaşıdığını gören çoğu kişi aynı şeyi düşünüyor: kulak enfeksiyonu. Bazen doğru, ama **kulak enfeksiyonu tek bir hastalık değil.** Kulakta bakteri de üreyebiliyor, maya da; ikisi birlikte de olabiliyor ve tedavileri aynı değil.' },
    { kind: 'paragraf', metin: 'Bu yazı iki soruyu ayırıyor: kulakta bir sorun olduğunu nasıl anlarsınız, ve o sorunun ne olduğunu kim nasıl belirler.' },

    { kind: 'baslik', metin: 'Belirtiler kulakta başlamayabilir' },
    { kind: 'paragraf', metin: 'En görünür belirti kaşıma ama tek belirti o değil. Köpekler rahatsızlığı çoğu zaman kulağa dokunarak değil, **başını sallayarak ya da bir tarafa eğerek** gösteriyor. Bazıları kulağını hiç kurcalamıyor, sadece dokunulmasına izin vermiyor.' },
    { kind: 'liste', maddeler: [
      'Başını sürekli sallamak ya da bir tarafa eğik tutmak',
      'Kulağı pati ya da zemine sürtmek',
      'Kulaktan koku gelmesi',
      'Kulak kepçesinin içinde kızarıklık, ısı artışı',
      'Koyu renkli ya da akışkan bir akıntı',
      'Kulağa dokunulunca çekilme, sızlanma',
    ] },
    { kind: 'paragraf', metin: 'Bu maddelerden birkaçı birlikte görülüyorsa mesele kaşıntının ötesine geçmiş demektir. Tek başına ara sıra kaşıma her köpekte olur; **süreklilik ve koku** ayırt edici olan.' },

    { kind: 'yanilgi', baslik: '"Kulak kirlenmiş, temizlerim geçer" yanılgısı', metin: 'Kulaktaki koyu birikinti çoğu zaman kir değil, bir sürecin sonucu. Temizlemek görüntüyü düzeltiyor ama sebebi ortadan kaldırmıyor; üstelik iltihaplı bir kulağa uygun olmayan solüsyonla girmek durumu ağırlaştırabiliyor. Kulak zarının sağlam olup olmadığı bilinmeden içine sıvı verilmez.' },

    { kind: 'baslik', metin: 'Kulakta ne ürediği tedaviyi belirliyor' },
    { kind: 'paragraf', metin: 'Sırbistan’da kulak iltihabı belirtisi gösteren 60 köpekle yapılan bir çalışmada, alınan örneklerin 53’ü etken açısından pozitif çıkmış. Bunların 40’ında bakteri bulunmuş; en sık görülen *Staphylococcus pseudintermedius*, ardından *Pseudomonas aeruginosa* ve *Proteus* türleri gelmiş. Aynı çalışmada tek maya etkeni olan *Malassezia pachydermatis* ise **36 örnekte** saptanmış.' },
    { kind: 'paragraf', metin: 'Buradaki asıl bilgi sıralama değil, şu: aynı belirtinin arkasında bakteri de olabiliyor maya da, ve bir örnekte ikisi birden bulunabiliyor. Dışarıdan bakıp hangisi olduğunu söylemek mümkün değil.' },

    { kind: 'tablo', basliklar: ['Ne aranıyor', 'Neyle bakılıyor', 'Ne değiştiriyor'], satirlar: [
      ['Maya var mı', 'Mikroskop', 'Antibiyotik değil antifungal gerekebilir'],
      ['Bakteri var mı', 'Mikroskop, kültür', 'Etkene göre ilaç seçimi'],
      ['Hangi antibiyotik işe yarıyor', 'Duyarlılık testi', 'Yanlış ilaçla süre kaybını önlüyor'],
      ['Kulak zarı sağlam mı', 'Otoskop', 'Kulağa ne verilebileceğini belirliyor'],
    ] },

    { kind: 'baslik', metin: 'Artan antibiyotik direnci kararı zorlaştırıyor' },
    { kind: 'paragraf', metin: 'Aynı çalışma antibiyotik duyarlılığına da bakmış. Bulgular arasında dikkat çeken şu: penisilin ve amoksisiline karşı yüksek direnç hem gram pozitif hem gram negatif bakterilerde yaygın bir bulgu olmuş. Araştırmacılar sonucu açıkça bağlıyor: yalnız kulak iltihabında değil, mümkün olan her hastalıkta **laboratuvar testiyle etken ve duyarlılık belirlenmeli**; aksi hâlde antibiyotik direnci artıyor.' },
    { kind: 'paragraf', metin: 'Bu, evde bir sonuç doğuruyor: elde kalan eski antibiyotiği kullanmak yalnızca işe yaramama riski taşımıyor, direnç sorununu büyütüyor. Geçen seferki ilaç bu seferki etkene karşı etkili olmayabilir.' },

    { kind: 'yanilgi', baslik: '"Geçen sefer bu damla iyi gelmişti" yanılgısı', metin: 'Kulak iltihabının etkeni her seferinde aynı olmuyor. Geçen sefer maya varsa ve bu sefer bakteri ürediyse, aynı ürün hiçbir şey yapmıyor. Üstelik yarım kalmış kutular çoğu zaman eksik doz demek ve eksik doz, direnç için en elverişli ortam.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Kulağa uygulanacak her ürün, kulak zarının durumu görüldükten sonra veteriner hekim tarafından seçilir. Reçetesiz damla ve elde kalan ilaç kullanılmaz.' },

    { kind: 'baslik', metin: 'Tekrarlıyorsa sebep kulakta olmayabilir' },
    { kind: 'paragraf', metin: 'Kulak iltihabı düzelip düzelip tekrarlıyorsa, arkasında sürekli bir zemin olabiliyor. Alerji, kulak yapısı, sudan sonra kalan nem, kulak kanalındaki tüy yoğunluğu ve dış parazitler bu zemini hazırlayan başlıklar arasında. Dış parazitler için ayrıntı [[kedilerde-ic-ve-dis-parazit|iç ve dış parazit]] yazısında; oradaki mantık köpekler için de benzer işliyor.' },
    { kind: 'paragraf', metin: 'Tekrarlayan bir tabloda tedaviyi her seferinde baştan denemek yerine, zemini bulmak gerekiyor. Bu da kayıt tutmayı gerektiriyor: ne zaman başladı, ne verildi, ne kadar sürdü, ne zaman tekrarladı.' },
    { kind: 'paragraf', metin: 'Uygulama tarafında bu kaydı tutmak için Veterito’yu kullanabilirsiniz; hatırlamak yerine bakmak, tekrarlayan bir tabloda fark yaratıyor.' },

    { kind: 'baslik', metin: 'Kulak yapısı bazı ırklarda riski artırıyor' },
    { kind: 'paragraf', metin: 'Kulak kanalının biçimi ve havalanması, sorunun ne sıklıkta tekrarladığında rol oynuyor. Bu artık tahmin değil, ölçülmüş bir şey: Royal Veterinary College’ın VetCompass programı kapsamında Birleşik Krallık’ta birinci basamak veteriner bakımı alan **22.333 köpeklik** rastgele bir örneklem incelenmiş.' },
    { kind: 'paragraf', metin: 'Çalışmada kulak iltihabının bir yıllık görülme sıklığı **%7,30** çıkmış. Yani her yüz köpekten yedisinden fazlası tek bir yıl içinde bu tanıyı almış. En yüksek iki risk etkeni ise **ırk ve kulak duruşu** olarak bulunmuş.' },
    { kind: 'paragraf', metin: 'Dik kulaklı ırklarla karşılaştırıldığında **sarkık kulaklı ırklarda 1,76 kat**, V biçiminde düşük kulaklı ırklarda **1,84 kat** daha yüksek olasılık bildirilmiş. Irk düzeyinde ise Basset Hound 5,87 kat, Chinese Shar Pei 3,44 kat, Labradoodle 2,95 kat, Beagle 2,54 kat ve Golden Retriever 2,23 kat daha yüksek olasılık göstermiş; Chihuahua, Border Collie, Yorkshire Terrier ve Jack Russell Terrier ise daha düşük olasılık göstermiş.' },
    { kind: 'paragraf', metin: 'Kanalda tüy yoğunluğu fazla olan köpeklerde hava akışının azalması da aynı yönde işliyor.' },
    { kind: 'paragraf', metin: 'Bu bir kader değil, bir bakım planı meselesi. Çalışmanın kendi sonucu da bu yönde: yatkın ırkların bilinmesi, hekimlerin koruyucu bakım önerilerini **temkinli ve az zarar veren** bir çerçevede vermesini kolaylaştırıyor. Riskli yapıdaki bir köpekte kulak, sorun çıkmasını beklemeden düzenli aralıklarla kontrol ediliyor; kontrol etmek temizlemek anlamına gelmiyor, bakmak anlamına geliyor.' },
    { kind: 'liste', maddeler: [
      'Sarkık kulakta kanal daha kapalı, nem daha uzun kalıyor',
      'Kanalda yoğun tüy hava akışını azaltıyor',
      'Yüzen köpekte sudan sonra kalan nem risk yaratıyor',
      'Sık banyoda kulağa su kaçması sıklıkla atlanıyor',
      'Alerjisi olan köpekte kulak ilk belirti veren yer olabiliyor',
    ] },

    { kind: 'baslik', metin: 'Tedavi yarıda bırakılınca ne oluyor' },
    { kind: 'paragraf', metin: 'Kulak iltihabında belirtiler tedavinin ilk günlerinde hızla azalıyor. Bu, tedavinin bittiği anlamına gelmiyor. Rahatlama görüldüğü anda ilacı kesmek, en sık yapılan ve en çok tekrara yol açan hata.' },
    { kind: 'paragraf', metin: 'Yarım kalan tedavi iki sonuç doğuruyor. Birincisi, azalmış ama tamamen ortadan kalkmamış etken kısa sürede yeniden çoğalıyor. İkincisi, eksik doza maruz kalan bakteri direnç geliştirmek için en elverişli ortamı buluyor. Yukarıda anlatılan direnç tablosunun evdeki karşılığı tam olarak bu.' },
    { kind: 'paragraf', metin: 'Bu yüzden hekim bir kontrol randevusu veriyor. O randevu, "iyi görünüyor mu" sorusundan fazlasını yapıyor: kulak yeniden bakılıyor ve etkenin gerçekten temizlenip temizlenmediği değerlendiriliyor.' },

    { kind: 'baslik', metin: 'Ne zaman beklemeden gidilir' },
    { kind: 'paragraf', metin: 'Bazı bulgular “bir iki gün bakalım” demeye uygun değil:' },
    { kind: 'liste', maddeler: [
      'Denge bozukluğu, dönme, göz kaymaları',
      'Kulaktan kanlı ya da kötü kokulu akıntı',
      'Kulak kepçesinde ani şişlik',
      'Belirgin ağrı: dokundurmama, iştahsızlık',
      'Belirtilerin iki günden kısa sürede hızla artması',
    ] },
    { kind: 'paragraf', metin: 'Bu bulgular iç kulağın ya da kulak zarının işin içine girdiğini düşündürüyor ve bekleme kararı burada bir seçenek değil.' },
  ],
  kontrolListesi: [
    'Baş sallama var mı, not edin',
    'Kulaktan koku geliyor mu, bakın',
    'Temizlemeden önce hekime gösterin',
    'Eski damlayı kullanmayın',
    'Tarih ve ürünü kaydedin',
    'Denge bozukluğunda aynı gün gidin',
  ],
  sss: [
    { soru: 'Kulak kaşıyan her köpekte enfeksiyon var mı?', cevap: 'Hayır, ara sıra kaşıma her köpekte görülüyor ve tek başına bir anlam taşımıyor. Ayırt edici olan kaşımanın sürekli hâle gelmesi, kulaktan koku gelmesi ve akıntının eşlik etmesi. Bu üçü birlikte görülüyorsa mesele basit kaşıntının ötesine geçmiş demektir.' },
    { soru: 'Kulağı evde temizleyebilir miyim?', cevap: 'Sağlıklı bir kulakta hekimin önerdiği ürünle rutin bakım yapılabiliyor. Ancak iltihap şüphesi varsa önce hekim görmeli, çünkü kulak zarının sağlam olup olmadığı bilinmeden kulağa sıvı verilmiyor. Zarı hasarlı bir kulağa uygulanan solüsyon iç kulağa ulaşabiliyor.' },
    { soru: 'Neden kültür isteniyor?', cevap: 'Aynı belirtinin arkasında bakteri de maya da olabiliyor, hatta ikisi birden bulunabiliyor. Dışarıdan bakarak hangisi olduğunu söylemek mümkün değil. Hangi etkenin ürediği ve hangi ilacın o etkene karşı etkili olduğu ancak laboratuvar testiyle belirleniyor.' },
    { soru: 'Geçen seferki ilacı kullanabilir miyim?', cevap: 'Kullanılmıyor. Kulak iltihabının etkeni her seferinde aynı olmuyor; geçen sefer maya varsa ve bu sefer bakteri ürediyse aynı ürün hiçbir şey yapmıyor. Ayrıca yarım kalmış kutular eksik doz demek ve eksik doz, direnç gelişimi için en elverişli ortamı hazırlıyor.' },
    { soru: 'Sudan sonra kulak neden risk oluyor?', cevap: 'Kulak kanalında kalan nem, etkenlerin üremesi için uygun bir ortam hazırlıyor. Bu yüzden yüzme ve banyo sonrası kulağın kuruması önemli. Sarkık kulaklı ırklarda kanal daha kapalı olduğu için nem daha uzun süre tutunuyor ve risk artıyor.' },
    { soru: 'Tekrarlıyorsa ne yapılmalı?', cevap: 'Her seferinde aynı tedaviyi denemek yerine altta yatan zemin araştırılıyor: alerji, kulak yapısı, sudan kalan nem, kanaldaki tüy yoğunluğu ve dış parazitler. Bu araştırma için tarih ve ürün kaydı gerekiyor; hafızaya dayanan anlatım güvenilir olmuyor.' },
    { soru: 'Bazı ırklarda daha mı sık görülüyor?', cevap: 'Evet. Birleşik Krallık’ta 22.333 köpeklik bir örneklemde ırk ve kulak duruşu en yüksek iki risk etkeni çıkmış. Sarkık kulaklı ırklarda dik kulaklılara göre 1,76 kat, V biçiminde düşük kulaklılarda 1,84 kat daha yüksek olasılık bildirilmiş. Basset Hound, Shar Pei ve Labradoodle en yatkın ırklar arasında.' },
    { soru: 'Belirtiler geçince ilacı kesebilir miyim?', cevap: 'Kesilmiyor. Belirtiler tedavinin ilk günlerinde hızla azalıyor ama etken tamamen temizlenmemiş olabiliyor. Erken kesilen tedavide azalmış etken kısa sürede yeniden çoğalıyor; bu, tekrarlayan kulak iltihaplarının en sık sebeplerinden biri.' },
  ],
  kaynaklar: [
    {
      kurum: 'Royal Veterinary College — VetCompass Programme',
      yazarlar: 'O\'Neill DG, Volk AV, Soares T, Church DB, Brodbelt DC, Pegram C',
      baslik: 'Frequency and predisposing factors for canine otitis externa in the UK — a primary veterinary care epidemiological view',
      dergi: 'Canine Medicine and Genetics',
      yil: 2021,
      kunye: '8(1):7',
      doi: '10.1186/s40575-021-00106-1',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34488894/',
    },
    {
      kurum: 'University of Novi Sad, Faculty of Agriculture — Department of Veterinary Medicine',
      yazarlar: 'Tesin N, Stojanovic D, Stancic I, Kladar N, Ružić Z, Spasojevic J, Tomanic D, Kovacevic Z',
      baslik: 'Prevalence of the microbiological causes of canine otitis externa and the antibiotic susceptibility of the isolated bacterial strains',
      dergi: 'Polish Journal of Veterinary Sciences',
      yil: 2023,
      kunye: '26(3):449-459',
      doi: '10.24425/pjvs.2023.145052',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/37727503/',
    },
  ],
};
