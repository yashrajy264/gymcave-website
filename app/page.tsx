import Hero from '@/components/sections/Hero';
import ProductShowcase from '@/components/sections/ProductShowcase';
import BentoGrid from '@/components/sections/BentoGrid';
import Testimonial from '@/components/sections/Testimonial';
import CTABanner from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductShowcase />
      <BentoGrid />
      <Testimonial />
      <CTABanner />
    </main>
  );
}
