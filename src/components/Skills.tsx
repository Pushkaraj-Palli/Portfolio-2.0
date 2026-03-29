import React from 'react';

const SkillBlock = ({ icon, name, hoverClass }: { icon: string; name: string; hoverClass: string }) => (
  <div className={`group bg-white border-[4px] border-inverse-surface p-8 text-center neo-shadow ${hoverClass} hover:translate-y-[-8px] transition-all duration-300`}>
    <span className="material-symbols-outlined text-5xl mb-4 group-hover:scale-125 transition-transform">{icon}</span>
    <p className="font-headline font-bold uppercase tracking-widest text-sm">{name}</p>
  </div>
);

const Skills = () => {
  
const skillList = [
  { icon: "code", name: "JavaScript", hoverClass: "hover:bg-primary-container" },
  { icon: "code", name: "TypeScript", hoverClass: "hover:bg-secondary-container" },
  { icon: "deployed_code", name: "React.js", hoverClass: "hover:bg-tertiary-container" },
  { icon: "bolt", name: "Next.js", hoverClass: "hover:bg-primary-container" },
  { icon: "terminal", name: "Node.js", hoverClass: "hover:bg-secondary-container" },
  { icon: "settings", name: "Express.js", hoverClass: "hover:bg-tertiary-container" },
  { icon: "database", name: "MongoDB", hoverClass: "hover:bg-primary-container" },
  { icon: "storage", name: "SQL", hoverClass: "hover:bg-secondary-container" },
  { icon: "sync_alt", name: "REST APIs", hoverClass: "hover:bg-tertiary-container" },
  { icon: "hub", name: "WebSockets", hoverClass: "hover:bg-primary-container" },
  { icon: "lock", name: "JWT Auth", hoverClass: "hover:bg-secondary-container" },
  { icon: "style", name: "Tailwind CSS", hoverClass: "hover:bg-tertiary-container" },
  { icon: "alt_route", name: "Git & GitHub", hoverClass: "hover:bg-primary-container" },
  { icon: "cloud", name: "Firebase", hoverClass: "hover:bg-secondary-container" },
  { icon: "inventory_2", name: "Docker", hoverClass: "hover:bg-tertiary-container" },
];
  return (
    <section className="py-24 bg-white/40 backdrop-blur-sm px-6" id="skills">
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="font-headline font-black text-6xl uppercase tracking-tighter mb-4">Technical <span className="bg-primary-container px-4">Arsenal</span></h2>
        <p className="font-bold uppercase text-lg">My primary toolbelt for crafting high-fidelity digital solutions.</p>
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skillList.map((skill, index) => (
          <SkillBlock key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
