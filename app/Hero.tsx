'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import { siteConfig } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,189,100,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(38,168,203,0.3),transparent_50%)]" />

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-[10%] w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hidden md:block"
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-[15%] w-12 h-12 rounded-full bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/10 hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-[20%] w-20 h-20 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/5 hidden md:block"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium mb-6">
            🇮🇩 Di bawah naungan {siteConfig.company}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          Layanan Jasa{' '}
          <span className="text-brand-gold drop-shadow-[0_0_20px_rgba(220,189,100,0.3)]">
            Profesional
          </span>{' '}
          Terbaik
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Cleaning service, garden, cuci sofa, fogging, cuci kendaraan, dan berbagai jasa profesional
          lainnya. Tersedia di 8 kota di Indonesia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-brand-cyan font-semibold hover:bg-gray-50 transition-all hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5"
          >
            Lihat Layanan <FiArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all hover:-translate-y-0.5"
          >
            <FiMessageCircle className="w-4 h-4" /> Hubungi Kami
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 md:mt-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 mx-auto flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
