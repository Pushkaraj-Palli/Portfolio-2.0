import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  codeLink: string;
}

const ProjectCard = ({ title, description, image, tags, liveLink, codeLink }: ProjectProps) => (
  <div className="group bg-white border-[5px] border-inverse-surface flex flex-col neo-shadow-lg hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(14,14,14,1)] transition-all">
    <div className="h-64 border-b-[5px] border-inverse-surface overflow-hidden">
      <img 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        src={image} 
      />
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className={`px-3 py-1 border-[2px] border-inverse-surface font-label font-bold text-xs uppercase ${index % 3 === 0 ? 'bg-primary-container' : index % 3 === 1 ? 'bg-secondary-container' : 'bg-tertiary-container'}`}>
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-headline font-extrabold text-3xl uppercase mb-3">{title}</h3>
      <p className="font-medium text-lg mb-8 opacity-90">{description}</p>
      <div className="mt-auto flex gap-4">
        <button className="flex-grow bg-inverse-surface text-white py-3 font-headline font-bold uppercase border-[3px] border-inverse-surface hover:bg-primary-container hover:text-inverse-surface transition-colors">Live Demo</button>
        <button className="px-6 border-[3px] border-inverse-surface flex items-center justify-center hover:bg-gray-100 transition-colors">
          <span className="material-symbols-outlined">code</span>
        </button>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Compile-Hub",
      description: "A high-performance Cloud IDE featuring real-time collaborative coding, integrated terminal support, and one-click deployment for modern web frameworks.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTCYlEThfiFEJgM0anGWoWrj-SMT8F1JbAchSe1jUl_hsP0xLhLg6j5aF12LK2yiy5KYAFADJcTOMfjZcniMjrsTAv-3Ic2pp1kCiewbdCJD6Gcaj6aWM4O-zGHiPUPxMxe3VLUNsd7kQQm9HKklIMc4Q54HiX5BsTeqLSPHHPmhxrTXzP0725ZZbppMOynFzQBoxsOUznr7muLRiN_2MvOpdHXS9iWQcoRrs8WsEaCLNkGOYJ54Lvq7s1J0Ev003bIJjbyBhoS4c",
      tags: ["React", "Node.js", "Socket.io"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "StarBrain AI",
      description: "A sophisticated AI chatbot assistant leveraging LLMs for automated customer support, document analysis, and dynamic knowledge base generation.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu5iAUxK2Dn1J2XK6Kzv2vJlZbaaGXK79Gjb6V9frVPDqmk5m0-9cyQpU1YRQQTyxOSYRoPww8KBFfUFObncmkrbxRfDDpjUnszg1R-njvOd8Om9076b7mG7ycG0fM5JRWRUn2D__RsAos1S2F1CwUP0ou1JZ80E1GfHE9GQ6DYdSFN_GQMaD9Ef3KTJRN97waguARoX9lAcoSuDCznHXje-BVho9ZUuG52pnZp0c4BXk2rIvP1Z3tLDnNvgZ9zGcK1oiVkqGlKa0",
      tags: ["OpenAI", "Express", "MongoDB"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "FitTrack",
      description: "Comprehensive fitness tracker with biometric data visualization, personalized workout routines, and social competition features.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6e7x8sRIMEinhlNC0szzx6bKF70D6Wmt7QsPPZ9tspa44WmdmNQkk5tpsL8tPVmgzK0XDLgjyBZdSaz9tusM8plrBatm-80pICI4g2TPijYhYzpftqLJmAjtAw5qcmXUdFRJVF6TJTkcm_jXTTdoeCYDZ4mCf5CzAnX0vJoiwBBB20rrhby4muYZAiCLWMlY1w_H0xCHtwNyiUsg7twDlPfW2yWr2xHfT8lBgsmI1o8tY0zzAkYSgCLl3kWQkfb5UFJQWiDN6xos",
      tags: ["MERN", "Chart.js", "Auth0"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "BrushCraft",
      description: "Advanced digital art tool with custom brush engines, multi-layer support, and professional-grade exporting options for web illustrators.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_Vf4LZG_gRcqeIF7FOgeJJLOGshX8RquqtcgeYAlTlSpT-35fgKSDN-NtYs9fW19IGRaHqc9S0yQ8uAVAeUUfjF9n-z44VNVT_pEc-829jTua2XJKoUXfm-e8qw2hOTdftFSzwzydbMkHA-0tTA82UN3Y2AIF6FrFrwTTFRup9rcIMS48inHbC-3VSOJOlbtyg4i8v3IZ_b3fiFfdQ8s18Wu0PoOHPQ7svRzKHTSrIbXpHsc5HtlVKuB3a_TRxZ2zshkzVA9ykW0",
      tags: ["Canvas API", "Redux", "Fabric.js"],
      liveLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low/80 backdrop-blur-sm border-y-[5px] border-inverse-surface px-6" id="projects">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline font-black text-6xl md:text-8xl uppercase leading-none tracking-tighter">Selected<br/><span className="text-tertiary">Works</span></h2>
          </div>
          <div className="bg-white border-[3px] border-inverse-surface p-4 neo-shadow max-w-sm">
            <p className="font-bold uppercase text-sm italic leading-tight">Handpicked projects demonstrating architectural prowess and aesthetic precision.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="mt-20 text-center">
          <button 
            onClick={() => window.open('https://github.com/Pushkaraj-Palli?tab=repositories', '_blank')}
            className="bg-white px-12 py-6 border-[5px] border-inverse-surface font-headline font-black text-2xl uppercase neo-shadow-lg hover:translate-y-[-4px] hover:bg-primary-container hover:text-inverse-surface transition-all"
          >
            View All Repository
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
