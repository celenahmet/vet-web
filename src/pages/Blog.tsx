import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { brandConfig } from '../config/brand';
import './Blog.css';

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: t('blog_p1_title'),
      excerpt: t('blog_p1_excerpt'),
      date: "Oct 12, 2026",
      author: "Dr. Sarah Jenkins",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800",
      category: t('blog_p1_category')
    },
    {
      id: 2,
      title: t('blog_p2_title'),
      excerpt: t('blog_p2_excerpt'),
      date: "Oct 05, 2026",
      author: `${brandConfig.name} Team`,
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cb18a4a5?auto=format&fit=crop&q=80&w=800",
      category: t('blog_p2_category')
    },
    {
      id: 3,
      title: t('blog_p3_title'),
      excerpt: t('blog_p3_excerpt'),
      date: "Sep 28, 2026",
      author: "Alex Morgan",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800",
      category: t('blog_p3_category')
    }
  ];

  return (
    <div className="blog-page">
      <SEO 
        title={t('nav_blog')} 
        description={t('seo_desc_blog')} 
      />
      <section className="blog-hero section bg-secondary text-center">
        <div className="container">
          <h1>{brandConfig.name} {t('blog_hero_h1')}</h1>
          <p className="subtitle mx-auto">{t('blog_hero_p')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} loading="lazy" width="800" height="533" />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                    <span className="meta-item"><User size={14} /> {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    {t('blog_read_more')} <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
