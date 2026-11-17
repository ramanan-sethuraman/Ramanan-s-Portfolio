import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const { projects } = portfolioData;

  // Filter projects according to tab
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'CODED') return project.category === 'coded' || project.category === 'both';
    if (activeFilter === 'DESIGNED') return project.category === 'designed' || project.category === 'both';
    return true;
  });

  // Clamp index if filtered list changes
  const currentIndex = Math.min(activeProjectIndex, Math.max(0, filteredProjects.length - 1));
  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveProjectIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="portfolio" className="py-24 px-6 sm:px-12 md:px-16 bg-[#E2E2E2] text-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Box Heading */}
        <div className="mb-14 text-center">
          <h2 className="section-box-heading">
            PORTFOLIO
          </h2>
        </div>

        {/* Filter Navigation Tabs (Exact replication of Image 4) */}
        <div className="w-full max-w-2xl mx-auto mb-16 border-b border-neutral-400">
          <div className="grid grid-cols-3 text-center">
            
            {/* ALL */}
            <button
              onClick={() => { setActiveFilter('ALL'); setActiveProjectIndex(0); }}
              className={`py-3 font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-colors relative ${
                activeFilter === 'ALL' ? 'text-black' : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              ALL
              {activeFilter === 'ALL' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-black"></span>
              )}
            </button>

            {/* CODED */}
            <button
              onClick={() => { setActiveFilter('CODED'); setActiveProjectIndex(0); }}
              className={`py-3 font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-colors relative ${
                activeFilter === 'CODED' ? 'text-black' : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              CODED
              {activeFilter === 'CODED' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-black"></span>
              )}
            </button>

            {/* DESIGNED */}
            <button
              onClick={() => { setActiveFilter('DESIGNED'); setActiveProjectIndex(0); }}
              className={`py-3 font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-colors relative ${
                activeFilter === 'DESIGNED' ? 'text-black' : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              DESIGNED
              {activeFilter === 'DESIGNED' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-black"></span>
              )}
            </button>

          </div>
        </div>

        {/* Active Project Card (Showcase view matching Image 4) */}
        {currentProject && (
          <div className="relative max-w-2xl mx-auto py-12 px-6 flex flex-col items-center text-center bg-neutral-200/40 border border-neutral-300 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] min-h-[340px] justify-center animate-fadeIn">
            
            {/* Prev / Next Arrows */}
            {filteredProjects.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 border-2 border-black bg-white hover:bg-black hover:text-white flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 border-2 border-black bg-white hover:bg-black hover:text-white flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Next project"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Sub-tag in italics */}
            <p className="italic text-xs sm:text-sm font-medium tracking-wider text-neutral-600 mb-3 lowercase">
              {currentProject.tags.join(', ')}
            </p>

            {/* Title */}
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black mb-3">
              {currentProject.name.toLowerCase()}.
            </h3>

            {/* Subhead / SIH badge if present */}
            <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-neutral-500 mb-4">
              {currentProject.headline}
            </span>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-700 max-w-md mb-8 leading-relaxed">
              {currentProject.shortDesc}
            </p>

            {/* Buttons: | DEMO |   | INFO | */}
            <div className="flex items-center space-x-6 sm:space-x-10">
              
              {/* DEMO */}
              <a
                href={currentProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pipe-button"
              >
                <span className="pipe font-thin text-xl">|</span>
                <span className="mx-2 font-bold tracking-widest text-xs sm:text-sm">DEMO</span>
                <span className="pipe font-thin text-xl">|</span>
              </a>

              {/* INFO */}
              <button
                onClick={() => setSelectedProject(currentProject)}
                className="pipe-button"
              >
                <span className="pipe font-thin text-xl">|</span>
                <span className="mx-2 font-bold tracking-widest text-xs sm:text-sm">INFO</span>
                <span className="pipe font-thin text-xl">|</span>
              </button>

            </div>

            {/* Project Pagination Indicator */}
            {filteredProjects.length > 1 && (
              <div className="flex items-center space-x-2 mt-8">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveProjectIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-none border border-black transition-all ${
                      idx === currentIndex ? 'bg-black w-6' : 'bg-transparent'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}

          </div>
        )}

        {/* Grid Preview of All Projects below */}
        <div className="mt-20">
          <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6 text-center">
            All Featured Projects ({filteredProjects.length})
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((proj, idx) => (
              <div 
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`p-6 bg-neutral-200/50 hover:bg-white border-2 transition-all cursor-pointer ${
                  proj.id === currentProject?.id ? 'border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'border-neutral-300 hover:border-black'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="italic text-xs text-neutral-600">{proj.tags.join(', ')}</span>
                  <span className="text-[10px] font-mono uppercase bg-black text-white px-2 py-0.5 font-bold">
                    {proj.headline.split('(')[0].trim()}
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-black mb-2">{proj.name}</h4>
                <p className="text-xs text-neutral-700 line-clamp-2 mb-4">{proj.shortDesc}</p>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-black">
                  <span>View Details & Tech Stack →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
