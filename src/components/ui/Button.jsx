import React from 'react';
import { motion } from 'framer-motion';
import { MagneticWrapper } from './MagneticWrapper';

export const Button = ({ children, onClick, variant = 'primary', magnetic = false, className = '', ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium rounded-full transition duration-300 ease-out";
  
  const variants = {
    primary: "text-white bg-accent border-2 border-accent hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] group",
    outline: "text-white border-2 border-white/20 hover:border-white/50 hover:bg-white/5",
    glow: "btn-glow" // Uses custom css class
  };

  const btnContent = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
      <span className="relative flex items-center gap-2">{children}</span>
    </motion.button>
  );

  if (magnetic) {
    return <MagneticWrapper>{btnContent}</MagneticWrapper>;
  }

  return btnContent;
};
