import React from 'react';

const SkillBlock = ({ icon, name, colorClass }: { icon: string; name: string; colorClass: string }) => (
  <div className={`group bg-white border-[4px] border-inverse-surface p-8 text-center neo-shadow hover:${colorClass} hover:translate-y-[-8px] transition-all duration-300`}>
    <span className="material-symbols-outlined text-5xl mb-4 group-hover:scale-125 transition-transform">{icon}</span>
    <p className="font-headline font-bold uppercase tracking-widest text-sm">{name}</p>
  </div>
);

const Skills = () => {
  const skillList = [
    { icon: "database", name: "MongoDB", colorClass: "bg-tertiary-container" },
    { icon: "bolt", name: "Express", colorClass: "bg-primary-container" },
    { icon: "deployed_code", name: "React", colorClass: "bg-secondary-container" },
    { icon: "terminal", name: "Node.js", colorClass: "bg-tertiary-container" },
    { icon: "style", name: "Tailwind", colorClass: "bg-primary-container" },
    { icon: "motion_photos_on", name: "Motion", colorClass: "bg-secondary-container" },
  ];

  return (
    <section className="py-24 bg-white/40 backdrop-blur-sm px-6" id="skills">
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="font-headline font-black text-6xl uppercase tracking-tighter mb-4">Technical <span className="bg-primary-container px-4">Arsenal</span></h2>
        <p className="font-bold uppercase text-lg">My primary toolbelt for crafting high-fidelity digital solutions.</p>
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skillList.map((skill, index) => (
          <SkillBlock key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
