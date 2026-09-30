import type { BlogYazi } from './types';

/**
 * KOPEK. Plan no 8. Zamanlama tablosu AAHA 2019 Canine Life Stage Guidelines'in
 * "Textbox 1" ve "Textbox 2" kutularindan (PDF okundu, 30.09.2026); eklem ve kanser
 * riskleri UC Davis'in iki calismasindan (Hart 2020, 35 irk ve karma irk), pyometra
 * orani Egenvall 2001'den. Kunyeler PubMed E-utilities'ten kopyalandi.
 *
 * Okuyucu kalir mi (Ahmet 30.09): cevap ilk paragrafta ve tabloda; bolumler
 * "neden kilo, disinin getirisi, buyuk irkin bedeli, irk farki, karar, kilo, ameliyat"
 * sirasiyla birbirine baglaniyor. Govdede retorik soru yok.
 */
export const kopekNeZamanKisirlastirilmali: BlogYazi = {
  slug: 'kopek-ne-zaman-kisirlastirilmali',
  baslik: 'Köpek Ne Zaman Kısırlaştırılmalı?',
  ozet: 'Küçük ırk köpekte 5-6 ay, büyük ırkta büyüme bitince. Doğru yaşı yetişkin kilo, cinsiyet ve ırk belirliyor; erken ve geç kararın bedeli farklı.',
  kapakAlt:
    'Köpeklerde kısırlaştırma yaşı konulu yazının kapak görseli; ırk büyüklüğüne ve cinsiyete göre zamanlama',
  kategori: 'Köpek',
  tarih: '2026-09-30',
  bloklar: [
    { kind: 'paragraf', metin: 'Kısırlaştırma yaşını belirleyen şey köpeğin **yetişkinlikte ulaşacağı kilodur.** Amerikan Hayvan Hastaneleri Birliği’nin (AAHA) 2019 kılavuzuna göre yetişkinde 20 kilonun altında kalacak köpeklerde erkekler 6 aylıkken, dişiler ilk kızgınlıktan önce, yani 5-6 aylıkken kısırlaştırılabilmektedir. 20 kilo ve üzerine çıkacak büyük ırklarda erkekte büyümenin bitmesi, yaklaşık 9-15 ay bekleniyor; dişide ise 5 ile 15 ay arasındaki zaman veteriner hekimle birlikte seçiliyor.' },
    { kind: 'paragraf', metin: 'Kararı iki riskin dengesi belirliyor. Dişide erken kısırlaştırma meme tümörü riskini belirgin biçimde düşürüyor; büyük ırkta ise büyüme bitmeden yapılan ameliyat eklem sorunlarıyla ilişkili bulunuyor. Aşağıdaki bölümler bu dengeyi köpeğin büyüklüğüne ve cinsiyetine göre açıyor, sonra ameliyat günü ve sonrasına geçiyor.' },

    { kind: 'tablo', basliklar: ['Yetişkin kilo', 'Erkek', 'Dişi'], satirlar: [
      ['20 kg altı (küçük ve orta ırk)', '6 ay', 'İlk kızgınlıktan önce, 5-6 ay'],
      ['20 kg ve üzeri (büyük ırk)', 'Büyüme bitince, yaklaşık 9-15 ay', '5-15 ay arası, hekimle birlikte karar'],
    ] },

    { kind: 'baslik', metin: 'Belirleyici olan yaş değil, yetişkin kilo' },
    { kind: 'paragraf', metin: 'Küçük ve büyük ırklar aynı hızda olgunlaşmıyor. AAHA kılavuzu ilk kızgınlığın ırka göre **4 aylıktan 24 aylığa kadar** uzanan geniş bir aralıkta görülebildiğini ve büyük ırklarda genellikle daha geç geldiğini belirtiyor. Bu yüzden her köpeğe aynı yaşı söylemek, bazı küçük ırklarda ilk kızgınlığı kaçırmak, bazı büyük ırklarda ise büyüme bitmeden ameliyat etmek anlamına gelebiliyor.' },
    { kind: 'paragraf', metin: 'Kılavuz sınırı 45 libre, yani yaklaşık 20 kilo olarak çiziyor. Esas alınan, yavrunun bugünkü kilosu değil yetişkinde ulaşacağı kilodur. Safkan köpekte bu tahmin ırkın standart ölçülerinden, karma ırkta ise anne babanın boyutundan ve yavrunun büyüme hızından yapılıyor; emin olunamayan durumda tahmini veteriner hekim yapıyor.' },

    { kind: 'baslik', metin: 'Dişide erken kısırlaştırmanın getirisi meme tümöründe' },
    { kind: 'paragraf', metin: 'Dişi köpekte zamanlama tartışmasının ana sebebi meme tümörüdür. AAHA kılavuzunun aktardığı verilere göre bir kızgınlık geçirdikten sonra kısırlaştırılan dişilerde meme tümörü görülme sıklığı **yüzde 8**, iki kızgınlıktan sonra **yüzde 26** olarak bildiriliyor. Kılavuz meme tümörünü, zamanlamayla önlenmeye çalışılan diğer hastalıklara göre hem daha sık görülen hem de daha ağır seyreden bir hastalık olarak tanımlıyor.' },
    { kind: 'paragraf', metin: 'İkinci başlık rahim iltihabı, yani pyometradır. İsveç Tarım Bilimleri Üniversitesi’nin 200 binden fazla sigortalı köpeğin kaydıyla yaptığı çalışmada, kısırlaştırılmamış dişilerin ortalama **yüzde 23-24’ünün 10 yaşına kadar** pyometra geçirdiği hesaplandı; bu oran ırka göre yüzde 10 ile 54 arasında değişiyor.' },
    { kind: 'paragraf', metin: 'Kısırlaştırılmamış bir dişide kızgınlıktan sonraki haftalarda halsizlik, iştahsızlık, çok su içme ya da vajinal akıntı görülürse bu, vakit kaybetmeden veteriner hekime ulaşılması gereken bir tablodur.' },

    { kind: 'yanilgi', baslik: '"Dişi köpek bir kez doğurmalı" yanılgısı', metin: 'Bir kez doğurmanın köpeğe sağlık açısından gösterilmiş bir getirisi yoktur. Tersine, doğum için beklenen her kızgınlık döngüsü meme tümörü riskini artırıyor. AAHA da üretim amacı olmayan bütün köpeklerin kısırlaştırılmasını öneriyor.' },

    { kind: 'baslik', metin: 'Büyük ırkta erken ameliyatın bedeli eklemlerde' },
    { kind: 'paragraf', metin: 'Kaliforniya Üniversitesi Davis Veteriner Fakültesi’nden Hart ve arkadaşlarının karma ırk köpeklerle yaptığı çalışma, yetişkinde 20 kilo ve üzerine çıkan köpeklerde **1 yaşından önce** kısırlaştırmanın kalça displazisi, ön çapraz bağ yırtığı ve dirsek displazisi gibi eklem sorunlarının riskini, kısırlaştırılmamış köpeklere göre çoğunlukla **3 kata kadar** artırdığını gösterdi. Aynı çalışmada hiçbir kilo grubunda kısırlaştırmayla ilişkili bir kanser artışı görülmedi.' },
    { kind: 'paragraf', metin: 'Aynı ekibin daha önce golden retriever, labrador retriever ve Alman çoban köpeği üzerinde yaptığı çalışmalarda da 1 yaşından önce kısırlaştırma eklem sorunlarını 2 ila 4 kat artırmıştı ve artış özellikle **6 aydan önce** yapılan ameliyatlarda belirgindi. 20 kilo altındaki gruplarda ise eklem riski için benzer bir artış çıkmadı.' },
    { kind: 'paragraf', metin: 'Bu çalışmalar bir ilişki gösteriyor, neden sonucu değil. AAHA kılavuzu bu ayrımı özellikle vurguluyor: kısırlaştırma literatürünün büyük kısmı iki durumun birlikte görüldüğünü belgeliyor ama birinin diğerine yol açtığını kanıtlamıyor. Karar bu yüzden tek bir sayıya değil, köpeğin kendi risk tablosuna bakılarak veriliyor.' },

    { kind: 'yanilgi', baslik: '"Erken kısırlaştırma her köpeğe zarar verir" yanılgısı', metin: 'UC Davis çalışmalarında eklem riskindeki artış büyük ırklarda ve 20 kilonun üzerindeki karma ırklarda görüldü; küçük ırkların çoğunda böyle bir artış çıkmadı. Küçük ırk bir dişide ilk kızgınlıktan önce kısırlaştırma, meme tümörü riskini düşürmenin en etkili yolu olarak öneriliyor.' },

    { kind: 'baslik', metin: 'Irk farkı genel kuralı değiştirebiliyor' },
    { kind: 'paragraf', metin: 'UC Davis’in 35 ırkı ve üç kaniş çeşidini kapsayan çalışması, kısırlaştırmaya karşı hassasiyetin ırktan ırka **büyük farklar** gösterdiğini ortaya koydu. Küçük ırklardan yalnız Boston terrier ve shih tzu’da kısırlaştırmayla ilişkili anlamlı bir kanser artışı görüldü. Araştırmacılara göre çoğu durumda eklem ya da kanser riskini artırmayan bir kısırlaştırma yaşı seçilebiliyor; bu yüzden ırk ve cinsiyete göre ayrı yaş önerileri yayımladılar.' },
    { kind: 'paragraf', metin: 'AAHA kılavuzu da bir ırkta bulunan sonucun bütün ırklara genellenmemesi gerektiğini belirtiyor. Safkan bir köpekte karar o ırka ait veriye bakılarak veriliyor; karma ırkta ise yetişkin kilo en iyi rehberdir.' },

    { kind: 'baslik', metin: 'Karar dört bilgiyle netleşiyor' },
    { kind: 'paragraf', metin: 'AAHA, özellikle yetişkinde 20 kilonun üzerine çıkacak dişilerde zamanlamanın hekimin değerlendirmesi ve sahibin ayrıntılı bilgilendirilmesiyle kişiye özel belirlenmesini öneriyor. Görüşmede masaya gelen bilgiler şunlar:' },
    { kind: 'liste', maddeler: [
      'Köpeğin yetişkinde ulaşacağı tahmini kilo',
      'Cinsiyeti ve dişide ilk kızgınlığın beklenen zamanı',
      'Irkın bilinen riskleri: eklem sorunları ve belirli kanserler',
      'İstenmeyen yavru riski: bahçeye serbest çıkıyor mu, başka köpeklerle teması var mı',
    ] },
    { kind: 'paragraf', metin: 'Küçük ırk bir dişide bu dört bilgi genellikle aynı yöne, ilk kızgınlıktan önceye işaret ediyor. Büyük ırk bir dişide ise meme tümörü ile eklem riski ters yönlere çektiği için tarih, köpeğin gelişimi izlenerek belirleniyor.' },

    { kind: 'baslik', metin: 'Kısırlaştırma kilo aldırmaz, mama miktarı aldırır' },
    { kind: 'paragraf', metin: 'Kısırlaştırmadan sonra enerji ihtiyacı düşüyor; mama miktarı aynı kalırsa kilo alımı başlıyor. AAHA kılavuzu bu riskin kısırlaştırma kararında sahibe anlatılmasını öneriyor ve ideal kilosunu ömür boyu koruyan labradorların **ortalama yüzde 15 daha uzun** yaşadığını gösteren çalışmayı aktarıyor.' },
    { kind: 'paragraf', metin: 'Ameliyattan sonraki haftalarda kilo ve vücut kondisyonu izlenerek porsiyon yeniden ayarlanıyor. Terazi olmadan evde yapılabilecek ölçüm [[kopegim-fazla-kilolu-mu|kaburga testi yazısında]] anlatılıyor.' },

    { kind: 'yanilgi', baslik: '"Kısırlaştırılan köpek mutlaka şişmanlar" yanılgısı', metin: 'Şişmanlatan ameliyat değil, güncellenmeyen mama miktarıdır. Enerji ihtiyacı düşen köpeğe eski porsiyon verilmeye devam edildiğinde kilo alınıyor; porsiyon ayarlanıp kilo takip edildiğinde kilo alımı kaçınılmaz değildir.' },

    { kind: 'baslik', metin: 'Ameliyat günü ve iyileşme' },
    { kind: 'paragraf', metin: 'Kısırlaştırma genel anestezi altında yapılıyor. Anestezi öncesinde klinikler çoğunlukla kan tahlili istiyor; tahlilin neyi gösterdiği [[evcil-hayvanlarda-kan-tahlili|evcil hayvanlarda kan tahlili yazısında]] anlatılıyor. Ameliyat öncesi aç kalma süresini ve aşıların güncel olup olmadığını ameliyatı yapacak hekim kontrol ediyor; aşı zamanlaması için [[kopek-asi-takvimi|köpek aşı takvimine]] bakılabilir.' },
    { kind: 'paragraf', metin: 'Ameliyattan sonra köpeğin dikişi yalamaması için koruyucu yaka ya da ameliyat giysisi kullanılıyor. Dikiş kontrolü genellikle iki hafta civarında yapılıyor ve bu sürede koşma, zıplama ve banyo sınırlanıyor. Dikiş yerinde şişlik, akıntı ya da açılma görülmesi, ameliyatı yapan hekime haber verilmesi gereken bir durumdur.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Kısırlaştırma zamanı köpeğin ırkına, yetişkin kilosuna, cinsiyetine ve sağlık durumuna göre veteriner hekim tarafından belirlenir.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Her köpek 6 aylıkken kısırlaştırılır', 'Yaş yetişkin kiloya ve cinsiyete göre değişiyor'],
      ['Dişi bir kez doğurmalı', 'Gösterilmiş bir getirisi yok; her kızgınlık riski artırıyor'],
      ['Erken kısırlaştırma her köpeğe zararlı', 'Eklem riski artışı büyük ırklarda görülüyor'],
      ['Kısırlaştırılan köpek mutlaka şişmanlar', 'Porsiyon ayarlanırsa kaçınılmaz değil'],
      ['Çalışmalar kesin neden gösteriyor', 'Çoğu çalışma ilişki gösteriyor, neden sonucu değil'],
    ] },
    { kind: 'paragraf', metin: 'Kısırlaştırma ömrü tek başına belirlemiyor ama kilo, hastalık riskleri ve bakım düzeniyle birlikte tabloyu değiştiriyor. Ömrü etkileyen diğer başlıklar [[kopekler-kac-yil-yasar|köpekler kaç yıl yaşar]] yazısında bir arada; kediniz de varsa aynı sorunun kedilerdeki cevabı [[kediler-ne-zaman-kisirlastirilmali|kediler ne zaman kısırlaştırılmalı]] yazısında.' },
  ],
  kontrolListesi: [
    'Yetişkin kilosu tahmin edildi mi?',
    'Kızgınlık takibi yapılıyor mu?',
    'Irka özgü riskler konuşuldu mu?',
    'Aşılar güncel mi?',
    'Kan tahlili planlandı mı?',
    'Porsiyon yeniden hesaplandı mı?',
  ],
  sss: [
    { soru: 'Köpekler kaç aylıkken kısırlaştırılır?', cevap: 'Yetişkinde 20 kilonun altında kalacak köpeklerde erkekler 6 aylıkken, dişiler ilk kızgınlıktan önce, 5-6 aylıkken kısırlaştırılabilmektedir. 20 kilo ve üzerine çıkacak büyük ırklarda erkekte büyümenin bitmesi, yaklaşık 9-15 ay bekleniyor; dişide 5 ile 15 ay arasındaki zaman veteriner hekimle birlikte seçiliyor.' },
    { soru: 'Dişi köpek ilk kızgınlıktan önce kısırlaştırılmalı mı?', cevap: 'Küçük ırk dişilerde ilk kızgınlıktan önce kısırlaştırma öneriliyor, çünkü meme tümörü riskini en çok bu zamanlama düşürüyor. AAHA’nın aktardığı verilere göre bir kızgınlıktan sonra kısırlaştırılan dişilerde meme tümörü sıklığı yüzde 8, iki kızgınlıktan sonra yüzde 26. Büyük ırk dişilerde karar eklem riskleriyle birlikte tartılıyor.' },
    { soru: 'Büyük ırk köpek ne zaman kısırlaştırılır?', cevap: 'Yetişkinde 20 kilo ve üzerine çıkacak erkek köpeklerde büyümenin bitmesi, yani yaklaşık 9-15 aylık olması bekleniyor. UC Davis çalışmalarında bu gruptaki köpeklerde 1 yaşından önce kısırlaştırmanın eklem sorunlarının riskini çoğunlukla 3 kata kadar artırdığı görüldü. Dişilerde 5-15 ay arası zaman meme tümörü riskiyle birlikte değerlendiriliyor.' },
    { soru: 'Kısırlaştırılan köpek kilo alır mı?', cevap: 'Kısırlaştırmadan sonra enerji ihtiyacı düştüğü için mama miktarı aynı kalırsa kilo alımı başlıyor. Porsiyon yeniden ayarlanıp kilo ve vücut kondisyonu takip edildiğinde kilo alımı kaçınılmaz değildir. AAHA kılavuzu, ideal kilosunu koruyan labradorların ortalama yüzde 15 daha uzun yaşadığını gösteren çalışmayı aktarıyor.' },
    { soru: 'Kısırlaştırılmayan dişi köpekte hangi riskler var?', cevap: 'En bilinen iki risk meme tümörü ve rahim iltihabıdır (pyometra). İsveç’teki büyük bir sigorta verisi çalışmasında kısırlaştırılmamış dişilerin ortalama yüzde 23-24’ünün 10 yaşına kadar pyometra geçirdiği hesaplandı. Her kızgınlık döngüsü meme tümörü riskini de artırıyor; istenmeyen yavru ihtimali ise ayrı bir konudur.' },
    { soru: 'Kısırlaştırma sonrası iyileşme ne kadar sürer?', cevap: 'Dikiş kontrolü genellikle iki hafta civarında yapılıyor ve bu sürede koşma, zıplama ve banyo sınırlanıyor. Köpeğin dikişi yalamasını önlemek için koruyucu yaka ya da ameliyat giysisi kullanılıyor. Dikiş yerinde şişlik, akıntı ya da açılma görülürse ameliyatı yapan hekime haber verilmesi gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'American Animal Hospital Association (AAHA)',
      yazarlar: 'Creevy KE, Grady J, Little SE, Moore GE, Strickler BG, Thompson S, Webb JA',
      baslik: '2019 AAHA Canine Life Stage Guidelines',
      dergi: 'Journal of the American Animal Hospital Association',
      yil: 2019,
      kunye: '55(6):267-290',
      doi: '10.5326/JAAHA-MS-6999',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/31622127/',
    },
    {
      kurum: 'University of California, Davis, School of Veterinary Medicine',
      yazarlar: 'Hart BL, Hart LA, Thigpen AP, Willits NH',
      baslik: 'Assisting Decision-Making on Age of Neutering for 35 Breeds of Dogs: Associated Joint Disorders, Cancers, and Urinary Incontinence',
      dergi: 'Frontiers in Veterinary Science',
      yil: 2020,
      kunye: '7:388',
      doi: '10.3389/fvets.2020.00388',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/32733924/',
    },
    {
      kurum: 'University of California, Davis, School of Veterinary Medicine',
      yazarlar: 'Hart BL, Hart LA, Thigpen AP, Willits NH',
      baslik: 'Assisting Decision-Making on Age of Neutering for Mixed Breed Dogs of Five Weight Categories: Associated Joint Disorders and Cancers',
      dergi: 'Frontiers in Veterinary Science',
      yil: 2020,
      kunye: '7:472',
      doi: '10.3389/fvets.2020.00472',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/32851043/',
    },
    {
      kurum: 'Swedish University of Agricultural Sciences (SLU)',
      yazarlar: 'Egenvall A, Hagman R, Bonnett BN, Hedhammar A, Olson P, Lagerstedt AS',
      baslik: 'Breed risk of pyometra in insured dogs in Sweden',
      dergi: 'Journal of Veterinary Internal Medicine',
      yil: 2001,
      kunye: '15(6):530-538',
      doi: '10.1892/0891-6640(2001)015<0530:bropii>2.3.co;2',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/11817057/',
    },
  ],
};
