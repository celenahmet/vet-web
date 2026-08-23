import type { BlogYazi } from './types';

export const kediYasiNasilHesaplanir: BlogYazi = {
  slug: 'kedi-yasi-nasil-hesaplanir',
  baslik: 'Kedi Yaşı Nasıl Hesaplanır? İnsan Yaşına Çevirme Tablosu',
  ozet: 'Kedi yaşını yedi ile çarpmak yanlış. İlk yıl 15, ikinci yıl 9, sonrası yılda 4 insan yılı. Sokaktan alınan kedide yaşın nasıl tahmin edildiği de burada.',
  kategori: 'Kedi',
  tarih: '2026-08-23',
  bloklar: [
    { kind: 'paragraf', metin: 'Kedi yaşını insan yaşına çevirmenin kuralı basit: **ilk yıl 15 insan yılı**, **ikinci yıl 9 insan yılı**, sonraki her yıl yaklaşık **4 insan yılı**. Yani iki yaşındaki bir kedi 24 yaşında bir insana denk sayılıyor.' },
    { kind: 'paragraf', metin: 'Bu hesabın neden böyle olduğunu, tam tabloyu ve yaşı bilinmeyen bir kedide yaşın nasıl tahmin edildiğini aşağıda bulacaksınız.' },

    { kind: 'yanilgi', baslik: '"Yedi ile çarp" yanılgısı', metin: 'Yedi ile çarpma kuralı ne kedilerde ne köpeklerde doğru. O hesaba göre bir yaşındaki kedi yedi yaşında bir çocuğa denk gelirdi. Oysa bir yaşındaki kedi üreyebiliyor, avlanabiliyor ve yetişkin boyutuna ulaşmış oluyor. Çocukla değil, genç bir yetişkinle karşılaştırılması gerekiyor.' },

    { kind: 'baslik', metin: 'Kedi yaşı insan yaşı tablosu' },
    { kind: 'tablo', basliklar: ['Kedi yaşı', 'İnsan karşılığı', 'Dönem'], satirlar: [
      ['2 ay', '2 yaş', 'Yavru'],
      ['6 ay', '10 yaş', 'Yavru'],
      ['1 yaş', '15 yaş', 'Genç'],
      ['2 yaş', '24 yaş', 'Genç yetişkin'],
      ['3 yaş', '28 yaş', 'Yetişkin'],
      ['5 yaş', '36 yaş', 'Yetişkin'],
      ['7 yaş', '44 yaş', 'Olgun'],
      ['10 yaş', '56 yaş', 'Yaşlı'],
      ['12 yaş', '64 yaş', 'Yaşlı'],
      ['15 yaş', '76 yaş', 'İleri yaş'],
      ['18 yaş', '88 yaş', 'İleri yaş'],
      ['20 yaş', '96 yaş', 'İleri yaş'],
    ]},

    { kind: 'baslik', metin: 'Neden ilk iki yıl bu kadar hızlı geçiyor' },
    { kind: 'paragraf', metin: 'Kediler cinsel olgunluğa altı ay civarında ulaşıyor, iskelet ve kas gelişimini bir yaşında büyük ölçüde tamamlıyor. İnsanda on beş yıl süren bir gelişim, kedide on iki aya sığıyor.' },
    { kind: 'paragraf', metin: 'İkinci yıldan sonra gelişim biterek yerini yaşlanmaya bırakıyor ve hız düşüyor. Bu yüzden çevirme oranı sabit değil: başta çok yüksek, sonra sabitleniyor.' },

    { kind: 'baslik', metin: 'Yaşı bilinmeyen kedide yaş nasıl tahmin edilir' },
    { kind: 'paragraf', metin: 'Sokaktan alınan ya da sahiplenilen kedilerde kesin doğum tarihi bilinmiyor. Veteriner hekim birkaç göstergeye bakarak bir aralık veriyor.' },
    { kind: 'altBaslik', metin: 'Dişler' },
    { kind: 'paragraf', metin: 'En güvenilir gösterge yavrulukta. Süt dişleri 2-4 haftada çıkıyor, kalıcı dişler 3-6 ay arasında yerini alıyor. Yetişkinlikte ise diş taşı miktarı ve aşınma kabaca bir fikir veriyor ama bakım alışkanlığına göre çok değiştiği için kesinlik iddiası taşımıyor.' },
    { kind: 'altBaslik', metin: 'Göz merceği' },
    { kind: 'paragraf', metin: 'Yaşlı kedilerde göz merceğinde bulanıklaşma görülüyor. Bu tek başına yaş göstergesi değil ama diğer bulgularla birlikte değerlendiriliyor.' },
    { kind: 'altBaslik', metin: 'Tüy ve kas yapısı' },
    { kind: 'paragraf', metin: 'Genç kedide tüy ince ve parlak, kas yapısı belirgin. Yaşlandıkça tüy kalınlaşıyor, matlaşıyor ve kas kütlesi azalıyor.' },
    { kind: 'yanilgi', baslik: '"Dişine bakınca kesin yaş anlaşılır" yanılgısı', metin: 'Diş yapısı yavrularda haftalık ayrım verebilecek kadar hassas, ama yetişkin bir kedide yalnız kaba bir aralık söyler. Bakımlı bir sekiz yaşındaki kedi, bakımsız bir dört yaşındakinden daha temiz dişli olabilir. Yaş tahmini bir tahmindir, kayıt yerine geçmez.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Kedinizin yaşı ve sağlığıyla ilgili değerlendirmeyi, hayvanı gören bir veteriner hekim yapar.' },

    { kind: 'baslik', metin: 'Yaş neden önemli: bakım yaşa göre değişiyor' },
    { kind: 'tablo', basliklar: ['Dönem', 'Kedi yaşı', 'Bakımda öne çıkan'], satirlar: [
      ['Yavru', '0-1 yaş', 'Aşı serisi, iç parazit, sosyalleşme'],
      ['Genç yetişkin', '1-6 yaş', 'Kilo takibi, yıllık kontrol, ağız bakımı'],
      ['Olgun', '7-10 yaş', 'Yıllık kan tahlili, kilo ve diş yakın takip'],
      ['Yaşlı', '11-14 yaş', 'Altı ayda bir kontrol, böbrek ve tiroid takibi'],
      ['İleri yaş', '15 yaş ve üzeri', 'Altı ayda bir kontrol, eklem ve iştah takibi'],
    ]},
    { kind: 'paragraf', metin: 'Yedi yaş bir eşik: bu yaştan sonra yıllık kontrole kan tahlili eklenmesi öneriliyor. Sebebi, böbrek yetmezliği gibi hastalıkların belirtileri geç vermesi.' },

    { kind: 'baslik', metin: 'Doğum tarihini bilmiyorsanız bir tarih seçin' },
    { kind: 'paragraf', metin: 'Sahiplendiğiniz kedinin doğum tarihi belli değilse, veteriner hekimin verdiği aralığın ortasını alıp bir tarih belirleyin ve kayıtlarınızda hep onu kullanın. Kesin olmaması sorun değil; tutarlı olması aşı tekrarlarını ve yaşa bağlı kontrolleri takip etmeyi mümkün kılıyor.' },
    { kind: 'paragraf', metin: 'Kaydı tutmadığınızda olan şey şu: "geçen sene mi yapmıştık, önceki sene mi" sorusu, aşı tekrarının atlanmasıyla bitiyor.' },
  ],
  sss: [
    { soru: '1 yaşındaki kedi kaç yaşında sayılır?', cevap: '15 insan yaşına denk sayılıyor. Bu, çocukluk değil genç yetişkinlik dönemidir; kedi bu yaşta üreyebilir ve yetişkin boyutuna ulaşmıştır.' },
    { soru: 'Kedi kaç yaşında yaşlı sayılır?', cevap: '7-10 yaş olgun, 11-14 yaş yaşlı, 15 yaş ve üzeri ileri yaş kabul ediliyor. 7 yaşından sonra yıllık kontrole kan tahlili eklenmesi öneriliyor.' },
    { soru: 'Yavru kedinin yaşı nasıl anlaşılır?', cevap: 'Yavrularda diş çıkışı oldukça güvenilir: süt dişleri 2-4 haftada, kalıcı dişler 3-6 ay arasında çıkıyor. Gözlerin açılması ve ağırlık da ilk haftalarda kullanılıyor.' },
    { soru: 'Kedi yaşı hesaplama formülü nedir?', cevap: 'İlk yıl 15, ikinci yıl 9 ekleniyor; sonraki her yıl için yaklaşık 4 ekleniyor. Örnek: 6 yaşındaki kedi 15 + 9 + (4 x 4) = 40 insan yaşına denk geliyor.' },
    { soru: 'Kedimin yaşını yanlış biliyorsam sorun olur mu?', cevap: 'Bir iki yıllık sapma bakım açısından büyük fark yaratmıyor. Önemli olan tutarlı bir tarih kullanmak, çünkü aşı tekrarları ve yaşa bağlı kontroller o tarihe göre planlanıyor.' },
  ],
};
