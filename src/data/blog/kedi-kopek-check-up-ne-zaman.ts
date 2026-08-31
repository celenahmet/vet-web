import type { BlogYazi } from './types';

/**
 * SAGLIK kategorisi. Sikliga dair her ifade AAHA-AVMA onleyici saglik
 * kilavuzuna dayaniyor; kilavuzun kendi dili "en az yilda bir" ve "yasam
 * evresine gore artar" seklinde, yazi da bu sinirin disina cikmiyor.
 */
export const kediKopekCheckUpNeZaman: BlogYazi = {
  slug: 'kedi-kopek-check-up-ne-zaman',
  baslik: 'Kedi ve Köpeklerde Check-Up Ne Zaman Yapılmalı?',
  ozet: 'Hasta olmayan bir hayvanı kliniğe götürmek gereksiz gelebiliyor. Oysa kontrolün amacı hastalığı tedavi etmek değil, adı konmadan önce yakalamak.',
  kategori: 'Sağlık',
  tarih: '2026-08-31',
  bloklar: [
    { kind: 'paragraf', metin: 'Çoğu kişi kliniğe bir sorun olduğunda gidiyor: iştah kesilmiş, aksama başlamış, kusma var. Bu makul görünüyor ama bir varsayıma dayanıyor: **hayvan hastaysa bunu belli eder.** Kedi ve köpeklerde bu varsayım çoğu zaman tutmuyor.' },
    { kind: 'paragraf', metin: 'Rutin kontrolün amacı, var olan bir şikâyeti çözmek değil. Amaç, henüz şikâyet üretmemiş bir değişikliği yakalamak; çünkü erken yakalanan sorunun seçenekleri daha fazla oluyor.' },

    { kind: 'baslik', metin: 'Sıklık yaşa göre değişiyor, sabit bir takvim yok' },
    { kind: 'paragraf', metin: 'Amerikan Hayvan Hastaneleri Birliği ile Amerikan Veteriner Hekimleri Birliği’nin ortak önleyici sağlık kılavuzu, tüm köpek ve kediler için **en az yılda bir** muayene öneriyor. Kılavuzun asıl vurgusu ise şu: bu bir taban değer, tavan değil. Sıklık hayvanın yaşam evresine, yaşam biçimine ve mevcut risklerine göre artıyor.' },
    { kind: 'paragraf', metin: 'Pratikte fark şuradan doğuyor: bir yaşındaki bir kedi ile on iki yaşındaki bir kedi aynı hızda yaşlanmıyor. Yaşlı hayvanlarda altı ayda bir kontrol, aradaki değişimi görebilmek için öneriliyor. Aynı kılavuz muayenenin yanına yıllık iç parazit taraması, düzenli parazit korunması, aşılama ve **bir sonraki ziyaret için plan** koymayı da ekliyor.' },

    { kind: 'tablo', basliklar: ['Dönem', 'Önerilen sıklık', 'Öne çıkan konu'], satirlar: [
      ['Yavru', 'Aşı takvimi boyunca sık', 'Bağışıklama, parazit, gelişim'],
      ['Genç yetişkin', 'Yılda bir', 'Ağız sağlığı, kilo, davranış'],
      ['Orta yaş', 'Yılda bir, gerekirse altı ayda bir', 'Kilo değişimi, temel kan değerleri'],
      ['Yaşlı', 'Altı ayda bir', 'Böbrek, tiroit, eklem, ağrı'],
    ] },

    { kind: 'yanilgi', baslik: '"İştahı yerinde, oynuyor, bir şeyi yok" yanılgısı', metin: 'İştah ve oyun isteği bir hayvanın iyi olduğunu göstermeye yetmiyor. Kedi ve köpekler rahatsızlığı gizlemeye eğilimli; böbrek işlevinin belirgin bir kısmı kaybedilene kadar sahibin fark edeceği bir belirti çıkmayabiliyor. Kontrolün değeri de tam burada: gözle görülmeyeni ölçüyle aramak.' },

    { kind: 'baslik', metin: 'Muayenede aslında ne oluyor' },
    { kind: 'paragraf', metin: 'Check-up denince akla tahlil geliyor ama kontrolün omurgası fizik muayene. Hekim ağız içine, dişe, deriye, kulağa bakıyor; kalp ve akciğeri dinliyor, karnı elle değerlendiriyor, eklem hareketini ve kilo durumunu not ediyor. Bunların çoğu cihaz gerektirmiyor ve çoğu erken bulgu buradan çıkıyor.' },
    { kind: 'liste', maddeler: [
      'Ağız ve diş eti: diş taşı, kırık diş, ağrı kaynağı',
      'Deri ve tüy: pire izi, kaşıntı, yara, kitle',
      'Kilo ve vücut kondisyonu: son ziyarete göre yön',
      'Kalp ve solunum: üfürüm, ritim, ses değişikliği',
      'Karın muayenesi: organ büyüklüğü, hassasiyet',
      'Eklem ve yürüyüş: yaşa bağlı ağrının erken izi',
    ] },
    { kind: 'paragraf', metin: 'Tahlil bunun yerine geçmiyor, üstüne biniyor. Hangi tahlilin gerektiği yaşa ve bulguya göre değişiyor; ayrıntısı [[evcil-hayvanlarda-kan-tahlili|kan tahlili neden yapılır]] yazısında.' },

    { kind: 'baslik', metin: 'Kontrolün ölçülebilir tek faydası: karşılaştırma' },
    { kind: 'paragraf', metin: 'Tek seferlik bir muayene o günün fotoğrafını veriyor. Asıl değer, ikinci ve üçüncü ziyarette ortaya çıkıyor: kilo hangi yöne gidiyor, diş eti geçen yıla göre nasıl, böbrek değeri sabit mi. Sağlıklı dönemde alınan kayıt, hastalık şüphesi doğduğunda kıyaslanacak zemini veriyor.' },
    { kind: 'paragraf', metin: 'Bu yüzden kontrolün faydası düzenli olmasına bağlı. Yılda bir gidip beş yıl aradan sonra tekrar gitmek, karşılaştırma imkânını ortadan kaldırıyor.' },

    { kind: 'uyari', metin: 'Bu yazı genel bilgi veriyor, muayene yerine geçmiyor. Hayvanınızda iştahsızlık, kilo kaybı, su tüketiminde artış, solunum güçlüğü ya da davranış değişikliği varsa kontrol zamanını beklemeden veteriner hekime başvurun.' },
  ],
  sss: [
    { soru: 'Hiç hastalanmayan bir hayvanı yine de götürmeli miyim?', cevap: 'Evet. Kontrolün amacı mevcut bir hastalığı tedavi etmek değil, henüz belirti vermemiş bir değişikliği yakalamak ve karşılaştırma için kayıt oluşturmak.' },
    { soru: 'Yaşlı hayvanda neden altı ayda bir öneriliyor?', cevap: 'Yaşlanma hızlandıkça iki ziyaret arasında daha çok şey değişiyor. Altı aylık aralık, değişimi geri dönülemez hale gelmeden görme şansı veriyor.' },
    { soru: 'Her kontrolde tahlil şart mı?', cevap: 'Hayır. Fizik muayene her ziyarette yapılıyor; tahlilin kapsamı yaşa, bulgulara ve planlanan işleme göre hekim tarafından belirleniyor.' },
    { soru: 'Kedim hiç dışarı çıkmıyor, yine de gerekli mi?', cevap: 'Gerekli. Ev kedilerinde bulaş riski düşük olsa da diş hastalıkları, kilo sorunları ve böbrek değişiklikleri yaşam biçiminden bağımsız görülüyor.' },
  ],
  kontrolListesi: [
    'Son muayene tarihini not edin; bir yılı geçtiyse randevu alın.',
    'Hayvanınız sekiz yaş üstündeyse aralığı altı aya çekmeyi konuşun.',
    'Ziyarete giderken kilo, iştah ve su tüketimindeki değişiklikleri yazıp götürün.',
    'Önceki tahlil sonuçlarını saklayın; karşılaştırma olmadan tek sonuç az şey söylüyor.',
    'Çıkarken bir sonraki ziyaretin ne zaman olacağını sorun.',
  ],
  kaynaklar: [
    {
      kurum: 'American Animal Hospital Association · American Veterinary Medical Association',
      baslik: 'Development of new canine and feline preventive healthcare guidelines designed to improve pet health',
      yazarlar: 'AAHA-AVMA Preventive Healthcare Guidelines Task Force',
      dergi: 'Journal of the American Animal Hospital Association',
      yil: 2011,
      kunye: '47(5):306-11',
      doi: '10.5326/JAAHA-MS-4007',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/21896837/',
    },
    {
      kurum: 'American Animal Hospital Association · American Association of Feline Practitioners',
      baslik: '2021 AAHA/AAFP Feline Life Stage Guidelines',
      // DERGI VE KUNYE BILEREK YAZILMADI: PubMed kaydinda (34096393) yazar
      // listesi bos donuyor, cunku kilavuzun yazari kurumun kendisi. Dergi
      // alanini doldurmak "hakemli calisma" iddiasi uretir ve yarim kunye
      // dogrulanamaz olur. Kurum, baslik, yil ve DOI dogrulanabilir.
      yil: 2021,
      doi: '10.1177/1098612X211024041',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34096393/',
    },
  ],
};
