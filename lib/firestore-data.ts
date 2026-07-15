/**
 * Firestore data access layer for dynamic content.
 * Falls back to static data.ts when Firestore unavailable.
 */
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';
import { siteConfig as staticSiteConfig, cities as staticCities, services as staticServices } from './data';
import type { City } from './data';

export interface Service {
  id: string;
  icon: string;
  title: string;
  sub: string;
  desc: string;
  packages: {
    name: string;
    price: string;
    details?: string[];
    addons?: string[];
    subPrices?: string[];
  }[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  keywords: string;
  social: Record<string, string>;
  whatsapp: string;
  company: string;
}

// Try to fetch from Firestore, fall back to static data
export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const snap = await getDoc(doc(db, 'content', 'siteConfig'));
    if (snap.exists()) return snap.data() as SiteConfig;
  } catch {}
  return staticSiteConfig;
}

export async function getCities(): Promise<City[]> {
  try {
    const snap = await getDocs(collection(db, 'content', 'cities', 'data'));
    if (!snap.empty) {
      return snap.docs.map(d => d.data() as City);
    }
  } catch {}
  return staticCities;
}

export async function getServices(): Promise<Service[]> {
  try {
    const snap = await getDocs(collection(db, 'content', 'services', 'data'));
    if (!snap.empty) {
      return snap.docs.map(d => d.data() as Service);
    }
  } catch {}
  return staticServices;
}

export async function getCity(slug: string): Promise<City | undefined> {
  try {
    const snap = await getDoc(doc(db, 'content', 'cities', 'data', slug));
    if (snap.exists()) return snap.data() as City;
  } catch {}
  return staticCities.find(c => c.slug === slug);
}

export async function getService(id: string): Promise<Service | undefined> {
  try {
    const snap = await getDoc(doc(db, 'content', 'services', 'data', id));
    if (snap.exists()) return snap.data() as Service;
  } catch {}
  return staticServices.find(s => s.id === id);
}
