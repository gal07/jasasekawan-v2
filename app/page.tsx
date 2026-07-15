import { Metadata } from 'next';
import Hero from './Hero';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import CitiesSection from './CitiesSection';
import CTASection from './CTASection';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CitiesSection />
      <CTASection />
    </>
  );
}

// Structured data for homepage
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.whatsapp,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Malang',
    addressRegion: 'Jawa Timur',
    addressCountry: 'ID',
  },
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.tiktok,
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '17:00',
  },
};
