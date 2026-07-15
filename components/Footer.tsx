import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-brand-cyan text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold text-white">
                JS
              </div>
              <span className="font-heading text-xl font-bold">Jasa Sekawan</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Penyedia layanan jasa profesional di bawah naungan {siteConfig.company}.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Navigasi</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-white/70 hover:text-white text-sm transition-colors">Beranda</Link>
              <Link href="/layanan" className="text-white/70 hover:text-white text-sm transition-colors">Layanan</Link>
              <Link href="/cara-pemesanan" className="text-white/70 hover:text-white text-sm transition-colors">Cara Pemesanan</Link>
              <Link href="/kontak" className="text-white/70 hover:text-white text-sm transition-colors">Kontak</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <SiTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Jasasekawan.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
