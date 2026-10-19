'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'services' | 'technologies' | 'solutions' | 'portfolio' | 'resources' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const openContactModal = (e) => {
    if (e) e.preventDefault();
    setActiveMenu(null);
    if (typeof window !== 'undefined') {
      const modal = document.getElementById('contact-modal');
      if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }
  };

  return (
    <>
      <header
        className={`zt-main-header ${scrolled ? 'scrolled' : ''}`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="ZYNITH TECHNOLOGY Home">
          <img
            src="/assets/zynith-logo.svg"
            alt="ZYNITH TECHNOLOGY Logo"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="zt-mobile-toggle-btn"
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="zt-desktop-nav">
          <ul className="zt-nav-list">
            
            {/* 1. Services ▾ */}
            <li
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`zt-nav-btn ${activeMenu === 'services' ? 'active' : ''}`}
              >
                Services
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </li>

            {/* 2. Technologies ▾ */}
            <li
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('technologies')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`zt-nav-btn ${activeMenu === 'technologies' ? 'active' : ''}`}
              >
                Technologies
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'technologies' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </li>

            {/* 3. Solutions ▾ */}
            <li
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`zt-nav-btn ${activeMenu === 'solutions' ? 'active' : ''}`}
              >
                Solutions
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </li>

            {/* 4. Careers (Plain link) */}
            <li className="py-2">
              <Link
                href="/careers"
                className="zt-nav-link"
              >
                Careers
              </Link>
            </li>

            {/* 5. Portfolio ▾ */}
            <li
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('portfolio')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/portfolio"
                className={`zt-nav-btn ${activeMenu === 'portfolio' ? 'active' : ''}`}
              >
                Portfolio
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </li>

            {/* 6. Resources ▾ */}
            <li
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`zt-nav-btn ${activeMenu === 'resources' ? 'active' : ''}`}
              >
                Resources
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </li>

            {/* 7. Partnerships (Plain link) */}
            <li className="py-2">
              <Link
                href="/contact-us"
                className="zt-nav-link"
              >
                Partnerships
              </Link>
            </li>

            {/* 8. Button Contact Us */}
            <li>
              <Link
                href="/contact-us"
                onClick={openContactModal}
                className="zt-header-contact-btn"
              >
                CONTACT US
              </Link>
            </li>

            {/* 9. Language Switcher (EN) */}
            <li className="relative group py-2">
              <button className="zt-nav-btn" aria-label="Select Language">
                <span className="mr-1">EN</span>
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="absolute right-0 top-full pt-2 w-32 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                <div className="bg-white rounded-xl shadow-xl py-2 flex flex-col text-slate-800 text-sm">
                  <span className="px-4 py-1.5 font-bold text-blue-600 bg-slate-50 cursor-default">EN</span>
                  <span className="px-4 py-1.5 hover:bg-slate-100 cursor-pointer text-slate-600">한국어</span>
                </div>
              </div>
            </li>

          </ul>
        </nav>

        {/* =========================================================================
            EXACT MEGA MENU DROPDOWNS (Matching User's Screenshots)
            ========================================================================= */}
        {activeMenu && (
          <div
            className="zt-mega-dropdown-wrapper"
            onMouseEnter={() => handleMouseEnter(activeMenu)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="zt-mega-card">

              {/* ---------------- 1. SERVICES DROPDOWN (Screenshot 1) ---------------- */}
              {activeMenu === 'services' && (
                <div className="zt-mega-grid-4">
                  {/* Col 1 */}
                  <div>
                    <Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-column-title hover:text-blue-600 block transition-colors">
                      Software Development
                    </Link>
                    <ul className="space-y-1.5 text-[14px]">
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Custom Software Development</Link></li>
                      <li><Link href="/staff-augmentation" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Software Outsourcing</Link></li>
                      <li><Link href="/how-we-work" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Software Product Consulting</Link></li>
                      <li><Link href="/web-development" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Web Development</Link></li>
                      <li><Link href="/mobile-development" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Mobile Development</Link></li>
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Software Product Development Services</Link></li>
                      <li><Link href="/ai-development-services" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">AI Development</Link></li>
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">MVP Development</Link></li>
                      <li><Link href="/ai-development-services" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">AI Consulting</Link></li>
                      <li><Link href="/cloud-services" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Cloud Services</Link></li>
                      <li><Link href="/design" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Design</Link></li>
                    </ul>
                  </div>

                  {/* Col 2 */}
                  <div>
                    <h4 className="zt-mega-column-title">
                      Digital Marketing
                    </h4>
                    <ul className="space-y-1.5 text-[14px]">
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">SEO Services</Link></li>
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Google Ads</Link></li>
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Social Media Marketing</Link></li>
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Lead Generation Services</Link></li>
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Dispensary Marketing Services</Link></li>
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Generative Engine Optimization Services</Link></li>
                    </ul>
                  </div>

                  {/* Col 3 */}
                  <div>
                    <h4 className="zt-mega-column-title">
                      Application Development
                    </h4>
                    <ul className="space-y-1.5 text-[14px]">
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Desktop Development</Link></li>
                      <li><Link href="/web-development" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Web Application Development</Link></li>
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Custom Application Development</Link></li>
                      <li><Link href="/how-we-work" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Application Development Consulting Services</Link></li>
                    </ul>
                  </div>

                  {/* Col 4 (CTA Box) */}
                  <div className="flex flex-col justify-start">
                    <h3 className="text-2xl font-black text-[#001f3e] leading-snug mb-3">
                      Let's collaborate to bring your vision to life!
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      Share your idea and our team will reach out to discuss it and provide you with an estimate.
                    </p>
                    <div>
                      <button
                        onClick={openContactModal}
                        className="zt-dropdown-cta-btn"
                      >
                        CONTACT US
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- 2. TECHNOLOGIES DROPDOWN (Screenshot 2) ---------------- */}
              {activeMenu === 'technologies' && (
                <div className="zt-mega-grid-4">
                  {/* Col 1 */}
                  <div>
                    <ul className="space-y-1.5 text-[14px]">
                      <li><Link href="/web-development" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">PHP Development</Link></li>
                      <li><Link href="/web-development" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Laravel Development</Link></li>
                      <li><Link href="/web-development" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Node.js Development</Link></li>
                      <li><Link href="/mobile-development" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">React Native App Development</Link></li>
                      <li><Link href="/cloud-services" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">AWS Solutions</Link></li>
                      <li><Link href="/web-development" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Replit Development</Link></li>
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Blockchain Development</Link></li>
                    </ul>
                  </div>

                  {/* Col 2 */}
                  <div>
                    <h4 className="zt-mega-column-title">
                      AI Development
                    </h4>
                    <ul className="space-y-1.5 text-[14px]">
                      <li><Link href="/ai-development-services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">AI Integration Services</Link></li>
                      <li><Link href="/ai-development-services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">AI Agent Development</Link></li>
                      <li><Link href="/ai-development-services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">AI Chatbot Development Services</Link></li>
                      <li><Link href="/ai-development-services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">ChatGPT Integration</Link></li>
                      <li><Link href="/ai-development-services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Machine Learning Development</Link></li>
                      <li><Link href="/ai-development-services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Machine Learning Consulting</Link></li>
                      <li><Link href="/ai-development-services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Generative AI Development</Link></li>
                      <li><Link href="/ai-development-services" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">LLM Development</Link></li>
                    </ul>
                  </div>

                  {/* Col 3: Clean spacing */}
                  <div></div>

                  {/* Col 4 (CTA Box) */}
                  <div className="flex flex-col justify-start">
                    <h3 className="text-2xl font-black text-[#001f3e] leading-snug mb-3">
                      Let's collaborate to bring your vision to life!
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      Share your idea and our team will reach out to discuss it and provide you with an estimate.
                    </p>
                    <div>
                      <button
                        onClick={openContactModal}
                        className="zt-dropdown-cta-btn"
                      >
                        CONTACT US
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- 3. SOLUTIONS DROPDOWN (Screenshot 3) ---------------- */}
              {activeMenu === 'solutions' && (
                <div className="zt-mega-grid-4">
                  {/* Col 1 */}
                  <div>
                    <ul className="space-y-1.5 text-[14px]">
                      <li><Link href="/solutions/education" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Education</Link></li>
                      <li><Link href="/solutions/manufacturing" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Manufacturing</Link></li>
                      <li><Link href="/portfolio" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Media and Entertainment</Link></li>
                      <li><Link href="/design" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Design</Link></li>
                      <li><Link href="/portfolio" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Real Estate</Link></li>
                      <li><Link href="/portfolio" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Digital Signage</Link></li>
                      <li><Link href="/solutions/finance" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Finance</Link></li>
                      <li><Link href="/solutions/trading" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Trading</Link></li>
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">CRM</Link></li>
                      <li><Link href="/web-development" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">SaaS</Link></li>
                      <li><Link href="/services" onClick={() => setActiveMenu(null)} className="zt-mega-link-bold">Legacy Software Modernization</Link></li>
                    </ul>
                  </div>

                  {/* Col 2 */}
                  <div>
                    <h4 className="zt-mega-column-title">
                      Healthcare
                    </h4>
                    <ul className="space-y-1.5 text-[14px]">
                      <li><Link href="/solutions/healthcare" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Healthcare Apps</Link></li>
                      <li><Link href="/solutions/healthcare" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">mHealth Development Services</Link></li>
                      <li><Link href="/solutions/healthcare" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Medical Imaging Software</Link></li>
                      <li><Link href="/solutions/healthcare" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">EHR Software</Link></li>
                      <li><Link href="/solutions/healthcare" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Dental Modeling Software</Link></li>
                      <li><Link href="/solutions/healthcare" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Dental Imaging Software</Link></li>
                      <li><Link href="/solutions/healthcare" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Telemedicine Software</Link></li>
                      <li><Link href="/solutions/healthcare" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Telehealth</Link></li>
                      <li><Link href="/solutions/healthcare" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Teleradiology</Link></li>
                      <li><Link href="/solutions/healthcare" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Health & Fitness</Link></li>
                    </ul>
                  </div>

                  {/* Col 3 */}
                  <div>
                    <h4 className="zt-mega-column-title">
                      E-Commerce
                    </h4>
                    <ul className="space-y-1.5 text-[14px]">
                      <li><Link href="/web-development" onClick={() => setActiveMenu(null)} className="zt-mega-link-regular">Marketplace Development</Link></li>
                    </ul>
                  </div>

                  {/* Col 4 (CTA Box) */}
                  <div className="flex flex-col justify-start">
                    <h3 className="text-2xl font-black text-[#001f3e] leading-snug mb-3">
                      Let's collaborate to bring your vision to life!
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      Share your idea and our team will reach out to discuss it and provide you with an estimate.
                    </p>
                    <div>
                      <button
                        onClick={openContactModal}
                        className="zt-dropdown-cta-btn"
                      >
                        CONTACT US
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- 4. PORTFOLIO DROPDOWN (Screenshot 4) ---------------- */}
              {activeMenu === 'portfolio' && (
                <div className="zt-portfolio-grid">
                  {/* Left Rocket Box */}
                  <div className="relative rounded-2xl overflow-hidden min-h-[360px] p-8 flex flex-col justify-between text-white shadow-xl">
                    <img
                      src="/static/c8e5ecccc16a0453e382163efd3706a7/0d3c9/rocket-background.jpg"
                      alt="Rocket Launch"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02122B]/95 via-[#02122B]/60 to-transparent"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-black leading-snug mb-3 text-white">
                        Ready to Level Up Your Impact with Advanced Tech Innovation?
                      </h3>
                      <p className="text-xs text-white/85 leading-relaxed">
                        Share your idea and our team will reach out to discuss it and provide you with an estimate.
                      </p>
                    </div>
                    <div className="relative z-10 pt-4">
                      <button
                        onClick={openContactModal}
                        className="zt-dropdown-cta-btn"
                      >
                        CONTACT US
                      </button>
                    </div>
                  </div>

                  {/* Right Portfolio Categories (3 columns x 2 rows) */}
                  <div className="zt-portfolio-cards-grid">
                    <div>
                      <Link href="/web-development" onClick={() => setActiveMenu(null)} className="block group">
                        <h4 className="font-bold text-base text-[#001f3e] group-hover:text-blue-600 mb-1.5 transition-colors">
                          Web Application
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          ZYNITH TECHNOLOGY has worked on a number of web-based applications, showcasing our proficiency in web design, front-end, and back-end development.
                        </p>
                      </Link>
                    </div>

                    <div>
                      <Link href="/services" onClick={() => setActiveMenu(null)} className="block group">
                        <h4 className="font-bold text-base text-[#001f3e] group-hover:text-blue-600 mb-1.5 transition-colors">
                          Marketing Portfolio
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Dive into our captivating digital marketing portfolio, an immersive showcase of strategic campaigns and remarkable results.
                        </p>
                      </Link>
                    </div>

                    <div>
                      <Link href="/design" onClick={() => setActiveMenu(null)} className="block group">
                        <h4 className="font-bold text-base text-[#001f3e] group-hover:text-blue-600 mb-1.5 transition-colors">
                          Design Portfolio
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Discover how we've applied tailored UX/UI design solutions to a range of clients, providing interface development, wireframes, and much more.
                        </p>
                      </Link>
                    </div>

                    <div>
                      <Link href="/ai-development-services" onClick={() => setActiveMenu(null)} className="block group">
                        <h4 className="font-bold text-base text-[#001f3e] group-hover:text-blue-600 mb-1.5 transition-colors">
                          AI Development
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          We build innovative AI solutions that optimize processes, drive automation, and create new growth opportunities for businesses.
                        </p>
                      </Link>
                    </div>

                    <div>
                      <Link href="/services" onClick={() => setActiveMenu(null)} className="block group">
                        <h4 className="font-bold text-base text-[#001f3e] group-hover:text-blue-600 mb-1.5 transition-colors">
                          Desktop Application
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Delve into our diverse array of desktop app projects, each meticulously tailored to cater to the unique needs of various industries.
                        </p>
                      </Link>
                    </div>

                    <div>
                      <Link href="/mobile-development" onClick={() => setActiveMenu(null)} className="block group">
                        <h4 className="font-bold text-base text-[#001f3e] group-hover:text-blue-600 mb-1.5 transition-colors">
                          Mobile Application
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Check out our previous mobile app projects that we made from scratch, including native, hybrid, and cross-platform apps.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- 5. RESOURCES DROPDOWN (Screenshot 5) ---------------- */}
              {activeMenu === 'resources' && (
                <div className="zt-mega-grid-3 py-2">
                  <div>
                    <Link href="/about-us" onClick={() => setActiveMenu(null)} className="block group">
                      <h4 className="font-bold text-base text-[#001f3e] group-hover:text-blue-600 mb-2 transition-colors">
                        Blog
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Explore our blog to learn insights on marketing and software, where we discuss complex topics to improve our readers' understanding.
                      </p>
                    </Link>
                  </div>

                  <div>
                    <Link href="/portfolio" onClick={() => setActiveMenu(null)} className="block group">
                      <h4 className="font-bold text-base text-[#001f3e] group-hover:text-blue-600 mb-2 transition-colors">
                        Case Studies
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Check out real-life examples of how our custom solutions have helped our clients achieve their specific goals.
                      </p>
                    </Link>
                  </div>

                  <div>
                    <Link href="/about-us" onClick={() => setActiveMenu(null)} className="block group">
                      <h4 className="font-bold text-base text-[#001f3e] group-hover:text-blue-600 mb-2 transition-colors">
                        Guides & E-books
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Unlock a wealth of knowledge: industry best practices, and invaluable insights through our comprehensive guides.
                      </p>
                    </Link>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}
      </header>



      {/* Mobile Navigation Drawer */}
      <div
        className={`drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`mobile-drawer p-6 flex flex-col justify-between ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <img alt="ZYNITH TECHNOLOGY" src="/assets/zynith-logo.svg" className="h-9 w-auto" />
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/70 hover:text-white" aria-label="Close menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <nav className="flex flex-col gap-3 text-white text-base">
            {/* Services mobile */}
            <div>
              <button
                onClick={() => setExpandedMobileSection(expandedMobileSection === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between py-2 font-semibold"
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${expandedMobileSection === 'services' ? 'rotate-180' : ''}`} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2"/></svg>
              </button>
              {expandedMobileSection === 'services' && (
                <div className="pl-4 flex flex-col gap-2 pt-1 pb-2 text-sm text-white/80 border-l border-white/10 ml-2">
                  <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">Custom Software Development</Link>
                  <Link href="/web-development" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">Web Development</Link>
                  <Link href="/mobile-development" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">Mobile Development</Link>
                  <Link href="/ai-development-services" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">AI Development</Link>
                  <Link href="/cloud-services" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">Cloud Services</Link>
                  <Link href="/design" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">Design</Link>
                </div>
              )}
            </div>

            {/* Technologies mobile */}
            <div>
              <button
                onClick={() => setExpandedMobileSection(expandedMobileSection === 'technologies' ? null : 'technologies')}
                className="w-full flex items-center justify-between py-2 font-semibold"
              >
                <span>Technologies</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${expandedMobileSection === 'technologies' ? 'rotate-180' : ''}`} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2"/></svg>
              </button>
              {expandedMobileSection === 'technologies' && (
                <div className="pl-4 flex flex-col gap-2 pt-1 pb-2 text-sm text-white/80 border-l border-white/10 ml-2">
                  <Link href="/web-development" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">PHP & Laravel</Link>
                  <Link href="/web-development" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">Node.js Development</Link>
                  <Link href="/mobile-development" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">React Native & Flutter</Link>
                  <Link href="/ai-development-services" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">AI & Machine Learning</Link>
                  <Link href="/cloud-services" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">AWS Solutions</Link>
                </div>
              )}
            </div>

            {/* Solutions mobile */}
            <div>
              <button
                onClick={() => setExpandedMobileSection(expandedMobileSection === 'solutions' ? null : 'solutions')}
                className="w-full flex items-center justify-between py-2 font-semibold"
              >
                <span>Solutions</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${expandedMobileSection === 'solutions' ? 'rotate-180' : ''}`} viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2"/></svg>
              </button>
              {expandedMobileSection === 'solutions' && (
                <div className="pl-4 flex flex-col gap-2 pt-1 pb-2 text-sm text-white/80 border-l border-white/10 ml-2">
                  <Link href="/solutions/healthcare" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">Healthcare</Link>
                  <Link href="/solutions/finance" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">Finance</Link>
                  <Link href="/solutions/trading" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">Trading</Link>
                  <Link href="/solutions/manufacturing" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">Manufacturing</Link>
                  <Link href="/solutions/education" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-yellow-scopic">Education</Link>
                </div>
              )}
            </div>

            <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="py-2 font-semibold hover:text-yellow-scopic">Careers</Link>
            <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="py-2 font-semibold hover:text-yellow-scopic">Portfolio</Link>
            <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className="py-2 font-semibold hover:text-yellow-scopic">Resources</Link>
            <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="py-2 font-semibold hover:text-yellow-scopic">Partnerships</Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <button
            onClick={(e) => {
              setMobileMenuOpen(false);
              openContactModal(e);
            }}
            className="w-full text-center bg-green-scopic text-white font-bold py-3.5 rounded-full shadow-lg uppercase"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </>
  );
}
