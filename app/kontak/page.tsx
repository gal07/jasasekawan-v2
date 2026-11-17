import type { Metadata } from 'next';
import Link from 'next/link';
import { FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig, cities } from '../../lib/data';
import ScrollReveal from '../../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Kontak',
  description: 'Hubungi Jasa Sekawan untuk booking layanan profesional. Tersedia via WhatsApp.',
};

export default function KontakPage() {
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=Halo%20Jasa%20Sekawan%2C%20saya%20mau%20tanya%20soal%20layanan...`;

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hubungi Kami
            </h1>
            <div className="w-16 h-1 rounded-full gradient-gold mx-auto mb-6" />
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Punya pertanyaan atau mau booking? Kami siap membantu! Hubungi via WhatsApp untuk
              respon tercepat.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* WhatsApp CTA - main */}
          <ScrollReveal delay={0}>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-3 group flex items-center gap-6 p-6 md:p-8 rounded-3xl bg-green-500 hover:bg-green-600 transition-all hover:-translate-y-1 shadow-xl shadow-green-500/20"
            >
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                <FaWhatsapp className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-1">
                  Chat via WhatsApp
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  Respon cepat! Langsung terhubung dengan tim kami untuk booking atau pertanyaan.
                </p>
              </div>
              <FiArrowRight className="w-6 h-6 text-white shrink-0 hidden md:block" />
            </a>
          </ScrollReveal>

          {/* Phone */}
          <ScrollReveal delay={100}>
            <a
              href={`tel:+${siteConfig.whatsapp}`}
              className="block p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 text-center hover:border-brand-cyan/40 transition-all hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4">
                <FiPhone className="w-5 h-5 text-brand-cyan" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 dark:text-white mb-2">
                Telepon
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Hubungi kami di jam operasional
              </p>
              <p className="text-brand-cyan font-bold mt-2">{siteConfig.whatsapp}</p>
            </a>
          </ScrollReveal>



          {/* Address */}
          <ScrollReveal delay={300}>
            <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 text-center">
              <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 dark:text-white mb-2">
                Jam Operasional
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Senin - Minggu</p>
              <p className="font-bold text-gray-900 dark:text-white mt-2">08:00 - 20:00 WIB</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Cities quick links */}
        <ScrollReveal delay={400}>
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Layanan Tersedia di
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/kota/${city.slug}`}
                  className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-brand-cyan hover:text-white transition-all"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
