import React from 'react';
import { Terminal, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './GithubIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070d] border-t border-cloud-border/70 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-cloud-border/50">
          
          {/* Brand & Title */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cloud-card border border-cloud-border flex items-center justify-center">
                <Terminal className="w-4 h-4 text-aws-orange" />
              </div>
              <span className="font-mono font-bold text-white text-base tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono text-cloud-sky">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-0.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{PERSONAL_INFO.location}</span>
            </p>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs font-mono text-slate-400 hover:text-aws-orange flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="text-xs font-mono text-slate-400 hover:text-cloud-sky flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-cloud-card border border-cloud-border hover:border-slate-500 text-slate-400 hover:text-white transition-all text-xs flex items-center gap-1.5 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-aws-orange" />
              <span className="text-[11px] font-mono hidden sm:inline">Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div>
            © 2026 Uday Zanjurne. All rights reserved.
          </div>
          <div className="text-slate-300">
            Built with curiosity, Linux & AWS.
          </div>
        </div>

      </div>
    </footer>
  );
};
