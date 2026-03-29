import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t-[5px] border-[#0e0e0e] bg-[#0e0e0e] mt-0">
      <div className="flex flex-col md:flex-row justify-between items-center p-8 w-full gap-4 max-w-[1440px] mx-auto">
        <div className="text-lg font-black text-white uppercase font-headline">
          PUSHKARAJ PALLI
        </div>
        <p className="font-headline font-bold text-sm uppercase text-white opacity-60">
          © 2026 FULL STACK MANIFESTO. BUILT WITH MERN.
        </p>
        <div className="flex gap-6 font-headline font-bold text-sm uppercase">
          <a className="text-white hover:text-[#00ffff] transition-colors" href="https://github.com/Pushkaraj-Palli/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-white hover:text-[#00ffff] transition-colors" href="https://www.linkedin.com/in/pushkaraj-palli-748296269/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-white hover:text-[#00ffff] transition-colors" href="https://leetcode.com/u/2005pushkarajpalli/" target="_blank" rel="noopener noreferrer">Leetcode</a>
          <a className="text-white hover:text-[#00ffff] transition-colors" href="mailto:pallipushkaraj@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
