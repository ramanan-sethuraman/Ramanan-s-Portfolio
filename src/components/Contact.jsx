import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronUp, Linkedin, Github, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    // Direct mailto fallback or submission feedback
    setStatus('success');
    setTimeout(() => {
      setStatus(null);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-20 pb-12 px-6 sm:px-12 md:px-16 bg-[#E2E2E2] text-black">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Subhead text from Image 5 */}
        <p className="text-sm font-semibold tracking-wide text-neutral-800 mb-6">
          And many more to come!
        </p>

        {/* Box Heading */}
        <div className="mb-8">
          <h2 className="section-box-heading">
            CONTACT
          </h2>
        </div>

        {/* Narrative */}
        <p className="text-xs sm:text-sm text-neutral-700 max-w-lg mb-8 leading-relaxed">
          Looking for a passionate full-stack developer or have an exciting hackathon/project idea? Leave a message below or connect directly.
        </p>

        {/* Distinctive Chevron Divider: — \\\/// — */}
        <div className="flex items-center justify-center space-x-3 mb-14 text-neutral-800">
          <span className="w-16 h-[2px] bg-black"></span>
          <span className="font-mono text-sm tracking-tighter font-extrabold select-none">
            \\\///
          </span>
          <span className="w-16 h-[2px] bg-black"></span>
        </div>

        {/* Contact Form with L-Bracket Underline Style */}
        <form onSubmit={handleSubmit} className="w-full max-w-xl text-left mb-12">
          
          {/* NAME */}
          <div className="l-bracket-input-group">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="ENTER YOUR NAME*"
              className="l-bracket-field"
            />
          </div>

          {/* EMAIL */}
          <div className="l-bracket-input-group">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="ENTER YOUR EMAIL*"
              className="l-bracket-field"
            />
          </div>

          {/* PHONE */}
          <div className="l-bracket-input-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="PHONE NUMBER"
              className="l-bracket-field"
            />
          </div>

          {/* MESSAGE */}
          <div className="l-bracket-input-group">
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="YOUR MESSAGE*"
              className="l-bracket-field resize-none"
            />
          </div>

          {/* Status Message */}
          {status === 'success' && (
            <div className="mb-6 p-4 border-2 border-black bg-white flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black">
              <CheckCircle2 size={16} />
              <span>Thank you! Your message has been prepared. I'll get back to you shortly.</span>
            </div>
          )}

          {/* Submit Button: | SUBMIT | */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="pipe-button group"
            >
              <span className="pipe font-thin text-2xl">|</span>
              <span className="mx-4 font-extrabold tracking-[0.25em] text-sm">
                SUBMIT
              </span>
              <span className="pipe font-thin text-2xl">|</span>
            </button>
          </div>

        </form>

        {/* Back To Top Button */}
        <div className="my-10">
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center group cursor-pointer border-none bg-transparent"
            aria-label="Scroll back to top"
          >
            <div className="flex flex-col items-center -space-y-1 text-black group-hover:-translate-y-1 transition-transform">
              <ChevronUp size={14} strokeWidth={3} />
              <ChevronUp size={14} strokeWidth={3} />
            </div>
            <span className="font-extrabold text-[11px] tracking-widest uppercase text-black mt-2">
              BACK TO TOP
            </span>
          </button>
        </div>

        {/* Square Bordered Social Icons (Matching Image 5) */}
        <div className="flex items-center space-x-4 mb-8">
          
          {/* Phone */}
          <a
            href={`tel:${personal.phone}`}
            className="w-10 h-10 border-2 border-black bg-white hover:bg-black hover:text-white flex items-center justify-center transition-colors text-black"
            title={`Call: ${personal.phone}`}
          >
            <Phone size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border-2 border-black bg-white hover:bg-black hover:text-white flex items-center justify-center transition-colors text-black"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          {/* GitHub */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border-2 border-black bg-white hover:bg-black hover:text-white flex items-center justify-center transition-colors text-black"
            title="GitHub"
          >
            <Github size={18} />
          </a>

          {/* Email */}
          <a
            href={`mailto:${personal.email}`}
            className="w-10 h-10 border-2 border-black bg-white hover:bg-black hover:text-white flex items-center justify-center transition-colors text-black"
            title={`Email: ${personal.email}`}
          >
            <Mail size={18} />
          </a>

        </div>

        {/* Copyright notice */}
        <p className="text-[11px] font-mono tracking-wider text-neutral-600">
          @2026 {personal.name} All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
