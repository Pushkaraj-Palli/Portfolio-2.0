import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-6 max-w-[1440px] mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="bg-white/80 backdrop-blur-sm border-[5px] border-inverse-surface p-8 neo-shadow">
            <h2 className="font-headline font-extrabold text-5xl uppercase mb-6 underline decoration-primary-container decoration-[8px] underline-offset-8">The Manifesto</h2>
            <div className="space-y-4 text-lg font-medium">
              <p>I don't just write code; I architect digital experiences that demand attention. In a world of cookie-cutter templates, I choose the bold, the functional, and the unapologetic.</p>
              <p>My journey in the MERN stack started with a curiosity for how data flows from a MongoDB document to a React component. Today, I build scalable systems that bridge the gap between complex logic and human-centric design.</p>
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBowWiXd8U-JoYTOz1evQDL2TlwogneswI-ez6M8UOOn4ZQrJlB0EF5cfOm4Fu-jTpI4Dg1Ur8A7M65lXbcrb3jM2ZSiRZfONuoSwT7P1GVsD0hgcUcbBOmFQ_itp3SZGYc5dkRea1voKs7bSCUUORneDZ9c2DEhg1tO_k5S0G7FGorNTq5vGsrfORTUgQE3cATJjj-IOlj_V-LdZoWhAvIFVBJcMEanGIfx0KWIe6XPTIKphiOq3Y_-HTHwiLj3_i4iuSVPSxijNY"
              />
            </div>
            <h3 className="font-headline font-black text-3xl uppercase mb-2">Pushkaraj Palli</h3>
            <p className="font-headline font-bold text-primary mb-6">MERN ARCHITECT</p>
            <div className="flex justify-center gap-4">
              <a className="p-3 bg-inverse-surface text-white hover:bg-primary-container hover:text-inverse-surface transition-colors border-[2px] border-inverse-surface" href="#">
                <span className="material-symbols-outlined">link</span>
              </a>
              <a className="p-3 bg-inverse-surface text-white hover:bg-primary-container hover:text-inverse-surface transition-colors border-[2px] border-inverse-surface" href="#">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
