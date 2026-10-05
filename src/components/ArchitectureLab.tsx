import React, { useState } from 'react';
import { 
  Network, 
  Layers, 
  Globe, 
  Shield, 
  Wifi, 
  ArrowRightLeft, 
  GitMerge, 
  Cpu, 
  TrendingUp, 
  HardDrive, 
  Database, 
  Lock,
  Play,
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';
import { ARCHITECTURE_LAB_COMPONENTS } from '../data/portfolioData';

export const ArchitectureLab: React.FC = () => {
  const [selectedComponentId, setSelectedComponentId] = useState<string>('alb');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [isTracingPacket, setIsTracingPacket] = useState<boolean>(false);
  const [packetStep, setPacketStep] = useState<number>(0);

  const selectedComponent = ARCHITECTURE_LAB_COMPONENTS.find(
    (c) => c.id === selectedComponentId
  ) || ARCHITECTURE_LAB_COMPONENTS[0];

  const getComponentIcon = (iconName: string, className: string = "w-5 h-5") => {
    switch (iconName) {
      case 'Network':
        return <Network className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'Globe':
        return <Globe className={className} />;
      case 'Shield':
        return <Shield className={className} />;
      case 'Wifi':
        return <Wifi className={className} />;
      case 'ArrowRightLeft':
        return <ArrowRightLeft className={className} />;
      case 'GitMerge':
        return <GitMerge className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'HardDrive':
        return <HardDrive className={className} />;
      case 'Database':
        return <Database className={className} />;
      case 'Lock':
        return <Lock className={className} />;
      default:
        return <Network className={className} />;
    }
  };

  const handleTracePacket = () => {
    if (isTracingPacket) return;
    setIsTracingPacket(true);
    setPacketStep(1);

    const steps = ['igw', 'alb', 'ec2', 'aurora', 's3'];
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      if (current < steps.length) {
        setPacketStep(current + 1);
        setSelectedComponentId(steps[current]);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsTracingPacket(false);
          setPacketStep(0);
        }, 1500);
      }
    }, 1100);
  };

  const categories = ['All', 'Network', 'Compute', 'Storage', 'Database', 'Security'];

  const filteredComponents = filterCategory === 'All'
    ? ARCHITECTURE_LAB_COMPONENTS
    : ARCHITECTURE_LAB_COMPONENTS.filter(c => c.category === filterCategory);

  return (
    <section id="architecture-lab" className="py-20 relative bg-cloud-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cloud-card border border-cloud-border text-xs font-mono text-aws-orange mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>04 // SIGNATURE FEATURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cloud Architecture Lab
            </h2>
            <p className="mt-2 text-slate-300 text-sm max-w-2xl leading-relaxed">
              Explore an interactive multi-tier AWS reference architecture. Click any cloud component
              to inspect its operational role, necessity in high availability, and placement in the network.
            </p>
          </div>

          {/* Interactive Simulation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleTracePacket}
              disabled={isTracingPacket}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-2 transition-all ${
                isTracingPacket
                  ? 'bg-aws-orange/20 text-aws-orange border border-aws-orange animate-pulse cursor-not-allowed'
                  : 'bg-aws-orange text-slate-950 hover:bg-aws-amber shadow-aws-glow'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isTracingPacket ? `Tracing Step ${packetStep}/5...` : 'Simulate Packet Trace'}</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                filterCategory === cat
                  ? 'bg-slate-800 text-white border border-slate-600'
                  : 'bg-cloud-card text-slate-400 hover:text-white border border-cloud-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lab Interactive Layout: Schematic (Left) & Inspector (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Schematic Diagram Grid (7 cols) */}
          <div className="lg:col-span-7 bg-cloud-surface border border-cloud-border rounded-2xl p-6 relative overflow-hidden">
            
            {/* VPC Outer Border Label */}
            <div className="flex items-center justify-between pb-4 border-b border-cloud-border/70 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs text-cloud-sky">
                <Network className="w-4 h-4 text-aws-orange" />
                <span>AWS Region: ap-south-1 (Mumbai) • VPC: 10.0.0.0/16</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">
                Multi-AZ Topology
              </span>
            </div>

            {/* Architecture Interactive Nodes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {filteredComponents.map((comp) => {
                const isSelected = selectedComponentId === comp.id;
                return (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedComponentId(comp.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 relative group flex flex-col justify-between min-h-[110px] ${
                      isSelected
                        ? 'bg-cloud-cardHover border-aws-orange shadow-[0_0_20px_rgba(255,153,0,0.25)] ring-1 ring-aws-orange'
                        : 'bg-cloud-card/70 border-cloud-border hover:border-slate-500 hover:bg-cloud-card'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg ${
                          isSelected ? 'bg-aws-orange/20 text-aws-orange' : 'bg-slate-900 text-slate-300 group-hover:text-white'
                        }`}>
                          {getComponentIcon(comp.icon, "w-4 h-4")}
                        </div>
                        <span className="text-[9px] font-mono uppercase text-slate-400">
                          {comp.category}
                        </span>
                      </div>

                      <div className="text-xs font-bold text-slate-100 group-hover:text-white">
                        {comp.name}
                      </div>
                    </div>

                    <div className="mt-2 text-[10px] font-mono text-slate-400 truncate">
                      {comp.awsService}
                    </div>

                    {isSelected && (
                      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-aws-orange animate-ping"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mini Legend */}
            <div className="mt-6 pt-4 border-t border-cloud-border/60 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-aws-orange/40 border border-aws-orange"></span>
                <span>Active Component</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-sky-900/60 border border-sky-700"></span>
                <span>Network Boundary</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-emerald-900/60 border border-emerald-700"></span>
                <span>Compute Layer</span>
              </span>
            </div>
          </div>

          {/* Component Deep Inspector Panel (5 cols) */}
          <div className="lg:col-span-5 bg-cloud-surface border border-cloud-border rounded-2xl p-6 sticky top-24 shadow-xl">
            
            {/* Inspector Top Label */}
            <div className="flex items-center justify-between pb-4 border-b border-cloud-border/80 mb-5">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-cloud-sky" />
                Component Inspector
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-aws-orange/10 text-aws-orange border border-aws-orange/20 font-semibold">
                {selectedComponent.category}
              </span>
            </div>

            {/* Title & Service */}
            <div className="flex items-start gap-3.5 mb-5">
              <div className="p-3 rounded-xl bg-aws-orange/10 border border-aws-orange/30 text-aws-orange">
                {getComponentIcon(selectedComponent.icon, "w-6 h-6")}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {selectedComponent.name}
                </h3>
                <p className="text-xs font-mono text-cloud-sky mt-0.5">
                  AWS Service: {selectedComponent.awsService}
                </p>
              </div>
            </div>

            {/* 3 Core Architectural Questions */}
            <div className="space-y-4 text-xs">
              
              {/* What It Does */}
              <div className="p-3.5 rounded-xl bg-cloud-card/60 border border-cloud-border/60">
                <div className="font-mono font-bold text-aws-orange uppercase tracking-wider text-[10px] mb-1">
                  1. What It Does
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {selectedComponent.whatItDoes}
                </p>
              </div>

              {/* Why It Is Used */}
              <div className="p-3.5 rounded-xl bg-cloud-card/60 border border-cloud-border/60">
                <div className="font-mono font-bold text-cloud-sky uppercase tracking-wider text-[10px] mb-1">
                  2. Why It Is Used
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {selectedComponent.whyUsed}
                </p>
              </div>

              {/* Where It Fits */}
              <div className="p-3.5 rounded-xl bg-cloud-card/60 border border-cloud-border/60">
                <div className="font-mono font-bold text-emerald-400 uppercase tracking-wider text-[10px] mb-1">
                  3. Where It Fits in Architecture
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {selectedComponent.whereItFits}
                </p>
              </div>

            </div>

            {/* Practical Cloud Engineer Note */}
            <div className="mt-5 pt-4 border-t border-cloud-border/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>AWS Standard Pattern</span>
              </span>
              <span className="text-slate-400">Strictly Technical</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
