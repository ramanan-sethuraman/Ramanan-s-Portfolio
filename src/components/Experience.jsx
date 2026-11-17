import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, ShieldCheck, Code, Brain } from 'lucide-react';

export default function Experience() {
  const { internships } = portfolioData;

  const getRoleIcon = (role) => {
    if (role.includes('Cybersecurity')) return <ShieldCheck size={18} className="text-black" />;
    if (role.includes('Full Stack')) return <Code size={18} className="text-black" />;
    return <Brain size={18} className="text-black" />;
  };

  return (
    <section id="experience" className="py-24 px-6 sm:px-12 md:px-16 bg-[#E2E2E2] text-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Box Heading */}
        <div className="mb-16 text-center">
          <h2 className="section-box-heading">
            EXPERIENCE
          </h2>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {internships.map((item, index) => (
            <div 
              key={index}
              className="relative p-6 sm:p-8 bg-neutral-200/50 hover:bg-white border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 border border-black bg-white group-hover:bg-neutral-100 transition-colors">
                    {getRoleIcon(item.role)}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-black tracking-tight">
                      {item.role}
                    </h3>
                    <p className="font-semibold text-xs sm:text-sm text-neutral-700">
                      {item.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-600 bg-neutral-200 px-3 py-1 self-start sm:self-auto border border-neutral-300">
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-800 leading-relaxed border-t border-neutral-300 pt-4">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="font-bold text-black mt-1">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
