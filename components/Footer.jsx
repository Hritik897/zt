import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="font-inter bg-dark-blue-scopic py-12 md:py-16 lg:py-20 w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-44 text-white">
      {/* 5-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
        
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block mb-4">
            <img alt="ZYNITH TECHNOLOGY" src="/assets/zynith-logo.svg" className="h-10 w-auto" />
          </Link>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
            ZYNITH TECHNOLOGY builds intelligent digital experiences, AI applications, and custom enterprise software, blending engineering precision with creative insight to drive sustainable business growth.
          </p>
          <div className="text-xs text-slate-400">
            Tagline: <span className="text-cyan-300 font-medium">Building Intelligent Digital Experiences</span>
          </div>
        </div>

        {/* Col 2: Services */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 tracking-wide">Services</h4>
          <ul className="text-xs sm:text-sm text-slate-300 space-y-2.5">
            <li><Link href="/services#custom-software" className="hover:text-yellow-scopic transition-colors">Custom Software Development</Link></li>
            <li><Link href="/services#web-app" className="hover:text-yellow-scopic transition-colors">Web App Development</Link></li>
            <li><Link href="/services#mobile-app" className="hover:text-yellow-scopic transition-colors">Mobile App Development</Link></li>
            <li><Link href="/services#ai-ml" className="hover:text-yellow-scopic transition-colors">AI & Machine Learning</Link></li>
            <li><Link href="/services#cloud-devops" className="hover:text-yellow-scopic transition-colors">Cloud Computing & DevOps</Link></li>
            <li><Link href="/services#ui-ux" className="hover:text-yellow-scopic transition-colors">UI/UX Design</Link></li>
            <li><Link href="/services#enterprise" className="hover:text-yellow-scopic transition-colors">Enterprise Solutions</Link></li>
            <li><Link href="/services#dedicated-teams" className="hover:text-yellow-scopic transition-colors">Dedicated Development Teams</Link></li>
          </ul>
        </div>

        {/* Col 3: Company */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 tracking-wide">Company</h4>
          <ul className="text-xs sm:text-sm text-slate-300 space-y-2.5">
            <li><Link href="/about-us" className="hover:text-yellow-scopic transition-colors">About Us</Link></li>
            <li><Link href="/portfolio" className="hover:text-yellow-scopic transition-colors">Portfolio & Work</Link></li>
            <li><Link href="/how-we-work" className="hover:text-yellow-scopic transition-colors">How We Work</Link></li>
            <li><Link href="/testimonials" className="hover:text-yellow-scopic transition-colors">Client Testimonials</Link></li>
            <li><Link href="/careers" className="hover:text-yellow-scopic transition-colors">Careers & Culture</Link></li>
            <li><Link href="/contact-us" className="hover:text-yellow-scopic transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 tracking-wide">Contact Us</h4>
          <ul className="text-xs sm:text-sm text-slate-300 space-y-3">
            <li className="flex items-start gap-2.5">
              <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span className="leading-relaxed">ZYNITH TECHNOLOGY Global HQ<br/>11 Apex Dr Ste 300A<br/>Marlborough, MA 01752 US</span>
            </li>
            <li className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:+15088863240" className="hover:text-yellow-scopic">+1 (508) 886-3240</a>
            </li>
            <li className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:contact@zynithtech.com" className="hover:text-yellow-scopic">contact@zynithtech.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Partner & Certification Badges Strip */}
      <div className="my-8 bg-white rounded-xl py-4 px-6 flex flex-wrap items-center justify-center gap-8 md:gap-14">
        <img alt="Teamwork Verified Partner" src="/static/teamwork-logo-0a7502523f054936e6bdd7016e12ce1a.svg" className="w-20 sm:w-24 object-contain" />
        <img alt="AWS Certified Partner" src="/static/aws-1-190df557f9928077bad72632cdce1100.svg" className="w-16 sm:w-20 object-contain" />
        <img alt="SOC2 Certified Security" src="/static/SOC_NonCPA_logo-da75533ab8f97127feb8759d205c9f98.webp" className="w-20 sm:w-24 object-contain" />
        <div className="flex items-center gap-2 text-slate-800 text-xs font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span>Clutch Top Global Developer 2026</span>
        </div>
      </div>

      {/* Sub-Footer Copyright & Legal */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 pt-4">
        <div>
          © 2026 ZYNITH TECHNOLOGY. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <div className="w-1 h-1 rounded-full bg-slate-600"></div>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Terms of Service</Link>
          <div className="w-1 h-1 rounded-full bg-slate-600"></div>
          <Link href="/cookies-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          <div className="w-1 h-1 rounded-full bg-slate-600"></div>
          <Link href="/contact-us" className="hover:text-white transition-colors">Security</Link>
        </div>
      </div>
    </footer>
  );
}
