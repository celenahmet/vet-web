# Tasarımı Görseldeki ile Birebir Eşleştirme Planı

Görselleri karşılaştırdığımda haklısınız, şu anki yapı tamamen düz kutulara dönüşmüş ve görseldeki o "iç içe geçmiş asimetrik cam" ve "ekran içinde ekran" hissiyatını vermiyor. Telefon ekranı da yazıların üstüne binmiş durumda.

Bu durumu **tamamen** çözmek ve tam olarak referans görseldeki yapıya oturtmak için şu adımları izleyeceğim:

## 1. Arka Plan ve Ana Pencere (Island) Hissi
Şu an arka plan ile ana kapsayıcı aynı renk olduğu için ortada yüzen bir "ada" penceresi hissi yok.
- Arkaya çok hafif ve modern bir degrade (mesh gradient) atayacağım.
- Ana kapsayıcıyı (Pencereyi) `max-w-[1200px]`, `h-[800px]` gibi sabit ve büyük bir kutu yapacağım. Köşelerini referanstaki gibi devasa yuvarlak (`rounded-[3rem]`) yapacağım.
- İçine cam efekti ve hafif bir gölge ekleyeceğim ki arkadaki fondan ayrılsın ve tam bir "ekran" gibi dursun.

## 2. Metinlerin ve Telefonun Çakışması
- "Sıfır Stres, Kesintisiz Takip" başlığını en tepeye, tam ortaya alacağım.
- Telefon mockup'ını bu başlığın hemen altına, merkezde konumlandıracağım. Kesinlikle birbiriyle üst üste binmeyecekler.

## 3. Sol ve Sağ Asimetrik Kutular (Kritik Nokta)
Görseldeki en belirgin tasarım detayı alttaki kutuların asimetrik köşeleri.
- **Sol Kutu (Beyaz):** Ana pencerenin sol alt köşesine sıfırlayacağım. Sağ üst köşesini devasa bir ovallikle (`rounded-tr-[80px]`), diğer köşelerini daha normal (`rounded-[30px]`) yapacağım. İçine açıklamayı yazacağım.
- **Sağ Kutu (Blurlu/Cam):** Ana pencerenin sağ alt köşesine sıfırlayacağım. Sol üst köşesini devasa yuvarlatıp (`rounded-tl-[80px]`), cam (backdrop-blur) efekti vereceğim. Madde madde özellikler ve logonuz (koyu yuvarlak bir buton içinde, görseldeki lacivert U logosu gibi) burada yer alacak.

## 4. Menü (Üst Sekmeler)
- "Evcil Hayvan Sahipleri", "Patili Dostlar" vb. butonları pencerenin en üstüne, ince ve şık bir şekilde referanstaki üst barlar gibi oturtacağım.

Bu adımlarla tasarım referansınızdaki yapıya %100 sadık kalacak. Onaylıyorsanız hemen kodlamaya geçiyorum?
