import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './GithubIcon';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture Lab', href: '#architecture-lab' },
    { name: 'Linux Lab', href: '#linux-lab' },
    { name: 'Networking', href: '#networking' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'architecture-lab', 'linux-lab', 'networking', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cloud-bg/90 backdrop-blur-md border-b border-cloud-border/70 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#home"
            className="group flex items-center space-x-2.5 text-slate-100 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-aws-orange/50 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cloud-card to-cloud-surface border border-cloud-border flex items-center justify-center group-hover:border-aws-orange/60 group-hover:shadow-[0_0_15px_rgba(255,153,0,0.3)] transition-all">
              <Terminal className="w-5 h-5 text-aws-orange transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold tracking-tight text-sm text-slate-100 group-hover:text-white flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Ready for opportunities"></span>
              </span>
              <span className="text-[10px] font-mono text-cloud-sky tracking-wider uppercase">
                Cloud & Linux Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    isActive
                      ? 'text-aws-orange bg-aws-orange/10 border border-aws-orange/30 shadow-[0_0_10px_rgba(255,153,0,0.15)] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Color Mode Toggle Button */}
            <ThemeToggle />

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-cloud-card/80 border border-cloud-border text-slate-300 hover:text-white hover:border-slate-500 hover:bg-cloud-cardHover transition-all flex items-center gap-1.5 text-xs font-medium"
            >
              <GithubIcon className="w-4 h-4 text-slate-200" />
              <span className="hidden md:inline">GitHub</span>
            </a>

            <button
              onClick={onOpenResume}
              className="relative group overflow-hidden px-3.5 py-2 rounded-lg bg-gradient-to-r from-aws-orange/20 to-amber-500/10 border border-aws-orange/40 text-aws-orange hover:text-white hover:border-aws-orange transition-all duration-300 flex items-center gap-1.5 text-xs font-semibold shadow-sm hover:shadow-[0_0_20px_rgba(255,153,0,0.25)]"
            >
              <FileText className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Header Actions */}
          <div className="flex sm:hidden items-center space-x-2">
            <ThemeToggle />
            
            <button
              onClick={onOpenResume}
              aria-label="Open Resume"
              className="p-2 rounded-lg bg-aws-orange/10 border border-aws-orange/30 text-aws-orange"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-cloud-card border border-cloud-border text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-aws-orange"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-cloud-surface/98 border-b border-cloud-border/90 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-fadeIn">
          {/* Color Mode Switch Row in Mobile Drawer */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-cloud-card border border-cloud-border">
            <span className="text-xs font-mono font-medium text-slate-300">
              Color Theme Mode
            </span>
            <ThemeToggle showLabel />
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-aws-orange/15 text-aws-orange border border-aws-orange/30 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-cloud-border/60 flex items-center justify-between gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-lg bg-cloud-card border border-cloud-border text-slate-200 text-xs font-medium flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 px-3 rounded-lg bg-aws-orange text-black font-semibold text-xs flex items-center justify-center gap-2 shadow-aws-glow"
            >
              <FileText className="w-4 h-4 text-black" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
