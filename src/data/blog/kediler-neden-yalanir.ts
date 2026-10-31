import type { BlogYazi } from './types';

export const kedilerNedenYalanir: BlogYazi = {
  slug: 'kediler-neden-yalanir',
  baslik: 'Kediler Neden Sürekli Yalanır?',
  ozet: 'Kediler tüylerini temizlemek için yalanır ve bu günün büyük bölümünü alabilir. Yalama kaşıntı, ağrı ya da stresle arttığında hekime danışmak gerekir.',
  kapakAlt:
    'Halıda oturup patisini yalayan gri beyaz kedi',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kediler her şeyden önce tüylerini temizlemek ve bakımını yapmak için yalanır.** Bu, kedinin günlük düzeninin normal ve geniş bir parçası; Cornell Kedi Sağlığı Merkezi, kedilerin günün yüzde 30 ile 50\'sini kendilerini temizleyerek geçirdiğini belirtiyor. Sorun, yalamanın sıklığı ya da süresi aşırıya kaçıp tüy kaybına yol açtığında başlıyor.' },
    { kind: 'paragraf', metin: 'Aşağıda kedi dilinin bu işe nasıl uyum sağladığını, yalanmanın ne kadarının normal sayıldığını, yutulan tüyün nereye gittiğini ve yalamanın ne zaman veteriner hekime danışmayı gerektirdiğini araştırma ve veteriner fakültesi kaynaklarıyla anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Gözlenen yalama', 'Ne anlama gelebilir?'], satirlar: [
      ['Kısa, düzenli, baştan kuyruğa doğru temizlik', 'Normal bakım davranışı'],
      ['Uykudan ya da dinlenmeden sonra yalanma', 'Normal; bakım çoğu zaman uyanınca başlıyor'],
      ['Tek bir bölgeye odaklanan yalama', 'O bölgede ağrı olabilir; muayene gerekir'],
      ['Yaygın, vücudun geniş alanına yayılan yalama', 'Kaşıntı olabilir; muayene gerekir'],
      ['Kuyruk dibinde sürekli yalama', 'Pire olabilir; muayene gerekir'],
      ['Tüy kaybı, kel bölge, yara', 'Normal değil; hekime başvurmak gerekir'],
    ]},

    { kind: 'baslik', metin: 'Yalanmak kedi için temel bir bakım davranışı' },
    { kind: 'paragraf', metin: 'Kedi dili bu iş için özel bir yapıya sahip. Georgia Teknoloji Enstitüsü\'nden Alexis Noel ve David Hu, evcil kediden aslana kadar altı kedi türünün dilini yüksek hızlı film, tarama ve bilgisayarlı tomografiyle inceledi. Dili kaplayan sert, arkaya bakan çıkıntıların (papilla) uçlarında içi boş bir boşluk bulunuyor; bu boşluk ağızdaki tükürüğü kendiliğinden çekiyor ve tüylere bırakıyor.' },
    { kind: 'paragraf', metin: 'Yani kedinin dili yalnızca "pürüzlü" değil, tükürüğü tüyün derinine taşıyan bir fırça gibi çalışıyor. Aynı çalışmada araştırmacılar bu yapıdan esinlenerek bir tarak tasarladı ve bu tarağın sıradan bir fırçadan daha az kuvvetle tüyden geçtiğini ve temizlenmesinin daha kolay olduğunu bildirdi.' },

    { kind: 'baslik', metin: 'Ne zaman ve nasıl yalanıyorlar?' },
    { kind: 'paragraf', metin: 'Kaliforniya Üniversitesi Davis Veteriner Fakültesi\'nden Eckstein ve Hart, kedilerin kendini ağızla temizlemesinin düzenini kayda aldı. Videoya alınan 11 kedide yalanma çoğunlukla birden fazla vücut bölgesini kapsıyordu ve baştan kuyruğa doğru, orta düzeyde ama anlamlı bir eğilim gösteriyordu. Uyku ya da dinlenme bittikten sonra yalanmaya başlama olasılığı da artıyordu.' },
    { kind: 'paragraf', metin: 'Aynı çalışmanın ilginç bir sonucu da şu: kedilere 3 gün boyunca yalanmayı engelleyen koruyucu yaka (Elizabeth yakası) takıldı. Yaka çıkarıldıktan sonraki ilk 12 saatte ağızla yalanma, ağızla yalanmayı engellemeyen kontrol yakasına göre yüzde 67 arttı. İkinci 12 saatte bu telafi etkisi kaybolmuştu. Araştırmacılar bu bulguyu, yalanmanın merkezi bir denetim mekanizmasıyla düzenlendiğine işaret eden bulgulardan biri olarak yorumluyor.' },
    { kind: 'yanilgi', baslik: '"Kediler yalnızca güzel görünmek için yalanır"', metin: 'Yalanma temizlik ve bakımdan ibaret değil. Aynı ekibin pire çalışmasında yalanmanın kedinin üzerindeki pireleri gerçekten azalttığı görüldü. Yaka takılan kedilerde pire sayısı kontrol grubunun yaklaşık iki katıydı.' },

    { kind: 'baslik', metin: 'Günün ne kadarı yalanarak geçer?' },
    { kind: 'paragraf', metin: 'Cornell\'den davranış uzmanı Pamela Perry, kedilerin günün yüzde 30 ile 50\'sini kendini temizleyerek geçirdiğini söylüyor. Rakamlar kaynaktan kaynağa farklı: Davis\'teki çalışmada kayda alınan 11 kedide ağızla yalanma tüm sürenin yüzde 4\'ünü, uyku ve dinlenme dışındaki sürenin ise yüzde 8\'ini oluşturdu.' },
    { kind: 'paragraf', metin: 'Kısacası "ne kadar" sorusunun tek bir doğru sayısı yok. Önemli olan, kedinizin kendi olağan düzenine göre bir değişiklik olup olmadığı. Cornell, kediler sık yalandığı için sahiplerin çoğu zaman ancak belirgin tüy kaybı ya da deri lezyonları gördüğünde sorunu fark ettiğini belirtiyor. Bu yüzden bakışı tüyün ve deri görünümüne de çevirmek gerekiyor.' },

    { kind: 'baslik', metin: 'Yutulan tüy nereye gidiyor?' },
    { kind: 'paragraf', metin: 'Dil üzerindeki arkaya bakan çıkıntılar, yalanma sırasında gevşek tüyleri boğaza ve mideye doğru itiyor. Cornell\'e göre tüyün ana yapı maddesi olan keratin sindirilemiyor. Yutulan tüyün büyük bölümü sindirim sisteminden geçip dışkıyla çıkıyor, bir kısmı ise midede birikip tüy yumağına dönüşebiliyor.' },
    { kind: 'paragraf', metin: 'Cornell, kedinin bir ya da iki haftada bir tüy yumağı çıkarmasını alışılmadık bulmuyor ve bunun sahibine verdiği rahatsızlık dışında endişe edilecek bir durum olmadığını belirtiyor. Tüy yumağının mevsimsel tüy dökümü dönemlerinde daha sık görüldüğü de aynı kaynakta yer alıyor. Cornell tüy yumağı sorunlarını en aza indirmek için kedinin tüyünün her gün fırçalanıp taranmasını öneriyor; ayrıntılar için [[kedi-tuy-dokumu|kedilerde tüy dökümü]] ve [[kedilerde-malt-ne-ise-yarar|kedilerde malt]] yazılarına bakılabilir.' },
    { kind: 'uyari', metin: 'Kedi halsizse, bir iki günden uzun süredir yemek yemiyorsa ya da tekrar eden, sonuç vermeyen öğürme ve kusma nöbetleri geçiriyorsa gecikmeden veteriner hekime götürülmesi gerekiyor. Cornell, bu tablonun tüy yumağından başka bir sindirim ya da solunum sorununa işaret edebileceğini de belirtiyor. Hekim onayı olmadan kediye müshil ya da tüy yumağı için ürün vermemek gerekiyor.' },

    { kind: 'baslik', metin: 'Yalama ne zaman fazlalaşıyor?' },
    { kind: 'paragraf', metin: 'Cornell\'den Prof. Emeritus William Miller, kedilerin vücutlarının kaşıntılı ya da ağrılı bir bölgesini yaladığını belirtiyor. Ağrı varsa yalama o bölgeye odaklanıyor; kaşıntılı hastalıklarda ise yalama daha yaygın oluyor. Kuyruk dibinde süren yalama pire istilasını düşündürebiliyor; polen ya da gıda alerjisi olan kediler ise sırtlarını, karınlarını ya da vücudun başka bölgelerini yalayabiliyor.' },
    { kind: 'paragraf', metin: 'Aşırı yalamanın ölçütü, Cornell\'e göre çok sayıda tüy yumağına ya da tüy kaybına yol açması. Yalama deri yüzeyini aşındırırsa enfeksiyon gelişebiliyor ve enfeksiyon yalamayı artırarak kısır döngü yaratabiliyor. Gıda alerjisiyle ilişkili deri sorunlarında da aşırı yalama ve buna bağlı tüy yutma görülebildiği belirtiliyor. Pireyi evde anlamak için [[kedilerde-pire-nasil-anlasilir|kedilerde pire nasıl anlaşılır]] yazısına bakılabilir.' },
    { kind: 'yanilgi', baslik: '"Aşırı yalayan kedinin sorunu mutlaka stres kaynaklıdır"', metin: 'Stres bir neden olabilir, ama Cornell tıbbi nedenlerin önce dışlanması gerektiğini vurguluyor. Tüy kaybına yol açan yalamada ağrı, kaşıntı, pire ya da alerji gibi nedenleri ayırt etmek hekimin işi; davranışsal neden ancak bunlar değerlendirildikten sonra düşünülüyor.' },

    { kind: 'baslik', metin: 'Stres ve alışkanlık' },
    { kind: 'paragraf', metin: 'Kediler düzeni ve öngörülebilirliği sever. Cornell, yakın zamanda taşınmanın, evdeki başka bir hayvanın gelmesi ya da kaybının, hatta günlük düzenin değişmesinin bile kedide kaygıya yol açabildiğini belirtiyor. Bu durumda yalamak kediyi yatıştıran bir davranışa dönüşebiliyor ve neden doğru tespit edilip giderilmezse alışkanlık hâlini alabiliyor.' },
    { kind: 'paragraf', metin: 'Tıbbi sorunlar dışlandıktan sonra Cornell\'in önerdikleri şöyle:' },
    { kind: 'liste', maddeler: [
      'Değişiklikleri ve yeni tanışmaları kademeli yapmak',
      'Yeni bir eve taşınırken kedinin tanıdık yatağını yanında götürmek',
      'Kedinin kendini güvende hissedeceği yüksek yerler eklemek',
      'Günde on ile on beş dakika kediyle oyun oynamak',
    ]},
    { kind: 'paragraf', metin: 'Neden ortadan kalksa bile yalama alışkanlığı sürebiliyor; Cornell bunu tırnak yiyen insanlara benzetiyor ve çözümün sahibin zamanını ve sabrını gerektirdiğini söylüyor.' },
  ],
  kontrolListesi: [
    'Kel bölge ya da kabuklanma var mı?',
    'Tek bir noktayı sürekli yalıyor mu?',
    'Tüy yumağı haftalardır sıklaştı mı?',
    'Pire koruması düzenli mi?',
    'Evde yakın zamanda değişiklik var mı?',
    'Günlük fırçalama yapılıyor mu?',
  ],
  sss: [
    { soru: 'Kediler neden sürekli yalanır?', cevap: 'Kediler tüylerini temizlemek ve bakımını yapmak için yalanır. Cornell, kedilerin günün yüzde 30 ile 50\'sini kendini temizleyerek geçirdiğini belirtiyor. Yalanmanın kedinin üzerindeki pireleri azalttığı da bir çalışmada gösterildi.' },
    { soru: 'Kedinin çok yalanması normal mi?', cevap: 'Düzenli bakım yalaması normal, ama tüy kaybına, kel bölgeye ya da çok sayıda tüy yumağına yol açan yalama normal değil. Tek bir bölgeye odaklanan veya aniden artan yalamada kedinin veteriner hekim tarafından muayene edilmesi gerekiyor.' },
    { soru: 'Kedi dili neden pürüzlüdür?', cevap: 'Dili kaplayan arkaya bakan çıkıntıların (papilla) uçları içi boş. Bu boşluklar tükürüğü kendiliğinden çekip tüylere bırakıyor. Böylece dil, tükürüğü tüyün derinine taşıyan ve tüyü tarayan bir fırça gibi görev yapıyor.' },
    { soru: 'Kedi yalanırken tüy yutarsa ne olur?', cevap: 'Tüyün ana maddesi keratin sindirilemiyor. Yutulan tüyün büyük bölümü dışkıyla çıkıyor, bir kısmı midede birikip tüy yumağı olarak çıkarılabiliyor. Cornell bir ya da iki haftada bir tüy yumağı çıkarmayı endişe verici bulmuyor.' },
    { soru: 'Kedi tüy yumağı çıkaramıyor, ne yapılmalı?', cevap: 'Kedi halsizse, bir iki günden uzun süredir yemiyorsa ya da tekrar tekrar öğürüp kusuyorsa gecikmeden veteriner hekime başvurmak gerekiyor. Kediye hekim onayı olmadan müshil ya da benzeri bir ürün vermemek gerekiyor.' },
    { soru: 'Kediler stresliyken daha çok mu yalanır?', cevap: 'Evet, olabilir. Cornell taşınma, evde yeni bir hayvanın gelmesi ya da günlük düzenin değişmesinin kaygıya yol açabildiğini, yalamanın da kediyi yatıştırabildiğini belirtiyor. Ancak önce tıbbi nedenlerin hekim tarafından dışlanması gerekiyor.' },
    { soru: 'Kuyruk dibini sürekli yalayan kedide ne düşünülür?', cevap: 'Cornell kuyruk dibinde süren yalamanın pire istilasını düşündürebildiğini belirtiyor. Bu bir ipucudur, tanı değildir. Nedeni belirlemek ve uygun korumayı seçmek için kedinin veteriner hekim tarafından muayene edilmesi gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Cats that Lick Too Much',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/cats-lick-too-much',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'The Danger of Hairballs',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/danger-hairballs',
    },
    {
      kurum: 'Georgia Institute of Technology, George W. Woodruff School of Mechanical Engineering',
      yazarlar: 'Noel AC, Hu DL',
      baslik: 'Cats use hollow papillae to wick saliva into fur',
      dergi: 'Proceedings of the National Academy of Sciences of the United States of America',
      yil: 2018,
      kunye: '115(49):12377-12382',
      doi: '10.1073/pnas.1809544115',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/30455290/',
    },
    {
      kurum: 'University of California Davis, School of Veterinary Medicine',
      yazarlar: 'Eckstein RA, Hart BL',
      baslik: 'The organization and control of grooming in cats',
      dergi: 'Applied Animal Behaviour Science',
      yil: 2000,
      kunye: '68(2):131-140',
      doi: '10.1016/s0168-1591(00)00094-0',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/10771321/',
    },
    {
      kurum: 'University of California Davis, School of Veterinary Medicine',
      yazarlar: 'Eckstein RA, Hart BL',
      baslik: 'Grooming and control of fleas in cats',
      dergi: 'Applied Animal Behaviour Science',
      yil: 2000,
      kunye: '68(2):141-150',
      doi: '10.1016/s0168-1591(00)00095-2',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/10771322/',
    },
  ],
};
