import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, CheckCircle2, Star } from 'lucide-react';

export const DigitalProduct = () => {
  const benefits = [
    "Step-by-step guide to building profitable apps",
    "10 AI tools that save 100+ hours of work",
    "Monetization strategies for developers",
    "Case studies of successful AI products"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
          <Star className="w-4 h-4" />
          Best Seller
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          App to Income <span className="text-indigo-500">Ebook</span>
        </h2>
        <p className="text-lg text-white/60 mb-8 leading-relaxed">
          The ultimate blueprint for developers who want to turn their code into a recurring income stream. 
          Learn how to leverage AI to build, launch, and scale digital products.
        </p>
        
        <ul className="space-y-4 mb-10">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-3 text-white/80">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <a
          href="https://gumroad.com" // Placeholder for real Gumroad link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-indigo-50 transition-all group"
        >
          <ShoppingCart className="w-5 h-5" />
          Buy Now on Gumroad
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative group"
      >
        <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src="https://picsum.photos/seed/ebook/800/1200"
            alt="App to Income Ebook Cover"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
            <div className="text-white font-bold text-2xl mb-2">App to Income</div>
            <div className="text-white/60">By Manas Chowdhury</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
