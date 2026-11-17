import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Atom, 
  FileCode, 
  Database, 
  Terminal, 
  GitBranch, 
  ShieldAlert, 
  BrainCircuit, 
  Glasses, 
  Layout, 
  Layers, 
  Film, 
  Sparkles,
  Cpu
} from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  // Helper to map skill to an appropriate icon
  const getSkillIcon = (name) => {
    switch (name) {
      case 'React.js': return <Atom size={26} className="text-neutral-900 group-hover:text-cyan-600 transition-colors" />;
      case 'JavaScript': return <FileCode size={26} className="text-neutral-900 group-hover:text-amber-500 transition-colors" />;
      case 'HTML5 / CSS3': return <Layout size={26} className="text-neutral-900 group-hover:text-orange-500 transition-colors" />;
      case 'Tailwind CSS': return <Sparkles size={26} className="text-neutral-900 group-hover:text-teal-500 transition-colors" />;
      case 'Node.js': return <Cpu size={26} className="text-neutral-900 group-hover:text-emerald-600 transition-colors" />;
      case 'Express.js': return <Terminal size={26} className="text-neutral-900 transition-colors" />;
      case 'MySQL': return <Database size={26} className="text-neutral-900 group-hover:text-blue-600 transition-colors" />;
      case 'Python': return <Terminal size={26} className="text-neutral-900 group-hover:text-yellow-600 transition-colors" />;
      case 'Git / GitHub': return <GitBranch size={26} className="text-neutral-900 group-hover:text-orange-600 transition-colors" />;
      case 'Cybersecurity & Ethical Hacking': return <ShieldAlert size={26} className="text-neutral-900 group-hover:text-red-600 transition-colors" />;
      case 'Machine Learning & AI': return <BrainCircuit size={26} className="text-neutral-900 group-hover:text-purple-600 transition-colors" />;
      case 'ARCore (Augmented Reality)': return <Glasses size={26} className="text-neutral-900 group-hover:text-indigo-600 transition-colors" />;
      case 'Next.js': return <Layers size={26} className="text-neutral-900 transition-colors" />;
      case 'UI/UX Design (Figma)': return <Layout size={26} className="text-neutral-900 group-hover:text-pink-600 transition-colors" />;
      case 'Java': return <Cpu size={26} className="text-neutral-900 group-hover:text-red-500 transition-colors" />;
      case 'Firebase': return <Database size={26} className="text-neutral-900 group-hover:text-amber-600 transition-colors" />;
      case 'Video & Photo Editing': return <Film size={26} className="text-neutral-900 group-hover:text-indigo-600 transition-colors" />;
      default: return <FileCode size={26} className="text-neutral-900" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 md:px-16 bg-[#E2E2E2] text-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Box Heading */}
        <div className="mb-16 text-center">
          <h2 className="section-box-heading">
            SKILLS
          </h2>
        </div>

        <div className="space-y-16">
          
          {/* Section 1: USING NOW */}
          <div>
            <h3 className="font-extrabold text-sm sm:text-base tracking-widest uppercase mb-8 text-neutral-900">
              USING NOW:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
              {skills.usingNow.map((skill, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col items-center justify-center p-6 bg-neutral-200/60 hover:bg-white border border-neutral-300 hover:border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-default"
                >
                  <div className="mb-3 transform group-hover:scale-110 transition-transform">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-center text-black uppercase tracking-wider">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-neutral-500 mt-1 uppercase tracking-widest">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: LEARNING */}
          <div>
            <h3 className="font-extrabold text-sm sm:text-base tracking-widest uppercase mb-8 text-neutral-900">
              LEARNING:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
              {skills.learning.map((skill, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col items-center justify-center p-6 bg-neutral-200/60 hover:bg-white border border-neutral-300 hover:border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-default"
                >
                  <div className="mb-3 transform group-hover:scale-110 transition-transform">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-center text-black uppercase tracking-wider">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-neutral-500 mt-1 uppercase tracking-widest">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: DIFFERENT */}
          <div>
            <h3 className="font-extrabold text-sm sm:text-base tracking-widest uppercase mb-8 text-neutral-900">
              DIFFERENT:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.different.map((skill, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col items-center justify-center p-5 bg-neutral-200/60 hover:bg-white border border-neutral-300 hover:border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-default"
                >
                  <div className="mb-3 transform group-hover:scale-110 transition-transform">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="font-bold text-xs text-center text-black uppercase tracking-wider">
                    {skill.name}
                  </span>
                  <span className="text-[9px] text-neutral-500 mt-1 uppercase tracking-widest">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
