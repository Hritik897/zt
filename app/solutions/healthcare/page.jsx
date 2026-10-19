import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Healthcare & MedTech Software Solutions (HIPAA Compliant)',
  description: 'Custom healthcare software engineering by ZYNITH TECHNOLOGY. HIPAA-compliant telehealth, WebGL DICOM viewers, FDA 21 CFR Part 11 trial portals, and AI diagnostics.',
  keywords: [
    'Healthcare Software Development',
    'HIPAA Compliant Software',
    'Telehealth App Development',
    'DICOM PACS Viewer Development',
    'Medical Device Software Engineering'
  ],
  openGraph: {
    title: 'Healthcare & MedTech Software Solutions | ZYNITH TECHNOLOGY',
    description: 'Empowering clinical innovators with secure, HIPAA-compliant telehealth and medical imaging platforms.',
    url: 'https://zynithtechnology.com/solutions/healthcare',
  }
};

const healthPillars = [
  {
    title: '911 Emergency Telehealth Triage',
    desc: 'Real-time video consultation systems integrated directly into Computer Aided Dispatch (CAD) software, enabling non-critical caller diversion and rapid clinical routing.'
  },
  {
    title: 'Web-Based DICOM & 3D Imaging',
    desc: 'Zero-install WebGL and Three.js medical image viewers capable of rendering massive multi-slice CT/MRI scans in sub-second speed with clinical measurement annotations.'
  },
  {
    title: 'FDA 21 CFR Part 11 Trial Portals',
    desc: 'Clinical trial management systems featuring double-blind study randomization, immutable cryptographic audit trails, and strict electronic signature validation.'
  },
  {
    title: 'AI Clinical Decision Support',
    desc: 'Deep learning models for radiologic anomaly detection, cosmetic dental colorimetry calibration, and automated patient risk stratification.'
  }
];

export default function HealthcareSolutionsPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pt-28 pb-20">
      {/* Banner */}
      <div className="w-full bg-[#02122B] text-white py-16 px-5 relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-cyan-300 uppercase">
              HIPAA & MedTech Engineering
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Healthcare Software Solutions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Where patient outcomes meet engineering excellence. <strong className="text-white font-semibold">ZYNITH TECHNOLOGY</strong> builds secure, compliant, life-enhancing medical platforms for hospitals, clinics, and healthtech disruptors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-extrabold text-dark-blue-scopic mb-4">
              Pioneering Clinical Innovation With Absolute Security
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
              Healthcare software demands unmatched dependability. A single bug can impact diagnosis or delay emergency care. Our medical software division designs architectures with end-to-end encryption, strict role-based access, and certified HIPAA compliance.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              From our 911 emergency telehealth triage engine for MD Ally to our zero-footprint DICOM slice viewer for Mediphany, our software is trusted by thousands of clinicians across the United States.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/static/4f62e9ab3a19a3035725cb8d8d85695c/90089/medical.jpg"
              alt="Healthcare Solutions"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {healthPillars.map((p, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 sm:p-10 shadow-card-shadow border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-dark-blue-scopic mb-3">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#02122B] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Have a Healthcare Software Project?</h3>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Consult with our MedTech principal architect under a strict NDA.
          </p>
          <Link
            href="/contact-us"
            className="bg-green-scopic hover:bg-gradient-to-b hover:from-[#3cd2ac] hover:to-[#1fae84] text-white font-bold px-10 py-3.5 rounded-full text-base transition-all duration-300 shadow-lg inline-block"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
}
