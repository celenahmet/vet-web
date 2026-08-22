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

        {/* ⚠️ TEK KANAL, EN ÜSTTE VE BÜYÜK. Sayfanın işi kullanıcıyı bir adrese
            ulaştırmak; geri kalan her şey o adresi süsler. Marka renginde ve
            dokunulabilir bir blok, sayfanın tek eylemi olduğunu söylüyor. */}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="contact-primary">
          <span className="contact-primary-icon"><Mail size={24} /></span>
          <span className="contact-primary-text">
            <strong>{LEGAL_CONTACT_EMAIL}</strong>
            <span>{t('contact_email_hint')}</span>
          </span>
        </a>

        <p className="contact-response">
          <Clock size={16} />
          <span>{t('contact_response')}</span>
        </p>

        <section className="contact-section">
          <h2>{t('contact_topics')}</h2>
          {/* ⚠️ IZGARA DEĞİL LİSTE. Izgarada satırlar en uzun karta göre geriliyordu
              ve kısa kartların altında kocaman boşluk kalıyordu. Bunlar zaten
              tek satırlık maddeler; liste hem sıkı duruyor hem okuma sırasını
              koruyor. */}
          <ul className="contact-list">
            {konular.map(({ icon: Icon, key, konu, to }) => (
              <li key={key}>
                <span className="contact-list-icon"><Icon size={17} /></span>
                <span className="contact-list-body">
                  <strong>{t(`contact_topic_${key}`)}</strong>
                  <span className="contact-list-meta">
                    {t('contact_subject')}: <code>{konu}</code>
                    {to ? <> · <Link to={to}>{t('contact_read_more')}</Link></> : null}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="contact-section">
          <h2>{t('contact_operator')}</h2>
          <p className="contact-operator">
            {brandConfig.name} · {brandConfig.address}
          </p>
          <p className="contact-operator">
            <Link to="/legal">{t('legal_hub_title')}</Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
