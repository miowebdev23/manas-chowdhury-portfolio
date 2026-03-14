import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Loader2, BookOpen, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getGeminiResponse } from '../lib/gemini';

export const AIBlogGenerator = () => {
  const [topic, setTopic] = useState('');
  const [blog, setBlog] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateBlog = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setBlog('');
    
    const prompt = `Write a professional, high-quality blog post about: "${topic}". 
    The tone should be insightful, modern, and engaging. 
    Include a catchy title, introduction, subheadings, and a conclusion. 
    Format it in Markdown.`;
    
    const response = await getGeminiResponse(prompt, "You are an expert tech blogger and content strategist.");
    setBlog(response);
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(blog);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-6 h-6 text-indigo-400" />
        <h2 className="text-2xl font-bold text-white">AI Blog Generator</h2>
      </div>
      
      <p className="text-white/60 mb-8">
        Generate high-quality articles in seconds. Just enter a topic and let the AI do the magic.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a blog topic (e.g., The Future of AI Automation)"
          className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
        />
        <button
          onClick={generateBlog}
          disabled={loading || !topic.trim()}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all whitespace-nowrap"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate Blog
            </>
          )}
        </button>
      </div>

      {blog && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mt-8 p-8 rounded-2xl bg-black/40 border border-white/10"
        >
          <button
            onClick={copyToClipboard}
            className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-all"
            title="Copy to clipboard"
          >
            {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
          </button>
          
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{blog}</ReactMarkdown>
          </div>
        </motion.div>
      )}

      {!blog && !loading && (
        <div className="flex flex-col items-center justify-center py-12 text-white/20">
          <BookOpen className="w-16 h-16 mb-4 opacity-20" />
          <p>Your generated content will appear here.</p>
        </div>
      )}
    </div>
  );
};
