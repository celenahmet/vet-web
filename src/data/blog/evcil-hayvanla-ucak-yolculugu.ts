import type { BlogYazi } from './types';

export const evcilHayvanlaUcakYolculugu: BlogYazi = {
  slug: 'evcil-hayvanla-ucak-yolculugu',
  baslik: 'Evcil Hayvanla Uçak Yolculuğu: Kabin, Kargo ve Gerekli Belgeler',
  ozet: 'Kedi ya da köpekle uçmak için kabinde 8 kiloluk sınır, çanta ölçüsü, uçuş başına kontenjan ve belgeler var. Türk Hava Yolları ve Pegasus kurallarıyla adım adım.',
  kapakAlt:
    'Evcil hayvanla uçak yolculuğu konulu yazının kapak görseli; uçak kabininde koltuğun altındaki taşıma çantasından bakan küçük bir köpek',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-21',
  bloklar: [
    { kind: 'paragraf', metin: 'Kedi ya da köpekle uçak yolculuğunda iki seçenek var: **kabinde** ya da **uçak altında (bagaj bölümünde).** Türk Hava Yolları ve Pegasus\'ta kabinde taşınabilmek için hayvanın **çantasıyla birlikte en çok 8 kilo** olması gerekiyor. Evcil hayvan ücretsiz bagaj hakkına dahil değil, ayrıca ücretlendiriliyor ve uçuş başına kontenjan sınırlı; bu yüzden hayvanı bilet alırken ya da hemen sonrasında rezervasyona eklemek gerekiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda havayollarının kendi kurallarını, yurt içi ve yurt dışı için gereken belgeleri ve yolculuk öncesi hazırlığı anlatıyoruz. Kurallar ve ücretler değişebildiği için uçmadan önce havayolunun güncel sayfasına mutlaka bakın.' },

    { kind: 'baslik', metin: 'Evcil hayvanla uçak yolculuğu için gerekenler' },
    { kind: 'liste', maddeler: [
      '**Rezervasyona ekleme:** Hayvan kontenjanı sınırlı. Pegasus\'ta evcil hayvan yalnız çağrı merkezi ya da seyahat acentası üzerinden ekleniyor.',
      '**Uygun taşıma çantası:** Kabin için ölçüleri havayolunun sınırına uyan, yumuşak ve kapalı çanta.',
      '**Yaş ve aşı:** Pegasus uçuş tarihinde üç aydan küçük ve aşısı tamamlanmamış hayvanları kabul etmiyor.',
      '**Belgeler:** Yurt içinde pasaport; yurt dışında pasaportun yanında veteriner sağlık sertifikası ve gidilen ülkenin istediği diğer belgeler.',
    ]},

    { kind: 'baslik', metin: 'Kabinde evcil hayvan taşıma kuralları' },
    { kind: 'tablo', basliklar: ['', 'Türk Hava Yolları', 'Pegasus'], satirlar: [
      ['Kabinde kabul edilen', 'Kedi, köpek ve küçük kuşlar', 'İç hatta kedi, köpek, kuş; dış hatta kedi ve köpek'],
      ['Ağırlık sınırı', 'Hayvan ve çanta birlikte en çok 8 kg', 'Hayvan ve kafes birlikte en çok 8 kg'],
      ['Çanta ölçüsü', 'En çok 23 x 30 x 40 cm', 'En çok 32 x 32 x 50 cm'],
      ['Sınır', 'Yolcu başına kabinde bir çanta', 'Uçuş başına en çok 3; bir kafeste en çok 2 hayvan'],
    ]},
    { kind: 'paragraf', metin: 'THY\'de çanta yolculuk boyunca kapalı kalıyor ve öndeki koltuğun altına yerleştiriliyor. Pegasus\'ta kabinde hayvanla uçan yolcular acil çıkış sıralarında ve en ön sırada oturamıyor; 12 yaş ve altındaki refakatsiz çocuklar da hayvanla seyahat edemiyor.' },

    { kind: 'baslik', metin: 'Uçak altında (kargo bölümünde) taşıma' },
    { kind: 'paragraf', metin: 'Kabin sınırını aşan hayvanlar uçak altındaki bölümde taşınıyor. THY\'de bu bölümde hayvan ve kafes birlikte en çok 50 kg, kafes en çok 75 x 75 x 125 cm olabiliyor; daha büyük kafesler Turkish Cargo ile gönderiliyor. Pegasus\'ta uçak altı taşıma **yalnız iç hat** uçuşlarında ve yalnız kedi ve köpek için var; kafesin sağlam, kilitli ve hayvanın içinde yatıp dönebileceği büyüklükte olması isteniyor.' },
    { kind: 'yanilgi', baslik: '"Yolculukta sakinleştirici vermek en iyisi"', metin: 'THY sakinleştirici verilmiş hayvanları uçuşa kabul etmiyor. Hayvanınız yolculukta çok stresleniyorsa ne yapılabileceğini önceden veteriner hekiminizle konuşun; kendi başınıza ilaç vermeyin.' },

    { kind: 'baslik', metin: 'Kabul edilmeyen ırklar ve hatlar' },
    { kind: 'paragraf', metin: 'Havayolları uçuş güvenliği açısından bazı köpek ırklarını kabul etmiyor. Pegasus\'un listesinde Pit Bull, Japanese Tosa, Dogo Argentino, Fila Brasileiro, American Staffordshire Terrier, Presa Canario, Rottweiler, Doberman, Mastiff, American Bulldog, Kafkas çoban köpeği, Napoliten mastif ve Chow Chow gibi ırklar var. Pegasus ayrıca Bahreyn, Birleşik Arap Emirlikleri ve Katar\'a; Suudi Arabistan, İrlanda ve İngiltere\'ye ve bu ülkelerden kalkan uçuşlarda evcil hayvan kabul etmiyor.' },

    { kind: 'baslik', metin: 'Uçakta kedi ve köpek taşımak için gerekli belgeler' },
    { kind: 'liste', maddeler: [
      '**Yurt içi:** Tarım ve Orman Bakanlığı\'na göre yurt içi nakilde hayvanın pasaportunun yanınızda olması zorunlu. Aşı kayıtları pasaportta bulunuyor.',
      '**Yurt dışı:** Mikroçip, PETVET kaydı, pasaport ve il veya ilçe tarım ve orman müdürlüğünden çıkışa en erken 48 saat kala alınan veteriner sağlık sertifikası gerekiyor. Gidilen ülke istiyorsa kuduz antikor testi de şart.',
      '**KKTC:** Pegasus\'a göre KKTC\'ye gidişte kuduz aşısı ve yolculuktan en az üç ay önce yapılmış kuduz antikor testi gerekiyor; ayrıca KKTC Veteriner Dairesi\'nden ithal izni alınması gerekiyor.',
    ]},
    { kind: 'paragraf', metin: 'Yurt dışı için sürelerin nasıl hesaplandığını, özellikle AB ülkelerinde antikor testinden sonraki 90 günlük beklemeyi [[evcil-hayvan-pasaportu|evcil hayvan pasaportu]] yazımızda adım adım anlattık.' },

    { kind: 'baslik', metin: 'Yolculuktan önce hazırlık' },
    { kind: 'liste', maddeler: [
      '**Çantaya alıştırma:** Taşıma çantasını yolculuktan günler önce evde açık bırakın; hayvan içine kendi isteğiyle girip çıksın.',
      '**Veteriner kontrolü:** Yolculuktan önce hayvanın uçmaya uygun olup olmadığını ve aşılarının güncel olup olmadığını hekiminize kontrol ettirin.',
      '**Erken varış:** Hayvanla birlikte kontuara gelinmesi ve belgelerin yanınızda olması isteniyor; işlemler için zaman bırakın.',
    ]},
    { kind: 'uyari', metin: 'Bu yazıdaki ölçüler ve kurallar havayollarının kendi sayfalarından alındı. Havayolları kuralları, kontenjanları ve ücretleri sık güncelleyebiliyor; bilet almadan önce uçacağınız havayolunun güncel sayfasını ve gidilen ülkenin resmî kurallarını kontrol edin.' },
  ],
  sss: [
    { soru: 'Uçakta kabinde evcil hayvan kaç kilo olabilir?', cevap: 'THY ve Pegasus\'ta hayvan ve çantası birlikte en çok 8 kilo.' },
    { soru: 'Uçakta kedi taşıma çantası ölçüsü ne olmalı?', cevap: 'THY\'de en çok 23 x 30 x 40 cm, Pegasus\'ta en çok 32 x 32 x 50 cm.' },
    { soru: 'Evcil hayvan uçak bileti nasıl alınır?', cevap: 'Hayvan bilete eklenerek ücretlendiriliyor; Pegasus\'ta yalnız çağrı merkezi ya da acenta üzerinden ekleniyor.' },
    { soru: 'Yavru kedi uçakla seyahat edebilir mi?', cevap: 'Pegasus üç aydan küçük ve aşısı tamamlanmamış hayvanları kabul etmiyor.' },
    { soru: 'Uçakta evcil hayvan için hangi belgeler gerekir?', cevap: 'Yurt içinde pasaport; yurt dışında ayrıca veteriner sağlık sertifikası ve ülkenin istediği diğer belgeler.' },
    { soru: 'Evcil hayvana uçakta sakinleştirici verilebilir mi?', cevap: 'THY sakinleştirici verilmiş hayvanları kabul etmiyor; stres için önceden hekiminize danışın.' },
  ],
  kaynaklar: [
    {
      kurum: 'Türk Hava Yolları',
      baslik: 'Evcil Hayvanlarla Seyahat',
      adres: 'https://www.turkishairlines.com/en-us/any-questions/traveling-with-pets/',
    },
    {
      kurum: 'Pegasus Hava Yolları',
      baslik: 'Evcil Hayvanlarla Seyahat ve Uçak Yolculuğu',
      adres: 'https://www.flypgs.com/faydali-bilgiler/diger-bilgiler/evcil-hayvanla-seyahat',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Sahipli Hayvanların Dijital Kimliklendirilmesi (kamuoyu bilgilendirmesi, 27.12.2022)',
      adres: 'https://www.tarimorman.gov.tr/Haber/5652/Sahipli-Hayvanlarin-Dijital-Kimliklendirilmesi',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Kedi ve Köpeklerin Yurt Dışına Yolcu Beraberi ve Ticari Sevklerine İlişkin Uygulama Talimatı (21.10.2022)',
      adres: 'https://vskn.tarimorman.gov.tr/tekirdag/Belgeler/D%C3%96K%C3%9CMAN/Kedi%20Ve%20K%C3%B6peklerin%20Yurt%20D%C4%B1%C5%9F%C4%B1na%20Yolcu%20Beraberi%20Ve%20Ticari%20Sevklerine%20%C4%B0li%C5%9Fkin%20Uygulama%20Talimat%C4%B1.pdf',
    },
  ],
};
