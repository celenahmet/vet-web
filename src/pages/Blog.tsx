import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Yaz Aylarında Köpeğinizi Serin Tutmanın 5 Yolu",
    excerpt: "Sıcak yaz günlerinde dostunuzun ısı çarpmasından korunması için alabileceğiniz pratik ve hayati önlemler.",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600",
    date: "12 Ağustos 2026",
    readTime: "4 dk okuma",
    category: "Sağlık"
  },
  {
    id: 2,
    title: "Kedilerde Beslenme Alışkanlıkları ve Doğru Mama Seçimi",
    excerpt: "Kedinizin yaşına, cinsine ve kısırlık durumuna göre en uygun mamayı nasıl seçersiniz? Uzman veteriner görüşleri.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600",
    date: "5 Ağustos 2026",
    readTime: "6 dk okuma",
    category: "Beslenme"
  },
  {
    id: 3,
    title: "İlk Kez Evcil Hayvan Sahipleneceklere Tavsiyeler",
    excerpt: "Evinize yeni bir dost katmadan önce hazırlamanız gerekenler ve adaptasyon sürecini kolaylaştıracak ipuçları.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=600",
    date: "28 Temmuz 2026",
    readTime: "5 dk okuma",
    category: "Rehber"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">
      <SEO title="Blog - Veterito" description="Evcil hayvan bakımı, sağlığı ve beslenmesi hakkında güncel bilgiler." />
      
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl py-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-5xl font-extrabold mb-6 text-[var(--text-main)]">Veterito Blog</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-[var(--text-muted)]">Uzmanlardan ipuçları, rehberler ve dostlarımızın dünyasına dair her şey.</motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
              className="glass-card bg-white/90 dark:bg-white/5 backdrop-blur-lg rounded-[2rem] overflow-hidden group cursor-pointer border border-[var(--border-color)] flex flex-col hover:shadow-2xl hover:shadow-[var(--color-vet-primary)]/20 hover:border-[var(--color-vet-primary)]/30 transition-colors duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[var(--color-vet-primary)]">
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-bold text-[var(--text-muted)] mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14}/> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text-main)] group-hover:text-[var(--color-vet-primary)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[var(--text-muted)] mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-[var(--color-vet-primary)] font-bold">
                  <span>Devamını Oku</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
