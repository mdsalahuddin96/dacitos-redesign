'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Smartphone, Cloud } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-6">
      
      {/* CONTINUOUS BACKGROUND ANIMATIONS */}
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[130px] pointer-events-none"
      />
      
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* LEFT COLUMN: ORIGINAL TEXT CONTENT */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Empowering Next-Gen IT Solutions
          </motion.div>

          {/* Headline with exact text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Your Trusted <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
              IT Partner
            </span> <br />
            for Success
          </motion.h1>

          {/* Subtitle with exact text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            We deliver cutting-edge IT solutions and software development services that drive growth, enhance efficiency, and transform your business for the digital age.
          </motion.p>

          {/* Action Buttons with exact labels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-xl hover:shadow-cyan-500/25 transition-all"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#portfolio"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700/80 bg-slate-900/40 text-slate-200 font-semibold text-sm hover:bg-slate-800/80 transition-all backdrop-blur-md"
            >
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span>View Our Work</span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: CONTINUOUSLY ANIMATED GLASS GRAPHIC CARD */}
        <div className="lg:col-span-5 relative flex justify-center">
          
          {/* Main Floating Glass Container */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full max-w-md bg-slate-900/70 border border-slate-800/90 rounded-3xl p-6 shadow-2xl backdrop-blur-2xl relative"
          >
            {/* Top Browser Bar Dots */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-slate-500 font-mono">dacitos.com</span>
            </div>

            {/* Glowing Active Progress Animation */}
            <div className="space-y-4 mb-6">
              <div className="h-3 rounded-full bg-slate-800 overflow-hidden relative">
                <motion.div 
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"
                />
              </div>
              <div className="h-2.5 w-3/4 rounded-full bg-slate-800/60" />
              <div className="h-2.5 w-1/2 rounded-full bg-slate-800/40" />
            </div>

            {/* Interactive Feature Cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { icon: Globe, label: 'Web', color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400' },
                { icon: Smartphone, label: 'Mobile', color: 'from-blue-500/20 to-indigo-500/20 text-blue-400' },
                { icon: Cloud, label: 'Cloud', color: 'from-indigo-500/20 to-purple-500/20 text-indigo-400' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-b ${item.color} border border-slate-700/40 transition-all`}
                >
                  <item.icon className="w-6 h-6 mb-2" />
                  <span className="text-xs font-semibold text-slate-300">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}