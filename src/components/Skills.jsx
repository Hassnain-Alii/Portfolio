import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { skillsData } from '../data/portfolioData';

// Dynamic import fallback for CJS/ESM interop with react-fast-marquee
let Marquee;
import('react-fast-marquee').then((mod) => {
  Marquee = mod.default || mod;
});

const SkillBox = ({ skill }) => (
  <div className="glass-card mx-4 px-8 py-6 min-w-[200px] flex flex-col items-center justify-center gap-3">
    <div className="text-gray-300 font-display font-medium text-lg whitespace-nowrap">{skill.name}</div>
    <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

// Fallback marquee using pure CSS animation if library fails
const CSSMarquee = ({ children, reverse = false }) => (
  <div className="overflow-hidden relative">
    <div
      className={`flex gap-0 ${reverse ? 'animate-[marquee-reverse_25s_linear_infinite]' : 'animate-[marquee_25s_linear_infinite]'} hover:[animation-play-state:paused]`}
      style={{ width: 'max-content' }}
    >
      {children}
      {children}

    </div>
  </div>
);

export const Skills = () => {
  const allSkills = [
    ...skillsData.frontend,
    ...skillsData.backend,
    ...skillsData.database,
    ...skillsData.devops,
  ];

  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  return (
    <section id="skills" className="py-24 relative bg-black/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <SectionHeading
          title="My Skills"
          subtitle="The technical ecosystem I leverage to build robust digital solutions."
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full space-y-8"
      >
        <CSSMarquee>
          {row1.map((skill, index) => (
            <SkillBox key={index} skill={skill} />
          ))}
        </CSSMarquee>

        <CSSMarquee reverse>
          {row2.map((skill, index) => (
            <SkillBox key={index} skill={skill} />
          ))}
        </CSSMarquee>
      </motion.div>
    </section>
  );
};
