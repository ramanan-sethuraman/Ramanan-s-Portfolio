import React from 'react';
import { Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-[#0A0A0A] overflow-hidden flex flex-col justify-between">
      
      {/* Split Layout Container */}
      <div className="relative w-full min-h-screen flex flex-col lg:flex-row">
        
        {/* Left Side (Light Gray with Angled Cut) */}
        <div className="relative w-full lg:w-[58%] bg-[#E2E2E2] z-10 pt-32 pb-20 px-8 sm:px-14 lg:px-20 flex flex-col justify-center lg:[clip-path:polygon(0_0,100%_0,84%_100%,0%_100%)] min-h-[550px] lg:min-h-screen">
          
          <div className="max-w-xl">
            {/* Greeting */}
            <p className="text-xl sm:text-2xl font-normal text-neutral-800 tracking-wide mb-2">
              Hi, I am
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-black tracking-tight leading-none mb-4">
              {personal.name}
            </h1>

            {/* Subtitle / Role */}
            <p className="text-base sm:text-xl font-medium text-neutral-600 tracking-wide mb-12">
              {personal.title} / IT Undergrad
            </p>

            {/* Embossed Social Buttons (exact replica of Image 1) */}
            <div className="flex items-center space-x-4 mb-8">
              {/* Email */}
              <a 
                href={`mailto:${personal.email}`}
                className="embossed-social-btn text-black font-mono font-bold text-lg"
                title={`Email: ${personal.email}`}
              >
                @
              </a>

              {/* GitHub */}
              <a 
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="embossed-social-btn text-black"
                title="GitHub Profile"
              >
                <Github size={20} strokeWidth={2.2} />
              </a>

              {/* LinkedIn */}
              <a 
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="embossed-social-btn text-black font-bold text-sm tracking-tighter"
                title="LinkedIn Profile"
              >
                in
              </a>
            </div>

            {/* Quick Resume Download / Connect pill for convenience */}
            <div className="pt-2">
              <button 
                onClick={() => scrollTo('about')} 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-700 hover:text-black transition-colors"
              >
                <span>Explore my journey</span>
                <ArrowDown size={14} className="animate-bounce" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side (Deep Black with Portrait) */}
        <div className="relative w-full lg:w-[48%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 bg-[#0A0A0A] flex items-end justify-center lg:justify-end px-6 sm:px-12 lg:pr-20 pt-10 pb-0 lg:pt-0">
          
          <div className="relative w-full max-w-md lg:max-w-lg flex flex-col items-center">
            
            {/* Visual Portrait Container */}
            <div className="relative w-full aspect-[4/5] max-h-[620px] flex items-end justify-center overflow-hidden">
              
              {/* Real Portrait Photo */}
              <div className="relative w-full h-full flex items-end justify-center">
                <img 
                  src="/profile-cutout.png" 
                  alt="Ramanan S"
                  onError={(e) => { e.currentTarget.src = '/profile.jpg'; }}
                  className="w-full h-auto max-h-[600px] object-cover object-top select-none transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
