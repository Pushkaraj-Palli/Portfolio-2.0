import React from 'react';
import profileImg from '@/assets/img.jpg';

const About = () => {
  return (
    <section className="py-24 px-6 max-w-[1440px] mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="bg-white/80 backdrop-blur-sm border-[5px] border-inverse-surface p-8 neo-shadow">
            <h2 className="font-headline font-extrabold text-5xl uppercase mb-6 underline decoration-primary-container decoration-[8px] underline-offset-8">WHO AM I?</h2>
            <div className="space-y-4 text-lg font-medium text-justify">
              <p>I’m a full-stack developer focused on building modern, scalable web applications. I combine clean frontend design with strong backend logic to create products that are efficient, reliable, and user-focused.</p>
              <p>I enjoy working on real-world problems, especially where performance and usability matter. Whether it’s developing APIs, handling data, or crafting interfaces, I aim to deliver solutions that make an impact.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary-container border-[5px] border-inverse-surface p-6 neo-shadow">
              <span className="material-symbols-outlined text-4xl mb-4">terminal</span>
              <h3 className="font-headline font-bold text-2xl uppercase mb-2">Clean Code</h3>
              <p className="font-medium">Maintainable, modular, and optimized. If it's not efficient, it's not finished.</p>
            </div>
            <div className="bg-tertiary-container border-[5px] border-inverse-surface p-6 neo-shadow">
              <span className="material-symbols-outlined text-4xl mb-4">architecture</span>
              <h3 className="font-headline font-bold text-2xl uppercase mb-2">Scalable Architecture</h3>
              <p className="font-medium">Designing systems that grow. Microservices or Monoliths, I know the trade-offs.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="sticky top-32 bg-white/80 backdrop-blur-sm border-[5px] border-inverse-surface p-8 neo-shadow text-center">
            <div className="w-full aspect-square bg-gray-200 border-[3px] border-inverse-surface mb-6 relative overflow-hidden">
              <img 
                alt="Pushkaraj Palli" 
                className="w-full h-full object-cover grayscale" 
                src={profileImg.src}
              />
            </div>
            <h3 className="font-headline font-black text-3xl uppercase mb-2">Pushkaraj Palli</h3>
            <p className="font-headline font-bold text-primary mb-6">MERN ARCHITECT</p>
            {/* Status badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 bg-inverse-surface text-white border-[2px] border-inverse-surface px-4 py-2 font-mono font-bold text-sm uppercase tracking-wider">
                <span className="text-base leading-none">📍</span>
                Location: Worldwide
              </div>
              <div className="flex items-center gap-2 bg-[#39ff14] text-inverse-surface border-[2px] border-inverse-surface px-4 py-2 font-mono font-bold text-sm uppercase tracking-wider">
                <span className="inline-block w-3 h-3 rounded-full bg-[#1ab800] border border-black/20 animate-pulse"></span>
                Status: Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
