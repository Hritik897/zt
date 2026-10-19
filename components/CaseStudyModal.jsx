'use client';

import React from 'react';

export default function CaseStudyModal() {
  const closeModal = () => {
    if (typeof window !== 'undefined') {
      const modal = document.getElementById('case-study-modal');
      if (modal) modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  const openContact = () => {
    closeModal();
    if (typeof window !== 'undefined') {
      const contactModal = document.getElementById('contact-modal');
      if (contactModal) contactModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <div id="case-study-modal" className="modal-backdrop fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="modal-box bg-white w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={closeModal} className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition" aria-label="Close modal">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <span id="cs-modal-category" className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">Healthcare & MedTech</span>
        <h3 id="cs-modal-title" className="text-2xl font-bold text-dark-blue-scopic mb-4">Project Overview</h3>
        <p id="cs-modal-desc" className="text-sm text-slate-600 leading-relaxed mb-6">Case study summary.</p>

        <div className="space-y-4 mb-6">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">The Engineering Challenge</h4>
            <p id="cs-modal-challenge" className="text-sm text-slate-700"></p>
          </div>
          <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
            <h4 className="text-xs font-bold uppercase text-blue-500 mb-1">ZYNITH TECHNOLOGY Solution</h4>
            <p id="cs-modal-solution" className="text-sm text-slate-800"></p>
          </div>
          <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
            <h4 className="text-xs font-bold uppercase text-emerald-600 mb-1">Key Impact & Metrics</h4>
            <p id="cs-modal-metric" className="text-sm font-semibold text-emerald-800"></p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase text-slate-500 mb-2">Technology Stack</h4>
          <div id="cs-modal-tech" className="flex flex-wrap gap-2"></div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
          <button onClick={closeModal} className="px-5 py-2.5 rounded-full text-slate-600 hover:bg-slate-100 text-sm font-semibold">Close</button>
          <button onClick={openContact} className="px-6 py-2.5 rounded-full bg-green-scopic hover:bg-emerald-600 text-white text-sm font-bold shadow-md">
            Build Similar Solution
          </button>
        </div>
      </div>
    </div>
  );
}
