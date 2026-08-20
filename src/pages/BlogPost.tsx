import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { brandConfig } from '../config/brand';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  // Mock fetching blog post data
  const post = {
    id: Number(id),
    title: t(`blog_p${id}_title`, { defaultValue: "Corporate Veterinary Standards Explained" }),
    content: `
      <p>This is a placeholder for the full blog post content. In a real application, this would be fetched from a database or CMS based on the ID: ${id}.</p>
      <h2>The Importance of Certification</h2>
      <p>When you choose a veterinary clinic, you want to ensure that your pet is receiving the best possible care. That's why we emphasize the importance of corporate standards and rigorous certification processes. A certified clinic means they have passed stringent checks on hygiene, technological integration, and staff qualifications.</p>
      <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800" alt="Veterinary Exam" />
      <p>By partnering with Veterito, clinics are not only upgrading their own internal tools but also providing transparency to pet owners. Every appointment, every vaccination, and every health record is securely stored and easily accessible.</p>
      <blockquote>
        "The integration of modern technology in veterinary practices is no longer a luxury; it's a necessity for providing top-tier care." - Dr. Sarah Jenkins
      </blockquote>
      <p>Thank you for being a part of the Veterito community. We are continuously working to improve our platform and bring you more features that make pet care easier and more social.</p>
    `,
    date: "Oct 12, 2026",
    author: "Dr. Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200",
    category: t(`blog_p${id}_category`, { defaultValue: "Corporate" }),
    tags: ["Health", "Tech", "Community"]
  };

  const recentPosts = [
    { id: 1, title: t('blog_p1_title'), date: "Oct 12, 2026" },
    { id: 2, title: t('blog_p2_title'), date: "Oct 05, 2026" },
    { id: 3, title: t('blog_p3_title'), date: "Sep 28, 2026" },
  ].filter(p => p.id !== post.id);

  const categories = ["Feature Spotlight", "Corporate", "Community", "Tips & Tricks", "News"];

  return (
    <div className="blog-post-page">
      <SEO 
        title={post.title} 
        description={post.content.substring(0, 150).replace(/<[^>]+>/g, '')} 
        image={post.image}
      />
      
      {/* Hero Cover */}
      <div className="post-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${post.image})` }}>
        <div className="container post-hero-content text-center">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={16} /> {t('blog_back_to_blog')}
          </Link>
          <div className="badge badge-primary mx-auto mb-4">{post.category}</div>
          <h1>{post.title}</h1>
          <div className="post-meta mx-auto">
            <span className="meta-item"><Calendar size={16} /> {post.date}</span>
            <span className="meta-item"><User size={16} /> {post.author}</span>
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="post-layout">
          {/* Main Content */}
          <main className="post-main-content">
            <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="post-tags-footer">
              <Tag size={16} className="text-secondary" />
              {post.tags.map(tag => (
                <span key={tag} className="tag-pill">#{tag}</span>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="post-sidebar">
            <div className="sidebar-widget">
              <h3>{t('blog_sidebar_categories')}</h3>
              <ul className="category-list">
                {categories.map(cat => (
                  <li key={cat}><a href="#">{cat}</a></li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget">
              <h3>{t('blog_sidebar_recent')}</h3>
              <div className="recent-posts">
                {recentPosts.map(rp => (
                  <Link to={`/blog/${rp.id}`} key={rp.id} className="recent-post-card">
                    <h4>{rp.title}</h4>
                    <span className="recent-date">{rp.date}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="sidebar-widget">
              <h3>{t('blog_sidebar_tags')}</h3>
              <div className="tags-cloud">
                {["Health", "Tech", "Dogs", "Cats", "Community", "News"].map(tag => (
                  <span key={tag} className="tag-pill">#{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="sidebar-cta" style={{ backgroundColor: 'var(--color-primary-soft)', padding: '24px', borderRadius: 'var(--radius-lg)', textAlign: 'center', marginTop: '32px' }}>
              <h3 style={{ marginBottom: '8px' }}>{brandConfig.name}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '16px' }}>Join the modern veterinary network.</p>
              <a href="#download" className="btn btn-primary" style={{ width: '100%', boxSizing: 'border-box' }}>Get the App</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
