'use client';

import React, { useState } from 'react';

export default function ContactModal() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        closeModal();
        setSuccess(false);
      }, 2000);
    }, 1200);
  };

  const closeModal = () => {
    if (typeof window !== 'undefined') {
      const modal = document.getElementById('contact-modal');
      if (modal) modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  return (
    <div id="contact-modal" className="modal-backdrop fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="modal-box bg-white w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        {success ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-dark-blue-scopic">Thank You!</h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              A ZYNITH TECHNOLOGY senior solution architect will review your project brief and get in touch within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-2">
                <span>ZYNITH TECHNOLOGY</span> • <span>Fast Response</span>
              </div>
              <h3 className="text-2xl font-bold text-dark-blue-scopic">Let's Discuss Your Project</h3>
              <p className="text-sm text-slate-500">Provide a few details and our engineering leadership will contact you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                <input type="text" required placeholder="Alex Morgan" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Work Email *</label>
                  <input type="email" required placeholder="alex@company.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 123-4567" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Primary Area of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-white">
                  <option>Custom Software Development</option>
                  <option>Web Application Development</option>
                  <option>Mobile App Development</option>
                  <option>AI & Machine Learning</option>
                  <option>Cloud Computing & DevOps</option>
                  <option>UI/UX Design</option>
                  <option>Enterprise Software Solutions</option>
                  <option>QA Automation & Software Testing</option>
                  <option>Dedicated Development Teams</option>
                  <option>Digital Transformation Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Project Summary</label>
                <textarea rows="3" required placeholder="Describe your objectives, timeline, or current challenges..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-scopic hover:bg-emerald-600 text-white font-bold py-3.5 rounded-full text-base transition-all shadow-lg flex items-center justify-center cursor-pointer"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Sending...
                  </span>
                ) : (
                  "Let's Talk"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
