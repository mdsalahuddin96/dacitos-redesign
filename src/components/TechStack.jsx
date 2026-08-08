'use client';

import { motion } from 'framer-motion';

const techListRow1 = [
  'React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL'
];

const techListRow2 = [
  'TypeScript', 'Flutter', 'React Native', 'DevOps', 'GraphQL', 'Tailwind CSS', 'Redis', 'Express.js'
];

export default function TechStack() {
  return (
    <section className="relative py-24 px-6 bg-slate-950/80 border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-4 mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
        >
          Technologies We Master
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto"
        >
          Leveraging the latest and most reliable technologies to build your solutions
        </motion.p>
      </div>

      {/* Dynamic Floating Tech Badges */}
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-3">
          {techListRow1.map((tech, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="px-5 py-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-200 text-sm font-medium hover:border-cyan-500 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-default backdrop-blur-md"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-3">
          {techListRow2.map((tech, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 + 0.2 }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="px-5 py-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-200 text-sm font-medium hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-default backdrop-blur-md"
            >
              {tech}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  );
}