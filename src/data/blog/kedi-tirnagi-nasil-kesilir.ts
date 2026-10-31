import type { BlogYazi } from './types';

export const kediTirnagiNasilKesilir: BlogYazi = {
  slug: 'kedi-tirnagi-nasil-kesilir',
  baslik: 'Kedi Tırnağı Nasıl Kesilir?',
  ozet: 'Çoğu kedi tırnağını tırmalayarak kendisi kısaltır, yaşlı kedilerde ise kesim gerekebilir. Pembe kısma değmeden adım adım kesimi anlattık.',
  kapakAlt:
    'Kucaktaki kedinin patisindeki tırnağı makasla kesen eller',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kedi tırnağı, kedi sakinken pati hafifçe sıkılıp tırnak dışarı çıkarıldıktan sonra yalnızca ucundaki saydam kısım kedi tırnak makasıyla alınarak kesilir; içindeki pembe damarlı bölgeye kesinlikle değilmez.** Ama önce şunu bilmek gerekiyor: International Cat Care, çoğu kedinin tırmalayarak tırnaklarını kendi başına uygun uzunlukta tuttuğunu ve tırnak kesimine çoğu zaman gerek olmadığını belirtiyor. Kesim en çok, eklemleri ağrıdığı için artık rahat tırmalayamayan yaşlı kedilerde gündeme geliyor.' },
    { kind: 'paragraf', metin: 'Aşağıda tırnağın kesilmesi gerektiğini gösteren işaretleri, tırnağın yapısını, adım adım kesimi, kediyi buna nasıl alıştırabileceğinizi, kaynakların sıklık konusundaki farklı görüşlerini ve tırnak kılıfı ile tırnak sökme hakkında bilinmesi gerekenleri anlatıyoruz.' },

    { kind: 'baslik', metin: 'Her kedinin tırnağının kesilmesi gerekir mi?' },
    { kind: 'paragraf', metin: 'Kedi tırnakları sürekli uzar, ama kedi tırmalayarak hem tırnağını bileyler hem de eski tırnak kılıfını atar. International Cat Care bu yüzden çoğu kedinin tırnak kesimine ihtiyaç duymadığını, düzenli kesimin de önerilmediğini söylüyor: kediler tırmanmak, avlanmak, oynamak ve kendini savunmak için sağlıklı ve sivri tırnaklara ihtiyaç duyuyor.' },
    { kind: 'paragraf', metin: 'Cornell Üniversitesi Kedi Sağlığı Merkezi de tırmalamayı büyük ölçüde bir işaretleme davranışı olarak tanımlıyor: kedi patisindeki bezlerden koku bırakıyor ve aynı anda tırnağın saydam dış kılıfını söküyor. Yani evde uygun bir tırmalama alanı olan sağlıklı bir yetişkin kedide tırnak bakımının büyük kısmını kedinin kendisi yapıyor. Tırmalamanın öteki işlevleri için [[kediler-neden-yogurma-yapar|kediler neden yoğurma yapar]] yazısındaki karşılaştırmaya da bakabilirsiniz.' },
    { kind: 'yanilgi', baslik: '"Her kedinin tırnağı düzenli olarak kesilmeli"', metin: 'International Cat Care, tırnaklarını tırmalayarak kendisi kısaltabilen kedilerde düzenli kesimi önermiyor. Kesim, tırnaklar takılmaya başladığında ya da kedi tırmalama alanını kullanamadığında gündeme gelir; emin değilseniz önce veteriner hekime danışmak önerilir.' },

    { kind: 'baslik', metin: 'Tırnağın kesilmesi gerektiğini gösteren işaretler' },
    { kind: 'paragraf', metin: 'International Cat Care şu işaretleri tırnakların kesilmesi gerekebileceğine dair ipuçları olarak sayıyor:' },
    { kind: 'liste', maddeler: [
      'Tırnakların yatak örtüsüne, koltuğa ya da halıya takılması',
      'Kedinin tırmalama alanlarını kullanmaması ya da kullanmakta zorlanması',
      'Kedi dinlenirken ve patileri gevşekken tırnakların dışarıdan görülmesi',
      'Laminat ya da fayans gibi sert zeminde yürürken tırnakların tıkırdaması',
    ]},
    { kind: 'paragraf', metin: 'Bu işaretlerden biri varsa ve tırnakların fazla uzadığından endişe ediyorsanız, International Cat Care önce veteriner hekime danışmayı öneriyor. Hekim gerekirse tırnakları kesebiliyor ve isterseniz evde kediyi strese sokmadan nasıl yapacağınızı gösterebiliyor.' },

    { kind: 'baslik', metin: 'Tırnağın yapısı: pembe kısım neden önemli?' },
    { kind: 'paragraf', metin: 'Açık renkli bir tırnağa ışığa tutarak bakıldığında iki bölüm görülür. Uçtaki kısım saydam ya da beyazdır. Tırnağın dibinde ise pembe, üçgen biçimli bir doku vardır. Cornell Kedi Sağlığı Merkezi bu dokunun damarlar ve sinir uçları içerdiğini, buraya kadar kesmenin kanamaya ve kedide acıya yol açtığını belirtiyor.' },
    { kind: 'paragraf', metin: 'ASPCA da aynı uyarıyı yapıyor: yalnızca beyaz kısmın kesilmesini, emin olunamadığında fazla kesip pembe kısma değme ihtimali yerine az kesmenin daha doğru olduğunu söylüyor. Kısacası tırnak kesiminde amaç tırnağı kısaltmak değil, yalnızca sivri ucunu almaktır.' },
    { kind: 'tablo', basliklar: ['Tırnak bölümü', 'Görünüşü', 'Kesilir mi?'], satirlar: [
      ['Uç kısım', 'Saydam ya da beyaz, kancalı uç', 'Evet, yalnızca sivri ucu'],
      ['Pembe kısım', 'Tırnak dibinde pembe, üçgen doku', 'Hayır, damar ve sinir içerir'],
    ]},

    { kind: 'baslik', metin: 'Adım adım kedi tırnağı kesimi' },
    { kind: 'paragraf', metin: 'International Cat Care ve Cornell Kedi Sağlığı Merkezi\'nin önerileri bir araya getirildiğinde kesim şu sırayla yapılıyor:' },
    { kind: 'liste', maddeler: [
      '**Doğru anı seçmek:** kedinin rahat olduğu, örneğin kucağınızda dinlendiği bir zaman tercih edilir. Ortamın iyi aydınlatılmış olması gerekiyor.',
      '**Kediyi yerleştirmek:** kedinin yüzü sizden öteye bakacak biçimde kucağa alınması önerilir. Alternatif olarak kedi bir havluya, tek bacağı dışarıda kalacak şekilde nazikçe sarılabilir.',
      '**Tırnağı çıkarmak:** pati elinize alınır ve her parmağın üstüne hafifçe bastırılarak tırnak dışarı çıkarılır.',
      '**Tırnağı incelemek:** pembe kısmın nerede başladığı dikkatle görülür.',
      '**Yalnızca ucu kesmek:** kedi tırnak makasıyla yalnızca saydam uç alınır, ortadan görülen damara değilmez. Cornell, ucundaki kancayı alacak bir açıyla kesmeyi tarif ediyor.',
      '**Gerekirse durmak:** kedi tedirgin olursa kesime ara verilip başka bir zaman yeniden denenmesi önerilir.',
      '**İyi bir anla bitirmek:** her kesimin ardından oyun ya da sevdiği bir ödül mama, kedinin bu deneyimi olumlu hatırlamasını sağlar.',
    ]},
    { kind: 'uyari', metin: 'Pembe kısım yanlışlıkla kesilirse tırnak kanar ve kedinin canı yanar. Kanama olursa ya da tırnak pati yastığına batmışsa, bunu evde çözmeye çalışmak yerine veteriner hekime başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Kediyi tırnak kesimine alıştırmak' },
    { kind: 'paragraf', metin: 'Patisine dokunulmasından hoşlanmayan bir kedinin tırnağını zorla kesmeye çalışmak hem kediyi hem sizi yaralayabilir. ASPCA, kesimden önce kedinin patisinin tutulmasına ve makasın sesine yavaş yavaş alıştırılmasını öneriyor:' },
    { kind: 'liste', maddeler: [
      'Kedinin patilerinden biri parmaklar arasına alınıp en fazla üç saniye masaj yapılır. Kedi patisini çekerse sıkmadan ve çimdiklemeden hareketine eşlik edilir.',
      'Kedi sakinleşince pati yastığına hafifçe bastırılıp tırnak dışarı çıkarılır, ardından pati bırakılıp hemen ödül verilir.',
      'Bu çalışma gün aşırı, her seferinde farklı bir parmakla tekrarlanır.',
      'Makasın sesine alıştırmak için makasla kedinin yanında pişmemiş bir spagetti çubuğu kesilir.',
      'İlk kesimlerde bir oturumda ikiden fazla tırnak kesilmez; kedi rahatladıkça sayı artırılır.',
    ]},
    { kind: 'paragraf', metin: 'ASPCA ayrıca kedi direnirse sesinizi yükseltmemeyi ve onu cezalandırmamayı, kedi huzursuzken ya da siz gerginken kesim yapmamayı ve acele etmemeyi vurguluyor; acele etmek pembe kısma kadar kesme ihtimalini artırıyor. Bütün tırnakları tek seferde kesmeye çalışmak da önerilmiyor. Kedi yine de tırnağının kesilmesine izin vermiyorsa veteriner hekimden ya da bir bakım uzmanından yardım istemek gerekiyor.' },

    { kind: 'baslik', metin: 'Ne sıklıkla kesilmeli?' },
    { kind: 'paragraf', metin: 'Bu konuda kaynaklar farklı düşünüyor. ASPCA kesimin on günde bir ile iki haftada bir yapılmasını öneriyor. International Cat Care ise tırmalayarak tırnağını kendisi kısaltabilen kedide düzenli kesimi önermiyor ve kesimi ihtiyaç işaretlerine bağlıyor. Kedinize hangisinin uyduğunu belirlemenin en sağlıklı yolu, tırnaklarını veteriner hekime göstermek.' },
    { kind: 'paragraf', metin: 'Tırnakların ne kadar hızlı uzadığına dair ilk ölçüm 2025\'te yayımlandı. Colorado Eyalet Üniversitesi ve Rowan Üniversitesi araştırmacılarının ev içinde yaşayan, kısırlaştırılmış 17 yetişkin kedide yaptığı çalışmada tırnaklar kesilip ölçüldü ve yaklaşık bir ay sonra yeniden kesilip ölçüldü. Ön ayak tırnakları ve ön ayaktaki birinci parmak tırnağı günde ortalama 0,13 mm, arka ayak tırnakları ise 0,08 mm uzadı. Arka tırnaklar ön tırnaklara göre belirgin biçimde daha yavaş büyüdü.' },
    { kind: 'tablo', basliklar: ['Kaynak', 'Sıklık konusundaki görüşü'], satirlar: [
      ['ASPCA', 'On günde bir ile iki haftada bir kesim'],
      ['International Cat Care', 'Çoğu kedide gerek yok, düzenli kesim önerilmez; işaret varsa hekime danışılır'],
      ['Contreras ve ark., 2025', 'Ön tırnaklar günde ortalama 0,13 mm, arka tırnaklar 0,08 mm uzuyor'],
    ]},

    { kind: 'baslik', metin: 'Yaşlı kedilerde tırnaklar daha çok dikkat istiyor' },
    { kind: 'paragraf', metin: 'International Cat Care\'e göre kediler yaşlandıkça ve hareketleri azaldıkça, ağrılı eklemler yüzünden eskisi kadar kolay tırmalayamayabiliyor. Bu durumda tırnaklar aşırı uzayıp yumuşak eşyalara takılabiliyor, hatta pati yastığının içine doğru büyüyebiliyor. Kurum bunun çok acı verici olabileceğini ve hızla çözülmezse enfeksiyona yol açabileceğini belirtiyor.' },
    { kind: 'paragraf', metin: 'Yaşlı kedinin patisi tutulurken eklemlerinin ağrıyor olabileceği düşünülerek ekstra nazik olmak önerilir. Yaşlı kedinin patilerine ve tırnaklarına bakmak, [[kedi-kopek-check-up-ne-zaman|düzenli check-up]] sırasında veteriner hekime sorulabilecek konuların başında geliyor.' },

    { kind: 'baslik', metin: 'Tırnak kılıfı ve tırnak sökme hakkında' },
    { kind: 'paragraf', metin: 'Mobilyayı tırmalamadan korumak için tırnağın üzerine yapıştırılan yumuşak plastik kılıflar konusunda da görüşler ayrılıyor. Cornell Kedi Sağlığı Merkezi bu kılıfların yalnızca patisinin tutulmasına izin veren kedilere takılabileceğini, kedinin tırmalama hareketini yapmaya devam ettiğini ve kılıfların altı ile on iki haftada bir değiştirilmesi gerektiğini belirtiyor. International Cat Care ise kılıfları önermiyor: kurum bunların kedide ciddi sıkıntıya yol açabileceğini ve tırmalama, tırnağı içeri çekme ve tüy temizliği gibi doğal davranışları engelleyerek davranış sorunlarına neden olabileceğini söylüyor.' },
    { kind: 'paragraf', metin: 'Tırnak sökme (declawing) ise bambaşka bir konu. Cornell, adına rağmen bunun tırnağın basitçe çıkarılması değil, parmak uçlarındaki kemiklerin kesilmesi olduğunu açıklıyor. ASPCA da bu ameliyata kesinlikle karşı çıkıyor ve yerine tırnakların kesilmesini ve uygun tırmalama direkleri sağlanmasını öneriyor.' },
    { kind: 'paragraf', metin: '2018\'de Journal of Feline Medicine and Surgery\'de yayımlanan bir çalışmada 137 tırnağı sökülmüş ve 137 tırnağı sökülmemiş kedi karşılaştırıldı. Tırnağı sökülmüş kedilerde sırt ağrısı, ısırma ve evin uygunsuz yerlerine idrar ya da dışkı yapma ihtimali belirgin biçimde daha yüksek bulundu. Tırnağı sökülmüş kedilerin yüzde 63\'ünde röntgende parmak ucunda geride kalmış kemik parçaları görüldü.' },
    { kind: 'yanilgi', baslik: '"Tırnak sökme yalnızca tırnağı alır"', metin: 'Cornell Kedi Sağlığı Merkezi, tırnak sökmenin parmak uçlarındaki kemiklerin kesilmesi anlamına geldiğini belirtiyor. Ayrıca bu işlem kedinin tırmalama isteğini ortadan kaldırmıyor, yalnızca verdiği zararı engelliyor.' },

    { kind: 'baslik', metin: 'Ne zaman veteriner hekime başvurmalı?' },
    { kind: 'paragraf', metin: 'Tırnaklar fazla uzamış görünüyorsa, kedi tırmalama alanını kullanmakta zorlanıyorsa, tırnak pati yastığına batmışsa ya da kesim sırasında kedi çok stres yaşıyorsa veteriner hekime danışmak gerekiyor. Hekim tırnakları değerlendirip gerekirse kesebiliyor ve evde nasıl güvenle yapacağınızı gösterebiliyor. Kedinizi yeni sahiplendiyseniz [[yavru-kedi-bakimi|yavru kedi bakımı]] yazısı da ilk aylarda nelere dikkat edileceğini özetliyor.' },
  ],
  sss: [
    { soru: 'Kedi tırnağı kesmek gerekli mi?', cevap: 'Çoğu kedi için gerekli değil. International Cat Care, kedilerin tırmalayarak tırnaklarını kendi başına uygun uzunlukta tuttuğunu ve düzenli kesimi önermediğini belirtiyor. Tırnaklar eşyalara takılıyor, sert zeminde tıkırdıyor ya da kedi tırmalama alanını kullanamıyorsa kesim gündeme gelir.' },
    { soru: 'Kedi tırnağı ne sıklıkla kesilir?', cevap: 'Bunun tek bir cevabı yok. ASPCA on günde bir ile iki haftada bir kesimi öneriyor; International Cat Care ise tırmalayabilen kedide düzenli kesimi önermiyor. 2025 tarihli bir çalışmada ön tırnakların günde ortalama 0,13 mm, arka tırnakların 0,08 mm uzadığı ölçüldü. Kedinize uygun sıklığı veteriner hekim belirleyebilir.' },
    { soru: 'Kedi tırnağının neresi kesilir?', cevap: 'Yalnızca saydam ya da beyaz görünen uç kısmı kesilir. Tırnağın dibindeki pembe, üçgen biçimli doku damar ve sinir içerir; buraya kadar kesmek kanamaya ve acıya yol açar. ASPCA, emin olunamadığında az kesmenin daha doğru olduğunu söylüyor.' },
    { soru: 'Kedi tırnağı insan tırnak makasıyla kesilir mi?', cevap: 'Kaynaklar insan tırnak makasını değil, kedi tırnak makasını tarif ediyor; International Cat Care kesimin kedi tırnak makasıyla yapılmasını anlatıyor. Hangi aletin kedinize uygun olduğunu ve nasıl tutulacağını veteriner hekim ya da klinik ekibi uygulamalı olarak gösterebilir; ilk kesimden önce bunu istemek önerilir.' },
    { soru: 'Kedi tırnağını kestirmezse ne olur?', cevap: 'Tırmalayabilen sağlıklı bir kedide çoğu zaman bir sorun olmaz, çünkü kedi tırnağını kendisi kısaltır. Ancak yaşlı ya da hareketi azalmış kedilerde tırnaklar aşırı uzayıp pati yastığına batabilir; International Cat Care bunun çok acı verici olabileceğini ve enfeksiyona yol açabileceğini belirtiyor.' },
    { soru: 'Kedim tırnak kesimine izin vermiyorsa ne yapmalıyım?', cevap: 'Zorlamamak ve kediyi cezalandırmamak gerekiyor. ASPCA, patiye dokunmaya ve makas sesine gün aşırı küçük adımlarla alıştırmayı, ilk oturumlarda en fazla iki tırnak kesmeyi öneriyor. Kedi yine de izin vermiyorsa veteriner hekimden ya da bir bakım uzmanından yardım almak doğru olur.' },
    { soru: 'Tırnak sökme ameliyatı zararsız mı?', cevap: 'Hayır, zararsız sayılmıyor. Cornell Kedi Sağlığı Merkezi bunun parmak uçlarındaki kemiklerin kesilmesi olduğunu belirtiyor ve ASPCA bu ameliyata kesinlikle karşı çıkıyor. 2018 tarihli bir çalışmada tırnağı sökülmüş kedilerde sırt ağrısı, ısırma ve uygunsuz yere tuvalet yapma ihtimali daha yüksek bulundu.' },
  ],
  kontrolListesi: [
    'Tırnak kesimi gerçekten gerekli mi?',
    'Kedi tırnak makası hazır mı?',
    'Ortam yeterince aydınlık mı?',
    'Kedi sakin ve rahat mı?',
    'Pembe kısım görülüyor mu?',
    'Ödül mama elinizin altında mı?',
  ],
  kaynaklar: [
    {
      kurum: 'International Cat Care',
      baslik: 'Trimming your cat\'s claws',
      adres: 'https://icatcare.org/articles/trimming-your-cats-claws',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Feline Behavior Problems: Destructive Behavior',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-behavior-problems-destructive-behavior',
    },
    {
      kurum: 'ASPCA',
      baslik: 'Cat Grooming Tips',
      adres: 'https://www.aspca.org/pet-care/cat-care/cat-grooming-tips',
    },
    {
      kurum: 'Colorado State University College of Veterinary Medicine and Biomedical Sciences; Shreiber School of Veterinary Medicine of Rowan University',
      yazarlar: 'Contreras ET, Bruner K, Hegwer C, Simpson A',
      baslik: 'Claw growth rates in a subset of adult, indoor, domestic cats (Felis catus)',
      dergi: 'Veterinary Dermatology',
      yil: 2025,
      kunye: '36(3):362-367',
      doi: '10.1111/vde.13335',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/40069836/',
    },
    {
      kurum: 'Feline Medical Center; Cummings Veterinary Medical Center at Tufts University; University of Saskatchewan',
      yazarlar: 'Martell-Moran NK, Solano M, Townsend HG',
      baslik: 'Pain and adverse behavior in declawed cats',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2018,
      kunye: '20(4):280-288',
      doi: '10.1177/1098612X17705044',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/28534655/',
    },
  ],
};
