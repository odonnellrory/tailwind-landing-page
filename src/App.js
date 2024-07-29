import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ChevronDown, Star, Cloud, Sun, Moon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import './output.css';

const ParallaxItem = ({ children, speed = 10 }) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    const element = document.getElementById("parallax-wrapper");
    setElementTop(element.offsetTop);
    setClientHeight(window.innerHeight);
  }, []);

  const y = useTransform(scrollY, [elementTop - clientHeight, elementTop + clientHeight],
    ["0%", `${speed}%`]);

  return <motion.div style={{ y }}>{children}</motion.div>;
};

const FloatingObject = ({ Icon, delay }) => (
  <motion.div
    className="absolute"
    style={{
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }}
    animate={{
      y: ["-20px", "20px"],
      rotate: [0, 360],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay,
    }}
  >
    <Icon size={24} className="text-white opacity-50" />
  </motion.div>
);

function App() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white overflow-hidden">

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxItem speed={-20}>
          <div className="z-10 text-center">
            <motion.h1
              className="text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to the Future
            </motion.h1>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Explore the possibilities of tomorrow, today.
            </motion.p>
            <motion.button
              className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </ParallaxItem>
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle, rgba(139,92,246,0.3) ${scrollY / 5}px, transparent ${scrollY / 2}px)`,
          }}
        />
      </header>

      {/* Features Section */}
      <section ref={ref} className="relative py-20 px-4" id="parallax-wrapper">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            opacity: 0.1,
          }}
        />
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Our Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Innovative', 'Sustainable', 'Connected'].map((feature, index) => (
              <motion.div
                key={feature}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-lg"
                initial={{ opacity: 0, y: 50, rotateY: 90 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{feature}</h3>
                <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-indigo-800 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(45deg, #4f46e5 25%, transparent 25%, transparent 50%, #4f46e5 50%, #4f46e5 75%, transparent 75%, transparent)",
            backgroundSize: "60px 60px",
            opacity: 0.1,
          }}
          animate={{
            x: [0, 60],
            y: [0, 60],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Join the Revolution?
          </motion.h2>
          <motion.p
            className="text-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Be part of the change and shape the future with us.
          </motion.p>
          <motion.button
            className="bg-white text-indigo-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition duration-300 flex items-center mx-auto"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now <ArrowRight className="ml-2" />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-purple-900 py-8 px-4 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            &copy; 2024 Future Tech. All rights reserved.
          </motion.p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['About', 'Contact', 'Privacy', 'Terms'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="hover:text-purple-300 transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </footer>

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-white"
        style={{ scaleX: pathLength, transformOrigin: "0%" }}
      />
    </div>
  );
}

export default App;