import type { BlogYazi } from './types';

export const kopeklerKacSaatUyur: BlogYazi = {
  slug: 'kopekler-kac-saat-uyur',
  baslik: 'Köpekler Günde Kaç Saat Uyur? Yaşa Göre Süreler',
  ozet: 'Sahiplerin bildirdiğine göre 16 haftalık yavrular günde ortalama 11,2 saat, 12 aylık köpekler 10,8 saat uyuyor. Süreyi etkileyenleri anlatıyoruz.',
  kapakAlt:
    'Yuvarlak yatağında uyuyan golden köpek',
  kategori: 'Köpek',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Sahiplerin bildirdiğine göre 16 haftalık yavrular 24 saatte ortalama 11,2 saat, 12 aylık köpekler ise ortalama 10,8 saat uyuyor.** Bu rakamlar, Dogs Trust\'ın Birleşik Krallık\'ta ev ortamında yaşayan köpekler üzerinde yaptığı ve 2020\'de yayımlanan çalışmadan geliyor. Süreler cihazla ölçülmedi; sahipler köpeğin en az ve en çok kaç saat uyuduğunu tahmin ederek bildirdi. Bu yüzden rakamların kesin bir norm değil, bir ortalama olarak okunması gerekiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda bu rakamın nereden geldiğini, yavru ile genç köpek arasındaki farkı, gece uykusunu, ortamın uykuya etkisini ve uyku düzenindeki değişikliğin ne zaman veteriner hekime danışmayı gerektirdiğini anlatıyoruz. Rüya ve uykuda seğirme merak edilirse [[kopekler-ruya-gorur-mu|köpekler rüya görür mü]] yazısına bakılabilir.' },

    { kind: 'tablo', basliklar: ['Ölçüt', 'Sonuç'], satirlar: [
      ['16 haftalık yavru, 24 saatte', 'Ortalama 11,2 saat (sahip bildirimi)'],
      ['12 aylık köpek, 24 saatte', 'Ortalama 10,8 saat (sahip bildirimi)'],
      ['Gece uykusu, 16 haftalık', 'Ortalama 7,0 saat'],
      ['Gece uykusu, 12 aylık', 'Ortalama 7,3 saat'],
      ['Veteriner yoğun bakımında yatan köpek', 'Gözlenen sürenin ortancası %40 uyku'],
    ]},

    { kind: 'baslik', metin: 'Bu rakamlar nereden geliyor?' },
    { kind: 'paragraf', metin: 'Dogs Trust\'ın "Generation Pup" adlı izleme çalışmasında sahipler, köpekleri 16 haftalıkken ve 12 aylıkken anket doldurdu. Ankete 16. haftada 2.332, 12. ayda 1.091 köpek için yanıt verildi. Sahiplerden köpeğin gündüz ve gece uykusunu en az ve en çok saat olarak tahmin etmesi istendi. Hem gündüz hem gece verisi bulunan 352 köpeğin ortalaması 16 haftalıkken 11,2 saat (standart sapma 2,9), 12 aylıkken 10,8 saat (standart sapma 2,7) çıktı.' },
    { kind: 'paragraf', metin: 'Çalışmanın yazarları, daha önceki bir araştırmanın günlük ortalamayı 10,1 saat bulduğunu ve farkın uyku tanımlarından ya da ölçüm yöntemlerinden kaynaklanmış olabileceğini belirtiyor. Yani kaynaklarda farklı rakamlar görmek şaşırtıcı değil; her biri farklı köpek grubunu, farklı yöntemle ölçüyor.' },
    { kind: 'yanilgi', baslik: '"Her köpek tam olarak aynı saat kadar uyumalı"', metin: 'Rakamlar ortalamadır. Standart sapmanın yaklaşık üç saat olması, çalışmadaki köpekler arasında birkaç saatlik farkın görüldüğünü gösteriyor. Kendi köpeğinizin süresini tek bir sayıyla değil, onun alışılmış düzeniyle karşılaştırmak daha anlamlıdır.' },

    { kind: 'baslik', metin: 'Yavrular gündüz daha çok, geceleri daha az uyuyor' },
    { kind: 'paragraf', metin: 'Aynı çalışmada 16 haftalık yavruların sahipleri, köpeklerinin gündüz ve 24 saat boyunca daha uzun, geceleri ise daha kısa uyuduğunu bildirdi. Gece uykusu 16 haftalıkken ortalama 7,0 saat, 12 aylıkken 7,3 saatti; iki dönem arasındaki fark ortalama 0,4 saat kadardı. Toplamdaki fark da küçük: 11,2 saate karşılık 10,8 saat.' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual, yavruların düzen ve öngörülebilirlikten yarar gördüğünü belirtiyor. Yavru sahiplerine, egzersiz ve oyunla geçen süre ile dinlenmeye ayrılan süreyi dengeleyen bir günlük rutin kurulması öneriliyor. Köpeğin hangi yaş dönemine girdiğini görmek için [[kopek-yasi-hesaplama|köpek yaşı hesaplama]] yazısından yararlanılabilir.' },

    { kind: 'baslik', metin: 'Uyuduğu yer ve gece düzeni' },
    { kind: 'paragraf', metin: 'Geceleri insanlara erişimi olan köpeklerin yüzde 86,7\'si 16 haftalıkken, yüzde 86,8\'i 12 aylıkken insanların yanında olmayı seçti. En sık uyku yeri 16 haftada kafes ya da kutu (%49,1), 12 ayda köpek yatağıydı (%31,7). Köpeklerin çoğu, uyumaları için insan bulunmayan bir oda ya da alanda bırakılıyordu.' },
    { kind: 'paragraf', metin: 'Bu veriler köpeğin nerede yatması gerektiğini söylemiyor; yalnızca ev ortamındaki yaygın düzeni gösteriyor. Yalnız kalınca huzursuzlanan köpekler için [[kopeklerde-ayrilik-kaygisi|köpeklerde ayrılık kaygısı]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Gürültü, ışık ve sıcaklık uykuyu etkiliyor' },
    { kind: 'paragraf', metin: 'Kuzey Karolina Eyalet Üniversitesi Veteriner Fakültesi\'nin yoğun bakım ünitesinde yaptığı gözlem çalışmasına 96 köpek ve 16 kedi katıldı. Köpeklerde gözlenen sürenin ortancası %40 uykuda geçti. Gece saatlerinde (21.00 ile 06.00 arası) ışıklar kısıldığında hastanın uyuyor olma olasılığı 1,7 kat yüksekti; gürültü düzeyi arttıkça uyuma olasılığı azaldı.' },
    { kind: 'paragraf', metin: 'Bu çalışma hastanede yatan hastalarda yapıldı ve evdeki sağlıklı köpeklere doğrudan uygulanamaz. Yine de ışık ve gürültünün uykuyu etkileyebildiğini gösteriyor.' },
    { kind: 'paragraf', metin: 'Kafes ortamındaki 13 laboratuvar köpeğinin sekiz ay boyunca video kaydıyla izlendiği bir başka çalışmada, sıcaklık ve gün ışığı süresi arttıkça gece uykusu azaldı. Gündüz uykusu ise gürültü ve stres göstergesi olarak ölçülen dışkıdaki kortizol metabolitleri arttığında azaldı.' },
    { kind: 'paragraf', metin: 'Barınakta yaşayan 15 köpekle yapılan çalışmada, gündüz dinlenme oranı yüksek olan köpeklerin daha az tekrarlayan davranış gösterdiği ve personel tarafından daha rahat olarak kaydedildiği bulundu. Yazarlar, yoğun bir barınak ortamında gün içinde daha çok dinlenebilmenin daha iyi refahın işareti olabileceğini, ancak uyku ile refah arasındaki ilişkinin çalışmanın yakalayabildiğinden daha karmaşık olabileceğini belirtiyor.' },

    { kind: 'baslik', metin: 'Yaşlı köpeklerde uyku düzeni değişirse' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual, bilişsel işlev bozukluğunun (senilite) belirtileri arasında sosyal etkileşimde azalmayı, tuvalet eğitiminin kaybını, tanıdık ortamda yönünü şaşırmayı ve uyku düzeninde değişikliği sayıyor. Bu belirtilerin hepsi yaşlı köpekte tek başına birer hastalık göstergesi değildir; değerlendirmeyi veteriner hekim yapar.' },
    { kind: 'uyari', metin: 'Uyku düzenindeki değişikliğin nedenini evde belirlemek mümkün değildir. Tek başına uyku değişikliği bir hastalık anlamına gelmez, ancak köpeğin uyku süresi ya da gece ve gündüz düzeni belirgin biçimde değiştiyse veteriner hekime başvurulması gerekiyor.' },

    { kind: 'baslik', metin: 'Veteriner hekime ne zaman danışılmalı?' },
    { kind: 'liste', maddeler: [
      'Uyku süresi kısa sürede belirgin biçimde arttı ya da azaldıysa',
      'Köpek seslenilince ya da dokunulunca zor uyanıyorsa',
      'Gece düzeni bozulup köpek huzursuzca geziniyorsa',
      'Yaşlı köpekte uyku değişikliğine yön şaşırması ya da tuvalet alışkanlığında bozulma eşlik ediyorsa',
      'Uykuda nöbet şüphesi uyandıran kasılmalar görüldüyse',
    ]},
    { kind: 'paragraf', metin: 'Hekime gitmeden önce değişikliğin ne zaman başladığını, tahmini günlük uyku saatlerini, gece düzenini, iştah ve hareketlilikteki farkı birkaç gün not almak önerilir. Bu notlar muayenede hekimin işini kolaylaştırır; nedeni belirlemek ise hekimin işidir.' },

    { kind: 'baslik', metin: 'Uyku ortamında dikkat edilebilecekler' },
    { kind: 'liste', maddeler: [
      'Gece ışıkların kısılması önerilir; yoğun bakım çalışmasında loş ışık uyku olasılığını artırdı.',
      'Gürültünün düşük tutulması önerilir; gürültü arttıkça uyku olasılığı azaldı.',
      'Yatak yerinin aşırı sıcak olmamasına dikkat edilebilir; kafes çalışmasında sıcaklık arttıkça gece uykusu azaldı.',
      'Yavrularda oyun ve dinlenmeyi dengeleyen sabit bir günlük düzen önerilir.',
      'Gün içinde de sakin bir dinlenme köşesi bulunması işe yarayabilir.',
    ]},
    { kind: 'paragraf', metin: 'Kedilerin uykusunu merak edenler [[kediler-kac-saat-uyur|kediler kaç saat uyur]] yazısına bakabilir.' },
  ],
  sss: [
    { soru: 'Köpekler günde kaç saat uyur?', cevap: 'Sahiplerin bildirdiğine göre 16 haftalık yavrular günde ortalama 11,2 saat, 12 aylık köpekler 10,8 saat uyuyor. Bu süreler ölçüm değil sahip tahmini; köpekler arasında yaklaşık üç saatlik yayılım var. Kendi köpeğinin alışılmış düzeninden belirgin sapma varsa veteriner hekime danışmak gerekiyor.' },
    { soru: 'Yavru köpekler yetişkinlerden fazla mı uyur?', cevap: 'Çalışmada 16 haftalık yavruların sahipleri, köpeklerinin gündüz ve 24 saat boyunca 12 aylıklardan daha uzun uyuduğunu bildirdi. Aradaki ortalama fark küçük: 11,2 saate karşılık 10,8 saat. Yavrularda oyun ve dinlenmeyi dengeleyen sabit bir günlük düzen önerilir.' },
    { soru: 'Köpek geceleri kaç saat uyur?', cevap: 'Sahip bildirimine göre gece uykusu 16 haftalık yavruda ortalama 7,0 saat, 12 aylık köpekte 7,3 saat. Işık, gürültü ve sıcaklık gibi ortam koşulları uykuyu etkileyebiliyor. Gece düzeni belirgin bozulduysa nedeni evde belirlenemeyeceği için veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Köpek çok uyuyorsa hasta mıdır?', cevap: 'Uyku süresine bakarak hasta olup olmadığı söylenemez. Süreler köpekler arasında birkaç saat değişiyor. Önemli olan, köpeğin kendi alışılmış düzeninden ani ve belirgin sapma olup olmadığıdır; böyle bir değişiklikte ya da uyandırmakta güçlük varsa veteriner hekime danışmak gerekiyor.' },
    { soru: 'Yaşlı köpeklerde uyku düzeni değişir mi?', cevap: 'Değişebilir; Merck Veterinary Manual uyku düzenindeki değişikliği bilişsel işlev bozukluğunun belirtileri arasında sayıyor. Ancak tek başına uyku değişikliği bu tanı anlamına gelmez ve nedenini yalnızca veteriner hekim belirleyebilir. Yaşlı köpekte düzen değişirse muayene önerilir.' },
    { soru: 'Köpekler geceyi insanların yanında mı geçirmeyi seçer?', cevap: 'Çalışmadaki köpeklerin yaklaşık yüzde 87\'si, geceleri insanlara erişimi olduğunda onların yanında olmayı seçti. Aynı çalışmada köpeklerin çoğu uyumaları için insansız bir odada bırakılıyordu. Çalışma tanımlayıcıdır; hangi düzenin daha iyi olduğunu göstermiyor.' },
  ],
  kontrolListesi: [
    'Uyku düzeni aniden değişti mi?',
    'Uyandırmakta zorlanıyor musunuz?',
    'Geceleri huzursuzluk var mı?',
    'Yaşlı köpekte yön şaşırması var mı?',
    'Değişikliğin başlangıcı belli mi?',
    'Yatak yeri sessiz ve loş mu?',
  ],
  kaynaklar: [
    {
      kurum: 'Dogs Trust; Bristol Veterinary School, University of Bristol',
      yazarlar: 'Kinsman R, Owczarczak-Garstecka S, Casey R, Knowles T, Tasker S, Woodward J, Da Costa R, Murray J',
      baslik: 'Sleep Duration and Behaviours: A Descriptive Analysis of a Cohort of Dogs up to 12 Months of Age',
      dergi: 'Animals',
      yil: 2020,
      kunye: '10(7):1172',
      doi: '10.3390/ani10071172',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/32664232/',
    },
    {
      kurum: 'North Carolina State University, College of Veterinary Medicine',
      yazarlar: 'Devereux EA, Ejezie AV, Lynch AM, Gruen ME, LaJuett SJ, Robertson JB, Scharf VF',
      baslik: 'Factors Affecting Sleep Among Dogs and Cats in a Veterinary Intensive Care Unit',
      dergi: 'Journal of Veterinary Emergency and Critical Care',
      yil: 2025,
      kunye: '35(3):225-232',
      doi: '10.1111/vec.13472',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/40492371/',
    },
    {
      kurum: 'University of Salford; Universidade Federal de Ouro Preto',
      yazarlar: 'Schork IG, Manzo IA, Beiral De Oliveira MR, Costa FV, Palme R, Young RJ, de Azevedo CS',
      baslik: 'How environmental conditions affect sleep? An investigation in domestic dogs (Canis lupus familiaris)',
      dergi: 'Behavioural Processes',
      yil: 2022,
      kunye: '199:104662',
      doi: '10.1016/j.beproc.2022.104662',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/35644428/',
    },
    {
      kurum: 'University of Liverpool; University of Lincoln',
      yazarlar: 'Owczarczak-Garstecka SC, Burman OH',
      baslik: 'Can Sleep and Resting Behaviours Be Used as Indicators of Welfare in Shelter Dogs (Canis lupus familiaris)?',
      dergi: 'PLoS One',
      yil: 2016,
      kunye: '11(10):e0163620',
      doi: '10.1371/journal.pone.0163620',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/27732667/',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Social Behavior of Dogs',
      adres: 'https://www.merckvetmanual.com/behavior/behavior-of-dogs/social-behavior-of-dogs',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Behavior Problems in Dogs',
      adres: 'https://www.merckvetmanual.com/dog-owners/behavior-of-dogs/behavior-problems-in-dogs',
    },
  ],
};
