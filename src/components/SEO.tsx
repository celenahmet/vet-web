import { Helmet } from 'react-helmet-async';
import { brandConfig } from '../config/brand';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
  url?: string;
}

export default function SEO({ title, description, name, type, image, url }: SEOProps) {
  const siteName = name || brandConfig.name;
  const pageTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{pageTitle}</title>
      <meta name='description' content={description} />
      {url && <link rel="canonical" href={url} />}
      
      {/* Open Graph tags for social media sharing */}
      <meta property='og:type' content={type || 'website'} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={description} />
      {image && <meta property='og:image' content={image} />}
      {url && <meta property='og:url' content={url} />}
      <meta property='og:site_name' content={siteName} />

      {/* Twitter Card tags */}
      <meta name='twitter:creator' content={siteName} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={description} />
      {image && <meta name='twitter:image' content={image} />}
    </Helmet>
  );
}
