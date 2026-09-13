const fs = require('fs');
const trPath = 'src/locales/tr.json';
const enPath = 'src/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath, 'utf8'));
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const newTr = {
  "feat_new_s1_title": "Can Dostunuzun Sağlığı Artık Cebinizde",
  "feat_new_s1_desc": "Evcil hayvanınızın tüm sağlık geçmişini, aşı takvimini ve günlük ihtiyaçlarını tek bir merkezden yönetin. Kaybolan karnelere veda edin; detaylı sağlık asistanınızla tanışın.",
  "feat_new_s1_li1": "Kişiselleştirilmiş Hızlı Sağlık Özeti",
  "feat_new_s1_li2": "Dijital Evcil Hayvan Profili ve Acil Sağlık Kartı",
  "feat_new_s1_li3": "Gizlenebilir Mikroçip Numarası",

  "feat_new_s2_title": "Hiçbir Aşama Gözden Kaçmasın",
  "feat_new_s2_desc": "Yaklaşan randevularınızı, gecikmiş aşıları ve periyodik bakımları sizin yerinize biz takip ediyoruz. Özel diyetlerden kronik durumlara kadar tüm tıbbi geçmiş elinizin altında.",
  "feat_new_s2_li1": "Gecikmiş İşlem ve Akıllı Aşı Uyarı Sistemi",
  "feat_new_s2_li2": "Grafiksel Kilo Takibi ve Diyet Düzeni Kaydı",
  "feat_new_s2_li3": "Alerji, İlaç Reaksiyonu ve Müdahale Takibi",

  "feat_new_s3_title": "En İyi Uzmanlar Bir Tık Uzağınızda",
  "feat_new_s3_desc": "İhtiyaç anında konumunuza en uygun klinikleri anında filtreleyin. Gerçek kullanıcı değerlendirmelerini inceleyin, doğrulanmış kliniklerle eşleşin ve hekiminizle uygulama üzerinden doğrudan, kesintisiz iletişim kurun.",
  "feat_new_s3_li1": "İl ve İlçe Bazlı Akıllı Veteriner Kliniği Arama",
  "feat_new_s3_li2": "Doğrulanmış (Onay Rozetli) Veteriner Kliniği Ağı",
  "feat_new_s3_li3": "Veterinerlerle Direkt Mesajlaşma",

  "feat_new_s4_title": "Yalnız Değilsiniz, Büyük Bir Ailenin Parçasısınız",
  "feat_new_s4_desc": "Hayvanseverlerin buluşma noktasına katılın. Deneyimlerinizi sosyal akışta paylaşın, uzman hekimlerin hazırladığı güvenilir makaleleri okuyun veya yuva arayan patiler için ilan panosunu ziyaret ederek bir hayata dokunun.",
  "feat_new_s4_li1": "\"Keşfet\" Sosyal Akışı ve Eş Bulma Seçenekleri",
  "feat_new_s4_li2": "Veteriner Hekim Kaynaklı Blog ve Bakım İpuçları",
  "feat_new_s4_li3": "Uygulama İçi Sahiplendirme İlan Sistemi",

  "feat_new_s5_title": "Beklenmedik Anlarda Saniyeler Önemlidir",
  "feat_new_s5_desc": "Acil durumlara karşı her zaman hazırlıklı olun. Kritik sağlık verilerine, mikroçip numarasına ve iletişim bilgilerinize tek dokunuşla ulaşılmasını sağlayan dijital kimlik ile içiniz daima rahat olsun.",
  "feat_new_s5_li1": "Acil Sağlık Kartı ve Sahip İletişim Bilgileri Ekranı",
  "feat_new_s5_li2": "Gizlenebilir Mikroçip Numarası Gösterimi",
  "feat_new_s5_li3": "Evcil Hayvan Bilgi Arşivi (Detaylı Irk Rehberi)",

  "feat_new_s6_title": "Veteriner Hekim veya Klinik Yöneticisi misiniz?",
  "feat_new_s6_desc": "Randevu akışından laboratuvar sonuçlarına, stok sayımından hasta iletişimine kadar tüm operasyonlarınızı tek bir dijital platformda birleştirin. Kliniğinize özel tasarlanan, evrak yükünü ortadan kaldıran profesyonel yönetim çözümlerimizi keşfedin.",
  "feat_new_s6_cta": "Klinik Özelliklerini İncele"
};

const newEn = {
  "feat_new_s1_title": "Your Best Friend's Health is Now in Your Pocket",
  "feat_new_s1_desc": "Manage your pet's entire health history, vaccination schedule, and daily needs from a single center. Say goodbye to lost health books; meet your detailed health assistant.",
  "feat_new_s1_li1": "Personalized Quick Health Summary",
  "feat_new_s1_li2": "Digital Pet Profile and Emergency Health Card",
  "feat_new_s1_li3": "Hidable Microchip Number",

  "feat_new_s2_title": "Let No Stage Go Unnoticed",
  "feat_new_s2_desc": "We track your upcoming appointments, overdue vaccinations, and periodic care for you. From special diets to chronic conditions, all medical history is at your fingertips.",
  "feat_new_s2_li1": "Overdue Action and Smart Vaccination Alert System",
  "feat_new_s2_li2": "Graphical Weight Tracking and Diet Routine Record",
  "feat_new_s2_li3": "Allergy, Drug Reaction and Intervention Tracking",

  "feat_new_s3_title": "The Best Experts are a Click Away",
  "feat_new_s3_desc": "Filter the most suitable clinics for your location instantly in time of need. Review real user ratings, match with verified clinics, and communicate directly and seamlessly with your doctor via the app.",
  "feat_new_s3_li1": "City and District Based Smart Veterinary Clinic Search",
  "feat_new_s3_li2": "Verified (Verified Badge) Veterinary Clinic Network",
  "feat_new_s3_li3": "Direct Messaging with Veterinarians",

  "feat_new_s4_title": "You Are Not Alone, You Are Part of a Big Family",
  "feat_new_s4_desc": "Join the meeting point of animal lovers. Share your experiences on the social feed, read reliable articles prepared by expert doctors, or touch a life by visiting the notice board for paws looking for a home.",
  "feat_new_s4_li1": "\"Discover\" Social Feed and Matchmaking Options",
  "feat_new_s4_li2": "Veterinarian Sourced Blog and Care Tips",
  "feat_new_s4_li3": "In-App Adoption Notice System",

  "feat_new_s5_title": "Seconds Matter in Unexpected Moments",
  "feat_new_s5_desc": "Always be prepared for emergencies. Have peace of mind with a digital ID that provides one-touch access to critical health data, microchip number, and your contact information.",
  "feat_new_s5_li1": "Emergency Health Card and Owner Contact Info Screen",
  "feat_new_s5_li2": "Hidable Microchip Number Display",
  "feat_new_s5_li3": "Pet Information Archive (Detailed Breed Guide)",

  "feat_new_s6_title": "Are You a Veterinarian or Clinic Manager?",
  "feat_new_s6_desc": "Combine all your operations on a single digital platform, from appointment flow to laboratory results, inventory counting to patient communication. Discover our professional management solutions tailored for your clinic, eliminating paperwork.",
  "feat_new_s6_cta": "Review Clinic Features"
};

Object.assign(trData, newTr);
Object.assign(enData, newEn);

fs.writeFileSync(trPath, JSON.stringify(trData, null, 2));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
console.log('Translations added successfully.');
