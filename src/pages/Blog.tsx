import { motion } from 'framer-motion';
import { ArrowRight, Clock, Cat, Dog, Utensils, HeartPulse, Building2, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

// Import local images
import blog1 from '../assets/blog-1.jpg';
import blog2 from '../assets/blog-2.jpg';
import blog3 from '../assets/blog-3.jpg';
import blog4 from '../assets/blog-4.jpg';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Köpeklerde İlkbaharda Alerji Belirtileri ve Alınabilecek Önlemler",
    excerpt: "Bahar aylarında artan polenler köpek dostlarımızı da etkiliyor. Alerji belirtilerini nasıl tanıyacağınızı ve önlemleri öğrenin.",
    image: blog2,
    date: "12 Mayıs 2026",
    readTime: "5 dk okuma",
    category: "SAĞLIK"
  },
  {
    id: 2,
    title: "Kedi Aşı Takvimi: Hangi Aşılar Ne Zaman Yapılmalı?",
    excerpt: "Kedinizin hastalıklardan korunması için düzenli aşı takibi çok önemlidir. Temel aşıları ve ne zaman uygulanmaları gerektiğini keşfedin.",
    image: blog3,
    date: "10 Mayıs 2026",
    readTime: "4 dk okuma",
    category: "SAĞLIK"
  },
  {
    id: 3,
    title: "Kediler İçin Yaş Mama mı Kuru Mama mı?",
    excerpt: "Beslenme tercihleri, öğün yapısı ve dikkat edilmesi gereken genel noktalar hakkında kısa bir bakış ve veteriner önerileri.",
    image: blog1,
    date: "8 Mayıs 2026",
    readTime: "6 dk okuma",
    category: "BESLENME"
  }
];

const FEATURED_POSTS = [
  {
    id: 4,
    title: "Yavru Kedi Ne Zaman Veterinere Götürülmeli?",
    readTime: "7 dk okuma",
    category: "Pet Sahipleri",
    image: blog4
  },
  {
    id: 5,
    title: "Veteriner Kliniğinde Hasta İletişimini Güçlendirmenin Yolları",
    readTime: "6 dk okuma",
    category: "Klinik Yönetimi",
    image: blog1
  },
  {
    id: 6,
    title: "Kedilerde Stres Belirtileri ve Ortam Düzenlemesi",
    readTime: "5 dk okuma",
    category: "Sağlık",
    image: blog3
  },
  {
    id: 7,
    title: "Online Randevu Sistemleri ile Kliniğinizde Verimliliği Artırın",
    readTime: "4 dk okuma",
    category: "Klinik Yönetimi",
    image: blog2
  }
];

const CATEGORIES = [
  { id: 'cat', label: 'Kedi', icon: Cat },
  { id: 'dog', label: 'Köpek', icon: Dog },
  { id: 'food', label: 'Beslenme', icon: Utensils },
  { id: 'health', label: 'Sağlık', icon: HeartPulse },
  { id: 'clinic', label: 'Klinik Yönetimi', icon: Building2 },
  { id: 'owner', label: 'Pet Sahipleri', icon: Users },
];

export default function Blog() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-28 pb-24 relative bg-[var(--bg-secondary)]">
      <SEO title={t('seo_title_blog', 'Blog | Veterito')} description={t('seo_desc_blog', 'Evcil hayvanlar hakkında faydalı içerikler')} />

      <div className="container mx-auto px-4 max-w-7xl pt-4">
        
        {/* HERO FEATURED POST */}
        <div className="bg-[var(--bg-main)] rounded-[2.5rem] p-4 lg:p-8 flex flex-col lg:flex-row gap-8 items-center border border-[var(--border-color)] shadow-sm mb-12">
          <div className="flex-1 px-4 lg:px-10 order-2 lg:order-1">
            <span className="inline-block bg-[var(--color-vet-primary)]/10 text-[var(--color-vet-secondary)] text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
              Öne Çıkan Yazı
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight mb-6 tracking-tight">
              Kedilerde İç ve Dış Parazitlerden Korunma Rehberi
            </h1>
            <p className="text-lg text-[var(--text-muted)] mb-8 font-medium leading-relaxed max-w-xl">
              Sevimli dostlarımızın sağlığı için parazit önleme ve koruma yöntemlerini, belirtilerini ve veteriner önerilerini keşfedin.
            </p>
            <Link to="#" className="btn-primary px-8 py-4 rounded-2xl group w-max">
              Yazıyı Oku <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="flex-1 w-full order-1 lg:order-2">
            <div className="rounded-[2rem] overflow-hidden w-full bg-transparent">
              <img src={blog3} alt="Hero" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>

        {/* CATEGORY BAR */}
        <div className="bg-[var(--bg-main)] rounded-2xl border border-[var(--border-color)] shadow-sm p-4 mb-12 overflow-x-auto hide-scrollbar">
          <div className="flex items-center justify-between min-w-max px-4 gap-8">
            {CATEGORIES.map((cat, i) => (
              <button key={cat.id} className="flex items-center gap-2 text-[var(--text-main)] hover:text-[var(--color-vet-primary)] font-bold transition-colors group whitespace-nowrap">
                <cat.icon size={20} className="text-[var(--color-vet-secondary)] group-hover:scale-110 transition-transform" />
                <span>{cat.label}</span>
                {i < CATEGORIES.length - 1 && <div className="h-6 w-px bg-[var(--border-color)] ml-8 hidden md:block"></div>}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN POST GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {BLOG_POSTS.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
              className="bg-[var(--bg-main)] rounded-[2rem] overflow-hidden group cursor-pointer border border-[var(--border-color)] flex flex-col hover:shadow-xl hover:border-[var(--color-vet-primary)]/30 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-transparent">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-[var(--color-vet-primary)] text-xs font-bold uppercase tracking-widest mb-3">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[var(--text-main)] group-hover:text-[var(--color-vet-secondary)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="mt-auto flex items-center justify-between text-xs font-bold text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5"><Clock size={14}/> {post.readTime}</span>
                  <span className="flex items-center gap-1.5">{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM HORIZONTAL LIST (ÖNE ÇIKAN YAZILAR) */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-extrabold flex items-center gap-2 text-[var(--text-main)]">
            <span className="text-[var(--color-vet-primary)]">⭐</span> Öne Çıkan Yazılar
          </h2>
          <Link to="#" className="text-[var(--color-vet-primary)] font-bold flex items-center gap-1 hover:opacity-80">
            Tümünü Gör <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_POSTS.map((post) => (
            <div key={post.id} className="bg-[var(--bg-main)] rounded-2xl p-4 border border-[var(--border-color)] flex items-center gap-4 hover:shadow-md hover:border-[var(--color-vet-primary)]/30 transition-all cursor-pointer group">
              <div className="w-28 aspect-video rounded-xl overflow-hidden shrink-0 bg-transparent flex items-center justify-center">
                <img src={post.image} alt={post.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col flex-1 py-1 h-full justify-between">
                <h4 className="text-sm font-bold text-[var(--text-main)] line-clamp-2 mb-2 group-hover:text-[var(--color-vet-primary)] transition-colors leading-tight">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between text-[0.65rem] font-bold text-[var(--text-muted)] mt-auto">
                  <span>{post.category}</span>
                  <span className="flex items-center gap-1"><Clock size={10}/> {post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
