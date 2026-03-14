import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  MessageCircle, 
  MapPin, 
  ArrowRight,
  Code2,
  Cpu,
  Globe,
  ChevronDown
} from 'lucide-react';
import { HeroScene } from './components/HeroScene';
import { GitHubProjects } from './components/GitHubProjects';
import { DigitalProduct } from './components/DigitalProduct';
import { AIBlogGenerator } from './components/AIBlogGenerator';
import { LeadCapture } from './components/LeadCapture';
import { AIChatbot } from './components/AIChatbot';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Google Analytics Placeholder
  useEffect(() => {
    console.log('Analytics initialized: Tracking visitor...');
  }, []);

  const trackClick = (label: string) => {
    console.log(`Analytics: Button clicked - ${label}`);
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-indigo-500/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">M</div>
            Manas.
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#product" className="hover:text-white transition-colors">Digital Products</a>
            <a href="#blog" className="hover:text-white transition-colors">AI Tools</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a 
            href="#contact" 
            onClick={() => trackClick('Navbar CTA')}
            className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-indigo-50 transition-all"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <HeroScene />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              Manas Chowdhury
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-medium mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2">
              <span className="flex items-center gap-2"><Cpu className="w-5 h-5 text-indigo-400" /> Automation Builder</span>
              <span className="flex items-center gap-2"><Code2 className="w-5 h-5 text-indigo-400" /> AI Developer</span>
              <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-indigo-400" /> Web Creator</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => {
                  trackClick('Hero Primary');
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => trackClick('Hero Secondary')}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-8 py-4 rounded-2xl transition-all"
              >
                Download CV
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
        {/* GitHub Projects Section */}
        <section id="projects" className="scroll-mt-32">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Live GitHub Projects</h2>
            <p className="text-white/60 text-lg">Real-time data fetched directly from my repositories.</p>
          </div>
          <GitHubProjects />
        </section>

        {/* Digital Product Section */}
        <section id="product" className="scroll-mt-32">
          <DigitalProduct />
        </section>

        {/* AI Blog Generator Section */}
        <section id="blog" className="scroll-mt-32">
          <AIBlogGenerator />
        </section>

        {/* Lead Capture Section */}
        <section className="scroll-mt-32">
          <LeadCapture />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <span className="text-indigo-500">extraordinary</span> together.</h2>
              <p className="text-xl text-white/60 mb-12">
                Currently available for freelance projects and consulting. Based in Barasat, India, working globally.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-lg">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <span>Barasat, West Bengal, India</span>
                </div>
                <a href="mailto:manas@example.com" className="flex items-center gap-4 text-lg hover:text-indigo-400 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Mail className="w-6 h-6 text-indigo-400" />
                  </div>
                  <span>manaschowdhury124.com</span>
                </a>
                <a href="https://wa.me/+919635246194" className="flex items-center gap-4 text-lg hover:text-indigo-400 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <MessageCircle className="w-6 h-6 text-indigo-400" />
                  </div>
                  <span>WhatsApp Me</span>
                </a>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="How can I help you?"></textarea>
                </div>
                <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-indigo-50 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/40 text-sm">
            © 2026 Manas Chowdhury. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
