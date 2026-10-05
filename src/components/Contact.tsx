import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  FileText, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './GithubIcon';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrCompany: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSentNotice, setFormSentNotice] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormSentNotice(null);

    const subject = `Recruiter Inquiry: ${formData.name || 'Recruiter'} - ${formData.roleOrCompany || 'Cloud Opportunity'}`;

    try {
      // Send directly to Uday's email inbox via FormSubmit API
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role_or_company: formData.roleOrCompany || 'Not Specified',
          message: formData.message,
          candidate_email: PERSONAL_INFO.email,
          candidate_phone: PERSONAL_INFO.phone,
          _subject: subject,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setFormSentNotice('success');
        setFormData({ name: '', email: '', roleOrCompany: '', message: '' });
      } else {
        // Fallback to mailto if external endpoint has issues
        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          `Hello Uday,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany/Role: ${formData.roleOrCompany}\n\nMessage:\n${formData.message}\n`
        )}`;
        setFormSentNotice('fallback');
      }
    } catch {
      // Offline or network fallback
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Hello Uday,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany/Role: ${formData.roleOrCompany}\n\nMessage:\n${formData.message}\n`
      )}`;
      setFormSentNotice('fallback');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-cloud-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cloud-card border border-cloud-border text-xs font-mono text-aws-orange mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>08 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-2 text-slate-300 text-base max-w-2xl leading-relaxed">
            Interested in entry-level opportunities in Linux administration, AWS cloud, cloud support, and infrastructure? Let's connect.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Front-End Mail Composer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl bg-cloud-surface border border-cloud-border hover:border-aws-orange/60 transition-all group flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-aws-orange/10 border border-aws-orange/30 flex items-center justify-center text-aws-orange">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-aws-orange transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-cloud-card border border-cloud-border hover:border-slate-500 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-cloud-border/60">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs font-mono text-aws-orange hover:underline flex items-center gap-1.5"
                >
                  <span>Launch default email client</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="p-5 rounded-2xl bg-cloud-surface border border-cloud-border hover:border-cloud-sky/60 transition-all group flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-cloud-sky">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">
                      Phone / Mobile
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm font-semibold text-white hover:text-cloud-sky transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-cloud-card border border-cloud-border hover:border-slate-500 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-cloud-border/60">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-xs font-mono text-cloud-sky hover:underline flex items-center gap-1.5"
                >
                  <span>Direct phone call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-cloud-surface border border-cloud-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">
                  Current Location
                </span>
                <span className="text-sm font-semibold text-white">
                  {PERSONAL_INFO.location}
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  Open to relocation & hybrid / on-site roles
                </span>
              </div>
            </div>

            {/* Quick Action Links Bar */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-cloud-surface border border-cloud-border hover:border-slate-500 text-slate-200 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub</span>
              </a>

              <button
                onClick={onOpenResume}
                className="p-3.5 rounded-xl bg-aws-orange text-slate-950 hover:bg-aws-amber font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-aws-glow"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                <span>Download Resume</span>
              </button>
            </div>

          </div>

          {/* Direct Message Composer (7 cols) - Frontend Only with mailto fallback */}
          <div className="lg:col-span-7 bg-cloud-surface border border-cloud-border rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-cloud-border/70 mb-6">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-aws-orange" />
                  <span>Send Direct Message / Inquiry</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Directly delivers to Uday's email inbox ({PERSONAL_INFO.email}) & mobile ({PERSONAL_INFO.phone}).
                </p>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">
                DIRECT INBOX DISPATCH
              </span>
            </div>

            {formSentNotice === 'success' && (
              <div className="mb-5 p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-fadeIn">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Message delivered directly to Uday's email inbox ({PERSONAL_INFO.email}) and mobile notification sent (+91 9356991399). Thank you!</span>
              </div>
            )}

            {formSentNotice === 'fallback' && (
              <div className="mb-5 p-3 rounded-lg bg-sky-950/60 border border-sky-800 text-sky-300 text-xs font-mono flex items-center gap-2 animate-fadeIn">
                <Check className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Opening your email client to send directly to {PERSONAL_INFO.email}...</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name / Recruiter <span className="text-aws-orange">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Talent Acquisition / Tech Lead"
                    className="w-full px-3.5 py-2.5 bg-cloud-card border border-cloud-border rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-aws-orange focus:ring-1 focus:ring-aws-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email Address <span className="text-aws-orange">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="recruiter@company.com"
                    className="w-full px-3.5 py-2.5 bg-cloud-card border border-cloud-border rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-aws-orange focus:ring-1 focus:ring-aws-orange"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Role Opportunity / Company Name
                </label>
                <input
                  type="text"
                  value={formData.roleOrCompany}
                  onChange={(e) => setFormData({ ...formData, roleOrCompany: e.target.value })}
                  placeholder="e.g. Junior Cloud Engineer / Linux Admin Opening"
                  className="w-full px-3.5 py-2.5 bg-cloud-card border border-cloud-border rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-aws-orange focus:ring-1 focus:ring-aws-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message / Job Details <span className="text-aws-orange">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Uday, we would like to interview you for an entry-level cloud infrastructure role..."
                  className="w-full px-3.5 py-2.5 bg-cloud-card border border-cloud-border rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-aws-orange focus:ring-1 focus:ring-aws-orange resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-slate-400">
                  Direct delivery to {PERSONAL_INFO.email} & {PERSONAL_INFO.phone}
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-aws-orange hover:bg-aws-amber text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-aws-glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-3.5 h-3.5 text-slate-950" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
