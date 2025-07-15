import { Hero } from '@/components/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NITSOF | Innovative Shopify Apps for E-commerce Success',
  description:
    'NITSOF builds and supports robust Shopify applications trusted by thousands of merchants to grow their business. Explore our powerful apps today.',
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
