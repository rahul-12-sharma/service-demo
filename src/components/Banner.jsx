import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypingEffect from './TypingEffect';
import { Link } from 'react-router-dom';

// Import your images
import digitalMarketing from '../assets/digital.jpg';
import videoEditing from '../assets/mockup.jpg';
import webDevelopment from '../assets/website.jpg';
import graphicDesigning from '../assets/graphic.jpg';

const backgroundImages = [
  digitalMarketing,
  videoEditing,
  webDevelopment,
  graphicDesigning,
];

export default function Banner() {
  const [bgIndex, setBgIndex] = useState(0);

  // Cycle through background images
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Images */}
      <AnimatePresence>
        <motion.img
          key={bgIndex}
          src={backgroundImages[bgIndex]}
          alt="Banner Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Animated glowing shapes */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-25 rounded-full filter blur-3xl -top-40 -left-40 z-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 opacity-20 rounded-full filter blur-2xl -bottom-32 -right-20 z-0"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
        >
          <TypingEffect />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-100 text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed font-medium drop-shadow-md"
        >
          We help <span className="text-teal-300 font-semibold">Businesses</span> and{' '}
          <span className="text-pink-500 font-semibold">Creators</span> grow with{' '}
          <span className="text-yellow-300 font-semibold">Digital Marketing</span>,{' '}
          <span className="text-cyan-300 font-semibold">Web Development</span>,{' '}
          <span className="font-semibold">Video Editing</span>, and{' '}
          <span className="text-lime-500 font-semibold">Graphic Designing</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            to="/contact"
            className="relative inline-block px-10 py-4 text-lg font-semibold text-black bg-gradient-to-r from-teal-400 to-indigo-500 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
