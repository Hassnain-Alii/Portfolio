import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Terminal, Code2, Braces, Globe, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { Button } from './ui/Button';
import { Toast } from './ui/Toast';

// Animated floating code card shown on the right side of hero
const FloatingCard = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`glass-card p-4 rounded-xl ${className}`}
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  const [toast, setToast] = useState(null);

  const handleDownloadCV = (e) => {
    // Explicitly prevent default only if we want to handle the anchor click manually
    // e.preventDefault(); 
    
    // We update the toast first
    setToast({
      type: 'success',
      message: 'Download initiated successfully! Thank you for your interest.'
    });

    // Native browser behavior for <a href="..." download> is already robust, 
    // but we ensure it works by making it the primary action.
  };

  // Animated typing lines for the code panel
  const codeLines = [
    { text: 'const dev = {', color: 'text-white' },
    { text: "  name: 'Hassnain Ali',", color: 'text-green-400' },
    { text: "  role: 'MERN Developer',", color: 'text-blue-400' },
    { text: "  passion: '∞ building things',", color: 'text-accent-light' },
    { text: "  open_to_work: true,", color: 'text-yellow-400' },
    { text: '};', color: 'text-white' },
  ];

  const techIcons = [
    { icon: <Terminal size={20} />, label: 'Node.js', color: 'text-green-400' },
    { icon: <Braces size={20} />, label: 'React', color: 'text-blue-400' },
    { icon: <Globe size={20} />, label: 'MongoDB', color: 'text-emerald-400' },
    { icon: <Code2 size={20} />, label: 'Express', color: 'text-gray-300' },
  ];

  return (
    <>
  
      {/* Toast notification */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">

        {/* ── Background Animated Blobs ──
            Fix: removed mix-blend-multiply (doesn't work on dark bg),
            set explicit z-0 and boosted opacity so they are always visible */}
        <div className="absolute top-[15%] left-[5%] w-96 h-96 bg-accent/40 rounded-full filter blur-[120px] opacity-70 animate-blob z-0 pointer-events-none"></div>
        <div className="absolute top-[40%] right-[5%] w-96 h-96 bg-blue-600/40 rounded-full filter blur-[120px] opacity-70 animate-blob z-0 pointer-events-none" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[10%] left-[35%] w-80 h-80 bg-purple-600/40 rounded-full filter blur-[100px] opacity-60 animate-blob z-0 pointer-events-none" style={{ animationDelay: '4s' }}></div>

        <div className="w-full px-6 md:px-12 xl:px-20 2xl:px-32 max-w-[2400px] mx-auto z-10 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">

            {/* ── Left: Text Content ── */}
            <div className="lg:w-1/2 xl:w-[55%]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-accent font-medium tracking-wide mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-accent"></span>
                  HELLO, I'M
                </h2>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black mb-6 leading-tight"
              >
                {personalInfo.name.toUpperCase()}<br />
                <span className="text-gradient">
                  {personalInfo.title.toUpperCase()}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
              >
                I build pixel-perfect, highly performant web experiences.
                Blending high-end design with robust engineering to deliver
                exceptional digital products.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-6"
              >
                <a href="#projects">
                  <Button variant="glow" magnetic>
                    View My Work
                    <ArrowRight size={18} />
                  </Button>
                </a>

                {/* ── CV Download Button ── */}
                <a
                  href="/Hassnain_Ali_CV.pdf"
                  download="Hassnain Ali CV"
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-white/20 text-gray-300 hover:border-accent hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 font-medium text-sm"
                >
                  <Download size={18} />
                  Download CV
                </a>

              <div className="flex items-center gap-4">
                <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                  <FaGithub size={20} />
                </a>
                <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                  <FaLinkedin size={20} />
                </a>
                <a href={`mailto:${personalInfo.contact.email}`}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Animated Visual Panel ── */}
          <div className="lg:w-1/2 xl:w-[45%] hidden -mt-20 lg:flex flex-col items-center justify-center gap-6 relative">

            {/* Glow behind the panel */}
            <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-3xl pointer-events-none"></div>

            {/* Code Snippet Card */}
            <FloatingCard delay={0.4} className="w-full max-w-md font-mono text-sm relative overflow-hidden">
              {/* Terminal Dots */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-gray-500 text-xs">developer.js</span>
              </div>
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                  className={`leading-7 ${line.color}`}
                >
                  {line.text}
                </motion.div>
              ))}
              {/* Blinking cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-accent ml-1 align-middle"
              />
            </FloatingCard>

            {/* Tech Stack Row */}
            <div className="grid grid-cols-4 gap-4 w-full max-w-md">
              {techIcons.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="glass-card p-4 flex flex-col items-center gap-2"
                >
                  <span className={tech.color}>{tech.icon}</span>
                  <span className="text-[10px] text-gray-400 tracking-wide">{tech.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Status Badge */}
            <FloatingCard delay={1.6} className="flex items-center gap-3 w-full max-w-md">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"
              />
              <span className="text-sm text-gray-300">
                Available for full-time opportunities
              </span>
            </FloatingCard>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};
