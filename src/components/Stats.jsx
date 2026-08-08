'use client';

import { motion } from 'framer-motion';

const statsData = [
  { value: '25+', label: 'Projects Completed' },
  { value: '23+', label: 'Happy Clients' },
  { value: '1+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function Stats() {
  return (
    <section className="relative py-16 px-6 z-10 border-y border-slate-800/60 bg-slate-900/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="space-y-1"
          >
            <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {stat.value}
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}