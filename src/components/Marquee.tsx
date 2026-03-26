import React from 'react';

const Marquee = () => {
  return (
    <div className="w-full bg-inverse-surface py-6 overflow-hidden border-b-[5px] border-inverse-surface">
      <div className="flex whitespace-nowrap gap-12 animate-marquee font-headline font-bold text-white text-4xl uppercase italic">
        <span>Available for freelance ✦ MERN Stack Expert ✦ Open Source Contributor ✦ UI/UX Enthusiast ✦ Available for freelance ✦ MERN Stack Expert ✦ Open Source Contributor ✦ UI/UX Enthusiast ✦</span>
        <span>Available for freelance ✦ MERN Stack Expert ✦ Open Source Contributor ✦ UI/UX Enthusiast ✦ Available for freelance ✦ MERN Stack Expert ✦ Open Source Contributor ✦ UI/UX Enthusiast ✦</span>
      </div>
    </div>
  );
};

export default Marquee;
