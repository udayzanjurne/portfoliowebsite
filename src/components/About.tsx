import React from 'react';
import { Terminal, Cloud, Network, ShieldCheck, HardDrive, Cpu, Compass } from 'lucide-react';
import { ABOUT_CARDS } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-aws-orange" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-cloud-sky" />;
      case 'Network':
        return <Network className="w-5 h-5 text-emerald-400" />;
      default:
        return <Compass className="w-5 h-5 text-aws-orange" />;
    }
  };

  const coreCompetencies = [
    { label: "Linux Command Line & Filesystem Hierarchy", icon: Terminal },
    { label: "User, Group & File Permissions (chmod/chown)", icon: ShieldCheck },
    { label: "Process Monitoring & systemd Service Units", icon: Cpu },
    { label: "Package Management & journalctl Log Checking", icon: HardDrive },
    { label: "AWS VPC, EC2, IAM, S3, RDS & Route 53 Fundamentals", icon: Cloud },
    { label: "Computer Networking (TCP/IP, Subnetting, CIDR, DNS)", icon: Network },
    { label: "Basic Automation using Python & Bash Shell Scripts", icon: Terminal },
    { label: "Security Groups & Network Perimeter Defense", icon: ShieldCheck },
  ];

  return (
    <section id="about" className="py-20 relative bg-cloud-bg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cloud-card border border-cloud-border text-xs font-mono text-aws-orange mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>01 // PROFESSIONAL SUMMARY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cloud & Infrastructure Enthusiast
          </h2>
          <p className="mt-3 text-slate-300 text-base max-w-3xl leading-relaxed">
            I am an entry-level cloud and infrastructure candidate with a{' '}
            <strong className="text-white font-semibold">Bachelor of Vocational Software Development</strong> from
            Yashavantrao Chavan Institute of Science, Satara, reinforced by hands-on academic and lab experience.
            My passion lies at the intersection of robust Linux systems, resilient AWS architecture, and automated cloud workflows.
          </p>
        </div>

        {/* 3 Core Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ABOUT_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-cloud-surface border border-cloud-border p-6 hover:border-slate-500 hover:shadow-card-glow transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-cloud-card border border-cloud-border group-hover:scale-110 transition-transform">
                    {getIcon(card.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-cloud-card px-2.5 py-1 rounded border border-cloud-border/60">
                    {card.subtitle}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-cloud-border/60">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights Checklist Box */}
        <div className="rounded-2xl bg-cloud-surface/90 border border-cloud-border p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-cloud-border/80 gap-3 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Hands-On Competencies & Core Foundations</span>
                <span className="text-xs font-mono font-normal text-cloud-sky px-2 py-0.5 rounded bg-cloud-sky/10 border border-cloud-sky/20">
                  VERIFIED BY ACADEMIC LABS
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Rigorous fundamentals demonstrated through hands-on configuration, scripting, and cloud provisioning.
              </p>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Target: <span className="text-aws-orange font-semibold">Linux & Cloud Support Roles</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreCompetencies.map((comp) => {
              const CompIcon = comp.icon;
              return (
                <div
                  key={comp.label}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-cloud-card/60 border border-cloud-border/60 hover:border-slate-600 transition-colors"
                >
                  <CompIcon className="w-4 h-4 text-aws-orange shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-200 leading-snug">
                    {comp.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
