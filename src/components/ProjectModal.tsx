import React from 'react';
import { 
  X, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Network, 
  ArrowRight
} from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './GithubIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getComponentBadge = (type: string) => {
    switch (type) {
      case 'network':
        return <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950/80 text-sky-400 border border-sky-800">Network</span>;
      case 'compute':
        return <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800">Compute</span>;
      case 'database':
        return <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-400 border border-indigo-800">Database</span>;
      case 'storage':
        return <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-800">Storage</span>;
      case 'security':
        return <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/80 text-red-400 border border-red-800">Security</span>;
      default:
        return <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">Component</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-cloud-surface border border-cloud-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cloud-border bg-cloud-card/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-aws-orange/10 text-aws-orange border border-aws-orange/30 font-semibold">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              • Lab Architecture Specification
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
          
          {/* Header info */}
          <div>
            <span className="text-xs font-mono text-cloud-sky uppercase tracking-wider block mb-1">
              {project.subtitle}
            </span>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Interactive Visual Flow Diagram */}
          <div className="rounded-xl bg-cloud-bg border border-cloud-border p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-aws-orange font-semibold flex items-center gap-1.5">
                <Network className="w-3.5 h-3.5" />
                END-TO-END INFRASTRUCTURE PACKET FLOW
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                {project.architectureFlow.length} Flow Stages
              </span>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-start gap-2 pt-2">
              {project.architectureFlow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="w-full sm:w-auto px-3.5 py-2 rounded-lg bg-cloud-card border border-cloud-border text-xs font-mono text-slate-200 flex items-center gap-2 shadow-sm">
                    <span className="w-5 h-5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] text-aws-orange font-bold">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                  {idx < project.architectureFlow.length - 1 && (
                    <div className="text-slate-500 hidden sm:block">
                      <ArrowRight className="w-4 h-4 text-cloud-sky" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Architecture Components Breakdown */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-aws-orange" />
              <span>Architectural Components & Roles</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.architectureDetails.components.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-cloud-card/60 border border-cloud-border/70 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-100 font-mono">
                      {comp.name}
                    </span>
                    {getComponentBadge(comp.type)}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {comp.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Implementation Details */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Key Technical Implementations</span>
            </h3>
            <ul className="space-y-2.5">
              {project.keyImplementations.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="text-aws-orange font-mono font-bold mt-0.5">❯</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security & Hardening Highlights */}
          <div className="p-4 rounded-xl bg-cloud-card/40 border border-cloud-border">
            <h4 className="text-xs font-mono font-bold text-aws-orange flex items-center gap-1.5 mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              SECURITY & ISOLATION HIGHLIGHTS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.architectureDetails.securityHighlights.map((sh, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{sh}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Outcomes */}
          <div>
            <h3 className="text-base font-bold text-white mb-3">
              Key Engineering Takeaways
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.learningOutcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-mono"
                >
                  <span className="text-cloud-sky mr-1.5">✓</span>
                  {outcome}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Technologies Utilized
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-cloud-card border border-cloud-border text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-cloud-border bg-cloud-card/80 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400">
            Status: <span className="text-emerald-400">Verified Lab Architecture</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl || "https://github.com/udayzanjurne"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-2 transition-colors border border-slate-700"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Profile</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-aws-orange text-slate-950 font-semibold text-xs transition-colors hover:bg-aws-amber"
            >
              Close Spec
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
