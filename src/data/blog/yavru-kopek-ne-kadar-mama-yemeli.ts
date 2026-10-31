import type { BlogYazi } from './types';

export const yavruKopekNeKadarMamaYemeli: BlogYazi = {
  slug: 'yavru-kopek-ne-kadar-mama-yemeli',
  baslik: 'Yavru Köpek Ne Kadar Mama Yemeli?',
  ozet: 'Yavru köpeğin mamasını gram değil kalori belirliyor: 4 aydan küçükte dinlenme ihtiyacının 3, büyükte 2 katı. Öğün sayısı, örnek hesap ve iri ırk uyarısı.',
  kapakAlt:
    'Terazideki kaba mama dolduran el ve bekleyen golden yavru köpek',
  kategori: 'Beslenme',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: 'Yavru köpeğin günlük mama miktarı gramla değil **kaloriyle** hesaplanıyor. Merck Veteriner El Kitabı\'na göre sağlıklı bir yavrunun günlük enerji ihtiyacı, 4 aydan küçükse dinlenme enerji ihtiyacının **3 katı**, 4 aydan büyükse **2 katı**. Bu kalori mamanın etiketindeki değere bölününce günlük gram çıkıyor.' },
    { kind: 'paragraf', metin: 'Hesap yalnızca başlangıç noktası; gerçek miktarı yavrunun kilosu ve vücut kondisyonu belirliyor. Aşağıda hesabın nasıl yapıldığı, örnek bir tablo, öğün sayısı, kilonun neden her hafta izlendiği, iri ve dev ırklarda neden ayrı kural olduğu ve yavru mamasından ne zaman çıkıldığı anlatılıyor.' },

    { kind: 'baslik', metin: 'Günlük mama miktarı nasıl hesaplanıyor?' },
    { kind: 'paragraf', metin: 'Hesap **dinlenme enerji ihtiyacı** (RER) ile başlıyor. Merck Veteriner El Kitabı, her kiloda kullanılabilen formülü şöyle veriyor: **RER = 70 × (kilo)^0,75.** Bu değer, sağlıklı ve beslenmiş bir hayvanın dinlenirken harcadığı enerji. Günlük ihtiyaç ise bu değerin yaşam dönemine göre bir katsayıyla çarpılmasıyla bulunuyor.' },
    { kind: 'liste', maddeler: [
      '**1. adım:** Yavrunun kilosu tartılır, örneğin 5 kg.',
      '**2. adım:** Kilonun 0,75. kuvveti bulunur; hesap makinesinin üs tuşuyla 5^0,75 yaklaşık 3,34.',
      '**3. adım:** 70 ile çarpılır: yaklaşık 234 kcal. Bu, dinlenme ihtiyacı.',
      '**4. adım:** Yavru 4 aydan küçükse 3 ile, büyükse 2 ile çarpılır: yaklaşık 702 ya da 468 kcal.',
      '**5. adım:** Sonuç, mamanın bir gramındaki kaloriye bölünür.',
    ] },

    { kind: 'tablo', basliklar: ['Örnek kilo', 'Dinlenme ihtiyacı (RER)', '4 aydan küçük (3 × RER)', '4 aydan büyük (2 × RER)'], satirlar: [
      ['2 kg', 'yaklaşık 118 kcal', 'yaklaşık 353 kcal', 'yaklaşık 235 kcal'],
      ['5 kg', 'yaklaşık 234 kcal', 'yaklaşık 702 kcal', 'yaklaşık 468 kcal'],
      ['10 kg', 'yaklaşık 394 kcal', 'yaklaşık 1.181 kcal', 'yaklaşık 787 kcal'],
    ] },
    { kind: 'paragraf', metin: 'Tablodaki her satır ayrı bir örnek yavruyu gösteriyor; hepsi formülle hesaplandı. Gram karşılığı mamanın kalorisine bağlı. Yalnızca hesabı göstermek için, kilogramında 4.000 kilokalori olan yani gramında 4 kcal bulunan bir yavru mamasını varsayalım: 4 aydan küçük 5 kiloluk yavru için 702 kcal yaklaşık **175 grama**, 4 aydan büyük 5 kiloluk yavru için 468 kcal yaklaşık **117 grama** karşılık geliyor. Buradaki 4.000 değeri kaynak bilgisi değil varsayımdır; kendi mamanızın etiketindeki değerle aynı bölme yapılıyor.' },

    { kind: 'baslik', metin: 'Paketteki tablo yeterli mi?' },
    { kind: 'paragraf', metin: 'Tek başına yeterli sayılmıyor. Merck Veteriner El Kitabı\'na göre günlük besleme önerisi bir tahmin ve başlangıç noktası olarak görülüyor; yavrunun kilosu ve durumu sürekli değerlendirilerek düzeltilmesi gerekiyor. Amerikan Hayvan Hastaneleri Birliği\'nin (AAHA) 2021 kılavuzu da paketteki yönergelerin belirli bir standart yöntemle belirlenmediğini söylüyor; paketi izleyen sahiplerde kilonun ve vücut kondisyon puanının düzenli değerlendirilmesini öneriyor.' },
    { kind: 'yanilgi', baslik: '"Paketteki miktar her yavruya uyar" yanılgısı', metin: 'Merck Veteriner El Kitabı, aynı kilodaki iki hayvanın hesaplanan kaloriden yüzde 30 kadar fazla ya da az ihtiyaç duyabileceğini belirtiyor. Aynı kilodaki iki yavruya aynı gramı vermek bu yüzden doğru ölçü değil; paket ve hesap başlangıçtır, yavrunun kilo seyri ayarı yapıyor.' },

    { kind: 'baslik', metin: 'Günde kaç öğün verilmeli?' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı\'ndaki genel öneriye göre sütten kesildikten sonra 6 aylığa kadar olan yavrular günde **üç öğün**, 6-12 aylık yavrular günde **iki öğün** besleniyor. Küçük ırk yavrular üçten fazla öğüne ihtiyaç duyabiliyor. Günlük miktar hesaplandıktan sonra bu öğünlere bölünüyor.' },
    { kind: 'tablo', basliklar: ['Dönem', 'Önerilen öğün sayısı'], satirlar: [
      ['Sütten kesildikten 6 aya kadar', 'Günde 3'],
      ['6-12 ay', 'Günde 2'],
      ['Küçük ırk yavrular', 'Üçten fazla gerekebiliyor'],
    ] },
    { kind: 'paragraf', metin: 'Aynı kaynak, yavru beslemesinin yavruya ve sahibine göre bireysel kurulması gerektiğini de vurguluyor. Dünya Küçük Hayvan Veteriner Hekimleri Birliği (WSAVA) kabı hep dolu bırakmanın yalnızca kendi kilosunu koruyabilen hayvanlarda uygun olduğunu, çok küçük yavrularda işe yarayabildiğini ama iri ırk büyüyen yavrularda yapılmaması gerektiğini söylüyor.' },

    { kind: 'baslik', metin: 'Miktar neden her hafta yeniden ayarlanıyor?' },
    { kind: 'paragraf', metin: 'Yavrunun kilosu hızla değişiyor. Merck Veteriner El Kitabı\'na göre yavrular ilk 5 ayda beklenen yetişkin kilolarının kilogramı başına günde ortalama 2-4 gram alıyor. Yetişkin kilosunun 20 kg olması beklenen bir yavru için bu, günde yaklaşık 40-80 gram demek. Büyüme hızı 6. aydan sonra yavaşlıyor.' },
    { kind: 'paragraf', metin: 'Aynı kaynak kilo artışının **haftalık** izlenmesini ve besleme önerisinin yavru her hafta az miktarda kilo alacak şekilde ayarlanmasını öneriyor; yavaş büyüme hızlı büyümeye tercih ediliyor. Sağlıklı büyüme seyrini izlemek için ırka göre büyüme grafikleri de kullanılabiliyor. Bu grafikleri yorumlamak veteriner hekimin işi.' },
    { kind: 'yanilgi', baslik: '"Yavru istediği kadar yesin, nasılsa büyüyor" yanılgısı', metin: 'Merck Veteriner El Kitabı, büyüme döneminde fazla beslemenin büyüme hızını artırdığını, bunun düzgün iskelet gelişimiyle bağdaşmadığını ve ileride şişmanlığa katkı yaptığını belirtiyor. Büyüme, sınırsız yeme gerekçesi değil.' },

    { kind: 'baslik', metin: 'İri ve dev ırk yavrularda ayrı kural var' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı\'na göre iri ve dev ırk yavrulara, etiketinde iri ırk yavrular için formüle edildiği belirtilen tam ve dengeli bir büyüme maması veriliyor. Bu sınıf, yetişkin kilosu 32 kg ve üzeri olan köpekleri kapsıyor. Küçük ve orta ırk yavrular ise büyüme mamasıyla ya da tüm yaşam evrelerine uygun bir mamayla beslenebiliyor.' },
    { kind: 'paragraf', metin: 'WSAVA, iri ırk büyüyen yavruların porsiyonu kontrollü beslenmesi gerektiğini söylüyor; amaç, hızlı büyümenin getirdiği eklem ve iskelet sorunlarından kaçınmak için yavaş kilo artışı ve 9 üzerinden 4 vücut kondisyon puanı. AAHA kılavuzu da dev ırk yavrularda zayıf bir vücut kondisyonunun korunmasını ve fazla kalsiyum alımından kaçınılmasını öneriyor.' },
    { kind: 'yanilgi', baslik: '"Kemik gelişimi için ek kalsiyum verilmeli" yanılgısı', metin: 'Merck Veteriner El Kitabı, büyüme ve üreme için hazırlanmış tam ve dengeli mamalardaki miktarın ötesinde kalsiyum, fosfor ve D vitamini takviyesinin nadiren gerekli olduğunu, hatta zararlı olabildiğini belirtiyor. Takviye vermeden önce veteriner hekime danışmak gerekiyor.' },

    { kind: 'baslik', metin: 'Yavru maması ne zamana kadar sürüyor?' },
    { kind: 'paragraf', metin: 'AAHA kılavuzuna göre yavrular iskelet olgunluğuna ulaşana kadar büyümeye uygun mamayla besleniyor. Küçük ve orta boy köpeklerde bu yaklaşık 1 yaş demek; bazı iri ve dev ırklarda iskelet olgunluğu 15-16 aya yaklaşabiliyor. Merck Veteriner El Kitabı ise iskelet olgunluğunun küçük ve orta ırklarda 8-12 ayda, iri ve dev ırklarda 10-16 ayda tamamlanabildiğini belirtiyor.' },
    { kind: 'paragraf', metin: 'Aynı kaynağa göre büyüme mamasına yalnızca gözle görülen büyüme durana kadar değil, iskelet olgunluğuna kadar devam ediliyor. Köpek beklenen yetişkin kilosunun yaklaşık yüzde 90\'ına ulaştıktan sonra, besin yoğunluğu büyüme mamasından düşük bir mama genellikle öneriliyor. Geçiş zamanı ırka ve gelişime göre veteriner hekimle belirleniyor. Yetişkin köpeğin porsiyon hesabı [[kopek-gunde-kac-gram-mama-yer|köpek günde kaç gram mama yer]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Ödül ve ek yiyecekler günlük payın içinde' },
    { kind: 'paragraf', metin: 'AAHA kılavuzu, ana mamanın günlük kalorinin **en az yüzde 90\'ını** karşılamasını, ödül ve diğer ek yiyeceklerin ise **en fazla yüzde 10\'unu** oluşturmasını öneriyor. Eğitimde ödül kullanılan yavruda bu pay ana öğünden düşülerek hesaplanıyor. Ödül olarak neyin verilmeyeceği [[kopeklere-zararli-yiyecekler|köpeklere zararlı yiyecekler]] yazısında, tuvalet eğitiminde ödülün yeri [[yavru-kopek-tuvalet-egitimi|yavru köpek tuvalet eğitimi]] yazısında anlatılıyor.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Yavrunun günlük mama miktarı, kilo seyri ve vücut kondisyonu değerlendirilerek veteriner hekimle birlikte belirleniyor. İştahı ani değişen, kilo almayan ya da hızla kilo alan, kusan veya ishali olan yavrunun vakit kaybetmeden veteriner hekime gösterilmesi gerekiyor. Kontrol takvimi [[yavru-kopek-veterinere-ne-zaman-goturulmeli|yavru köpek ne zaman veterinere götürülmeli]] yazısında bir arada.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Her yavruya aynı gram verilir', 'Miktar kaloriye ve kiloya göre hesaplanıyor'],
      ['Paketteki miktar kesin doğrudur', 'Paket başlangıç, ayarı kilo seyri yapıyor'],
      ['Yavru istediği kadar yemeli', 'Hızlı büyüme iskelet gelişimiyle bağdaşmıyor'],
      ['Kemikler için ek kalsiyum gerekir', 'Dengeli büyüme mamasında takviye nadiren gerekli'],
      ['İri ırk da her yavru mamasını yer', 'İri ırk için ayrı formüle edilmiş mama gerekiyor'],
    ] },
  ],
  kontrolListesi: [
    'Mamanın kalorisi biliniyor mu?',
    'Kilo her hafta ölçülüyor mu?',
    'Öğün sayısı yaşa uygun mu?',
    'Mama büyüme dönemine uygun mu?',
    'Ödül payı hesaba katıldı mı?',
    'İri ırksa özel mama seçildi mi?',
  ],
  sss: [
    { soru: 'Yavru köpek günde kaç gram mama yemeli?', cevap: 'Tek bir gram değeri yok, çünkü mamaların kalorisi farklı. Merck Veteriner El Kitabı\'na göre günlük ihtiyaç 4 aydan küçük yavruda dinlenme ihtiyacının 3, büyükte 2 katı. Örneğin gramında 4 kcal olan varsayımsal bir mamada, 4 aydan küçük 5 kiloluk yavru için bu yaklaşık 175 grama karşılık geliyor.' },
    { soru: 'Yavru köpek günde kaç öğün yemeli?', cevap: 'Sütten kesildikten sonra 6 aya kadar günde üç öğün öneriliyor. Merck Veteriner El Kitabı\'na göre 6-12 aylık yavrular günde iki öğün besleniyor. Küçük ırk yavrular üçten fazla öğüne ihtiyaç duyabiliyor. Günlük miktar hesaplanıp bu öğünlere bölünüyor.' },
    { soru: 'Yavru köpek yetişkin mamasına ne zaman geçer?', cevap: 'Büyüme mamasından iskelet olgunluğundan sonra çıkılıyor. AAHA kılavuzuna göre bu küçük ve orta boy köpeklerde yaklaşık 1 yaş, bazı iri ve dev ırklarda 15-16 aya yakın. Geçiş zamanı ırka ve gelişime göre veteriner hekimle belirleniyor.' },
    { soru: 'Yavru köpeğin yeterince yediği nasıl anlaşılır?', cevap: 'Her hafta az miktarda kilo alıyorsa miktar uygun sayılıyor. Merck Veteriner El Kitabı kilo artışının haftalık izlenmesini ve miktarın buna göre ayarlanmasını öneriyor. Büyüme grafikleri seyri değerlendirmeye yardımcı oluyor; yorumlamak için yavrunun veteriner hekime gösterilmesi gerekiyor.' },
    { soru: 'İri ırk yavruya hangi mama verilir?', cevap: 'Etiketinde iri ırk yavrular için formüle edildiği belirtilen tam ve dengeli bir büyüme maması veriliyor. Merck Veteriner El Kitabı bu sınıfı yetişkin kilosu 32 kg ve üzeri köpekler olarak tanımlıyor. Porsiyon kontrollü verilip yavaş kilo artışı hedefleniyor.' },
    { soru: 'Yavru köpeğe ödül ne kadar verilebilir?', cevap: 'Ödül ve ek yiyecekler günlük kalorinin en fazla yüzde 10\'unu oluşturabiliyor. AAHA kılavuzu kalan en az yüzde 90\'ın besin açısından tam ve dengeli ana mamadan gelmesini öneriyor. Eğitimde kullanılan ödüller de bu payın içinde sayılıyor.' },
    { soru: 'Yavru köpeğin kabı hep dolu bırakılır mı?', cevap: 'İri ırk büyüyen yavrularda bırakılmaması gerekiyor. WSAVA, bu yavruların porsiyonu kontrollü beslenmesini ve yavaş kilo almasını öneriyor. Kabı hep dolu bırakmak yalnızca kendi kilosunu koruyabilen hayvanlarda, bir de çok küçük yavrularda işe yarayabiliyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'American Animal Hospital Association (AAHA)',
      yazarlar: 'Cline MG, Burns KM, Coe JB, Downing R, Durzi T, Murphy M, Parker V',
      baslik: '2021 AAHA Nutrition and Weight Management Guidelines for Dogs and Cats',
      dergi: 'Journal of the American Animal Hospital Association',
      yil: 2021,
      kunye: '57(4):153-178',
      doi: '10.5326/JAAHA-MS-7232',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34228790/',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Feeding Practices in Small Animals',
      adres: 'https://merckvetmanual.com/management-and-nutrition/nutrition-small-animals/feeding-practices-in-small-animals',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Nutritional Requirements of Small Animals',
      adres: 'https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/nutritional-requirements-of-small-animals',
    },
    {
      kurum: 'World Small Animal Veterinary Association (WSAVA)',
      baslik: 'Frequently Asked Questions & Myths',
      yil: 2018,
      adres: 'https://wsava.org/wp-content/uploads/2020/01/Frequently-Asked-Questions-and-Myths.pdf',
    },
  ],
};
