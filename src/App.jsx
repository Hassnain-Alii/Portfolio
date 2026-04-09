import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ── Stunning Scrollbar Activity Logic ──
  useEffect(() => {
    let timeout;
    const handleActivity = () => {
      document.documentElement.classList.add("scrollbar-active");
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.documentElement.classList.remove("scrollbar-active");
      }, 1500); // Hide after 1.5s of inactivity
    };

    window.addEventListener("scroll", handleActivity);
    window.addEventListener("mousemove", handleActivity);
    return () => {
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("mousemove", handleActivity);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <CustomCursor />

      {/* Magic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-accent-light via-blue-500 to-accent z-100 origin-left"
        style={{ scaleX }}
      />

      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            className="fixed inset-0 z-200 flex items-center justify-center bg-primary"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
              className="w-16 h-16 border-4 border-t-accent border-r-blue-500 border-b-primary border-l-primary rounded-full"
            />
            <div className="absolute mt-24 text-accent font-display tracking-[0.2em] text-sm animate-pulse">
              INITIALIZING
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div
        className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full glass border border-accent/30 text-accent hover:bg-accent hover:text-white transition-colors group shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
