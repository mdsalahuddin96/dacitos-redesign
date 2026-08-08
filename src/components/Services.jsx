'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  CheckCircle2, 
  ArrowUpRight, 
  Settings, 
  ShieldCheck,
  Cpu,
  Code2
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure'],
    color: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    borderGlow: 'group-hover:border-cyan-500/50',
    iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experiences.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Ready'],
    color: 'from-blue-500/20 via-blue-500/5 to-transparent',
    borderGlow: 'group-hover:border-blue-500/50',
    iconBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Scalable cloud solutions, migration services, and infrastructure management on AWS, Azure, and GCP.',
    features: ['Cloud Migration', 'DevOps', 'Auto-Scaling', '24/7 Monitoring'],
    color: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
    borderGlow: 'group-hover:border-indigo-500/50',
    iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  },
  {
    icon: Code2,
    title: 'Custom Software & APIs',
    description: 'Tailored enterprise software, RESTful & GraphQL APIs, and seamless microservices integration.',
    features: ['API Development', 'Microservices', 'Database Architecture', 'Legacy System Modernization'],
    color: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    borderGlow: 'group-hover:border-emerald-500/50',
    iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security audits, vulnerability testing, and end-to-end data encryption protocols.',
    features: ['Security Audits', 'Penetration Testing', 'Data Encryption', 'Compliance & Regulations'],
    color: 'from-amber-500/20 via-amber-500/5 to-transparent',
    borderGlow: 'group-hover:border-amber-500/50',
    iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  {
    icon: Cpu,
    title: 'AI & Data Analytics',
    description: 'Transforming raw enterprise data into actionable insights with machine learning & modern BI models.',
    features: ['Machine Learning', 'Data Pipelines', 'Predictive Analytics', 'Interactive Dashboards'],
    color: 'from-purple-500/20 via-purple-500/5 to-transparent',
    borderGlow: 'group-hover:border-purple-500/50',
    iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 text-xs font-semibold"
          >
            <Settings className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Comprehensive IT Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            From web development to cloud infrastructure, we provide end-to-end technology solutions that scale with your business needs.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl bg-slate-900/50 border border-slate-800 p-8 transition-all duration-300 ${service.borderGlow} hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between overflow-hidden backdrop-blur-xl`}
            >
              {/* Card Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div>
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${service.iconBg} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors pt-4 border-t border-slate-800/80"
              >
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}