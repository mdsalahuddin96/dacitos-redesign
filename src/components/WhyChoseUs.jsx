'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Zap, Users, Clock, Sparkles, ArrowRight } from 'lucide-react';

const coreValues = [
  {
    id: 'results',
    icon: Target,
    title: 'Results-Driven Approach',
    subtitle: 'Measurable Outcomes',
    description: 'We align engineering with business metrics to ensure every solution directly accelerates your revenue growth and operational performance.',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'tech',
    icon: Zap,
    title: 'Cutting-Edge Tech Stack',
    subtitle: 'Modern Architecture',
    description: 'Leveraging next-gen frameworks, modern APIs, and cloud-native solutions to ensure your platforms stay performant and future-proof.',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'team',
    icon: Users,
    title: 'Dedicated Expert Team',
    subtitle: 'Specialized Engineers',
    description: 'Our cross-functional teams bring deep domain knowledge and specialized technical craftsmanship to every line of code.',
    accent: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'support',
    icon: Clock,
    title: '24/7 Ongoing Partnership',
    subtitle: 'Continuous Reliability',
    description: 'We go beyond deployment with round-the-clock monitoring, active maintenance, and ongoing evolutionary updates.',
    accent: 'from-cyan-400 to-teal-500',
  },
];

const processSteps = [
  { number: '01', title: 'Discovery & Strategy', detail: 'Deep dive into business goals, technical auditing, and roadmap alignment.' },
  { number: '02', title: 'Agile Architecture', detail: 'Rapid prototyping, clean UI/UX crafting, and modular backend engineering.' },
  { number: '03', title: 'Quality & Launch', detail: 'Rigorous testing, performance optimization, and seamless deployment.' },
  { number: '04', title: 'Evolution & Support', detail: 'Real-time analytics monitoring, scaling, and feature iterations.' },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="about" className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineering Business Growth Through <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Technical Innovation
            </span>
          </motion.h2>
        </div>

        {/* 1. INTERACTIVE VALUE PROPOSITION TABS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Tab Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={value.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-slate-900 border-cyan-500/50 shadow-xl shadow-cyan-500/10'
                      : 'bg-slate-900/30 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      isActive ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`text-base font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {value.title}
                      </div>
                      <div className="text-xs text-slate-500">{value.subtitle}</div>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:translate-x-1'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Active Tab Preview Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${coreValues[activeTab].accent}`} />
                
                <div className="space-y-6">
                  <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                    0{activeTab + 1} // Core Pillar
                  </span>
                  
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                    {coreValues[activeTab].title}
                  </h3>

                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                    {coreValues[activeTab].description}
                  </p>

                  <div className="pt-4 border-t border-slate-800 flex items-center gap-6 text-xs text-slate-500 font-mono">
                    <span>/// Enterprise Grade</span>
                    <span>/// Agile Execution</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* 2. HORIZONTAL PROCESS TIMELINE */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-white tracking-wide">Execution Framework</h3>
            <p className="text-xs text-slate-400 mt-1">How we take your product from concept to scale</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all group"
              >
                <span className="text-3xl font-black text-slate-800 group-hover:text-cyan-500/20 transition-colors block mb-4">
                  {step.number}
                </span>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}