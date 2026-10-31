import type { BlogYazi } from './types';

export const kediGundeNeKadarSuIcmeli: BlogYazi = {
  slug: 'kedi-gunde-ne-kadar-su-icmeli',
  baslik: 'Kedi Günde Ne Kadar Su İçmeli?',
  ozet: 'Kediler için kesin bir günlük su miktarı yok; sağlıklı kediler kilo başına yaklaşık 23-51 mL toplam su tüketiyor. Yemekten gelen su da sayılıyor.',
  kapakAlt:
    'Su kabından dilini çıkararak su içen tekir kedi, yakın plan',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kediler için bilimsel olarak kesinleşmiş tek bir günlük su miktarı yok; incelenen çalışmalarda sağlıklı kediler günde vücut ağırlığının kilogramı başına yaklaşık 23 ile 51 mililitre toplam su tüketti.** Buradaki "toplam" sözcüğü önemli, çünkü hesaba yalnızca su kabından içilen değil, yemekle alınan su da giriyor.' },
    { kind: 'paragraf', metin: 'Aşağıda bu aralığın farklı ağırlıktaki kediler için ne anlama geldiğini, yaş ve kuru mamanın toplam suyu nasıl değiştirdiğini, su içme düzenindeki hangi değişimlerin veteriner hekime gösterilmesi gerektiğini ve evde su alımını destekleyen basit adımları anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Kedinin ağırlığı', 'Günlük toplam su (23-51 mL/kg)'], satirlar: [
      ['3 kg', 'yaklaşık 69-153 mL'],
      ['4 kg', 'yaklaşık 92-204 mL'],
      ['5 kg', 'yaklaşık 115-255 mL'],
    ]},
    { kind: 'paragraf', metin: 'Bu rakamlar Guelph Üniversitesi araştırmacılarının 1975 ile 2025 arasında yayımlanan 32 çalışmayı taradığı bir derlemeden geliyor. Derleme, beş sağlıklı kedi grubunda günlük toplam su tüketimini kilogram başına 23 ile 51 mL olarak bildiriyor. Kilogramdan bağımsız verilen sekiz çalışmada ise kedilerin günlük toplam su tüketimi 70 ile 293 mL arasındaydı.' },
    { kind: 'paragraf', metin: 'Derleme ayrıca kedilerin su tüketiminin çalışmalar içinde ve arasında çok değiştiğini ve kedilerin idrar ya da böbrek hastalığı riskine girmeden önceki asgari su ihtiyacının bilinmediğini belirtiyor. Yani tablodaki değerler bir hedef değil, sağlıklı kedilerde görülen genel bir aralıktır.' },

    { kind: 'baslik', metin: 'Su yalnızca kaptan gelmiyor' },
    { kind: 'paragraf', metin: 'Cornell Üniversitesi Veteriner Fakültesi\'nin kedi sağlığı merkezine göre kuru mama yüzde 6 ile 10 arasında su içeriyor, konserve mamanın nem oranı ise en az yüzde 75. Bu fark, iki kedinin aynı miktarda kaptan su içse bile günde farklı miktarda su almasına yol açabiliyor. Kuru mamayla beslenen kedinin suyun büyük bölümünü kaptan alması gerekirken, yaş mama yiyen kedi suyun bir kısmını yemeğiyle alıyor.' },
    { kind: 'paragraf', metin: 'Bunu ölçen kontrollü bir çalışma var. WALTHAM Centre for Pet Nutrition\'da altı kedi, yüzde 6,3 nemli bir kuru mamanın yüzde 25,4, 53,2 ve 73,3 nem oranına getirilmiş hâlleriyle üç hafta boyunca beslendi. Yüzde 73,3 nemli mamada günlük toplam sıvı alımı 144,7 mL (kilo başına 30 mL) oldu; yüzde 6,3 nemli mamada ise 103,4 mL. Çalışma küçük ve tek bir merkezde yapıldığı için sonuçların her kedi için geçerli olduğu söylenemez, ama su alımının yalnızca kaptan ibaret olmadığını net biçimde gösteriyor.' },
    { kind: 'yanilgi', baslik: '"Kaptaki su azalmıyorsa kedi susuz kalıyordur"', metin: 'Kaptan içilen su, toplam su alımı demek değildir. Waltham çalışmasında mamanın nem oranı arttıkça kedilerin kaptan içtiği su azaldı, buna karşın toplam sıvı alımı arttı. Yaş mama yiyen bir kedinin kabındaki suyun az azalması bu yüzden tek başına bir sorun göstergesi olmayabilir.' },

    { kind: 'baslik', metin: 'Kuru mamayla beslenen kedilerde toplam su daha düşük kalıyor' },
    { kind: 'paragraf', metin: 'Guelph derlemesine göre sağlıklı kedilerin günde kilo başına 42 ile 51 mL toplam su tüketmesi çoğunlukla idrar yoğunluğunun 1,035\'in altında kalmasıyla birlikte görüldü ve bu düzeye yalnızca yaş mamayla ya da besin katkılı suyla desteklenen kuru mamayla ulaşıldı. Besin katkılı su dışında kuru mamayla beslenen kedilerde toplam su tüketimi daha düşük, idrar yoğunluğu daha yüksek çıktı.' },
    { kind: 'paragraf', metin: 'Derlemenin yazarları bunun, bu kedileri alt idrar yolu hastalıkları (kristal ve taş oluşumu dahil) bakımından daha fazla riske sokabileceğini düşündürdüğünü belirtiyor. Kesin bir ilişki kurulmuş değil; ancak yeterli su alamayan kedilerin yaş, yarı nemli ya da taze (nemi yüksek) bir mamadan yarar görebileceği ifade ediliyor. İki mama türünün diğer farklarını [[kediler-icin-yas-mama-mi-kuru-mama-mi|yaş mama mı kuru mama mı]] yazımızda anlattık. Mama değişikliğinin kediye uygun olup olmadığına veteriner hekimle karar verilmesi öneriliyor.' },

    { kind: 'baslik', metin: 'Kedinin su içmesini neler etkiliyor?' },
    { kind: 'paragraf', metin: 'Aynı derleme, çalışmalarda su alımını değiştiren ve değiştirmeyen etkenleri de ayırıyor.' },
    { kind: 'tablo', basliklar: ['Etken', 'Derlemedeki bulgu'], satirlar: [
      ['Mamanın yaş ya da kuru olması', 'Su tüketimini etkiledi'],
      ['Proteinin ve amino asitlerin miktarı', 'Su tüketimini etkiledi'],
      ['Tuz ve diğer çözünmüş maddeler', 'Su tüketimini etkiledi'],
      ['Suyun kıvamı (viskozite)', 'Su tüketimini etkiledi'],
      ['Mamadaki yağ oranı', 'Etkilemedi'],
      ['Suyun durağan ya da akan olması', 'Etkilemedi'],
    ]},
    { kind: 'paragraf', metin: 'Çeşme konusunda kaynaklar tek yönlü değil. Derlemede durağan ve akan su arasında toplam tüketim farkı çıkmadı; Cornell ise birçok kedinin çeşmeden içmeyi tercih ettiğini söylüyor. Bu yüzden çeşme her kedi için gerekli değil, ancak kaptan içmeyi sevmeyen bazı kediler için denemeye değer bir seçenek olabilir.' },

    { kind: 'baslik', metin: 'Evde su alımını desteklemek için yapılabilecekler' },
    { kind: 'liste', maddeler: [
      'Kedinin her zaman temiz ve taze suya ulaşabilmesini sağlamak',
      'Evin birkaç yerine temiz su kapları koymak',
      'Kapları düzenli yıkayıp suyu yenilemek',
      'Yaş ya da nemi yüksek mamayı veteriner hekimle konuşmak',
      'Kedi kaptan içmeyi sevmiyorsa su çeşmesini denemek',
    ]},
    { kind: 'paragraf', metin: 'Cornell\'e göre evin farklı yerlerinde temiz ve taze su bulunması kedilerin daha çok içmesini destekleyebiliyor. Kedinin su içme düzenini fark etmek de değerli: normalde nasıl içtiğini bilmek, değişim olduğunda bunu fark etmeyi kolaylaştırır.' },

    { kind: 'baslik', metin: 'Veteriner hekim kedinin su durumunu nasıl değerlendiriyor?' },
    { kind: 'paragraf', metin: 'Kedinin yeterince su alıp almadığı kaptaki suya bakarak anlaşılamıyor. Guelph derlemesine göre kedilerin su durumunu değerlendirmek için en sık kullanılan ölçüt idrar yoğunluğu. Bu ölçüm çoğunlukla idrar miktarı, idrarın asitliği ve kan tahlilleri gibi diğer bulgularla birlikte değerlendirilerek böbrek işlevi hakkında fikir veriyor. Bu değerlendirmeyi yapmak ve sonucu yorumlamak veteriner hekimin işidir; evde kedinin ne kadar içtiğini ölçmeye çalışmak yerine gözlemlerinizi muayenede anlatmak daha yararlı olur.' },
    { kind: 'paragraf', metin: 'Cornell\'e göre alt idrar yolu belirtileri görülen bir kedide veteriner hekim genellikle fizik muayene ve idrar tahlili yapıyor; gerekirse kan tahlili, röntgen, karın ultrasonu ya da idrar kültürü de isteyebiliyor.' },

    { kind: 'baslik', metin: 'Su içme düzeni değişirse veteriner hekime gitmek gerekiyor' },
    { kind: 'paragraf', metin: 'Kedinin kalıcı olarak daha çok su içmesi ya da daha çok idrar yapması bir hastalığın göstergesi olabilir, ama bunun nedeni evde anlaşılamaz. Cornell\'e göre böbrek hastalığının erken evresinde kediler çoğu zaman belirgin bir belirti göstermiyor; böbrekler idrarı yoğunlaştırma yeteneğini yitirdikçe kediler daha çok idrar yapıp telafi etmek için daha çok su içebiliyor. Bu bir teşhis değil, muayene gerektiren bir ipucudur: artışın nedenini ancak veteriner hekim, idrar incelemesi gibi testlerle belirleyebilir.' },
    { kind: 'paragraf', metin: 'Böbrek hastalığı bulunan kedilerde susuz kalmak hasarı hızlandırabildiği için bu kedilerde su alımı veteriner hekimin yönlendirmesiyle özellikle yakından izleniyor. Su içme düzeninin değişmesini bir sonraki kontrolde de anlatmak yararlıdır; kontrollerin sıklığını [[kedi-kopek-check-up-ne-zaman|kedi ve köpek check-up]] yazımızda bulabilirsiniz.' },
    { kind: 'paragraf', metin: 'Az su içmenin riskleri de var. Cornell\'e göre alt idrar yolu belirtileri en sık orta yaşlı, kilolu, az hareket eden, evde tuvalet kutusu kullanan, dışarıya erişimi kısıtlı ve daha az su içen kedilerde görülüyor. İdrarda kan bu belirtilerden biri; konuyu [[kedi-idrarinda-kan|kedi idrarında kan]] yazımızda ayrıntılı anlattık.' },
    { kind: 'uyari', metin: 'Kedi tuvalete tekrar tekrar gidip az idrar yapıyor ya da hiç yapamıyor, huzursuzlaşıyor ya da genital bölgesini sık sık yalıyorsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Cornell\'e göre idrar yolu tıkanıklığı mutlak bir acildir ve hemen veteriner müdahalesi gerektirir.' },
  ],
  kontrolListesi: [
    'Temiz ve taze su her an var mı?',
    'Evde birden çok su kabı var mı?',
    'Yemekten gelen suyu hesaba kattık mı?',
    'Su içme düzeninde değişiklik var mı?',
    'İdrar sıklığı değişti mi?',
  ],
  sss: [
    { soru: 'Kedi günde kaç mL su içmeli?', cevap: 'Kesin bir miktar belirlenmiş değil. İncelenen çalışmalarda sağlıklı kediler günde kilo başına yaklaşık 23 ile 51 mL toplam su tüketti; bu, 4 kg\'lık bir kedi için yaklaşık 92 ile 204 mL ediyor. Toplama yemekle alınan su da dahil, yalnızca kaptan içilen değil.' },
    { soru: 'Yaş mama yiyen kedi neden az su içer?', cevap: 'Konserve mamanın nem oranı en az yüzde 75 olduğu için kedi suyun bir bölümünü yemeğiyle alıyor. Bir çalışmada mamanın nemi arttıkça kaptan içilen su azaldı ama toplam sıvı alımı arttı. Bu yüzden kaptan az içmek tek başına endişe verici değil.' },
    { soru: 'Kuru mamayla beslenen kedi yeterince su içer mi?', cevap: 'Bazı kediler içer, ama derlemeye göre kuru mamayla beslenen kedilerde toplam su tüketimi ortalamada daha düşük, idrar yoğunluğu daha yüksek çıktı. Kedinizin su alımının yeterli olup olmadığını ve mama türünün uygunluğunu veteriner hekimle konuşmanız önerilir.' },
    { soru: 'Kedi çok su içiyorsa hasta mıdır?', cevap: 'Bunu evde söylemek mümkün değil. Daha çok su içme, böbrek hastalığı dahil bir sorunun işareti olabilir, ama nedeni yalnızca veteriner hekim muayene ve testlerle belirleyebilir. Su içme ve idrar yapma düzeninde kalıcı artış fark ederseniz kontrol randevusu almak gerekiyor.' },
    { soru: 'Kedi çeşmesi gerekli mi?', cevap: 'Her kedi için gerekli değil. Bir derlemede durağan ve akan su arasında toplam tüketim farkı çıkmadı, Cornell ise birçok kedinin çeşmeden içmeyi tercih ettiğini belirtiyor. Kaptan az içen bir kedi için denemek mantıklı, ama tek başına çözüm sayılmaz.' },
    { soru: 'Kedi hiç idrar yapamıyorsa ne yapılmalı?', cevap: 'Hemen veteriner hekime başvurmak gerekiyor. Cornell\'e göre idrar yolu tıkanıklığı mutlak bir acildir; kedi çok az ya da hiç idrar yapamaz ve giderek huzursuzlaşır. Evde bekleyerek ya da müdahale etmeye çalışarak vakit kaybetmek önerilmez.' },
  ],
  kaynaklar: [
    {
      kurum: 'Guelph Üniversitesi, Hayvan Biyobilimleri Bölümü',
      yazarlar: 'Kosmal PAL, Shoveller AK, Gillies G, Armstrong LE',
      baslik: 'Diet format, protein, amino acids, salt, and osmolytes, as well as water viscosity, affect water consumption in domestic cats: a scoping review of 32 publications (published from 1975 to 2025) on water intake, hydration status, and related health outcomes',
      dergi: 'Journal of Animal Science',
      yil: 2026,
      kunye: '104:skaf434',
      doi: '10.1093/jas/skaf434',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/41389339/',
    },
    {
      kurum: 'WALTHAM Centre for Pet Nutrition',
      yazarlar: 'Buckley CM, Hawthorne A, Colyer A, Stevenson AE',
      baslik: 'Effect of dietary water intake on urinary output, specific gravity and relative supersaturation for calcium oxalate and struvite in the cat',
      dergi: 'British Journal of Nutrition',
      yil: 2011,
      kunye: '106 Suppl 1:S128-S130',
      doi: '10.1017/S0007114511001875',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/22005408/',
    },
    {
      kurum: 'Cornell Üniversitesi Veteriner Fakültesi, Cornell Feline Health Center',
      baslik: 'Feeding Your Cat',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feeding-your-cat',
    },
    {
      kurum: 'Cornell Üniversitesi Veteriner Fakültesi, Cornell Feline Health Center',
      baslik: 'Chronic Kidney Disease',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/chronic-kidney-disease',
    },
    {
      kurum: 'Cornell Üniversitesi Veteriner Fakültesi, Cornell Feline Health Center',
      baslik: 'Feline Lower Urinary Tract Disease',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-lower-urinary-tract-disease',
    },
  ],
};
