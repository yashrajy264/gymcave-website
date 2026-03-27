import ImpactHero from '@/components/sections/impact/ImpactHero';
import ComparisonSplit from '@/components/sections/impact/ComparisonSplit';
import CTABanner from '@/components/sections/CTABanner';

export const metadata = {
  title: 'The GymCave Impact | Modernize Your Gym',
  description: 'See the difference between legacy gym management software and the performance-driven GymCave platform.',
};

export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <ComparisonSplit />
      <CTABanner />
    </>
  );
}
