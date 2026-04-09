import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import { Button } from './ui/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit logic
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Looking to collaborate or have an exciting project in mind? Let's talk."
        />

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Contact Info */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-display font-medium text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 text-accent rounded-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href={`mailto:${personalInfo.contact.email}`} className="text-white hover:text-accent transition-colors">
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a href={`tel:${personalInfo.contact.phone.replace(/\\s/g, '')}`} className="text-white hover:text-blue-400 transition-colors">
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white">Earth, Milky Way</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <Button type="submit" variant="primary" magnetic className="w-full md:w-auto">
                Send Message
                <Send size={18} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
