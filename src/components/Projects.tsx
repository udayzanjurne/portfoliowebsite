import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Server, 
  Network, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  Database
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'ec2-webapp':
        return <Server className="w-5 h-5 text-aws-orange" />;
      case 'ha-vpc':
        return <Network className="w-5 h-5 text-cloud-sky" />;
      case 'three-tier-app':
        return <Database className="w-5 h-5 text-indigo-400" />;
      default:
        return <Layers className="w-5 h-5 text-aws-orange" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-cloud-bg/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cloud-card border border-cloud-border text-xs font-mono text-aws-orange mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 // HANDS-ON PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Hands-On Cloud Projects
            </h2>
            <p className="mt-2 text-slate-300 text-sm max-w-2xl leading-relaxed">
              Real infrastructure topologies, Ubuntu Linux deployments, and AWS architectural blueprints.
              Validated via practical laboratory environments with zero inflated production claims.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-cloud-card px-3 py-2 rounded-lg border border-cloud-border">
            <span>Filter: </span>
            <span className="text-white font-semibold">Linux & AWS Deployments (3)</span>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="rounded-2xl bg-cloud-surface border border-cloud-border flex flex-col justify-between overflow-hidden hover:border-slate-500 hover:shadow-card-glow transition-all duration-300 group"
            >
              <div>
                {/* Project Header Banner */}
                <div className="p-6 border-b border-cloud-border/70 bg-gradient-to-b from-cloud-card/60 to-transparent">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-slate-900 border border-slate-750 text-aws-orange">
                      PROJECT 0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mt-2">
                    <div className="p-2.5 rounded-xl bg-cloud-card border border-cloud-border group-hover:scale-105 transition-transform mt-0.5">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-aws-orange transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-cloud-sky mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mt-4 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Architecture Flow Preview */}
                <div className="px-6 py-4 border-b border-cloud-border/50 bg-slate-950/40">
                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-2.5 flex items-center justify-between">
                    <span>Architecture Flow</span>
                    <span className="text-aws-orange">Topology</span>
                  </div>
                  
                  <div className="space-y-1.5 font-mono text-[11px]">
                    {project.architectureFlow.slice(0, 4).map((step, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-slate-300">
                        <span className="text-[9px] w-4 h-4 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-cloud-sky font-bold">
                          {sIdx + 1}
                        </span>
                        <span className="truncate">{step}</span>
                        {sIdx < 3 && <ChevronRight className="w-3 h-3 text-slate-600 ml-auto shrink-0" />}
                      </div>
                    ))}
                    {project.architectureFlow.length > 4 && (
                      <div className="text-[10px] text-slate-400 italic pt-0.5">
                        + {project.architectureFlow.length - 4} more internal components...
                      </div>
                    )}
                  </div>
                </div>

                {/* Key Implementation Highlights */}
                <div className="p-6 space-y-2">
                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-2">
                    Key Highlights
                  </div>
                  {project.keyImplementations.slice(0, 3).map((impl, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                      <span className="line-clamp-2 leading-relaxed">{impl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Stack & Actions */}
              <div className="p-6 pt-0">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-cloud-border/50">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-3 rounded-lg bg-cloud-card hover:bg-cloud-cardHover border border-cloud-border hover:border-aws-orange text-xs font-semibold text-white transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Layers className="w-3.5 h-3.5 text-aws-orange" />
                    <span>View Architecture</span>
                  </button>

                  <a
                    href={project.githubUrl || "https://github.com/udayzanjurne"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Transparency Banner */}
        <div className="mt-12 p-4 rounded-xl bg-cloud-card/40 border border-cloud-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong>Technical Integrity Guarantee:</strong> All projects reflect academic curriculum, hands-on lab configurations, and personal AWS testbeds. No commercial production claims are made.
            </span>
          </div>
          <a
            href="https://github.com/udayzanjurne"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aws-orange hover:text-amber-400 font-mono font-semibold whitespace-nowrap flex items-center gap-1"
          >
            <span>Review Source Code on GitHub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Project Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
