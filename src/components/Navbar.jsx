import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 px-6 sm:px-12 md:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Monogram Logo (RS styled like the reference TG logo) */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
          className="group flex items-center gap-1 cursor-pointer"
        >
          <div className="relative w-12 h-12 flex items-center justify-center border-2 border-black bg-black text-white font-extrabold tracking-tighter text-xl rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-105">
            <span className="font-mono text-2xl">RS</span>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-neutral-400 border border-black"></div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-10">
          <button 
            onClick={() => scrollTo('about')} 
            className="text-white hover:text-neutral-300 font-semibold tracking-wider text-sm transition-colors uppercase"
          >
            About me
          </button>
          <button 
            onClick={() => scrollTo('skills')} 
            className="text-white hover:text-neutral-300 font-semibold tracking-wider text-sm transition-colors uppercase"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollTo('portfolio')} 
            className="text-white hover:text-neutral-300 font-semibold tracking-wider text-sm transition-colors uppercase"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollTo('experience')} 
            className="text-white hover:text-neutral-300 font-semibold tracking-wider text-sm transition-colors uppercase"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="bg-white text-black hover:bg-neutral-200 px-7 py-2.5 rounded-full font-bold text-xs tracking-widest uppercase transition-all shadow-md hover:scale-105 active:scale-95"
          >
            CONTACT ME
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded border border-black bg-white text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-black text-white rounded-lg p-6 shadow-2xl border border-neutral-800 animate-fadeIn">
          <div className="flex flex-col space-y-4 text-center">
            <button 
              onClick={() => scrollTo('about')} 
              className="py-2 text-neutral-300 hover:text-white font-medium uppercase tracking-wider text-sm"
            >
              About me
            </button>
            <button 
              onClick={() => scrollTo('skills')} 
              className="py-2 text-neutral-300 hover:text-white font-medium uppercase tracking-wider text-sm"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollTo('portfolio')} 
              className="py-2 text-neutral-300 hover:text-white font-medium uppercase tracking-wider text-sm"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollTo('experience')} 
              className="py-2 text-neutral-300 hover:text-white font-medium uppercase tracking-wider text-sm"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="mt-2 bg-white text-black py-3 rounded-full font-bold text-xs tracking-widest uppercase"
            >
              CONTACT ME
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
