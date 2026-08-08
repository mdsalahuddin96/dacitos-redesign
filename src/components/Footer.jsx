'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Code2, 
  Settings, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ShieldCheck,   
  ArrowUpRight 
} from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 text-slate-400 font-sans pt-20 pb-8 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* TOP MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* BRAND & CONTACT INFO (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-extrabold text-white text-lg shadow-lg shadow-cyan-500/20">
                D
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Dacitos <span className="text-cyan-400 font-normal text-sm">Tech</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Providing IT services, software development, cloud solutions, and digital infrastructure. Your partner for managed IT, consulting, and digital transformation.
            </p>

            {/* Address & Direct Details */}
            <div className="space-y-3.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="space-y-1 leading-snug">
                  <p>1st floor, Raj Bhavan, opp. Jio Tower, Dulhin Bazar, Bihar — 801102</p>
                  <p className="text-slate-500">Omaxe City, Lucknow, UP — 226025</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+91 85408 68767 / +91 91143 90257</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>contact@dacitos.com | sales@dacitos.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* OUR SERVICES (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Our Services</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Web Development', icon: Globe },
                { label: 'Mobile Apps', icon: Smartphone },
                { label: 'Cloud Services', icon: Cloud },
                { label: 'Custom Software', icon: Code2 },
                { label: 'IT Consulting', icon: Settings },
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#services" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                    <item.icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              {['About Us', 'Portfolio', 'Testimonials', 'Careers', 'Partner With Us'].map((link, idx) => (
                <li key={idx}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                    <span>{link}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER SUBSCRIBE (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Stay Updated</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to our newsletter for technical insights and industry updates.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-4 pr-24 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/80 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <Send className="w-3 h-3" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-cyan-400 font-medium pt-1">
                  ✓ Thank you for subscribing!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* MIDDLE SECTION: REGISTRATIONS & SOCIALS */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* MCA Government Badge */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider">Government Registration</span>
              <span className="text-slate-200 font-semibold">Registered with Ministry of Corporate Affairs (MCA), Govt. of India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {[
              { icon: BsLinkedin, href: '#' },
              { icon: BsTwitter, href: '#' },
              { icon: FaFacebook, href: '#' },
              { icon: BsInstagram, href: '#' },
              { icon: BsGithub, href: '#' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ y: -3 }}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-all"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Dacitos Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}