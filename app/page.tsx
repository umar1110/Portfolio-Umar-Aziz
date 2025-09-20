"use client";

import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { WorkSection } from '@/components/sections/work-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Navigation } from '@/components/navigation';
import { ParticleBackground } from '@/components/particle-background';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}