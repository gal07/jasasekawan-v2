import ScrollReveal from '@/components/ScrollReveal';
import { FiCheckCircle } from 'react-icons/fi';
import { siteConfig } from '@/lib/data';

const highlights = [
  'Tim cleaner profesional & tersertifikasi',
  'Peralatan lengkap & chemical berkualitas',
  'Tersedia di 8 kota besar di Indonesia',
  'Harga transparan tanpa biaya tersembunyi',
  'Garansi hasil memuaskan',
  'Booking mudah via WhatsApp',
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text content */}
          <ScrollReveal>
            <div>
              <span className="text-brand-cyan text-sm font-semibold tracking-wide uppercase">
                Tentang Kami
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                {siteConfig.name}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mb-6" />
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                <strong className="text-gray-900 dark:text-white">Jasasekawan.com</strong> adalah
                penyedia layanan berbagai macam jasa di bawah naungan{' '}
                <strong className="text-gray-900 dark:text-white">{siteConfig.company}</strong>.
                Misi kami adalah menyediakan layanan jasa profesional terbaik sesuai kebutuhan
                masyarakat dan perkembangan terkini.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2">
                    <FiCheckCircle className="w-5 h-5 text-brand-cyan mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Visual */}
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="aspect-square rounded-3xl gradient-hero p-8 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-brand-cyan/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,189,100,0.3),transparent_70%)]" />
                <div className="text-center relative z-10">
                  <div className="text-8xl mb-4">🧹</div>
                  <p className="text-white/90 text-lg font-heading font-bold">8+ Kota</p>
                  <p className="text-white/70 text-sm">Melayani di Seluruh Indonesia</p>
                  <div className="mt-6 inline-block px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-white font-bold text-3xl">
                    50+
                  </div>
                  <p className="text-white/70 text-sm mt-2">Paket Layanan</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100 dark:border-gray-700">
                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-lg">
                  ⭐
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Rating Pelanggan</p>
                  <p className="font-bold text-gray-900 dark:text-white">4.9 / 5.0</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
