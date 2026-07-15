import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { FiMapPin } from 'react-icons/fi';

interface Props {
  city: { name: string; slug: string; image: string };
  index: number;
}

export default function CityCard({ city, index }: Props) {
  return (
    <ScrollReveal delay={index * 80}>
      <Link
        href={`/kota/${city.slug}`}
        className="group block relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
          <div className="flex items-center gap-2 text-white">
            <FiMapPin className="w-4 h-4 text-brand-gold" />
            <span className="font-heading font-bold text-xl group-hover:text-brand-gold transition-colors">
              {city.name}
            </span>
          </div>
        </div>
        {/* Fallback gradient bg per city */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: [
              'linear-gradient(135deg, #dcbd64, #26a8cb)',
              'linear-gradient(135deg, #26a8cb, #1e8faf)',
              'linear-gradient(135deg, #c4a344, #dcbd64)',
              'linear-gradient(135deg, #3cb8d8, #26a8cb)',
              'linear-gradient(135deg, #e8d48b, #dcbd64)',
              'linear-gradient(135deg, #1e8faf, #dcbd64)',
              'linear-gradient(135deg, #dcbd64, #3cb8d8)',
              'linear-gradient(135deg, #26a8cb, #e8d48b)',
            ][index % 8],
          }}
        />
      </Link>
    </ScrollReveal>
  );
}
