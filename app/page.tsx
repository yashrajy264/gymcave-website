import Hero from '@/components/sections/Hero';
import LogoStrip from '@/components/sections/LogoStrip';
import ProductShowcase from '@/components/sections/ProductShowcase';
import HeroStats from '@/components/sections/HeroStats';
import BentoGrid from '@/components/sections/BentoGrid';
import Testimonial from '@/components/sections/Testimonial';
import CTABanner from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <ProductShowcase />
      <HeroStats />
      <BentoGrid />
      <Testimonial />
      <CTABanner />
    </main>
  );
}
