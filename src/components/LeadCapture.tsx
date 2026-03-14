import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export const LeadCapture = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // In a real app, you'd send this to your API
    console.log('Lead captured:', email);
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-indigo-600 p-8 md:p-16">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Get my free guide: 10 AI tools to build profitable apps
        </h2>
        <p className="text-indigo-100 mb-10 text-lg">
          Join 5,000+ developers receiving weekly insights on AI automation and digital products.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 text-white"
          >
            <CheckCircle className="w-16 h-16 text-emerald-300" />
            <div className="text-xl font-semibold">Check your inbox!</div>
            <p className="text-indigo-100">The guide is on its way.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-indigo-200 focus:outline-none focus:bg-white/20 transition-all"
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
            >
              Get Free Guide
              <Send className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
