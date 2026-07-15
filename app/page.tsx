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


