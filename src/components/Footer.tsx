import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t-[5px] border-[#0e0e0e] bg-[#0e0e0e] mt-0">
      <div className="flex flex-col md:flex-row justify-between items-center p-8 w-full gap-4 max-w-[1440px] mx-auto">
        <div className="text-lg font-black text-white uppercase font-headline">
          PUSHKARAJ PALLI
        </div>
        <p className="font-headline font-bold text-sm uppercase text-white opacity-60">
          © 2024 FULL STACK MANIFESTO. BUILT WITH MERN.
        </p>
        <div className="flex gap-6 font-headline font-bold text-sm uppercase">
          <a className="text-white hover:text-[#00ffff] transition-colors" href="#">GitHub</a>
          <a className="text-white hover:text-[#00ffff] transition-colors" href="#">LinkedIn</a>
          <a className="text-white hover:text-[#00ffff] transition-colors" href="#">Twitter</a>
          <a className="text-white hover:text-[#00ffff] transition-colors" href="#">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
