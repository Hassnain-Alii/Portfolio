import React, { useState, useRef } from 'react'; // useState for sending + toast only
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Toast } from './ui/Toast';
import { personalInfo } from '../data/portfolioData';


const EMAILJS_SERVICE_ID = "service_a6xztc4";   
const EMAILJS_TEMPLATE_ID = "template_7iazvui";  
const EMAILJS_PUBLIC_KEY = "kVDQfEoYNm_tkd-Jg";    

export const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success'|'error', message: '' }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      // Ensure these values are sent even if inputs are named differently
      const form = formRef.current;
      const inputs = form.querySelectorAll('input, textarea');
      const data = {};
      inputs.forEach(i => { if(i.name) data[i.name] = i.value; });
      
      // Inject timestamp
      const timeInput = document.createElement('input');
      timeInput.type = 'hidden';
      timeInput.name = 'time';
      timeInput.value = new Date().toLocaleString();
      form.appendChild(timeInput);

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      
      form.removeChild(timeInput); // Cleanup
      setToast({
        type: 'success',
        message: "Thanks for reaching out! I'll get back to you within 24 hours."
      });
      formRef.current.reset(); // ← clears all fields
    } catch (error) {
      console.error('EmailJS error:', error);
      setToast({
        type: 'error',
        message: 'Failed to send your message. Please try emailing me directly.'
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Toast notification rendered at top of page */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading
            title="Get In Touch"
            subtitle="Looking to collaborate or have an exciting project in mind? Let's talk."
          />

          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            {/* ── Contact Info Panel ── */}
            <motion.div
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card p-8 h-full flex flex-col gap-8">
                <h3 className="text-2xl font-display font-medium text-white">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/20 text-accent rounded-xl shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <a href={`mailto:${personalInfo.contact.email}`}
                        className="text-white hover:text-accent transition-colors break-all">
                        {personalInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <a href={`tel:${personalInfo.contact.phone.replace(/\s/g, '')}`}
                        className="text-white hover:text-blue-400 transition-colors">
                        {personalInfo.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Location</p>
                      <p className="text-white">Pakistan 🇵🇰</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-auto pt-6 border-t border-white/10">
                  <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                    <FaGithub size={20} />
                  </a>
                  <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                    <FaLinkedin size={20} />
                  </a>
                  <a href={`mailto:${personalInfo.contact.email}`}
                    className="w-11 h-11 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ── Contact Form ── */}
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
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
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  magnetic
                  className="w-full md:w-auto"
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <Loader size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
