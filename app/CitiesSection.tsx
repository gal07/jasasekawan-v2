import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import CityCard from '@/components/CityCard';
import ScrollReveal from '@/components/ScrollReveal';
import { cities } from '@/lib/data';

export default function CitiesSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-brand-cyan text-sm font-semibold tracking-wide uppercase">
              Area Layanan
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              Tersedia di Kota Anda
            </h2>
            <div className="w-16 h-1 rounded-full gradient-gold mx-auto mb-6" />
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Kami melayani 8 kota besar di Indonesia. Pilih kota Anda untuk melihat layanan yang
              tersedia.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city, i) => (
            <CityCard key={city.slug} city={city} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gold text-white font-medium hover:bg-brand-gold-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-gold/20"
          >
            Kota Anda belum tersedia? Hubungi Kami <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
