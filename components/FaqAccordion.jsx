'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: 'Do you offer custom software development solutions?',
    a: 'Yes. At ZYNITH TECHNOLOGY, custom software engineering is our core specialty. We do not use generic cookie-cutter templates. Our architects design tailored systems from scratch, addressing your precise workflow bottlenecks and positioning your company for sustainable growth.'
  },
  {
    q: 'How do you ensure the security and compliance of the software you develop?',
    a: 'Security is integral to our SDLC from Day 1. We practice DevSecOps, adhere to OWASP Top 10 standards, and frequently deliver platforms compliant with HIPAA, SOC 2, GDPR, and ISO 27001. We conduct automated static vulnerability analysis, regular peer reviews, and third-party penetration audits.'
  },
  {
    q: 'Can you help with both front-end and back-end development?',
    a: 'Absolutely. We are a full-stack digital engineering consultancy. Our frontend teams craft fluid, responsive web and mobile interfaces using React, Vue, Next.js, and WebGL, while our backend engineers build robust, microservices-driven REST/GraphQL APIs and distributed database systems in Node.js, Python, Go, and .NET.'
  },
  {
    q: 'What is your pricing and engagement structure?',
    a: 'We offer flexible engagement models tailored to your requirements: Time & Materials (ideal for evolving roadmaps and agile iterations), Dedicated Team augmentation (monthly dedicated senior FTEs), and Fixed-Price Milestones (for well-defined project scopes).'
  },
  {
    q: 'Can you integrate third-party APIs or legacy services into the software?',
    a: 'Yes, integration is one of our deepest competencies. We regularly connect payment gateways (Stripe, Adyen), CRM/ERP suites (Salesforce, SAP, NetSuite), clinical health records (Epic, Cerner), AI model endpoints (OpenAI, Anthropic), and proprietary on-premise mainframe systems via secure middleware.'
  },
  {
    q: 'What AI software development services do you offer?',
    a: 'Our AI engineering suite encompasses: custom Large Language Model (LLM) fine-tuning, Retrieval-Augmented Generation (RAG) architectures, computer vision and image segmentation, real-time natural language processing (NLP), predictive forecasting engines, and autonomous workflow agents.'
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border border-slate-200/80 shadow-accordion-shadow rounded-2xl bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'open' : ''}`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none bg-white text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-dark-blue-scopic">
                {item.q}
              </h3>
              <div className={`faq-icon shrink-0 size-8 rounded-full text-white bg-[linear-gradient(138.2deg,#009ee3_10.28%,#2246b6_95.81%)] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"/></svg>
              </div>
            </button>
            <div
              className={`faq-answer px-5 sm:px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed ${isOpen ? 'block' : 'hidden'}`}
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
