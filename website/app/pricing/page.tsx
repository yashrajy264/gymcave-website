import type { Metadata } from 'next';
import Pricing from '@/components/sections/pricing/Pricing';

export const metadata: Metadata = {
  title: 'Pricing | GymCave',
  description: 'Simple, flat pricing with zero hidden fees. Choose between our Hybrid License or standard Monthly Subscription.',
};

export default function PricingPage() {
  return (
    <main>
      <Pricing />
    </main>
  );
}
