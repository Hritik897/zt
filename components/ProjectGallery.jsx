'use client';

import React, { useState } from 'react';

const caseStudiesData = {
  'md-ally': {
    title: 'MD Ally — Emergency 911 Telehealth Workflow Platform',
    category: 'Healthcare & Emergency Services',
    desc: 'An advanced 911 clinical emergency ecosystem providing non-emergency diversion and real-time telehealth clinical triage, reducing ambulance burden and emergency room wait times by over 38%.',
    challenge: 'Integrating into heterogeneous county dispatch software (CAD systems) with sub-second latency and absolute data compliance.',
    solution: 'ZYNITH TECHNOLOGY architected an ultra-resilient distributed message bus with instant clinical video handoff and automated state reporting.',
    metric: '38% reduction in non-critical emergency transports; 100% HIPAA audit compliance.',
    technologies: ['React.js', 'Node.js', 'AWS Cloud', 'HIPAA Compliant WebRTC', 'PostgreSQL', 'Microservices'],
    image: '/static/md-ally-new-75b67c05461a186e8ad66ce00b769896.webp',
    filter: 'health custom'
  },
  'codeaid': {
    title: 'Codeaid — Automated Developer Skill Testing Engine',
    category: 'EdTech & HR Enterprise Systems',
    desc: 'An automated testing system that validates developers’ technical prowess across 20+ programming languages through containerized sandboxes.',
    challenge: 'Executing untrusted user code safely at scale with microsecond timeout enforcement.',
    solution: 'Constructed an isolated, ephemeral multi-tenant sandbox mesh orchestrated on Kubernetes with automated static and runtime verification.',
    metric: 'Evaluated 500,000+ candidates with 99.99% sandbox isolation reliability.',
    technologies: ['Docker', 'Kubernetes', 'Python', 'Go', 'React', 'TypeScript', 'Redis Queue'],
    image: '/static/codeaid-new-3d3d79dcb28ca88d9c36345dd1e6bd5f.webp',
    filter: 'custom ai'
  },
  'mediphany': {
    title: 'Mediphany — Cloud PACS & Radiology Diagnostics',
    category: 'Medical Imaging & AI',
    desc: 'Cloud-native medical imaging portal delivering interactive DICOM visualization, real-time doctor collaboration, and AI anomaly detection directly in standard web browsers.',
    challenge: 'Rendering high-resolution 3D volumetric CT/MRI scans at 60 FPS on low-power client machines.',
    solution: 'Engineered custom GPU-accelerated WebAssembly rendering pipelines alongside secure cloud streaming.',
    metric: 'Decreased diagnostic review lag by 65% for 120+ clinical partner sites.',
    technologies: ['Cornerstone.js', 'WebGL', 'Python AI / PyTorch', 'AWS S3', 'Terraform', 'WebAssembly'],
    image: '/static/mediphany-new-63647b1eedd5451afebd628ee0cece34.webp',
    filter: 'health ai'
  },
  'shadewave': {
    title: 'ShadeWave — Dental Colorimetry & Computer Vision',
    category: 'Dental & 3D Imaging',
    desc: 'A revolutionary dental aesthetic matching system converting smartphone dental photography into laboratory-grade porcelain shade maps.',
    challenge: 'Eliminating flash distortion, ambient lighting bias, and saliva reflection from color measurements.',
    solution: 'Developed custom calibration targets and neural illumination normalization algorithms to guarantee tooth shade accuracy.',
    metric: 'Over 250,000 successful restorations delivered worldwide.',
    technologies: ['Computer Vision (OpenCV)', 'CNNs', 'Flutter', 'FastAPI', 'AWS'],
    image: '/static/shadewave-new-d1b7a18ddff2990e7742e7f7a72edf70.webp',
    filter: 'ai health'
  },
  'akillion': {
    title: 'Akillion — Algorithmic Financial Intelligence Portal',
    category: 'FinTech & Real-Time Trading',
    desc: 'Enterprise financial market analytics platform parsing multi-exchange market depth, institutional order flows, and machine learning sentiment indicators.',
    challenge: 'Handling bursts of 100,000+ financial events per second without UI stutter or memory leaks.',
    solution: 'Implemented high-speed ring buffers, Web Workers data parsing, and WebGL financial chart rendering.',
    metric: 'Sub-5ms tick-to-trade rendering for global proprietary trading desks.',
    technologies: ['React', 'WebSocket Engine', 'C++', 'Python', 'TimescaleDB', 'Apache Kafka'],
    image: '/static/Akillion-a884273317be9e8f62d3ba681edd405c.webp',
    filter: 'fintech custom'
  },
  'ecs-clinical': {
    title: 'ECS Clinical — Regulatory Clinical Trial Management',
    category: 'Life Sciences & Enterprise Software',
    desc: 'Comprehensive 21 CFR Part 11 compliant clinical trial orchestration platform managing participant consent, lab tracking, and FDA data export pipelines.',
    challenge: 'Ensuring immutable audit logging and zero data loss during multi-site international drug trials.',
    solution: 'Delivered an immutable ledger architecture with role-based cryptographic verification and real-time electronic signatures.',
    metric: 'Accelerated phase-II clinical trial submission turnaround by 4.5 months.',
    technologies: ['Angular', '.NET Core', 'Microsoft Azure', 'SQL Server AlwaysOn', 'DocuSign API'],
    image: '/static/ecs-clinical-new-2d9317286faef0d9b48bcb943553a656.webp',
    filter: 'health custom'
  },
  'homegrown-nursery': {
    title: 'Homegrown Nursery — Omnichannel Logistics ERP',
    category: 'E-Commerce & Supply Chain',
    desc: 'Omnichannel agricultural commerce engine featuring automated batch inventory synchronization, climate logistics, and multi-warehouse routing.',
    challenge: 'Managing high-velocity perishable stock with localized climate requirements across regional fulfillment centers.',
    solution: 'Custom microservice order management system with automated inventory allocation and IoT climate sensors integration.',
    metric: '300% surge in order capacity with 99.8% order accuracy.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe API', 'Docker'],
    image: '/static/homegrown-nursery-new-eb7e8591e6ac706001bf228506ab425e.webp',
    filter: 'custom'
  },
  'find-uniquely-u': {
    title: 'FindUniquelyU — AI E-Commerce Personalization Engine',
    category: 'Retail & Consumer AI',
    desc: 'Intelligent shopping assistant utilizing machine learning recommendations to boost conversions and reduce returns.',
    challenge: 'Generating real-time contextual recommendations for diverse customer style preferences.',
    solution: 'Deployed collaborative filtering and visual similarity embeddings with sub-50ms inference time.',
    metric: '42% lift in average order value and 28% drop in product returns.',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'React', 'AWS SageMaker'],
    image: '/static/find-uniquely-u-new-3d107b317bcf6128b873d4b00bb3d397.webp',
    filter: 'ai'
  }
};

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const openStudy = (key) => {
    const data = caseStudiesData[key];
    if (!data) return;

    if (typeof window !== 'undefined') {
      const modal = document.getElementById('case-study-modal');
      if (modal) {
        document.getElementById('cs-modal-title').textContent = data.title;
        document.getElementById('cs-modal-category').textContent = data.category;
        document.getElementById('cs-modal-desc').textContent = data.desc;
        document.getElementById('cs-modal-challenge').textContent = data.challenge;
        document.getElementById('cs-modal-solution').textContent = data.solution;
        document.getElementById('cs-modal-metric').textContent = data.metric;

        const techContainer = document.getElementById('cs-modal-tech');
        if (techContainer) {
          techContainer.innerHTML = '';
          data.technologies.forEach((t) => {
            const badge = document.createElement('span');
            badge.className = 'px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold';
            badge.textContent = t;
            techContainer.appendChild(badge);
          });
        }

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }
  };

  const projectKeys = Object.keys(caseStudiesData);
  const filteredKeys = projectKeys.filter((k) => {
    if (activeFilter === 'all') return true;
    return caseStudiesData[k].filter.includes(activeFilter);
  });

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        <button
          onClick={() => setActiveFilter('all')}
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
        >
          All Projects
        </button>
        <button
          onClick={() => setActiveFilter('ai')}
          className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
        >
          AI & Machine Learning
        </button>
        <button
          onClick={() => setActiveFilter('custom')}
          className={`filter-btn ${activeFilter === 'custom' ? 'active' : ''}`}
        >
          Custom Software
        </button>
        <button
          onClick={() => setActiveFilter('health')}
          className={`filter-btn ${activeFilter === 'health' ? 'active' : ''}`}
        >
          Healthcare & MedTech
        </button>
        <button
          onClick={() => setActiveFilter('fintech')}
          className={`filter-btn ${activeFilter === 'fintech' ? 'active' : ''}`}
        >
          FinTech & Trading
        </button>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredKeys.map((key) => {
          const item = caseStudiesData[key];
          return (
            <div
              key={key}
              className="flex flex-col bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-lg transition-all"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  alt={item.title}
                  src={item.image}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-blue-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
                  {item.category.split('&')[0]}
                </span>
              </div>
              <h3 className="text-dark-blue-scopic text-lg text-center font-bold mb-2">
                {item.title.split('—')[0].trim()}
              </h3>
              <p className="text-xs text-slate-600 text-center mb-5 flex-grow leading-relaxed">
                {item.desc}
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => openStudy(key)}
                  className="bg-transparent border border-green-scopic-dark text-green-scopic-dark px-6 py-2 rounded-full text-xs font-semibold hover:bg-green-scopic hover:text-white transition duration-300 cursor-pointer"
                >
                  Read Case Study
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
