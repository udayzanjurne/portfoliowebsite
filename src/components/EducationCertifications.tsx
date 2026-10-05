import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Building2, 
  CheckCircle2, 
  ShieldCheck,
  Star
} from 'lucide-react';
import { EDUCATION_LIST, CERTIFICATIONS_LIST, STRENGTHS_LIST } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-cloud-bg/85">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cloud-card border border-cloud-border text-xs font-mono text-aws-orange mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>07 // ACADEMICS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Certifications & Strengths
          </h2>
          <p className="mt-2 text-slate-300 text-sm max-w-2xl leading-relaxed">
            Academic achievements, verified foundational cloud training, and professional strengths
            derived exclusively from my verified resume.
          </p>
        </div>

        {/* 2-Column: Education Timeline (Left) & Certifications (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Education Timeline (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-aws-orange" />
              <span>Academic Timeline</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-cloud-border space-y-10">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-aws-orange group-hover:scale-125 transition-transform flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-aws-orange"></div>
                  </div>

                  <div className="p-5 sm:p-6 rounded-2xl bg-cloud-surface border border-cloud-border group-hover:border-slate-500 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-aws-orange transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-cloud-sky">
                        {edu.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium mb-4">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.institution}</span>
                    </div>

                    {/* Academic Performance Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {edu.academicHighlights.map((hl, hIdx) => (
                        <div
                          key={hIdx}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-750 flex items-center gap-2 font-mono text-xs"
                        >
                          <span className="text-slate-400">{hl.label}:</span>
                          <span className="text-aws-orange font-bold">{hl.score}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Formal Training (5 cols) */}
          <div id="certifications" className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <Award className="w-5 h-5 text-cloud-sky" />
              <span>Certifications & Training</span>
            </h3>

            <div className="space-y-5">
              {CERTIFICATIONS_LIST.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-cloud-surface border border-cloud-border hover:border-slate-500 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-900 text-cloud-sky border border-slate-750 uppercase">
                      {cert.category}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Completed
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-aws-orange transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    Issued by: <strong className="text-slate-200">{cert.issuer}</strong>
                  </p>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Topics Covered */}
                  <div className="mt-4 pt-3 border-t border-cloud-border/60">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                      Core Syllabus Focus
                    </span>
                    <div className="space-y-1.5">
                      {cert.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                          <span className="text-aws-orange">•</span>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note on verified authenticity */}
            <div className="p-4 rounded-xl bg-cloud-card/40 border border-cloud-border text-[11px] text-slate-400 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Genuine credentials from the resume source. No fictitious registration IDs, simulated licenses, or unauthorized logos added.
              </span>
            </div>
          </div>

        </div>

        {/* Strengths Section */}
        <div className="pt-10 border-t border-cloud-border/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-aws-orange uppercase tracking-wider block mb-1">
              Core Competencies
            </span>
            <h3 className="text-2xl font-bold text-white">
              Professional Strengths & Aptitudes
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              Key technical and collaborative strengths demonstrated throughout academic projects and cloud laboratories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STRENGTHS_LIST.map((str, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-cloud-surface border border-cloud-border hover:border-slate-500 hover:shadow-card-glow transition-all flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-cloud-card border border-cloud-border flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-aws-orange" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {str.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {str.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
