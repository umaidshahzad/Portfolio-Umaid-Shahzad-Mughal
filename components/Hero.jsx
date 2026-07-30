"use client";
import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Copy, Check, Github, Linkedin, Mail, Code, Terminal, Sparkles, Layers } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const { name, tagline, subTagline, status, email, github, linkedin, location } = portfolioData.personalInfo;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#dae6d2]/30 dark:bg-[#2a3528]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#e0e0dd]/40 dark:bg-[#1a232e]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0eded] dark:bg-[#1c232b] border border-[#e5e2e2] dark:border-[#2d333a] shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-[#5e5f5d] dark:text-[#929e8c] font-medium">
            {status}
          </span>
        </div>

        {/* Main Headline & Intro */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#181e25] dark:text-[#f3f0f0] leading-[1.1]">
            {name}
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-[#162014] dark:text-[#dae6d2] font-semibold">
            {tagline}
          </p>

          <p className="text-base sm:text-lg text-[#5e5f5d] dark:text-[#c5c6cb] max-w-2xl font-normal leading-relaxed">
            {subTagline}
          </p>
        </div>

        {/* Key Quick Badges / Tech Focus */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-mono text-[#75777b] dark:text-[#929e8c] uppercase tracking-wider font-semibold mr-2">Core Focus:</span>
          {["MERN Stack", "PERN Stack", "REST APIs", "JWT Auth", "Vector Search RAG", "WebSockets"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md text-xs font-mono bg-[#f0eded] dark:bg-[#1a2129] text-[#2d333a] dark:text-[#c1c7d0] border border-[#e5e2e2] dark:border-[#2d333a]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Call to Action Controls */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#181e25] dark:bg-[#dae6d2] text-[#ffffff] dark:text-[#141e12] rounded-full font-mono text-sm font-medium hover-lift transition-all shadow-ambient"
          >
            <span>Explore Featured Projects</span>
            <ArrowDown size={16} />
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#f0eded] dark:bg-[#1c232b] text-[#181e25] dark:text-[#f3f0f0] rounded-full border border-[#e5e2e2] dark:border-[#2d333a] font-mono text-sm font-medium hover:bg-[#e5e2e2] dark:hover:bg-[#2d333a] transition-colors"
          >
            {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
            <span>{copied ? "Email Copied!" : email}</span>
          </button>

          {/* Social Links */}
          <div className="flex items-center space-x-2 pl-2">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 bg-[#f0eded] dark:bg-[#1c232b] text-[#181e25] dark:text-[#f3f0f0] rounded-full hover:bg-[#e5e2e2] dark:hover:bg-[#2d333a] transition-colors border border-[#e5e2e2] dark:border-[#2d333a]"
            >
              <Github size={18} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 bg-[#f0eded] dark:bg-[#1c232b] text-[#181e25] dark:text-[#f3f0f0] rounded-full hover:bg-[#e5e2e2] dark:hover:bg-[#2d333a] transition-colors border border-[#e5e2e2] dark:border-[#2d333a]"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Key Highlights Metrics Bar */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-[#e5e2e2] dark:border-[#2d333a]">
          <div>
            <div className="font-serif text-2xl font-bold text-[#181e25] dark:text-[#f3f0f0]">3+</div>
            <div className="text-xs font-mono text-[#5e5f5d] dark:text-[#929e8c]">Full-Stack Apps</div>
          </div>
          <div>
            <div className="font-serif text-2xl font-bold text-[#181e25] dark:text-[#f3f0f0]">3.219</div>
            <div className="text-xs font-mono text-[#5e5f5d] dark:text-[#929e8c]">UET Lahore CGPA</div>
          </div>
          <div>
            <div className="font-serif text-2xl font-bold text-[#181e25] dark:text-[#f3f0f0]">MERN & Next.js</div>
            <div className="text-xs font-mono text-[#5e5f5d] dark:text-[#929e8c]">Backend Focus</div>
          </div>
          <div>
            <div className="font-serif text-2xl font-bold text-[#181e25] dark:text-[#f3f0f0]">Meta Certified</div>
            <div className="text-xs font-mono text-[#5e5f5d] dark:text-[#929e8c]">Front-End Dev</div>
          </div>
        </div>
      </div>
    </section>
  );
}

