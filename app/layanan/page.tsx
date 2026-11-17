import type { Metadata } from 'next';
import { FiMessageCircle, FiCheck } from 'react-icons/fi';
import { services, siteConfig } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Layanan',
  description:
    'Lebih dari 50 paket layanan profesional: cleaning service, garden, cuci sofa, fogging, cuci kendaraan, dan lainnya.',
};

export default function LayananPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Semua Layanan
          </h1>
          <div className="w-16 h-1 rounded-full gradient-gold mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan Anda. Semua harga sudah termasuk peralatan dan
            chemical profesional.
          </p>
        </div>

        {/* Service list */}
        <div className="space-y-16">
          {services.map((service, si) => (
            <ScrollReveal key={service.id} delay={si * 100}>
              <section id={service.id} className="scroll-mt-24">
                <div className="text-center mb-8">
                  <span className="text-5xl block mb-3">{service.icon}</span>
                  <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-brand-cyan font-medium">{service.sub}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-lg mx-auto">
                    {service.desc}
                  </p>
                </div>

                {/* Packages grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {service.packages.map((pkg, pi) => (
                    <div
                      key={pi}
                      className="group rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:border-brand-gold/40 dark:hover:border-brand-gold/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-brand-gold font-bold text-xl mb-4">{pkg.price}</p>

                      <ul className="space-y-2 mb-4">
                        {pkg.details.map((d, di) => (
                          <li key={di} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <FiCheck className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>

                      {pkg.subPrices && (
                        <ul className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 space-y-1">
                          {pkg.subPrices.map((sp, spi) => (
                            <li
                              key={spi}
                              className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                              {sp}
                            </li>
                          ))}
                        </ul>
                      )}

                      {pkg.addons && (
                        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                            Additional Service:
                          </p>
                          {pkg.addons.map((a, ai) => (
                            <p key={ai} className="text-xs text-gray-500 dark:text-gray-400">
                              • {a}
                            </p>
                          ))}
                        </div>
                      )}

                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                          `Halo Jasa Sekawan, saya tertarik dengan paket ${pkg.name} dan ingin pesan.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-cyan text-white text-sm font-medium hover:bg-brand-cyan-dark transition-all"
                      >
                        <FiMessageCircle className="w-4 h-4" /> Pesan Sekarang
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
