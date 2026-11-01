import type { BlogYazi } from './types';

export const kopeklerElmaYerMi: BlogYazi = {
  slug: 'kopekler-elma-yer-mi',
  baslik: 'Köpekler Elma Yer mi? Çekirdek ve Miktar',
  ozet: 'Köpekler elmanın etini yiyebilir ama çekirdek, sap ve yaprak sorun çıkarabilir. Ödül payı sınırı ve hazır ürünler kaynaklarla anlatıldı.',
  kapakAlt:
    'Elle uzatılan elma dilimine bakan beagle köpek',
  kategori: 'Beslenme',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Köpekler elma yiyebilir: meyvenin eti düşük riskli sayılıyor, ama çekirdek, sap ve yaprağın köpeğe verilmemesi gerekiyor ve elmanın günlük kalorinin yüzde 10\'unu geçmeyen ödül payının içinde kalması önerilir.** Merck Veteriner El Kitabı bitkilerde siyanür oluşturabilen maddelerin tohum ve yapraklarda yüksek, meyvenin etli kısmında ise genellikle düşük olduğunu belirtiyor. ASPCA ise elma ağacının sapında, yaprağında ve çekirdeğinde siyanür bulunduğunu bildiriyor.' },
    { kind: 'paragraf', metin: 'Aşağıda elmanın hangi kısmının neden sorun sayıldığını, çiğnemenin neden önemli olduğunu, ödül payının nasıl hesaplandığını ve hazır elmalı ürünlerde nelere dikkat edilmesi gerektiğini topladık. Köpeğinizin sağlığıyla ilgili bir soru varsa karar için veteriner hekime başvurmak gerekiyor.' },

    { kind: 'tablo', basliklar: ['Elmanın kısmı', 'Köpek için durum'], satirlar: [
      ['Meyvenin eti', 'Siyanür oluşturabilen madde düzeyi genellikle düşük; küçük parçalar halinde ödül payı olarak uygun'],
      ['Çekirdek', 'Tohumlarda düzey yüksek; ayıklanması gerekiyor'],
      ['Sap ve yaprak', 'ASPCA\'ya göre siyanür içeriyor; verilmemesi gerekiyor'],
      ['Hazır elmalı ürünler', 'Etiketteki katkılara ve ksilitole bakmak gerekiyor'],
    ]},

    { kind: 'baslik', metin: 'Elmanın hangi kısmı sorun çıkarıyor?' },
    { kind: 'paragraf', metin: 'ASPCA\'nın zehirli ve zehirsiz bitkiler listesinde elma, köpekler için toksik olarak geçiyor. Toksik madde olarak siyanojenik glikozitler gösteriliyor ve sap, yaprak ve çekirdeğin siyanür içerdiği belirtiliyor. Kayıt, bu kısımların özellikle solma sürecinde toksik olduğunu da belirtiyor. Kayıtta meyvenin etinden söz edilmiyor.' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı\'nın siyanür zehirlenmesi bölümü bu tabloyu tamamlıyor: bitki tohumları ve yaprakları genellikle daha yüksek siyanür oluşturma potansiyeline sahipken, meyvelerin etli kısımlarında düzey genellikle düşük kalıyor.' },
    { kind: 'paragraf', metin: 'Çekirdeğin içeriğine dair ölçüm de var. Leeds Üniversitesi\'nden Bolarinwa ve ekibi 2015\'te 15 elma çeşidinin çekirdeklerinde gram başına 1 ile 4 mg amigdalin, yani siyanür oluşturabilen bir madde ölçtü. Bu çalışma insan gıdası içindi ve köpekler için bir güvenlik eşiği vermiyor; yine de çekirdeklerde bu maddenin ölçülebilir düzeyde bulunduğunu gösteriyor.' },
    { kind: 'yanilgi', baslik: '"Elma doğal, o yüzden her kısmı güvenli"', metin: 'Doğal olmak, bir bitkinin her kısmının köpek için güvenli olduğu anlamına gelmiyor. ASPCA elma ağacının sapını, yaprağını ve çekirdeğini siyanür içeren kısımlar olarak sayıyor. Elmanın eti ile geri kalanı ayrı ayrı değerlendirilmeli.' },

    { kind: 'baslik', metin: 'Çiğneme neden önemli?' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı, siyanür yapabilen bitkilerin çiğnenmesinin ve ezilmesinin zehirlenme tablosunun gelişmesinde önemli olduğunu anlatıyor; çünkü bu işlem bitki hücrelerindeki glikozitleri açığa çıkarıyor. Dolayısıyla çekirdeği çiğneyen bir köpek ile çekirdeği hiç ağzına almayan bir köpek aynı durumda değil.' },
    { kind: 'paragraf', metin: 'Aynı bölümde mide pH değeri düşük, yani asitliği yüksek olan tek mideli hayvanların bu zehirlenmeye biraz daha az duyarlı olduğu, ancak bunun bağışıklık anlamına gelmediği de belirtiliyor. Kaynaklar köpekler için "şu kadar çekirdek zararsızdır" diyen bir sayı vermiyor ve biz de vermiyoruz. Çekirdeklerin ve sapın baştan ayıklanması en basit önlem.' },
    { kind: 'uyari', metin: 'Köpek çok sayıda elma çekirdeği çiğnediyse, elma ağacının yaprak ya da dallarından yediyse veya ne kadar yediği bilinmiyorsa belirti beklemeden vakit kaybetmeden veteriner hekime başvurmak gerekiyor. ASPCA nefes almada güçlük, soluk soluğa kalma ve şok gibi belirtilerin görülebildiğini bildiriyor. Evde müdahale denememek gerekiyor.' },

    { kind: 'baslik', metin: 'Ne kadar elma verilebilir?' },
    { kind: 'paragraf', metin: 'Elma, köpeğin tam ve dengeli mamasının yerine geçen bir besin değil, bir ödül. Dünya Küçük Hayvan Veteriner Hekimleri Birliği (WSAVA) ödüllerin köpeğin günlük kalorisinin yüzde 10\'undan az olması gerektiğini söylüyor. Bu kural elmayı da kapsıyor: köpeğin o günkü ödül payı elmayla, antrenman ödülüyle ve diğer atıştırmalıklarla birlikte hesaplanıyor.' },
    { kind: 'paragraf', metin: 'WSAVA\'nın ödül kılavuzu, köpeğin kilosuna göre bir günde ödül olarak alabileceği en fazla kaloriyi veren bir tablo içeriyor. Kaynaklarda "kaç dilim elma" diyen bir sayı yok; bu yüzden gram ya da dilim sayısı yazmıyoruz. Günlük kaloriyi ve uygun miktarı köpeğin kilosuna ve mamasına göre veteriner hekim belirleyebilir. Mama miktarı için [[kopek-gunde-kac-gram-mama-yer|köpek günde kaç gram mama yer]] yazımıza bakılabilir.' },
    { kind: 'paragraf', metin: 'WSAVA ayrıca ödülün köpeğin ağzına ve boğazına uygun boyutta ve biçimde olması gerektiğini, böylece boğulma riskinin azaltılacağını belirtiyor. Elmayı küçük küp ya da ince dilimler halinde sunmak ve yerken köpeği izlemek önerilir.' },

    { kind: 'baslik', metin: 'Elma köpeğe yarar sağlar mı?' },
    { kind: 'paragraf', metin: 'WSAVA sıkça sorulan sorular belgesinde meyve ve sebzeleri düşük kalorili, uygun ödül seçenekleri arasında sayıyor. Elmaya özel veri ise sınırlı. Brezilya\'daki Paraná Federal Üniversitesi\'nden de Brito ve ekibi 2021\'de yetişkin köpeklerde kurutulmuş elmanın rasyona yüzde 3, 6 ve 9 oranında eklenmesini inceledi.' },
    { kind: 'paragraf', metin: 'Rasyonun yüzde 9\'una kadar kurutulmuş elma eklenmesi besinlerin sindirilebilirliğini düşürdü, köpeklerin yem tercihini etkilemedi ve bazı bağırsak işlevi göstergelerini iyileştirdi. Bu çalışma kurutulmuş elma ve belirli bir rasyon oranı için geçerli; taze elmanın günlük miktarını ya da güvenliğini belirlemiyor, bu yüzden "elma bağırsağı düzenler" gibi bir sonuca varılamıyor.' },

    { kind: 'baslik', metin: 'Hazır ve işlenmiş elma ürünleri' },
    { kind: 'paragraf', metin: 'Elmalı tatlı, hazır püre ya da paketli atıştırmalık gibi ürünlerde elmanın yanında başka içerikler de bulunabiliyor. WSAVA, insan gıdası ve sofra artıklarının köpekler için sağlıksız ve potansiyel olarak tehlikeli olabileceğini belirtiyor. Kılavuzun toksik içerik listesinde çikolata, makadamya fındığı, soğan ve sarımsak, üzüm ve kuru üzüm, ksilitol, alkol ve kafeinli içecekler yer alıyor.' },
    { kind: 'paragraf', metin: 'Bu nedenle ürün etiketinde bu içeriklerden birinin olup olmadığına bakmak gerekiyor. Şüphe varsa ürünü hiç vermemek ve sade, çekirdeği ayıklanmış elmayı tercih etmek daha güvenli. Köpeklere zararlı diğer yiyecekler için [[kopeklere-zararli-yiyecekler|köpeklere zararlı yiyecekler]] yazımız var.' },

    { kind: 'baslik', metin: 'Hangi köpeklerde önce veteriner hekime danışılmalı?' },
    { kind: 'paragraf', metin: 'WSAVA, köpeğin bir sağlık sorunu, besin duyarlılığı varsa ya da veteriner hekimin yazdığı özel bir mamayla besleniyorsa alışıldık ödüllerin uygun olmayabileceğini belirtiyor ve ne verileceğini veteriner ekibine sormayı öneriyor. Bu köpeklerde elmayı da denemeden önce veteriner hekime danışmak gerekiyor.' },
    { kind: 'paragraf', metin: 'Elma yedikten sonra köpekte alışılmadık bir durum fark edilirse nedeni kendi başımıza çıkarmaya çalışmak yerine veteriner hekime başvurmak doğru olur. Zehirlenme ihtimali için [[kopeklerde-zehirlenme|köpeklerde zehirlenme]] yazımızı da okuyabilirsiniz.' },

    { kind: 'baslik', metin: 'Elmayı güvenli sunmanın yolu' },
    { kind: 'liste', maddeler: [
      'Sapı ve çekirdekleri baştan ayıklamak',
      'Meyveyi küçük küp ya da ince dilimlere bölmek',
      'Elmayı mamanın yerine değil, ödül olarak sunmak',
      'Elmayı günlük ödül payına dahil etmek',
      'Yerken köpeği izlemek',
      'Sade elmayı seçmek, hazır ürünlerde etiketi okumak',
    ]},
  ],
  kontrolListesi: [
    'Çekirdekler ve sap ayıklandı mı?',
    'Parçalar yeterince küçük mü?',
    'Elma ödül payının içinde mi?',
    'Ürün etiketinde ksilitol var mı?',
    'Özel diyet ya da hastalık var mı?',
    'Ağaçtan yaprak ya da dal yedi mi?',
  ],
  sss: [
    { soru: 'Köpekler elma yer mi?', cevap: 'Evet, elmanın eti düşük riskli sayılıyor ve küçük parçalar halinde ödül olarak verilebilir. Çekirdek, sap ve yaprağın verilmemesi gerekiyor. Ödüllerin köpeğin günlük kalorisinin yüzde 10\'unu geçmemesi öneriliyor; hastalığı olan köpekler için önce veteriner hekime danışmak gerekiyor.' },
    { soru: 'Köpek elma çekirdeği yerse ne olur?', cevap: 'Kaynaklar birkaç çekirdek için net bir eşik vermiyor. Çekirdekler çiğnenip ezilirse siyanür oluşturabilen maddeler açığa çıkıyor. Köpek çok sayıda çekirdek çiğnediyse ya da ne kadar yediği bilinmiyorsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Köpeğe günde ne kadar elma verilebilir?', cevap: 'Kaynaklar dilim ya da gram sayısı vermiyor; ölçü ödül payı. WSAVA ödüllerin günlük kalorinin yüzde 10\'undan az olmasını söylüyor ve bu pay antrenman ödülleriyle paylaşılıyor. Uygun miktar için köpeğin kilosuna göre veteriner hekimin önerisi esas alınmalı.' },
    { soru: 'Elma köpek için faydalı mı?', cevap: 'WSAVA meyveleri düşük kalorili ödül seçenekleri arasında sayıyor, ancak elmanın köpeğe sağlık yararına dair güçlü veri sınırlı. Kurutulmuş elmayla yapılan bir çalışmada bazı bağırsak göstergeleri iyileşti, besin sindirilebilirliği ise düştü. Elma bir ödül olarak değerlendiriliyor, tedavi olarak değil.' },
    { soru: 'Köpek elma ağacının yaprağını yerse ne yapmalı?', cevap: 'Veteriner hekime vakit kaybetmeden başvurmak gerekiyor. ASPCA elma ağacının sapında ve yaprağında siyanür bulunduğunu bildiriyor; bu yüzden köpeğin yaprak ya da dal yemesi, miktarı ne olursa olsun, bir veteriner hekim değerlendirmesi gerektiren durum sayılıyor.' },
    { soru: 'Hazır elmalı ürünler köpeğe verilebilir mi?', cevap: 'Önerilmez; sade elma tercih edilmeli. Hazır ürünlerde WSAVA\'nın toksik saydığı ksilitol, üzüm ya da kuru üzüm gibi içerikler bulunabiliyor. Bu içerikler etikette yoksa bile ürün insan gıdası olduğu için sağlıksız olabilir.' },
    { soru: 'Hasta köpeğe elma verilebilir mi?', cevap: 'Veteriner hekime danışılmadan verilmemesi gerekiyor. WSAVA, sağlık sorunu, besin duyarlılığı olan ya da özel mamayla beslenen köpeklerde alışıldık ödüllerin uygun olmayabileceğini belirtiyor ve ne verileceğini veteriner ekibine sormayı öneriyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'ASPCA (American Society for the Prevention of Cruelty to Animals), Animal Poison Control',
      baslik: 'Toxic and Non-toxic Plants: Apple',
      adres: 'https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/apple',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Cyanide Poisoning in Animals',
      adres: 'https://www.merckvetmanual.com/toxicology/cyanide-poisoning/cyanide-poisoning-in-animals',
    },
    {
      kurum: 'World Small Animal Veterinary Association (WSAVA)',
      baslik: 'Feeding treats to your dog',
      adres: 'https://wsava.org/wp-content/uploads/2025/11/WSAVA_GuidetoTreats_Dogs_251107.pdf',
    },
    {
      kurum: 'World Small Animal Veterinary Association (WSAVA)',
      baslik: 'Frequently Asked Questions & Myths',
      adres: 'https://wsava.org/wp-content/uploads/2020/01/Frequently-Asked-Questions-and-Myths.pdf',
    },
    {
      kurum: 'Universidade Federal do Paraná, Department of Animal Sciences',
      yazarlar: 'de Brito CBM, Menezes Souza CM, Bastos TS, Mesa D, Oliveira SG, Félix AP',
      baslik: 'Effect of dietary inclusion of dried apple pomace on faecal butyrate concentration and modulation of gut microbiota in dogs',
      dergi: 'Archives of Animal Nutrition',
      yil: 2021,
      kunye: '75(1):48-63',
      doi: '10.1080/1745039X.2020.1867463',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/33475008/',
    },
    {
      kurum: 'University of Leeds, School of Food Science & Nutrition',
      yazarlar: 'Bolarinwa IF, Orfila C, Morgan MR',
      baslik: 'Determination of amygdalin in apple seeds, fresh apples and processed apple juices',
      dergi: 'Food Chemistry',
      yil: 2015,
      kunye: '170:437-442',
      doi: '10.1016/j.foodchem.2014.08.083',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/25306368/',
    },
  ],
};
