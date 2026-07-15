import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

interface Props {
  icon: string;
  title: string;
  sub: string;
  desc: string;
  href: string;
  index: number;
}

export default function ServiceCard({ icon, title, sub, desc, href, index }: Props) {
  return (
    <ScrollReveal delay={index * 100}>
      <Link href={href} className="group block h-full">
        <div className="h-full p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-brand-gold/40 dark:hover:border-brand-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/5 hover:-translate-y-1">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
            {icon}
          </div>
          <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-sm text-brand-cyan font-medium mb-2">{sub}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
        </div>
      </Link>
    </ScrollReveal>
  );
}
