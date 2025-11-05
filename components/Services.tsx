'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'Cardiac Surgery',
    description: 'Advanced surgical procedures including bypass surgery, valve replacement, and minimally invasive techniques.',
    icon: '🫀',
  },
  {
    title: 'Interventional Cardiology',
    description: 'Angioplasty, stenting, and catheter-based treatments for heart conditions.',
    icon: '⚕️',
  },
  {
    title: 'Electrophysiology',
    description: 'Diagnosis and treatment of heart rhythm disorders using cutting-edge technology.',
    icon: '💓',
  },
  {
    title: 'Heart Failure Management',
    description: 'Comprehensive care for patients with chronic heart failure conditions.',
    icon: '🏥',
  },
  {
    title: 'Preventive Cardiology',
    description: 'Risk assessment, lifestyle counseling, and preventive care programs.',
    icon: '🛡️',
  },
  {
    title: '24/7 Emergency Care',
    description: 'Round-the-clock emergency cardiac care with rapid response teams.',
    icon: '🚑',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cardiac care tailored to your needs with the latest medical technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-500/20"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
