import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, ShieldCheck, Trash2, Baby, Building2, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { brandConfig } from '../config/brand';
import { LEGAL_CONTACT_EMAIL } from '../data/legal';
import './Legal.css';

/**
 * `/contact` — iletişim sayfası.
 *
 * ⚠️ APPLE İSTİYOR. App Store Connect'te destek adresi (Support URL) zorunlu ve o
 * adreste kullanıcının gerçekten ulaşabileceği bir yol bulunmalı. Alt bilgideki
 * `mailto:` bağlantısı tek başına yetmiyor: inceleyici adresi açıp bir iletişim
 * sayfası görmek istiyor.
 *
 * ⚠️ FORM YOK, BİLEREK. Çalışan bir form için sunucu tarafı, spam koruması ve gelen
 * kutusu gerekiyor; hiçbiri yok. Gönder düğmesine basınca hiçbir şey olmayan bir
 * form, iletişim yolu olmadığını gizlemekten başka işe yaramaz ve inceleyici
 * denerse durum daha kötü olur. Onun yerine tek ve gerçekten çalışan bir kanal:
 * `info@veterito.com` (Cloudflare Routing ile yönlendiriliyor, 22.08.2026'da gerçek
 * e-postayla doğrulandı).
 *
 * ⚠️ KONULAR AYRI AYRI YAZILI. "Bize yazın" demek, KVKK başvurusu yapacak kişiye
 * nereye yazacağını söylemiyor. Her başvuru türü, konu satırıyla birlikte listede.
 */
const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const konular = [
    { icon: Mail, key: 'support', konu: 'Destek' },
    { icon: ShieldCheck, key: 'privacy', konu: 'KVKK başvurusu', to: '/kvkk' },
    { icon: Trash2, key: 'deletion', konu: 'Hesap silme talebi', to: '/account-deletion' },
    { icon: Baby, key: 'child', konu: 'Çocuk güvenliği', to: '/child-safety' },
    { icon: Building2, key: 'clinic', konu: 'Klinik başvurusu' },
  ];

  return (
    <div className="legal-page">
      <SEO
        title={t('contact_title')}
        description={t('contact_desc')}
        url="https://veterito.com/contact"
      />

      <div className="legal-container container">
        <header className="legal-hub-header">
          <h1>{t('contact_title')}</h1>
          <p>{t('contact_desc')}</p>
        </header>

        {/* Tek ve gerçekten çalışan kanal, en üstte ve büyük. */}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="legal-card contact-primary">
          <Mail size={22} />
          <div>
            <h3>{LEGAL_CONTACT_EMAIL}</h3>
            <p>{t('contact_email_hint')}</p>
          </div>
        </a>

        <div className="legal-callout contact-response">
          <Clock size={18} />
          <span>{t('contact_response')}</span>
        </div>

        <section className="legal-hub-group">
          <h2>{t('contact_topics')}</h2>
          <div className="legal-card-grid">
            {konular.map(({ icon: Icon, key, konu, to }) => (
              <div key={key} className="legal-card contact-topic">
                <h3><Icon size={18} /> {t(`contact_topic_${key}`)}</h3>
                <p>
                  {t('contact_subject')}: <code>{konu}</code>
                </p>
                {to ? <Link to={to}>{t('contact_read_more')}</Link> : null}
              </div>
            ))}
          </div>
        </section>

        <section className="legal-hub-group">
          <h2>{t('contact_operator')}</h2>
          <p className="contact-operator">
            {brandConfig.name} · {brandConfig.address}
            <br />
            <Link to="/legal">{t('legal_hub_title')}</Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
