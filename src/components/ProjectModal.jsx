import React from 'react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#EBEBEB] border-4 border-black p-6 sm:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-black max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Tag / Category */}
        <div className="text-xs uppercase font-mono tracking-widest text-neutral-600 mb-2">
          {project.tags.join(' • ')}
        </div>

        {/* Project Name */}
        <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
          {project.name}
        </h3>

        {/* Subtitle / Event */}
        <p className="text-sm font-semibold uppercase tracking-wider text-neutral-600 mb-6">
          {project.headline}
        </p>

        {/* Full Description */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-800 mb-8 border-t border-b border-neutral-300 py-6">
          <p>{project.fullDesc}</p>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h4 className="font-extrabold text-xs uppercase tracking-widest text-black mb-3">
            Key Architectural Features:
          </h4>
          <ul className="space-y-2">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                <CheckCircle2 size={16} className="text-black shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-8">
          <h4 className="font-extrabold text-xs uppercase tracking-widest text-black mb-3">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="bg-black text-white px-3 py-1 text-xs font-mono tracking-wider font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-300">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white hover:bg-neutral-800 px-6 py-2.5 font-bold text-xs uppercase tracking-widest transition-all shadow-[3px_3px_0px_0px_rgba(100,100,100,0.5)]"
          >
            <span>Live Demo / Code</span>
            <ExternalLink size={14} />
          </a>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-black bg-white hover:bg-neutral-200 px-6 py-2.5 font-bold text-xs uppercase tracking-widest transition-all"
          >
            <Github size={14} />
            <span>GitHub Repo</span>
          </a>

          <button
            onClick={onClose}
            className="ml-auto text-xs uppercase tracking-widest font-bold underline hover:text-neutral-600"
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
}
