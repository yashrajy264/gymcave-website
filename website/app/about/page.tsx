'use client';

import AboutHero from '@/components/sections/AboutHero';
import Values from '@/components/sections/Values';
import Timeline from '@/components/sections/Timeline';
import Team from '@/components/sections/Team';
import TechStack from '@/components/sections/TechStack';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Values />
      <Timeline />
      <Team />
      <TechStack />
    </>
  );
}
