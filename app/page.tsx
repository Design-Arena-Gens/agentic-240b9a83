'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

const HeartScene = dynamic(() => import('@/components/HeartScene'), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-gradient-to-b from-blue-900 to-purple-900" />
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="w-full h-screen bg-gradient-to-b from-blue-900 to-purple-900" />}>
        <HeartScene />
      </Suspense>
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
