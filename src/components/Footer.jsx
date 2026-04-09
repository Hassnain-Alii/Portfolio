import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-black/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
