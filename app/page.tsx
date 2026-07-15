import { Metadata } from 'next';
import Hero from './Hero';
import AboutSection from './AboutSection';
import CitiesSection from './CitiesSection';
import CTASection from './CTASection';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CitiesSection />
      <CTASection />
    </>
  );
}


