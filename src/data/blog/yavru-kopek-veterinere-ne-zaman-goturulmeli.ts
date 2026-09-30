import type { BlogYazi } from './types';

/**
 * KOPEK. Plan no 4. Asi zamanlamasi ve sosyallesme notu WSAVA 2024 PDF'inden; yavru
 * donemi tanimi, ziyaret sikligi, dis ve parazit maddeleri AAHA 2019 Canine Life Stage
 * Guidelines PDF'inden (Table 1-2); parvovirus bilgisi Merck Veterinary Manual'in
 * profesyonel surumunden (Haziran 2025); parazit takvimi ESCCAP GL1 2025'ten.
 * 30.09.2026.
 *
 * Okuyucu kalir mi (Ahmet 30.09): kedi yazisinin kopyasi DEGIL. Kopekte one cikan iki
 * sey parvovirus ve sosyallesme penceresi; ikisi birbirine gerilim yaratiyor ve yazi
 * bu gerilimi cozuyor (asisi bitmeden disari cikmali mi).
 */
export const yavruKopekVeterinereNeZamanGoturulmeli: BlogYazi = {
  slug: 'yavru-kopek-veterinere-ne-zaman-goturulmeli',
  baslik: 'Yavru Köpek Ne Zaman Veterinere Götürülmeli?',
  ozet: 'İlk muayene yavru eve gelir gelmez; sonra aşı dizisi boyunca 3-4 haftada bir. Parvovirüs riski ile sosyalleşme ihtiyacı arasındaki denge ve ilk yılın takvimi.',
  kapakAlt:
    'Yavru köpeğin ilk veteriner ziyareti konulu yazının kapak görseli; aşı dizisi ve ilk yılın kontrol takvimi',
  kategori: 'Köpek',
  tarih: '2026-09-30',
  bloklar: [
    { kind: 'paragraf', metin: 'Yavru köpeğin ilk veteriner ziyareti **eve geldikten sonra en kısa sürede** yapılıyor. Sonrasında Amerikan Hayvan Hastaneleri Birliği’nin (AAHA) 2019 kılavuzuna göre yavru dönemi boyunca kontroller **3-4 haftada bir** sürüyor. Dünya Küçük Hayvan Veteriner Birliği’ne (WSAVA) göre temel aşılar 6-8 haftada başlıyor, 16 haftalık olana kadar 2-4 haftada bir tekrarlanıyor ve 26. haftada ya da sonrasında bir doz daha yapılıyor.' },
    { kind: 'paragraf', metin: 'Yavru köpekte bu takvimi en çok iki şey belirliyor: aşı dizisi tamamlanana kadar süren parvovirüs riski ve aynı haftalara denk gelen sosyalleşme dönemi. İkisi birbirine ters yönde çekiyor; yazının ortasındaki bölüm bu dengenin nasıl kurulduğunu anlatıyor.' },

    { kind: 'tablo', basliklar: ['Zaman', 'Ziyaretin konusu'], satirlar: [
      ['Eve geldiği ilk günler', 'İlk muayene, parazit, beslenme, süt dişleri, davranış'],
      ['6-8 hafta', 'İlk temel aşı: gençlik hastalığı, adenovirüs, parvovirüs'],
      ['16 haftaya kadar, 2-4 haftada bir', 'Temel aşı tekrarları; kontroller 3-4 haftada bir'],
      ['26 hafta ve sonrası (yaklaşık 6 ay)', 'Temel aşı tekrar dozu, kısırlaştırma zamanlaması'],
      ['6-9 ay (ırka göre)', 'Hızlı büyüme bitiyor, 6-12 ayda bir kontrole geçiliyor'],
    ] },

    { kind: 'baslik', metin: 'Yavru dönemi büyüme bitene kadar sürüyor' },
    { kind: 'paragraf', metin: 'AAHA kılavuzu yavru dönemini doğumdan hızlı büyümenin bittiği zamana kadar tanımlıyor; bu da ırka ve büyüklüğe göre yaklaşık 6 ile 9 ay arası. Küçük ırk bir köpek yavru dönemini daha erken bitirirken büyük ırk bir köpek daha uzun süre yavru takvimiyle izleniyor. Kılavuz bu dönemde ziyaret sıklığını 3-4 haftada bir, sonraki yetişkinlik dönemlerinde 6-12 ayda bir olarak veriyor.' },
    { kind: 'paragraf', metin: 'İlk muayenede hekim yavrunun genel durumunun yanında AAHA’nın saydığı konulara bakıyor: süt dişlerinin durumu ve çene kapanışı, parazit programı, beslenme ve davranış. Kılavuz çiğ et ile beslemenin risklerinin de bu dönemde konuşulmasını öneriyor.' },

    { kind: 'baslik', metin: 'Aşı dizisi 16. haftayı geçene kadar sürüyor' },
    { kind: 'paragraf', metin: 'Yavru, anneden aldığı antikorlarla doğuyor ve bu antikorlar hem koruyor hem de aşının etkisini engelliyor. WSAVA’ya göre bu koruma çoğu yavruda 8-12. haftalarda aşıya izin verecek düzeye iniyor, ama bazılarında daha uzun sürüyor. Hangi yavruda ne zaman indiği bilinmediği için temel aşılar tek doz değil, 16. haftayı geçene kadar tekrarlanan bir dizi olarak yapılıyor.' },
    { kind: 'paragraf', metin: '26. haftadaki doz, eski "bir yıl sonra rapel" alışkanlığının yerini alıyor: WSAVA, 16. haftada hâlâ anne antikoru taşıyan az sayıdaki yavrunun korunmasız kaldığı süreyi kısaltmak için bu dozu 6 aylıkken öneriyor. Kuduz ve leptospiroz aşılarının zamanı [[kopek-asi-takvimi|köpek aşı takvimi]] yazısında ayrıntılı.' },

    { kind: 'yanilgi', baslik: '"Tek parvo aşısı yavruyu korur" yanılgısı', metin: 'Anne antikoru yüksek olan yavruda erken yapılan aşı hiç yanıt oluşturmayabiliyor. Koruma, dizinin son dozu 16. haftayı geçtikten sonra güvenilir hâle geliyor. Bu yüzden ilk aşıdan sonra yavru tam korunmuş sayılmıyor.' },

    { kind: 'baslik', metin: 'Dizi tamamlanana kadar en büyük risk parvovirüs' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı’na göre parvovirüs enteriti çok bulaşıcı ve en çok **6 hafta ile 6 ay** arasındaki, aşısız ya da aşı dizisi tamamlanmamış yavruları etkiliyor. Virüs dışkıyla ve dışkıyla kirlenmiş eşya, ayakkabı, ortam yoluyla bulaşıyor. Ev içinde oda sıcaklığında **en az 2 ay**, dışarıda güneş ve kurumadan korunduğunda aylarca, belki yıllarca canlı kalabiliyor ve birçok yaygın temizlik ürününe dayanıklı.' },
    { kind: 'paragraf', metin: 'Aynı kaynağa göre belirtiler iştahsızlık, halsizlik, kusma ve çoğu zaman kanlı ishal. Destek tedavisiyle köpeklerin yüzde 70-90’ı iyileşiyor; tedavinin erken başlaması bu yüzden belirleyici. Aşı dizisi tamamlanmamış bir yavruda bu belirtilerden biri görülmesi, vakit kaybetmeden veteriner hekime ulaşılması gereken bir tablodur. Yetişkin köpekte kusmanın ne zaman acil olduğu [[kopegim-kusuyor|köpeğim kusuyor]] yazısında.' },

    { kind: 'yanilgi', baslik: '"Evden çıkmayan yavru parvo kapmaz" yanılgısı', metin: 'Parvovirüs yavruya köpekten köpeğe olduğu kadar ayakkabı, eşya ve dışarıdan getirilen her şeyle de ulaşabiliyor ve ev içinde en az iki ay canlı kalabiliyor. Evden çıkmamak riski düşürüyor ama sıfırlamıyor; asıl koruma aşı dizisinin tamamlanması.' },

    { kind: 'baslik', metin: 'Sosyalleşme aşıların bitmesini beklemiyor' },
    { kind: 'paragraf', metin: 'Yavru köpeğin yeni insanlara, seslere, ortamlara ve köpeklere en kolay alıştığı dönem, aşı dizisiyle aynı haftalara denk geliyor. WSAVA 2024 kılavuzu bu duyarlı dönemde **dikkatli bir sosyalleşmenin aşı dizisi tamamlanmadan başlayabileceğini** açıkça yazıyor; AAHA da tutma ve alıştırmaya yenidoğan döneminden başlanmasını öneriyor.' },
    { kind: 'paragraf', metin: 'Parvovirüs riski ile sosyalleşme ihtiyacı arasındaki denge, ortamı seçerek kuruluyor:' },
    { kind: 'liste', maddeler: [
      'Aşıları tam, sağlıklı olduğu bilinen köpeklerle, bilinen bir evde tanışma',
      'Temizliğine dikkat edilen, aşı şartı arayan yavru sınıfları',
      'Kucakta ya da taşıma çantasında şehir sesleri, araba, farklı zeminler',
      'Aşı durumu bilinmeyen köpeklerin yoğun olduğu parklardan ve dışkı bulunan alanlardan dizi bitene kadar uzak durma',
    ] },
    { kind: 'paragraf', metin: 'Bu dönemde yalnız kalmaya kısa sürelerle alıştırmak da ileride ayrılık sorunlarını azaltmaya yardımcı olabiliyor; belirtileri ve yaklaşımı [[kopeklerde-ayrilik-kaygisi|köpeklerde ayrılık kaygısı]] yazısında.' },

    { kind: 'yanilgi', baslik: '"Aşısı bitmeden yavru hiç dışarı çıkmamalı" yanılgısı', metin: 'Tam yalıtım parvovirüs riskini düşürse de sosyalleşme dönemini kaçırmak, ömür boyu sürebilen korku ve davranış sorunlarına yol açabiliyor. WSAVA’nın önerisi yalıtım değil, dikkatli sosyalleşme: bilinen ve aşılı köpekler, temiz ortamlar, kucakta dış dünya.' },

    { kind: 'baslik', metin: 'Parazit programı ikinci haftada başlamış olmalı' },
    { kind: 'paragraf', metin: 'AAHA ve Avrupa Evcil Hayvan Parazitleri Bilim Konseyi (ESCCAP) yavru köpekte iç parazit uygulamasının 2 haftalıkken başlamasını ve 2 haftada bir tekrarlanmasını öneriyor; yuvarlak solucan anneden doğumdan önce ve sütle geçebiliyor. Yavru 8 haftalıkken sahiplenildiyse ilk ziyarette önceki uygulamalar soruluyor ve program oradan sürüyor.' },
    { kind: 'paragraf', metin: 'AAHA ilk yılda dışkı incelemesinin daha sık yapılmasını da öneriyor, çünkü yavrularda bağırsak parazitleri yaygın ve bir kısmı insana geçebiliyor. Sıklığın yaşam biçimine göre nasıl ayarlandığı [[kopeklerde-ic-ve-dis-parazit|köpeklerde iç ve dış parazit]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Süt dişleri ve çene kapanışı bu dönemde izleniyor' },
    { kind: 'paragraf', metin: 'AAHA kılavuzu yavru muayenesinde süt dişlerinin, yerinde kalmış süt dişlerinin, eksik ya da fazla dişin ve çene kapanışının değerlendirilmesini öneriyor. Kalıcı diş çıktığı hâlde düşmeyen süt dişi, dişlerin yanlış yerleşmesine yol açabiliyor.' },
    { kind: 'paragraf', metin: 'Kılavuza göre yerinde kalmış süt dişleri, kısırlaştırma sırasında aynı anestezide alınabiliyor; bu da iki ayrı anesteziyi bire indiriyor. Kısırlaştırma zamanının köpeğin büyüklüğüne göre nasıl belirlendiği [[kopek-ne-zaman-kisirlastirilmali|köpek ne zaman kısırlaştırılmalı]] yazısında.' },

    { kind: 'baslik', metin: 'Kimlik ve ilk yılın diğer başlıkları' },
    { kind: 'paragraf', metin: 'Mikroçip, kaybolan köpeğin sahibine dönmesinin en güvenilir yolu ve genellikle yavru döneminde, aşı ziyaretlerinden birinde takılıyor; nasıl çalıştığı [[mikrocip-nedir|mikroçip nedir]] yazısında. AAHA kılavuzu ayrıca evcil hayvan sahiplerinin yaklaşık üçte birinin aşı olmasa köpeğini veteriner hekime hiç götürmeyeceğini aktarıyor ve yavru döneminden itibaren düzenli kontrolün önleme açısından değerinin konuşulmasını öneriyor.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Aşı, parazit ve kontrol programı yavruyu gören veteriner hekim tarafından yaşına, ırkına ve yaşadığı ortama göre belirlenir.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['İlk ziyaret aşı yaşında yapılır', 'İlk ziyaret yavru eve gelir gelmez yapılıyor'],
      ['Tek parvo aşısı korur', 'Dizi 16. haftayı geçene kadar sürüyor'],
      ['Evden çıkmayan yavru parvo kapmaz', 'Virüs ayakkabı ve eşyayla eve girebiliyor'],
      ['Aşı bitene kadar tam yalıtım gerekir', 'Dikkatli sosyalleşme dizi bitmeden başlayabiliyor'],
      ['Süt dişleri kendiliğinden düşer, bakılmaz', 'Yerinde kalan süt dişi muayenede izleniyor'],
    ] },
  ],
  kontrolListesi: [
    'İlk muayene tarihi belli mi?',
    'Aşı kartı elinizde mi?',
    'Parazit tarihleri kayıtlı mı?',
    'Yabancı köpeklerle temas sınırlı mı?',
    'Sosyalleşme planı var mı?',
    '26. hafta dozu takvimde mi?',
  ],
  sss: [
    { soru: 'Yavru köpek ilk kez ne zaman veterinere götürülür?', cevap: 'Yavru köpek eve geldikten sonra en kısa sürede, kaç haftalık olduğundan bağımsız olarak ilk muayeneye götürülüyor. Bu ziyarette genel durum, süt dişleri, parazit programı ve beslenme değerlendiriliyor. Yavru 6-8 haftalıksa ilk temel aşı da aynı ziyarette yapılabiliyor.' },
    { soru: 'Yavru köpek aşıları kaç haftalıkken başlar?', cevap: 'WSAVA’nın 2024 kılavuzuna göre gençlik hastalığı, adenovirüs ve parvovirüsü kapsayan temel aşılar 6-8 haftalıkken başlıyor ve 16 haftalık olana kadar 2-4 haftada bir tekrarlanıyor. 26. haftada ya da sonrasında bir doz daha yapılıyor. Anneden geçen antikorlar nedeniyle tek doz yeterli olmuyor.' },
    { soru: 'Yavru köpek ne sıklıkla veterinere gider?', cevap: 'AAHA’nın 2019 kılavuzuna göre yavru dönemi boyunca kontroller 3-4 haftada bir yapılıyor. Yavru dönemi hızlı büyüme bitene kadar, ırka göre yaklaşık 6-9 ay sürüyor. Sonrasında sağlıklı bir yetişkin köpekte kontrol aralığı 6-12 aya çıkıyor.' },
    { soru: 'Aşısı bitmeden yavru köpek dışarı çıkabilir mi?', cevap: 'Dikkatli bir şekilde evet. WSAVA, sosyalleşmenin aşı dizisi tamamlanmadan başlayabileceğini belirtiyor. Aşılı olduğu bilinen köpekler, temiz ortamlar ve kucakta dış dünya tercih ediliyor; aşı durumu bilinmeyen köpeklerin yoğun olduğu parklardan ve dışkı bulunan alanlardan dizi bitene kadar uzak duruluyor.' },
    { soru: 'Yavru köpekte parvo belirtileri nelerdir?', cevap: 'Merck Veteriner El Kitabı’na göre başlıca belirtiler iştahsızlık, halsizlik, kusma ve çoğu zaman kanlı ishal. Hastalık en çok 6 hafta ile 6 ay arasındaki aşısız ya da aşısı tamamlanmamış yavrularda görülüyor. Bu belirtiler vakit kaybetmeden veteriner hekime ulaşılması gereken bir tablodur.' },
    { soru: 'Parvo geçiren yavru köpek iyileşir mi?', cevap: 'Destek tedavisiyle köpeklerin yüzde 70-90’ı iyileşiyor. Merck Veteriner El Kitabı’na göre hastalığın ilk 3-4 gününü atlatan yavruların çoğu genellikle bir hafta içinde tamamen düzeliyor ve iyileşen köpeklerde uzun süreli, muhtemelen ömür boyu bağışıklık gelişiyor. Tedavinin erken başlaması bu yüzden belirleyici.' },
  ],
  kaynaklar: [
    {
      kurum: 'World Small Animal Veterinary Association (WSAVA), Vaccination Guidelines Group',
      yazarlar: 'Squires RA, Crawford C, Marcondes M, Whitley N',
      baslik: '2024 guidelines for the vaccination of dogs and cats - compiled by the Vaccination Guidelines Group (VGG) of the World Small Animal Veterinary Association (WSAVA)',
      dergi: 'Journal of Small Animal Practice',
      yil: 2024,
      kunye: '65(5):277-316',
      doi: '10.1111/jsap.13718',
      adres: 'https://wsava.org/wp-content/uploads/2024/04/WSAVA-Vaccination-guidelines-2024.pdf',
    },
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
      kurum: 'Merck Veterinary Manual (Professional Version)',
      baslik: 'Canine Parvovirus Infection (Parvoviral Enteritis in Dogs)',
      yil: 2025,
      adres: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/canine-parvovirus',
    },
    {
      kurum: 'European Scientific Counsel Companion Animal Parasites (ESCCAP)',
      baslik: 'Worm Control in Dogs and Cats. ESCCAP Guideline 01, Seventh Edition',
      yil: 2025,
      adres: 'https://www.esccap.org/uploads/docs/ag51r456_0778_ESCCAP_GL1__English_2026_v23.pdf',
    },
  ],
};
