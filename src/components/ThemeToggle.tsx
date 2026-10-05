import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '',
  showLabel = false 
}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('uday_portfolio_theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'dark'; // default to cloud dark
    setTheme(initialTheme);

    const root = document.documentElement;
    if (initialTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('uday_portfolio_theme', nextTheme);

    const root = document.documentElement;
    if (nextTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  if (!mounted) {
    return (
      <div className={`w-14 h-8 rounded-full bg-slate-800 border border-slate-700 ${className}`} />
    );
  }

  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={toggleTheme}
        role="switch"
        aria-checked={isDark}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
        className={`relative inline-flex h-8 w-15 items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-aws-orange focus:ring-offset-2 ${
          isDark 
            ? 'bg-slate-800 border border-slate-700/80 hover:border-slate-500' 
            : 'bg-amber-100 border border-amber-300/80 hover:border-amber-400'
        }`}
      >
        {/* Sliding Indicator with Sun/Moon Icon */}
        <span
          className={`pointer-events-none flex h-6 w-6 items-center justify-center rounded-full shadow-md transform transition-all duration-300 ease-in-out ${
            isDark
              ? 'translate-x-7 bg-cloud-card border border-aws-orange/40 text-aws-orange'
              : 'translate-x-0 bg-white border border-amber-400 text-amber-500'
          }`}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Sun className="w-3.5 h-3.5 fill-current" />
          )}
        </span>

        {/* Static Background Icons for visual context */}
        <span className="absolute left-2 flex items-center justify-center text-amber-500 pointer-events-none opacity-80">
          <Sun className="w-3 h-3" />
        </span>
        <span className="absolute right-2 flex items-center justify-center text-sky-400 pointer-events-none opacity-80">
          <Moon className="w-3 h-3" />
        </span>
      </button>

      {showLabel && (
        <span className="text-xs font-mono font-medium text-slate-400 dark:text-slate-300">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </div>
  );
};
