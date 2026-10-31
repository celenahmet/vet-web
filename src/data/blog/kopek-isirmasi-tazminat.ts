import type { BlogYazi } from './types';

export const kopekIsirmasiTazminat: BlogYazi = {
  slug: 'kopek-isirmasi-tazminat',
  baslik: 'Köpek Isırırsa Sahibi Sorumlu mu? Tazminat ve Ceza',
  ozet: 'Köpek ısırırsa bakımını üstlenen kişi zararı gidermekle yükümlü; gerekli özeni ispatlarsa kurtulur. Tazminat kalemleri, ceza ve süreler bu yazıda.',
  kapakAlt:
    'Parkta tasması bağlı halde sahibinin yanında duran köpek, arkada bank',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Evet, köpek birini ısırırsa köpeğin bakımını ve yönetimini üstlenen kişi, verdiği zararı gidermekle yükümlü.** Türk Borçlar Kanunu\'nun 67. maddesi bunu açıkça söylüyor ve sorumluluktan kurtulmanın tek yolunu da gösteriyor: zararın doğmasını engellemek için gerekli özeni gösterdiğini ispat etmek. Köpek bir insanı yaraladıysa, olayın koşullarına göre Türk Ceza Kanunu da devreye girebiliyor.' },
    { kind: 'paragraf', metin: 'Aşağıda hukuki sorumluluğu, hangi zararların tazmin edildiğini, cezai yaptırımları ve kaçırılmaması gereken süreleri kanun metinlerine dayanarak topladık. Hem ısırılan kişinin hem de köpek sahibinin bilmesi gereken bilgiler aynı yerde.' },

    { kind: 'tablo', basliklar: ['Soru', 'Kısa cevap', 'Dayanak'], satirlar: [
      ['Zarardan kim sorumlu?', 'Köpeğin bakımını ve yönetimini sürekli ya da geçici üstlenen kişi', 'TBK 67'],
      ['Sahip nasıl kurtulur?', 'Gerekli özeni gösterdiğini ispat ederse', 'TBK 67'],
      ['Hangi zararlar istenir?', 'Tedavi gideri, kazanç kaybı, çalışma gücü kaybı, manevi tazminat', 'TBK 54, 56'],
      ['Ceza var mı?', 'Tehlikeli serbest bırakma ve taksirle yaralama suç olabilir', 'TCK 177, 89'],
      ['Tazminat süresi?', 'Öğrenmeden itibaren 2 yıl, her hâlde 10 yıl', 'TBK 72'],
      ['Şikâyet süresi?', 'Şikâyete bağlı suçta 6 ay', 'TCK 73'],
    ]},

    { kind: 'baslik', metin: 'Köpek ısırırsa sorumlu kim?' },
    { kind: 'paragraf', metin: 'Borçlar Kanunu\'nun 67. maddesi sorumluluğu köpeğin kâğıt üzerindeki sahibine değil, **köpeğin bakımını ve yönetimini sürekli veya geçici olarak üstlenen kişiye** bağlıyor. Yani köpeği komşusuna emanet eden kişi, köpeği gezdirmeye çıkaran arkadaş ya da tatil süresince köpeğe bakan biri de bu kapsama girebiliyor. Ölçü, olay anında hayvanın kimin denetiminde olduğu.' },
    { kind: 'paragraf', metin: '5199 sayılı Hayvanları Koruma Kanunu da aynı yönde. Kanunun 5. maddesine göre hayvan sahipleri, hayvanlarından insanlara verilebilecek zarar ve rahatsızlıkları önleyici tedbirleri almakla yükümlü; zamanında ve yeterli tedbir alınmamasından kaynaklanan zararları tazmin etmek zorunda.' },
    { kind: 'yanilgi', baslik: '"Köpek benim değildi, ben yalnızca gezdiriyordum"', metin: 'Madde, hayvanın yönetimini geçici olarak üstlenen kişiyi de sayıyor. Gezdirme sırasında köpeğin denetimi sizdeyse, köpeğin kayıtlı sahibi olmamanız sorumluluk sorusunu kendiliğinden kapatmıyor.' },

    { kind: 'baslik', metin: 'Sahip sorumluluktan nasıl kurtulur?' },
    { kind: 'paragraf', metin: 'Kanunun dili burada önemli: zarar görenden sahibin kusurunu ispatlaması istenmiyor. Tersine, **hayvan bulunduran, zararın doğmasını engellemek için gerekli özeni gösterdiğini ispat ederse sorumlu olmuyor.** İspat yükü köpeği bulunduranda.' },
    { kind: 'paragraf', metin: 'Gerekli özenin ne olduğu her olayda ayrıca değerlendiriliyor. Uygulama yönetmeliği, sahiplerden halka açık yerlerde köpeklerini **tasma ile kontrol altında** dolaştırmalarını istiyor; bu, özenin en temel göstergelerinden biri. Tasma, ağızlık ve gezdirme kurallarının ayrıntısını [[kopek-gezdirme-kurallari|köpek gezdirme kuralları]] yazımızda anlattık. Bakanlıkça tehlike arz eden olarak belirlenen ırklardan kayıt altındakiler ise kayıt belgesiz, ağızlıksız ve tasmasız dolaştırılamıyor; bu ırkların listesi [[yasakli-kopek-irklari|yasaklı köpek ırkları]] yazısında.' },
    { kind: 'paragraf', metin: 'Madde bir durumu daha ayrıca düzenliyor: köpek bir başkası ya da başkasına ait bir hayvan tarafından ürkütüldüyse, zararı karşılayan kişinin bu kişilere **rücu hakkı** saklı. Yani zarar önce köpeği bulunduran kişiden istenebiliyor, o da ödediğini köpeği ürküten kişiden talep edebiliyor.' },
    { kind: 'yanilgi', baslik: '"Köpek tasmalıydı, sahibi hiçbir şekilde sorumlu tutulamaz"', metin: 'Kanun tek bir önlemi kurtuluş sebebi saymıyor; ölçü, zararın doğmasını engellemek için gerekli özenin gösterilip gösterilmediği. Tasma bu özenin önemli bir parçası, ama olayın bütün koşulları birlikte değerlendiriliyor.' },

    { kind: 'baslik', metin: 'Hangi zararlar tazmin ediliyor?' },
    { kind: 'paragraf', metin: 'Borçlar Kanunu\'nun 54. maddesi bedensel zararları dört başlıkta sayıyor:' },
    { kind: 'liste', maddeler: [
      '**Tedavi giderleri:** Muayene, tedavi ve iyileşme sürecindeki masraflar.',
      '**Kazanç kaybı:** Yaralanma yüzünden çalışılamayan dönemde kaybedilen gelir.',
      '**Çalışma gücü kaybı:** Çalışma gücünün azalmasından ya da yitirilmesinden doğan kayıplar.',
      '**Ekonomik geleceğin sarsılması:** Yaralanmanın kişinin ileriki ekonomik durumuna etkisi.',
    ]},
    { kind: 'paragraf', metin: 'Bunlara ek olarak 56. madde, bedensel bütünlüğü zedelenen kişiye hâkimin olayın özelliklerine göre **manevi tazminat** ödenmesine karar verebileceğini söylüyor. Ağır bedensel zarar ya da ölüm hâlinde zarar görenin veya ölenin yakınları da manevi tazminat isteyebiliyor. Ölüm hâlinde cenaze giderleri ve destekten yoksun kalanların kayıpları 53. maddede ayrıca sayılıyor.' },
    { kind: 'paragraf', metin: 'Tazminatın tutarını kanun bir tabloya bağlamıyor. 51. maddeye göre hâkim, tazminatın kapsamını durumun gereğini ve özellikle kusurun ağırlığını göz önüne alarak belirliyor. 52. madde ise zarar görenin zararın doğmasında ya da artmasında etkili olduğu durumlarda hâkimin tazminatı **indirebileceğini veya tamamen kaldırabileceğini** öngörüyor.' },

    { kind: 'baslik', metin: 'Köpek ısırmasının cezası var mı?' },
    { kind: 'paragraf', metin: 'Tazminat hukuki sorumluluk; bunun yanında iki ayrı suç tanımı gündeme gelebiliyor.' },
    { kind: 'paragraf', metin: '**Tehlikeli şekilde serbest bırakma:** Türk Ceza Kanunu\'nun 177. maddesi, gözetimindeki hayvanı başkalarının hayatı veya sağlığı bakımından tehlikeli olabilecek şekilde serbest bırakan ya da kontrol altına alınmasında ihmal gösteren kişiye **altı aya kadar hapis veya adli para cezası** öngörüyor. Bu suç için birinin ısırılmış olması şart değil; tehlike yaratılması yetiyor.' },
    { kind: 'paragraf', metin: '**Taksirle yaralama:** Köpek birini yaraladıysa 89. madde gündeme gelebiliyor. Taksirle başkasının vücuduna acı veren ya da sağlığının bozulmasına neden olan kişi için ceza, 24 Aralık 2025 tarihli 7571 sayılı kanunla yapılan değişiklikten bu yana **dört aydan iki yıla kadar hapis veya adli para cezası.** Yaralanma yüzde sabit ize ya da kemik kırılmasına yol açtıysa ceza yarı oranında artırılıyor. Basit yaralamada soruşturma **şikâyete bağlı.**' },

    { kind: 'baslik', metin: 'Tazminat ve şikâyet için süreler' },
    { kind: 'paragraf', metin: 'Süreler kaçırılırsa hak kaybı yaşanabiliyor. Borçlar Kanunu\'nun 72. maddesine göre tazminat istemi, zarar görenin **zararı ve tazminat yükümlüsünü öğrendiği tarihten itibaren iki yıl** ve her hâlde **fiilin işlendiği tarihten itibaren on yıl** içinde zamanaşımına uğruyor. Tazminat, ceza kanunlarının daha uzun zamanaşımı öngördüğü bir suçtan doğmuşsa o daha uzun süre uygulanıyor.' },
    { kind: 'paragraf', metin: 'Ceza tarafında süre daha kısa. Türk Ceza Kanunu\'nun 73. maddesine göre şikâyete bağlı bir suçta yetkili kişi **altı ay içinde** şikâyette bulunmazsa soruşturma ve kovuşturma yapılamıyor. Bu süre, şikâyet hakkı olan kişinin fiili ve failin kim olduğunu öğrendiği günden başlıyor.' },

    { kind: 'baslik', metin: 'Isırıktan sonra ilk adımlar' },
    { kind: 'uyari', metin: 'Bir köpek ısırdıysa önce sağlık gelir: vakit kaybetmeden bir sağlık kuruluşuna başvurmak gerekiyor. Kuduz riskini ve aşı gerekip gerekmediğini sağlık kuruluşu değerlendirir. Yaranın ilk bakımı için [[kedi-tirmalamasi-kuduz-yapar-mi|kedi tırmalaması ve köpek ısırması]] yazımıza bakabilirsiniz.' },
    { kind: 'paragraf', metin: 'Sağlık Bakanlığı, kuduz riskli temasa neden olan kedi ve köpeklerde **hayvanın 10 gün gözlemini** öneriyor. Bu yüzden ısıran köpeğin sahibine ulaşabilmek, köpeğin aşı bilgisini öğrenmek ve köpeğin bu süre boyunca izlenebilmesi hem sağlık hem hukuk açısından önem taşıyor.' },
    { kind: 'paragraf', metin: 'Hak arama sürecinde ise olayın belgelenmesi işe yarıyor. Önerilen başlıca adımlar şunlar:' },
    { kind: 'liste', maddeler: [
      '**Sağlık kaydı:** Başvurulan sağlık kuruluşundan alınan rapor ve tedavi belgeleri, zararın ilk kanıtı.',
      '**Köpek ve sahip bilgisi:** Köpeğin sahibinin ya da o an köpeği yöneten kişinin adı ve iletişim bilgisi.',
      '**Tanık ve görüntü:** Olayı görenlerin iletişim bilgisi, varsa çevredeki kamera kayıtları ve yaranın fotoğrafları.',
      '**Masraf belgeleri:** Tedavi faturaları ve çalışılamayan günlere ait belgeler; 54. maddedeki kalemlerin dayanağı bunlar.',
    ]},
    { kind: 'paragraf', metin: 'Sokak hayvanı ısırmalarında sorumlu, yukarıdaki anlamda bir "hayvan bulunduran" olmayabiliyor; bu durumların hukuki değerlendirmesi farklı ve bu yazının kapsamı dışında.' },

    { kind: 'baslik', metin: 'Köpek sahibi riski nasıl azaltır?' },
    { kind: 'paragraf', metin: 'Sorumluluğun ölçüsü özen olduğuna göre, en iyi koruma ısırmanın hiç yaşanmaması. 2022\'de Injury Prevention dergisinde yayımlanan ve 43 çalışmayı inceleyen sistematik derleme, tasma kuralları, sahipsiz köpek kontrolü ve yaptırımlar gibi **yasal köpek kontrolü önlemlerinin ısırma oranlarını azaltabildiğini** gösteriyor. Aynı derlemeye göre ırka özgü düzenlemelerin etkisi daha sınırlı kaldı; yazarlar kısıtlamaların yalnız ırka göre değil bütün köpekler için yapılmasını öneriyor.' },
    { kind: 'paragraf', metin: 'Uygulamada bu, köpeği halka açık yerde tasma ile kontrol altında tutmak, kalabalıkta ve çocukların yakınında köpeğin davranışını izlemek ve kuduz aşısını [[kopek-asi-takvimi|köpek aşı takvimine]] göre aksatmamak anlamına geliyor. Köpeğin davranışında ani bir değişiklik, huzursuzluk ya da saldırganlık fark edilirse veteriner hekime danışmak önerilir; davranış değişikliğinin altında sağlık sorunu olup olmadığını ancak hekim değerlendirebilir.' },
    { kind: 'uyari', metin: 'Bu yazı genel bilgilendirmedir, hukuki görüş yerine geçmez. Somut bir olayda haklarınız ve yükümlülükleriniz için bir avukattan destek almanız önerilir.' },
  ],
  sss: [
    { soru: 'Köpeğim birini ısırırsa tazminat öder miyim?', cevap: 'Borçlar Kanunu\'nun 67. maddesine göre köpeğin bakımını ve yönetimini üstlenen kişi zararı gidermekle yükümlü. Zararın doğmasını engellemek için gerekli özeni gösterdiğinizi ispat ederseniz sorumlu olmuyorsunuz; ispat yükü sizde.' },
    { soru: 'Köpek ısırmasında manevi tazminat istenebilir mi?', cevap: 'Evet, istenebilir. Borçlar Kanunu\'nun 56. maddesine göre bedensel bütünlüğü zedelenen kişiye hâkim, olayın özelliklerine göre uygun bir miktar manevi tazminat ödenmesine karar verebiliyor. Ağır bedensel zararda yakınlar da isteyebiliyor.' },
    { soru: 'Köpek ısırması için kaç yıl içinde dava açılır?', cevap: 'Tazminat istemi, zararı ve tazminat yükümlüsünü öğrenmeden itibaren iki yıl, her hâlde olaydan itibaren on yıl içinde zamanaşımına uğruyor. Olay daha uzun zamanaşımlı bir suç oluşturuyorsa o süre uygulanıyor.' },
    { soru: 'Köpek ısırması suç mu?', cevap: 'Koşullara göre suç olabiliyor. Köpeği başkaları için tehlikeli şekilde serbest bırakmak ya da kontrol altına almada ihmal göstermek TCK 177\'ye göre suç. Köpek birini yaraladıysa TCK 89\'daki taksirle yaralama da gündeme gelebiliyor.' },
    { soru: 'Köpek ısırması şikâyeti için süre var mı?', cevap: 'Evet, şikâyete bağlı suçlarda süre altı ay. Basit taksirle yaralama şikâyete bağlı ve TCK 73\'e göre bu süre, şikâyet hakkı olan kişinin fiili ve failin kim olduğunu öğrendiği günden başlıyor.' },
    { soru: 'Arkadaşımın köpeğini gezdirirken ısırırsa kim sorumlu?', cevap: 'Olay anında köpeğin yönetimi sizdeyse siz de sorumlu tutulabilirsiniz. Borçlar Kanunu\'nun 67. maddesi, hayvanın bakımını ve yönetimini geçici olarak üstlenen kişiyi de kapsıyor; ölçü köpeğin kimin denetiminde olduğu.' },
    { soru: 'Isıran köpek neden gözlem altında tutulur?', cevap: 'Kuduz riskini değerlendirmek için. Sağlık Bakanlığı, kuduz riskli temasa neden olan kedi ve köpeklerde hayvanın 10 gün gözlemini öneriyor. Bu yüzden ısıran köpeğin sahibine ulaşılabilmesi ve aşı bilgisinin paylaşılması önem taşıyor.' },
  ],
  kontrolListesi: [
    'Köpek tasmayla kontrol altında mı?',
    'Kuduz aşısı güncel mi?',
    'Aşı kartı ulaşılabilir yerde mi?',
    'Isırıkta sağlık kaydı alındı mı?',
    'Tanık ve görüntü kaydı var mı?',
    'Süreler takvime yazıldı mı?',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '6098 sayılı Türk Borçlar Kanunu (madde 51, 52, 53, 54, 56, 67, 72)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=6098&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5237 sayılı Türk Ceza Kanunu (madde 73, 89, 177)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5237&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu (madde 5)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği (13 Aralık 2024, sayı 32751)',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/12/20241213-3.htm',
    },
    {
      kurum: 'T.C. Sağlık Bakanlığı Halk Sağlığı Genel Müdürlüğü',
      baslik: 'Kuduz Sıkça Sorulan Sorular',
      adres: 'https://hsgm.saglik.gov.tr/depo/birimler/zoonotik-ve-vektorel-hastaliklar-db/Sikca_Sorulan_Sorular/Kuduz.pdf',
    },
    {
      kurum: 'University of Auckland',
      baslik: 'Systematic review of dog bite prevention strategies.',
      yazarlar: 'Duncan-Sutherland N, Lissaman AC, Shepherd M, Kool B',
      dergi: 'Injury Prevention',
      yil: 2022,
      kunye: '28(3):288-297',
      doi: '10.1136/injuryprev-2021-044477',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/35393286/',
    },
  ],
};
