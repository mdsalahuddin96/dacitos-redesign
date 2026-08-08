'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote: "The mobile app developed by Dacitos Technologies completely transformed our customer experience. We saw a huge increase in user engagement and app performance after launch.",
    name: "Amit Agarwal",
    role: "Founder & CEO",
    company: "NextGen Solutions",
    category: "Mobile App",
    metrics: "+140% User Engagement",
  },
  {
    id: 2,
    rating: 5,
    quote: "Working with Dacitos on our cloud migration was seamless. They eliminated downtime and optimized our infrastructure cost by over 30% in the first quarter.",
    name: "Priya Sharma",
    role: "CTO",
    company: "FinTech Scale",
    category: "Cloud Services",
    metrics: "30% Cost Reduction",
  },
  {
    id: 3,
    rating: 5,
    quote: "Their web development team built an incredibly responsive and fast platform for us. The attention to UI detail and animations exceeded our expectations.",
    name: "Rahul Verma",
    role: "Head of Product",
    company: "Aura Commerce",
    category: "Web Dev",
    metrics: "99/100 Lighthouse Score",
  },
];

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Mobile App', 'Cloud Services', 'Web Dev'];

  const filteredTestimonials = selectedCategory === 'All'
    ? testimonials
    : testimonials.filter(t => t.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Trusted by Leaders, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Backed by Impact
            </span>
          </motion.h2>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="relative flex flex-col justify-between p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all group"
              >
                {/* Top Quote Icon & Rating */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-slate-800 group-hover:text-cyan-500/20 transition-colors" />
                  </div>

                  {/* Main Quote */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                    &quot{item.quote}&quot
                  </p>
                </div>

                {/* Bottom Author Info & Metric Badge */}
                <div className="pt-6 border-t border-slate-800/80 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {item.role}, <span className="text-slate-300">{item.company}</span>
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-extrabold text-sm flex items-center justify-center">
                      {item.name.charAt(0)}
                    </div>
                  </div>

                  {/* Key Impact Metric */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.metrics}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}