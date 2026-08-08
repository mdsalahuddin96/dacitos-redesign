'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import logo from "../../public/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 shadow-2xl">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image 
            src={logo}
            alt="Dacitos Technologies" 
            width={200} 
            height={200} 
            className="h-9 w-auto object-contain rounded-lg"
            priority
          />
          <span className="hidden font-bold tracking-tight text-xl text-white">
            Dacitos<span className="text-cyan-400">.</span>
          </span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#home" className="text-cyan-400 font-semibold transition-colors">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
          
          <div className="relative group flex items-center gap-1 cursor-pointer hover:text-cyan-400 transition-colors">
            <span>Services</span>
            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
          </div>

          <a href="#blog" className="hover:text-cyan-400 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* DESKTOP CTA BUTTON */}
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          href="#contact"
          className="hidden sm:flex items-center gap-2 text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
        >
          <span>Get In Touch</span>
          <ArrowRight className="w-4 h-4" />
        </motion.a>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 p-6 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-2xl flex flex-col gap-4 z-50"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between text-base font-medium py-2 border-b border-slate-800/60 ${
                  link.active ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}