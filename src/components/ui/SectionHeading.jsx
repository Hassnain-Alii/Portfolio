import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">{title.split(' ')[0]} </span>
          <span className="text-gradient">{title.split(' ').slice(1).join(' ')}</span>
        </h2>
        {subtitle && (
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
        <div className="h-1 w-24 bg-gradient-to-r from-accent to-blue-500 rounded-full mt-6 mx-auto"></div>
      </motion.div>
    </div>
  );
};
