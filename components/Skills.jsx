"use client";
import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Server, Database, Award, CheckCircle2, Terminal, Cpu, ShieldCheck, ExternalLink, Monitor } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#929e8c] dark:text-[#dae6d2]">
            04. Stack & Qualifications
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#181e25] dark:text-[#f3f0f0]">
            Technical Foundation & Certifications
          </h2>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Languages */}
          <div className="bg-[#fcf8f9] dark:bg-[#1c232b] p-6 sm:p-8 rounded-3xl border border-[#e5e2e2] dark:border-[#2d333a] shadow-ambient space-y-4">
            <div className="flex items-center gap-2.5 border-b border-[#e5e2e2] dark:border-[#2d333a] pb-3">
              <Code size={20} className="text-[#181e25] dark:text-[#dae6d2]" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#181e25] dark:text-[#f3f0f0]">
                Languages
              </h3>
            </div>
            <div className="space-y-2.5">
              {skills.languages.map((lang) => (
                <div key={lang} className="flex items-center justify-between text-sm font-mono text-[#5e5f5d] dark:text-[#c5c6cb] p-2 bg-[#f6f3f3] dark:bg-[#12161b] rounded-xl border border-[#e5e2e2] dark:border-[#2d333a]">
                  <span className="font-medium text-[#181e25] dark:text-[#f3f0f0]">{lang}</span>
                  <CheckCircle2 size={15} className="text-emerald-600 dark:text-emerald-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-[#fcf8f9] dark:bg-[#1c232b] p-6 sm:p-8 rounded-3xl border border-[#e5e2e2] dark:border-[#2d333a] shadow-ambient space-y-4">
            <div className="flex items-center gap-2.5 border-b border-[#e5e2e2] dark:border-[#2d333a] pb-3">
              <Monitor size={20} className="text-[#181e25] dark:text-[#dae6d2]" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#181e25] dark:text-[#f3f0f0]">
                Frontend
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-[#f0eded] dark:bg-[#12161b] text-[#181e25] dark:text-[#c1c7d0] text-xs font-mono rounded-lg border border-[#e5e2e2] dark:border-[#2d333a]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-[#fcf8f9] dark:bg-[#1c232b] p-6 sm:p-8 rounded-3xl border border-[#e5e2e2] dark:border-[#2d333a] shadow-ambient space-y-4">
            <div className="flex items-center gap-2.5 border-b border-[#e5e2e2] dark:border-[#2d333a] pb-3">
              <Server size={20} className="text-[#181e25] dark:text-[#dae6d2]" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#181e25] dark:text-[#f3f0f0]">
                Backend
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-[#f0eded] dark:bg-[#12161b] text-[#181e25] dark:text-[#c1c7d0] text-xs font-mono rounded-lg border border-[#e5e2e2] dark:border-[#2d333a]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Databases & Tools */}
          <div className="bg-[#fcf8f9] dark:bg-[#1c232b] p-6 sm:p-8 rounded-3xl border border-[#e5e2e2] dark:border-[#2d333a] shadow-ambient space-y-4">
            <div className="flex items-center gap-2.5 border-b border-[#e5e2e2] dark:border-[#2d333a] pb-3">
              <Database size={20} className="text-[#181e25] dark:text-[#dae6d2]" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#181e25] dark:text-[#f3f0f0]">
                Databases & Tools
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.databasesTools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 bg-[#f0eded] dark:bg-[#12161b] text-[#181e25] dark:text-[#c1c7d0] text-xs font-mono rounded-lg border border-[#e5e2e2] dark:border-[#2d333a]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Core Concepts */}
        <div className="p-6 bg-[#f0eded] dark:bg-[#1c232b] rounded-3xl border border-[#e5e2e2] dark:border-[#2d333a]">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#181e25] dark:text-[#f3f0f0] mb-3 flex items-center gap-2">
            <Cpu size={16} />
            <span>Architecture & Systems Engineering Concepts</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.concepts.map((concept) => (
              <span
                key={concept}
                className="px-3 py-1 bg-white dark:bg-[#12161b] text-[#181e25] dark:text-[#dae6d2] text-xs font-mono rounded-full border border-[#e5e2e2] dark:border-[#2d333a]"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="pt-6">
          <div className="flex items-center gap-2 mb-6">
            <Award size={22} className="text-[#181e25] dark:text-[#dae6d2]" />
            <h3 className="font-serif text-2xl font-bold text-[#181e25] dark:text-[#f3f0f0]">
              Verified Certifications
            </h3>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {skills.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-[#fcf8f9] dark:bg-[#1c232b] p-6 sm:p-8 rounded-3xl border border-[#e5e2e2] dark:border-[#2d333a] shadow-ambient flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover-lift"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-[#dae6d2] text-[#141e12] font-mono text-xs font-bold rounded-full">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-[#75777b] dark:text-[#929e8c]">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#181e25] dark:text-[#f3f0f0]">
                    {cert.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5e5f5d] dark:text-[#c5c6cb] leading-relaxed">
                    {cert.description}
                  </p>
                  <p className="text-xs font-mono text-[#75777b] dark:text-[#929e8c]">
                    Credential ID: <span className="font-bold text-[#181e25] dark:text-[#f3f0f0]">{cert.code}</span>
                  </p>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#181e25] dark:bg-[#dae6d2] text-white dark:text-[#141e12] rounded-full font-mono text-xs font-medium hover:opacity-90 transition-opacity shrink-0"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

