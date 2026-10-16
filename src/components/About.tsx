import React from 'react';
import { Terminal, Cloud, Network, ShieldCheck, Cpu, Compass, Server, Globe } from 'lucide-react';
import { ABOUT_CARDS } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';

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
    { label: "Web Servers & Reverse Proxies (Nginx & Apache)", icon: Server },
    { label: "Hosting Platforms (AWS, Vercel & Hostinger)", icon: Globe },
    { label: "User, Group & File Permissions (chmod/chown)", icon: ShieldCheck },
    { label: "Process Monitoring & systemd Service Units", icon: Cpu },
    { label: "AWS VPC, EC2, IAM, S3, RDS & Route 53", icon: Cloud },
    { label: "Computer Networking (TCP/IP, Subnetting, CIDR, DNS)", icon: Network },
    { label: "Basic Automation using Python & Bash Shell Scripts", icon: Terminal },
  ];

  return (
    <section id="about" className="py-20 relative bg-cloud-bg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Professional Photo & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Bio & Professional Summary */}
          <div className="lg:col-span-8 flex flex-col items-start order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cloud-card border border-cloud-border text-xs font-mono text-aws-orange mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>01 // PROFESSIONAL SUMMARY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cloud & Infrastructure Enthusiast
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              I am an entry-level cloud and infrastructure candidate with a{' '}
              <strong className="text-white font-semibold">Bachelor of Vocational Software Development</strong> from
              Yashavantrao Chavan Institute of Science, Satara, reinforced by hands-on academic and lab experience.
              My passion lies at the intersection of robust Linux systems, resilient AWS architecture, web server management (Nginx & Apache), and modern cloud deployment platforms (Vercel & Hostinger).
            </p>
            <p className="mt-2.5 text-slate-400 text-sm leading-relaxed">
              Experienced in configuring virtual hosts, reverse proxies, automated deployments, and secure multi-tier cloud environments with strict adherence to security and reliability best practices.
            </p>

            {/* Quick Highlight Pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-cloud-card border border-cloud-border text-slate-300 flex items-center gap-1.5">
                <span className="text-aws-orange">🎓</span> B.Voc Software Development
              </span>
              <span className="px-2.5 py-1 rounded bg-cloud-card border border-cloud-border text-slate-300 flex items-center gap-1.5">
                <span className="text-cloud-sky">📍</span> Satara, Maharashtra
              </span>
              <span className="px-2.5 py-1 rounded bg-cloud-card border border-cloud-border text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Web Servers & Cloud Ready
              </span>
            </div>
          </div>

          {/* Professional Photo Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group w-56 sm:w-64 md:w-72">
              {/* Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-aws-orange/40 via-sky-500/20 to-emerald-400/30 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-cloud-border bg-cloud-surface shadow-2xl transition-all duration-300 group-hover:border-aws-orange/60">
                {/* Technical Window Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-slate-950/80 border-b border-cloud-border/60">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">uday-profile.jpg</span>
                </div>

                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
                  <img
                    src={profilePhoto}
                    alt="Uday Zanjurne - Linux Administrator & AWS Cloud Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none"></div>

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700/80 text-white font-medium text-[11px] shadow-sm">
                      UDAY ZANJURNE
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950/90 border border-emerald-600/60 text-emerald-300 font-semibold text-[10px] flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
