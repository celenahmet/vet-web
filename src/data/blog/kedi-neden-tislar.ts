import type { BlogYazi } from './types';

export const kediNedenTislar: BlogYazi = {
  slug: 'kedi-neden-tislar',
  baslik: 'Kedi Neden Tıslar? Tıslamanın Anlamı ve Nedenleri',
  ozet: 'Kedi çoğunlukla korktuğu ya da tehdit hissettiği için tıslar; ağrı da tıslatabilir. Beden dili işaretlerini ve veterinere ne zaman başvurulacağını anlatıyoruz.',
  kapakAlt:
    'Taşıma kafesinin içinde tıslayan tekir kedi',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kedi çoğunlukla korktuğu, tehdit hissettiği ya da canı yandığı için tıslar.** Tıslama, kedinin "yaklaşma" demesinin en net yollarından biridir. Cornell Üniversitesi Veterinerlik Fakültesi, korku kaynaklı saldırganlıkta kedinin kulaklarını başına yatırıp tıslayabildiğini, dişlerini gösterebildiğini belirtiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda tıslamanın hangi ses grubuna girdiğini, tıslamadan önce hangi beden dili işaretlerinin görüldüğünü, en sık nedenleri ve tıslamanın hangi durumlarda veteriner hekime danışılması gereken bir değişiklik olabileceğini anlatıyoruz. Bu yazı bir teşhis aracı değildir; kedinin neden tıslıyor olduğuna karar vermek veteriner hekimin işidir.' },

    { kind: 'tablo', basliklar: ['Tıslamaya eşlik eden işaret', 'Kaynaklarda geçen olası anlamı'], satirlar: [
      ['Kulaklar başa yapışık, gözbebekleri geniş', 'Korku'],
      ['Kuyruk bacak arasına kıstırılmış, beden yere yakın', 'Kaygı ya da korku'],
      ['Tüyler kalkmış, sırt kamburlaşmış', 'Saldırganlık ya da savunma'],
      ['Dokunulan ya da oynatılan yerde tıslama', 'Ağrı kaynaklı tepki olabilir'],
      ['Evdeki kedinin yeni gelene tıslaması', 'Bölge savunması'],
    ]},

    { kind: 'baslik', metin: 'Tıslama ağız açık çıkarılan düşmanca bir sestir' },
    { kind: 'paragraf', metin: 'International Cat Care kedi seslerini üç grupta topluyor. Mırlama ve cıvıltı gibi ağız kapalı çıkan "mırıldanma" sesleri selam ve onay içindir; miyavlama sesleri çoğunlukla insanlara yöneliktir. Tıslama ise hırlama, çığlık ve inleme ile birlikte, ağız açık çıkarılan "düşmanca sesler" grubunda yer alıyor.' },
    { kind: 'paragraf', metin: 'Kurum bu seslerin saldırı ya da savunma amacıyla çıkarılabildiğini ve diğer kedilere ya da başka hayvanlara yöneltilebildiğini belirtiyor. Yani tıslama her zaman saldırı niyeti taşımaz; çoğu zaman kedinin "rahatsızım, yaklaşma" mesajıdır. Miyavlamayı ayrı ele aldığımız [[kediler-neden-cok-miyavlar|kediler neden çok miyavlar]] yazısı, kedinin sesleri arasındaki farkı anlamak için tamamlayıcıdır.' },

    { kind: 'baslik', metin: 'Tıslamadan önce beden dili uyarır' },
    { kind: 'paragraf', metin: 'International Cat Care\'e göre gözbebekleri geniş ve kulakları başına yapışık bir kedi çoğunlukla korkmuştur; kuyruğunu bacaklarının arasına kıstırması kaygı ya da korkuyu düşündürür. Korkmuş ya da gergin bir kedi bıyıklarını yüzüne yatırıp birbirine yaklaştırabilir.' },
    { kind: 'paragraf', metin: 'Cornell, saldırganlık işaretlerini geniş gözbebekleri, geriye yatmış kulaklar, tüyleri kalkmış dik kuyruk ve kamburlaşmış sırt olarak sıralıyor. Korku işaretlerinde ise kulaklar yatık ve dışa dönük, bıyıklar yüze yapışık, kuyruk vücuda sarılı ya da kıstırılmış oluyor. Kurumun tarifiyle rahat bir kedi tıslamıyor, gözbebekleri normal boyutta, kulakları dik ve kuyruğu normal duruşunda.' },
    { kind: 'paragraf', metin: 'Bu işaretlerin çoğu tıslamadan önce görülür. Beden dilini erken fark etmek, kediyi tıslamaya kadar zorlamamak için en etkili yoldur.' },

    { kind: 'baslik', metin: 'En sık neden korkudur' },
    { kind: 'paragraf', metin: 'Cornell\'e göre korku kaynaklı saldırganlık, kedi yabancı bir kişi, hayvan ya da sesle karşılaştığında veya hoşnutsuz bir olayla ilişkilendirdiği bir durumla, örneğin veterinere yolculukla yüzleştiğinde görülüyor. Kedi bu tür bir durumda kulaklarını yatırabilir, tıslayabilir, dişlerini gösterebilir ya da kuyruğu altında yere yakın çömelebilir; tüyleri de kalkabilir.' },
    { kind: 'paragraf', metin: 'Bu yüzden misafir gelince, taşıma kutusu çıkınca ya da yüksek bir ses duyulunca tıslayan kedi çoğu zaman huysuzluk etmiyor, korkusunu söylüyor. Cornell\'in genel ilkesi, kediyi korkutan durumları belirleyip mümkünse onlardan kaçınmak.' },
    { kind: 'yanilgi', baslik: '"Tıslayan kedi huysuz ve saldırgandır"', metin: 'International Cat Care tıslamayı saldırı ya da savunma amacıyla çıkarılabilen bir ses olarak tanımlıyor; Cornell ise tıslamayı korku ve ağrı gibi nedenlerin yanında sayıyor. Tıslayan kedinin karakterini suçlamak yerine neye tepki verdiğine bakmak gerekiyor.' },

    { kind: 'baslik', metin: 'Dokunulunca tıslıyorsa ağrı da olabilir' },
    { kind: 'paragraf', metin: 'Cornell, ağrısı olan kedilerin dokunulmaktan, hareket ettirilmekten ya da ağrıyı artırabilecek hareketlerden kaçınmak için insanlara ve diğer hayvanlara karşı saldırgan davranabildiğini belirtiyor. Kurumun verdiği örnekte eklem rahatsızlığı olan bir kedi eklemlerine dokunulmasına ya da eklemlerinin oynatılmasına tıslayarak, ısırarak ya da tırmalayarak karşılık verebiliyor.' },
    { kind: 'paragraf', metin: 'Aynı kurum, saldırgan davranışı yönetmeye çalışmadan önceki ilk adımın tıbbi bir nedenin bulunmadığından emin olmak olduğunu söylüyor. Bunun için kedinin veteriner hekim tarafından muayene edilmesi gerekiyor.' },
    { kind: 'paragraf', metin: 'Bazı kediler ise okşanırken ansızın tıslayıp saldırabiliyor. Cornell bunun nedeninin bilinmediğini, olası açıklamalar arasında aşırı uyarılmanın bulunduğunu ve çoğu kedinin bu öncesinde gözbebeklerini genişletip kuyruğunu savurduğunu, kulaklarını geriye çektiğini belirtiyor.' },

    { kind: 'baslik', metin: 'Evdeki yeni kedi ve eve dönen kedi' },
    { kind: 'paragraf', metin: 'Cornell\'e göre kediler bölgelerini belirleyip savunur ve yeni tanıştırılan kedilere karşı saldırganlık gösterebilir. Bu, pençe savurma, kovalama ve saldırma şeklinde ortaya çıkabiliyor. Kurum, daha önce kabul edilmiş bir kedinin bile örneğin hastanede kaldıktan sonra eve döndüğünde evdeki kedi tarafından saldırıya uğrayabildiğini belirtiyor.' },
    { kind: 'paragraf', metin: 'Bölge saldırganlığında en önemli ilke, tanıştırmayı ya da yeniden tanıştırmayı acele ettirmemek. Cornell, yeni ya da dönen kedinin önce kendi odasında ayrı mama, su ve kum kabıyla tutulmasını, sonraki adımların kademeli ilerlemesini öneriyor ve sürecin kedilere bağlı olarak haftalar ya da aylar sürebildiğini belirtiyor. Adım adım yaklaşım için [[yeni-kedi-eve-alisma|yeni kedinin eve alışması]] yazımıza bakılabilir.' },
    { kind: 'uyari', metin: 'Dövüşen kedilerin arasına el ya da vücudun başka bir bölümü sokulmaması gerekiyor; Cornell bunun ciddi yaralanmaya yol açabileceğini vurguluyor. Kedileri ayırmak için bebek kapısı ya da hafif bir panel gibi bariyerler önerilir.' },

    { kind: 'baslik', metin: 'Kedi bir şeye kızıp başka birine tıslayabilir' },
    { kind: 'paragraf', metin: 'Cornell "yönlendirilmiş saldırganlık" diye bir durumdan söz ediyor: kedi bir uyarıcıdan etkilenip ona doğrudan tepki veremediğinde öfkesini yakındaki bir insana ya da kediye yöneltebiliyor. Tetikleyiciler arasında yüksek sesler, pencereden bir sokak kedisi görmek ve evdeki kediler arasındaki bir kavga sayılıyor. Kurumun önerisi, tetikleyiciyi ortadan kaldırmak; örneğin perdeyi kapatmak.' },

    { kind: 'baslik', metin: 'Sokakta yaşayan kediler daha çok tıslayabilir' },
    { kind: 'paragraf', metin: 'Kore\'deki Gyeongsang Üniversitesi Veterinerlik Fakültesi\'nden araştırmacılar, 25 sokak kedisi ile 13 ev kedisinin farklı sosyal uyaranlara verdiği sesleri karşılaştırdı. Sokak kedileri çalışmadaki durumların çoğunda çok saldırgan ve savunmacı davrandı ve ev kedilerinden daha yüksek oranda ses çıkardı. Yazarlar bunu, sokak kedilerinin diğer hayvanlara daha az sosyalleşmiş olmasına ve korkutucu durumlara daha duyarlı olmasına bağlıyor.' },
    { kind: 'paragraf', metin: 'Çalışmada sokak kedilerinin çatışma durumlarındaki hırlama ve tıslamaları anlamlı biçimde daha yüksek frekanslıydı. Yazarlar, sosyalleşme eksikliğinin hangi seslerin kullanıldığını ve sesin özelliklerini etkileyebileceği sonucuna varıyor.' },

    { kind: 'baslik', metin: 'Kedi tıslarken ne yapılmaz' },
    { kind: 'liste', maddeler: [
      'Cezalandırmak: Cornell, her türlü fiziksel cezanın kedinin korkusunu ve kaygısını artırıp saldırganlığı kötüleştirebileceğini belirtiyor',
      'Elle yaklaşmak: tıslayan kedi korku ya da ağrı içinde olabilir ve ısırma ya da tırmalama mümkündür',
      'Tıslamaya neden olan durumu zorlamak: korkutan uyaran mümkünse ortadan kaldırılmalı',
      'Kavga eden kedilerin arasına el sokmak',
    ]},
    { kind: 'paragraf', metin: 'Tırmalama ya da ısırık olduysa [[kedi-tirmalamasi-kuduz-yapar-mi|kedi tırmalaması kuduz yapar mı]] yazımız ve bir sağlık kuruluşuna başvurmak yol gösterici olur.' },

    { kind: 'baslik', metin: 'Ne zaman veteriner hekime başvurulmalı?' },
    { kind: 'tablo', basliklar: ['Çoğunlukla korku ya da alışkanlık', 'Veteriner hekime danışılmalı'], satirlar: [
      ['Misafir ya da yabancı ses karşısında tıslama', 'Daha önce tıslamayan kedinin birden tıslamaya başlaması'],
      ['Yeni kedi geldiğinde tıslama', 'Dokunulan ya da oynatılan yerde tıslama ve kaçınma'],
      ['Taşıma kutusu çıkınca tıslama', 'Sürekli ya da ağırlaşan saldırganlık'],
    ]},
    { kind: 'uyari', metin: 'Daha önce tıslamayan bir kedi aniden tıslamaya başladıysa, özellikle dokunulduğunda ya da hareket ederken tıslıyorsa nedeni evde aramak yerine veteriner hekime başvurulması önerilir. Cornell, tiroit bezinin fazla çalışması, eklem rahatsızlıkları, diş sorunları ve sinir sistemi sorunlarının saldırganlığa yol açabildiğini bildiriyor; bunlardan birinin söz konusu olup olmadığına yalnızca veteriner hekim karar verebilir. Davranış sorunu ağır ya da sürekliyse veteriner davranış hekimine yönlendirme de gerekebiliyor.' },
  ],
  kontrolListesi: [
    'Kulaklar yatık, gözbebekleri geniş mi?',
    'Tıslamadan önce ne olmuştu?',
    'Dokunulunca tıslıyor mu?',
    'Evde yeni bir kedi ya da kişi var mı?',
    'Tıslama ilk kez mi başladı?',
    'Kediyi korkutan bir şey var mı?',
  ],
  sss: [
    { soru: 'Kedi neden tıslar?', cevap: 'Kedi çoğunlukla korktuğu, tehdit hissettiği ya da ağrısı olduğu için tıslar. International Cat Care tıslamayı saldırı ya da savunma amacıyla çıkarılabilen düşmanca sesler arasında sayıyor. Tıslamanın altında bir sağlık sorunu olup olmadığına yalnızca veteriner hekim karar verebilir.' },
    { soru: 'Tıslayan kedi saldırır mı?', cevap: 'Tıslama genellikle bir uyarıdır, ama saldırganlığın parçası da olabilir. Cornell, korku kaynaklı saldırganlıkta kedinin kulaklarını yatırıp tıslayabildiğini ve dişlerini gösterebildiğini belirtiyor. Bu yüzden tıslayan kediye elle uzanılmaması ve onu korkutan durumdan uzaklaştırılması önerilir.' },
    { soru: 'Yeni kedi gelince eski kedi neden tıslar?', cevap: 'Kediler bölgelerini savunduğu için yeni gelene tıslayabilir. Cornell, tanıştırmanın acele edilmemesi gerektiğini, yeni kedinin başta ayrı bir odada tutulduğunu ve sürecin haftalar ya da aylar sürebildiğini belirtiyor. Aynı tepki hastanede kalıp dönen kediye karşı da görülebiliyor.' },
    { soru: 'Kedi sahibine neden tıslar?', cevap: 'Kedi sahibine korku, ağrı, aşırı uyarılma ya da başka bir tetikleyiciye verdiği tepki nedeniyle tıslayabilir. Cornell, ağrısı olan kedilerin dokunulmaktan kaçınmak için tısladığını, bazı kedilerin ise okşanırken aşırı uyarıldığını belirtiyor. Ani başlayan tıslamada veteriner hekim muayenesi öneriliyor.' },
    { soru: 'Sokak kedileri neden daha çok tıslar?', cevap: 'Sokak kedileri korkutucu durumlara daha duyarlı ve insana karşı daha az sosyalleşmiş olabiliyor. Gyeongsang Üniversitesi araştırmacılarının 25 sokak ve 13 ev kedisiyle yaptığı çalışmada sokak kedileri çoğu durumda çok saldırgan ve savunmacı davrandı, daha sık ses çıkardı.' },
    { soru: 'Kedi tıslarken ne yapılmalı?', cevap: 'Kediyi cezalandırmamak ve elle yaklaşmamak gerekiyor. Cornell, fiziksel cezanın korkuyu ve saldırganlığı artırabileceğini belirtiyor. Kedinin korkusuna yol açan durumu belirleyip ondan kaçınmak önerilir. Tıslama sürüyorsa veteriner hekime danışılmalı.' },
    { soru: 'Tıslama ne zaman sağlık sorunu işareti olabilir?', cevap: 'Daha önce tıslamayan bir kedi birden tıslamaya başladıysa ya da dokunulan bir yerde tıslıyorsa sağlık nedeni araştırılmalı. Cornell, saldırgan davranışı yönetmeye çalışmadan önce tıbbi bir nedenin dışlanmasını ilk adım olarak gösteriyor. Bu değerlendirmeyi veteriner hekim yapar.' },
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Feline Behavior Problems: Aggression',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-behavior-problems-aggression',
    },
    {
      kurum: 'International Cat Care',
      baslik: 'Cat Communication',
      adres: 'https://icatcare.org/articles/cat-communication',
    },
    {
      kurum: 'Gyeongsang National University, College of Veterinary Medicine',
      yazarlar: 'Yeon SC, Kim YK, Park SJ, Lee SS, Lee SY, Suh EH, Houpt KA, Chang HH, Lee HC, Yang BG, Lee HJ',
      baslik: 'Differences between vocalization evoked by social stimuli in feral cats and house cats',
      dergi: 'Behavioural Processes',
      yil: 2011,
      kunye: '87(2):183-9',
      doi: '10.1016/j.beproc.2011.03.003',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/21443933/',
    },
  ],
};
