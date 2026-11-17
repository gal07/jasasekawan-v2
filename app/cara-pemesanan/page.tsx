import type { Metadata } from 'next';
import { FiMessageCircle } from 'react-icons/fi';
import ScrollReveal from '@/components/ScrollReveal';
import { orderingSteps, siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Cara Pemesanan',
  description:
    'Cara mudah memesan layanan Jasa Sekawan — konsultasi, pilih paket, konfirmasi, tim kami datang, selesai!',
};

export default function CaraPemesananPage() {
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Halo Jasa Sekawan, saya ingin konsultasi dan memesan layanan.'
  )}`;

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Cara Pemesanan
            </h1>
            <div className="w-16 h-1 rounded-full gradient-gold mx-auto mb-6" />
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Proses mudah dan cepat untuk mendapatkan layanan profesional terbaik.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-gold via-brand-cyan to-brand-gold hidden md:block" />

          <div className="space-y-12 relative">
            {orderingSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="flex gap-6 items-start">
                  {/* Step number circle */}
                  <div className="relative z-10 shrink-0 w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-cyan/20">
                    {step.icon}
                  </div>

                  <div className="pt-1">
                    <span className="text-xs font-bold text-brand-gold tracking-wider uppercase">
                      Step {step.step}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={600}>
          <div className="mt-16 text-center p-8 md:p-10 rounded-3xl gradient-card border border-brand-gold/10">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Siap Pesan? 🎉
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Hubungi kami sekarang untuk konsultasi kebutuhan Anda. Gratis!
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-cyan text-white font-bold hover:bg-brand-cyan-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-cyan/20"
            >
              <FiMessageCircle className="w-5 h-5" /> Booking via WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
