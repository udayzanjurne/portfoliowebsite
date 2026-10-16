import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  FileText
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  SKILL_CATEGORIES, 
  PROJECTS, 
  EDUCATION_LIST, 
  CERTIFICATIONS_LIST,
  STRENGTHS_LIST 
} from '../data/portfolioData';
import { GithubIcon } from './GithubIcon';
import profilePhoto from '../assets/profile.jpg';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTextResume = () => {
    const textResume = `
==================================================
${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
==================================================
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.positioning}
${PERSONAL_INFO.shortBio}

EDUCATION:
- Bachelor of Vocational Software Development
  Yashavantrao Chavan Institute of Science, Satara
  Third Year: 8.67 CGPA | Second Year: 8.74 CGPA | First Year: 8.64 CGPA
- HSC – Science | M. K. Mane Junior College, Deur | 58.80%
- SSC | Saraswati Vidyalaya, Koregaon | 81.00%

CERTIFICATIONS & TRAINING:
- AWS Cloud Practitioner Essentials - AWS Skill Builder
- Diploma in Cloud Computing - Yashavantrao Chavan Institute of Science, Satara

TECHNICAL SKILLS:
- Linux Administration: Ubuntu Linux, CLI, Filesystem, Users & Groups, Permissions, Processes, systemd, journalctl, SSH, cron, Package Management, Log Troubleshooting
- AWS Cloud: EC2, VPC, IAM, S3, EBS, RDS, Route 53, Amplify, EKS, CloudWatch, Elastic Load Balancing, Auto Scaling, Lambda, CloudFront
- Networking: OSI / TCP-IP, IPv4 / IPv6 Basics, Subnetting, CIDR, DNS, DHCP, HTTP / HTTPS, SSH, Ports, Routing, NAT, VPN Basics, Security Groups
- Scripting: Python, Bash, Linux Shell Commands, Basic Automation
- Databases: MySQL, Amazon DynamoDB, DBMS, Database Fundamentals
- Tools: Git, GitHub, VS Code, AWS Management Console, VirtualBox
- Web Servers & Hosting: Nginx, Apache HTTP Server, Vercel, Hostinger, HTML, CSS

PROJECTS:
1. AWS EC2 Web Application (Linux & AWS Deployment)
   - Built a responsive web application using HTML, CSS, and JavaScript with interactive button and health-check page.
   - Deployed on Ubuntu Linux EC2 using Nginx, configured systemd services, SSH access, file permissions, AWS Security Groups (Port 22, 80, 443), and GitHub version control.

2. Highly Available VPC on AWS (Linux & AWS Deployment)
   - Designed a highly available AWS VPC architecture across two Availability Zones with public and private subnets.
   - Components: VPC, Two AZs, Public/Private Subnets, ALB, EC2, Auto Scaling Group, Security Groups, Internet Gateway, NAT Gateways, S3 VPC Gateway Endpoint.

3. AWS 3-Tier Web Application (Linux & AWS Deployment)
   - Designed a 3-tier architecture: User -> ALB -> Web Tier (EC2 + Nginx) -> App Tier (EC2) -> DB Tier (Amazon Aurora MySQL).
   - Enforced strict layered Security Groups across Multi-AZ subnets.

STRENGTHS:
Linux Troubleshooting, Cloud Fundamentals, Networking Fundamentals, Problem Solving, Basic Scripting, Fast Learning, Communication, Teamwork, Leadership.
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn print:p-0 print:bg-white">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-resume-title"
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <FileText className="w-4 h-4 text-aws-orange" />
            <span className="font-bold text-white uppercase tracking-wider">
              Official Resume Document
            </span>
            <span className="text-slate-500 hidden sm:inline">• ATS-Friendly Format</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyTextResume}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 border border-slate-700 transition-colors"
              title="Copy plain text for job applications"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-aws-orange text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-aws-amber transition-colors shadow-aws-glow"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6 text-slate-200 font-sans custom-scrollbar print:p-6 print:text-black print:overflow-visible">
          
          {/* Header */}
          <div className="border-b border-slate-700/80 pb-6 print:border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 id="modal-resume-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono text-aws-orange font-semibold mt-1 print:text-black">
                {PERSONAL_INFO.title}
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3 text-xs font-mono text-slate-300 print:text-black">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 print:hidden" />
                  {PERSONAL_INFO.location}
                </span>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:underline">
                  <Mail className="w-3.5 h-3.5 text-slate-400 print:hidden" />
                  {PERSONAL_INFO.email}
                </a>
                <span>•</span>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1.5 hover:underline">
                  <Phone className="w-3.5 h-3.5 text-slate-400 print:hidden" />
                  {PERSONAL_INFO.phone}
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:underline">
                  <GithubIcon className="w-3.5 h-3.5 text-slate-400 print:hidden" />
                  github.com/udayzanjurne
                </a>
              </div>
            </div>

            <div className="shrink-0 hidden sm:block print:hidden">
              <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border-2 border-slate-700 shadow-md">
                <img
                  src={profilePhoto}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold text-aws-orange uppercase tracking-wider mb-2 print:text-black border-b border-slate-800 pb-1 print:border-black">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed print:text-black">
              {PERSONAL_INFO.positioning} {PERSONAL_INFO.shortBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold text-aws-orange uppercase tracking-wider mb-3 print:text-black border-b border-slate-800 pb-1 print:border-black">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white print:text-black">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-[11px] text-slate-400 print:text-black font-normal">{edu.institution}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-1 font-mono text-[11px] text-slate-300 print:text-black">
                    {edu.academicHighlights.map((hl, hIdx) => (
                      <span key={hIdx} className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60 print:border-black print:bg-transparent">
                        {hl.label}: <strong>{hl.score}</strong>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Formal Training */}
          <div>
            <h2 className="text-xs font-mono font-bold text-aws-orange uppercase tracking-wider mb-2 print:text-black border-b border-slate-800 pb-1 print:border-black">
              Certifications & Training
            </h2>
            <div className="space-y-2 text-xs">
              {CERTIFICATIONS_LIST.map((cert, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-semibold text-white print:text-black">
                    • {cert.name}
                  </span>
                  <span className="font-mono text-slate-400 print:text-black text-[11px]">
                    {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold text-aws-orange uppercase tracking-wider mb-3 print:text-black border-b border-slate-800 pb-1 print:border-black">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="leading-relaxed">
                  <strong className="text-white print:text-black font-mono">{cat.name}: </strong>
                  <span className="text-slate-300 print:text-black">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold text-aws-orange uppercase tracking-wider mb-3 print:text-black border-b border-slate-800 pb-1 print:border-black">
              Key Cloud & Linux Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white print:text-black">
                    <span>{proj.title}</span>
                    <span className="font-mono text-[11px] text-slate-400 print:text-black font-normal">{proj.subtitle}</span>
                  </div>
                  <p className="text-slate-300 print:text-black leading-relaxed">
                    {proj.summary}
                  </p>
                  <div className="font-mono text-[11px] text-slate-400 print:text-black">
                    <strong>Tech:</strong> {proj.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div>
            <h2 className="text-xs font-mono font-bold text-aws-orange uppercase tracking-wider mb-2 print:text-black border-b border-slate-800 pb-1 print:border-black">
              Strengths
            </h2>
            <p className="text-xs text-slate-300 print:text-black leading-relaxed font-mono">
              {STRENGTHS_LIST.map((s) => s.title).join(' • ')}
            </p>
          </div>

        </div>

        {/* Modal Footer Controls (Hidden when printing) */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between print:hidden">
          <div className="text-xs font-mono text-slate-400">
            Source: <span className="text-white">Strict Resume Grounding</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-aws-orange hover:bg-aws-amber text-slate-950 font-bold text-xs transition-colors shadow-aws-glow flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
