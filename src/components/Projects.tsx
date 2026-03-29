import React from 'react';
import discordImg from '@/assets/Discord_clone1.png';
import shopitImg from '@/assets/shopit2.png';
import compileHubImg from '@/assets/Compile_hub.png';
import starBrainImg from '@/assets/StarBrainAi.png';

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
          <span
            key={index}
            className={`px-3 py-1 border-[2px] border-inverse-surface font-label font-bold text-xs uppercase ${
              index % 3 === 0 ? 'bg-primary-container' : index % 3 === 1 ? 'bg-secondary-container' : 'bg-tertiary-container'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-headline font-extrabold text-3xl uppercase mb-3">{title}</h3>
      <p className="font-medium text-lg mb-8 opacity-90 text-justify">{description}</p>
      <div className="mt-auto flex gap-4">
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow bg-inverse-surface text-white py-3 font-headline font-bold uppercase border-[3px] border-inverse-surface hover:bg-yellow-300 hover:text-inverse-surface transition-colors text-center flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">code</span>
          View Project
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Discord-Clone",
      description: "A full-stack real-time messaging platform with channel-based communication, voice/video support, and server management.",
      image: discordImg.src,
      tags: ["Next", "WebSockets", "Node", "Express", "MongoDB"],
      liveLink: "#",
      codeLink: "https://github.com/Pushkaraj-Palli/Discord-Clone",
    },
    {
      title: "ShopIt",
      description: "A feature-rich e-commerce web app with product listings, cart management, user authentication, order tracking, and an admin dashboard.",
      image: shopitImg.src,
      tags: ["Next", "Node", "Express", "MongoDB"],
      liveLink: "#",
      codeLink: "https://github.com/Pushkaraj-Palli/shopit",
    },
    {
      title: "Compile-Hub",
      description: "An online code editor and compiler supporting multiple programming languages with real-time output, syntax highlighting, and a clean developer-focused UI.",
      image: compileHubImg.src,
      tags: ["React", "Node", "Express", "MongoDB"],
      liveLink: "#",
      codeLink: "https://github.com/Pushkaraj-Palli/compile-hub",
    },
    {
      title: "StarBrain-AI",
      description: "An AI-powered chat assistant that leverages large language models for intelligent conversations, document analysis, and dynamic knowledge generation.",
      image: starBrainImg.src,
      tags: ["React", "Node", "Express", "MongoDB", "Gemini API"],
      liveLink: "#",
      codeLink: "https://github.com/Pushkaraj-Palli/StarBrain-AI",
    },
  ];

  return (
    <section className="py-24 bg-surface-container-low/80 backdrop-blur-sm border-y-[5px] border-inverse-surface px-6" id="projects">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline font-black text-6xl md:text-8xl uppercase leading-none tracking-tighter">
              Selected<br />
              <span className="text-tertiary">Works</span>
            </h2>
          </div>
          <div className="bg-white border-[3px] border-inverse-surface p-4 neo-shadow max-w-sm">
            <p className="font-bold uppercase text-sm italic leading-tight">
              Handpicked projects demonstrating architectural prowess and aesthetic precision.
            </p>
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
