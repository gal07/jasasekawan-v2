/**
 * Seed script: upload services & cities to Firestore
 * Usage: node scripts/seed-firestore.mjs
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read service account from credentials
const saPath = resolve(__dirname, '../../credentials/firebase-service-account.json');
const serviceAccount = JSON.parse(readFileSync(saPath, 'utf8'));

const app = initializeApp({
  credential: cert(serviceAccount),
  projectId: 'rev-streaming-8e34a',
});

const db = getFirestore(app);

// === DATA ===
const siteConfig = {
  name: 'Jasa Sekawan',
  tagline: 'Penyedia Layanan Jasa Profesional',
  description: 'Jasasekawan.com adalah penyedia layanan berbagai macam jasa di bawah naungan PT. Sekawan Adhya Corporindo.',
  url: 'https://jasasekawan.com',
  keywords: 'jasa kebersihan malang, jasa lulur malang, cleaning service malang',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100095400545205',
    tiktok: 'https://tiktok.com/@jasasekawan',
    instagram: 'https://www.instagram.com/jasasekawan/',
  },
  whatsapp: '6285710021668',
  company: 'PT. Sekawan Adhya Corporindo',
};

const cities = [
  { name: 'Malang', slug: 'malang', image: '/images/cities/malang.jpg', whatsapp: '6285888815745', availableServices: ['daily-cleaning', 'garden', 'sofa-cleaning', 'fogging', 'vehicle-wash', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'] },
  { name: 'Surabaya', slug: 'surabaya', image: '/images/cities/surabaya.jpg', whatsapp: '6285710021668', availableServices: ['daily-cleaning', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'] },
  { name: 'Sidoarjo', slug: 'sidoarjo', image: '/images/cities/sidoarjo.jpg', whatsapp: '6285710021668', availableServices: ['daily-cleaning', 'garden', 'sofa-cleaning', 'fogging', 'vehicle-wash', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'] },
  { name: 'Jogja', slug: 'jogja', image: '/images/cities/jogja.jpg', whatsapp: '6285710021668', availableServices: ['daily-cleaning', 'garden', 'sofa-cleaning', 'fogging', 'vehicle-wash', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'] },
  { name: 'Solo', slug: 'solo', image: '/images/cities/solo.jpg', whatsapp: '6285710021668', availableServices: ['daily-cleaning', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'] },
  { name: 'Depok', slug: 'depok', image: '/images/cities/depok.jpg', whatsapp: '6285710021668', availableServices: ['daily-cleaning', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'] },
  { name: 'Bali', slug: 'bali', image: '/images/cities/bali.jpg', whatsapp: '62816966778', availableServices: ['daily-cleaning', 'garden', 'sofa-cleaning', 'fogging', 'vehicle-wash', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'] },
  { name: 'Purwokerto', slug: 'purwokerto', image: '/images/cities/purwokerto.jpg', whatsapp: '6285710021668', availableServices: ['daily-cleaning', 'garden', 'vehicle-wash', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'] },
];

const services = [
  { id: 'daily-cleaning', icon: '🧹', title: 'Daily Cleaning Service', sub: 'Jasa Bebersih Harian', desc: 'Layanan cleaning service profesional untuk rumah, apartemen, kantor, dan area komersial.', packages: [{ name: 'Daily Cleaning Package', price: 'Rp62.500/Jam', details: ['Include alat bersih-bersih standard', 'Pengharum ruangan', 'Vacuum cleaner', 'Membersihkan toilet'], addons: ['Cuci Piring 20K/15 Menit', 'Bersihkan Kulkas 20K/15 Menit'] }, { name: 'Housing Estate Pack', price: 'Mulai Rp210.000/3 Jam', details: ['Durasi 3-5 jam non stop', '1-2 cleaner profesional', 'Peralatan + chemical lengkap', 'Dusting, Sweeping, Mopping, Glass & Toilet Cleaning'], subPrices: ['Rp210.000/3 Jam (1 Cleaner)', 'Rp350.000/3 Jam (2 Cleaner)', 'Rp300.000/5 Jam (1 Cleaner)', 'Rp585.000/5 Jam (2 Cleaner)'] }, { name: 'Pulih Ruang', price: 'Mulai Rp150.000/Jam', details: ['Penanganan hunian ekstrem', 'Kotoran/tinja hewan', 'Bau menyengat', 'Penumpukan sampah', 'Kontaminasi biologis', 'Pendekatan empatik & privasi terjaga'] }, { name: 'Business Pack', price: 'Mulai Rp930.000/5 Jam', details: ['3-5 cleaner profesional tersertifikasi', 'Peralatan standar perkantoran', 'Chemical lengkap', 'Dusting, Sweeping, Mopping, Glass & Toilet Cleaning'], subPrices: ['Rp930.000/5 Jam (3 Cleaner)', 'Rp1.500.000/5 Jam (5 Cleaner)'] }, { name: 'Deep Cleaning Package', price: 'Mulai Rp210.000/3 Jam', details: ['1-2 pekerja', 'Pembersihan mendetail', 'Alat & pembersih lengkap'], subPrices: ['Rp210.000/3 Jam (1 Pekerja)', 'Rp350.000/3 Jam (2 Pekerja)'] }, { name: 'Paket Grebek Kost', price: 'Rp280.000 (promo Rp217.000)', details: ['Free Vacuum Curumi', '3 Jam untuk 3 Kamar'] }] },
  { id: 'garden', icon: '🌿', title: 'Garden Service', sub: 'Jasa Perawatan Taman', desc: 'Perawatan taman profesional: membersihkan lumut, rontokan daun, dan menjaga taman tetap asri.', packages: [{ name: 'Garden Package Single 3 Jam', price: 'Rp275.000/3 Jam', details: ['1 Pekerja', 'Membersihkan taman', 'Membersihkan lumut', 'Membersihkan rontokan daun'] }, { name: 'Garden Package Single 5 Jam', price: 'Rp400.000/5 Jam', details: ['1 Pekerja', 'Membersihkan taman', 'Membersihkan lumut', 'Membersihkan rontokan daun'] }, { name: 'Garden Package Double 3 Jam', price: 'Rp500.000/3 Jam', details: ['2 Pekerja', 'Membersihkan taman', 'Membersihkan lumut', 'Membersihkan rontokan daun'] }, { name: 'Garden Package Double 5 Jam', price: 'Rp750.000/5 Jam', details: ['2 Pekerja', 'Membersihkan taman', 'Membersihkan lumut', 'Membersihkan rontokan daun'] }] },
  { id: 'sofa-cleaning', icon: '🛋️', title: 'Sofa & Upholstery Cleaning', sub: 'Cuci Sofa & Springbed', desc: 'Cuci sofa profesional untuk sofa standar, jumbo, sofa bed, bantalan, kursi kantor, dan springbed.', packages: [{ name: 'Cuci Sofa / Springbed', price: 'Mulai Rp50.000', details: ['Sofa Standar', 'Sofa Jumbo', 'Sofa Bed', 'Bantalan Sofa', 'Kursi Kantor', 'Springbed'] }, { name: 'Vacuum Kasur / Sofa / Karpet', price: 'Mulai Rp75.000', details: ['Deep dry vacuum', 'Sinar UV'] }] },
  { id: 'fogging', icon: '🦟', title: 'Fogging Service', sub: 'Fogging Nyamuk & Disinfektan', desc: 'Fogging profesional indoor & outdoor dengan teknisi berpengalaman dan chemical terbaik.', packages: [{ name: 'Fogging DBD Paket 1', price: 'Rp250.000', details: ['Luas bangunan maks 200m²'] }, { name: 'Fogging DBD Paket 2', price: 'Rp300.000', details: ['Luas bangunan maks 400m²'] }, { name: 'Fogging DBD Paket 3', price: 'Rp500.000', details: ['Luas bangunan maks 600m²'] }, { name: 'Fogging Disinfektan Paket 1', price: 'Rp150.000', details: ['Luas bangunan maks 200m²', '99.99% efektif membasmi virus & bakteri'] }, { name: 'Fogging Disinfektan Paket 2', price: 'Rp250.000', details: ['Luas bangunan maks 400m²'] }, { name: 'Fogging Disinfektan Paket 3', price: 'Rp400.000', details: ['Luas bangunan maks 600m²'] }] },
  { id: 'vehicle-wash', icon: '🏍️', title: 'Vehicle Wash', sub: 'Cuci Motor & Mobil', desc: 'Cuci kendaraan profesional dengan hasil kinclong.', packages: [{ name: 'Motor Standard', price: 'Rp25.000/Motor', details: ['Sabun, kanebo, semir ban'] }, { name: 'Motor Besar', price: 'Rp45.000/Motor', details: ['Sabun, kanebo, semir ban'] }, { name: 'Mobil Standard 1', price: 'Rp50.000/Mobil', details: ['Cuci, vacuum dalam, semir ban, spray dashboard'] }, { name: 'Mobil Standard 2', price: 'Rp75.000/Mobil', details: ['Cuci, vacuum dalam, disinfektan, semir ban'] }, { name: 'Mobil Besar 1', price: 'Rp65.000/Mobil', details: ['Cuci, vacuum dalam, semir ban, spray dashboard'] }, { name: 'Mobil Besar 2', price: 'Rp90.000/Mobil', details: ['Cuci, vacuum dalam, disinfektan, semir ban'] }] },
  { id: 'salon-bathroom', icon: '🚿', title: 'Salon Kamar Mandi', sub: 'Deep Clean Bathroom', desc: 'Pembersihan kamar mandi profesional menyeluruh.', packages: [{ name: 'Salon Kamar Mandi', price: 'Mulai Rp125.000', details: ['Pembersihan menyeluruh kamar mandi'] }] },
  { id: 'home-laundry', icon: '👕', title: 'Home Laundry', sub: 'Laundry di Tempat', desc: 'Layanan laundry profesional di lokasi Anda.', packages: [{ name: 'Home Laundry', price: 'Rp85.000/1,5 Jam', details: ['Laundry profesional di tempat Anda'] }] },
  { id: 'paket-all-in', icon: '✨', title: 'Paket Bebersih All In', sub: 'Full Service Package', desc: 'Paket lengkap dengan peralatan dan chemical lengkap.', packages: [{ name: 'All In 1', price: 'Rp305.000/5 Jam', details: ['1 Cleaner', 'Dusting, Sweeping, Mopping, Glass & Toilet', 'Cuci Piring + Kulkas', 'Double Vacuum UV'] }, { name: 'All In 2', price: 'Rp480.000/4 Jam', details: ['2 Cleaner', 'Dusting, Sweeping, Mopping, Glass & Toilet', 'Cuci Piring + Kulkas', 'Double Vacuum UV'] }, { name: 'All In 3', price: 'Rp480.000/3 Jam', details: ['3 Cleaner', 'Dusting, Sweeping, Mopping, Glass & Toilet', 'Cuci Piring + Kulkas', 'Double Vacuum UV'] }] },
  { id: 'subscription', icon: '📋', title: 'Paket Berlangganan', sub: 'Subscription Package', desc: 'Paket berlangganan bulanan.', packages: [{ name: 'Paket Silver', price: 'Mulai Rp250.000/Bulan', details: ['2x kunjungan per bulan', '3 jam per kunjungan', '1 cleaner'] }, { name: 'Paket Gold', price: 'Mulai Rp450.000/Bulan', details: ['4x kunjungan per bulan', '4 jam per kunjungan', '1-2 cleaner', 'Free cuci sofa 1x'] }] },
];

async function seed() {
  const batch = db.batch();

  // Upsert site config
  batch.set(db.collection('content').doc('siteConfig'), siteConfig, { merge: true });

  // Upsert cities
  for (const city of cities) {
    batch.set(db.collection('content').doc('cities').collection('data').doc(city.slug), city, { merge: true });
  }

  // Upsert services
  for (const service of services) {
    batch.set(db.collection('content').doc('services').collection('data').doc(service.id), service, { merge: true });
  }

  await batch.commit();
  console.log(`✅ Seeded: ${cities.length} cities, ${services.length} services + siteConfig`);
}

seed().catch(console.error).finally(() => process.exit(0));
