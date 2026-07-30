"use client";
import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, Terminal } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#929e8c] dark:text-[#dae6d2]">
            02. Development & Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#181e25] dark:text-[#f3f0f0]">
            Engineering & Hands-On Experience
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-3.5 md:before:left-4 before:w-0.5 before:bg-[#e5e2e2] dark:before:bg-[#2d333a]">
          {experience.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-6 group">
              {/* Timeline Bullet Node */}
              <div className="w-8 h-8 rounded-full bg-[#181e25] dark:bg-[#dae6d2] text-[#ffffff] dark:text-[#141e12] flex items-center justify-center shrink-0 z-10 shadow-sm transition-transform group-hover:scale-110">
                <Briefcase size={16} />
              </div>

              {/* Experience Card Content */}
              <div className="flex-1 bg-[#fcf8f9] dark:bg-[#1c232b] p-6 sm:p-8 rounded-2xl border border-[#e5e2e2] dark:border-[#2d333a] shadow-ambient hover-lift transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#181e25] dark:text-[#f3f0f0]">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono font-medium text-[#162014] dark:text-[#dae6d2]">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs font-mono text-[#75777b] dark:text-[#929e8c]">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 mt-0.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#5e5f5d] dark:text-[#c5c6cb] mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-[#44474b] dark:text-[#c5c6cb]">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

