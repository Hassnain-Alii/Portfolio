import React, { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import CountUpLib from "react-countup";
import { SectionHeading } from "./ui/SectionHeading";
import { personalInfo } from "../data/portfolioData";
import { Server, Database, Layout } from "lucide-react";

// Handle CJS/ESM interop for react-countup
const CountUp = CountUpLib.default || CountUpLib;

// Pure Framer Motion tilt card - no external library required
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

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
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const About = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <Layout className="w-8 h-8 text-blue-400" />,
      title: "Frontend Development",
      description:
        "Crafting beautiful, responsive, and highly interactive user interfaces using React, Tailwind CSS, and modern animations.",
    },
    {
      icon: <Server className="w-8 h-8 text-green-400" />,
      title: "Backend Architecture",
      description:
        "Building scalable, secure, and blazing-fast RESTful APIs using Node.js, Express, and incorporating modern best practices.",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: "Database Management",
      description:
        "Designing efficient data models and managing complex aggregations with MongoDB and Mongoose.",
    },
  ];

  const stats = [
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Projects Completed", value: 15, suffix: "+" },
    { label: "Technologies", value: 10, suffix: "+" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me and what drives my passion for web development."
        />

        <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <TiltCard className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-accent to-blue-500 rounded-2xl blur-xl opacity-30 animate-pulse pointer-events-none"></div>
              <div className="glass-card p-2 relative rounded-2xl overflow-hidden aspect-4/4 z-10 bg-black/50">
                <img
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&q=80"
                  alt="Developer working"
                  className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </TiltCard>

            {/* Dynamic Stats Section */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">
                    {isInView ? (
                      <CountUp end={stat.value} duration={2.5} />
                    ) : (
                      "0"
                    )}
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-accent tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-display font-medium text-white mb-6">
              Engineering{" "}
              <span className="text-gradient">Digital Experiences</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {personalInfo.shortAbout}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 "
                >
                  <div className="mb-4 bg-white/5 inline-flex p-3 rounded-lg border border-white/10">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    {card.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{card.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
