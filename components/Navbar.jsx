"use client";
import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sun, Moon, Menu, X, ArrowUpRight, Code, Terminal } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills & Certs', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#fcf8f9]/90 dark:bg-[#12161b]/90 backdrop-blur-md shadow-sm border-b border-[#e5e2e2] dark:border-[#2a3528]/60 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 font-serif text-xl font-bold tracking-tight text-[#181e25] dark:text-[#f3f0f0] transition-opacity hover:opacity-90"
        >

          <span className="flex flex-col">
            <span className="leading-none">{portfolioData.personalInfo.shortName}</span>
            <span className="text-[11px] font-mono font-normal text-[#5e5f5d] dark:text-[#929e8c]">Full Stack Dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#f0eded]/80 dark:bg-[#1c232b]/80 p-1.5 rounded-full border border-[#e5e2e2] dark:border-[#2d333a]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#181e25] text-white dark:bg-[#dae6d2] dark:text-[#141e12] shadow-sm'
                    : 'text-[#5e5f5d] dark:text-[#929e8c] hover:text-[#181e25] dark:hover:text-[#f3f0f0] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            type="button"
            onClick={() => setDarkMode(prev => !prev)}
            aria-label="Toggle Theme"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium text-[#181e25] dark:text-[#f3f0f0] bg-[#e5e2e2]/70 dark:bg-[#1c232b] border border-[#d5d2d2] dark:border-[#2d333a] rounded-full hover:bg-[#d8d5d5] dark:hover:bg-[#28323e] transition-all duration-200 shadow-sm cursor-pointer"
          >
            {darkMode ? (
              <>
                <Sun size={16} className="text-amber-400 fill-amber-400/20" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon size={16} className="text-slate-700 fill-slate-700/20" />
                <span>Dark</span>
              </>
            )}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#162014] dark:bg-[#dae6d2] text-[#ffffff] dark:text-[#141e12] rounded-full text-xs font-mono font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            <span>Hire Me</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            type="button"
            onClick={() => setDarkMode(prev => !prev)}
            aria-label="Toggle Theme"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#181e25] dark:text-[#f3f0f0] bg-[#e5e2e2]/70 dark:bg-[#1c232b] border border-[#d5d2d2] dark:border-[#2d333a] rounded-full hover:bg-[#d8d5d5] dark:hover:bg-[#28323e] transition-colors cursor-pointer"
          >
            {darkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-slate-700" />}
            <span>{darkMode ? 'Light' : 'Dark'}</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 text-[#181e25] dark:text-[#f3f0f0] rounded-lg hover:bg-[#e5e2e2] dark:hover:bg-[#2d333a]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcf8f9] dark:bg-[#12161b] border-b border-[#e5e2e2] dark:border-[#2d333a] px-6 py-6 transition-all animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#181e25] dark:text-[#f3f0f0] py-2 border-b border-[#e5e2e2]/50 dark:border-[#2d333a]/50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#162014] dark:bg-[#dae6d2] text-[#ffffff] dark:text-[#141e12] rounded-full text-sm font-mono font-medium"
              >
                Get In Touch ({portfolioData.personalInfo.email})
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

