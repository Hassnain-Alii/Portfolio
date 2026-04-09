import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { SectionHeading } from './ui/SectionHeading';
import { projectsData } from '../data/portfolioData';

// Pure Framer Motion 3D tilt card - no external library needed
const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      className={`glass-card overflow-hidden group h-full flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore some of my recent work. Filter by category to find specific technologies."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-accent text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Floating Action Buttons on hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <a href={project.liveLink} className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                      <a href={project.githubLink} className="w-12 h-12 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors backdrop-blur-sm border border-white/20">
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-xs font-bold tracking-wider text-accent uppercase mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-display font-medium text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
