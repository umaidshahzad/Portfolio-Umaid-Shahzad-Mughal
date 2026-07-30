"use client";
import React, { useState } from 'react';
import { X, ExternalLink, Github, Check, Cpu, Server, Zap, Shield, MessageSquare } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'architecture'

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#fcf8f9] dark:bg-[#161c23] border border-[#e5e2e2] dark:border-[#2d333a] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#e5e2e2] dark:border-[#2d333a] flex items-start justify-between bg-[#f0eded] dark:bg-[#1c232b]">
          <div>
            <span className="text-xs font-mono px-2.5 py-1 bg-[#181e25] text-white dark:bg-[#dae6d2] dark:text-[#141e12] rounded-full font-medium">
              {project.category}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#181e25] dark:text-[#f3f0f0] mt-2">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-[#5e5f5d] dark:text-[#929e8c]">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5e5f5d] hover:text-[#181e25] dark:text-[#929e8c] dark:hover:text-[#f3f0f0] rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#e5e2e2] dark:border-[#2d333a] px-6 bg-[#f6f3f3] dark:bg-[#12161b]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 text-xs font-mono font-medium border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-[#181e25] dark:border-[#dae6d2] text-[#181e25] dark:text-[#dae6d2]'
                : 'border-transparent text-[#75777b] hover:text-[#181e25] dark:hover:text-[#f3f0f0]'
            }`}
          >
            Overview & Key Features
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-4 text-xs font-mono font-medium border-b-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-[#181e25] dark:border-[#dae6d2] text-[#181e25] dark:text-[#dae6d2]'
                : 'border-transparent text-[#75777b] hover:text-[#181e25] dark:hover:text-[#f3f0f0]'
            }`}
          >
            System Architecture
          </button>

        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <p className="text-sm sm:text-base text-[#5e5f5d] dark:text-[#c5c6cb] leading-relaxed">
                {project.shortDescription}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#181e25] dark:text-[#f3f0f0]">
                  Engineering Highlights:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#44474b] dark:text-[#c5c6cb]">
                  {project.bulletPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-[#f0eded] dark:bg-[#1c232b] rounded-2xl border border-[#e5e2e2] dark:border-[#2d333a]">
                {project.stats.map((st, sIdx) => (
                  <div key={sIdx} className="text-center">
                    <div className="text-xs font-mono text-[#75777b] dark:text-[#929e8c]">{st.label}</div>
                    <div className="text-sm sm:text-base font-serif font-bold text-[#181e25] dark:text-[#f3f0f0]">{st.value}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#181e25] dark:text-[#f3f0f0] mb-2">
                  Full Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#e5e2e2] dark:bg-[#2d333a] text-[#181e25] dark:text-[#c1c7d0] text-xs font-mono rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#181e25] text-white rounded-2xl space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#dae6d2] font-semibold border-b border-white/10 pb-2">
                  <Cpu size={16} />
                  <span>Architecture Notes</span>
                </div>
                <p className="leading-relaxed text-[#c1c7d0]">
                  {project.architectureNotes}
                </p>
              </div>

              <div className="p-4 bg-[#f0eded] dark:bg-[#1c232b] rounded-2xl border border-[#e5e2e2] dark:border-[#2d333a] space-y-3">
                <h5 className="font-mono text-xs font-bold text-[#181e25] dark:text-[#f3f0f0] flex items-center gap-2">
                  <Server size={15} />
                  <span>Data Flow Pipeline</span>
                </h5>
                <div className="space-y-2 text-xs font-mono text-[#5e5f5d] dark:text-[#c5c6cb]">
                  <div className="p-2.5 bg-white dark:bg-[#12161b] rounded-lg border border-[#e5e2e2] dark:border-[#2d333a]">
                    1. Client Request → REST API / WebSocket Layer with JWT Auth Verification
                  </div>
                  <div className="p-2.5 bg-white dark:bg-[#12161b] rounded-lg border border-[#e5e2e2] dark:border-[#2d333a]">
                    2. Service Controller → Redis Pub/Sub Queue / MongoDB Vector Cosine Similarity Query
                  </div>
                  <div className="p-2.5 bg-white dark:bg-[#12161b] rounded-lg border border-[#e5e2e2] dark:border-[#2d333a]">
                    3. AI / Webhook Integration → DeepSeek Interception / WhatsApp & Nodemailer Alerts
                  </div>
                </div>
              </div>
            </div>
          )}


        </div>

        {/* Footer Links */}
        <div className="p-4 bg-[#f0eded] dark:bg-[#1c232b] border-t border-[#e5e2e2] dark:border-[#2d333a] flex items-center justify-between">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5e5f5d] dark:text-[#929e8c] hover:text-[#181e25] dark:hover:text-[#f3f0f0]"
          >
            <Github size={15} />
            <span>View Source on GitHub</span>
          </a>

          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#162014] dark:bg-[#dae6d2] text-white dark:text-[#141e12] rounded-full text-xs font-mono font-medium hover:opacity-90 transition-opacity"
          >
            <span>Live Project Repository</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

