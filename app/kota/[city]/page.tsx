import type { Metadata } from 'next';
import Link from 'next/link';
import { FiMessageCircle, FiCheck, FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { cities, services } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';

interface Props {
  params: { city: string };
}

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) return { title: 'Tidak Ditemukan' };
  return {
    title: `Layanan Cleaning Service ${city.name}`,
    description: `Jasa cleaning service profesional di ${city.name}. Tersedia daily cleaning, deep cleaning, cuci sofa, fogging, dan berbagai layanan lainnya.`,
    keywords: `cleaning service ${city.name}, jasa kebersihan ${city.name}, cuci sofa ${city.name}`,
    alternates: { canonical: `/kota/${city.slug}` },
  };
}

function encodeWAMessage(cityName: string, serviceName: string): string {
  return encodeURIComponent(
    `Halo Sekawan ${cityName}, Saya tertarik dengan jasa ${serviceName} dan ingin tau info lebih lanjut.`
  );
}

export default function CityPage({ params }: Props) {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) notFound();

  const waNumber = city.whatsapp;
  const cityServices = services.filter(
    (s) => city.availableServices.includes(s.id)
  );

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-brand-cyan text-sm mb-8 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" /> Kembali
        </Link>

        <ScrollReveal>
          <div className="mb-12">
            <span className="text-brand-gold text-sm font-semibold tracking-wide uppercase">
              Area Layanan
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              Jasa Cleaning Service{' '}
              <span className="text-gradient">{city.name}</span>
            </h1>
            <div className="w-16 h-1 rounded-full gradient-gold mb-6" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Layanan cleaning service profesional di {city.name} dan sekitarnya. Kami hadir dengan
              tim cleaner profesional, peralatan lengkap, dan harga transparan. Booking mudah via
              WhatsApp!
            </p>
          </div>
        </ScrollReveal>

        {/* Available services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {cityServices.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 80}>
              <div className="p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-brand-gold/30 transition-all flex flex-col h-full">
                <span className="text-3xl block mb-3">{service.icon}</span>
                <h3 className="font-heading font-bold text-gray-900 dark:text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{service.sub}</p>
                <div className="mt-auto flex flex-col gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                  <Link
                    href={`/layanan#${service.id}`}
                    className="text-brand-cyan text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Lihat paket & harga <FiExternalLink className="w-3 h-3" />
                  </Link>
                  <a
                    href={`https://wa.me/${waNumber}?text=${encodeWAMessage(city.name, service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500 hover:bg-green-600 text-white text-xs font-medium transition-colors"
                  >
                    <FaWhatsapp className="w-3 h-3" /> Booking via WhatsApp
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Why us */}
        <ScrollReveal delay={400}>
          <div className="rounded-3xl gradient-card border border-brand-gold/10 p-8 md:p-10 mb-8">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Kenapa Harus Jasa Sekawan di {city.name}?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Tim cleaner profesional & berpengalaman',
                'Peralatan & chemical berkualitas tinggi',
                'Harga kompetitif & transparan',
                'Booking mudah via WhatsApp',
                'Garansi hasil memuaskan',
                'Bisa pilih jadwal fleksibel',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-brand-cyan mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={500}>
          <div className="text-center">
            <a
              href={`https://wa.me/${waNumber}?text=${encodeWAMessage(city.name, 'anda')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition-all hover:-translate-y-0.5 shadow-xl shadow-green-500/20"
            >
              <FiMessageCircle className="w-5 h-5" /> Booking di {city.name} via WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
