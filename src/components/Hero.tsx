import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Terminal, 
  ShieldCheck, 
  Cloud, 
  Server, 
  Database, 
  Globe, 
  Layers, 
  Sparkles,
  CheckCircle2,
  Cpu,
  Wifi,
  Info
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './GithubIcon';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const flowNodes = [
    {
      id: 'client',
      label: 'Client User',
      sub: 'HTTPS Request',
      tech: 'Browser / Curl',
      icon: Globe,
      color: 'border-slate-500 text-slate-300',
      badge: 'Public Traffic',
      details: 'Initiates encrypted HTTP/S requests over public internet'
    },
    {
      id: 'igw',
      label: 'Internet Gateway',
      sub: 'VPC Perimeter',
      tech: 'AWS IGW',
      icon: Wifi,
      color: 'border-sky-500 text-sky-400',
      badge: '0.0.0.0/0',
      details: 'Translates and routes internet traffic into the AWS VPC'
    },
    {
      id: 'alb',
      label: 'Application Load Balancer',
      sub: 'Traffic Distribution',
      tech: 'ALB / Port 80, 443',
      icon: Layers,
      color: 'border-aws-orange text-aws-orange',
      badge: 'Public Subnet',
      details: 'Health checks instances and balances requests across targets'
    },
    {
      id: 'ec2',
      label: 'Ubuntu EC2 Instances',
      sub: 'Compute & Web',
      tech: 'Linux + Nginx',
      icon: Server,
      color: 'border-emerald-500 text-emerald-400',
      badge: 'Private Subnet',
      details: 'Executes web workers and services with strict Security Groups'
    },
    {
      id: 'db',
      label: 'Amazon Aurora / RDS',
      sub: 'Database Tier',
      tech: 'MySQL Port 3306',
      icon: Database,
      color: 'border-indigo-500 text-indigo-400',
      badge: 'Isolated Subnet',
      details: 'Secure managed relational database with automated multi-AZ replication'
    }
  ];

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Subtle Mesh & Technical Grid */}
      <div className="absolute inset-0 bg-grid-tech pointer-events-none opacity-40"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-br from-aws-orange/10 via-sky-500/5 to-transparent blur-3xl pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Open for roles pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cloud-card border border-cloud-border shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-semibold text-slate-200 tracking-wide uppercase">
                {PERSONAL_INFO.availabilityStatus}
              </span>
            </div>

            {/* Main Name & Dynamic Role Heading */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cloud-sky">
                <Terminal className="w-3.5 h-3.5 text-aws-orange" />
                <span>root@aws-infra:~# echo $ENGINEER_NAME</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                {PERSONAL_INFO.name}
              </h1>
              
              <div className="h-14 sm:h-16 flex items-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-aws-orange via-amber-400 to-sky-400 bg-clip-text text-transparent transition-all duration-500">
                  {PERSONAL_INFO.roles[roleIndex]}
                </span>
              </div>
            </div>

            {/* Supporting & Bio text based on resume */}
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl">
              {PERSONAL_INFO.tagline}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xl border-l-2 border-cloud-border pl-4">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Quick Badges based on resume */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-aws-orange" /> Ubuntu Linux
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                <Cloud className="w-3 h-3 text-sky-400" /> AWS Core Services
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> VPC & Security Groups
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-amber-400" /> Bash & Python
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-teal-400" /> Nginx • Apache • Vercel
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-aws-orange hover:bg-aws-amber text-slate-950 font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(255,153,0,0.3)] hover:shadow-[0_0_28px_rgba(255,153,0,0.45)] transform hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-lg bg-cloud-card hover:bg-cloud-cardHover border border-cloud-border hover:border-slate-500 text-slate-200 hover:text-white font-medium text-sm transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-aws-orange" />
                <span>Download Resume</span>
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg bg-cloud-card/60 hover:bg-cloud-cardHover border border-cloud-border/70 text-slate-300 hover:text-white font-medium text-sm transition-all flex items-center gap-2"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Location & Status Indicator */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Available for Fresher Opportunities</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{PERSONAL_INFO.location}</span>
            </div>

          </div>

          {/* Right Column: Hero Visual - Interactive Cloud Infrastructure */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-cloud-surface/80 border border-cloud-border p-5 sm:p-6 shadow-2xl backdrop-blur-md overflow-hidden group">
              
              {/* Terminal-like Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-cloud-border/60 mb-5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-[11px] text-slate-400">aws-vpc-architecture.spec</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-aws-orange bg-aws-orange/10 px-2 py-0.5 rounded border border-aws-orange/20">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>ACTIVE TOPOLOGY</span>
                </div>
              </div>

              {/* Technical Labels Bar */}
              <div className="flex flex-wrap items-center gap-1.5 pb-4 mb-4 text-[10px] font-mono text-slate-400 border-b border-cloud-border/40">
                <span className="text-slate-500 font-semibold">STACK:</span>
                <span className="text-aws-orange">AWS</span>
                <span>•</span>
                <span className="text-sky-400">Linux</span>
                <span>•</span>
                <span className="text-slate-300">EC2</span>
                <span>•</span>
                <span className="text-sky-300">VPC</span>
                <span>•</span>
                <span className="text-emerald-400">Nginx</span>
                <span>•</span>
                <span className="text-amber-400">Apache</span>
                <span>•</span>
                <span className="text-teal-400">Vercel</span>
                <span>•</span>
                <span className="text-amber-400">ALB</span>
                <span>•</span>
                <span className="text-indigo-400">RDS</span>
                <span>•</span>
                <span className="text-purple-400">Aurora</span>
              </div>

              {/* Interactive Flow Nodes */}
              <div className="relative space-y-3">
                {flowNodes.map((node, idx) => {
                  const Icon = node.icon;
                  const isHovered = activeNode === node.id;
                  
                  return (
                    <div key={node.id} className="relative">
                      {/* Flow Connector Arrow */}
                      {idx > 0 && (
                        <div className="flex justify-center -my-1 relative z-0">
                          <div className="w-0.5 h-4 bg-gradient-to-b from-cloud-border to-cloud-sky/50 relative overflow-hidden">
                            <div className="w-full h-2 bg-aws-orange animate-pulse"></div>
                          </div>
                        </div>
                      )}

                      {/* Component Node Card */}
                      <button
                        type="button"
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                        onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all duration-200 relative z-10 ${
                          isHovered 
                            ? 'bg-cloud-cardHover border-aws-orange shadow-[0_0_20px_rgba(255,153,0,0.2)] translate-x-1' 
                            : 'bg-cloud-card/70 border-cloud-border hover:border-slate-500'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-slate-900/90 border ${node.color}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-100 flex items-center gap-1.5">
                                {node.label}
                                <span className="text-[10px] font-mono text-slate-400 font-normal">
                                  ({node.tech})
                                </span>
                              </div>
                              <div className="text-[11px] text-slate-400 font-mono">
                                {node.sub}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                              {node.badge}
                            </span>
                            <Info className={`w-3.5 h-3.5 transition-colors ${isHovered ? 'text-aws-orange' : 'text-slate-500'}`} />
                          </div>
                        </div>

                        {/* Expandable Technical Detail on Hover/Click */}
                        {isHovered && (
                          <div className="mt-2.5 pt-2 border-t border-cloud-border/70 text-[11px] text-slate-300 font-sans flex items-start gap-1.5 animate-fadeIn">
                            <span className="text-aws-orange">❯</span>
                            <span>{node.details}</span>
                          </div>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Instruction */}
              <div className="mt-4 pt-3 border-t border-cloud-border/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-aws-orange animate-ping"></span>
                  Hover nodes to inspect cloud role
                </span>
                <a href="#architecture-lab" className="text-cloud-sky hover:text-white underline underline-offset-2">
                  Launch Full Lab →
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
