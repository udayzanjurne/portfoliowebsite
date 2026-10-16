import React, { useState } from 'react';
import { 
  Terminal as TerminalIcon, 
  RotateCcw, 
  Check, 
  Copy, 
  Info,
  Server,
  ShieldCheck
} from 'lucide-react';
import { LINUX_COMMANDS } from '../data/portfolioData';
import type { LinuxCommand } from '../data/portfolioData';

export const LinuxLab: React.FC = () => {
  const [selectedCommand, setSelectedCommand] = useState<LinuxCommand>(LINUX_COMMANDS[3]); // default systemctl status nginx
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string; timestamp: string }>>([
    {
      command: 'systemctl status nginx',
      output: LINUX_COMMANDS[3].simulatedOutput,
      timestamp: '14:20:01'
    }
  ]);
  const [inputVal, setInputVal] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleSelectCommand = (cmd: LinuxCommand) => {
    setSelectedCommand(cmd);
    const fullCmd = cmd.args ? `${cmd.command} ${cmd.args}` : cmd.command;
    
    // Append to terminal history
    setTerminalHistory((prev) => [
      ...prev.slice(-4), // keep last 5
      {
        command: fullCmd,
        output: cmd.simulatedOutput,
        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false })
      }
    ]);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setTerminalHistory([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'help') {
      setTerminalHistory((prev) => [
        ...prev,
        {
          command: 'help',
          output: 'Available simulated commands: whoami, pwd, ls -la, systemctl status nginx, systemctl status apache2, journalctl, df -h, free -h, ps aux, ssh, chmod, chown, clear',
          timestamp: new Date().toLocaleTimeString('en-US', { hour12: false })
        }
      ]);
      setInputVal('');
      return;
    }

    // Match existing command
    const matched = LINUX_COMMANDS.find(
      (c) =>
        trimmed.startsWith(c.command) ||
        (c.args && trimmed.includes(c.command))
    );

    if (matched) {
      handleSelectCommand(matched);
    } else {
      setTerminalHistory((prev) => [
        ...prev,
        {
          command: trimmed,
          output: `bash: ${trimmed}: command simulated in lab. Try: whoami, ls -la, systemctl status nginx, df -h, free -h, ps aux, help`,
          timestamp: new Date().toLocaleTimeString('en-US', { hour12: false })
        }
      ]);
    }

    setInputVal('');
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="linux-lab" className="py-20 relative bg-cloud-bg/85">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cloud-card border border-cloud-border text-xs font-mono text-aws-orange mb-3">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>05 // INTERACTIVE TERMINAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Linux Administration Lab
            </h2>
            <p className="mt-2 text-slate-300 text-sm max-w-2xl leading-relaxed">
              Experience an interactive Ubuntu server terminal simulation. Click any sysadmin command
              or enter commands directly to inspect realistic system diagnostic outputs and troubleshooting scenarios.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-cloud-card px-3 py-2 rounded-lg border border-cloud-border">
            <Server className="w-3.5 h-3.5 text-emerald-400" />
            <span>Target Host: <strong className="text-white">ubuntu@ip-10-0-1-50</strong></span>
          </div>
        </div>

        {/* Command Quick Picker Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          <span className="text-xs font-mono text-slate-500 whitespace-nowrap pl-1">
            Quick Commands:
          </span>
          {LINUX_COMMANDS.map((cmd) => {
            const isSelected = selectedCommand.command === cmd.command;
            return (
              <button
                key={cmd.command}
                onClick={() => handleSelectCommand(cmd)}
                className={`px-3 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-aws-orange text-slate-950 font-bold shadow-sm'
                    : 'bg-cloud-card text-slate-300 hover:text-white border border-cloud-border hover:border-slate-500'
                }`}
              >
                <span>${cmd.command}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Dashboard: Terminal Interface (Left 7 cols) & Command Analysis (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Terminal Box (7 cols) */}
          <div className="lg:col-span-7 bg-[#0b0f19] border border-cloud-border rounded-2xl overflow-hidden shadow-2xl flex flex-col min-h-[460px]">
            
            {/* Terminal Window Header Bar */}
            <div className="bg-[#121826] px-4 py-3 border-b border-cloud-border/70 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="font-mono text-xs text-slate-400 ml-2">
                  bash — uday@cloud-instance:~ (x86_64)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTerminalHistory([])}
                  className="text-[11px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded hover:bg-slate-800 transition-colors flex items-center gap-1"
                  title="Clear terminal window"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>clear</span>
                </button>
                <button
                  onClick={() => handleCopy(selectedCommand.simulatedOutput)}
                  className="text-[11px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded hover:bg-slate-800 transition-colors flex items-center gap-1"
                  title="Copy output"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'copied' : 'copy'}</span>
                </button>
              </div>
            </div>

            {/* Terminal Output Body */}
            <div className="p-4 sm:p-5 font-mono text-xs text-slate-200 flex-1 overflow-y-auto space-y-4 max-h-[380px] custom-scrollbar">
              <div className="text-slate-500 text-[11px] pb-2 border-b border-slate-800/80">
                # Linux Administration Laboratory Shell Simulation [Safe Sandbox Mode]
                <br />
                # Type 'help' for command directory, or click command pills above.
              </div>

              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1.5 animate-fadeIn">
                  {/* Prompt Line */}
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="text-sky-400">uday@ip-10-0-1-50</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-aws-orange">~</span>
                    <span className="text-slate-400">$</span>
                    <span className="text-white font-semibold">{item.command}</span>
                    <span className="text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
                  </div>
                  {/* Command Output */}
                  <pre className="text-slate-300 text-[11px] whitespace-pre-wrap leading-relaxed pl-3 border-l-2 border-slate-700/60 font-mono bg-slate-950/40 p-2 rounded">
                    {item.output}
                  </pre>
                </div>
              ))}

              {/* Interactive prompt input */}
              <form onSubmit={handleFormSubmit} className="flex items-center gap-2 pt-2">
                <span className="text-sky-400">uday@ip-10-0-1-50</span>
                <span className="text-slate-500">:</span>
                <span className="text-aws-orange">~</span>
                <span className="text-slate-400">$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type command (e.g. df -h, free -h, whoami)..."
                  className="flex-1 bg-transparent border-none text-white focus:outline-none font-mono text-xs"
                />
                <button
                  type="submit"
                  className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 hover:text-white"
                >
                  Run
                </button>
              </form>
            </div>

            {/* Terminal Footer Info */}
            <div className="px-4 py-2 bg-[#090d15] border-t border-cloud-border/50 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>SIMULATION ONLY • NO LIVE HOST EXECUTION</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                TTY1 ONLINE
              </span>
            </div>

          </div>

          {/* SysAdmin Command Analysis Card (Right 5 cols) */}
          <div className="lg:col-span-5 bg-cloud-surface border border-cloud-border rounded-2xl p-6 shadow-xl space-y-5">
            
            {/* Command Header */}
            <div className="flex items-center justify-between pb-3 border-b border-cloud-border/70">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-aws-orange" />
                SysAdmin Deep Dive
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 uppercase">
                {selectedCommand.category}
              </span>
            </div>

            {/* Command Name & Syntax */}
            <div>
              <div className="font-mono text-xl font-bold text-white flex items-center gap-2">
                <span className="text-aws-orange">$</span>
                <span>{selectedCommand.command} {selectedCommand.args}</span>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                {selectedCommand.purpose}
              </p>
            </div>

            {/* Example Usage */}
            <div className="p-3.5 rounded-xl bg-cloud-card/60 border border-cloud-border/60">
              <div className="text-[10px] font-mono uppercase text-cloud-sky tracking-wider font-bold mb-1.5 flex items-center gap-1.5">
                <span>Example Usage Syntax</span>
              </div>
              <code className="text-xs font-mono text-white bg-slate-900 px-2 py-1 rounded block border border-slate-800">
                {selectedCommand.exampleUsage}
              </code>
            </div>

            {/* Real-World SysAdmin Scenario */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80">
              <div className="text-[11px] font-mono font-bold text-aws-orange uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Real-World Cloud & SysAdmin Scenario</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {selectedCommand.sysadminScenario}
              </p>
            </div>

            {/* Key takeaway */}
            <div className="pt-2 border-t border-cloud-border/60 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Operating System:</span>
              <span className="text-slate-200">Ubuntu 22.04 LTS (Jammy)</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
