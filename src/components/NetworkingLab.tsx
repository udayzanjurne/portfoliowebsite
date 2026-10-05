import React, { useState } from 'react';
import { 
  Network, 
  Globe, 
  ShieldCheck, 
  Wifi, 
  Server, 
  Radio, 
  Layers,
  Info,
  CheckCircle2
} from 'lucide-react';
import { NETWORKING_CONCEPTS } from '../data/portfolioData';
import type { NetworkingConcept } from '../data/portfolioData';

export const NetworkingLab: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<NetworkingConcept>(NETWORKING_CONCEPTS[0]);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const flowSteps = [
    { label: 'Client', sub: 'Browser / Curl', icon: Globe, detail: 'User device issues a request' },
    { label: 'DNS', sub: 'Port 53 Lookup', icon: Radio, detail: 'Resolves domain to target IPv4 address' },
    { label: 'IP Address', sub: 'Target Destination', icon: Wifi, detail: 'Target public or private IP' },
    { label: 'Router', sub: 'Route Tables', icon: Network, detail: 'Directs packet to next hop' },
    { label: 'Subnet', sub: 'CIDR Block', icon: Layers, detail: 'Delivers to target network boundary' },
    { label: 'Security Group', sub: 'Stateful Firewall', icon: ShieldCheck, detail: 'Validates port and inbound rules' },
    { label: 'Server', sub: 'EC2 / Nginx', icon: Server, detail: 'Listens and serves the request' }
  ];

  return (
    <section id="networking" className="py-20 relative bg-cloud-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cloud-card border border-cloud-border text-xs font-mono text-cloud-sky mb-3">
              <Network className="w-3.5 h-3.5" />
              <span>06 // CORE INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Networking Fundamentals
            </h2>
            <p className="mt-2 text-slate-300 text-sm max-w-2xl leading-relaxed">
              Clear, recruiter-ready explanations of essential network protocols, routing mechanics,
              and security perimeters tested in cloud administration interviews.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-cloud-card px-3 py-2 rounded-lg border border-cloud-border">
            <span>Domain: </span>
            <span className="text-emerald-400 font-semibold">TCP/IP, CIDR & Security</span>
          </div>
        </div>

        {/* Visual End-to-End Packet Lifecycle Interactive Bar */}
        <div className="mb-14 rounded-2xl bg-cloud-surface border border-cloud-border p-6 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-cloud-border/70 mb-5">
            <span className="text-xs font-mono text-aws-orange uppercase tracking-wider font-semibold flex items-center gap-2">
              <Radio className="w-4 h-4" />
              <span>End-to-End Client Request Lifecycle</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Hover steps for protocol details
            </span>
          </div>

          {/* Flow Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {flowSteps.map((step, idx) => {
              const Icon = step.icon;
              const isHovered = activeStep === idx;
              return (
                <div
                  key={step.label}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between ${
                    isHovered
                      ? 'bg-cloud-cardHover border-cloud-sky shadow-[0_0_15px_rgba(56,189,248,0.25)] -translate-y-1'
                      : 'bg-cloud-card/60 border-cloud-border hover:border-slate-500'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4 text-cloud-sky" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {step.label}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                      {step.sub}
                    </div>
                  </div>
                  <div className="text-[9px] font-mono text-aws-orange mt-2">
                    Step {idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active step explanation banner */}
          <div className="mt-4 p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
            <span className="text-cloud-sky">
              {activeStep !== null
                ? `Step ${activeStep + 1} (${flowSteps[activeStep].label}): ${flowSteps[activeStep].detail}`
                : "Hover over any packet lifecycle stage to see its role in cloud transport."}
            </span>
            <span className="text-[11px] text-slate-500 hidden sm:inline">RFC Compliant</span>
          </div>
        </div>

        {/* 2-Column Concept Explorer: Cards Grid (7 cols) & Deep Detail Panel (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Concepts Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {NETWORKING_CONCEPTS.map((concept) => {
              const isSelected = selectedConcept.id === concept.id;
              return (
                <button
                  key={concept.id}
                  onClick={() => setSelectedConcept(concept)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between min-h-[130px] ${
                    isSelected
                      ? 'bg-cloud-cardHover border-aws-orange shadow-[0_0_20px_rgba(255,153,0,0.2)] ring-1 ring-aws-orange'
                      : 'bg-cloud-surface border-cloud-border hover:border-slate-500'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
                        {concept.tag}
                      </span>
                      {concept.port && (
                        <span className="text-[10px] font-mono text-cloud-sky">
                          Port {concept.port}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {concept.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {concept.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Deep Concept Card (5 cols) */}
          <div className="lg:col-span-5 bg-cloud-surface border border-cloud-border rounded-2xl p-6 shadow-xl sticky top-24 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-cloud-border/70">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-cloud-sky" />
                Recruiter Technical Deep Dive
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-aws-orange/10 text-aws-orange border border-aws-orange/30">
                {selectedConcept.tag}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                {selectedConcept.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                {selectedConcept.summary}
              </p>
            </div>

            {/* Cloud Context Application */}
            <div className="p-4 rounded-xl bg-cloud-card/70 border border-cloud-border/70">
              <div className="text-[11px] font-mono font-bold text-aws-orange uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>AWS Cloud & Infrastructure Context</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {selectedConcept.cloudContext}
              </p>
            </div>

            {/* Key Architectural Details */}
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-2">
                Core Architectural Specifics
              </div>
              <ul className="space-y-2">
                {selectedConcept.keyDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                    <span className="text-cloud-sky font-bold font-mono">❯</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-cloud-border/60 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Interview Readiness:</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> High Proficiency
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
