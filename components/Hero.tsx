'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent"
        >
          CardioLife
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-semibold mb-8 text-white"
        >
          Heart Hospital
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
        >
          Leading the way in cardiac care with state-of-the-art technology,
          compassionate experts, and life-saving treatments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/50"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105 backdrop-blur-sm border border-white/20"
          >
            Our Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-4xl font-bold text-red-400 mb-2">25+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-4xl font-bold text-red-400 mb-2">50K+</div>
            <div className="text-gray-300">Lives Saved</div>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-4xl font-bold text-red-400 mb-2">98%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
