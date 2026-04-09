import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { experienceData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="My Experience" 
          subtitle="My professional journey and the companies I've collaborated with."
        />

        <div className="max-w-3xl mx-auto relative mt-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10"></div>

          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Center Dot */}
              <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-primary z-10 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>

              {/* Content Panel */}
              <div className="ml-8 md:ml-0 md:w-1/2 glass-card p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/20 rounded-lg text-accent">
                    <Briefcase size={20} />
                  </div>
                  <h4 className="text-xl font-display font-medium text-white">{exp.role}</h4>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <span className="text-blue-400 font-medium">{exp.company}</span>
                  <span className="text-gray-500 text-sm">{exp.duration}</span>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-accent mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
