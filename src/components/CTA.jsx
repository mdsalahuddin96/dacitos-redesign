'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      {/* Background Gradient Blurs */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-900/40 border border-slate-800/90 p-8 sm:p-16 backdrop-blur-2xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: CTA TEXT & PROMISES */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-white leading-tight"
            >
              Ready to Transform <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                Your Business?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Let&apos;s discuss how we can help you achieve your technology goals and drive your business forward with innovative IT solutions.
            </motion.p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Quick Response (&lt;24 hrs)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>No Obligation</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: QUICK CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-2xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              Schedule a Consultation
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1.5">Project Scope</label>
                <select className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm focus:outline-none focus:border-cyan-500 transition-colors">
                  <option>Web Application</option>
                  <option>Mobile App Development</option>
                  <option>Cloud Migration</option>
                  <option>Custom IT Solution</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all group"
              >
                <span>Get Free Proposal</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                info@dacitos.com
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                Call Directly
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}