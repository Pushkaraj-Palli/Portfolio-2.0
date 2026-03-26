import React from 'react';
import ShapeGrid from './ShapeGrid';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative bg-white/60 backdrop-blur-[2px] border-b-[5px] border-inverse-surface min-h-[819px] flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      {/* Dynamic Shape Grid Background */}
      <div className="absolute inset-0 z-0">
        <ShapeGrid 
          speed={0.2}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(14, 14, 14, 0.1)"
          hoverFillColor="#f3f300"
          shape="square"
          hoverTrailAmount={3}
        />
      </div>

      <div className="absolute top-10 left-10 md:left-20 bg-secondary-container px-4 py-2 border-[3px] border-inverse-surface neo-shadow font-headline font-bold -rotate-6 pointer-events-none">
        HI, I'M PUSHKARAJ
      </div>
      <div className="absolute bottom-20 right-10 md:right-20 bg-tertiary-container px-4 py-2 border-[3px] border-inverse-surface neo-shadow font-headline font-bold rotate-3 pointer-events-none">
        BASED IN NYC
      </div>
      
      <div className="z-10 max-w-4xl pointer-events-none">
        <h1 className="font-headline font-extrabold text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-inverse-surface leading-none mb-6">
          PUSHKARAJ <span className="text-primary-container bg-inverse-surface px-4">PALLI</span>
        </h1>
        <p className="font-headline font-bold text-2xl md:text-4xl uppercase text-inverse-surface mb-8 tracking-tight">
          Full Stack / MERN Developer
        </p>
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-12 border-l-8 border-primary-container pl-6 text-left italic">
          "Building the future, one component at a time."
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a className="bg-primary-container text-inverse-surface font-headline font-bold text-xl uppercase px-10 py-5 border-[4px] border-inverse-surface neo-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(14,14,14,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all pointer-events-auto" href="#projects">
            View Projects
          </a>
          <a className="bg-white text-inverse-surface font-headline font-bold text-xl uppercase px-10 py-5 border-[4px] border-inverse-surface neo-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(14,14,14,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all pointer-events-auto flex items-center justify-center gap-3" href="#">
            <FiDownload size={28} strokeWidth={2.5} />
            <span>DOWNLOAD CV</span>
          </a>
        </div>
      </div>
      {/* Background Decoration */}
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container border-[5px] border-inverse-surface -z-0 opacity-20 rotate-12"></div>
    </section>
  );
};

export default Hero;
