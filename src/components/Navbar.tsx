import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-8 left-0 w-full px-8 z-50 flex justify-end items-center pointer-events-none">
      {/* Navigation Box */}
      <div className="bg-white border-[4px] border-[#0e0e0e] neo-shadow flex items-center px-4 py-2 pointer-events-auto gap-6 transition-all">
        <div className="flex gap-2 items-center font-condensed font-bold uppercase tracking-widest text-sm">
          <a className="text-[#0e0e0e] hover:bg-[#0e0e0e] hover:text-white px-3 py-1 transition-all duration-200 flex items-center gap-1" href="#projects">
            <span className="opacity-40 font-headline font-normal">/</span>PROJECTS
          </a>
          <a className="text-[#0e0e0e] hover:bg-[#0e0e0e] hover:text-white px-3 py-1 transition-all duration-200 flex items-center gap-1" href="#skills">
            <span className="opacity-40 font-headline font-normal">/</span>SKILLS
          </a>
          <a className="text-[#0e0e0e] hover:bg-[#0e0e0e] hover:text-white px-3 py-1 transition-all duration-200 flex items-center gap-1" href="#about">
            <span className="opacity-40 font-headline font-normal">/</span>ABOUT
          </a>
          <a className="text-[#0e0e0e] hover:bg-[#0e0e0e] hover:text-white px-3 py-1 transition-all duration-200 flex items-center gap-1" href="#contact">
            <span className="opacity-40 font-headline font-normal">/</span>CONTACT
          </a>
        </div>

        <a 
          className="bg-[#f3f300] px-4 py-1.5 border-[3px] border-[#0e0e0e] font-headline font-black uppercase text-xs hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(14,14,14,1)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all" 
          href="#contact"
        >
          RESUME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
