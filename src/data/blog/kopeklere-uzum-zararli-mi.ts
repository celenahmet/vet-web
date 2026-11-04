import type { BlogYazi } from './types';

export const kopeklereUzumZararliMi: BlogYazi = {
  slug: 'kopeklere-uzum-zararli-mi',
  baslik: 'Köpeklere Üzüm Zararlı mı?',
  ozet: 'Üzüm ve kuru üzüm bazı köpeklerde ani böbrek hasarına yol açabiliyor. Güvenli miktar bilinmiyor; yutulduysa vakit kaybetmeden veteriner hekime gidilmeli.',
  kapakAlt:
    'Tezgâhtaki üzüm kasesine bakan golden köpek',
  kategori: 'Beslenme',
  tarih: '2026-11-06',
  bloklar: [
    { kind: 'paragraf', metin: '**Evet, üzüm ve kuru üzüm köpekler için zararlı: bazı köpeklerde ani böbrek yetmezliğine yol açabiliyor ve güvenli olduğu bilinen bir miktar yok.** Merck Veterinary Manual, üzüm, kuru üzüm ve Zante kuşüzümünün yutulmasının köpeklerde zaman zaman böbrek yetmezliğiyle ilişkilendirildiğini yazıyor. Tek bir tane bile yutulmuş olsa, vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },
    { kind: 'paragraf', metin: 'Bu yazıda hangi ürünlerin risk taşıdığını, zehirli maddenin ne olduğuna dair bugünkü bilgiyi, miktarın neden kestirilemediğini, belirtilerin ne zaman başladığını ve yutulma şüphesinde veteriner hekime neler söylenmesi gerektiğini anlatıyoruz. Teşhis ve tedavi bu yazının konusu değil; bunlar yalnızca veteriner hekimin işi.' },

    { kind: 'tablo', basliklar: ['Ürün', 'Köpek için durum'], satirlar: [
      ['Taze üzüm', 'Köpeklerde böbrek yetmezliğiyle ilişkilendirilmiş'],
      ['Kuru üzüm, sultani', 'Köpeklerde böbrek yetmezliğiyle ilişkilendirilmiş'],
      ['Zante kuşüzümü (korint)', 'Üzümle aynı cinsten, aynı riski taşıyor'],
      ['Demirhindi (tamarind)', 'Köpeklerde böbrek yetmezliği bildirilmiş'],
      ['Krem tartar (cream of tartar)', 'Köpeklerde böbrek hasarı bildirilmiş'],
      ['Ribes cinsi gerçek frenk üzümü', 'Böbrek hasarıyla ilişkilendirilmemiş'],
    ]},

    { kind: 'baslik', metin: 'Hangi ürünler risk taşıyor?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual, üzüm, kuru üzüm ve Zante kuşüzümünün hepsinin Vitis cinsinden olduğunu, bunların yutulmasının köpeklerde zaman zaman böbrek yetmezliğiyle ilişkilendirildiğini belirtiyor. Aynı kaynak demirhindi yutulmasının da köpeklerde böbrek yetmezliğine yol açtığını yazıyor. Ribes cinsinden gerçek frenk üzümü ise böbrek hasarıyla ilişkilendirilmemiş; yine de köpeğe yedirilecek her yeni besin için veteriner hekime danışmak yerinde olur.' },
    { kind: 'paragraf', metin: 'Sofradaki yaygın besinler de aynı başlık altında düşünülmeli. Kuru üzüm içeren her ürün, içindeki meyve nedeniyle aynı riski taşıyor. Pişirmenin ya da başka bir ürünün içine karışmasının riski azalttığını gösteren bir kaynak bulunmuyor. Köpeklere zararlı diğer sofra besinlerinin özeti için [[kopeklere-zararli-yiyecekler|köpeklere zararlı yiyecekler]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Üzüm neden zararlı sayılıyor?' },
    { kind: 'paragraf', metin: 'Zehirli maddenin ne olduğu uzun süre bilinmiyordu. ASPCA Hayvan Zehirlenme Merkezi\'nden ve Cornell Üniversitesi Veteriner Fakültesi\'nden araştırmacıların 2022\'de yayımladığı seri, krem tartar ve demirhindi yutan köpeklerde de üzüm zehirlenmesine benzer böbrek hasarı geliştiğini bildirdi. Yazarlar ortak noktanın tartarik asit olduğunu belirterek bu maddeyi üzümde ve demirhindide olası zehirli bileşen olarak öne sürdü.' },
    { kind: 'paragraf', metin: 'Burada "öne sürdü" ifadesi önemli: bu hâlâ kesinleşmiş bir mekanizma değil, en güçlü aday. Eubig ve arkadaşlarının 2005\'teki büyük incelemesi de böbrek hasarının mekanizmasının belirsiz olduğunu yazıyordu. Pratikte sonuç değişmiyor: üzüm ve kuru üzüm, nedeni tam çözülmemiş olsa da risk taşıyan besinler arasında sayılıyor.' },

    { kind: 'baslik', metin: 'Ne kadar yutulursa risk doğuyor?' },
    { kind: 'paragraf', metin: 'Bu sorunun kesin bir cevabı yok. Bern Üniversitesi\'nden araştırmacılar, böbrek hasarı için gereken meyve miktarının tam olarak bilinmediğini, tahminlerin klinik vakalara dayandığını belirtiyor. Merck Veterinary Manual ise meyvelerdeki tartarik asit miktarının değiştiğini, bu yüzden etkinin de tutarsız olduğunu yazıyor.' },
    { kind: 'paragraf', metin: 'Aynı kaynak genel bir risk göstergesi de veriyor: vücut ağırlığının her 4,5 kilogramı için birden fazla üzüm ya da kuru üzüm, böbrek etkisi için yeterli tartarik asit içerebilir. Bu bir güvenli sınır değil, bir risk göstergesidir. Küçük bir köpekte az sayıda tane bile bu göstergeyi aşabilir. Bu yüzden "az yedi, sorun olmaz" demek doğru olmaz.' },
    { kind: 'yanilgi', baslik: '"Daha önce yemişti, bir şey olmadı"', metin: 'Merck Veterinary Manual, tartarik asit miktarının üzümden üzüme değiştiğini ve bu yüzden etkinin tutarsız olduğunu yazıyor. Bir kez zarar görmemek, bir sonraki seferde de zarar görmeyeceği anlamına gelmiyor.' },

    { kind: 'baslik', metin: 'Belirtiler ne zaman ortaya çıkıyor?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual\'a göre köpeklerin çoğunda kusma ya da ishal yutmadan sonraki 6 ile 12 saat içinde başlıyor. Halsizlik, iştahsızlık, susuzluk artışı ve titreme de bildirilen diğer belirtiler arasında. İdrar üretiminin azaldığı ya da hiç olmadığı böbrek yetmezliği ise 24 ile 48 saat içinde gelişebiliyor.' },
    { kind: 'paragraf', metin: 'Eubig ve arkadaşlarının 43 köpekle yaptığı incelemede köpeklerin hepsi kusmuştu. İdrar miktarının azalması, yürüyüşte dengesizlik ya da halsizlik kötü seyirle ilişkiliydi. Bern\'deki 15 köpeklik seride ise hastaların 11\'inde (yüzde 73) ön beyin, beyincik ya da denge sistemiyle ilgili belirgin sinirsel belirtiler görüldü; bu belirtiler bazı köpeklerde tabloya egemen oldu.' },
    { kind: 'uyari', metin: 'Üzüm ya da kuru üzüm yutulduğundan şüphe ediliyorsa belirtilerin başlaması beklenmemeli. Merck Veterinary Manual, henüz belirti göstermeyen köpeklerde erken müdahalenin önerilen yol olduğunu belirtiyor. Kusma, ishal, halsizlik gibi bir belirti varsa da vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Evde kendi başına müdahale önerilmez.' },

    { kind: 'baslik', metin: 'Seyir ne kadar ağır olabiliyor?' },
    { kind: 'paragraf', metin: 'ASPCA Hayvan Zehirlenme Merkezi kayıtlarından derlenen 43 köpeklik seride köpeklerin yüzde 53\'ü hayatta kaldı. Bern Üniversitesi\'nin 15 köpeklik serisinde de 8 köpek (yüzde 53) hayatta kaldı. Bu oranlar üzüm yiyen tüm köpeklerin değil, yutmanın ardından böbrek değerleri yükselen köpeklerin oranı. Yani "üzüm yiyen her köpek ölür" anlamına gelmiyor, ama bir kez böbrek hasarı geliştiğinde tablonun ağır olabildiğini gösteriyor.' },
    { kind: 'paragraf', metin: 'Aynı Bern çalışması, sinirsel belirtilerin birçok köpekte düzeldiğini de bildiriyor: hayatta kalan 8 köpekten 5\'i tam nörolojik iyileşme gösterdi. Bunun dışında tedavi ayrıntıları bu yazının konusu değil; böbrek yetmezliğinin nasıl yönetileceği veteriner hekimin kararıdır. Kusma gibi belirtilerin genel bir değerlendirmesi için [[kopegim-kusuyor|köpeğim kusuyor]] yazısı okunabilir.' },

    { kind: 'baslik', metin: 'Yutulursa veteriner hekime ne anlatılmalı?' },
    { kind: 'paragraf', metin: 'Telefonla ya da kapıda hızlı karar verilebilmesi için şu bilgilerin hazır olması işe yarıyor:' },
    { kind: 'liste', maddeler: [
      'Ne yutulduğu: taze üzüm, kuru üzüm, içinde kuru üzüm olan bir ürün ya da başka bir şey',
      'Tahmini miktar ve yutma zamanı',
      'Köpeğin yaklaşık kilosu',
      'Kusma, ishal, halsizlik gibi bir belirtinin başlayıp başlamadığı',
      'Ürün ambalajı varsa içindekiler listesi',
    ]},
    { kind: 'paragraf', metin: 'Gece ya da hafta sonu ise yakındaki kliniğin acil hattı ya da [[nobetci-veteriner|nöbetçi veteriner]] bilgisi kullanılabilir. Genel zehirlenme şüphesinde nelere dikkat edileceği [[kopeklerde-zehirlenme|köpeklerde zehirlenme]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Kediler için durum nedir?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual, bildirilen vakaların köpeklerde görüldüğünü belirtiyor. Kedi ve ferrette üzüm ya da kuru üzüm yutulduktan sonra böbrek yetmezliğine dair anekdot düzeyinde bildirimler var, ancak bu türlerde yayımlanmış vaka raporu yok. Yani kedilerde riskin olmadığı söylenemez; kediye de üzüm verilmemesi daha güvenli görünüyor.' },

    { kind: 'baslik', metin: 'Evde riski nasıl azaltmak mümkün?' },
    { kind: 'paragraf', metin: 'Köpeklerde üzüm zehirlenmesi çoğu zaman kasıtlı verilmekten değil, ulaşılabilir yerde unutulan bir kaseden ya da bahçedeki bir kaynaktan kaynaklanıyor. Bern çalışmasındaki köpeklerin yuttukları arasında kuru üzüm, taze üzüm, kompostta bulunan üzüm ve gübre olarak kullanılan üzüm posası vardı.' },
    { kind: 'liste', maddeler: [
      'Üzüm kasesi, kuru üzümlü kuruyemiş ve atıştırmalıklar köpeğin ulaşamayacağı yerde tutulur',
      'Misafirler ve çocuklar, köpeğe üzüm vermemesi gerektiği konusunda bilgilendirilir',
      'Bağ bahçe artıkları, kompost ve üzüm posası köpeğin erişemeyeceği yerde saklanır',
      'Yutma şüphesi varsa miktarın küçük görünmesine güvenilmez',
    ]},
  ],
  sss: [
    {
      soru: 'Köpek tek bir üzüm yerse ne olur?',
      cevap: 'Tek bir üzümün sonucu önceden kestirilemiyor. Merck Veterinary Manual, meyvelerdeki tartarik asit miktarının değiştiğini ve etkinin tutarsız olduğunu yazıyor. Bu yüzden köpek ne kadar yemiş olursa olsun veteriner hekime bilgi vermek ve gerekirse muayene ettirmek önerilir.',
    },
    {
      soru: 'Kuru üzüm üzümden daha mı tehlikeli?',
      cevap: 'İkisi de riskli sayılıyor. Merck Veterinary Manual üzümü, kuru üzümü ve Zante kuşüzümünü aynı grupta ele alıyor. Bu nedenle birinin diğerinden daha güvenli olduğu varsayılmamalı; ikisi için de veteriner hekime başvurmak gerekiyor.',
    },
    {
      soru: 'Köpek kuru üzümlü kek ya da kurabiye yerse tehlikeli olur mu?',
      cevap: 'İçinde kuru üzüm varsa risk aynı kabul edilir. Pişirmenin ya da başka bir ürüne karışmasının riski azalttığını gösteren bir kaynak bulunmuyor. Miktarı tahmin etmeye çalışmak yerine ürünün adı ve yutulma zamanıyla veteriner hekime başvurulması gerekiyor.',
    },
    {
      soru: 'Belirti yoksa beklemek yeterli olur mu?',
      cevap: 'Hayır, belirtilerin başlamasını beklemek önerilmez. Merck Veterinary Manual, kusma ya da ishalin çoğunlukla yutmadan 6 ile 12 saat sonra başladığını, henüz belirti göstermeyen köpeklerde erken müdahalenin önerilen yol olduğunu belirtiyor. Bu süreyi beklemek erken başvuru fırsatını kaçırabilir.',
    },
    {
      soru: 'Üzümdeki zehirli madde kesin olarak biliniyor mu?',
      cevap: 'Hayır, kesin değil. 2022\'de yayımlanan bir seri, tartarik asidin üzümde ve demirhindide olası zehirli bileşen olduğunu öne sürdü, çünkü krem tartar ve demirhindi yutan köpeklerde de benzer böbrek hasarı görüldü. Mekanizma hâlâ araştırılıyor.',
    },
    {
      soru: 'Kediler üzüm yiyebilir mi?',
      cevap: 'Güvenli olduğu söylenemez. Merck Veterinary Manual, kedi ve ferrette üzüm ya da kuru üzüm sonrası böbrek yetmezliğine dair anekdot düzeyinde bildirimler olduğunu, ancak bu türlerde yayımlanmış vaka raporu bulunmadığını yazıyor. Kediye üzüm verilmemesi daha güvenli.',
    },
    {
      soru: 'Bağda ya da bahçede gezen köpek için dikkat edilecek bir şey var mı?',
      cevap: 'Evet. Bern Üniversitesi\'nin serisinde köpeklerin yuttukları arasında kompostta bulunan üzüm ve gübre olarak kullanılan üzüm posası da vardı. Bağ bahçe artıklarının, kompostun ve posanın köpeğin ulaşamayacağı yerde tutulması önerilir.',
    },
  ],
  kontrolListesi: [
    'Ulaşılabilir yerde üzüm var mı?',
    'Köpeğin ulaşacağı kuru üzüm var mı?',
    'Bahçede üzüm artığı var mı?',
    'Bilgilendirilmeyen misafir var mı?',
    'Nöbetçi veteriner numarası kayıtlı mı?',
    'Yutulan miktar belli mi?',
  ],
  kaynaklar: [
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Grape, Raisin, and Tamarind (Vitis spp, Tamarindus spp) Toxicosis in Dogs',
      adres: 'https://www.merckvetmanual.com/toxicology/food-hazards/grape-raisin-and-tamarind-vitis-spp-tamarindus-spp-toxicosis-in-dogs',
    },
    {
      kurum: 'University of Bern, Vetsuisse Faculty, Department of Clinical Veterinary Medicine',
      baslik: 'Toxicosis with grapes or raisins causing acute kidney injury and neurological signs in dogs',
      yazarlar: 'Schweighauser A, Henke D, Oevermann A, Gurtner C, Francey T',
      dergi: 'Journal of Veterinary Internal Medicine',
      yil: 2020,
      kunye: '34(5):1957-1966',
      doi: '10.1111/jvim.15884',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/32893916/',
    },
    {
      kurum: 'ASPCA Animal Poison Control Center',
      baslik: 'Acute renal failure in dogs after the ingestion of grapes or raisins: a retrospective evaluation of 43 dogs (1992-2002)',
      yazarlar: 'Eubig PA, Brady MS, Gwaltney-Brant SM, Khan SA, Mazzaferro EM, Morrow CM',
      dergi: 'Journal of Veterinary Internal Medicine',
      yil: 2005,
      kunye: '19(5):663-674',
      doi: '10.1111/j.1939-1676.2005.tb02744.x',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/16231710/',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine ve ASPCA Animal Poison Control Center',
      baslik: 'Acute kidney injury in dogs following ingestion of cream of tartar and tamarinds and the connection to tartaric acid as the proposed toxic principle in grapes and raisins',
      yazarlar: 'Wegenast CA, Meadows ID, Anderson RE, Southard T, González Barrientos CR, Wismer TA',
      dergi: 'Journal of Veterinary Emergency and Critical Care',
      yil: 2022,
      kunye: '32(6):812-816',
      doi: '10.1111/vec.13234',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/35869755/',
    },
  ],
};
