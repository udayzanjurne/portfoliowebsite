import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ArchitectureLab } from './components/ArchitectureLab';
import { LinuxLab } from './components/LinuxLab';
import { NetworkingLab } from './components/NetworkingLab';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cloud-bg text-slate-100 flex flex-col font-sans selection:bg-aws-orange/30 selection:text-white">
      {/* Global Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <ArchitectureLab />
        <LinuxLab />
        <NetworkingLab />
        <EducationCertifications />
        <Contact onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
