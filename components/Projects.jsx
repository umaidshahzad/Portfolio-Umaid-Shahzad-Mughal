"use client";
import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ExternalLink, Github, ArrowRight, Layers, Sparkles, Cpu, Code2, Terminal } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Full Stack / E-Commerce Lead Gen', 'Real-Time & AI Infrastructure', 'AI & Vector Search'];

  const filteredProjects = filterCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-[#f6f3f3] dark:bg-[#161c23] transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#929e8c] dark:text-[#dae6d2]">
              03. Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#181e25] dark:text-[#f3f0f0]">
              Featured Full Stack Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  filterCategory === cat
                    ? 'bg-[#181e25] text-white dark:bg-[#dae6d2] dark:text-[#141e12] shadow-sm'
                    : 'bg-[#e5e2e2] dark:bg-[#1c232b] text-[#5e5f5d] dark:text-[#929e8c] hover:text-[#181e25] dark:hover:text-[#f3f0f0]'
                }`}
              >
                {cat === 'All' ? 'All Systems' : cat.split(' ')[0] + ' ' + (cat.split(' ')[1] || '')}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#fcf8f9] dark:bg-[#1c232b] rounded-3xl p-6 sm:p-8 border border-[#e5e2e2] dark:border-[#2d333a] shadow-ambient hover-lift flex flex-col justify-between transition-all"
            >
              <div className="space-y-4">
                {/* Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#dae6d2]/60 dark:bg-[#2a3528] text-[#141e12] dark:text-[#dae6d2]">
                    {project.badge}
                  </span>

                </div>

                {/* Project Title & Subtitle */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#181e25] dark:text-[#f3f0f0] group-hover:text-[#162014] dark:group-hover:text-[#dae6d2] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#5e5f5d] dark:text-[#929e8c] mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Short Description */}
                <p className="text-sm text-[#5e5f5d] dark:text-[#c5c6cb] line-clamp-3 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#f0eded] dark:bg-[#2d333a] text-[#2d333a] dark:text-[#c1c7d0]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-[#e5e2e2] dark:bg-[#2d333a] text-[#75777b] dark:text-[#929e8c]">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#e5e2e2] dark:border-[#2d333a] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#181e25] dark:text-[#dae6d2] hover:underline"
                >
                  <span>Details & Demo</span>
                  <ArrowRight size={14} />
                </button>

                <div className="flex items-center space-x-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Code"
                    className="p-2 text-[#5e5f5d] dark:text-[#929e8c] hover:text-[#181e25] dark:hover:text-[#f3f0f0] rounded-full hover:bg-[#e5e2e2] dark:hover:bg-[#2d333a]"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    className="p-2 text-[#5e5f5d] dark:text-[#929e8c] hover:text-[#181e25] dark:hover:text-[#f3f0f0] rounded-full hover:bg-[#e5e2e2] dark:hover:bg-[#2d333a]"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}

