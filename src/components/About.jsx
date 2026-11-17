import React, { useState } from 'react';
import { Palette, Code2, Wrench, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, services, education } = portfolioData;
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="py-24 px-6 sm:px-12 md:px-16 bg-[#E2E2E2] text-black">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Box Heading */}
        <div className="mb-14 text-center">
          <h2 className="section-box-heading">
            ABOUT ME
          </h2>
        </div>

        {/* Narrative Description */}
        <div className="max-w-3xl text-center space-y-6 text-neutral-800 text-sm sm:text-base leading-relaxed tracking-wide">
          <p>
            {personal.aboutBio1}
          </p>
          <p>
            {personal.aboutBio2}
          </p>
        </div>

        {/* | MORE | Button */}
        <div className="my-12">
          <button 
            onClick={() => setShowMore(!showMore)}
            className="pipe-button group"
            aria-expanded={showMore}
          >
            <span className="pipe font-thin text-xl">|</span>
            <span className="mx-2 font-bold tracking-widest text-sm flex items-center gap-1.5">
              {showMore ? 'LESS' : 'MORE'}
              {showMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
            <span className="pipe font-thin text-xl">|</span>
          </button>
        </div>

        {/* Expandable Section (Education & Career Objective) */}
        {showMore && (
          <div className="w-full max-w-4xl bg-neutral-100/90 border-2 border-black p-8 sm:p-10 mb-16 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-fadeIn">
            <h3 className="text-xl font-extrabold tracking-widest uppercase mb-6 flex items-center gap-2">
              <GraduationCap size={24} />
              Education & Academic Track
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {education.map((item, idx) => (
                <div key={idx} className="border-l-2 border-black pl-4">
                  <span className="text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase">
                    {item.period}
                  </span>
                  <h4 className="font-bold text-base text-black mt-1">
                    {item.institution}
                  </h4>
                  <p className="text-sm font-semibold text-neutral-700 mt-0.5">
                    {item.degree}
                  </p>
                  <p className="text-xs font-bold text-black mt-1 inline-block bg-neutral-200 px-2 py-0.5 rounded">
                    {item.score}
                  </p>
                  <p className="text-xs text-neutral-600 mt-2">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-300 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
                Career Objective
              </h4>
              <p className="text-sm text-neutral-800 leading-relaxed italic">
                "{personal.objective}"
              </p>
            </div>
          </div>
        )}

        {/* Three Service Pillars (matching Image 2) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mt-6">
          
          {/* 1. Design */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              {/* Wireframe background symbol */}
              <div className="w-16 h-16 rounded-full border border-neutral-300 flex items-center justify-center bg-neutral-200/50 group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm">
                <Palette size={28} strokeWidth={1.75} />
              </div>
            </div>
            <h3 className="font-extrabold text-lg tracking-widest uppercase mb-3 text-black">
              DESIGN
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-xs">
              {services[0].description}
            </p>
          </div>

          {/* 2. Development */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full border border-neutral-300 flex items-center justify-center bg-neutral-200/50 group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm">
                <Code2 size={28} strokeWidth={1.75} />
              </div>
            </div>
            <h3 className="font-extrabold text-lg tracking-widest uppercase mb-3 text-black">
              DEVELOPMENT
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-xs">
              {services[1].description}
            </p>
          </div>

          {/* 3. Maintenance */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full border border-neutral-300 flex items-center justify-center bg-neutral-200/50 group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm">
                <Wrench size={28} strokeWidth={1.75} />
              </div>
            </div>
            <h3 className="font-extrabold text-lg tracking-widest uppercase mb-3 text-black">
              MAINTENANCE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-xs">
              {services[2].description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
