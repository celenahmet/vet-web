import type { BlogYazi } from './types';

export const kopekSaldirisindaNeYapilir: BlogYazi = {
  slug: 'kopek-saldirisinda-ne-yapilir',
  baslik: 'Köpek Saldırısında Ne Yapılır? Korunma Yolları',
  ozet: 'Köpek saldırısında koşmamak, kıpırdamadan durmak ve yere düşülürse başı ve boynu korumak gerekiyor. Isırıktan sonra yara yıkanıp sağlık kuruluşuna gidilir.',
  kapakAlt:
    'Parkta göğüs tasmasıyla sahibinin yanında yürüyen köpek',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Bir köpek saldırdığında koşmamak, bağırmamak, kıpırdamadan durmak ve göz göze gelmemek önerilir; yere düşülürse top gibi kıvrılıp kollarla baş ve boyun korunur.** Isırık olduysa yara vakit kaybetmeden bol su ve sabunla yıkanır ve en kısa sürede bir sağlık kuruluşuna başvurulur. Köpek tanıdık ya da aşılı görünse de bu adım atlanmıyor, çünkü kuduz belirtiler başladıktan sonra tedavi edilemeyen bir hastalık.' },
    { kind: 'paragraf', metin: 'Aşağıda saldırı anında ne yapılacağını, ısırıktan sonraki ilk adımları, ısıran köpeğin neden 10 gün gözlem altında tutulduğunu ve ısırıkların çoğunun nasıl önlenebileceğini Dünya Sağlık Örgütü, Sağlık Bakanlığı ve hakemli çalışmalara dayanarak anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Önerilen', 'Önerilmeyen'], satirlar: [
      ['Kıpırdamadan, sakin durmak', 'Koşmak ya da sırtını dönmek'],
      ['Göz göze gelmemek', 'Köpeğe dik dik bakmak'],
      ['Ceket ya da çantayı araya vermek', 'Bağırmak, tekme atmak'],
      ['Düşülürse kıvrılıp başı ve boynu korumak', 'Yerde yuvarlanmak, çırpınmak'],
      ['Köpek ilgisini kaybedince yavaşça geri çekilmek', 'Köpek gözden kaybolmadan hızlanmak'],
      ['Isırıkta yarayı su ve sabunla yıkayıp sağlık kuruluşuna gitmek', 'Küçük yara diye başvurmayı ertelemek'],
    ]},

    { kind: 'baslik', metin: 'Köpek üzerinize gelirken ne yapılmalı?' },
    { kind: 'paragraf', metin: 'ABD\'deki Clark County hayvan koruma ve denetim biriminin önerisi açık: ani bir saldırıda bağırıp koşmak yerine **kıpırdamadan durmak**, sakin kalmaya çalışmak ve köpekle göz göze gelmemek gerekiyor. Aynı kurum sırtın köpeğe dönülmemesini ve kaçılmamasını vurguluyor, çünkü köpeğin doğal içgüdüsü kaçanı kovalayıp yakalamak.' },
    { kind: 'paragraf', metin: 'Köpek ilgisini kaybettiğinde, o gözden kaybolana kadar yavaşça geri çekilmek önerilir.' },

    { kind: 'yanilgi', baslik: '"Koşarsam köpekten kurtulurum"', metin: 'Bir köpekten koşarak kaçmak çoğu zaman mümkün olmuyor ve kaçış, köpeğin kovalama içgüdüsünü harekete geçiriyor. Hayvan denetim birimlerinin önerisi tam tersi: sırtı dönmeden, kıpırdamadan durmak ve köpek uzaklaşınca yavaşça geri çekilmek.' },

    { kind: 'baslik', metin: 'Saldırı anında araya bir şey vermek' },
    { kind: 'paragraf', metin: 'Köpek yine de saldırırsa, aynı kaynak köpeğin dikkatini dağıtmayı öneriyor: ceket, çanta ya da elde ne varsa köpeğe uzatıp ona sizin yerinize ısırabileceği bir şey vermek.' },

    { kind: 'baslik', metin: 'Yere düşülürse başı ve boynu korumak' },
    { kind: 'paragraf', metin: 'Düşülür ya da yere yıkılınırsa **top gibi kıvrılmak** ve kollarla elleri baş ile boynun üzerine koymak önerilir. Bu sırada bağırmamaya ve yerde yuvarlanmamaya çalışmak gerekiyor. Dünya Sağlık Örgütü\'ne göre özellikle çocuklarda baş ve boyun yaralanması riski yüksek ve bu bölgelerdeki ısırıklar daha ağır sonuçlanabiliyor.' },

    { kind: 'baslik', metin: 'Isırıldıktan hemen sonra: yarayı yıkamak' },
    { kind: 'paragraf', metin: 'Sağlık Bakanlığı Halk Sağlığı Genel Müdürlüğü\'ne göre yara ya da ısırık bölgesi **vakit kaybedilmeden bol su ve sabunla iyice yıkanmalı**, yıkama bittikten sonra alkol ya da tentürdiyot gibi iyotlu bir antiseptik uygulanmalı. Göz, ağız ya da burun temas ettiyse bu bölgeler bol suyla yıkanıyor. Dünya Sağlık Örgütü yaranın sabun ve akan suyla 15 dakika boyunca yıkanmasını öneriyor.' },
    { kind: 'paragraf', metin: 'Yıkama tek başına yeterli değil. Bakanlık en kısa sürede bir sağlık kuruluşuna başvurulmasını ve hekimin düzenleyeceği aşı programının aksatılmadan uygulanmasını istiyor. Kuduz riskli temastan sonra aşılamaya olabildiğince erken başlanması gerekiyor; kuduz aşısı çocuk ve hamile dahil herkese yapılabiliyor. Kuduzun bulaşma yolları ve hangi temasın riskli sayıldığı [[kedi-tirmalamasi-kuduz-yapar-mi|kedi tırmalaması ve köpek ısırması kuduz yapar mı]] yazısında ayrıntılı anlatılıyor.' },

    { kind: 'uyari', metin: 'Kuduz, belirtiler ortaya çıktıktan sonra tedavisi olmayan ve ölümle sonuçlanan bir hastalık. Dünya Sağlık Örgütü her yıl yaklaşık 59.000 kişinin kuduzdan öldüğünü ve bu ölümlerin çoğunun kuduz köpek ısırıklarından kaynaklandığını bildiriyor. Bu yüzden ısırık küçük görünse de, köpek tanıdık olsa da sağlık kuruluşuna başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Hangi ısırıkta acile gidilmeli?' },
    { kind: 'paragraf', metin: 'İngiltere Ulusal Sağlık Hizmeti (NHS), yara büyük ya da derinse veya kanama durdurulamıyorsa doğrudan acil servise gidilmesini öneriyor. Bu durumda kişinin kendisinin araç kullanmaması, bir yakınından yardım istemesi ya da ambulans çağırması önerilir.' },
    { kind: 'paragraf', metin: 'NHS\'e göre şu durumlarda da hızla tıbbi yardım almak gerekiyor:' },
    { kind: 'liste', maddeler: [
      'Isırık el, ayak, yüz ya da baştaysa',
      'Yarada diş, tüy ya da kir kalmış olabileceği düşünülüyorsa',
      'Yara ısınıyor, şişiyor, akıntı yapıyor ya da kötü kokuyorsa',
      'Ateş, üşüme ya da titreme varsa',
      'Son 10 yılda tetanos aşısı yapılmadıysa',
    ]},

    { kind: 'baslik', metin: 'Isıran köpek ne olacak? 10 günlük gözlem' },
    { kind: 'paragraf', metin: 'Sağlık Bakanlığı, kuduz riskli temasa neden olan kedi ve köpeklerin **10 gün gözlem** altında tutulmasını öneriyor; kedi ve köpek dışındaki hayvanlarda gözlem önerilmiyor. Dünya Sağlık Örgütü de ısıran köpeğin bir veteriner hekimin gözetiminde ve yerel halk sağlığı birimleriyle birlikte 10 gün boyunca her gün gözlenmesini öneriyor.' },
    { kind: 'paragraf', metin: 'Bu yüzden ısıran köpeğin sahibine ulaşmak, köpeğin kuduz aşısının güncel olup olmadığını öğrenmek ve bu bilgiyi sağlık kuruluşuyla paylaşmak işe yarıyor. Sokakta hasta görünen, tuhaf davranan ya da ölmüş bir hayvan görüldüğünde ona yaklaşılmaması ve belediyeye, muhtarlığa ya da il veya ilçe tarım müdürlüğüne haber verilmesi öneriliyor. Sahipsiz köpeklere ilişkin yasal düzenleme [[sokak-kopekleri-yasasi-7527|sokak köpekleri yasası]] yazısında, ısırıktan doğan hukuki sorumluluk ise [[kopek-isirmasi-tazminat|köpek ısırırsa sahibi sorumlu mu]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Çocuklar neden daha çok risk altında?' },
    { kind: 'paragraf', metin: 'Dünya Sağlık Örgütü\'ne göre köpek ısırıkları her yıl on milyonlarca yaralanmaya yol açıyor ve en yüksek risk çocuklarda. Çocuklarda baş ve boyun yaralanması riski yetişkinlerden daha yüksek; bu da ısırıkları daha ağır hâle getiriyor.' },
    { kind: 'paragraf', metin: 'Pennsylvania Üniversitesi Veteriner Fakültesi\'nden Ilana Reisner ve ekibinin Philadelphia Çocuk Hastanesi\'nde 203 çocukla yaptığı çalışmada, ısırılan çocukların **%72\'si kendilerini ısıran köpeği tanıyordu**. Küçük çocuklardaki ısırıkların çoğu evin içinde, tanıdık ve hareketsiz bir köpekle, çocuğun başlattığı sevgi gösterisi sırasında oldu. 7 yaşından küçüklerde ısırıkların %70\'i yüze geldi. Büyük çocuklar ise daha çok dışarıda, tanımadıkları bir köpekle hiç etkileşim kurmadan ısırıldı.' },

    { kind: 'yanilgi', baslik: '"Tanıdığımız köpek çocuğumuzu ısırmaz"', metin: 'Hastane kayıtlarına dayanan çalışmalar tersini gösteriyor: çocukları ısıran köpeklerin çoğu ailenin ya da çevrenin tanıdığı köpekler. Dünya Sağlık Örgütü bu yüzden bir çocuğun hiçbir köpekle gözetimsiz bırakılmamasını öneriyor; köpek ne kadar uysal olsa da bu kural değişmiyor.' },

    { kind: 'baslik', metin: 'Isırıkları önlemek: köpeğe yaklaşmanın kuralları' },
    { kind: 'paragraf', metin: 'Saldırıların bir kısmı, köpeğe yanlış zamanda ya da yanlış biçimde yaklaşıldığı için oluyor. Hayvan denetim birimlerinin önerileri şöyle:' },
    { kind: 'liste', maddeler: [
      'Başkasının köpeğini sevmeden önce sahibine sormak, köpeğin önce koklamasına izin vermek',
      'Yemek yiyen ya da uyuyan bir köpeğe sessizce yaklaşmamak; köpekler ürktüğünde ısırabiliyor',
      'Oyuncağıyla oynayan köpeği sevmemek; köpek oyuncağını korumaya çalışabilir',
      'Çit ya da kapı arkasındaki köpeğe yaklaşmamak; köpekler çoğunlukla bölgesini korur',
      'Sahipsiz köpeklerden uzak durmak ve çocukları köpeklerle yalnız bırakmamak',
    ]},

    { kind: 'baslik', metin: 'Köpek sahiplerine düşen sorumluluk' },
    { kind: 'paragraf', metin: 'Auckland Üniversitesi\'nden araştırmacıların 43 çalışmayı inceleyen sistematik derlemesine göre tasma zorunluluğu ve sahipsiz köpek denetimi gibi yasal köpek kontrolü düzenlemeleri ısırık oranlarını azaltabiliyor; yalnızca ırka dayanan düzenlemelerin etkisi daha az bulundu. Yetişkinlere yönelik yoğun eğitimin işe yarayabileceği görüldü, çocuklara yönelik eğitimin ise bir çalışmada etkili olmadığı saptandı. Yazarlar ırka göre değil, tüm köpeklere yönelik önlemlerin öne çıkarılmasını öneriyor.' },
    { kind: 'paragraf', metin: 'Sağlık Bakanlığı da evcil hayvanların kontrol altında tutulmasını, özellikle geceleri serbest bırakılmamasını ve kedi ile köpeklere her yıl kuduz aşısı yapılmasını istiyor. Gezdirme sırasında uyulacak kurallar için [[kopek-gezdirme-kurallari|köpek gezdirme kuralları]], aşı zamanları için [[kopek-asi-takvimi|köpek aşı takvimi]] yazısına bakılabilir. Kendi köpeğiniz başka bir köpeğin saldırısına uğradıysa, yarası küçük görünse de bir veteriner hekime muayene ettirmek gerekiyor.' },
  ],
  sss: [
    { soru: 'Köpek saldırırsa koşmak mı durmak mı daha doğru?', cevap: 'Durmak daha doğru. Hayvan denetim birimleri bağırıp koşmak yerine kıpırdamadan durmayı, sakin kalmayı ve köpekle göz göze gelmemeyi öneriyor. Sırtı dönüp kaçmak köpeğin kovalama içgüdüsünü harekete geçiriyor; köpek ilgisini kaybedince yavaşça geri çekilmek gerekiyor.' },
    { soru: 'Köpek saldırısında yere düşersem ne yapmalıyım?', cevap: 'Top gibi kıvrılıp kollarınızla ve ellerinizle başınızı ve boynunuzu korumanız önerilir. Bu sırada bağırmamaya ve yerde yuvarlanmamaya çalışmak gerekiyor. Köpek ilgisini kaybedince yavaşça geri çekilmek önerilir.' },
    { soru: 'Köpek ısırınca yara nasıl yıkanır?', cevap: 'Yara vakit kaybetmeden bol su ve sabunla iyice yıkanır. Dünya Sağlık Örgütü sabun ve akan suyla 15 dakika yıkamayı öneriyor. Sağlık Bakanlığı yıkamadan sonra alkol ya da tentürdiyot gibi iyotlu bir antiseptik uygulanmasını ve en kısa sürede sağlık kuruluşuna gidilmesini istiyor.' },
    { soru: 'Küçük bir köpek ısırığı için de hastaneye gitmek gerekir mi?', cevap: 'Evet, gerekir. Sağlık Bakanlığı kuduz riskli her temasta en kısa sürede sağlık kuruluşuna başvurulmasını istiyor. Kuduz belirtiler başladıktan sonra tedavi edilemiyor; aşılamaya ise olabildiğince erken başlanması gerekiyor. Tetanos aşısının durumu da bu başvuruda değerlendiriliyor.' },
    { soru: 'Isıran köpek neden 10 gün gözlenir?', cevap: 'Kuduz riskini değerlendirmek için. Sağlık Bakanlığı kuduz riskli temasa neden olan kedi ve köpeklerin 10 gün gözlenmesini öneriyor. Dünya Sağlık Örgütü de gözlemin bir veteriner hekimin gözetiminde ve halk sağlığı birimleriyle birlikte, her gün yapılmasını öneriyor.' },
    { soru: 'Çocuklar köpek ısırığından nasıl korunur?', cevap: 'En etkili önlem çocuğu hiçbir köpekle gözetimsiz bırakmamak. Bir çalışmada ısırılan çocukların %72\'si köpeği tanıyordu ve küçük çocuklardaki ısırıkların çoğu evde, tanıdık bir köpekle oldu. Yemek yiyen, uyuyan ya da oyuncağıyla oynayan köpeğe yaklaşılmaması da önerilir.' },
    { soru: 'Kendi köpeğime başka bir köpek saldırırsa ne yapmalıyım?', cevap: 'Köpeğinizi bir veteriner hekime muayene ettirmeniz gerekiyor. Dışarıdan küçük görünen ısırık yaraları da hekim değerlendirmesi gerektirebiliyor. Saldıran köpeğin sahibine ulaşıp kuduz aşısının güncel olup olmadığını öğrenmek de işe yarar.' },
  ],
  kontrolListesi: [
    'Kıpırdamadan durmayı biliyor musunuz?',
    'Yarayı su ve sabunla yıkadınız mı?',
    'Sağlık kuruluşuna başvurdunuz mu?',
    'Köpeğin aşı durumu öğrenildi mi?',
    'Çocuk köpekle yalnız kalıyor mu?',
    'Köpeğinizin kuduz aşısı güncel mi?',
  ],
  kaynaklar: [
    {
      kurum: 'World Health Organization (WHO)',
      baslik: 'Animal bites',
      adres: 'https://www.who.int/news-room/fact-sheets/detail/animal-bites',
    },
    {
      kurum: 'T.C. Sağlık Bakanlığı Halk Sağlığı Genel Müdürlüğü',
      baslik: 'Kuduz Sıkça Sorulan Sorular',
      adres: 'https://hsgm.saglik.gov.tr/depo/birimler/zoonotik-ve-vektorel-hastaliklar-db/Sikca_Sorulan_Sorular/Kuduz.pdf',
    },
    {
      kurum: 'Clark County (Washington), Animal Protection and Control',
      baslik: 'Dog bite prevention',
      adres: 'https://clark.wa.gov/community-development/dog-bite-prevention',
    },
    {
      kurum: 'National Health Service (NHS)',
      baslik: 'Animal and human bites',
      adres: 'https://www.nhs.uk/conditions/animal-and-human-bites/',
    },
    {
      kurum: 'University of Pennsylvania, School of Veterinary Medicine',
      baslik: 'Behavioural characteristics associated with dog bites to children presenting to an urban trauma centre.',
      yazarlar: 'Reisner IR, Nance ML, Zeller JS, Houseknecht EM, Kassam-Adams N, Wiebe DJ',
      dergi: 'Injury Prevention',
      yil: 2011,
      kunye: '17(5):348-353',
      doi: '10.1136/ip.2010.029868',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/21444335/',
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
