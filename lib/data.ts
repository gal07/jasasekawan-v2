export const siteConfig = {
  name: 'Jasa Sekawan',
  tagline: 'Penyedia Layanan Jasa Profesional',
  description:
    'Jasasekawan.com adalah penyedia layanan berbagai macam jasa di bawah naungan PT. Sekawan Adhya Corporindo. Misi kami adalah menyediakan layanan jasa profesional terbaik sesuai kebutuhan masyarakat dan perkembangan terkini.',
  url: 'https://jasasekawan.com',
  keywords:
    'jasa kebersihan malang, jasa lulur malang, cleaning service malang, jasa cleaning service surabaya, jasa bebersih',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100095400545205',
    tiktok: 'https://tiktok.com/@jasasekawan',
    instagram: 'https://www.instagram.com/jasasekawan/',
  },
  whatsapp: '6285888815745',
  company: 'PT. Sekawan Adhya Corporindo',
};

export interface City {
  name: string;
  slug: string;
  image: string;
  whatsapp: string;
  availableServices: string[]; // service IDs
}

export const cities: City[] = [
  {
    name: 'Malang',
    slug: 'malang',
    image: '/images/cities/malang.jpg',
    whatsapp: '6285888815745',
    availableServices: ['daily-cleaning', 'garden', 'sofa-cleaning', 'fogging', 'vehicle-wash', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'],
  },
  {
    name: 'Surabaya',
    slug: 'surabaya',
    image: '/images/cities/surabaya.jpg',
    whatsapp: '6285888815745',
    availableServices: ['daily-cleaning', 'sofa-cleaning', 'fogging', 'vehicle-wash', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'],
  },
  {
    name: 'Sidoarjo',
    slug: 'sidoarjo',
    image: '/images/cities/sidoarjo.jpg',
    whatsapp: '6285888815745',
    availableServices: ['daily-cleaning', 'garden', 'sofa-cleaning', 'fogging', 'vehicle-wash', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'],
  },
  {
    name: 'Jogja',
    slug: 'jogja',
    image: '/images/cities/jogja.jpg',
    whatsapp: '6285888815745',
    availableServices: ['daily-cleaning', 'garden', 'sofa-cleaning', 'fogging', 'vehicle-wash', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'],
  },
  {
    name: 'Depok',
    slug: 'depok',
    image: '/images/cities/depok.jpg',
    whatsapp: '6285888815745',
    availableServices: ['daily-cleaning', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'],
  },
  {
    name: 'Bali',
    slug: 'bali',
    image: '/images/cities/bali.jpg',
    whatsapp: '6285888815745',
    availableServices: ['daily-cleaning', 'garden', 'sofa-cleaning', 'fogging', 'vehicle-wash', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'],
  },
  {
    name: 'Purwokerto',
    slug: 'purwokerto',
    image: '/images/cities/purwokerto.jpg',
    whatsapp: '6285888815745',
    availableServices: ['daily-cleaning', 'garden', 'sofa-cleaning', 'vehicle-wash', 'salon-bathroom', 'home-laundry', 'paket-all-in', 'subscription'],
  },
];

export const services = [
  {
    id: 'daily-cleaning',
    icon: '🧹',
    title: 'Daily Cleaning Service',
    sub: 'Jasa Bebersih Harian',
    desc: 'Layanan cleaning service profesional untuk rumah, apartemen, kantor, dan area komersial.',
    packages: [
      {
        name: 'Daily Cleaning Package',
        price: 'Rp62.500/Jam',
        details: ['Include alat bersih-bersih standard', 'Pengharum ruangan', 'Vacuum cleaner', 'Membersihkan toilet'],
        addons: ['Cuci Piring 20K/15 Menit', 'Bersihkan Kulkas 20K/15 Menit'],
      },
      {
        name: 'Housing Estate Pack',
        price: 'Mulai Rp210.000/3 Jam',
        details: [
          'Durasi 3-5 jam non stop',
          '1-2 cleaner profesional',
          'Peralatan + chemical lengkap',
          'Dusting, Sweeping, Mopping, Glass & Toilet Cleaning',
        ],
        subPrices: ['Rp210.000/3 Jam (1 Cleaner)', 'Rp350.000/3 Jam (2 Cleaner)', 'Rp300.000/5 Jam (1 Cleaner)', 'Rp585.000/5 Jam (2 Cleaner)'],
      },
      {
        name: 'Pulih Ruang',
        price: 'Mulai Rp150.000/Jam',
        details: ['Penanganan hunian ekstrem', 'Kotoran/tinja hewan', 'Bau menyengat', 'Penumpukan sampah', 'Kontaminasi biologis', 'Pendekatan empatik & privasi terjaga'],
      },
      {
        name: 'Business Pack',
        price: 'Mulai Rp930.000/5 Jam',
        details: ['3-5 cleaner profesional tersertifikasi', 'Peralatan standar perkantoran', 'Chemical lengkap', 'Dusting, Sweeping, Mopping, Glass & Toilet Cleaning'],
        subPrices: ['Rp930.000/5 Jam (3 Cleaner)', 'Rp1.500.000/5 Jam (5 Cleaner)'],
      },
      {
        name: 'Deep Cleaning Package',
        price: 'Mulai Rp210.000/3 Jam',
        details: ['1-2 pekerja', 'Pembersihan mendetail', 'Alat & pembersih lengkap'],
        subPrices: ['Rp210.000/3 Jam (1 Pekerja)', 'Rp350.000/3 Jam (2 Pekerja)'],
      },
      {
        name: 'Paket Grebek Kost',
        price: 'Rp280.000 (promo Rp217.000)',
        details: ['Free Vacuum Curumi', '3 Jam untuk 3 Kamar'],
      },
    ],
  },
  {
    id: 'garden',
    icon: '🌿',
    title: 'Garden Service',
    sub: 'Jasa Perawatan Taman',
    desc: 'Perawatan taman profesional: membersihkan lumut, rontokan daun, dan menjaga taman tetap asri.',
    packages: [
      {
        name: 'Garden Package Single 3 Jam',
        price: 'Rp275.000/3 Jam',
        details: ['1 Pekerja', 'Membersihkan taman', 'Membersihkan lumut', 'Membersihkan rontokan daun'],
      },
      {
        name: 'Garden Package Single 5 Jam',
        price: 'Rp400.000/5 Jam',
        details: ['1 Pekerja', 'Membersihkan taman', 'Membersihkan lumut', 'Membersihkan rontokan daun'],
      },
      {
        name: 'Garden Package Double 3 Jam',
        price: 'Rp500.000/3 Jam',
        details: ['2 Pekerja', 'Membersihkan taman', 'Membersihkan lumut', 'Membersihkan rontokan daun'],
      },
      {
        name: 'Garden Package Double 5 Jam',
        price: 'Rp750.000/5 Jam',
        details: ['2 Pekerja', 'Membersihkan taman', 'Membersihkan lumut', 'Membersihkan rontokan daun'],
      },
    ],
  },
  {
    id: 'sofa-cleaning',
    icon: '🛋️',
    title: 'Sofa & Upholstery Cleaning',
    sub: 'Cuci Sofa & Springbed',
    desc: 'Cuci sofa profesional untuk sofa standar, jumbo, sofa bed, bantalan, kursi kantor, dan springbed.',
    packages: [
      {
        name: 'Cuci Sofa / Springbed',
        price: 'Mulai Rp50.000',
        details: ['Sofa Standar', 'Sofa Jumbo', 'Sofa Bed', 'Bantalan Sofa', 'Kursi Kantor', 'Springbed'],
      },
      {
        name: 'Vacuum Kasur / Sofa / Karpet',
        price: 'Mulai Rp75.000',
        details: ['Deep dry vacuum', 'Sinar UV'],
      },
    ],
  },
  {
    id: 'fogging',
    icon: '🦟',
    title: 'Fogging Service',
    sub: 'Fogging Nyamuk & Disinfektan',
    desc: 'Fogging profesional indoor & outdoor dengan teknisi berpengalaman dan chemical terbaik.',
    packages: [
      { name: 'Fogging DBD Paket 1', price: 'Rp250.000', details: ['Luas bangunan maks 200m²'] },
      { name: 'Fogging DBD Paket 2', price: 'Rp300.000', details: ['Luas bangunan maks 400m²'] },
      { name: 'Fogging DBD Paket 3', price: 'Rp500.000', details: ['Luas bangunan maks 600m²'] },
      { name: 'Fogging Disinfektan Paket 1', price: 'Rp150.000', details: ['Luas bangunan maks 200m²', '99.99% efektif membasmi virus & bakteri'] },
      { name: 'Fogging Disinfektan Paket 2', price: 'Rp250.000', details: ['Luas bangunan maks 400m²'] },
      { name: 'Fogging Disinfektan Paket 3', price: 'Rp400.000', details: ['Luas bangunan maks 600m²'] },
    ],
  },
  {
    id: 'vehicle-wash',
    icon: '🏍️',
    title: 'Vehicle Wash',
    sub: 'Cuci Motor & Mobil',
    desc: 'Cuci kendaraan profesional dengan hasil kinclong — motor, mobil standard & besar.',
    packages: [
      { name: 'Motor Standard', price: 'Rp25.000/Motor', details: ['Sabun, kanebo, semir ban'] },
      { name: 'Motor Besar', price: 'Rp45.000/Motor', details: ['Sabun, kanebo, semir ban'] },
      { name: 'Mobil Standard 1', price: 'Rp50.000/Mobil', details: ['Cuci, vacuum dalam, semir ban, spray dashboard ±45 menit'] },
      { name: 'Mobil Standard 2', price: 'Rp75.000/Mobil', details: ['Cuci, vacuum dalam, disinfektan, semir ban, spray dashboard ±60 menit'] },
      { name: 'Mobil Besar 1', price: 'Rp65.000/Mobil', details: ['Cuci, vacuum dalam, semir ban, spray dashboard ±45 menit'] },
      { name: 'Mobil Besar 2', price: 'Rp90.000/Mobil', details: ['Cuci, vacuum dalam, disinfektan, semir ban, spray dashboard ±60 menit'] },
    ],
  },
  {
    id: 'salon-bathroom',
    icon: '🚿',
    title: 'Salon Kamar Mandi',
    sub: 'Deep Clean Bathroom',
    desc: 'Pembersihan kamar mandi profesional menyeluruh.',
    packages: [{ name: 'Salon Kamar Mandi', price: 'Mulai Rp125.000', details: ['Pembersihan menyeluruh kamar mandi'] }],
  },
  {
    id: 'home-laundry',
    icon: '👕',
    title: 'Home Laundry',
    sub: 'Laundry di Tempat',
    desc: 'Layanan laundry profesional di lokasi Anda.',
    packages: [{ name: 'Home Laundry', price: 'Rp85.000/1,5 Jam', details: ['Laundry profesional di tempat Anda'] }],
  },
  {
    id: 'paket-all-in',
    icon: '✨',
    title: 'Paket Bebersih All In',
    sub: 'Full Service Package',
    desc: 'Paket lengkap dengan peralatan dan chemical lengkap — Dusting, Sweeping, Mopping, Glass & Toilet + Cuci Piring & Kulkas + Double Vacuum UV.',
    packages: [
      { name: 'All In 1', price: 'Rp305.000/5 Jam', details: ['1 Cleaner', 'Dusting, Sweeping, Mopping, Glass & Toilet', 'Cuci Piring + Kulkas', 'Double Vacuum UV'] },
      { name: 'All In 2', price: 'Rp480.000/4 Jam', details: ['2 Cleaner', 'Dusting, Sweeping, Mopping, Glass & Toilet', 'Cuci Piring + Kulkas', 'Double Vacuum UV'] },
      { name: 'All In 3', price: 'Rp740.000/3 Jam', details: ['4 Cleaner', 'Dusting, Sweeping, Mopping, Glass & Toilet', 'Cuci Piring + Kulkas', 'Double Vacuum UV'] },
    ],
  },
  {
    id: 'subscription',
    icon: '📅',
    title: 'Paket Berlangganan',
    sub: 'Subscription Package',
    desc: 'Paket rutin mingguan untuk menjaga kebersihan konsisten.',
    packages: [
      { name: 'Paket Silver', price: 'Rp950.000/Bulan', details: ['2x per minggu', 'Durasi 2 jam'] },
      { name: 'Paket Gold', price: 'Rp1.400.000/Bulan', details: ['2x per minggu', 'Durasi 3 jam'] },
    ],
  },
];

export const orderingSteps = [
  {
    step: '01',
    title: 'Konsultasi Kebutuhan',
    desc: 'Ceritakan kebutuhan Anda — jenis jasa, lokasi, preferensi waktu, dan budget.',
    icon: '💬',
  },
  {
    step: '02',
    title: 'Pilih Paket & Jadwal',
    desc: 'Kami bantu pilihkan paket yang paling sesuai dengan kebutuhan dan jadwal Anda.',
    icon: '📋',
  },
  {
    step: '03',
    title: 'Konfirmasi & Pembayaran',
    desc: 'Konfirmasi pesanan dan lakukan pembayaran DP untuk booking.',
    icon: '💳',
  },
  {
    step: '04',
    title: 'Tim Kami Datang',
    desc: 'Cleaner profesional kami datang tepat waktu sesuai jadwal.',
    icon: '🚗',
  },
  {
    step: '05',
    title: 'Pekerjaan Selesai',
    desc: 'Nikmati hasil bersih maksimal. Beri rating & feedback untuk layanan kami.',
    icon: '⭐',
  },
];
