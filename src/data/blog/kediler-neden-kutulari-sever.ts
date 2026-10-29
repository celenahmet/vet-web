import type { BlogYazi } from './types';

export const kedilerNedenKutulariSever: BlogYazi = {
  slug: 'kediler-neden-kutulari-sever',
  baslik: 'Kediler Neden Kutuları Sever? Bilimin Cevabı',
  ozet: 'Kutu kediye saklanacak, her yanı kapalı güvenli bir yer verir. Barınak çalışmalarında saklanma kutusu olan kedilerin stresi daha hızlı azaldı.',
  kapakAlt:
    'Kediler neden kutuları sever konulu yazının kapak görseli; salonda karton bir kutunun içine sığmış, patisini kenara dayayıp dışarı bakan tekir bir kedi',
  kategori: 'Kedi',
  tarih: '2026-10-29',
  bloklar: [
    { kind: 'paragraf', metin: '**Kediler kutuları sever çünkü kutu, etrafı kapalı ve güvenli bir saklanma yeridir.** Hollanda\'daki barınaklarda yapılan iki çalışmada saklanma kutusu verilen kedilerin stres düzeyinin, kutusu olmayanlara göre daha hızlı düştüğü görüldü. Kedi için kutu bir oyuncaktan çok bir sığınaktır: arkası ve yanları korunur, önü görülür.' },
    { kind: 'paragraf', metin: 'Aşağıda kutu sevgisinin arkasındaki araştırmaları, kedilerin yere çizilmiş bir kareye bile oturduğunu gösteren deneyi, kutunun yeni ev, taşınma ve veteriner ziyareti gibi stresli anlarda nasıl kullanılabileceğini ve kutunun hangi durumda risk taşıdığını anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Kutu kediye ne veriyor?', 'Neden önemli?'], satirlar: [
      ['Etrafı kapalı alan', 'Arkadan ve yandan gelecek şeyleri dert etmez'],
      ['Saklanma imkânı', 'Stresli anlarda kendini yatıştırır'],
      ['Gözetleme noktası', 'Görünmeden etrafı izleyebilir'],
      ['Dar, sınırları belli alan', 'Kedi sınırları belli alanları seçiyor'],
      ['Kendi kokusu', 'Bir süre sonra kutu "onun yeri" olur'],
    ]},

    { kind: 'baslik', metin: 'Kutu bir saklanma yeridir ve saklanmak stresi azaltır' },
    { kind: 'paragraf', metin: 'Kediler bir tehditle karşılaştıklarında çoğu zaman kaçıp saklanmayı seçer. Saklanmak, kedinin stresle başa çıkma yollarından biridir. Kutu bu ihtiyacı en kolay karşılayan nesnedir: üç yanı ve çoğu zaman üstü kapalıdır, kedi yalnızca önünü izlemek zorunda kalır.' },
    { kind: 'paragraf', metin: 'Bu yüzden kutu sevgisi en çok kedinin kendini güvende hissetmediği anlarda belirginleşir. Yeni bir eve gelen, ev düzeni değişen ya da evde yabancı biri olan kedi kendine bir sığınak arar ve kutu, dolap içi ya da yatak altı bu ihtiyaca cevap verir.' },

    { kind: 'baslik', metin: 'Barınak çalışmaları: saklanma kutusu stresi daha hızlı düşürdü' },
    { kind: 'paragraf', metin: 'Utrecht Üniversitesi\'nden Claudia Vinke ve ekibi 2014\'te barınağa yeni gelen kedilere saklanma kutusu vermenin stresi azaltıp azaltmadığını inceledi. Ekibin 2019\'da PLOS ONE\'da yayımlanan ikinci çalışmasında, Hollanda\'daki bir barınağa yeni gelen 1-10 yaş arası 23 kedi rastgele iki gruba ayrıldı: 12 kediye saklanma kutusu verildi, 11 kediye verilmedi.' },
    { kind: 'paragraf', metin: 'Karantinanın ilk 12 gününde kedilerin stres düzeyi, beden dili ve davranışa dayanan Kedi Stres Puanı ile ölçüldü. Stres zamanla bütün kedilerde azaldı, ama kutusu olan kedilerde belirgin biçimde daha hızlı düştü ve kalıcı düşük düzeye, kutusu olmayan gruptan **yedi gün önce** ulaştı. Araştırmacılar saklanma imkânının barınaktaki kedilerde davranışsal stresi azalttığı sonucuna vardı.' },
    { kind: 'yanilgi', baslik: '"Saklanan kediyi dışarı çıkarmak alışmasını hızlandırır"', metin: 'Barınak çalışmaları tersini gösteriyor: saklanabilen kedilerin stresi daha hızlı azaldı. Saklanan bir kediyi zorla çıkarmak onu tehdit altında hissettirir; kendi zamanında çıkmasına izin vermek alışmayı hızlandırır.' },

    { kind: 'baslik', metin: 'Kediler yere çizilmiş bir kareye bile oturuyor' },
    { kind: 'paragraf', metin: 'Kedi sahiplerinin iyi bildiği bir şey var: kediler kutulara, çamaşır sepetlerine, hatta yere bantla yapılmış kare şekillere bile oturuyor. Hunter College\'dan (CUNY) Gabriella Smith ve ekibi 2021\'de bunu ilginç bir yanılsamayla sınadı. Kedi sahipleri evlerinde yere, gerçek bir kare ile yalnızca köşeleri verilip kenarları çizilmemiş "hayalî" bir kare yerleştirdi.' },
    { kind: 'paragraf', metin: 'Altı günlük denemeleri tamamlayan 30 kediden 9\'u en az bir şeklin içine dört ayağıyla en az üç saniye oturdu. Kediler hayalî kareyi gerçek kare kadar sık, kontrol şeklinden ise daha sık seçti. Araştırmacılar, kedilerin bu yanılsamada kenarları insanlar gibi algılıyor olabileceğini ve kenarı belli alanlara yöneldiğini düşünüyor. Ekip, örneğin küçük olduğunu ve çalışmanın kontrollü ortamda tekrarlanması gerektiğini de belirtiyor.' },
    { kind: 'tablo', basliklar: ['Çalışma', 'Kaç kedi', 'Ana bulgu'], satirlar: [
      ['Vinke ve ekibi, 2014', 'Barınak kedileri', 'Saklanma kutusu barınakta stresi azaltabilir'],
      ['van der Leij ve ekibi, 2019', '23 kedi (12 kutulu, 11 kutusuz)', 'Kutulu kediler düşük strese 7 gün önce ulaştı'],
      ['Smith ve ekibi, 2021', '30 kedi tamamladı, 9 seçim yaptı', 'Hayalî kare gerçek kare kadar sık seçildi'],
    ]},

    { kind: 'baslik', metin: 'Kutu aynı zamanda bir pusu ve gözetleme yeridir' },
    { kind: 'paragraf', metin: 'Kediler hem avcıdır hem de daha büyük hayvanlar için av olabilir. Bu ikili konum, görünmeden görmeyi değerli kılar. Kutunun içindeki kedi etrafını izleyebilir, ama kendisi kolay fark edilmez. Kutudan aniden fırlayıp ayağınıza ya da bir oyuncağa saldıran kedi, avcılık davranışını oyun olarak sürdürüyor demektir.' },
    { kind: 'paragraf', metin: 'Bu oyun içgüdüsü kutuyu iyi bir zenginleştirme aracına çevirir. İçine birkaç delik açılmış bir karton kutu, kedinin pençesini uzatıp oyuncağı yakalamaya çalışacağı bir oyun alanı olur. Ev kedilerinin gün içinde yeterince uyaran bulamaması akşam ve gece huzursuzluğunu artırabiliyor; bunu [[kedim-neden-gece-uyumuyor|kedim neden gece uyumuyor]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Stresli anlarda kutuyu bilinçli kullanmak mümkün' },
    { kind: 'paragraf', metin: 'Kutu sevgisi pratikte işe yarar. Kedinin kendini güvensiz hissettiği her durumda ona bir saklanma yeri sunmak, alışma sürecini kolaylaştırır.' },
    { kind: 'liste', maddeler: [
      'Eve yeni gelen kedinin odasına içine kendi kokulu örtüsü konmuş bir kutu yerleştirmek',
      'Taşınma günlerinde kediyi sessiz bir odada, saklanabileceği bir kutuyla tutmak',
      'Taşıma çantasını evde açık bırakıp içine yumuşak bir örtü koymak; çanta korkulan değil tanıdık bir yer olur',
      'Misafir geldiğinde kedinin çekilebileceği yüksek ya da kapalı bir köşe bırakmak',
      'Birden fazla kedili evde her kediye ayrı saklanma yeri sağlamak',
    ]},
    { kind: 'paragraf', metin: 'Yeni gelen bir kedinin ilk günlerini ve saklanmanın bu süreçteki yerini [[yeni-kedi-eve-alisma|eve yeni gelen kedi ne kadar sürede alışır]] yazımızda ayrıntılı olarak anlattık.' },
    { kind: 'yanilgi', baslik: '"Kutuya giren kedi sıkılmıştır ya da mutsuzdur"', metin: 'Kutuya girmek bir mutsuzluk işareti değil, normal ve sağlıklı bir davranıştır. Kedi kutuda dinlenir, izler, oynar. Endişe verici olan kutuda durmak değil, kedinin hiç çıkmaması, yemeyi bırakması ya da başka bir değişiklik göstermesidir.' },

    { kind: 'baslik', metin: 'Kutunun da bir güvenlik payı var' },
    { kind: 'paragraf', metin: 'Karton kutu çoğu zaman güvenli bir oyuncaktır, ama birkaç ayrıntıya dikkat etmek gerekiyor. Kutuların üzerindeki koli bantları, zımbalar ve plastik ambalajlar kedinin çiğneyip yutabileceği parçalardır. Kediyi kapağı kapanabilen bir kutuda ya da çalışan bir çamaşır makinesi, kurutma makinesi gibi kapalı bir alanda unutmamak için içini kontrol etme alışkanlığı önemlidir.' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Kutu sevgisi tuhaf bir huydur', 'Saklanma, stresle başa çıkmanın doğal yoludur'],
      ['Saklanan kedi zorla çıkarılmalı', 'Saklanabilen kedinin stresi daha hızlı azalıyor'],
      ['Kedi kutuyu yeniliği için sever', 'Kenarı belli kapalı alanlara yöneliyor'],
      ['Her kutu güvenlidir', 'Bant, zımba ve plastikler çıkarılmalı'],
    ]},

    { kind: 'uyari', metin: 'Kutuda ya da kapalı bir köşede saklanmak normaldir; ancak kedi günlerce saklanıp çıkmıyorsa, yemek yemiyor, kuma çıkmıyor ya da dokunulmak istemiyorsa durum alışma ya da tercihle açıklanmamalı. Bu belirtilerde kedinin veteriner hekime gösterilmesi gerekiyor.' },
  ],
  kontrolListesi: [
    'Kedinin bir saklanma yeri var mı?',
    'Kutudaki bant ve zımbalar alındı mı?',
    'Taşıma çantası evde açık mı?',
    'Her kediye ayrı köşe var mı?',
    'Kapalı makineler kontrol ediliyor mu?',
  ],
  sss: [
    { soru: 'Kediler neden kutuları sever?', cevap: 'Kutu kediye etrafı kapalı, güvenli bir saklanma yeri sunar; arkası ve yanları korunur, önünü izleyebilir. Barınak çalışmalarında saklanma kutusu verilen kedilerin stresi, kutusu olmayanlara göre daha hızlı azaldı. Kutu aynı zamanda oyun ve gözetleme alanıdır.' },
    { soru: 'Kediler neden kutuya sığmaya çalışır?', cevap: 'Kediler kenarları belli, dar ve kapalı alanlara yöneliyor. 2021 tarihli bir çalışmada kediler yere yalnızca köşeleri verilmiş hayalî bir kareye bile gerçek kare kadar sık oturdu. Dar alan kediye korunaklı hissettiriyor.' },
    { soru: 'Kedinin kutuda saklanması normal mi?', cevap: 'Evet. Saklanmak kedilerin stresle başa çıkma yollarından biridir ve barınak çalışmalarında saklanabilen kedilerin daha hızlı rahatladığı görüldü. Kedi günlerce hiç çıkmıyor, yemiyor ya da kuma gitmiyorsa ise veteriner hekime göstermek gerekiyor.' },
    { soru: 'Saklanma kutusu yeni kediye yardımcı olur mu?', cevap: 'Olabilir. Hollanda\'daki bir barınakta saklanma kutusu verilen kediler, kutusu olmayanlardan yedi gün önce düşük stres düzeyine ulaştı. Yeni gelen kedinin odasına kendi kokulu örtüsünün konduğu bir kutu yerleştirmek alışma sürecini kolaylaştırabilir.' },
    { soru: 'Kediler kare şekle neden oturur?', cevap: 'Hunter College araştırmacılarının 2021 tarihli çalışmasında kediler yere çizilmiş şekillere ve köşeleri verilmiş hayalî bir kareye oturdu. Araştırmacılar kedilerin kenarı belli alanlara yöneldiğini ve bu yanılsamayı insanlar gibi algılayabildiğini düşünüyor.' },
    { soru: 'Karton kutu kediler için güvenli mi?', cevap: 'Çoğu zaman güvenlidir, ama koli bandı, zımba ve plastik ambalajların çıkarılması gerekiyor; kedi bunları çiğneyip yutabilir. Kapağı kapanabilen kutularda ve çamaşır ya da kurutma makinesi gibi kapalı alanlarda kedinin unutulmaması için içini kontrol etmek önemlidir.' },
  ],
  kaynaklar: [
    {
      kurum: 'Utrecht University, Faculty of Veterinary Medicine',
      yazarlar: 'van der Leij WJR, Selman LDAM, Vernooij JCM, Vinke CM',
      baslik: 'The effect of a hiding box on stress levels and body weight in Dutch shelter cats; a randomized controlled trial',
      dergi: 'PLOS ONE',
      yil: 2019,
      kunye: '14(10):e0223492',
      doi: '10.1371/journal.pone.0223492',
      adres: 'https://doi.org/10.1371/journal.pone.0223492',
    },
    {
      kurum: 'Utrecht University, Faculty of Veterinary Medicine',
      yazarlar: 'Vinke CM, Godijn LM, van der Leij WJR',
      baslik: 'Will a hiding box provide stress reduction for shelter cats?',
      dergi: 'Applied Animal Behaviour Science',
      yil: 2014,
      kunye: '160:86-93',
      doi: '10.1016/j.applanim.2014.09.002',
      adres: 'https://doi.org/10.1016/j.applanim.2014.09.002',
    },
    {
      kurum: 'Hunter College, City University of New York',
      yazarlar: 'Smith GE, Chouinard PA, Byosiere SE',
      baslik: 'If I fits I sits: A citizen science investigation into illusory contour susceptibility in domestic cats (Felis silvestris catus)',
      dergi: 'Applied Animal Behaviour Science',
      yil: 2021,
      kunye: '240:105338',
      doi: '10.1016/j.applanim.2021.105338',
      adres: 'https://doi.org/10.1016/j.applanim.2021.105338',
    },
  ],
};
