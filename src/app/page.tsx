'use client';

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FAB from '../components/FAB';

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const gridTexture = document.querySelector('.bg-grid-texture') as HTMLElement;
      const gridDots = document.querySelector('.bg-grid-dots') as HTMLElement;
      if (gridTexture && gridDots) {
        const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
        const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
        gridTexture.style.transform = `translate(${moveX}px, ${moveY}px)`;
        gridDots.style.transform = `translate(${moveX * 1.5}px, ${moveY * 1.5}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-surface font-body text-on-surface relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <FAB />
    </div>
  );
}
