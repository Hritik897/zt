'use client';

import React, { useRef } from 'react';
import Link from 'next/link';

export default function ServicesCarousel() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.solutions-card');
      const width = card ? card.offsetWidth + 24 : 340;
      sliderRef.current.scrollBy({ left: -width, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.solutions-card');
      const width = card ? card.offsetWidth + 24 : 340;
      sliderRef.current.scrollBy({ left: width, behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      desc: 'Transform your unique ideas into tailored software solutions, expertly engineered to address challenges across diverse industries and deliver results.',
      icon: '/static/image-1-18cf23f6aa2a7f33e6520ca15b651ca0.svg',
      gradient: 'from-blue-600 to-cyan-400'
    },
    {
      id: 'web-app',
      title: 'Web Application Development',
      desc: 'Build responsive, lightning-fast web applications and multi-tenant SaaS platforms with modern architectures like React, Next.js, and Node.js that captivate and retain users.',
      icon: '/static/image-2-98def466ffad6bb96a80307b6c6de166.svg',
      gradient: 'from-indigo-600 to-sky-400'
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      desc: 'Deliver seamless native and cross-platform mobile experiences on iOS and Android with Flutter and React Native, engineered for high engagement and offline resiliency.',
      icon: '/static/image-1-18cf23f6aa2a7f33e6520ca15b651ca0.svg',
      gradient: 'from-emerald-500 to-teal-300'
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      desc: 'Harness predictive intelligence, NLP, generative models, and computer vision to automate workflows, discover unseen insights, and create self-optimizing digital products.',
      icon: '/static/image-4-63db7d350e3cd67f28ca8b33dcf1cef2.svg',
      gradient: 'from-purple-600 to-pink-400'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud Computing & DevOps',
      desc: 'Architect high-availability cloud infrastructure on AWS, Azure, and Google Cloud with automated CI/CD pipelines, container orchestration, and multi-region failovers.',
      icon: '/static/aws-1-190df557f9928077bad72632cdce1100.svg',
      gradient: 'from-sky-600 to-blue-400'
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      desc: 'Design engaging, intuitive interfaces rooted in rigorous user research, interactive wireframing, usability testing, and beautiful, cohesive design systems.',
      icon: '/static/image-2-98def466ffad6bb96a80307b6c6de166.svg',
      gradient: 'from-pink-600 to-rose-400'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Software Solutions',
      desc: 'Build enterprise-grade architectures that integrate smoothly into legacy environments, featuring bank-grade encryption, regulatory compliance, and ERP orchestration.',
      icon: '/static/image-1-18cf23f6aa2a7f33e6520ca15b651ca0.svg',
      gradient: 'from-amber-600 to-yellow-400'
    },
    {
      id: 'qa-testing',
      title: 'QA Automation & Testing',
      desc: 'Ensure zero downtime and flawless reliability with comprehensive test suites: automated regression, unit testing, performance load benchmarks, and penetration testing.',
      icon: '/static/image-4-63db7d350e3cd67f28ca8b33dcf1cef2.svg',
      gradient: 'from-teal-600 to-green-400'
    },
    {
      id: 'dedicated-teams',
      title: 'Dedicated Development Teams',
      desc: 'Scale your technical capacity rapidly with pre-vetted, top-tier engineering talent managed under agile principles, acting as a seamless extension of your in-house team.',
      icon: '/static/image-1-18cf23f6aa2a7f33e6520ca15b651ca0.svg',
      gradient: 'from-blue-700 to-indigo-500'
    },
    {
      id: 'consulting',
      title: 'Digital Transformation Consulting',
      desc: 'Reinvent legacy processes, modernize outdated systems, and harness data-driven decision making with strategic technology roadmaps designed for long-term dominance.',
      icon: '/static/image-2-98def466ffad6bb96a80307b6c6de166.svg',
      gradient: 'from-cyan-600 to-emerald-400'
    }
  ];

  return (
    <div className="w-full">
      {/* Carousel Header Controls */}
      <div className="flex items-center justify-between mb-6 px-2">
        <div className="text-sm font-semibold text-slate-500">
          Showing <span className="text-blue-600 font-bold">10 Specialized Services</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={scrollLeft}
            className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition shadow-sm cursor-pointer"
            aria-label="Previous service"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button
            onClick={scrollRight}
            className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition shadow-sm cursor-pointer"
            aria-label="Next service"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      {/* Slider Track */}
      <div ref={sliderRef} className="solutions-slider-wrapper pt-8 pb-8">
        {services.map((s) => (
          <div key={s.id} className="solutions-card">
            <div className="bg-white px-6 py-8 rounded-2xl shadow-card-shadow h-full flex flex-col justify-between border border-slate-100">
              <div>
                <div className="flex justify-center -mt-16 mb-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${s.gradient} p-0.5 shadow-lg flex items-center justify-center`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center p-3">
                      <img alt={s.title} className="size-10 object-contain" src={s.icon} />
                    </div>
                  </div>
                </div>
                <h3 className="text-dark-blue-scopic text-xl text-center font-bold mb-3 mt-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 text-center mb-6 leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="flex justify-center items-end">
                <Link
                  href={`/services#${s.id}`}
                  className="bg-white border text-green-scopic-dark border-green-scopic-dark px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-green-scopic hover:text-white transition duration-300"
                >
                  Explore more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
