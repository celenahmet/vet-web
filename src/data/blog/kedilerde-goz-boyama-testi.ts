import type { BlogYazi } from './types';

/**
 * KEDI kategorisi. Ahmet (04.10.2026): "kedilerde göz boyama tedavi teşhis yöntemiyle
 * ilgili" yazı. Floresein boyamasi: ne oldugu, nasil yapildigi, sonucun neyi
 * gosterdigi, tedavide neden tekrarlandigi.
 *
 * Dayanaklar (04.10.2026'da acilip okundu):
 *   1. Cornell Feline Health Center, Corneal Ulcers — kedide ulserin en sik sebebi
 *      tekrarlayan herpes (Kern); belirtiler; floresein damlasi hasarli dokuya baglanir,
 *      ulserli alanda acikca gorulen yesilimsi renk; bircok ulser bir hafta icinde
 *      kendiliginden kapanabiliyor; derin ulser delinip gozun kaybina gidebiliyor;
 *      kendi kendine zarar icin koruyucu yaka.
 *   2. Merck Veterinary Manual, Physical Examination of the Eye in Animals (Hamor, 2023) —
 *      Schirmer, floresein ve tonometri rutin temel testler; Schirmer damladan once;
 *      floresein icin topikal anestezi gerekmez; boya burun deliginde gorulurse kanal
 *      acik (Jones testi); floresan antikor ornekleri boyamadan once.
 *   3. Merck, The Cornea in Animals (Hamor, 2023) — ulser derinlik siniflari; kedide
 *      herpes sik sebep; yavas iyilesen ulserde herpes suphesi; iyilesme boyayi tutan
 *      alanin kuculmesiyle izlenir; sekestrum basta rose bengal ile, floreseinle cok
 *      zayif boyanabilir; kedide keratotomi onerilmez.
 *   4. Merck, Deep Stromal Corneal Ulcers, Descemetocele, and Iris Prolapse in Small
 *      Animals (Thomasy, UC Davis, 2024) — derinlik buyutme, yarik lamba ve floreseinle;
 *      delinmede Seidel testi.
 *   5. Merck, Disorders of the Cornea in Cats (Gelatt, kedi sahipleri bolumu) — kucuk
 *      ulserleri bulmak icin ozel boya damlasi; herpes ulserleri yavas iyilesir, tekrarlar.
 *   6. Reynolds ve ark. 2026, Vet Ophthalmol 29(5):e70260 — 68 kedide 71 yuzeysel ulser:
 *      gec iyilesme %11,3, sekestrum %28,2, damarlanma %12,7; pamuklu cubukla debridman
 *      sekestrum icin OR 4,1 (ozgun ozet).
 *   7. ABCD FHV kilavuzu (Thiry ve ark. 2009) — dendritik ulser tani koydurucu; virus
 *      izolasyonu ornekleri boyadan once; PCR'da boya sorun degil; kortizon virusu uyandirir.
 *   8. Merck, The Conjunctiva in Animals (Hamor, 2023) — kortizonlu damla ancak korneada
 *      ulser yoksa.
 *
 * ⚠️ ILAC ADI VE DOZ YAZILMIYOR.
 */
export const kedilerdeGozBoyamaTesti: BlogYazi = {
  slug: 'kedilerde-goz-boyama-testi',
  baslik: 'Kedilerde Göz Boyama Testi Nasıl Yapılır? Teşhis ve Tedavi',
  ozet: 'Göz boyama (floresein) testi, korneadaki ülseri birkaç dakikada görünür kılan ağrısız bir muayene. Nasıl yapılır, ne gösterir, tedaviyi nasıl yönlendirir?',
  kapakAlt:
    'Mavi ışıklı göz muayene aletiyle tekir kedinin gözüne bakan veteriner hekim; boyanan gözün yeşil parladığı muayene masası',
  kategori: 'Kedi',
  tarih: '2026-10-04',
  bloklar: [
    { kind: 'paragraf', metin: 'Kedinin gözü sulanıyor, kısılıyor ya da kedi gözünü patisiyle ovuyorsa hekimin ilk yaptığı işlerden biri gözü boyamak oluyor. Bu basit test, korneada çıplak gözle görülemeyecek kadar küçük bir yarayı (ülseri) bile **birkaç dakika içinde görünür kılıyor** ve tedavinin yönünü belirliyor.' },
    { kind: 'paragraf', metin: 'Bu yazı testin ne olduğunu, nasıl yapıldığını, sonucun neyi gösterdiğini ve tedavi sırasında neden tekrarlandığını anlatıyor.' },

    { kind: 'baslik', metin: 'Göz boyama testi nedir?' },
    { kind: 'paragraf', metin: 'Testin adı kullanılan boyadan geliyor: floresein (flöresein diye de yazılıyor). Cornell Üniversitesi Kedi Sağlığı Merkezi’ne göre ülser şüphesi, floresein içeren bir göz damlasıyla doğrulanıyor: ülser varsa boya hasarlı dokuya bağlanıyor ve ülserli alanda açıkça görülen yeşilimsi bir renk bırakıyor. Sağlam kornea yüzeyi ise boyayı tutmuyor.' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı floresein boyamasını göz muayenesinin rutin temel testleri arasında, gözyaşı miktarının ölçümü (Schirmer testi) ve göz içi basıncının ölçümüyle birlikte sayıyor. Kedi sahiplerine yönelik bölümü de aynı şeyi sade bir dille söylüyor: küçük ülserleri saptamak için hekim göze özel bir boyanın damlalarını koyabilir.' },

    { kind: 'baslik', metin: 'Test nasıl yapılıyor?' },
    { kind: 'liste', maddeler: [
      'Önce gözyaşı ölçülüyor; Merck’e göre Schirmer testi göze herhangi bir damla konmadan önce yapılmalı.',
      'Kültür ya da bazı laboratuvar örnekleri gerekiyorsa onlar da boyamadan önce alınıyor.',
      'Boya, ıslatılmış bir şerit ya da damla olarak göze değdiriliyor ve göz kırpıldıkça korneaya yayılıyor.',
      'Fazla boya yıkanıyor; hekim gözü büyütme ve odaklı ışık altında inceliyor.',
      'Merck’e göre floresein boyaması için göze uyuşturucu damla bile gerekmiyor.',
    ] },
    { kind: 'paragraf', metin: 'Sıralamanın bir sebebi var. Merck, floresan antikor yöntemiyle incelenecek kornea ve göz zarı örneklerinin boyamadan önce alınmasını öneriyor, çünkü boya bu testte yanlış pozitif sonuca yol açabiliyor. ABCD’nin herpes kılavuzu da virüs izolasyonu örneklerinin boya kullanılmadan önce alınması gerektiğini belirtiyor; PCR için ise boyanın kullanılmış olması sorun oluşturmuyor.' },

    { kind: 'baslik', metin: 'Sonuç ne gösteriyor?' },
    { kind: 'tablo', basliklar: ['Görülen', 'Anlamı'], satirlar: [
      ['Boya tutulmuyor', 'Kornea yüzeyi sağlam'],
      ['Sınırlı, boya tutan alan', 'Yüzeysel ülser'],
      ['Ağaç dalı gibi ince çizgiler', 'Herpese özgü dendritik ülser'],
      ['Derin, çukur görünen ülser', 'Derin ülser, acil değerlendirme'],
      ['Boya göz içi sıvısıyla seyreliyor', 'Kornea delinmiş olabilir (Seidel testi)'],
      ['Boya burun deliğinde görülüyor', 'Gözyaşı kanalı açık (Jones testi)'],
    ] },
    { kind: 'paragraf', metin: 'Merck kornea ülserlerini derinliğe göre dörde ayırıyor: yüzeysel, derin, Descemet zarına kadar inen (desmetosel) ve delinmiş ülser. Derinliği doğru tahmin etmek için hekim büyütmeyi, yarık lamba ile odaklı ışığı ve floresein boyasını birlikte kullanıyor. Kornea delinmişse göz içi sıvısının sızıp sızmadığı yine floreseinle, Seidel testiyle kontrol ediliyor. Boyanın burun deliğinde görülmesi ise gözyaşı kanalının açık ve çalıştığını gösteriyor; Merck bunu Jones testi olarak tanımlıyor.' },
    { kind: 'paragraf', metin: 'Kedilerde ülserin en sık sebebi herpesvirüs. Cornell’den Thomas Kern en sık sebebin tekrarlayan herpes enfeksiyonu olduğunu söylüyor; Merck de kedilerde yavaş iyileşen ya da tekrarlayan yüzeysel ülserlerde herpesten şüphelenilmesi gerektiğini belirtiyor. ABCD kılavuzu, ağaç dalı biçimindeki ülseri bu enfeksiyon için tanı koydurucu sayıyor. Göz akıntısının sebeplerini ve ne zaman beklemeden gidileceğini [[kedilerde-goz-akintisi|kedilerde göz akıntısı]] yazısında anlattık.' },
    { kind: 'yanilgi', baslik: '"Boya tutmadıysa gözde sorun yoktur" yanılgısı', metin: 'Negatif boyama yalnızca kornea yüzeyinin sağlam olduğunu gösteriyor, gözün sağlıklı olduğunu değil. Konjonktivit, göz içi iltihabı, göz tansiyonu ya da gözyaşı yetersizliği boya tutmadan da ağrı ve kızarıklık yapabiliyor; Merck’in rutin muayeneye gözyaşı ölçümünü ve göz içi basıncını da koymasının sebebi bu. Kediye özgü kornea sekestrumu da başlangıçta floreseinle çok zayıf boyanabiliyor.' },

    { kind: 'baslik', metin: 'Tedavide boyamanın yeri' },
    { kind: 'paragraf', metin: 'Boyama yalnızca teşhis için değil, tedavinin takibi için de kullanılıyor. Merck, kornea iyileşmesinin sık aralıklı muayenelerle izlendiğini ve iyileşmenin, ülserin **boyayı tuttuğu alanın giderek küçülmesiyle** anlaşıldığını belirtiyor. Bu yüzden kontrol muayenesinde göz yeniden boyanıyor; boya artık tutulmuyorsa ülser kapanmış demek.' },
    { kind: 'paragraf', metin: 'Sonuç ilaç seçimini de değiştiriyor. Merck, kortizonlu damlanın ancak korneada ülser yoksa kullanılabileceğini belirtiyor; ABCD de kortizonlu tedavinin herpesvirüsü yeniden harekete geçirebildiğini yazıyor. Cornell, kedinin gözünü kaşıyarak ülseri ağırlaştırmaması için iyileşene kadar koruyucu yaka gerekebileceğini ekliyor.' },
    { kind: 'uyari', metin: 'Bu yazı bilgilendirme amaçlı; teşhis ve tedavinin yerine geçmez. Gözü kısılan, ovalanan ya da bulanık görünen kediye evde damla uygulanmaz: boyalı muayene yapılmadan hangi damlanın güvenli olduğu bilinemez ve kortizonlu bir damla ülserli gözde hasarı ağırlaştırabiliyor.' },

    { kind: 'baslik', metin: 'Kedilerde yüzeysel ülser neden dikkat istiyor?' },
    { kind: 'paragraf', metin: 'Cornell’e göre birçok ülser birkaç gün ile bir hafta içinde kendiliğinden kapanıyor; ama hepsi değil. Derin ülserler korneayı delip görme kaybına, hatta gözün kaybına yol açabiliyor. Kedilerde yüzeysel ülserler bile sorunsuz geçmeyebiliyor.' },
    { kind: 'paragraf', metin: 'Reynolds ve arkadaşlarının 2026’da yayımlanan çalışması 68 kedideki 71 yüzeysel kornea ülserini geriye dönük inceledi. Ülserlerin %11,3’ünde iyileşme gecikti, %28,2’sinde kornea sekestrumu gelişti ve %12,7’sinde iyileşmeden sonra korneada damarlanma kaldı. Ülser yüzeyinin pamuklu çubukla temizlenmesi sekestrum olasılığını yaklaşık dört kat artırdı; yazarlar kedilerde bu işlemin dikkatle uygulanması gerektiğini vurguladı.' },
    { kind: 'paragraf', metin: 'Merck de köpeklerde yavaş iyileşen ülserlerde kullanılan korneaya çentik atma yöntemlerinin (keratotomi), sekestruma yatkınlık yaratabileceği için kedilerde önerilmediğini belirtiyor. Yani kedinin ülseri köpeğinkiyle aynı yolla tedavi edilmiyor; kontrol boyamalarında görülen iyileşme hızı, tedavinin buna göre ayarlanmasını sağlıyor.' },
    { kind: 'yanilgi', baslik: '"Küçük ülser kendiliğinden kapanır" yanılgısı', metin: 'Birçok ülser kendiliğinden kapanıyor, ama hangisinin kapanacağı gözle anlaşılmıyor. 71 ülserlik seride her dokuz ülserden biri geç iyileşti ve her dört ülserden birinden fazlasında sekestrum gelişti. Ülserin gerçekten kapanıp kapanmadığı, kontrol muayenesinde gözün yeniden boyanmasıyla anlaşılıyor.' },
    { kind: 'yanilgi', baslik: '"Boya gözü boyar, zarar verir" yanılgısı', metin: 'Floresein boyaması göze zarar veren bir işlem değil. Merck’e göre bu test için uyuşturucu damla bile gerekmiyor ve boyanın fazlası muayenede yıkanıyor. Testten sonra burunda kısa süre görülen sarı yeşil renk de kaygı verici değil: boyanın gözyaşı kanalından buruna geçtiğini gösteriyor ve Jones testi tam da bu gözleme dayanıyor.' },

    { kind: 'baslik', metin: 'Ne zaman göz boyaması gerekir?' },
    { kind: 'paragraf', metin: 'Cornell’in saydığı ülser belirtileri, boyamanın ne zaman gerektiğini de gösteriyor: gözün çevresinde iltihap, akıntı, korneada bulanıklık ve parlak ışıktan rahatsız olma. Ülserin sebepleri arasında kavgada alınan tırmıklar, içe dönük kirpikler, göz kapağının altına kaçan bir toz parçası, yakıcı kimyasallar ve enfeksiyonlar var.' },
    { kind: 'liste', maddeler: [
      'Kedi gözünü kısıyor ya da sık kırpıyor',
      'Gözünü patisiyle ovuyor ya da yüzünü sürtüyor',
      'Gözde sulanma, bulanıklık ya da beyaz leke var',
      'Korneada kahverengi ya da siyah bir leke belirdi',
      'Kavga, tırmalama ya da göze bir şey kaçma şüphesi var',
      'Herpes geçmişi olan kedide göz şikâyeti tekrarladı',
    ] },

    { kind: 'baslik', metin: 'Özet' },
    { kind: 'paragraf', metin: 'Göz boyama testi, korneadaki yarayı görünür kılan, ağrısız ve birkaç dakikalık bir muayene. Ülserin yerini, büyüklüğünü ve derinliğini gösteriyor, herpese özgü dendritik ülseri ayırt ettiriyor ve kortizonlu bir damlanın güvenli olup olmadığına karar verdiriyor. Tedavi sırasında tekrarlanan boyama ise ülserin gerçekten kapanıp kapanmadığını gösteren en basit kontrol.' },
  ],
  kontrolListesi: [
    'Göz kısılırsa aynı gün randevu alın',
    'Evdeki eski damlayı kullanmayın',
    'Kontrol boyamasını atlamayın',
    'Ülser kapanmadan tedaviyi kesmeyin',
    'Herpes geçmişini hekime söyleyin',
    'Gerekirse koruyucu yaka kullanın',
  ],
  sss: [
    { soru: 'Kedilerde göz boyama testi nedir?', cevap: 'Göz boyama testi, korneadaki yaraları floresein adlı boyayla görünür kılan muayenedir. Cornell’e göre ülser varsa boya hasarlı dokuya bağlanıyor ve ülserli alanda yeşilimsi bir renk bırakıyor; sağlam kornea boyayı tutmuyor. Merck bu testi, gözyaşı ölçümü ve göz içi basıncı ölçümüyle birlikte göz muayenesinin rutin temel testleri arasında sayıyor.' },
    { soru: 'Göz boyama testi acıtır mı?', cevap: 'Hayır, test ağrısız. Merck’e göre floresein boyaması için göze uyuşturucu damla bile gerekmiyor. Boya ıslatılmış bir şeritle ya da damla olarak göze değdiriliyor, fazlası yıkanıyor ve sonuç birkaç dakika içinde görülüyor. Kedinin huzursuzluğu çoğu zaman testten değil, gözdeki ağrının kendisinden kaynaklanıyor.' },
    { soru: 'Boyama testi neden tekrar yapılıyor?', cevap: 'İyileşmeyi izlemek için tekrarlanıyor. Merck, kornea iyileşmesinin ülserin boyayı tuttuğu alanın giderek küçülmesiyle anlaşıldığını belirtiyor. Kontrol muayenesinde göz yeniden boyanıyor; boya tutulmuyorsa ülser kapanmış demek. Kedilerde yüzeysel ülserler bile uzayabildiği ve sekestrum gelişebildiği için bu kontrol, tedavinin ne zaman bırakılacağını belirliyor.' },
    { soru: 'Testten sonra kedimin burnunda sarı yeşil renk görmek normal mi?', cevap: 'Evet, bu beklenen bir durum. Boya gözyaşıyla birlikte gözyaşı kanalından buruna geçiyor. Merck’e göre boyamadan sonra boyanın burun deliğinde görülmesi, gözyaşı kanalının açık ve çalıştığını gösteriyor; hekimler bu gözlemi Jones testi olarak da kullanıyor. Renk kısa sürede kayboluyor.' },
    { soru: 'Boya tutmadıysa göz sağlıklı mıdır?', cevap: 'Hayır, yalnızca kornea yüzeyinin sağlam olduğunu gösterir. Kızarıklık ve ağrı konjonktivit, göz içi iltihabı, göz tansiyonu ya da gözyaşı yetersizliği gibi boyanın göstermediği sebeplerden de kaynaklanabiliyor. Bu yüzden hekim boyamayla birlikte gözyaşı miktarını ve göz içi basıncını da ölçüyor; kediye özgü sekestrumun başlangıcı da floreseinle çok zayıf boyanabiliyor.' },
    { soru: 'Herpes ülseri boyamada nasıl görünür?', cevap: 'Ağaç dalını andıran ince, kollara ayrılan çizgiler hâlinde görünüyor. Bu dendritik ülser, ABCD kılavuzuna göre kedi herpesvirüsü için tanı koydurucu sayılıyor. Merck de kedilerde yavaş iyileşen ya da tekrarlayan yüzeysel ülserlerde herpesten şüphelenilmesi gerektiğini belirtiyor. Bu ülserlerde tedavi virüsü de hesaba katıyor ve kortizonlu damlalardan kaçınılıyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University College of Veterinary Medicine · Cornell Feline Health Center',
      baslik: 'Corneal Ulcers',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/corneal-ulcers',
    },
    {
      kurum: 'Merck Veterinary Manual · University of Florida College of Veterinary Medicine',
      baslik: 'Physical Examination of the Eye in Animals',
      yil: 2023,
      adres: 'https://www.merckvetmanual.com/eye-diseases-and-disorders/ophthalmology/physical-examination-of-the-eye-in-animals',
    },
    {
      kurum: 'Merck Veterinary Manual · University of Florida College of Veterinary Medicine',
      baslik: 'The Cornea in Animals',
      yil: 2023,
      adres: 'https://www.merckvetmanual.com/eye-diseases-and-disorders/ophthalmology/the-cornea-in-animals',
    },
    {
      kurum: 'Merck Veterinary Manual · University of California, Davis School of Veterinary Medicine',
      baslik: 'Deep Stromal Corneal Ulcers, Descemetocele, and Iris Prolapse in Small Animals',
      yil: 2024,
      adres: 'https://www.merckvetmanual.com/emergency-medicine-and-critical-care/ophthalmic-emergencies-in-small-animals/deep-stromal-corneal-ulcers-descemetocele-and-iris-prolapse-in-small-animals',
    },
    {
      kurum: 'Merck Veterinary Manual · University of Florida College of Veterinary Medicine',
      baslik: 'Disorders of the Cornea in Cats',
      yil: 2018,
      adres: 'https://www.merckvetmanual.com/cat-owners/eye-disorders-of-cats/disorders-of-the-cornea-in-cats',
    },
    {
      kurum: 'American College of Veterinary Ophthalmologists · Veterinary Ophthalmology',
      baslik: 'Spontaneous Superficial Ulcerative Keratitis in Client-Owned Cats: Risk Factors for Delayed Healing, Corneal Sequestration, or Corneal Stromal Vascularization',
      yazarlar: 'Reynolds BD, Whittaker CJ, Caruso KA, Smith JS, Weinstein W, McCarthy PG, Irving WM, Maggs DJ',
      dergi: 'Veterinary Ophthalmology',
      yil: 2026,
      kunye: '29(5):e70260',
      doi: '10.1111/vop.70260',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/42669856/',
    },
    {
      kurum: 'European Advisory Board on Cat Diseases (ABCD) · Journal of Feline Medicine and Surgery',
      baslik: 'Feline herpesvirus infection. ABCD guidelines on prevention and management',
      yazarlar: 'Thiry E, Addie D, Belák S, Boucraut-Baralon C, Egberink H, Frymus T, Gruffydd-Jones T, Hartmann K, Hosie MJ, Lloret A, Lutz H, Marsilio F, Pennisi MG, Radford AD, Truyen U, Horzinek MC',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2009,
      kunye: '11(7):547-555',
      doi: '10.1016/j.jfms.2009.05.003',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/19481034/',
    },
    {
      kurum: 'Merck Veterinary Manual · University of Florida College of Veterinary Medicine',
      baslik: 'The Conjunctiva in Animals',
      yil: 2023,
      adres: 'https://www.merckvetmanual.com/eye-diseases-and-disorders/ophthalmology/the-conjunctiva-in-animals',
    },
  ],
};
