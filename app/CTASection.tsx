import { FiMessageCircle } from 'react-icons/fi';
import ScrollReveal from '@/components/ScrollReveal';
import { siteConfig } from '@/lib/data';

export default function CTASection() {
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Halo Jasa Sekawan, saya ingin konsultasi dan booking layanan.'
  )}`;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,189,100,0.2),transparent_70%)]" />

      <ScrollReveal>
        <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Bebersih? 🧹
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Booking sekarang dan dapatkan layanan profesional terbaik untuk kebutuhan Anda.
            Konsultasi gratis!
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-brand-cyan font-bold text-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5"
          >
            <FiMessageCircle className="w-5 h-5" /> Booking via WhatsApp
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
