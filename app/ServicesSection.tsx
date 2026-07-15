import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/data';

export default function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-brand-cyan text-sm font-semibold tracking-wide uppercase">
            Layanan Kami
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Pilih Layanan yang Anda Butuhkan
          </h2>
          <div className="w-16 h-1 rounded-full gradient-gold mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Lebih dari 50 paket layanan profesional yang siap membantu kebutuhan Anda — dari
            cleaning service hingga perawatan kendaraan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, i) => (
            <ServiceCard
              key={s.id}
              icon={s.icon}
              title={s.title}
              sub={s.sub}
              desc={s.desc}
              href={`/layanan#${s.id}`}
              index={i}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan text-white font-medium hover:bg-brand-cyan-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-cyan/20"
          >
            Lihat Semua Paket & Harga <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
