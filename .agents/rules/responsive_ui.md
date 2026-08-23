---
description: Projenin her sayfasında uyulması gereken zorunlu Tema kuralları
---

# UI/UX Standartları (Zorunlu Kurallar)

Kullanıcının kesin talimatı gereği, **bu projede oluşturulacak ve güncellenecek tüm yeni sayfa, bileşen ve CSS kodlarında aşağıdaki kurallara kesinlikle uyulmalıdır**:

## 1. Tema Kuralları (Cihaz Temasından Tam İzole)
- `prefers-color-scheme` veya cihaz/OS karanlık mod ayarına **kesinlikle** güvenilmeyecek ve bu tür CSS/JS sorguları yazılmayacaktır.
- Tailwind class'larında (`dark:...`) tetikleme sadece HTML tag'indeki `.dark` class'ına (class bazlı) bağlı kalmalıdır.
- Sitenin renk düzeni, varsayılan olarak "Açık Tema" (Light) üzerine kuruludur. Kullanıcı OS'unu dark kullanıyor olsa bile site açık temanın renklerini sunmalıdır. 
- Karanlık mod (Dark Mode) renkleri (`dark:bg-...`, `dark:text-...`) sadece ve sadece kullanıcı sitedeki tema değiştirme butonuna tıkladığında veya `localStorage` değerinde kayıtlıysa aktif olmalıdır.

## 2. Responsive Düzeni (Snap-Scrolling Koruması)
Sayfalarda taşmaları önlemek için:
- **Sayfa Taşıma Koruması:** Asla sayfada yatay scroll olmamalıdır (`overflow-x-hidden`).
- **100dvh Snap Bölümleri:** Ana sayfa gibi tam ekran (100dvh) yükseklikte olan snap bölümlerinin içi taşıp kesilmemesi için **font boyutları aşırı büyütülmeyecektir**. (Örn. `xl:text-7xl` gibi sınıflar iç bölümleri kıracağı için kullanılmamalıdır, mevcut font ölçeğine sadık kalınmalıdır).
