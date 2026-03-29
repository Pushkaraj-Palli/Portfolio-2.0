import React from 'react';

const Marquee = () => {
  return (
    <div className="w-full bg-inverse-surface py-6 overflow-hidden border-b-[5px] border-inverse-surface">
      <div className="flex whitespace-nowrap gap-12 animate-marquee font-headline font-bold text-white text-4xl uppercase italic">
        <span>Available for Freelance ✦ Full Stack Developer ✦ MERN Stack Specialist ✦ Backend & API Specialist ✦ Real-Time Applications ✦ Scalable Web Solutions ✦ Open Source Contributor ✦</span>
        <span>Available for Freelance ✦ Full Stack Developer ✦ MERN Stack Specialist ✦ Backend & API Specialist ✦ Real-Time Applications ✦ Scalable Web Solutions ✦ Open Source Contributor ✦</span>
      </div>
    </div>
  );
};

export default Marquee;
