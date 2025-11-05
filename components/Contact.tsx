'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Schedule an appointment or reach out to our team for any inquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 text-lg">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2 text-lg">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/50"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-white mb-3">Visit Us</h3>
              <p className="text-gray-300 text-lg">
                123 Cardiac Avenue<br />
                Medical District<br />
                New York, NY 10001
              </p>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-white mb-3">Call Us</h3>
              <p className="text-gray-300 text-lg">
                Emergency: +1 (800) HEART-911<br />
                Appointments: +1 (800) 555-0100<br />
                Fax: +1 (800) 555-0101
              </p>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-2xl font-bold text-white mb-3">Hours</h3>
              <p className="text-gray-300 text-lg">
                Emergency: 24/7<br />
                Outpatient: Mon-Fri 8AM-6PM<br />
                Saturday: 9AM-2PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-32 text-center text-gray-400 border-t border-white/10 pt-8"
      >
        <p className="text-lg">© 2024 CardioLife Heart Hospital. All rights reserved.</p>
        <p className="mt-2">Saving lives, one heartbeat at a time.</p>
      </motion.footer>
    </section>
  );
}
