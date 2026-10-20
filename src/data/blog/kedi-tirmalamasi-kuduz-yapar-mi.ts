import type { BlogYazi } from './types';

export const kediTirmalamasiKuduzYaparMi: BlogYazi = {
  slug: 'kedi-tirmalamasi-kuduz-yapar-mi',
  baslik: 'Kedi Tırmalaması ve Köpek Isırması Kuduz Yapar mı? Ne Yapılmalı?',
  ozet: 'Kedi ya da köpek ısırması ve deriyi zedeleyen tırmalama kuduz riski taşır. Yara hemen sabunlu suyla yıkanır, en kısa sürede sağlık kuruluşuna gidilir. Sağlık Bakanlığı rehberine göre adımlar.',
  kapakAlt:
    'Kedi tırmalaması ve kuduz konulu yazının kapak görseli; oyun sırasında patisiyle bir elin parmağına uzanan yavru kedi',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-22',
  bloklar: [
    { kind: 'paragraf', metin: '**Evet, kedi ya da köpek ısırması ve tırmalaması kuduz bulaştırabilir.** Sağlık Bakanlığı\'na göre kuduz; hayvanın ısırması ya da tırmalaması, salyasının sıyrık ya da çatlak deriye veya göze, ağza, buruna değmesiyle bulaşıyor. Belirtiler başladıktan sonra tedavisi yok ve ölümle sonuçlanıyor; ama riskli temastan sonra zamanında yapılan aşılamayla **önlenebiliyor.**' },
    { kind: 'paragraf', metin: 'Bu yüzden ısırık ya da deriyi zedeleyen bir tırmalamadan sonra yapılacak iki şey var: **yarayı hemen bol su ve sabunla yıkamak** ve **en kısa sürede bir sağlık kuruluşuna başvurmak.** Aşı gerekip gerekmediğine sağlık kuruluşu karar veriyor. Aşağıda Sağlık Bakanlığı\'nın kuduz profilaksi rehberine göre adımları anlatıyoruz.' },

    { kind: 'baslik', metin: 'Kedi tırmalarsa ya da köpek ısırırsa ne yapılır?' },
    { kind: 'liste', maddeler: [
      '**Yarayı yıkayın:** Yara ya da ısırık bölgesini vakit kaybetmeden bol su ve sabunla iyice yıkayın. Sağlık Bakanlığı yıkamanın en az 15 dakika sürmesini öneriyor.',
      '**Antiseptik uygulayın:** Yıkama bittikten sonra alkol ya da tentürdiyot gibi iyotlu bir antiseptik sürün.',
      '**Göz, ağız ya da burun temas ettiyse:** Bol suyla yıkayın.',
      '**Sağlık kuruluşuna gidin:** En kısa sürede başvurun. Temasın üzerinden günler geçmiş olsa bile gidin; rehber, kuduzun kuluçka süresi çok değişken olduğu için aradan geçen süreye bakılmadan değerlendirme yapılmasını istiyor.',
      '**Hayvanı not edin:** Hayvanın sahibi, aşı durumu ve nerede olduğu bilgisi, hekimin kararını doğrudan etkiliyor.',
    ]},
    { kind: 'yanilgi', baslik: '"Ev kedisi tırmaladı, kuduz olmaz"', metin: 'Bunu hayvanın kendisi değil aşı ve gözlem durumu belirliyor. Rehber, temas eden evcil hayvanın son bir yılda kuduz aşısı olup olmadığını ve 10 gün gözlem altında tutulabilip tutulamayacağını soruyor. Deriyi zedeleyen her temasta kararı sağlık kuruluşuna bırakın.' },

    { kind: 'baslik', metin: 'Kuduz riski hangi temaslarda var?' },
    { kind: 'paragraf', metin: 'Sağlık Bakanlığı\'nın profilaksi algoritması temasları şöyle sınıflandırıyor:' },
    { kind: 'tablo', basliklar: ['Kategori', 'Temas türü'], satirlar: [
      ['Kategori I', 'Hayvana dokunmak ya da beslemek, sağlam derinin yalanması'],
      ['Kategori II', 'Çıplak derinin hafifçe sıyrılması, kanama olmadan küçük tırmalama ya da zedeleme'],
      ['Kategori III', 'Deriyi zedeleyen ısırma ve tırmalamalar, salyanın açık yara ya da mukozaya teması, baş, boyun, parmak uçları gibi bölgelerdeki yaralanmalar'],
      ['Kategori IV', 'Kuduza yakalanma ihtimali olan yabani hayvanlarla riskli temas'],
    ]},
    { kind: 'paragraf', metin: 'Rehbere göre **sağlam derinin yalanması, hayvana dokunmak ya da onu beslemek** aşı gerektirmiyor. Kategori II ve üzerindeki temaslarda aşı ve gerekiyorsa immünglobulin kararını hekim; hayvanın aşı durumu ve gözlenip gözlenemeyeceğine bakarak veriyor.' },

    { kind: 'baslik', metin: '10 günlük gözlem nedir?' },
    { kind: 'paragraf', metin: 'Sağlık Bakanlığı, temasa yol açan **kedi ve köpeğin 10 gün gözlem altında tutulmasını** öneriyor; kedi ve köpek dışındaki hayvanlarda gözlem önerilmiyor. Rehberdeki akışa göre hayvan 10 günün sonunda sağlıklıysa başlanmış aşılama durdurulabiliyor. Hayvan bu sürede hastalık belirtisi gösterir, ölür, kaçar ya da kaybolursa aşılama sürdürülüyor. Isıran hayvan sizinse ya da sahibini biliyorsanız, bu 10 gün boyunca hayvanın izlenebilmesi bu yüzden önemli.' },

    { kind: 'baslik', metin: 'Kuduz aşısı kaç doz yapılır?' },
    { kind: 'paragraf', metin: 'Rehberde temas sonrası iki aşı şeması yer alıyor: **0., 3., 7. günlerde birer doz ve 14 ile 28. günler arasında bir doz** (toplam 4 doz) ya da **0. gün iki doz, 7. ve 21. günlerde birer doz** (2-1-1 şeması). Aşı çocuk ve gebe dahil herkese yapılabiliyor. Aşılama sürerken yeni bir riskli temas olursa şema aynı şekilde sürdürülüyor. Hangi şemanın uygulanacağına ve immünglobulin gerekip gerekmediğine hekim karar veriyor; aşıları gününde yaptırmak önemli.' },

    { kind: 'baslik', metin: 'Hangi hayvanlar kuduz bulaştırmaz?' },
    { kind: 'paragraf', metin: 'Sağlık Bakanlığı\'na göre bugünkü verilerle fare, sıçan, sincap, hamster, kobay, gerbil ve tavşan ısırıklarında insana kuduz geçişi gösterilmemiş; sürüngen ve kümes hayvanı ısırıkları da aşı gerektirmiyor. Kedi ve köpeğin yanında keçi, at, eşek, inek gibi evcil hayvanlar ile kurt, tilki, çakal, ayı, sansar gibi yabani hayvanlar ise kuduza yakalanabiliyor.' },

    { kind: 'baslik', metin: 'Kendi kedinizi ve köpeğinizi korumak' },
    { kind: 'paragraf', metin: 'İnsanlara bulaşmanın önündeki en önemli engel evcil hayvanların aşılı olması. Kuduz aşısı Türkiye\'de üç aydan büyük kedi ve köpekler için yılda bir **yasal zorunluluk;** takvimi [[kedilere-kuduz-asisi|kedilere kuduz aşısı]] yazımızda anlattık. Hayvanınız birini ısırdıysa aşı kaydını gösterebilmek için pasaportunu hazır tutun.' },
    { kind: 'uyari', metin: 'Davranışı aniden değişen, saldırganlaşan, salya akıtan ya da yutkunmakta zorlanan bir hayvana yaklaşmayın; il veya ilçe tarım ve orman müdürlüğüne, belediyeye ya da muhtarlığa haber verin. Bu yazı genel bilgilendirmedir; ısırık ya da tırmalamadan sonra karar sağlık kuruluşunundur.' },
  ],
  sss: [
    { soru: 'Kedi tırmalaması kuduz yapar mı?', cevap: 'Deriyi zedeleyen tırmalama kuduz riski taşıyabilir; yarayı yıkayıp sağlık kuruluşuna başvurun.' },
    { soru: 'Köpek ısırmasına ne yapılır?', cevap: 'Yara en az 15 dakika bol su ve sabunla yıkanır, antiseptik sürülür ve en kısa sürede sağlık kuruluşuna gidilir.' },
    { soru: 'Kedi tırmalaması kuduz aşısı gerektirir mi?', cevap: 'Temasın türüne ve hayvanın aşı ve gözlem durumuna göre hekim karar verir.' },
    { soru: 'Kuduz aşısı kaç doz yapılır?', cevap: 'Rehbere göre 0., 3., 7. ve 14-28. günlerde 4 doz ya da 2-1-1 şeması uygulanır.' },
    { soru: 'Kedinin yalaması kuduz yapar mı?', cevap: 'Sağlam derinin yalanması aşı gerektirmiyor; açık yara ya da mukoza teması ise riskli.' },
    { soru: 'Isıran kedi ya da köpek ne kadar gözlenir?', cevap: 'Sağlık Bakanlığı kedi ve köpek için 10 günlük gözlem öneriyor.' },
    { soru: 'Hamster ya da tavşan ısırması kuduz yapar mı?', cevap: 'Bakanlığa göre bugünkü verilerle bu hayvanların ısırığında insana kuduz geçişi gösterilmemiş.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Sağlık Bakanlığı Halk Sağlığı Genel Müdürlüğü',
      baslik: 'Kuduz (sık sorulan sorular)',
      adres: 'https://hsgm.saglik.gov.tr/depo/birimler/zoonotik-ve-vektorel-hastaliklar-db/Sikca_Sorulan_Sorular/Kuduz.pdf',
    },
    {
      kurum: 'T.C. Sağlık Bakanlığı Halk Sağlığı Genel Müdürlüğü',
      baslik: 'Kuduz Profilaksi Algoritması (2019)',
      adres: 'https://hsgm.saglik.gov.tr/depo/birimler/zoonotik-ve-vektorel-hastaliklar-db/Dokumanlar/Afisler-Brosurler/Kuduz_Profilaksi_Algoritmasi_Basim_logolu_20.03.2019.pdf',
    },
    {
      kurum: 'T.C. Sağlık Bakanlığı Halk Sağlığı Genel Müdürlüğü',
      baslik: 'Dünya Kuduz Günü',
      adres: 'https://hsgm.saglik.gov.tr/tr/zoonotikvektorel-haberler/28-eyl%C3%BCl-d%C3%BCnya-kuduz-g%C3%BCn%C3%BC.html',
    },
  ],
};
