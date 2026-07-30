"use client";
import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, MapPin, UserCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { bio, location } = portfolioData.personalInfo;
  const { institution, degree, cgpa, graduation, highlights } = portfolioData.education;
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 px-6 bg-[#f6f3f3] dark:bg-[#161c23] transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#929e8c] dark:text-[#dae6d2]">
            01. Background & Profile
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#181e25] dark:text-[#f3f0f0]">
            Meticulous Code, Human-Centric Systems.
          </h2>
        </div>

        {/* Grid: Profile Image + Bio */}
        <div className="grid md:grid-cols-12 gap-10 items-center">
          
          {/* Profile Image Column (Constraint: Profile picture MUST be in this section) */}
          <div className="md:col-span-5 relative group">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#e5e2e2] dark:bg-[#2d333a] border border-[#c5c6cb]/40 dark:border-[#2d333a] shadow-ambient">
              {!imgError ? (
                <img
                  src="/Pic.png"
                  alt="Umaid Shahzad Mughal"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#181e25] to-[#2d333a] text-white text-center">
                  <div className="w-20 h-20 rounded-full bg-[#dae6d2] text-[#141e12] flex items-center justify-center text-2xl font-serif font-bold mb-4">
                    US
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-1">Umaid Shahzad</h3>
                  <p className="text-xs font-mono text-[#929e8c]">Full Stack Developer</p>
                  <p className="text-xs text-[#c1c7d0] mt-3">UET Lahore CS Student</p>
                </div>
              )}

              {/* Floating Location Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 dark:bg-[#12161b]/90 backdrop-blur-md rounded-xl border border-white/20 shadow-md flex items-center gap-2 text-xs font-mono text-[#181e25] dark:text-[#f3f0f0]">
                <MapPin size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{location}</span>
              </div>
            </div>

            {/* Decorative back border frame */}
            <div className="absolute -inset-2 rounded-[2.2rem] border border-[#929e8c]/30 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </div>

          {/* Bio Text Column */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#5e5f5d] dark:text-[#c5c6cb] leading-relaxed">
              {bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Key Strengths Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-[#181e25] dark:text-[#f3f0f0]">
              <div className="flex items-center gap-2 p-3 bg-[#f0eded] dark:bg-[#1c232b] rounded-lg border border-[#e5e2e2] dark:border-[#2d333a]">
                <ShieldCheck size={16} className="text-emerald-600 dark:text-emerald-400" />
                <span>RESTful API & JWT Security</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#f0eded] dark:bg-[#1c232b] rounded-lg border border-[#e5e2e2] dark:border-[#2d333a]">
                <UserCheck size={16} className="text-emerald-600 dark:text-emerald-400" />
                <span>MERN & PERN Architectures</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#f0eded] dark:bg-[#1c232b] rounded-lg border border-[#e5e2e2] dark:border-[#2d333a]">
                <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />
                <span>Real-Time WebSockets & Redis</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#f0eded] dark:bg-[#1c232b] rounded-lg border border-[#e5e2e2] dark:border-[#2d333a]">
                <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />
                <span>Vector Search & AI RAG Systems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section (Explicit requirement in About/Experience) */}
        <div className="pt-8 border-t border-[#e5e2e2] dark:border-[#2d333a]">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={22} className="text-[#181e25] dark:text-[#dae6d2]" />
            <h3 className="font-serif text-2xl font-bold text-[#181e25] dark:text-[#f3f0f0]">
              Education
            </h3>
          </div>

          <div className="bg-[#fcf8f9] dark:bg-[#1c232b] p-6 sm:p-8 rounded-2xl border border-[#e5e2e2] dark:border-[#2d333a] shadow-ambient space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#e5e2e2] dark:border-[#2d333a] pb-4">
              <div>
                <h4 className="font-serif text-xl font-bold text-[#181e25] dark:text-[#f3f0f0]">
                  {institution}
                </h4>
                <p className="text-base font-medium text-[#162014] dark:text-[#dae6d2]">
                  {degree}
                </p>
              </div>
              <div className="text-right sm:text-right">
                <span className="inline-block px-3 py-1 bg-[#dae6d2]/50 dark:bg-[#2a3528] text-[#141e12] dark:text-[#dae6d2] text-xs font-mono rounded-full font-semibold">
                  CGPA: {cgpa}
                </span>
                <p className="text-xs font-mono text-[#75777b] dark:text-[#929e8c] mt-1">
                  {graduation}
                </p>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-[#5e5f5d] dark:text-[#c5c6cb]">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#162014] dark:bg-[#dae6d2] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

