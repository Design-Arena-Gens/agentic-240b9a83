'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              CardioLife Heart Hospital has been at the forefront of cardiac care for over two decades.
              Our team of internationally recognized cardiologists and surgeons combine expertise with
              compassion to deliver exceptional patient outcomes.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">✨</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-300">Board-certified cardiologists with decades of experience</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">🔬</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Advanced Technology</h3>
                  <p className="text-gray-300">State-of-the-art diagnostic and treatment equipment</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">❤️</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Patient-Centered Care</h3>
                  <p className="text-gray-300">Personalized treatment plans tailored to each patient</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">🏆</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Award-Winning</h3>
                  <p className="text-gray-300">Recognized nationally for excellence in cardiac care</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <div className="space-y-8">
                <div className="p-6 bg-white/5 rounded-2xl">
                  <div className="text-5xl font-bold text-red-400 mb-2">100+</div>
                  <div className="text-gray-300 text-lg">Expert Cardiologists</div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl">
                  <div className="text-5xl font-bold text-red-400 mb-2">500+</div>
                  <div className="text-gray-300 text-lg">Beds & ICU Units</div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl">
                  <div className="text-5xl font-bold text-red-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-lg">Emergency Services</div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl">
                  <div className="text-5xl font-bold text-red-400 mb-2">ISO</div>
                  <div className="text-gray-300 text-lg">Certified Hospital</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
