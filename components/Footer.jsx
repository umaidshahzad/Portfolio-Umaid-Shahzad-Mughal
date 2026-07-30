"use client";
import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { name, shortName, email, github, linkedin } = portfolioData.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181e25] text-white py-12 px-6 border-t border-[#2d333a]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copy */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-serif text-xl font-bold text-[#dae6d2]">
            {name}
          </div>
          <p className="text-xs font-mono text-[#959ba4]">
            Junior Full Stack Developer (MERN / PERN) • UET Lahore
          </p>
          <p className="text-[11px] font-mono text-[#75777b]">
            © {new Date().getFullYear()} Umaid Shahzad Mughal. Handcrafted with precision.
          </p>
        </div>

        {/* Links & Scroll to top */}
        <div className="flex items-center space-x-6">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#959ba4] hover:text-[#dae6d2] transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#959ba4] hover:text-[#dae6d2] transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className="text-[#959ba4] hover:text-[#dae6d2] transition-colors"
          >
            <Mail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-2.5 bg-[#2d333a] hover:bg-[#3f4a3b] text-[#dae6d2] rounded-full transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}

