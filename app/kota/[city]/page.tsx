import type { Metadata } from 'next';
import Link from 'next/link';
import { FiMessageCircle, FiCheck, FiArrowLeft, FiChevronDown, FiChevronUp } from 'react-icons/fi';
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

function encodeWAMessage(cityName: string, packageName: string): string {
  return encodeURIComponent(
    `Halo Sekawan ${cityName}, Saya tertarik dengan jasa ${packageName} dan ingin tau info lebih lanjut.`
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
      <div className="max-w-4xl mx-auto px-4 md:px-8">
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

        {/* Main CTA */}
        <ScrollReveal delay={100}>
          <div className="text-center mb-12">
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

        {/* Services with packages */}
        <div className="space-y-6 mb-12">
          {cityServices.map((service, sIdx) => (
            <ScrollReveal key={service.id} delay={sIdx * 80}>
              <details className="group rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden" open={sIdx === 0}>
                <summary className="flex items-center gap-4 p-5 md:p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors list-none">
                  <span className="text-3xl shrink-0">{service.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{service.sub}</p>
                  </div>
                  <div className="text-gray-400 group-open:hidden">
                    <FiChevronDown className="w-5 h-5" />
                  </div>
                  <div className="text-gray-400 hidden group-open:block">
                    <FiChevronUp className="w-5 h-5" />
                  </div>
                </summary>

                {/* Packages list */}
                <div className="border-t border-gray-100 dark:border-gray-800 p-5 md:p-6">
                  <div className="grid gap-3">
                    {service.packages.map((pkg, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                            {pkg.name}
                          </h3>
                          <p className="text-brand-cyan font-bold text-sm mt-0.5">{pkg.price}</p>
                          {pkg.details && pkg.details.length > 0 && (
                            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                              {pkg.details.slice(0, 4).map((d, di) => (
                                <li key={di} className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                  <FiCheck className="w-3 h-3 text-brand-cyan shrink-0" /> {d}
                                </li>
                              ))}
                              {pkg.details.length > 4 && (
                                <li className="text-xs text-gray-400">+{pkg.details.length - 4} lainnya</li>
                              )}
                            </ul>
                          )}
                        </div>
                        <a
                          href={`https://wa.me/${waNumber}?text=${encodeWAMessage(city.name, pkg.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition-colors shrink-0"
                        >
                          <FaWhatsapp className="w-4 h-4" /> Booking via WhatsApp
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
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

        {/* Bottom CTA */}
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
