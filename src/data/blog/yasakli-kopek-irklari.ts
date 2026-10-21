import type { BlogYazi } from './types';

export const yasakliKopekIrklari: BlogYazi = {
  slug: 'yasakli-kopek-irklari',
  baslik: 'Yasaklı Köpek Irkları 2026: Hangi Irklar Yasak, Cezası Ne?',
  ozet: 'Türkiye\'de altı köpek ırkı ve melezleri yasak; üretmek, sahiplenmek ve satmak ceza gerektiriyor. Hangi ırklar, sahipler ne yapmalı, ceza ne kadar?',
  kapakAlt:
    'Yasaklı köpek ırkları konulu yazının kapak görseli; şehir kaldırımında tasma ve ağızlıkla sahibinin yanında yürüyen iri bir köpek',
  kategori: 'Köpek',
  tarih: '2026-10-22',
  bloklar: [
    { kind: 'paragraf', metin: 'Türkiye\'de **Amerikan Pitbull Terrier, Dogo Argentino, Fila Brasileiro, Japanese Tosa, American Staffordshire Terrier ve American Bully** ırkları ile melezleri, Tarım ve Orman Bakanlığı tarafından **tehlike arz eden hayvan** olarak belirlendi. 5199 sayılı Hayvanları Koruma Kanunu bu hayvanları üretmeyi, sahiplenmeyi, sahiplendirmeyi, satmayı ve reklamını yapmayı yasaklıyor.' },
    { kind: 'paragraf', metin: 'Aşağıda listenin dayanağını, yasak kapsamına neyin girdiğini, kanun yürürlüğe girmeden önce bu ırklardan köpeği olanların yükümlülüklerini ve cezaları kanun, yönetmelik ve genelge maddeleriyle anlatıyoruz.' },

    { kind: 'baslik', metin: 'Türkiye\'de yasaklı köpek ırkları hangileri?' },
    { kind: 'tablo', basliklar: ['Irk', 'Dayanak'], satirlar: [
      ['Amerikan Pitbull Terrier', 'Kanun geçici madde 3 ve 2021/48 sayılı genelge'],
      ['Dogo Argentino', 'Kanun geçici madde 3 ve 2021/48 sayılı genelge'],
      ['Fila Brasileiro', 'Kanun geçici madde 3 ve 2021/48 sayılı genelge'],
      ['Japanese Tosa', 'Kanun geçici madde 3 ve 2021/48 sayılı genelge'],
      ['American Staffordshire Terrier', '2021/48 sayılı genelge'],
      ['American Bully', '2021/48 sayılı genelge'],
    ]},
    { kind: 'paragraf', metin: 'Kanunun geçici 3. maddesi ilk dört ırkı ve **melezlerini** saymıştı. Bakanlığın 7 Aralık 2021\'de yürürlüğe giren **2021/48 sayılı genelgesi** listeye American Staffordshire Terrier ve American Bully\'yi ekledi. Liste Bakanlık tarafından belirleniyor; değişiklik olursa yine Bakanlık duyuruyor.' },

    { kind: 'baslik', metin: 'Yasak neleri kapsıyor?' },
    { kind: 'paragraf', metin: 'Kanunun 14. maddesi ve 2024 tarihli uygulama yönetmeliğinin 41. maddesine göre bu hayvanları **üretmek, sahiplenmek, sahiplendirmek, barındırmak, beslemek, takas etmek, sergilemek, hediye etmek, ülkeye sokmak, satmak ve reklamını yapmak** yasak. Yönetmelik ayrıca bu hayvanların sahiplenilemeyeceğini ve özel hayvan yaşamevlerine ya da doğal yaşam alanlarına teslim edilemeyeceğini belirtiyor.' },
    { kind: 'yanilgi', baslik: '"Melez olduğu için yasak kapsamında değil"', metin: 'Kanunun geçici 3. maddesi bu ırkların melezlerini de açıkça sayıyor. Irkı tartışmalı bir köpek için karar, denetim sırasında yetkililerce veriliyor; pasaportta yazılan ırk tek başına güvence değil.' },

    { kind: 'baslik', metin: 'Bu ırklardan köpeği olanlar ne yapmalı?' },
    { kind: 'paragraf', metin: 'Genelgeye göre **14 Temmuz 2021\'den önce** sahiplenilmiş bu ırklardan köpekler, **kısırlaştırılıp kayıt altına alınmaları şartıyla** sahiplerinin yanında kalabildi. Bunun için son tarih 14 Ocak 2022\'ydi; köpeğin veteriner kliniğinde kısırlaştırılıp mikroçiplenmesi ve kısırlaştırma belgesiyle il ya da ilçe tarım müdürlüğüne başvurularak PETVET\'e kaydedilmesi gerekiyordu.' },
    { kind: 'paragraf', metin: 'Bu şekilde sahibinin yanında kalan köpekler için kurallar kanunda ve yönetmelikte yazılı:' },
    { kind: 'liste', maddeler: [
      '**Kayıt belgesi, ağızlık ve tasma olmadan dolaştırılamıyor.**',
      '**Kalabalık yerlere, çocuk oyun alanlarına ve parklara sokulamıyor.**',
      '**Bakımevine bırakma:** Yönetmeliğe göre kısırlaştırılıp sahiplenilen bu köpekler en yakın yerel yönetimin hayvan bakımevine bırakılabiliyor ve yerel yönetim bunları kabul etmek zorunda. Yönetmelik bu hayvanlara ötanazi uygulanacağını da belirtiyor.',
      '**Yurt dışı:** Bakanlığın yurt dışı çıkış talimatına göre sahipli ve kayıtlı bu köpekler, alıcı ülke kabul ederse sahipleriyle yurt dışına çıkabiliyor ama **Türkiye\'ye yeniden giremiyor.**',
    ]},
    { kind: 'paragraf', metin: 'Halka açık yerde tüm köpekler için geçerli tasma ve dışkı kurallarını [[kopek-gezdirme-kurallari|köpek gezdirme kuralları]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Yasaklı köpek ırkı beslemenin cezası nedir?' },
    { kind: 'paragraf', metin: 'Kanunun 28. maddesinin (j) bendi, tehlike arz eden hayvanlarla ilgili yasaklara aykırılığa **hayvan başına 11.000 TL** idari para cezası öngörüyor; geçici 3. madde de kayıt belgesi, ağızlık ve tasma olmadan dolaştırmaya aynı tutarı bağlıyor. İdari para cezaları her yıl yeniden değerleme oranıyla artırıldığı için bu tutar 2026\'da **hayvan başına 95.589 TL**\'ye karşılık geliyor. Yıllara göre hesabı [[5199-sayili-kanun|5199 sayılı kanun]] yazımızda gösterdik.' },
    { kind: 'paragraf', metin: 'Yaptırım para cezasıyla sınırlı değil: geçici 3. maddeye göre hayvanlara el konuluyor ve belediye tarafından bakımevine götürülüyor. Yönetmelik, yasaklara aykırılığın **tekrarında** hayvana el konulmasını ve ötanazi uygulanmasını öngörüyor; süresi içinde kısırlaştırılıp kaydedilerek sahibinin yanında kalan köpekler bu hükmün dışında.' },

    { kind: 'baslik', metin: 'Yasaklı köpek ırkı nereye şikâyet edilir?' },
    { kind: 'paragraf', metin: 'Uygulama yönetmeliğine göre 5199 sayılı kanuna uyulup uyulmadığını denetleme yetkisi **Tarım ve Orman Bakanlığı\'nda;** bu nedenle başvuru yeri il veya ilçe tarım ve orman müdürlüğü. Bir köpek o anda insanlar için tehlike oluşturuyorsa 112\'nin aranması gerekiyor.' },
    { kind: 'uyari', metin: 'Bir köpeğin ırkını görünüşüne bakarak kesin olarak söylemek çoğu zaman mümkün değil. Bu yazı kanun, yönetmelik ve genelgenin özetidir; somut bir durumda il veya ilçe tarım ve orman müdürlüğüne danışmak gerekiyor.' },
  ],
  kontrolListesi: [
    'Köpeğin ırkı pasaportta doğru mu?',
    'Kısırlaştırma belgesi yanınızda mı?',
    'Ağızlık ve tasma takılı mı?',
    'Park ve oyun alanından uzak mısınız?',
    'Kayıt belgesi gezide yanınızda mı?',
  ],
  sss: [
    { soru: 'Türkiye\'de yasaklı köpek ırkları hangileri?', cevap: 'Amerikan Pitbull Terrier, Dogo Argentino, Fila Brasileiro, Japanese Tosa, American Staffordshire Terrier, American Bully ve melezleri.' },
    { soru: 'Yasaklı köpek ırkı beslemenin cezası ne kadar?', cevap: 'Kanundaki tutar hayvan başına 11.000 TL; yeniden değerlemeyle 2026 karşılığı 95.589 TL.' },
    { soru: 'Pitbull sahiplenmek yasak mı?', cevap: 'Evet; kanun tehlike arz eden ırkları sahiplenmeyi, satmayı ve üretmeyi yasaklıyor.' },
    { soru: 'Yasaklı ırk köpekler ağızlıksız gezdirilebilir mi?', cevap: 'Hayır; kayıt belgesi, ağızlık ve tasma şart, parklara ve çocuk oyun alanlarına girilemiyor.' },
    { soru: 'American Bully yasak mı?', cevap: 'Evet; Bakanlığın 2021/48 sayılı genelgesiyle tehlike arz eden ırklar listesine eklendi.' },
    { soru: 'Yasaklı köpek ırkları nereye şikâyet edilir?', cevap: 'İl veya ilçe tarım ve orman müdürlüğüne; o anda tehlike varsa 112\'ye.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu (madde 14, 28 ve geçici madde 3)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı Doğa Koruma ve Milli Parklar Genel Müdürlüğü',
      baslik: 'Tehlike Arz Eden Hayvanlara İlişkin Genelge (2021/48)',
      adres: 'https://www.tarimorman.gov.tr/DKMP/Haber/209/Tehlike-Arz-Eden-Hayvanlara-Iliskin-Genelge',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği (13.12.2024, sayı 32751), madde 41',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/12/20241213-3.htm',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Kedi ve Köpeklerin Yurt Dışına Yolcu Beraberi ve Ticari Sevklerine İlişkin Uygulama Talimatı (21.10.2022)',
      adres: 'https://vskn.tarimorman.gov.tr/tekirdag/Belgeler/D%C3%96K%C3%9CMAN/Kedi%20Ve%20K%C3%B6peklerin%20Yurt%20D%C4%B1%C5%9F%C4%B1na%20Yolcu%20Beraberi%20Ve%20Ticari%20Sevklerine%20%C4%B0li%C5%9Fkin%20Uygulama%20Talimat%C4%B1.pdf',
    },
  ],
};
