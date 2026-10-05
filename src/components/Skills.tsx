import React, { useState, useMemo } from 'react';
import { 
  Terminal, 
  Cloud, 
  Network, 
  Code2, 
  Database, 
  Wrench, 
  Globe, 
  Search, 
  Layers,
  Check
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkillHover, setActiveSkillHover] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-aws-orange" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-cloud-sky" />;
      case 'Network':
        return <Network className="w-4 h-4 text-emerald-400" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-amber-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-indigo-400" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-purple-400" />;
      case 'Globe':
        return <Globe className="w-4 h-4 text-teal-400" />;
      default:
        return <Layers className="w-4 h-4 text-slate-300" />;
    }
  };

  const filteredCategories = useMemo(() => {
    let categories = SKILL_CATEGORIES;

    if (selectedCategory !== 'all') {
      categories = categories.filter((cat) => cat.id === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      categories = categories
        .map((cat) => ({
          ...cat,
          skills: cat.skills.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              s.tag.toLowerCase().includes(q) ||
              s.description.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.skills.length > 0);
    }

    return categories;
  }, [selectedCategory, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="skills" className="py-20 relative bg-cloud-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cloud-card border border-cloud-border text-xs font-mono text-cloud-sky mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>02 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Categorized Technical Skills
            </h2>
            <p className="mt-2 text-slate-300 text-sm max-w-2xl">
              Strictly grounded in my hands-on academic training, lab deployments, and Linux/AWS coursework.
              No artificial percentage bars—only real technical proficiencies.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. systemd, VPC, SSH)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-cloud-card border border-cloud-border rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-aws-orange focus:ring-1 focus:ring-aws-orange"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedCategory === 'all'
                ? 'bg-aws-orange text-slate-950 font-semibold shadow-sm'
                : 'bg-cloud-card text-slate-300 hover:text-white border border-cloud-border'
            }`}
          >
            <span>All Categories</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/20">
              {totalSkillsCount}
            </span>
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-aws-orange text-slate-950 font-semibold shadow-sm'
                    : 'bg-cloud-card text-slate-300 hover:text-white border border-cloud-border hover:border-slate-500'
                }`}
              >
                {getCategoryIcon(cat.iconName)}
                <span>{cat.name}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-900 border border-slate-700 text-slate-300">
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl bg-cloud-surface border border-cloud-border p-5 hover:border-slate-500 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b border-cloud-border/70 mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-cloud-card border border-cloud-border">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        {category.skills.length} skills listed
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isHovered = activeSkillHover === skill.name;
                    return (
                      <div
                        key={skill.name}
                        className="relative group"
                        onMouseEnter={() => setActiveSkillHover(skill.name)}
                        onMouseLeave={() => setActiveSkillHover(null)}
                      >
                        <div
                          className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                            isHovered
                              ? 'bg-cloud-cardHover border-aws-orange text-white shadow-[0_0_12px_rgba(255,153,0,0.25)]'
                              : 'bg-cloud-card/80 border-cloud-border text-slate-200 hover:border-slate-500'
                          }`}
                        >
                          <span>{skill.name}</span>
                          <span className="text-[9px] text-cloud-sky px-1 rounded bg-slate-900 border border-slate-700 font-sans">
                            {skill.tag}
                          </span>
                        </div>

                        {/* Tooltip Description */}
                        {isHovered && (
                          <div className="absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2.5 rounded-lg bg-slate-950 border border-cloud-border text-slate-200 text-[11px] font-sans shadow-xl backdrop-blur-md pointer-events-none animate-fadeIn">
                            <div className="font-semibold text-aws-orange font-mono text-[10px] mb-1">
                              {skill.name} • {skill.tag}
                            </div>
                            <div className="text-slate-300 leading-snug">
                              {skill.description}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer Status */}
              <div className="mt-4 pt-3 border-t border-cloud-border/50 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>VERIFIED LAB COMPETENCY</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> READY
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-cloud-card/40 rounded-xl border border-cloud-border">
            <Search className="w-8 h-8 text-slate-500 mx-auto mb-2" />
            <p className="text-slate-300 text-sm font-medium">No matching skills found</p>
            <p className="text-slate-500 text-xs mt-1">Try searching for "Ubuntu", "VPC", "Port", or "Nginx"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-3 py-1.5 rounded-lg bg-aws-orange text-slate-950 text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
