import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-[5px] border-[#0e0e0e] bg-white/95 backdrop-blur-sm dark:bg-black/95">
      <div className="flex justify-between items-center px-6 py-4 max-w-[1440px] mx-auto">
        <a className="text-2xl font-black text-[#0e0e0e] dark:text-white uppercase tracking-tighter" href="#">
          DEV.MERN
        </a>
        <div className="hidden md:flex gap-8 items-center font-headline font-bold uppercase tracking-tight">
          <a className="text-[#0e0e0e] dark:text-white hover:translate-y-[-2px] transition-transform duration-200" href="#projects">Projects</a>
          <a className="text-[#2f2f2f] dark:text-gray-400 hover:translate-y-[-2px] transition-transform duration-200" href="#skills">Skills</a>
          <a className="text-[#2f2f2f] dark:text-gray-400 hover:translate-y-[-2px] transition-transform duration-200" href="#about">About</a>
          <a className="bg-primary-container px-6 py-2 border-[3px] border-[#0e0e0e] neo-shadow hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none transition-all" href="#contact">
            Contact
          </a>
        </div>
        {/* Mobile Menu Icon (Placeholder) */}
        <button className="md:hidden">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
